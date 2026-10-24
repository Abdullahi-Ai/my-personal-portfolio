#!/usr/bin/env node
// Compares the DEPLOYED site with the local production build.
// Read-only: performs plain HTTP GET requests, no authentication, no scraping of search results.
// Usage: node live-check.js [--url https://example.com/]

import { readFileSync, existsSync, writeFileSync, mkdirSync } from 'fs';
import { join, resolve } from 'path';
import { identity } from './identity-memory.js';

const argUrl = process.argv.includes('--url') ? process.argv[process.argv.indexOf('--url') + 1] : null;
const BASE = (argUrl || identity.website.url).replace(/\/?$/, '/');
const DIST = resolve(import.meta.dirname, '../../dist');
const OUT = join(import.meta.dirname, 'reports');

const checks = [];
const add = (name, ok, detail = '') => {
  checks.push({ name, ok, detail });
  console.log(`  ${ok ? '✅' : '❌'} ${name}${detail ? ' — ' + detail : ''}`);
};
const get = async (path) => {
  const res = await fetch(BASE + path, { redirect: 'follow', headers: { 'user-agent': 'identity-agent-live-check/1.0' } });
  return { status: res.status, type: res.headers.get('content-type') || '', body: await res.text() };
};
const titleOf = (html) => (html.match(/<title>(.*?)<\/title>/s) || [])[1];

console.log(`\n🌐 Live check — ${BASE}\n`);
try {
  const home = await get('');
  add('Homepage returns HTTP 200', home.status === 200, String(home.status));

  const liveTitle = titleOf(home.body);
  const localTitle = existsSync(join(DIST, 'index.html')) ? titleOf(readFileSync(join(DIST, 'index.html'), 'utf-8')) : null;
  add('Deployed title matches local build', !!localTitle && liveTitle === localTitle, `live="${liveTitle}" local="${localTitle}"`);
  add('Canonical URL is the deployed URL', home.body.includes(`rel="canonical" href="${BASE}"`));
  add('JSON-LD present in deployed HTML', (home.body.match(/application\/ld\+json/g) || []).length >= 3);
  add(
    'Verified social URLs in deployed HTML',
    home.body.includes('https://github.com/Abdullahi-Ai') &&
      home.body.includes('https://www.linkedin.com/in/osman-noor-08a297358') &&
      home.body.includes('https://www.instagram.com/osmanibrahim5181/')
  );
  add('No noindex directive', !/noindex/i.test(home.body));

  const robots = await get('robots.txt');
  add('robots.txt is served as plain text', robots.status === 200 && robots.type.includes('text/plain') && /User-agent/i.test(robots.body), `${robots.status} ${robots.type}`);
  add('robots.txt does not block everything', !/Disallow:\s*\/\s*$/m.test(robots.body));

  const sm = await get('sitemap.xml');
  add('sitemap.xml is served as XML', sm.status === 200 && /xml/.test(sm.type) && sm.body.includes('<urlset'), `${sm.status} ${sm.type}`);
  const locs = [...sm.body.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1]);
  for (const loc of locs) {
    const r = await fetch(loc, { redirect: 'manual' });
    add(`Sitemap URL returns 200: ${loc}`, r.status === 200, String(r.status));
  }

  for (const asset of ['profile.png', 'og-image.png', 'favicon.svg']) {
    const r = await fetch(BASE + asset);
    add(`${asset} is an image`, r.status === 200 && /image\//.test(r.headers.get('content-type') || ''), `${r.status} ${r.headers.get('content-type')}`);
  }
} catch (e) {
  add('Network request succeeded', false, e.message);
}

mkdirSync(OUT, { recursive: true });
writeFileSync(join(OUT, 'live-check.json'), JSON.stringify({ url: BASE, checkedAt: new Date().toISOString(), checks }, null, 2));
const failed = checks.filter((c) => !c.ok).length;
console.log(`\n${failed ? '❌' : '✅'} ${checks.length - failed}/${checks.length} checks passed\n`);
process.exit(failed ? 1 : 0);
