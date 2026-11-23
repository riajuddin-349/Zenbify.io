"use client";

import { useEffect, useRef, useState } from "react";
import { AppWin, Av, Pill, Spark, Wave } from "./mocks";

/**
 * Hero product simulation. Pure function of (cycle, phase), so server and first
 * client render match. Each cycle one sample order arrives, is called, confirmed
 * and booked; every third order is flagged as a duplicate and held for review.
 * Everything is sample data. Pauses off-screen / hidden tab / on request, and
 * stays static under prefers-reduced-motion.
 */
type Order = { n: string; who: string; item: string; amt: string };
const pool: Order[] = [
  { n: "SA", who: "Sara A.", item: "Wireless headphones", amt: "৳2,450" },
  { n: "RK", who: "Rakib K.", item: "Travel backpack", amt: "৳1,890" },
  { n: "MH", who: "Mim H.", item: "Running shoes", amt: "৳2,490" },
  { n: "TN", who: "Tanvir N.", item: "Smart watch", amt: "৳4,990" },
  { n: "NF", who: "Nila F.", item: "Cotton kurta set", amt: "৳1,650" },
  { n: "AR", who: "Arif R.", item: "Desk lamp", amt: "৳1,290" },
  { n: "JB", who: "Jui B.", item: "Linen shirt", amt: "৳1,750" },
];
const at = (k: number) => pool[((k % pool.length) + pool.length) % pool.length];
const flagged = (k: number) => ((k % 3) + 3) % 3 === 2;
const PHASE_MS = 2300;

type Tone = "ok" | "wait" | "call" | "risk";
function status(k: number, live: number, phase: number): [Tone, string] {
  if (k !== live) return flagged(k) ? ["wait", "Held"] : ["ok", "Confirmed"];
  if (flagged(k)) return phase === 0 ? ["wait", "Pending"] : phase === 1 ? ["risk", "Duplicate"] : ["wait", "Held"];
  return phase === 0 ? ["wait", "Pending"] : phase === 1 ? ["call", "Calling"] : ["ok", "Confirmed"];
}

