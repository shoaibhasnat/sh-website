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
                title="Open Website"
                aria-label={`Open ${client.name} website`}
                data-tooltip="Open Website"
              >
                <Image
                  src={client.logo}
                  alt=""
                  width={140}
                  height={48}
                  className={styles.logo}
                />
                <span className={styles.logoName}>{client.name}</span>
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
