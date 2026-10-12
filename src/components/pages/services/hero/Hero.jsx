import PageHero from "../../../ui/page-hero/PageHero";
import { ServicesPageData } from "../../../../data/pages/services/ServicesPageData";

const Hero = () => {
  const hero = ServicesPageData?.hero ?? {};

  const {
    title = "",
    description = "",
    bannerImage = "",
    btnLabel = "",
  } = hero;

  const scrollToServices = () => {
    const element = document.getElementById("service-page-srv-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Optional: don't render if critical data missing
  if (!title && !description && !bannerImage) {
    return null;
  }

  return (
    <PageHero
      title={title}
      description={description}
      bannerImage={bannerImage}
      buttonLabel={btnLabel}
      buttonOnclick={btnLabel ? scrollToServices : undefined}
      titleTag="h2"
    />
  );
};

export default Hero;
