import type { ReactNode } from "react";
import { SectionTag } from "@/components/ui/SectionTag";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";

type Feature = {
  num: string;
  icon: ReactNode;
  iconTone: "red" | "green" | "gold" | "teal";
  title: string;
  body: string;
  footnote?: string;
  size: "big" | "tall";
};

const features: Feature[] = [
  {
    num: "01",
    icon: "◢",
    iconTone: "red",
    title: "World-class talks",
    body: "Sessions on .NET 10, cloud-native APIs, AI with Semantic Kernel, and MAUI — led by MVPs and the engineers who build the platform.",
    footnote: "→ 48 sessions across 2 tracks",
    size: "big",
  },
  {
    num: "02",
    icon: "⬡",
    iconTone: "green",
    title: "Hands-on workshops",
    body: "Half-day deep-dives. Bring a laptop, leave with running code.",
    size: "tall",
  },
  {
    num: "03",
    icon: "✦",
    iconTone: "gold",
    title: "A growing community",
    body: "Meet organizers & MVPs from 25+ countries. Where the next user group is born.",
    size: "tall",
  },
  {
    num: "04",
    icon: "◍",
    iconTone: "teal",
    title: "The hallway track",
    body: "The conversations between sessions are where careers turn and collaborations start. We design the space for serendipity, not just schedules.",
    footnote: "→ Johannesburg · Nov 2026",
    size: "big",
  },
];

const tones: Record<Feature["iconTone"], string> = {
  red: "bg-brand-red/15 text-brand-red",
  green: "bg-brand-green/15 text-brand-green",
  gold: "bg-brand-gold/15 text-brand-gold",
  teal: "bg-brand-teal/15 text-brand-teal",
};

function FeatureCard({ f, delay = 0 }: { f: Feature; delay?: number }) {
  const isBig = f.size === "big";
  return (
    <Reveal
      delay={delay}
      className={cn(
        "group relative overflow-hidden rounded-xl border border-line bg-bg-2 p-8 transition-all duration-500",
        "hover:-translate-y-1.5 hover:border-line-strong",
        isBig
          ? "col-span-12 flex min-h-[340px] flex-col justify-between md:col-span-6"
          : "col-span-12 md:col-span-3",
      )}
    >
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(120% 120% at 0% 0%, rgba(224,49,49,.12), transparent 55%)",
        }}
      />
      <div className="relative">
        <div className="font-mono text-[13px] text-ink-faint">{f.num}</div>
        <div
          className={cn(
            "mb-5 mt-4 grid size-[54px] place-items-center rounded-md text-[26px]",
            tones[f.iconTone],
          )}
        >
          {f.icon}
        </div>
        <h3
          className={cn(
            "mb-3 font-display font-semibold tracking-[-0.01em]",
            isBig ? "text-[34px] leading-[1.05]" : "text-h2",
          )}
        >
          {f.title}
        </h3>
        <p className="text-body-sm leading-[1.6] text-ink-dim">{f.body}</p>
      </div>
      {f.footnote && (
        <div className="relative mt-6 font-mono text-[13px] text-ink-faint">
          {f.footnote}
        </div>
      )}
    </Reveal>
  );
}

export function WhyAttend() {
  return (
    <section
      id="why"
      className="container-page relative py-[130px]"
    >
      <Reveal>
        <SectionTag num="02" label="WHY ATTEND" />
      </Reveal>

      <div className="my-14 grid items-end gap-10 md:my-[70px] md:grid-cols-2">
        <Reveal as="h2" className="font-display text-display-lg font-bold">
          Built for the
          <br />
          <span className="text-ink-faint">African</span> .NET community
        </Reveal>
        <Reveal delay={0.08} as="p" className="self-end text-[17px] leading-[1.65] text-ink-dim">
          Whether you ship production systems or you&apos;re writing your first
          line of C#, there&apos;s a track, a room, and a hallway conversation
          for you.
        </Reveal>
      </div>

      <div className="grid grid-cols-12 gap-4">
        {features.map((f, i) => (
          <FeatureCard key={f.num} f={f} delay={i * 0.08} />
        ))}
      </div>
    </section>
  );
}
