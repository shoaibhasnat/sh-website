import { AboutData } from "@/data/pages/about/AboutData";
import shared from "../about-shared.module.css";
import styles from "./about-principles.module.css";

export default function AboutPrinciples() {
  const { principles } = AboutData;

  return (
    <section
      className={`${shared.section} ${styles.section}`}
      aria-labelledby="about-principles-heading"
    >
      <div className={styles.bgGrid} aria-hidden="true" />
      <div className={styles.bgGlow} aria-hidden="true" />

      <div className={shared.inner}>
        <div className={styles.layout}>
          <div className={styles.intro}>
            <div className={styles.eyebrowRow}>
              <span className={styles.eyebrowMark} aria-hidden="true" />
              <p className={styles.eyebrow}>{principles.eyebrow}</p>
            </div>
            <h2 id="about-principles-heading" className={styles.heading}>
              {principles.heading}
            </h2>
          </div>

          <ol className={styles.list}>
            {principles.items.map((item, index) => (
              <li key={item.title} className={styles.row}>
                <span className={styles.index} aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className={styles.body}>
                  <h3 className={styles.title}>{item.title}</h3>
                  <p className={styles.description}>{item.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
