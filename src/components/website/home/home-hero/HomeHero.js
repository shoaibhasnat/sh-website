import { HomeData } from "@/data/pages/home/HomeData";
import { PrimaryButton, SecondaryButton } from "@/utils/buttons";
import styles from "./home-hero.module.css";

const STAGE_SIZE = 420;
const STAGE_CENTER = STAGE_SIZE / 2;
const NODE_RADIUS = 40;
const CONNECTOR_RADIUS = 150;

/** Distributes nodes evenly around the circle, starting at the top. */
function pointAt(index, total, radius) {
  const angle = (-90 + (360 / total) * index) * (Math.PI / 180);
  return {
    x: Math.cos(angle) * radius,
    y: Math.sin(angle) * radius,
  };
}

export default function HomeHero() {
  const { hero } = HomeData;
  const { visualization } = hero;
  const nodeCount = visualization.nodes.length;

  return (
    <section className={styles.hero} aria-labelledby="home-hero-heading">
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

          <h1 id="home-hero-heading" className={styles.heading}>
            {hero.heading}
          </h1>

          <p className={styles.description}>{hero.description}</p>
          <p className={styles.supporting}>{hero.supporting}</p>

          <div className={styles.actions}>
            <PrimaryButton
              text={hero.primaryCta.label}
              href={hero.primaryCta.href}
              height={46}
            />
            <SecondaryButton
              text={hero.secondaryCta.label}
              href={hero.secondaryCta.href}
              height={46}
            />
          </div>
        </div>

        <div className={styles.visual} aria-hidden="true">
          <div className={styles.stage}>
            <div className={styles.ring} />
            <div className={`${styles.ring} ${styles.ringMid}`} />
            <div className={`${styles.ring} ${styles.ringOuter}`} />

            <svg
              className={styles.connectors}
              viewBox={`0 0 ${STAGE_SIZE} ${STAGE_SIZE}`}
              fill="none"
            >
              {visualization.nodes.map((node, index) => {
                const point = pointAt(index, nodeCount, CONNECTOR_RADIUS);

                return (
                  <line
                    key={node.id}
                    x1={STAGE_CENTER}
                    y1={STAGE_CENTER}
                    x2={STAGE_CENTER + point.x}
                    y2={STAGE_CENTER + point.y}
                    style={{ animationDelay: `${index * 0.12}s` }}
                  />
                );
              })}
            </svg>

            <div className={`${styles.node} ${styles.center}`}>
              <span className={styles.coreEyebrow}>Platform</span>
              <span className={styles.nodeLabel}>{visualization.center}</span>
              <span className={styles.coreSub}>Connected systems</span>
            </div>

            {visualization.nodes.map((node, index) => {
              const point = pointAt(index, nodeCount, NODE_RADIUS);

              return (
                <div
                  key={node.id}
                  className={styles.node}
                  style={{
                    top: `${50 + point.y}%`,
                    left: `${50 + point.x}%`,
                    animationDelay: `${index * 0.15}s`,
                  }}
                >
                  <span className={styles.nodeDot} />
                  <span className={styles.nodeLabel}>{node.label}</span>
                </div>
              );
            })}

            <div className={styles.frameTL} />
            <div className={styles.frameBR} />
          </div>
        </div>
      </div>
    </section>
  );
}
