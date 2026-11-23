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

## Design

Dark ink and warm paper surfaces with a single lime accent; Geist, Geist Mono and Instrument Serif (self-hosted via `@fontsource`, no network at build). Product storytelling is built from interface illustrations in `components/mocks.tsx` (orders, AI call, courier, profit, storefronts) and an interactive workflow in `components/WorkflowStory.tsx`. All mock data is sample data and labelled as such.

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

## Living layer (motion)

- `LiveHero`: deterministic sample-data simulation (order arrives, AI call, confirmation, courier booking; every 3rd order held as a duplicate). Pauses off-screen, in a hidden tab, or via the Pause button. Static under `prefers-reduced-motion`.
- `RevealInit` (scroll reveals, chart draw-on), `CountUp`, `ScrollWords` (manifesto), header scroll progress, workflow autoplay with per-step progress (stops on first interaction).
- All motion is CSS/IntersectionObserver based, with no animation dependencies.

## Not implemented here (needs info or code outside this repo)

- Real pricing plans, trial length, WhatsApp number, response-time claim: add to `content/site.ts` (nothing is invented).
- Bangla (`?lang=bn`) translations, signup-flow reduction and conversion tracking live in the app/backend and analytics setup, not in this marketing site.
