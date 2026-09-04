import { GhostButton, PrimaryButton } from "@/utils/buttons";
import styles from "./detail-cta.module.css";

export default function ProjectDetailCta({ projectName }) {
  return (
    <section className={styles.section} aria-labelledby="project-detail-cta-heading">
      <div className={styles.gridOverlay} aria-hidden="true" />
      <div className={styles.inner}>
        <p className={styles.eyebrow}>Ready To Build?</p>
        <h2 id="project-detail-cta-heading" className={styles.heading}>
          {projectName
            ? `Inspired by ${projectName}? Let’s Build Yours.`
            : "Let’s Build Your Next System."}
        </h2>
        <p className={styles.description}>
          Tell us about the workflows, bottlenecks, or growth goals you want to
          improve. We’ll help you map the right solution.
        </p>
        <div className={styles.actions}>
          <PrimaryButton text="Book Free Consultation" href="/discovery-call" />
          <GhostButton text="View All Projects" href="/projects" />
        </div>
      </div>
    </section>
  );
}
