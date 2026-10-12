import styles from "./intro-section.module.css";
import GradientText from "../../../ui/gradient-text/GradientText";
import GradientScrollAnimation from "../../../ui/gradient-scroll-animation/GradientScrollAnimation";
import { PortfolioData } from "../../../../data/pages/portfolio/PortfolioData";
import { Container } from "@mui/material";
import LazyImage from "../../../ui/lazy-image/LazyImage";

const IntroSection = () => {
  // Data absence checks
  if (!PortfolioData?.introSection) {
    return null;
  }

  const { title, description } = PortfolioData.introSection;

  // Check for required fields
  if (!title || !description) {
    return null;
  }

  return (
    <Container maxWidth="xl">
      <div className={styles.container}>
        <div className={styles.header}>
         <LazyImage src="/logo.svg" alt="System Heuristics logo" width={100} height={100} className={styles.logo} />
          <GradientScrollAnimation>
            <h3>{title}</h3>
          </GradientScrollAnimation>
        </div>
        <GradientScrollAnimation>
          <p className={`${styles.description} description`}>{description} </p>
        </GradientScrollAnimation>
      </div>
    </Container>
  );
};

export default IntroSection;
