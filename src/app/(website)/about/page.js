import About from "@/components/pages/about/About";
import JsonLd from "@/utils/seo/JsonLd";
import { breadcrumbSchema, webPageSchema } from "@/utils/seo/schemas";
import { buildPageMetadata, PRIMARY_KEYWORDS } from "@/utils/seo/siteSeo";

export const metadata = buildPageMetadata({
  title: "About — Top Software House for AI & Custom Solutions",
  description:
    "About System Heuristics: a best-in-class software company building AI automation, custom software, healthcare and construction systems, audits, and integrations that solve real business problems.",
  path: "/about",
  keywords: [
    ...PRIMARY_KEYWORDS,
    "about System Heuristics",
    "software company team",
  ],
});

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            path: "/about",
            name: metadata.title,
            description: metadata.description,
            type: "AboutPage",
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
          ]),
        ]}
      />
      <About />
    </>
  );
}
