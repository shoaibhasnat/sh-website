import Contact from "@/components/pages/contact/Contact";
import JsonLd from "@/utils/seo/JsonLd";
import { breadcrumbSchema, webPageSchema } from "@/utils/seo/schemas";
import { buildPageMetadata, PRIMARY_KEYWORDS } from "@/utils/seo/siteSeo";

export const metadata = buildPageMetadata({
  title: "Contact — Software Audit, AI Automation & Custom Solutions",
  description:
    "Contact System Heuristics — a top software company for AI automations, custom software solutions, healthcare and construction systems, and free problem reviews or paid audits.",
  path: "/contact",
  keywords: [
    ...PRIMARY_KEYWORDS,
    "contact software company",
    "software audit request",
    "AI automation consultation",
  ],
});

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            path: "/contact",
            name: metadata.title,
            description: metadata.description,
            type: "ContactPage",
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Contact", path: "/contact" },
          ]),
        ]}
      />
      <Contact />
    </>
  );
}
