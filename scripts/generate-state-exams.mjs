import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import {
  contentDir,
  normalizeResources,
  readJsonIfExists,
} from "./content/lib.mjs";

const data = JSON.parse(
  readFileSync(new URL("./muni_state_exams.json", import.meta.url), "utf8"),
);

const fieldMap = {
  "b-gek-fg": "geografie-kartografie",
  "n-fyg": "fyzicka-geografie",
};

const LOCAL_TOPICS_PDF = {
  "https://cdn.muni.cz/media/3491764/b-gek-spolecna_cast.pdf":
    "/materials/geografie-kartografie/state-exams/b-gek-spolecna_cast.pdf",
  "https://cdn.muni.cz/media/3491759/b-gek-fyzg.pdf":
    "/materials/geografie-kartografie/state-exams/b-gek-fyzg.pdf",
};

function loadStateExamMaterials(fieldId) {
  const file = join(contentDir("fields", fieldId, "state-exam"), "materials.json");
  const data = readJsonIfExists(file);
  return normalizeResources(data?.items ?? data?.resources ?? []);
}

function loadSubjectMaterials(fieldId, subjectId) {
  const file = join(
    contentDir("fields", fieldId, "state-exam", "subjects", subjectId),
    "materials.json",
  );
  const data = readJsonIfExists(file);
  return normalizeResources(data?.items ?? data?.resources ?? []);
}

function resolveTopicsSource(url) {
  if (!url) return undefined;
  const local = LOCAL_TOPICS_PDF[url];
  if (local && existsSync(join(fileURLToPath(new URL("..", import.meta.url)), "public", local))) {
    return local;
  }
  return url;
}

function transformProgram(p, fieldId) {
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
    subjects: p.state_exam_subjects.map((s) => {
      const subjectResources = loadSubjectMaterials(fieldId, s.id);
      const topicsSource = resolveTopicsSource(s.topics_source);
      return {
        id: s.id,
        name: s.name,
        role: s.role,
        ...(s.exam_part ? { examPart: s.exam_part } : {}),
        ...(s.description ? { description: s.description } : {}),
        ...(s.aliases ? { aliases: s.aliases } : {}),
        ...(s.related_courses ? { relatedCourses: s.related_courses } : {}),
        ...(topicsSource ? { topicsSource } : {}),
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
        ...(subjectResources.length ? { resources: subjectResources } : {}),
      };
    }),
    officialLinks: p.official_links.map((l) => ({
      kind: "link",
      title: l.title,
      url: l.url,
      source: "Oficiální zdroj",
    })),
    ...(loadStateExamMaterials(fieldId).length
      ? { materials: loadStateExamMaterials(fieldId) }
      : {}),
  };
}

const exams = {};
for (const p of data.programs) {
  const fieldId = fieldMap[p.id];
  if (fieldId) exams[fieldId] = transformProgram(p, fieldId);
}

const out = `import type { StateExam } from "../types";

/** Oficiální podklady ke státní závěrečné zkoušce — zdroj: scripts/muni_state_exams.json + content/fields/…/state-exam/ */
export const stateExams: Record<string, StateExam> = ${JSON.stringify(exams, null, 2)};
`;

writeFileSync(new URL("../src/data/state-exams.ts", import.meta.url), out, "utf8");
console.log("wrote state-exams.ts for:", Object.keys(exams).join(", "));
