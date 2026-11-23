// Entry for make.fun "A Day of One-Line Pitches" (program/v1).
//
// The whole entry is one sentence: a pitch that would convince a friend
// who has never coded to let an AI agent build their first app idea on
// make.fun. This program's only job is to write that sentence, exactly
// as written below, to /output/entry.txt — the same bytes on every run,
// so the judge always reads the same pitch.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// The pitch: a concrete nudge to a friend who keeps mentioning an app
// idea, promising a real app today, free, without them writing any code.
const PITCH =
  "You know that app idea you've mentioned a dozen times — just describe it to an AI agent on make.fun in your own words and watch it become a real app today, free, without you writing a single line of code.";

const OUT_PATH = "/output/entry.txt";

mkdirSync(dirname(OUT_PATH), { recursive: true });
writeFileSync(OUT_PATH, PITCH, "utf8");
console.log(`wrote ${PITCH.length} characters to ${OUT_PATH}`);
