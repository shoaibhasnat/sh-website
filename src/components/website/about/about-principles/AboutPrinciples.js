import { AboutData } from "@/data/pages/about/AboutData";
import shared from "../about-shared.module.css";
import styles from "./about-principles.module.css";

export default function AboutPrinciples() {
  const { principles } = AboutData;

  return (
    <section
      className={`${shared.section} ${shared.sectionLight}`}
      aria-labelledby="about-principles-heading"
    >
      <div className={shared.inner}>
        <div className={shared.header}>
          <p className={shared.eyebrow}>{principles.eyebrow}</p>
          <h2 id="about-principles-heading" className={shared.heading}>
            {principles.heading}
          </h2>
        </div>

        <ul className={styles.grid}>
          {principles.items.map((item, index) => (
            <li key={item.title} className={styles.card}>
              <span className={styles.index} aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className={styles.title}>{item.title}</h3>
              <p className={styles.description}>{item.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
