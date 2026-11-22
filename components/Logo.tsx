import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="logo" aria-label="Zenbify home">
      <span className="logo-mark" aria-hidden="true">Z</span>
      Zenbify
    </Link>
  );
}
