import CareersHero from "@/components/website/careers/careers-hero/CareersHero";
import CareersBenefits from "@/components/website/careers/careers-benefits/CareersBenefits";
import CareersCulture from "@/components/website/careers/careers-culture/CareersCulture";
import CareersAreas from "@/components/website/careers/careers-areas/CareersAreas";
import CareersJobs from "@/components/website/careers/careers-jobs/CareersJobs";
import CareersApplication from "@/components/website/careers/careers-application/CareersApplication";
import CareersProcess from "@/components/website/careers/careers-process/CareersProcess";
import CareersCta from "@/components/website/careers/careers-cta/CareersCta";

export default function CareersMain() {
  return (
    <>
      <CareersHero />
      <CareersBenefits />
      <CareersCulture />
      <CareersAreas />
      <CareersJobs />
      <CareersApplication />
      <CareersProcess />
      <CareersCta />
    </>
  );
}
