"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { reel, type ReelItem } from "@/data/content";

const filters = [["all", "All"], ["thread", "Threads"], ["result", "Results"], ["space", "Spaces"]] as const;
type Filter = (typeof filters)[number][0];
const LIMIT = 12;
const label: Record<ReelItem["kind"], string> = { thread: "Thread", result: "Result", space: "Space" };

function Card({ item }: { item: ReelItem }) {
  return (
    <motion.article
      layout
      className="card"
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      whileHover={{ y: -3 }}
      transition={{ duration: 0.3 }}
    >
      <small>{label[item.kind]}</small>
      <h3>
        {item.href ? (
          <a href={item.href} target="_blank" rel="noopener noreferrer">{item.title}</a>
        ) : (
          item.title
        )}
      </h3>
      <p>{item.sub}</p>
    </motion.article>
  );
}

export default function Reel() {
  const [filter, setFilter] = useState<Filter>("all");
  const [expanded, setExpanded] = useState(false);
  const items = reel.filter((r) => filter === "all" || r.kind === filter);
  const shown = expanded ? items : items.slice(0, LIMIT);

  return (
    <section id="reel">
      <div className="w">
        <h2>Threads, results, spaces.</h2>
        <p className="sub">Tap a thread to read it on X. Result cards show what moved.</p>
        <div className="chips" id="rf" role="group" aria-label="Filter the reel">
          {filters.map(([key, name]) => (
            <button key={key} type="button" className="chip" aria-pressed={filter === key} onClick={() => setFilter(key)}>
              {name}
            </button>
          ))}
        </div>
        <motion.div layout className="reel">
          <AnimatePresence mode="popLayout">
            {shown.map((item) => <Card key={item.kind + item.title} item={item} />)}
          </AnimatePresence>
        </motion.div>
        {items.length > LIMIT && (
          <button type="button" className="btn g" style={{ marginTop: 22 }} onClick={() => setExpanded((e) => !e)}>
            {expanded ? "Show fewer" : `Show all ${items.length}`}
          </button>
        )}
      </div>
    </section>
  );
}
