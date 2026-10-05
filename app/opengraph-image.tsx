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
        justifyContent: "flex-end",
        gap: 40,
        background: "#f4f1ea",
        color: "#16150f",
        padding: "72px 80px",
        fontFamily: "serif",
      }}
    >
      <span style={{ fontSize: 120, lineHeight: 1 }}>Matthew O&apos;Leary</span>
      <div
        style={{ display: "flex", flexDirection: "column", fontSize: 34, color: "#4a473d", fontFamily: "sans-serif" }}
      >
        <span>Computer Science and Business, Trinity College Dublin</span>
        <span style={{ marginTop: 12 }}>Looking for a summer 2027 internship in business or technology</span>
      </div>
    </div>,
    size,
  );
}
