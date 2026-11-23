import type { CSSProperties, ReactNode } from "react";
import { CountUp } from "./CountUp";

/**
 * Product interface illustrations.
 * Everything here is built in HTML/CSS/SVG from the capabilities the Zenbify
 * site describes (orders, risk/duplicate flags, AI confirmation calls,
 * courier booking, profit, themes). All names and figures are sample data and
 * every window carries a "Sample data" tag.
 */

/* ───────────── primitives ───────────── */

export function AppWin({ title, dk, className = "", label, children }: { title: string; dk?: boolean; className?: string; label: string; children: ReactNode }) {
  return (
    <div className={`app${dk ? " dk" : ""} ${className}`} role="img" aria-label={label}>
      <div className="app-bar" aria-hidden="true"><i /><i /><i /><span>{title}</span><em>Sample data</em></div>
      <div className="app-body" aria-hidden="true">{children}</div>
    </div>
  );
}

type Tone = "ok" | "wait" | "call" | "risk" | "";
export const Pill = ({ tone = "", children }: { tone?: Tone; children: ReactNode }) => <span className={`pill ${tone}`}>{children}</span>;

const avColors = ["#2f6f55", "#8a4b2d", "#3b5aa8", "#7a4a8c", "#9a7a1c", "#2c7f87"];
export const Av = ({ n, i = 0 }: { n: string; i?: number }) => <span className="av" style={{ background: avColors[i % avColors.length] }}>{n}</span>;

export function Spark({ pts, color = "var(--accent)" }: { pts: number[]; color?: string }) {
  const max = Math.max(...pts), min = Math.min(...pts);
  const d = pts.map((p, i) => `${i ? "L" : "M"}${(i / (pts.length - 1)) * 100},${22 - ((p - min) / (max - min || 1)) * 20 - 1}`).join(" ");
  return <svg viewBox="0 0 100 22" preserveAspectRatio="none"><path d={d} fill="none" stroke={color} strokeWidth="1.6" vectorEffect="non-scaling-stroke" /></svg>;
}

const Thumb = ({ a, b }: { a: string; b: string }) => <span className="thumb" style={{ background: `linear-gradient(135deg, ${a}, ${b})` }} />;

export function Wave({ n = 28, idle }: { n?: number; idle?: boolean }) {
  return (
    <div className={`wave${idle ? " idle" : ""}`}>
      {Array.from({ length: n }, (_, i) => {
        const h = 28 + ((i * 37) % 70);
        return <i key={i} style={{ "--h": `${h}%`, "--d": `${(i % 9) * 0.11}s` } as CSSProperties} />;
      })}
    </div>
  );
}

/* ───────────── orders ───────────── */

type Row = { id: string; n: string; who: string; sub: string; amt: string; st: [Tone, string]; flag?: boolean; i: number };
const rows: Row[] = [
  { id: "#ZB-1048", n: "SA", who: "Sara A.", sub: "Wireless headphones", amt: "৳2,450", st: ["call", "Calling"], i: 0 },
  { id: "#ZB-1047", n: "RK", who: "Rakib K.", sub: "Travel backpack", amt: "৳1,890", st: ["ok", "Confirmed"], i: 1 },
  { id: "#ZB-1046", n: "MH", who: "Mim H.", sub: "Running shoes", amt: "৳2,490", st: ["risk", "High risk"], flag: true, i: 2 },
  { id: "#ZB-1045", n: "TN", who: "Tanvir N.", sub: "Smart watch", amt: "৳4,990", st: ["wait", "Duplicate"], i: 3 },
  { id: "#ZB-1044", n: "NF", who: "Nila F.", sub: "Cotton kurta set", amt: "৳1,650", st: ["ok", "Confirmed"], i: 4 },
  { id: "#ZB-1043", n: "AR", who: "Arif R.", sub: "Running shoes", amt: "৳2,490", st: ["wait", "Pending"], i: 5 },
];

