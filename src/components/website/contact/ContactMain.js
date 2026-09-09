import ContactHero from "@/components/website/contact/contact-hero/ContactHero";
import ContactFormSection from "@/components/website/contact/contact-form-section/ContactFormSection";
import HomePlans from "@/components/website/home/home-plans/HomePlans";
import ContactChallenges from "@/components/website/contact/contact-challenges/ContactChallenges";
import ContactCta from "@/components/website/contact/contact-cta/ContactCta";

export default function ContactMain() {
  return (
    <>
      <ContactHero />
      <ContactFormSection />
      <HomePlans />
      <ContactChallenges />
      <ContactCta />
    </>
  );
}
