import React from "react";
import PageHero from "../../../ui/page-hero/PageHero";
import { IndustriesData } from "../../../../data/pages/industries/IndustriesData";

const Hero = () => {
  const hero = IndustriesData?.hero ?? {};

  const {
    title = "",
    description = "",
    bannerImage = "",
    btnLabel = "",
  } = hero;

  const scrollToServices = () => {
    const element = document.getElementById(
      "industries-page-industry-section"
    );
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // If nothing meaningful exists, don’t render
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
      titleTag={window.innerWidth < 576 ? "h3" : "h2"}
    />
  );
};

export default Hero;
