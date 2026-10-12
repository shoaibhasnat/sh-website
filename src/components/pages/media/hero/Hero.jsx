import PageHero from "../../../ui/page-hero/PageHero";
import { MediaData } from "../../../../data/pages/media/MediaData";

const Hero = () => {
  const { title, description, bannerImage } = MediaData.hero || {};

  if (!title) return null;

  return (
    <PageHero
      chipLabel="Media Hub"
      title={title}
      description={description}
      bannerImage={bannerImage}
      titleTag="h1"
    />
  );
};

export default Hero;
