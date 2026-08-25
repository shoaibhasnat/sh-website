import Link from "next/link";
import { AboutData } from "@/data/pages/about/AboutData";
import styles from "./about-hero.module.css";

const CONNECTORS = [
  { x2: 210, y2: 58 },
  { x2: 338, y2: 98 },
  { x2: 362, y2: 210 },
  { x2: 338, y2: 322 },
  { x2: 82, y2: 322 },
  { x2: 58, y2: 210 },
];

export default function AboutHero() {
  const { hero } = AboutData;
  const { visualization } = hero;

  return (
    <section className={styles.hero} aria-labelledby="about-hero-heading">
      <div className={styles.bgBase} aria-hidden="true" />
      <div className={styles.bgGrid} aria-hidden="true" />
      <div className={styles.bgGlow} aria-hidden="true" />
      <div className={styles.bgWash} aria-hidden="true" />

      <div className={styles.inner}>
        <div className={styles.content}>
          <div className={styles.eyebrowRow}>
            <span className={styles.eyebrowMark} aria-hidden="true" />
            <p className={styles.eyebrow}>{hero.eyebrow}</p>
          </div>

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
          <div className={styles.stage}>
            <div className={styles.ring} />
            <div className={`${styles.ring} ${styles.ringMid}`} />
            <div className={`${styles.ring} ${styles.ringOuter}`} />

            <svg className={styles.connectors} viewBox="0 0 420 420" fill="none">
              {CONNECTORS.map((point, index) => (
                <line
                  key={`${point.x2}-${point.y2}`}
                  x1="210"
                  y1="210"
                  x2={point.x2}
                  y2={point.y2}
                  style={{ animationDelay: `${index * 0.12}s` }}
                />
              ))}
            </svg>

            <div className={`${styles.node} ${styles.center}`}>
              <span className={styles.coreEyebrow}>Platform</span>
              <span className={styles.nodeLabel}>{visualization.center}</span>
              <span className={styles.coreSub}>Connected systems</span>
            </div>

            {visualization.nodes.map((node, index) => (
              <div
                key={node.id}
                className={`${styles.node} ${styles[node.position]}`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <span className={styles.nodeDot} />
                <span className={styles.nodeLabel}>{node.label}</span>
              </div>
            ))}

            <div className={styles.frameTL} />
            <div className={styles.frameBR} />
          </div>
        </div>
      </div>
    </section>
  );
}
