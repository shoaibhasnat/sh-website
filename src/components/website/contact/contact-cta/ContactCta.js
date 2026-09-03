"use client";

import { ContactData } from "@/data/pages/contact/ContactData";
import { GhostButton, PrimaryButton } from "@/utils/buttons";
import styles from "./contact-cta.module.css";

export default function ContactCta() {
  const { cta } = ContactData;

  const scrollToForm = (event) => {
    event.preventDefault();
    const target = document.getElementById("contact-form");
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className={styles.section} aria-labelledby="contact-cta-heading">
      <div className={styles.gridOverlay} aria-hidden="true" />
      <div className={styles.inner}>
        <p className={styles.eyebrow}>{cta.eyebrow}</p>
        <h2 id="contact-cta-heading" className={styles.heading}>
          {cta.heading}
        </h2>
        <p className={styles.description}>{cta.description}</p>
        <div className={styles.actions}>
          <PrimaryButton
            text={cta.primaryCta.label}
            href={cta.primaryCta.href}
            onClick={scrollToForm}
          />
          <GhostButton
            text={cta.secondaryCta.label}
            href={cta.secondaryCta.href}
          />
        </div>
      </div>
    </section>
  );
}
