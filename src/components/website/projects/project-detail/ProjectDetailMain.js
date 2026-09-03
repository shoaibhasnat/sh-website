import ProjectDetailChallenge from "./detail-challenge/ProjectDetailChallenge";
import ProjectDetailCta from "./detail-cta/ProjectDetailCta";
import ProjectDetailFaqs from "./detail-faqs/ProjectDetailFaqs";
import ProjectDetailFeatures from "./detail-features/ProjectDetailFeatures";
import ProjectDetailHero from "./detail-hero/ProjectDetailHero";
import ProjectDetailOverview from "./detail-overview/ProjectDetailOverview";
import ProjectDetailSolution from "./detail-solution/ProjectDetailSolution";
import ProjectDetailTeam from "./detail-team/ProjectDetailTeam";
import ProjectDetailTestimonials from "./detail-testimonials/ProjectDetailTestimonials";
import shared from "./project-detail-shared.module.css";

export default function ProjectDetailMain({ project }) {
  return (
    <main className={shared.page}>
      <ProjectDetailHero project={project} />
      <ProjectDetailOverview project={project} />
      <ProjectDetailChallenge project={project} />
      <ProjectDetailSolution project={project} />
      <ProjectDetailFeatures project={project} />
      <ProjectDetailTeam project={project} />
      <ProjectDetailTestimonials project={project} />
      <ProjectDetailFaqs project={project} />
      <ProjectDetailCta projectName={project.name} />
    </main>
  );
}
