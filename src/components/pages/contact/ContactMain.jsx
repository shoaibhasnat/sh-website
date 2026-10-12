// Provides an array of sections for the Contact page
import Hero from "./hero/Hero";
import ConsultationSection from "./consultation-section/ConsultationSection";
import PageSectionsWrapper from "../../ui/page-sections-wrapper/PageSectionsWrapper";
import createLazyPageSection from "../../ui/lazy-section/createLazyPageSection";

const sections = [
  { component: Hero, scroll: false },
  {
    loader: () => import("./contact-form/ContactForm"),
    name: "LazyContactForm",
    scroll: false,
    reserveHeight: 760,
    rootMargin: "1800px",
  },
  { component: ConsultationSection, scroll: true },
].map((section) => {
  if (section.component) return section;

  return {
    component: createLazyPageSection(section),
    scroll: section.scroll,
  };
});

const ContactMain = () => {
  return <PageSectionsWrapper sections={sections} parent="contact" />;
};

export default ContactMain;
