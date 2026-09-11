"use client";

import Image from "next/image";
import Link from "next/link";
import {
  LinkedinOutlined,
  MailOutlined,
  PhoneOutlined,
  WhatsAppOutlined,
  InstagramOutlined,
  FacebookOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";
import { FooterData } from "@/data/components/footer/FooterData";
import styles from "./footer.module.css";

const CONTACT_ICONS = {
  linkedin: LinkedinOutlined,
  whatsapp: WhatsAppOutlined,
  instagram: InstagramOutlined,
  facebook: FacebookOutlined,
  location: EnvironmentOutlined,
  email: MailOutlined,
  call: PhoneOutlined,
};

export default function Footer() {
  const { brand, columns, legal, contactLinks = [] } = FooterData;
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

            {contactLinks.length ? (
              <ul className={styles.contactList} aria-label="Contact links">
                {contactLinks.map((item) => {
                  const Icon = CONTACT_ICONS[item.key];
                  if (!Icon) return null;

                  const linkProps = item.external
                    ? {
                        target: "_blank",
                        rel: "noopener noreferrer",
                      }
                    : {};

                  return (
                    <li key={item.key}>
                      <a
                        href={item.href}
                        className={styles.contactLink}
                        aria-label={item.label}
                        {...linkProps}
                      >
                        <Icon className={styles.contactIcon} aria-hidden />
                      </a>
                    </li>
                  );
                })}
              </ul>
            ) : null}
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
