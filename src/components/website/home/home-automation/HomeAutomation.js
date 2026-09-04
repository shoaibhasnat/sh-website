import { HomeData } from "@/data/pages/home/HomeData";
import shared from "../home-shared.module.css";
import styles from "./home-automation.module.css";

const PHASES = [
  {
    id: "intake",
    label: "Capture",
    title: "Intake",
    range: [0, 2],
  },
  {
    id: "revenue",
    label: "Convert",
    title: "Revenue",
    range: [3, 5],
  },
  {
    id: "ops",
    label: "Deliver",
    title: "Operations",
    range: [6, 8],
  },
];

export default function HomeAutomation() {
  const { automation } = HomeData;

  return (
    <section
      className={`${shared.section} ${shared.sectionAlt} ${styles.section}`}
      aria-labelledby="home-automation-heading"
    >
      <div className={styles.bgGlow} aria-hidden="true" />
      <div className={styles.bgGrid} aria-hidden="true" />

      <div className={`${shared.inner} ${styles.inner}`}>
        <div className={styles.layout}>
          <div className={styles.copy}>
            <p className={shared.eyebrow}>{automation.eyebrow}</p>
            <h2 id="home-automation-heading" className={shared.heading}>
              {automation.heading}
            </h2>
            <p className={shared.description}>{automation.description}</p>

            <ul className={styles.outcomes}>
              <li>
                <span className={styles.outcomeMark} aria-hidden="true" />
                Fewer handoffs between people and tools
              </li>
              <li>
                <span className={styles.outcomeMark} aria-hidden="true" />
                Cleaner data moving through every stage
              </li>
              <li>
                <span className={styles.outcomeMark} aria-hidden="true" />
                Faster follow-through from lead to delivery
              </li>
            </ul>
          </div>

          <div className={styles.board} aria-label="Connected automation workflow">
            <div className={styles.boardHeader}>
              <span className={styles.boardEyebrow}>Live workflow</span>
              <span className={styles.boardStatus}>
                <span className={styles.statusDot} aria-hidden="true" />
                Automated
              </span>
            </div>

            <div className={styles.phases}>
              {PHASES.map((phase, phaseIndex) => {
                const steps = automation.steps.slice(
                  phase.range[0],
                  phase.range[1] + 1,
                );

                return (
                  <div key={phase.id} className={styles.phase}>
                    <div className={styles.phaseHeader}>
                      <span className={styles.phaseLabel}>{phase.label}</span>
                      <h3 className={styles.phaseTitle}>{phase.title}</h3>
                    </div>

                    <ol className={styles.stepList}>
                      {steps.map((step, stepIndex) => {
                        const absoluteIndex = phase.range[0] + stepIndex;
                        const isLast =
                          phaseIndex === PHASES.length - 1 &&
                          stepIndex === steps.length - 1;

                        return (
                          <li
                            key={step}
                            className={styles.step}
                            style={{
                              animationDelay: `${absoluteIndex * 0.07}s`,
                            }}
                          >
                            <span className={styles.node} aria-hidden="true">
                              <span className={styles.nodeCore} />
                            </span>
                            <div className={styles.stepCard}>
                              <span className={styles.stepIndex}>
                                {String(absoluteIndex + 1).padStart(2, "0")}
                              </span>
                              <span className={styles.stepLabel}>{step}</span>
                            </div>
                            {!isLast ? (
                              <span className={styles.connector} aria-hidden="true" />
                            ) : null}
                          </li>
                        );
                      })}
                    </ol>

                    {phaseIndex < PHASES.length - 1 ? (
                      <div className={styles.phaseBridge} aria-hidden="true">
                        <span className={styles.bridgeLine} />
                        <span className={styles.bridgeLabel}>sync</span>
                        <span className={styles.bridgeLine} />
                      </div>
                    ) : null}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
