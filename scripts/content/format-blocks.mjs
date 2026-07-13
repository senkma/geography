/**
 * Normalizace výtahů z PDF/PPT/DOC do čitelnějších content bloků.
 * Používá se při generování i v UI (přes src/lib/formatLessonBlocks.ts).
 */

const BOILERPLATE_RE =
  /^Studijní materiál k předmětu .+ — doplnění oficiální osnovy\.?$/;

const SECTION_NUM_RE = /^(\d+(?:\.\d+)*)\.?\s+/;

function isFigureOrPageRef(text) {
  return (
    /\d+\.\d+\/\d+/.test(text) ||
    /^Obr\.\s*\d/i.test(text) ||
    /^Tab\.\s*\d/i.test(text) ||
    /^Kap\.\s*\d/i.test(text)
  );
}

function splitSectionHeading(text) {
  const t = cleanItem(text);
  if (!SECTION_NUM_RE.test(t) || isFigureOrPageRef(t)) return null;

  const m = t.match(/^(\d+(?:\.\d+)*)\.?\s+(.+)$/s);
  if (!m) return null;

  const num = m[1];
  const rest = m[2].trim();
  const depth = num.split(".").length;

  let title = rest;
  let body = null;

  const bulletIdx = rest.indexOf(" • ");
  if (bulletIdx > 0 && bulletIdx <= 120) {
    title = rest.slice(0, bulletIdx).trim();
    body = rest.slice(bulletIdx + 3).trim();
  }

  const looksLikeHeading =
    !body &&
    (rest.length <= 95 ||
      (depth === 1 && rest.length <= 130) ||
      (depth >= 2 && rest.length <= 80 && !/(?<=[.!?])\s/.test(rest)));

  if (!looksLikeHeading && !body) return null;

  const blocks = [
    {
      type: "subheading",
      text: `${num} ${title}`,
      label: String(depth),
    },
  ];

  if (body) {
    const items = body
      .split(/\s*•\s*/)
      .map(cleanItem)
      .filter((p) => p.length > 8);
    if (items.length >= 2) {
      blocks.push({ type: "list", items });
    } else {
      blocks.push({ type: "paragraph", text: body });
    }
  }

  return blocks;
}

function promoteListHeadings(block) {
  if (block.type !== "list" || !block.items?.length) return [block];

  const out = [];
  let batch = [];
  let batchLabel = block.label;

  const flush = () => {
    if (!batch.length) return;
    out.push({ type: "list", label: batchLabel, items: batch });
    batch = [];
    batchLabel = undefined;
  };

  for (const raw of block.items) {
    const promoted = splitSectionHeading(raw);
    if (promoted) {
      flush();
      out.push(...promoted);
    } else {
      batch.push(cleanItem(raw));
    }
  }
  flush();
  return out.length ? out : [block];
}

function promoteSectionHeadings(blocks) {
  const out = [];
  for (const block of blocks) {
    if (block.type === "paragraph" && block.text) {
      const promoted = splitSectionHeading(block.text);
      if (promoted) {
        out.push(...promoted);
        continue;
      }
    }
    if (block.type === "list") {
      out.push(...promoteListHeadings(block));
      continue;
    }
    out.push(block);
  }
  return out;
}

function cleanItem(text) {
  return text
    .replace(/^[\s•·–—\-=]+/, "")
    .replace(/\s+/g, " ")
    .trim();
}

function isShortLine(text) {
  const t = cleanItem(text);
  if (!t) return true;
  if (t.length <= 18) return true;
  if (t.length <= 110 && !/(?<=[.!?])\s+[A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]/.test(t)) {
    return true;
  }
  return false;
}

function splitEnumerated(text) {
  const parts = text
    .split(/\s+(?=(?:[a-z]\)|\d+\.)\s)/i)
    .map(cleanItem)
    .filter((p) => p.length > 8);
  return parts.length >= 2 ? parts : null;
}

function splitDashList(text) {
  const parts = text
    .split(/\s+-\s+/)
    .map(cleanItem)
    .filter((p) => p.length > 6);
  if (parts.length >= 3) return parts;
  if (parts.length === 2 && text.length > 120) return parts;
  return null;
}

function splitSentences(text) {
  const parts = text
    .split(/(?<=[.!?])\s+(?=[A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ0-9])/)
    .map(cleanItem)
    .filter((p) => p.length > 25);
  return parts.length >= 2 ? parts : null;
}

function parseDefinition(text) {
  const t = cleanItem(text);
  if (t.startsWith("=")) {
    return { label: "Definice", text: t.slice(1).trim() };
  }
  const colon = t.match(/^([^:]{3,70}?):\s+(.+)$/s);
  if (colon && !/https?:\/\//i.test(colon[1]) && colon[2].length > 15) {
    const term = colon[1].trim();
    if (/^(Literatura|Obr|Tab|Kap|Prof|Mgr|RNDr|podzimní)/i.test(term)) {
      return null;
    }
    return { label: term, text: colon[2].trim() };
  }
  return null;
}

