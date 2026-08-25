import { ContactData } from "@/data/pages/contact/ContactData";
import shared from "../contact-shared.module.css";
import styles from "./contact-process.module.css";

export default function ContactProcess() {
  const { process } = ContactData;

  return (
    <section
      className={`${shared.section} ${shared.sectionAlt}`}
      aria-labelledby="contact-process-heading"
    >
      <div className={shared.inner}>
        <div className={shared.header}>
          <p className={shared.eyebrow}>{process.eyebrow}</p>
          <h2 id="contact-process-heading" className={shared.heading}>
            {process.heading}
          </h2>
        </div>

        <ol className={styles.grid}>
          {process.steps.map((step) => (
            <li key={step.number} className={styles.card}>
              <span className={styles.number}>{step.number}</span>
              <h3 className={styles.title}>{step.title}</h3>
              <p className={styles.description}>{step.description}</p>
              {step.price ? <p className={styles.price}>{step.price}</p> : null}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
