#!/usr/bin/env node


import { readFileSync, existsSync, appendFileSync } from 'fs';
import { join, resolve } from 'path';
import { identity } from './identity-memory.js';

const DIST_PATH = resolve(import.meta.dirname, '../../dist');
const LOG_PATH = join(import.meta.dirname, 'monitor.log');

const timestamp = new Date().toISOString();
const issues = [];
let checks = 0;

function check(name, condition, detail = '') {
  checks++;
  if (!condition) {
    issues.push({ name, detail });
  }
}

console.log(`\n🔄 Monitor Run — ${timestamp}\n`);

check('Build exists', existsSync(join(DIST_PATH, 'index.html')));

if (existsSync(join(DIST_PATH, 'index.html'))) {
  const html = readFileSync(join(DIST_PATH, 'index.html'), 'utf-8');

  check('Title present', html.includes('<title>') && !html.includes('<title></title>'));
  check('Title has name', html.includes('Abdullahi Ibrahim'));
  check('Meta description', html.includes('name="description"'));
  check('Canonical URL', html.includes('rel="canonical"'));
  
  check('OG title', html.includes('og:title'));
  check('OG description', html.includes('og:description'));
  check('OG image', html.includes('og:image'));
  
  const jsonLdCount = (html.match(/application\/ld\+json/g) || []).length;
  check('JSON-LD present', jsonLdCount >= 3, `Found ${jsonLdCount} blocks, expected 3+`);
  check('Person schema', html.includes('"@type":"Person"') || html.includes('"@type": "Person"'));
  
  check('Name in HTML', html.includes(identity.name));
  check('Alternate name in HTML', html.includes(identity.alternateName));
  check('GitHub in sameAs', html.includes('github.com/Abdullahi-Ai'));
  // sameAs must contain only verified profiles (see identity-memory.js).
  for (const prof of identity.profiles.filter(p => !p.verified)) {
    check(`Unverified ${prof.platform} not in structured data`, !html.includes(`"${prof.url}"`), 'unverified profile appears in sameAs');
  }
}

check('robots.txt', existsSync(join(DIST_PATH, 'robots.txt')));
check('sitemap.xml', existsSync(join(DIST_PATH, 'sitemap.xml')));
check('favicon.svg', existsSync(join(DIST_PATH, 'favicon.svg')));
check('profile.png', existsSync(join(DIST_PATH, 'profile.png')));

if (existsSync(join(DIST_PATH, 'sitemap.xml'))) {
  const sitemap = readFileSync(join(DIST_PATH, 'sitemap.xml'), 'utf-8');
  check('Sitemap has URL', sitemap.includes(identity.website.url));
  check('Sitemap valid XML', sitemap.startsWith('<?xml'));
}

if (existsSync(join(DIST_PATH, 'robots.txt'))) {
  const robots = readFileSync(join(DIST_PATH, 'robots.txt'), 'utf-8');
  check('robots.txt allows crawling', robots.includes('Allow: /'));
  check('robots.txt references sitemap', robots.toLowerCase().includes('sitemap:'));
}

console.log(`  Checks: ${checks}`);
console.log(`  Issues: ${issues.length}`);

if (issues.length > 0) {
  console.log('\n⚠️  Issues found:');
  for (const issue of issues) {
    console.log(`  ❌ ${issue.name}${issue.detail ? ` — ${issue.detail}` : ''}`);
  }
} else {
  console.log('\n✅ All monitoring checks passed.');
}

const logEntry = `${timestamp} | checks=${checks} | issues=${issues.length} | ${issues.map(i => i.name).join(', ') || 'none'}\n`;
appendFileSync(LOG_PATH, logEntry);

console.log(`\n📝 Logged to ${LOG_PATH}\n`);

if (issues.length > 0) process.exit(1);
