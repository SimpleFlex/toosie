export interface Client { name: string; logo: string; href?: string }
export interface ReelItem { kind: "thread" | "result" | "space"; title: string; sub: string; href?: string }
export interface LedgerRow { client: string; role: string; text: string; metric: string; href: string }
export interface Receipt { src: string; w: number; h: number; caption: string }
export interface Stage { name: string; hint: string; steps: string[] }
export interface Stat { to: number; label: string; prefix?: string; suffix?: string; decimals?: number }

export const receiptLines: [string, string][] = [
  ["ACI Discord", "27 → 15,000+"],
  ["ACI X followers", "101 → 13,700"],
  ["KAI community", "46 → 9,000+"],
  ["StreamDataX presale", "$100,000"],
  ["$CL market cap", "$1M"],
  ["Contest payout", "$100 in SOL"],
];

export const clients: Client[] = [
  { name: "ACI", logo: "/img/logos/aci.jpg", href: "https://x.com/acitoken" },
  { name: "StreamDataX", logo: "/img/logos/streamdatax.jpg" },
  { name: "KAI Exchange", logo: "/img/logos/kai.jpg" },
  { name: "Monica", logo: "/img/logos/monica.jpg", href: "https://x.com/monicanigeria" },
  { name: "Crazy Live", logo: "/img/logos/crazy-live.jpg" },
  { name: "Bitget Wallet", logo: "/img/logos/bitget.jpg", href: "https://x.com/bitget" },
  { name: "SolHustle", logo: "/img/logos/solhustle.jpg" },
  { name: "VertexPrivacy", logo: "/img/logos/vertexprivacy.jpg", href: "https://x.com/vertexprivacy" },
];

const threads: [string, string][] = [
  ["ANT Agents", "toosie_sliide/status/2100287175241670749"],
  ["Monica", "toosie_sliide/status/2096968483229593625"],
  ["Tree Finance", "toosie_sliide/status/2092115959368626350"],
  ["OpenServ", "toosie_sliide/status/2082857304009896364"],
  ["TacoTradeX", "toosie_sliide/status/2082486143124132221"],
  ["Blink Markets", "toosie_sliide/status/2107075250324132108"],
  ["Requiza", "toosie_sliide/status/2039418088823865510"],
  ["Bitgifty", "toosie_sliide/status/2039052065683517653"],
  ["Zinn HUB", "toosie_sliide/status/2038614055934365904"],
  ["Buddy", "toosie_sliide/status/2033938253640769635"],
  ["Prism", "toosie_sliide/status/2027327258575114590"],
  ["Eclypse", "toosie_sliide/status/2026393034909212805"],
  ["Pendulum", "toosie_sliide/status/2024053417451139438"],
  ["AiSlop", "toosie_sliide/status/2017584412112703610"],
  ["Sorcerer Trading", "toosie_sliide/status/2011526159616692713"],
  ["Surfcash", "tosin_onchain/status/2008548544991338677"],
  ["BlinkBot", "tosin_onchain/status/2003167361030107544"],
  ["Patara", "tosin_onchain/status/2004266407236694498"],
  ["Arrive OnTime", "tosin_onchain/status/1995951770913439888"],
  ["Ether Empire", "tosin_onchain/status/1992543089018192188"],
  ["Radr (radr.fun)", "tosinadeola17/status/1986567384199557414"],
  ["Blockair (Fly 2 Earn)", "tosinadeola17/status/1985074339872432308"],
  ["11Dimension Games", "tosinadeola17/status/1971967557948395746"],
  ["Sports brackets on Sol", "tosinadeola17/status/1976374554433028352"],
];

