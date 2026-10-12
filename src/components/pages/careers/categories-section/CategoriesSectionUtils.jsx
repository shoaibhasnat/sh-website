import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * initJobCardsAnimation
 * ----------------------
 * Adds scroll-based scale and fade-in animation for each job card.
 *
 * @param {Object} cardRefs - ref array holding job card DOM nodes
 */
export const initJobCardsAnimation = (cardRefs) => {
  const cards = cardRefs.current.filter(Boolean); // only valid DOM elements
  if (!cards.length) return () => {};

  const ctx = gsap.context(() => {
    cards.forEach((card) => {
      // Initial card setup
      gsap.set(card, {
        scale: 0.8,
        opacity: 0,
        transformOrigin: "bottom left",
      });

      // ScrollTrigger for card animation
      ScrollTrigger.create({
        trigger: card,
        start: "top 90%",
        end: "top 60%",
        scrub: true,
        onUpdate: (self) => {
          gsap.to(card, {
            scale: 0.8 + self.progress * 0.2,
            opacity: self.progress,
            duration: 0.1,
            ease: "power1.out",
          });
        },
      });
    });
  });

  // Cleanup function
  return () => ctx.revert();
};
