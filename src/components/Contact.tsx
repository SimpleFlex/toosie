import { site } from "@/lib/site";
import { Arrow, TgIcon, XIcon } from "./Icons";
import Reveal from "./Reveal";

const greeting = "Hi Toosie, I found you through your portfolio and I would like to talk about a project.";

const channels = [
  { title: "Message on X", handle: site.xHandle, href: site.x, Icon: XIcon },
  { title: "Message on Telegram", handle: site.telegramHandle, href: `${site.telegram}?text=${encodeURIComponent(greeting)}`, Icon: TgIcon },
];

export default function Contact() {
  return (
    <div className="cta" id="brief">
      <div className="w">
        <Reveal>
          <h2>Got something worth building?</h2>
          <p>Launching a product, growing a community or tightening your marketing? Say hello and let’s get to work.</p>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="talk">
            {channels.map(({ title, handle, href, Icon }) => (
              <a key={title} className="tk" href={href} target="_blank" rel="noopener noreferrer">
                <span className="top"><Icon className="ic" /><Arrow /></span>
                <span><b>{title}</b><small>{handle}</small></span>
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </div>
  );
}
