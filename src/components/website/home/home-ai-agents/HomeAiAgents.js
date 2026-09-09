import Image from "next/image";
import { HomeData } from "@/data/pages/home/HomeData";
import { PrimaryButton } from "@/utils/buttons";
import shared from "../home-shared.module.css";
import styles from "./home-ai-agents.module.css";

export default function HomeAiAgents() {
  const { aiAgents } = HomeData;

  return (
    <section
      id="ai-agents"
      className={`${shared.section} ${shared.sectionAlt} ${styles.section}`}
      aria-labelledby="home-ai-agents-heading"
    >
      <div className={shared.inner}>
        <div className={shared.header}>
          <p className={shared.eyebrow}>{aiAgents.eyebrow}</p>
          <h2 id="home-ai-agents-heading" className={shared.heading}>
            {aiAgents.heading}
          </h2>
          <p className={shared.description}>{aiAgents.description}</p>
        </div>

        <ul className={styles.grid}>
          {aiAgents.items.map((item, index) => (
            <li key={item.title} className={styles.card}>
              <div className={styles.media}>
                <Image
                  src={item.image.src}
                  alt={item.image.alt}
                  fill
                  sizes="(max-width: 980px) 100vw, 33vw"
                  className={styles.image}
                />
              </div>
              <div className={styles.body}>
                <span className={styles.index} aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.boldLine}>{item.boldLine}</p>
                <p className={styles.cardCopy}>{item.description}</p>
              </div>
            </li>
          ))}
        </ul>

        <div className={styles.cta}>
          <PrimaryButton
            text={aiAgents.cta.label}
            href={aiAgents.cta.href}
            height={48}
          />
        </div>
      </div>
    </section>
  );
}
