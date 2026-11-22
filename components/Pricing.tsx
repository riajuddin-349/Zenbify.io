import { HOTLINE, SIGNUP_URL, plans, pricingNote } from "@/content/site";
import { Button } from "./Button";

/**
 * Renders plans from content/site.ts. If none are configured yet, shows a
 * clear fallback with real next steps instead of a loading placeholder.
 */
export function Pricing() {
  if (plans.length === 0) {
    return (
      <div className="callout">
        <span className="badge badge-neutral" style={{ justifySelf: "start" }}>Plan details</span>
        <h3 className="h3">Start free and talk through your plan</h3>
        <p className="muted">
          Start the free trial (no credit card required), or call {" "}
          <a href={`tel:${HOTLINE}`}>{HOTLINE}</a> and the team will help you choose a plan.
        </p>
        <div className="hero-actions" style={{ marginTop: 6 }}>
          <Button href={SIGNUP_URL}>Start free trial</Button>
          <Button href="/contact-us" variant="secondary">Talk to the team</Button>
        </div>
        <p className="muted" style={{ fontSize: 14 }}>{pricingNote}</p>
      </div>
    );
  }
  return (
    <>
      <div className="grid grid-3">
        {plans.map((p) => (
          <article key={p.name} className={`plan${p.highlighted ? " hl" : ""}`}>
            <h3 className="h3">{p.name}</h3>
            <p className="muted">{p.blurb}</p>
            <p><span className="price">{p.price}</span> <span className="muted">{p.period}</span></p>
            <ul className="check-list">{p.features.map((f) => <li key={f}>{f}</li>)}</ul>
            <Button href={SIGNUP_URL} variant={p.highlighted ? "primary" : "secondary"}>Start free trial</Button>
          </article>
        ))}
      </div>
      <p className="muted" style={{ marginTop: 18, fontSize: 14 }}>{pricingNote}</p>
    </>
  );
}
