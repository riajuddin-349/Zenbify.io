"use client";

import { useEffect, useRef } from "react";

/** Typography-led statement whose words light up as you scroll through it. */
export function ScrollWords({ text, accentFrom }: { text: string; accentFrom: number }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const words = text.split(" ");
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const spans = Array.from(el.querySelectorAll<HTMLElement>("span"));
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { spans.forEach((s) => s.classList.add("lit")); return; }
    let raf = 0;
    const update = () => {
      raf = 0;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const p = Math.min(1, Math.max(0, (vh * 0.82 - r.top) / (r.height + vh * 0.28)));
      const n = Math.round(p * spans.length * 1.05);
      spans.forEach((s, i) => s.classList.toggle("lit", i < n));
    };
    const on = () => { if (!raf) raf = requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", on, { passive: true });
    window.addEventListener("resize", on);
    return () => { window.removeEventListener("scroll", on); window.removeEventListener("resize", on); cancelAnimationFrame(raf); };
  }, []);
  return (
    <p className="sw" ref={ref}>
      {words.map((w, i) => <span key={i} className={i >= accentFrom ? "acc" : undefined}>{w}{i < words.length - 1 ? " " : ""}</span>)}
    </p>
  );
}
