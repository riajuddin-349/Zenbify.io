"use client";

import { useEffect, useId, useRef, useState, type KeyboardEvent, type ReactNode } from "react";

type Step = { step: string; title: string; text: string };

/** Interactive interface story: each step swaps the product view on the right. */
export function WorkflowStory({ steps, panes }: { steps: Step[]; panes: ReactNode[] }) {
  const [i, setI] = useState(0);
  const id = useId();
  const [auto, setAuto] = useState(false);
  const wrap = useRef<HTMLDivElement>(null);
  const STEP_MS = 6500;
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = wrap.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setAuto((a) => (e.isIntersecting ? a || !stopped.current : false)), { threshold: 0.45 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  const stopped = useRef(false);
  const stop = () => { stopped.current = true; setAuto(false); };
  useEffect(() => {
    if (!auto) return;
    const t = setTimeout(() => setI((v) => (v + 1) % steps.length), STEP_MS);
    return () => clearTimeout(t);
  }, [auto, i, steps.length]);
  const refs = useRef<(HTMLButtonElement | null)[]>([]);

  const onKey = (e: KeyboardEvent) => {
    const k = e.key;
    if (!["ArrowRight", "ArrowLeft", "ArrowDown", "ArrowUp", "Home", "End"].includes(k)) return;
    e.preventDefault();
    const n = steps.length;
    const next = k === "Home" ? 0 : k === "End" ? n - 1 : (i + (k === "ArrowRight" || k === "ArrowDown" ? 1 : -1) + n) % n;
    setI(next);
    refs.current[next]?.focus();
  };

  return (
    <div className="story" ref={wrap} onPointerDown={stop} onFocus={stop}>
      <div>
        <div className="story-nav" role="tablist" aria-label="How Zenbify works" onKeyDown={onKey}>
          {steps.map((s, n) => (
            <button
              key={s.step}
              ref={(el) => { refs.current[n] = el; }}
              role="tab"
              id={`${id}-t${n}`}
              aria-selected={i === n}
              aria-controls={`${id}-p${n}`}
              tabIndex={i === n ? 0 : -1}
              className="tab"
              onClick={() => setI(n)}
            >
              <span className="n">0{n + 1}</span>
              <span className="t">{s.title}</span>
              <span className="d">{s.text}</span>
              {auto && i === n && <span className="fill" style={{ animationDuration: `${STEP_MS}ms` }} aria-hidden="true" />}
            </button>
          ))}
        </div>
        <p className="story-copy" aria-hidden="true">{steps[i].text}</p>
      </div>
      <div className="viewport">
        {panes.map((p, n) => (
          <div key={n} role="tabpanel" id={`${id}-p${n}`} aria-labelledby={`${id}-t${n}`} hidden={i !== n} className="pane">
            {p}
          </div>
        ))}
        <span className="vp-cap" aria-hidden="true">Interface illustration · sample data</span>
      </div>
    </div>
  );
}
