"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { stages } from "@/data/content";

export default function Plan() {
  const [active, setActive] = useState(0);
  const stage = stages[active];

  return (
    <section id="plan" className="s0">
      <div className="w plan">
        <div>
          <h2>Plan it with me.</h2>
          <p className="sub">Pick where your project is. I’ll show how I would start.</p>
          {stages.map((s, i) => (
            <button key={s.name} type="button" className="opt" aria-pressed={active === i} onClick={() => setActive(i)}>
              {s.name}<small>{s.hint}</small>
            </button>
          ))}
        </div>
        <div className="out" aria-live="polite">
          <AnimatePresence mode="wait">
            <motion.div
              key={stage.name}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
            >
              <h3>{stage.name} plan</h3>
              <ol>{stage.steps.map((step) => <li key={step}>{step}</li>)}</ol>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
