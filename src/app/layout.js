import { Quicksand } from "next/font/google";
import "./globals.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ConfigProvider } from "antd";
import { colors, cssVariables, fonts } from "./variables";
import { Constants } from "@/utils/Constants";
import JsonLd from "@/utils/seo/JsonLd";
import {
  organizationSchema,
  serviceSchema,
  siteNavigationSchema,
  websiteSchema,
} from "@/utils/seo/schemas";
import {
  DEFAULT_DESCRIPTION,
  PRIMARY_KEYWORDS,
  SITE_NAME,
  SITE_URL,
} from "@/utils/seo/siteSeo";

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-quicksand",
});

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Best Software Company for AI Automation & Custom Software`,
    template: `%s | ${SITE_NAME}`,
  },
  description: DEFAULT_DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: PRIMARY_KEYWORDS,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "technology",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/favicon/favicon.ico", sizes: "48x48" },
      { url: "/favicon/favicon.svg", type: "image/svg+xml" },
      {
        url: "/favicon/favicon-96x96.png",
        sizes: "96x96",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "/favicon/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
  manifest: "/favicon/site.webmanifest",
  alternates: {
    canonical: SITE_URL,
    types: {
      "application/xml": `${SITE_URL}/sitemap.xml`,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} | Best Software Company for AI Automation & Custom Software`,
    description: DEFAULT_DESCRIPTION,
    images: [
      {
        url: "/images/og/system-heuristics-og.png",
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} — AI automation and custom software company`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | Best Software Company for AI Automation`,
    description: DEFAULT_DESCRIPTION,
    images: ["/images/og/system-heuristics-og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: {
    google: "br2IDEsEOGnMfp-l0IQVJXuunr5q-mGucJ4vQtHhhGs",
  },
  other: {
    "geo.region": "PK",
    "revisit-after": "7 days",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${quicksand.variable} ${quicksand.className}`}
      style={cssVariables}
    >
      <body>
        <JsonLd
          data={[
            organizationSchema(),
            websiteSchema(),
            siteNavigationSchema(),
            serviceSchema(),
          ]}
        />
        <AntdRegistry>
          <ConfigProvider
            theme={{
              token: {
                fontFamily: fonts.primary,
                colorPrimary: colors.primary,
              },
            }}
          >
            {children}
          </ConfigProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}
