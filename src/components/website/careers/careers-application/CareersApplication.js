import { CareersData } from "@/data/pages/careers/CareersData";
import shared from "../careers-shared.module.css";
import CareersApplicationForm from "./CareersApplicationForm";
import styles from "./careers-application.module.css";

export default function CareersApplication() {
  const { application } = CareersData;

  return (
    <section
      id={application.id}
      className={`${shared.section} ${shared.sectionLight}`}
      aria-labelledby="careers-application-heading"
    >
      <div className={shared.inner}>
        <div className={styles.grid}>
          <div className={styles.info}>
            <p className={shared.eyebrow}>{application.eyebrow}</p>
            <h2 id="careers-application-heading" className={shared.heading}>
              {application.heading}
            </h2>
            <p className={shared.description}>{application.description}</p>
          </div>

          <div className={styles.formPanel}>
            <CareersApplicationForm />
          </div>
        </div>
      </div>
    </section>
  );
}
