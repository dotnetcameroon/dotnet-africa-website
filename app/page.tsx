import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { GrainOverlay } from "@/components/effects/GrainOverlay";
import { CustomCursor } from "@/components/effects/CustomCursor";
import { Hero } from "@/components/home/Hero";
import { Marquee } from "@/components/home/Marquee";
import { WhyAttend } from "@/components/home/WhyAttend";
import { StatsBand } from "@/components/home/StatsBand";
import { Speakers } from "@/components/home/Speakers";
import { Schedule } from "@/components/home/Schedule";
import { CTA } from "@/components/home/CTA";

const SITE_URL = "https://africa.djoufson.com";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}#organization`,
      name: ".NET Conf Africa",
      url: SITE_URL,
      logo: `${SITE_URL}/favicon.ico`,
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}#website`,
      url: SITE_URL,
      name: ".NET Conf Africa",
      publisher: { "@id": `${SITE_URL}#organization` },
      inLanguage: "en",
    },
    {
      "@type": "Event",
      "@id": `${SITE_URL}#event-2026`,
      name: ".NET Conf Africa 2026",
      description:
        "Three days of talks, workshops, and community for .NET developers across Africa.",
      startDate: "2026-11-24T09:00:00+02:00",
      endDate: "2026-11-26T17:00:00+02:00",
      eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
      eventStatus: "https://schema.org/EventScheduled",
      url: SITE_URL,
      image: [`${SITE_URL}/opengraph-image`],
      location: {
        "@type": "Place",
        name: "Johannesburg",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Johannesburg",
          addressCountry: "ZA",
        },
      },
      organizer: { "@id": `${SITE_URL}#organization` },
      inLanguage: "en",
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <GrainOverlay />
      <CustomCursor />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <WhyAttend />
        <StatsBand />
        <Speakers />
        <Schedule />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
