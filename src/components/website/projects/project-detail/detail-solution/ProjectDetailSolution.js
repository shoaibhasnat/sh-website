import shared from "../project-detail-shared.module.css";
import styles from "./detail-solution.module.css";

export default function ProjectDetailSolution({ project }) {
  const solution = project.raw?.proposedSolution;
  if (!solution) return null;

  const image = solution.leftSectionImage || "";
  const points = solution.points || [];
  const techStack = solution.techStackUsed || [];

  return (
    <section
      className={styles.section}
      aria-labelledby="project-solution-heading"
    >
      <div className={`${shared.inner} ${styles.inner}`}>
        <h2 id="project-solution-heading" className={styles.heading}>
          {solution.heading || "How We Solved It"}
        </h2>

        <div className={styles.grid}>
          <div className={styles.left}>
            <span className={styles.accent} aria-hidden="true" />

            {image ? (
              <div className={styles.media}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={image}
                  alt={`${project.name} solution`}
                  className={styles.image}
                />
              </div>
            ) : null}

            {solution.description ? (
              <p className={styles.description}>{solution.description}</p>
            ) : null}
          </div>

          <div className={styles.right}>
            {points.length ? (
              <ul className={styles.points}>
                {points.map((item) => (
                  <li key={item}>
                    <span className={styles.check} aria-hidden="true">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2.2 6.2L4.7 8.7L9.8 3.3"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            ) : null}

            {techStack.length ? (
              <ul className={styles.tech} aria-label="Technology stack">
                {techStack.map((tech) => {
                  const content = (
                    <>
                      {tech.image ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={tech.image}
                          alt=""
                          className={styles.techIcon}
                          loading="lazy"
                          decoding="async"
                        />
                      ) : (
                        <span className={styles.techFallback} aria-hidden="true">
                          {String(tech.name || "?").charAt(0)}
                        </span>
                      )}
                      <span className={styles.tooltip} role="tooltip">
                        {tech.name}
                      </span>
                    </>
                  );

                  return (
                    <li key={tech.name} className={styles.techItem}>
                      {tech.url ? (
                        <a
                          href={tech.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.techLink}
                          aria-label={tech.name}
                        >
                          {content}
                        </a>
                      ) : (
                        <div
                          className={styles.techLink}
                          tabIndex={0}
                          aria-label={tech.name}
                        >
                          {content}
                        </div>
                      )}
                    </li>
                  );
                })}
              </ul>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
