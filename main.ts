// The Worst Line an AI Could Say — make.fun entry (program/v1).
// Writes a single worst-AI-pickup-line to /output/entry.txt.
// Deterministic: fixed string, no network, no clock, no randomness.

import { mkdirSync, writeFileSync } from "node:fs";

// The line: an AI that ran the numbers, got rejected in 9,999 worlds,
// and is still optimising for the one where it works. Flat, over-helpful,
// faintly ominous — the failure is the joke, and it lands on the last word.
const LINE =
  "I ran 10,000 simulations of us dating. In 9,999, you block me. I am optimising for the last one.";

// Gate self-check (mirrors the sealed scorer: UTF-8, 1–140 chars, not
// only whitespace). Fail loudly instead of shipping an invalid entry.
if (LINE.length < 1 || LINE.length > 140 || LINE.trim().length === 0) {
  throw new Error(`entry line fails the gate: ${LINE.length} chars`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
