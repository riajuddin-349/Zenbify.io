/**
 * Single source of truth for site copy, links and facts.
 *
 * Every claim here was taken from the public zenbify.io pages as audited on
 * 22 Nov 2026. Nothing is invented. Items that need real data from the
 * Zenbify team (pricing plans, merchant stories, company identity) are
 * optional and are only rendered when filled in.
 */

export const APP_URL = "https://app.zenbify.io";
export const SIGNUP_URL = `${APP_URL}/signup`;
export const LOGIN_URL = `${APP_URL}/login`;
export const LEARN_URL = "https://zenbify.io/zenbify-institute";
export const HOTLINE = "09678770707";

export const cta = {
  primary: { label: "Start free trial", href: SIGNUP_URL },
  secondary: { label: "See how it works", href: "/#workflow" },
};

/** Shown next to the primary CTA. Add `trialLength` (e.g. "14-day trial") only once confirmed. */
export const trial = {
  note: "No credit card required",
  trialLength: undefined as string | undefined,
};

export const nav = [
  { label: "Features", href: "/features" },
  { label: "Pricing", href: "/pricing" },
  { label: "Learn", href: LEARN_URL, external: true },
  { label: "About", href: "/about-us" },
];

export const workflow = [
  { step: "Store", title: "Build your store", text: "Launch without a developer: templates, domains and single-product landing pages." },
  { step: "Campaign", title: "Turn a product into a campaign", text: "AI ad creatives, competitor angle analysis and marketing tracking integrations." },
  { step: "Order", title: "Collect every order in one place", text: "Orders, cash on delivery and payments land in one dashboard instead of chats and spreadsheets." },
  { step: "Confirm", title: "Confirm orders, cut fake ones", text: "Risky and duplicate order detection, AI confirmation calls, and recovery of failed or cancelled orders." },
  { step: "Courier", title: "Book couriers from the dashboard", text: "Book Pathao, REDX or Steadfast, follow tracking updates and share a customer tracking page." },
  { step: "Profit", title: "See what you actually earn", text: "Revenue, costs and net profit in one view." },
];

export const oldWay = {
  tools: ["Facebook", "TikTok", "WhatsApp", "Excel", "Couriers", "Payments"],
  problems: ["Manual work", "Missed orders", "Data mismatch"],
  zenbify: ["One connected dashboard", "Orders confirmed and shipped in one flow", "A clear overview of profit"],
};

export const pillars = [
  {
    id: "confirm",
    title: "Confirm",
    lead: "Confirm orders faster and cut fake ones.",
    features: ["Order and COD management", "Fake order detection", "AI calling system", "Failed order recovery"],
  },
  {
    id: "ship",
    title: "Ship",
    lead: "Book couriers without leaving the dashboard.",
    features: ["Courier automation", "Customer tracking page", "Local payment integration", "Message automation"],
  },
  {
    id: "grow",
    title: "Grow",
    lead: "Launch a store and turn products into campaigns.",
    features: ["Store and landing page builder", "Ad creative to campaign builder", "Competitor analysis", "Pixel and tracking setup", "Social media posting", "Product knowledge base"],
  },
  {
    id: "know",
    title: "Know",
    lead: "See what you actually earn.",
    features: ["Profit and loss dashboard"],
  },
];

export const themes = [
  { name: "The Fashion Edit", vertical: "Fashion" },
  { name: "Next in Tech", vertical: "Electronics" },
  { name: "One of a Kind", vertical: "Single product" },
  { name: "Beyond Everyday", vertical: "Travel" },
  { name: "Freshly Picked", vertical: "Food & grocery" },
  { name: "Spaces & Stories", vertical: "Furniture" },
];

export const marketing = [
  "AI ad creatives from a product photo",
  "Competitor angle analysis",
  "Marketing tracking integrations",
  "Campaign insights",
  "AI photo enhancement and listing visuals",
  "Social creatives and AI customer chat support",
];

