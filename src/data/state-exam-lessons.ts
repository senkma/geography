import type { Lesson, StateExam, StateExamSubject } from "../types";

export interface StateExamSubjectWithLessons {
  subject: StateExamSubject;
  lessons: Lesson[];
}

/** Z okruhů SZZ vytvoří jednu lekci na každý okruh. */
export function buildStateExamSubjectLessons(subject: StateExamSubject): Lesson[] {
  const lessons: Lesson[] = [];
  let n = 0;

  const baseResources = subject.topicsSource
    ? [
        {
          kind: "link" as const,
          title: "Oficiální PDF okruhů",
          url: subject.topicsSource,
          source: "IS MUNI / GÚ",
        },
      ]
    : [];

  const pushLesson = (
    id: string,
    topic: string,
    meta?: { sectionTitle?: string; courses?: string[] },
  ) => {
    n += 1;
    const blocks: Lesson["blocks"] = [
      {
        type: "callout",
        label: `Zkouškový okruh ${n}`,
        text: topic,
      },
    ];
    if (meta?.sectionTitle) {
      blocks.unshift({
        type: "heading",
        text: meta.sectionTitle,
      });
    }
    if (meta?.courses?.length) {
      blocks.push({
        type: "paragraph",
        text: `Související předměty studia: ${meta.courses.join(", ")}`,
      });
    }

    lessons.push({
      id,
      title: topic,
      summary: topic.length > 120 ? `${topic.slice(0, 117)}…` : topic,
      ...(meta?.sectionTitle ? { sectionTitle: meta.sectionTitle } : {}),
      blocks,
      resources: baseResources,
    });
  };

  if (subject.topicSections?.length) {
    subject.topicSections.forEach((sec, si) => {
      sec.topics.forEach((topic, ti) => {
        pushLesson(`${subject.id}-s${si}-t${ti}`, topic, {
          sectionTitle: sec.title,
          courses: sec.courses,
        });
      });
    });
  } else if (subject.topics?.length) {
    subject.topics.forEach((topic, ti) => {
      pushLesson(`${subject.id}-t${ti}`, topic);
    });
  }

  return lessons;
}

export function buildStateExamLessons(exam: StateExam): StateExamSubjectWithLessons[] {
  return exam.subjects.map((subject) => ({
    subject,
    lessons: buildStateExamSubjectLessons(subject),
  }));
}

export function countStateExamLessons(exam: StateExam): number {
  return buildStateExamLessons(exam).reduce((sum, s) => sum + s.lessons.length, 0);
}

export function groupLessonsBySection(lessons: Lesson[]) {
  const groups: { title: string | null; lessons: Lesson[] }[] = [];
  for (const lesson of lessons) {
    const title = lesson.sectionTitle ?? null;
    const last = groups[groups.length - 1];
    if (last && last.title === title) {
      last.lessons.push(lesson);
    } else {
      groups.push({ title, lessons: [lesson] });
    }
  }
  return groups;
}
