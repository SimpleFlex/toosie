"use client";

import { animate, useInView } from "motion/react";
import { useEffect, useRef } from "react";
import type { Stat } from "@/data/content";

type Props = Pick<Stat, "to" | "prefix" | "suffix" | "decimals">;

/** Server-renders the final number (good for SEO), then counts up when seen. */
export default function CountUp({ to, prefix = "", suffix = "", decimals = 0 }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const seen = useInView(ref, { once: true });

  useEffect(() => {
    const el = ref.current;
    if (!seen || !el) return;
    const controls = animate(0, to, {
      duration: 1.6,
      ease: "easeOut",
      onUpdate: (v) => { el.textContent = `${prefix}${v.toFixed(decimals)}${suffix}`; },
    });
    return () => controls.stop();
  }, [seen, to, prefix, suffix, decimals]);

  return <span ref={ref}>{`${prefix}${to.toFixed(decimals)}${suffix}`}</span>;
}
