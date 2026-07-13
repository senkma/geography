/**
 * Vytvoří složky pro všechny předměty Bc./Mgr. v content/fields/.
 * Existující soubory nepřepisuje.
 */
import { existsSync, mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { courseDir, courseIdFromMuni, readJsonIfExists } from "./content/lib.mjs";

const muni = readJsonIfExists(
  new URL("./muni_courses_research.json", import.meta.url),
);

function defaultMaterials(c) {
  const items = [];
  if (c.is_muni_url) {
    items.push({
      kind: "link",
      title: "IS MUNI — detail předmětu",
      url: c.is_muni_url,
      source: "IS MUNI",
    });
  }
  if (c.study_plan_url) {
    items.push({
      kind: "link",
      title: "Studijní plán v IS MUNI",
      url: c.study_plan_url,
      source: "IS MUNI",
    });
  }
  return {
    description: `Materiály k předmětu ${c.title} (${c.code}). Doplň prezentace, skripta a odkazy.`,
    items,
  };
}

function initCourse(fieldId, c, index) {
  const id = courseIdFromMuni(c.code, c.title, index);
  const dir = courseDir(fieldId, id);
  mkdirSync(join(dir, "lessons"), { recursive: true });
  mkdirSync(join(dir, "quizzes"), { recursive: true });

  const materialsPath = join(dir, "materials.json");
  if (!existsSync(materialsPath)) {
    writeFileSync(materialsPath, `${JSON.stringify(defaultMaterials(c), null, 2)}\n`);
  }

  return id;
}

let count = 0;
muni.bachelor.forEach((c, i) => {
  initCourse("geografie-kartografie", c, i);
  count += 1;
});
muni.master.forEach((c, i) => {
  initCourse("fyzicka-geografie", c, i);
  count += 1;
});

console.log(`připraveno ${count} složek předmětů v content/fields/`);
