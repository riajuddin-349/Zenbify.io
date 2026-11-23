import { existsSync } from "node:fs";
import path from "node:path";

const slug = (n: string) => n.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

/**
 * Renders the official mark when its file exists at /public/logos/<slug>.svg
 * (e.g. pathao.svg, bkash.svg). Falls back to the plain name. Drop licensed
 * brand files there; nothing is imitated or redrawn.
 */
export function Brand({ name }: { name: string }) {
  const file = `/logos/${slug(name)}.svg`;
  if (existsSync(path.join(process.cwd(), "public", file))) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={file} alt={name} height={22} loading="lazy" className="brand-img" />;
  }
  return <>{name}</>;
}
