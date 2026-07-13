/**
 * Sestaví src/data/gk.ts, fg.ts a antarktida.ts z:
 * - scripts/muni_courses_research.json (metadata předmětů)
 * - content/fields/… (lekce, kvízy, materiály)
 */
import { existsSync, mkdirSync, readdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { buildLessonsFromSyllabus } from "./build-syllabus-lessons.mjs";
import {
  antarktidaModuleDir,
  contentDir,
  courseDir,
  courseIdFromMuni,
  fieldCoursesDir,
  loadLessonOverrides,
  loadQuizzes,
  mergeLesson,
  readJsonIfExists,
  writeStatus,
} from "./content/lib.mjs";

const scriptsRoot = dirname(fileURLToPath(import.meta.url));

const muni = readJsonIfExists(join(scriptsRoot, "muni_courses_research.json"));
if (!muni) throw new Error("Chybí scripts/muni_courses_research.json");

function tsString(value) {
  return JSON.stringify(value ?? "");
}

function formatTsArray(obj, indent = "      ") {
  return JSON.stringify(obj, null, 2).replace(/\n/g, `\n${indent}`);
}

function defaultCourseResources(c) {
  const resources = [];
  if (c.is_muni_url) {
    resources.push({
      kind: "link",
      title: "IS MUNI — detail předmětu",
      url: c.is_muni_url,
      source: "IS MUNI",
    });
  }
  if (c.study_plan_url) {
    resources.push({
      kind: "link",
      title: "Studijní plán v IS MUNI",
      url: c.study_plan_url,
      source: "IS MUNI",
    });
  }
  if (c.syllabus_source) {
    resources.push({
      kind: "document",
      title: `Osnova: ${c.syllabus_source}`,
      note: "Oficiální témata z katalogu předmětů IS MUNI.",
    });
  }
  return resources;
}

function loadCourseMaterials(fieldId, id, defaults) {
  const data = readJsonIfExists(join(courseDir(fieldId, id), "materials.json"));
  if (!data) return defaults;
  return [...defaults, ...(data.items ?? data.resources ?? [])];
}

function buildMuniCourse(c, index, fieldId, stats) {
  const id = courseIdFromMuni(c.code, c.title, index);
  const dir = courseDir(fieldId, id);
  const lessonOverrides = loadLessonOverrides(join(dir, "lessons"));
  const quizzes = loadQuizzes(join(dir, "quizzes"));

  const baseLessons = buildLessonsFromSyllabus(c, id);
  const lessons = baseLessons.map((lesson) => {
    const merged = mergeLesson(
      lesson,
      lessonOverrides.get(lesson.id),
      quizzes.get(lesson.id),
    );
    if (lessonOverrides.has(lesson.id)) stats.lessonsCustom += 1;
    if (quizzes.has(lesson.id)) stats.quizzes += 1;
    return merged;
  });

  stats.lessonsTotal += lessons.length;
  stats.courses += 1;

  const tag = c.category?.includes(">")
    ? c.category.split(">").pop().trim()
    : c.category || "Předmět";

  const course = {
    id,
    code: c.code,
    title: c.title,
    ...(c.garant ? { garant: c.garant } : {}),
    ...(c.credits != null ? { credits: c.credits } : {}),
    ...(c.semester ? { semester: c.semester } : {}),
    ...(c.completion ? { completion: c.completion } : {}),
    tags: [tag],
    ...(c.anotace ? { description: c.anotace } : {}),
    syllabus: c.syllabus ?? [],
    lessons,
    resources: loadCourseMaterials(fieldId, id, defaultCourseResources(c)),
  };

  return course;
}

function formatMuniCourse(course) {
  const lines = [
    `    {`,
    `      id: ${tsString(course.id)},`,
    `      code: ${tsString(course.code)},`,
    `      title: ${tsString(course.title)},`,
  ];
  if (course.garant) lines.push(`      garant: ${tsString(course.garant)},`);
  if (course.credits != null) lines.push(`      credits: ${course.credits},`);
  if (course.semester) lines.push(`      semester: ${tsString(course.semester)},`);
  if (course.completion) lines.push(`      completion: ${tsString(course.completion)},`);
  lines.push(`      tags: ${JSON.stringify(course.tags)},`);
  if (course.description) lines.push(`      description: ${tsString(course.description)},`);
  lines.push(`      syllabus: ${formatTsArray(course.syllabus)},`);
  lines.push(`      lessons: ${formatTsArray(course.lessons)},`);
  lines.push(`      resources: ${formatTsArray(course.resources)},`);
  lines.push(`    }`);
  return lines.join("\n");
}

function buildGkFg() {
  const gkStats = { courses: 0, lessonsTotal: 0, lessonsCustom: 0, quizzes: 0 };
  const fgStats = { courses: 0, lessonsTotal: 0, lessonsCustom: 0, quizzes: 0 };

  const gkCourses = muni.bachelor.map((c, i) =>
    buildMuniCourse(c, i, "geografie-kartografie", gkStats),
  );
  const fgCourses = muni.master.map((c, i) =>
    buildMuniCourse(c, i, "fyzicka-geografie", fgStats),
  );

  const gkTs = `import type { Field } from "../types";

/** Sestaveno z content/ + IS MUNI (plán 23634). */
export const gk: Field = {
  id: "geografie-kartografie",
  title: "Geografie a kartografie",
  subtitle: "Bakalářský program (PřF MUNI) — specializace Fyzická geografie",
  level: "Bakalářské",
  accent: "#86c7a8",
  icon: "compass",
  description:
    "Bakalářský program Geografie a kartografie (B-GEK). Předměty a osnovy jsou převzaty z oficiálního studijního plánu specializace Fyzická geografie (plán 23634) v IS MUNI — společná oborová část a specializační předměty FG. Zdroj osnov: zkouškové okruhy nebo klíčová témata z katalogu předmětů.",
  sourceUrl: "https://is.muni.cz/plan/23634/fyzicka-geografie",
  courses: [
${gkCourses.map(formatMuniCourse).join(",\n")}
  ],
};
`;

  const fgTs = `import type { Field } from "../types";

/** Sestaveno z content/ + IS MUNI (plán 23699). */
export const fg: Field = {
  id: "fyzicka-geografie",
  title: "Fyzická geografie",
  subtitle: "Navazující magisterský program (PřF MUNI)",
  level: "Magisterské",
  accent: "#7fb5da",
  icon: "mountain",
  description:
    "Navazující magisterský program Fyzická geografie. Předměty a osnovy jsou převzaty z oficiálního studijního plánu (plán 23699) v IS MUNI. Zahrnuje povinné předměty, metody FG, bloky specializovaných předmětů a doporučené volitelné předměty. Zdroj osnov: zkouškové okruhy nebo klíčová témata z katalogu předmětů.",
  sourceUrl: "https://is.muni.cz/plan/23699/fyzicka-geografie",
  courses: [
${fgCourses.map(formatMuniCourse).join(",\n")}
  ],
};
`;

  writeFileSync(new URL("../src/data/gk.ts", import.meta.url), gkTs, "utf8");
  writeFileSync(new URL("../src/data/fg.ts", import.meta.url), fgTs, "utf8");

  return {
    "geografie-kartografie": gkStats,
    "fyzicka-geografie": fgStats,
  };
}

function buildAntarktidaModule(moduleId, stats) {
  const dir = antarktidaModuleDir(moduleId);
  const meta = readJsonIfExists(join(dir, "module.json"));
  if (!meta) throw new Error(`Chybí ${dir}/module.json`);

  const lessonOverrides = loadLessonOverrides(join(dir, "lessons"));
  const quizzes = loadQuizzes(join(dir, "quizzes"));
  const materialsData = readJsonIfExists(join(dir, "materials.json"));

  const lessons = (meta.lessonOrder ?? []).map((lessonId) => {
    const lesson = lessonOverrides.get(lessonId);
    if (!lesson) throw new Error(`Chybí lekce ${lessonId} v ${dir}/lessons/`);
    const merged = mergeLesson(lesson, null, quizzes.get(lessonId));
    stats.lessonsTotal += 1;
    stats.lessonsCustom += 1;
    if (quizzes.has(lessonId)) stats.quizzes += 1;
    return merged;
  });

  stats.courses += 1;
  stats.modules += 1;

  return {
    id: meta.id,
    title: meta.title,
    completion: "výukový modul",
    ...(meta.section ? { moduleSection: meta.section } : {}),
    tags: meta.tags ?? ["Antarktida"],
    description: meta.description,
    syllabus: lessons.map((l) => l.title),
    lessons,
    ...(materialsData?.items?.length
      ? { resources: materialsData.items }
      : materialsData?.resources?.length
        ? { resources: materialsData.resources }
        : {}),
  };
}

function buildAntarktida() {
  const fieldMeta = readJsonIfExists(contentDir("fields", "antarktida", "field.json"));
  if (!fieldMeta) throw new Error("Chybí content/fields/antarktida/field.json");

  const modulesDir = contentDir("fields", "antarktida", "modules");
  const moduleIds =
    fieldMeta.moduleOrder ??
    readdirSync(modulesDir).filter((name) =>
      existsSync(join(modulesDir, name, "module.json")),
    );

  const stats = { courses: 0, modules: 0, lessonsTotal: 0, lessonsCustom: 0, quizzes: 0 };
  const courses = moduleIds.map((id) => buildAntarktidaModule(id, stats));

  const out = `import type { Field } from "../types";

/** Sestaveno z content/fields/antarktida/. */
export const antarktida: Field = {
  id: ${tsString(fieldMeta.id)},
  title: ${tsString(fieldMeta.title)},
  subtitle: ${tsString(fieldMeta.subtitle)},
  level: "Speciální modul",
  accent: ${tsString(fieldMeta.accent)},
  icon: ${tsString(fieldMeta.icon)},
  description: ${tsString(fieldMeta.description)},
  sourceUrl: ${tsString(fieldMeta.sourceUrl)},
  courses: [
${courses
  .map((mod) => {
    const lines = [
      `    {`,
      `      id: ${tsString(mod.id)},`,
      `      title: ${tsString(mod.title)},`,
      `      completion: "výukový modul",`,
    ];
    if (mod.moduleSection) lines.push(`      moduleSection: ${tsString(mod.moduleSection)},`);
    lines.push(`      tags: ${JSON.stringify(mod.tags)},`);
    lines.push(`      description: ${tsString(mod.description)},`);
    lines.push(`      syllabus: ${formatTsArray(mod.syllabus)},`);
    lines.push(`      lessons: ${formatTsArray(mod.lessons)},`);
    if (mod.resources?.length) lines.push(`      resources: ${formatTsArray(mod.resources)},`);
    lines.push(`    }`);
    return lines.join("\n");
  })
  .join(",\n")}
  ],
};
`;

  writeFileSync(new URL("../src/data/antarktida.ts", import.meta.url), out, "utf8");
  stats.courses = courses.length;
  return { antarktida: stats };
}

// --- main ---

const status = {
  generatedAt: new Date().toISOString(),
  fields: {},
};

Object.assign(status.fields, buildGkFg());
Object.assign(status.fields, buildAntarktida());
writeStatus(status);

for (const [fieldId, s] of Object.entries(status.fields)) {
  console.log(
    `${fieldId}: ${s.courses} předmětů/modulů, ${s.lessonsTotal} lekcí, ${s.lessonsCustom} vlastních, ${s.quizzes} kvízů`,
  );
}
console.log(`→ content/_status.json`);
