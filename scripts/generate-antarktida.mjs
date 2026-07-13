import { readFileSync, writeFileSync } from "node:fs";

const data = JSON.parse(
  readFileSync(new URL("./antarktida_modules.json", import.meta.url), "utf8"),
);

function tsString(value) {
  return JSON.stringify(value ?? "");
}

function formatCourse(mod) {
  const lines = [
    `    {`,
    `      id: ${tsString(mod.id)},`,
    `      title: ${tsString(mod.title)},`,
    `      completion: "výukový modul",`,
    ...(mod.section
      ? [`      moduleSection: ${tsString(mod.section)},`]
      : []),
    `      tags: ${JSON.stringify(mod.tags ?? ["Antarktida"])},`,
    `      description: ${tsString(mod.description)},`,
    `      syllabus: ${JSON.stringify(mod.syllabus, null, 2).replace(/\n/g, "\n      ")},`,
    `      lessons: ${JSON.stringify(mod.lessons, null, 2).replace(/\n/g, "\n      ")},`,
  ];
  if (mod.resources?.length) {
    lines.push(
      `      resources: ${JSON.stringify(mod.resources, null, 2).replace(/\n/g, "\n      ")},`,
    );
  }
  lines.push(`    }`);
  return lines.join("\n");
}

const f = data.field;
const courses = data.modules.map(formatCourse).join(",\n");

const out = `import type { Field } from "../types";

/** Generováno z scripts/antarktida_modules.json — CARP, BAS, SCAR, NASA. */
export const antarktida: Field = {
  id: ${tsString(f.id)},
  title: ${tsString(f.title)},
  subtitle: ${tsString(f.subtitle)},
  level: "Speciální modul",
  accent: ${tsString(f.accent)},
  icon: ${tsString(f.icon)},
  description: ${tsString(f.description)},
  sourceUrl: ${tsString(f.sourceUrl)},
  courses: [
${courses}
  ],
};
`;

writeFileSync(new URL("../src/data/antarktida.ts", import.meta.url), out, "utf8");
console.log(
  `wrote antarktida.ts — ${data.modules.length} modulů, ${data.modules.reduce((s, m) => s + m.lessons.length, 0)} lekcí`,
);
