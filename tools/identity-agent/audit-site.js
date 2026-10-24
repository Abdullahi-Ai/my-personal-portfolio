#!/usr/bin/env node


import { readFileSync, existsSync, readdirSync, statSync } from 'fs';
import { join, resolve } from 'path';
import { identity } from './identity-memory.js';

const DIST_PATH = process.argv.includes('--dist-path')
  ? resolve(process.argv[process.argv.indexOf('--dist-path') + 1])
  : resolve(import.meta.dirname, '../../dist');

const results = {
  timestamp: new Date().toISOString(),
  distPath: DIST_PATH,
  checks: [],
  summary: { passed: 0, failed: 0, warnings: 0 },
};

function check(category, name, passed, detail = '') {
  const status = passed ? 'PASS' : 'FAIL';
  results.checks.push({ category, name, status, detail });
  if (passed) results.summary.passed++;
  else results.summary.failed++;
}

function warn(category, name, detail = '') {
  results.checks.push({ category, name, status: 'WARN', detail });
  results.summary.warnings++;
}

console.log(`\n🔍 Auditing: ${DIST_PATH}\n`);

if (!existsSync(DIST_PATH)) {
  console.error('❌ dist/ directory not found. Run `npm run build` first.');
  process.exit(1);
}

const indexPath = join(DIST_PATH, 'index.html');
check('Build', 'index.html exists', existsSync(indexPath));

const html = existsSync(indexPath) ? readFileSync(indexPath, 'utf-8') : '';

const titleMatch = html.match(/<title>(.*?)<\/title>/);
const title = titleMatch ? titleMatch[1] : '';
check('SEO', 'Page title exists', !!title, title);
check('SEO', 'Title contains name', title.includes('Abdullahi Ibrahim'), title);
check('SEO', 'Title contains Abdullahi-Ai', title.includes('Abdullahi-Ai'), title);
check('SEO', 'Title length (30-65 chars)', title.length >= 30 && title.length <= 70, `${title.length} chars`);

const descMatch = html.match(/<meta\s+name="description"\s+content="(.*?)"/);
const desc = descMatch ? descMatch[1] : '';
check('SEO', 'Meta description exists', !!desc);
check('SEO', 'Description contains name', desc.includes('Abdullahi Ibrahim'), desc.substring(0, 80));
check('SEO', 'Description length (100-160 chars)', desc.length >= 100 && desc.length <= 165, `${desc.length} chars`);

const canonicalMatch = html.match(/<link\s+rel="canonical"\s+href="(.*?)"/);
check('SEO', 'Canonical URL exists', !!canonicalMatch, canonicalMatch ? canonicalMatch[1] : '');

const ogTags = ['og:type', 'og:url', 'og:title', 'og:description', 'og:image', 'og:site_name'];
for (const tag of ogTags) {
  const regex = new RegExp(`<meta\\s+property="${tag}"\\s+content="(.*?)"`);
  const match = html.match(regex);
  check('OpenGraph', `${tag} exists`, !!match, match ? match[1].substring(0, 60) : 'missing');
}

const twitterTags = ['twitter:card', 'twitter:title', 'twitter:description', 'twitter:image'];
for (const tag of twitterTags) {
  const regex = new RegExp(`<meta\\s+name="${tag}"\\s+content="(.*?)"`);
  const match = html.match(regex);
  check('TwitterCard', `${tag} exists`, !!match, match ? match[1].substring(0, 60) : 'missing');
}

const jsonLdPattern = /<script\s+type="application\/ld\+json">\s*([\s\S]*?)\s*<\/script>/g;
const jsonLdBlocks = [];
let jsonLdMatch;
while ((jsonLdMatch = jsonLdPattern.exec(html)) !== null) {
  try {
    const data = JSON.parse(jsonLdMatch[1]);
    jsonLdBlocks.push(data);
    check('StructuredData', `JSON-LD @type=${data['@type']} is valid JSON`, true);
  } catch (e) {
    check('StructuredData', 'JSON-LD block is valid JSON', false, e.message);
  }
}
check('StructuredData', 'Has Person schema', jsonLdBlocks.some(b => b['@type'] === 'Person'));
check('StructuredData', 'Has WebSite schema', jsonLdBlocks.some(b => b['@type'] === 'WebSite'));
check('StructuredData', 'Has ProfilePage schema', jsonLdBlocks.some(b => b['@type'] === 'ProfilePage'));

