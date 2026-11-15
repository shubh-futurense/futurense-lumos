/** Site name. Appended to every page title and used as `og:site_name`. */
export const SITE_NAME = "Futurense";
/** Fallback meta description for pages that don't set their own. */
export const SITE_DESCRIPTION =
  "Build an AI-first career with IIT-powered degrees, industry mentorship, and real-world learning.";
/** Canonical origin. Resolves canonical URLs, social images, and the sitemap. */
export const SITE_URL = "https://futurense.com";
/** BCP 47 locale tag used to format dates and numbers. */
export const SITE_LOCALE = "en-US";
/** Routes excluded from search and the sitemap. Surrounding slashes are ignored. */
export const NOINDEX_ROUTES: string[] = ["/404"];
/**
 * Real Futurense domains. Only on these do forms send leads to LeadSquared and
 * do marketing tags (Google Ads, Analytics, Tag Manager, Clarity) run. Preview
 * copies like GitHub Pages stay silent.
 */
export const LIVE_HOSTS: string[] = ["futurense.com", "www.futurense.com", "futurense.in", "www.futurense.in"];
