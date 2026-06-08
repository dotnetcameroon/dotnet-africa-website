const TOKENS: Array<{ label: string; fill: boolean }> = [
  { label: "Minimal APIs", fill: true },
  { label: "Blazor", fill: false },
  { label: "Semantic Kernel", fill: true },
  { label: "MAUI", fill: false },
  { label: "Native AOT", fill: true },
  { label: "Aspire", fill: false },
  { label: "Cloud Native", fill: true },
  { label: "F#", fill: false },
];

function Track() {
  return (
    <div className="flex shrink-0 items-center">
      {TOKENS.map((t) => (
        <span
          key={t.label}
          className="flex items-center gap-[34px] px-[34px] font-display text-[34px] font-bold tracking-[-0.02em]"
          style={
            t.fill
              ? { color: "var(--color-ink)" }
              : {
                  color: "transparent",
                  WebkitTextStroke: "1px rgba(255,255,255,0.35)",
                }
          }
        >
          {t.label}
          <span
            aria-hidden
            className="size-2.5 rounded-full bg-brand-red"
            style={{
              WebkitTextStroke: "0",
              boxShadow: "0 0 14px var(--color-brand-red)",
            }}
          />
        </span>
      ))}
    </div>
  );
}

export function Marquee() {
  return (
    <section
      aria-label="Topics covered"
      className="group relative z-[5] overflow-hidden border-y border-line bg-bg-2 py-5"
    >
      <div className="flex w-max animate-[marquee_30s_linear_infinite] group-hover:[animation-play-state:paused]">
        <Track />
        <Track />
      </div>
    </section>
  );
}