export function OrdersTable({ n = 6, riskOnly }: { n?: number; riskOnly?: boolean }) {
  const list = (riskOnly ? [rows[2], rows[3], rows[0], rows[5]] : rows).slice(0, n);
  return (
    <div className="tbl">
      <div className="tr th"><span>Order</span><span>Customer</span><span className="hide-s">Item</span><span style={{ textAlign: "right" }}>Total</span><span>Status</span></div>
      {list.map((r) => (
        <div className={`tr${r.flag ? " flag" : ""}`} key={r.id}>
          <span className="id">{r.id}</span>
          <span className="who"><Av n={r.n} i={r.i} /><span><b>{r.who}</b></span></span>
          <span className="hide-s" style={{ color: "var(--a-mut)" }}>{r.sub}</span>
          <span className="amt">{r.amt}</span>
          <Pill tone={r.st[0]}>{r.st[1]}</Pill>
        </div>
      ))}
    </div>
  );
}

export function OrdersApp({ label = "Orders dashboard with confirmation, duplicate and risk statuses, using sample data", className = "" }: { label?: string; className?: string }) {
  return (
    <AppWin title="zenbify / orders" label={label} className={className}>
      <div className="a-title">
        <strong>Orders</strong>
        <div className="a-tabs"><span className="on">All<small>160</small></span><span>Pending<small>36</small></span><span>Confirmed<small>124</small></span><span>Flagged<small>3</small></span></div>
      </div>
      <div className="kpis">
        <div className="kpi"><small>Orders today</small><strong>48</strong><Spark pts={[4, 6, 5, 9, 8, 12, 11, 15]} /></div>
        <div className="kpi"><small>Confirmed</small><strong>79%</strong><Spark pts={[5, 6, 6, 7, 8, 8, 9, 10]} /></div>
        <div className="kpi"><small>Net profit</small><strong>৳48,250</strong><Spark pts={[3, 4, 3, 6, 7, 6, 9, 11]} /></div>
      </div>
      <OrdersTable />
    </AppWin>
  );
}

/* ───────────── floating cards ───────────── */

export function AiCall({ className = "" }: { className?: string }) {
  return (
    <AppWin title="AI confirmation call" dk className={className} label="AI confirmation call card with sample transcript">
      <div className="a-title"><span className="pill call">Live call</span><span className="mono" style={{ color: "var(--a-mut)", fontSize: 11 }}>00:18</span></div>
      <Wave />
      <div className="chat">
        <div className="bubble">Hello Sara, you ordered wireless headphones, ৳2,450 cash on delivery. Shall we confirm?</div>
        <div className="bubble me">Yes, please confirm.</div>
      </div>
      <div className="row-a" style={{ borderTop: "1px solid var(--a-ln)", paddingBottom: 0 }}><span style={{ color: "var(--a-mut)" }}>Result</span><Pill tone="ok">Order confirmed</Pill></div>
    </AppWin>
  );
}

export function ShipCard({ className = "" }: { className?: string }) {
  return (
    <AppWin title="Book courier" className={className} label="Courier booking card showing Pathao, REDX and Steadfast, using sample data">
      <div className="seg">
        <div><b>Pathao</b><small>Connected</small></div>
        <div className="on"><b>Steadfast</b><small>Selected</small></div>
        <div><b>REDX</b><small>Connected</small></div>
      </div>
      <div className="row-a" style={{ paddingBottom: 0 }}><span style={{ color: "var(--a-mut)" }}>Tracking</span><span className="mono">SF12837645</span></div>
    </AppWin>
  );
}

export function Toast({ className = "" }: { className?: string }) {
  return (
    <AppWin title="Notification" className={className} label="New order notification, using sample data">
      <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
        <span className="av" style={{ background: "#2f6f55", borderRadius: 8 }}>Z</span>
        <div><b>New order received</b><div style={{ color: "var(--a-mut)" }}>৳2,450 · cash on delivery</div></div>
      </div>
    </AppWin>
  );
}

/* ───────────── workflow panes ───────────── */

