import type { Metadata } from "next";
import { CtaBand } from "@/components/CtaBand";
import { Faq } from "@/components/Faq";
import { Pricing } from "@/components/Pricing";
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
      <section className="phero on-dark">
        <div className="wrap">
          <span className="label"><b>●</b> Pricing</span>
          <h1 className="display">Big ambitions. <span className="serif">A plan that fits.</span></h1>
          <p className="lead">Start free. No credit card required.</p>
        </div>
      </section>
      <section className="sec on-paper"><div className="wrap"><Pricing /></div></section>
      <section className="sec on-paper-2">
        <div className="wrap faqgrid">
          <div className="sticky"><span className="label"><b>●</b> Billing</span><h2 className="h2" style={{ marginTop: 22 }}>Common <span className="serif-acc">questions.</span></h2></div>
          <Faq items={billing} />
        </div>
      </section>
      <CtaBand withApp={false} />
    </>
  );
}
