import { ContactData } from "@/data/pages/contact/ContactData";
import shared from "../contact-shared.module.css";
import styles from "./contact-hero.module.css";

export default function ContactHero() {
  const { hero } = ContactData;

  return (
    <section className={styles.hero} aria-labelledby="contact-hero-heading">
      <div className={styles.bgGrid} aria-hidden="true" />
      <div className={shared.inner}>
        <div className={styles.content}>
          <p className={shared.eyebrow}>{hero.eyebrow}</p>
          <h1 id="contact-hero-heading" className={styles.heading}>
            {hero.heading}
          </h1>
          <p className={shared.description}>{hero.description}</p>
          <p className={shared.supporting}>{hero.supporting}</p>
        </div>
      </div>
    </section>
  );
}
