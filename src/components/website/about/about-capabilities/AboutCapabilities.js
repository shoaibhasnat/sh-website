import { AboutData } from "@/data/pages/about/AboutData";
import shared from "../about-shared.module.css";
import styles from "./about-capabilities.module.css";

function CapabilityIcon({ name }) {
  const common = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.6",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
    className: styles.icon,
  };

  switch (name) {
    case "FundProjectionScreenOutlined":
      return (
        <svg {...common}>
          <rect x="3" y="4" width="18" height="12" rx="2" />
          <path d="M8 20h8M12 16v4" />
          <path d="M7 12l3-3 3 2 4-4" />
        </svg>
      );
    case "RocketOutlined":
      return (
        <svg {...common}>
          <path d="M12 3c3 2 5 5 5 9 0 2-1 4-2 5l-3 1-3-1c-1-1-2-3-2-5 0-4 2-7 5-9z" />
          <path d="M9 14l-3 4M15 14l3 4M10 10h.01M14 10h.01" />
        </svg>
      );
    case "ClusterOutlined":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="2.5" />
          <circle cx="5" cy="7" r="2" />
          <circle cx="19" cy="7" r="2" />
          <circle cx="5" cy="17" r="2" />
          <circle cx="19" cy="17" r="2" />
          <path d="M7 8l3 3M17 8l-3 3M7 16l3-3M17 16l-3-3" />
        </svg>
      );
    case "ApartmentOutlined":
      return (
        <svg {...common}>
          <path d="M4 20h16M7 20V6h6v14M13 10h4v10M9 9h2M9 13h2" />
        </svg>
      );
    case "ApiOutlined":
      return (
        <svg {...common}>
          <path d="M8 12h8M7 8H5a2 2 0 000 4h2M17 8h2a2 2 0 010 4h-2M7 16H5a2 2 0 010-4h2M17 16h2a2 2 0 000-4h-2" />
        </svg>
      );
    case "CodeOutlined":
      return (
        <svg {...common}>
          <path d="M8 8l-4 4 4 4M16 8l4 4-4 4M13 6l-2 12" />
        </svg>
      );
    default:
      return null;
  }
}

export default function AboutCapabilities() {
  const { capabilities } = AboutData;

  return (
    <section
      className={`${shared.section} ${shared.sectionAlt}`}
      aria-labelledby="about-capabilities-heading"
    >
      <div className={shared.inner}>
        <div className={shared.header}>
          <p className={shared.eyebrow}>{capabilities.eyebrow}</p>
          <h2 id="about-capabilities-heading" className={shared.heading}>
            {capabilities.heading}
          </h2>
          <p className={shared.description}>{capabilities.description}</p>
        </div>

        <ul className={styles.grid}>
          {capabilities.items.map((item) => (
            <li key={item.id} className={styles.card}>
              <span className={styles.iconWrap}>
                <CapabilityIcon name={item.icon} />
              </span>
              <h3 className={styles.title}>{item.title}</h3>
              <p className={styles.description}>{item.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
