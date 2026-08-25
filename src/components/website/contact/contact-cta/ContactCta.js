"use client";

import Link from "next/link";
import { ContactData } from "@/data/pages/contact/ContactData";
import shared from "../contact-shared.module.css";
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
          <a
            href={cta.primaryCta.href}
            className={shared.primaryCta}
            onClick={scrollToForm}
          >
            {cta.primaryCta.label}
          </a>
          <Link href={cta.secondaryCta.href} className={shared.secondaryCta}>
            {cta.secondaryCta.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
