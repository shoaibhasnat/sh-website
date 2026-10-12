import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const OFF_RIGHT = 130;
const OFF_LEFT = -130;

const easeOutQuart = (t) => 1 - Math.pow(1 - t, 4);
const norm = (v, s, e) => {
  if (e === s) return 0;
  return gsap.utils.clamp(0, 1, (v - s) / (e - s));
};

const getIsMobile = () =>
  typeof window !== "undefined" && window.innerWidth <= 768;

const getSlotGap = () => (getIsMobile() ? 0 : 28);

/**
 * initExpertiseAnimation
 * ----------------------
 * Handles horizontal scroll of the service cards track.
 * Animates individual cards with scale & opacity when they appear in viewport.
 *
 * @param {Object} container - Slider container ref
 * @param {Object} track - Track ref containing all cards
 * @param {Array} cards - Array of refs for each card
 * @returns {Function} cleanup - Reverts GSAP context on unmount
 */
export const initExpertiseAnimation = ({ container, track, cards }) => {
  const validCards = Array.isArray(cards) ? cards.filter(Boolean) : [];

  if (!container || !track || !validCards.length) return () => {};

  const getScrollAmount = () =>
    Math.max(0, track.scrollWidth - container.offsetWidth);

  const getSlots = () => {
    const slotGap = getSlotGap();
    const centre = (validCards.length - 1) / 2;

    return validCards.map((_, i) => (i - centre) * slotGap);
  };

  const ctx = gsap.context(() => {
    gsap.set(track, {
      x: 0,
      force3D: true,
      willChange: "transform",
    });

    gsap.set(validCards, {
      x: `${OFF_RIGHT}vw`,
      opacity: 0,
      scale: 0.88,
      force3D: true,
      willChange: "transform, opacity",
    });

    if (getScrollAmount() <= 0) {
      gsap.set(validCards, { x: 0, opacity: 1, scale: 1 });
      return;
    }

    // Horizontal scroll animation for the track.
    const horizontalScroll = gsap.to(track, {
      x: () => -getScrollAmount(),
      ease: "none",
      overwrite: "auto",
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: () => `+=${getScrollAmount()}`,
        pin: true,
        pinSpacing: true,
        scrub: 0.75,
        invalidateOnRefresh: true,
        anticipatePin: 1,
        refreshPriority: -1,
        fastScrollEnd: true,
      },
    });

    // Animate each card individually with scale + opacity.
    validCards.forEach((card) => {
      if (!card) return;

      gsap.fromTo(
        card,
        { scale: 0.5, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          ease: "power3.out",
          overwrite: "auto",
          scrollTrigger: {
            trigger: card,
            containerAnimation: horizontalScroll,
            start: "left 82%",
            end: "left 52%",
            scrub: true,
            invalidateOnRefresh: true,
          },
        },
      );
    });
  }, container);

  ScrollTrigger.sort();

  return () => {
    ctx.revert();
    gsap.killTweensOf([track, ...validCards]);
  };
};
