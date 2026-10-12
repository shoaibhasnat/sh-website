import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * initWhoWeAreAnimation
 * ----------------------
 * Animates team cards on scroll using scrubbed tweens.
 * Avoids creating new gsap.to() calls inside onUpdate, which can cause scroll jitter.
 */
export const initWhoWeAreAnimation = (cardRefs, scope) => {
  const cards = cardRefs?.current?.filter(Boolean) || [];
  if (!cards.length) return () => {};

  const ctx = gsap.context(() => {
    cards.forEach((card) => {
      gsap.fromTo(
        card,
        {
          scale: 0.86,
          opacity: 0,
          transformOrigin: "bottom left",
        },
        {
          scale: 1,
          opacity: 1,
          ease: "none",
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            end: "top 72%",
            scrub: true,
            invalidateOnRefresh: true,
          },
        },
      );
    });
  }, scope);

  return () => ctx.revert();
};
