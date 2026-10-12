// SectionIntro.js
// - Renders an introductory section for a page or component, typically used at the top of a section.
// - Supports optional:
//    - Chip label (small badge above title)
//    - Title with customizable HTML tag (titleTag)
//    - Highlighted text with gradient (highlight, highlightTag)
//    - Description text
//    - Button (buttonLabel, width, click handler can be added)
// - Props:
//    - chipLabel: string, optional badge above title
//    - title: string or React node, main heading
//    - titleTag: string, HTML tag for the title (default "h3")
//    - animated: boolean, whether to animate title, highlight, and description
//    - description: string, supporting text
//    - buttonLabel: string, optional call-to-action button label
//    - className / style / maxWidth: optional styling
//    - highlight: string, optional highlighted text
//    - highlightTag: HTML tag for highlighted text (default "h6")
// - Layout:
//    - Uses MUI Container for responsive width
//    - Content is wrapped in a div with optional className/style
//    - Title, highlight, description, and button are stacked vertically
// - Animation:
//    - AnimatedText (GradientScrollAnimation) wraps title, highlight, and description if animated=true
// 
import styles from "./section-intro.module.css";
import Chip from "../chip/Chip";
import GradientScrollAnimation from "../gradient-scroll-animation/GradientScrollAnimation";
import Button from "../button/Button";
import GradientText from "../gradient-text/GradientText";
import { Container } from "@mui/material";

const SectionIntro = ({
  chipLabel = "",
  title = "",
  titleTag = "h3",
  animated = true,
  description = "",
  buttonLabel = "",
  className = "",
  chipStyle={},
  style = {},
  highlight = "",
  highlightTag = "h6",
  btnHref = "",
  maxWidth = "700px",
}) => {
  const TitleTag = titleTag;
  const Title = (
    <TitleTag className={styles.contentText} style={{ maxWidth }}>
      {title && <span>{title}</span>}
    </TitleTag>
  );

  const Highlight = highlight ? (
    <GradientText
      className={styles.highlight}
      style={{  maxWidth }}
      as={highlightTag}
    >
      {highlight}
    </GradientText>
  ) : null;

  const Description = (
    <p
      className={`description ${styles.contentDescription}`}
      style={{ maxWidth }}
    >
      {description}
    </p>
  );

  return (
    <Container maxWidth="xl">
      <div className={`${styles.content} ${className}`} style={style}>
        {chipLabel && <Chip style={chipStyle}>{chipLabel}</Chip>}

        {animated ? <GradientScrollAnimation>{Title}</GradientScrollAnimation> : Title}

        {animated && highlight && Highlight}

        {description &&
          (animated ? (
            <GradientScrollAnimation>{Description}</GradientScrollAnimation>
          ) : (
            Description
          ))}

        {buttonLabel && (
          <Button width="300px" href={btnHref} label={buttonLabel} ariaLabel={buttonLabel}>
            {buttonLabel}
          </Button>
        )}
      </div>
    </Container>
  );
};

export default SectionIntro;
