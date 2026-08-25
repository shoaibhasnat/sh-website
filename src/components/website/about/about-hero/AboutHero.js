import Link from "next/link";
import { AboutData } from "@/data/pages/about/AboutData";
import styles from "./about-hero.module.css";

export default function AboutHero() {
  const { hero } = AboutData;
  const { visualization } = hero;

  return (
    <section className={styles.hero} aria-labelledby="about-hero-heading">
      <div className={styles.bgGrid} aria-hidden="true" />
      <div className={styles.bgGlow} aria-hidden="true" />

      <div className={styles.inner}>
        <div className={styles.content}>
          <p className={styles.eyebrow}>{hero.eyebrow}</p>

          <h1 id="about-hero-heading" className={styles.heading}>
            {hero.heading.before}
            <span className={styles.highlight}>{hero.heading.highlight}</span>
            {hero.heading.after}
          </h1>

          <p className={styles.description}>{hero.description}</p>
          <p className={styles.supporting}>{hero.supporting}</p>

          <div className={styles.actions}>
            <Link href={hero.primaryCta.href} className={styles.primaryCta}>
              {hero.primaryCta.label}
            </Link>
            <Link href={hero.secondaryCta.href} className={styles.secondaryCta}>
              {hero.secondaryCta.label}
            </Link>
          </div>
        </div>

        <div className={styles.visual} aria-hidden="true">
          <div className={styles.system}>
            <svg className={styles.connectors} viewBox="0 0 420 420" fill="none">
              <line x1="210" y1="210" x2="210" y2="58" />
              <line x1="210" y1="210" x2="338" y2="98" />
              <line x1="210" y1="210" x2="362" y2="210" />
              <line x1="210" y1="210" x2="338" y2="322" />
              <line x1="210" y1="210" x2="82" y2="322" />
              <line x1="210" y1="210" x2="58" y2="210" />
            </svg>

            <div className={`${styles.node} ${styles.center}`}>
              <span className={styles.nodeLabel}>{visualization.center}</span>
            </div>

            {visualization.nodes.map((node) => (
              <div
                key={node.id}
                className={`${styles.node} ${styles[node.position]}`}
              >
                <span className={styles.nodeLabel}>{node.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
