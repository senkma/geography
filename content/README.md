# Obsah GeoStudium

Všechny **lekce**, **kvízy** a **materiály** se upravují zde. Aplikace je při buildu sestaví do `src/data/*.ts`.

## Struktura

```
content/
├── _status.json                 # přehled (generuje se automaticky)
├── _examples/                   # vzorové soubory
├── fields/
│   ├── geografie-kartografie/   # bakalář (field id)
│   │   └── courses/
│   │       └── z1035/           # id předmětu
│   │           ├── materials.json
│   │           ├── lessons/
│   │           │   └── {lesson-id}.json
│   │           └── quizzes/
│   │               └── {lesson-id}.json
│   ├── fyzicka-geografie/       # magistr
│   │   └── courses/…
│   └── antarktida/
│       ├── field.json
│       └── modules/
│           └── mod-geografie/
│               ├── module.json
│               ├── materials.json
│               ├── lessons/
│               └── quizzes/
```

## Jak to funguje

### Bakalář / magistr (gk, fg)

1. **Osnova** a metadata předmětu jsou v `scripts/muni_courses_research.json` (IS MUNI).
2. Z osnovy se **automaticky vytvoří lekce** (základní text + studijní tipy).
3. Soubor v `content/…/lessons/{id}.json` **přepíše / doplní** danou lekci (vlastní výklad, bloky).
4. Soubor v `content/…/quizzes/{id}.json` přidá **kvíz** ke stejné lekci (stejné `lessonId`).
5. `materials.json` = materiály **celého předmětu** (odkazy, PDF, prezentace).

### Antarktida

Každý modul má vlastní složku. Lekce jsou **přímo v** `lessons/` (plný obsah, ne jen přepis).

## Příkazy

```bash
make content-init    # vytvoří složky pro všechny předměty
make gen-data        # sestaví src/data/*.ts + content/_status.json
```

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
