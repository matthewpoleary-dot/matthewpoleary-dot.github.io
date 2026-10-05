import { ImageResponse } from "next/og";

export const alt = "Matthew O'Leary · Computer Science & Business, Trinity College Dublin";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OG() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "#f4f1ea",
        color: "#16150f",
        padding: "72px 80px",
        fontFamily: "serif",
      }}
    >
      <div
        style={{
          display: "flex",
          fontSize: 24,
          letterSpacing: 3,
          textTransform: "uppercase",
          color: "#6b675b",
          fontFamily: "monospace",
        }}
      >
        Computer Science & Business · Trinity College Dublin
      </div>
      <div style={{ display: "flex", flexDirection: "column", fontSize: 76, lineHeight: 1.05 }}>
        <span>I find out what a problem</span>
        <span>is really costing,</span>
        <span style={{ color: "#b23a12", fontStyle: "italic" }}>then build the fix.</span>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", fontSize: 30 }}>
        <span>Matthew O&apos;Leary</span>
        <span style={{ fontSize: 22, color: "#4a473d", fontFamily: "monospace" }}>
          Summer 2027 · Business × Technology
        </span>
      </div>
    </div>,
    size,
  );
}
