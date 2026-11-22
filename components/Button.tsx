import Link from "next/link";
import type { ReactNode } from "react";

type Props = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "md" | "sm";
  external?: boolean;
};

export function Button({ href, children, variant = "primary", size = "md", external }: Props) {
  const cls = `btn btn-${variant}${size === "sm" ? " btn-sm" : ""}`;
  const isExternal = external ?? /^https?:\/\//.test(href);
  if (isExternal) {
    return (
      <a className={cls} href={href} rel="noopener">
        {children}
      </a>
    );
  }
  return (
    <Link className={cls} href={href}>
      {children}
    </Link>
  );
}
