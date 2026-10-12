import { Constants } from "../../../utils/global/Constants";

export const ContactPageData = {
  hero: {
    title: `Transform Your Vision into Reality with ${Constants?.company?.name.toUpperCase()}!`,
    description: `Partner with us to unlock innovative solutions tailored to elevate your business. Whether it’s leveraging cutting-edge technologies or strategic insights, we ensure you stay ahead of the curve. Let’s build something extraordinary together!`,
    bannerImage: `/images/pages/contact/hero/contact-hero.svg`,
  },
  contactSection: {
    intro: { title: `Let's discuss something COOL together` },
    interests: [
      `Machine Learning`,
      `Gen AI`,
      `Data Analytics`,
      `Graphic Design`,
      `LLM`,
      `Other`,
    ],

    contactInfo: [
      {
        type: `email`,
        title: `Email`,
        subtitle: `Our friendly team is here to help.`,
        value: Constants?.company?.email,
      },
      {
        type: `office`,
        title: `Office`,
        subtitle: `Come say hello to our office HQ.`,
        value: Constants?.company?.address,
      },
      {
        type: `phone`,
        title: `Phone`,
        subtitle: Constants?.company?.timings,
        value: Constants?.company?.contactNo,
      },
    ],
  },
  consultationSection: {
    title: `Get Your Free Consultation Today!`,
    description: `${Constants?.company?.name} will empower your business by leveraging cutting-edge technology and innovative strategies to outperform your competition.`,
    contacts: {
      phone: Constants?.company?.contactNo,
      email: Constants?.company?.email,
      address: Constants?.company?.address,
    },
  },
};
