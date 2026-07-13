import { Link, useParams } from "react-router-dom";
import { getField, groupCoursesBySemester } from "../data";
import type { Course, Field } from "../types";
import { Icon } from "../components/Icon";
import { NotFound } from "./NotFound";

export function FieldPage() {
  const { fieldId } = useParams();
  const field = getField(fieldId ?? "");
  if (!field) return <NotFound />;

  const semesterGroups = groupCoursesBySemester(field.courses);
  const showSemesterDividers = semesterGroups.some((g) => g.semester != null);

  return (
    <div className="container-page pt-10">
      <Link
        to="/"
        className="inline-flex items-center gap-1.5 text-sm text-[var(--text-dim)] hover:text-[var(--text)] transition mb-6"
      >
        <Icon name="back" className="w-4 h-4" /> Obory
      </Link>

      <header className="animate-in mb-10">
        <div className="flex items-center gap-4">
          <span
            className="grid place-items-center w-14 h-14 rounded-2xl border border-black/5 shrink-0"
            style={{ background: `${field.accent}1f` }}
          >
            <Icon name={field.icon} className="w-7 h-7" />
          </span>
          <div>
            <span className="chip mb-1">{field.level}</span>
            <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
              {field.title}
            </h1>
          </div>
        </div>
        <p className="mt-5 text-[var(--text-dim)] max-w-3xl leading-relaxed">
          {field.description}
        </p>
        {field.sourceUrl && (
          <a
            href={field.sourceUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-sm mt-4 text-emerald-700 hover:text-emerald-800 transition"
          >
            <Icon name="link" className="w-4 h-4" /> Oficiální stránka programu
          </a>
        )}
      </header>

      <h2 className="text-sm font-semibold uppercase tracking-widest text-[var(--text-dim)] mb-6">
        {field.level === "Speciální modul" ? "Obsah modulu" : "Předměty"}
      </h2>

      <div className="space-y-2">
        {semesterGroups.map((group, gi) => (
          <section key={group.semester ?? "all"}>
            {showSemesterDividers && group.semester != null && (
              <SemesterDivider label={group.label} isFirst={gi === 0} />
            )}
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {group.courses.map((c, i) => (
                <CourseCard key={c.id} field={field} course={c} index={i} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

function SemesterDivider({ label, isFirst }: { label: string; isFirst: boolean }) {
  return (
    <div
      className={`flex items-center gap-4 ${isFirst ? "mb-5" : "my-8 pt-2"}`}
      role="separator"
    >
      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[var(--border)] to-[var(--border)]" />
      <span className="text-sm font-semibold uppercase tracking-widest text-[var(--text-dim)] px-1 shrink-0">
        {label}
      </span>
      <div className="flex-1 h-px bg-gradient-to-l from-transparent via-[var(--border)] to-[var(--border)]" />
    </div>
  );
}

function CourseCard({
  field,
  course: c,
  index,
}: {
  field: Field;
  course: Course;
  index: number;
}) {
  return (
    <Link
      to={`/obor/${field.id}/predmet/${c.id}`}
      className="card p-5 animate-in flex flex-col h-full"
      style={{ animationDelay: `${index * 40}ms` }}
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-lg font-semibold tracking-tight leading-snug">
          {c.title}
        </h3>
        {c.code && <span className="chip shrink-0">{c.code}</span>}
      </div>
      <p className="text-sm text-[var(--text-dim)] mt-2 leading-relaxed line-clamp-3 flex-1">
        {c.description}
      </p>
      <div className="mt-4 flex flex-wrap gap-2 text-xs">
        {c.garant && <span className="chip">👤 {c.garant}</span>}
        {c.credits ? <span className="chip">{c.credits} kr.</span> : null}
        {c.semester && <span className="chip">{c.semester} sem.</span>}
        <span className="chip">
          <Icon name="target" className="w-3.5 h-3.5" />
          {c.syllabus.length} témat
        </span>
        {c.lessons.length > 0 && (
          <span className="chip">
            <Icon name="book" className="w-3.5 h-3.5" />
            {c.lessons.length} lekcí
          </span>
        )}
      </div>
    </Link>
  );
}
