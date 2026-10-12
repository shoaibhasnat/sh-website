import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

/**
 * initPrinciplesAnimation
 * ------------------------
 * Adds scroll-based word fade animations for the principles copy blocks.
 */
export function initPrinciplesAnimation({ container, hero, copyBlocks }) {
  const validCopyBlocks = Array.isArray(copyBlocks)
    ? copyBlocks.filter(Boolean)
    : [];

  if (!container || !hero || validCopyBlocks.length === 0) return () => {};

  let trigger;
  let splits = [];
  let rafOne;
  let rafTwo;
  let refreshTimer;

  const ctx = gsap.context(() => {
    const init = () => {
      const paragraphs = validCopyBlocks
        .map((block) => block.querySelector("p"))
        .filter(Boolean);

      if (paragraphs.length === 0) return;

      splits = paragraphs.map((p) =>
        SplitText.create(p, {
          type: "words",
          aria: "none",
        }),
      );

      splits.forEach((split, index) => {
        gsap.set(split.words, { opacity: index === 0 ? 1 : 0.2 });
      });

      const overlap = 3;

      const wordProgress = (phase, i, total) => {
        const scale = 1 / (1 + overlap / total);
        const start = (i / total) * scale;
        const end = start + (overlap / total) * scale;

        return phase <= start
          ? 0
          : phase >= end
            ? 1
            : (phase - start) / (end - start);
      };

      const transition = (out, incoming, phase) => {
        if (out) {
          out.words.forEach((word, index) => {
            gsap.set(word, {
              opacity: 1 - wordProgress(phase, index, out.words.length) * 0.8,
            });
          });
        }

        if (incoming) {
          incoming.words.forEach((word, index) => {
            gsap.set(word, {
              opacity:
                0.2 + wordProgress(phase, index, incoming.words.length) * 0.8,
            });
          });
        }
      };

      trigger = ScrollTrigger.create({
        trigger: container,
        start: "top top",
        end: () => `+=${window.innerHeight * 2}`,
        pin: hero,
        pinSpacing: true,
        scrub: true,
        invalidateOnRefresh: true,
        anticipatePin: 1,
        onUpdate: ({ progress }) => {
          if (splits.length < 2) return;

          if (progress <= 0.5) {
            transition(splits[0], splits[1], progress / 0.5);
          } else {
            transition(splits[1], splits[2], (progress - 0.5) / 0.5);
          }
        },
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
    trigger?.kill?.();
    splits.forEach((split) => split?.revert?.());
    ctx.revert();
  };
}
