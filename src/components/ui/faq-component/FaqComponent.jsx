// FaqComponent.js
// - Renders a FAQ section with a title, description, and a list of FAQ cards.
// - data: an array of FAQ objects

import { Container } from "@mui/material";
import SectionIntro from "../section-intro/SectionIntro";
import FaqSectionCard from "./faq-card/FaqSectionCard";
import styles from "./faq-component.module.css";

const FaqComponent = ({ data }) => {
  // ✅ ensure data is an array
  const faqs = Array.isArray(data) ? data : [];

  // ✅ nothing to render
  if (faqs.length === 0) return null;

  return (
    <Container maxWidth="xl">
      <div className={styles.containerMain}>
        <SectionIntro
          title={
            <>
              GOT QUESTIONS? <br /> WE'VE GOT ANSWERS
            </>
          }
          style={{ margin: "0px" }}
          description="Get instant answers to common questions, access helpful resources, or contact our dedicated support team for guidance. We're committed to helping you succeed."
          titleTag={
            typeof window !== "undefined" && window.innerWidth < 576
              ? "h3"
              : "h1"
          }
          maxWidth="850px"
        />

        <div className={styles.sectionCards}>
          {faqs.map((faq, index) =>
            faq ? <FaqSectionCard faq={faq} key={index} /> : null,
          )}
        </div>
      </div>
    </Container>
  );
};

export default FaqComponent;
