import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type Props = {
  children: ReactNode;
  className?: string;
};

export function Badge({ children, className }: Props) {
  return (
    <span
      className={cn(
        "relative z-[2] rounded-pill bg-black/45 px-2.5 py-1.5 font-mono text-[11px] font-semibold tracking-[0.1em] backdrop-blur-sm text-white",
        className,
      )}
    >
      {children}
    </span>
  );
}
