"use client";

import { motion, useScroll } from "motion/react";
import { useEffect, useState } from "react";
import { site } from "@/lib/site";
import { Crown, Moon, Sun, TgIcon, XIcon } from "./Icons";

const links = [["Reel", "#reel"], ["Work", "#work"], ["Numbers", "#proof"], ["Plan it", "#plan"], ["Process", "#process"]];

export default function Nav() {
  const { scrollYProgress } = useScroll();
  const [light, setLight] = useState(false);

  useEffect(() => setLight(document.documentElement.dataset.theme === "light"), []);

  const toggle = () => {
    const next = !light;
    setLight(next);
    document.documentElement.dataset.theme = next ? "light" : "dark";
    try { localStorage.setItem("theme", next ? "light" : "dark"); } catch {}
  };

  return (
    <nav aria-label="Main">
      <div className="w">
        <a className="logo" href="#top"><Crown />Toosie</a>
        <div className="nl">
          {links.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
        </div>
        <div className="sw">
          <button id="tg" type="button" onClick={toggle} aria-label={light ? "Switch to dark mode" : "Switch to light mode"}>
            {light ? <Moon /> : <Sun />}
          </button>
        </div>
        <div className="soc">
          <a href={site.x} target="_blank" rel="noopener noreferrer" aria-label="Toosie on X"><XIcon /></a>
          <a href={site.telegram} target="_blank" rel="noopener noreferrer" aria-label="Toosie on Telegram"><TgIcon /></a>
        </div>
        <a className="btn" href="#brief">Send a brief</a>
      </div>
      <motion.span className="progress" style={{ scaleX: scrollYProgress }} />
    </nav>
  );
}
