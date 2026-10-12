import styles from "./consultation-section.module.css";
import GradientScrollAnimation from "../../../ui/gradient-scroll-animation/GradientScrollAnimation";
import { Mail, MapPin, Phone } from "lucide-react";
import { Container } from "@mui/material";
import { ContactPageData } from "../../../../data/pages/contact/ContactPageData";
import LazyImage from "../../../ui/lazy-image/LazyImage";




const ConsultationSection = () => {
  // Additional validation for contacts
  // Data absence checks
const { title, description, contacts } = ContactPageData.consultationSection;
if (!ContactPageData?.consultationSection || !ContactPageData.consultationSection.title) {
  return 
}
  if (!contacts || !contacts.phone || !contacts.email || !contacts.address) {
    return null;
  }
  return (
    <Container maxWidth="xl">
      <div className={styles.container}>
        <div className={styles.header}>
          <LazyImage src="/logo.svg" alt="System Heuristics logo" width={100} height={100} className={styles.logo} />
          <GradientScrollAnimation>
            <h3>{title}</h3>
          </GradientScrollAnimation>
        </div>

        <GradientScrollAnimation>
          <p className={`${styles.description} description`}>{description}</p>
        </GradientScrollAnimation>

        <div className={styles.contacts}>
          <div className={styles.contactItem}>
            <Phone className={styles.icon} />
            <span className={`description`}>{contacts.phone}</span>
          </div>

          <div className={styles.contactItem}>
            <Mail className={styles.icon} />
            <span className={`description`}>{contacts.email}</span>
          </div>

          <div className={styles.contactItem}>
            <MapPin className={styles.icon} />
            <span className={`description`}>{contacts.address}</span>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ConsultationSection;
