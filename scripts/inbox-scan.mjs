/**
 * Najde nové soubory v content/inbox/ a zapíše je do _inbox.json.
 */
import { existsSync, readdirSync, statSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { contentDir, isInboxMediaFile, readJsonIfExists } from "./content/lib.mjs";

const dir = contentDir("inbox");
const inboxPath = join(dir, "_inbox.json");
const SKIP = new Set(["_inbox.json", "_notes.md", ".gitkeep", "README.md", "WORKFLOW.md"]);
const SKIP_DIRS = new Set(["toprocess", "processed", "_examples", "fields"]);

const meta = readJsonIfExists(inboxPath) ?? { notes: "", files: [] };
meta.files ??= [];

const known = new Set(meta.files.map((f) => f.name));
let added = 0;

if (!existsSync(dir)) {
  console.log("inbox-scan: složka neexistuje — spusť make inbox-init");
  process.exit(1);
}

for (const name of readdirSync(dir)) {
  if (SKIP.has(name) || name.startsWith(".")) continue;
  const full = join(dir, name);
  if (statSync(full).isDirectory()) {
    if (SKIP_DIRS.has(name)) continue;
    continue;
  }
  if (!isInboxMediaFile(name)) continue;
  if (known.has(name)) continue;

  meta.files.push({
    name,
    status: "pending",
    addedAt: new Date().toISOString().slice(0, 10),
    note: "",
  });
  added += 1;
}

writeFileSync(inboxPath, `${JSON.stringify(meta, null, 2)}\n`);

if (added === 0) {
  console.log("inbox-scan: žádné nové soubory");
} else {
  console.log(`inbox-scan: +${added} souborů zapsáno do _inbox.json`);
}
