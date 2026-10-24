#!/usr/bin/env node


import { readFileSync, existsSync, readdirSync } from 'fs';
import { join, resolve } from 'path';

const DIST_PATH = process.argv.includes('--dist-path')
  ? resolve(process.argv[process.argv.indexOf('--dist-path') + 1])
  : resolve(import.meta.dirname, '../../dist');

const localOnly = process.argv.includes('--local-only');

console.log(`\n🔗 Link Checker — ${DIST_PATH}`);
console.log(`   Mode: ${localOnly ? 'Local only' : 'Full (includes external URLs)'}\n`);

if (!existsSync(DIST_PATH)) {
  console.error('❌ dist/ directory not found. Run `npm run build` first.');
  process.exit(1);
}

function getFiles(dir, ext) {
  const files = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...getFiles(fullPath, ext));
    } else if (entry.name.endsWith(ext)) {
      files.push(fullPath);
    }
  }
  return files;
}

const htmlFiles = getFiles(DIST_PATH, '.html');
const jsFiles = getFiles(DIST_PATH, '.js');
const allFiles = [...htmlFiles, ...jsFiles];

const urlPattern = /https?:\/\/[^\s"'`<>)\]},]+/g;
const allUrls = new Set();
const fileLinks = new Map();

for (const file of allFiles) {
  const content = readFileSync(file, 'utf-8');
  const matches = content.match(urlPattern) || [];
  for (let url of matches) {
    url = url.replace(/[.,;:!?)]+$/, '');
    allUrls.add(url);
    if (!fileLinks.has(url)) fileLinks.set(url, []);
    fileLinks.get(url).push(file.replace(DIST_PATH, ''));
  }
}

console.log(`📄 Scanned ${allFiles.length} files`);
console.log(`🔗 Found ${allUrls.size} unique URLs\n`);

const internal = [];
const external = [];
const cdnUrls = [];

for (const url of allUrls) {
  if (url.includes('my-personal-portfolio-delta-one.vercel.app')) {
    internal.push(url);
  } else if (url.includes('cdn.') || url.includes('unpkg.com') || url.includes('jsdelivr')) {
    cdnUrls.push(url);
  } else {
    external.push(url);
  }
}

console.log(`  Internal URLs: ${internal.length}`);
console.log(`  External URLs: ${external.length}`);
console.log(`  CDN URLs:      ${cdnUrls.length}`);
console.log('');

console.log('─── Internal Links ─────────────────────────────────────');
for (const url of internal) {
  const path = new URL(url).pathname;
  const localPath = join(DIST_PATH, path === '/' ? 'index.html' : path);
  const exists = existsSync(localPath);
  console.log(`  ${exists ? '✅' : '❌'} ${url}`);
  if (!exists) console.log(`     → File not found: ${localPath}`);
}

console.log('\n─── External Links ─────────────────────────────────────');
for (const url of external) {
  if (localOnly) {
    console.log(`  ⏭️  ${url} (skipped — local-only mode)`);
  } else {
    try {
      const response = await fetch(url, { method: 'HEAD', signal: AbortSignal.timeout(5000) });
      console.log(`  ${response.ok ? '✅' : '⚠️'} [${response.status}] ${url}`);
    } catch (e) {
      console.log(`  ⚠️  [ERR] ${url} — ${e.message}`);
    }
  }
}

console.log('\n─── CDN Links ──────────────────────────────────────────');
for (const url of cdnUrls) {
  if (localOnly) {
    console.log(`  ⏭️  ${url.substring(0, 80)}...`);
  } else {
    try {
      const response = await fetch(url, { method: 'HEAD', signal: AbortSignal.timeout(5000) });
      console.log(`  ${response.ok ? '✅' : '⚠️'} [${response.status}] ${url.substring(0, 80)}`);
    } catch (e) {
      console.log(`  ⚠️  [ERR] ${url.substring(0, 60)} — ${e.message}`);
    }
  }
}

console.log('\n✅ Link check complete.\n');
