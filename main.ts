// Make the Judge Laugh in One Line — entry program.
// Writes one funny line (77 chars) to /output/entry.txt.
// Deterministic: the same line on every run, no randomness, no I/O besides the write.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "My dentist asked if I floss; I said yes, and we both pretended to believe me.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
