// ContactFormLeft.jsx
import { Box, Stack, Typography } from "@mui/material";
import SocialsBtn from "../../../../ui/socials-btn/SocialsBtn";
import { Mail, MapPin, Phone } from "lucide-react";
import styles from "../contact-form.module.css";

const iconMap = {
  email: Mail,
  office: MapPin,
  phone: Phone,
};

export default function ContactFormLeft({ intro, contactInfo }) {
  return (
    <>
      <Box className={styles.leftHeader}>
        {intro?.title ? (
          <h4 className={styles.leftTitle}>{intro.title}</h4>
        ) : null}
      </Box>

      {Array.isArray(contactInfo) && contactInfo.length > 0 ? (
        <Stack spacing={3} className={styles.contactCards}>
          {contactInfo.map((item, index) => {
            if (!item) return null;
            const Icon = iconMap?.[item?.type];

            return (
              <Box key={index} className={styles.card}>
                <Box className={styles.cardIcon}>
                  {Icon ? <Icon size={24} /> : null}
                </Box>

                <Box>
                  {item?.title ? (
                    <Typography className={styles.cardTitle}>
                      {item.title}
                    </Typography>
                  ) : null}

                  {item?.subtitle ? (
                    <Typography className={styles.cardSubtitle}>
                      {item.subtitle}
                    </Typography>
                  ) : null}

                  {item?.value ? (
                    <Typography className={styles.cardLink}>
                      {item.value}
                    </Typography>
                  ) : null}
                </Box>
              </Box>
            );
          })}
        </Stack>
      ) : null}

      <Box className={styles.socialIcons}>
        <SocialsBtn />
      </Box>
    </>
  );
}
