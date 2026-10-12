import { Container } from "@mui/material";
import { ArrowRight, CalendarDays, Folder, Search } from "lucide-react";
import { useLayoutEffect, useMemo, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "../../../ui/button/Button";
import LazyImage from "../../../ui/lazy-image/LazyImage";
import AppLink from "../../../ui/app-link/AppLink";
import GradientScrollAnimation from "../../../ui/gradient-scroll-animation/GradientScrollAnimation";
import { MediaData } from "../../../../data/pages/media/MediaData";
import styles from "./media-list.module.css";

gsap.registerPlugin(ScrollTrigger);

const MediaList = () => {
  const items = Array.isArray(MediaData?.mediaItems) ? MediaData.mediaItems : [];
  const cardRefs = useRef([]);
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = useMemo(() => {
    return ["All", ...new Set(items.map((item) => item.category).filter(Boolean))];
  }, [items]);

  const filteredItems = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return items.filter((item) => {
      const matchesCategory =
        activeCategory === "All" || item.category === activeCategory;
      const matchesQuery =
        !normalizedQuery ||
        [item.title, item.summary, item.description, item.category]
          .filter(Boolean)
          .some((value) => value.toLowerCase().includes(normalizedQuery));

      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, items, query]);

  useLayoutEffect(() => {
    const cards = cardRefs.current.filter(Boolean);
    if (!cards.length) return undefined;

    const ctx = gsap.context(() => {
      cards.forEach((card, index) => {
        gsap.fromTo(
          card,
          { y: 70, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            delay: index * 0.04,
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          },
        );
      });
    });

    return () => ctx.revert();
  }, [filteredItems.length]);

  return (
    <Container maxWidth="xl">
      <section className={styles.mediaSection}>
        <aside className={styles.sidebar}>
          <div className={`${styles.searchBox} bgGlassWGlow`}>
            <Search size={18} />
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search media"
              aria-label="Search media"
            />
          </div>

          <div className={`${styles.categoryBox} bgGlassWGlow`}>
            <h2>Categories</h2>

            <div className={styles.categorySelectWrap}>
              <select
                value={activeCategory}
                onChange={(event) => setActiveCategory(event.target.value)}
                aria-label="Select media category"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            <div className={styles.categoryList}>
              {categories.map((category) => (
                <button
                  type="button"
                  key={category}
                  className={activeCategory === category ? styles.activeCategory : ""}
                  onClick={() => setActiveCategory(category)}
                >
                  <span>›</span>
                  {category}
                </button>
              ))}
            </div>
          </div>
        </aside>

        <div className={styles.cardsColumn}>
          <GradientScrollAnimation>
            <div className={styles.sectionHeader}>
              <h3>Latest from SH Media</h3>
              <p className="description">
                Read concise updates and deeper stories from System Heuristics across AI,
                automation, product design, and data systems.
              </p>
            </div>
          </GradientScrollAnimation>

          {filteredItems.length > 0 ? (
            filteredItems.map((item, index) => (
              <article
                key={item.id}
                ref={(element) => {
                  cardRefs.current[index] = element;
                }}
                className={`${styles.mediaCard} bgGlassWGlow`}
              >
                <AppLink href={`/media/${item.id}`} className={styles.imageLink}>
                  <LazyImage src={item.primaryImage} alt={item.title} />
                </AppLink>

                <div className={styles.cardContent}>
                  <h4>{item.title}</h4>

                  <div className={styles.metaRow}>
                    <span>
                      <CalendarDays size={16} />
                      {item.date}
                    </span>
                    <span>
                      <Folder size={16} />
                      {item.category}
                    </span>
                  </div>

                  <p className="description">{item.summary}</p>

                  <Button href={`/media/${item.id}`}  className={styles.readMoreBtn}>
                    Read More <ArrowRight size={18} />
                  </Button>
                </div>
              </article>
            ))
          ) : (
            <div className={`${styles.emptyState} bgGlassWGlow`}>
              <h3>No media items found</h3>
              <p className="description">Try another search term or category.</p>
            </div>
          )}
        </div>
      </section>
    </Container>
  );
};

export default MediaList;
