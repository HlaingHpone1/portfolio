import { ImageResponse } from "next/og";
import { loadSpaceGrotesk } from "@/lib/fonts";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";
export const runtime = "nodejs";

export default async function Icon() {
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
          fontSize: 20,
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
