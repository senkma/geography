/**
 * Jednorázově exportuje scripts/antarktida_modules.json → content/fields/antarktida/
 */
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import { antarktidaModuleDir, contentDir, readJsonIfExists } from "./content/lib.mjs";

const srcPath = fileURLToPath(new URL("./antarktida_modules.json", import.meta.url));
const src = readJsonIfExists(srcPath);
if (!src) {
  console.error("Chybí scripts/antarktida_modules.json — nejdřív spusť reorganize-antarktida-themes.mjs");
  process.exit(1);
}

mkdirSync(contentDir("fields", "antarktida"), { recursive: true });
writeFileSync(
  contentDir("fields", "antarktida", "field.json"),
  `${JSON.stringify(
    { ...src.field, moduleOrder: src.modules.map((m) => m.id) },
    null,
    2,
  )}\n`,
);

for (const mod of src.modules) {
  const dir = antarktidaModuleDir(mod.id);
  mkdirSync(join(dir, "lessons"), { recursive: true });
  mkdirSync(join(dir, "quizzes"), { recursive: true });

  const { lessons, resources, syllabus, ...meta } = mod;
  writeFileSync(
    join(dir, "module.json"),
    `${JSON.stringify(
      {
        id: meta.id,
        title: meta.title,
        description: meta.description,
        section: meta.section,
        tags: meta.tags,
        lessonOrder: lessons.map((l) => l.id),
      },
      null,
      2,
    )}\n`,
  );

  if (resources?.length) {
    writeFileSync(
      join(dir, "materials.json"),
      `${JSON.stringify({ items: resources }, null, 2)}\n`,
    );
  }

  for (const lesson of lessons) {
  const { quiz, ...lessonBody } = lesson;
    writeFileSync(
      join(dir, "lessons", `${lesson.id}.json`),
      `${JSON.stringify(lessonBody, null, 2)}\n`,
    );
    if (quiz) {
      writeFileSync(
        join(dir, "quizzes", `${lesson.id}.json`),
        `${JSON.stringify({ lessonId: lesson.id, ...quiz }, null, 2)}\n`,
      );
    }
  }
}

console.log(`exportováno ${src.modules.length} modulů Antarktidy do content/fields/antarktida/`);
