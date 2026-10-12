// Entry point for the Home page sections.
// The hero is the only eager section so the LCP image can paint immediately.
// Every other section is code-split and lazy-mounted with reserved scroll space.

import { useEffect, useMemo } from "react";

import Hero from "./hero/Hero";

import PageSectionsWrapper from "../../ui/page-sections-wrapper/PageSectionsWrapper";
import createLazyPageSection from "../../ui/lazy-section/createLazyPageSection";
import { scheduleScrollTriggerRefresh } from "../../../utils/gsap/scrollTriggerRefresh";
import { ServiceDetailsData } from "../../../data/pages/services/service-details/ServiceDetailsData";

const getHomeVideoService = () => {
  const services = ServiceDetailsData?.eachServiceDetails || [];

  const projects = services
    .flatMap((service) => service?.videosSection?.projects || [])
    .filter(Boolean);

  if (!projects.length) return null;

  return {
    name: "our work",
    videosSection: {
      projects,
    },
  };
};

const createHomeSections = (videoCount) =>
  [
    { component: Hero, scroll: false },

    {
      loader: () => import("./company-intro/CompanyIntro"),
      name: "LazyCompanyIntro",
      scroll: false,
      reserveHeight: "100vh",
      rootMargin: "900px",
      preload: false,
    },

    {
      loader: () => import("../services/services-section/ServicesSection"),
      name: "LazyServicesSection",
      scroll: true,
      reserveHeight: "1150px",
      rootMargin: "1400px",
      preload: false,
    },

    {
      loader: () => import("../industries/industries-section/IndustriesSection"),
      name: "LazyIndustriesSection",
      scroll: true,
      reserveHeight: "75vh",
      rootMargin: "1500px",
      preload: false,
    },

    {
      loader: () => import("./clients-section/ClientsSection"),
      name: "LazyClientsSection",
      scroll: true,
      reserveHeight: "calc(100vh + 3000px)",
      rootMargin: "1800px",
      preload: false,
    },

    {
      loader: () => import("../portfolio/projects-headline/ProjectsHeadline"),
      name: "LazyProjectsHeadline",
      scroll: true,
      reserveHeight: "200vh",
      rootMargin: "1800px",
      preload: false,
    },

    {
      loader: () => import("./portfolio-section/PortfolioSection"),
      name: "LazyPortfolioSection",
      scroll: true,
      reserveHeight: "900vh",
      rootMargin: "2200px",
      preload: false,
    },

    ...(videoCount > 0
      ? [
          {
            loader: () =>
              import(
                "../services/service-details/project-video-section/ProjectVideosSection"
              ),
            name: "LazyProjectVideosSection",
            scroll: true,
            reserveHeight: `calc(100vh + ${Math.max(videoCount, 1) * 100}vh)`,
            rootMargin: "3600px",
            preload: false,
          },
        ]
      : []),

    {
      loader: () => import("../about-us/statistics-section/StatisticsSection"),
      name: "LazyStatisticsSection",
      scroll: true,
      reserveHeight: "250vh",
      rootMargin: "1800px",
      preload: false,
    },

    {
      loader: () =>
        import("../about-us/why-choose-us-section/WhyChooseUsSection"),
      name: "LazyWhyChooseUsSection",
      scroll: true,
      reserveHeight: "300vh",
      rootMargin: "1800px",
      preload: false,
    },

    {
      loader: () => import("../services/techs-section/TechsSection"),
      name: "LazyTechsSection",
      scroll: true,
      reserveHeight: "250vh",
      rootMargin: "1800px",
      preload: false,
    },

    {
      loader: () => import("../contact/contact-form/ContactForm"),
      name: "LazyContactForm",
      scroll: false,
      reserveHeight: 760,
      rootMargin: "1500px",
      preload: false,
    },

    {
      loader: () => import("./testimonials-section/TestimonialsSection"),
      name: "LazyTestimonialsSection",
      scroll: true,
      reserveHeight: "700vh",
      rootMargin: "1800px",
      preload: false,
    },

    {
      loader: () => import("../about-us/faq-section/FaqSection"),
      name: "LazyFaqSection",
      scroll: true,
      reserveHeight: 560,
      rootMargin: "1200px",
      preload: false,
    },
  ].map((section) => {
    if (section.component) return section;

    return {
      component: createLazyPageSection(section),
      scroll: section.scroll,
    };
  });

const HomeMain = () => {
  const homeVideoService = useMemo(() => getHomeVideoService(), []);
  const videoCount = homeVideoService?.videosSection?.projects?.length || 0;

  const sections = useMemo(() => createHomeSections(videoCount), [videoCount]);

  useEffect(() => {
    let idleId;

    const refresh = () => scheduleScrollTriggerRefresh({ delay: 0 });

    if ("requestIdleCallback" in window) {
      idleId = window.requestIdleCallback(refresh, { timeout: 2200 });
    } else {
      const timer = window.setTimeout(refresh, 1800);
      return () => window.clearTimeout(timer);
    }

    return () => {
      if (idleId) window.cancelIdleCallback?.(idleId);
    };
  }, []);

  return (
    <PageSectionsWrapper
      sections={sections}
      parent="home"
      extraProps={{
        service: homeVideoService,
      }}
    />
  );
};

export default HomeMain;