import { gsap } from "gsap";

export const animateHero = (bgRef) => {
  if (!bgRef.current) return;
  gsap.set(bgRef.current, {
    scale: 0.45, // 👈 start small
    opacity: 0,
    transformOrigin: "50% 50%",
  });
  const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

  tl.to(bgRef.current, {
    scale: 1,
    opacity: 1,
    duration: 1.8,
    ease: "power2.out",
  });
};
