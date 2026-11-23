import Link from "next/link";
import type { ReactNode } from "react";

type Props = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "line" | "ink" | "ghost";
  size?: "md" | "sm";
  arrow?: boolean;
};

const Arrow = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M3 8h10M9 4l4 4-4 4" />
  </svg>
);

export function Button({ href, children, variant = "primary", size = "md", arrow }: Props) {
  const cls = `btn btn-${variant}${size === "sm" ? " btn-sm" : ""}`;
  const inner = (<>{children}{arrow && <Arrow />}</>);
  if (/^(https?:|tel:|mailto:)/.test(href)) {
    return <a className={cls} href={href} rel="noopener">{inner}</a>;
  }
  return <Link className={cls} href={href}>{inner}</Link>;
}
