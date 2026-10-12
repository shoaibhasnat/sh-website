// FaqSectionCardUtils.js
// - Exports animateLineOnScroll helper.
// - Animates a horizontal line scaling from 0 to full width on scroll using GSAP ScrollTrigger.
// - Returns a cleanup function to kill the tween and scrollTrigger.

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function animateLineOnScroll(
  boxRef,
  lineRef
) {
  if (!boxRef.current || !lineRef.current) return;

  const tween = gsap.fromTo(
    lineRef.current,
    { scaleX: 0 },
    {
      scaleX: 1,
      transformOrigin: "left center",
      scrollTrigger: {
        trigger: boxRef.current,
        start: "top 90%",
        end: "top 60%",
        scrub: true,
      },
    }
  );

  return () => {
    if (tween && tween.scrollTrigger) {
      tween.scrollTrigger.kill();
    }
    tween.kill();
  };
}
