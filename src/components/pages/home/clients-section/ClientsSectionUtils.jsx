import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const initClientsAnimation = ({ sectionRef, imageRefs }) => {
  const section = sectionRef.current;
  const images = imageRefs.current;

  if (!section || !images.length) return;

  // Predefined scatter directions for logos

  const scatterDirections = [
    { x: 1.7, y: 0.9 },
    { x: -1.8, y: 1.0 },
    { x: 1.6, y: -1.3 },
    { x: -1.7, y: -1 },
    { x: 1, y: 1.5 },
    { x: -1.0, y: -1.4 },
    { x: 1.8, y: 0.3 },
    { x: 1.0, y: -1.9 },
    { x: -1, y: 1.9 },
    { x: 1.7, y: -1.0 },
    { x: -1.3, y: -1.2 },
    { x: 0.9, y: 2.0 },
    { x: -1.1, y: -1.8 },
    { x: -0.9, y: 1.7 },
    { x: 1.2, y: -1.6 },

    { x: -1.8, y: 0.9 },
    { x: 1.8, y: -0.6},
    { x: 0.9, y: 1.8 },
    { x: -1.9, y: 0.7 },
    { x: 1.95, y: -0.4 },
  ];

  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;
  const isMobile = screenWidth < 1000;
  const scatterMultiplier = isMobile ? 0.9 : 0.6; // reduce scatter distance on mobile

  // Initial positions (tiny scale at center)
  const startPositions = images.map(() => ({
    x: 0,
    y: 0,
    scale: 0.01,
  }));

  // Calculate end positions based on scatter directions and screen size
  const endPositions = images.map((_, i) => {
    const dir = scatterDirections[i % scatterDirections.length];
    return {
      x: dir.x * screenWidth * scatterMultiplier,
      y: dir.y * screenHeight * scatterMultiplier,
      scale: 1,
    };
  });

  // Set initial positions
  images.forEach((img, i) => {
    gsap.set(img, startPositions[i]);
  });

  // ScrollTrigger for scroll-based animation
  return ScrollTrigger.create({
    trigger: section,
    start: "top top",
    end: "+=3000", // scroll length
    pin: true, // pin section while scrolling
    scrub: 1, // smooth animation
    anticipatePin: 1,
    refreshPriority: 1,
    onUpdate: (self) => {
      const progress = self.progress;

      images.forEach((img, i) => {
        const staggerDelay = i * 0.03;
        const scaleMultiplier = isMobile ? 2 : 2; // optional adjustment
        const imageProgress = Math.max(0, (progress - staggerDelay) * 1.5);

        gsap.set(img, {
          scale: gsap.utils.interpolate(
            startPositions[i].scale,
            endPositions[i].scale,
            imageProgress * scaleMultiplier,
          ),
          x: gsap.utils.interpolate(
            startPositions[i].x,
            endPositions[i].x,
            imageProgress,
          ),
          y: gsap.utils.interpolate(
            startPositions[i].y,
            endPositions[i].y,
            imageProgress,
          ),
        });
      });
    },
  });
};
