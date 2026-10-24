#!/usr/bin/env node


import { readFileSync, existsSync } from 'fs';
import { join, resolve } from 'path';
import { identity } from './identity-memory.js';

const DIST_PATH = process.argv.includes('--dist-path')
  ? resolve(process.argv[process.argv.indexOf('--dist-path') + 1])
  : resolve(import.meta.dirname, '../../dist');

console.log(`\n🔍 SEO Validator — ${DIST_PATH}\n`);

if (!existsSync(join(DIST_PATH, 'index.html'))) {
  console.error('❌ dist/index.html not found. Run `npm run build` first.');
  process.exit(1);
}

const html = readFileSync(join(DIST_PATH, 'index.html'), 'utf-8');
let errors = 0;
let warnings = 0;

function error(msg) { console.log(`  ❌ ERROR: ${msg}`); errors++; }
function warning(msg) { console.log(`  ⚠️  WARN:  ${msg}`); warnings++; }
function pass(msg) { console.log(`  ✅ PASS:  ${msg}`); }

console.log('━━━ Structured Data (JSON-LD) ━━━━━━━━━━━━━━━━━━━━━━━━━');

const jsonLdPattern = /<script\s+type="application\/ld\+json">\s*([\s\S]*?)\s*<\/script>/g;
const schemas = [];
let match;
while ((match = jsonLdPattern.exec(html)) !== null) {
  try {
    schemas.push(JSON.parse(match[1]));
  } catch (e) {
    error(`Invalid JSON-LD: ${e.message}`);
  }
}

if (schemas.length === 0) {
  error('No JSON-LD structured data found');
} else {
  pass(`${schemas.length} JSON-LD block(s) found`);
}

const person = schemas.find(s => s['@type'] === 'Person');
if (!person) {
  error('Missing Person schema');
} else {
  pass('Person schema present');

  const requiredPersonFields = ['name', 'url', 'description', 'jobTitle'];
  for (const field of requiredPersonFields) {
    if (person[field]) pass(`Person.${field}: "${String(person[field]).substring(0, 50)}"`);
    else error(`Person.${field} is missing`);
  }

  const recommendedFields = ['alternateName', 'image', 'sameAs', 'knowsAbout'];
  for (const field of recommendedFields) {
    if (person[field]) pass(`Person.${field} present`);
    else warning(`Person.${field} is recommended but missing`);
  }

  if (Array.isArray(person.sameAs)) {
    pass(`Person.sameAs has ${person.sameAs.length} profile(s)`);
    for (const url of person.sameAs) {
      if (!url.startsWith('https://')) warning(`sameAs URL should use HTTPS: ${url}`);
    }
  }

  if (person.name !== identity.name) {
    error(`Person.name "${person.name}" doesn't match identity "${identity.name}"`);
  }

  if (person['@context'] !== 'https://schema.org') {
    error('Person @context should be "https://schema.org"');
  }
}

const website = schemas.find(s => s['@type'] === 'WebSite');
if (!website) {
  warning('Missing WebSite schema (recommended)');
} else {
  pass('WebSite schema present');
  if (!website.name) error('WebSite.name is missing');
  if (!website.url) error('WebSite.url is missing');
}

const profilePage = schemas.find(s => s['@type'] === 'ProfilePage');
if (!profilePage) {
  warning('Missing ProfilePage schema');
} else {
  pass('ProfilePage schema present');
}

console.log('\n━━━ Meta Tags ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');

const titleMatch = html.match(/<title>(.*?)<\/title>/);
if (!titleMatch || !titleMatch[1]) {
  error('Page title is missing');
} else {
  const title = titleMatch[1];
  if (title.length < 30) warning(`Title too short (${title.length} chars, aim for 30-60)`);
  else if (title.length > 65) warning(`Title may be truncated in search results (${title.length} chars)`);
  else pass(`Title length OK (${title.length} chars)`);

  if (!title.includes(identity.name)) warning('Title should include your full name');
  else pass('Title includes full name');
}

const descMatch = html.match(/<meta\s+name="description"\s+content="(.*?)"/);
if (!descMatch) {
  error('Meta description is missing');
} else {
  const desc = descMatch[1];
  if (desc.length < 100) warning(`Description too short (${desc.length} chars, aim for 120-155)`);
  else if (desc.length > 160) warning(`Description may be truncated (${desc.length} chars)`);
  else pass(`Description length OK (${desc.length} chars)`);
}

const canonicalMatch = html.match(/<link\s+rel="canonical"\s+href="(.*?)"/);
if (!canonicalMatch) {
  error('Canonical URL is missing');
} else {
  const canonical = canonicalMatch[1];
  if (canonical.endsWith('/')) pass(`Canonical URL: ${canonical}`);
  else warning('Canonical URL should end with /');
}

console.log('\n━━━ Open Graph ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');

const requiredOG = ['og:type', 'og:url', 'og:title', 'og:description', 'og:image'];
for (const tag of requiredOG) {
  const regex = new RegExp(`<meta\\s+property="${tag}"\\s+content="(.*?)"`);
  const m = html.match(regex);
  if (m) pass(`${tag}: ${m[1].substring(0, 50)}`);
  else error(`${tag} is missing`);
}

console.log('\n━━━ Twitter Cards ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');

const requiredTwitter = ['twitter:card', 'twitter:title', 'twitter:description'];
for (const tag of requiredTwitter) {
  const regex = new RegExp(`<meta\\s+name="${tag}"\\s+content="(.*?)"`);
  const m = html.match(regex);
  if (m) pass(`${tag}: ${m[1].substring(0, 50)}`);
  else error(`${tag} is missing`);
}

console.log('\n━━━ Files & Configuration ━━━━━━━━━━━━━━━━━━━━━━━━━━━━');

const requiredFiles = ['robots.txt', 'sitemap.xml', 'favicon.svg'];
for (const file of requiredFiles) {
  if (existsSync(join(DIST_PATH, file))) pass(`${file} exists`);
  else error(`${file} is missing`);
}

if (existsSync(join(DIST_PATH, 'sitemap.xml'))) {
  const sitemap = readFileSync(join(DIST_PATH, 'sitemap.xml'), 'utf-8');
  if (sitemap.includes(identity.website.url)) pass('Sitemap references canonical URL');
  else warning('Sitemap URL doesn\'t match canonical URL');
}

console.log('\n━━━ HTML Quality ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');

if (html.includes('lang="en"')) pass('HTML lang attribute set');
else error('HTML lang attribute missing');

if (html.includes('charset="UTF-8"') || html.includes('charset="utf-8"')) pass('UTF-8 charset declared');
else error('UTF-8 charset not declared');

if (html.includes('width=device-width')) pass('Viewport meta tag present');
else error('Viewport meta tag missing');

console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
console.log(`\n📊 Results: ${errors} errors, ${warnings} warnings`);

if (errors > 0) {
  console.log('❌ Validation failed — fix the errors above.');
  process.exit(1);
} else if (warnings > 0) {
  console.log('⚠️  Validation passed with warnings.');
} else {
  console.log('✅ All validations passed!');
}
console.log('');
