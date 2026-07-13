/** Rozlišení lekcí s reálným obsahem vs. generovaných placeholderů z osnovy. */

const PLACEHOLDER_CALLOUT =
  /^(Okruh( \d+ \/ \d+)?|Zkouškový okruh \d+|Jak číst tuto lekci|Výuka v programu)$/;

function isPlaceholderBlock(block) {
  if (!block) return true;
  if (block.type === "paragraph") {
    const t = block.text ?? "";
    if (t.startsWith("Součást předmětu ")) return true;
    if (t.startsWith("Související předměty studia:")) return true;
  }
  if (block.type === "callout" && PLACEHOLDER_CALLOUT.test(block.label ?? "")) {
    return true;
  }
  if (block.type === "list" && /^Doporučený postup/.test(block.label ?? "")) {
    return true;
  }
  if (block.type === "heading") return true;
  return false;
}

function hasSubstantiveResources(resources) {
  if (!resources?.length) return false;
  return resources.some((r) => {
    if (!r?.url) return false;
    if (r.kind !== "link") return true;
    if (r.url.startsWith("/materials/")) return true;
    return !/is\.muni\.cz\/(predmet|plan)/i.test(r.url);
  });
}

function hasSubstantiveBlocks(blocks) {
  if (!blocks?.length) return false;
  return blocks.some((b) => !isPlaceholderBlock(b));
}

/** @param {import('../../src/types').Lesson} lesson */
export function lessonHasContent(lesson) {
  if (lesson.quiz?.questions?.length) return true;
  if (hasSubstantiveResources(lesson.resources)) return true;
  return hasSubstantiveBlocks(lesson.blocks);
}

/** @param {import('../../src/types').Lesson} lesson */
export function lessonIsReady(lesson) {
  if (typeof lesson.available === "boolean") return lesson.available;
  return lessonHasContent(lesson);
}
