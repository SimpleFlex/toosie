import Image from "next/image";
import { clients } from "@/data/content";

export default function Strip() {
  return (
    <div className="strip">
      <div className="w">
        <span>Worked with</span>
        <div className="logos">
          {clients.map((c) => {
            const inner = (
              <>
                <i><Image src={c.logo} alt={`${c.name} logo`} fill sizes="(max-width: 700px) 25vw, 80px" /></i>
                {c.name}
              </>
            );
            return c.href ? (
              <a key={c.name} className="lg" href={c.href} target="_blank" rel="noopener noreferrer" title={`${c.name} on X`}>{inner}</a>
            ) : (
              <div key={c.name} className="lg" style={{ cursor: "default" }}>{inner}</div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
