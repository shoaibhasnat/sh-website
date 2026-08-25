import { CareersData } from "@/data/pages/careers/CareersData";
import shared from "../careers-shared.module.css";
import styles from "./careers-culture.module.css";

export default function CareersCulture() {
  const { culture } = CareersData;

  return (
    <section
      className={`${shared.section} ${shared.sectionAlt}`}
      aria-labelledby="careers-culture-heading"
    >
      <div className={shared.inner}>
        <div className={shared.header}>
          <p className={shared.eyebrow}>{culture.eyebrow}</p>
          <h2 id="careers-culture-heading" className={shared.heading}>
            {culture.heading}
          </h2>
        </div>

        <ul className={styles.grid}>
          {culture.items.map((item, index) => (
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