function parseQuestionLead(text) {
  const m = text.match(/^(Co je [^?]+\?)\s+(.+)$/s);
  if (m) {
    return [
      { type: "callout", label: m[1], text: m[2].trim() },
    ];
  }
  const dots = text.match(/^([^…]{8,80})…\s+(.+)$/s);
  if (dots) {
    return [
      { type: "callout", label: dots[1].trim(), text: dots[2].trim() },
    ];
  }
  return null;
}

function paragraphToBlocks(text) {
  const t = cleanItem(text);
  if (!t) return [];

  const question = parseQuestionLead(t);
  if (question) return question;

  const def = parseDefinition(t);
  if (def) return [{ type: "callout", ...def }];

  for (const splitter of [splitDashList, splitEnumerated, splitSentences]) {
    const items = splitter(t);
    if (items && items.length >= 2) {
      return [{ type: "list", items }];
    }
  }

  if (t.length > 420) {
    const items = splitSentences(t) ?? splitDashList(t);
    if (items && items.length >= 2) {
      return [{ type: "list", label: "Klíčové body", items }];
    }
  }

  return [{ type: "paragraph", text: t }];
}

function expandCallout(block) {
  if (block.type !== "callout" || !block.text) return [block];
  const multiQ = block.text.match(/\?/g);
  if (multiQ && multiQ.length >= 2) {
    const items = block.text
      .split(/\s+(?=(?:Kde|Proč|Jak|Co|A co)[^?]{0,120}\?)/i)
      .map(cleanItem)
      .filter((p) => p.length > 12);
    if (items.length >= 2) {
      return [{ type: "list", label: block.label, items }];
    }
  }
  return [block];
}

function postProcessBlocks(blocks) {
  const out = [];
  for (const b of blocks) {
    if (b.type === "callout") out.push(...expandCallout(b));
    else out.push(b);
  }
  return promoteSectionHeadings(out);
}
function mergeAdjacentLists(blocks) {
  const out = [];
  for (const b of blocks) {
    const prev = out[out.length - 1];
    if (
      b.type === "list" &&
      prev?.type === "list" &&
      prev.label === b.label &&
      prev.label === "Klíčové body"
    ) {
      prev.items = [...(prev.items ?? []), ...(b.items ?? [])];
      continue;
    }
    out.push(b);
  }
  return out;
}

function expandListBlock(block) {
  if (block.type !== "list" || !block.items?.length) return [block];
  const items = [];
  for (const raw of block.items) {
    const sub =
      splitDashList(raw) ??
      splitEnumerated(raw) ??
      (raw.length > 280 ? splitSentences(raw) : null);
    if (sub && sub.length >= 2) items.push(...sub);
    else items.push(cleanItem(raw));
  }
  const unique = [];
  const seen = new Set();
  for (const it of items) {
    const key = it.toLowerCase();
    if (!it || seen.has(key)) continue;
    seen.add(key);
    unique.push(it);
  }
  return [{ ...block, items: unique }];
}

/**
 * @param {import('../../src/types').ContentBlock[]} blocks
 */
export function formatLessonBlocks(blocks) {
  if (!blocks?.length) return [];

  const out = [];
  let buffer = [];

  const flushBuffer = () => {
    if (!buffer.length) return;
    if (buffer.length >= 2 && buffer.every(isShortLine)) {
      out.push({
        type: "list",
        label: "Body přednášky",
        items: buffer.map(cleanItem).filter(Boolean),
      });
    } else {
      for (const t of buffer) {
        out.push(...paragraphToBlocks(t));
      }
    }
    buffer = [];
  };

  for (const block of blocks) {
    if (block.type === "paragraph" && block.text) {
      if (BOILERPLATE_RE.test(block.text.trim())) continue;
      if (isShortLine(block.text)) {
        buffer.push(block.text);
        continue;
      }
      flushBuffer();
      out.push(...paragraphToBlocks(block.text));
      continue;
    }

    flushBuffer();

    if (block.type === "list") {
      out.push(...expandListBlock(block));
      continue;
    }

    out.push(block);
  }

  flushBuffer();
  return postProcessBlocks(mergeAdjacentLists(out));
}

/**
 * @param {string} text
 * @param {{ max?: number, label?: string }} [opts]
 */
export function textToBlocks(text, { max = 14, label } = {}) {
  const raw = text
    .split(/\n{2,}/)
    .map((p) => p.replace(/\s+/g, " ").trim())
    .filter((p) => p.length > 20 && !/^[\d\s.]+$/.test(p));

  const seen = new Set();
  const paragraphs = raw
    .filter((p) => {
      const key = p.toLowerCase();
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    })
    .slice(0, max * 2);

  const draft = [];
  if (label) draft.push({ type: "heading", text: label });
  for (const p of paragraphs) {
    draft.push({ type: "paragraph", text: p });
  }

  return formatLessonBlocks(draft).slice(0, max + 4);
}
