import React from "react";
import SectionIntro from "../../../../ui/section-intro/SectionIntro";
import styles from "./intro-section.module.css";

const IntroSection = ({ industry }) => {
  const introSection = industry?.introSection ?? {};

  const {
    title = "",
    highlight = "",
    description = "",
  } = introSection;

  // If nothing meaningful exists, don’t render
  if (!title && !highlight && !description) {
    return null;
  }

  return (
    <div className={styles.container}>
      <SectionIntro
        title={title}
        highlight={highlight}
        description={description}
        titleTag="h4"
        maxWidth="800px"
      />
    </div>
  );
};

export default IntroSection;
