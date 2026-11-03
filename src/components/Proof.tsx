"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { certificate, receipts, stats, type Receipt } from "@/data/content";
import CountUp from "./CountUp";
import Reveal from "./Reveal";

export default function Proof() {
  const dialog = useRef<HTMLDialogElement>(null);
  const [open, setOpen] = useState<Receipt | null>(null);

  const show = (r: Receipt) => { setOpen(r); dialog.current?.showModal(); };
  const hide = () => dialog.current?.close();

  return (
    <section id="proof" className="s0">
      <div className="w">
        <Reveal>
          <h2>Receipts you can verify.</h2>
          <p className="sub">Numbers from the projects, then what the people I worked with said.</p>
        </Reveal>

        <div className="num">
          {stats.map((s) => (
            <div key={s.label}><b><CountUp {...s} /></b><span>{s.label}</span></div>
          ))}
        </div>

        <div className="shots">
          {receipts.map((r) => (
            <button key={r.src} type="button" className="shot" onClick={() => show(r)}>
              <span className="sq">
                <Image src={r.src} alt={r.caption} fill sizes="(max-width: 560px) 78vw, (max-width: 900px) 50vw, 380px" />
              </span>
              <small>{r.caption}</small>
            </button>
          ))}
        </div>

        <Reveal className="cert">
          <button type="button" className="shot" onClick={() => show(certificate)}>
            <Image src={certificate.src} alt={certificate.caption} width={certificate.w} height={certificate.h} sizes="(max-width: 820px) 100vw, 640px" />
          </button>
          <div>
            <h3>Certified.</h3>
            <p>
              Profunda W3 Academy Cohort Programme, Certificate of Achievement in Project Management and
              Marketing. Presented to Adeola Oluwatosin (brand name: Toosie). Issued February 4, 2026.
            </p>
          </div>
        </Reveal>
      </div>

      <dialog ref={dialog} onClick={(e) => e.target === dialog.current && hide()} onClose={() => setOpen(null)}>
        <button type="button" onClick={hide}>Close</button>
        {open && <Image src={open.src} alt={open.caption} width={open.w} height={open.h} sizes="92vw" />}
      </dialog>
    </section>
  );
}
