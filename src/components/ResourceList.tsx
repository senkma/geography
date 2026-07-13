import type { Resource } from "../types";
import { Icon, resourceIcon } from "./Icon";

const kindLabel: Record<string, string> = {
  presentation: "Prezentace",
  document: "Dokument",
  video: "Video",
  link: "Odkaz",
  dataset: "Data",
  map: "Mapa",
  tool: "Nástroj",
};

function ResourceItem({ r }: { r: Resource }) {
  const inner = (
    <div className="flex items-start gap-3.5 w-full">
      <span className="grid place-items-center w-10 h-10 rounded-md bg-[var(--surface-muted)] border-2 border-[var(--border)] shrink-0">
        <Icon name={resourceIcon[r.kind] ?? "doc"} className="w-5 h-5 text-[var(--accent)]" />
      </span>
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="font-medium text-[15px] leading-tight">{r.title}</span>
          <span className="chip">{kindLabel[r.kind] ?? "Materiál"}</span>
          {!r.url && (
            <span className="chip border-emerald-500/40 text-emerald-700">
              brzy doplníme
            </span>
          )}
        </div>
        {r.source && (
          <p className="text-xs text-[var(--text-dim)] mt-0.5">{r.source}</p>
        )}
        {r.note && (
          <p className="text-xs text-[var(--text-dim)] mt-0.5">{r.note}</p>
        )}
      </div>
      {r.url && (
        <Icon name="arrow" className="w-4 h-4 text-[var(--text-dim)] mt-3 shrink-0" />
      )}
    </div>
  );

  const base =
    "block rounded-md border-2 border-[var(--border)] p-3.5 transition";
  if (r.url) {
    return (
      <a
        href={r.url}
        target="_blank"
        rel="noreferrer"
        className={`${base} bg-[var(--surface)] hover:bg-[var(--surface-muted)] hover:border-[var(--border-strong)]`}
      >
        {inner}
      </a>
    );
  }
  return <div className={`${base} bg-[var(--surface-muted)]`}>{inner}</div>;
}

export function ResourceList({ resources }: { resources: Resource[] }) {
  return (
    <div className="grid gap-2.5 sm:grid-cols-2">
      {resources.map((r, i) => (
        <ResourceItem key={i} r={r} />
      ))}
    </div>
  );
}
