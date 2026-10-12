import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * initJobCardsAnimation
 * --------------------
 * Initializes scroll-triggered animations for a list of cards.
 * Cards scale up and fade in as they enter viewport.
 *
 * @param {Object} containerRef - Ref to the section container
 * @param {Array} cardRefs - Array of refs to individual cards
 * @returns {Function} cleanup - Reverts GSAP context on unmount
 */
export const initJobCardsAnimation = (containerRef, cardRefs) => {
  if (!containerRef.current) return;

  const ctx = gsap.context(() => {
    // Get all card elements either from refs or query selector
    const cards = cardRefs.current.length
      ? cardRefs.current
      : gsap.utils.toArray(containerRef.current.querySelectorAll("div"));

    cards.forEach((card) => {
      // Set initial state: smaller scale and transparent
      gsap.set(card, {
        scale: 0.8,
        opacity: 0,
        transformOrigin: "bottom left",
      });

      // Create scroll-trigger for each card
      ScrollTrigger.create({
        trigger: card,
        start: "top 90%", 
        end: "top 80%", 
        scrub: true, // smooth scrubbing
        onUpdate: (self) => {
          // Animate scale and opacity based on scroll progress
          gsap.to(card, {
            scale: 0.8 + self.progress * 0.2,
            opacity: self.progress,
            duration: 0.4,
            ease: "power1.out",
          });
        },
      });
    });
  }, containerRef);

  return () => ctx.revert(); // Cleanup GSAP context on unmount
};
