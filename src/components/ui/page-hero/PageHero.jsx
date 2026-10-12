// PageHero.js
// - Renders a hero section for a page with optional:
//    - Chip label
//    - Main title (supports custom HTML tag via titleTag)
//    - Highlighted text with gradient (optional)
//    - Description (with optional animation via GradientRevealAnimation)
//    - Call-to-action button
//    - Banner image
// - Props:
//    - chipLabel: string, small label above title
//    - title: string or React node, main heading
//    - titleTag: string, HTML tag for the title (default "h3")
//    - animated: boolean, whether to animate title/highlight/description
//    - description: string, supporting text
//    - buttonLabel: string, label for CTA button
//    - buttonWidth: string, width of button
//    - buttonOnclick: function, click handler for button
//    - highlight: string, optional highlighted text
//    - bannerImage: string, optional image URL to display on the right
//    - className / style / maxWidth: for custom styling
// - Layout:
//    - Uses MUI Grid for responsive layout (column-reverse on mobile)
//    - Left side: text content (chip, title, highlight, description, button)
//    - Right side: banner image if provided
// - Animation:
//    - Title and description can be animated with AnimatedText / GradientRevealAnimation
//    - Optional gsap animation via animateHero(bgRef)

import styles from "./page-hero.module.css";
import { Container, Grid } from "@mui/material";
import AnimatedText from "../animated-text/AnimatedText";
import GradientRevealAnimation from "../gradient-reveal-animation/GradientRevealAnimation";
import Button from "../button/Button";
import Chip from "../chip/Chip";
import GradientText from "../gradient-text/GradientText";

export default function PageHero({
  chipLabel = "",
  title = "",
  titleTag = "h3",
  animated = true,
  description = "",
  buttonLabel = "",
  buttonWidth = "350px",
  buttonOnclick = () => {},
  className = "",
  style = {},
  btnVariant = "default",
  highlight = "",
  maxWidth = "700px",
  bannerImage = "",
  extraBtn = null, // ✅ add this
}) {
  const TitleTag = titleTag;
  const Title = (
    <TitleTag className={styles.contentText} style={{ maxWidth }}>
      {title && <span>{title}</span>}
    </TitleTag>
  );

  const Highlight = highlight ? (
    <GradientText className={styles.highlight} style={{ maxWidth }} as="h3">
      {highlight}
    </GradientText>
  ) : null;

  const Description = (
    <p className={styles.contentDescription} style={{ maxWidth }}>
      {description}
    </p>
  );
  return (
    <>
      <Container maxWidth="xl">
        <section className={`bgGlassWGlow ${styles.hero}`}>
          <Grid
            container
            spacing={{ xs: 2, sm: 5, lg: 2 }}
            width="100%"
            justifyContent="space-between"
            direction={{ xs: "column-reverse", md: "row" }} // ✅ column-reverse on mobile
          >
            <Grid
              size={{ xs: 12, md: 6, lg: 5 }}
              sx={{ display: "flex", alignItems: "center" }}
            >
              <div className={styles.section1}>
                <div className={`${styles.content} ${className}`} style={style}>
                  {chipLabel && <Chip>{chipLabel}</Chip>}

                  <div>
                    {animated ? <AnimatedText>{Title}</AnimatedText> : Title}
                    {animated && highlight && Highlight}
                  </div>

                  {description &&
                    (animated ? (
                      <GradientRevealAnimation>
                        <div>
                          <p className={`description ${""}`}>{description}</p>
                        </div>
                      </GradientRevealAnimation>
                    ) : (
                      Description
                    ))}

                  {buttonLabel && (
                    <Button
                      width={buttonWidth}
                      onClick={buttonOnclick}
                      ariaLabel={buttonLabel}
                      variant={btnVariant}
                      className={styles.heroBtn}
                    >
                      {buttonLabel}
                    </Button>
                  )}
                  {extraBtn}
                </div>
              </div>
            </Grid>

            <Grid size={{ xs: 12, md: 6, lg: 7 }}>
              {bannerImage && (
                <div className={styles.bannerImageWrapper}>
                  <img
                    src={bannerImage}
                    alt="Banner Image"
                    width={900}
                    height={620}
                    loading="eager"
                    fetchPriority="high"
                    decoding="async"
                    className={styles.bannerImage}
                  />
                </div>
              )}
            </Grid>
          </Grid>
        </section>
      </Container>
    </>
  );
}
