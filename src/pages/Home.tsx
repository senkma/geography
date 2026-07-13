import { Link } from "react-router-dom";
import { fields, countLessons, countQuizzes } from "../data";
import { Icon } from "../components/Icon";

export function Home() {
  const totalCourses = fields.reduce((s, f) => s + f.courses.length, 0);
  const totalLessons = fields.reduce((s, f) => s + countLessons(f), 0);
  const totalQuizzes = fields.reduce((s, f) => s + countQuizzes(f), 0);

  return (
    <div className="container-page">
      {/* Hero */}
      <section className="pt-14 sm:pt-20 pb-10 animate-in">
        <span className="chip mb-5">
          <Icon name="spark" className="w-3.5 h-3.5 text-emerald-700" />
          Studijní portál · geografie & klimatologie
        </span>
        <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight leading-[1.05] max-w-3xl">
          Uč se geografii <span className="gold-text">elegantně</span> — kdekoli,
          i offline.
        </h1>
        <p className="mt-5 text-lg text-[var(--text-dim)] max-w-2xl leading-relaxed">
          Osnovy, prezentace, kvízy a studijní nástroje pro bakalářský obor
          Geografie a kartografie, magisterskou Fyzickou geografii a samostatný
          modul věnovaný Antarktidě.
        </p>

        <div className="mt-8 flex flex-wrap gap-6 text-sm">
          <Stat value={String(fields.length)} label="obory" />
          <Divider />
          <Stat value={String(totalCourses)} label="předmětů" />
          <Divider />
          <Stat value={String(totalLessons)} label="lekcí" />
          <Divider />
          <Stat value={String(totalQuizzes)} label="kvízů" />
        </div>
      </section>

      {/* Fields */}
      <section className="py-8">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-[var(--text-dim)] mb-5">
          Obory
        </h2>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {fields.map((f, i) => (
            <Link
              key={f.id}
              to={`/obor/${f.id}`}
              className="card p-6 animate-in flex flex-col"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div
                className="absolute inset-x-0 top-0 h-1"
                style={{ background: `linear-gradient(90deg, ${f.accent}, transparent)` }}
              />
              <div className="flex items-center justify-between mb-4">
                <span
                  className="grid place-items-center w-12 h-12 rounded-2xl border border-black/5"
                  style={{ background: `${f.accent}1f` }}
                >
                  <Icon name={f.icon} className="w-6 h-6" />
                </span>
                <span className="chip">{f.level}</span>
              </div>
              <h3 className="text-xl font-semibold tracking-tight">{f.title}</h3>
              <p className="text-sm text-[var(--text-dim)] mt-1">{f.subtitle}</p>
              <p className="text-sm text-[var(--text-dim)] mt-3 leading-relaxed line-clamp-4">
                {f.description}
              </p>
              <div className="mt-5 pt-4 border-t border-[var(--border)] flex items-center justify-between text-sm">
                <span className="text-[var(--text-dim)]">
                  {f.courses.length}{" "}
                  {f.courses.length === 1 ? "modul" : "předmětů"}
                </span>
                <span className="inline-flex items-center gap-1.5 font-medium">
                  Otevřít <Icon name="arrow" className="w-4 h-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="text-2xl font-semibold gold-text leading-none">{value}</div>
      <div className="text-[var(--text-dim)] mt-1">{label}</div>
    </div>
  );
}

function Divider() {
  return <div className="w-px bg-[var(--border)] self-stretch" />;
}
