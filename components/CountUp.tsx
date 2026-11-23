"use client";

import { useEffect, useRef, useState } from "react";

/** Counts up once when scrolled into view. Server render is the final value. */
export function CountUp({ value, prefix = "৳", ms = 1100 }: { value: number; prefix?: string; ms?: number }) {
  const [v, setV] = useState(value);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      const t0 = performance.now();
      const step = (t: number) => {
        const p = Math.min(1, (t - t0) / ms);
        setV(Math.round(value * (1 - Math.pow(1 - p, 3))));
        if (p < 1) raf = requestAnimationFrame(step);
      };
      setV(0);
      raf = requestAnimationFrame(step);
    }, { threshold: 0.6 });
    io.observe(el);
    return () => { io.disconnect(); cancelAnimationFrame(raf); };
  }, [value, ms]);
  return <span ref={ref}>{prefix}{v.toLocaleString("en-IN")}</span>;
}
