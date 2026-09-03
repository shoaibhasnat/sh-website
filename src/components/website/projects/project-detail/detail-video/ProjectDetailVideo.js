import shared from "../project-detail-shared.module.css";
import styles from "./detail-video.module.css";

function toEmbedUrl(url) {
  if (!url) return "";

  try {
    const parsed = new URL(url);
    if (parsed.hostname.includes("drive.google.com")) {
      const match = parsed.pathname.match(/\/file\/d\/([^/]+)/);
      if (match?.[1]) {
        return `https://drive.google.com/file/d/${match[1]}/preview`;
      }
    }
    if (parsed.hostname.includes("youtube.com") && parsed.searchParams.get("v")) {
      return `https://www.youtube.com/embed/${parsed.searchParams.get("v")}`;
    }
    if (parsed.hostname.includes("youtu.be")) {
      return `https://www.youtube.com/embed${parsed.pathname}`;
    }
  } catch {
    return "";
  }

  return "";
}

export default function ProjectDetailVideo({ project }) {
  const banner = project.raw?.banner || {};
  const localVideo = banner.localVideo?.url || banner.localVideoUrl || "";
  const orientation = banner.localVideo?.orientation || "landscape";
  const embedUrl = toEmbedUrl(banner.videoUrl);

  if (!localVideo && !embedUrl) return null;

  return (
    <section
      className={`${shared.sectionPadTight} ${styles.section}`}
      aria-labelledby="project-video-heading"
    >
      <div className={shared.inner}>
        <p className={shared.eyebrow}>Demo</p>
        <h2 id="project-video-heading" className={shared.sectionHeading}>
          See The System In Action
        </h2>

        <div
          className={`${styles.frame} ${
            orientation === "portrait" ? styles.portrait : styles.landscape
          }`}
        >
          {localVideo ? (
            <video
              className={styles.video}
              src={localVideo}
              controls
              playsInline
              preload="metadata"
            >
              Your browser does not support the video tag.
            </video>
          ) : (
            <iframe
              className={styles.iframe}
              src={embedUrl}
              title={`${project.name} demo video`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          )}
        </div>
      </div>
    </section>
  );
}
