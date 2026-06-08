import { ImageResponse } from "next/og";

export const alt = ".NET Conf Africa 2026 — Where Africa builds with .NET";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background:
            "radial-gradient(60% 55% at 80% 18%, rgba(224,49,49,0.45), transparent 70%), radial-gradient(55% 50% at 8% 92%, rgba(27,122,75,0.40), transparent 70%), #0b0a0a",
          color: "#f5f5f4",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            fontSize: 22,
            fontWeight: 600,
            letterSpacing: 2,
            color: "#f5f5f4",
          }}
        >
          <span
            style={{
              width: 12,
              height: 12,
              borderRadius: 999,
              background: "#E03131",
              boxShadow: "0 0 14px #E03131",
            }}
          />
          NOV 24–26, 2026 · JOHANNESBURG
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 110,
            fontWeight: 700,
            lineHeight: 1.02,
            letterSpacing: -2,
          }}
        >
          <span>Where Africa</span>
          <span>
            builds with{" "}
            <span style={{ color: "#F2A900" }}>.NET</span>
          </span>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            fontSize: 24,
            color: "#a8a29e",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <span style={{ color: "#f5f5f4", fontWeight: 600 }}>
              .NET Conf Africa 2026
            </span>
            <span>1,200+ builders · 25 countries · 48 sessions</span>
          </div>
          <span style={{ fontFamily: "monospace" }}>africa.djoufson.com</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
