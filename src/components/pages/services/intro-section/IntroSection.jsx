// IntroSection.js
// ------------------------
// Renders the introductory section of the Services page.
// Features:
//  - Company logo (lazy-loaded)
//  - Tagline with highlighted gradient text
//  - Description with scroll-based gradient animation
//  - Uses MUI Container for layout
//  - Data fetched from ServicesPageData.introSection
// IntroSection.js
import styles from "./intro-section.module.css";
import GradientText from "../../../ui/gradient-text/GradientText";
import GradientScrollAnimation from "../../../ui/gradient-scroll-animation/GradientScrollAnimation";
import { ServicesPageData } from "../../../../data/pages/services/ServicesPageData";
import { Container } from "@mui/material";
import LazyImage from "../../../ui/lazy-image/LazyImage";

const IntroSection = () => {
  const introSection = ServicesPageData?.introSection ?? {};

  const {
    logo = "",
    taglinePrefix = "",
    taglineHighlight = "",
    description = "",
  } = introSection;

  // If nothing meaningful exists, don't render the section
  if (!logo && !taglinePrefix && !taglineHighlight && !description) {
    return null;
  }

  return (
    <Container maxWidth="xl">
      <div className={styles.container}>
        <div className={styles.header}>
          {!!logo && (
            <LazyImage
              src={logo}
              alt="System Heuristics logo"
              width={100}
              height={100}
              className={styles.logo}
            />
          )}

          {(taglinePrefix || taglineHighlight) && (
            <h3>
              {taglinePrefix}
              {!!taglineHighlight && (
                <GradientText>{taglineHighlight}</GradientText>
              )}
            </h3>
          )}
        </div>

        {!!description && (
          <GradientScrollAnimation>
            <p className={`description ${styles.description}`}>{description}</p>
          </GradientScrollAnimation>
        )}
      </div>
    </Container>
  );
};

export default IntroSection;
