import { processSteps } from "@/data/content";
import Reveal from "./Reveal";

export default function Process() {
  return (
    <section id="process" className="s0">
      <div className="w">
        <Reveal>
          <h2>How I promote you.</h2>
          <p className="sub">The same five steps on every project.</p>
        </Reveal>
        <ol className="proc" style={{ listStyle: "none", margin: 0, padding: 0 }}>
          {processSteps.map(([title, text], i) => (
            <li key={title}>
              <Reveal className="pc" delay={i * 0.08}>
                <em>Step {i + 1}</em><h3>{title}</h3><p>{text}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
