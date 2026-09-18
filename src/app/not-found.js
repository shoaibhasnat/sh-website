import Navbar from "@/utils/navbar/Navbar";
import Footer from "@/utils/footer/Footer";
import FloatingCta from "@/utils/floating-cta/FloatingCta";
import NotFoundView from "@/components/website/not-found/NotFound";

export const metadata = {
  title: "Page Not Found",
  description:
    "The page you requested could not be found on System Heuristics. Return home or explore our projects and contact options.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <NotFoundView />
      </main>
      <Footer />
      <FloatingCta />
    </>
  );
}
