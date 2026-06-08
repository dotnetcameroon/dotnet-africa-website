import Link from "next/link";

type Props = {
  className?: string;
};

export function Logo({ className }: Props) {
  return (
    <Link
      href="/"
      aria-label=".NET Conf Africa — home"
      className={`flex items-center gap-2.5 font-display font-bold tracking-[-0.02em] ${className ?? ""}`}
    >
      <span className="flex items-center gap-1.5 rounded-xs bg-brand-red px-2.5 py-1 text-[17px] leading-none shadow-[0_0_22px_rgba(224,49,49,0.5)]">
        <span className="size-1.5 rounded-full bg-white" />
        NET
      </span>
      <span className="text-[17px]">Conf Africa</span>
    </Link>
  );
}
