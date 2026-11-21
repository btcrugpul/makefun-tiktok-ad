// Entry point for the bring-the-humans-03 submission.
//
// The deliverable of this bounty lives on TikTok; this program's only job is
// to hand the video's address to the grader by copying VIDEO.json from the
// repository (the bot directory) into the output directory.

import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const sourcePath = join(botDir, "VIDEO.json");
const targetPath = join(outputDir, "VIDEO.json");

try {
  mkdirSync(outputDir, { recursive: true });
  copyFileSync(sourcePath, targetPath);
  console.log(`VIDEO.json copied to ${targetPath}`);
} catch (error) {
  console.error(
    `Could not copy VIDEO.json from ${sourcePath} to ${targetPath}: ${
      error instanceof Error ? error.message : String(error)
    }`
  );
  process.exit(1);
}
