import Link from "next/link";
import styles from "./legal-document.module.css";

export default function LegalDocument({ data }) {
  if (!data) return null;

  return (
    <article className={styles.page}>
      <div className={styles.hero}>
        <div className={styles.inner}>
          <p className={styles.eyebrow}>{data.eyebrow}</p>
          <h1 className={styles.title}>{data.title}</h1>
          {data.lastUpdated ? (
            <p className={styles.meta}>Last updated: {data.lastUpdated}</p>
          ) : null}
          {data.intro ? <p className={styles.intro}>{data.intro}</p> : null}
        </div>
      </div>

      <div className={styles.body}>
        <div className={styles.inner}>
          {(data.sections || []).map((section) => (
            <section key={section.title} className={styles.section}>
              <h2 className={styles.sectionTitle}>{section.title}</h2>
              {(section.paragraphs || []).map((paragraph) => (
                <p key={paragraph} className={styles.copy}>
                  {paragraph}
                </p>
              ))}
              {section.list?.length ? (
                <ul className={styles.list}>
                  {section.list.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))}

          <div className={styles.footerNav}>
            <Link href="/privacy-policy" className={styles.navLink}>
              Privacy Policy
            </Link>
            <span className={styles.dot} aria-hidden="true">
              ·
            </span>
            <Link href="/terms-and-conditions" className={styles.navLink}>
              Terms & Conditions
            </Link>
            <span className={styles.dot} aria-hidden="true">
              ·
            </span>
            <Link href="/contact" className={styles.navLink}>
              Contact
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
