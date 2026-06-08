"use client";

import { useRef, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  strength?: number;
  className?: string;
};

/**
 * Wrap any element to apply a magnetic hover effect — the inner content
 * translates toward the cursor. Kept as a plain DOM transform to avoid
 * fighting other transforms inside the slot.
 */
export function Magnetic({ children, strength = 0.3, className }: Props) {
  const ref = useRef<HTMLSpanElement>(null);

  function onMove(e: React.MouseEvent<HTMLSpanElement>) {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left - r.width / 2) * strength;
    const y = (e.clientY - r.top - r.height / 2) * (strength * 1.3);
    el.style.transform = `translate(${x}px, ${y}px)`;
  }

  function onLeave() {
    if (ref.current) ref.current.style.transform = "";
  }

  return (
    <span
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={className}
      style={{ display: "inline-block", transition: "transform .25s ease-out" }}
    >
      {children}
    </span>
  );
}
