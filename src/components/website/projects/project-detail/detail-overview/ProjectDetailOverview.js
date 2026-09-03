import shared from "../project-detail-shared.module.css";
import styles from "./detail-overview.module.css";

export default function ProjectDetailOverview({ project }) {
  const raw = project.raw || {};
  const summary = raw.introSection?.summary;
  const client = raw.introSection?.clientDetail;

  if (!summary && !client) return null;

  const services = client?.clientServices || [];

  return (
    <section
      className={`${shared.sectionPad} ${styles.section}`}
      aria-labelledby="project-overview-heading"
    >
      <div className={shared.inner}>
        <div className={styles.grid}>
          <div className={styles.copy}>
            <p className={shared.eyebrow}>Overview</p>
            {summary?.title ? (
              <h2 id="project-overview-heading" className={shared.sectionHeading}>
                {summary.title}
              </h2>
            ) : (
              <h2 id="project-overview-heading" className={shared.sectionHeading}>
                Project Overview
              </h2>
            )}
            {summary?.highlight ? (
              <p className={styles.highlight}>{summary.highlight}</p>
            ) : null}
            {summary?.description ? (
              <p className={styles.description}>{summary.description}</p>
            ) : null}
          </div>

          {client ? (
            <aside className={styles.meta} aria-label="Client details">
              <div className={styles.metaCard}>
                {client.clientName ? (
                  <div className={styles.metaRow}>
                    <span className={styles.metaLabel}>Client</span>
                    <span className={styles.metaValue}>{client.clientName}</span>
                  </div>
                ) : null}
                {client.companyName ? (
                  <div className={styles.metaRow}>
                    <span className={styles.metaLabel}>Company</span>
                    <span className={styles.metaValue}>{client.companyName}</span>
                  </div>
                ) : null}
                {client.clientIndustry ? (
                  <div className={styles.metaRow}>
                    <span className={styles.metaLabel}>Industry</span>
                    <span className={styles.metaValue}>
                      {client.clientIndustry}
                    </span>
                  </div>
                ) : null}
                {services.length ? (
                  <div className={styles.metaRow}>
                    <span className={styles.metaLabel}>Focus</span>
                    <ul className={styles.services}>
                      {services.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </div>
            </aside>
          ) : null}
        </div>
      </div>
    </section>
  );
}
