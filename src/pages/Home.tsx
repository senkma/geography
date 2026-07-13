import { Link } from "react-router-dom";
import { fields, countLessons, countQuizzes } from "../data";
import { Icon } from "../components/Icon";

export function Home() {
  const totalCourses = fields.reduce((s, f) => s + f.courses.length, 0);
  const totalLessons = fields.reduce((s, f) => s + countLessons(f), 0);
  const totalQuizzes = fields.reduce((s, f) => s + countQuizzes(f), 0);

  return (
    <div className="container-page">
      <section className="pt-10 sm:pt-14 pb-8 animate-in border-b-2 border-[var(--border)]">
        <span className="chip mb-4">
          <Icon name="spark" className="w-3.5 h-3.5 text-[var(--accent)]" />
          Studijní portál · geografie & klimatologie
        </span>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight leading-tight max-w-3xl text-[var(--text)]">
          Uč se geografii — kdekoli, i offline.
        </h1>
        <p className="mt-4 text-base sm:text-lg text-[var(--text-dim)] max-w-2xl leading-relaxed">
          Osnovy, prezentace, kvízy a studijní nástroje pro bakalářský obor
          Geografie a kartografie, magisterskou Fyzickou geografii a samostatný
          modul věnovaný Antarktidě.
        </p>

        <div className="mt-6 flex flex-wrap gap-5 text-sm">
          <Stat value={String(fields.length)} label="obory" />
          <Divider />
          <Stat value={String(totalCourses)} label="předmětů" />
          <Divider />
          <Stat value={String(totalLessons)} label="lekcí" />
          <Divider />
          <Stat value={String(totalQuizzes)} label="kvízů" />
        </div>
      </section>

      <section className="py-8">
        <h2 className="text-base font-bold text-[var(--text)] mb-4">Obory</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {fields.map((f, i) => (
            <Link
              key={f.id}
              to={`/obor/${f.id}`}
              className="card p-5 animate-in flex flex-col"
              style={{ animationDelay: `${i * 40}ms` }}
            >
              <div
                className="absolute inset-y-0 left-0 w-1"
                style={{ background: f.accent }}
              />
              <div className="flex items-center justify-between gap-3 mb-3 pl-2">
                <span
                  className="grid place-items-center w-11 h-11 rounded-md border-2 border-[var(--border)] shrink-0"
                  style={{ background: `${f.accent}22` }}
                >
                  <Icon name={f.icon} className="w-5 h-5" />
                </span>
                <span className="chip">{f.level}</span>
              </div>
              <h3 className="text-lg font-bold tracking-tight pl-2 text-[var(--text)]">
                {f.title}
              </h3>
              <p className="text-sm font-medium text-[var(--text-dim)] mt-1 pl-2">
                {f.subtitle}
              </p>
              <p className="text-sm text-[var(--text-dim)] mt-3 pl-2 leading-relaxed">
                {f.description}
              </p>
              <div className="mt-4 pt-3 border-t-2 border-[var(--border)] flex items-center justify-between text-sm pl-2">
                <span className="font-medium text-[var(--text-dim)]">
                  {f.courses.length}{" "}
                  {f.courses.length === 1 ? "modul" : "předmětů"}
                </span>
                <span className="inline-flex items-center gap-1 font-semibold text-[var(--accent)]">
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
      <div className="text-2xl font-bold text-[var(--accent)] leading-none tabular-nums">
        {value}
      </div>
      <div className="text-[var(--text-dim)] mt-1 font-medium">{label}</div>
    </div>
  );
}

function Divider() {
  return <div className="w-0.5 bg-[var(--border)] self-stretch" />;
}
