/** Doplní kvíz o otázky z obsahu lekce (min. 20 otázek). */

const SKIP_CALLOUT =
  /^(Okruh|Jak číst tuto lekci|Doporučený postup|Doporučený postup studia)$/;

function norm(s) {
  return (s ?? "").replace(/\s+/g, " ").trim();
}

function key(s) {
  return norm(s).toLowerCase();
}

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export { shuffle };

function mc(question, correct, distractors, explanation) {
  const opts = shuffle([
    { text: correct, correct: true },
    ...distractors.slice(0, 3).map((text) => ({ text, correct: false })),
  ]);
  return { question, options: opts, explanation };
}

function truncate(text, max) {
  const t = norm(text);
  if (t.length <= max) return t;
  return `${t.slice(0, max - 1)}…`;
}

function collectFacts(blocks) {
  const facts = [];
  for (const b of blocks ?? []) {
    if (b.type === "callout" && b.text && b.label && !SKIP_CALLOUT.test(b.label)) {
      facts.push({
        kind: "def",
        label: norm(b.label),
        text: norm(b.text),
      });
    }
    if (b.type === "list" && b.items) {
      for (const raw of b.items) {
        const text = norm(raw);
        if (text.length >= 28 && text.length <= 320) {
          facts.push({ kind: "list", label: b.label, text });
        }
      }
    }
    if (b.type === "paragraph" && b.text) {
      const text = norm(b.text);
      if (text.length >= 40 && text.length <= 260 && !text.startsWith("prof.")) {
        facts.push({ kind: "para", text });
      }
    }
    if (b.type === "subheading" && b.text) {
      facts.push({ kind: "heading", text: norm(b.text) });
    }
  }
  return facts;
}

function questionFromDef(fact, pool) {
  const label = truncate(fact.label.replace(/\?$/, ""), 72);
  const correct = truncate(fact.text, 180);
  const distractors = pool
    .filter((f) => f !== fact && f.text && key(f.text) !== key(correct))
    .map((f) => truncate(f.text, 180))
    .filter((t, i, arr) => arr.indexOf(t) === i)
    .slice(0, 3);
  while (distractors.length < 3) {
    distractors.push("Toto tvrzení není součástí výkladu k tomuto okruhu.");
  }
  const q =
    fact.label.endsWith("?")
      ? `Která odpověď nejlépe doplňuje: „${label}"?`
      : `Co je správné tvrzení k pojmu „${label}"?`;
  return mc(q, correct, distractors, `Výklad: ${correct}`);
}

function questionFromListItem(fact, pool, lessonTitle) {
  const correct = truncate(fact.text, 180);
  const topic = truncate(lessonTitle.replace(/^\d+(\.\d+)*\.?\s*/, ""), 48);
  const distractors = pool
    .filter((f) => key(f.text) !== key(correct))
    .map((f) => truncate(f.text, 180))
    .filter((t, i, arr) => arr.indexOf(t) === i)
    .slice(0, 3);
  while (distractors.length < 3) {
    distractors.push("Toto nepatří mezi klíčové body tohoto okruhu.");
  }
  return mc(
    `Které tvrzení patří k okruhu „${topic}"?`,
    correct,
    distractors,
    correct,
  );
}

function questionTrueFalseStyle(fact, pool) {
  const correct = truncate(fact.text, 160);
  const wrong = pool.find((f) => key(f.text) !== key(correct));
  if (!wrong) return null;
  const distractors = [
    truncate(wrong.text, 160),
    "Toto tvrzení nelze z výkladu lekce ověřit.",
    "Výklad k tomuto okruhu neobsahuje tuto informaci.",
  ];
  return mc(
    "Které tvrzení odpovídá obsahu lekce?",
    correct,
    distractors,
    `Správně: ${correct}`,
  );
}

function dedupeQuestions(questions) {
  const seen = new Set();
  const out = [];
  for (const q of questions) {
    const k = key(q.question);
    if (seen.has(k)) continue;
    seen.add(k);
    out.push(q);
  }
  return out;
}

/**
 * @param {object} lesson — lekce s blocks
 * @param {object} baseQuiz — { title, questions }
 * @param {number} min
 */
export function expandQuizForLesson(lesson, baseQuiz, min = 20) {
  const facts = collectFacts(lesson.blocks);
  const pool = facts.filter((f) => f.text?.length > 20);
  const generated = [];

  for (const fact of pool) {
    if (fact.kind === "def") generated.push(questionFromDef(fact, pool));
    else if (fact.kind === "list") {
      generated.push(questionFromListItem(fact, pool, lesson.title));
    } else if (fact.kind === "para" || fact.kind === "heading") {
      const q = questionTrueFalseStyle(fact, pool);
      if (q) generated.push(q);
    }
  }

  const merged = dedupeQuestions([
    ...(baseQuiz?.questions ?? []),
    ...generated,
  ]);

  if (merged.length >= min) {
    return { title: baseQuiz.title, questions: merged.slice(0, merged.length) };
  }

  // Doplň variantami se stejným fakty (jiná formulace)
  let out = dedupeQuestions(merged);
  let guard = 0;
  while (out.length < min && pool.length > 0 && guard < min * 3) {
    guard += 1;
    const fact = pool[out.length % pool.length];
    const correct = truncate(fact.text, 160);
    const others = pool
      .filter((f) => key(f.text) !== key(correct))
      .map((f) => truncate(f.text, 160))
      .filter((t, i, arr) => arr.indexOf(t) === i)
      .slice(0, 3);
    while (others.length < 3) others.push("Neplatné tvrzení mimo výklad lekce.");
    const prevLen = out.length;
    out = dedupeQuestions([
      ...out,
      mc(
        `K tématu „${truncate(lesson.title.replace(/^\d+(\.\d+)*\.?\s*/, ""), 42)}" — které tvrzení je správné? (${out.length + 1})`,
        correct,
        others,
        correct,
      ),
    ]);
    if (out.length === prevLen) break;
  }

  if (out.length < min && lesson.summary) {
    out = dedupeQuestions([
      ...out,
      mc(
        "Která odpověď odpovídá zaměření tohoto okruhu?",
        truncate(lesson.summary.replace(/^Studijní okruh:\s*/i, ""), 160),
        [
          "Okruh nemá v osnově žádný obsah.",
          "Jde výhradně o magisterský předmět hydrologie.",
          "Téma se netýká fyzické geografie.",
        ],
        lesson.summary,
      ),
    ]);
  }

  return {
    title: baseQuiz.title,
    questions: out.slice(0, Math.max(out.length, min)),
  };
}
