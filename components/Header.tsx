"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { LOGIN_URL, cta, nav } from "@/content/site";
import { Button } from "./Button";
import { Logo } from "./Logo";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="header">
      <div className="wrap header-in">
        <Logo />
        <nav className="nav-d" aria-label="Main">
          {nav.map((n) =>
            n.external ? (
              <a key={n.label} href={n.href} rel="noopener">{n.label}</a>
            ) : (
              <Link key={n.label} href={n.href} aria-current={pathname === n.href ? "page" : undefined}>{n.label}</Link>
            ),
          )}
        </nav>
        <div className="head-act">
          <Button href={LOGIN_URL} variant="ghost" size="sm">Log in</Button>
          <Button href={cta.primary.href} size="sm">{cta.primary.label}</Button>
        </div>
        <button className="menu-btn" aria-expanded={open} aria-controls="mobile-nav" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen((v) => !v)}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
            {open ? <path d="M4 4l12 12M16 4L4 16" /> : <path d="M3 7h14M3 13h14" />}
          </svg>
        </button>
      </div>
      {open && (
        <div id="mobile-nav" className="mpanel">
          {nav.map((n) => <a key={n.label} className="ml" href={n.href}>{n.label}</a>)}
          <a className="ml" href={LOGIN_URL}>Log in</a>
          <Button href={cta.primary.href} arrow>{cta.primary.label}</Button>
        </div>
      )}
    </header>
  );
}
