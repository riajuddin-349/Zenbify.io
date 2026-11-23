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
      <section className="phero on-dark">
        <div className="wrap">
          <span className="label"><b>●</b> Trust and support</span>
          <h1 className="display">Know who you are <span className="serif" style={{ color: "var(--lime)" }}>working with.</span></h1>
          <p className="lead">How to reach us, and the policies that govern your account.</p>
        </div>
      </section>
      <section className="sec on-paper">
        <div className="wrap" style={{ display: "grid", gap: 72 }}>
          <div className="fsplit" style={{ alignItems: "start" }}>
            <h2 className="h2">Contact</h2>
            <dl className="dl">
              <div><dt>Support hotline</dt><dd><a href={`tel:${HOTLINE}`}>{HOTLINE}</a></dd></div>
              <div><dt>Live chat</dt><dd>Available on the Zenbify website.</dd></div>
              {company.supportEmail && <div><dt>Email</dt><dd><a href={`mailto:${company.supportEmail}`}>{company.supportEmail}</a></dd></div>}
              {company.supportHours && <div><dt>Support hours</dt><dd>{company.supportHours}</dd></div>}
              {company.legalName && <div><dt>Legal name</dt><dd>{company.legalName}</dd></div>}
              {company.address && <div><dt>Address</dt><dd>{company.address}</dd></div>}
            </dl>
          </div>
          <div className="fsplit" style={{ alignItems: "start" }}>
            <h2 className="h2">Policies</h2>
            <div className="pol">{legalLinks.map((l) => <a key={l.label} href={l.href}>{l.label}</a>)}</div>
          </div>
          <div className="fsplit" style={{ alignItems: "start" }}>
            <h2 className="h2">Learn</h2>
            <div className="pol"><a href={LEARN_URL}>Zenbify Institute: step-by-step guides</a></div>
          </div>
        </div>
      </section>
      <CtaBand withApp={false} />
    </>
  );
}
