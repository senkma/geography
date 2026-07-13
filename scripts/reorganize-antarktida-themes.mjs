import { readFileSync, writeFileSync } from "node:fs";

const src = JSON.parse(
  readFileSync(new URL("./antarktida_modules.json", import.meta.url), "utf8"),
);

function lessonsById(modules) {
  const map = new Map();
  for (const mod of modules) {
    for (const lesson of mod.lessons) {
      if (map.has(lesson.id)) throw new Error(`duplicate lesson id: ${lesson.id}`);
      map.set(lesson.id, lesson);
    }
  }
  return map;
}

const old = lessonsById(src.modules);
const L = (id) => {
  const lesson = old.get(id);
  if (!lesson) throw new Error(`missing lesson: ${id}`);
  return lesson;
};

const newHistoryLessons = [
  {
    id: "historie-prvni-pruzkumy",
    title: "První průzkumy a Heroic Age",
    summary:
      "Od objevení kontinentu po éru hrdinských expedic — Cook, Bellingshausen, Ross a Shackleton.",
    minutes: 18,
    blocks: [
      {
        type: "paragraph",
        text: "Antarktida byla poprvé spatřena v lednu 1820 — nezávisle ji zahlédli expediční lodě Fabiana Gottlieba von Bellingshausena (Rusko), Edwarda Bransfielda (Británie) a Nathanaiela Palmera (USA). Kontinent byl dlouho teoretizován jako Terra Australis.",
      },
      {
        type: "list",
        label: "Klíčové milníky 19. století",
        items: [
          "1840: James Clark Ross — pojmenování Rossova moře a Rossova ledového šelfu",
          "1895: první zdokumentovaný přistání na pevnině (Borchgrevink)",
          "1901–1904: Discovery Expedition (Scott, Shackleton)",
        ],
      },
      {
        type: "callout",
        label: "Heroic Age",
        text: "Období ≈ 1897–1922 — desítky expedic, často s velkými oběťmi. Cílem bylo zeměpisné prvenství, mapování pobřeží a vědecká měření v extrémních podmínkách.",
      },
    ],
    resources: [
      {
        kind: "link",
        title: "SCAR — History of Antarctic exploration",
        url: "https://scar.org/about/antarctica/history/",
        source: "SCAR",
      },
      {
        kind: "link",
        title: "BAS — Antarctic history",
        url: "https://www.bas.ac.uk/about/antarctica/",
        source: "BAS",
      },
    ],
  },
  {
    id: "historie-zavody-k-polu",
    title: "Závody k jižnímu pólu",
    summary: "Amundsen (1911) a Scott (1912) — první dosažení pólu a tragický návrat Terra Nova.",
    minutes: 16,
    blocks: [
      {
        type: "paragraph",
        text: "Roald Amundsen dosáhl jižního pólu 14. prosince 1911 s týmem používajícím psí spřežení a lyže. Robert Falcon Scott přišel o 34 dní později (17. ledna 1912); všichni členové jeho poslední skupiny zemřeli na návratu.",
      },
      {
        type: "list",
        label: "Proč Amundsen uspěl dříve",
        items: [
          "Zkušenosti z Arktidy a efektivní logistika se psy",
          "Jednodušší trasa přes Rossův ledový šelf k pólu",
          "Scott spoléhal více na pony a motorové sáně — omezená spolehlivost",
        ],
      },
      {
        type: "paragraph",
        text: "Obě expedice přinesly cenná vědecká data (geologie, meteorologie, magnetismus). Scottovy deníky a Amundsenův přístup formují dodnes etiku polárního výzkumu.",
      },
    ],
    resources: [
      {
        kind: "link",
        title: "Scott Polar Research Institute",
        url: "https://www.spri.cam.ac.uk/",
        source: "SPRI",
      },
    ],
  },
  {
    id: "historie-igy-smlouva",
    title: "Od IGY po Antarktickou smlouvu",
    summary:
      "Mezinárodní geofyzikální rok 1957–58, stálé stanice a diplomatický kompromis roku 1959.",
    minutes: 15,
    blocks: [
      {
        type: "paragraph",
        text: "Mezinárodní geofyzikální rok (IGY) 1957–58 zmobilizoval desítky zemí k intenzivnímu antarktickému výzkumu. Vzniklo mnoho stálých stanic; věda se stala společným jazykem i v době studené války.",
      },
      {
        type: "list",
        items: [
          "1959: podpis Antarktické smlouvy ve Washingtonu (12 původních smluvních stran)",
          "1961: smlouva vstoupila v platnost",
          "Zmrazení územních nároků, mírové využití, svoboda vědeckého výzkumu",
          "1991: Madridský protokol — posílení ochrany životního prostředí",
        ],
      },
      {
        type: "callout",
        label: "Československo / ČR",
        text: "Československo se účastnilo IGY; samostatná ČR získala konzultativní status díky antarktickému výzkumu (CARP) v 21. století.",
      },
    ],
    resources: [
      {
        kind: "link",
        title: "Antarctic Treaty Secretariat",
        url: "https://www.ats.aq/",
        source: "ATS",
      },
    ],
  },
];

