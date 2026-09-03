import ProjectCard from "../project-card/ProjectCard";
import styles from "./projects-grid.module.css";

export default function ProjectsGrid({
  projects = [],
  featured = false,
  columns = "default",
}) {
  if (!projects.length) return null;

  return (
    <ul
      className={`${styles.grid} ${
        featured ? styles.featuredGrid : ""
      } ${columns === "two" ? styles.twoCol : ""}`}
    >
      {projects.map((project) => (
        <li key={project.slug}>
          <ProjectCard project={project} featured={featured} />
        </li>
      ))}
    </ul>
  );
}
