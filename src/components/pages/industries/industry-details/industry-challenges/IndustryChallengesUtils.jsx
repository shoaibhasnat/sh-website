import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
export const initExpertiseAnimation = ({ container, track, cards }) => {
  if (!container || !track || !cards?.length) return () => {};

  const realCards = cards.filter(Boolean);
  const cardCount = realCards.length;

  const isMobile = window.innerWidth < 576;

  // ================================
  // ✅ RULE ENGINE
  // ================================
  const shouldHorizontalScroll =
    (!isMobile && cardCount > 2) || (isMobile && cardCount > 1);

  // ================================
  // ✅ POPUP ONLY MODE
  // ================================
  if (!shouldHorizontalScroll) {
    const ctx = gsap.context(() => {
      gsap.set(track, { x: 0 });

      realCards.forEach((card) => {
        gsap.fromTo(
          card,
          { scale: 0.8, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.7,
            ease: "power3.out",
            scrollTrigger: {
              trigger: container,
              start: "top 75%",
            },
          }
        );
      });
    }, container);

    return () => ctx.revert();
  }

  // ================================
  // ✅ HORIZONTAL SCROLL MODE
  // ================================
  const getScrollAmount = () => track.scrollWidth - container.offsetWidth;

  const ctx = gsap.context(() => {
    const horizontalScroll = gsap.to(track, {
      x: () => -getScrollAmount(),
      ease: "none",
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: () => `+=${getScrollAmount()}`,
        pin: true,
        scrub: 1,
        invalidateOnRefresh: true,
        anticipatePin: 1,
      },
    });

    realCards.forEach((card) => {
      gsap.fromTo(
        card,
        { scale: 0.6, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            containerAnimation: horizontalScroll,
            start: "left 85%",
            end: "left 50%",
            scrub: true,
          },
        }
      );
    });

    ScrollTrigger.refresh();
  }, container);

  return () => ctx.revert();
};
