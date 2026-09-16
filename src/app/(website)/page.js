import Home from "@/components/pages/home/Home";
import { HomeData } from "@/data/pages/home/HomeData";
import JsonLd from "@/utils/seo/JsonLd";
import {
  breadcrumbSchema,
  faqPageSchema,
  webPageSchema,
} from "@/utils/seo/schemas";
import { buildPageMetadata, PRIMARY_KEYWORDS } from "@/utils/seo/siteSeo";

export const metadata = buildPageMetadata({
  title: "Best Software Company for AI Automation & Custom Software",
  description:
    "System Heuristics is a top software house for AI automations, custom software solutions, healthcare and construction systems, business audits, and intelligent workflows that increase sales and cut manual work.",
  path: "/",
  keywords: [
    ...PRIMARY_KEYWORDS,
    "System Heuristics",
    "software consultancy",
    "AI agents for business",
  ],
});

export default function HomePage() {
  const faqItems = HomeData?.faq?.items || [];

  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            path: "/",
            name: "System Heuristics — Best Software Company for AI Automation & Custom Software",
            description: metadata.description,
            type: "WebPage",
          }),
          breadcrumbSchema([{ name: "Home", path: "/" }]),
          faqPageSchema(faqItems),
        ]}
      />
      <Home />
    </>
  );
}
