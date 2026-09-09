import { PrimaryButton, SecondaryButton } from "@/utils/buttons";
import styles from "./case-studies-hero.module.css";

const stages = [
  {
    key: "challenge",
    eyebrow: "CHALLENGE",
    title: "Where friction starts",
    items: ["Manual work", "Disconnected tools", "Slow handoffs"],
  },
  {
    key: "system",
    eyebrow: "SYSTEM HEURISTICS",
    title: "The right system",
    items: ["AI agents", "Automation", "Integrations", "Software"],
  },
  {
    key: "outcome",
    eyebrow: "OUTCOME",
    title: "What changes",
    items: ["Faster operations", "Better visibility", "Less manual work"],
  },
];

const industries = ["Healthcare", "Construction"];

export default function CaseStudiesHero() {
  return (
    <section className={styles.hero} aria-labelledby="case-studies-hero-heading">
      <div className={styles.bgGrid} aria-hidden="true" />
      <div className={styles.bgLine} aria-hidden="true" />
      <div className={styles.bgGlow} aria-hidden="true" />

      <div className={styles.inner}>
        <div className={styles.content}>
          <p className={styles.eyebrow}>CASE STUDIES</p>
          <h1 id="case-studies-hero-heading" className={styles.heading}>
            Real Problems. Better Systems.{" "}
            <span className={styles.highlight}>Measurable Outcomes.</span>
          </h1>
          <p className={styles.description}>
            Explore how System Heuristics helps businesses improve sales,
            marketing and operations through AI agents, automation,
            integrations and custom software.
          </p>
          <p className={styles.supporting}>
            Browse our work across Healthcare and Construction to see how
            complex workflows are turned into connected, scalable systems.
          </p>

          <div className={styles.actions}>
            <PrimaryButton
              text="Explore Case Studies"
              href="#case-study-categories"
              height={46}
            />
            <SecondaryButton
              text="View All Projects"
              href="/projects"
              height={46}
            />
          </div>
        </div>

        <div
          className={styles.visual}
          role="img"
          aria-label="Business challenge flows through a System Heuristics solution into measurable outcomes"
        >
          <div className={styles.visualHeader}>
            <span>CASE STUDY FLOW</span>
            <span>01 — 03</span>
          </div>

          <div className={styles.flow}>
            {stages.map((stage, index) => (
              <div key={stage.key} className={styles.flowItem}>
                <div className={`${styles.stage} ${styles[stage.key]}`}>
                  <span className={styles.stageEyebrow}>{stage.eyebrow}</span>
                  <h2 className={styles.stageTitle}>{stage.title}</h2>
                  <ul className={styles.stageList}>
                    {stage.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                {index < stages.length - 1 ? (
                  <span className={styles.connector} aria-hidden="true">
                    <span className={styles.connectorTrack}>
                      <span className={styles.connectorPulse} />
                    </span>
                    <span className={styles.connectorNode}>
                      <svg
                        className={styles.connectorIcon}
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.5 8h8M8.5 4.5 12 8l-3.5 3.5"
                          stroke="currentColor"
                          strokeWidth="1.75"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </span>
                ) : null}
              </div>
            ))}
          </div>

          <div className={styles.visualFooter}>
            <span className={styles.footerRule} aria-hidden="true" />
            <span>From operational friction to business value</span>
          </div>
        </div>

        <ul className={styles.industries} aria-label="Case study industries">
          {industries.map((industry, index) => (
            <li key={industry} className={styles.industry}>
              <span className={styles.industryNumber}>
                {String(index + 1).padStart(2, "0")}
              </span>
              <span>{industry}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
