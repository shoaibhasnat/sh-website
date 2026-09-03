import shared from "../project-detail-shared.module.css";
import styles from "./detail-features.module.css";

export default function ProjectDetailFeatures({ project }) {
  const featuresBlock = project.raw?.mainFeatures;
  const features = featuresBlock?.features || [];

  if (!features.length) return null;

  return (
    <section
      className={`${shared.sectionPad} ${shared.softSurface} ${styles.section}`}
      aria-labelledby="project-features-heading"
    >
      <div className={shared.inner}>
        <p className={shared.eyebrow}>Capabilities</p>
        <h2 id="project-features-heading" className={shared.sectionHeading}>
          {featuresBlock.heading || "Core Platform Features"}
        </h2>
        {featuresBlock.description ? (
          <p className={`${shared.sectionLead} ${styles.lead}`}>
            {featuresBlock.description}
          </p>
        ) : null}

        <ul className={styles.grid}>
          {features.map((feature, index) => (
            <li key={feature} className={styles.item}>
              <span className={styles.number} aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className={styles.text}>{feature}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
