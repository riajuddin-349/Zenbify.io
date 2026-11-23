import { HOTLINE, SIGNUP_URL, plans, pricingNote } from "@/content/site";
import { Button } from "./Button";

/** Renders plans from content/site.ts; shows an honest fallback until plans are configured. */
export function Pricing() {
  if (plans.length === 0) {
    return (
      <div className="price-box">
        <div style={{ display: "grid", gap: 18 }}>
          <span className="label"><b>●</b> Plan details</span>
          <h3>Start free, then pick the plan that fits your store.</h3>
          <p className="mut" style={{ maxWidth: "46ch" }}>
            The free trial needs no credit card. Call <a href={`tel:${HOTLINE}`} style={{ textDecoration: "underline" }}>{HOTLINE}</a> and the team will help you choose a plan.
          </p>
          <div className="btn-row"><Button href={SIGNUP_URL} variant="ink" arrow>Start free trial</Button><Button href="/contact-us" variant="line">Talk to the team</Button></div>
        </div>
        <dl className="dl" style={{ margin: 0 }}>
          <div><dt>Currency</dt><dd>BDT</dd></div>
          <div><dt>Payment</dt><dd>bKash or SSLCOMMERZ</dd></div>
          <div><dt>Trial</dt><dd>No credit card required</dd></div>
        </dl>
      </div>
    );
  }
  return (
    <>
      <div className="plan-grid">
        {plans.map((p) => (
          <article key={p.name} className={`plan${p.highlighted ? " hl" : ""}`}>
            <h3 className="h3">{p.name}</h3>
            <p style={{ opacity: .7 }}>{p.blurb}</p>
            <p><span className="price">{p.price}</span> <span style={{ opacity: .7 }}>{p.period}</span></p>
            <ul>{p.features.map((f) => <li key={f}>{f}</li>)}</ul>
            <Button href={SIGNUP_URL} variant={p.highlighted ? "primary" : "ink"}>Start free trial</Button>
          </article>
        ))}
      </div>
      <p className="mut" style={{ marginTop: 18, fontSize: 14 }}>{pricingNote}</p>
    </>
  );
}
