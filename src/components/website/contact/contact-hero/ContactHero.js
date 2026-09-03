"use client";

import { ContactData } from "@/data/pages/contact/ContactData";
import { PrimaryButton } from "@/utils/buttons";
import styles from "./contact-hero.module.css";

export default function ContactHero() {
  const { hero, formSection } = ContactData;

  const scrollToForm = (event) => {
    event.preventDefault();
    document.getElementById(formSection.id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section className={styles.hero} aria-labelledby="contact-hero-heading">
      <div className={styles.bgGrid} aria-hidden="true" />
      <div className={styles.bgGlow} aria-hidden="true" />

      <div className={styles.inner}>
        <div className={styles.eyebrowRow}>
          <span className={styles.rule} aria-hidden="true" />
          <p className={styles.eyebrow}>{hero.eyebrow}</p>
          <span className={styles.rule} aria-hidden="true" />
        </div>

        <h1 id="contact-hero-heading" className={styles.heading}>
          {hero.heading}
        </h1>

        <p className={styles.description}>{hero.description}</p>
        <p className={styles.supporting}>{hero.supporting}</p>

        <div className={styles.actions}>
          <PrimaryButton
            text={hero.primaryCta.label}
            href={hero.primaryCta.href}
            onClick={scrollToForm}
            height={48}
          />
        </div>

        <p className={styles.note}>
          <span className={styles.noteDot} aria-hidden="true" />
          {formSection.responseNote}
        </p>
      </div>
    </section>
  );
}
