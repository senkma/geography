import type { Resource } from "../types";

const EXAM_SOURCE =
  /zkouš|zkous|szz|přijímac|prijimac|statní|statni|statnic|okruhy ke zkoušce/i;
const EXAM_TITLE =
  /otáz|otaz|zkoušk|zkousk|vzor.*test|\btestu\b|szz|b-gek|statnic/i;

export function isExamResource(r: Resource): boolean {
  if (r.url?.includes("/state-exams/")) return true;
  if (r.source && EXAM_SOURCE.test(r.source)) return true;
  const text = `${r.title} ${r.note ?? ""}`;
  if (EXAM_TITLE.test(text)) return true;
  if (/szz|okruh/i.test(text) && /\.pdf(\?|$)/i.test(r.url ?? "")) return true;
  return false;
}

export function isPresentationResource(r: Resource): boolean {
  if (r.kind === "presentation") return true;
  return /\.(pptx?|odp)(\?|$)/i.test(r.url ?? "");
}

export function splitResources(resources: Resource[]) {
  const links: Resource[] = [];
  const presentations: Resource[] = [];
  const documents: Resource[] = [];
  const exam: Resource[] = [];

  for (const r of resources) {
    if (!r.url) continue;
    if (isPresentationResource(r)) {
      presentations.push(r);
      continue;
    }
    if (isExamResource(r)) {
      exam.push(r);
      continue;
    }
    if (r.kind === "link") {
      links.push(r);
      continue;
    }
    documents.push(r);
  }

  return { links, presentations, documents, exam };
}
