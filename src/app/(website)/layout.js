import Navbar from "@/utils/navbar/Navbar";
import Footer from "@/utils/footer/Footer";
import FloatingCta from "@/utils/floating-cta/FloatingCta";
import { DEFAULT_DESCRIPTION, SITE_NAME } from "@/utils/seo/siteSeo";

export const metadata = {
  title: {
    default: `${SITE_NAME} | Best Software Company for AI Automation & Custom Software`,
    template: `%s | ${SITE_NAME}`,
  },
  description: DEFAULT_DESCRIPTION,
};

export default function WebsiteLayout({ children }) {
  return (
    <>
      <a href="#main-content" className="sr-only">
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content">{children}</main>
      <Footer />
      <FloatingCta />
    </>
  );
}
