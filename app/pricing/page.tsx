import type { Metadata } from "next";
import { CtaBand } from "@/components/CtaBand";
import { Faq } from "@/components/Faq";
import { Pricing } from "@/components/Pricing";
import { SectionHead } from "@/components/SectionHead";
import { faqs } from "@/content/site";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Zenbify plans in BDT. Start a free trial with no credit card required.",
  alternates: { canonical: "/pricing" },
};

export default function PricingPage() {
  const billing = faqs.filter((f) => /credit card|help/i.test(f.q));
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Pricing</p>
          <h1 className="h1" style={{ maxWidth: "16ch" }}>Big ambitions. A plan that fits.</h1>
          <p className="lead" style={{ marginTop: 18 }}>Start free. No credit card required.</p>
        </div>
      </section>
      <section className="section-tight" style={{ padding: "24px 0 80px" }}>
        <div className="container"><Pricing /></div>
      </section>
      <section className="section section-alt">
        <div className="container" style={{ maxWidth: 860 }}>
          <SectionHead title="Billing questions" />
          <Faq items={billing} />
        </div>
      </section>
      <CtaBand />
    </>
  );
}