/**
 * Integrations named on the live site. Add `status: "live" | "beta" | "planned"`
 * to an item once confirmed and a badge will render. Partner names across the
 * old pages disagreed (bKash/Stripe vs bKash/Nagad vs SSLCOMMERZ for billing),
 * so confirm this list before launch.
 */
export type Integration = { name: string; status?: "live" | "beta" | "planned" };
export const integrations: { group: string; note: string; items: Integration[] }[] = [
  { group: "Store platforms", note: "Keep the store you already run.", items: [{ name: "Shopify" }, { name: "BigCommerce" }, { name: "WooCommerce" }] },
  { group: "Payments", note: "Local payments and cash on delivery.", items: [{ name: "bKash" }, { name: "Nagad" }, { name: "Stripe" }] },
  { group: "Couriers", note: "Courier booking and delivery tracking.", items: [{ name: "Pathao" }, { name: "REDX" }, { name: "Steadfast" }] },
  { group: "Tracking", note: "Marketing measurement.", items: [{ name: "Meta Pixel" }, { name: "Meta CAPI" }, { name: "GA4" }, { name: "TikTok Pixel" }] },
  { group: "Social channels", note: "Reach customers where they are.", items: ["Facebook", "Instagram", "WhatsApp", "TikTok", "X", "Pinterest", "LinkedIn", "YouTube"].map((name) => ({ name })) },
];

/** Fill with real, permissioned merchants. When empty, the section is not rendered. */
export type MerchantStory = { name: string; store: string; storeUrl?: string; quote: string; result?: string };
export const merchantStories: MerchantStory[] = [];

/**
 * Fill with real plans. When empty, the pricing UI shows an honest fallback
 * instead of a loading spinner. Do not publish prices that are not final.
 */
export type Plan = { name: string; price: string; period: string; blurb: string; features: string[]; highlighted?: boolean };
export const plans: Plan[] = [];
export const pricingNote = "Prices in BDT. Payment via bKash or SSLCOMMERZ.";

/** Optional company identity. Rendered on /about-us and /trust only when set. */
export const company: {
  legalName?: string;
  address?: string;
  supportEmail?: string;
  supportHours?: string;
} = {};

export const faqs = [
  { q: "Who is Zenbify for?", a: "Zenbify is built for online sellers who run orders across Facebook, WhatsApp, spreadsheets, couriers and payments, and want one connected dashboard. It is made for local commerce, with cash on delivery, bKash and local couriers in mind." },
  { q: "Do I need a credit card to start?", a: "No. The free trial does not require a credit card. Plans and trial details are on the pricing page." },
  { q: "Do I need to know how to code?", a: "No coding is required. You can launch a store from templates, add products and start selling from the dashboard." },
  { q: "Which couriers can I book?", a: "Pathao, REDX and Steadfast are shown as connected courier partners, with booking and tracking updates in the dashboard." },
  { q: "How does order confirmation work?", a: "Zenbify flags risky and duplicate orders, and AI calling can confirm orders with customers. Failed or cancelled orders can be recovered through the same flow." },
  { q: "Can I keep my Shopify, BigCommerce or WooCommerce store?", a: "Zenbify lists all three as connected store platforms. Contact the team to confirm what syncs for your setup." },
  { q: "Where can I get help?", a: `Call the hotline on ${HOTLINE}, use live chat on the site, or follow the step-by-step guides in the Zenbify Institute.` },
];

export const legalLinks = [
  { label: "Terms and Conditions", href: "https://zenbify.io/terms-and-conditions" },
  { label: "Privacy Policy", href: "https://zenbify.io/privacy-policy" },
  { label: "Refund Policy", href: "https://zenbify.io/refund-policy" },
  { label: "Cookie Policy", href: "https://zenbify.io/cookie-policy" },
  { label: "Acceptable Use Policy", href: "https://zenbify.io/acceptable-use-policy" },
];

export const socials = [
  "Facebook", "Instagram", "LinkedIn", "Pinterest", "X", "TikTok", "YouTube",
];
