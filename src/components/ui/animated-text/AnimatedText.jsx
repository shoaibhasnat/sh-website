// AnimatedText.js
// A reusable component that animates text lines.
// GSAP/SplitText are dynamically loaded after mount so above-the-fold images can
// paint before animation code is parsed/executed.

import React, { useLayoutEffect, useRef } from "react";

const AnimatedText = ({
  children,
  animateOnScroll = true,
  delay = 0.2,
  className = "",
}) => {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    let cancelled = false;
    let cleanup = () => {};
    let rafOne;
    let rafTwo;

    const init = async () => {
      try {
        const [{ gsap }, { SplitText }, { ScrollTrigger }] = await Promise.all([
          import("gsap"),
          import("gsap/SplitText"),
          import("gsap/ScrollTrigger"),
        ]);

        if (cancelled || !containerRef.current) return;

        gsap.registerPlugin(SplitText, ScrollTrigger);

        rafOne = window.requestAnimationFrame(() => {
          rafTwo = window.requestAnimationFrame(() => {
            if (cancelled || !containerRef.current) return;

            const splitRefs = [];
            const lines = [];

            const elements = containerRef.current.hasAttribute("data-copy-wrapper")
              ? Array.from(containerRef.current.children)
              : [containerRef.current];

            elements.forEach((element) => {
              const split = SplitText.create(element, {
                type: "lines",
                mask: "lines",
                linesClass: "line++",
                aria: "none",
              });

              splitRefs.push(split);

              const computedStyle = window.getComputedStyle(element);
              const textIndent = computedStyle.textIndent;

              if (textIndent && textIndent !== "0px" && split.lines.length > 0) {
                split.lines[0].style.paddingLeft = textIndent;
                element.style.textIndent = "0px";
              }

              lines.push(...split.lines);
            });

            gsap.set(lines, { y: "100%" });

            const animationProps = {
              y: "0%",
              duration: 1,
              stagger: 0.1,
              ease: "power4.out",
              delay,
            };

            if (animateOnScroll) {
              gsap.to(lines, {
                ...animationProps,
                scrollTrigger: {
                  trigger: containerRef.current,
                  start: "top 75%",
                  once: true,
                },
              });
            } else {
              gsap.to(lines, animationProps);
            }

            cleanup = () => {
              gsap.killTweensOf(lines);
              splitRefs.forEach((split) => split?.revert?.());
            };
          });
        });
      } catch {
        // If animation code fails to load, keep the original text visible.
      }
    };

    init();

    return () => {
      cancelled = true;
      if (rafOne) window.cancelAnimationFrame(rafOne);
      if (rafTwo) window.cancelAnimationFrame(rafTwo);
      cleanup();
    };
  }, [animateOnScroll, delay]);

  return (
    <div ref={containerRef} data-copy-wrapper="true" className={className}>
      {children}
    </div>
  );
};

export default AnimatedText;
