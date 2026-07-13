import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

const root = new URL("..", import.meta.url);
const data = JSON.parse(
  readFileSync(new URL("./muni_courses_research.json", import.meta.url), "utf8"),
);

function courseId(code, title, index) {
  const base = code
    .replace(/^PřF:/i, "")
    .replace(/[^a-zA-Z0-9]/g, "")
    .toLowerCase();
  return base || `course-${index}`;
}

function tsString(value) {
  return JSON.stringify(value ?? "");
}

function formatCourse(c, index) {
  const id = courseId(c.code, c.title, index);
  const tag = c.category?.includes(">")
    ? c.category.split(">").pop().trim()
    : c.category || "Předmět";

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

  const lines = [
    `    {`,
    `      id: ${tsString(id)},`,
    `      code: ${tsString(c.code)},`,
    `      title: ${tsString(c.title)},`,
  ];
  if (c.garant) lines.push(`      garant: ${tsString(c.garant)},`);
  if (c.credits != null) lines.push(`      credits: ${c.credits},`);
  if (c.semester) lines.push(`      semester: ${tsString(c.semester)},`);
  if (c.completion) lines.push(`      completion: ${tsString(c.completion)},`);
  lines.push(`      tags: ${JSON.stringify([tag])},`);
  if (c.anotace) lines.push(`      description: ${tsString(c.anotace)},`);
  lines.push(`      syllabus: ${JSON.stringify(c.syllabus ?? [], null, 2).replace(/\n/g, "\n      ")},`);
  lines.push(`      lessons: [],`);
  lines.push(`      resources: ${JSON.stringify(resources, null, 2).replace(/\n/g, "\n      ")},`);
  lines.push(`    }`);
  return lines.join("\n");
}

function writeFieldFile(filename, fieldExport, fieldBody) {
  const path = new URL(`../src/data/${filename}`, import.meta.url);
  writeFileSync(path, fieldBody, "utf8");
  console.log(`wrote ${path.pathname} (${fieldExport.courses.length} courses)`);
}

const bachelorCourses = data.bachelor.map(formatCourse).join(",\n");
const masterCourses = data.master.map(formatCourse).join(",\n");

const gkTs = `import type { Field } from "../types";

/** Data z IS MUNI — studijní plán 23634 (FG specializace v rámci B-GEK). */
export const gk: Field = {
  id: "geografie-kartografie",
  title: "Geografie a kartografie",
  subtitle: "Bakalářský program (PřF MUNI) — specializace Fyzická geografie",
  level: "Bakalářské",
  accent: "#86c7a8",
  icon: "compass",
  description:
    "Bakalářský program Geografie a kartografie (B-GEK). Předměty a osnovy jsou převzaty z oficiálního studijního plánu specializace Fyzická geografie (plán 23634) v IS MUNI — společná oborová část a specializační předměty FG. Zdroj osnov: zkouškové okruhy nebo klíčová témata z katalogu předmětů.",
  sourceUrl:
    "https://is.muni.cz/plan/23634/fyzicka-geografie",
  courses: [
${bachelorCourses}
  ],
};
`;

const fgTs = `import type { Field } from "../types";

/** Data z IS MUNI — studijní plán 23699 (navazující magisterské FG). */
export const fg: Field = {
  id: "fyzicka-geografie",
  title: "Fyzická geografie",
  subtitle: "Navazující magisterský program (PřF MUNI)",
  level: "Magisterské",
  accent: "#7fb5da",
  icon: "mountain",
  description:
    "Navazující magisterský program Fyzická geografie. Předměty a osnovy jsou převzaty z oficiálního studijního plánu (plán 23699) v IS MUNI. Zahrnuje povinné předměty, metody FG, bloky specializovaných předmětů a doporučené volitelné předměty. Zdroj osnov: zkouškové okruhy nebo klíčová témata z katalogu předmětů.",
  sourceUrl:
    "https://is.muni.cz/plan/23699/fyzicka-geografie",
  courses: [
${masterCourses}
  ],
};
`;

writeFieldFile("gk.ts", { courses: data.bachelor }, gkTs);
writeFieldFile("fg.ts", { courses: data.master }, fgTs);
