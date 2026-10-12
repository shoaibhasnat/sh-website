import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

export const initIndustriesAnimation = ({
  containerRef,
  itemRefs,
  splitsRef,
  lenisRef,
}) => {
  if (!containerRef.current) return;

  const onRefresh = () => {
    lenisRef?.current?.lenis?.update?.();
  };

  if (lenisRef?.current?.lenis) {
    ScrollTrigger.addEventListener("refresh", onRefresh);
  }

  const ctx = gsap.context(() => {
    itemRefs.current.forEach((item) => {
      if (!item) return;

      /* -------------------- TEXT -------------------- */
      const title = item.querySelector("h2");
      if (!title) return;

      const split = new SplitText(title, { type: "chars" });
      splitsRef.current.push(split);

      // ✅ SET INITIAL STATE (THIS WAS MISSING)
      gsap.set(split.chars, {
        yPercent: 100,
        opacity: 0,
        rotateX: -90,
        transformOrigin: "50% 50% -40",
      });

      gsap.to(split.chars, {
        yPercent: 0,
        opacity: 1,
        rotateX: 0,
        stagger: 0.02,
        ease: "power3.out",
        scrollTrigger: {
          trigger: item,
          start: "top 75%",
          end: "top 55%",
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });

      /* -------------------- IMAGE -------------------- */
      // ✅ TARGET THE INNER CLIPPED ELEMENT
      const img = item.querySelector('[class*="workItemImg"]');
      if (!img) return;

      const imgTl = gsap.timeline({
        scrollTrigger: {
          trigger: item,
          start: "top 150%",
          end: "top -30%",
          scrub: 0.6,
        },
      });

      gsap.set(img, {
        clipPath: "polygon(25% 25%, 75% 40%, 100% 100%, 0% 100%)",
        scale: 0.92,
      });

      imgTl.to(img, {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        scale: 1,
        ease: "power1.out",
      });

      imgTl.to(img, {
        clipPath: "polygon(0% 0%, 100% 0%, 75% 60%, 25% 75%)",
        ease: "power1.out",
      });
    });
  }, containerRef);

  return () => {
    splitsRef.current.forEach((s) => s.revert && s.revert());
    splitsRef.current.length = 0;
    ctx.revert();
    ScrollTrigger.removeEventListener("refresh", onRefresh);
  };
};
