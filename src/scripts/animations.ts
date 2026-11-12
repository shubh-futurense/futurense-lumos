// Site-wide motion: Lenis smooth scroll + GSAP, set up the same way as futurense.com.
import Lenis from "lenis";
import 'lenis/dist/lenis.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// ---------- Lenis smooth scroll, driven by GSAP's clock ----------
const lenis = new Lenis({ anchors: { offset: -80 } });
(window as any).lenis = lenis;
lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add((time) => lenis.raf(time * 1000));
gsap.ticker.lagSmoothing(0);

// ---------- Fade up on scroll (same values as the live site) ----------
// Add data-reveal to any element to use it.
if (!reduceMotion) {
  document.querySelectorAll<HTMLElement>('[data-reveal]').forEach((el) => {
    gsap.set(el, { opacity: 0, y: '6rem' });
    ScrollTrigger.create({
      trigger: el,
      start: 'top 92%',
      once: true,
      onEnter: () => gsap.to(el, { opacity: 1, y: 0, duration: 1, ease: 'power4.out' }),
    });
  });
}

// ---------- Back to top button ----------
const backToTop = document.querySelector<HTMLElement>('[data-back-to-top]');
if (backToTop) {
  gsap.set(backToTop, { autoAlpha: 0 });
  ScrollTrigger.create({
    trigger: document.body,
    start: 'top top-=50%',
    onEnter: () => gsap.fromTo(backToTop, { autoAlpha: 0, rotate: -65, scale: 0.4 }, { autoAlpha: 1, rotate: 0, scale: 1, duration: 0.45, ease: 'power4.out' }),
    onLeaveBack: () => gsap.to(backToTop, { autoAlpha: 0, rotate: -65, scale: 0.6, duration: 0.4, ease: 'power4.out' }),
  });
  backToTop.addEventListener('click', () => lenis.scrollTo(0));
}

// ---------- Logo marquee: loops, flips direction with scroll, and shifts as you scroll ----------
document.querySelectorAll<HTMLElement>('[data-marquee]').forEach((marquee) => {
  const scroller = marquee.querySelector<HTMLElement>('[data-marquee-scroll]')!;
  const items = marquee.querySelectorAll<HTMLElement>('[data-marquee-collection]');
  const speedAttr = Number(marquee.dataset.marqueeSpeed) || 15;
  const scrollSpeed = Number(marquee.dataset.marqueeScrollSpeed) || 10;
  const direction = marquee.dataset.marqueeDirection === 'right' ? 1 : -1;
  const multiplier = window.innerWidth < 479 ? 0.25 : window.innerWidth < 991 ? 0.5 : 1;
  const duration = speedAttr * (items[0].offsetWidth / window.innerWidth) * multiplier;

  scroller.style.marginLeft = `${scrollSpeed * -1}%`;
  scroller.style.width = `${scrollSpeed * 2 + 100}%`;

  const loop = gsap.to(items, { xPercent: -100, repeat: -1, duration, ease: 'linear' }).totalProgress(0.5);
  gsap.set(items, { xPercent: direction === 1 ? 100 : -100 });
  loop.timeScale(direction);
  loop.play();

  ScrollTrigger.create({
    trigger: marquee,
    start: 'top bottom',
    end: 'bottom top',
    onUpdate: (self) => loop.timeScale(self.direction === 1 ? -direction : direction),
  });

  const start = direction === -1 ? scrollSpeed : -scrollSpeed;
  gsap.timeline({ scrollTrigger: { trigger: marquee, start: '0% 100%', end: '100% 0%', scrub: 0 } })
    .fromTo(scroller, { x: `${start}vw` }, { x: `${-start}vw`, ease: 'none' });
});

// Recalculate positions once images have loaded
window.addEventListener('load', () => ScrollTrigger.refresh());
