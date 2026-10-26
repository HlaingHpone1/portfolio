import { ImageResponse } from "next/og";
import { loadSpaceGrotesk } from "@/lib/fonts";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";
export const runtime = "nodejs";

export default async function AppleIcon() {
  const bold = await loadSpaceGrotesk("bold");

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#000000",
          color: "#ffffff",
          fontSize: 108,
          fontFamily: "Space Grotesk",
          fontWeight: 700,
        }}
      >
        H
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Space Grotesk",
          data: bold,
          weight: 700,
          style: "normal",
        },
      ],
    },
  );
}
