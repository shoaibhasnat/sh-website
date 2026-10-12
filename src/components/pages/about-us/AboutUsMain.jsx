// Provides an array of sections for the About Us page.
// Pinned sections stay eager here because they appear close together and define
// the long scroll rhythm. Simple bottom sections are lazy-loaded safely.

import { useEffect } from "react";
import PageSectionsWrapper from "../../ui/page-sections-wrapper/PageSectionsWrapper";
import createLazyPageSection from "../../ui/lazy-section/createLazyPageSection";
import { scheduleScrollTriggerRefresh } from "../../../utils/gsap/scrollTriggerRefresh";

import Hero from "./hero/Hero";
import WhoWeAreSection from "./who-we-are-section/WhoWeAreSection";
import PrinciplesSection from "./principles-section/PrinciplesSection";
import OurTeamSection from "./our-team-section/OurTeamSection";
import WhyChooseUsSection from "./why-choose-us-section/WhyChooseUsSection";
import ExpertiseSection from "./expertise-section/ExpertiseSection";
import TestimonialsSection from "../home/testimonials-section/TestimonialsSection";
import StatisticsSection from "./statistics-section/StatisticsSection";

const sections = [
  { component: Hero, scroll: false },
  { component: WhoWeAreSection, scroll: true },
  { component: PrinciplesSection, scroll: true },
  { component: OurTeamSection, scroll: true },
  { component: WhyChooseUsSection, scroll: true },
  { component: ExpertiseSection, scroll: true },
  { component: StatisticsSection, scroll: true },
  { component: TestimonialsSection, scroll: true },
  {
    loader: () => import("./faq-section/FaqSection"),
    name: "LazyFaqSection",
    scroll: true,
    reserveHeight: 560,
    rootMargin: "1600px",
  },
  {
    loader: () => import("./collaborate-section/CollaborateSection"),
    name: "LazyCollaborateSection",
    scroll: true,
    reserveHeight: 520,
    rootMargin: "1600px",
  },
].map((section) => {
  if (section.component) return section;

  return {
    component: createLazyPageSection(section),
    scroll: section.scroll,
  };
});

const AboutUsMain = () => {
  useEffect(() => {
    scheduleScrollTriggerRefresh({ delay: 250 });
    window.setTimeout(() => scheduleScrollTriggerRefresh({ delay: 0 }), 900);
  }, []);

  return <PageSectionsWrapper sections={sections} parent="about" />;
};

export default AboutUsMain;
