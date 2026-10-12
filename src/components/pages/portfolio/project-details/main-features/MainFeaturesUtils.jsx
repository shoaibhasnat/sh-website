import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const initJobCardsAnimation = ({ containerRef, imageRef, cardRefs }) => {
  if (!containerRef.current) return;

  const ctx = gsap.context(() => {
    cardRefs.current.forEach((card) => {
      if (!card) return;

      gsap.set(card, {
        scale: 0.8,
        opacity: 0,
        transformOrigin: "bottom left",
      });

      ScrollTrigger.create({
        trigger: card,
        start: "top 100%",
        end: "top 70%",
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

    if (imageRef?.current) {
      gsap.fromTo(
        imageRef.current,
        { x: 50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          ease: "power1.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 100%",
            end: "top 40%",
            scrub: true,
          },
        }
      );
    }
  }, containerRef);

  return () => ctx.revert();
};
