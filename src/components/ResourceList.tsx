import type { Resource } from "../types";
import { Icon, resourceIcon } from "./Icon";
import { isLocalMaterial, materialUrl } from "../lib/materialUrl";
import { splitResources } from "../lib/resourceGroups";

function ResourceItem({
  r,
  layout,
}: {
  r: Resource;
  layout: "grid" | "list";
}) {
  const href = materialUrl(r.url);
  const downloadFile = href && r.kind !== "link" && isLocalMaterial(href);
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
            <span className="chip">{r.kind === "link" ? "Odkaz" : "Materiál"}</span>
          )}
        </div>
        {r.source && (
          <p className="text-xs text-[var(--text-dim)] mt-0.5">{r.source}</p>
        )}
        {r.note && (
          <p className="text-xs text-[var(--text-dim)] mt-0.5">{r.note}</p>
        )}
      </div>
      {href && (
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
    return (
      <a
        href={href}
        {...(downloadFile ? { download: "" } : { target: "_blank", rel: "noreferrer" })}
        className={`${base} hover:bg-[var(--surface-muted)] -mx-1 px-1 rounded-sm`}
      >
        {inner}
      </a>
    );
  }

  return (
    <a
      href={href}
      {...(downloadFile ? { download: "" } : { target: "_blank", rel: "noreferrer" })}
      className="block rounded-md border-2 border-[var(--border)] p-3.5 transition bg-[var(--surface)] hover:bg-[var(--surface-muted)] hover:border-[var(--border-strong)]"
    >
      {inner}
    </a>
  );
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
  const items = resources.filter((r) => r.url);

  if (grouped) {
    const { links, presentations, documents, exam } = splitResources(items);
    return (
      <div className="space-y-5">
        <ResourceGroup title="Odkazy" resources={links} layout={layout} />
        <ResourceGroup title="Prezentace" resources={presentations} layout={layout} />
        <ResourceGroup title="Dokumenty" resources={documents} layout={layout} />
        <ResourceGroup title="Zkouška" resources={exam} layout={layout} />
      </div>
    );
  }

  return (
    <div className={layout === "list" ? "flex flex-col" : "grid gap-2.5 sm:grid-cols-2"}>
      {items.map((r, i) => (
        <ResourceItem key={i} r={r} layout={layout} />
      ))}
    </div>
  );
}
