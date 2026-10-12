import PageHero from "../../../../ui/page-hero/PageHero";
import GradientText from "../../../../ui/gradient-text/GradientText";

const Hero = ({ industry }) => {
  const hero = industry?.hero ?? {};

  const {
    title = "",
    description = "",
    bannerImage = "",
  } = hero;

  // If nothing meaningful exists, don’t render
  if (!title && !description && !bannerImage) {
    return null;
  }

  return (
    <PageHero
      title={title}
      description={description}
      bannerImage={bannerImage}
      titleTag={window.innerWidth < 576 ? "h3" : "h2"}
    />
  );
};

export default Hero;
