import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const initJobCardsAnimation = (containerRef, cardRefs) => {
  if (!containerRef.current) return;

  const ctx = gsap.context(() => {
    const cards = cardRefs.current.length
      ? cardRefs.current
      : gsap.utils.toArray(containerRef.current.querySelectorAll("div"));

    cards.forEach((card) => {
      gsap.set(card, { scale: 0.8, opacity: 0, transformOrigin: "bottom left" });

      ScrollTrigger.create({
        trigger: card,
        start: "top 90%",
        end: "top 80%",
        scrub: true,
        onUpdate: (self) => {
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

  return () => ctx.revert();
};
