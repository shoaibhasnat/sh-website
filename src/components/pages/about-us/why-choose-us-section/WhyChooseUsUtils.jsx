import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const initWhyChooseUsAnimation = (
  cardsRefs,
  containerRef,
  mainContentRef,
) => {
  const container = containerRef?.current;
  const cards = cardsRefs?.current?.filter(Boolean) || [];

  if (!container || !cards.length) return () => {};

  let rafOne;
  let rafTwo;
  let refreshTimer;

  const ctx = gsap.context(() => {
    const init = () => {
      const finalPositions = getFinalPositions();
      const zIndexes = getZIndexesByBottomPosition(finalPositions);

      setInitialCardsState(cards, zIndexes);

      if (window.innerWidth < 850 && mainContentRef?.current) {
        animateIntroFadeUp({
          mainRef: container,
          mainContent: mainContentRef.current,
        });
      }

      ScrollTrigger.create({
        trigger: container,
        start: "top top",
        end: () => `+=${window.innerHeight * 2}px`,
        pin: true,
        pinSpacing: true,
        scrub: 1,
        invalidateOnRefresh: true,
        anticipatePin: 1,

        onRefresh: () => {
          const refreshedPositions = getFinalPositions();
          const refreshedZIndexes =
            getZIndexesByBottomPosition(refreshedPositions);

          cards.forEach((card, index) => {
            gsap.set(card, {
              zIndex: refreshedZIndexes[index],
            });
          });
        },

        onUpdate: (self) => {
          const progress = self.progress;

          const currentFinalPositions = getFinalPositions();
          const currentZIndexes =
            getZIndexesByBottomPosition(currentFinalPositions);

          const initialRotations = [5, -3, 3.5, -1];

          /*
            FIRST PHASE DELAY SETTINGS

            FIRST_PHASE_CARD_DELAY:
            Controls delay between each card entrance.

            FIRST_PHASE_DURATION:
            Controls how long each card takes to move upward.

            Example:
            Card 1 starts at 0.00
            Card 2 starts at 0.08
            Card 3 starts at 0.16
            Card 4 starts at 0.24
          */
          const FIRST_PHASE_CARD_DELAY = 0.08;
          const FIRST_PHASE_DURATION = 0.22;
          const FIRST_PHASE_END_LIMIT = 0.5;

          /*
            SECOND PHASE SETTINGS
            This controls the spread-out movement after the first phase.
          */
          const phaseTwoStartOffsets = [0.55, 0.6, 0.65, 0.7];

          cards.forEach((card, index) => {
            if (!card || !currentFinalPositions[index]) return;

            const initialRotation = initialRotations[index] ?? 0;

            const phase1Start = index * FIRST_PHASE_CARD_DELAY;
            const phase1End = Math.min(
              phase1Start + FIRST_PHASE_DURATION,
              FIRST_PHASE_END_LIMIT,
            );

            let x = -50;
            let y = 200;
            let rotation = initialRotation;

            /*
              FIRST PHASE:
              Cards come upward one by one with delay.
            */
            if (progress < phase1Start) {
              y = 200;
              rotation = initialRotation;
            } else if (progress >= phase1Start && progress <= phase1End) {
              const rawProgress =
                (progress - phase1Start) / (phase1End - phase1Start);

              const phase1Progress = easeOutCubic(clamp(rawProgress, 0, 1));

              y = 200 - phase1Progress * 250;
              rotation = initialRotation;
            } else {
              y = -50;
              rotation = initialRotation;
            }

            /*
              SECOND PHASE:
              Cards move to final scattered positions.
            */
            const phase2Start = phaseTwoStartOffsets[index] ?? 0.55;
            const phase2End = Math.min(
              phase2Start + (0.95 - phase2Start) * 0.9,
              0.95,
            );

            const finalX = currentFinalPositions[index][0];
            const finalY = currentFinalPositions[index][1];

            if (progress >= phase2Start && progress <= 0.95) {
              const rawProgress =
                (progress - phase2Start) / (phase2End - phase2Start);

              const phase2Progress = easeOutCubic(clamp(rawProgress, 0, 1));

              x = -50 + (finalX + 50) * phase2Progress;
              y = -50 + (finalY + 50) * phase2Progress;
              rotation = initialRotation * (1 - phase2Progress);
            } else if (progress > 0.95) {
              x = finalX;
              y = finalY;
              rotation = 0;
            }

            gsap.set(card, {
              xPercent: x,
              yPercent: y,
              rotation,
              zIndex: currentZIndexes[index],
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

const setInitialCardsState = (cards, zIndexes) => {
  cards.forEach((card, index) => {
    gsap.set(card, {
      xPercent: -250,
      yPercent: 250,
      rotation: 10,
      transformOrigin: "50% 50%",
      zIndex: zIndexes[index],
      force3D: true,
    });
  });
};

const getZIndexesByBottomPosition = (positions) => {
  return positions
    .map((position, index) => ({
      index,
      y: position?.[1] ?? 0,
    }))
    .sort((a, b) => a.y - b.y)
    .reduce((acc, item, sortedIndex) => {
      acc[item.index] = sortedIndex + 1;
      return acc;
    }, []);
};

const getFinalPositions = () => {
  const width = window.innerWidth;

  if (width < 850) {
    return [
      [-50, -200],
      [-50, -90],
      [-50, 20],
      [-50, 130],
    ];
  }

  if (width < 1100) {
    return [
      [-110, -90],
      [20, -80],
      [-100, 80],
      [20, 80],
    ];
  }

  return [
    [-140, -90],
    [40, -80],
    [-130, 80],
    [40, 80],
  ];
};

const animateIntroFadeUp = ({ mainRef, mainContent }) => {
  gsap.set(mainContent, { opacity: 1, y: 0 });

  gsap.to(mainContent, {
    opacity: 0,
    y: -80,
    ease: "none",
    scrollTrigger: {
      trigger: mainRef,
      start: "top -110%",
      end: "top -170%",
      scrub: true,
      invalidateOnRefresh: true,
    },
  });
};

const clamp = (value, min, max) => {
  return Math.min(Math.max(value, min), max);
};

const easeOutCubic = (value) => {
  return 1 - Math.pow(1 - value, 3);
};