import { Container } from "@mui/material";
import {
  ArrowLeft,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  Folder,
} from "lucide-react";
import { useCallback, useLayoutEffect, useMemo, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "../../../ui/button/Button";
import LazyImage from "../../../ui/lazy-image/LazyImage";
import MarkdownDescription from "./MarkdownDescription";
import PageSectionsWrapper from "../../../ui/page-sections-wrapper/PageSectionsWrapper";
import { MediaData } from "../../../../data/pages/media/MediaData";
import styles from "./media-details.module.css";

gsap.registerPlugin(ScrollTrigger);

const DetailSection = ({ media }) => {
  const detailRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const sliderImages = useMemo(() => {
    return [media?.primaryImage, ...(media?.secondaryImages || [])].filter(Boolean);
  }, [media]);

  const hasMultipleImages = sliderImages.length > 1;

  const goToPreviousSlide = useCallback(() => {
    setActiveSlide((current) =>
      current === 0 ? sliderImages.length - 1 : current - 1,
    );
  }, [sliderImages.length]);

  const goToNextSlide = useCallback(() => {
    setActiveSlide((current) =>
      current === sliderImages.length - 1 ? 0 : current + 1,
    );
  }, [sliderImages.length]);

  useLayoutEffect(() => {
    setActiveSlide(0);
  }, [media?.id]);

  useLayoutEffect(() => {
    if (!detailRef.current) return undefined;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        detailRef.current.querySelectorAll("[data-animate='media-detail']"),
        { y: 55, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.85,
          ease: "power3.out",
          stagger: 0.08,
          scrollTrigger: {
            trigger: detailRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      );
    }, detailRef);

    return () => ctx.revert();
  }, []);

  if (!media) return null;

  return (
    <Container maxWidth="xl">
      <article ref={detailRef} className={styles.detailPage}>
        {/* <div data-animate="media-detail" className={styles.backRow}>
          <Button href="/media" width="220px" variant="outlined">
            <ArrowLeft size={18} /> Back to Media
          </Button>
        </div> */}

        {sliderImages.length > 0 && (
          <section data-animate="media-detail" className={`${styles.sliderCard} bgGlassWGlow`}>
            <div className={styles.sliderViewport}>
              <div
                className={styles.sliderTrack}
                style={{ transform: `translateX(-${activeSlide * 100}%)` }}
              >
                {sliderImages.map((image, index) => (
                  <div className={styles.slide} key={`${image}-${index}`}>
                    <LazyImage src={image} alt={`${media.title} ${index + 1}`} />
                  </div>
                ))}
              </div>

              {hasMultipleImages && (
                <>
                  <button
                    type="button"
                    className={`${styles.sliderArrow} ${styles.prevArrow}`}
                    onClick={goToPreviousSlide}
                    aria-label="Previous media image"
                  >
                    <ChevronLeft size={22} />
                  </button>
                  <button
                    type="button"
                    className={`${styles.sliderArrow} ${styles.nextArrow}`}
                    onClick={goToNextSlide}
                    aria-label="Next media image"
                  >
                    <ChevronRight size={22} />
                  </button>
                </>
              )}
            </div>

            {hasMultipleImages && (
              <div className={styles.sliderDots}>
                {sliderImages.map((image, index) => (
                  <button
                    type="button"
                    key={`${image}-dot`}
                    className={activeSlide === index ? styles.activeDot : ""}
                    onClick={() => setActiveSlide(index)}
                    aria-label={`Go to media image ${index + 1}`}
                  />
                ))}
              </div>
            )}
          </section>
        )}
        <header data-animate="media-detail" className={`${styles.headerCard} bgGlassWGlow`}>
          <span className={styles.eyebrow}>SH Media</span>
          <h1>{media.title}</h1>
          <p className="description">{media.summary}</p>
          <div className={styles.metaRow}>
            <span>
              <CalendarDays size={18} />
              {media.date}
            </span>
            <span>
              <Folder size={18} />
              {media.category}
            </span>
          </div>
        </header>


        <section data-animate="media-detail" className={`${styles.contentCard} bgGlassWGlow`}>
          <h3>Details</h3>
          <MarkdownDescription content={media.description} />
        </section>
      </article>
    </Container>
  );
};

const NotFoundSection = () => (
  <Container maxWidth="xl">
    <div className={`${styles.notFound} bgGlassWGlow`}>
      <h1>Media item not found</h1>
      <p className="description">The media story you are looking for does not exist.</p>
      <Button href="/media" width="180px">
        Back to Media
      </Button>
    </div>
  </Container>
);

const MediaDetailsMain = () => {
  const { id } = useParams();
  const media = MediaData.mediaItems.find((item) => item.id === Number(id));

  const sections = [
    {
      component: media ? () => <DetailSection media={media} /> : NotFoundSection,
      scroll: false,
    },
  ];

  return <PageSectionsWrapper sections={sections} parent="media-details" />;
};

export default MediaDetailsMain;
