import type { Resource } from "../types";

const EXAM_SOURCE =
  /zkouš|zkous|szz|přijímac|prijimac|statní|statni|statnic|okruhy ke zkoušce/i;
const EXAM_TITLE =
  /otáz|otaz|zkoušk|zkousk|vzor.*test|\btestu\b|szz|b-gek|statnic/i;

export function isExamResource(r: Resource): boolean {
  if (r.url?.includes("/state-exams/")) return true;
  if (r.source && EXAM_SOURCE.test(r.source)) return true;
  return EXAM_TITLE.test(`${r.title} ${r.note ?? ""}`);
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
    if (r.kind === "link") {
      links.push(r);
      continue;
    }
    if (isPresentationResource(r)) {
      presentations.push(r);
      continue;
    }
    if (isExamResource(r)) {
      exam.push(r);
      continue;
    }
    documents.push(r);
  }

  return { links, presentations, documents, exam };
}
