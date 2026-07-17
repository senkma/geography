#!/usr/bin/env node
/** Zapíše kvízy pro Z0026p — ruční jádro + doplnění z obsahu lekce (min. 20 otázek). */
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { Z0026P_QUIZZES } from "./content/z0026p-quizzes.mjs";
import { expandQuizForLesson, shuffle } from "./content/quiz-expand.mjs";
import { courseDir, readJsonIfExists, listJsonFiles } from "./content/lib.mjs";

const MIN_QUESTIONS = 20;
const lessonsDir = join(courseDir("geografie-kartografie", "z0026p"), "lessons");
const outDir = join(courseDir("geografie-kartografie", "z0026p"), "quizzes");
mkdirSync(outDir, { recursive: true });

let n = 0;
for (const file of listJsonFiles(lessonsDir)) {
  const lesson = readJsonIfExists(join(lessonsDir, file));
  if (!lesson?.id) continue;
  const base = Z0026P_QUIZZES[lesson.id];
  if (!base) {
    console.warn("⚠ chybí ruční kvíz pro", lesson.id);
    continue;
  }
  const quiz = expandQuizForLesson(lesson, base, MIN_QUESTIONS);
  for (const question of quiz.questions) {
    question.options = shuffle(question.options);
  }
  if (quiz.questions.length < MIN_QUESTIONS) {
    console.warn(
      "⚠",
      lesson.id,
      `jen ${quiz.questions.length}/${MIN_QUESTIONS} otázek — dopln obsah lekce`,
    );
  }
  writeFileSync(
    join(outDir, `${lesson.id}.json`),
    `${JSON.stringify({ lessonId: lesson.id, ...quiz }, null, 2)}\n`,
    "utf8",
  );
  n += 1;
  console.log("✓", lesson.id, `(${quiz.questions.length} otázek)`);
}
console.log(`\nHotovo: ${n} kvízů → ${outDir}`);
