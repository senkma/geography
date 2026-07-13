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

function splitByKind(resources: Resource[]) {
  const links: Resource[] = [];
  const documents: Resource[] = [];
  for (const r of resources) {
    if (r.kind === "link") links.push(r);
    else documents.push(r);
  }
  return { links, documents };
}

function ResourceItem({
  r,
  layout,
}: {
  r: Resource;
  layout: "grid" | "list";
}) {
  const inner = (
    <div className="flex items-start gap-3 w-full min-w-0">
      <span
        className={
          layout === "list"
            ? "grid place-items-center w-8 h-8 rounded-md bg-[var(--surface-muted)] border border-[var(--border)] shrink-0"
            : "grid place-items-center w-10 h-10 rounded-md bg-[var(--surface-muted)] border-2 border-[var(--border)] shrink-0"
        }
      >
        <Icon
          name={resourceIcon[r.kind] ?? "doc"}
          className={
            layout === "list"
              ? "w-4 h-4 text-[var(--accent)]"
              : "w-5 h-5 text-[var(--accent)]"
          }
        />
      </span>
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2 flex-wrap">
          <span
            className={
              layout === "list"
                ? "font-medium text-sm leading-snug"
                : "font-medium text-[15px] leading-tight"
            }
          >
            {r.title}
          </span>
          {layout === "grid" && (
            <span className="chip">{kindLabel[r.kind] ?? "Materiál"}</span>
          )}
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
        <Icon
          name="arrow"
          className={
            layout === "list"
              ? "w-3.5 h-3.5 text-[var(--text-dim)] mt-1 shrink-0"
              : "w-4 h-4 text-[var(--text-dim)] mt-3 shrink-0"
          }
        />
      )}
    </div>
  );

  if (layout === "list") {
    const base =
      "block py-2.5 border-b border-[var(--border)] last:border-b-0 transition";
    if (r.url) {
      return (
        <a
          href={r.url}
          target="_blank"
          rel="noreferrer"
          className={`${base} hover:bg-[var(--surface-muted)] -mx-1 px-1 rounded-sm`}
        >
          {inner}
        </a>
      );
    }
    return <div className={`${base} opacity-80`}>{inner}</div>;
  }

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

function ResourceGroup({
  title,
  resources,
  layout,
}: {
  title: string;
  resources: Resource[];
  layout: "grid" | "list";
}) {
  if (resources.length === 0) return null;
  return (
    <div>
      <h4 className="text-xs font-semibold uppercase tracking-widest text-[var(--text-dim)] mb-2">
        {title}
      </h4>
      <div className={layout === "list" ? "flex flex-col" : "grid gap-2.5 sm:grid-cols-2"}>
        {resources.map((r, i) => (
          <ResourceItem key={i} r={r} layout={layout} />
        ))}
      </div>
    </div>
  );
}

export function ResourceList({
  resources,
  layout = "grid",
  grouped = false,
}: {
  resources: Resource[];
  layout?: "grid" | "list";
  grouped?: boolean;
}) {
  if (grouped) {
    const { links, documents } = splitByKind(resources);
    return (
      <div className="space-y-5">
        <ResourceGroup title="Odkazy" resources={links} layout={layout} />
        <ResourceGroup title="Dokumenty" resources={documents} layout={layout} />
      </div>
    );
  }

  return (
    <div className={layout === "list" ? "flex flex-col" : "grid gap-2.5 sm:grid-cols-2"}>
      {resources.map((r, i) => (
        <ResourceItem key={i} r={r} layout={layout} />
      ))}
    </div>
  );
}
