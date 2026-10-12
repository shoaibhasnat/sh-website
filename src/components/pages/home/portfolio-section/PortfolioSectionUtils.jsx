import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

/* =========================
   Set Portfolio Sizes
========================= */
// Sets width of slider and slides dynamically based on viewport
export const setPortfolioSizes = (
  sliderRef,
  slidesContainerRef,
  slideRefs,
  introSlideRef,
  slidesCount,
) => {
  let width =
    sliderRef.current?.parentElement?.clientWidth || window.innerWidth;
  width = Math.max(0, Math.round(width));

  // Set slider width and centering
  if (sliderRef.current) {
    Object.assign(sliderRef.current.style, {
      width: `${width}px`,
      margin: "0 auto",
      boxSizing: "border-box",
      maxWidth: "100%",
    });
  }

  // Set slides container width and each slide width
  if (slidesContainerRef.current) {
    slidesContainerRef.current.style.width = `${slidesCount * width}px`;

    slideRefs.current.forEach((el) => {
      if (el)
        Object.assign(el.style, {
          width: `${width}px`,
          flex: "0 0 auto",
          boxSizing: "border-box",
        });
    });
  }

  // Refresh ScrollTrigger to recalc positions
  try {
    ScrollTrigger.refresh();
  } catch (error) {
    // console.log(error);
  }
};

/* =========================
   Initialize Portfolio Scroll
========================= */
// Creates horizontal scroll effect with pinned section and moving slides
export const initPortfolioScroll = (
  stickyRef,
  sliderRef,
  slidesContainerRef,
  slideRefs,
  introSlideRef,
) => {
  if (!stickyRef.current || !sliderRef.current || !slidesContainerRef.current)
    return () => {};

  const ctx = gsap.context(() => {
    const stickySection = stickyRef.current;
    const slidesContainer = slidesContainerRef.current;
    const slider = sliderRef.current;
    const slideElements = [...slideRefs.current];

    // Height of sticky section: one viewport per slide plus intro
    const stickyHeight = window.innerHeight * (slideElements.length + 1);
    const totalMove = slidesContainer.offsetWidth - slider.offsetWidth;
    const slideWidth = slider.offsetWidth;

    // Initialize slide titles: first visible, others hidden
    slideElements.forEach((slide, index) => {
      if (!slide) return;
      const title = slide.querySelector("h1");
      if (title) {
        if (index === 0) {
          gsap.set(title, { y: 0, opacity: 1 }); // first slide visible
        } else {
          gsap.set(title, { y: 80, opacity: 0 }); // others hidden
        }
      }
    });

    // Create horizontal scroll ScrollTrigger
    ScrollTrigger.create({
      trigger: stickySection,
      start: "top top",
      end: `+=${stickyHeight}px`,
      scrub: 1,
      pin: true,
      pinSpacing: true,
      onUpdate: (self) => {
        const mainMove = self.progress * totalMove;
        gsap.set(slidesContainer, { x: -mainMove });

        const currentSlide = Math.floor(mainMove / slideWidth);
        const sliderProgress = (mainMove % slideWidth) / slideWidth;

        // Animate individual slides
        slideElements.forEach((slide, index) => {
          if (!slide) return;

          const title = slide.querySelector("h1");
          const images = slide.querySelectorAll("img");

          // Animate image parallax effect
          if (slide !== introSlideRef.current && images.length) {
            images.forEach((img) => {
              let relativeProgress = 0;
              if (index === currentSlide) relativeProgress = sliderProgress;
              else if (index === currentSlide + 1)
                relativeProgress = sliderProgress - 1;

              gsap.set(img, {
                x: relativeProgress * slideWidth * 0.25,
              });
            });
          }

          // Animate title vertical movement and fade
          if (title) {
            const textProgress = Math.min(
              1,
              Math.max(0, 1 - Math.abs(currentSlide - index + sliderProgress)),
            );
            gsap.set(title, {
              y: 80 - textProgress * 100,
              opacity: textProgress,
            });
          }
        });
      },
    });
  }, stickyRef);

  return () => ctx.revert();
};
