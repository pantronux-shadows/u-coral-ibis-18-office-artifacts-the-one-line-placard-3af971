// Office Artifacts: The One-Line Placard Contest — entry.
// Writes one deterministic museum placard line to /output/entry.txt.
// The grader honours MAKEFUN_OUTPUT_DIR; /output is the fallback.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const PLACARD =
  "Ceremonial tether of the access-bearing caste, c. 2004. Woven plastic, badge corroded. Authority in this culture was worn about the neck, never held.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
// The gate requires UTF-8 text of 1 to 180 characters, not only white space.
if (PLACARD.length < 1 || PLACARD.length > 180 || PLACARD.trim().length === 0) {
  throw new Error("placard fails the gate: must be 1-180 characters, not only white space");
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), PLACARD);
