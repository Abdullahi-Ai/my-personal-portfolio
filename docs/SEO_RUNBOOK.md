# SEO & Identity Runbook — Abdullahi Ibrahim (Abdullahi-Ai)

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
8. Watch **Performance → Queries** for: `Abdullahi Ibrahim`, `Abdullahi-Ai`, `Abdullahi Ibrahim software developer`, `Abdullahi Ibrahim University of Nairobi`, `Abdullahi Ibrahim software projects`.
9. Compare Performance exports monthly. Impressions and position measure search performance. They are not proof of indexing; use URL inspection for that.

Indexing can take days to weeks. A search for the bare name "Abdullahi Ibrahim" competes with other people with that name, so expect "Abdullahi-Ai" and "Abdullahi Ibrahim Software Developer" to work first.

## 3. Custom domain status (`https://www.abdullahiibrahim.co.ke/`)
`https://www.abdullahiibrahim.co.ke/` is live over HTTPS and `abdullahiibrahim.co.ke` redirects to `https://www.abdullahiibrahim.co.ke/`. All canonical, Open Graph, Twitter Card, JSON-LD, `robots.txt` and `sitemap.xml` URLs now use `https://www.abdullahiibrahim.co.ke/`.

## 4. GitHub profile (you must do this; the agent cannot edit it)
The API shows `name`, `bio` and `blog` are all empty.
- **Name:** `Abdullahi Ibrahim`
- **Bio (≤160 chars):** `Software Developer | Web Applications | AI & Automation | Sociology & Psychology, University of Nairobi | Abdullahi-Ai`
- **Website:** `https://www.abdullahiibrahim.co.ke/`
- Pin the repositories that best represent you (`osman-accessories-ai`, `my-personal-portfolio`, and the project repos listed on the site).
- Add descriptions and topics to those repositories (they are currently empty), and add a profile README in the `Abdullahi-Ai/Abdullahi-Ai` repository.

## 4b. Housekeeping in `osman-accessories-ai`
It tracks `src/__pycache__/`, `backend.log` and several `scratch_*`/`*_output.txt` files. Consider removing them and extending `.gitignore`. The repo has no live demo link in its README.

## 5. Profiles needing your decision
| Item | Issue | Action |
|------|-------|--------|
| LinkedIn `/in/osman-noor-08a297358` | Slug/name use "Osman Noor" | Rename the profile and custom URL to Abdullahi Ibrahim, then tell me so it can be added to `sameAs` |
| Instagram `@osmanibrahim5181` | Handle doesn't match the name | Confirm it's professional, or remove the link |
| Email `osmannoor75200@gmail.com` | Doesn't match the name | Keep or replace with an address you choose |

These remain visible on the site for your review but are not in the structured data.

## 6. Other recommendations
- Replace `public/og-image.png` (currently identical to `profile.png`) with a 1200×630 card.
- Testimonials were removed. Add them back only with real quotes and written permission.
- Zamanijets Airline was removed from the portfolio at your request. It can be re-added later.
