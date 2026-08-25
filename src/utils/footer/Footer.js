import Image from "next/image";
import Link from "next/link";
import { FooterData } from "@/data/components/footer/FooterData";
import styles from "./footer.module.css";

export default function Footer() {
  const { brand, columns, legal } = FooterData;
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.gridOverlay} aria-hidden="true" />

      <div className={styles.inner}>
        <div className={styles.top}>
          <div className={styles.brandCol}>
            <Link
              href={brand.href}
              className={styles.brand}
              aria-label={brand.name}
            >
              <span className={styles.logoWrap}>
                <Image
                  src={brand.logo.src}
                  alt={brand.logo.alt}
                  width={brand.logo.width}
                  height={brand.logo.height}
                  className={styles.logo}
                />
              </span>
              <span className={styles.brandName}>{brand.name}</span>
            </Link>

            <p className={styles.tagline}>{brand.tagline}</p>
            <p className={styles.description}>{brand.description}</p>
          </div>

          <div className={styles.columns}>
            {columns.map((column) => (
              <nav
                key={column.title}
                className={styles.column}
                aria-label={column.title}
              >
                <h2 className={styles.columnTitle}>{column.title}</h2>
                <ul className={styles.linkList}>
                  {column.links.map(({ label, href }) => (
                    <li key={`${column.title}-${label}`}>
                      <Link href={href} className={styles.link}>
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            {`© ${year} ${legal.companyName}. All rights reserved.`}
          </p>

          <ul className={styles.legalList}>
            {legal.links.map(({ label, href }) => (
              <li key={href}>
                <Link href={href} className={styles.legalLink}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
