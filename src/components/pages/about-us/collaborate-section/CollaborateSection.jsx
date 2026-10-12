import styles from "./collaborate-section.module.css";
import { Container } from "@mui/material";
import Button from "../../../ui/button/Button";
import { Phone, PhoneOutgoing, Upload } from "lucide-react";
import GradientScrollAnimation from "../../../ui/gradient-scroll-animation/GradientScrollAnimation";
import { AboutUsData } from "../../../../data/pages/about-us/AboutUsData";
import { Constants } from "../../../../utils/global/Constants";

const CollaborateSection = () => {
  // Data absence checks
  if (!AboutUsData?.collaborateSection) {
    return null;
  }

  const { title, description, btnText } = AboutUsData.collaborateSection;

  // Check for required fields
  if (!title) {
    return null;
  }
  return (
    <Container maxWidth="xl">
      <div className={`${styles.container} bgGlassWGlow`}>
        <div className={styles.header}>
          <Phone size={36} color="#002549" strokeWidth={3} />
          <GradientScrollAnimation>
            <h3>{title}</h3>
          </GradientScrollAnimation>
        </div>
        <GradientScrollAnimation>
          <p className={`${styles.description} description`}>{description}</p>
        </GradientScrollAnimation>
        <p className={styles.btn}>
          <Button
            
            onClick={()=>window.open(Constants?.socials?.whatsapp, "_blank")}
            ariaLabel="Talk to a Specialist"
          >
            {btnText}
            <PhoneOutgoing />
          </Button>
        </p>
      </div>
    </Container>
  );
};

export default CollaborateSection;
