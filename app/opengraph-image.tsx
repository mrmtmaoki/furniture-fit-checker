import { ImageResponse } from "next/og";

export const alt = "家具 搬入チェッカー｜その家具、玄関を通りますか？";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px 96px",
          background: "#EAE7DE",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 28,
            letterSpacing: 4,
            color: "#2C3E50",
            fontWeight: 700,
            textTransform: "uppercase",
            marginBottom: 28,
          }}
        >
          FURNITURE FIT CHECKER
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 76,
            fontWeight: 700,
            color: "#2B2A25",
            lineHeight: 1.25,
            marginBottom: 32,
          }}
        >
          その家具、玄関を通りますか？
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 32,
            color: "#6B685D",
            maxWidth: 900,
          }}
        >
          寸法を入れるだけで、まっすぐ通るか対角線計算で自動判定
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: 56,
          }}
        >
          <div
            style={{
              display: "flex",
              width: 64,
              height: 48,
              border: "6px solid #2C3E50",
              borderBottom: "none",
              marginRight: 24,
            }}
          />
          <div
            style={{
              display: "flex",
              width: 56,
              height: 32,
              background: "#D9A62E",
              borderRadius: 4,
              transform: "rotate(30deg)",
            }}
          />
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
