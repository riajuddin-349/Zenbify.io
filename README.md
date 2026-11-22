# Zenbify marketing website

Fresh Next.js (App Router, TypeScript) rebuild of the zenbify.io marketing site, following the 22 Nov 2026 audit.
The repository was empty when this was built, so there is no backend, auth or API here: every sign-up and login
button links to the existing merchant app (`app.zenbify.io`). When merging into any existing codebase, keep that app untouched.

## Run

```bash
npm install
npm run dev        # http://localhost:3000
npm run typecheck
npm run build && npm start
```

## Where to edit

All copy, links and facts live in `content/site.ts`. Reusable UI is in `components/`.

Nothing is invented. These items need real data from the Zenbify team and are hidden or shown as honest fallbacks until filled in:

| Item | Setting in `content/site.ts` | Until filled |
| --- | --- | --- |
| Pricing plans | `plans` | Pricing shows a fallback with trial and hotline CTAs |
| Trial length | `trial.trialLength` | Only "No credit card required" is shown |
| Merchant stories | `merchantStories` | Section is not rendered |
| Legal name, address, support email and hours | `company` | Not shown on About, Trust or footer |
| Integration status (live, beta, planned) | `integrations[].items[].status` | No status badge |

Also confirm before launch: the payment partner list (bKash, Nagad, Stripe, SSLCOMMERZ appeared inconsistently on the old site), what each store-platform connection syncs, and the "built for sellers in Bangladesh" wording.

## Not included
Bengali language version, live chat widget, contact form (no endpoint exists), blog or Learn content (links to the existing Zenbify Institute), legal pages (link to the existing ones). Product visuals are CSS illustrations labelled "Sample data"; replace with real screenshots when available.
