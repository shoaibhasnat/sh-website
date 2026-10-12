import React from "react";
import SectionIntro from "../../../../ui/section-intro/SectionIntro";
import styles from "./info-section.module.css";

const InfoSection = ({ service }) => {
  const info = service?.infoSection ?? {};

  const { title = "", highlight = "", description = "" } = info;

  // If nothing meaningful, don’t render
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

export default InfoSection;
