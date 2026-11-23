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
      <section className="phero on-dark">
        <div className="wrap">
          <span className="label"><b>●</b> Contact us</span>
          <h1 className="display">Talk to the <span className="serif">Zenbify team.</span></h1>
          <p className="lead">Ask about storefronts, payments, automation or which plan fits your store.</p>
        </div>
      </section>
      <section className="sec on-paper" style={{ minHeight: "50vh" }}>
        <div className="wrap fsplit" style={{ alignItems: "start" }}>
          <div>
            <p className="label">Support hotline</p>
            <a className="hot" href={`tel:${HOTLINE}`} style={{ color: "#0b1410" }}>{HOTLINE}</a>
            {company.supportHours && <p className="mut">{company.supportHours}</p>}
          </div>
          <dl className="dl">
            <div><dt>Live chat</dt><dd>Use the chat on the Zenbify website for quick questions.</dd></div>
            {company.supportEmail && <div><dt>Email</dt><dd><a href={`mailto:${company.supportEmail}`}>{company.supportEmail}</a></dd></div>}
            <div><dt>Or try it</dt><dd style={{ display: "grid", gap: 14, justifyItems: "start" }}>Start the free trial. No credit card required.<Button href={SIGNUP_URL} variant="ink" arrow>Start free trial</Button></dd></div>
          </dl>
        </div>
      </section>
    </>
  );
}
