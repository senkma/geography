import { useMemo, useState } from "react";
import type { Quiz } from "../types";
import { Icon } from "./Icon";

function scoreMessage(score: number, total: number): { text: string; tone: string } {
  const pct = total ? (score / total) * 100 : 0;
  if (pct === 100) return { text: "Výborně — všechno sedí!", tone: "perfect" };
  if (pct >= 80) return { text: "Skvělá práce, jen drobnosti.", tone: "great" };
  if (pct >= 60) return { text: "Solidní základ — projdi si vysvětlení.", tone: "good" };
  if (pct >= 40) return { text: "Ještě procvič — lekci máš v hlavě z poloviny.", tone: "ok" };
  return { text: "Zkus to znovu po přečtení lekce.", tone: "retry" };
}

export function QuizView({ quiz }: { quiz: Quiz }) {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);
  const [active, setActive] = useState(0);

  const score = useMemo(() => {
    let s = 0;
    quiz.questions.forEach((q, i) => {
      const chosen = answers[i];
      if (chosen != null && q.options[chosen]?.correct) s += 1;
    });
    return s;
  }, [answers, quiz.questions]);

  const total = quiz.questions.length;
  const answered = Object.keys(answers).length;
  const progress = total ? (answered / total) * 100 : 0;
  const result = scoreMessage(score, total);

  function choose(qi: number, oi: number) {
    if (submitted) return;
    setAnswers((a) => ({ ...a, [qi]: oi }));
    if (qi < total - 1) {
      setTimeout(() => setActive(qi + 1), 180);
    }
  }

  function reset() {
    setAnswers({});
    setSubmitted(false);
    setActive(0);
  }

  return (
    <div className="quiz-shell">
      <header className="quiz-header">
        <div className="quiz-header-icon">
          <Icon name="quiz" className="w-5 h-5 text-[var(--accent-2)]" />
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="quiz-title">{quiz.title}</h3>
          <p className="quiz-meta">
            {total} {total === 1 ? "otázka" : total < 5 ? "otázky" : "otázek"}
            {!submitted && ` · zodpovězeno ${answered}/${total}`}
          </p>
        </div>
        {submitted && (
          <div className={`quiz-score-badge quiz-score-badge--${result.tone}`}>
            <span className="quiz-score-num">
              {score}/{total}
            </span>
          </div>
        )}
      </header>

      {!submitted && (
        <div className="quiz-progress" aria-hidden>
          <div className="quiz-progress-bar" style={{ width: `${progress}%` }} />
        </div>
      )}

      {submitted && (
        <div className={`quiz-result-banner quiz-result-banner--${result.tone}`}>
          <p className="font-semibold">{result.text}</p>
          <p className="text-sm opacity-90 mt-0.5">
            Správně {score} z {total} ({Math.round((score / total) * 100)} %)
          </p>
        </div>
      )}

      <div className="quiz-questions">
        {quiz.questions.map((q, qi) => {
          const chosen = answers[qi];
          const isActive = !submitted && qi === active;
          const isDone = answers[qi] != null;

          return (
            <article
              key={qi}
              className={`quiz-question ${isActive ? "quiz-question--active" : ""} ${
                isDone && !submitted ? "quiz-question--done" : ""
              }`}
              id={`quiz-q-${qi}`}
            >
              <div className="quiz-question-head">
                <span className="quiz-question-num">{qi + 1}</span>
                <p className="quiz-question-text">{q.question}</p>
              </div>

              <div className="quiz-options">
                {q.options.map((opt, oi) => {
                  const isChosen = chosen === oi;
                  const showState = submitted && (isChosen || opt.correct);
                  const correct = opt.correct;
                  let cls = "quiz-option ";
                  if (showState) {
                    cls += correct
                      ? "quiz-option--correct"
                      : "quiz-option--wrong";
                  } else if (isChosen) {
                    cls += "quiz-option--chosen";
                  }

                  return (
                    <button
                      key={oi}
                      type="button"
                      onClick={() => choose(qi, oi)}
                      className={cls}
                      disabled={submitted}
                    >
                      <span className="quiz-option-letter">
                        {submitted && correct ? (
                          <Icon name="check" className="w-3.5 h-3.5" />
                        ) : submitted && isChosen && !correct ? (
                          <Icon name="x" className="w-3.5 h-3.5" />
                        ) : (
                          String.fromCharCode(65 + oi)
                        )}
                      </span>
                      <span className="text-sm leading-snug">{opt.text}</span>
                    </button>
                  );
                })}
              </div>

              {submitted && q.explanation && (
                <p className="quiz-explanation">{q.explanation}</p>
              )}
            </article>
          );
        })}
      </div>

      <footer className="quiz-footer">
        {submitted ? (
          <button type="button" className="btn" onClick={reset}>
            Zkusit znovu
          </button>
        ) : (
          <>
            <p className="text-xs text-[var(--text-dim)]">
              {answered === total
                ? "Vše zodpovězeno — můžeš vyhodnotit."
                : "Klikni na odpověď — postupně projdeš všechny otázky."}
            </p>
            <button
              type="button"
              className="btn btn-primary disabled:opacity-40 disabled:cursor-not-allowed"
              onClick={() => setSubmitted(true)}
              disabled={answered < total}
            >
              Vyhodnotit
            </button>
          </>
        )}
      </footer>
    </div>
  );
}
