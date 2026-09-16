import PrivacyPolicy from "@/components/pages/legal/PrivacyPolicy";
import JsonLd from "@/utils/seo/JsonLd";
import { breadcrumbSchema, webPageSchema } from "@/utils/seo/schemas";
import { buildPageMetadata } from "@/utils/seo/siteSeo";

export const metadata = buildPageMetadata({
  title: "Privacy Policy",
  description:
    "Privacy Policy for System Heuristics — how our software company collects, uses, and protects personal information across our website and services.",
  path: "/privacy-policy",
  keywords: ["privacy policy", "System Heuristics privacy", "data protection"],
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            path: "/privacy-policy",
            name: metadata.title,
            description: metadata.description,
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Privacy Policy", path: "/privacy-policy" },
          ]),
        ]}
      />
      <PrivacyPolicy />
    </>
  );
}
