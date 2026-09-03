import { notFound } from "next/navigation";
import ProjectDetailMain from "@/components/website/projects/project-detail/ProjectDetailMain";
import {
  getAllProjectsIncludingPrivate,
  getProjectBySlug,
} from "@/data/pages/projects/ProjectsData";

export function generateStaticParams() {
  return getAllProjectsIncludingPrivate()
    .filter((project) => project.slug)
    .map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: project.name,
    description:
      project.shortSolution ||
      project.shortProblem ||
      `${project.name} — System Heuristics project`,
  };
}

export default async function ProjectDetailsPage({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetailMain project={project} />;
}
