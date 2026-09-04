import { HomeData } from "@/data/pages/home/HomeData";
import shared from "../home-shared.module.css";
import styles from "./home-problems.module.css";

export default function HomeProblems() {
  const { problems } = HomeData;

  return (
    <section
      className={`${shared.section} ${shared.sectionLight} ${styles.section}`}
      aria-labelledby="home-problems-heading"
    >
      <div className={shared.inner}>
        <div className={shared.header}>
          <p className={shared.eyebrow}>{problems.eyebrow}</p>
          <h2 id="home-problems-heading" className={shared.heading}>
            {problems.heading}
          </h2>
          <p className={shared.description}>{problems.description}</p>
        </div>

        <ul className={styles.grid}>
          {problems.items.map((item, index) => (
            <li key={item.title} className={styles.card}>
              <span className={styles.index} aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardCopy}>{item.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
