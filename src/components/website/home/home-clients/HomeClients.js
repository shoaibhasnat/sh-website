import Image from "next/image";
import { HomeData } from "@/data/pages/home/HomeData";
import shared from "../home-shared.module.css";
import styles from "./home-clients.module.css";

function LogoRow({ items, direction }) {
  const rowClass =
    direction === "left" ? styles.rowLeft : styles.rowRight;

  return (
    <div className={`${styles.row} ${rowClass}`}>
      <div className={styles.rowTrack}>
        {[0, 1].map((copy) => (
          <div key={copy} className={styles.rowItems}>
            {items.map((client) => (
              <a
                key={`${client.name}-${copy}`}
                href={client.website}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.logoCard}
                aria-label={`Open ${client.name} website`}
              >
                <Image
                  src={client.logo}
                  alt=""
                  width={140}
                  height={48}
                  className={styles.logo}
                />
                <span className={styles.logoName}>{client.name}</span>
                <span className={styles.tooltip} role="tooltip">
                  <svg
                    className={styles.tooltipIcon}
                    viewBox="0 0 16 16"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M6.5 3.5H4.2A1.7 1.7 0 0 0 2.5 5.2v6.6A1.7 1.7 0 0 0 4.2 13.5h6.6a1.7 1.7 0 0 0 1.7-1.7V9.5M9.5 2.5H13.5V6.5M7.5 8.5 13.5 2.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Open Website
                </span>
              </a>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function HomeClients() {
  const { clients } = HomeData;

  return (
    <section
      className={`${shared.section} ${shared.sectionAlt} ${styles.section}`}
      aria-labelledby="home-clients-heading"
    >
      <div className={styles.glow} aria-hidden="true" />
      <div className={shared.inner}>
        <div className={`${shared.header} ${styles.header}`}>
          <p className={shared.eyebrow}>{clients.eyebrow}</p>
          <h2 id="home-clients-heading" className={styles.heading}>
            {clients.heading}
          </h2>
          <p className={shared.description}>{clients.description}</p>
        </div>

        <div className={styles.marqueeWrap}>
          <LogoRow items={clients.items} direction="left" />
        </div>
      </div>
    </section>
  );
}
