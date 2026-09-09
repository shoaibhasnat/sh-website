import Image from "next/image";
import { HomeData } from "@/data/pages/home/HomeData";
import shared from "../home-shared.module.css";
import styles from "./home-clients.module.css";

function LogoRow({ items, direction }) {
  const rowClass =
    direction === "left" ? styles.rowLeft : styles.rowRight;

  return (
    <div className={`${styles.row} ${rowClass}`} aria-hidden="true">
      <div className={styles.rowTrack}>
        {[0, 1].map((copy) => (
          <div key={copy} className={styles.rowItems}>
            {items.map((client) => (
              <div key={`${client.name}-${copy}`} className={styles.logoCard}>
                <Image
                  src={client.logo}
                  alt=""
                  width={160}
                  height={64}
                  className={styles.logo}
                />
                <span className={styles.logoName}>{client.name}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function HomeClients() {
  const { clients } = HomeData;
  const mid = Math.ceil(clients.items.length / 2);
  const topRow = clients.items.slice(0, mid);
  const bottomRow = clients.items.slice(mid);

  return (
    <section
      className={`${shared.section} ${shared.sectionAlt} ${styles.section}`}
      aria-labelledby="home-clients-heading"
    >
      <div className={styles.glow} aria-hidden="true" />
      <div className={shared.inner}>
        <div className={styles.layout}>
          <div className={styles.copy}>
            <p className={shared.eyebrow}>{clients.eyebrow}</p>
            <h2 id="home-clients-heading" className={styles.heading}>
              {clients.heading}
            </h2>
            <p className={shared.description}>{clients.description}</p>
          </div>

          <div className={styles.marqueeWrap}>
            <LogoRow items={topRow} direction="left" />
            <LogoRow
              items={bottomRow.length ? bottomRow : topRow}
              direction="right"
            />
          </div>
        </div>

        <ul className={styles.srOnly}>
          {clients.items.map((client) => (
            <li key={client.name}>{client.name}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
