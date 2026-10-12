import { PortfolioData } from "../../../../data/pages/portfolio/PortfolioData";
import PageHero from "../../../ui/page-hero/PageHero";

const Hero = ({ private: isPrivate = false }) => {
  // Data absence checks
  if (!PortfolioData?.hero) {
    return null;
  }

  const { title, description, bannerImage } = PortfolioData.hero;

  // Check for required fields
  if (!title || !bannerImage) {
    return null;
  }

  return (
    <PageHero
      title={isPrivate ? "Private Portfolio" : title}
      bannerImage={bannerImage}
      description={
        isPrivate
          ? "A curated private collection of selected project case studies for internal review and client-specific sharing."
          : description
      }
      titleTag="h1"
    />
  );
};

export default Hero;
