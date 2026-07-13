import { existsSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("../..", import.meta.url));
const contentRoot = join(root, "content");

export function contentDir(...parts) {
  return join(contentRoot, ...parts);
}

export function fieldCoursesDir(fieldId) {
  return contentDir("fields", fieldId, "courses");
}

export function courseDir(fieldId, courseId) {
  return join(fieldCoursesDir(fieldId), courseId);
}

export function antarktidaModuleDir(moduleId) {
  return contentDir("fields", "antarktida", "modules", moduleId);
}

export function readJsonIfExists(path) {
  if (!existsSync(path)) return null;
  return JSON.parse(readFileSync(path, "utf8"));
}

export function listJsonFiles(dir) {
  if (!existsSync(dir)) return [];
  return readdirSync(dir)
    .filter((f) => f.endsWith(".json"))
    .sort();
}

export function loadLessonOverrides(dir) {
  const map = new Map();
  for (const file of listJsonFiles(dir)) {
    const lesson = readJsonIfExists(join(dir, file));
    if (lesson?.id) map.set(lesson.id, lesson);
  }
  return map;
}

export function loadQuizzes(dir) {
  const map = new Map();
  for (const file of listJsonFiles(dir)) {
    const data = readJsonIfExists(join(dir, file));
    if (!data) continue;
    const lessonId = data.lessonId ?? file.replace(/\.json$/, "");
    const { lessonId: _lid, ...quiz } = data;
    if (quiz.questions?.length) map.set(lessonId, quiz);
  }
  return map;
}

export function mergeLesson(base, override, quiz) {
  if (!override && !quiz) return base;

  const merged = { ...base, ...(override ?? {}) };

  if (override?.blocks?.length) merged.blocks = override.blocks;
  if (override?.resources?.length) {
    merged.resources = override.resources;
  }
  if (quiz) merged.quiz = quiz;

  return merged;
}

export function courseIdFromMuni(code, title, index) {
  const base = code
    .replace(/^PřF:/i, "")
    .replace(/[^a-zA-Z0-9]/g, "")
    .toLowerCase();
  return base || `course-${index}`;
}

export function writeStatus(status) {
  writeFileSync(
    contentDir("_status.json"),
    `${JSON.stringify(status, null, 2)}\n`,
    "utf8",
  );
}

export { contentRoot, root };
