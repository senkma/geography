import { readFileSync, writeFileSync } from "node:fs";

const data = JSON.parse(
  readFileSync(new URL("./muni_state_exams.json", import.meta.url), "utf8"),
);

const fieldMap = {
  "b-gek-fg": "geografie-kartografie",
  "n-fyg": "fyzicka-geografie",
};

function transformProgram(p) {
  const selection = p.subject_selection_rules;
  return {
    type: p.state_exam_type,
    summary: p.format.summary,
    components: p.format.components.map((c) => ({
      type: c.type,
      name: c.name,
      form: c.form,
      ...(c.role ? { role: c.role } : {}),
      ...(c.details
        ? {
            details: Object.fromEntries(
              Object.entries(c.details).map(([k, v]) => [k, String(v)]),
            ),
          }
        : {}),
    })),
    selectionRules: {
      description: selection.description,
      mandatory: selection.mandatory,
      ...(selection.mandatory_elective?.choose_count
        ? {
            mandatoryElective: {
              chooseCount: selection.mandatory_elective.choose_count,
              options: selection.mandatory_elective.options,
            },
          }
        : {}),
      elective: selection.elective ?? [],
      ...(selection.prerequisites ? { prerequisites: selection.prerequisites } : {}),
      ...(selection.catalog_note ? { catalogNote: selection.catalog_note } : {}),
    },
    subjects: p.state_exam_subjects.map((s) => ({
      id: s.id,
      name: s.name,
      role: s.role,
      ...(s.exam_part ? { examPart: s.exam_part } : {}),
      ...(s.description ? { description: s.description } : {}),
      ...(s.aliases ? { aliases: s.aliases } : {}),
      ...(s.related_courses ? { relatedCourses: s.related_courses } : {}),
      ...(s.topics_source ? { topicsSource: s.topics_source } : {}),
      ...(s.topics ? { topics: s.topics } : {}),
      ...(s.topic_sections
        ? {
            topicSections: s.topic_sections.map((sec) => ({
              title: sec.title,
              ...(sec.courses ? { courses: sec.courses } : {}),
              topics: sec.topics,
            })),
          }
        : {}),
    })),
    officialLinks: p.official_links.map((l) => ({
      kind: "link",
      title: l.title,
      url: l.url,
      source: "Oficiální zdroj",
    })),
  };
}

const exams = {};
for (const p of data.programs) {
  const fieldId = fieldMap[p.id];
  if (fieldId) exams[fieldId] = transformProgram(p);
}

const out = `import type { StateExam } from "../types";

/** Oficiální podklady ke státní závěrečné zkoušce — zdroj: scripts/muni_state_exams.json */
export const stateExams: Record<string, StateExam> = ${JSON.stringify(exams, null, 2)};
`;

writeFileSync(new URL("../src/data/state-exams.ts", import.meta.url), out, "utf8");
console.log("wrote state-exams.ts for:", Object.keys(exams).join(", "));
