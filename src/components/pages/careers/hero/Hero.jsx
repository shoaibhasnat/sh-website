import PageHero from "../../../ui/page-hero/PageHero";
import { CareersData } from "../../../../data/pages/careers/CareersData";

const Hero = () => {
  // Data absence checks
  if (!CareersData?.hero) {
    return null;
  }

  const { title, description, highlight, buttonLabel, bannerImage } =
    CareersData.hero;

  // Check for required fields
  if (!title || !bannerImage) {
    return null;
  }

  const scrollToCategories = () => {
    const element = document.getElementById("careers-categories");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <PageHero
      title={title}
      description={description}
      highlight={highlight}
      buttonLabel={buttonLabel}
      bannerImage={bannerImage}
      buttonOnclick={scrollToCategories} // <-- smooth scroll handler
      titleTag="h2"
      buttonWidth="300px"
    />
  );
};

export default Hero;