export function LiveHero() {
  const [cycle, setCycle] = useState(0);
  const [phase, setPhase] = useState(3);
  const [paused, setPaused] = useState(false);
  const [reduced, setReduced] = useState(true); // assume static until proven otherwise
  const [visible, setVisible] = useState(true);
  const [tabOn, setTabOn] = useState(true);
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduced(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    const io = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), { threshold: 0.2 });
    if (root.current) io.observe(root.current);
    const vis = () => setTabOn(!document.hidden);
    document.addEventListener("visibilitychange", vis);
    return () => { mq.removeEventListener("change", sync); io.disconnect(); document.removeEventListener("visibilitychange", vis); };
  }, []);

  const running = !reduced && !paused && visible && tabOn;
  useEffect(() => {
    if (!running) return;
    const t = setInterval(() => {
      setPhase((p) => {
        if (p === 3) { setCycle((c) => c + 1); return 0; }
        return p + 1;
      });
    }, PHASE_MS);
    return () => clearInterval(t);
  }, [running]);

  const k = cycle;
  const o = at(k);
  const flag = flagged(k);
  const first = o.who.split(" ")[0];
  const ids = [k, k - 1, k - 2, k - 3, k - 4, k - 5];
  const [tone, label] = status(k, k, phase);
  const calling = phase === 1 && !flag;
  const done = phase >= 2 && !flag;
  const booked = phase === 3 && !flag;
  const total = 48 + cycle;
  const held = 3 + Math.floor((cycle + 1) / 3);

  return (
    <div className="stage live" ref={root}>
      <AppWin title="zenbify / orders" label="Orders dashboard simulation: a new sample order arrives, is called, confirmed and booked with a courier. Every third order is held as a duplicate." className="main">
        <div className="a-title">
          <strong>Orders</strong>
          <div className="a-tabs"><span className="on">All<small>{160 + cycle}</small></span><span>Pending<small>{36 + (phase === 0 ? 1 : 0)}</small></span><span>Confirmed<small>{124 + cycle - Math.floor(cycle / 3)}</small></span><span>Flagged<small>{held}</small></span></div>
        </div>
        <div className="kpis">
          <div className="kpi"><small>Orders today</small><strong key={total} className="tick">{total}</strong><Spark pts={[4, 6, 5, 9, 8, 12, 11, 15]} /></div>
          <div className="kpi"><small>Confirmed</small><strong>79%</strong><Spark pts={[5, 6, 6, 7, 8, 8, 9, 10]} /></div>
          <div className="kpi"><small>Net profit</small><strong>৳48,250</strong><Spark pts={[3, 4, 3, 6, 7, 6, 9, 11]} /></div>
        </div>
        <div className="tbl">
          <div className="tr th"><span>Order</span><span>Customer</span><span className="hide-s">Item</span><span style={{ textAlign: "right" }}>Total</span><span>Status</span></div>
          {ids.map((id, idx) => {
            const p = at(id);
            const [t, l] = idx === 0 ? [tone, label] : status(id, k, phase);
            return (
              <div className={`tr${flagged(id) && (idx > 0 || phase > 0) ? " flag" : ""}${idx === 0 && !reduced ? " fresh" : ""}`} key={id}>
                <span className="id">#ZB-{1048 + id}</span>
                <span className="who"><Av n={p.n} i={((id % 6) + 6) % 6} /><span><b>{p.who}</b></span></span>
                <span className="hide-s" style={{ color: "var(--a-mut)" }}>{p.item}</span>
                <span className="amt">{p.amt}</span>
                <Pill tone={t}>{l}</Pill>
              </div>
            );
          })}
        </div>
      </AppWin>

      <AppWin title="AI confirmation call" dk className="fl call" label="AI confirmation call card with sample transcript">
        <div className="a-title">
          {flag && phase >= 1 ? <span className="pill risk">Not called</span> : calling ? <span className="pill call">Live call</span> : done ? <span className="pill ok">Call complete</span> : <span className="pill wait">Queued</span>}
          <span className="mono" style={{ color: "var(--a-mut)", fontSize: 11 }}>{calling ? "00:07" : done ? "00:18" : "00:00"}</span>
        </div>
        <Wave idle={!calling} />
        <div className="chat">
          {flag && phase >= 1 ? (
            <div className="bubble">Possible duplicate of an earlier order. Held for your review before any call.</div>
          ) : phase === 0 ? (
            <div className="bubble dim">New order from {first}. Call starting…</div>
          ) : (
            <>
              <div className="bubble" key={`a${k}`}>Hello {first}, you ordered {o.item.toLowerCase()}, {o.amt} cash on delivery. Shall we confirm?</div>
              {done && <div className="bubble me" key={`b${k}`}>Yes, please confirm.</div>}
            </>
          )}
        </div>
        <div className="row-a" style={{ borderTop: "1px solid var(--a-ln)", paddingBottom: 0 }}>
          <span style={{ color: "var(--a-mut)" }}>Result</span>
          {flag && phase >= 1 ? <Pill tone="wait">Held for review</Pill> : done ? <Pill tone="ok">Order confirmed</Pill> : <Pill tone="">Waiting</Pill>}
        </div>
      </AppWin>

      <AppWin title="Book courier" className="fl ship" label="Courier booking card showing Pathao, REDX and Steadfast, using sample data">
        <div className="seg">
          <div><b>Pathao</b><small>Connected</small></div>
          <div className={booked ? "on" : ""}><b>Steadfast</b><small>{booked ? "Selected" : "Connected"}</small></div>
          <div><b>REDX</b><small>Connected</small></div>
        </div>
        <div className="row-a" style={{ paddingBottom: 0 }}><span style={{ color: "var(--a-mut)" }}>Tracking</span><span className={`mono${booked ? " tick" : ""}`} key={booked ? k : "x"}>{booked ? `SF${12837645 + k}` : flag && phase >= 1 ? "Held" : "—"}</span></div>
      </AppWin>

      <AppWin title="Notification" className={`fl toast${phase <= 1 && !reduced ? " show" : ""}${reduced ? " show" : ""}`} label="New order notification, using sample data">
        <div style={{ display: "flex", gap: 10, alignItems: "center" }} key={k}>
          <span className="av" style={{ background: "#2f6f55", borderRadius: 8 }}>Z</span>
          <div><b>New order received</b><div style={{ color: "var(--a-mut)" }}>{o.amt} · cash on delivery</div></div>
        </div>
      </AppWin>

      <div className="live-cap">
        <span className={`dot${running ? " on" : ""}`} aria-hidden="true" />
        <span>{reduced ? "Interface illustration" : "Live simulation"} · sample data</span>
        {!reduced && (
          <button type="button" onClick={() => setPaused((v) => !v)} aria-pressed={paused} aria-label={paused ? "Resume the hero simulation" : "Pause the hero simulation"}>
            {paused ? "Play" : "Pause"}
          </button>
        )}
      </div>
    </div>
  );
}