const newInternationalLessons = [
  {
    id: "mezinarodni-naroky",
    title: "Územní nároky a status kontinentu",
    summary: "Sedm států s formálními nároky, dělení sektorů a princip „neosídlení“.",
    minutes: 14,
    blocks: [
      {
        type: "paragraph",
        text: "Antarktická smlouva neřeší nároky definitivně — pouze je zmrazuje. Sedm států (Argentina, Austrálie, Chile, Francie, Nový Zéland, Norsko, Velká Británie) uplatňuje částečně překrývající se sektorová tvrzení.",
      },
      {
        type: "list",
        label: "Zásady smlouvy",
        items: [
          "Kontinent není pod suverenitou žádného státu",
          "Zákaz vojenských aktivit a jaderných zkoušek",
          "Svoboda vědeckého výzkumu a inspekce",
          "Konzultativní členství pro státy provádějící podstatný výzkum",
        ],
      },
      {
        type: "paragraph",
        text: "Česká republika je konzultativním členem díky programu CARP — účastní se rozhodování o budoucnosti kontinentu.",
      },
    ],
    resources: [
      {
        kind: "link",
        title: "ATS — Parties",
        url: "https://www.ats.aq/devAS/Info/Parties",
        source: "ATS",
      },
      {
        kind: "link",
        title: "CARP — O nás",
        url: "https://carp.sci.muni.cz/o-nas/",
        source: "CARP",
      },
    ],
  },
  {
    id: "mezinarodni-organizace",
    title: "SCAR, COMNAP a CCAMLR",
    summary: "Vědecká koordinace, logistika stanic a ochrana mořských ekosystémů.",
    minutes: 13,
    blocks: [
      {
        type: "list",
        label: "Hlavní organizace",
        items: [
          "SCAR (Scientific Committee on Antarctic Research) — koordinace vědy, expertní skupiny",
          "COMNAP — koordinace národních programů a logistiky stanic",
          "CCAMLR — komise pro živé mořské zdroje, rybolov a MPA (mořské chráněné oblasti)",
          "Council of Managers of National Antarctic Programs (COMNAP) — bezpečnost a sdílení kapacit",
        ],
      },
      {
        type: "paragraph",
        text: "CARP spolupracuje v rámci SCAR a COMNAP s programy BAS, INACH, IAA a dalšími. Výsledky publikuje v časopise Czech Polar Reports.",
      },
    ],
    resources: [
      {
        kind: "link",
        title: "SCAR",
        url: "https://scar.org/",
        source: "SCAR",
      },
      {
        kind: "link",
        title: "COMNAP",
        url: "https://www.comnap.aq/",
        source: "COMNAP",
      },
      {
        kind: "link",
        title: "CCAMLR",
        url: "https://www.ccamlr.org/",
        source: "CCAMLR",
      },
    ],
  },
];

const newContemporaryLessons = [
  {
    id: "soucasny-vyzkum-expedice",
    title: "Moderní expedice a sezónní provoz",
    summary: "Australské léto, logistika, bezpečnost a etika v terénu.",
    minutes: 14,
    blocks: [
      {
        type: "paragraph",
        text: "Většina terénního výzkumu probíhá během australského léta (listopad–březen), kdy je dostupné sluneční světlo a teploty umožňují práci v terénu. Stálé stanice fungují celoročně s rotujícími posádkami.",
      },
      {
        type: "list",
        label: "Typická expedice (např. CARP)",
        items: [
          "Příprava v Brně — kalibrace přístrojů, školení bezpečnosti",
          "Přesun lodí nebo letadly přes Jižní Ameriku nebo Nový Zéland",
          "Sezónní provoz stanice Mendel (≈ leden–polovina března)",
          "Terénní měření, vzorkování, monitoring sítí",
        ],
      },
      {
        type: "callout",
        label: "Code of Conduct",
        text: "Národní programy uplatňují kodex chování — bezpečnost, rovnost a ochrana citlivých ekosystémů mají přednost před individuálními cíli.",
      },
    ],
    resources: [
      {
        kind: "link",
        title: "CARP — Code of Conduct",
        url: "https://carp.sci.muni.cz/about-us/code-of-conduct/",
        source: "CARP",
      },
    ],
  },
  {
    id: "soucasnost-turismus-ochrana",
    title: "Turismus, ochrana a budoucnost kontinentu",
    summary: "Madridský protokol, návštěvnost a tlak klimatické změny.",
    minutes: 15,
    blocks: [
      {
        type: "paragraph",
        text: "Antarktický turismus roste — většina návštěvníků míří na poloostrov lodními výpravami. IAATO koordinuje bezpečnost a minimalizaci dopadů; přistání jsou regulována podle smluvního systému.",
      },
      {
        type: "list",
        items: [
          "Madridský protokol (1991) — ochrana životního prostředí, moratorium na těžbu",
          "Citlivé oblasti: ASMA/ASPAs — zvláštní režim ochrany",
          "Klimatická změna — oteplování poloostrova, nestabilita WAIS",
          "Mezinárodní spolupráce jako podmínka udržitelnosti výzkumu",
        ],
      },
    ],
    resources: [
      {
        kind: "link",
        title: "IAATO",
        url: "https://iaato.org/",
        source: "IAATO",
      },
      {
        kind: "link",
        title: "NASA — Antarctica and climate",
        url: "https://climate.nasa.gov/",
        source: "NASA",
      },
    ],
  },
];

