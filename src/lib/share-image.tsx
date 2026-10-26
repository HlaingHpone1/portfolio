import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import sharp from "sharp";
import { loadSpaceGrotesk } from "@/lib/fonts";

export const alt = "Hlaing Hpone — Frontend Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

async function loadPortrait() {
  const source = await readFile(join(process.cwd(), "public/mine3.png"));
  const jpeg = await sharp(source)
    .resize(560, 630, { fit: "cover", position: "top" })
    .grayscale()
    .jpeg({ quality: 80 })
    .toBuffer();

  return `data:image/jpeg;base64,${jpeg.toString("base64")}`;
}

export default async function ShareImage() {
  const [medium, bold, portrait] = await Promise.all([
    loadSpaceGrotesk("medium"),
    loadSpaceGrotesk("bold"),
    loadPortrait(),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#000000",
          color: "#ffffff",
          fontFamily: "Space Grotesk",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            flex: 1,
            height: "100%",
            padding: "72px 64px",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 20,
              fontWeight: 500,
              letterSpacing: 4,
              color: "#a3a3a3",
            }}
          >
            FRONTEND DEVELOPER
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 20,
              fontSize: 80,
              fontWeight: 700,
              letterSpacing: -2,
              lineHeight: 1,
            }}
          >
            Hlaing Hpone
          </div>
          <div
            style={{
              display: "flex",
              width: 48,
              height: 1,
              background: "#ffffff",
              marginTop: 28,
              marginBottom: 28,
            }}
          />
          <div
            style={{
              display: "flex",
              fontSize: 28,
              fontWeight: 500,
              color: "#e5e5e5",
            }}
          >
            Next.js · TypeScript
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 10,
              fontSize: 22,
              fontWeight: 500,
              color: "#a3a3a3",
            }}
          >
            Yangon, Myanmar
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 48,
              fontSize: 18,
              fontWeight: 500,
              color: "#737373",
            }}
          >
            hlainghpone.com
          </div>
        </div>
        <img
          src={portrait}
          width={560}
          height={630}
          alt=""
          style={{
            width: 560,
            height: 630,
            objectFit: "cover",
            objectPosition: "top",
          }}
        />
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Space Grotesk",
          data: medium,
          weight: 500,
          style: "normal",
        },
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
