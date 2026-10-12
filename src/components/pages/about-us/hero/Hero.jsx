import PageHero from "../../../ui/page-hero/PageHero";
import { AboutUsData } from "../../../../data/pages/about-us/AboutUsData";
import { Constants } from "../../../../utils/global/Constants";

const Hero = () => {
  // Data absence checks
  if (!AboutUsData?.hero) {
    return null;
  }

  const { title, description, buttonLabel, bannerImage } = AboutUsData.hero;

  // Check for required fields
  if (!title || !bannerImage) {
    return null;
  }
  return (
    <PageHero
      title={title}
      description={description}
      buttonLabel={buttonLabel}
      bannerImage={bannerImage}
      buttonOnclick={() => window.open(Constants?.socials?.whatsapp, "_blank")}
      titleTag="h1"
      buttonWidth="300px"
    />
  );
};

export default Hero;
