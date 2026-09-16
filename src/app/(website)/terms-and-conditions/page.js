import TermsAndConditions from "@/components/pages/legal/TermsAndConditions";
import JsonLd from "@/utils/seo/JsonLd";
import { breadcrumbSchema, webPageSchema } from "@/utils/seo/schemas";
import { buildPageMetadata } from "@/utils/seo/siteSeo";

export const metadata = buildPageMetadata({
  title: "Terms & Conditions",
  description:
    "Terms and Conditions for using the System Heuristics website — the online presence of a software company focused on AI automation and custom solutions.",
  path: "/terms-and-conditions",
  keywords: ["terms and conditions", "System Heuristics terms"],
});

export default function TermsAndConditionsPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            path: "/terms-and-conditions",
            name: metadata.title,
            description: metadata.description,
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Terms & Conditions", path: "/terms-and-conditions" },
          ]),
        ]}
      />
      <TermsAndConditions />
    </>
  );
}
