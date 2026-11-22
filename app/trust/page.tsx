import type { Metadata } from "next";
import { CtaBand } from "@/components/CtaBand";
import { HOTLINE, LEARN_URL, company, legalLinks } from "@/content/site";

export const metadata: Metadata = {
  title: "Trust and support",
  description: "How to reach Zenbify support and where to find our published policies.",
  alternates: { canonical: "/trust" },
};

export default function Trust() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Trust and support</p>
          <h1 className="h1" style={{ maxWidth: "20ch" }}>Know who you are working with.</h1>
          <p className="lead" style={{ marginTop: 18 }}>How to reach us, and the policies that govern your account.</p>
        </div>
      </section>
      <section className="section-tight" style={{ padding: "24px 0 88px" }}>
        <div className="container" style={{ display: "grid", gap: 40 }}>
          <div>
            <h2 className="h3" style={{ marginBottom: 14 }}>Contact</h2>
            <dl className="dl">
              <div><dt>Support hotline</dt><dd><a href={`tel:${HOTLINE}`}>{HOTLINE}</a></dd></div>
              <div><dt>Live chat</dt><dd>Available on the Zenbify website.</dd></div>
              {company.supportEmail && <div><dt>Email</dt><dd><a href={`mailto:${company.supportEmail}`}>{company.supportEmail}</a></dd></div>}
              {company.supportHours && <div><dt>Support hours</dt><dd>{company.supportHours}</dd></div>}
              {company.legalName && <div><dt>Legal name</dt><dd>{company.legalName}</dd></div>}
              {company.address && <div><dt>Address</dt><dd>{company.address}</dd></div>}
            </dl>
          </div>
          <div>
            <h2 className="h3" style={{ marginBottom: 14 }}>Policies</h2>
            <ul className="grid grid-3">
              {legalLinks.map((l) => <li key={l.label} className="card"><a href={l.href} style={{ fontWeight: 650 }}>{l.label}</a></li>)}
            </ul>
          </div>
          <div>
            <h2 className="h3" style={{ marginBottom: 14 }}>Learn</h2>
            <p className="muted">Step-by-step guides for setting up your store, orders and delivery are in the <a href={LEARN_URL} style={{ textDecoration: "underline" }}>Zenbify Institute</a>.</p>
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
