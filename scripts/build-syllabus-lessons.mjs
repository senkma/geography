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

function buildSummary(title) {
  if (title.length <= 140) {
    return `Studijní okruh: ${title}`;
  }
  return `${title.slice(0, 137)}…`;
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
      available: false,
    };
  });
}
