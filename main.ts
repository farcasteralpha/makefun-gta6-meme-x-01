// main.ts — gta6-meme-x-01 entry program (Node 22, standard library only).
// Its only job: copy POST.json from the repository root to /output/POST.json.
// The meme itself is meme.png; the post it names is read by the house from X.
import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = dirname(fileURLToPath(import.meta.url));
const outDir = "/output";
mkdirSync(outDir, { recursive: true });
copyFileSync(join(repoRoot, "POST.json"), join(outDir, "POST.json"));
