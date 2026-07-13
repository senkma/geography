import { useMemo } from "react";
import type { ContentBlock } from "../types";
import { formatLessonBlocks } from "../lib/formatLessonBlocks";
import { Icon } from "./Icon";

function Block({ block }: { block: ContentBlock }) {
  switch (block.type) {
    case "paragraph":
      return <p className="lesson-p">{block.text}</p>;
    case "quote":
      return (
        <blockquote className="lesson-quote">
          {block.text}
        </blockquote>
      );
    case "list":
      return (
        <div className="lesson-list-wrap">
          {block.label && (
            <p className="lesson-list-label">{block.label}</p>
          )}
          <ul className="lesson-list">
            {block.items?.map((it, j) => (
              <li key={j} className="lesson-list-item">
                <span className="lesson-bullet" aria-hidden />
                <span>{it}</span>
              </li>
            ))}
          </ul>
        </div>
      );
    case "callout": {
      const isStudyTip =
        block.label === "Doporučený postup" ||
        block.label === "Doporučený postup studia" ||
        block.label === "Jak číst tuto lekci";
      const isOkruh = block.label === "Okruh";
      return (
        <div
          className={
            isStudyTip
              ? "lesson-tip"
              : isOkruh
                ? "lesson-okruh"
                : "lesson-callout"
          }
        >
          <div className="lesson-callout-head">
            {!isOkruh && (
              <Icon
                name={isStudyTip ? "doc" : "spark"}
                className="w-4 h-4 text-[var(--accent)] shrink-0"
              />
            )}
            <span className="lesson-callout-label">
              {block.label ?? "Poznámka"}
            </span>
          </div>
          <p className="lesson-callout-text">{block.text}</p>
        </div>
      );
    }
    case "table":
      return (
        <div className="my-5">
          {block.label && (
            <p className="lesson-list-label">{block.label}</p>
          )}
          <div className="overflow-x-auto rounded-md border-2 border-[var(--border)]">
            <table className="w-full text-sm border-collapse">
              {block.head && (
                <thead>
                  <tr className="bg-[var(--surface-muted)]">
                    {block.head.map((h, j) => (
                      <th
                        key={j}
                        className="text-left font-bold px-4 py-2.5 border-b-2 border-[var(--border)]"
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
              )}
              <tbody>
                {block.rows?.map((row, ri) => (
                  <tr key={ri} className="odd:bg-[var(--surface-muted)]">
                    {row.map((cell, ci) => (
                      <td
                        key={ci}
                        className="px-4 py-2.5 border-b border-[var(--border)] last:border-b-0 align-top"
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );
    default:
      return null;
  }
}

type Section = {
  heading?: ContentBlock;
  blocks: ContentBlock[];
};

function groupSections(blocks: ContentBlock[]): Section[] {
  const sections: Section[] = [];
  let current: Section = { blocks: [] };

  for (const block of blocks) {
    if (block.type === "heading") {
      if (current.heading || current.blocks.length) sections.push(current);
      current = { heading: block, blocks: [] };
      continue;
    }
    current.blocks.push(block);
  }
  if (current.heading || current.blocks.length) sections.push(current);
  return sections;
}

export function ContentBlocks({ blocks }: { blocks: ContentBlock[] }) {
  const formatted = useMemo(() => formatLessonBlocks(blocks), [blocks]);
  const sections = useMemo(() => groupSections(formatted), [formatted]);

  return (
    <div className="prose-lesson">
      {sections.map((section, si) => {
        if (!section.heading) {
          return section.blocks.map((b, bi) => (
            <Block key={`${si}-${bi}`} block={b} />
          ));
        }

        return (
          <section key={si} className="lesson-section">
            <h3 className="lesson-section-title">{section.heading.text}</h3>
            <div className="lesson-section-body">
              {section.blocks.map((b, bi) => (
                <Block key={`${si}-${bi}`} block={b} />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
