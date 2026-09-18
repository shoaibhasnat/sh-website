import dynamic from "next/dynamic";
import HomeHero from "./home-hero/HomeHero";
import HomeProblems from "./home-problems/HomeProblems";
import HomePlans from "./home-plans/HomePlans";
import HomeAiAgents from "./home-ai-agents/HomeAiAgents";

const HomeStats = dynamic(() => import("./home-stats/HomeStats"));
const HomeReviews = dynamic(() => import("./home-reviews/HomeReviews"));
const HomeClients = dynamic(() => import("./home-clients/HomeClients"));
const HomeFaq = dynamic(() => import("./home-faq/HomeFaq"));
const HomeContact = dynamic(() => import("./home-contact/HomeContact"));
const HomeCta = dynamic(() => import("./home-cta/HomeCta"));

export default function HomeMain() {
  return (
    <>
      <HomeHero />
      <HomeProblems />
      <HomePlans />
      <HomeAiAgents />
      <HomeStats />
      <HomeReviews />
      <HomeClients />
      <HomeFaq />
      <HomeContact />
      <HomeCta />
    </>
  );
}
