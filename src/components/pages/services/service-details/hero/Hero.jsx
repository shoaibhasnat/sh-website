import PageHero from "../../../../ui/page-hero/PageHero";

const Hero = ({ service }) => {
  const hero = service?.hero ?? {};

  const { title = "", bannerImage = "", description = "" } = hero;

  // SSR-safe screen size check
  const titleTag =
    "h1";

  // If nothing meaningful to render, skip
  if (!title && !description && !bannerImage) {
    return null;
  }

  return (
    <PageHero
      title={title}
      bannerImage={bannerImage}
      description={description}
      titleTag={titleTag}
    />
  );
};

export default Hero;
