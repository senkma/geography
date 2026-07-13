/** Vytvoří lekce z položek osnovy předmětu IS MUNI. */

function isSectionHeader(text) {
  const t = text.trim();
  if (!t) return true;
  if (/^Témata\s/i.test(t) && t.endsWith(":")) return true;
  if (/^(Přednáška|Seminář|Cvičení|Laboratoře?)\s*:/i.test(t)) return true;
  if (t.endsWith(":") && t.length < 90 && !/^\d/.test(t)) return true;
  return false;
}

export function parseSyllabusTopics(syllabus = []) {
  let sectionTitle;
  const topics = [];

  for (const raw of syllabus) {
    const title = raw.trim();
    if (!title) continue;

    if (isSectionHeader(title)) {
      sectionTitle = title.replace(/:$/, "").trim();
      continue;
    }

    topics.push({
      title,
      sectionTitle,
    });
  }

  return topics;
}

function slugify(text) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{M}/gu, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 48);
}

function estimateMinutes(title) {
  const len = title.length;
  if (len > 180) return 25;
  if (len > 100) return 20;
  if (len > 60) return 15;
  return 12;
}

function truncate(text, max) {
  if (!text || text.length <= max) return text;
  return `${text.slice(0, max - 1)}…`;
}

function buildSummary(title) {
  if (title.length <= 140) {
    return `Studijní okruh: ${title}`;
  }
  return `${title.slice(0, 137)}…`;
}

function buildBlocks(topic, course, index, total) {
  const blocks = [];

  if (topic.sectionTitle) {
    blocks.push({ type: "heading", text: topic.sectionTitle });
  }

  const intro = course.anotace
    ? `Součást předmětu ${course.title} (${course.code}). ${truncate(course.anotace, 280)}`
    : `Součást předmětu ${course.title} (${course.code}). Projdi si hlavní pojmy a souvislosti tohoto okruhu podle osnovy a doporučené literatury v IS MUNI.`;

  blocks.push({ type: "paragraph", text: intro });
  blocks.push({
    type: "callout",
    label: `Okruh ${index + 1} / ${total}`,
    text: topic.title,
  });
  blocks.push({
    type: "list",
    label: "Doporučený postup studia",
    items: [
      "Projdi hlavní pojmy a definice k tomuto tématu",
      "Doplň si poznámky podle skript, přednášek nebo literatury v IS MUNI",
      index > 0
        ? "Propoj obsah s předchozími okruhy v osnově předmětu"
        : "Nastuduj úvodní souvislosti před dalšími okruhy",
      index < total - 1
        ? "Připrav se na navazující témata v osnově"
        : "Zopakuj si celou osnovu předmětu před závěrečnou zkouškou",
    ],
  });

  return blocks;
}

function buildLessonResources(course) {
  const resources = [];
  if (course.is_muni_url) {
    resources.push({
      kind: "link",
      title: "IS MUNI — detail předmětu",
      url: course.is_muni_url,
      source: "IS MUNI",
    });
  }
  return resources;
}

export function buildLessonsFromSyllabus(course, courseId) {
  const topics = parseSyllabusTopics(course.syllabus);
  if (!topics.length) return [];

  return topics.map((topic, index) => {
    const slug = slugify(topic.title) || "okruh";
    const id = `${courseId}-${slug}-${index + 1}`.replace(/--+/g, "-");

    return {
      id,
      title: topic.title,
      summary: buildSummary(topic.title),
      minutes: estimateMinutes(topic.title),
      ...(topic.sectionTitle ? { sectionTitle: topic.sectionTitle } : {}),
      blocks: buildBlocks(topic, course, index, topics.length),
      resources: buildLessonResources(course),
    };
  });
}
