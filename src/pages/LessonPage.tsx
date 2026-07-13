import { Link, useParams } from "react-router-dom";
import { getCourse, getLesson } from "../data";
import { Icon } from "../components/Icon";
import { ContentBlocks } from "../components/ContentBlocks";
import { ResourceList } from "../components/ResourceList";
import { QuizView } from "../components/QuizView";
import { lessonIsReady, adjacentAvailableLessons, availableLessons } from "../lib/lessonContent";
import { NotFound } from "./NotFound";

export function LessonPage() {
  const { fieldId, courseId, lessonId } = useParams();
  const ctx = getLesson(fieldId ?? "", courseId ?? "", lessonId ?? "");
  const courseCtx = getCourse(fieldId ?? "", courseId ?? "");
  if (!ctx || !courseCtx) return <NotFound />;
  const { field, course, lesson } = ctx;

  if (!lessonIsReady(lesson)) return <NotFound />;

  const { prev, next, idx } = adjacentAvailableLessons(course.lessons, lesson.id);
  const readyCount = availableLessons(course.lessons).length;

  return (
    <div className="container-page pt-10">
      <Link
        to={`/obor/${field.id}/predmet/${course.id}`}
        className="inline-flex items-center gap-1.5 text-sm text-[var(--text-dim)] hover:text-[var(--text)] transition mb-6"
      >
        <Icon name="back" className="w-4 h-4" /> {course.title}
      </Link>

      <article className="max-w-3xl mx-auto animate-in">
        <header className="mb-8">
          <div className="flex gap-2 mb-3">
            {lesson.minutes && (
              <span className="chip">
                <Icon name="clock" className="w-3.5 h-3.5" /> {lesson.minutes} min čtení
              </span>
            )}
            <span className="chip">
              Lekce {idx + 1}/{readyCount}
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight leading-tight">
            {lesson.title}
          </h1>
          {lesson.summary && (
            <p className="mt-4 text-lg text-[var(--text-dim)] leading-relaxed">
              {lesson.summary}
            </p>
          )}
        </header>

        {lesson.blocks && lesson.blocks.length > 0 && (
          <ContentBlocks blocks={lesson.blocks} />
        )}

        {(!lesson.blocks || lesson.blocks.length === 0) &&
          (!lesson.resources || lesson.resources.length === 0) && (
          <div className="card p-6 border-dashed text-center my-6">
            <Icon name="doc" className="w-8 h-8 mx-auto text-[var(--text-dim)] mb-3" />
            <p className="text-[var(--text-dim)]">
              K této lekci zatím nejsou doplněné materiály.
            </p>
          </div>
        )}

        {lesson.resources && lesson.resources.length > 0 && (
          <section className="mt-10">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-[var(--text-dim)] mb-4">
              Materiály k lekci
            </h2>
            <ResourceList resources={lesson.resources} />
          </section>
        )}

        {lesson.quiz && (
          <section className="mt-10">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-[var(--text-dim)] mb-4">
              Ověř si znalosti
            </h2>
            <QuizView quiz={lesson.quiz} />
          </section>
        )}

        {/* Prev / next */}
        <nav className="mt-12 grid sm:grid-cols-2 gap-3">
          {prev ? (
            <Link
              to={`/obor/${field.id}/predmet/${course.id}/lekce/${prev.id}`}
              className="card p-4 flex items-center gap-3 group"
            >
              <Icon name="back" className="w-5 h-5 text-[var(--text-dim)] group-hover:text-[var(--text)] transition shrink-0" />
              <div className="min-w-0">
                <p className="text-xs text-[var(--text-dim)]">Předchozí</p>
                <p className="font-medium truncate">{prev.title}</p>
              </div>
            </Link>
          ) : (
            <span />
          )}
          {next && (
            <Link
              to={`/obor/${field.id}/predmet/${course.id}/lekce/${next.id}`}
              className="card p-4 flex items-center gap-3 group sm:text-right"
            >
              <div className="min-w-0 flex-1 order-1 sm:order-none">
                <p className="text-xs text-[var(--text-dim)]">Další</p>
                <p className="font-medium truncate">{next.title}</p>
              </div>
              <Icon name="arrow" className="w-5 h-5 text-[var(--text-dim)] group-hover:text-[var(--text)] transition shrink-0 order-0 sm:order-1" />
            </Link>
          )}
        </nav>
      </article>
    </div>
  );
}
