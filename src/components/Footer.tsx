import { site } from "@/lib/site";
import { TgIcon, XIcon } from "./Icons";

export default function Footer() {
  return (
    <footer>
      <div className="w">
        <span>© {new Date().getFullYear()} {site.name} ({site.legalName}) · Profunda W3 Academy certified, February 4, 2026</span>
        <div className="soc">
          <a href={site.x} target="_blank" rel="noopener noreferrer" aria-label="Toosie on X"><XIcon /></a>
          <a href={site.telegram} target="_blank" rel="noopener noreferrer" aria-label="Toosie on Telegram"><TgIcon /></a>
        </div>
      </div>
    </footer>
  );
}
