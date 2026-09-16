import Projects from "@/components/pages/projects/Projects";
import JsonLd from "@/utils/seo/JsonLd";
import { breadcrumbSchema, webPageSchema } from "@/utils/seo/schemas";
import { buildPageMetadata, PRIMARY_KEYWORDS } from "@/utils/seo/siteSeo";

export const metadata = buildPageMetadata({
  title: "Projects — Custom Software, AI Automations & Industry Systems",
  description:
    "Explore projects from System Heuristics — custom software solutions, AI automations, healthcare software, construction systems, integrations, and audits built by a top software house.",
  path: "/projects",
  keywords: [
    ...PRIMARY_KEYWORDS,
    "software projects",
    "AI automation projects",
    "healthcare software projects",
    "construction software projects",
  ],
});

export default async function ProjectsPage({ searchParams }) {
  const params = await searchParams;

  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            path: "/projects",
            name: metadata.title,
            description: metadata.description,
            type: "CollectionPage",
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Projects", path: "/projects" },
          ]),
        ]}
      />
      <Projects industryParam={params?.industry} />
    </>
  );
}
