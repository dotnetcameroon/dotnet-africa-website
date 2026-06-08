import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Magnetic } from "@/components/ui/Magnetic";
import { Reveal } from "@/components/ui/Reveal";

export function CTA() {
  return (
    <Reveal>
      <section
        id="register"
        className="container-page relative z-[5] my-20 overflow-hidden rounded-2xl px-10 py-24 text-center"
        style={{
          background:
            "linear-gradient(120deg, var(--color-brand-red), var(--color-brand-green) 80%)",
        }}
      >
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-50"
          style={{
            background:
              "radial-gradient(60% 100% at 75% 20%, rgba(242,169,0,0.5), transparent 60%)",
          }}
        />
        <span
          aria-hidden
          className="bg-grain pointer-events-none absolute inset-0 opacity-10 mix-blend-overlay"
        />

        <div className="relative z-[2]">
          <span className="mb-5 inline-flex items-center gap-2 rounded-pill border border-white/25 bg-black/25 px-4 py-2 font-mono text-eyebrow font-semibold text-white">
            EARLY BIRD ENDS AUG 31
          </span>
          <h2 className="mb-4 font-display text-display-xl font-bold text-white">
            Claim your seat
            <br />
            at the table
          </h2>
          <p className="mx-auto mb-9 max-w-[560px] text-body-lg leading-[1.55] text-white/90">
            Join 1,200+ developers in Johannesburg this November. Tickets are
            limited — and the early-bird window closes soon.
          </p>
          <div className="flex flex-wrap justify-center gap-3.5">
            <Magnetic>
              <Button href="#" variant="white">
                Get your ticket <ArrowRight className="size-4" strokeWidth={2} />
              </Button>
            </Magnetic>
            <Button
              href="#"
              variant="ghost"
              className="border-white/60 bg-transparent text-white hover:border-white"
            >
              Group rates
            </Button>
          </div>
        </div>
      </section>
    </Reveal>
  );
}
