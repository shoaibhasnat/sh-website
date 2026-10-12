// ProjectVideosSection.jsx
// Reads video data from service.videosSection.projects (ServiceDetailsData).
// No useLocation needed — service is passed as a prop from ServiceDetailsMain.

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import SectionIntro from "../../../../ui/section-intro/SectionIntro";
import styles from "./project-videos-section.module.css";
import { initConveyorShowcase } from "./ProjectVideosSectionUtils";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

function toEmbedUrl(url) {
  if (!url) return null;
  const driveMatch = url.match(/\/file\/d\/([a-zA-Z0-9_-]+)/);
  if (driveMatch)
    return `https://drive.google.com/file/d/${driveMatch[1]}/preview?autoplay=1`;
  if (url.includes("youtube.com/embed/"))
    return (
      url.split("?")[0] +
      "?autoplay=1&mute=1&loop=1&controls=0&modestbranding=1"
    );
  const ytMatch = url.match(/(?:v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
  if (ytMatch)
    return `https://www.youtube.com/embed/${ytMatch[1]}?autoplay=1&mute=1&loop=1&controls=0&modestbranding=1`;
  return url;
}
function VideoPlayer({ localSrc, remoteSrc, title, className, eager }) {
  const [isReady, setIsReady] = useState(false);
  const [showSkeleton, setShowSkeleton] = useState(true);

  const readyRef = useRef(false);
  const hideTimerRef = useRef(null);
  const fallbackTimerRef = useRef(null);

  const src = localSrc || remoteSrc || "";

  useEffect(() => {
    readyRef.current = false;
    setIsReady(false);
    setShowSkeleton(true);

    window.clearTimeout(hideTimerRef.current);
    window.clearTimeout(fallbackTimerRef.current);

    // Iframes like Google Drive / YouTube do not expose actual video readiness.
    // This prevents shimmer from getting stuck forever.
    if (remoteSrc) {
      fallbackTimerRef.current = window.setTimeout(() => {
        markReady();
      }, 3500);
    }

    return () => {
      window.clearTimeout(hideTimerRef.current);
      window.clearTimeout(fallbackTimerRef.current);
    };
  }, [src, remoteSrc]);

  const markReady = () => {
    if (readyRef.current) return;

    readyRef.current = true;
    setIsReady(true);

    window.clearTimeout(fallbackTimerRef.current);

    // Slight delay so video fades in first, then shimmer fades out smoothly.
    hideTimerRef.current = window.setTimeout(() => {
      setShowSkeleton(false);
    }, 550);
  };

  if (localSrc) {
    return (
      <div className={styles.videoWrap}>
        {showSkeleton && (
          <div
            className={`${styles.videoSkeleton} ${
              isReady ? styles.videoSkeletonHidden : ""
            }`}
          />
        )}

        <video
          className={`${className} ${
            isReady ? styles.videoVisible : styles.videoHidden
          }`}
          src={localSrc}
          autoPlay
          muted
          loop
          playsInline
          preload={eager ? "auto" : "metadata"}
          onLoadedData={markReady}
          onCanPlay={markReady}
          onCanPlayThrough={markReady}
          onPlaying={markReady}
          onError={markReady}
        />
      </div>
    );
  }

  if (remoteSrc) {
    return (
      <div className={styles.videoWrap}>
        {showSkeleton && (
          <div
            className={`${styles.videoSkeleton} ${
              isReady ? styles.videoSkeletonHidden : ""
            }`}
          />
        )}

        <iframe
          className={`${className} ${
            isReady ? styles.videoVisible : styles.videoHidden
          }`}
          src={remoteSrc}
          title={title}
          allow="autoplay; fullscreen"
          allowFullScreen
          loading={eager ? "eager" : "lazy"}
          onLoad={markReady}
        />
      </div>
    );
  }

  return null;
}
const ProjectVideosSection = ({ service }) => {
  const sectionRef = useRef(null);
  const stageRef = useRef(null);
  const cardRefs = useRef([]);
  const nameRef = useRef(null);
  const metaRef = useRef(null);
  const descRef = useRef(null);
  const counterRef = useRef(null);

  // Read from the current service's videosSection.projects.
  const rawProjects = Array.isArray(service?.videosSection?.projects)
    ? service.videosSection.projects
    : [];

  // Direct video files (mp4, webm, mov, cloudinary, etc.) → <video> via localSrc
  // Embed URLs (youtube, drive) → <iframe> via remoteSrc
  const isDirectVideo = (url) => {
    if (!url) return false;
    return (
      /\.(mp4|webm|mov|ogg)(\?|$)/i.test(url) ||
      url.includes("cloudinary.com") ||
      url.includes("res.cloudinary")
    );
  };

  const projects = rawProjects
    .map((p) => {
      const url = p.videoUrl ?? "";
      return {
        id: p.id ?? p.title,
        name: p.title ?? "",
        description: p.description ?? "",
        category: Array.isArray(p.category) ? p.category : [],
        orientation: p.orientation ?? "portrait",
        localSrc: isDirectVideo(url) ? url : (p.localVideoUrl ?? ""),
        remoteSrc: isDirectVideo(url) ? "" : toEmbedUrl(url),
      };
    })
    .filter((p) => p.localSrc || p.remoteSrc);

  useLayoutEffect(() => {
    if (!projects.length) return undefined;
    let cleanupAnimation = () => {};

    const refresh = () => {
      try {
        ScrollTrigger.sort();
        ScrollTrigger.refresh(true);
      } catch {}
    };

    const ctx = gsap.context(() => {
      cleanupAnimation =
        initConveyorShowcase({
          sectionRef,
          stageRef,
          cardRefs,
          nameRef,
          metaRef,
          descRef,
          counterRef,
          count: projects.length,
          projects,
        }) || (() => {});
    }, sectionRef);

    const rafOne = window.requestAnimationFrame(() => {
      window.requestAnimationFrame(refresh);
    });
    const timer = window.setTimeout(refresh, 450);

    return () => {
      window.cancelAnimationFrame(rafOne);
      window.clearTimeout(timer);
      cleanupAnimation();
      ctx.revert();
    };
  }, [projects.length]);

  if (!projects.length) return null;

  const first = projects[0];

  return (
    <div className={styles.outerWrapper}>
      <div ref={sectionRef} className={styles.showcase}>
        <div ref={stageRef} className={styles.stage}>
          {projects.map((project, index) => (
            <div
              key={project.id}
              ref={(el) => (cardRefs.current[index] = el)}
              className={`${styles.card} ${project.orientation === "portrait" ? styles.portrait : ""}`}
            >
              <VideoPlayer
                localSrc={project.localSrc}
                remoteSrc={project.remoteSrc}
                title={project.name}
                className={styles.cardVideo}
                eager={index === 0}
              />
              <div className={styles.cardTitle}>{project.name}</div>
            </div>
          ))}
        </div>

        <div className={styles.infoBlock}>
          <SectionIntro
            chipLabel="Project Showcases"
            title="Watch Our Work in Action"
            description={`See how we have brought ${service?.name ?? "this service"} to life for real clients.`}
            titleTag="h4"
            style={{ margin: "40px 0px 0px 0px", gap: "5px" }}
            chipStyle={{ fontSize: "14px", padding: "4px 15px" }}
          />
          {/* Scene-level name — used on mobile only (per-card titles handle desktop) */}
          <span ref={nameRef} className={styles.nameLabelMobile}>
            {first?.name}
          </span>

          <div ref={metaRef} className={styles.nameMeta}>
            {first?.category.slice(0, 2).map((cat) => (
              <span key={cat} className={styles.nameCat}>
                {cat}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectVideosSection;
