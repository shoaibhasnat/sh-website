import { ContactPageData } from "../../../../data/pages/contact/ContactPageData";
import PageHero from "../../../ui/page-hero/PageHero";
const Hero = () => {
  // Data absence checks
  if (!ContactPageData?.hero) {
    return null;
  }

  const { title, description, bannerImage } = ContactPageData.hero;

  // Check for required fields
  if (!title || !bannerImage) {
    return null;
  }
  return (
    <PageHero
      title={title}
      description={description}
      bannerImage={bannerImage}
      
      titleTag="h4"
    />
  );
};

export default Hero;
