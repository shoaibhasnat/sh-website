import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

/*
  initTestimonialsScroll
  - Creates a pinned scroll section
  - Moves cards along a curved (arc) path based on scroll progress
  - Handles resize and cleanup automatically
*/
export const initTestimonialsScroll = (containerRef, stepsRef, cardsRef) => {
  if (!containerRef.current || !stepsRef.current) return () => {};

  const stickySection = stepsRef.current;
  const cards = cardsRef.current.filter(Boolean);

  const totalCards = cards.length;

  // Total scroll distance for the pinned section
  const stickyHeight = window.innerHeight * 6;

  // Responsive radius calculation based on screen width
  const getRadius = () => {
    const w = window.innerWidth;

    if (w < 450) return w * 9.5;
    if (w < 550) return w * 8;
    if (w < 620) return w * 6.5;
    if (w < 768) return w * 5.5;
    if (w < 1000) return w * 4.5;
    if (w < 1350) return w * 3.5;
    if (w < 1550) return w * 3;

    return w * 2.5;
  };

  // Arc geometry configuration
  const arcAngle = Math.PI * 0.3;
  const startAngle = Math.PI / 2 - arcAngle / 2;

  /*
    Positions all cards along the arc
    - progress: scroll progress from 0 to 1
  */
  const positionCards = (progress = 0) => {
    const radius = getRadius();

    // Controls how far the cards travel during scroll
    const totalTravel = 1 + totalCards / 7.5;
    const adjustedProgress = (progress * totalTravel - 1) * 0.75;

    cards.forEach((card, i) => {
      // Reverse order so first card appears in front
      const normalizedProgress = (totalCards - 1 - i) / totalCards;
      const cardProgress = normalizedProgress + adjustedProgress;

      // Convert progress to polar coordinates
      const angle = startAngle + arcAngle * cardProgress;
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius;
      const rotation = (angle - Math.PI / 2) * (180 / Math.PI);

      // Apply transform using GSAP
      gsap.set(card, {
        x,
        y: -y + radius,
        opacity: 1,
        rotation: -rotation,
        transformOrigin: "center center",
      });
    });
  };

  // Scope GSAP animations to this component
  const ctx = gsap.context(() => {
    ScrollTrigger.create({
      trigger: stickySection,
      start: "top top",
      end: `+=${stickyHeight}px`,
      pin: true,
      pinSpacing: true,
      onUpdate: (self) => positionCards(self.progress),
    });

    // Initial layout
    positionCards(0);
  }, containerRef);

  // Recalculate positions on resize
  const resizeHandler = () => positionCards(0);
  window.addEventListener("resize", resizeHandler);

  // Cleanup function
  return () => {
    ctx.revert();
    window.removeEventListener("resize", resizeHandler);
  };
};
