import { Link, useParams } from "react-router-dom";
import { getStateExamLesson } from "../data";
import { Icon } from "../components/Icon";
import { ContentBlocks } from "../components/ContentBlocks";
import { ResourceList } from "../components/ResourceList";
import { NotFound } from "./NotFound";

export function StateExamLessonPage() {
  const { fieldId, subjectId, lessonId } = useParams();
  const ctx = getStateExamLesson(fieldId ?? "", subjectId ?? "", lessonId ?? "");
  if (!ctx) return <NotFound />;
  const { field, subject, lesson, lessons } = ctx;

  const idx = lessons.findIndex((l) => l.id === lesson.id);
  const prev = idx > 0 ? lessons[idx - 1] : undefined;
  const next = idx < lessons.length - 1 ? lessons[idx + 1] : undefined;

  const base = `/obor/${field.id}/studijni-zkouska/${subject.id}/lekce`;

  return (
    <div className="container-page pt-10">
      <Link
        to={`/obor/${field.id}/studijni-zkouska`}
        className="inline-flex items-center gap-1.5 text-sm text-[var(--text-dim)] hover:text-[var(--text)] transition mb-6"
      >
        <Icon name="back" className="w-4 h-4" /> {subject.name}
      </Link>

      <article className="max-w-3xl mx-auto animate-in">
        <header className="mb-8">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="chip">
              <Icon name="target" className="w-3.5 h-3.5" /> SZZ
            </span>
            {lesson.sectionTitle && <span className="chip">{lesson.sectionTitle}</span>}
            <span className="chip">{subject.name}</span>
            <span className="chip">
              Okruh {idx + 1}/{lessons.length}
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight leading-snug">
            {lesson.title}
          </h1>
        </header>

        {lesson.blocks && lesson.blocks.length > 0 && (
          <ContentBlocks blocks={lesson.blocks} />
        )}

        {lesson.resources && lesson.resources.length > 0 && (
          <section className="mt-10">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-[var(--text-dim)] mb-4">
              Zdroje
            </h2>
            <ResourceList resources={lesson.resources} />
          </section>
        )}

        <nav className="mt-12 grid sm:grid-cols-2 gap-3">
          {prev ? (
            <Link to={`${base}/${prev.id}`} className="card p-4 flex items-center gap-3 group">
              <Icon
                name="back"
                className="w-5 h-5 text-[var(--text-dim)] group-hover:text-[var(--text)] transition shrink-0"
              />
              <div className="min-w-0">
                <p className="text-xs text-[var(--text-dim)]">Předchozí okruh</p>
                <p className="font-medium text-sm line-clamp-2">{prev.title}</p>
              </div>
            </Link>
          ) : (
            <span />
          )}
          {next && (
            <Link
              to={`${base}/${next.id}`}
              className="card p-4 flex items-center gap-3 group sm:text-right"
            >
              <div className="min-w-0 flex-1 order-1 sm:order-none">
                <p className="text-xs text-[var(--text-dim)]">Další okruh</p>
                <p className="font-medium text-sm line-clamp-2">{next.title}</p>
              </div>
              <Icon
                name="arrow"
                className="w-5 h-5 text-[var(--text-dim)] group-hover:text-[var(--text)] transition shrink-0 order-0 sm:order-1"
              />
            </Link>
          )}
        </nav>
      </article>
    </div>
  );
}
