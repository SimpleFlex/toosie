export const site = {
  name: "Toosie",
  legalName: "Adeola Oluwatosin",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://toosie.vercel.app").replace(/\/$/, ""),
  title: "Toosie | Web3 growth, community and business development",
  description:
    "Toosie is a Web3 marketer with 3+ years of experience in content, community growth and business development. Grew a Discord from 27 to 15,000+ members and helped sell out a $100K presale.",
  x: "https://x.com/toosie_sliide",
  xHandle: "@toosie_sliide",
  telegram: "https://t.me/Toosie_Sliide",
  telegramHandle: "@Toosie_Sliide",
} as const;
