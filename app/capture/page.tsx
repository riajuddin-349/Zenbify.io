import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { CSSProperties } from "react";
import { Av, Pill, ProfitChart, Spark, Wave } from "@/components/mocks";

/**
 * Asset source page. Only renders when built with CAPTURE=1; run
 * `npm run assets` to regenerate the WebP product screens in /public/img.
 * In a normal build this route is a 404.
 */
export const metadata: Metadata = { robots: { index: false, follow: false } };

const rows = [
  ["#ZB-1052", "JB", "Jui B.", "Linen shirt", "৳1,750", "call", "Calling"],
  ["#ZB-1051", "SA", "Sara A.", "Wireless headphones", "৳2,450", "ok", "Confirmed"],
  ["#ZB-1050", "MH", "Mim H.", "Running shoes", "৳2,490", "risk", "High risk"],
  ["#ZB-1049", "RK", "Rakib K.", "Travel backpack", "৳1,890", "ok", "Confirmed"],
  ["#ZB-1048", "TN", "Tanvir N.", "Smart watch", "৳4,990", "wait", "Duplicate"],
  ["#ZB-1047", "NF", "Nila F.", "Cotton kurta set", "৳1,650", "ok", "Confirmed"],
  ["#ZB-1046", "AR", "Arif R.", "Desk lamp", "৳1,290", "wait", "Pending"],
  ["#ZB-1045", "FK", "Farhana K.", "Linen shirt", "৳1,750", "ok", "Confirmed"],
  ["#ZB-1044", "SH", "Shafin H.", "Wireless headphones", "৳2,450", "ok", "Confirmed"],
  ["#ZB-1043", "LM", "Lamia M.", "Cotton kurta set", "৳1,650", "ok", "Confirmed"],
  ["#ZB-1042", "ZH", "Zahid H.", "Travel backpack", "৳1,890", "wait", "Pending"],
  ["#ZB-1041", "PD", "Priya D.", "Desk lamp", "৳1,290", "ok", "Confirmed"],
  ["#ZB-1040", "OK", "Omar K.", "Running shoes", "৳2,490", "ok", "Confirmed"],
] as const;

const nav = ["Overview", "Orders", "Confirmation", "Couriers", "Store", "Campaigns", "Profit"];

function Side({ active }: { active: string }) {
  return (
    <aside className="cx-side">
      <div className="cx-logo"><i />Zenbify</div>
      {nav.map((n) => <span key={n} className={n === active ? "on" : ""}><b />{n}</span>)}
      <div className="cx-foot"><span>Pathao · REDX · Steadfast</span><span>bKash · Nagad</span></div>
    </aside>
  );
}
function Top({ title, sub }: { title: string; sub: string }) {
  return (
    <div className="cx-top">
      <div><h1>{title}</h1><small>{sub}</small></div>
      <div className="cx-search">Search orders, customers</div>
      <span className="pill">Sample data</span>
      <Av n="Z" i={0} />
    </div>
  );
}

