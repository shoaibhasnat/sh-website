import { useRef } from "react";
import GradientScrollAnimation from "../../../../ui/gradient-scroll-animation/GradientScrollAnimation";
import { Container, Grid } from "@mui/material";
import { CircleCheck } from "lucide-react";
import styles from "./intro-section.module.css";
import GradientText from "../../../../ui/gradient-text/GradientText";

const Clients = ({ clientDetail }) => (
  <div className={styles.clientSection}>
    <div className={styles.clientGrid}>
      <div className={styles.clientDetails}>
        {/* <GradientScrollAnimation> */}
        <GradientText>
          <h3 className={styles.clientHeading}>Our Client</h3>
        </GradientText>
        {/* </GradientScrollAnimation> */}

        {window.innerWidth < 768 ? (
          <h4 className={styles.clientName}>{clientDetail.clientName}</h4>
        ) : (
          <h4 className={styles.clientName}>{clientDetail.clientName}</h4>
        )}
        <p className={`description ${styles.companyName}`}>
          <strong>Company :</strong> {clientDetail.companyName}
        </p>
        <p className={`description ${styles.clientIndustry}`}>
          <strong>Industry :</strong> {clientDetail.clientIndustry}
        </p>
      </div>

      <div className={styles.clientServices}>
        <p className={styles.servicesHeading}>Services Offering</p>

        <div className={styles.servicesList}>
          {clientDetail.clientServices.map((service, idx) => (
            <div key={idx} className={styles.serviceItem}>
              <CircleCheck className={styles.serviceIcon} />
              <span className="description">{service}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);
const IntroSection = ({ project }) => {
  // Data absence checks
  if (!project || !project.introSection || !project.introSection.summary || !project.introSection.clientDetail) {
    return null;
  }

  const { summary, clientDetail } = project.introSection;
  const boxRef = useRef(null);

  return (
    <Container maxWidth="xl" sx={{ display: "flex", justifyContent: "center" }}>
      <div ref={boxRef} className={`${styles.wrapper} bgGlassWGlow`}>
        <Grid container spacing={{ xs: 2, lg: 5 }}>
          <Grid size={{ xs: 12, md: 5 }}>
            <Clients clientDetail={clientDetail} />
          </Grid>

          <Grid size={{ xs: 12, md: 7 }}>
            <div className={styles.header}>
              <GradientScrollAnimation>
                {window.innerWidth < 768 ? (
                  <h4 className={styles.title}>{summary.title}</h4>
                ) : (
                  <h4 className={styles.title}>{summary.title}</h4>
                )}
                <p className={styles.highlight}>{summary.highlight}</p>
              </GradientScrollAnimation>

              <p className={`description ${styles.description}`}>
                {summary.description}
              </p>
            </div>

            <div className={`${styles.problemSection} bgGlassWGlow`}>
              <GradientScrollAnimation>
                <h4 className={styles.problemHeading}>Problem Statement</h4>
              </GradientScrollAnimation>

              <div className={styles.problemList}>
                {clientDetail.problemStatement.map((problem, idx) => (
                  <div key={idx} className={styles.problemItem}>
                    <CircleCheck className={styles.problemIcon} />
                    <span className="description">{problem}</span>
                  </div>
                ))}
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
};

export default IntroSection;
