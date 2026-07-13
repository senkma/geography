import { useMemo, useState } from "react";
import type { Quiz } from "../types";
import { Icon } from "./Icon";

export function QuizView({ quiz }: { quiz: Quiz }) {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);

  const score = useMemo(() => {
    let s = 0;
    quiz.questions.forEach((q, i) => {
      const chosen = answers[i];
      if (chosen != null && q.options[chosen]?.correct) s += 1;
    });
    return s;
  }, [answers, quiz.questions]);

  const total = quiz.questions.length;
  const allAnswered = Object.keys(answers).length === total;

  function choose(qi: number, oi: number) {
    if (submitted) return;
    setAnswers((a) => ({ ...a, [qi]: oi }));
  }

  function reset() {
    setAnswers({});
    setSubmitted(false);
  }

  return (
    <div className="card p-5 sm:p-6">
      <div className="flex items-center gap-2.5 mb-5">
        <span className="grid place-items-center w-9 h-9 rounded-md bg-[var(--surface-muted)] border-2 border-[var(--border)]">
          <Icon name="quiz" className="w-5 h-5 text-[var(--accent-2)]" />
        </span>
        <div>
          <h3 className="font-semibold leading-tight">{quiz.title}</h3>
          <p className="text-xs text-[var(--text-dim)]">
            {total} {total === 1 ? "otázka" : total < 5 ? "otázky" : "otázek"}
          </p>
        </div>
      </div>

      <ol className="space-y-6">
        {quiz.questions.map((q, qi) => {
          const chosen = answers[qi];
          return (
            <li key={qi}>
              <p className="font-medium mb-3">
                <span className="text-[var(--text-dim)] mr-2">{qi + 1}.</span>
                {q.question}
              </p>
              <div className="grid gap-2">
                {q.options.map((opt, oi) => {
                  const isChosen = chosen === oi;
                  const showState = submitted && (isChosen || opt.correct);
                  const correct = opt.correct;
                  let cls =
                    "text-left px-4 py-3 rounded-xl border transition flex items-center gap-3 ";
                  if (showState) {
                    cls += correct
                      ? "border-emerald-500/70 bg-emerald-100 text-emerald-900"
                      : "border-rose-400/70 bg-rose-100 text-rose-900";
                  } else if (isChosen) {
                    cls += "border-sky-400/70 bg-sky-100";
                  } else {
                    cls +=
                      "border-[var(--border)] bg-white/60 hover:bg-white";
                  }
                  return (
                    <button
                      key={oi}
                      type="button"
                      onClick={() => choose(qi, oi)}
                      className={cls}
                      disabled={submitted}
                    >
                      <span className="grid place-items-center w-5 h-5 shrink-0 rounded-full border border-current/40 text-[11px]">
                        {submitted && correct ? (
                          <Icon name="check" className="w-3.5 h-3.5" />
                        ) : submitted && isChosen && !correct ? (
                          <Icon name="x" className="w-3.5 h-3.5" />
                        ) : (
                          String.fromCharCode(65 + oi)
                        )}
                      </span>
                      <span className="text-sm">{opt.text}</span>
                    </button>
                  );
                })}
              </div>
              {submitted && q.explanation && (
                <p className="mt-2.5 text-sm text-[var(--text-dim)] border-l-2 border-emerald-400/60 ml-1 pl-3">
                  {q.explanation}
                </p>
              )}
            </li>
          );
        })}
      </ol>

      <div className="mt-6 flex items-center justify-between gap-3">
        {submitted ? (
          <>
            <p className="text-sm">
              Výsledek:{" "}
              <span className="font-semibold gold-text text-base">
                {score} / {total}
              </span>
            </p>
            <button className="btn" onClick={reset}>
              Zkusit znovu
            </button>
          </>
        ) : (
          <>
            <p className="text-xs text-[var(--text-dim)]">
              {allAnswered
                ? "Vše zodpovězeno — můžeš vyhodnotit."
                : `Zodpovězeno ${Object.keys(answers).length}/${total}`}
            </p>
            <button
              className="btn btn-primary disabled:opacity-40 disabled:cursor-not-allowed"
              onClick={() => setSubmitted(true)}
              disabled={!allAnswered}
            >
              Vyhodnotit
            </button>
          </>
        )}
      </div>
    </div>
  );
}