const scienceModules = [
  {
    id: "mod-geografie",
    title: "Geografie a geologie",
    description:
      "Poloha kontinentu, tektonika, geomorfologie a geovědní výzkum CARP na ostrově Jamese Rosse.",
    lessonIds: [
      "poloha-vymezeni",
      "geologie-tektonika",
      "geo-uvod",
      "geo-permafrost",
      "geo-paleolimnologie",
      "geo-sedimenty",
      "geo-databaze",
    ],
    tags: ["geologie", "geomorfologie"],
    resources: [
      {
        kind: "link",
        title: "Antarctic Digital Database",
        url: "https://www.add.scar.org/",
        source: "SCAR",
      },
      {
        kind: "link",
        title: "CARP — Geologie",
        url: "https://carp.sci.muni.cz/vyzkum/",
        source: "CARP",
      },
    ],
  },
  {
    id: "mod-kryosfera",
    title: "Kryosféra a led",
    description:
      "Ledovcové štíty, šelfové ledovce, mořský led a glaciologický výzkum v oblasti Antarktického poloostrova.",
    lessonIds: [
      "ledovcovy-stit",
      "selfove-ledovce-morsky-led",
      "atmo-glaciologie",
    ],
    tags: ["kryosféra", "glaciologie"],
    resources: [
      {
        kind: "link",
        title: "NSIDC — Antarctic ice",
        url: "https://nsidc.org/cryosphere/antarctica",
        source: "NSIDC",
      },
    ],
  },
  {
    id: "mod-klima",
    title: "Klimatologie a atmosféra",
    description:
      "Radiační bilance, cirkulace, ozonová vrstva, klimatická změna a atmosférický monitoring CARP.",
    lessonIds: [
      "klima-teplota-radiace",
      "cirkulace-katabaticke-vetry",
      "ozonova-dira",
      "zmena-klimatu",
      "atmo-skupina",
      "atmo-monitoring",
      "atmo-modelovani",
      "atmo-uv-ozon",
    ],
    tags: ["klimatologie", "atmosféra"],
    resources: [
      {
        kind: "link",
        title: "BAS — Weather and climate",
        url: "https://www.bas.ac.uk/polar-operations/science/climate-weather/",
        source: "BAS",
      },
      {
        kind: "link",
        title: "NASA — Climate Change",
        url: "https://climate.nasa.gov/",
        source: "NASA",
      },
    ],
  },
  {
    id: "mod-ocean",
    title: "Oceánografie",
    description:
      "Jižní oceán, Antarktický cirkumpolární proud a role oceánu v globální cirkulaci.",
    lessonIds: ["jizni-ocean-acc"],
    tags: ["oceánografie"],
    resources: [
      {
        kind: "link",
        title: "SOCCOM — Southern Ocean",
        url: "https://soccom.princeton.edu/",
        source: "SOCCOM",
      },
    ],
  },
  {
    id: "mod-hydrologie",
    title: "Hydrologie",
    description:
      "Subglaciální jezera, odtoky a vodní bilance antarktického ledového štítu.",
    lessonIds: ["hydrologie-subglacialni-jezera"],
    tags: ["hydrologie"],
  },
  {
    id: "mod-biosfera",
    title: "Biosféra a ekologie",
    description:
      "Polární ekosystémy, mikrobiologie, extremofily a biologický výzkum CARP.",
    lessonIds: [
      "biosfera-ekosystemy",
      "bio-rostliny-uvod",
      "bio-ltrp-otc",
      "bio-mikrobiologie",
      "bio-ltem",
      "bio-extremofily",
      "bio-data",
    ],
    tags: ["ekologie", "biologie"],
    resources: [
      {
        kind: "link",
        title: "CARP — Biosféra",
        url: "https://carp.sci.muni.cz/vyzkum/",
        source: "CARP",
      },
    ],
  },
  {
    id: "mod-paleoklima",
    title: "Paleoklimatologie",
    description:
      "Ledovcová jádra, proxy záznamy a rekonstrukce klimatu z antarktického ledu.",
    lessonIds: ["paleoklimatologie-jadra"],
    tags: ["paleoklimatologie"],
    resources: [
      {
        kind: "link",
        title: "EPICA — Ice cores",
        url: "https://www.bas.ac.uk/project/epica/",
        source: "BAS",
      },
    ],
  },
];

