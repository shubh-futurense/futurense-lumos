/**
 * Adds the site's base path to an internal link.
 * Locally the base is "/", on GitHub Pages it is "/futurense-lumos/",
 * so `withBase("uni")` gives "/uni" or "/futurense-lumos/uni".
 */
export function withBase(path = ""): string {
  const base = import.meta.env.BASE_URL.replace(/\/?$/, "/");
  return base + path.replace(/^\//, "");
}
