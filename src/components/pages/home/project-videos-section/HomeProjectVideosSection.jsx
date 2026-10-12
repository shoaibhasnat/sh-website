import ProjectVideosSection from "../../services/service-details/project-video-section/ProjectVideosSection";
import { ServiceDetailsData } from "../../../../data/pages/services/service-details/ServiceDetailsData";

const getHomeProjects = () => {
  const services = Array.isArray(ServiceDetailsData)
    ? ServiceDetailsData
    : Object.values(ServiceDetailsData || {});

  return services
    .flatMap((service) => service?.videosSection?.projects || [])
    .filter(Boolean)
    .slice(0, 5);
};

const HomeProjectVideosSection = () => {
  const projects = getHomeProjects();

  if (!projects.length) return null;

  const service = {
    name: "our solutions",
    videosSection: {
      projects,
    },
  };

  return <ProjectVideosSection service={service} />;
};

export default HomeProjectVideosSection;