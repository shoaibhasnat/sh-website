import { useLayoutEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import styles from "./footer.module.css";
import { animateFooter } from "./FooterUtils";
import { Container } from "@mui/material";
import { FooterData } from "../../../data/components/footer/FooterData";
import { Constants } from "../../../utils/global/Constants";
import LazyImage from "../lazy-image/LazyImage";
import AppLink from "../app-link/AppLink";
import { sendNewsletterSubscription } from "../../../utils/email/emailjs";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function Footer() {
  const linksRef = useRef([]);
  const socialsRef = useRef([]);
  const bottomLinksRef = useRef([]);
  const tagLineRef = useRef(null);

  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterLoading, setNewsletterLoading] = useState(false);

  const {
    tagline = "",
    usefulLinks = [],
    servicesLinks = [],
    contactLinks = [],
    socialLinks = [],
    bottomLinks = [],
  } = FooterData || {};

  useLayoutEffect(() => {
    animateFooter({ linksRef, socialsRef, tagLineRef, bottomLinksRef });
  }, []);

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();

    const email = newsletterEmail.trim();

    if (!email) {
      toast.error("Please enter your email.");
      return;
    }

    if (!EMAIL_REGEX.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    try {
      setNewsletterLoading(true);
      await sendNewsletterSubscription(email);
      toast.success("Subscribed successfully!");
      setNewsletterEmail("");
    } catch (error) {
      toast.error("Subscription failed. Please try again.");
    } finally {
      setNewsletterLoading(false);
    }
  };

  return (
    <Container maxWidth="xl">
      <div className={`${styles.container} bgGlassWGlow`}>
        <div className={styles.top}>
          <div className={styles.left}>
            <div className={styles.logoGroup}>
              <AppLink href="/" className={styles.logo}>
                <LazyImage src="/logo.svg" alt="System Heuristics logo" width={36} height={36} />
                {Constants?.company?.name}
              </AppLink>
            </div>

            <p className={styles.tagline} ref={tagLineRef}>
              {tagline || ""}
            </p>

            <form className={styles.newsletter} onSubmit={handleNewsletterSubmit}>
              <div className={styles.newsletterHeader}>
                <h3 className={styles.title}>Newsletter</h3>
                <p className={styles.newsletterText}>
                  Subscribe for product updates, AI insights, and company news.
                </p>
              </div>

              <div className={styles.newsletterForm}>
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter your email"
                  className={styles.newsletterInput}
                  aria-label="Newsletter email"
                />
                <button
                  type="submit"
                  className={styles.newsletterBtn}
                  disabled={newsletterLoading}
                >
                  {newsletterLoading ? "Submitting..." : "Subscribe"}
                </button>
              </div>
            </form>

            <div className={styles.socials}>
              {socialLinks?.map(({ Icon, href }, idx) => (
                <a
                  key={idx}
                  href={href}
                  className={styles.social}
                  target="_blank"
                  rel="noopener noreferrer"
                  ref={(el) => (socialsRef.current[idx] = el)}
                  aria-label={`Visit us on ${Icon?.displayName || "social media"}`}
                >
                  {Icon && <Icon className={styles.icon} />}
                </a>
              ))}
            </div>
          </div>

          <div className={styles.links}>
            <div
              className={styles.linksCol}
              ref={(el) => (linksRef.current[0] = el)}
            >
              <h3 className={styles.title}>Useful Links</h3>
              <ul className={styles.list}>
                {usefulLinks?.map((link, idx) => (
                  <li key={idx}>
                    <AppLink href={link?.href}>{link?.name}</AppLink>
                  </li>
                ))}
              </ul>
            </div>

            <div
              className={styles.linksCol}
              ref={(el) => (linksRef.current[1] = el)}
            >
              <h3 className={styles.title}>Our Services</h3>
              <ul className={styles.list}>
                {servicesLinks.map((link, idx) => (
                  <li key={idx}>
                    <AppLink href={link?.href}>{link?.name}</AppLink>
                  </li>
                ))}
              </ul>
            </div>

            <div
              className={styles.linksCol}
              ref={(el) => (linksRef.current[2] = el)}
            >
              <h3 className={styles.title}>Contact Us</h3>
              <ul className={styles.list}>
                {contactLinks.map(({ icon: Icon, text }, idx) => (
                  <li className={styles.contactItem} key={idx}>
                    {Icon && <Icon className={styles.icon} />}
                    <span style={{ display: "flex", alignItems: "center" }}>
                      {text || ""}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.divider} />

        <div className={styles.bottom}>
          <p className={styles.copy}>
            © {new Date().getFullYear()} {Constants?.company?.name}. All rights
            reserved.
          </p>

          <div className={styles.bottomLinks}>
            {bottomLinks.map(({ name, href }, idx) => (
              <AppLink
                key={idx}
                href={href}
                className={styles.bottomLink}
                ref={(el) => (bottomLinksRef.current[idx] = el)}
              >
                {name}
              </AppLink>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}