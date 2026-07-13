/**
 * Přehled souborů v content/inbox/.
 */
import { existsSync, readdirSync, statSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { contentDir, isInboxMediaFile, readJsonIfExists } from "./content/lib.mjs";

const dir = contentDir("inbox");
const inboxPath = join(dir, "_inbox.json");
const SKIP = new Set(["_inbox.json", "_notes.md", ".gitkeep", "README.md", "WORKFLOW.md"]);

const meta = readJsonIfExists(inboxPath) ?? { files: [] };
const files = meta.files ?? [];

const onDisk = [];
if (existsSync(dir)) {
  for (const name of readdirSync(dir)) {
    if (SKIP.has(name) || name.startsWith(".")) continue;
    const full = join(dir, name);
    if (!statSync(full).isFile()) continue;
    if (!isInboxMediaFile(name)) continue;
    onDisk.push(name);
  }
}

const pending = files.filter((f) => !f.status || f.status === "pending");
const processed = files.filter((f) => f.status === "processed");

const summary = {
  scannedAt: new Date().toISOString(),
  onDisk: onDisk.length,
  pending: pending.length,
  processed: processed.length,
  files: files,
  diskFiles: onDisk,
};

writeFileSync(join(dir, "_status.json"), `${JSON.stringify(summary, null, 2)}\n`);

console.log(`inbox: ${onDisk.length} souborů ve složce · ${pending.length} čeká · ${processed.length} zpracováno\n`);

if (onDisk.length === 0) {
  console.log("  (prázdné — hoď soubory do content/inbox/)");
} else {
  for (const name of onDisk) {
    const entry = files.find((f) => f.name === name);
    const st = entry?.status ?? "neevidováno — spusť make inbox-scan";
    console.log(`  • ${name}  [${st}]`);
  }
}

console.log("\n→ content/inbox/_status.json");
