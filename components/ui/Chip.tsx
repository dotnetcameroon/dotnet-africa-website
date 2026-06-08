import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type Props = {
  children: ReactNode;
  className?: string;
};

export function Chip({ children, className }: Props) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-md border border-line bg-glass px-4 py-2.5 font-mono text-[13px] font-semibold backdrop-blur-md shadow-glass",
        className,
      )}
    >
      {children}
    </span>
  );
}
