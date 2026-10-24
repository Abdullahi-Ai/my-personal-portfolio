# SEO & Identity Runbook — Abdullahi Ibrahim (Osman)

Nothing here guarantees indexing, ranking or a Knowledge Panel. Those decisions belong to Google.

## 1. Verify a deployment
```bash
npm run build
cd tools/identity-agent
npm run all          # SEO validation, local link check, monitor (offline)
npm run live-check   # compares the deployed site with the local build (needs network)
npm run report       # writes reports/report-<date>.md
```
`live-check` fails until the new build is deployed. This is expected before the first push.

## 2. Google Search Console (requires your Google account)
1. Open https://search.google.com/search-console/about and choose **Start now**.
2. Add a **Domain** property (`abdullahiibrahim.co.ke`) using DNS TXT verification, or a **URL-prefix** property: `https://www.abdullahiibrahim.co.ke/`.
3. Verify ownership. For URL-prefix on Vercel, the easiest options are the **HTML tag** (add the `<meta name="google-site-verification" ...>` Google gives you to `index.html`, deploy, then click Verify) or the **HTML file** (put it in `public/`).
4. **Sitemaps** → submit `https://www.abdullahiibrahim.co.ke/sitemap.xml`.
5. **URL inspection** → paste `https://www.abdullahiibrahim.co.ke/` → **Test live URL** → **Request indexing**.
6. Check **Pages** (indexing status), **Performance** (queries, impressions, clicks, CTR, position) and **Enhancements** for structured-data issues.
7. **Pages to inspect:** the site is a single page. About, Education and Projects are sections of `/` (`#about`, `#education`, `#portfolio`), not separate URLs, so Search Console can only inspect `/`. Separate indexable pages would need routing plus pre-rendering (not done, to avoid a rebuild).
8. Watch **Performance → Queries** for: `Abdullahi Ibrahim Osman`, `Abdullahi Ibrahim Osman Software Developer`, `Abdullahi Ibrahim Software Developer Kenya`, `Abdullahi Ibrahim Portfolio`, `Abdullahi-Ai`.
9. Compare Performance exports monthly. Impressions and position measure search performance. They are not proof of indexing; use URL inspection for that.

Indexing can take days to weeks. Using the disambiguated name **Abdullahi Ibrahim (Osman)** alongside **Software Developer** and **Kenya** helps distinguish your work from other people named Abdullahi Ibrahim.

## 3. Custom domain status (`https://www.abdullahiibrahim.co.ke/`)
`https://www.abdullahiibrahim.co.ke/` is live over HTTPS and `abdullahiibrahim.co.ke` redirects to `https://www.abdullahiibrahim.co.ke/`. All canonical, Open Graph, Twitter Card, JSON-LD, `robots.txt` and `sitemap.xml` URLs use `https://www.abdullahiibrahim.co.ke/`.

## 4. External profiles (you must do this; the agent cannot edit external accounts without your approval)
- **GitHub (`https://github.com/Abdullahi-Ai`)**:
  - **Name:** `Abdullahi Ibrahim (Osman)`
  - **Bio (≤160 chars):** `Software Developer in Kenya | Web Applications & AI-Powered Solutions | University of Nairobi & Moringa School | Abdullahi-Ai`
  - **Website:** `https://www.abdullahiibrahim.co.ke`
  - **Location:** `Kenya`
  - Pin the repositories that best represent your work (`osman-accessories-ai`, `my-personal-portfolio`, and the project repos listed on the site).
- **LinkedIn (`https://www.linkedin.com/in/osman-noor-08a297358`)**:
  - Linked in JSON-LD `sameAs`. When ready, consider updating the headline/about section to mention `Abdullahi Ibrahim (Osman) — Software Developer in Kenya` and link `https://www.abdullahiibrahim.co.ke` so Google sees bidirectional verification.
- **Instagram (`https://www.instagram.com/osmanibrahim5181/`)**:
  - Linked in JSON-LD `sameAs` and visible on the site.
- **Phone / WhatsApp**:
  - Supplied number `078176187` is 9 digits (incomplete for a Kenyan mobile number). Omitted from `tel:` and `wa.me` links until you confirm the complete 10-digit Kenyan mobile number (`+254 7XX XXX XXX`).

## 6. Other recommendations
- Replace `public/og-image.png` (currently identical to `profile.png`) with a 1200×630 card.
- Testimonials were removed. Add them back only with real quotes and written permission.
- Zamanijets Airline was removed from the portfolio at your request. It can be re-added later.
