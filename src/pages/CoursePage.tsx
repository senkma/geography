import { Link, useParams } from "react-router-dom";
import { getCourse } from "../data";
import { Icon } from "../components/Icon";
import { ResourceList } from "../components/ResourceList";
import { LessonListItem } from "../components/LessonListItem";
import { NotFound } from "./NotFound";

export function CoursePage() {
  const { fieldId, courseId } = useParams();
  const ctx = getCourse(fieldId ?? "", courseId ?? "");
  if (!ctx) return <NotFound />;
  const { field, course } = ctx;

  return (
    <div className="container-page pt-10">
      <Link
        to={`/obor/${field.id}`}
        className="inline-flex items-center gap-1.5 text-sm text-[var(--text-dim)] hover:text-[var(--text)] transition mb-6"
      >
        <Icon name="back" className="w-4 h-4" /> {field.title}
      </Link>

      <header className="animate-in mb-8">
        <div className="flex flex-wrap items-center gap-2 mb-3">
          {course.code && <span className="chip">{course.code}</span>}
          {course.garant && <span className="chip">👤 {course.garant}</span>}
          {course.credits ? <span className="chip">{course.credits} kreditů</span> : null}
          {course.semester && <span className="chip">{course.semester} semestr</span>}
          {course.completion && <span className="chip">{course.completion}</span>}
        </div>
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight max-w-3xl">
          {course.title}
        </h1>
        <p className="mt-4 text-[var(--text-dim)] max-w-3xl leading-relaxed">
          {course.description}
        </p>
      </header>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Syllabus + lessons */}
        <div className="lg:col-span-2 space-y-8">
          <section>
            <details className="card group">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-3 p-5 select-none [&::-webkit-details-marker]:hidden">
                <div className="flex items-center gap-2">
                  <h2 className="text-sm font-semibold uppercase tracking-widest text-[var(--text-dim)]">
                    Osnova
                  </h2>
                  <span className="chip">{course.syllabus.length} témat</span>
                </div>
                <Icon
                  name="arrow"
                  className="w-4 h-4 text-[var(--text-dim)] shrink-0 transition-transform group-open:rotate-90"
                />
              </summary>
              <ol className="space-y-3 border-t border-[var(--border)] px-5 pb-5 pt-4">
                {course.syllabus.map((item, i) => (
                  <li key={i} className="flex gap-3.5 items-start">
                    <span className="grid place-items-center w-6 h-6 rounded-lg text-xs font-semibold shrink-0 bg-emerald-50 border border-[var(--border)] text-emerald-700">
                      {i + 1}
                    </span>
                    <span className="pt-0.5 text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ol>
            </details>
          </section>

          {course.lessons.length > 0 ? (
            <section>
              <h2 className="text-sm font-semibold uppercase tracking-widest text-[var(--text-dim)] mb-4">
                Lekce a materiály
              </h2>
              <div className="space-y-3">
                {course.lessons.map((l, i) => (
                  <LessonListItem
                    key={l.id}
                    lesson={l}
                    index={i}
                    to={`/obor/${field.id}/predmet/${course.id}/lekce/${l.id}`}
                  />
                ))}
              </div>
            </section>
          ) : (
            <section className="card p-5 border-dashed">
              <p className="text-sm text-[var(--text-dim)] leading-relaxed">
                Výukové lekce a vlastní materiály k tomuto předmětu můžeš doplnit
                později. Oficiální osnova z IS MUNI je uvedena výše.
              </p>
            </section>
          )}
        </div>

        {/* Sidebar */}
        <aside className="space-y-6">
          <div className="card p-5">
            <h3 className="font-semibold mb-1">Studijní tipy</h3>
            <p className="text-sm text-[var(--text-dim)] leading-relaxed">
              Projdi nejdřív osnovu. Šedé položky zatím nemají vlastní obsah —
              klikatelné jsou jen lekce s materiály.
            </p>
          </div>

          {course.resources && course.resources.length > 0 && (
            <div className="card p-5">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-[var(--text-dim)] mb-4">
                Materiály k předmětu
              </h3>
              <ResourceList
                resources={course.resources}
                layout="list"
                grouped
              />
            </div>
          )}

          <div className="card p-5 border-dashed">
            <div className="flex items-center gap-2 mb-1.5">
              <Icon name="doc" className="w-4 h-4 text-emerald-600" />
              <h3 className="font-semibold text-sm">Vlastní materiály</h3>
            </div>
            <p className="text-sm text-[var(--text-dim)] leading-relaxed">
              Prezentace, skripta a další podklady lze doplnit do složky
              content/inbox/toprocess/.
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}
