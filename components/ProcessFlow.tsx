import type { ReactNode } from "react";
import { workflow } from "@/content/site";

const S = { fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" } as const;
const A = "var(--lime)";

/** Illustrated stations, drawn for each workflow step. */
const art: ReactNode[] = [
  <svg key="s" viewBox="0 0 64 64"><rect x="9" y="24" width="46" height="30" rx="4" fill={A} opacity=".9" /><path {...S} d="M8 24l5-12h38l5 12M8 24h48" /><path {...S} d="M26 54V38h12v16" stroke="#10200a" /><path {...S} d="M14 24c0 3 2 5 5 5s5-2 5-5c0 3 2 5 5 5s5-2 5-5c0 3 2 5 5 5s5-2 5-5" /></svg>,
  <svg key="c" viewBox="0 0 64 64"><path d="M12 26l30-12v36L12 38z" fill={A} /><path {...S} d="M12 26l30-12v36L12 38zM12 26v12M18 40l4 12h6l-3-10M50 24c4 2 4 14 0 16" /></svg>,
  <svg key="o" viewBox="0 0 64 64"><path d="M8 34h14l4 6h12l4-6h14" {...S} /><path d="M8 34l8-18h32l8 18v16H8z" fill={A} opacity=".9" /><path {...S} d="M8 34l8-18h32l8 18v16H8zM8 34h14l4 6h12l4-6h14" stroke="currentColor" /></svg>,
  <svg key="f" viewBox="0 0 64 64"><path d="M32 8l20 8v14c0 12-8 21-20 26-12-5-20-14-20-26V16z" fill={A} /><path {...S} d="M32 8l20 8v14c0 12-8 21-20 26-12-5-20-14-20-26V16zM23 32l7 7 12-14" stroke="#10200a" /></svg>,
  <svg key="d" viewBox="0 0 64 64"><rect x="6" y="18" width="30" height="24" rx="3" fill={A} /><path {...S} d="M36 26h12l10 10v6H36zM6 18h30v24H6z" /><circle cx="18" cy="46" r="5" fill="#fff" stroke="currentColor" strokeWidth="2" /><circle cx="46" cy="46" r="5" fill="#fff" stroke="currentColor" strokeWidth="2" /></svg>,
  <svg key="p" viewBox="0 0 64 64"><rect x="8" y="10" width="48" height="44" rx="6" fill={A} opacity=".35" /><path {...S} d="M8 16a6 6 0 016-6h36a6 6 0 016 6v32a6 6 0 01-6 6H14a6 6 0 01-6-6z" /><path {...S} d="M16 42l10-10 8 6 14-16" /><circle cx="48" cy="22" r="3.6" fill={A} stroke="currentColor" strokeWidth="2" /></svg>,
];

export function ProcessFlow() {
  return (
    <ol className="flow reveal" aria-label="From store to profit">
      {workflow.map((s, i) => (
        <li key={s.step} style={{ "--i": i } as React.CSSProperties}>
          <span className="tile">{art[i]}</span>
          <b>{s.step}</b>
          <small>{s.title}</small>
        </li>
      ))}
    </ol>
  );
}
