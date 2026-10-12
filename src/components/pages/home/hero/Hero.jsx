import { useEffect, useRef } from "react";
import styles from "./hero.module.css";
import GradientText from "../../../ui/gradient-text/GradientText";
import Button from "../../../ui/button/Button";
import { Container } from "@mui/material";
import { HomeData } from "../../../../data/pages/home/HomePageData";
import AnimatedText from "../../../ui/animated-text/AnimatedText";
import GradientRevealAnimation from "../../../ui/gradient-reveal-animation/GradientRevealAnimation";
import Chip from "../../../ui/chip/Chip";
import { initRobotHover, initRobotBlink } from "./HeroUtils";

export default function Hero() {
  const heroRef = useRef(null);
  const robotRef = useRef(null);
  const eyesRef = useRef(null);

  const { hero } = HomeData || {};

  // Non-critical robot interactions are deferred so the LCP robot image can paint first.
  useEffect(() => {
    let cleanupHover = () => {};
    let cleanupBlink = () => {};
    let timerId;
    let idleId;
    let cancelled = false;

    const initAnimations = () => {
      if (cancelled) return;

      cleanupHover = initRobotHover(robotRef?.current, eyesRef?.current);
      const lidsMask = heroRef.current?.querySelector(`.${styles.lidsMask}`);
      cleanupBlink = initRobotBlink(lidsMask);
    };

    if ("requestIdleCallback" in window) {
      idleId = window.requestIdleCallback(initAnimations, { timeout: 1800 });
    } else {
      timerId = window.setTimeout(initAnimations, 900);
    }

    return () => {
      cancelled = true;
      if (idleId) window.cancelIdleCallback?.(idleId);
      window.clearTimeout(timerId);
      cleanupHover?.();
      cleanupBlink?.();
    };
  }, []);
  return (
    <Container maxWidth="xl">
      <section ref={heroRef} className={`${styles.hero} bgGlassWGlow`}>
        <div className={styles.visual}>
          <div ref={robotRef} className={`${styles.robotCard} `}>
            <img
              src={hero?.imageRobot}
              alt="Robotic Hand"
              width={500}
              height={400}
              loading="eager"
              fetchPriority="high"
              decoding="async"
              className={styles.robotBody}
            />
            <div className={styles.eyesContainer}>
              <img
                ref={eyesRef}
                src="/images/pages/home/hero/robot-eyes.png"
                alt="Robot Eyes"
                width={500}
                height={400}
                loading="eager"
                fetchPriority="high"
                decoding="async"
                className={styles.robotEyes}
              />
            </div>
            <div className={styles.lidsContainer}>
              <div className={styles.lidsMask}>
                <img
                  src="/images/pages/home/hero/robot-lids.png"
                  alt="Robot Lids"
                  width={500}
                  height={400}
                  loading="eager"
                  decoding="async"
                  className={styles.robotLids}
                />
              </div>
            </div>

            <div className={styles.glow}></div>
          </div>
        </div>

        <div className={styles.section1}>
          <div className={styles.content}>
            <AnimatedText>
              <h3 className={styles.title}>
                {hero?.title} <GradientText>{hero?.subtitle}</GradientText>
              </h3>
            </AnimatedText>
            <GradientRevealAnimation>
              <div className={`description ${styles.description}`}>
                {hero?.description}
              </div>
            </GradientRevealAnimation>

            <Button
              href="/case-study"
              width="300px"
              ariaLabel={hero?.buttonText}
              className={styles.heroBtn}
            >
              {hero?.buttonText}
            </Button>
          </div>
        </div>

        <div className={styles.section2}>
          <div className={styles.content}>
            <Chip>
              <img
                alt="AI-driven solution star"
                src="/images/pages/home/hero/hero-stars.png"
                width={20}
                height={20}
                loading="eager"
                decoding="async"
                className={styles.chipImg}
              />
              <br />
              <p>AI-Driven Solutions</p>
            </Chip>

            <GradientRevealAnimation>
              <p className={`description ${styles.description}`}>
                {hero?.description2}
              </p>
            </GradientRevealAnimation>
          </div>
        </div>
      </section>
    </Container>
  );
}
