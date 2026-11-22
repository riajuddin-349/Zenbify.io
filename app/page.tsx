import Link from "next/link";
import { Button } from "@/components/Button";
import { CtaBand } from "@/components/CtaBand";
import { Faq, faqJsonLd } from "@/components/Faq";
import { IntegrationMatrix } from "@/components/IntegrationMatrix";
import { OrderFlowMock, OrdersMock, ProfitMock } from "@/components/Mockups";
import { Pricing } from "@/components/Pricing";
import { SectionHead } from "@/components/SectionHead";
import {
  HOTLINE, cta, marketing, merchantStories, oldWay, themes, trial, workflow, legalLinks,
} from "@/content/site";

const themeColors = ["#3b3bd9", "#0f7b5f", "#b4541a", "#1d6fa5", "#6a8f1f", "#7a4f8c"];

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd()) }} />

      {/* 2. Hero */}
      <section className="hero" aria-labelledby="hero-title">
        <div className="container hero-grid">
          <div>
            <p className="eyebrow">Your all-in-one AI commerce platform</p>
            <h1 className="h1" id="hero-title">Confirm orders faster, cut fake ones, and see what you actually earn.</h1>
            <p className="lead" style={{ marginTop: 20 }}>
              Zenbify puts your store, AI order confirmation, courier booking and profit tracking in one dashboard, built for sellers in Bangladesh.
            </p>
            <div className="hero-actions">
              <Button href={cta.primary.href}>{cta.primary.label}</Button>
              <Button href={cta.secondary.href} variant="secondary">{cta.secondary.label}</Button>
            </div>
            <p className="hero-note">
              <span>{trial.note}</span>
              <span>No coding required</span>
              {trial.trialLength && <span>{trial.trialLength}</span>}
            </p>
          </div>
          <OrderFlowMock />
        </div>
      </section>

      {/* 3. Proof strip: factual partner names only */}
      <div className="strip">
        <div className="container strip-in">
          <span className="strip-label">Works with</span>
          <ul className="strip-names">
            {["bKash", "Pathao", "REDX", "Steadfast", "Shopify", "WooCommerce", "BigCommerce"].map((n) => <li key={n}>{n}</li>)}
          </ul>
        </div>
      </div>

      {/* 4. Old way vs one dashboard */}
      <section className="section" aria-labelledby="diff-title">
        <div className="container">
          <SectionHead eyebrow="The Zenbify difference" title={<span id="diff-title">Stop running your shop from six different tools.</span>} lead="Orders scatter across chats, sheets, couriers and payments. Zenbify brings them into one connected flow." />
          <div className="compare">
            <div className="card bad">
              <h3 className="h3">The old way</h3>
              <ul className="chip-list" style={{ margin: "14px 0 18px" }}>{oldWay.tools.map((t) => <li className="chip" key={t}>{t}</li>)}</ul>
              <ul className="check-list" style={{ color: "var(--bad)" }}>
                {oldWay.problems.map((p) => <li key={p} style={{ color: "var(--ink-2)" }}>{p}</li>)}
              </ul>
            </div>
            <div className="card good">
              <h3 className="h3">One Zenbify dashboard</h3>
              <ul className="check-list" style={{ marginTop: 18 }}>{oldWay.zenbify.map((p) => <li key={p}>{p}</li>)}</ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Core workflow */}
      <section className="section section-alt" id="workflow" aria-labelledby="wf-title">
        <div className="container">
          <SectionHead eyebrow="How it works" title={<span id="wf-title">One connected workflow, from store to profit.</span>} lead="Six steps that used to live in six places." />
          <ol className="steps" style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {workflow.map((w, i) => (
              <li className="step" key={w.step}>
                <span className="step-no">{i + 1}</span>
                <p className="tag">{w.step}</p>
                <h3>{w.title}</h3>
                <p>{w.text}</p>
              </li>
            ))}
          </ol>
          <div className="hero-actions" style={{ marginTop: 36 }}>
            <Button href={cta.primary.href}>{cta.primary.label}</Button>
            <Button href="/features" variant="secondary">Explore all features</Button>
          </div>
        </div>
      </section>

      {/* 6. Differentiator */}
      <section className="section" id="confirm" aria-labelledby="confirm-title">
        <div className="container split">
          <div>
            <p className="eyebrow">Order confirmation and fake-order protection</p>
            <h2 className="h2" id="confirm-title">Confirm orders faster and cut fake ones.</h2>
            <p className="lead" style={{ margin: "16px 0 24px" }}>Cash on delivery works best when you know which orders are real. Zenbify helps you decide before you ship.</p>
            <ul className="check-list">
              <li>Risky and duplicate order detection</li>
              <li>AI calling to confirm orders with customers</li>
              <li>Recovery of failed or cancelled orders</li>
              <li>Courier booking from the same dashboard</li>
            </ul>
            <div className="hero-actions"><Button href={cta.primary.href}>{cta.primary.label}</Button></div>
          </div>
          <OrdersMock />
        </div>
      </section>

      {/* 7. Store and themes */}
      <section className="section section-alt" id="themes" aria-labelledby="themes-title">
        <div className="container">
          <SectionHead eyebrow="Store and themes" title={<span id="themes-title">Launch a store without a developer.</span>} lead="Pick a theme for your kind of business. All themes are labelled mobile ready." />
          <ul className="grid grid-3">
            {themes.map((t, i) => (
              <li className="theme" key={t.name}>
                <div className="theme-art" style={{ background: themeColors[i % themeColors.length] }} aria-hidden="true">{t.name}</div>
                <div className="theme-meta">
                  <div><strong>{t.name}</strong><br /><small>{t.vertical}</small></div>
                  <span className="badge badge-good">Mobile ready</span>
                </div>
              </li>
            ))}
          </ul>
          <div className="hero-actions" style={{ marginTop: 32 }}><Button href={cta.primary.href}>Start your store</Button></div>
        </div>
      </section>

      {/* 8. Marketing + 9. Profit */}
      <section className="section" aria-labelledby="mkt-title">
        <div className="container split">
          <div>
            <p className="eyebrow">Marketing and AI creative</p>
            <h2 className="h2" id="mkt-title">Turn a product into a campaign.</h2>
            <ul className="check-list" style={{ marginTop: 24 }}>{marketing.map((m) => <li key={m}>{m}</li>)}</ul>
            <div className="hero-actions"><Button href="/features" variant="secondary">See marketing features</Button></div>
          </div>
          <div>
            <p className="eyebrow">Profit view</p>
            <h2 className="h2" style={{ marginBottom: 22 }}>See what you actually earn.</h2>
            <ProfitMock />
          </div>
        </div>
      </section>

      {/* 10. Integrations */}
      <section className="section section-alt" aria-labelledby="int-title">
        <div className="container">
          <SectionHead eyebrow="Integrations" title={<span id="int-title">Works with the tools and partners you already use.</span>} lead="Store platforms, local payments, couriers and tracking, connected to one dashboard." />
          <IntegrationMatrix />
        </div>
      </section>

      {/* 11. Merchant stories: only rendered with real, permissioned data */}
      {merchantStories.length > 0 && (
        <section className="section" aria-labelledby="stories-title">
          <div className="container">
            <SectionHead eyebrow="Merchant stories" title={<span id="stories-title">Sellers using Zenbify.</span>} />
            <div className="grid grid-3">
              {merchantStories.map((s) => (
                <figure className="card" key={s.name} style={{ margin: 0 }}>
                  <blockquote style={{ margin: 0 }}><p>“{s.quote}”</p></blockquote>
                  <figcaption style={{ marginTop: 14, fontWeight: 650 }}>
                    {s.name}, {s.storeUrl ? <a href={s.storeUrl} rel="noopener">{s.store}</a> : s.store}
                    {s.result && <span className="muted" style={{ display: "block", fontWeight: 400 }}>{s.result}</span>}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 12. Pricing */}
      <section className="section" id="pricing" aria-labelledby="pricing-title">
        <div className="container">
          <SectionHead eyebrow="Pricing" title={<span id="pricing-title">Big ambitions. A plan that fits.</span>} lead="Start free. No credit card required." />
          <Pricing />
        </div>
      </section>

      {/* 13. Trust and support */}
      <section className="section section-alt" aria-labelledby="trust-title">
        <div className="container">
          <SectionHead eyebrow="Trust and support" title={<span id="trust-title">Support you can reach when something needs fixing.</span>} lead="Support, policies and learning guides are one click away." />
          <div className="grid grid-3">
            <div className="card"><h3 className="h3">Talk to us</h3><p>Hotline <a href={`tel:${HOTLINE}`}><strong>{HOTLINE}</strong></a>, plus live chat on the site.</p></div>
            <div className="card"><h3 className="h3">Clear policies</h3><p>Terms, privacy, refund, cookie and acceptable-use policies are published. <Link href="/trust" style={{ textDecoration: "underline" }}>See trust and support</Link>.</p></div>
            <div className="card"><h3 className="h3">Learn at your pace</h3><p>Step-by-step guides for launching your store, taking orders and setting up delivery in the Zenbify Institute.</p></div>
          </div>
        </div>
      </section>

      {/* 14. FAQ */}
      <section className="section" id="faq" aria-labelledby="faq-title">
        <div className="container" style={{ maxWidth: 860 }}>
          <SectionHead eyebrow="FAQ" title={<span id="faq-title">Questions sellers ask before they start.</span>} />
          <Faq />
        </div>
      </section>

      {/* 15. Final CTA */}
      <CtaBand />
    </>
  );
}
