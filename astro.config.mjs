// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import { SITE_URL } from "./src/consts.ts";
import { isNoindexRoute } from "./src/utils/seo.ts";

// On GitHub Pages the site lives in a sub-folder, set by the deploy workflow.
const base = process.env.SITE_BASE ?? "/";

export default defineConfig({
  site: process.env.SITE_ORIGIN ?? SITE_URL,
  base,
  integrations: [
    sitemap({
      filter: (page) => !isNoindexRoute(new URL(page).pathname),
    }),
  ],
  // Put the CSS straight into the page so nothing has to download before the first paint.
  build: { inlineStylesheets: "always" },
  vite: { build: { cssTarget: "safari15.4" } },
});
