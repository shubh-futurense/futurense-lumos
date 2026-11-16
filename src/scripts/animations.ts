// Site-wide motion, set up the same way as futurense.com.
// The fade-ins below are tiny and run straight away. GSAP and Lenis smooth scrolling (motion.ts) are
// heavier, so they load once the page is idle and never compete with the first screen.

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// ---------- Fade up on scroll (same values as the live site) ----------
// Add data-reveal to any element to use it. CSS hides it, then it rises 6rem as it fades in;
// an IntersectionObserver plays the fade without measuring the page on load.
const revealed = (el: Element) => el.classList.add('is-revealed');
const revealEls = document.querySelectorAll<HTMLElement>('[data-reveal]');
if (reduceMotion || !('IntersectionObserver' in window)) {
  revealEls.forEach(revealed);
} else {
  const revealer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const el = entry.target as HTMLElement;
        revealer.unobserve(el);
        el.animate(
          [
            { opacity: 0, translate: '0 6rem' },
            { opacity: 1, translate: '0 0' },
          ],
          { duration: 1000, easing: 'cubic-bezier(0.23, 1, 0.32, 1)' },
        );
        revealed(el);
      }
    },
    { rootMargin: '0px 0px -8% 0px' },
  );
  revealEls.forEach((el) => revealer.observe(el));
}


// ---------- GSAP, smooth scroll, back to top, marquees ----------
const whenIdle = (fn: () => void) =>
  'requestIdleCallback' in window ? requestIdleCallback(fn, { timeout: 2000 }) : setTimeout(fn, 300);
const loadMotion = () => whenIdle(() => import('./motion.ts'));
if (document.readyState === 'complete') loadMotion();
else window.addEventListener('load', loadMotion, { once: true });