export function StoreBuilder() {
  return (
    <AppWin title="zenbify / store builder" label="Store builder with product list and mobile storefront preview, using sample data">
      <div className="sb-grid">
        <div className="sidebar-a"><span>Pages</span><span className="on">Products</span><span>Theme</span><span>Domain</span><span>Checkout</span></div>
        <div className="card-a">
          <h4>Products</h4>
          {[["Running shoes", "৳2,490", "#3f6b3a", "#9bd35a"], ["Smart watch", "৳4,990", "#25476d", "#6fb0ff"], ["Travel backpack", "৳1,890", "#7a3f2a", "#f0a463"]].map(([n, p, a, b]) => (
            <div className="row-a" key={n}><span style={{ display: "flex", gap: 10, alignItems: "center" }}><Thumb a={a} b={b} /><b style={{ fontWeight: 560 }}>{n}</b></span><span className="mono">{p}</span></div>
          ))}
          <div className="row-a"><span style={{ color: "var(--a-mut)" }}>+ Add product</span><Pill tone="ok">Published</Pill></div>
        </div>
        <div className="phone" aria-hidden="true">
          <div className="ph-top" />
          <div className="ph-h">Your store</div>
          <div className="ph-hero">New season</div>
          <div className="ph-grid">
            <div><div className="im" style={{ background: "linear-gradient(135deg,#3f6b3a,#9bd35a)" }} />Running shoes<br /><b>৳2,490</b></div>
            <div><div className="im" style={{ background: "linear-gradient(135deg,#25476d,#6fb0ff)" }} />Smart watch<br /><b>৳4,990</b></div>
          </div>
        </div>
      </div>
    </AppWin>
  );
}

export function CampaignPane() {
  return (
    <AppWin title="zenbify / campaigns" label="Campaign builder with an AI ad creative preview and competitor angles, using sample data">
      <div className="ad">
        <div className="ad-card"><div className="big">Summer<br />sale.</div><span className="ob" /><span className="cta-m">Shop now</span></div>
        <div style={{ display: "grid", gap: 10, alignContent: "start" }}>
          <div className="card-a"><h4>Competitor angles</h4><div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}><Pill>Free delivery</Pill><Pill>Limited stock</Pill><Pill>Cash on delivery</Pill></div></div>
          <div className="kpis" style={{ gridTemplateColumns: "1fr 1fr" }}>
            <div className="kpi"><small>Reach</small><strong>12.4K</strong><Spark pts={[2, 3, 5, 4, 7, 9, 12]} /></div>
            <div className="kpi"><small>Conversion</small><strong>+18%</strong><Spark pts={[2, 2, 3, 3, 5, 6, 8]} /></div>
          </div>
          <div className="card-a"><h4>Tracking</h4><div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}><Pill tone="ok">Meta Pixel</Pill><Pill tone="ok">GA4</Pill><Pill tone="ok">TikTok Pixel</Pill></div></div>
        </div>
      </div>
    </AppWin>
  );
}

export function ConfirmPane() {
  return (
    <div style={{ display: "grid", gap: 12 }}>
      <OrdersApp className="" label="Orders list with a confirmation call in progress, using sample data" />
      <AiCall className="" />
    </div>
  );
}

export function CourierPane() {
  return (
    <AppWin title="zenbify / shipping" label="Courier booking and tracking timeline, using sample data">
      <div className="cour">
        <div style={{ display: "grid", gap: 10, alignContent: "start" }}>
          <div className="a-title"><strong>#ZB-1048 · Sara A.</strong><Pill tone="ok">Confirmed</Pill></div>
          <div className="seg">
            <div><b>Pathao</b><small>Connected</small></div>
            <div className="on"><b>Steadfast</b><small>Selected</small></div>
            <div><b>REDX</b><small>Connected</small></div>
          </div>
          <div className="card-a"><h4>Customer tracking page</h4><div className="row-a" style={{ paddingBottom: 0 }}><span className="mono">SF12837645</span><Pill tone="call">Shared</Pill></div></div>
        </div>
        <div className="card-a">
          <h4>Delivery timeline</h4>
          <ul className="steps-a">
            <li className="done"><span><b>Order confirmed</b><br /><small>AI call</small></span><small>10:02</small></li>
            <li className="done"><span><b>Courier booked</b><br /><small>Steadfast</small></span><small>10:04</small></li>
            <li className="now"><span><b>Picked up</b><br /><small>On the way to hub</small></span><small>Now</small></li>
            <li><span><b>Delivered</b><br /><small>Cash collected</small></span><small>—</small></li>
          </ul>
        </div>
      </div>
    </AppWin>
  );
}

