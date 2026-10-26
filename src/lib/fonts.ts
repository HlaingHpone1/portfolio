import { readFile } from "node:fs/promises";
import { join } from "node:path";

const fontDir = join(process.cwd(), "src/assets/fonts");

export function loadSpaceGrotesk(weight: "medium" | "bold") {
  const file =
    weight === "bold" ? "SpaceGrotesk-Bold.ttf" : "SpaceGrotesk-Medium.ttf";
  return readFile(join(fontDir, file));
}
