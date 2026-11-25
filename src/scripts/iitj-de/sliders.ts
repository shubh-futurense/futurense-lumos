// Swiper sliders, set up like the live page's "item slider" script.
import { whenNear } from "./when.ts";

let library: Promise<typeof import("@/scripts/swiper.ts")> | null = null;
export const loadSwiper = () => (library ??= import("@/scripts/swiper.ts"));

/** A standard slider: free-width slides, arrows, dots. Returns the Swiper instance. */
export const itemSlider = async (component: HTMLElement) => {
  const el = component.querySelector<HTMLElement>(".swiper");
  if (!el) return;
  const { Swiper, Navigation, Pagination, Keyboard, Mousewheel } =
    await loadSwiper();
  return new Swiper(el, {
    modules: [Navigation, Pagination, Keyboard, Mousewheel],
    slidesPerView: "auto",
    speed: 300,
    slideActiveClass: "is-active",
    mousewheel: { forceToAxis: true },
    keyboard: { enabled: true, onlyInViewport: true },
    navigation: {
      nextEl: component.querySelector<HTMLElement>(
        ".item-slider_btn_element.is-next",
      ),
      prevEl: component.querySelector<HTMLElement>(
        ".item-slider_btn_element.is-prev",
      ),
    },
    pagination: {
      el: component.querySelector<HTMLElement>(".item-slider_bullet_wrap"),
      bulletActiveClass: "is-active",
      bulletClass: "item-slider_bullet_item",
      bulletElement: "button",
      renderBullet: (i: number, cls: string) =>
        `<button class="${cls}" aria-label="Go to slide ${i + 1}"></button>`,
      clickable: true,
    },
  });
};

/**
 * On phones the live page advances some sliders by itself while they are on screen,
 * pausing for 8 seconds after the visitor touches them.
 */
export const autoAdvanceOnPhones = (
  el: HTMLElement,
  swiper: {
    isEnd: boolean;
    slideTo: (i: number) => void;
    slideNext: () => void;
  },
  every: number,
) => {
  let visible = false;
  let hold = 0;
  new IntersectionObserver((e) => (visible = e[0].isIntersecting)).observe(el);
  for (const type of ["touchstart", "pointerdown"])
    el.addEventListener(type, () => (hold = Date.now() + 8000), {
      passive: true,
    });
  setInterval(() => {
    if (
      !visible ||
      document.hidden ||
      Date.now() < hold ||
      !matchMedia("(max-width: 767px)").matches
    )
      return;
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (swiper.isEnd) swiper.slideTo(0);
    else swiper.slideNext();
  }, every);
};

/** Set up every `.item-slider_component` inside `root` when it comes near the screen. */
export const initItemSliders = (
  root: ParentNode,
  onReady?: (component: HTMLElement, swiper: any) => void,
) =>
  whenNear(
    root.querySelectorAll<HTMLElement>(".item-slider_component"),
    async (component) => {
      const swiper = await itemSlider(component);
      if (swiper && onReady) onReady(component, swiper);
    },
  );
