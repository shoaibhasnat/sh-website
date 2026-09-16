import Careers from "@/components/pages/careers/Careers";
import JsonLd from "@/utils/seo/JsonLd";
import { breadcrumbSchema, webPageSchema } from "@/utils/seo/schemas";
import { buildPageMetadata, PRIMARY_KEYWORDS } from "@/utils/seo/siteSeo";

export const metadata = buildPageMetadata({
  title: "Careers — Join a Top Software House",
  description:
    "Careers at System Heuristics — join a leading software company building AI automation, custom software solutions, healthcare and construction systems, and intelligent business workflows.",
  path: "/careers",
  keywords: [
    ...PRIMARY_KEYWORDS,
    "software company careers",
    "AI engineer jobs",
    "software house jobs",
  ],
});

export default function CareersPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            path: "/careers",
            name: metadata.title,
            description: metadata.description,
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Careers", path: "/careers" },
          ]),
        ]}
      />
      <Careers />
    </>
  );
}
