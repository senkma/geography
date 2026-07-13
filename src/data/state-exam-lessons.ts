import type { Lesson, Resource, StateExam, StateExamSubject } from "../types";

export interface StateExamSubjectWithLessons {
  subject: StateExamSubject;
  lessons: Lesson[];
}

const LOCAL_TOPIC_LABELS: Record<string, string> = {
  "/materials/geografie-kartografie/state-exams/b-gek-spolecna_cast.pdf":
    "Okruhy SZZ — společná část (archiv MU)",
  "/materials/geografie-kartografie/state-exams/b-gek-fyzg.pdf":
    "Okruhy SZZ — Fyzická geografie (archiv MU)",
};

function topicsSourceResource(url: string): Resource {
  const isLocal = url.startsWith("/materials/");
  return {
    kind: isLocal ? "document" : "link",
    title: LOCAL_TOPIC_LABELS[url] ?? "Oficiální PDF okruhů",
    url,
    source: "IS MUNI / GÚ",
  };
}

function mergeResources(...lists: (Resource[] | undefined)[]): Resource[] {
  const out: Resource[] = [];
  const seen = new Set<string>();
  for (const list of lists) {
    if (!list) continue;
    for (const r of list) {
      if (!r.url || seen.has(r.url)) continue;
      seen.add(r.url);
      out.push(r);
    }
  }
  return out;
}

/** Z okruhů SZZ vytvoří jednu lekci na každý okruh. */
export function buildStateExamSubjectLessons(subject: StateExamSubject): Lesson[] {
  const lessons: Lesson[] = [];
  let n = 0;

  const sharedResources = mergeResources(
    subject.topicsSource ? [topicsSourceResource(subject.topicsSource)] : undefined,
    subject.resources,
  );

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
      const fgCourse = meta.courses.find((c) => /z0026/i.test(c));
      if (fgCourse) {
        blocks.push({
          type: "callout",
          label: "Výuka v programu",
          text: "Podrobné lekce, přednášky a skripta k tomuto okruhu najdeš v předmětu Fyzická geografie (Z0026p) v bakalářském studiu.",
        });
      }
      const hydroCourse = meta.courses.find((c) => /z0059/i.test(c));
      if (hydroCourse) {
        blocks.push({
          type: "callout",
          label: "Výuka v programu",
          text: "Hydrologické podklady jsou také v předmětu Hydrologie (Z0059).",
        });
      }
    }

    lessons.push({
      id,
      title: topic,
      summary: topic.length > 120 ? `${topic.slice(0, 117)}…` : topic,
      ...(meta?.sectionTitle ? { sectionTitle: meta.sectionTitle } : {}),
      available: false,
      blocks,
      resources: sharedResources,
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
