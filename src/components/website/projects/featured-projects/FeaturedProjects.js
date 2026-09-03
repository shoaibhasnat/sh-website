import ProjectsGrid from "../projects-grid/ProjectsGrid";
import { ProjectsPageData } from "@/data/pages/projects/ProjectsData";
import styles from "./featured-projects.module.css";

export default function FeaturedProjects({ projects = [] }) {
  if (!projects.length) return null;

  const { featured } = ProjectsPageData;

  return (
    <section
      className={styles.section}
      aria-labelledby="featured-projects-heading"
    >
      <div className={styles.header}>
        <p className={styles.eyebrow}>{featured.eyebrow}</p>
        <h2 id="featured-projects-heading" className={styles.heading}>
          {featured.heading}
        </h2>
      </div>

      <ProjectsGrid projects={projects.slice(0, 4)} featured />
    </section>
  );
}
