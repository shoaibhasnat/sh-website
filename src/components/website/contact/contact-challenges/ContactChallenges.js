import { ContactData } from "@/data/pages/contact/ContactData";
import shared from "../contact-shared.module.css";
import styles from "./contact-challenges.module.css";

export default function ContactChallenges() {
  const { challenges } = ContactData;

  return (
    <section
      className={`${shared.section} ${shared.sectionLight}`}
      aria-labelledby="contact-challenges-heading"
    >
      <div className={shared.inner}>
        <div className={shared.header}>
          <p className={shared.eyebrow}>{challenges.eyebrow}</p>
          <h2 id="contact-challenges-heading" className={shared.heading}>
            {challenges.heading}
          </h2>
        </div>

        <ul className={styles.grid}>
          {challenges.items.map((item) => (
            <li key={item} className={styles.item}>
              <span className={styles.dot} aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <p className={styles.closing}>{challenges.closing}</p>
      </div>
    </section>
  );
}
