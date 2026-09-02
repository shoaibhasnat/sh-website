import CaseStudiesHero from "@/components/website/case-studies/case-studies-hero/CaseStudiesHero";
import styles from "./case-studies.module.css";

const industries = [
  {
    name: "Healthcare",
    description:
      "Connected administrative workflows, communication and operational systems.",
  },
  {
    name: "Construction",
    description:
      "Practical systems for sales, project operations, scheduling and reporting.",
  },
  {
    name: "Logistics",
    description:
      "Clearer tracking, communication and visibility across moving operations.",
  },
];

export default function CaseStudies() {
  return (
    <>
      <CaseStudiesHero />

      <section
        id="case-study-categories"
        className={styles.categories}
        aria-labelledby="case-study-categories-heading"
      >
        <div className={styles.inner}>
          <div className={styles.header}>
            <p className={styles.eyebrow}>INDUSTRY EXPERIENCE</p>
            <h2 id="case-study-categories-heading" className={styles.heading}>
              Explore Case Studies by Industry.
            </h2>
            <p className={styles.description}>
              See how focused systems create better outcomes in the workflows
              that matter most.
            </p>
          </div>

          <ul className={styles.list}>
            {industries.map((industry, index) => (
              <li key={industry.name} className={styles.card}>
                <span className={styles.number}>
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className={styles.cardTitle}>{industry.name}</h3>
                <p className={styles.cardDescription}>
                  {industry.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
