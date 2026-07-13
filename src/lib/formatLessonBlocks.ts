import type { ContentBlock } from "../types";
// @ts-expect-error — sdílená logika se skripty buildu
import { formatLessonBlocks as format } from "../../scripts/content/format-blocks.mjs";

export function formatLessonBlocks(blocks: ContentBlock[] | undefined): ContentBlock[] {
  return format(blocks ?? []) as ContentBlock[];
}
