// Import GSAP and ScrollTrigger for animations
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

/* =========================
   Main initialization
========================= */
// Initializes services section animations based on screen size (desktop or mobile)
export const initServicesAnimations = ({
  containerRef,
  mainRef,
  mainContentRef,
  rowRefs,
  cardRefs,
}) => {
  return gsap.context(() => {
    const mobile = isMobileView();

    if (mobile) {
      // Run mobile-specific card animations
      animateMobileCards({ rowRefs, cardRefs });
    } else {
      // Run desktop-specific card animations
      animateDesktopCards({ rowRefs, cardRefs });
    }

    // Refresh ScrollTrigger to ensure triggers are recalculated
    ScrollTrigger.refresh();
  }, containerRef);
};

/* =========================
   Utility functions
========================= */
// Checks if the current viewport width is considered mobile
const isMobileView = () => window.matchMedia("(max-width: 768px)").matches;

// Animate cards for desktop layout with horizontal offset and rotation
const animateDesktopCards = ({ rowRefs, cardRefs }) => {
  const leftX = [-1000, -1200, -1400, -1600]; // X offsets for left cards
  const rightX = [1000, 1200, 1400, 1600]; // X offsets for right cards
  const y = [100, -100, -100, -100]; // Y offsets
  const leftRot = [-40, -42, -45, -47]; // rotation for left cards
  const rightRot = [40, 42, 45, 47]; // rotation for right cards

  rowRefs.current.forEach((_, rowIndex) => {
    const leftCard = cardRefs.current[rowIndex]?.left;
    const rightCard = cardRefs.current[rowIndex]?.right;
    if (!leftCard || !rightCard) return;

    // Animate left card from offset to original position
    gsap.fromTo(
      leftCard,
      { x: leftX[rowIndex], y: y[rowIndex], rotation: leftRot[rowIndex] },
      {
        x: 0,
        y: 0,
        rotation: 0,
        scrollTrigger: {
          trigger: rowRefs.current[rowIndex],
          start: "top 65%",
          end: "top 30%",
          scrub: true,
        },
      },
    );

    // Animate right card from offset to original position
    gsap.fromTo(
      rightCard,
      { x: rightX[rowIndex], y: y[rowIndex], rotation: rightRot[rowIndex] },
      {
        x: 0,
        y: 0,
        rotation: 0,
        scrollTrigger: {
          trigger: rowRefs.current[rowIndex],
          start: "top 65%",
          end: "top 30%",
          scrub: true,
        },
      },
    );
  });
};

// Animate cards for mobile layout with simplified offsets and rotation
const animateMobileCards = ({ rowRefs, cardRefs }) => {
  const mobileX = 700; // X offset for mobile
  const mobileY = 80; // Y offset for mobile
  const mobileRot = 18; // rotation for mobile

  const animateCard = (cardEl, cardIndex) => {
    const fromLeft = cardIndex % 2 === 0; // alternate left/right entry

    gsap.fromTo(
      cardEl,
      {
        x: fromLeft ? -mobileX : mobileX,
        y: mobileY,
        rotation: fromLeft ? -mobileRot : mobileRot,
      },
      {
        x: 0,
        y: 0,
        rotation: 0,
        scrollTrigger: {
          trigger: cardEl,
          start: "top 75%",
          end: "top 45%",
          scrub: true,
        },
      },
    );
  };

  rowRefs.current.forEach((_, rowIndex) => {
    const leftCard = cardRefs.current[rowIndex]?.left;
    const rightCard = cardRefs.current[rowIndex]?.right;
    if (!leftCard || !rightCard) return;

    const leftCardIndex = rowIndex * 2;
    const rightCardIndex = rowIndex * 2 + 1;

    // Animate both left and right cards for the row
    animateCard(leftCard, leftCardIndex);
    animateCard(rightCard, rightCardIndex);
  });
};
