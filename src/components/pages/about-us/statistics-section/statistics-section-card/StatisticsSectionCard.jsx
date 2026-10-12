import AnimatedText from "../../../../ui/animated-text/AnimatedText";
import Particles from "../../../../ui/background-particles/BackgroundParticles";
import CountUp from "../../../../ui/count-up/CountUp";
import GradientText from "../../../../ui/gradient-text/GradientText";
import { boldFirstWord } from "../StatisticsSectionUtils";
import styles from "./statistics-section-card.module.css";

const StatisticsSectionCard = ({ statistics, isLeft, refProp }) => {
  return (
    <div
      ref={refProp}
      className={`${styles.card} ${isLeft ? "" : styles.right} bgGlassWGlow`}
    >
      <div className={styles.cardBg}>
        <Particles
          particleColors={["#ffffffff", "#ffffffff"]}
          particleCount={400}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={70}
          moveParticlesOnHover
          alphaParticles
          disableRotation={false}
        />
      </div>

      <div className={styles.cardContent}>
        <h1 className={styles.number}>
          <GradientText>
            <CountUp
              from={0}
              to={statistics?.number}
              direction="up"
              duration={1}
              delay={0}
              className="count-up-text"
            />
            {statistics?.suffix}
          </GradientText>
        </h1>

        <div className={styles.titleWrapper}>
          
          <AnimatedText>
            <p className={styles.title}>{boldFirstWord(statistics?.title)}</p>
          </AnimatedText>
        </div>
      </div>
    </div>
  );
};

export default StatisticsSectionCard;
