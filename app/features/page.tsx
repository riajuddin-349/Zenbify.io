import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { CtaBand } from "@/components/CtaBand";
import { SectionHead } from "@/components/SectionHead";
import { cta, pillars } from "@/content/site";

export const metadata: Metadata = {
  title: "Features",
  description: "Everything you need to run your business: order confirmation, courier booking, store building, marketing and profit tracking in Zenbify.",
  alternates: { canonical: "/features" },
};

export default function Features() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Features</p>
          <h1 className="h1" style={{ maxWidth: "18ch" }}>Everything you need to run your business.</h1>
          <p className="lead" style={{ marginTop: 18 }}>From building your store to marketing, orders, delivery and automation. Grouped by the job you are trying to do.</p>
          <nav aria-label="Feature groups" className="chip-list" style={{ marginTop: 26 }}>
            {pillars.map((p) => <a key={p.id} className="chip" href={`#${p.id}`} style={{ textDecoration: "none" }}>{p.title}</a>)}
          </nav>
        </div>
      </section>
      {pillars.map((p, i) => (
        <section key={p.id} id={p.id} className={`section-tight${i % 2 ? " section-alt" : ""}`} aria-labelledby={`${p.id}-t`} style={{ padding: "64px 0" }}>
          <div className="container">
            <SectionHead eyebrow={p.title} title={<span id={`${p.id}-t`}>{p.lead}</span>} />
            <ul className="grid grid-3">
              {p.features.map((f) => (
                <li className="card" key={f}><h3 className="h3" style={{ marginBottom: 0 }}>{f}</h3></li>
              ))}
            </ul>
          </div>
        </section>
      ))}
      <section className="section-tight" style={{ padding: "56px 0" }}>
        <div className="container hero-actions"><Button href={cta.primary.href}>{cta.primary.label}</Button><Button href="/pricing" variant="secondary">View pricing</Button></div>
      </section>
      <CtaBand />
    </>
  );
}
