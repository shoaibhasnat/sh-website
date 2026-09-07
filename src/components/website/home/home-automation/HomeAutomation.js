import { HomeData } from "@/data/pages/home/HomeData";
import shared from "../home-shared.module.css";
import styles from "./home-automation.module.css";

export default function HomeAutomation() {
  const { automation } = HomeData;
  const steps = automation.steps;

  // Serpentine visual order: row1 L→R, row2 R→L, row3 L→R
  const rows = [
    { items: [0, 1, 2], direction: "forward" },
    { items: [5, 4, 3], direction: "reverse" },
    { items: [6, 7, 8], direction: "forward" },
  ];

  return (
    <section
      className={`${shared.section} ${shared.sectionLight} ${styles.section}`}
      aria-labelledby="home-automation-heading"
    >
      <div className={styles.bgGlow} aria-hidden="true" />

      <div className={`${shared.inner} ${styles.inner}`}>
        <div className={`${shared.header} ${shared.headerCenter} ${styles.header}`}>
          <p className={shared.eyebrow}>{automation.eyebrow}</p>
          <h2 id="home-automation-heading" className={shared.heading}>
            {automation.heading}
          </h2>
          <p className={shared.description}>{automation.description}</p>
        </div>

        <div className={styles.canvas} aria-label="Connected automation workflow">
          <div className={styles.canvasTop}>
            <div className={styles.brandChip}>
              <span className={styles.brandDot} aria-hidden="true" />
              System Heuristics Pipeline
            </div>
            <p className={styles.canvasHint}>
              Business systems connected end to end
            </p>
          </div>

          <div className={styles.pipeline}>
            {rows.map((row, rowIndex) => (
              <div key={`row-${rowIndex}`} className={styles.rowBlock}>
                <ol
                  className={`${styles.row} ${
                    row.direction === "reverse" ? styles.rowReverse : ""
                  }`}
                >
                  {row.items.map((stepIndex, i) => {
                    const step = steps[stepIndex];
                    const isLastInRow = i === row.items.length - 1;

                    return (
                      <li
                        key={step}
                        className={styles.step}
                        style={{ animationDelay: `${stepIndex * 0.06}s` }}
                      >
                        <div className={styles.stepInner}>
                          <span className={styles.stepIndex} aria-hidden="true">
                            {String(stepIndex + 1).padStart(2, "0")}
                          </span>
                          <span className={styles.stepLabel}>{step}</span>
                        </div>

                        {!isLastInRow ? (
                          <span
                            className={`${styles.hLink} ${
                              row.direction === "reverse" ? styles.hLinkReverse : ""
                            }`}
                            aria-hidden="true"
                          >
                            <span className={styles.hLine} />
                            <span className={styles.hArrow} />
                          </span>
                        ) : null}
                      </li>
                    );
                  })}
                </ol>

                {rowIndex < rows.length - 1 ? (
                  <div
                    className={`${styles.vLink} ${
                      row.direction === "forward"
                        ? styles.vLinkEnd
                        : styles.vLinkStart
                    }`}
                    aria-hidden="true"
                  >
                    <span className={styles.vLine} />
                    <span className={styles.vArrow} />
                  </div>
                ) : null}
              </div>
            ))}
          </div>

          <div className={styles.canvasFooter}>
            <span>Lead in</span>
            <span className={styles.footerSep} aria-hidden="true" />
            <span>Systems connected</span>
            <span className={styles.footerSep} aria-hidden="true" />
            <span>Growth out</span>
          </div>
        </div>

        <ul className={styles.outcomes}>
          <li>
            <strong>Fewer handoffs</strong>
            <span>People stop acting as the glue between tools</span>
          </li>
          <li>
            <strong>Cleaner data</strong>
            <span>Information stays consistent across every stage</span>
          </li>
          <li>
            <strong>Faster follow-through</strong>
            <span>Work moves from lead to delivery without stalls</span>
          </li>
        </ul>
      </div>
    </section>
  );
}
