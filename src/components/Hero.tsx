"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { receiptLines } from "@/data/content";

const ease: [number, number, number, number] = [0.2, 0.8, 0.2, 1];
const fade = (delay: number) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease },
});

export default function Hero() {
  return (
    <div className="w hero">
      <div>
        <motion.div className="open" {...fade(0)}>
          <span className="dot" />
          Open for growth and BD mandates
        </motion.div>
        <h1>
          {["Hi,", "I’m", "", "", "Toosie."].map((word, i) => (
            <span key={word} className="mk">
              <motion.span
                initial={{ y: "105%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 + i * 0.09, ease }}
              >
                {word}
              </motion.span>{" "}
            </span>
          ))}
        </h1>
        <motion.p {...fade(0.45)}>
          I grow Web3 communities, write the content that explains products, and
          open the doors that turn attention into partners. BSc Marketing, three
          years in the trenches, and receipts for all of it.
        </motion.p>
        <motion.div {...fade(0.6)}>
          <a className="btn" href="#brief">
            Send me your brief
          </a>
          <a className="btn g" href="#reel">
            Watch the reel
          </a>
        </motion.div>
      </div>

      <div className="side">
        <motion.figure
          className="photo"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease }}
        >
          <Image
            src="/img/toosie.jpg"
            alt="Toosie, Web3 growth marketer"
            fill
            priority
            sizes="(max-width: 700px) 92px, 380px"
          />
        </motion.figure>
        <div className="rc" aria-label="Results receipt">
          <h4>Toosie growth receipt</h4>
          {receiptLines.map(([label, value], i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.8 + i * 0.4 }}
            >
              <span>{label}</span>
              <b>{value}</b>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
