import Link from "next/link";

export function LogoMark({ size = 26 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" aria-hidden="true">
      <rect width="28" height="28" rx="8" fill="#c9f26b" />
      <path d="M8 9.5h12L8 18.5h12" fill="none" stroke="#10200a" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Logo() {
  return (
    <Link href="/" className="logo" aria-label="Zenbify home">
      <LogoMark />
      Zenbify
    </Link>
  );
}
