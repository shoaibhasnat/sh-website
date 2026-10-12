import { useLayoutEffect, useRef } from "react";
import { initStatisticsAnimations } from "./StatisticsSectionUtils";
import StatisticsSectionCard from "./statistics-section-card/StatisticsSectionCard";
import SectionIntro from "../../../ui/section-intro/SectionIntro";
import styles from "./statistics-section.module.css";
import { AboutUsData } from "../../../../data/pages/about-us/AboutUsData";

const StatisticsSection = () => {
  const containerRef = useRef(null);
  const cardRefs = useRef([]);

  const intro = AboutUsData?.statisticsSection?.intro;
  const stats = AboutUsData?.statisticsSection?.stats;

  // If stats are missing or not an array, render nothing safely
  if (!Array.isArray(stats) || stats.length === 0) return null;

  const statisticsRows = [];
  for (let i = 0; i < stats.length; i += 2) {
    statisticsRows.push(stats.slice(i, i + 2));
  }

  useLayoutEffect(() => {
    // only init animations when refs can exist
    const cleanup = initStatisticsAnimations?.(containerRef, cardRefs);
    return cleanup;
  }, []);

  return (
    <div ref={containerRef} className={styles.container}>
      {/* Intro (only if data exists) */}
      {intro ? (
        <div className={styles.mainContent}>
          <SectionIntro
            chipLabel={intro?.chipLabel}
            title={intro?.title}
            description={intro?.description}
            titleTag="h2"
            animated={window.innerWidth <= 768}
          />
        </div>
      ) : null}

      <section className={styles.section}>
        {statisticsRows?.map((row, rowIndex) => (
          <div className={styles.row} key={rowIndex}>
            {row?.map((stat, index) => {
              if (!stat) return null;

              return (
                <StatisticsSectionCard
                  key={stat?.id ?? `${rowIndex}-${index}`}
                  statistics={stat}
                  isLeft={index === 0}
                  refProp={(el) =>
                    (cardRefs.current[rowIndex * 2 + index] = el)
                  }
                />
              );
            })}
          </div>
        ))}
      </section>
    </div>
  );
};

export default StatisticsSection;
