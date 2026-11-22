import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return ["", "/features", "/pricing", "/about-us", "/contact-us", "/trust"].map((p) => ({ url: `https://zenbify.io${p}`, lastModified: now }));
}
