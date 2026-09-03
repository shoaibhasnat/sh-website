import { ProjectsPageData } from "@/data/pages/projects/ProjectsData";
import { GhostButton, PrimaryButton } from "@/utils/buttons";
import styles from "./projects-cta.module.css";

export default function ProjectsCta() {
  const { cta } = ProjectsPageData;

  return (
    <section className={styles.section} aria-labelledby="projects-cta-heading">
      <div className={styles.gridOverlay} aria-hidden="true" />
      <div className={styles.inner}>
        <p className={styles.eyebrow}>{cta.eyebrow}</p>
        <h2 id="projects-cta-heading" className={styles.heading}>
          {cta.heading}
        </h2>
        <p className={styles.description}>{cta.description}</p>
        <div className={styles.actions}>
          <PrimaryButton text={cta.primaryCta.label} href={cta.primaryCta.href} />
          <GhostButton
            text={cta.secondaryCta.label}
            href={cta.secondaryCta.href}
          />
        </div>
      </div>
    </section>
  );
}
