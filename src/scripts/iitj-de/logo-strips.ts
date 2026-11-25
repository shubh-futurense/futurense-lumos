// Scrolling logo rows, ported from the live page:
// on phones every [data-logo-strip] row scrolls; on larger screens the tools strip ([data-tools-mq]) does.
import { afterLoad, whenNear, reducedMotion } from "./when.ts";
import { loadGsap } from "./marquee.ts";

const PX_PER_SECOND = 40;

export const initLogoStrips = (root: ParentNode = document) => {
  if (reducedMotion()) return;
  afterLoad(() =>
    whenNear([root as Element], async () => {
      const { gsap } = await loadGsap();
      const mm = gsap.matchMedia();
      mm.add("(max-width: 767px)", () => {
        const clones: Element[] = [];
        const tweens: gsap.core.Tween[] = [];
        root
          .querySelectorAll<HTMLElement>("[data-logo-strip]")
          .forEach((row) => {
            const list = row.querySelector<HTMLElement>(
              ".iitj-logos_list, .iitj-tools_list",
            );
            if (!list) return;
            const copy = list.cloneNode(true) as HTMLElement;
            copy.setAttribute("aria-hidden", "true");
            row.appendChild(copy);
            clones.push(copy);
            const toRight = row.getAttribute("data-logo-strip") === "right";
            tweens.push(
              gsap.fromTo(
                [list, copy],
                { xPercent: toRight ? -100 : 0 },
                {
                  xPercent: toRight ? 0 : -100,
                  duration: list.offsetWidth / PX_PER_SECOND,
                  ease: "none",
                  repeat: -1,
                },
              ),
            );
          });
        return () => {
          tweens.forEach((t) => t.kill());
          clones.forEach((c) => c.remove());
          root
            .querySelectorAll(".iitj-logos_list, .iitj-tools_list")
            .forEach((l) => gsap.set(l, { clearProps: "transform" }));
        };
      });
      mm.add("(min-width: 768px)", () => {
        const clones: Element[] = [];
        const tweens: gsap.core.Tween[] = [];
        root.querySelectorAll<HTMLElement>("[data-tools-mq]").forEach((mq) => {
          const strip = mq.querySelector<HTMLElement>(".iitj-tools");
          if (!strip) return;
          const copy = strip.cloneNode(true) as HTMLElement;
          copy.setAttribute("aria-hidden", "true");
          mq.appendChild(copy);
          clones.push(copy);
          tweens.push(
            gsap.fromTo(
              [strip, copy],
              { xPercent: 0 },
              {
                xPercent: -100,
                duration: strip.offsetWidth / PX_PER_SECOND,
                ease: "none",
                repeat: -1,
              },
            ),
          );
        });
        return () => {
          tweens.forEach((t) => t.kill());
          clones.forEach((c) => c.remove());
          root
            .querySelectorAll("[data-tools-mq] .iitj-tools")
            .forEach((s) => gsap.set(s, { clearProps: "transform" }));
        };
      });
    }),
  );
};
