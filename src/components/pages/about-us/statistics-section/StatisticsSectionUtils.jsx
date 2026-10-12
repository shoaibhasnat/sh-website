import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const cardAnimationConfig = [
  { x: -700, y: -80, rotation: -18 },
  { x: 700, y: -40, rotation: 18 },
  { x: -500, y: 120, rotation: -12 },
  { x: 500, y: 160, rotation: 12 },
];

export const initStatisticsAnimations = (containerRef, cardRefs) => {
  const container = containerRef?.current;
  const cards = cardRefs?.current?.filter(Boolean) || [];

  if (!container || !cards.length) return () => {};

  let rafOne;
  let rafTwo;
  let refreshTimer;

  const ctx = gsap.context(() => {
    const init = () => {
      cards.forEach((card, index) => {
        const cfg = cardAnimationConfig[index];
        if (!cfg) return;

        gsap.set(card, {
          x: cfg.x,
          y: cfg.y,
          rotation: cfg.rotation,
          opacity: 0,
          force3D: true,
        });
      });

      ScrollTrigger.create({
        trigger: container,
        start: "top top",
        end: "+=150%",
        scrub: 1.5,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          const progress = self.progress;

          cards.forEach((card, index) => {
            const cfg = cardAnimationConfig[index];
            if (!cfg) return;

            const localProgress = gsap.utils.clamp(
              0,
              1,
              (progress - index * 0.15) / 0.4,
            );

            gsap.set(card, {
              x: gsap.utils.interpolate(cfg.x, 0, localProgress),
              y: gsap.utils.interpolate(cfg.y, 0, localProgress),
              rotation: gsap.utils.interpolate(cfg.rotation, 0, localProgress),
              opacity: localProgress,
              force3D: true,
            });
          });
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
    ctx.revert();
  };
};

export function boldFirstWord(text) {
  if (!text) return null;

  const [first, ...rest] = text.split(" ");

  return (
    <span
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "end",
        lineHeight: 1,
      }}
    >
      <strong>{first}</strong>
      <span>{rest.length > 0 && " " + rest.join(" ")}</span>
    </span>
  );
}
