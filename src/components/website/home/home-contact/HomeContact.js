import ContactForm from "@/components/website/contact/contact-form-section/ContactForm";
import { HomeData } from "@/data/pages/home/HomeData";
import shared from "../home-shared.module.css";
import styles from "./home-contact.module.css";

export default function HomeContact() {
  const { contact } = HomeData;

  return (
    <section
      id={contact.id}
      className={`${shared.section} ${shared.sectionAlt} ${styles.section}`}
      aria-labelledby="home-contact-heading"
    >
      <div className={shared.inner}>
        <div className={styles.grid}>
          <div className={styles.info}>
            <p className={shared.eyebrow}>{contact.eyebrow}</p>
            <h2 id="home-contact-heading" className={shared.heading}>
              {contact.heading}
            </h2>
            <p className={shared.description}>{contact.description}</p>

            <ul className={styles.cards}>
              {contact.infoCards.map((card) => (
                <li key={card.title} className={styles.card}>
                  <h3 className={styles.cardTitle}>{card.title}</h3>
                  <p className={styles.cardDescription}>{card.description}</p>
                </li>
              ))}
            </ul>

            <p className={styles.note}>{contact.note}</p>
          </div>

          <div className={styles.formPanel}>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
