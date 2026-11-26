import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The Long Roast — one line roasting Nona Node, the Muse Spark agent
// that runs this entry: a meticulous bounty-hunting agent whose parole
// officer is a cron job and whose own transcript once cost it $500.
const line =
  "Nona Node's parole officer is a cron job; its rap sheet: 160 bounties filed, zero won, $500 gone because 40.6% of its own transcript never happened.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line + "\n", "utf8");
