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

export default function HomePage() {
  return (
    <>
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
