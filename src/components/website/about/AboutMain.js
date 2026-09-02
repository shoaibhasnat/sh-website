import AboutHero from "@/components/website/about/about-hero/AboutHero";
import AboutPhilosophy from "@/components/website/about/about-philosophy/AboutPhilosophy";
import AboutCapabilities from "@/components/website/about/about-capabilities/AboutCapabilities";
import AboutPrinciples from "@/components/website/about/about-principles/AboutPrinciples";
import AboutProcess from "@/components/website/about/about-process/AboutProcess";
import AboutIndustries from "@/components/website/about/about-industries/AboutIndustries";
import AboutMission from "@/components/website/about/about-mission/AboutMission";

export default function AboutMain() {
  return (
    <>
      <AboutHero />
      {/* <AboutPhilosophy /> */}
      <AboutCapabilities />
      <AboutPrinciples />
      <AboutProcess />
      <AboutIndustries />
      <AboutMission />
    </>
  );
}
