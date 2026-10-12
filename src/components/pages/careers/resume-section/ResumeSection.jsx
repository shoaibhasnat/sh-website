import styles from "./resume-section.module.css";
import GradientScrollAnimation from "../../../ui/gradient-scroll-animation/GradientScrollAnimation";
import { Container } from "@mui/material";
import { CareersData } from "../../../../data/pages/careers/CareersData";
import { Constants } from "../../../../utils/global/Constants";

const ResumeSection = () => {
  // Data absence checks
  if (!CareersData?.resumeSection) {
    return null;
  }

  const { title, description, buttonLabel } = CareersData.resumeSection;

  // Check for required fields
  if (!title) {
    return null;
  }
  return (
    <Container maxWidth="xl">
      <div className={`${styles.container} bgGlassWGlow`}>
        <div className={styles.header}>
          <GradientScrollAnimation>
            <h3>{title}</h3>
          </GradientScrollAnimation>
        </div>
        <GradientScrollAnimation>
          <p className={`${styles.description} description`}>{description}</p>
        </GradientScrollAnimation>
        <p className={styles.input}>
          <strong> Email us at: </strong>
          {Constants?.company?.hrEmail}
        </p>
      </div>
    </Container>
  );
};

export default ResumeSection;
