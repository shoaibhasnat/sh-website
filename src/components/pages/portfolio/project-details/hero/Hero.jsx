import PageHero from "../../../../ui/page-hero/PageHero";
import { ArrowUpRight } from "lucide-react";
import PDFPage from "../../../../../utils/pdf/PDFPage";
import Button from "../../../../ui/button/Button";
import styles from "./hero.module.css";
const Hero = ({ project }) => {
  // Data absence checks
  if (
    !project ||
    !project.banner ||
    !project.banner.heading ||
    !project.banner.bannerImage
  ) {
    return null;
  }

  const hasLiveDemoUrl = !!project.banner?.url;
  const hasVideoDemoUrl = !!project.banner?.videoUrl;

  const liveDemoClickHandler = () => {
    if (hasLiveDemoUrl) {
      window.open(project.banner.url, "_blank");
    }
  };
  const videoDemoClickHandler = () => {
    if (hasVideoDemoUrl) {
      window.open(project.banner.videoUrl, "_blank");
    }
  };
  return (
    <PageHero
      title={project.banner.heading}
      description={project.banner.description}
      bannerImage={project.banner.bannerImage}
      titleTag={window.innerWidth < 576 ? "h4" : "h3"}
      extraBtn={
        <div style={{width:"100%"}}>
          <div className={styles.btnsWrapper}>
            {/* Buttons only */}
            <div className={styles.btns}>
              {hasLiveDemoUrl && (
                <Button variant="default" onClick={liveDemoClickHandler}>
                  Live Demo <ArrowUpRight />
                </Button>
              )}

              {hasVideoDemoUrl && (
                <Button variant="outlined" onClick={videoDemoClickHandler}>
                  Video Demo <ArrowUpRight />
                </Button>
              )}
            </div>
          </div>

          {/* PDF should live OUTSIDE the flex wrapper */}
          <div className={styles.pdfWrapper}>
            <PDFPage project={project} />
          </div>
        </div>
      }
    />
  );
};

export default Hero;
