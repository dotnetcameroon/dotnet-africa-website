type Props = {
  num: string;
  label: string;
};

export function SectionTag({ num, label }: Props) {
  return (
    <div className="flex items-center gap-3 font-mono text-eyebrow font-semibold text-brand-red">
      <span className="text-ink-faint">{num} —</span>
      <span>{label}</span>
      <span className="h-px flex-1 max-w-20 bg-line" />
    </div>
  );
}
