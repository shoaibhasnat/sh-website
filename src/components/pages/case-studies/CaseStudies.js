import CaseStudiesHero from "@/components/website/case-studies/case-studies-hero/CaseStudiesHero";
import CaseStudiesCategories from "@/components/website/case-studies/case-studies-categories/CaseStudiesCategories";
import CaseStudiesApproach from "@/components/website/case-studies/case-studies-approach/CaseStudiesApproach";
import CaseStudiesChallenges from "@/components/website/case-studies/case-studies-challenges/CaseStudiesChallenges";
import CaseStudiesOutcomes from "@/components/website/case-studies/case-studies-outcomes/CaseStudiesOutcomes";
import CaseStudiesCta from "@/components/website/case-studies/case-studies-cta/CaseStudiesCta";

export default function CaseStudies() {
  return (
    <>
      <CaseStudiesHero />
      <CaseStudiesCategories />
      <CaseStudiesApproach />
      <CaseStudiesChallenges />
      <CaseStudiesOutcomes />
      <CaseStudiesCta />
    </>
  );
}