const carpIds = [
  "carp-uvod",
  "carp-vyzkumny-program",
  "carp-mendel",
  "carp-nelson",
  "carp-laboratore",
];

const historieIds = [
  "historie-prvni-pruzkumy",
  "historie-zavody-k-polu",
  "historie-igy-smlouva",
  "carp-historie",
];

const mezinarodniIds = [
  "vyzkum-smluvni-system",
  "mezinarodni-naroky",
  "mezinarodni-organizace",
  "carp-spoluprace",
];

const soucasnostIds = ["soucasny-vyzkum-expedice", "soucasnost-turismus-ochrana"];

// Register new lessons in map for validation
for (const lesson of [
  ...newHistoryLessons,
  ...newInternationalLessons,
  ...newContemporaryLessons,
]) {
  old.set(lesson.id, lesson);
}

function pick(ids) {
  return ids.map((id) => L(id));
}

function syllabusFromLessons(lessons) {
  return lessons.map((l) => l.title);
}

function buildModule(def) {
  const { lessonIds, section, ...rest } = def;
  const lessons = pick(lessonIds);
  return {
    ...rest,
    section,
    lessons,
    tags: ["Antarktida", ...(def.tags ?? [])],
    syllabus: syllabusFromLessons(lessons),
  };
}

const modules = [
  ...scienceModules.map((def) => buildModule({ ...def, section: "veda" })),
  buildModule({
    id: "mod-carp",
    title: "CARP",
    section: "ostatni",
    description:
      "Český antarktický výzkumný program Masarykovy univerzity — stanice Mendel a Nelson, brněnské laboratoře a multidisciplinární výzkumný program.",
    lessonIds: carpIds,
    tags: ["CARP", "MUNI"],
    resources: [
      {
        kind: "link",
        title: "CARP oficiální web",
        url: "https://carp.sci.muni.cz/",
        source: "CARP",
      },
    ],
  }),
  buildModule({
    id: "mod-historie",
    title: "Historie",
    section: "ostatni",
    description:
      "Od Heroic Age a závodů k pólu po Mezinárodní geofyzikální rok a vznik české stanice Johanna Gregora Mendela.",
    lessonIds: historieIds,
  }),
  buildModule({
    id: "mod-mezinarodni",
    title: "Mezinárodní vztahy",
    section: "ostatni",
    description:
      "Antarktická smlouva, územní nároky, SCAR, COMNAP, CCAMLR a role České republiky v globální polární politice.",
    lessonIds: mezinarodniIds,
    resources: [
      {
        kind: "link",
        title: "Antarctic Treaty Secretariat",
        url: "https://www.ats.aq/",
        source: "ATS",
      },
    ],
  }),
  buildModule({
    id: "mod-soucasnost",
    title: "Současnost a expedice",
    section: "ostatni",
    description:
      "Jak dnes probíhají expedice, etika výzkumu, turismus a ochrana kontinentu v éře klimatické změny.",
    lessonIds: soucasnostIds,
  }),
];

const out = {
  field: {
    ...src.field,
    subtitle: "Geografie · klima · biosféra · CARP · historie",
    description:
      "Vědní disciplíny o Antarktidě (geologie, kryosféra, klima, oceán, hydrologie, biosféra, paleoklima), český výzkum CARP, historie průzkumu, mezinárodní smluvní systém a současné expedice.",
  },
  modules,
};

writeFileSync(
  new URL("./antarktida_modules.json", import.meta.url),
  `${JSON.stringify(out, null, 2)}\n`,
  "utf8",
);

const total = modules.reduce((s, m) => s + m.lessons.length, 0);
console.log(`reorganized — ${modules.length} modulů, ${total} lekcí`);
