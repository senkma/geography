import type { ContentBlock } from "../types";
import { Icon } from "./Icon";

export function ContentBlocks({ blocks }: { blocks: ContentBlock[] }) {
  return (
    <div className="prose-lesson">
      {blocks.map((b, i) => {
        switch (b.type) {
          case "heading":
            return (
              <h3
                key={i}
                className="text-lg font-bold mt-8 mb-3 tracking-tight text-[var(--text)]"
              >
                {b.text}
              </h3>
            );
          case "paragraph":
            return <p key={i}>{b.text}</p>;
          case "quote":
            return (
              <blockquote
                key={i}
                className="border-l-4 border-[var(--accent)] pl-4 my-4 text-[var(--text-dim)] bg-[var(--surface-muted)] py-2 pr-3 rounded-r-md"
              >
                {b.text}
              </blockquote>
            );
          case "list":
            return (
              <div key={i} className="my-4">
                {b.label && (
                  <p className="text-sm font-bold text-[var(--text)] mb-2">
                    {b.label}
                  </p>
                )}
                <ul className="space-y-2 list-none pl-0">
                  {b.items?.map((it, j) => (
                    <li key={j} className="flex gap-3">
                      <span className="mt-2.5 w-2 h-2 rounded-sm bg-[var(--accent)] shrink-0" />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          case "callout":
            return (
              <div
                key={i}
                className="my-5 rounded-md border-2 border-[var(--accent)] bg-[var(--surface-muted)] p-4 sm:p-5"
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <Icon name="spark" className="w-4 h-4 text-[var(--accent)]" />
                  <span className="text-xs font-bold uppercase tracking-wide text-[var(--accent)]">
                    {b.label ?? "Poznámka"}
                  </span>
                </div>
                <p className="!mb-0 text-[var(--text)]">{b.text}</p>
              </div>
            );
          case "table":
            return (
              <div key={i} className="my-5">
                {b.label && (
                  <p className="text-sm font-bold text-[var(--text)] mb-2">
                    {b.label}
                  </p>
                )}
                <div className="overflow-x-auto rounded-md border-2 border-[var(--border)]">
                  <table className="w-full text-sm border-collapse">
                    {b.head && (
                      <thead>
                        <tr className="bg-[var(--surface-muted)]">
                          {b.head.map((h, j) => (
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
                      {b.rows?.map((row, ri) => (
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
      })}
    </div>
  );
}
