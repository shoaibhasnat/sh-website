import { HomeData } from "../../../../../data/pages/home/HomePageData";
import SectionIntro from "../../../../ui/section-intro/SectionIntro";

const IntroSection = () => {
  const intro = HomeData?.portfolioSection?.intro;

  // If intro data is missing, render nothing safely
  if (!intro) return null;

  return (
    <div>
      <SectionIntro
        chipLabel={intro?.chipLabel}
        title={intro?.title}
        description={intro?.description}
        titleTag="h1"
      />
    </div>
  );
};

export default IntroSection;
