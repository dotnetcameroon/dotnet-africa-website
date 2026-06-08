import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "ghost" | "white";
type Size = "md" | "lg";

const base =
  "inline-flex items-center gap-2.5 rounded-pill font-semibold transition-all duration-300 ease-out-expo whitespace-nowrap";

const sizes: Record<Size, string> = {
  md: "px-5 py-3 text-body-sm",
  lg: "px-7 py-4 text-body",
};

const variants: Record<Variant, string> = {
  primary:
    "bg-brand-red text-white shadow-[0_0_24px_rgba(224,49,49,0.4)] hover:shadow-[0_10px_40px_rgba(224,49,49,0.55)] hover:-translate-y-0.5",
  ghost:
    "border border-line bg-glass backdrop-blur-md text-ink hover:bg-white/10 hover:border-line-strong",
  white:
    "bg-white text-n-900 hover:-translate-y-0.5 hover:scale-[1.02]",
};

type ButtonProps = {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  className?: string;
} & (
  | ({ href: string } & Omit<ComponentProps<typeof Link>, "href" | "children" | "className">)
  | ({ href?: undefined } & Omit<ComponentProps<"button">, "children" | "className">)
);

export function Button({
  variant = "primary",
  size = "lg",
  className,
  children,
  ...rest
}: ButtonProps) {
  const classes = cn(base, sizes[size], variants[variant], className);

  if ("href" in rest && rest.href !== undefined) {
    const { href, ...linkProps } = rest;
    return (
      <Link href={href} className={classes} {...linkProps}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...(rest as ComponentProps<"button">)}>
      {children}
    </button>
  );
}
