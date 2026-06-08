"use client";

import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionTag } from "@/components/ui/SectionTag";
import { accentClasses, schedule } from "@/data/schedule";
import { cn } from "@/lib/cn";

export function Schedule() {
  const [dayIdx, setDayIdx] = useState(0);
  const day = schedule[dayIdx];

  return (
    <section id="schedule" className="container-page relative py-[130px]">
      <Reveal>
        <SectionTag num="04" label="SCHEDULE" />
      </Reveal>

      <div className="my-11 flex flex-wrap items-end justify-between gap-5">
        <Reveal as="h2" className="font-display text-display-lg font-bold">
          Three days,
          <br />
          two tracks
        </Reveal>
        <Reveal delay={0.08}>
          <div
            role="tablist"
            aria-label="Conference days"
            className="flex gap-1.5 rounded-md border border-line bg-bg-2 p-1.5"
          >
            {schedule.map((d, i) => (
              <button
                key={d.label}
                role="tab"
                aria-selected={i === dayIdx}
                onClick={() => setDayIdx(i)}
                className={cn(
                  "rounded-[10px] px-4 py-2.5 text-[13.5px] font-semibold transition-colors duration-200",
                  i === dayIdx
                    ? "bg-brand-red text-white"
                    : "text-ink-dim hover:text-ink",
                )}
              >
                {d.label} · {d.date}
              </button>
            ))}
          </div>
        </Reveal>
      </div>

      <ol>
        {day.sessions.map((r, i) => {
          const accent = accentClasses[r.accent];
          return (
            <li
              key={`${dayIdx}-${i}`}
              className="group relative grid items-center gap-6 border-t border-line py-7 pl-2 pr-2 transition-all duration-300 last:border-b hover:bg-bg-2 hover:pl-5 md:grid-cols-[96px_130px_1fr_auto]"
            >
              <span
                aria-hidden
                className="absolute inset-y-0 left-0 w-0 bg-brand-red transition-all duration-300 group-hover:w-[3px]"
              />
              <div className="font-mono text-[15px] font-semibold">
                {r.time}
                <small className="mt-1 block text-[11px] font-normal text-ink-faint">
                  {r.duration}
                </small>
              </div>
              <div
                className={cn(
                  "hidden w-max rounded-pill px-3 py-1.5 font-mono text-[11px] font-semibold tracking-[0.1em] md:inline-flex",
                  accent.bgSoft,
                  accent.text,
                )}
              >
                {r.tag}
              </div>
              <div className="font-display text-h3 font-semibold">
                {r.title}
                <small className="mt-1 block font-sans text-[13.5px] font-normal text-ink-dim">
                  {r.speaker}
                </small>
              </div>
              <div
                aria-hidden
                className="hidden size-10 -translate-x-2 items-center justify-center rounded-full border border-line opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:border-brand-red group-hover:bg-brand-red group-hover:opacity-100 md:flex"
              >
                <ArrowRight className="size-4 text-white" strokeWidth={2} />
              </div>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
