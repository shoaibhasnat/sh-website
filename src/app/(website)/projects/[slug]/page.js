import { notFound } from "next/navigation";
import ProjectDetailMain from "@/components/website/projects/project-detail/ProjectDetailMain";
import {
  getAllProjectsIncludingPrivate,
  getProjectBySlug,
} from "@/data/pages/projects/ProjectsData";
import JsonLd from "@/utils/seo/JsonLd";
import {
  breadcrumbSchema,
  creativeWorkSchema,
  webPageSchema,
} from "@/utils/seo/schemas";
import { buildPageMetadata, PRIMARY_KEYWORDS } from "@/utils/seo/siteSeo";

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

  const description =
    project.shortSolution ||
    project.shortProblem ||
    `${project.name} — custom software, AI automation, and systems project by System Heuristics.`;

  return buildPageMetadata({
    title: `${project.name} — Custom Software & Automation Project`,
    description,
    path: `/projects/${project.slug}`,
    keywords: [
      ...PRIMARY_KEYWORDS,
      project.name,
      project.industryLabel,
      ...(project.tags || []),
    ].filter(Boolean),
  });
}

export default async function ProjectDetailsPage({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const description =
    project.shortSolution ||
    project.shortProblem ||
    `${project.name} — System Heuristics project`;

  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            path: `/projects/${project.slug}`,
            name: project.name,
            description,
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Projects", path: "/projects" },
            { name: project.name, path: `/projects/${project.slug}` },
          ]),
          creativeWorkSchema(project),
        ]}
      />
      <ProjectDetailMain project={project} />
    </>
  );
}
