"use client";

import { ArrowRight, Code2, PlayCircle, Sparkles } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Button } from "@/components/ui/Button";
import { Chip } from "@/components/ui/Chip";
import { Magnetic } from "@/components/ui/Magnetic";
import { HeroCanvas } from "@/components/effects/HeroCanvas";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const chip1Y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const chip2Y = useTransform(scrollYProgress, [0, 1], [0, 300]);

  return (
    <header
      ref={ref}
      className="relative flex min-h-screen flex-col justify-center overflow-hidden pt-[140px] pb-20"
    >
      <HeroCanvas />

      {/* veil */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          background: `
            radial-gradient(60% 55% at 80% 18%, rgba(224,49,49,.30), transparent 70%),
            radial-gradient(55% 50% at 8% 92%, rgba(27,122,75,.28), transparent 70%),
            radial-gradient(70% 70% at 50% 52%, transparent 30%, rgba(11,10,10,.55) 78%, rgba(11,10,10,.92) 100%)`,
        }}
      />

      {/* floating chips */}
      <motion.div
        style={{ y: chip1Y, rotate: -8 }}
        className="absolute left-[6%] top-[13%] z-[3] will-change-transform"
      >
        <Chip>
          <Code2 className="size-3.5" strokeWidth={2} /> C# 14
        </Chip>
      </motion.div>
      <motion.div
        style={{ y: chip2Y, rotate: 7 }}
        className="absolute bottom-[24%] right-[5%] z-[3] will-change-transform"
      >
        <Chip>
          <Sparkles className="size-3.5 text-brand-gold" strokeWidth={2} /> .NET 10
        </Chip>
      </motion.div>

      <div className="container-page relative z-[3]">
        <div className="grid grid-cols-12 items-end gap-0">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="col-span-12 mb-7 inline-flex w-max items-center gap-2.5 self-start rounded-pill border border-brand-red/35 bg-brand-red/[0.12] px-4 py-2 text-eyebrow font-semibold text-white shadow-[0_0_26px_rgba(224,49,49,0.25)] md:col-span-7"
          >
            <span className="size-1.5 animate-[pulse-dot_2s_infinite] rounded-full bg-brand-red shadow-[0_0_10px_var(--color-brand-red)]" />
            NOV 24–26, 2026 · JOHANNESBURG
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="col-span-12 m-0 font-display text-display-2xl font-bold lg:col-span-10"
          >
            <span className="block">Where Africa</span>
            <span className="block pl-[0.13em]">
              builds with{" "}
              <span className="relative text-brand-gold [text-shadow:0_2px_24px_rgba(0,0,0,.65),0_0_50px_rgba(242,169,0,.35)]">
                .NET
              </span>
            </span>
          </motion.h1>

          <motion.aside
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
            className="col-span-12 col-start-1 row-start-3 mt-8 max-w-[330px] justify-self-end rounded-lg p-5 text-right md:col-span-5 md:col-start-8 md:row-start-2 md:mt-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(11,10,10,0), rgba(11,10,10,0.35))",
              backdropFilter: "blur(2px)",
            }}
          >
            <p className="text-[15.5px] leading-[1.6] text-ink [text-shadow:0_1px_12px_rgba(0,0,0,.6)]">
              Three days of talks, workshops, and community — developers, tech
              leaders, and Microsoft MVPs from across the continent.
            </p>
            <ul className="mt-4 flex flex-col items-end gap-1.5 font-mono text-[12.5px]">
              {[
                { c: "var(--color-brand-red)", t: "1,200+ builders" },
                { c: "var(--color-brand-green)", t: "25 countries" },
                { c: "var(--color-brand-gold)", t: "2 tracks · 48 sessions" },
              ].map((m) => (
                <li key={m.t} className="flex items-center gap-2.5">
                  <span
                    className="size-1.5 rounded-full"
                    style={{ background: m.c, boxShadow: `0 0 8px ${m.c}` }}
                  />
                  {m.t}
                </li>
              ))}
            </ul>
          </motion.aside>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
            className="col-span-12 mt-12 flex flex-wrap items-center gap-4 md:col-span-8"
          >
            <Magnetic>
              <Button href="#register" variant="primary">
                Register now <ArrowRight className="size-4" strokeWidth={2} />
              </Button>
            </Magnetic>
            <Button href="#" variant="ghost">
              <PlayCircle className="size-4" strokeWidth={2} /> Watch 2025 recap
            </Button>
          </motion.div>
        </div>
      </div>

      {/* editorial markers */}
      <div className="absolute bottom-7 left-6 z-[3] flex flex-col gap-1 font-mono text-mono-sm text-ink-faint">
        <span>/ 01</span>
        <span>HOME</span>
      </div>
      <div
        className="absolute bottom-7 right-7 z-[3] flex items-center gap-3.5 font-mono text-[11px] tracking-[0.2em] text-ink-dim"
        style={{ writingMode: "vertical-rl" }}
      >
        SCROLL
        <span className="block h-12 w-px animate-[scroll-cue_2s_infinite] bg-gradient-to-b from-ink-dim to-transparent" />
      </div>
    </header>
  );
}
