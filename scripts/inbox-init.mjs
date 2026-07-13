/**
 * Připraví jednu složku content/inbox/.
 */
import { existsSync, mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { contentDir } from "./content/lib.mjs";

const dir = contentDir("inbox");

mkdirSync(join(dir, "toprocess"), { recursive: true });
mkdirSync(join(dir, "processed"), { recursive: true });

const inboxPath = join(dir, "_inbox.json");
if (!existsSync(inboxPath)) {
  writeFileSync(
    inboxPath,
    `${JSON.stringify(
      {
        notes: "Sem házej materiály z různých lekcí — třídit nemusíš.",
        files: [],
      },
      null,
      2,
    )}\n`,
  );
}

const notesPath = join(dir, "_notes.md");
if (!existsSync(notesPath)) {
  writeFileSync(
    notesPath,
    `# Poznámky k inboxu

Sem můžeš napsat kontext (např. „většina je ze statistiky, semestr 1“).
`,
  );
}

writeFileSync(join(dir, ".gitkeep"), "");
console.log(
  "inbox: připraveno content/inbox/toprocess/ — hoď sem soubory z libovolných lekcí",
);
