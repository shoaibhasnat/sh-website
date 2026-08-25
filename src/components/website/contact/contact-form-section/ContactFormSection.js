import { ContactData } from "@/data/pages/contact/ContactData";
import shared from "../contact-shared.module.css";
import ContactForm from "./ContactForm";
import styles from "./contact-form-section.module.css";

export default function ContactFormSection() {
  const { formSection } = ContactData;

  return (
    <section
      id={formSection.id}
      className={`${shared.section} ${shared.sectionLight} ${styles.section}`}
      aria-labelledby="contact-form-heading"
    >
      <div className={shared.inner}>
        <div className={styles.grid}>
          <div className={styles.info}>
            <h2 id="contact-form-heading" className={shared.heading}>
              {formSection.heading}
            </h2>
            <p className={shared.description}>{formSection.description}</p>

            <ul className={styles.cards}>
              {formSection.infoCards.map((card) => (
                <li key={card.title} className={styles.card}>
                  <h3 className={styles.cardTitle}>{card.title}</h3>
                  <p className={styles.cardDescription}>{card.description}</p>
                </li>
              ))}
            </ul>

            <p className={styles.note}>{formSection.responseNote}</p>
          </div>

          <div className={styles.formPanel}>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
