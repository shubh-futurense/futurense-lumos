// Turns a normal build into the futurense.in ad site: only the program pages listed
// in KEEP_PAGES (and their thank-you pages), with the home page and every other
// address sending visitors to the B.S/B.Sc book-a-call page.
//
// Runs after `astro build` (see the "build:landing" script in package.json).
import { readdir, rm, writeFile } from "node:fs/promises";
import { join } from "node:path";

const DIST = new URL("../dist", import.meta.url).pathname;
const LANDING = "/iit-jodhpur/b-s-b-sc-in-applied-ai-data-science-iit-jodhpur-book-a-call";
const KEEP_PAGES = [
  LANDING,
  `${LANDING}-thank-you`,
  // IIT Jodhpur PG Diploma / Executive M.Tech in Data Engineering and Agentic AI
  "/iit-jodhpur/pg-diploma-mtech-data-engineering",
  "/iit-jodhpur/pg-diploma-and-mtech-in-data-engineering-iit-jodhpur-thank-you",
];
// Shared files every page needs: styles, scripts, images, fonts, icons.
const KEEP_TOP = new Set(["_astro", "iit-jodhpur", "favicon.ico", "favicon.svg", "apple-touch-icon.png", "og-image.jpg"]);

// 1. Remove every page and file the ad site doesn't use.
for (const entry of await readdir(DIST)) {
  if (!KEEP_TOP.has(entry)) await rm(join(DIST, entry), { recursive: true, force: true });
}
const keepInFolder = new Set(KEEP_PAGES.map((p) => p.split("/").pop()));
for (const entry of await readdir(join(DIST, "iit-jodhpur"))) {
  if (!keepInFolder.has(entry)) await rm(join(DIST, "iit-jodhpur", entry), { recursive: true, force: true });
}

// 2. The home page goes straight to the book-a-call page, on Cloudflare's servers.
//    302 (temporary) so browsers and Google don't lock it in.
await writeFile(join(DIST, "_redirects"), `/ ${LANDING} 302\n`);

// 3. Any other address (old links, typos) also ends up on the book-a-call page,
//    keeping ad tracking tags like ?utm_source=... in the link.
await writeFile(
  join(DIST, "404.html"),
  `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="robots" content="noindex">
<title>Redirecting…</title>
<meta http-equiv="refresh" content="0; url=${LANDING}">
<script>location.replace(${JSON.stringify(LANDING)} + location.search + location.hash);</script>
</head>
<body><a href="${LANDING}">Continue to the IIT Jodhpur B.S/B.Sc page</a></body>
</html>
`,
);

// 4. Built files have unique names, so browsers can keep them for a year.
await writeFile(
  join(DIST, "_headers"),
  `/_astro/*
  Cache-Control: public, max-age=31536000, immutable
/favicon.*
  Cache-Control: public, max-age=86400
/apple-touch-icon.png
  Cache-Control: public, max-age=86400
`,
);

// 5. Let search engines read the page (its canonical link points to futurense.com).
await writeFile(join(DIST, "robots.txt"), "User-agent: *\nAllow: /\n");

console.log(`Landing build ready: ${KEEP_PAGES.join(", ")}`);
