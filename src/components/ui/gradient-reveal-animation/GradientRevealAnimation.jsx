import React, { useLayoutEffect, useRef } from "react";
import { Colors } from "../../../utils/global/Colors";

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

export default function GradientRevealAnimation({
  children,
  colorInitial = Colors.secondaryLight(),
  colorAccent = Colors.primary(),
  colorFinal = Colors.text(),
  className = "",
}) {
  const containerRef = useRef(null);
  const cleanupRef = useRef(() => {});

  useLayoutEffect(() => {
    let cancelled = false;

    const cancelWait = waitForRoutePaint(async () => {
      if (!containerRef.current || cancelled) return;

      try {
        const [{ gsap }, { SplitText }] = await Promise.all([
          import("gsap"),
          import("gsap/SplitText"),
        ]);

        if (!containerRef.current || cancelled) return;

        gsap.registerPlugin(SplitText);

        const splitRefs = [];
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

          splitRefs.push({ wordSplit, charSplit });
        });

        const allChars = splitRefs.flatMap(({ charSplit }) => charSplit.chars);

        gsap.set(allChars, { color: colorInitial });

        allChars.forEach((char, index) => {
          gsap.to(char, {
            duration: 0.1,
            ease: "none",
            color: colorAccent,
            delay: index * 0.005,
            onComplete: () => {
              gsap.to(char, {
                duration: 0.05,
                ease: "none",
                color: colorFinal,
              });
            },
          });
        });

        cleanupRef.current = () => {
          gsap.killTweensOf(allChars);
          splitRefs.forEach(({ wordSplit, charSplit }) => {
            wordSplit.revert?.();
            charSplit.revert?.();
          });
        };
      } catch {
        // Keep original text visible if animation code cannot load.
      }
    });

    return () => {
      cancelled = true;
      cancelWait();
      cleanupRef.current?.();
      cleanupRef.current = () => {};
    };
  }, [colorInitial, colorAccent, colorFinal]);

  return (
    <div ref={containerRef} data-copy-wrapper="true" className={className}>
      {children}
    </div>
  );
}
