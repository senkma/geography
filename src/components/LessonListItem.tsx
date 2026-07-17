import { Link } from "react-router-dom";
import type { Lesson } from "../types";
import { lessonIsReady } from "../lib/lessonContent";
import { Icon } from "./Icon";

type Props = {
  lesson: Lesson;
  index: number;
  lessonTo?: string;
  quizTo?: string;
  compact?: boolean;
};

export function LessonListItem({ lesson, index, lessonTo, quizTo, compact }: Props) {
  const ready = lessonIsReady(lesson);
  const quizCount = lesson.quiz?.questions.length ?? 0;

  if (!ready || !lessonTo) {
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
        <LessonNumber index={index} ready={false} compact={compact} />
        <LessonMeta lesson={lesson} ready={false} compact={compact} quizCount={0} />
      </div>
    );
  }

  return (
    <div
      className={
        compact
          ? "rounded-xl border border-[var(--border)] bg-white/50 p-3"
          : "card p-4 sm:p-5"
      }
    >
      <div className={`flex gap-3 sm:gap-4 ${compact ? "items-start" : "items-center"}`}>
        <LessonNumber index={index} ready compact={compact} />
        <div className="min-w-0 flex-1">
          <LessonMeta lesson={lesson} ready compact={compact} quizCount={quizCount} />
        </div>
        <div className="flex flex-col sm:flex-row gap-2 shrink-0 self-center">
          <Link
            to={lessonTo}
            className="btn btn-sm justify-center min-w-[5.5rem]"
            title="Otevřít výklad lekce"
          >
            <Icon name="doc" className="w-3.5 h-3.5" />
            Lekce
          </Link>
          {lesson.quiz && quizTo && (
            <Link
              to={quizTo}
              className="btn btn-sm btn-primary justify-center min-w-[5.5rem]"
              title="Otevřít kvíz"
            >
              <Icon name="quiz" className="w-3.5 h-3.5" />
              Kvíz
              {quizCount > 0 && (
                <span className="opacity-90 text-xs">({quizCount})</span>
              )}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

function LessonNumber({
  index,
  ready,
  compact,
}: {
  index: number;
  ready: boolean;
  compact?: boolean;
}) {
  const cls = ready
    ? compact
      ? "grid place-items-center w-8 h-8 rounded-lg bg-emerald-50 border border-[var(--border)] text-xs font-semibold text-emerald-700 shrink-0"
      : "grid place-items-center w-10 h-10 rounded-xl bg-white/70 border border-[var(--border)] shrink-0 font-semibold text-[var(--text-dim)]"
    : compact
      ? "grid place-items-center w-8 h-8 rounded-lg bg-[var(--surface-muted)] border border-[var(--border)] text-xs font-semibold text-[var(--text-dim)] shrink-0"
      : "grid place-items-center w-10 h-10 rounded-xl bg-[var(--surface-muted)] border border-[var(--border)] shrink-0 font-semibold text-[var(--text-dim)]";

  return <span className={cls}>{index + 1}</span>;
}

function LessonMeta({
  lesson,
  ready,
  compact,
  quizCount,
}: {
  lesson: Lesson;
  ready: boolean;
  compact?: boolean;
  quizCount: number;
}) {
  return (
    <>
      <h3
        className={
          compact
            ? "text-sm leading-snug line-clamp-2 font-medium"
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
        {!ready && <span className="chip opacity-80">Zatím bez obsahu</span>}
        {ready && lesson.minutes && (
          <span className="chip">
            <Icon name="clock" className="w-3.5 h-3.5" /> {lesson.minutes} min
          </span>
        )}
        {ready && quizCount > 0 && (
          <span className="chip">
            <Icon name="quiz" className="w-3.5 h-3.5" /> {quizCount} otázek
          </span>
        )}
      </div>
    </>
  );
}
