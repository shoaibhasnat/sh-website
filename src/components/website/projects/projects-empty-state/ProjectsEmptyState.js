import { ProjectsPageData } from "@/data/pages/projects/ProjectsData";
import { PrimaryButton, SecondaryButton } from "@/utils/buttons";
import styles from "./projects-empty-state.module.css";

export default function ProjectsEmptyState() {
  const { empty } = ProjectsPageData;

  return (
    <div className={styles.empty} role="status">
      <h3 className={styles.heading}>{empty.heading}</h3>
      <p className={styles.description}>{empty.description}</p>
      <div className={styles.actions}>
        <PrimaryButton text={empty.primaryCta.label} href={empty.primaryCta.href} />
        <SecondaryButton
          text={empty.secondaryCta.label}
          href={empty.secondaryCta.href}
        />
      </div>
    </div>
  );
}
