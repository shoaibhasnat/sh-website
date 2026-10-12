import gsap from "gsap";

export const animateDots = (dotsRef, activeIndex) => {
  dotsRef.current.forEach((dot, index) => {
    if (!dot) return;

    gsap.to(dot, {
      width: index === activeIndex ? 40 : 12,
      backgroundColor:
        index === activeIndex ? "var(--color-primary)" : "#d1d5db",
      duration: 0.35,
      ease: "power2.out",
    });
  });
};

export const setInitialSlides = (slideContainerRef, activeIndex = 0) => {
  const slides = slideContainerRef.current?.children;
  if (!slides?.length) return;

  Array.from(slides).forEach((el, i) => {
    gsap.set(el, {
      opacity: i === activeIndex ? 1 : 0,
      x: 0,
      zIndex: i === activeIndex ? 2 : 1,
      pointerEvents: i === activeIndex ? "auto" : "none",
    });
  });
};

export const goToSlide = ({
  index,
  currentIndex,
  setCurrentIndex,
  isAnimatingRef,
  slideContainerRef,
  dotsRef,
}) => {
  if (index === currentIndex) return;
  if (isAnimatingRef.current) return;

  const slides = slideContainerRef.current?.children;
  if (!slides?.length) return;

  const currentSlide = slides[currentIndex];
  const nextSlide = slides[index];
  if (!currentSlide || !nextSlide) return;

  isAnimatingRef.current = true;

  const direction = index > currentIndex ? 1 : -1;
  const distance = 120; // px slide movement (feel free: 80-200)

  // ensure next slide is above for the transition
  gsap.set(nextSlide, {
    opacity: 0,
    x: direction * distance,
    zIndex: 3,
    pointerEvents: "none",
  });

  // keep current visible while it fades out
  gsap.set(currentSlide, { zIndex: 2, pointerEvents: "none" });

  const tl = gsap.timeline({
    defaults: { ease: "power2.inOut" },
    onComplete: () => {
      // after animation, normalize stacking
      gsap.set(currentSlide, {
        opacity: 0,
        x: 0,
        zIndex: 1,
        pointerEvents: "none",
      });
      gsap.set(nextSlide, {
        opacity: 1,
        x: 0,
        zIndex: 2,
        pointerEvents: "auto",
      });

      setCurrentIndex(index);
      isAnimatingRef.current = false;
    },
  });

  // OUT
  tl.to(currentSlide, { opacity: 0, x: -direction * distance, duration: 0.55 }, 0);

  // IN (overlap for smoothness)
  tl.to(nextSlide, { opacity: 1, x: 0, duration: 0.55 }, 0);

  animateDots(dotsRef, index);
};
