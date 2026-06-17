# Website Changelog

## 2026-06-17 22:45 CST
- Change summary: Repositioned the production source toward multi-channel AI automation setup and strengthened analytics funnel metadata for setup intent, plan selection, checkout, and channel workflow tracking.
- Touched files: `src/content/catalog.ts`, `shared/catalog.mjs`, `src/content/site-content.tsx`, `shared/public-site-seo.mjs`, `src/App.tsx`, `server-lib/analytics-helpers.mjs`, `llms.txt`.
- Verification: `npm run build` passed; `npm test` passed 28/28 after stabilizing the date-window analytics test and apex canonical assertion.
- Deployment/Git: Pending commit/push in this turn.
- Follow-up: Production `multica.uk` is currently intercepted by an older shared Cloudflare Worker route, so route ownership must be changed or the source must be deployed to the active production host before calling the live custom domain complete.

## 2026-05-28 15:31 CST
- Change summary: P0/P1 remediation: packaged static site into shared 9router deployment and submitted search coverage.
- Touched files: index.html via 9router static packaging.
- Verification: Shared 9router deploy completed; live custom-domain smoke check passed.
- Deployment/Git: Deployed to Cloudflare where applicable; no commit or push was created in this turn.
- Follow-up: Search/Bing/GSC metrics and payment conversions may need 24-72 hours or owner-side provider/search-console permissions before the ledger fully clears.

## 2026-06-12 exposure rescue pages

- Added AI-readable and human-useful static intent pages for uncovered traffic terms: `multica telegram`, `multi ca`.
- Replaced the old hidden SEO answer block with a readable first-packet fallback inside `#root` where an index shell exists.
- Refreshed pricing, checkout fallback, privacy, terms, sitemap, robots, and llms surfaces for the exposure-click rescue checklist.
- Verification pending: rebuild/deploy and rerun the exposure rescue checklist.
