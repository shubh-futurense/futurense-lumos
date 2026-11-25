// Scroll-aware marquees, ported from the live page's "marquee scroll direction" script:
// the strip loops, reverses with the scroll direction, and shifts a little as you scroll.
// Markup: [data-marquee-scroll-direction-target] > [data-marquee-scroll-target] > [data-marquee-collection-target]
import { afterLoad, whenNear, reducedMotion } from "./when.ts";

let gsapReady: Promise<{
  gsap: typeof import("gsap").gsap;
  ScrollTrigger: typeof import("gsap/ScrollTrigger").ScrollTrigger;
}> | null = null;
export const loadGsap = () =>
  (gsapReady ??= Promise.all([
    import("gsap"),
    import("gsap/ScrollTrigger"),
  ]).then(([{ gsap }, { ScrollTrigger }]) => {
    gsap.registerPlugin(ScrollTrigger);
    return { gsap, ScrollTrigger };
  }));

const start = async (marquee: HTMLElement) => {
  const content = marquee.querySelector<HTMLElement>(
    "[data-marquee-collection-target]",
  );
  const scroller = marquee.querySelector<HTMLElement>(
    "[data-marquee-scroll-target]",
  );
  if (!content || !scroller) return;
  const { gsap, ScrollTrigger } = await loadGsap();

  const {
    marqueeSpeed,
    marqueeDirection,
    marqueeDuplicate,
    marqueeScrollSpeed,
  } = marquee.dataset;
  const direction = marqueeDirection === "right" ? 1 : -1;
  const scrollSpeed = parseFloat(marqueeScrollSpeed || "0");
  const multiplier = innerWidth < 479 ? 0.25 : innerWidth < 991 ? 0.5 : 1;
  const duration =
    parseFloat(marqueeSpeed || "20") *
    (content.offsetWidth / innerWidth) *
    multiplier;

  scroller.style.marginLeft = `${scrollSpeed * -1}%`;
  scroller.style.width = `${scrollSpeed * 2 + 100}%`;

  const copies = parseInt(marqueeDuplicate || "0");
  for (let i = 0; i < copies; i++) {
    const copy = content.cloneNode(true) as HTMLElement;
    copy.setAttribute("aria-hidden", "true");
    scroller.appendChild(copy);
  }

  const items = marquee.querySelectorAll("[data-marquee-collection-target]");
  const loop = gsap
    .to(items, { xPercent: -100, repeat: -1, duration, ease: "linear" })
    .totalProgress(0.5);
  gsap.set(items, { xPercent: direction === 1 ? 100 : -100 });
  loop.timeScale(direction);
  loop.play();
  marquee.setAttribute("data-marquee-status", "normal");

  ScrollTrigger.create({
    trigger: marquee,
    start: "top bottom",
    end: "bottom top",
    onUpdate: (self) => {
      const inverted = self.direction === 1;
      loop.timeScale(inverted ? -direction : direction);
      marquee.setAttribute(
        "data-marquee-status",
        inverted ? "normal" : "inverted",
      );
    },
  });

  const from = direction === -1 ? scrollSpeed : -scrollSpeed;
  gsap
    .timeline({
      scrollTrigger: {
        trigger: marquee,
        start: "0% 100%",
        end: "100% 0%",
        scrub: 0,
      },
    })
    .fromTo(scroller, { x: `${from}vw` }, { x: `${-from}vw`, ease: "none" });
};

/** Start every marquee inside `root` once the page is idle and the marquee is near the screen. */
export const initMarquees = (root: ParentNode = document) => {
  if (reducedMotion()) return;
  afterLoad(() =>
    whenNear(
      root.querySelectorAll("[data-marquee-scroll-direction-target]"),
      start,
    ),
  );
};
