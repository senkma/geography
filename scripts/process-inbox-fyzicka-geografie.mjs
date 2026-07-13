#!/usr/bin/env node
/**
 * Zpracuje inbox/Fyzická geografie → public/materials + content/fields lessons
 */
import {
  copyFileSync,
  existsSync,
  mkdirSync,
  readFileSync,
  renameSync,
  readdirSync,
  statSync,
  writeFileSync,
} from "node:fs";
import { basename, join } from "node:path";
import { execSync } from "node:child_process";
import { mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { fileURLToPath } from "node:url";
import { buildLessonsFromSyllabus } from "./build-syllabus-lessons.mjs";
import { contentDir, readJsonIfExists } from "./content/lib.mjs";

const root = fileURLToPath(new URL("..", import.meta.url));

function resolveInboxFg() {
  const candidates = [
    join(contentDir("inbox", "toprocess"), "Fyzická geografie"),
    join(contentDir("inbox"), "Fyzická geografie"),
  ];
  for (const p of candidates) {
    if (existsSync(p)) return p;
  }
  const processedRoot = join(contentDir("inbox", "processed", "Fyzická-geografie"));
  if (!existsSync(processedRoot)) return direct;
  const batches = readdirSync(processedRoot)
    .map((name) => join(processedRoot, name))
    .filter((p) => statSync(p).isDirectory())
    .sort((a, b) => statSync(b).mtimeMs - statSync(a).mtimeMs);
  return batches[0] ?? candidates[0];
}

const inboxFg = resolveInboxFg();
const muni = readJsonIfExists(
  join(root, "scripts", "muni_courses_research.json"),
);

const FG_COURSE = "z0026p";
const FG_FIELD = "geografie-kartografie";
const HYDRO_COURSE = "z0059";
const ANT_MODULE = "mod-kryosfera";
const ANT_LESSON_GLACIER = "atmo-glaciologie";

const fgMuni = muni.bachelor.find((c) => c.code === "PřF:Z0026p");
const hydroMuni = muni.bachelor.find((c) => c.code === "PřF:Z0059");
const fgBaseLessons = buildLessonsFromSyllabus(fgMuni, FG_COURSE);
const hydroBaseLessons = buildLessonsFromSyllabus(hydroMuni, HYDRO_COURSE);

const lessonById = (arr, id) => arr.find((l) => l.id === id);

function extractText(absPath) {
  const ext = absPath.toLowerCase().split(".").pop();
  try {
    if (ext === "pdf") {
      return execSync(`pdftotext ${JSON.stringify(absPath)} -`, {
        encoding: "utf8",
        maxBuffer: 20 * 1024 * 1024,
      });
    }
    if (ext === "doc") {
      const tmp = mkdtempSync(join(tmpdir(), "fg-doc-"));
      try {
        execSync(
          `libreoffice --headless --convert-to txt:Text --outdir ${JSON.stringify(tmp)} ${JSON.stringify(absPath)}`,
          { stdio: "pipe" },
        );
        const txt = readdirSync(tmp).find((f) => f.endsWith(".txt"));
        return txt ? readFileSync(join(tmp, txt), "utf8") : "";
      } finally {
        rmSync(tmp, { recursive: true, force: true });
      }
    }
    if (["docx"].includes(ext)) {
      return execSync(`pandoc ${JSON.stringify(absPath)} -t plain`, {
        encoding: "utf8",
        maxBuffer: 20 * 1024 * 1024,
      });
    }
    if (ext === "pptx") return extractPptxText(absPath);
  } catch {
    return "";
  }
  return "";
}

function resolveRel(...candidates) {
  for (const rel of candidates) {
    if (existsSync(join(inboxFg, rel))) return rel;
  }
  return candidates[0];
}

function extractPptxText(absPath) {
  try {
    const xml = execSync(
      `unzip -p ${JSON.stringify(absPath)} 'ppt/slides/slide*.xml'`,
      { encoding: "utf8", maxBuffer: 20 * 1024 * 1024 },
    );
    const texts = [
      ...xml.matchAll(/<a:t[^>]*>([^<]*)<\/a:t>/g),
    ]
      .map((m) => m[1].replace(/\s+/g, " ").trim())
      .filter((t) => t.length > 1);
    return [...new Set(texts)].join("\n\n");
  } catch {
    return "";
  }
}

function lessonPath(lessonId) {
  return join(
    contentDir("fields", FG_FIELD, "courses", FG_COURSE, "lessons"),
    `${lessonId}.json`,
  );
}

function mergeLesson(lessonId, { extraBlocks = [], resources = [], minutes } = {}) {
  const existing = readJsonIfExists(lessonPath(lessonId));
  if (existing) {
    if (extraBlocks.length) {
      existing.blocks = dedupeBlocks(existing.blocks, extraBlocks);
    }
    for (const res of resources) {
      if (!existing.resources.some((r) => r.url === res.url)) {
        existing.resources.unshift(res);
      }
    }
    if (minutes) existing.minutes = minutes;
    writeLesson(FG_FIELD, FG_COURSE, existing);
    return;
  }
  writeLesson(
    FG_FIELD,
    FG_COURSE,
    buildLesson(lessonId, fgBaseLessons, fgMuni, {
      extraBlocks,
      resources,
      minutes,
    }),
  );
}

function norm(s) {
  return s.replace(/\s+/g, " ").trim().toLowerCase();
}

import { textToBlocks } from "./content/format-blocks.mjs";

function dedupeBlocks(existing, extra) {
  const texts = new Set(
    existing.filter((b) => b.text).map((b) => norm(b.text)),
  );
  const out = [...existing];
  for (const b of extra) {
    if (b.text && texts.has(norm(b.text))) continue;
    if (b.items) {
      const key = b.items.map(norm).join("|");
      if (texts.has(key)) continue;
      texts.add(key);
    }
    out.splice(out.length - 1, 0, b);
  }
  return out;
}

function pubUrl(field, container, filename) {
  return `/materials/${field}/${container}/${encodeURIComponent(filename)}`;
}

function copyMaterial(relPath, field, container, filename = basename(relPath)) {
  const src = join(inboxFg, relPath);
  if (!existsSync(src)) return null;
  const destDir = join(root, "public", "materials", field, container);
  mkdirSync(destDir, { recursive: true });
  const dest = join(destDir, filename);
  copyFileSync(src, dest);
  return pubUrl(field, container, filename);
}

function kindForFile(name) {
  const ext = name.toLowerCase().split(".").pop();
  if (ext === "pdf") return "document";
  if (["ppt", "pptx"].includes(ext)) return "presentation";
  if (["doc", "docx"].includes(ext)) return "document";
  return "link";
}

function buildLesson(lessonId, baseLessons, courseMeta, {
  title,
  summary,
  extraBlocks = [],
  resources = [],
  minutes,
}) {
  const base = lessonById(baseLessons, lessonId);
  if (!base) throw new Error(`Unknown lesson ${lessonId}`);

  const blocks = [
    ...(base.sectionTitle
      ? [{ type: "heading", text: base.sectionTitle }]
      : []),
    {
      type: "callout",
      label: "Okruh",
      text: base.title,
    },
    {
      type: "callout",
      label: "Jak číst tuto lekci",
      text: "Text je výtah ze skripta a přednášek — použij ho jako mapu k učení. Detaily a obrázky najdeš v PDF/PPT v materiálech lekce.",
    },
    ...extraBlocks,
    {
      type: "list",
      label: "Doporučený postup",
      items: [
        "Projdi výtah a vlastní poznámky z přednášky",
        "Otevři přiložené PDF/PPT v materiálech lekce",
        "Propoj s předchozími a navazujícími okruhy v osnově",
      ],
    },
  ];

  return {
    id: lessonId,
    title: title ?? base.title,
    summary: summary ?? base.summary,
    minutes: minutes ?? base.minutes ?? 20,
    ...(base.sectionTitle ? { sectionTitle: base.sectionTitle } : {}),
    blocks,
    resources: [
      ...resources,
      {
        kind: "link",
        title: `IS MUNI — ${courseMeta.title}`,
        url: courseMeta.is_muni_url,
        source: "IS MUNI",
      },
    ],
  };
}

function writeLesson(field, course, lesson) {
  const dir = join(
    contentDir("fields", field, "courses", course, "lessons"),
  );
  mkdirSync(dir, { recursive: true });
  writeFileSync(
    join(dir, `${lesson.id}.json`),
    `${JSON.stringify(lesson, null, 2)}\n`,
  );
}

function appendMaterials(field, container, items) {
  const path = join(
    contentDir("fields", field, "courses", container),
    "materials.json",
  );
  const existing = readJsonIfExists(path) ?? { description: "", items: [] };
  const urls = new Set(existing.items.map((i) => i.url).filter(Boolean));
  for (const item of items) {
    if (item.url && urls.has(item.url)) continue;
    existing.items.push(item);
    if (item.url) urls.add(item.url);
  }
  existing.description =
    existing.description ||
    "Materiály zpracované z inboxu — přednášky Brázdil/Máčka, skripta a podklady ke zkoušce.";
  writeFileSync(path, `${JSON.stringify(existing, null, 2)}\n`);
}

function appendStateExamMaterials(fieldId, items) {
  const path = join(contentDir("fields", fieldId, "state-exam"), "materials.json");
  const existing = readJsonIfExists(path) ?? {
    description: "Archivní podklady ke státní závěrečné zkoušce.",
    items: [],
  };
  const urls = new Set(existing.items.map((i) => i.url).filter(Boolean));
  for (const item of items) {
    if (item.url && urls.has(item.url)) continue;
    existing.items.push(item);
    if (item.url) urls.add(item.url);
  }
  writeFileSync(path, `${JSON.stringify(existing, null, 2)}\n`);
}

function appendSzzSubjectMaterials(fieldId, subjectId, items) {
  const path = join(
    contentDir("fields", fieldId, "state-exam", "subjects", subjectId),
    "materials.json",
  );
  const existing = readJsonIfExists(path) ?? { description: "", items: [] };
  const urls = new Set(existing.items.map((i) => i.url).filter(Boolean));
  for (const item of items) {
    if (item.url && urls.has(item.url)) continue;
    existing.items.push(item);
    if (item.url) urls.add(item.url);
  }
  writeFileSync(path, `${JSON.stringify(existing, null, 2)}\n`);
}

function patchAntarcticaLesson(resource) {
  const path = join(
    contentDir("fields", "antarktida", "modules", ANT_MODULE, "lessons"),
    `${ANT_LESSON_GLACIER}.json`,
  );
  const lesson = readJsonIfExists(path);
  if (!lesson) return;
  lesson.resources = lesson.resources ?? [];
  if (!lesson.resources.some((r) => r.url === resource.url)) {
    lesson.resources.push(resource);
  }
  if (!lesson.blocks.some((b) => b.text?.includes("James Ross"))) {
    lesson.blocks.push({
      type: "callout",
      label: "Aktuální výzkum",
      text: "Článek Stringer et al. (2024) dokumentuje zrychlené změny ledovců na souostroví Jamese Rosse mezi lety 2010–2023 — oblast výzkumu stanice Mendel (CARP).",
    });
  }
  writeFileSync(path, `${JSON.stringify(lesson, null, 2)}\n`);
}

// --- Brázdil (atmosféra, klima, hydro) + Máčka/Nývlt (procesy) ---
const brazdilLessonIds = [
  "z0026p-1-uvod-do-studia-fyzicke-geografie-fg-jako-vedni-1",
  "z0026p-2-zakladni-poznatky-o-atmosfere-atmosfera-vzduch-2",
  "z0026p-3-zakladni-meteorologicke-prvky-slunecni-zareni-3",
  "z0026p-4-vseobecna-cirkulace-atmosfery-vzduchove-hmoty-4",
  "z0026p-5-zaklady-predpovedi-pocasi-zdroje-dat-pro-predp-5",
  "z0026p-7-zmeny-a-kolisani-klimatu-zakladni-klimatotvorn-6",
  "z0026p-8-hydrosfera-rozsireni-a-obeh-vody-na-zemi-hydro-7",
  "z0026p-9-hydrografie-merne-jednotky-odtoku-hydrografick-8",
  "z0026p-10-hydrometrie-mereni-vodnich-stavu-a-prutoku-9",
];

const hydroLessonIds = [
  "z0026p-8-hydrosfera-rozsireni-a-obeh-vody-na-zemi-hydro-7",
  "z0026p-9-hydrografie-merne-jednotky-odtoku-hydrografick-8",
  "z0026p-10-hydrometrie-mereni-vodnich-stavu-a-prutoku-9",
  "z0026p-11-vodni-rezim-rek-rezim-prutoku-a-typizace-rek-10",
  "z0026p-12-hydrologie-podpovrchovych-vod-zdroje-vzniku-p-11",
  "z0026p-13-hydrologie-jezer-a-nadrzi-svetove-zasoby-vody-12",
];

// FG_DN_* = přednášky doc. Máčky / Daniel Nývlt (procesy), ne Brázdil
const mackaDnLessonIds = {
  1: "z0026p-1-co-je-fyzicka-geografie-14",
  2: "z0026p-3-1-vyvoj-litosfery-17",
  3: "z0026p-3-2-horninovy-cyklus-18",
  4: "z0026p-3-3-tektonicke-procesy-19",
  5: "z0026p-3-4-zvetravaci-procesy-20",
  6: "z0026p-3-7-glacialni-procesy-23",
  7: "z0026p-3-6-fluvialni-procesy-22",
  8: "z0026p-3-8-eolicke-procesy-24",
  9: "z0026p-5-environmentalni-zmeny-29",
};

// FG_*.doc = okruhy Brázdila (číslování v souborech ≠ pořadí v osnově)
const brazdilDocLessonIds = {
  1: [brazdilLessonIds[0]],
  2: [brazdilLessonIds[2]], // teplota vzduchu
  3: [brazdilLessonIds[2], brazdilLessonIds[3]], // vlhkost + srážky
  4: [brazdilLessonIds[3]], // větry
  5: [brazdilLessonIds[4]], // počasí
  6: [brazdilLessonIds[5]], // klima
  7: hydroLessonIds, // sladká voda — sdílený materiál
  8: ["z0026p-3-10-pedogeneze-26"], // globální půdy
};

const courseMaterials = [];
const stateExamMaterials = [];
const szzFgSubjectMaterials = [];
const SZZ_SUBJECT_FG = "fyzicka-geografie";
const SZZ_SUBJECT_ZAKLADY = "zaklady-geografie-kartografie";

for (let i = 1; i <= 9; i++) {
  const rel = resolveRel(
    `Prednášky/Fyzická_geografie_DN/FG_DN_${i}.pptx`,
    `Přednášky/Fyzická_geografie_DN/FG_DN_${i}.pptx`,
  );
  const url = copyMaterial(rel, FG_FIELD, FG_COURSE, `FG_DN_${i}.pptx`);
  if (!url) continue;
  const lessonId = mackaDnLessonIds[i];
  const text = extractText(join(inboxFg, rel));
  const blocks = textToBlocks(text, {
    max: 10,
    label: `Přednáška FG_DN_${i} (Máčka/Nývlt)`,
  });
  const res = {
    kind: "presentation",
    title: `FG_DN_${i} — přednáška`,
    url,
    source: "GÚ MUNI / Máčka",
  };
  mergeLesson(lessonId, {
    extraBlocks: blocks,
    resources: [res],
    minutes: 22,
  });
  courseMaterials.push(res);
}

// --- PDF skripta FG_1, FG_uvod ---
for (const [rel, name, lessonIds] of [
  ["FG_uvod.pdf", "FG_uvod.pdf", [brazdilLessonIds[0]]],
  [
    "FG_1.pdf",
    "FG_1.pdf",
    [brazdilLessonIds[0], brazdilLessonIds[1], brazdilLessonIds[2]],
  ],
]) {
  const url = copyMaterial(rel, FG_FIELD, FG_COURSE, name);
  if (!url) continue;
  const text = extractText(join(inboxFg, rel));
  const res = {
    kind: "document",
    title: name.replace(".pdf", ""),
    url,
    source: "Brázdil — skriptum",
  };
  courseMaterials.push(res);
  for (const lessonId of lessonIds) {
    mergeLesson(lessonId, {
      extraBlocks: textToBlocks(text, { max: 6, label: "Výtah ze skripta" }),
      resources: [res],
    });
  }
}

// FG_1(1).pdf — překryv s FG_uvod, jen jako materiál předmětu
const url111 = copyMaterial("FG_1(1).pdf", FG_FIELD, FG_COURSE, "FG_prezentace_uvod.pdf");
if (url111) {
  courseMaterials.push({
    kind: "presentation",
    title: "Úvodní prezentace FG (archiv)",
    url: url111,
    source: "Brázdil",
    note: "Obsahově překrývá FG_uvod.pdf — použij jako doplňkovou prezentaci.",
  });
}

// --- Výpisky docx ---
const vypiskyMap = [
  [
    "Příjmací zkouška/Fyzická geografie/vypisky-z-fyzicke-geografie-mu-1-tema-od-brazdila.docx",
    [brazdilLessonIds[0]],
    "Výpisky — téma 1 (úvod)",
  ],
  [
    "Příjmací zkouška/Fyzická geografie/vypisky-z-fyzicke-geografie-mu-2-tema-od-brazdila-teplota.docx",
    [brazdilLessonIds[2]],
    "Výpisky — teplota a záření",
  ],
  [
    "Příjmací zkouška/Fyzická geografie/vypisky-z-fyzicke-geografie-mu-3-tema-od-brazdila-atm-vlhkost.docx",
    [brazdilLessonIds[2], brazdilLessonIds[3]],
    "Výpisky — vlhkost vzduchu",
  ],
];

for (const [rel, lessonIds, label] of vypiskyMap) {
  const fname = basename(rel);
  const url = copyMaterial(rel, FG_FIELD, FG_COURSE, fname);
  if (!url) continue;
  const text = extractText(join(inboxFg, rel));
  const extra = textToBlocks(text, { max: 10, label });
  const res = {
    kind: "document",
    title: label,
    url,
    source: "Výpisky MU",
  };
  for (const lessonId of lessonIds) {
    mergeLesson(lessonId, { extraBlocks: extra, resources: [res] });
  }
}

// --- FG_1…8.doc (Brázdil — okruhy ke zkoušce) ---
for (let n = 1; n <= 8; n++) {
  const rel = `Příjmací zkouška/Brázdil/FG_${n}.doc`;
  const lessonIds = brazdilDocLessonIds[n] ?? [];
  const url = copyMaterial(rel, FG_FIELD, FG_COURSE, `FG_${n}.doc`);
  if (!url || !lessonIds.length) continue;
  const text = extractText(join(inboxFg, rel));
  if (text.length < 50) continue;
  const extra = textToBlocks(text, {
    max: 8,
    label: `Otázky a okruhy — FG_${n}`,
  });
  const res = {
    kind: "document",
    title: `FG_${n} — okruhy Brázdil`,
    url,
    source: "Brázdil",
    ...(lessonIds.length > 1
      ? { note: "Sdílený materiál pro více okruhů hydrologie" }
      : {}),
  };
  for (const lessonId of lessonIds) {
    mergeLesson(lessonId, { extraBlocks: extra, resources: [res] });
  }
  szzFgSubjectMaterials.push(res);
}

// --- Kompletní zápisy + otázky (SZZ / sdílené) ---
for (const [rel, title, target] of [
  [
    "Příjmací zkouška/Fyzická geografie/fyzicka-geografie-kompletni-zapisy.pdf",
    "Kompletní zápisy z fyzické geografie",
    "state",
  ],
  [
    "1. semestr/Fyzicka geografie/fyzicka-geografie-vypracovane-otazky-ke-zkousce.docx",
    "Vypracované otázky ke zkoušce",
    "state",
  ],
  [
    "Příjmací zkouška/Fyzická geografie/vypracovane-otazky-z-minulych-let2.docx",
    "Vypracované otázky z minulých let",
    "state",
  ],
  [
    "Příjmací zkouška/Fyzická geografie/Vzor_testu-Geografie.pdf",
    "Vzor testu — geografie",
    "zaklady",
  ],
  [
    "1. semestr/Fyzicka geografie/uvod-do-studia-fyz-geografie.doc",
    "Úvod do studia FG",
    "course",
  ],
]) {
  const url = copyMaterial(rel, FG_FIELD, FG_COURSE, basename(rel));
  if (!url) continue;
  const res = {
    kind: kindForFile(basename(rel)),
    title,
    url,
    source: "Archiv studijních podkladů",
  };
  if (target === "state") stateExamMaterials.push(res);
  else if (target === "zaklady") appendSzzSubjectMaterials(FG_FIELD, SZZ_SUBJECT_ZAKLADY, [res]);
  else courseMaterials.push(res);
}

// --- SZZ / přijímací podklady (obecné pro obor) ---
const szzDir = join(root, "public", "materials", FG_FIELD, "state-exams");
mkdirSync(szzDir, { recursive: true });
for (const [rel, name] of [
  ["Příjmací zkouška/b-gek-fyzg.pdf", "b-gek-fyzg.pdf"],
  ["Příjmací zkouška/b-gek-spolecna_cast.pdf", "b-gek-spolecna_cast.pdf"],
  [
    "Příjmací zkouška/otazky-ze-statnic-cerven-2020.docx",
    "otazky-statnice-2020.docx",
  ],
  [
    "Příjmací zkouška/otazky-ze-statni-bakalarske-zkousky-cerven-2018.docx",
    "otazky-bakalarska-2018.docx",
  ],
]) {
  const src = join(inboxFg, rel);
  if (!existsSync(src)) continue;
  const dest = join(szzDir, name);
  copyFileSync(src, dest);
  stateExamMaterials.push({
    kind: kindForFile(name),
    title: name,
    url: `/materials/${FG_FIELD}/state-exams/${encodeURIComponent(name)}`,
    source: "SZZ / přijímací zkoušky",
    note: "Obecný podklad pro státní a přijímací zkoušky z oboru.",
  });
}

// Otázky podle témat — více lekcí
for (const [rel, lessonIds] of [
  [
    "Příjmací zkouška/Fyzická geografie/otazky-na-tema-1-a-2.docx",
    [brazdilLessonIds[0], brazdilLessonIds[1]],
  ],
  [
    "Příjmací zkouška/Fyzická geografie/otazky-na-tema-3-a-4.docx",
    [brazdilLessonIds[2], brazdilLessonIds[3]],
  ],
  [
    "Příjmací zkouška/Fyzická geografie/vetry-a-globalni-cirkulace-atmosfery.docx",
    [brazdilLessonIds[3]],
  ],
  [
    "Příjmací zkouška/Fyzická geografie/otazky-ze-tretiho-terminu-zkousky.docx",
    brazdilLessonIds.slice(0, 5),
  ],
]) {
  const url = copyMaterial(rel, FG_FIELD, FG_COURSE, basename(rel));
  if (!url) continue;
  const res = {
    kind: "document",
    title: basename(rel),
    url,
    source: "Okruhy ke zkoušce",
  };
  szzFgSubjectMaterials.push(res);
  for (const lessonId of lessonIds) {
    mergeLesson(lessonId, {
      resources: [
        {
          ...res,
          ...(lessonIds.length > 1
            ? { note: "Sdílený materiál pro více okruhů" }
            : {}),
        },
      ],
    });
  }
}

// --- Hydrologie (z0059) — distanční opora ---
const hydroUrl = copyMaterial(
  "D_FG1_Hydrologie.pdf",
  FG_FIELD,
  HYDRO_COURSE,
  "D_FG1_Hydrologie.pdf",
);
if (hydroUrl) {
  const text = extractText(join(inboxFg, "D_FG1_Hydrologie.pdf"));
  const hydroRes = {
    kind: "document",
    title: "Distanční studijní opora — Hydrologie (UP Olomouc)",
    url: hydroUrl,
    source: "Pavelková, Frajer",
    note: "Obecný studijní text k hydrologii — využij napříč lekcemi předmětu.",
  };
  appendMaterials(FG_FIELD, HYDRO_COURSE, [hydroRes]);
  szzFgSubjectMaterials.push(hydroRes);

  const hydroLessonIds = hydroBaseLessons.slice(0, 4).map((l) => l.id);
  const chunks = text.split(/\n(?=\d+\s)/).filter((c) => c.length > 200);
  hydroLessonIds.forEach((lessonId, idx) => {
    const chunk = chunks[idx] ?? text.slice(0, 4000);
    const extra = textToBlocks(chunk, {
      max: 6,
      label: "Výtah ze studijní opory",
    });
    writeLesson(
      FG_FIELD,
      HYDRO_COURSE,
      buildLesson(lessonId, hydroBaseLessons, hydroMuni, {
        extraBlocks: extra,
        resources: [hydroRes],
        minutes: 25,
      }),
    );
  });
}

// --- Antarktida — článek ---
const antRel =
  "Články/accelerated-glacier-changes-on-the-james-ross-archipelago-antarctica-from-2010-to-2023.pdf";
const antUrl = copyMaterial(antRel, "antarktida", ANT_MODULE, basename(antRel));
if (antUrl) {
  patchAntarcticaLesson({
    kind: "document",
    title: "Accelerated glacier changes on James Ross Island (2010–2023)",
    url: antUrl,
    source: "Journal of Glaciology / CARP oblast",
  });
}

// --- O studiu.docx → magistr (obecné), ne duplikovat do Bc. FG ---
const mgrUrl = copyMaterial(
  "O studiu.docx",
  "fyzicka-geografie",
  "_general",
  "O-studiu-mgr-FG.docx",
);
if (mgrUrl) {
  writeFileSync(
    join(contentDir("fields", "fyzicka-geografie"), "mgr-studijni-info.json"),
    `${JSON.stringify(
      {
        description: "Informace o navazujícím magisterském studiu FG",
        items: [
          {
            kind: "document",
            title: "O studiu — magisterská FG",
            url: mgrUrl,
            source: "MUNI",
          },
        ],
      },
      null,
      2,
    )}\n`,
  );
}

// geo_1971076040278 — bibliografie 1970, jen reference
const bibUrl = copyMaterial(
  "geo_1971076040278.pdf",
  FG_FIELD,
  FG_COURSE,
  "bibliografie-CGS-1970.pdf",
);
if (bibUrl) {
  courseMaterials.push({
    kind: "document",
    title: "Československá geografická literatura 1970",
    url: bibUrl,
    source: "Rozhledy",
    note: "Historický bibliografický přehled — obecný referenční zdroj.",
  });
}

appendStateExamMaterials(FG_FIELD, stateExamMaterials);
appendSzzSubjectMaterials(FG_FIELD, SZZ_SUBJECT_FG, szzFgSubjectMaterials);
appendMaterials(FG_FIELD, FG_COURSE, courseMaterials);

// --- Archivuj inbox složku (jen pokud je v toprocess/ nebo přímo v inbox/) ---
const archiveSources = [
  join(contentDir("inbox", "toprocess"), "Fyzická geografie"),
  join(contentDir("inbox"), "Fyzická geografie"),
];
for (const src of archiveSources) {
  if (existsSync(src) && inboxFg === src) {
    const processed = join(contentDir("inbox", "processed", "Fyzická-geografie"));
    mkdirSync(processed, { recursive: true });
    renameSync(src, join(processed, `Fyzická-geografie-${Date.now()}`));
    break;
  }
}

console.log("✓ Zpracováno: Fyzická geografie");
console.log("  → Brázdil, Máčka/Nývlt, SZZ (state-exam/), hydrologie z0059, Antarktida");
console.log("  → public/materials/…");
console.log("  → inbox složka přesunuta do processed/");
console.log("Spusť: make gen-data");
