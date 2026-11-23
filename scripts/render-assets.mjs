// Regenerates /public/img/*.webp from the /capture page.
// Needs playwright installed (npm i -D playwright, or globally with NODE_PATH). Run: CAPTURE=1 npm run build && CAPTURE=1 npm start, then npm run assets.
import { createRequire } from "node:module";
const { chromium } = createRequire(import.meta.url)("playwright");
import { execFileSync } from "node:child_process";
import { mkdirSync, rmSync } from "node:fs";

const url = process.env.CAPTURE_URL || "http://localhost:3000/capture";
const tmp = "/tmp/zb-assets"; mkdirSync(tmp, { recursive: true });
const shots = { "s-dash": "dashboard-orders", "s-profit": "dashboard-profit", "s-phone-orders": "phone-orders", "s-phone-track": "phone-tracking", "s-store": "storefront" };
const b = await chromium.launch();
const p = await (await b.newContext({ viewport: { width: 1600, height: 1000 }, deviceScaleFactor: 2 })).newPage();
await p.goto(url, { waitUntil: "networkidle" });
await p.evaluate(() => { document.querySelector(".header")?.remove(); document.querySelector(".skip")?.remove(); document.querySelectorAll(".draw").forEach((e) => e.classList.add("in")); });
await p.waitForTimeout(2200);
for (const [id, name] of Object.entries(shots)) {
  const png = `${tmp}/${name}.png`;
  await (await p.$("#" + id)).screenshot({ path: png });
  execFileSync("python3", ["-c", `from PIL import Image;Image.open("${png}").convert("RGB").save("public/img/${name}.webp","WEBP",quality=82,method=6)`]);
  rmSync(png);
}
await b.close();
