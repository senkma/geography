#!/usr/bin/env node
/** Zapíše kvízy pro předmět Z0026p do content/…/quizzes/ */
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { Z0026P_QUIZZES } from "./content/z0026p-quizzes.mjs";
import { courseDir } from "./content/lib.mjs";

const dir = join(courseDir("geografie-kartografie", "z0026p"), "quizzes");
mkdirSync(dir, { recursive: true });

let n = 0;
for (const [lessonId, quiz] of Object.entries(Z0026P_QUIZZES)) {
  const path = join(dir, `${lessonId}.json`);
  writeFileSync(path, `${JSON.stringify({ lessonId, ...quiz }, null, 2)}\n`, "utf8");
  n += 1;
  console.log("✓", lessonId, `(${quiz.questions.length} otázek)`);
}
console.log(`\nHotovo: ${n} kvízů → ${dir}`);
