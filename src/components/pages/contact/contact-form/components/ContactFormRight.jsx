// ContactFormRight.jsx
import { Box, TextField, Typography, InputAdornment } from "@mui/material";
import Button from "../../../../ui/button/Button";
import ContactCaptcha from "../captcha/ContactCaptcha";
import styles from "../contact-form.module.css";
import { useState } from "react";
import { useWindowWidth } from "../../../../../hooks/useWindowWidth";

export default function ContactFormRight({
  interests,
  selectedInterest,
  setSelectedInterest,

  formData,
  errors,
  handleInputChange,

  captchaKey,
  setCaptchaToken,

  loading,

  emailFocused,
  setEmailFocused,

  handleSubmit,
}) {
  const windowWidth = useWindowWidth();
  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      className={`${styles.form} bgGlassWOGlow`}
    >
      {/* Interests */}
      {Array.isArray(interests) && interests.length > 0 ? (
        <Box>
          <Typography className={styles.label}>I'm interested in</Typography>
          <Box className={styles.interests}>
            {interests.map((interest) => (
              <p
                key={interest}
                onClick={() => setSelectedInterest(interest)}
                className={`${styles.chip} ${
                  selectedInterest === interest ? styles.active : ""
                }`}
              >
                {interest}
              </p>
            ))}
          </Box>
        </Box>
      ) : null}

      {/* Name */}
      <Box className={styles.field}>
        <Typography
          component="label"
          htmlFor="contact-name"
          className={styles.label}
        >
          Name
        </Typography>
        <TextField
          id="contact-name"
          fullWidth
          name="name"
          placeholder="Enter your name"
          value={formData?.name ?? ""}
          onChange={handleInputChange}
          size="small"
          error={!!errors?.name}
          helperText={errors?.name}
        />
      </Box>

      {/* Email */}
      <Box className={styles.field}>
        <label htmlFor="contact-padding" className={styles.label}>
          <img
            src="/images/pages/sensitive-information/email-label.png"
            alt="Email"
            width={64}
            height={19}
            decoding="async"
          />
        </label>

        <TextField
          id="contact-padding"
          fullWidth
          name="padding"
          value={formData?.padding ?? ""}
          onChange={handleInputChange}
          size="small"
          error={!!errors?.padding}
          helperText={errors?.padding}
          onMouseDownCapture={() => {
            if (!(formData?.padding ?? "")) setEmailFocused(true);
          }}
          onFocus={() => setEmailFocused(true)}
          onBlur={() => setEmailFocused(false)}
          slotProps={{
            input: {
              startAdornment:
                !(formData?.padding ?? "") && !emailFocused ? (
                  <InputAdornment position="start">
                    <img
                      src="/images/pages/sensitive-information/email_field.png"
                      alt=""
                      width={120}
                      height={18}
                      aria-hidden="true"
                      draggable={false}
                      style={{
                        width: 120,
                        height: 18,
                        userSelect: "none",
                        pointerEvents: "none",
                        opacity: 0.85,
                      }}
                    />
                  </InputAdornment>
                ) : null,
            },
            // htmlInput: { autoComplete: "email" },
          }}
        />
      </Box>

      {/* Message */}
      <Box className={styles.field}>
        <Typography
          component="label"
          htmlFor="contact-message"
          className={styles.label}
        >
          Message
        </Typography>
        <TextField
          id="contact-message"
          fullWidth
          name="message"
          placeholder="Enter your message"
          value={formData?.message ?? ""}
          onChange={handleInputChange}
          multiline
          rows={
            typeof window !== "undefined" && windowWidth < 768 ? 3 : 5
          }
          error={!!errors?.message}
          helperText={errors?.message}
        />
      </Box>

      {/* CAPTCHA */}
      <ContactCaptcha key={captchaKey} onSuccess={setCaptchaToken} />

      {/* Submit */}
      <Button
        type="submit"
        className={styles.sendBtn}
        disabled={loading}
        aria-disabled={loading}
      >
        {loading ? "Sending..." : "Send Message"}
      </Button>
    </Box>
  );
}
