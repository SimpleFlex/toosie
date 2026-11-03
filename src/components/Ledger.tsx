import { ledger } from "@/data/content";
import { Arrow } from "./Icons";
import Reveal from "./Reveal";

export default function Ledger() {
  return (
    <section id="work" className="s0">
      <div className="w">
        <Reveal>
          <h2>The ledger.</h2>
          <p className="sub">Who, what I did, and what changed.</p>
        </Reveal>
        <div className="led">
          {ledger.map((row, i) => (
            <Reveal key={row.client} delay={i * 0.06}>
              <a href={row.href} {...(row.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
                <span>{row.client}</span>
                <b>{row.role}</b>
                <span>{row.text}</span>
                <i>{row.metric}<Arrow /></i>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
