"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { cn } from "@/lib/cn";

const links = [
  { href: "/", label: "Home", exact: true },
  { href: "#schedule", label: "Schedule" },
  { href: "#speakers", label: "Speakers" },
  { href: "#why", label: "Why attend" },
];

export function Nav() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let lastY = 0;
    function onScroll() {
      const y = window.scrollY;
      setHidden(y > lastY && y > 300);
      lastY = y;
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed left-1/2 top-[18px] z-[200] flex w-[min(1240px,calc(100%-36px))] -translate-x-1/2 items-center justify-between rounded-pill border border-line bg-[rgba(15,13,13,0.55)] py-3 pl-[18px] pr-3.5 backdrop-blur-[20px] transition-transform duration-500",
        hidden && "-translate-y-[130%]",
      )}
      style={{ transitionTimingFunction: "var(--ease-out-expo)" }}
    >
      <Logo />
      <div className="hidden gap-1.5 md:flex">
        {links.map((l) => (
          <Link
            key={l.label}
            href={l.href}
            className={cn(
              "rounded-pill px-3.5 py-2 text-[13.5px] font-medium text-ink-dim transition-colors hover:bg-white/[0.06] hover:text-ink",
              l.exact && "bg-white/[0.06] text-ink",
            )}
          >
            {l.label}
          </Link>
        ))}
      </div>
      <Link
        href="#register"
        className="flex items-center gap-1.5 rounded-pill bg-brand-red px-4 py-2.5 text-[13.5px] font-semibold text-white shadow-[0_0_24px_rgba(224,49,49,0.4)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_6px_30px_rgba(224,49,49,0.6)]"
      >
        Register <ArrowRight className="size-3.5" strokeWidth={2.2} />
      </Link>
    </nav>
  );
}
