# Zpracování inboxu (pro AI)

## Princip

Uživatel hází soubory do **`content/inbox/`** bez struktury.
Při požadavku „zpracuj inbox“:

1. Projít všechny soubory v `content/inbox/` (kromě `_inbox.json`, `_notes.md`, README)
2. Podle názvu, obsahu a kontextu určit **obor → předmět/modul → lekci**
3. Zkopírovat do `public/materials/{field}/{course-or-module}/{soubor}`
4. Doplnit `content/fields/…/materials.json` nebo `lessons/{id}.json`
5. Vytáhnout text do `blocks` lekcí, případně kvízy
6. Označit v `_inbox.json` jako `processed` nebo soubor z inboxu odstranit/přesunout do `processed/`

## `_inbox.json`

```json
{
  "notes": "Volitelná poznámka od uživatele",
  "files": [
    {
      "name": "prednaska-statistika.pdf",
      "status": "pending",
      "note": "",
      "processedTo": null
    }
  ]
}
```

Po zpracování:

```json
{
  "name": "prednaska-statistika.pdf",
  "status": "processed",
  "processedTo": {
    "field": "geografie-kartografie",
    "course": "z1069",
    "lessons": ["z1069-zakladni-pojmy-1"],
    "publicUrl": "./materials/geografie-kartografie/z1069/prednaska-statistika.pdf"
  }
}
```

## Složka `processed/`

Volitelně archiv zpracovaných originálů: `content/inbox/processed/`
