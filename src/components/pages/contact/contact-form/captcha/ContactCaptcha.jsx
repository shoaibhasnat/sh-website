import { CheckCircle, Loader2 } from "lucide-react"; // For success & loading icons
import { useState } from "react";
import { Turnstile } from "@marsidev/react-turnstile";
import styles from "./contact-captcha.module.css";
import LazyImage from "../../../../ui/lazy-image/LazyImage";

export default function ContactCaptcha({ onSuccess }) {
  const [captchaToken, setCaptchaToken] = useState(null);
  const [loading, setLoading] = useState(true);

  // Called when Turnstile is solved
  const handleCaptchaSuccess = (token) => {
    setCaptchaToken(token);
    setLoading(false);
    onSuccess(token); // Notify parent
  };

  return (
    <div className={styles.container}>
      <div className={`${styles.turnstile} `} style={{ zIndex: 1 }}>
        <div>
          {loading ? (
            <span className={styles.statusContent}>
              <Loader2 className={styles.spin} size={32} color="green" />
              <span>Verifying</span>
            </span>
          ) : captchaToken ? (
            <span className={styles.statusContent}>
              <CheckCircle size={32} color="green" />
              <span>Success</span>
            </span>
          ) : null}
        </div>
        <LazyImage
          className={styles.logo}
          alt="Cloudflare"
          src={"/images/pages/home/contact-form/cloudflare-logo.png"}
          width={140}
          height={33}
        />
      </div>

      <div className={styles.turnstileWrapper}>
        <div style={{ position: "absolute" }}>
          <Turnstile
            siteKey={import.meta.env.VITE_TURNSTILE_SITE_KEY}
            onSuccess={(token) => handleCaptchaSuccess(token)}
            size="compact"
            theme="light"
          />
        </div>
      </div>
    </div>
  );
}
