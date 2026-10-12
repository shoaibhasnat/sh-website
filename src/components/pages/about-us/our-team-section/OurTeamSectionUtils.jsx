import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const initAnimation = ({ container, track, cards }) => {
  const validCards = Array.isArray(cards) ? cards.filter(Boolean) : [];
  if (!container || !track || !validCards.length) return () => {};

  let rafOne;
  let rafTwo;
  let refreshTimer;

  const ctx = gsap.context(() => {
    const init = () => {
      const getScrollAmount = () =>
        Math.max(0, track.scrollWidth - container.offsetWidth);

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

      validCards.forEach((card, index) => {
        gsap.fromTo(
          card,
          { scale: 0.9, y: 0, opacity: 0 },
          {
            scale: 1,
            y: () => (index % 2 === 0 ? -30 : 30),
            opacity: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              containerAnimation: horizontalScroll,
              start: "left 80%",
              end: "left 50%",
              scrub: true,
              invalidateOnRefresh: true,
            },
          },
        );
      });

      refreshTimer = window.setTimeout(() => {
        try {
          ScrollTrigger.refresh(true);
        } catch {}
      }, 180);
    };

    rafOne = window.requestAnimationFrame(() => {
      rafTwo = window.requestAnimationFrame(init);
    });
  }, container);

  return () => {
    window.cancelAnimationFrame(rafOne);
    window.cancelAnimationFrame(rafTwo);
    window.clearTimeout(refreshTimer);
    ctx.revert();
  };
};
