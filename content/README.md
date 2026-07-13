# Obsah GeoStudium

Všechny **lekce**, **kvízy** a **materiály** se upravují zde. Aplikace je při buildu sestaví do `src/data/*.ts`.

## Struktura

```
content/
├── inbox/                 # ← SEM házej materiály (jedna složka, bez třídění)
│   ├── README.md
│   ├── _inbox.json
│   └── *.pdf, *.pptx, …
├── fields/                # zpracovaný obsah (lekce, kvízy) — plním já
│   └── …
```

## Inbox

Hoď soubory do **`content/inbox/toprocess/`** — z různých lekcí, nemusíš třídit.
Až napíšeš „zpracuj inbox“, rozdělím je do správných předmětů a lekcí.

```bash
make inbox-init    # připraví složku
make inbox-scan    # evidence souborů
make inbox-list    # co tam je
```

Viz **`content/inbox/README.md`**.

## Příkazy

```bash
make content-init    # složky předmětů v content/fields/
make inbox-init      # jedna složka content/inbox/
make inbox-list      # co čeká ve inboxu
make gen-data        # sestaví src/data/*.ts
```

### Bakalář / magistr (gk, fg)

1. **Osnova** a metadata předmětu jsou v `scripts/muni_courses_research.json` (IS MUNI).
2. Z osnovy se **automaticky vytvoří lekce** (základní text + studijní tipy).
3. Soubor v `content/…/lessons/{id}.json` **přepíše / doplní** danou lekci (vlastní výklad, bloky).
4. Soubor v `content/…/quizzes/{id}.json` přidá **kvíz** ke stejné lekci (stejné `lessonId`).
5. `materials.json` = materiály **celého předmětu** (odkazy, PDF, prezentace).

### Antarktida

Každý modul má vlastní složku. Lekce jsou **přímo v** `lessons/` (plný obsah, ne jen přepis).

## Formáty souborů

Viz `content/_examples/` — vzorová lekce, kvíz a materiály.

### Lekce (`lessons/{lesson-id}.json`)

Pole `id` musí odpovídat id lekce z osnovy (viz stránka předmětu v aplikaci).

### Kvíz (`quizzes/{lesson-id}.json`)

```json
{
  "lessonId": "z1035-organizace-studia-na-gu-1",
  "title": "Kvíz: Organizace studia",
  "questions": [ … ]
}
```

### Materiály (`materials.json`)

```json
{
  "description": "Poznámka k materiálům předmětu",
  "items": [
    { "kind": "link", "title": "…", "url": "…", "source": "…" }
  ]
}
```

Druhy materiálů: `link`, `document`, `video`, `presentation`, `dataset`, `map`, `tool`.

## Workflow doplnění obsahu

1. Najdi předmět v `content/fields/…/courses/{id}/`
2. Otevři lekci v prohlížeči → zkopíruj `lesson-id` z URL
3. Vytvoř `lessons/{lesson-id}.json` s vlastními `blocks`
4. Volitelně `quizzes/{lesson-id}.json`
5. `make gen-data` a obnov stránku (dev HMR načte nový build po regeneraci)

## Stav obsahu

Po `make gen-data` se vygeneruje `content/_status.json` — kolik lekcí je vlastních, kolik má kvíz.
