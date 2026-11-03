import { ImageResponse } from "next/og";

export const alt = "Toosie | Web3 growth, community and business development";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#000", color: "#f2f0eb", padding: 72 }}>
        <div style={{ display: "flex", color: "#10b981", fontSize: 34 }}>TOOSIE</div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 96, fontWeight: 800, lineHeight: 1.02, letterSpacing: -3 }}>Web3 growth, with receipts.</div>
          <div style={{ marginTop: 28, fontSize: 34, color: "#8d8d87" }}>Content · Community · Business development</div>
        </div>
        <div style={{ display: "flex", gap: 56, fontSize: 40, color: "#10b981" }}>
          <span>15K+ Discord</span><span>$100K presale</span><span>$1M market cap</span>
        </div>
      </div>
    ),
    size,
  );
}
