import shared from "../project-detail-shared.module.css";
import styles from "./detail-challenge.module.css";

export default function ProjectDetailChallenge({ project }) {
  const raw = project.raw || {};
  const problems = raw.introSection?.clientDetail?.problemStatement || [];
  const challenges = raw.challengesFaced || [];

  if (!problems.length && !challenges.length) return null;

  return (
    <section
      className={`${shared.sectionPad} ${shared.softSurface} ${styles.section}`}
      aria-labelledby="project-challenge-heading"
    >
      <div className={shared.inner}>
        <p className={shared.eyebrow}>The Challenge</p>
        <h2 id="project-challenge-heading" className={shared.sectionHeading}>
          What Was Holding The Business Back
        </h2>
        <p className={`${shared.sectionLead} ${styles.lead}`}>
          Understanding the operational friction was the first step toward
          building the right system.
        </p>

        {problems.length ? (
          <ul className={styles.problems}>
            {problems.map((item) => (
              <li key={item} className={styles.problem}>
                <span className={styles.problemMark} aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        ) : null}

        {challenges.length ? (
          <div className={styles.challengeBlock}>
            <h3 className={styles.subheading}>Key Obstacles We Navigated</h3>
            <div className={styles.challengeGrid}>
              {challenges.map((item, index) => (
                <article key={item.title || index} className={styles.card}>
                  <span className={styles.index} aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h4 className={styles.cardTitle}>{item.title}</h4>
                  <p className={styles.cardCopy}>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
