import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import styles from "./slider.module.css";
import Button from "../button/Button";
import { ArrowRight, CircleCheck } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GradientScrollAnimation from "../gradient-scroll-animation/GradientScrollAnimation";
import { goToSlide, setInitialSlides, animateDots } from "./SliderUtils";

gsap.registerPlugin(ScrollTrigger);

const Slider = ({ slides = [], autoPlayDelay = 4000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isAnimatingRef = useRef(false);

  const containerRef = useRef(null);
  const slideContainerRef = useRef(null);
  const dotsRef = useRef([]);
  const autoPlayTimerRef = useRef(null);

  // init: set slide stack states (opacity/zIndex)
  useLayoutEffect(() => {
    if (!slides?.length) return;

    setInitialSlides(slideContainerRef, 0);
    animateDots(dotsRef, 0);

    // optional: ensure first slide is fully visible
    const first = slideContainerRef.current?.children?.[0];
    if (first) gsap.set(first, { opacity: 1, x: 0 });

    // cleanup any gsap tweens on unmount
    return () => {
      if (slideContainerRef.current?.children?.length) {
        gsap.killTweensOf(slideContainerRef.current.children);
      }
      gsap.killTweensOf(dotsRef.current);
    };
  }, [slides?.length]);

  const handleGoToSlide = (index) => {
    if (!slides?.length) return;
    goToSlide({
      index,
      currentIndex,
      setCurrentIndex,
      isAnimatingRef,
      slideContainerRef,
      dotsRef,
    });
  };

  const nextSlide = () => {
    const next = (currentIndex + 1) % slides.length;
    handleGoToSlide(next);
  };

  // autoplay
  useEffect(() => {
    if (!slides?.length) return;
    autoPlayTimerRef.current = setTimeout(nextSlide, autoPlayDelay);
    return () => clearTimeout(autoPlayTimerRef.current);
  }, [currentIndex, autoPlayDelay, slides?.length]);

  // ScrollTrigger entrance
  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        containerRef.current,
        { opacity: 0, x: -150 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 60%",
            toggleActions: "play none none none",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  if (!slides?.length) return null;

  return (
    <div ref={containerRef} className={styles.container}>
      <div className={`${styles.sliderWrapper} bgGlassWGlow`}>
        <div className={styles.slidesContainer} ref={slideContainerRef}>
          {slides.map((slide, index) => (
            <div key={index} className={styles.slide}>
              <div className={styles.slideContent}>
                <div className={styles.leftContent}>
                  <GradientScrollAnimation>
                    <h2 className={styles.title}>{slide.title}</h2>
                  </GradientScrollAnimation>

                  <p className={`${styles.description} description`}>
                    {slide.description}
                  </p>

                  {slide.features?.length > 0 && (
                    <div className={styles.featuresList}>
                      {slide.features.slice(0, 3).map((feature, idx) => (
                        <span key={idx} className={`${styles.featureItem} description`}>
                          <CircleCheck className={styles.pointIcon} />
                          {feature}
                        </span>
                      ))}
                    </div>
                  )}

                  {slide.projectUrl && (
                    <Button
                      variant="outlined"
                      className={styles.projectBtn}
                      onClick={() => window.open(`/case-study/${slide.id}`)}
                    >
                      View Project <ArrowRight />
                    </Button>
                  )}
                </div>

                <div className={styles.rightContent}>
                  <div className={styles.imageWrapper}>
                    <img src={slide.imageUrl} alt={slide.title} width={900} height={600} loading="lazy" decoding="async" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.dotsContainer}>
          {slides.map((_, index) => (
            <div
              key={index}
              ref={(el) => (dotsRef.current[index] = el)}
              onClick={() => handleGoToSlide(index)}
              className={styles.dot}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
