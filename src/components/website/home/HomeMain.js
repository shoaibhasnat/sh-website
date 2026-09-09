import HomeHero from "./home-hero/HomeHero";
import HomeProblems from "./home-problems/HomeProblems";
import HomePlans from "./home-plans/HomePlans";
import HomeAiAgents from "./home-ai-agents/HomeAiAgents";
import HomeReviews from "./home-reviews/HomeReviews";
import HomeClients from "./home-clients/HomeClients";
import HomeFaq from "./home-faq/HomeFaq";
import HomeContact from "./home-contact/HomeContact";
import HomeCta from "./home-cta/HomeCta";

export default function HomeMain() {
  return (
    <>
      <HomeHero />
      <HomeProblems />
      <HomePlans />
      <HomeAiAgents />
      <HomeReviews />
      <HomeClients />
      <HomeFaq />
      <HomeContact />
      <HomeCta />
    </>
  );
}
