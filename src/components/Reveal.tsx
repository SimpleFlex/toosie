"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

interface Props { children: ReactNode; delay?: number; className?: string }

/** Fades and lifts content into view once, as it scrolls on screen. */
export default function Reveal({ children, delay = 0, className }: Props) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay, ease: [0.2, 0.8, 0.2, 1] }}
    >
      {children}
    </motion.div>
  );
}
