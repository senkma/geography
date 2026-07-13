import type { Field, Course, Lesson } from "../types";
import { gk } from "./gk";
import { fg } from "./fg";
import { antarktida } from "./antarktida";

export const fields: Field[] = [antarktida, gk, fg];

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
): { semester: string | null; label: string; courses: Course[] }[] {
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
    label: formatSemesterLabel(semester),
    courses: courses.filter((c) => c.semester === semester),
  }));
}

function semesterSortKey(semester: string): number {
  const match = semester.match(/(\d+)/);
  return match ? parseInt(match[1], 10) : 999;
}

function formatSemesterLabel(semester: string): string {
  if (semester.includes("–")) {
    return `${semester.replace(/\.$/, "")} semestr`;
  }
  return `${semester.replace(/\.$/, "")}. semestr`;
}
