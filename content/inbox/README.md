# Inbox

**Jedna složka** — hoď sem libovolné materiály (PDF, PPT, DOCX, obrázky…)
z různých předmětů a lekcí. Nemusíš nic třídit.

Až budeš chtít, napiš mi např.:

> „Zpracuj materiály z inboxu.“

Já je roztřídím do správných předmětů a lekcí, doplním odkazy a texty.

## Postup

1. Zkopíruj soubory do `content/inbox/toprocess/` (podsložky jsou v pořádku)
2. Volitelně: `make inbox-scan` (evidence v `_inbox.json`)
3. Napiš mi, ať to zpracuji
4. Po zpracování: `make gen-data`

Zpracované soubory se přesunou do `public/materials/` a zmizí z inboxu
(nebo se označí jako hotové v `_inbox.json`).
