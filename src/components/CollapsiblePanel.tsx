import type { ReactNode } from "react";
import { Icon } from "./Icon";

type Props = {
  id: string;
  title: string;
  subtitle?: string;
  icon?: "doc" | "quiz";
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: ReactNode;
};

export function CollapsiblePanel({
  id,
  title,
  subtitle,
  icon = "doc",
  open,
  onOpenChange,
  children,
}: Props) {
  return (
    <section className={`lesson-panel ${open ? "lesson-panel--open" : ""}`} id={id}>
      <button
        type="button"
        className="lesson-panel-toggle"
        aria-expanded={open}
        aria-controls={`${id}-body`}
        onClick={() => onOpenChange(!open)}
      >
        <span className="lesson-panel-toggle-icon">
          <Icon name={icon} className="w-4 h-4" />
        </span>
        <span className="lesson-panel-toggle-text">
          <span className="lesson-panel-title">{title}</span>
          {subtitle && <span className="lesson-panel-subtitle">{subtitle}</span>}
        </span>
        <Icon
          name="arrow"
          className={`lesson-panel-chevron w-4 h-4 shrink-0 ${open ? "lesson-panel-chevron--open" : ""}`}
        />
      </button>
      {open && (
        <div className="lesson-panel-body" id={`${id}-body`}>
          {children}
        </div>
      )}
    </section>
  );
}
