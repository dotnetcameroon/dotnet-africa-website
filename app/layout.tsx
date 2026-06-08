import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
});

const SITE_URL = "https://africa.djoufson.com";
const SITE_NAME = ".NET Conf Africa";
const TITLE = ".NET Conf Africa 2026 — Where Africa builds with .NET";
const DESCRIPTION =
  "Three days of talks, workshops, and community for .NET developers in Africa. Join 1,200+ builders from 25 countries in Johannesburg, Nov 24–26, 2026.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s | .NET Conf Africa 2026",
  },
  description: DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    ".NET",
    "C#",
    ".NET Conf",
    ".NET Conf Africa",
    "Africa",
    "Johannesburg",
    "Microsoft",
    "developer conference",
    "Blazor",
    "MAUI",
    ".NET 10",
    "Semantic Kernel",
    "AI",
    "cloud-native",
  ],
  authors: [{ name: ".NET Conf Africa Organizers" }],
  creator: ".NET Conf Africa",
  publisher: ".NET Conf Africa",
  category: "technology",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: TITLE,
    description: DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
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
  icons: {
    icon: "/favicon.ico",
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0b0a0a" },
    { media: "(prefers-color-scheme: dark)", color: "#0b0a0a" },
  ],
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${sans.variable} ${mono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
