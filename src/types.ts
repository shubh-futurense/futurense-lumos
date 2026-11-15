/** Page metadata for `BaseHead` and layouts. */
export interface SeoProps {
  /** Page title. The site name is appended. */
  title?: string;
  /** Page and social description. Defaults to `SITE_DESCRIPTION`. */
  description?: string;
  /** Social image. Defaults to `/og-image.jpg`. */
  image?: string;
  /** Open Graph type. */
  type?: "website" | "article";
  /** Override `NOINDEX_ROUTES` for this page's robots tag. */
  noindex?: boolean;
  /** Use the title exactly as given, without adding the site name. */
  exactTitle?: boolean;
  /** Google Ads conversion to report when this page loads (thank-you pages). */
  conversion?: string;
  /**
   * Only show this page after a lead form was submitted. Anyone arriving
   * another way is sent to this path instead (e.g. the book-a-call page).
   */
  leadOnly?: string;
}
