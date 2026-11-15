import type { SvgComponent } from "astro/types";

// Icons copied from the live program pages, looked up by file name
// (the data files store names like "why-1.svg").
const icons = import.meta.glob<{ default: SvgComponent }>("/src/assets/icons/program/*.svg", { eager: true });

export function programIcon(name: string | null | undefined): SvgComponent | undefined {
  if (!name) return undefined;
  return icons[`/src/assets/icons/program/${name}`]?.default;
}
