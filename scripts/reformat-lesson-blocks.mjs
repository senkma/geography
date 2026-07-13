#!/usr/bin/env node
/** Přeformátuje bloky lekcí v content/ — sloučí výtahy, odstraní boilerplate. */
import { readdirSync, readFileSync, writeFileSync, statSync } from "node:fs";
import { join } from "node:path";
import { formatLessonBlocks } from "./content/format-blocks.mjs";

const root = join(import.meta.dirname, "..");
const fieldsDir = join(root, "content", "fields");

const READ_TIP = {
  type: "callout",
  label: "Jak číst tuto lekci",
  text: "Text je výtah ze skripta a přednášek — použij ho jako mapu k učení. Detaily a obrázky najdeš v PDF/PPT v materiálech lekce.",
};

const BOILERPLATE_RE =
  /^Studijní materiál k předmětu .+ — doplnění oficiální osnovy\.?$/;

function walkLessons(dir, out = []) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    const st = statSync(p);
    if (st.isDirectory()) walkLessons(p, out);
    else if (name.endsWith(".json") && dir.endsWith("lessons")) out.push(p);
  }
  return out;
}

function reformatLesson(file) {
  const lesson = JSON.parse(readFileSync(file, "utf8"));
  if (!lesson.blocks?.length) return false;

  const hadBoilerplate = lesson.blocks.some(
    (b) => b.type === "paragraph" && BOILERPLATE_RE.test(b.text?.trim() ?? ""),
  );
  const hasReadTip = lesson.blocks.some(
    (b) => b.type === "callout" && b.label === "Jak číst tuto lekci",
  );

  let blocks = lesson.blocks.filter(
    (b) => !(b.type === "paragraph" && BOILERPLATE_RE.test(b.text?.trim() ?? "")),
  );

  if (hadBoilerplate && !hasReadTip) {
    const okruhIdx = blocks.findIndex(
      (b) => b.type === "callout" && b.label === "Okruh",
    );
    const insertAt = okruhIdx >= 0 ? okruhIdx + 1 : 0;
    blocks.splice(insertAt, 0, READ_TIP);
  }

  const formatted = formatLessonBlocks(blocks);
  const changed = JSON.stringify(formatted) !== JSON.stringify(lesson.blocks);
  if (changed) {
    lesson.blocks = formatted;
    writeFileSync(file, `${JSON.stringify(lesson, null, 2)}\n`, "utf8");
  }
  return changed;
}

const files = walkLessons(fieldsDir);
let updated = 0;
for (const f of files) {
  if (reformatLesson(f)) {
    updated += 1;
    console.log("✓", f.replace(`${root}/`, ""));
  }
}
console.log(`\nHotovo: ${updated}/${files.length} lekcí přeformátováno.`);
