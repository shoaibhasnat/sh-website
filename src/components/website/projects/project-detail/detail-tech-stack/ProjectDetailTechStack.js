import shared from "../project-detail-shared.module.css";
import styles from "./detail-tech-stack.module.css";

export default function ProjectDetailTechStack({ project }) {
  const techStack = project.raw?.proposedSolution?.techStackUsed || [];

  if (!techStack.length) return null;

  return (
    <section
      className={`${shared.sectionPad} ${styles.section}`}
      aria-labelledby="project-tech-heading"
    >
      <div className={shared.inner}>
        <p className={shared.eyebrow}>Technology</p>
        <h2 id="project-tech-heading" className={shared.sectionHeading}>
          Built With The Right Stack
        </h2>
        <p className={`${shared.sectionLead} ${styles.lead}`}>
          The tools and platforms that power this solution.
        </p>

        <ul className={styles.grid}>
          {techStack.map((tech) => {
            const content = (
              <>
                <span className={styles.iconWrap}>
                  {tech.image ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={tech.image}
                      alt=""
                      className={styles.icon}
                      loading="lazy"
                      decoding="async"
                    />
                  ) : (
                    <span className={styles.iconFallback} aria-hidden="true">
                      {String(tech.name || "?").charAt(0)}
                    </span>
                  )}
                </span>
                <span className={styles.name}>{tech.name}</span>
              </>
            );

            return (
              <li key={tech.name} className={styles.item}>
                {tech.url ? (
                  <a
                    href={tech.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.link}
                  >
                    {content}
                  </a>
                ) : (
                  <div className={styles.link}>{content}</div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
