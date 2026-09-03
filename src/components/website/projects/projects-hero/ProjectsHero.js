import { ProjectsPageData } from "@/data/pages/projects/ProjectsData";
import styles from "./projects-hero.module.css";

export default function ProjectsHero() {
  const { hero } = ProjectsPageData;

  return (
    <section className={styles.hero} aria-labelledby="projects-hero-heading">
      <div className={styles.bgGrid} aria-hidden="true" />
      <div className={styles.bgGlow} aria-hidden="true" />

      <div className={styles.inner}>
        <p className={styles.eyebrow}>{hero.eyebrow}</p>
        <h1 id="projects-hero-heading" className={styles.heading}>
          {hero.heading}
        </h1>
        <p className={styles.description}>{hero.description}</p>
        <p className={styles.supporting}>{hero.supporting}</p>
      </div>
    </section>
  );
}
