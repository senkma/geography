# GeoStudium

Luxusní, mobilně přívětivý studijní portál (PWA) pro:

- **Geografie a kartografie** — bakalářský program PřF MUNI
- **Fyzická geografie** — navazující magisterský program PřF MUNI
- **Antarktida** — samostatný výukový modul (fyzická geografie & klimatologie), zpracovaný kompletně

Web funguje na mobilu i desktopu, jde nainstalovat jako aplikace (PWA) a funguje offline.

## Spuštění

```bash
npm install
npm run dev      # vývojový server
npm run build    # produkční build do dist/
npm run preview  # náhled produkčního buildu
```

Nasazení: obsah složky `dist/` nahrajte na libovolný statický hosting (Netlify, Vercel, GitHub Pages, ...). Aplikace používá hash-router, takže funguje i bez konfigurace serveru. Doporučený způsob pro VPS je ale Docker (viz níže).

## Nasazení přes Docker (VPS z gitu)

Web běží jako statický build servírovaný přes nginx v jednom kontejneru.
Multi-stage `Dockerfile` sám nainstaluje závislosti a udělá build, takže na
VPS stačí jen Docker — Node.js instalovat netřeba.

Na VPS:

```bash
git clone <URL-repozitare> geostudium
cd geostudium
docker compose up -d --build
```

Web poběží na `http://<IP-VPS>:8080` (port se mění v `docker-compose.yml`,
řádek `ports:`, např. `- "80:80"` pro standardní HTTP).

Aktualizace po `git push` → na VPS:

```bash
git pull
docker compose up -d --build
```

Užitečné příkazy:

```bash
docker compose logs -f      # logy
docker compose down         # zastavit a odstranit kontejner
docker compose ps           # stav
```

### Reverzní proxy a HTTPS

Pro vlastní doménu a HTTPS doporučuji před kontejner postavit reverzní proxy
(Caddy, Traefik nebo nginx s Let's Encrypt) a směrovat ji na port kontejneru.
Kontejner sám naslouchá na portu 80 uvnitř a má nastavený `HEALTHCHECK`.

## Struktura obsahu

Veškerý studijní obsah je v `src/data/`:

| Soubor | Obsah |
| --- | --- |
| `antarktida.ts` | Kompletní modul Antarktida (13 kapitol + kvízy) |
| `gk.ts` | Bakalářský obor Geografie a kartografie |
| `fg.ts` | Magisterský obor Fyzická geografie |
| `index.ts` | Sloučení oborů a pomocné funkce |

Datový model (`src/types.ts`):

```
Field (obor)
 └─ Course (předmět)   … kód, garant, kredity, semestr, osnova (syllabus)
     └─ Lesson (lekce) … výklad (blocks), materiály (resources), kvíz (quiz)
```

### Jak doplnit vlastní materiály

- **Prezentace / dokumenty / videa**: do pole `resources` u lekce nebo předmětu.
  Položky bez `url` se zobrazí jako placeholder „brzy doplníme“. Přidáním
  `url` se stanou proklikem.

```ts
resources: [
  { kind: "presentation", title: "Přednáška 1", url: "https://…" },
  { kind: "document", title: "Skripta", url: "/materialy/skripta.pdf" },
]
```

- **Výkladový text lekce**: do pole `blocks` (typy `paragraph`, `heading`,
  `list`, `callout`, `table`, `quote`).
- **Kvíz**: do pole `quiz` s otázkami a označením správných odpovědí.

Lokální soubory (PDF apod.) můžete dát do složky `public/` a odkazovat
relativně (např. `/materialy/soubor.pdf`).

## Ikony PWA

Ikony se generují skriptem bez závislostí:

```bash
node scripts/generate-icons.mjs
```

## Technologie

Vite · React · TypeScript · Tailwind CSS v4 · vite-plugin-pwa
