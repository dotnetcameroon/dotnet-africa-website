import { ArrowRight, Mic } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionTag } from "@/components/ui/SectionTag";
import { speakers, type AccentColor } from "@/data/speakers";

const roleColors: Record<AccentColor, string> = {
  red: "text-brand-red",
  green: "text-brand-green",
  gold: "text-brand-gold",
  teal: "text-brand-teal",
};

export function Speakers() {
  return (
    <section id="speakers" className="container-page relative py-[130px]">
      <Reveal>
        <SectionTag num="03" label="SPEAKERS" />
      </Reveal>

      <div className="my-14 flex flex-wrap items-end justify-between gap-5">
        <Reveal as="h2" className="font-display text-display-lg font-bold">
          Learn from
          <br />
          the best
        </Reveal>
        <Reveal delay={0.08}>
          <Button href="#" variant="ghost">
            View all 60+ <ArrowRight className="size-4" strokeWidth={2} />
          </Button>
        </Reveal>
      </div>

      <div
        className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-6 pt-1.5 [scrollbar-color:var(--color-line)_transparent]"
        style={{
          marginInline: "calc(-1 * max(24px, (100vw - 1240px) / 2))",
          paddingInline: "max(24px, (100vw - 1240px) / 2)",
        }}
      >
        {speakers.map((s) => (
          <article
            key={s.name}
            className="snap-start shrink-0 basis-[310px] overflow-hidden rounded-xl border border-line bg-bg-2 transition-all duration-500 hover:-translate-y-2 hover:border-line-strong"
            style={{ transitionTimingFunction: "var(--ease-out-expo)" }}
          >
            <div
              className="relative flex h-[230px] items-end overflow-hidden p-[18px]"
              style={{
                background: `linear-gradient(150deg, ${s.gradient[0]}, ${s.gradient[1]})`,
              }}
            >
              <span
                aria-hidden
                className="absolute inset-0 grid place-items-center font-display text-[60px] font-bold text-white/90"
              >
                {s.initials}
              </span>
              <Badge>{s.badge}</Badge>
            </div>
            <div className="p-5">
              <h4 className="mb-1 font-display text-h3 font-semibold">{s.name}</h4>
              <div className={`mb-3.5 text-[13.5px] font-medium ${roleColors[s.accent]}`}>
                {s.role}
              </div>
              <div className="flex items-center gap-2 text-[13.5px] text-ink-dim">
                <Mic className="size-3.5" strokeWidth={2} />
                {s.topic}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
