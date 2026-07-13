import type { Field, Course, Lesson, ModuleSection } from "../types";
import { gk } from "./gk";
import { fg } from "./fg";
import { antarktida } from "./antarktida";
import { stateExams } from "./state-exams";
import {
  buildStateExamLessons,
  countStateExamLessons,
} from "./state-exam-lessons";
import type { StateExam } from "../types";

export const fields: Field[] = [antarktida, gk, fg];

export function getStateExam(fieldId: string): StateExam | undefined {
  return stateExams[fieldId];
}

export function getStateExamSubjects(fieldId: string) {
  const exam = getStateExam(fieldId);
  if (!exam) return undefined;
  return buildStateExamLessons(exam);
}

export function getStateExamSubject(fieldId: string, subjectId: string) {
  const subjects = getStateExamSubjects(fieldId);
  const entry = subjects?.find((s) => s.subject.id === subjectId);
  if (!entry) return undefined;
  return entry;
}

export function getStateExamLesson(
  fieldId: string,
  subjectId: string,
  lessonId: string,
) {
  const entry = getStateExamSubject(fieldId, subjectId);
  const lesson = entry?.lessons.find((l) => l.id === lessonId);
  const field = getField(fieldId);
  const exam = getStateExam(fieldId);
  if (!field || !exam || !entry || !lesson) return undefined;
  return { field, exam, subject: entry.subject, lesson, lessons: entry.lessons };
}

export { countStateExamLessons };

export function getField(id: string): Field | undefined {
  return fields.find((f) => f.id === id);
}

export function getCourse(
  fieldId: string,
  courseId: string,
): { field: Field; course: Course } | undefined {
  const field = getField(fieldId);
  const course = field?.courses.find((c) => c.id === courseId);
  if (field && course) return { field, course };
  return undefined;
}

export function getLesson(
  fieldId: string,
  courseId: string,
  lessonId: string,
): { field: Field; course: Course; lesson: Lesson } | undefined {
  const ctx = getCourse(fieldId, courseId);
  const lesson = ctx?.course.lessons.find((l) => l.id === lessonId);
  if (ctx && lesson) return { ...ctx, lesson };
  return undefined;
}

export function countQuizzes(field: Field): number {
  return field.courses.reduce(
    (sum, c) => sum + c.lessons.filter((l) => l.quiz).length,
    0,
  );
}

export function countLessons(field: Field): number {
  return field.courses.reduce((sum, c) => sum + c.lessons.length, 0);
}

/** Seskupí předměty podle semestru; předměty bez `semester` spadnou do jedné skupiny. */
export function groupCoursesBySemester(
  courses: Course[],
  field?: Field,
): { semester: string | null; label: string; courses: Course[] }[] {
  const isModuleField = field?.level === "Speciální modul";
  const hasSemesters = courses.some((c) => c.semester && c.semester !== "modul");
  if (!hasSemesters) {
    return [{ semester: null, label: "", courses }];
  }

  const semesterKeys = [
    ...new Set(
      courses
        .map((c) => c.semester)
        .filter((s): s is string => !!s && s !== "modul"),
    ),
  ].sort((a, b) => semesterSortKey(a) - semesterSortKey(b));

  return semesterKeys.map((semester) => ({
    semester,
    label: formatSemesterLabel(semester, isModuleField),
    courses: courses.filter((c) => c.semester === semester),
  }));
}

function semesterSortKey(semester: string): number {
  const match = semester.match(/(\d+)/);
  return match ? parseInt(match[1], 10) : 999;
}

function formatSemesterLabel(semester: string, asModule = false): string {
  if (asModule) {
    const n = semester.match(/(\d+)/)?.[1];
    return n ? `Modul ${n}` : semester;
  }
  if (semester.includes("–")) {
    return `${semester.replace(/\.$/, "")} semestr`;
  }
  return `${semester.replace(/\.$/, "")}. semestr`;
}

const MODULE_SECTION_LABELS: Record<ModuleSection, string> = {
  veda: "Vědní moduly",
  ostatni: "Ostatní moduly",
};

const MODULE_SECTION_ORDER: ModuleSection[] = ["veda", "ostatni"];

/** Seskupí moduly podle `moduleSection` (Antarktida: vědy vs. kontext). */
export function groupCoursesByModuleSection(courses: Course[]) {
  if (!courses.some((c) => c.moduleSection)) return null;

  return MODULE_SECTION_ORDER.map((section) => ({
    section,
    label: MODULE_SECTION_LABELS[section],
    courses: courses.filter((c) => c.moduleSection === section),
  })).filter((g) => g.courses.length > 0);
}
