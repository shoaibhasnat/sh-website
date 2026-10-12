import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import React, { useLayoutEffect, useRef } from "react";
import "./gradient-scroll-animation.css";
import { Colors } from "../../../utils/global/Colors";

gsap.registerPlugin(ScrollTrigger, SplitText);

const waitForRoutePaint = (callback) => {
  if (typeof window === "undefined") return () => {};

  let cancelled = false;
  let timer = null;
  let rafOne = null;
  let rafTwo = null;
  let observer = null;

  const run = () => {
    if (cancelled) return;

    rafOne = window.requestAnimationFrame(() => {
      rafTwo = window.requestAnimationFrame(() => {
        if (!cancelled) callback();
      });
    });
  };

  const runAfterReveal = () => {
    if (cancelled) return;

    const body = document.body;

    if (!body?.classList?.contains("page-reveal-active")) {
      timer = window.setTimeout(run, 80);
      return;
    }

    observer = new MutationObserver(() => {
      if (!body.classList.contains("page-reveal-active")) {
        observer?.disconnect();
        observer = null;
        timer = window.setTimeout(run, 80);
      }
    });

    observer.observe(body, {
      attributes: true,
      attributeFilter: ["class"],
    });
  };

  const fontsReady = document.fonts?.ready;

  if (fontsReady?.then) {
    fontsReady.then(runAfterReveal).catch(runAfterReveal);
  } else {
    runAfterReveal();
  }

  return () => {
    cancelled = true;
    if (timer) window.clearTimeout(timer);
    if (rafOne) window.cancelAnimationFrame(rafOne);
    if (rafTwo) window.cancelAnimationFrame(rafTwo);
    observer?.disconnect();
  };
};

export default function GradientScrollAnimation({
  children,
  colorInitial = Colors.secondaryLight(),
  colorAccent = Colors.primary(),
  colorFinal = Colors.text(),
  className = "",
}) {
  const containerRef = useRef(null);
  const splitRefs = useRef([]);
  const lastScrollProgress = useRef(0);
  const colorTransitionTimers = useRef(new Map());
  const completedChars = useRef(new Set());

  useLayoutEffect(() => {
    let cleanupAnimation = () => {};

    const cancelWait = waitForRoutePaint(() => {
      if (!containerRef.current) return;

      splitRefs.current = [];
      lastScrollProgress.current = 0;
      colorTransitionTimers.current.clear();
      completedChars.current.clear();

      const elements = containerRef.current.hasAttribute("data-copy-wrapper")
        ? Array.from(containerRef.current.children)
        : [containerRef.current];

      elements.forEach((element) => {
        const wordSplit = SplitText.create(element, {
          type: "words",
          wordsClass: "word",
          aria: "none",
        });

        const charSplit = SplitText.create(wordSplit.words, {
          type: "chars",
          charsClass: "char",
          aria: "none",
        });

        splitRefs.current.push({ wordSplit, charSplit });
      });

      const allChars = splitRefs.current.flatMap(
        ({ charSplit }) => charSplit.chars
      );

      gsap.set(allChars, { color: colorInitial });

      const scheduleFinalTransition = (char, index) => {
        if (colorTransitionTimers.current.has(index)) {
          clearTimeout(colorTransitionTimers.current.get(index));
        }

        const timer = setTimeout(() => {
          if (!completedChars.current.has(index)) {
            gsap.to(char, {
              duration: 0.1,
              ease: "none",
              color: colorFinal,
              onComplete: () => {
                completedChars.current.add(index);
              },
            });
          }
          colorTransitionTimers.current.delete(index);
        }, 100);

        colorTransitionTimers.current.set(index, timer);
      };

      const updateChars = (self) => {
        const progress = self.progress;
        const totalChars = allChars.length;
        const isScrollingDown = progress >= lastScrollProgress.current;
        const currentCharIndex = Math.floor(progress * totalChars);

        allChars.forEach((char, index) => {
          if (!isScrollingDown && index >= currentCharIndex) {
            if (colorTransitionTimers.current.has(index)) {
              clearTimeout(colorTransitionTimers.current.get(index));
              colorTransitionTimers.current.delete(index);
            }
            completedChars.current.delete(index);
            gsap.set(char, { color: colorInitial });
            return;
          }

          if (completedChars.current.has(index)) return;

          if (index <= currentCharIndex) {
            gsap.set(char, { color: colorAccent });

            if (!colorTransitionTimers.current.has(index)) {
              scheduleFinalTransition(char, index);
            }
          } else {
            gsap.set(char, { color: colorInitial });
          }
        });

        lastScrollProgress.current = progress;
      };

      const trigger = ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top 90%",
        end: "top 40%",
        scrub: 1,
        invalidateOnRefresh: true,
        onUpdate: updateChars,
      });

      const refreshTimers = [
        window.setTimeout(() => {
          trigger.refresh();
          trigger.update();
          updateChars(trigger);
        }, 120),
        window.setTimeout(() => {
          trigger.refresh();
          trigger.update();
          updateChars(trigger);
        }, 450),
      ];

      cleanupAnimation = () => {
        refreshTimers.forEach((timer) => window.clearTimeout(timer));
        colorTransitionTimers.current.forEach((timer) => clearTimeout(timer));
        colorTransitionTimers.current.clear();
        trigger.kill();
        gsap.killTweensOf(allChars);

        splitRefs.current.forEach(({ wordSplit, charSplit }) => {
          wordSplit.revert?.();
          charSplit.revert?.();
        });
      };
    });

    return () => {
      cancelWait();
      cleanupAnimation();
    };
  }, [colorInitial, colorAccent, colorFinal]);

  // ✅ Always wrap children in a div with ref
  return (
    <div ref={containerRef} data-copy-wrapper="true" className={className}>
      {children}
    </div>
  );
}
