import { HomeData } from "@/data/pages/home/HomeData";
import shared from "../home-shared.module.css";
import styles from "./home-why-us.module.css";

export default function HomeWhyUs() {
  const { whyUs } = HomeData;

  return (
    <section
      className={`${shared.section} ${shared.sectionAlt} ${styles.section}`}
      aria-labelledby="home-why-us-heading"
    >
      <div className={shared.inner}>
        <div className={shared.header}>
          <p className={shared.eyebrow}>{whyUs.eyebrow}</p>
          <h2 id="home-why-us-heading" className={shared.heading}>
            {whyUs.heading}
          </h2>
          <p className={shared.description}>{whyUs.description}</p>
        </div>

        <ul className={styles.grid}>
          {whyUs.items.map((item, index) => (
            <li key={item.title} className={styles.item}>
              <span className={styles.number} aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className={styles.title}>{item.title}</h3>
                <p className={styles.copy}>{item.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