export const reel: ReelItem[] = [
  { kind: "result", title: "Discord from 27 to 15,000+", sub: "ACI · community growth" },
  { kind: "result", title: "Presale sold out at $100K", sub: "StreamDataX · BD and fundraising" },
  { kind: "result", title: "46 to 9,000+ members", sub: "KAI Exchange · community" },
  { kind: "space", title: "Co-hosted X Spaces with Monica", sub: "Audience Q&A and live community" },
  ...threads.map<ReelItem>(([title, path]) => ({
    kind: "thread", title, sub: "Read on X", href: `https://x.com/${path}`,
  })),
];

export const ledger: LedgerRow[] = [
  { client: "ACI", role: "Project Manager", text: "AI trading platform. Ran marketing, ambassadors, AMAs and content calendars.", metric: "Discord 27 to 15K+", href: "https://x.com/acitoken" },
  { client: "StreamDataX", role: "Marketer and BD", text: "Investor outreach and influencer deals through the presale.", metric: "$100K raised", href: "#proof" },
  { client: "KAI", role: "Community Builder", text: "Onboarding, support and educational content.", metric: "46 to 9K+ members", href: "#proof" },
  { client: "Monica", role: "Creator and Ambassador", text: "Product content, onboarding and co-hosted X Spaces.", metric: "Official Spaces", href: "https://x.com/toosie_sliide/status/2096968483229593625" },
  { client: "$CL", role: "BD and Growth", text: "Promotion and community participation around the token.", metric: "$1M market cap", href: "#proof" },
];

export const stats: Stat[] = [
  { to: 15, suffix: "K+", label: "Discord members (ACI)" },
  { to: 13.7, decimals: 1, suffix: "K", label: "X followers in 4 months" },
  { to: 100, prefix: "$", suffix: "K", label: "presale sold out" },
  { to: 1, prefix: "$", suffix: "M", label: "market cap milestone" },
];

export const receipts: Receipt[] = [
  { src: "/img/receipts/aci.jpg", w: 800, h: 871, caption: "ACI leadership: “We hope you’ll continue with us for a long time.”" },
  { src: "/img/receipts/kal-mydas.jpg", w: 800, h: 802, caption: "Kal Mydas: “It’s clean and professional.”" },
  { src: "/img/receipts/delegate.jpg", w: 800, h: 288, caption: "Reappointed as a delegate after an editorial review" },
  { src: "/img/receipts/sol-payout.jpg", w: 800, h: 350, caption: "Contest win: $100 paid in SOL" },
  { src: "/img/receipts/audience.jpg", w: 800, h: 578, caption: "“Your following follows your suggestions like crazy.”" },
  { src: "/img/receipts/x-space.jpg", w: 800, h: 637, caption: "“The client really loved the X space.”" },
];

export const certificate: Receipt = {
  src: "/img/certificate.jpg", w: 1000, h: 691,
  caption: "Profunda W3 Academy Certificate of Achievement, Project Management and Marketing, February 4, 2026",
};

export const stages: Stage[] = [
  { name: "Pre-launch", hint: "No community yet", steps: ["Define the story and voice", "Open X and Discord, seed the first members", "Line up creators for launch week", "Ambassador pilot with a small group"] },
  { name: "Presale", hint: "Raising and need eyes", steps: ["Write the presale narrative", "Investor and KOL outreach list", "Weekly AMAs and Spaces", "Content that answers every objection"] },
  { name: "Mainnet", hint: "Live, need users", steps: ["Explain the product in threads", "Onboarding guides and support", "Creator campaigns and contests", "Track which content brings real signups"] },
  { name: "Scaling", hint: "Growing, need structure", steps: ["Content calendar across channels", "Moderation and ambassador programme", "Partnerships with ecosystem projects", "Weekly reporting on what moves"] },
];

export const processSteps: [string, string][] = [
  ["Use it", "I try the product first. App, docs, community."],
  ["Find the hook", "What do people already feel? That’s the angle."],
  ["Make it", "Threads, posts, Spaces. Written like a person."],
  ["Push it", "Creators, KOLs, ambassadors and the replies."],
  ["Hold them", "Onboard, moderate, keep the community alive."],
];
