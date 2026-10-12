import {
  Linkedin,
  Facebook,
  Phone,
  Mail,
  MapPin,
  Instagram,
} from "lucide-react";
import { Constants } from "../../../utils/global/Constants";
export const FooterData = {
  tagline:
    "Our mission is to leverage technical expertise and industry insight to craft custom software solutions that help clients thrive in a complex digital landscape.",
  usefulLinks: [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Industries", href: "/industries" },
    { name: "About", href: "/about-us" },
    { name: "SH Media", href: "/media" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
  ],
  servicesLinks: [
    { name: "Generative AI", href: "/services/generative-ai" },
    { name: "Language Processing", href: "/services/language-processing" },
    { name: "Machine Learning", href: "/services/machine-learning" },
    { name: "Computer Vision", href: "/services/computer-vision" },
    { name: "Data Analytics", href: "/services/data-analytics" },
    { name: "AI-Driven Security", href: "/services/ai-driven-security" },
    { name: "Web Scraping", href: "/services/web-scraping" },
    { name: "Web Automation", href: "/services/web-automation" },
  ],
  contactLinks: [
    { icon: Phone, text: Constants?.company?.contactNo },
    { icon: Mail, text: Constants?.company?.email },
    { icon: MapPin, text: Constants?.company?.address },
  ],
  socialLinks: [
    { Icon: Phone, href: Constants?.socials?.whatsapp },
    { Icon: Linkedin, href: Constants?.socials?.linkedin },
    { Icon: Facebook, href: Constants?.socials?.facebook },
    { Icon: Instagram, href: Constants?.socials?.instagram },
  ],
  bottomLinks: [
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms and Conditions", href: "/terms-and-conditions" },
  ],
};
