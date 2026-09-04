import Link from "next/link";
import { HomeData } from "@/data/pages/home/HomeData";
import { getFeaturedProjects } from "@/data/pages/projects/ProjectsData";
import ProjectsGrid from "@/components/website/projects/projects-grid/ProjectsGrid";
import shared from "../home-shared.module.css";
import styles from "./home-projects.module.css";

export default function HomeProjects() {
  const featured = getFeaturedProjects().slice(0, 4);
  if (!featured.length) return null;

  const { projects } = HomeData;

  return (
    <section
      className={`${shared.section} ${shared.sectionLight} ${styles.section}`}
      aria-labelledby="home-projects-heading"
    >
      <div className={shared.inner}>
        <div className={styles.headerRow}>
          <div className={styles.header}>
            <p className={shared.eyebrow}>{projects.eyebrow}</p>
            <h2 id="home-projects-heading" className={shared.heading}>
              {projects.heading}
            </h2>
          </div>
          <Link href={projects.cta.href} className={styles.viewAll}>
            {projects.cta.label}
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        <ProjectsGrid projects={featured} featured />
      </div>
    </section>
  );
}