function DashLight() {
  return (
    <div className="app cx" id="s-dash" style={{ width: 1440, height: 900 }}>
      <Side active="Orders" />
      <div className="cx-main">
        <Top title="Orders" sub="Today · all channels" />
        <div className="kpis cx4">
          <div className="kpi"><small>Orders today</small><strong>52</strong><Spark pts={[4, 6, 5, 9, 8, 12, 11, 15]} /></div>
          <div className="kpi"><small>Confirmed</small><strong>79%</strong><Spark pts={[5, 6, 6, 7, 8, 8, 9, 10]} /></div>
          <div className="kpi"><small>Flagged for review</small><strong>3</strong><Spark pts={[1, 2, 1, 3, 2, 3, 2, 3]} /></div>
          <div className="kpi"><small>Booked with couriers</small><strong>31</strong><Spark pts={[3, 4, 3, 6, 7, 6, 9, 11]} /></div>
        </div>
        <div className="cx-cols">
          <div className="tbl">
            <div className="tr th"><span>Order</span><span>Customer</span><span>Item</span><span style={{ textAlign: "right" }}>Total</span><span>Status</span></div>
            {rows.map((r, i) => (
              <div className={`tr${r[5] === "risk" ? " flag" : ""}`} key={r[0]}>
                <span className="id">{r[0]}</span>
                <span className="who"><Av n={r[1]} i={i} /><span><b>{r[2]}</b></span></span>
                <span style={{ color: "var(--a-mut)" }}>{r[3]}</span>
                <span className="amt">{r[4]}</span>
                <Pill tone={r[5]}>{r[6]}</Pill>
              </div>
            ))}
          </div>
          <div className="cx-right">
            <div className="card-a dkc">
              <div className="a-title"><span className="pill call">Live call</span><span className="mono">00:18</span></div>
              <Wave />
              <div className="chat"><div className="bubble">Hello Jui, you ordered a linen shirt, ৳1,750 cash on delivery. Shall we confirm?</div><div className="bubble me">Yes, please confirm.</div></div>
            </div>
            <div className="card-a">
              <h4>Book courier</h4>
              <div className="seg"><div><b>Pathao</b><small>Connected</small></div><div className="on"><b>Steadfast</b><small>Selected</small></div><div><b>REDX</b><small>Connected</small></div></div>
              <div className="row-a"><span style={{ color: "var(--a-mut)" }}>Tracking</span><span className="mono">SF12837645</span></div>
            </div>
            <div className="card-a">
              <h4>Needs a look</h4>
              <div className="row-a" style={{ borderTop: 0 }}><span>#ZB-1050 · Mim H.</span><Pill tone="risk">High risk</Pill></div>
              <div className="row-a"><span>#ZB-1048 · Tanvir N.</span><Pill tone="wait">Duplicate</Pill></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function DashDark() {
  return (
    <div className="app dk cx" id="s-profit" style={{ width: 1440, height: 900 }}>
      <Side active="Profit" />
      <div className="cx-main">
        <Top title="Profit" sub="Last 12 weeks" />
        <div className="kpis cx4">
          <div className="kpi"><small>Revenue</small><strong>৳1,24,500</strong><span className="d">+12%</span></div>
          <div className="kpi"><small>Costs</small><strong>৳76,250</strong><span className="d" style={{ color: "var(--a-mut)" }}>incl. delivery</span></div>
          <div className="kpi"><small>Net profit</small><strong style={{ color: "var(--accent)" }}>৳48,250</strong><span className="d">+9%</span></div>
          <div className="kpi"><small>Orders delivered</small><strong>312</strong><Spark pts={[3, 4, 3, 6, 7, 6, 9, 11]} /></div>
        </div>
        <div className="cx-cols prof">
          <div className="card-a"><div className="a-title"><h4 style={{ margin: 0 }}>Revenue and net profit</h4><div className="legend"><span><i style={{ background: "var(--a-ln)" }} />Revenue</span><span><i style={{ background: "var(--accent)" }} />Net profit</span></div></div><div style={{ height: 560 } as CSSProperties}><ProfitChart /></div></div>
          <div className="card-a">
            <h4>Top products</h4>
            {[["Smart watch", "৳38,400", 92], ["Running shoes", "৳29,880", 70], ["Travel backpack", "৳18,900", 46], ["Linen shirt", "৳12,250", 30]].map(([n, v, p]) => (
              <div className="prod-row" key={n as string}><span className="thumb" style={{ background: "linear-gradient(135deg,#25476d,#6fb0ff)" }} /><div><b style={{ fontWeight: 560 }}>{n}</b><div className="bar"><i style={{ width: `${p}%` }} /></div></div><span className="mono">{v}</span></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function PhoneOrders() {
  return (
    <div className="app ph-screen" id="s-phone-orders" style={{ width: 390, height: 844 }}>
      <div className="ph-head"><b>Orders</b><span className="pill">Sample data</span></div>
      <div className="a-tabs" style={{ padding: "0 16px" }}><span className="on">All<small>52</small></span><span>Pending<small>9</small></span><span>Flagged<small>3</small></span></div>
      <div className="kpis" style={{ gridTemplateColumns: "1fr 1fr", padding: "12px 16px 0" }}>
        <div className="kpi"><small>Confirmed</small><strong>79%</strong><Spark pts={[5, 6, 6, 7, 8, 8, 9, 10]} /></div>
        <div className="kpi"><small>Net profit</small><strong>৳48,250</strong><Spark pts={[3, 4, 3, 6, 7, 6, 9, 11]} /></div>
      </div>
      <div className="ph-list">
        {rows.slice(0, 6).map((r, i) => (
          <div className="ph-card" key={r[0]}><Av n={r[1]} i={i} /><div><b>{r[2]}</b><small>{r[3]}</small></div><div style={{ textAlign: "right" }}><b className="mono">{r[4]}</b><br /><Pill tone={r[5]}>{r[6]}</Pill></div></div>
        ))}
      </div>
      <div className="ph-bar"><span className="on">Orders</span><span>Ship</span><span>Store</span><span>Profit</span></div>
    </div>
  );
}

function PhoneTrack() {
  return (
    <div className="app ph-screen trk" id="s-phone-track" style={{ width: 390, height: 844 }}>
      <div className="ph-head"><b>Track your order</b><span className="pill">Sample data</span></div>
      <div className="trk-map" aria-hidden="true">
        <svg viewBox="0 0 358 190" width="100%" height="190"><rect width="358" height="190" fill="#e9efe3" /><g stroke="#d3dccb" strokeWidth="10" fill="none"><path d="M0 60 L358 90" /><path d="M80 0 L120 190" /><path d="M240 0 L220 190" /></g><path d="M40 150 C110 140 150 60 215 70 S300 40 322 38" stroke="#4c7a00" strokeWidth="3" strokeDasharray="2 7" strokeLinecap="round" fill="none" /><circle cx="40" cy="150" r="7" fill="#fff" stroke="#4c7a00" strokeWidth="3" /><circle cx="322" cy="38" r="9" fill="#4c7a00" /><circle cx="215" cy="70" r="11" fill="#c9f26b" stroke="#10200a" strokeWidth="2" /></svg>
      </div>
      <div className="card-a"><div className="a-title"><strong>#ZB-1051 · Sara A.</strong><Pill tone="call">On the way</Pill></div><div className="row-a"><span style={{ color: "var(--a-mut)" }}>Courier</span><b>Steadfast</b></div><div className="row-a"><span style={{ color: "var(--a-mut)" }}>Tracking</span><span className="mono">SF12837645</span></div><div className="row-a"><span style={{ color: "var(--a-mut)" }}>Payment</span><b>Cash on delivery · ৳2,450</b></div></div>
      <div className="card-a"><ul className="steps-a">
        <li className="done"><span><b>Order confirmed</b></span><small>10:02</small></li>
        <li className="done"><span><b>Courier booked</b></span><small>10:04</small></li>
        <li className="now"><span><b>Out for delivery</b></span><small>Now</small></li>
        <li><span><b>Delivered</b></span><small>—</small></li>
      </ul></div>
    </div>
  );
}

function Store() {
  const g = [["#3f6b3a", "#9bd35a", "Running shoes", "৳2,490"], ["#25476d", "#6fb0ff", "Smart watch", "৳4,990"], ["#7a3f2a", "#f0a463", "Travel backpack", "৳1,890"], ["#5a3f7a", "#c9a4f0", "Linen shirt", "৳1,750"]];
  return (
    <div className="app cx store" id="s-store" style={{ width: 1440, height: 900, display: "block" }}>
      <div className="st-nav"><b>The Fashion Edit</b><span>New</span><span>Men</span><span>Women</span><span>Sale</span><span style={{ marginLeft: "auto" }}>Cart (0)</span></div>
      <div className="st-hero"><div><small>New season</small><h2>New season<br />essentials.</h2><span className="cta-m">Shop now</span></div><div className="st-art"><i /><i /><i /></div></div>
      <div className="st-grid">{g.map(([a, b, n, p]) => <div key={n}><div className="im" style={{ background: `linear-gradient(135deg,${a},${b})` }} /><b>{n}</b><span>{p} · cash on delivery</span></div>)}</div>
    </div>
  );
}

export default function Capture() {
  if (!process.env.CAPTURE) notFound();
  return <div className="cap-root"><DashLight /><DashDark /><PhoneOrders /><PhoneTrack /><Store /></div>;
}
