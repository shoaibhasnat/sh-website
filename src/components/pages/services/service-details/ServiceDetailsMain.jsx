// Entry point for the Specific Service page sections.
// Pinned sections are lazy-loaded with reserved scroll space so each section can
// initialize independently without pushing the next section over it.

import { useLocation } from "react-router-dom";
import Hero from "./hero/Hero";
import InfoSection from "./info-section/InfoSection";
import { ServiceDetailsData } from "../../../../data/pages/services/service-details/ServiceDetailsData";
import PageSectionsWrapper from "../../../ui/page-sections-wrapper/PageSectionsWrapper";
import createLazyPageSection from "../../../ui/lazy-section/createLazyPageSection";

const ServiceDetailsMain = () => {
  const location = useLocation();
  const slug = location.pathname.split("/").pop();
  const service = ServiceDetailsData?.eachServiceDetails?.find(
    (item) => item.path === `/${slug}`,
  );

  if (!service) return null;

  const hasProjects = service.projectIds && service.projectIds.length > 0;
  const videoCount = Array.isArray(service?.videosSection?.projects)
    ? service.videosSection.projects.length
    : 0;

  const sections = [
    { component: Hero, scroll: false },
    { component: InfoSection, scroll: true },
    ...(videoCount > 0
      ? [
          {
            loader: () => import("./project-video-section/ProjectVideosSection"),
            name: "LazyProjectVideosSection",
            scroll: true,
            reserveHeight: `calc(100vh + ${Math.max(videoCount, 1) * 100}vh)`,
            rootMargin: "3600px",
          },
        ]
      : []),
    ...(hasProjects
      ? [
          {
            loader: () => import("./projects-section/ProjectsSection"),
            name: "LazyProjectsSection",
            scroll: true,
            reserveHeight: 760,
            rootMargin: "2200px",
          },
        ]
      : []),
    {
      loader: () => import("./services-slider/ServicesSlider"),
      name: "LazyServicesSlider",
      scroll: true,
      reserveHeight: "320vh",
      rootMargin: "3200px",
    },
    {
      loader: () => import("./faq-section/FaqSection"),
      name: "LazyFaqSection",
      scroll: true,
      reserveHeight: 560,
      rootMargin: "1600px",
    },
  ].map((section) => {
    if (section.component) return section;

    return {
      component: createLazyPageSection(section),
      scroll: section.scroll,
    };
  });

  return (
    <PageSectionsWrapper
      sections={sections}
      parent="service"
      extraProps={{ service }}
    />
  );
};

export default ServiceDetailsMain;
