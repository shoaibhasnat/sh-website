// useContactFormData.js
import { ContactPageData } from "../../../../../data/pages/contact/ContactPageData";

export const useContactFormData = () => {
  const contactSection = ContactPageData?.contactSection;

  const intro = contactSection?.intro;

  const interests = Array.isArray(contactSection?.interests)
    ? contactSection.interests
    : [];

  const contactInfo = Array.isArray(contactSection?.contactInfo)
    ? contactSection.contactInfo
    : [];

  const shouldRender =
    !!intro || interests.length > 0 || contactInfo.length > 0;

  return { intro, interests, contactInfo, shouldRender };
};
