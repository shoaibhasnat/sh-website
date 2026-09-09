import Image from "next/image";
import Link from "next/link";
import { CaseStudiesData } from "@/data/pages/case-studies/CaseStudiesData";
import styles from "./case-studies-categories.module.css";

export default function CaseStudiesCategories() {
  const { categories } = CaseStudiesData;

  return (
    <section
      id="case-study-categories"
      className={styles.section}
      aria-labelledby="case-study-categories-heading"
    >
      <div className={styles.inner}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>{categories.eyebrow}</p>
          <h2 id="case-study-categories-heading" className={styles.heading}>
            {categories.heading}
          </h2>
          <p className={styles.description}>{categories.description}</p>
        </div>

        <ul className={styles.list}>
          {categories.items.map((industry, index) => (
            <li key={industry.name} className={styles.card}>
              <Link href={industry.href} className={styles.cardLink}>
                <div className={styles.media}>
                  <Image
                    src={industry.image.src}
                    alt={industry.image.alt}
                    fill
                    sizes="(max-width: 900px) 100vw, 50vw"
                    className={styles.image}
                    priority={index === 0}
                  />
                  <span className={styles.mediaCaption}>{industry.caption}</span>
                </div>
                <div className={styles.body}>
                  <span className={styles.number}>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className={styles.cardTitle}>{industry.name}</h3>
                  <p className={styles.cardDescription}>
                    {industry.description}
                  </p>
                  <span className={styles.cardCta}>
                    View Projects
                    <span aria-hidden="true"> →</span>
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
