import Navbar from "@/utils/navbar/Navbar";
import Footer from "@/utils/footer/Footer";
import FloatingCta from "@/utils/floating-cta/FloatingCta";

export const metadata = {
  title: {
    default: "System Heuristics",
    template: "%s | System Heuristics",
  },
  description:
    "System Heuristics builds software, systems, and product engineering solutions.",
};

export default function WebsiteLayout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
      <FloatingCta />
    </>
  );
}
