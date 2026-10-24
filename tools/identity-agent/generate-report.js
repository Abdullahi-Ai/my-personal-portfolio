#!/usr/bin/env node


import { readFileSync, writeFileSync, existsSync } from 'fs';
import { join, resolve } from 'path';
import { identity } from './identity-memory.js';

const DIST_PATH = resolve(import.meta.dirname, '../../dist');
const REPORT_PATH = join(import.meta.dirname, 'reports');

import { mkdirSync } from 'fs';
try { mkdirSync(REPORT_PATH, { recursive: true }); } catch {}

const now = new Date();
const dateStr = now.toISOString().split('T')[0];
const report = [];

report.push(`# Abdullahi-Ai Identity & SEO Report`);
report.push(`**Generated**: ${now.toISOString()}`);
report.push(`**Website**: ${identity.website.url}`);
report.push('');

report.push('## 1. Professional Identity');
report.push('');
report.push(`| Field | Value |`);
report.push(`|-------|-------|`);
report.push(`| **Name** | ${identity.name} |`);
report.push(`| **Alternate Name** | ${identity.alternateName} |`);
report.push(`| **Title** | ${identity.professionalTitle} |`);
report.push(`| **Website** | ${identity.website.url} |`);
report.push(`| **GitHub** | ${identity.profiles.find(p => p.platform === 'GitHub')?.url} |`);
report.push('');
report.push('### Profiles (only verified ones are used in structured data)');
report.push('');
report.push('| Platform | URL | Verified | Notes |');
report.push('|----------|-----|----------|-------|');
for (const p of identity.profiles) {
  report.push(`| ${p.platform} | ${p.url} | ${p.verified ? '✅ ' + p.verifiedDate : '⚠️ needs your verification'} | ${p.action || p.source} |`);
}
report.push(`| Email / WhatsApp | ${identity.contact.email} | ${identity.contact.verified === false ? '⚠️ needs your verification' : '✅'} | ${identity.contact.source} |`);
report.push('');

report.push('## 2. Education');
report.push('');
for (const edu of identity.education) {
  report.push(`- **${edu.institution}**: ${edu.degree || edu.certification || (edu.fieldsOfStudy||[]).join(' & ') + ' (' + edu.structure + ')'}`);
  if (edu.specialization) report.push(`  - Specialization: ${edu.specialization}`);
  if (edu.focus) report.push(`  - Focus: ${edu.focus}`);
}
report.push('');

report.push('## 3. Verified Projects');
report.push('');
report.push('| Project | Status | Live URL | Source |');
report.push('|---------|--------|----------|--------|');
for (const proj of identity.projects) {
  report.push(`| ${proj.name} | ${proj.status} | ${proj.liveUrl ? `[Link](${proj.liveUrl})` : 'none verified'} | ${proj.githubUrl ? `[Repo](${proj.githubUrl})` : 'no public repo verified'} |`);
}
report.push('');

report.push('## 4. SEO Implementation Status');
report.push('');
report.push('| Feature | Status |');
report.push('|---------|--------|');
for (const [key, value] of Object.entries(identity.seoStatus)) {
  if (key === 'lastUpdated') continue;
  const icon = value === 'implemented' ? '✅' : value === 'not_connected' ? '⏳' : '❌';
  report.push(`| ${key} | ${icon} ${value} |`);
}
report.push('');

report.push('## 5. Build Verification');
report.push('');
if (existsSync(join(DIST_PATH, 'index.html'))) {
  report.push('✅ Production build exists');
  const html = readFileSync(join(DIST_PATH, 'index.html'), 'utf-8');
  
  const titleMatch = html.match(/<title>(.*?)<\/title>/);
  report.push(`- **Title**: ${titleMatch ? titleMatch[1] : 'MISSING'}`);
  
  const descMatch = html.match(/<meta\s+name="description"\s+content="(.*?)"/);
  report.push(`- **Description**: ${descMatch ? descMatch[1].substring(0, 80) + '...' : 'MISSING'}`);
  
  const jsonLdCount = (html.match(/application\/ld\+json/g) || []).length;
  report.push(`- **JSON-LD Blocks**: ${jsonLdCount}`);
  
  report.push(`- **robots.txt**: ${existsSync(join(DIST_PATH, 'robots.txt')) ? '✅' : '❌'}`);
  report.push(`- **sitemap.xml**: ${existsSync(join(DIST_PATH, 'sitemap.xml')) ? '✅' : '❌'}`);
} else {
  report.push('❌ No production build found. Run `npm run build`.');
}
report.push('');

report.push('## 5b. Deployed Site Check');
report.push('');
const livePath = join(REPORT_PATH, 'live-check.json');
if (existsSync(livePath)) {
  const live = JSON.parse(readFileSync(livePath, 'utf-8'));
  report.push(`Checked ${live.checkedAt} against ${live.url}`);
  report.push('');
  for (const c of live.checks) report.push(`- ${c.ok ? '✅' : '❌'} ${c.name}${c.detail ? ' — ' + c.detail : ''}`);
} else {
  report.push('Not run. Execute `npm run live-check` after deploying. Until then the deployed state is unverified.');
}
report.push('');

report.push('## 5c. Pending Approvals (never performed automatically)');
report.push('');
for (const a of identity.pendingApprovals) report.push(`- [ ] ${a}`);
report.push('');

report.push('## 6. Remaining Manual Steps');
report.push('');
report.push('### Google Search Console');
report.push('1. Go to https://search.google.com/search-console/about');
report.push('2. Add property: `https://www.abdullahiibrahim.co.ke/` (or Domain property `abdullahiibrahim.co.ke`)');
report.push('3. Verify ownership via HTML tag, DNS, or file upload');
report.push('4. Submit sitemap: `https://www.abdullahiibrahim.co.ke/sitemap.xml`');
report.push('5. Request indexing for `https://www.abdullahiibrahim.co.ke/`');
report.push('');
report.push('## 7. Target Search Queries');
report.push('');
report.push('Monitor these queries in Google Search Console:');
report.push('');
const targetQueries = [
  'Abdullahi Ibrahim Osman',
  'Abdullahi Ibrahim Osman Software Developer',
  'Abdullahi Ibrahim Software Developer Kenya',
  'Abdullahi Ibrahim Portfolio',
  'Abdullahi-Ai',
];
for (const q of targetQueries) {
  report.push(`- \`${q}\``);
}
report.push('');

const reportFile = join(REPORT_PATH, `report-${dateStr}.md`);
writeFileSync(reportFile, report.join('\n'));
console.log(`\n📄 Report generated: ${reportFile}\n`);
