import shared from "../project-detail-shared.module.css";
import styles from "./detail-testimonials.module.css";

export default function ProjectDetailTestimonials({ project }) {
  const testimonials = project.raw?.testimonials || [];

  if (!testimonials.length) return null;

  return (
    <section
      className={`${shared.sectionPad} ${styles.section}`}
      aria-labelledby="project-testimonials-heading"
    >
      <div className={shared.inner}>
        <p className={shared.eyebrow}>Outcomes</p>
        <h2 id="project-testimonials-heading" className={shared.sectionHeading}>
          What Stakeholders Said
        </h2>

        <div className={styles.grid}>
          {testimonials.map((item) => (
            <blockquote
              key={`${item.author}-${item.role}`}
              className={styles.card}
            >
              <p className={styles.quote}>“{item.quote}”</p>
              <footer className={styles.footer}>
                <cite className={styles.author}>{item.author}</cite>
                {item.role ? <span className={styles.role}>{item.role}</span> : null}
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
