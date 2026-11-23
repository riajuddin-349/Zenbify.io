import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { CtaBand } from "@/components/CtaBand";
import { OneRecord } from "@/components/mocks";
import { company, cta } from "@/content/site";

export const metadata: Metadata = {
  title: "About",
  description: "Zenbify is an AI-powered commerce platform for the people building something of their own.",
  alternates: { canonical: "/about-us" },
};

export default function About() {
  const rows = [
    company.legalName && ["Legal name", company.legalName],
    company.address && ["Address", company.address],
    company.supportEmail && ["Support email", company.supportEmail],
    company.supportHours && ["Support hours", company.supportHours],
  ].filter(Boolean) as string[][];
  return (
    <>
      <section className="phero on-dark">
        <div className="wrap">
          <span className="label"><b>●</b> About Zenbify</span>
          <h1 className="display" style={{ maxWidth: "18ch" }}>Behind every store is someone <span className="serif">building something of their own.</span></h1>
        </div>
      </section>
      <section className="sec on-paper">
        <div className="wrap fsplit">
          <div className="prose">
            <p>Zenbify is an AI-powered commerce platform for the people building something of their own. It connects storefronts, customer conversations, orders, payments, delivery and AI-assisted product visuals and campaigns.</p>
            <p className="mut">We believe these should be part of one connected flow: less switching between tools, a clearer view of your business, while your team stays in control of the decisions that matter.</p>
            {rows.length > 0 && <dl className="dl">{rows.map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}</dl>}
            <div className="btn-row"><Button href={cta.primary.href} variant="ink" arrow>{cta.primary.label}</Button><Button href="/trust" variant="line">Trust and support</Button></div>
          </div>
          <OneRecord />
        </div>
      </section>
      <CtaBand withApp={false} />
    </>
  );
}
