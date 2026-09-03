import Projects from "@/components/pages/projects/Projects";

export const metadata = {
  title: "Projects",
  description:
    "Explore AI agents, automations, integrations and custom software built by System Heuristics for healthcare, construction, logistics and more.",
};

export default async function ProjectsPage({ searchParams }) {
  const params = await searchParams;

  return <Projects industryParam={params?.industry} />;
}
