import Link from "next/link";
import styles from "./project-card.module.css";

export default function ProjectCard({ project, featured = false }) {
  if (!project) return null;

  return (
    <article className={`${styles.card} ${featured ? styles.featured : ""}`}>
      <Link href={project.href} className={styles.link}>
        <div className={styles.media}>
          {project.image ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={project.image}
              alt={project.name}
              className={styles.image}
              loading="lazy"
            />
          ) : (
            <div className={styles.placeholder} aria-hidden="true" />
          )}
        </div>

        <div className={styles.body}>
          <span className={styles.badge}>{project.industryLabel}</span>
          <h3 className={styles.title}>{project.name}</h3>

          {project.shortProblem ? (
            <p className={styles.problem}>{project.shortProblem}</p>
          ) : null}

          {project.shortSolution ? (
            <p className={styles.solution}>{project.shortSolution}</p>
          ) : null}

          {project.tags?.length ? (
            <ul className={styles.tags}>
              {project.tags.map((tag) => (
                <li key={tag} className={styles.tag}>
                  {tag}
                </li>
              ))}
            </ul>
          ) : null}

          <span className={styles.cta}>
            View Project
            <span className={styles.arrow} aria-hidden="true">
              →
            </span>
          </span>
        </div>
      </Link>
    </article>
  );
}
