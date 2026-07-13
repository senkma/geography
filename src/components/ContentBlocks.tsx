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
                className="text-lg font-semibold mt-8 mb-3 tracking-tight"
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
                className="border-l-2 border-emerald-400/60 pl-4 my-4 italic text-[var(--text-dim)]"
              >
                {b.text}
              </blockquote>
            );
          case "list":
            return (
              <div key={i} className="my-4">
                {b.label && (
                  <p className="text-sm font-semibold text-[var(--text-dim)] uppercase tracking-wider mb-2">
                    {b.label}
                  </p>
                )}
                <ul className="space-y-2">
                  {b.items?.map((it, j) => (
                    <li key={j} className="flex gap-3">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
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
                className="my-5 rounded-2xl border border-emerald-500/25 bg-gradient-to-br from-emerald-200/50 to-sky-100/30 p-4 sm:p-5"
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <Icon name="spark" className="w-4 h-4 text-emerald-600" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-emerald-700">
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
                  <p className="text-sm font-semibold text-[var(--text-dim)] uppercase tracking-wider mb-2">
                    {b.label}
                  </p>
                )}
                <div className="overflow-x-auto rounded-xl border border-[var(--border)]">
                  <table className="w-full text-sm border-collapse">
                    {b.head && (
                      <thead>
                        <tr className="bg-emerald-100/60">
                          {b.head.map((h, j) => (
                            <th
                              key={j}
                              className="text-left font-semibold px-4 py-2.5 border-b border-[var(--border)]"
                            >
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                    )}
                    <tbody>
                      {b.rows?.map((row, ri) => (
                        <tr key={ri} className="odd:bg-black/[0.02]">
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
