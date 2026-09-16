import CaseStudies from "@/components/pages/case-studies/CaseStudies";
import JsonLd from "@/utils/seo/JsonLd";
import { breadcrumbSchema, webPageSchema } from "@/utils/seo/schemas";
import { buildPageMetadata, PRIMARY_KEYWORDS } from "@/utils/seo/siteSeo";

export const metadata = buildPageMetadata({
  title: "Case Studies — Healthcare, Construction & AI Automation",
  description:
    "Case studies from System Heuristics — how a top software company delivers AI automation, custom software, healthcare and construction systems, audits, and measurable business outcomes.",
  path: "/case-studies",
  keywords: [
    ...PRIMARY_KEYWORDS,
    "software case studies",
    "healthcare automation case study",
    "construction software case study",
  ],
});

export default function CaseStudiesPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            path: "/case-studies",
            name: metadata.title,
            description: metadata.description,
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Case Studies", path: "/case-studies" },
          ]),
        ]}
      />
      <CaseStudies />
    </>
  );
}
