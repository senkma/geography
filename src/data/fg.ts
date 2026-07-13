import type { Field } from "../types";

export const fg: Field = {
  id: "fyzicka-geografie",
  title: "Fyzická geografie",
  subtitle: "Navazující magisterský program (PřF MUNI)",
  level: "Magisterské",
  accent: "#7fb5da",
  icon: "mountain",
  description:
    "Navazující magisterské studium prohlubuje znalosti fyzicko-geografických sfér a metod jejich výzkumu — geologie a geomorfologie, klimatologie a meteorologie, hydrologie, pedogeografie a biogeografie. Zahrnuje polární geovědy, glaciologii, paleoklimatologii, hodnocení krajiny a aplikovanou geoinformatiku.",
  sourceUrl:
    "https://www.muni.cz/uchazeci/navazujici-magisterske-studium/nabidka-studia/23698-fyzicka-geografie",
  courses: [
    {
      id: "metody-fg-1",
      title: "Metody fyzické geografie 1 — geologie, geomorfologie",
      credits: 5,
      semester: "1.–2.",
      completion: "zk",
      tags: ["geologie", "geomorfologie", "metody"],
      description:
        "Terénní a laboratorní metody studia litosféry a georeliéfu: geologické mapování, datování, morfometrie.",
      syllabus: [
        "Geologické a geomorfologické mapování",
        "Datovací metody (relativní i absolutní)",
        "Morfometrická analýza reliéfu z DMR",
        "Sedimentologické metody",
        "Interpretace tektonických tvarů",
      ],
      lessons: [
        {
          id: "mapovani",
          title: "Geomorfologické mapování",
          summary: "Terénní dokumentace tvarů reliéfu a jejich klasifikace.",
          minutes: 20,
          resources: [{ kind: "presentation", title: "Přednáška — mapování", note: "Materiál doplníme." }],
        },
      ],
    },
    {
      id: "metody-fg-2",
      title: "Metody FG 2 — klimatologie, meteorologie, hydrologie",
      credits: 5,
      semester: "1.",
      completion: "zk",
      tags: ["klimatologie", "hydrologie", "metody"],
      description:
        "Metody měření a analýzy klimatologických, meteorologických a hydrologických dat; časové řady a jejich zpracování.",
      syllabus: [
        "Měřicí technika a sítě stanic",
        "Homogenizace a kontrola dat",
        "Statistická analýza časových řad",
        "Hydrologické metody a bilance",
        "Reanalýzy a modelová data",
      ],
      lessons: [
        {
          id: "casove-rady",
          title: "Analýza klimatologických časových řad",
          summary: "Trendy, homogenizace, extrémy a jejich statistické hodnocení.",
          minutes: 25,
          resources: [{ kind: "document", title: "Studijní text — časové řady", note: "Materiál doplníme." }],
        },
      ],
    },
    {
      id: "metody-fg-3",
      title: "Metody FG 3 — biogeografie, pedogeografie",
      credits: 5,
      semester: "1.",
      completion: "zk",
      tags: ["biogeografie", "pedogeografie", "metody"],
      description:
        "Metody studia půd a bioty: půdní sondy, klasifikace půd, vegetační snímkování, druhové distribuční modely.",
      syllabus: [
        "Půdní sondy a klasifikace půd",
        "Fytocenologické snímkování",
        "Druhové distribuční modely (SDM)",
        "Analýza biodiverzity",
      ],
      lessons: [
        {
          id: "pudni-sondy",
          title: "Půdní sondy a klasifikace",
          summary: "Popis půdního profilu, horizonty, taxonomie.",
          minutes: 20,
          resources: [{ kind: "presentation", title: "Přednáška — pedologie", note: "Materiál doplníme." }],
        },
      ],
    },
    {
      id: "polarni-geovedy",
      title: "Polární geovědy",
      credits: 4,
      semester: "2.–4.",
      completion: "zk",
      tags: ["polární oblasti", "kryosféra", "Antarktida"],
      description:
        "Komplexní pohled na polární oblasti: kryosféra, ledovcové štíty, permafrost, polární klima a ekosystémy. Úzce navazuje na modul Antarktida.",
      syllabus: [
        "Vymezení a specifika polárních oblastí",
        "Kryosféra: ledovce, mořský led, permafrost",
        "Polární klima a atmosférická cirkulace",
        "Polární ekosystémy",
        "Výzkum a mezinárodní spolupráce",
      ],
      lessons: [
        {
          id: "kryosfera",
          title: "Kryosféra polárních oblastí",
          summary: "Formy ledu na Zemi a jejich role v klimatickém systému.",
          minutes: 20,
          resources: [
            { kind: "presentation", title: "Přednáška — kryosféra", note: "Materiál doplníme." },
            { kind: "link", title: "Modul Antarktida", note: "Navazuje na kompletní materiál v modulu Antarktida." },
          ],
        },
      ],
    },
    {
      id: "ledovce-planety",
      title: "Ledovce planety Země a metody jejich výzkumu",
      credits: 4,
      semester: "2.",
      completion: "zk",
      tags: ["glaciologie", "kryosféra"],
      description:
        "Glaciologie: vznik, pohyb a bilance ledovců, jejich typy a metody výzkumu (radar, ledovcové jádra, DPZ).",
      syllabus: [
        "Typy ledovců a jejich rozšíření",
        "Bilance hmoty ledovce",
        "Dynamika a pohyb ledu",
        "Ledovcová jádra a paleoklima",
        "Dálkový průzkum ledovců",
      ],
      lessons: [
        {
          id: "bilance-hmoty",
          title: "Bilance hmoty ledovce",
          summary: "Akumulace vs. ablace, rovnovážná linie (ELA).",
          minutes: 20,
          resources: [{ kind: "document", title: "Studijní text — bilance ledovce", note: "Materiál doplníme." }],
        },
      ],
    },
    {
      id: "zmeny-kolisani-podnebi",
      title: "Změny a kolísání podnebí",
      garant: "R. Brázdil",
      credits: 4,
      semester: "2.",
      completion: "zk",
      tags: ["klimatologie", "změna klimatu"],
      description:
        "Přirozené i antropogenní příčiny klimatické variability, rekonstrukce klimatu a scénáře budoucího vývoje.",
      syllabus: [
        "Klimatický systém a zpětné vazby",
        "Přirozené příčiny variability (Milankovičovy cykly, sluneční aktivita, sopky)",
        "Antropogenní vliv a skleníkový efekt",
        "Rekonstrukce klimatu (proxy data)",
        "Klimatické scénáře a modely",
      ],
      lessons: [
        {
          id: "milankovic",
          title: "Milankovičovy cykly",
          summary: "Excentricita, sklon osy a precese jako astronomické příčiny ledových dob.",
          minutes: 20,
          resources: [{ kind: "presentation", title: "Přednáška — orbitální cykly", note: "Materiál doplníme." }],
        },
      ],
    },
    {
      id: "paleoklimatologie",
      title: "Paleoklimatologie",
      credits: 4,
      semester: "3.",
      completion: "zk",
      tags: ["paleoklima", "proxy"],
      description:
        "Rekonstrukce dávného klimatu z přírodních archivů: ledovcová jádra, letokruhy, sedimenty, pyl.",
      syllabus: [
        "Přírodní klimatické archivy",
        "Izotopové metody (δ18O)",
        "Ledovcová jádra Antarktidy a Grónska",
        "Kvartérní klimatické cykly",
        "Holocén a současnost",
      ],
      lessons: [
        {
          id: "ledova-jadra",
          title: "Ledovcová jádra jako archiv klimatu",
          summary: "Vzduchové bublinky, izotopy a vrstvy prachu vyprávějí historii klimatu.",
          minutes: 20,
          resources: [
            { kind: "document", title: "Studijní text — ledovcová jádra", note: "Materiál doplníme." },
            { kind: "link", title: "Viz modul Antarktida — Paleoklima", note: "Detailní zpracování v modulu Antarktida." },
          ],
        },
      ],
    },
    {
      id: "hodnoceni-krajiny",
      title: "Hodnocení krajiny",
      credits: 4,
      semester: "1.",
      completion: "zk",
      tags: ["krajina", "aplikovaná FG"],
      description:
        "Metody hodnocení krajiny, krajinný ráz, ekosystémové služby a nástroje krajinného plánování.",
      syllabus: [
        "Pojem a struktura krajiny",
        "Krajinný ráz a jeho hodnocení",
        "Ekosystémové služby",
        "Land use / land cover změny",
        "Krajinné plánování",
      ],
      lessons: [
        {
          id: "krajinny-raz",
          title: "Krajinný ráz",
          summary: "Charakteristické znaky a hodnoty krajiny, metodika hodnocení.",
          minutes: 15,
          resources: [{ kind: "presentation", title: "Přednáška — krajinný ráz", note: "Materiál doplníme." }],
        },
      ],
    },
    {
      id: "aplikovana-geoinformatika",
      title: "Aplikovaná geoinformatika",
      credits: 5,
      semester: "2.",
      completion: "k",
      tags: ["GIS", "DPZ", "metody"],
      description:
        "Pokročilé prostorové analýzy, dálkový průzkum Země a modelování ve fyzické geografii.",
      syllabus: [
        "Pokročilé prostorové analýzy",
        "Dálkový průzkum Země a klasifikace snímků",
        "Digitální modely reliéfu a jejich analýza",
        "Prostorové modelování procesů",
        "Automatizace (Python, model builder)",
      ],
      lessons: [
        {
          id: "dpz",
          title: "Dálkový průzkum Země",
          summary: "Družicová data, spektrální pásma, klasifikace krajinného pokryvu.",
          minutes: 25,
          resources: [
            { kind: "tool", title: "Copernicus Open Access Hub", url: "https://dataspace.copernicus.eu/", source: "ESA Copernicus" },
          ],
        },
      ],
    },
  ],
};
