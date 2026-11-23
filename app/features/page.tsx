import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { CtaBand } from "@/components/CtaBand";
import { Laptop, Phone, Scene } from "@/components/Device";
import { AiCall, CampaignPane, ShipCard } from "@/components/mocks";
import { cta, pillars } from "@/content/site";

export const metadata: Metadata = {
  title: "Features",
  description: "Order confirmation, courier booking, store building, marketing and profit tracking in Zenbify, grouped by the job you are trying to do.",
  alternates: { canonical: "/features" },
};

const visuals: Record<string, React.ReactNode> = {
  confirm: <Scene float={<AiCall />}><Laptop src="/img/dashboard-orders.webp" w={2880} h={1800} alt="Orders dashboard with confirmation statuses, using sample data" /></Scene>,
  ship: <Scene float={<ShipCard />} className="phone-lead"><Phone src="/img/phone-tracking.webp" w={780} h={1688} alt="Customer tracking page with delivery map and timeline, using sample data" /></Scene>,
  grow: <Scene float={<CampaignPane />}><Laptop src="/img/storefront.webp" w={2880} h={1800} alt="Sample storefront built with a Zenbify theme" /></Scene>,
  know: <Scene float={<Phone src="/img/phone-orders.webp" w={780} h={1688} alt="Orders list on a phone, using sample data" className="small" />}><Laptop src="/img/dashboard-profit.webp" w={2880} h={1800} alt="Profit dashboard with revenue, costs and net profit, using sample data" /></Scene>,
};

export default function Features() {
  return (
    <>
      <section className="phero on-dark">
        <div className="wrap">
          <span className="label"><b>●</b> Features</span>
          <h1 className="display">Everything you need to <span className="serif">run your business.</span></h1>
          <p className="lead">From building your store to marketing, orders, delivery and automation, grouped by the job you are trying to do.</p>
          <nav className="jump" aria-label="Feature groups">{pillars.map((p) => <a key={p.id} href={`#${p.id}`}>{p.title}</a>)}</nav>
        </div>
      </section>
      {pillars.map((p, i) => (
        <section key={p.id} id={p.id} className={`fsec ${i % 2 ? "on-paper-2" : "on-paper"}`} aria-labelledby={`${p.id}-t`}>
          <div className={`wrap fsplit${i % 2 ? " flip" : ""}`}>
            <div>
              <span className="label"><b>0{i + 1}</b> {p.title}</span>
              <h2 className="h2" id={`${p.id}-t`} style={{ marginTop: 22 }}>{p.lead}</h2>
              <ul className="flist">{p.features.map((f, n) => <li key={f}><span>{String(n + 1).padStart(2, "0")}</span>{f}</li>)}</ul>
            </div>
            <div>{visuals[p.id]}</div>
          </div>
        </section>
      ))}
      <section className="fsec on-paper">
        <div className="wrap btn-row"><Button href={cta.primary.href} variant="ink" arrow>{cta.primary.label}</Button><Button href="/pricing" variant="line">View pricing</Button></div>
      </section>
      <CtaBand withApp={false} />
    </>
  );
}
