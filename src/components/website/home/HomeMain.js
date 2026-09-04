import HomeHero from "./home-hero/HomeHero";
import HomeProblems from "./home-problems/HomeProblems";
import HomeCapabilities from "./home-capabilities/HomeCapabilities";
import HomePlans from "./home-plans/HomePlans";
import HomeAiAgents from "./home-ai-agents/HomeAiAgents";
import HomeAutomation from "./home-automation/HomeAutomation";
import HomeIndustries from "./home-industries/HomeIndustries";
import HomeProjects from "./home-projects/HomeProjects";
import HomeWhyUs from "./home-why-us/HomeWhyUs";
import HomeFaq from "./home-faq/HomeFaq";
import HomeContact from "./home-contact/HomeContact";
import HomeCta from "./home-cta/HomeCta";

export default function HomeMain() {
  return (
    <>
      <HomeHero />
      <HomeProblems />
      <HomeCapabilities />
      <HomePlans />
      <HomeAiAgents />
      <HomeAutomation />
      <HomeIndustries />
      <HomeProjects />
      <HomeWhyUs />
      <HomeFaq />
      <HomeContact />
      <HomeCta />
    </>
  );
}
