// GTA 6 clipper entry: the video itself is the entry.
// This program copies VIDEO.json from the repository root into the output
// directory, which is all the kit asks it to do. It reads nothing else,
// takes no arguments and writes no other file.
import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const repoRoot = process.env.MAKEFUN_BOT_DIR ?? ".";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outDir, { recursive: true });

const source = join(repoRoot, "VIDEO.json");
const entry = JSON.parse(readFileSync(source, "utf8")) as unknown;

if (typeof entry !== "object" || entry === null || typeof entry.url !== "string") {
  throw new Error("VIDEO.json must be a JSON object with a string url field");
}

if (!/^https:\/\/(www\.|m\.)?(youtube\.com\/(shorts\/|watch\?v=)|youtu\.be\/)/.test(entry.url)) {
  throw new Error("VIDEO.json url must be a YouTube video address");
}

copyFileSync(source, join(outDir, "VIDEO.json"));
console.log(`entry video: ${entry.url}`);
