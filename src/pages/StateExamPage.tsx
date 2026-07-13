import { Link, useParams } from "react-router-dom";
import { getField, getStateExam, getStateExamSubjects } from "../data";
import { Icon } from "../components/Icon";
import { ResourceList } from "../components/ResourceList";
import { NotFound } from "./NotFound";
import { groupLessonsBySection } from "../data/state-exam-lessons";
import { LessonListItem } from "../components/LessonListItem";
import { lessonIsReady } from "../lib/lessonContent";
import type { Lesson, StateExamSubject } from "../types";

export function StateExamPage() {
  const { fieldId } = useParams();
  const field = getField(fieldId ?? "");
  const exam = getStateExam(fieldId ?? "");
  const subjectsWithLessons = getStateExamSubjects(fieldId ?? "");
  if (!field || !exam || !subjectsWithLessons) return <NotFound />;

  const totalLessons = subjectsWithLessons.reduce((s, x) => s + x.lessons.length, 0);
  const readyLessons = subjectsWithLessons.reduce(
    (s, x) => s + x.lessons.filter(lessonIsReady).length,
    0,
  );

  return (
    <div className="container-page pt-10 pb-16">
      <Link
        to={`/obor/${field.id}`}
        className="inline-flex items-center gap-1.5 text-sm text-[var(--text-dim)] hover:text-[var(--text)] transition mb-6"
      >
        <Icon name="back" className="w-4 h-4" /> {field.title}
      </Link>

      <header className="animate-in mb-10">
        <span className="chip mb-3">
          <Icon name="target" className="w-3.5 h-3.5 text-emerald-700" />
          Státní závěrečná zkouška
        </span>
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
          {exam.type}
        </h1>
        <p className="mt-4 text-lg text-[var(--text-dim)] leading-relaxed max-w-3xl">
          {exam.summary}
        </p>
        <p className="mt-3 text-sm text-[var(--text-dim)]">
          {exam.subjects.length} předmětů SZZ · {totalLessons} okruhů
          {readyLessons < totalLessons && ` · ${readyLessons} s obsahem`}
        </p>
      </header>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <section>
            <h2 className="text-sm font-semibold uppercase tracking-widest text-[var(--text-dim)] mb-4">
              Složení zkoušky
            </h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {exam.components.map((c, i) => (
                <div key={i} className="card p-4">
                  <span className="chip mb-2 capitalize">{c.form}</span>
                  <h3 className="font-semibold leading-snug">{c.name}</h3>
                  {c.role && (
                    <p className="text-xs text-[var(--text-dim)] mt-1">{c.role}</p>
                  )}
                  {c.details && (
                    <ul className="mt-2 text-xs text-[var(--text-dim)] space-y-0.5">
                      {Object.entries(c.details).map(([k, v]) => (
                        <li key={k}>
                          <span className="capitalize">{k.replace(/_/g, " ")}:</span> {v}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-sm font-semibold uppercase tracking-widest text-[var(--text-dim)] mb-4">
              Předměty a okruhy (lekce)
            </h2>
            <div className="space-y-6">
              {subjectsWithLessons.map(({ subject, lessons }) => (
                <SubjectBlock
                  key={subject.id}
                  fieldId={field.id}
                  subject={subject}
                  lessons={lessons}
                />
              ))}
            </div>
          </section>
        </div>

        <aside className="space-y-6">
          <div className="card p-5">
            <h3 className="font-semibold mb-2">Pravidla výběru</h3>
            <p className="text-sm text-[var(--text-dim)] leading-relaxed">
              {exam.selectionRules.description}
            </p>
            {exam.selectionRules.mandatory.length > 0 && (
              <div className="mt-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-[var(--text-dim)] mb-2">
                  Povinné
                </p>
                <ul className="text-sm space-y-1">
                  {exam.selectionRules.mandatory.map((m) => (
                    <li key={m} className="flex gap-2">
                      <span className="text-emerald-600">•</span>
                      {m}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {exam.selectionRules.mandatoryElective && (
              <div className="mt-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-[var(--text-dim)] mb-2">
                  Povinně volitelné (volba {exam.selectionRules.mandatoryElective.chooseCount} z{" "}
                  {exam.selectionRules.mandatoryElective.options.length})
                </p>
                <ul className="text-sm space-y-1">
                  {exam.selectionRules.mandatoryElective.options.map((o) => (
                    <li key={o} className="flex gap-2">
                      <span className="text-sky-600">•</span>
                      {o}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {exam.selectionRules.prerequisites && (
              <div className="mt-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-[var(--text-dim)] mb-2">
                  Podmínky přihlášení
                </p>
                <ul className="text-sm text-[var(--text-dim)] space-y-1">
                  {exam.selectionRules.prerequisites.map((p) => (
                    <li key={p}>— {p}</li>
                  ))}
                </ul>
              </div>
            )}
            {exam.selectionRules.catalogNote && (
              <p className="mt-4 text-xs text-[var(--text-dim)] border-l-2 border-amber-400/60 pl-3 leading-relaxed">
                {exam.selectionRules.catalogNote}
              </p>
            )}
          </div>

          <div className="card p-5">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-[var(--text-dim)] mb-4">
              Materiály
            </h3>
            <ResourceList
              resources={[
                ...exam.officialLinks,
                ...(exam.materials ?? []),
              ]}
              layout="list"
              grouped
            />
          </div>
        </aside>
      </div>
    </div>
  );
}

function SubjectBlock({
  fieldId,
  subject: s,
  lessons,
}: {
  fieldId: string;
  subject: StateExamSubject;
  lessons: Lesson[];
}) {
  const roleLabel =
    s.role === "povinný"
      ? "Povinný"
      : s.role === "povinně volitelný"
        ? "Povinně volitelný"
        : s.role;

  const base = `/obor/${fieldId}/studijni-zkouska/${s.id}/lekce`;

  return (
    <article className="card p-5 sm:p-6" id={s.id}>
      <div className="flex flex-wrap items-center gap-2 mb-2">
        <span className="chip">{roleLabel}</span>
        {s.examPart && <span className="chip">{s.examPart}</span>}
        <span className="chip">
          <Icon name="book" className="w-3.5 h-3.5" />
          {lessons.filter(lessonIsReady).length}/{lessons.length} s obsahem
        </span>
      </div>
      <h3 className="text-xl font-semibold tracking-tight">{s.name}</h3>
      {s.aliases && s.aliases.length > 0 && (
        <p className="text-xs text-[var(--text-dim)] mt-1">
          Také v katalogu: {s.aliases.join("; ")}
        </p>
      )}
      {s.description && (
        <p className="text-sm text-[var(--text-dim)] mt-2 leading-relaxed">{s.description}</p>
      )}

      {s.resources && s.resources.length > 0 && (
        <div className="mt-5 card p-4 bg-[var(--surface-muted)]/40">
          <h4 className="text-xs font-semibold uppercase tracking-widest text-[var(--text-dim)] mb-3">
            Materiály k předmětu SZZ
          </h4>
          <ResourceList resources={s.resources} layout="list" grouped />
        </div>
      )}

      <div className="mt-5 space-y-6">
        {groupLessonsBySection(lessons).map((group, gi) => (
          <div key={gi}>
            {group.title && (
              <div className="flex items-center gap-3 mb-3">
                <h4 className="text-sm font-semibold tracking-tight text-emerald-800">
                  {group.title}
                </h4>
                <div className="flex-1 h-px bg-[var(--border)]" />
              </div>
            )}
            <div className="space-y-2">
              {group.lessons.map((lesson, i) => (
                <LessonListItem
                  key={lesson.id}
                  lesson={lesson}
                  index={i}
                  to={`${base}/${lesson.id}`}
                  compact
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      {s.topicsSource && (
        <a
          href={s.topicsSource}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 text-sm mt-4 text-emerald-700 hover:text-emerald-800 transition"
        >
          <Icon name="link" className="w-4 h-4" /> PDF / zdroj okruhů
        </a>
      )}
    </article>
  );
}
