// Downloads the page's images and fonts from the Webflow CDN so Astro can optimize them.
// Runs automatically before `npm run dev` and `npm run build`. Files already on disk are skipped.
//
// Images -> src/assets/cdn/<webflow-id>.<ext>  (Astro turns them into right-sized WebP files)
// Fonts  -> src/assets/fonts/*.woff2           (cut down to the characters the site uses)
//
// Neither folder is committed to GitHub, so the repository stays light.

import { readFile, writeFile, mkdir, access } from "node:fs/promises";
import { join } from "node:path";
import subsetFont from "subset-font";

const ROOT = new URL("..", import.meta.url).pathname;
const CDN = {
  A: "https://cdn.prod.website-files.com/687e11ae076e4c47d227af38/",
  B: "https://cdn.prod.website-files.com/688494bfcb56ce5a1e341a42/",
};

const FONTS = [
  ["sf-pro-400.woff2", "A/687e12ce076e4c47d2284547_SFPRODISPLAYREGULAR.OTF"],
  ["sf-pro-500.woff2", "A/687e12ce32e040a64fbbc616_SFPRODISPLAYMEDIUM.OTF"],
  ["sf-pro-600.woff2", "A/687e12ce926440441757773e_SF-Pro-Display-Semibold.otf"],
  ["sf-pro-700.woff2", "A/687e12ce7debbf93f625f84b_SFPRODISPLAYBOLD.OTF"],
  ["dm-serif-italic.woff2", "A/687e12ee375ee0555ef0e47e_DMSerifText-Italic.ttf"],
];

// Basic Latin, Latin-1, general punctuation and the rupee sign: everything the copy uses.
const CHARACTERS = [
  [0x20, 0x7e],
  [0xa0, 0xff],
  [0x2010, 0x2027],
  [0x2030, 0x203a],
  [0x20b9, 0x20b9],
  [0x2122, 0x2122],
]
  .flatMap(([a, b]) => Array.from({ length: b - a + 1 }, (_, i) => String.fromCodePoint(a + i)))
  .join("");

/** Same rule as src/components/media/SiteImg.astro: "A/<id>_name.avif" -> "<id>.avif". */
export const localName = (path) => {
  const file = path.split("/").pop();
  const ext = file.split(".").pop().toLowerCase();
  return `${file.split("_")[0]}.${ext}`;
};

const toUrl = (path) => CDN[path[0]] + path.slice(2);
const exists = (file) => access(file).then(() => true, () => false);

async function download(url, tries = 3) {
  for (let i = 1; ; i++) {
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return Buffer.from(await res.arrayBuffer());
    } catch (error) {
      if (i >= tries) throw new Error(`${url}: ${error.message}`);
      await new Promise((r) => setTimeout(r, 500 * i));
    }
  }
}

async function imagePaths() {
  const files = ["uni.ts", "site.ts", "nav.ts"];
  const text = (await Promise.all(files.map((f) => readFile(join(ROOT, "src/data", f), "utf8")))).join("\n");
  const found = new Set();
  for (const m of text.matchAll(/"([AB])\/([^"]+?\.(?:avif|jpe?g|png|webp))"/gi)) found.add(`${m[1]}/${m[2]}`);
  // Video thumbnails are listed as ["file.avif", "youtubeId"] and live on CDN B.
  for (const m of text.matchAll(/\["([^"]+?\.(?:avif|jpe?g|png|webp))"/gi)) found.add(`B/${m[1]}`);
  return [...found];
}

async function pool(items, limit, worker) {
  let next = 0;
  await Promise.all(Array.from({ length: limit }, async () => {
    while (next < items.length) await worker(items[next++]);
  }));
}

const imageDir = join(ROOT, "src/assets/cdn");
const fontDir = join(ROOT, "src/assets/fonts");
await mkdir(imageDir, { recursive: true });
await mkdir(fontDir, { recursive: true });

let fetched = 0;
const failed = [];

await pool(await imagePaths(), 8, async (path) => {
  const target = join(imageDir, localName(path));
  if (await exists(target)) return;
  try {
    await writeFile(target, await download(toUrl(path)));
    fetched++;
  } catch (error) {
    failed.push(error.message);
  }
});

for (const [name, path] of FONTS) {
  const target = join(fontDir, name);
  if (await exists(target)) continue;
  try {
    const source = await download(toUrl(path));
    await writeFile(target, await subsetFont(source, CHARACTERS, { targetFormat: "woff2" }));
    fetched++;
  } catch (error) {
    failed.push(error.message);
  }
}

console.log(`[assets] ${fetched} new file(s) downloaded${failed.length ? `, ${failed.length} failed` : ""}.`);
// A missing image just falls back to the CDN; a missing font would break the build, so stop there.
const missingFonts = [];
for (const [name] of FONTS) if (!(await exists(join(fontDir, name)))) missingFonts.push(name);
if (failed.length) console.warn(failed.map((f) => `  - ${f}`).join("\n"));
if (missingFonts.length) {
  console.error(`[assets] Missing fonts: ${missingFonts.join(", ")}. Check your internet connection and try again.`);
  process.exit(1);
}
