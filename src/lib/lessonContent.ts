import type { ContentBlock, Lesson } from "../types";

const PLACEHOLDER_CALLOUT =
  /^(Okruh( \d+ \/ \d+)?|Zkouškový okruh \d+|Jak číst tuto lekci|Výuka v programu)$/;

function isPlaceholderBlock(block: ContentBlock): boolean {
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

function hasSubstantiveResources(lesson: Lesson): boolean {
  return (lesson.resources ?? []).some((r) => {
    if (!r.url) return false;
    if (r.kind !== "link") return true;
    if (r.url.startsWith("/materials/")) return true;
    return !/is\.muni\.cz\/(predmet|plan)/i.test(r.url);
  });
}

function hasSubstantiveBlocks(blocks?: ContentBlock[]): boolean {
  if (!blocks?.length) return false;
  return blocks.some((b) => !isPlaceholderBlock(b));
}

export function lessonHasContent(lesson: Lesson): boolean {
  if (lesson.quiz?.questions?.length) return true;
  if (hasSubstantiveResources(lesson)) return true;
  return hasSubstantiveBlocks(lesson.blocks);
}

export function lessonIsReady(lesson: Lesson): boolean {
  if (typeof lesson.available === "boolean") return lesson.available;
  return lessonHasContent(lesson);
}

export function availableLessons(lessons: Lesson[]): Lesson[] {
  return lessons.filter(lessonIsReady);
}

export function adjacentAvailableLessons(lessons: Lesson[], currentId: string) {
  const list = availableLessons(lessons);
  const idx = list.findIndex((l) => l.id === currentId);
  return {
    list,
    idx,
    prev: idx > 0 ? list[idx - 1] : undefined,
    next: idx >= 0 && idx < list.length - 1 ? list[idx + 1] : undefined,
  };
}
