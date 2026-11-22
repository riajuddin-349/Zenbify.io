import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { HOTLINE, SIGNUP_URL, company } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact us",
  description: "Talk to the Zenbify team about storefronts, payments, automation and plan guidance.",
  alternates: { canonical: "/contact-us" },
};

export default function Contact() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Contact us</p>
          <h1 className="h1" style={{ maxWidth: "18ch" }}>Talk to the Zenbify team.</h1>
          <p className="lead" style={{ marginTop: 18 }}>Ask about storefronts, payments, automation or which plan fits your store.</p>
        </div>
      </section>
      <section className="section-tight" style={{ padding: "24px 0 88px" }}>
        <div className="container grid grid-3">
          <div className="card"><h2 className="h3">Call the hotline</h2><p><a href={`tel:${HOTLINE}`}><strong>{HOTLINE}</strong></a></p>{company.supportHours && <p>{company.supportHours}</p>}</div>
          <div className="card"><h2 className="h3">Live chat</h2><p>Use the chat on the Zenbify website for quick questions.</p></div>
          {company.supportEmail
            ? <div className="card"><h2 className="h3">Email</h2><p><a href={`mailto:${company.supportEmail}`}>{company.supportEmail}</a></p></div>
            : <div className="card"><h2 className="h3">Try it yourself</h2><p>Start the free trial. No credit card required.</p><div className="hero-actions" style={{ marginTop: 14 }}><Button href={SIGNUP_URL}>Start free trial</Button></div></div>}
        </div>
      </section>
    </>
  );
}
