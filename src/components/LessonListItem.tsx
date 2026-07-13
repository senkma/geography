import { Link } from "react-router-dom";
import type { Lesson } from "../types";
import { lessonIsReady } from "../lib/lessonContent";
import { Icon } from "./Icon";

type Props = {
  lesson: Lesson;
  index: number;
  to?: string;
  compact?: boolean;
};

export function LessonListItem({ lesson, index, to, compact }: Props) {
  const ready = lessonIsReady(lesson);

  const inner = (
    <>
      <span
        className={
          ready
            ? compact
              ? "grid place-items-center w-8 h-8 rounded-lg bg-emerald-50 border border-[var(--border)] text-xs font-semibold text-emerald-700 shrink-0"
              : "grid place-items-center w-10 h-10 rounded-xl bg-white/70 border border-[var(--border)] shrink-0 font-semibold text-[var(--text-dim)] group-hover:text-emerald-700 transition"
            : compact
              ? "grid place-items-center w-8 h-8 rounded-lg bg-[var(--surface-muted)] border border-[var(--border)] text-xs font-semibold text-[var(--text-dim)] shrink-0"
              : "grid place-items-center w-10 h-10 rounded-xl bg-[var(--surface-muted)] border border-[var(--border)] shrink-0 font-semibold text-[var(--text-dim)]"
        }
      >
        {index + 1}
      </span>
      <div className="min-w-0 flex-1">
        <h3
          className={
            compact
              ? "text-sm leading-snug line-clamp-2"
              : "font-medium leading-snug"
          }
        >
          {lesson.title}
        </h3>
        {!compact && lesson.summary && ready && (
          <p className="text-sm text-[var(--text-dim)] mt-0.5 line-clamp-2">
            {lesson.summary}
          </p>
        )}
        <div className="flex flex-wrap gap-2 mt-2">
          {!ready && (
            <span className="chip opacity-80">Zatím bez obsahu</span>
          )}
          {ready && lesson.minutes && (
            <span className="chip">
              <Icon name="clock" className="w-3.5 h-3.5" /> {lesson.minutes} min
            </span>
          )}
          {ready && lesson.quiz && (
            <span className="chip">
              <Icon name="quiz" className="w-3.5 h-3.5" /> kvíz
            </span>
          )}
        </div>
      </div>
      {ready ? (
        <Icon
          name="arrow"
          className={
            compact
              ? "w-4 h-4 text-[var(--text-dim)] group-hover:text-[var(--text)] shrink-0"
              : "w-5 h-5 text-[var(--text-dim)] group-hover:text-[var(--text)] group-hover:translate-x-0.5 transition shrink-0"
          }
        />
      ) : null}
    </>
  );

  if (!ready || !to) {
    return (
      <div
        className={
          compact
            ? "flex items-center gap-3 p-3 rounded-xl border border-dashed border-[var(--border)] bg-[var(--surface-muted)]/60 opacity-70 cursor-not-allowed"
            : "card p-4 sm:p-5 flex items-center gap-4 opacity-60 cursor-not-allowed border-dashed"
        }
        aria-disabled
        title="Obsah lekce zatím není k dispozici"
      >
        {inner}
      </div>
    );
  }

  return (
    <Link
      to={to}
      className={
        compact
          ? "flex items-center gap-3 p-3 rounded-xl border border-[var(--border)] bg-white/50 hover:bg-white hover:border-emerald-500/40 transition group"
          : "card p-4 sm:p-5 flex items-center gap-4 group"
      }
    >
      {inner}
    </Link>
  );
}
