import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { CtaBand } from "@/components/CtaBand";
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
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">About Zenbify</p>
          <h1 className="h1" style={{ maxWidth: "20ch" }}>Behind every store is someone building something of their own.</h1>
        </div>
      </section>
      <section className="section-tight" style={{ padding: "32px 0 88px" }}>
        <div className="container prose">
          <p>Zenbify is an AI-powered commerce platform for the people building something of their own. It connects storefronts, customer conversations, orders, payments, delivery and AI-assisted product visuals and campaigns.</p>
          <p>We believe these should be part of one connected flow: less switching between tools, a clearer view of your business, while your team stays in control of the decisions that matter.</p>
          {rows.length > 0 && (
            <dl className="dl">
              {rows.map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}
            </dl>
          )}
          <div className="hero-actions"><Button href={cta.primary.href}>{cta.primary.label}</Button><Button href="/trust" variant="secondary">Trust and support</Button></div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
