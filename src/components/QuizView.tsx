import { useMemo, useState } from "react";
import type { Quiz, QuizOption } from "../types";
import { shuffle } from "../lib/shuffle";
import { Icon } from "./Icon";

function scoreMessage(score: number, total: number): { text: string; tone: string } {
  const pct = total ? (score / total) * 100 : 0;
  if (pct === 100) return { text: "Perfektní!", tone: "perfect" };
  if (pct >= 80) return { text: "Skvělá práce!", tone: "great" };
  if (pct >= 60) return { text: "Solidní výsledek.", tone: "good" };
  if (pct >= 40) return { text: "Ještě procvič.", tone: "ok" };
  return { text: "Zkus to znovu.", tone: "retry" };
}

type Props = {
  quiz: Quiz;
  onExit?: () => void;
  onFinish?: () => void;
};

export function QuizView({ quiz, onExit, onFinish }: Props) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [attempt, setAttempt] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const [finished, setFinished] = useState(false);

  const optionOrders = useMemo(() => {
    const orders: Record<number, QuizOption[]> = {};
    quiz.questions.forEach((question, i) => {
      orders[i] = shuffle(question.options);
    });
    return orders;
  }, [quiz, attempt]);

  const total = quiz.questions.length;
  const q = quiz.questions[step];
  const options = optionOrders[step] ?? q.options;
  const chosen = answers[step];
  const isCorrect = chosen != null && options[chosen]?.correct;

  const score = useMemo(() => {
    let s = 0;
    quiz.questions.forEach((question, i) => {
      const pick = answers[i];
      const opts = optionOrders[i] ?? question.options;
      if (pick != null && opts[pick]?.correct) s += 1;
    });
    return s;
  }, [answers, optionOrders, quiz.questions]);

  const result = scoreMessage(score, total);
  const progressPct = finished ? 100 : ((step + (revealed ? 1 : 0)) / total) * 100;

  function pick(oi: number) {
    if (revealed || finished) return;
    setAnswers((a) => ({ ...a, [step]: oi }));
    setRevealed(true);
  }

  function continueFlow() {
    if (step < total - 1) {
      setStep((s) => s + 1);
      setRevealed(false);
      return;
    }
    setFinished(true);
    onFinish?.();
  }

  function reset() {
    setStep(0);
    setAnswers({});
    setAttempt((a) => a + 1);
    setRevealed(false);
    setFinished(false);
  }

  if (finished) {
    return (
      <div className="quiz-flow">
        <div className="quiz-flow-progress" aria-hidden>
          <div className="quiz-flow-progress-fill" style={{ width: "100%" }} />
        </div>

        <div className="quiz-flow-done animate-in">
          <div className={`quiz-flow-done-badge quiz-flow-done-badge--${result.tone}`}>
            {score}/{total}
          </div>
          <h2 className="quiz-flow-done-title">{result.text}</h2>
          <p className="quiz-flow-done-sub">
            {Math.round((score / total) * 100)} % správně
          </p>
          <div className="quiz-flow-done-actions">
            <button type="button" className="btn btn-primary w-full" onClick={reset}>
              Zkusit znovu
            </button>
            {onExit && (
              <button type="button" className="btn w-full" onClick={onExit}>
                Zpět na lekci
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="quiz-flow">
      <div className="quiz-flow-progress" aria-hidden>
        <div className="quiz-flow-progress-fill" style={{ width: `${progressPct}%` }} />
      </div>

      <p className="quiz-flow-counter">
        {step + 1} / {total}
      </p>

      <h2 className="quiz-flow-question">{q.question}</h2>

      <div className="quiz-flow-options">
        {options.map((opt, oi) => {
          const isChosen = chosen === oi;
          const show = revealed && (isChosen || opt.correct);
          let cls = "quiz-flow-option ";
          if (show) {
            cls += opt.correct ? "quiz-flow-option--correct" : "quiz-flow-option--wrong";
          } else if (isChosen) {
            cls += "quiz-flow-option--chosen";
          }

          return (
            <button
              key={oi}
              type="button"
              className={cls}
              onClick={() => pick(oi)}
              disabled={revealed}
            >
              {opt.text}
            </button>
          );
        })}
      </div>

      {revealed && (
        <div
          className={`quiz-flow-feedback ${isCorrect ? "quiz-flow-feedback--ok" : "quiz-flow-feedback--bad"}`}
        >
          <div className="quiz-flow-feedback-head">
            <Icon name={isCorrect ? "check" : "x"} className="w-5 h-5" />
            <span>{isCorrect ? "Správně!" : "Špatně"}</span>
          </div>
          {q.explanation && (
            <p className="quiz-flow-feedback-text">{q.explanation}</p>
          )}
          <button
            type="button"
            className="btn btn-primary w-full quiz-flow-continue"
            onClick={continueFlow}
          >
            {step < total - 1 ? "Pokračovat" : "Dokončit"}
          </button>
        </div>
      )}
    </div>
  );
}
