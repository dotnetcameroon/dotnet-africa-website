"use client";

import { animate, useInView, useMotionValue, useTransform } from "motion/react";
import { useEffect, useRef } from "react";

type Stat = {
  value: number;
  suffix?: string;
  label: string;
};

const stats: Stat[] = [
  { value: 1200, suffix: "+", label: "Attendees" },
  { value: 60, suffix: "+", label: "Speakers" },
  { value: 48, label: "Sessions" },
  { value: 25, label: "Countries" },
  { value: 3, label: "Days" },
];

function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => `${Math.floor(v).toLocaleString()}${suffix}`);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(count, value, {
      duration: 1.2,
      ease: [0.16, 1, 0.3, 1],
    });
    const unsub = rounded.on("change", (v) => {
      if (ref.current) ref.current.textContent = v;
    });
    return () => {
      controls.stop();
      unsub();
    };
  }, [inView, value, count, rounded]);

  return <span ref={ref}>0{suffix}</span>;
}

export function StatsBand() {
  return (
    <section
      aria-label="Conference statistics"
      className="relative z-[5] overflow-hidden py-[90px] -skew-y-[2.4deg]"
      style={{
        background:
          "linear-gradient(100deg, var(--color-brand-red), var(--color-brand-red-dim) 45%, var(--color-brand-green))",
      }}
    >
      <span
        aria-hidden
        className="bg-grain pointer-events-none absolute inset-0 opacity-10 mix-blend-overlay"
      />
      <ul className="container-page grid grid-cols-2 gap-5 skew-y-[2.4deg] md:grid-cols-5">
        {stats.map((s) => (
          <li key={s.label} className="text-white">
            <div className="font-display text-display-lg font-bold tracking-[-0.03em] leading-none">
              <Counter value={s.value} suffix={s.suffix} />
            </div>
            <div className="mt-2 text-body-sm font-medium opacity-85">{s.label}</div>
          </li>
        ))}
      </ul>
    </section>
  );
}
