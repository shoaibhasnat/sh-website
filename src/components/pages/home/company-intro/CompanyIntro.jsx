// CompanyIntro component: displays the company logo, highlight text, tagline, and description on the Home page

import GradientText from "../../../ui/gradient-text/GradientText";
import styles from "./company-intro.module.css";
import GradientScrollAnimation from "../../../ui/gradient-scroll-animation/GradientScrollAnimation";
import { HomeData } from "../../../../data/pages/home/HomePageData";
import { Container } from "@mui/material";
import LazyImage from "../../../ui/lazy-image/LazyImage";
const CompanyIntro = () => {
  const data = HomeData?.companyIntro || {};

  if (!HomeData?.companyIntro) return;
  return (
    <Container maxWidth="xl">
      <div className={styles.container}>
        <h3 className={styles.header}>
          <LazyImage
            src={data?.logo}
            alt="System Heuristics logo"
            width={100}
            height={100}
            className={styles.logo}
          />
          <GradientText>{data?.highlightText}</GradientText>
          <span style={{ display: "block" }}>{data?.tagline}</span>
        </h3>
        <GradientScrollAnimation>
          <p className={`description ${styles.animatedText}`}>
            {data?.description}
          </p>
        </GradientScrollAnimation>
      </div>
    </Container>
  );
};

export default CompanyIntro;
