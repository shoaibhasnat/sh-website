import { HomeData } from "@/data/pages/home/HomeData";
import { PrimaryButton, SecondaryButton } from "@/utils/buttons";
import shared from "../home-shared.module.css";
import styles from "./home-plans.module.css";

export default function HomePlans() {
  const { plans } = HomeData;

  return (
    <section
      className={`${shared.section} ${shared.sectionLight} ${styles.section}`}
      aria-labelledby="home-plans-heading"
    >
      <div className={shared.inner}>
        <div className={`${shared.header} ${shared.headerCenter}`}>
          <p className={shared.eyebrow}>{plans.eyebrow}</p>
          <h2 id="home-plans-heading" className={shared.heading}>
            {plans.heading}
          </h2>
        </div>

        <ul className={styles.grid}>
          {plans.items.map((plan) => (
            <li
              key={plan.title}
              className={`${styles.card} ${plan.recommended ? styles.recommended : ""}`}
            >
              {plan.recommended ? (
                <span className={styles.badge}>Recommended</span>
              ) : null}
              <span className={styles.number}>{plan.number}</span>
              <h3 className={styles.title}>{plan.title}</h3>
              <p className={styles.price}>{plan.price}</p>
              <p className={styles.description}>{plan.description}</p>
              {plan.guarantee ? (
                <p className={styles.guarantee}>{plan.guarantee}</p>
              ) : null}
              {plan.examplesLabel ? (
                <p className={styles.includesLabel}>{plan.examplesLabel}</p>
              ) : (
                <p className={styles.includesLabel}>Includes</p>
              )}
              <ul className={styles.includes}>
                {plan.includes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className={styles.cta}>
                {plan.recommended ? (
                  <PrimaryButton
                    text={plan.cta.label}
                    href={plan.cta.href}
                    height={44}
                    width="100%"
                  />
                ) : (
                  <SecondaryButton
                    text={plan.cta.label}
                    href={plan.cta.href}
                    height={44}
                    width="100%"
                  />
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