/* ───────────── profit ───────────── */

export function ProfitChart() {
  const rev = [42, 55, 48, 66, 61, 78, 70, 92, 84, 99, 90, 112];
  const net = [14, 19, 15, 24, 20, 29, 25, 36, 31, 40, 34, 46];
  const w = 560, h = 170, max = 120;
  const bw = w / rev.length;
  const line = net.map((v, i) => `${i ? "L" : "M"}${i * bw + bw / 2},${h - (v / max) * h}`).join(" ");
  return (
    <svg className="chart draw" viewBox={`0 0 ${w} ${h}`} preserveAspectRatio="none" aria-hidden="true">
      {[0.25, 0.5, 0.75].map((g) => <line key={g} x1="0" x2={w} y1={h * g} y2={h * g} stroke="var(--a-ln)" strokeWidth="1" vectorEffect="non-scaling-stroke" />)}
      {rev.map((v, i) => <rect key={i} style={{ "--i": i } as CSSProperties} x={i * bw + 6} width={bw - 12} y={h - (v / max) * h} height={(v / max) * h} rx="3" fill="var(--a-ln)" />)}
      <path className="ln" d={line} fill="none" stroke="var(--accent)" strokeWidth="2.4" vectorEffect="non-scaling-stroke" strokeLinejoin="round" />
      {net.map((v, i) => i === net.length - 1 && <circle key={i} cx={i * bw + bw / 2} cy={h - (v / max) * h} r="4.5" fill="var(--accent)" />)}
    </svg>
  );
}

export function ProfitApp() {
  return (
    <AppWin title="zenbify / profit" dk label="Profit dashboard with revenue, costs, net profit, trend chart and top products, using sample data">
      <div className="kpis">
        <div className="kpi"><small>Revenue</small><strong><CountUp value={124500} /></strong><span className="d">+12%</span></div>
        <div className="kpi"><small>Costs</small><strong><CountUp value={76250} /></strong><span className="d" style={{ color: "var(--a-mut)" }}>incl. delivery</span></div>
        <div className="kpi"><small>Net profit</small><strong style={{ color: "var(--accent)" }}><CountUp value={48250} /></strong><span className="d">+9%</span></div>
      </div>
      <div className="card-a p-main">
        <div className="a-title" style={{ marginBottom: 8 }}><h4 style={{ margin: 0 }}>Revenue and net profit, last 12 weeks</h4><div className="legend"><span><i style={{ background: "var(--a-ln)" }} />Revenue</span><span><i style={{ background: "var(--accent)" }} />Net profit</span></div></div>
        <ProfitChart />
      </div>
      <div className="card-a">
        <h4>Top products</h4>
        {[["Smart watch", "৳38,400", 92, "#25476d", "#6fb0ff"], ["Running shoes", "৳29,880", 70, "#3f6b3a", "#9bd35a"], ["Travel backpack", "৳18,900", 46, "#7a3f2a", "#f0a463"]].map(([n, v, p, a, b]) => (
          <div className="prod-row" key={n as string}><Thumb a={a as string} b={b as string} /><div><b style={{ fontWeight: 560 }}>{n}</b><div className="bar"><i style={{ width: `${p}%` }} /></div></div><span className="mono">{v}</span></div>
        ))}
      </div>
    </AppWin>
  );
}

/* ───────────── fraud / recovery ───────────── */

export function Recovery({ className = "" }: { className?: string }) {
  return (
    <AppWin title="Failed order recovery" dk className={className} label="Failed order recovery card, using sample data">
      <div className="a-title"><strong>Failed delivery · #ZB-1039</strong><Pill tone="wait">Recovering</Pill></div>
      <ul className="steps-a">
        <li className="done"><span><b>Delivery failed</b><br /><small>Customer unreachable</small></span><small>09:12</small></li>
        <li className="now"><span><b>Follow-up call queued</b><br /><small>AI calling</small></span><small>Now</small></li>
        <li><span><b>Rebook courier</b></span><small>—</small></li>
      </ul>
    </AppWin>
  );
}