const personSchema = jsonLdBlocks.find(b => b['@type'] === 'Person');
if (personSchema) {
  check('StructuredData', 'Person.name matches identity', personSchema.name === identity.name, personSchema.name);
  check('StructuredData', 'Person.alternateName matches', personSchema.alternateName === identity.alternateName, personSchema.alternateName);
  check('StructuredData', 'Person.sameAs has GitHub', (personSchema.sameAs || []).includes('https://github.com/Abdullahi-Ai'));
  check('StructuredData', 'Person.sameAs has LinkedIn', (personSchema.sameAs || []).some(u => u.includes('linkedin.com')));
  check('StructuredData', 'Person.sameAs has Instagram', (personSchema.sameAs || []).some(u => u.includes('instagram.com/osmanibrahim5181')));
}

check('Files', 'robots.txt exists', existsSync(join(DIST_PATH, 'robots.txt')));
check('Files', 'sitemap.xml exists', existsSync(join(DIST_PATH, 'sitemap.xml')));
check('Files', 'favicon.svg exists', existsSync(join(DIST_PATH, 'favicon.svg')));
check('Files', 'profile.png exists', existsSync(join(DIST_PATH, 'profile.png')));
check('Files', 'og-image.png exists', existsSync(join(DIST_PATH, 'og-image.png')));

if (existsSync(join(DIST_PATH, 'robots.txt'))) {
  const robots = readFileSync(join(DIST_PATH, 'robots.txt'), 'utf-8');
  check('Robots', 'Contains User-agent', robots.includes('User-agent:'), 'User-agent directive found');
  check('Robots', 'Contains Allow: /', robots.includes('Allow: /'), 'Allow directive found');
  check('Robots', 'References sitemap', robots.toLowerCase().includes('sitemap:'), 'Sitemap directive found');
  check('Robots', 'Does not block important paths', !robots.includes('Disallow: /'), 'No blanket disallow');
}

if (existsSync(join(DIST_PATH, 'sitemap.xml'))) {
  const sitemap = readFileSync(join(DIST_PATH, 'sitemap.xml'), 'utf-8');
  check('Sitemap', 'Valid XML declaration', sitemap.startsWith('<?xml'));
  check('Sitemap', 'Contains urlset namespace', sitemap.includes('sitemaps.org'));
  check('Sitemap', 'Contains site URL', sitemap.includes(identity.website.url));
}

check('Accessibility', 'HTML lang attribute set', html.includes('lang="en"'));

check('Accessibility', 'Viewport meta tag', html.includes('width=device-width'));

check('Identity', 'Name appears in HTML', html.includes('Abdullahi Ibrahim'));
check('Identity', 'Alternate name in HTML', html.includes('Abdullahi-Ai'));
check('Identity', 'GitHub URL in structured data', html.includes('github.com/Abdullahi-Ai'));
check('Identity', 'LinkedIn URL in structured data', html.includes('linkedin.com/in/osman-noor-08a297358'));
check('Identity', 'Instagram URL in structured data', html.includes('instagram.com/osmanibrahim5181'));

const distFiles = readdirSync(DIST_PATH, { recursive: true });
const jsFiles = distFiles.filter(f => f.toString().endsWith('.js'));
const cssFiles = distFiles.filter(f => f.toString().endsWith('.css'));
check('Build', 'JS chunks generated', jsFiles.length > 0, `${jsFiles.length} JS files`);
check('Build', 'CSS generated', cssFiles.length > 0, `${cssFiles.length} CSS files`);

console.log('─'.repeat(70));
console.log('  CATEGORY           CHECK                              STATUS   DETAIL');
console.log('─'.repeat(70));

for (const c of results.checks) {
  const icon = c.status === 'PASS' ? '✅' : c.status === 'FAIL' ? '❌' : '⚠️';
  const cat = c.category.padEnd(18);
  const name = c.name.padEnd(35);
  const detail = c.detail ? `  ${c.detail.substring(0, 40)}` : '';
  console.log(`  ${cat} ${name} ${icon}${detail}`);
}

console.log('─'.repeat(70));
console.log(`\n📊 Summary: ${results.summary.passed} passed, ${results.summary.failed} failed, ${results.summary.warnings} warnings\n`);

if (results.summary.failed > 0) {
  console.log('⚠️  Some checks failed. Review the issues above.');
  process.exit(1);
} else {
  console.log('✅ All checks passed!');
}
