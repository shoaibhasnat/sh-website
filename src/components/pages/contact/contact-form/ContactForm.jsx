// ContactForm.jsx
import { Container, Grid } from "@mui/material";
import styles from "./contact-form.module.css";
import ContactFormLeft from "./components/ContactFormLeft";
import ContactFormRight from "./components/ContactFormRight";
import { useContactFormData } from "./utils/useContactFormData";
import { useContactFormLogic } from "./utils/useContactFormLogic";

export default function ContactForm() {
  const { intro, interests, contactInfo, shouldRender } = useContactFormData();

  if (!shouldRender) return null;

  const logic = useContactFormLogic(interests);

  return (
    <Container maxWidth="lg">
      <div className={`${styles.background} bgGlassWGlow`}>
        <Grid
          container
          spacing={2}
          justifyContent={{ sm: "space-between", md: "space-around" }}
        >
          {/* LEFT */}
          <Grid item sm={12} md={6}>
            <ContactFormLeft intro={intro} contactInfo={contactInfo} />
          </Grid>

          {/* RIGHT */}
          <Grid
            item
            sm={12}
            md={6}
            display="flex"
            alignItems="center"
            justifyContent="end"
          >
            <ContactFormRight
              interests={interests}
              selectedInterest={logic.selectedInterest}
              setSelectedInterest={logic.setSelectedInterest}
              formData={logic.formData}
              errors={logic.errors}
              handleInputChange={logic.handleInputChange}
              captchaKey={logic.captchaKey}
              setCaptchaToken={logic.setCaptchaToken}
              loading={logic.loading}
              emailFocused={logic.emailFocused}
              setEmailFocused={logic.setEmailFocused}
              handleSubmit={logic.handleSubmit}
            />
          </Grid>
        </Grid>
      </div>
    </Container>
  );
}
