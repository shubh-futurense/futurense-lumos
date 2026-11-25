// Small helpers so the page's heavier scripts start only when they are needed.

/** Run `fn` once the page has loaded and the browser is idle. */
export const afterLoad = (fn: () => void) => {
  const idle = () =>
    "requestIdleCallback" in window
      ? requestIdleCallback(fn, { timeout: 2000 })
      : setTimeout(fn, 200);
  if (document.readyState === "complete") idle();
  else addEventListener("load", idle, { once: true });
};

/** Run `fn(el)` the first time each element comes within a screen of the viewport. */
export const whenNear = (
  els: Iterable<Element>,
  fn: (el: HTMLElement) => void,
  margin = "100%",
) => {
  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        io.unobserve(entry.target);
        fn(entry.target as HTMLElement);
      }
    },
    { rootMargin: `${margin} 0px` },
  );
  for (const el of els) io.observe(el);
};

export const reducedMotion = () =>
  matchMedia("(prefers-reduced-motion: reduce)").matches;
