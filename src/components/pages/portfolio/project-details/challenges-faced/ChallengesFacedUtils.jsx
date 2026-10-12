import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

export function initChallengesAnimation({
  containerRef,
  heroRef,
  paragraphRefs,
}) {
  if (!containerRef.current || !heroRef.current) return;

  const splits = paragraphRefs.current.map((el) =>
    SplitText.create(el, { type: "words" })
  );

  // Initial opacity
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
      out.words.forEach((w, i) => {
        gsap.set(w, {
          opacity: 1 - wordProgress(phase, i, out.words.length) * 0.8,
        });
      });
    }

    if (incoming) {
      incoming.words.forEach((w, i) => {
        gsap.set(w, {
          opacity: 0.2 + wordProgress(phase, i, incoming.words.length) * 0.8,
        });
      });
    }
  };

  const trigger = ScrollTrigger.create({
    trigger: containerRef.current,
    start: "top top",
    end: () => `+=${window.innerHeight * 2}`,
    pin: heroRef.current,
    pinSpacing: true,
    scrub: true,
    onUpdate: ({ progress }) => {
      if (progress <= 0.5) {
        transition(splits[0], splits[1], progress / 0.5);
      } else {
        transition(splits[1], splits[2], (progress - 0.5) / 0.5);
      }
    },
  });

  ScrollTrigger.refresh();

  return () => {
    splits.forEach((s) => s.revert());
    trigger.kill();
  };
}
