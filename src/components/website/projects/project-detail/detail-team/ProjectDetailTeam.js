import shared from "../project-detail-shared.module.css";
import styles from "./detail-team.module.css";

export default function ProjectDetailTeam({ project }) {
  const team = project.raw?.teamInvolved || [];

  if (!team.length) return null;

  return (
    <section
      className={`${shared.sectionPadTight} ${shared.softSurface} ${styles.section}`}
      aria-labelledby="project-team-heading"
    >
      <div className={shared.inner}>
        <p className={shared.eyebrow}>People & Roles</p>
        <h2 id="project-team-heading" className={shared.sectionHeading}>
          Who The System Serves
        </h2>

        <ul className={styles.grid}>
          {team.map((member) => (
            <li key={`${member.name}-${member.role}`} className={styles.card}>
              <h3 className={styles.name}>{member.name}</h3>
              <p className={styles.role}>{member.role}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