/* ───────────── storefronts ───────────── */

export function Storefronts() {
  const sfs = [
    { cls: "sf sf1", url: "fashion-edit.store", name: "The Fashion Edit", c: "linear-gradient(135deg,#7a3f2a,#d9895a)", g: ["#e9c7a8", "#c98a63", "#8f5a3c"], h: "New season\nessentials", tag: "Fashion" },
    { cls: "sf sf2", url: "one-of-a-kind.store", name: "One of a Kind", c: "linear-gradient(135deg,#10200a,#3f6b00)", g: ["#bfe27a", "#8fbf3a", "#5d8a1c"], h: "One product.\nDone right.", tag: "Single product" },
    { cls: "sf sf3", url: "next-in-tech.store", name: "Next in Tech", c: "linear-gradient(135deg,#12294a,#3a7bd5)", g: ["#a9c9f5", "#6a9be0", "#3a66ad"], h: "Next in\ntech", tag: "Electronics" },
  ];
  return (
    <div className="fan" aria-label="Three example storefront themes, using sample content" role="img">
      {sfs.map((s) => (
        <div className={s.cls} key={s.name} aria-hidden="true">
          <div className="bar-s"><i /><i /><i /><span>{s.url}</span></div>
          <div className="nm">{s.name}<small>Cart (0)</small></div>
          <div className="hero-s" style={{ background: s.c, whiteSpace: "pre-line" }}>{s.h}</div>
          <div className="gr">{s.g.map((g) => <div key={g} style={{ background: g }} />)}</div>
          <span className="tag-m">{s.tag} · mobile ready</span>
        </div>
      ))}
    </div>
  );
}

/* ───────────── chaos → one record ───────────── */

export function Chaos() {
  return (
    <div className="chaos" role="img" aria-label="Illustration of an order scattered across chat, social inbox, spreadsheet, courier slip and payment message">
      <div className="frag wa"><div className="src"><span>WhatsApp</span><span>10:41</span></div>Is it ৳2,450 with delivery? Same address as last time.</div>
      <div className="frag fb"><div className="src"><span>Facebook inbox</span><span>10:44</span></div>I want to order the headphones too</div>
      <div className="frag xl"><table><thead><tr><th>Order</th><th>Item</th><th>Qty</th></tr></thead><tbody><tr><td>1045</td><td>Smart watch</td><td className="bad">2</td></tr><tr><td>1045</td><td>Smart watch</td><td className="bad">1</td></tr></tbody></table></div>
      <div className="frag cr"><div className="src"><span>Courier slip</span></div>Tracking: <b>not copied</b><br /><span className="warn">Customer asking where it is</span></div>
      <div className="frag bk"><div className="src"><span>bKash</span><span>SMS</span></div>Received ৳2,450. Does this match an order?</div>
      <div className="frag nt"><div className="src"><span>Notes</span></div>Call Sara back. Confirm?</div>
    </div>
  );
}

export function OneRecord() {
  return (
    <div className="record">
      <span className="record-tag">One order, one record</span>
      <AppWin title="zenbify / #ZB-1048" label="A single order record with timeline from order received to profit counted, using sample data">
        <div className="a-title"><strong>#ZB-1048 · Sara A.</strong><Pill tone="ok">Confirmed</Pill></div>
        <div className="card-a">
          <div className="row-a"><span>Wireless headphones × 1</span><span className="mono">৳2,450</span></div>
          <div className="row-a"><span style={{ color: "var(--a-mut)" }}>Payment</span><span>Cash on delivery</span></div>
          <div className="row-a"><span style={{ color: "var(--a-mut)" }}>Courier</span><span>Steadfast · SF12837645</span></div>
        </div>
        <ul className="steps-a">
          <li className="done"><span><b>Order received</b><br /><small>Store</small></span><small>10:01</small></li>
          <li className="done"><span><b>Confirmed by AI call</b></span><small>10:02</small></li>
          <li className="done"><span><b>Courier booked</b></span><small>10:04</small></li>
          <li className="now"><span><b>Counted in profit</b><br /><small>Net ৳640 after costs</small></span><small>Now</small></li>
        </ul>
      </AppWin>
    </div>
  );
}
