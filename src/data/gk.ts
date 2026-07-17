import type { Field } from "../types";

/** Sestaveno z content/ + IS MUNI (plán 23634). */
export const gk: Field = {
  id: "geografie-kartografie",
  title: "Geografie a kartografie",
  subtitle: "Bakalářský program (PřF MUNI) — specializace Fyzická geografie",
  level: "Bakalářské",
  accent: "#86c7a8",
  icon: "compass",
  description:
    "Bakalářský program Geografie a kartografie (B-GEK). Předměty a osnovy jsou převzaty z oficiálního studijního plánu specializace Fyzická geografie (plán 23634) v IS MUNI — společná oborová část a specializační předměty FG. Zdroj osnov: zkouškové okruhy nebo klíčová témata z katalogu předmětů.",
  sourceUrl: "https://is.muni.cz/plan/23634/fyzicka-geografie",
  courses: [
    {
      id: "z1035",
      code: "PřF:Z1035",
      title: "Geografický proseminář",
      garant: "Mgr. Jarmila Burianová, Ph.D.",
      credits: 1,
      semester: "1.",
      completion: "z",
      tags: ["Povinné předměty (oborové)"],
      description: "Během semináře studenti získají informace o možnostech, organizaci a pravidlech studia a výuky na Geografickém ústavu. Jsou seznámeni s historií geografie v Brně a v České republice, s ostatními geografickými pracovišti, organizacemi, časopisy. Je jim představena také výzkumná činnost na ústavu.",
      syllabus: [
        "Organizace studia na GÚ",
        "Studijní a zkušební řád MU",
        "Knihovna MU a její služby studentům geografie",
        "Geografie a geografové",
        "Základy citování literatury",
        "Formální úprava dokumentů, pravidla tvorby prezentace",
        "Představení činnosti EGEA",
        "Výzkumná činnost na GÚ",
        "Možnosti studia v zahraničí"
      ],
      lessons: [
        {
          "id": "z1035-organizace-studia-na-gu-1",
          "title": "Organizace studia na GÚ",
          "summary": "Studijní okruh: Organizace studia na GÚ",
          "minutes": 12,
          "available": false
        },
        {
          "id": "z1035-studijni-a-zkusebni-rad-mu-2",
          "title": "Studijní a zkušební řád MU",
          "summary": "Studijní okruh: Studijní a zkušební řád MU",
          "minutes": 12,
          "available": false
        },
        {
          "id": "z1035-knihovna-mu-a-jeji-sluzby-studentum-geografie-3",
          "title": "Knihovna MU a její služby studentům geografie",
          "summary": "Studijní okruh: Knihovna MU a její služby studentům geografie",
          "minutes": 12,
          "available": false
        },
        {
          "id": "z1035-geografie-a-geografove-4",
          "title": "Geografie a geografové",
          "summary": "Studijní okruh: Geografie a geografové",
          "minutes": 12,
          "available": false
        },
        {
          "id": "z1035-zaklady-citovani-literatury-5",
          "title": "Základy citování literatury",
          "summary": "Studijní okruh: Základy citování literatury",
          "minutes": 12,
          "available": false
        },
        {
          "id": "z1035-formalni-uprava-dokumentu-pravidla-tvorby-prezen-6",
          "title": "Formální úprava dokumentů, pravidla tvorby prezentace",
          "summary": "Studijní okruh: Formální úprava dokumentů, pravidla tvorby prezentace",
          "minutes": 12,
          "available": false
        },
        {
          "id": "z1035-predstaveni-cinnosti-egea-7",
          "title": "Představení činnosti EGEA",
          "summary": "Studijní okruh: Představení činnosti EGEA",
          "minutes": 12,
          "available": false
        },
        {
          "id": "z1035-vyzkumna-cinnost-na-gu-8",
          "title": "Výzkumná činnost na GÚ",
          "summary": "Studijní okruh: Výzkumná činnost na GÚ",
          "minutes": 12,
          "available": false
        },
        {
          "id": "z1035-moznosti-studia-v-zahranici-9",
          "title": "Možnosti studia v zahraničí",
          "summary": "Studijní okruh: Možnosti studia v zahraničí",
          "minutes": 12,
          "available": false
        }
      ],
      resources: [
        {
          "kind": "link",
          "title": "IS MUNI — detail předmětu",
          "url": "https://is.muni.cz/predmet/sci/Z1035",
          "source": "IS MUNI"
        },
        {
          "kind": "link",
          "title": "Studijní plán v IS MUNI",
          "url": "https://is.muni.cz/plan/23634/fyzicka-geografie",
          "source": "IS MUNI"
        },
        {
          "kind": "link",
          "title": "IS MUNI — detail předmětu",
          "url": "https://is.muni.cz/predmet/sci/Z1035",
          "source": "IS MUNI"
        },
        {
          "kind": "link",
          "title": "Studijní plán v IS MUNI",
          "url": "https://is.muni.cz/plan/23634/fyzicka-geografie",
          "source": "IS MUNI"
        }
      ],
    },
    {
      id: "z1069",
      code: "PřF:Z1069",
      title: "Stat. metody a zprac dat 1",
      garant: "Mgr. Ladislava Řezníčková, Ph.D.",
      credits: 4,
      semester: "1.",
      completion: "z",
      tags: ["Povinné předměty (oborové)"],
      description: "Hlavním cílem předmětu je dát studentům především základní informace a praktické dovednosti použití základních metod popisné statistiky v geografii. Na konci tohoto kurzu bude student schopen porozumět a vysvětlit podstatu základních statistických metod vysvětlených v jednotlivých lekcích. Bude schopen vysvětlit, kdy použít jednotlivé metody a předkládat racionální odůvodnění o podmínkách využití statistických metod. Měl by být schopen kvalifikovaných rozhodnutí týkajících se přípravy dat, aplikací metod a především na základě nabytých znalostí interpretovat výsledky.",
      syllabus: [
        "Základní pojmy, geografická data a jejich specifika",
        "Popisná statistika I – míry úrovně a variability, momenty vyššího řádu",
        "Popisná statistika II– průzkumová analýza dat, grafické nástroje a cíle",
        "Teoretická rozdělení, základní pojmy z počtu pravděpodobnosti, frekvenční a distribuční funkce",
        "Bodové a intervalové odhady parametrů",
        "Testování statistických hypotéz I – obecné postupy a principy, normalita, parametrické testy",
        "Testování statistických hypotéz II – neparametrické testy",
        "Analýza závislosti – míry korelace a jejich interpretace, závislost kvalitativních znaků",
        "Úvod do regresní analýzy - lineární regresní model"
      ],
      lessons: [
        {
          "id": "z1069-zakladni-pojmy-geograficka-data-a-jejich-specifi-1",
          "title": "Základní pojmy, geografická data a jejich specifika",
          "summary": "Studijní okruh: Základní pojmy, geografická data a jejich specifika",
          "minutes": 12,
          "available": false
        },
        {
          "id": "z1069-popisna-statistika-i-miry-urovne-a-variability-m-2",
          "title": "Popisná statistika I – míry úrovně a variability, momenty vyššího řádu",
          "summary": "Studijní okruh: Popisná statistika I – míry úrovně a variability, momenty vyššího řádu",
          "minutes": 15,
          "available": false
        },
        {
          "id": "z1069-popisna-statistika-ii-pruzkumova-analyza-dat-gra-3",
          "title": "Popisná statistika II– průzkumová analýza dat, grafické nástroje a cíle",
          "summary": "Studijní okruh: Popisná statistika II– průzkumová analýza dat, grafické nástroje a cíle",
          "minutes": 15,
          "available": false
        },
        {
          "id": "z1069-teoreticka-rozdeleni-zakladni-pojmy-z-poctu-prav-4",
          "title": "Teoretická rozdělení, základní pojmy z počtu pravděpodobnosti, frekvenční a distribuční funkce",
          "summary": "Studijní okruh: Teoretická rozdělení, základní pojmy z počtu pravděpodobnosti, frekvenční a distribuční funkce",
          "minutes": 15,
          "available": false
        },
        {
          "id": "z1069-bodove-a-intervalove-odhady-parametru-5",
          "title": "Bodové a intervalové odhady parametrů",
          "summary": "Studijní okruh: Bodové a intervalové odhady parametrů",
          "minutes": 12,
          "available": false
        },
        {
          "id": "z1069-testovani-statistickych-hypotez-i-obecne-postupy-6",
          "title": "Testování statistických hypotéz I – obecné postupy a principy, normalita, parametrické testy",
          "summary": "Studijní okruh: Testování statistických hypotéz I – obecné postupy a principy, normalita, parametrické testy",
          "minutes": 15,
          "available": false
        },
        {
          "id": "z1069-testovani-statistickych-hypotez-ii-neparametrick-7",
          "title": "Testování statistických hypotéz II – neparametrické testy",
          "summary": "Studijní okruh: Testování statistických hypotéz II – neparametrické testy",
          "minutes": 12,
          "available": false
        },
        {
          "id": "z1069-analyza-zavislosti-miry-korelace-a-jejich-interp-8",
          "title": "Analýza závislosti – míry korelace a jejich interpretace, závislost kvalitativních znaků",
          "summary": "Studijní okruh: Analýza závislosti – míry korelace a jejich interpretace, závislost kvalitativních znaků",
          "minutes": 15,
          "available": false
        },
        {
          "id": "z1069-uvod-do-regresni-analyzy-linearni-regresni-model-9",
          "title": "Úvod do regresní analýzy - lineární regresní model",
          "summary": "Studijní okruh: Úvod do regresní analýzy - lineární regresní model",
          "minutes": 12,
          "available": false
        }
      ],
      resources: [
        {
          "kind": "link",
          "title": "IS MUNI — detail předmětu",
          "url": "https://is.muni.cz/predmet/sci/Z1069",
          "source": "IS MUNI"
        },
        {
          "kind": "link",
          "title": "Studijní plán v IS MUNI",
          "url": "https://is.muni.cz/plan/23634/fyzicka-geografie",
          "source": "IS MUNI"
        },
        {
          "kind": "link",
          "title": "IS MUNI — detail předmětu",
          "url": "https://is.muni.cz/predmet/sci/Z1069",
          "source": "IS MUNI"
        },
        {
          "kind": "link",
          "title": "Studijní plán v IS MUNI",
          "url": "https://is.muni.cz/plan/23634/fyzicka-geografie",
          "source": "IS MUNI"
        }
      ],
    },
    {
      id: "z0026p",
      code: "PřF:Z0026p",
      title: "Fyzická geografie",
      garant: "doc. Mgr. Daniel Nývlt, Ph.D.",
      credits: 7,
      semester: "1.",
      completion: "zk",
      tags: ["Povinné předměty (oborové)"],
      description: "Předmět podává základní představu o subsystému fyzickogeografické sféry Země se zaměřením na jednotlivé procesy a jevy, které se v ní odehrávají. Zároveň jde o prezentaci vzájemného propojení a souvislostí odehrávajících se procesů, objasnění příčin a mechanismů jejich fungování s uplatněním složkového a celostního pohledu.",
      syllabus: [
        "Přednáška:",
        "Témata prof. Brázdila:",
        "1. Úvod do studia fyzické geografie: FG jako vědní disciplína, předmět studia, geosféry, fyzickogeografická sféra, členění FG, pomocné disciplíny, postavení FG v rámci systému geografických věd, celostní a složkový pohled na FG sféru.",
        "2. Základní poznatky o atmosféře: Atmosféra, vzduch, chemické složení vzduchu, fyzikální vlastnosti. Vertikální struktura atmosféry. Ozon a jeho změny v atmosféře. Antropogenní změny vlastností atmosféry. Počasí, povětrnost, podnebí.",
        "3. Základní meteorologické prvky: Sluneční záření. Dlouhovlnné záření. Radiační a energetická bilance. Teplota půdy. Teplota vzduchu. Voda v atmosféře (výpar, vlhkost vzduchu, oblaka a oblačnost, mlhy). Srážky. Tlak vzduchu. Proudění vzduchu. Místní větry a místní cirkulační systémy.",
        "4. Všeobecná cirkulace atmosféry: Vzduchové hmoty. Atmosférické fronty. Cirkulace tropických šířek (TZK, pasáty, antipasáty, monzuny, tropické cyklóny). Cirkulace mimotropických šířek (cyklony, anticyklony, mimotropické monzuny, zonální a meridionální cirkulace).",
        "5. Základy předpovědi počasí: zdroje dat pro předpověď počasí, druhy předpovědi, metody krátkodobé předpovědi, dlouhodobá předpověď. 6. Klimatické klasifikace: metody klasifikace, rozdělení klasifikací. Konvenční klasifikace Köppena. Genetická klasifikace Alisovova.",
        "7. Změny a kolísání klimatu: základní klimatotvorné faktory (sluneční faktor, vulkanická činnost, interakce oceán-atmosféra, skleníkový efekt, aerosoly). Minulé a současné změny klimatu. Klimatické scénáře. Možné dopady klimatické změny.",
        "8. Hydrosféra: Rozšíření a oběh vody na Zemi. Hydrologické procesy a hydrologická bilance.",
        "9. Hydrografie: Měrné jednotky odtoku. Hydrografické charakteristiky povodí, říční sítě a koryta řeky",
        "10. Hydrometrie: Měření vodních stavů a průtoků",
        "11. Vodní režim řek: Režim průtoků a typizace řek podle režimu,",
        "12. Hydrologie podpovrchových vod: Zdroje vzniku podpovrchových vod, druhy vody v horninách, pozorování podzemních vod, zásoby, režimy, využívání.",
        "13. Hydrologie jezer a nádrží: Světové zásoby vody v jezerech a nádržích, morfometrické prvky jezer, vodní bilance, teplotné poměry.",
        "14. Světový oceán: struktura, procesy, vlastnosti vody.",
        "Témata doc. Máčky:",
        "1. Co je fyzická geografie?",
        "2. Paradigmata pro fyzickou geografii",
        "3. Fyzickogeografická sféra: procesy a krajiny",
        "3.1 Vývoj litosféry",
        "3.2 Horninový cyklus",
        "3.3 Tektonické procesy",
        "3.4 Zvětrávací procesy",
        "3.5 Gravitační svahové procesy",
        "3.6 Fluviální procesy",
        "3.7 Glaciální procesy",
        "3.8 Eolické procesy",
        "3.9 Marinní procesy",
        "3.10 Pedogeneze",
        "3.11 Ekosystémové procesy",
        "4. Prostorovost",
        "5. Environmentální změny",
        "6. Člověk přetváří přírodu",
        "7. Příroda ohrožuje člověka"
      ],
      lessons: [
        {
          "id": "z0026p-1-uvod-do-studia-fyzicke-geografie-fg-jako-vedni-1",
          "title": "1. Úvod do studia fyzické geografie: FG jako vědní disciplína, předmět studia, geosféry, fyzickogeografická sféra, členění FG, pomocné disciplíny, postavení FG v rámci systému geografických věd, celostní a složkový pohled na FG sféru.",
          "summary": "1. Úvod do studia fyzické geografie: FG jako vědní disciplína, předmět studia, geosféry, fyzickogeografická sféra, členění FG, pomocné di…",
          "minutes": 25,
          "sectionTitle": "Témata prof. Brázdila",
          "available": true,
          "blocks": [
            {
              "type": "heading",
              "text": "Témata prof. Brázdila"
            },
            {
              "type": "callout",
              "label": "Okruh",
              "text": "1. Úvod do studia fyzické geografie: FG jako vědní disciplína, předmět studia, geosféry, fyzickogeografická sféra, členění FG, pomocné disciplíny, postavení FG v rámci systému geografických věd, celostní a složkový pohled na FG sféru."
            },
            {
              "type": "callout",
              "label": "Jak číst tuto lekci",
              "text": "Text je výtah ze skripta a přednášek — použij ho jako mapu k učení. Detaily a obrázky najdeš v PDF/PPT v materiálech lekce."
            },
            {
              "type": "heading",
              "text": "Výtah ze skripta"
            },
            {
              "type": "paragraph",
              "text": "prof. RNDr. Rudolf Brázdil, DrSc. Mgr. Zdeněk Máčka, Ph.D."
            },
            {
              "type": "list",
              "items": [
                "podzimní semestr",
                "zkouška"
              ]
            },
            {
              "type": "subheading",
              "text": "9 kreditů",
              "label": "1"
            },
            {
              "type": "callout",
              "label": "Co je geografie?",
              "text": "Geografie se zaměřuje na prostorové uspořádání přírodních a společenských jevů na zemském povrchu a na interakce mezi společností a životním prostředím."
            },
            {
              "type": "list",
              "label": "Klíčové geografické otázky",
              "items": [
                "Kde to je? Studuje prostorové rozmístění (distribuci) věcí",
                "Proč to tam je? Snaží se vysvětlit,",
                "proč jsou věci rozmístěné zrovna takovým způsobem",
                "co s tím …? Pokouší se ukázat, jak toto porozumění může přispět k řešení problémů ve světě"
              ]
            },
            {
              "type": "callout",
              "label": "Co je fyzická geografie?",
              "text": "Úkolem fyzické geografie je vysvětlovat prostorové aspekty nejrůznějších přírodních jevů vázaných na litosféru, atmosféru, hydrosféru a biosféru. Geografie /Geography/"
            },
            {
              "type": "callout",
              "label": "Objekt studia",
              "text": "fyzickogeografická sféra Země"
            },
            {
              "type": "list",
              "label": "Klíčové body",
              "items": [
                "ÚVOD DO STUDIA FYZICKÉ GEOGRAFIE",
                "Fyzická geografie je vědní disciplína v rámci geografických věd, zabývající se studiem fyzickogeografické sféry Země.",
                "Z časového a prostorového hlediska popisuje, studuje a prognózuje procesy a jevy, které se v ní odehrávají.",
                "Fyzickogeografická sféra Země se skládá z jednotlivých geosfér:",
                "a) zemská kůra s georeliéfem – nejsvrchnější vrstva pevného zemského tělesa, jejíž povrch se označuje jako georeliéf",
                "b) atmosféra – plynný obal Země (po ozonovou vrstvu)",
                "c) hydrosféra – geosféra tvořená vodami oceánů a pevniny",
                "d) kryosféra – část zemské kůry a hydrosféry, jejíž teplota je po více než 2 roky pod bodem mrazu",
                "e) pedosféra – půdní pokryv na povrchu pevnin",
                "f) biosféra – geosféra s podmínkami pro život a trvale obydlena živými organismy",
                "fyzickogeografická + socioekonomická sféra = krajinná sféra Země"
              ]
            },
            {
              "type": "list",
              "items": [
                "Literatura: Netopil, R. a kol. (1984): Fyzická geografie I. SPN, Praha. Kap. 1: s. 9-25. Strahler, A., Strahler, A. (1999): Introducing Physical Geography. Wiley, New York. Kap. Prologue: s. 2-9."
              ]
            },
            {
              "type": "subheading",
              "text": "2. GLOBÁLNÍ ENERGETICKÁ BILANCE ZEMĚ",
              "label": "1"
            },
            {
              "type": "subheading",
              "text": "2.1 Elektromagnetické záření",
              "label": "2"
            },
            {
              "type": "list",
              "items": [
                "sluneční záření – elektromagnetické x korpuskulární (částicové)",
                "elektromagnetické záření – soubor záření různých vlnových délek vycházejícího od povrchu objektu",
                "vlnová délka L – vzdálenost od jednoho hřbetu vlny k sousednímu hřbetu; jednotka – µm (10-6",
                "m) nebo nm (10-9",
                "m) Obr. 2.1/31",
                "Strahler, Strahler (1999)"
              ]
            },
            {
              "type": "subheading",
              "text": "2.1.1 Záření a teplota",
              "label": "3"
            },
            {
              "type": "list",
              "items": [
                "dva základní principy emise elektromagnetického záření:",
                "a) nepřímý vztah mezi vlnovou délkou záření daného tělesa a jeho teplotou (Slunce – kratší vlnové délky, Země – větší vlnové délky)",
                "b) teplejší tělesa vyzařují mnohem více než tělesa chladnější (závislost na čtvrté mocnině absolutní teploty – Stefan-Boltzmannův zákon)"
              ]
            },
            {
              "type": "subheading",
              "text": "2.1.2 Sluneční záření",
              "label": "3"
            },
            {
              "type": "list",
              "label": "Klíčové body",
              "items": [
                "Slunce: jaderné reakce proton-protonového cyklu (přeměna vodíku na hélium) – povrchová teplota 6000 ˚C – výkon Slunce 2,8.1026 W – rychlost elektromagnetického záření 300 tisíc km.s-1 – 8 1/3 min.",
                "než dorazí na Zemi",
                "vzdálenější planety – méně energie od Slunce; Země – 1,7.1017 W",
                "spektrum elektromagnetického záření:",
                "a) ultrafialové záření – 0,2-0,4 µm – pohlceno téměř úplně plyny v atmosféře – škodlivé pro živé organismy",
                "b) viditelné záření – 0,4-0,7 µm – světelná energie – barva závislá na vlnové délce (fialové, modrá, zelená, žlutá, oranžová, červená) – jen malá část pohlcována",
                "c) krátkovlnné infračervené záření – 0,7-3 µm – lidské oko není ne ně citlivé – snadno proniká atmosférou",
                "c) = krátkovlnné záření",
                "d) tepelné infračervené záření – > 3 µm – vydáváno chladnějšími objekty – pociťováno jako teplo – označuje se jako dlouhovlnné záření (tepelné snímkování)"
              ]
            },
            {
              "type": "subheading",
              "text": "2.1.3 Charakteristiky slunečního záření",
              "label": "3"
            },
            {
              "type": "list",
              "items": [
                "různá intenzita vyzařování podle vlnové délky: ultrafialové – 9 %, viditelné – 41 %, krátkovlnné infračervené – 50 % (velmi málo energie pro L > 2 µm)",
                "intenzita slunečního záření je největší ve viditelné části spektra",
                "solární konstanta",
                "celková intenzita elektromagnetického záření Slunce, dopadajícího na horní hranici atmosféry na jednotkovou plochu kolmou k paprskům při střední vzdálenosti ZeměSlunce: IS = 1367 W.m-2 ± 0,3 % 2.1.4 Dlouhovlnné záření Země",
                "zemský povrch a atmosféra vyzařují méně energie o větších vlnových délkách (v porovnání se Sluncem)",
                "intenzita vyzařování má tři maxima pro L = 5, 10 a 20 µm – vlnové délky mezi tím pohlcovány hladně vodní párou a CO2"
              ]
            },
            {
              "type": "heading",
              "text": "Výpisky — téma 1 (úvod)"
            },
            {
              "type": "list",
              "label": "Body přednášky",
              "items": [
                "Fyzická geografie – FG_1 přednáška, Brázdil.",
                "Vědní disciplína zabývající se fyzickogeografické sféry Země.",
                "Popisuje, studuje a prognózuje procesy v ní se odehrávající."
              ]
            },
            {
              "type": "paragraph",
              "text": "[Fig_1]Nejsvrchnějši vrstva pevného zemského tělesa jejíchž povrch se označuje jako georeliéf – Věd. obor geomorfologie"
            },
            {
              "type": "list",
              "items": [
                "Plynný obal Země (až po ozonovou vrstvu).",
                "Věd. obor meteorologie a klimatologie"
              ]
            },
            {
              "type": "paragraph",
              "text": "Geosféra tvořená vodami oceánů a vodami pevniny. Věd. obor hydrologie"
            },
            {
              "type": "paragraph",
              "text": "Část zemské kůry a hydrosféry, která je po více než 2 roky pod bodem mrazu. Věd. obor glaciologie"
            },
            {
              "type": "paragraph",
              "text": "Půdní pokryv na povrchu pevnin. Věd. obor pedologie."
            },
            {
              "type": "paragraph",
              "text": "Geosféra s podmínkami pro život a trvalo obydlena živými organismy. Živý obal Země. Věd. obor biogeografie."
            },
            {
              "type": "paragraph",
              "text": "Fyzickogeografická + socioekonomická sféra = krajinná sféra Země."
            },
            {
              "type": "heading",
              "text": "Otázky a okruhy — FG_1"
            },
            {
              "type": "list",
              "label": "Klíčové body",
              "items": [
                "Úvod do studia fyzické geografie • Fyzická geografie je vědní disciplína v rámci geografických věd, zabývající se studiem fyzickogeografické sféry Země.",
                "Z časového a prostorového hlediska popisuje, studuje a prognózuje procesy a jevy, které se v ní odehrávají.",
                "Fyzickogeografická sféra Země se skládá z jednotlivých geosfér:",
                "a) zemská kůra s georeliéfem – nejsvrchnější vrstva pevného zemského tělesa, jejíž povrch se označuje jako georeliéf",
                "b) atmosféra – plynný obal Země (po ozonovou vrstvu)",
                "c) hydrosféra – geosféra tvořená vodami oceánů a pevniny",
                "d) kryosféra – část zemské kůry a hydrosféry, jejíž teplota je po více než 2 roky pod bodem mrazu",
                "e) pedosféra – půdní pokryv na povrchu pevnin",
                "f) biosféra – geosféra s podmínkami pro život a trvale obydlena živými organismy • fyzickogeografická (na Zemi už jen vyjímečně) + socioekonomická sféra (aktivita člověka) = krajinná sféra Země a, b, c, d, e, f = komplexní fyzická geografie"
              ]
            },
            {
              "type": "list",
              "items": [
                "Literatura: Netopil, R. a kol. (1984): Fyzická geografie I.",
                "Strahler, A., Strahler, A. (1999): Introducing Physical Geography."
              ]
            },
            {
              "type": "list",
              "label": "Klíčové body",
              "items": [
                "globální energetická bilance země 2.1 Elektromagnetické záření • sluneční záření – elektromagnetické x korpuskulární (čističové – tok elektricky nabitých částic, je vyšší než elektromagnetické) • elektromagnetické záření – soubor záření různých vlnových délek vycházejícího od povrchu objektu • vlnová délka L – vzdálenost od jednoho hřbetu vlny k sousednímu hřbetu; jednotka – μm (10-6",
                "m) nebo nm (10-9",
                "2.1/31 - Strahler, Strahler (1999)"
              ]
            },
            {
              "type": "subheading",
              "text": "2.1.1 Záření a teplota",
              "label": "3"
            },
            {
              "type": "paragraph",
              "text": "dva základní principy emise elektromagnetického záření:"
            },
            {
              "type": "list",
              "items": [
                "a) nepřímý vztah mezi vlnovou délkou záření daného tělesa a jeho teplotou (Slunce – kratší vlnové délky, Země – větší vlnové délky), každé těleso vyzařuje tepelnou energii",
                "b) teplejší tělesa vyzařují mnohem více než tělesa chladnější (závislost na čtvrté mocnině absolutní teploty – Stefan-Boltzmannův zákon)"
              ]
            },
            {
              "type": "paragraph",
              "text": "absolutně černé těleso (nejlépe saze) = konstanta = absolutní teplota tělesa , teplota je v Kelvinech (0° C = 273 K, 15°C = 273 + 15 K)"
            },
            {
              "type": "subheading",
              "text": "2.1.2 Sluneční záření",
              "label": "3"
            },
            {
              "type": "paragraph",
              "text": "Slunce: jaderné reakce proton-protonového cyklu (přeměna vodíku na hélium) – povrchová teplota 6000 ˚C – výkon Slunce 2,8.1026 W – rychlost elektromagnetického záření 300 tisíc km.s-1 – 8 1/3 min."
            },
            {
              "type": "list",
              "label": "Klíčové body",
              "items": [
                "než dorazí na Zemi • [W] = [J/s] – množství energie v J za časovou jednotku • vzdálenější planety – méně energie od Slunce; Země – 1,7.1017 W – to, co naše Země dostává • spektrum elektromagnetického záření:",
                "a) ultrafialové záření – 0,2-0,4 μm – pohlceno téměř úplně plyny v atmosféře – škodlivé pro živé organismy, je pohlcováno ozonem a kyslíkem",
                "b) viditelné záření – 0,4-0,7 μm – světelná energie – barva závislá na vlnové délce (fialové, modrá, zelená, žlutá, oranžová, červená => modrá obloha, červánky – jen malá část pohlcována",
                "c) krátkovlnné infračervené záření – 0,7-3 μm – lidské oko není ne ně citlivé – snadno proniká atmosférou •",
                "c) = krátkovlnné záření",
                "d) tepelné infračervené záření – > 3 μm – vydáváno chladnějšími objekty – pociťováno jako teplo – označuje se jako dlouhovlnné záření (tepelné snímkování) Obr.",
                "2.2/32 - Strahler, Strahler (1999)"
              ]
            },
            {
              "type": "subheading",
              "text": "2.1.3 Charakteristiky slunečního záření",
              "label": "3"
            },
            {
              "type": "list",
              "items": [
                "různá intenzita vyzařování podle vlnové délky: ultrafialové – 9 %, viditelné – 41 %, krátkovlnné infračervené – 50 % (velmi málo energie pro L > 2 μm)",
                "intenzita slunečního záření je největší ve viditelné části spektra, hlavně v oblasti zelené",
                "solární konstanta"
              ]
            },
            {
              "type": "list",
              "items": [
                "celková intenzita elektromagnetického záření Slunce, dopadajícího na horní hranici atmosféry na jednotkovou plochu kolmou k paprskům při střední vzdálenosti Země-Slunce: IS = 1367 W.m-2  0,3 %, měří se podle umělých družic Země, kolísá v rámci cyklu sluneční soustavy (0,1 – 0,2%)"
              ]
            },
            {
              "type": "subheading",
              "text": "2.1.4 Dlouhovlnné záření Země",
              "label": "3"
            },
            {
              "type": "list",
              "items": [
                "zemský povrch a atmosféra vyzařují méně energie o větších vlnových délkách (v porovnání se Sluncem)",
                "intenzita vyzařování má tři maxima pro L = 5, 10 a 20 μm – vlnové délky mezi tím pohlcovány hladně vodní párou a CO2",
                "je pohlcováno CO2 a vodní parou"
              ]
            },
            {
              "type": "list",
              "label": "Klíčové body",
              "items": [
                "ÚVOD DO STUDIA FYZICKÉ GEOGRAFIE",
                "Fyzická geografie je vědní disciplína v rámci geografických věd, zabývající se studiem fyzickogeografické sféry Země.",
                "Z časového a prostorového hlediska popisuje, studuje a prognózuje procesy a jevy, které se v ní odehrávají.",
                "Fyzickogeografická sféra Země se skládá z jednotlivých geosfér:",
                "a) zemská kůra s georeliéfem – nejsvrchnější vrstva pevného zemského tělesa, jejíž povrch se označuje jako georeliéf",
                "b) atmosféra – plynný obal Země (po ozonovou vrstvu)",
                "c) hydrosféra – geosféra tvořená vodami oceánů a pevniny",
                "d) kryosféra – část zemské kůry a hydrosféry, jejíž teplota je po více než 2 roky pod bodem mrazu",
                "e) pedosféra – půdní pokryv na povrchu pevnin",
                "f) biosféra – geosféra s podmínkami pro život a trvale obydlena živými organismy",
                "fyzickogeografická + socioekonomická sféra = krajinná sféra Země"
              ]
            },
            {
              "type": "subheading",
              "text": "2.1.2 Sluneční záření",
              "label": "3"
            },
            {
              "type": "list",
              "items": [
                "Slunce: jaderné reakce proton-protonového cyklu (přeměna vodíku na hélium) – povrchová teplota 6000 ˚C – výkon Slunce 2,8.1026 W – rychlost elektromagnetického záření 300 tisíc km.s-1 – 8 1/3 min.",
                "než dorazí na Zemi",
                "vzdálenější planety – méně energie od Slunce; Země – 1,7.1017 W",
                "spektrum elektromagnetického záření:",
                "a) ultrafialové záření – 0,2-0,4 µm – pohlceno téměř úplně plyny v atmosféře – škodlivé pro živé organismy",
                "b) viditelné záření – 0,4-0,7 µm – světelná energie – barva závislá na vlnové délce (fialové, modrá, zelená, žlutá, oranžová, červená) – jen malá část pohlcována",
                "c) krátkovlnné infračervené záření – 0,7-3 µm – lidské oko není ne ně citlivé – snadno proniká atmosférou",
                "c) = krátkovlnné záření",
                "d) tepelné infračervené záření – > 3 µm – vydáváno chladnějšími objekty – pociťováno jako teplo – označuje se jako dlouhovlnné záření (tepelné snímkování)"
              ]
            },
            {
              "type": "subheading",
              "text": "2.1.3 Charakteristiky slunečního záření",
              "label": "3"
            },
            {
              "type": "list",
              "items": [
                "různá intenzita vyzařování podle vlnové délky: ultrafialové – 9 %, viditelné – 41 %, krátkovlnné infračervené – 50 % (velmi málo energie pro L > 2 µm)",
                "intenzita slunečního záření je největší ve viditelné části spektra",
                "solární konstanta",
                "celková intenzita elektromagnetického záření Slunce, dopadajícího na horní hranici atmosféry na jednotkovou plochu kolmou k paprskům při střední vzdálenosti ZeměSlunce: IS = 1367 W.m-2 ± 0,3 % 2.1.4 Dlouhovlnné záření Země",
                "zemský povrch a atmosféra vyzařují méně energie o větších vlnových délkách (v porovnání se Sluncem)",
                "intenzita vyzařování má tři maxima pro L = 5, 10 a 20 µm – vlnové délky mezi tím pohlcovány hladně vodní párou a CO2",
                "Úvod do studia fyzické geografie • Fyzická geografie je vědní disciplína v rámci geografických věd, zabývající se studiem fyzickogeografické sféry Země.",
                "f) biosféra – geosféra s podmínkami pro život a trvale obydlena živými organismy • fyzickogeografická (na Zemi už jen vyjímečně) + socioekonomická sféra (aktivita člověka) = krajinná sféra Země a, b, c, d, e, f = komplexní fyzická geografie",
                "globální energetická bilance země 2.1 Elektromagnetické záření • sluneční záření – elektromagnetické x korpuskulární (čističové – tok elektricky nabitých částic, je vyšší než elektromagnetické) • elektromagnetické záření – soubor záření různých vlnových délek vycházejícího od povrchu objektu • vlnová délka L – vzdálenost od jednoho hřbetu vlny k sousednímu hřbetu; jednotka – μm (10-6",
                "m) nebo nm (10-9",
                "2.1/31 - Strahler, Strahler (1999)"
              ]
            },
            {
              "type": "subheading",
              "text": "2.1.2 Sluneční záření",
              "label": "3"
            },
            {
              "type": "paragraph",
              "text": "Slunce: jaderné reakce proton-protonového cyklu (přeměna vodíku na hélium) – povrchová teplota 6000 ˚C – výkon Slunce 2,8.1026 W – rychlost elektromagnetického záření 300 tisíc km.s-1 – 8 1/3 min."
            },
            {
              "type": "list",
              "items": [
                "než dorazí na Zemi • [W] = [J/s] – množství energie v J za časovou jednotku • vzdálenější planety – méně energie od Slunce; Země – 1,7.1017 W – to, co naše Země dostává • spektrum elektromagnetického záření:",
                "a) ultrafialové záření – 0,2-0,4 μm – pohlceno téměř úplně plyny v atmosféře – škodlivé pro živé organismy, je pohlcováno ozonem a kyslíkem",
                "b) viditelné záření – 0,4-0,7 μm – světelná energie – barva závislá na vlnové délce (fialové, modrá, zelená, žlutá, oranžová, červená => modrá obloha, červánky – jen malá část pohlcována",
                "c) krátkovlnné infračervené záření – 0,7-3 μm – lidské oko není ne ně citlivé – snadno proniká atmosférou •",
                "d) tepelné infračervené záření – > 3 μm – vydáváno chladnějšími objekty – pociťováno jako teplo – označuje se jako dlouhovlnné záření (tepelné snímkování) Obr.",
                "2.2/32 - Strahler, Strahler (1999)"
              ]
            },
            {
              "type": "subheading",
              "text": "2.1.3 Charakteristiky slunečního záření",
              "label": "3"
            },
            {
              "type": "list",
              "items": [
                "různá intenzita vyzařování podle vlnové délky: ultrafialové – 9 %, viditelné – 41 %, krátkovlnné infračervené – 50 % (velmi málo energie pro L > 2 μm)",
                "intenzita slunečního záření je největší ve viditelné části spektra, hlavně v oblasti zelené",
                "solární konstanta"
              ]
            },
            {
              "type": "list",
              "items": [
                "celková intenzita elektromagnetického záření Slunce, dopadajícího na horní hranici atmosféry na jednotkovou plochu kolmou k paprskům při střední vzdálenosti Země-Slunce: IS = 1367 W.m-2  0,3 %, měří se podle umělých družic Země, kolísá v rámci cyklu sluneční soustavy (0,1 – 0,2%)"
              ]
            },
            {
              "type": "list",
              "label": "Doporučený postup",
              "items": [
                "Projdi výtah a vlastní poznámky z přednášky",
                "Otevři přiložené PDF/PPT v materiálech lekce",
                "Propoj s předchozími a navazujícími okruhy v osnově"
              ]
            }
          ],
          "resources": [
            {
              "kind": "document",
              "title": "FG_1 — okruhy Brázdil",
              "url": "/materials/geografie-kartografie/z0026p/FG_1.doc",
              "source": "Brázdil"
            },
            {
              "kind": "document",
              "title": "Výpisky — téma 1 (úvod)",
              "url": "/materials/geografie-kartografie/z0026p/vypisky-z-fyzicke-geografie-mu-1-tema-od-brazdila.docx",
              "source": "Výpisky MU"
            },
            {
              "kind": "document",
              "title": "FG_1",
              "url": "/materials/geografie-kartografie/z0026p/FG_1.pdf",
              "source": "Brázdil — skriptum"
            },
            {
              "kind": "document",
              "title": "FG_uvod",
              "url": "/materials/geografie-kartografie/z0026p/FG_uvod.pdf",
              "source": "Brázdil — skriptum"
            },
            {
              "kind": "link",
              "title": "IS MUNI — Fyzická geografie",
              "url": "https://is.muni.cz/predmet/sci/Z0026p",
              "source": "IS MUNI"
            },
            {
              "kind": "document",
              "title": "otazky-na-tema-1-a-2.docx",
              "url": "/materials/geografie-kartografie/z0026p/otazky-na-tema-1-a-2.docx",
              "source": "Okruhy ke zkoušce",
              "note": "Sdílený materiál pro více okruhů"
            },
            {
              "kind": "document",
              "title": "otazky-ze-tretiho-terminu-zkousky.docx",
              "url": "/materials/geografie-kartografie/z0026p/otazky-ze-tretiho-terminu-zkousky.docx",
              "source": "Okruhy ke zkoušce",
              "note": "Sdílený materiál pro více okruhů"
            }
          ],
          "quiz": {
            "title": "Kvíz: Úvod do fyzické geografie",
            "questions": [
              {
                "question": "Co je hlavním objektem studia fyzické geografie?",
                "options": [
                  {
                    "text": "Fyzickogeografická sféra Země",
                    "correct": true
                  },
                  {
                    "text": "Socioekonomická sféra Země",
                    "correct": false
                  },
                  {
                    "text": "Pouze litosféra a georeliéf",
                    "correct": false
                  },
                  {
                    "text": "Krajinná sféra včetně lidské kultury",
                    "correct": false
                  }
                ],
                "explanation": "FG studuje přírodní geosféry a procesy v nich; krajinná sféra vzniká až spojením s lidskou činností."
              },
              {
                "question": "Která geosféra je definována teplotou pod bodem mrazu po více než 2 roky?",
                "options": [
                  {
                    "text": "Kryosféra",
                    "correct": true
                  },
                  {
                    "text": "Pedosféra",
                    "correct": false
                  },
                  {
                    "text": "Hydrosféra",
                    "correct": false
                  },
                  {
                    "text": "Biosféra",
                    "correct": false
                  }
                ],
                "explanation": "Kryosféra zahrnuje část kůry a hydrosféry trvale zamrzlé nebo s dlouhodobě zápornou teplotou."
              },
              {
                "question": "Podle Stefan-Boltzmannova zákona platí, že teplejší tělesa…",
                "options": [
                  {
                    "text": "vyzařují výrazně více energie než chladnější",
                    "correct": true
                  },
                  {
                    "text": "vyzařují jen kratší vlnové délky",
                    "correct": false
                  },
                  {
                    "text": "mají vždy nižší albedo",
                    "correct": false
                  },
                  {
                    "text": "pohlcují méně slunečního záření",
                    "correct": false
                  }
                ],
                "explanation": "Intenzita vyzařování roste s čtvrtou mocninou absolutní teploty tělesa."
              },
              {
                "question": "Jaká je přibližná hodnota solární konstanty?",
                "options": [
                  {
                    "text": "1367 W·m⁻²",
                    "correct": true
                  },
                  {
                    "text": "100 W·m⁻²",
                    "correct": false
                  },
                  {
                    "text": "367 W·m⁻²",
                    "correct": false
                  },
                  {
                    "text": "2367 W·m⁻²",
                    "correct": false
                  }
                ],
                "explanation": "Solární konstanta je intenzita záření na horní hranici atmosféry při střední vzdálenosti Země od Slunce."
              },
              {
                "question": "Která trojice odpovídá klíčovým geografickým otázkám?",
                "options": [
                  {
                    "text": "Kde? — Proč tam? — Co s tím?",
                    "correct": true
                  },
                  {
                    "text": "Kdy? — Kolik? — Kdo?",
                    "correct": false
                  },
                  {
                    "text": "Jak hluboko? — Jak rychle? — Kam odtéká?",
                    "correct": false
                  },
                  {
                    "text": "Co je to? — Jak staré? — Z čeho se skládá?",
                    "correct": false
                  }
                ],
                "explanation": "Geografie kombinuje prostorovou distribuci, vysvětlení a aplikaci poznatků."
              },
              {
                "question": "Která odpověď nejlépe doplňuje: „Co je geografie\"?",
                "options": [
                  {
                    "text": "Kde to je? Studuje prostorové rozmístění (distribuci) věcí",
                    "correct": false
                  },
                  {
                    "text": "Geografie se zaměřuje na prostorové uspořádání přírodních a společenských jevů na zemském povrchu a na interakce mezi společností a životním prostředím.",
                    "correct": true
                  },
                  {
                    "text": "Proč to tam je? Snaží se vysvětlit,",
                    "correct": false
                  },
                  {
                    "text": "proč jsou věci rozmístěné zrovna takovým způsobem",
                    "correct": false
                  }
                ],
                "explanation": "Výklad: Geografie se zaměřuje na prostorové uspořádání přírodních a společenských jevů na zemském povrchu a na interakce mezi společností a životním prostředím."
              },
              {
                "question": "Které tvrzení patří k okruhu „Úvod do studia fyzické geografie: FG jako vědní…\"?",
                "options": [
                  {
                    "text": "proč jsou věci rozmístěné zrovna takovým způsobem",
                    "correct": false
                  },
                  {
                    "text": "Proč to tam je? Snaží se vysvětlit,",
                    "correct": false
                  },
                  {
                    "text": "Kde to je? Studuje prostorové rozmístění (distribuci) věcí",
                    "correct": true
                  },
                  {
                    "text": "Geografie se zaměřuje na prostorové uspořádání přírodních a společenských jevů na zemském povrchu a na interakce mezi společností a životním prostředím.",
                    "correct": false
                  }
                ],
                "explanation": "Kde to je? Studuje prostorové rozmístění (distribuci) věcí"
              },
              {
                "question": "Která odpověď nejlépe doplňuje: „Co je fyzická geografie\"?",
                "options": [
                  {
                    "text": "Geografie se zaměřuje na prostorové uspořádání přírodních a společenských jevů na zemském povrchu a na interakce mezi společností a životním prostředím.",
                    "correct": false
                  },
                  {
                    "text": "Úkolem fyzické geografie je vysvětlovat prostorové aspekty nejrůznějších přírodních jevů vázaných na litosféru, atmosféru, hydrosféru a biosféru. Geografie /Geography/",
                    "correct": true
                  },
                  {
                    "text": "Kde to je? Studuje prostorové rozmístění (distribuci) věcí",
                    "correct": false
                  },
                  {
                    "text": "Proč to tam je? Snaží se vysvětlit,",
                    "correct": false
                  }
                ],
                "explanation": "Výklad: Úkolem fyzické geografie je vysvětlovat prostorové aspekty nejrůznějších přírodních jevů vázaných na litosféru, atmosféru, hydrosféru a biosféru. Geografie /Geography/"
              },
              {
                "question": "Co je správné tvrzení k pojmu „Objekt studia\"?",
                "options": [
                  {
                    "text": "Geografie se zaměřuje na prostorové uspořádání přírodních a společenských jevů na zemském povrchu a na interakce mezi společností a životním prostředím.",
                    "correct": false
                  },
                  {
                    "text": "Kde to je? Studuje prostorové rozmístění (distribuci) věcí",
                    "correct": false
                  },
                  {
                    "text": "fyzickogeografická sféra Země",
                    "correct": true
                  },
                  {
                    "text": "Proč to tam je? Snaží se vysvětlit,",
                    "correct": false
                  }
                ],
                "explanation": "Výklad: fyzickogeografická sféra Země"
              },
              {
                "question": "Které tvrzení odpovídá obsahu lekce?",
                "options": [
                  {
                    "text": "Výklad k tomuto okruhu neobsahuje tuto informaci.",
                    "correct": false
                  },
                  {
                    "text": "2. GLOBÁLNÍ ENERGETICKÁ BILANCE ZEMĚ",
                    "correct": true
                  },
                  {
                    "text": "Toto tvrzení nelze z výkladu lekce ověřit.",
                    "correct": false
                  },
                  {
                    "text": "Geografie se zaměřuje na prostorové uspořádání přírodních a společenských jevů na zemském povrchu a na interakce mezi společností a životním prostředím.",
                    "correct": false
                  }
                ],
                "explanation": "Správně: 2. GLOBÁLNÍ ENERGETICKÁ BILANCE ZEMĚ"
              },
              {
                "question": "K tématu „Úvod do studia fyzické geografie: FG jako…\" — které tvrzení je správné? (11)",
                "options": [
                  {
                    "text": "Geografie se zaměřuje na prostorové uspořádání přírodních a společenských jevů na zemském povrchu a na interakce mezi společností a životním prostředím.",
                    "correct": false
                  },
                  {
                    "text": "Fyzickogeografická sféra Země se skládá z jednotlivých geosfér:",
                    "correct": true
                  },
                  {
                    "text": "Kde to je? Studuje prostorové rozmístění (distribuci) věcí",
                    "correct": false
                  },
                  {
                    "text": "Proč to tam je? Snaží se vysvětlit,",
                    "correct": false
                  }
                ],
                "explanation": "Fyzickogeografická sféra Země se skládá z jednotlivých geosfér:"
              },
              {
                "question": "K tématu „Úvod do studia fyzické geografie: FG jako…\" — které tvrzení je správné? (12)",
                "options": [
                  {
                    "text": "Geografie se zaměřuje na prostorové uspořádání přírodních a společenských jevů na zemském povrchu a na interakce mezi společností a životním prostředím.",
                    "correct": false
                  },
                  {
                    "text": "a) zemská kůra s georeliéfem – nejsvrchnější vrstva pevného zemského tělesa, jejíž povrch se označuje jako georeliéf",
                    "correct": true
                  },
                  {
                    "text": "Kde to je? Studuje prostorové rozmístění (distribuci) věcí",
                    "correct": false
                  },
                  {
                    "text": "Proč to tam je? Snaží se vysvětlit,",
                    "correct": false
                  }
                ],
                "explanation": "a) zemská kůra s georeliéfem – nejsvrchnější vrstva pevného zemského tělesa, jejíž povrch se označuje jako georeliéf"
              },
              {
                "question": "K tématu „Úvod do studia fyzické geografie: FG jako…\" — které tvrzení je správné? (13)",
                "options": [
                  {
                    "text": "Geografie se zaměřuje na prostorové uspořádání přírodních a společenských jevů na zemském povrchu a na interakce mezi společností a životním prostředím.",
                    "correct": false
                  },
                  {
                    "text": "b) atmosféra – plynný obal Země (po ozonovou vrstvu)",
                    "correct": true
                  },
                  {
                    "text": "Kde to je? Studuje prostorové rozmístění (distribuci) věcí",
                    "correct": false
                  },
                  {
                    "text": "Proč to tam je? Snaží se vysvětlit,",
                    "correct": false
                  }
                ],
                "explanation": "b) atmosféra – plynný obal Země (po ozonovou vrstvu)"
              },
              {
                "question": "K tématu „Úvod do studia fyzické geografie: FG jako…\" — které tvrzení je správné? (14)",
                "options": [
                  {
                    "text": "Geografie se zaměřuje na prostorové uspořádání přírodních a společenských jevů na zemském povrchu a na interakce mezi společností a životním prostředím.",
                    "correct": false
                  },
                  {
                    "text": "c) hydrosféra – geosféra tvořená vodami oceánů a pevniny",
                    "correct": true
                  },
                  {
                    "text": "Kde to je? Studuje prostorové rozmístění (distribuci) věcí",
                    "correct": false
                  },
                  {
                    "text": "Proč to tam je? Snaží se vysvětlit,",
                    "correct": false
                  }
                ],
                "explanation": "c) hydrosféra – geosféra tvořená vodami oceánů a pevniny"
              },
              {
                "question": "K tématu „Úvod do studia fyzické geografie: FG jako…\" — které tvrzení je správné? (15)",
                "options": [
                  {
                    "text": "Geografie se zaměřuje na prostorové uspořádání přírodních a společenských jevů na zemském povrchu a na interakce mezi společností a životním prostředím.",
                    "correct": false
                  },
                  {
                    "text": "d) kryosféra – část zemské kůry a hydrosféry, jejíž teplota je po více než 2 roky pod bodem mrazu",
                    "correct": true
                  },
                  {
                    "text": "Kde to je? Studuje prostorové rozmístění (distribuci) věcí",
                    "correct": false
                  },
                  {
                    "text": "Proč to tam je? Snaží se vysvětlit,",
                    "correct": false
                  }
                ],
                "explanation": "d) kryosféra – část zemské kůry a hydrosféry, jejíž teplota je po více než 2 roky pod bodem mrazu"
              },
              {
                "question": "K tématu „Úvod do studia fyzické geografie: FG jako…\" — které tvrzení je správné? (16)",
                "options": [
                  {
                    "text": "Geografie se zaměřuje na prostorové uspořádání přírodních a společenských jevů na zemském povrchu a na interakce mezi společností a životním prostředím.",
                    "correct": false
                  },
                  {
                    "text": "e) pedosféra – půdní pokryv na povrchu pevnin",
                    "correct": true
                  },
                  {
                    "text": "Kde to je? Studuje prostorové rozmístění (distribuci) věcí",
                    "correct": false
                  },
                  {
                    "text": "Proč to tam je? Snaží se vysvětlit,",
                    "correct": false
                  }
                ],
                "explanation": "e) pedosféra – půdní pokryv na povrchu pevnin"
              },
              {
                "question": "K tématu „Úvod do studia fyzické geografie: FG jako…\" — které tvrzení je správné? (17)",
                "options": [
                  {
                    "text": "Geografie se zaměřuje na prostorové uspořádání přírodních a společenských jevů na zemském povrchu a na interakce mezi společností a životním prostředím.",
                    "correct": false
                  },
                  {
                    "text": "f) biosféra – geosféra s podmínkami pro život a trvale obydlena živými organismy",
                    "correct": true
                  },
                  {
                    "text": "Kde to je? Studuje prostorové rozmístění (distribuci) věcí",
                    "correct": false
                  },
                  {
                    "text": "Proč to tam je? Snaží se vysvětlit,",
                    "correct": false
                  }
                ],
                "explanation": "f) biosféra – geosféra s podmínkami pro život a trvale obydlena živými organismy"
              },
              {
                "question": "K tématu „Úvod do studia fyzické geografie: FG jako…\" — které tvrzení je správné? (18)",
                "options": [
                  {
                    "text": "Geografie se zaměřuje na prostorové uspořádání přírodních a společenských jevů na zemském povrchu a na interakce mezi společností a životním prostředím.",
                    "correct": false
                  },
                  {
                    "text": "fyzickogeografická + socioekonomická sféra = krajinná sféra Země",
                    "correct": true
                  },
                  {
                    "text": "Kde to je? Studuje prostorové rozmístění (distribuci) věcí",
                    "correct": false
                  },
                  {
                    "text": "Proč to tam je? Snaží se vysvětlit,",
                    "correct": false
                  }
                ],
                "explanation": "fyzickogeografická + socioekonomická sféra = krajinná sféra Země"
              },
              {
                "question": "K tématu „Úvod do studia fyzické geografie: FG jako…\" — které tvrzení je správné? (19)",
                "options": [
                  {
                    "text": "Geografie se zaměřuje na prostorové uspořádání přírodních a společenských jevů na zemském povrchu a na interakce mezi společností a životním prostředím.",
                    "correct": false
                  },
                  {
                    "text": "Literatura: Netopil, R. a kol. (1984): Fyzická geografie I. SPN, Praha. Kap. 1: s. 9-25. Strahler, A., Strahler, A. (1999): Introducing Physical Geography. Wil…",
                    "correct": true
                  },
                  {
                    "text": "Kde to je? Studuje prostorové rozmístění (distribuci) věcí",
                    "correct": false
                  },
                  {
                    "text": "Proč to tam je? Snaží se vysvětlit,",
                    "correct": false
                  }
                ],
                "explanation": "Literatura: Netopil, R. a kol. (1984): Fyzická geografie I. SPN, Praha. Kap. 1: s. 9-25. Strahler, A., Strahler, A. (1999): Introducing Physical Geography. Wil…"
              },
              {
                "question": "K tématu „Úvod do studia fyzické geografie: FG jako…\" — které tvrzení je správné? (20)",
                "options": [
                  {
                    "text": "Geografie se zaměřuje na prostorové uspořádání přírodních a společenských jevů na zemském povrchu a na interakce mezi společností a životním prostředím.",
                    "correct": false
                  },
                  {
                    "text": "2. GLOBÁLNÍ ENERGETICKÁ BILANCE ZEMĚ",
                    "correct": true
                  },
                  {
                    "text": "Kde to je? Studuje prostorové rozmístění (distribuci) věcí",
                    "correct": false
                  },
                  {
                    "text": "Proč to tam je? Snaží se vysvětlit,",
                    "correct": false
                  }
                ],
                "explanation": "2. GLOBÁLNÍ ENERGETICKÁ BILANCE ZEMĚ"
              }
            ]
          }
        },
        {
          "id": "z0026p-2-zakladni-poznatky-o-atmosfere-atmosfera-vzduch-2",
          "title": "2. Základní poznatky o atmosféře: Atmosféra, vzduch, chemické složení vzduchu, fyzikální vlastnosti. Vertikální struktura atmosféry. Ozon a jeho změny v atmosféře. Antropogenní změny vlastností atmosféry. Počasí, povětrnost, podnebí.",
          "summary": "2. Základní poznatky o atmosféře: Atmosféra, vzduch, chemické složení vzduchu, fyzikální vlastnosti. Vertikální struktura atmosféry. Ozon…",
          "minutes": 25,
          "sectionTitle": "Témata prof. Brázdila",
          "available": true,
          "blocks": [
            {
              "type": "heading",
              "text": "Témata prof. Brázdila"
            },
            {
              "type": "callout",
              "label": "Okruh",
              "text": "2. Základní poznatky o atmosféře: Atmosféra, vzduch, chemické složení vzduchu, fyzikální vlastnosti. Vertikální struktura atmosféry. Ozon a jeho změny v atmosféře. Antropogenní změny vlastností atmosféry. Počasí, povětrnost, podnebí."
            },
            {
              "type": "callout",
              "label": "Jak číst tuto lekci",
              "text": "Text je výtah ze skripta a přednášek — použij ho jako mapu k učení. Detaily a obrázky najdeš v PDF/PPT v materiálech lekce."
            },
            {
              "type": "heading",
              "text": "Výtah ze skripta"
            },
            {
              "type": "list",
              "label": "Klíčové body",
              "items": [
                "ÚVOD DO STUDIA FYZICKÉ GEOGRAFIE",
                "Fyzická geografie je vědní disciplína v rámci geografických věd, zabývající se studiem fyzickogeografické sféry Země.",
                "Z časového a prostorového hlediska popisuje, studuje a prognózuje procesy a jevy, které se v ní odehrávají.",
                "Fyzickogeografická sféra Země se skládá z jednotlivých geosfér:",
                "a) zemská kůra s georeliéfem – nejsvrchnější vrstva pevného zemského tělesa, jejíž povrch se označuje jako georeliéf",
                "b) atmosféra – plynný obal Země (po ozonovou vrstvu)",
                "c) hydrosféra – geosféra tvořená vodami oceánů a pevniny",
                "d) kryosféra – část zemské kůry a hydrosféry, jejíž teplota je po více než 2 roky pod bodem mrazu",
                "e) pedosféra – půdní pokryv na povrchu pevnin",
                "f) biosféra – geosféra s podmínkami pro život a trvale obydlena živými organismy",
                "fyzickogeografická + socioekonomická sféra = krajinná sféra Země"
              ]
            },
            {
              "type": "list",
              "items": [
                "Literatura: Netopil, R. a kol. (1984): Fyzická geografie I. SPN, Praha. Kap. 1: s. 9-25. Strahler, A., Strahler, A. (1999): Introducing Physical Geography. Wiley, New York. Kap. Prologue: s. 2-9."
              ]
            },
            {
              "type": "subheading",
              "text": "2. GLOBÁLNÍ ENERGETICKÁ BILANCE ZEMĚ",
              "label": "1"
            },
            {
              "type": "subheading",
              "text": "2.1 Elektromagnetické záření",
              "label": "2"
            },
            {
              "type": "list",
              "items": [
                "sluneční záření – elektromagnetické x korpuskulární (částicové)",
                "elektromagnetické záření – soubor záření různých vlnových délek vycházejícího od povrchu objektu",
                "vlnová délka L – vzdálenost od jednoho hřbetu vlny k sousednímu hřbetu; jednotka – µm (10-6",
                "m) nebo nm (10-9",
                "m) Obr. 2.1/31",
                "Strahler, Strahler (1999)"
              ]
            },
            {
              "type": "subheading",
              "text": "2.1.1 Záření a teplota",
              "label": "3"
            },
            {
              "type": "list",
              "items": [
                "dva základní principy emise elektromagnetického záření:",
                "a) nepřímý vztah mezi vlnovou délkou záření daného tělesa a jeho teplotou (Slunce – kratší vlnové délky, Země – větší vlnové délky)",
                "b) teplejší tělesa vyzařují mnohem více než tělesa chladnější (závislost na čtvrté mocnině absolutní teploty – Stefan-Boltzmannův zákon)"
              ]
            },
            {
              "type": "subheading",
              "text": "2.1.2 Sluneční záření",
              "label": "3"
            },
            {
              "type": "list",
              "label": "Klíčové body",
              "items": [
                "Slunce: jaderné reakce proton-protonového cyklu (přeměna vodíku na hélium) – povrchová teplota 6000 ˚C – výkon Slunce 2,8.1026 W – rychlost elektromagnetického záření 300 tisíc km.s-1 – 8 1/3 min.",
                "než dorazí na Zemi",
                "vzdálenější planety – méně energie od Slunce; Země – 1,7.1017 W",
                "spektrum elektromagnetického záření:",
                "a) ultrafialové záření – 0,2-0,4 µm – pohlceno téměř úplně plyny v atmosféře – škodlivé pro živé organismy",
                "b) viditelné záření – 0,4-0,7 µm – světelná energie – barva závislá na vlnové délce (fialové, modrá, zelená, žlutá, oranžová, červená) – jen malá část pohlcována",
                "c) krátkovlnné infračervené záření – 0,7-3 µm – lidské oko není ne ně citlivé – snadno proniká atmosférou",
                "c) = krátkovlnné záření",
                "d) tepelné infračervené záření – > 3 µm – vydáváno chladnějšími objekty – pociťováno jako teplo – označuje se jako dlouhovlnné záření (tepelné snímkování)"
              ]
            },
            {
              "type": "subheading",
              "text": "2.1.3 Charakteristiky slunečního záření",
              "label": "3"
            },
            {
              "type": "list",
              "items": [
                "různá intenzita vyzařování podle vlnové délky: ultrafialové – 9 %, viditelné – 41 %, krátkovlnné infračervené – 50 % (velmi málo energie pro L > 2 µm)",
                "intenzita slunečního záření je největší ve viditelné části spektra",
                "solární konstanta",
                "celková intenzita elektromagnetického záření Slunce, dopadajícího na horní hranici atmosféry na jednotkovou plochu kolmou k paprskům při střední vzdálenosti ZeměSlunce: IS = 1367 W.m-2 ± 0,3 % 2.1.4 Dlouhovlnné záření Země",
                "zemský povrch a atmosféra vyzařují méně energie o větších vlnových délkách (v porovnání se Sluncem)",
                "intenzita vyzařování má tři maxima pro L = 5, 10 a 20 µm – vlnové délky mezi tím pohlcovány hladně vodní párou a CO2"
              ]
            },
            {
              "type": "list",
              "label": "Doporučený postup",
              "items": [
                "Projdi výtah a vlastní poznámky z přednášky",
                "Otevři přiložené PDF/PPT v materiálech lekce",
                "Propoj s předchozími a navazujícími okruhy v osnově"
              ]
            }
          ],
          "resources": [
            {
              "kind": "document",
              "title": "otazky-ze-tretiho-terminu-zkousky.docx",
              "url": "/materials/geografie-kartografie/z0026p/otazky-ze-tretiho-terminu-zkousky.docx",
              "source": "Okruhy ke zkoušce",
              "note": "Sdílený materiál pro více okruhů"
            },
            {
              "kind": "document",
              "title": "otazky-na-tema-1-a-2.docx",
              "url": "/materials/geografie-kartografie/z0026p/otazky-na-tema-1-a-2.docx",
              "source": "Okruhy ke zkoušce",
              "note": "Sdílený materiál pro více okruhů"
            },
            {
              "kind": "document",
              "title": "FG_1",
              "url": "/materials/geografie-kartografie/z0026p/FG_1.pdf",
              "source": "Brázdil — skriptum"
            },
            {
              "kind": "link",
              "title": "IS MUNI — Fyzická geografie",
              "url": "https://is.muni.cz/predmet/sci/Z0026p",
              "source": "IS MUNI"
            }
          ],
          "quiz": {
            "title": "Kvíz: Atmosféra a sluneční záření",
            "questions": [
              {
                "question": "Které záření je téměř úplně pohlceno plyny v atmosféře a je škodlivé pro organismy?",
                "options": [
                  {
                    "text": "Ultrafialové (0,2–0,4 µm)",
                    "correct": true
                  },
                  {
                    "text": "Viditelné (0,4–0,7 µm)",
                    "correct": false
                  },
                  {
                    "text": "Tepelné infračervené > 3 µm",
                    "correct": false
                  },
                  {
                    "text": "Rádiové vlny",
                    "correct": false
                  }
                ],
                "explanation": "UV záření je filtrováno především v horních vrstvách atmosféry."
              },
              {
                "question": "Přibližně jak dlouho trvá cesta slunečního světla k Zemi?",
                "options": [
                  {
                    "text": "8⅓ minuty",
                    "correct": true
                  },
                  {
                    "text": "1 sekunda",
                    "correct": false
                  },
                  {
                    "text": "1 hodina",
                    "correct": false
                  },
                  {
                    "text": "24 hodin",
                    "correct": false
                  }
                ],
                "explanation": "Elektromagnetické záření cestuje rychlostí ~300 000 km·s⁻¹."
              },
              {
                "question": "Jaký podíl intenzity slunečního záření připadá na viditelné světlo?",
                "options": [
                  {
                    "text": "Přibližně 41 %",
                    "correct": true
                  },
                  {
                    "text": "9 %",
                    "correct": false
                  },
                  {
                    "text": "70 %",
                    "correct": false
                  },
                  {
                    "text": "95 %",
                    "correct": false
                  }
                ],
                "explanation": "Maximální intenzita je ve viditelné části spektra; UV tvoří ~9 %."
              },
              {
                "question": "Dlouhovlnné záření Země má maxima při vlnových délkách přibližně…",
                "options": [
                  {
                    "text": "5, 10 a 20 µm",
                    "correct": true
                  },
                  {
                    "text": "0,4, 0,5 a 0,6 µm",
                    "correct": false
                  },
                  {
                    "text": "1, 2 a 3 µm",
                    "correct": false
                  },
                  {
                    "text": "100, 200 a 300 µm",
                    "correct": false
                  }
                ],
                "explanation": "Mezilehlé vlnové délky jsou silně pohlcovány vodní parou a CO₂."
              },
              {
                "question": "Atmosféra v geografickém pojetí zahrnuje plynný obal Země…",
                "options": [
                  {
                    "text": "po ozonovou vrstvu",
                    "correct": true
                  },
                  {
                    "text": "až po Měsíc",
                    "correct": false
                  },
                  {
                    "text": "pouze do 1 km výšky",
                    "correct": false
                  },
                  {
                    "text": "výhradně troposféru",
                    "correct": false
                  }
                ],
                "explanation": "Meteorologie a klimatologie studují dění v atmosféře."
              },
              {
                "question": "Které tvrzení patří k okruhu „Základní poznatky o atmosféře: Atmosféra, vzduc…\"?",
                "options": [
                  {
                    "text": "Fyzickogeografická sféra Země se skládá z jednotlivých geosfér:",
                    "correct": false
                  },
                  {
                    "text": "Z časového a prostorového hlediska popisuje, studuje a prognózuje procesy a jevy, které se v ní odehrávají.",
                    "correct": false
                  },
                  {
                    "text": "ÚVOD DO STUDIA FYZICKÉ GEOGRAFIE",
                    "correct": true
                  },
                  {
                    "text": "Fyzická geografie je vědní disciplína v rámci geografických věd, zabývající se studiem fyzickogeografické sféry Země.",
                    "correct": false
                  }
                ],
                "explanation": "ÚVOD DO STUDIA FYZICKÉ GEOGRAFIE"
              },
              {
                "question": "Které tvrzení odpovídá obsahu lekce?",
                "options": [
                  {
                    "text": "Výklad k tomuto okruhu neobsahuje tuto informaci.",
                    "correct": false
                  },
                  {
                    "text": "2. GLOBÁLNÍ ENERGETICKÁ BILANCE ZEMĚ",
                    "correct": true
                  },
                  {
                    "text": "Toto tvrzení nelze z výkladu lekce ověřit.",
                    "correct": false
                  },
                  {
                    "text": "ÚVOD DO STUDIA FYZICKÉ GEOGRAFIE",
                    "correct": false
                  }
                ],
                "explanation": "Správně: 2. GLOBÁLNÍ ENERGETICKÁ BILANCE ZEMĚ"
              },
              {
                "question": "K tématu „Základní poznatky o atmosféře: Atmosféra,…\" — které tvrzení je správné? (8)",
                "options": [
                  {
                    "text": "ÚVOD DO STUDIA FYZICKÉ GEOGRAFIE",
                    "correct": false
                  },
                  {
                    "text": "Z časového a prostorového hlediska popisuje, studuje a prognózuje procesy a jevy, které se v ní odehrávají.",
                    "correct": false
                  },
                  {
                    "text": "d) kryosféra – část zemské kůry a hydrosféry, jejíž teplota je po více než 2 roky pod bodem mrazu",
                    "correct": true
                  },
                  {
                    "text": "Fyzická geografie je vědní disciplína v rámci geografických věd, zabývající se studiem fyzickogeografické sféry Země.",
                    "correct": false
                  }
                ],
                "explanation": "d) kryosféra – část zemské kůry a hydrosféry, jejíž teplota je po více než 2 roky pod bodem mrazu"
              },
              {
                "question": "K tématu „Základní poznatky o atmosféře: Atmosféra,…\" — které tvrzení je správné? (9)",
                "options": [
                  {
                    "text": "ÚVOD DO STUDIA FYZICKÉ GEOGRAFIE",
                    "correct": false
                  },
                  {
                    "text": "Z časového a prostorového hlediska popisuje, studuje a prognózuje procesy a jevy, které se v ní odehrávají.",
                    "correct": false
                  },
                  {
                    "text": "e) pedosféra – půdní pokryv na povrchu pevnin",
                    "correct": true
                  },
                  {
                    "text": "Fyzická geografie je vědní disciplína v rámci geografických věd, zabývající se studiem fyzickogeografické sféry Země.",
                    "correct": false
                  }
                ],
                "explanation": "e) pedosféra – půdní pokryv na povrchu pevnin"
              },
              {
                "question": "K tématu „Základní poznatky o atmosféře: Atmosféra,…\" — které tvrzení je správné? (10)",
                "options": [
                  {
                    "text": "ÚVOD DO STUDIA FYZICKÉ GEOGRAFIE",
                    "correct": false
                  },
                  {
                    "text": "f) biosféra – geosféra s podmínkami pro život a trvale obydlena živými organismy",
                    "correct": true
                  },
                  {
                    "text": "Fyzická geografie je vědní disciplína v rámci geografických věd, zabývající se studiem fyzickogeografické sféry Země.",
                    "correct": false
                  },
                  {
                    "text": "Z časového a prostorového hlediska popisuje, studuje a prognózuje procesy a jevy, které se v ní odehrávají.",
                    "correct": false
                  }
                ],
                "explanation": "f) biosféra – geosféra s podmínkami pro život a trvale obydlena živými organismy"
              },
              {
                "question": "K tématu „Základní poznatky o atmosféře: Atmosféra,…\" — které tvrzení je správné? (11)",
                "options": [
                  {
                    "text": "ÚVOD DO STUDIA FYZICKÉ GEOGRAFIE",
                    "correct": false
                  },
                  {
                    "text": "fyzickogeografická + socioekonomická sféra = krajinná sféra Země",
                    "correct": true
                  },
                  {
                    "text": "Fyzická geografie je vědní disciplína v rámci geografických věd, zabývající se studiem fyzickogeografické sféry Země.",
                    "correct": false
                  },
                  {
                    "text": "Z časového a prostorového hlediska popisuje, studuje a prognózuje procesy a jevy, které se v ní odehrávají.",
                    "correct": false
                  }
                ],
                "explanation": "fyzickogeografická + socioekonomická sféra = krajinná sféra Země"
              },
              {
                "question": "K tématu „Základní poznatky o atmosféře: Atmosféra,…\" — které tvrzení je správné? (12)",
                "options": [
                  {
                    "text": "ÚVOD DO STUDIA FYZICKÉ GEOGRAFIE",
                    "correct": false
                  },
                  {
                    "text": "Literatura: Netopil, R. a kol. (1984): Fyzická geografie I. SPN, Praha. Kap. 1: s. 9-25. Strahler, A., Strahler, A. (1999): Introducing Physical Geography. Wil…",
                    "correct": true
                  },
                  {
                    "text": "Fyzická geografie je vědní disciplína v rámci geografických věd, zabývající se studiem fyzickogeografické sféry Země.",
                    "correct": false
                  },
                  {
                    "text": "Z časového a prostorového hlediska popisuje, studuje a prognózuje procesy a jevy, které se v ní odehrávají.",
                    "correct": false
                  }
                ],
                "explanation": "Literatura: Netopil, R. a kol. (1984): Fyzická geografie I. SPN, Praha. Kap. 1: s. 9-25. Strahler, A., Strahler, A. (1999): Introducing Physical Geography. Wil…"
              },
              {
                "question": "K tématu „Základní poznatky o atmosféře: Atmosféra,…\" — které tvrzení je správné? (13)",
                "options": [
                  {
                    "text": "ÚVOD DO STUDIA FYZICKÉ GEOGRAFIE",
                    "correct": false
                  },
                  {
                    "text": "2. GLOBÁLNÍ ENERGETICKÁ BILANCE ZEMĚ",
                    "correct": true
                  },
                  {
                    "text": "Fyzická geografie je vědní disciplína v rámci geografických věd, zabývající se studiem fyzickogeografické sféry Země.",
                    "correct": false
                  },
                  {
                    "text": "Z časového a prostorového hlediska popisuje, studuje a prognózuje procesy a jevy, které se v ní odehrávají.",
                    "correct": false
                  }
                ],
                "explanation": "2. GLOBÁLNÍ ENERGETICKÁ BILANCE ZEMĚ"
              },
              {
                "question": "K tématu „Základní poznatky o atmosféře: Atmosféra,…\" — které tvrzení je správné? (14)",
                "options": [
                  {
                    "text": "ÚVOD DO STUDIA FYZICKÉ GEOGRAFIE",
                    "correct": false
                  },
                  {
                    "text": "2.1 Elektromagnetické záření",
                    "correct": true
                  },
                  {
                    "text": "Fyzická geografie je vědní disciplína v rámci geografických věd, zabývající se studiem fyzickogeografické sféry Země.",
                    "correct": false
                  },
                  {
                    "text": "Z časového a prostorového hlediska popisuje, studuje a prognózuje procesy a jevy, které se v ní odehrávají.",
                    "correct": false
                  }
                ],
                "explanation": "2.1 Elektromagnetické záření"
              },
              {
                "question": "K tématu „Základní poznatky o atmosféře: Atmosféra,…\" — které tvrzení je správné? (15)",
                "options": [
                  {
                    "text": "ÚVOD DO STUDIA FYZICKÉ GEOGRAFIE",
                    "correct": false
                  },
                  {
                    "text": "sluneční záření – elektromagnetické x korpuskulární (částicové)",
                    "correct": true
                  },
                  {
                    "text": "Fyzická geografie je vědní disciplína v rámci geografických věd, zabývající se studiem fyzickogeografické sféry Země.",
                    "correct": false
                  },
                  {
                    "text": "Z časového a prostorového hlediska popisuje, studuje a prognózuje procesy a jevy, které se v ní odehrávají.",
                    "correct": false
                  }
                ],
                "explanation": "sluneční záření – elektromagnetické x korpuskulární (částicové)"
              },
              {
                "question": "K tématu „Základní poznatky o atmosféře: Atmosféra,…\" — které tvrzení je správné? (16)",
                "options": [
                  {
                    "text": "ÚVOD DO STUDIA FYZICKÉ GEOGRAFIE",
                    "correct": false
                  },
                  {
                    "text": "elektromagnetické záření – soubor záření různých vlnových délek vycházejícího od povrchu objektu",
                    "correct": true
                  },
                  {
                    "text": "Fyzická geografie je vědní disciplína v rámci geografických věd, zabývající se studiem fyzickogeografické sféry Země.",
                    "correct": false
                  },
                  {
                    "text": "Z časového a prostorového hlediska popisuje, studuje a prognózuje procesy a jevy, které se v ní odehrávají.",
                    "correct": false
                  }
                ],
                "explanation": "elektromagnetické záření – soubor záření různých vlnových délek vycházejícího od povrchu objektu"
              },
              {
                "question": "K tématu „Základní poznatky o atmosféře: Atmosféra,…\" — které tvrzení je správné? (17)",
                "options": [
                  {
                    "text": "ÚVOD DO STUDIA FYZICKÉ GEOGRAFIE",
                    "correct": false
                  },
                  {
                    "text": "vlnová délka L – vzdálenost od jednoho hřbetu vlny k sousednímu hřbetu; jednotka – µm (10-6",
                    "correct": true
                  },
                  {
                    "text": "Fyzická geografie je vědní disciplína v rámci geografických věd, zabývající se studiem fyzickogeografické sféry Země.",
                    "correct": false
                  },
                  {
                    "text": "Z časového a prostorového hlediska popisuje, studuje a prognózuje procesy a jevy, které se v ní odehrávají.",
                    "correct": false
                  }
                ],
                "explanation": "vlnová délka L – vzdálenost od jednoho hřbetu vlny k sousednímu hřbetu; jednotka – µm (10-6"
              },
              {
                "question": "K tématu „Základní poznatky o atmosféře: Atmosféra,…\" — které tvrzení je správné? (18)",
                "options": [
                  {
                    "text": "ÚVOD DO STUDIA FYZICKÉ GEOGRAFIE",
                    "correct": false
                  },
                  {
                    "text": "2.1.1 Záření a teplota",
                    "correct": true
                  },
                  {
                    "text": "Fyzická geografie je vědní disciplína v rámci geografických věd, zabývající se studiem fyzickogeografické sféry Země.",
                    "correct": false
                  },
                  {
                    "text": "Z časového a prostorového hlediska popisuje, studuje a prognózuje procesy a jevy, které se v ní odehrávají.",
                    "correct": false
                  }
                ],
                "explanation": "2.1.1 Záření a teplota"
              },
              {
                "question": "K tématu „Základní poznatky o atmosféře: Atmosféra,…\" — které tvrzení je správné? (19)",
                "options": [
                  {
                    "text": "ÚVOD DO STUDIA FYZICKÉ GEOGRAFIE",
                    "correct": false
                  },
                  {
                    "text": "dva základní principy emise elektromagnetického záření:",
                    "correct": true
                  },
                  {
                    "text": "Fyzická geografie je vědní disciplína v rámci geografických věd, zabývající se studiem fyzickogeografické sféry Země.",
                    "correct": false
                  },
                  {
                    "text": "Z časového a prostorového hlediska popisuje, studuje a prognózuje procesy a jevy, které se v ní odehrávají.",
                    "correct": false
                  }
                ],
                "explanation": "dva základní principy emise elektromagnetického záření:"
              },
              {
                "question": "K tématu „Základní poznatky o atmosféře: Atmosféra,…\" — které tvrzení je správné? (20)",
                "options": [
                  {
                    "text": "ÚVOD DO STUDIA FYZICKÉ GEOGRAFIE",
                    "correct": false
                  },
                  {
                    "text": "a) nepřímý vztah mezi vlnovou délkou záření daného tělesa a jeho teplotou (Slunce – kratší vlnové délky, Země – větší vlnové délky)",
                    "correct": true
                  },
                  {
                    "text": "Fyzická geografie je vědní disciplína v rámci geografických věd, zabývající se studiem fyzickogeografické sféry Země.",
                    "correct": false
                  },
                  {
                    "text": "Z časového a prostorového hlediska popisuje, studuje a prognózuje procesy a jevy, které se v ní odehrávají.",
                    "correct": false
                  }
                ],
                "explanation": "a) nepřímý vztah mezi vlnovou délkou záření daného tělesa a jeho teplotou (Slunce – kratší vlnové délky, Země – větší vlnové délky)"
              }
            ]
          }
        },
        {
          "id": "z0026p-3-zakladni-meteorologicke-prvky-slunecni-zareni-3",
          "title": "3. Základní meteorologické prvky: Sluneční záření. Dlouhovlnné záření. Radiační a energetická bilance. Teplota půdy. Teplota vzduchu. Voda v atmosféře (výpar, vlhkost vzduchu, oblaka a oblačnost, mlhy). Srážky. Tlak vzduchu. Proudění vzduchu. Místní větry a místní cirkulační systémy.",
          "summary": "3. Základní meteorologické prvky: Sluneční záření. Dlouhovlnné záření. Radiační a energetická bilance. Teplota půdy. Teplota vzduchu. Vod…",
          "minutes": 25,
          "sectionTitle": "Témata prof. Brázdila",
          "available": true,
          "blocks": [
            {
              "type": "heading",
              "text": "Témata prof. Brázdila"
            },
            {
              "type": "callout",
              "label": "Okruh",
              "text": "3. Základní meteorologické prvky: Sluneční záření. Dlouhovlnné záření. Radiační a energetická bilance. Teplota půdy. Teplota vzduchu. Voda v atmosféře (výpar, vlhkost vzduchu, oblaka a oblačnost, mlhy). Srážky. Tlak vzduchu. Proudění vzduchu. Místní větry a místní cirkulační systémy."
            },
            {
              "type": "callout",
              "label": "Jak číst tuto lekci",
              "text": "Text je výtah ze skripta a přednášek — použij ho jako mapu k učení. Detaily a obrázky najdeš v PDF/PPT v materiálech lekce."
            },
            {
              "type": "heading",
              "text": "Výtah ze skripta"
            },
            {
              "type": "list",
              "label": "Klíčové body",
              "items": [
                "ÚVOD DO STUDIA FYZICKÉ GEOGRAFIE",
                "Fyzická geografie je vědní disciplína v rámci geografických věd, zabývající se studiem fyzickogeografické sféry Země.",
                "Z časového a prostorového hlediska popisuje, studuje a prognózuje procesy a jevy, které se v ní odehrávají.",
                "Fyzickogeografická sféra Země se skládá z jednotlivých geosfér:",
                "a) zemská kůra s georeliéfem – nejsvrchnější vrstva pevného zemského tělesa, jejíž povrch se označuje jako georeliéf",
                "b) atmosféra – plynný obal Země (po ozonovou vrstvu)",
                "c) hydrosféra – geosféra tvořená vodami oceánů a pevniny",
                "d) kryosféra – část zemské kůry a hydrosféry, jejíž teplota je po více než 2 roky pod bodem mrazu",
                "e) pedosféra – půdní pokryv na povrchu pevnin",
                "f) biosféra – geosféra s podmínkami pro život a trvale obydlena živými organismy",
                "fyzickogeografická + socioekonomická sféra = krajinná sféra Země"
              ]
            },
            {
              "type": "list",
              "items": [
                "Literatura: Netopil, R. a kol. (1984): Fyzická geografie I. SPN, Praha. Kap. 1: s. 9-25. Strahler, A., Strahler, A. (1999): Introducing Physical Geography. Wiley, New York. Kap. Prologue: s. 2-9."
              ]
            },
            {
              "type": "subheading",
              "text": "2. GLOBÁLNÍ ENERGETICKÁ BILANCE ZEMĚ",
              "label": "1"
            },
            {
              "type": "subheading",
              "text": "2.1 Elektromagnetické záření",
              "label": "2"
            },
            {
              "type": "list",
              "items": [
                "sluneční záření – elektromagnetické x korpuskulární (částicové)",
                "elektromagnetické záření – soubor záření různých vlnových délek vycházejícího od povrchu objektu",
                "vlnová délka L – vzdálenost od jednoho hřbetu vlny k sousednímu hřbetu; jednotka – µm (10-6",
                "m) nebo nm (10-9",
                "m) Obr. 2.1/31",
                "Strahler, Strahler (1999)"
              ]
            },
            {
              "type": "subheading",
              "text": "2.1.1 Záření a teplota",
              "label": "3"
            },
            {
              "type": "list",
              "items": [
                "dva základní principy emise elektromagnetického záření:",
                "a) nepřímý vztah mezi vlnovou délkou záření daného tělesa a jeho teplotou (Slunce – kratší vlnové délky, Země – větší vlnové délky)",
                "b) teplejší tělesa vyzařují mnohem více než tělesa chladnější (závislost na čtvrté mocnině absolutní teploty – Stefan-Boltzmannův zákon)"
              ]
            },
            {
              "type": "subheading",
              "text": "2.1.2 Sluneční záření",
              "label": "3"
            },
            {
              "type": "list",
              "label": "Klíčové body",
              "items": [
                "Slunce: jaderné reakce proton-protonového cyklu (přeměna vodíku na hélium) – povrchová teplota 6000 ˚C – výkon Slunce 2,8.1026 W – rychlost elektromagnetického záření 300 tisíc km.s-1 – 8 1/3 min.",
                "než dorazí na Zemi",
                "vzdálenější planety – méně energie od Slunce; Země – 1,7.1017 W",
                "spektrum elektromagnetického záření:",
                "a) ultrafialové záření – 0,2-0,4 µm – pohlceno téměř úplně plyny v atmosféře – škodlivé pro živé organismy",
                "b) viditelné záření – 0,4-0,7 µm – světelná energie – barva závislá na vlnové délce (fialové, modrá, zelená, žlutá, oranžová, červená) – jen malá část pohlcována",
                "c) krátkovlnné infračervené záření – 0,7-3 µm – lidské oko není ne ně citlivé – snadno proniká atmosférou",
                "c) = krátkovlnné záření",
                "d) tepelné infračervené záření – > 3 µm – vydáváno chladnějšími objekty – pociťováno jako teplo – označuje se jako dlouhovlnné záření (tepelné snímkování)"
              ]
            },
            {
              "type": "subheading",
              "text": "2.1.3 Charakteristiky slunečního záření",
              "label": "3"
            },
            {
              "type": "list",
              "items": [
                "různá intenzita vyzařování podle vlnové délky: ultrafialové – 9 %, viditelné – 41 %, krátkovlnné infračervené – 50 % (velmi málo energie pro L > 2 µm)",
                "intenzita slunečního záření je největší ve viditelné části spektra",
                "solární konstanta",
                "celková intenzita elektromagnetického záření Slunce, dopadajícího na horní hranici atmosféry na jednotkovou plochu kolmou k paprskům při střední vzdálenosti ZeměSlunce: IS = 1367 W.m-2 ± 0,3 % 2.1.4 Dlouhovlnné záření Země",
                "zemský povrch a atmosféra vyzařují méně energie o větších vlnových délkách (v porovnání se Sluncem)",
                "intenzita vyzařování má tři maxima pro L = 5, 10 a 20 µm – vlnové délky mezi tím pohlcovány hladně vodní párou a CO2"
              ]
            },
            {
              "type": "heading",
              "text": "Výpisky — teplota a záření"
            },
            {
              "type": "list",
              "label": "Body přednášky",
              "items": [
                "Teplota – Střední kinetické energie molekul tělesa (míra úrovně zjevného tepla v tělese)",
                "Určuje jak rychle kmitají částice v atmosféře",
                "Jestliže těleso přijímá tepelnou energii, jeho teplota roste, vydává-li ji, jeho teplota klesá."
              ]
            },
            {
              "type": "paragraph",
              "text": "Povrch během dne dostává více krátkovlnného záření než ztrácí dlouhovlnným vyzařováním – jeho teplota roste, v noci, kdy tok krátkovlnného záření ustává a převažuje dlouhovlnné záření, teplota klesá"
            },
            {
              "type": "paragraph",
              "text": "Teplota tělesa vedle pohlcování a vyzařování může měnit se může měnit těmito procesy:"
            },
            {
              "type": "paragraph",
              "text": "a) vedením – Tok tepla mezi dvěma dotýkajícími se tělesy od teplejší ke chladnějšímu (aktivní povrch – atmosféra)"
            },
            {
              "type": "paragraph",
              "text": "b) výparem – Změna skupenství vody z kapalného na plynné za pohlcování energie – pokles teploty vypařujícího povrchu."
            },
            {
              "type": "list",
              "label": "Body přednášky",
              "items": [
                "c) Konvekcí – Přenos tepla promícháváním při výstupném pohybu vzduchu.",
                "Teplotní stupnice Celsiova °C – bod mrazu = 0 °C, bod varu = 100 °C",
                "Teplotní stupnice Fahrenheitova (°F) – bod mrazu 32°F, bod varu 212°F"
              ]
            },
            {
              "type": "heading",
              "text": "Výpisky — vlhkost vzduchu"
            },
            {
              "type": "list",
              "label": "Body přednášky",
              "items": [
                "4.) Atmosférická vlhkost a srážky FG_3 Brázdil",
                "[Fig_4]Voda existuje ve třech skupenstvích – Pevné (led), Kapalné (voda), plynné (vodní pára)",
                "Při fázových změnách se spotřebovává nebo uvolňuje latentní teplo",
                "Voda hraje klíčovou roli na Zemi z následujících příčin"
              ]
            },
            {
              "type": "paragraph",
              "text": "a) pokrývá 2/3 povrchu Země, funguje jako rezervoár tepla a jeho přerozdělování, stejně jako rezervoár různých složek (např. soli)"
            },
            {
              "type": "paragraph",
              "text": "b) Voda vypadávající na pevninách jako déšť nebo sníh vytváří při odtoku na povrchu různé tvary a formy reliéfu a přenáší živiny od jednoho místa k druhému"
            },
            {
              "type": "list",
              "label": "Body přednášky",
              "items": [
                "c) vodou (vodní parou) v atmosféře je přenášeno obrovské množství latentního tepla od jednoho místa k druhému"
              ]
            },
            {
              "type": "subheading",
              "text": "97 % tvoří slaná voda, 2,8 % sladká voda (mimo slaná jezera a vnitřní moře)",
              "label": "1"
            },
            {
              "type": "paragraph",
              "text": "Hlavní část sladké vody je vázána v ledovcových štítech a horských ledovcích (2,15 %) a podpovrchové vodě, hlavně podzemní (0, 63 %) – zbytek 0,02 %, takže sladké voda na pevnině tvoří jen velmi malou část z celkových zásob vody na Zemi."
            },
            {
              "type": "paragraph",
              "text": "Zbytek 0,02 % se rozděluje na půdní vodu (v dosahu kořenů rostlin), povrchovou vodu (jezera, vodní toky, bažiny) a vodu v atmosféře."
            },
            {
              "type": "heading",
              "text": "Otázky a okruhy — FG_2"
            },
            {
              "type": "list",
              "label": "Klíčové body",
              "items": [
                "Teplota vzduchu • teplota – střední kinetická energie molekul tělesa (míra úrovně zjevného tepla v tělese) • jestliže těleso přijímá tepelnou energii, jeho teplota roste • povrch během dne dostává více krátkovlnného záření, než ztrácí dlouhovlnným vyzařováním",
                "jeho teplota roste; v noci, kdy tok krátkovlnného záření ustává, teplota klesá • teplota tělesa se vedle pohlcování a vyzařování může měnit těmito procesy:",
                "a) vedením – tok tepla mezi dvěma dotýkajícími se tělesy od teplejšího ke chladnějšímu (aktivní povrch – atmosféra)",
                "b) výparem – změna skupenství vody z kapalného na plynné za pohlcování energie – pokles teploty vypařujícího povrchu",
                "c) konvekcí – přenos tepla promícháváním při výstupném pohybu vzduchu"
              ]
            },
            {
              "type": "subheading",
              "text": "3.1 Měření teploty vzduchu",
              "label": "2"
            },
            {
              "type": "list",
              "items": [
                "teplotní stupnice Celsiova (°C) – bod mrazu 0 °C, bod varu 100 °C",
                "teplotní stupnice Fahrenheitova (°F) – bod mrazu 32 °F, bod varu 212 °F",
                "teploměr – přístroj pro měření teploty vzduchu (rtuť nebo líh v kapiláře reaguje na změnu teploty různým roztažením) v bílé žaluziové meteorologické budce ve výšce 2 m nad zemí, která brání přímému dopadu slunečních paprsků a umožňuje cirkulaci vzduchu kolem teploměru",
                "dnes kapalinové skleněné teploměry nahrazeny odporovými teploměry (termistory), které měří automaticky změny elektrického odporu s teplotou",
                "průměrná denní teplota vzduchu: (t07 + t14 + 2t21)/4, v řadě zemí ale průměr tmax a tmin",
                "z denních průměrných teplot se počítají průměrné měsíční teploty a z nich průměrné roční teploty"
              ]
            },
            {
              "type": "paragraph",
              "text": "3.2 Denní chod teploty vzduchu • denní změny radiační bilance (přes den pozitivní, v noci negativní) se projevují v denním chodu teploty vzduchu 3.2.1 Denní chod insolace a radiační bilance • insolace  radiační bilance → teplota vzduchu Obr. 3.3/53 – SS"
            },
            {
              "type": "subheading",
              "text": "3.2.2 Denní teplota",
              "label": "3"
            },
            {
              "type": "list",
              "items": [
                "minimum teploty asi půl hodiny po východu Slunce – důsledek ochlazování povrchu dlouhovlnným vyzařováním v období negativní radiační bilance",
                "po východu Slunce ( kladná radiační bilance) výrazný vzestup teploty vzduchu do maxima mezi 13.-16."
              ]
            },
            {
              "type": "list",
              "label": "Klíčové body",
              "items": [
                "hodinou ( promíchávání vzduchu a odvod tepla nahoru, jinak by při kladné bilanci měla teplota ještě dále vzrůstat) • po maximu opět pokles teploty vzduchu k rannímu minimu (vzestupná část křivky kratší než sestupná) • úroveň teploty a denní amplituda ovlivněny sezónně • denní amplituda = tmax – tmin, největší amplitudy na jaře, nejmenší v zimě"
              ]
            },
            {
              "type": "subheading",
              "text": "3.2.3 Teplota při povrchu",
              "label": "3"
            },
            {
              "type": "list",
              "items": [
                "při povrchu je chod teploty extrémnější – povrch se slunečním zářením více zahřívá a více se ochlazuje dlouhovlnným vyzařováním než vzduch ve výšce 2 m nad zemí",
                "v noci aktivní povrch chladnější než podloží aktivního povrchu a teplota nad ním, ve dne naopak"
              ]
            },
            {
              "type": "subheading",
              "text": "3.2.4 Kontrast teploty mezi městem a venkovskou krajinou",
              "label": "3"
            },
            {
              "type": "list",
              "items": [
                "charakter aktivního povrchu je měněn lidskou aktivitou, zvláště ve městech (zástavba, vozovky, chodníky aj.)",
                "venkovská krajina – vegetace – transpirace (výpar z povrchu rostlin) – odnímání tepla, povrch chladnější (výraznější ochlazující vliv v případě lesního porostu)",
                "půdní povrch je vlhčí, při výparu jeho ochlazování",
                "ve městě je srážková voda odváděna mimo město, povrch je sušší, insolací se otepluje povrch (teplota vyšší než v okolní venkovské krajině)",
                "stavební materiály ve městě pohlcují a uchovávají zářivou energii, v noci ji vyzařují (noční teploty vyšší než v okolní venkovské krajině)",
                "pohlcování tepla je posíleno několikerým odrazem záření mezi různými vertikálními povrchy ve městě"
              ]
            },
            {
              "type": "subheading",
              "text": "3.2.5 Tepelný ostrov města",
              "label": "3"
            },
            {
              "type": "list",
              "items": [
                "teplota ve městě je vyšší než v okolí (příčiny viz 3.2.4) – tepelný ostrov města – existuje během noci díky záření pohlcenému během dne",
                "odpadní teplo ve městě (topení aj.) – tepelný ostrov nejintenzivnější v zimě",
                "pouštní oblasti – evapotranspirace zavlažované vegetace ve městě může držet teplotu níže než v okolí Obr."
              ]
            },
            {
              "type": "list",
              "items": [
                "3.6/56 – SS nebo něco lepšího na tepelný ostrov"
              ]
            },
            {
              "type": "subheading",
              "text": "3.3 Teplotní zvrstvení atmosféry",
              "label": "2"
            },
            {
              "type": "paragraph",
              "text": "teplota vzduchu klesá s výškou – pokles lze popsat vertikálním teplotním gradientem (˚C/100"
            },
            {
              "type": "list",
              "label": "Klíčové body",
              "items": [
                "m) • vzduch se otepluje od aktivního povrchu, tedy čím je od povrchu dále, tím je chladnější • průměrný vertikální teplotní gradient 0,65 ˚C/100 m • od určité úrovně ale průměrná teplota roste, což umožnilo rozlišit dvě části spodní atmosféry – troposféru a stratosféru Obr.",
                "Změna teploty s výškou v atmosféře"
              ]
            },
            {
              "type": "heading",
              "text": "Otázky a okruhy — FG_3"
            },
            {
              "type": "paragraph",
              "text": "4. Atmosférická vlhkost a srážky • voda existuje ve třech skupenstvích – pevném (led), kapalném (voda), plynném (vodní pára) • při fázových změnách se spotřebovává nebo uvolňuje latentní teplo Obr. 4.1/77 – SS"
            },
            {
              "type": "subheading",
              "text": "4.1 Voda v globální perspektivě",
              "label": "2"
            },
            {
              "type": "paragraph",
              "text": "voda hraje klíčovou roli na Zemi z následujících příčin:"
            },
            {
              "type": "list",
              "label": "Klíčové body",
              "items": [
                "a) pokrývá 2/3 povrchu Země, funguje jako rezervoár tepla a jeho přerozdělování, stejně jako rezervoár různých složek (např.",
                "b) voda vypadávající na pevninách jako déšť nebo sníh vytváří při odtoku na povrchu různé tvary a formy reliéfu a přenáší živiny od jednoho místa k druhému",
                "c) vodou v atmosféře je přenášeno obrovské množství latentního tepla od jednoho místa k druhému"
              ]
            },
            {
              "type": "paragraph",
              "text": "4.1.1 Hydrosféra a hydrologický cyklus Obr. 4.2/78 – SS"
            },
            {
              "type": "list",
              "label": "Klíčové body",
              "items": [
                "97,2 % tvoří slaná voda, 2,8 % sladká voda • hlavní část sladké vody je vázána v ledovcových štítech a horských ledovcích (2,15 %) a podpovrchové vodě, hlavně podzemní (0,63 %) – zbytek 0,02 %, takže sladká voda na pevnině tvoří jen velmi malou část z celkových zásob vody na Zemi • zbytek 0,02 % se rozděluje na půdní vodu (v dosahu kořenů rostlin), povrchovou vodu (např.",
                "jezera, vodní toky, bažiny) a vodu v atmosféře • hydrologický cyklus – popisuje globální výměnu vody mezi jednotlivými rezervoáry:",
                "a) výpar z oceánů a pevnin (plus transpirace) do atmosféry v podobě vodní páry, z oceánů šestkrát větší",
                "b) kondenzace nebo sublimace vodní páry v atmosféře, vypadávající v podobě srážek (srážky nad oceány asi čtyřikrát větší než nad pevninou)",
                "c) srážky vypadlé na pevninu mohou",
                "se vypařit a vrátit se do atmosféry jako vodní pára",
                "se vsáknout do půdy (podzemní odtok)",
                "odtékat z povrchu spojujíce se do potoků a řek, odtékajících zpět do oceánů nebo bezodtokých jezer"
              ]
            },
            {
              "type": "paragraph",
              "text": "4.1.2 Globální vodní bilance Obr. 4.3/78 – SS"
            },
            {
              "type": "list",
              "label": "Klíčové body",
              "items": [
                "popisuje toky vody mezi oceánem, atmosférou a pevninou • předpokládáme, že objem oceánských vod a objem sladkých povrchových a podpovrchových vod je konstantní rok od roku • oceán: srážky (do) + odtok (do) = výpar (z), tj.",
                "km3 • pevnina: srážky (na) = výpar (z) + odtok (z), tj.",
                "km3 • protože na pevnině výpar = srážky – odtok, lze odtok při bilancování vypustit a lze zapsat: celkový výpar celkové srážky 70 (pevnina) + 420 (oceán) = 110 (pevnina) + 380 (oceán) (vše v tis."
              ]
            },
            {
              "type": "subheading",
              "text": "4.2 Vlhkost vzduchu",
              "label": "2"
            },
            {
              "type": "list",
              "items": [
                "vlhkost vzduchu – obecně značí množství vodní páry ve vzduchu",
                "množství vodní páry ve vzduchu kolísání s místem a časem (téměř žádné v chladném a suchém arktickém vzduchu až do 4-5 % v teplém vlhkém vzduchu při rovníku)",
                "maximální množství vlhkosti, které se může udržet ve vzduchu, závisí na teplotě vzduchu – teplý vzduch může udržet víc vlhkosti (vodní páry) než studený"
              ]
            },
            {
              "type": "paragraph",
              "text": "4.2.1 Specifická vlhkost vzduchu • specifická vlhkost vzduchu (g.kg-1) – hmotnost vodní páry v gramech obsažená v 1 kg vzduchu • maximální specifická vlhkost v závislosti na teplotě: -10 ºC – 2 g/kg, 30 ºC – 26 g/kg Obr. 4.4/80 – SS"
            },
            {
              "type": "list",
              "label": "Klíčové body",
              "items": [
                "ÚVOD DO STUDIA FYZICKÉ GEOGRAFIE",
                "Fyzická geografie je vědní disciplína v rámci geografických věd, zabývající se studiem fyzickogeografické sféry Země.",
                "Z časového a prostorového hlediska popisuje, studuje a prognózuje procesy a jevy, které se v ní odehrávají.",
                "Fyzickogeografická sféra Země se skládá z jednotlivých geosfér:",
                "a) zemská kůra s georeliéfem – nejsvrchnější vrstva pevného zemského tělesa, jejíž povrch se označuje jako georeliéf",
                "b) atmosféra – plynný obal Země (po ozonovou vrstvu)",
                "c) hydrosféra – geosféra tvořená vodami oceánů a pevniny",
                "d) kryosféra – část zemské kůry a hydrosféry, jejíž teplota je po více než 2 roky pod bodem mrazu",
                "e) pedosféra – půdní pokryv na povrchu pevnin",
                "f) biosféra – geosféra s podmínkami pro život a trvale obydlena živými organismy",
                "fyzickogeografická + socioekonomická sféra = krajinná sféra Země"
              ]
            },
            {
              "type": "subheading",
              "text": "2.1.2 Sluneční záření",
              "label": "3"
            },
            {
              "type": "list",
              "items": [
                "Slunce: jaderné reakce proton-protonového cyklu (přeměna vodíku na hélium) – povrchová teplota 6000 ˚C – výkon Slunce 2,8.1026 W – rychlost elektromagnetického záření 300 tisíc km.s-1 – 8 1/3 min.",
                "než dorazí na Zemi",
                "vzdálenější planety – méně energie od Slunce; Země – 1,7.1017 W",
                "spektrum elektromagnetického záření:",
                "a) ultrafialové záření – 0,2-0,4 µm – pohlceno téměř úplně plyny v atmosféře – škodlivé pro živé organismy",
                "b) viditelné záření – 0,4-0,7 µm – světelná energie – barva závislá na vlnové délce (fialové, modrá, zelená, žlutá, oranžová, červená) – jen malá část pohlcována",
                "c) krátkovlnné infračervené záření – 0,7-3 µm – lidské oko není ne ně citlivé – snadno proniká atmosférou",
                "c) = krátkovlnné záření",
                "d) tepelné infračervené záření – > 3 µm – vydáváno chladnějšími objekty – pociťováno jako teplo – označuje se jako dlouhovlnné záření (tepelné snímkování)"
              ]
            },
            {
              "type": "subheading",
              "text": "2.1.3 Charakteristiky slunečního záření",
              "label": "3"
            },
            {
              "type": "list",
              "items": [
                "různá intenzita vyzařování podle vlnové délky: ultrafialové – 9 %, viditelné – 41 %, krátkovlnné infračervené – 50 % (velmi málo energie pro L > 2 µm)",
                "intenzita slunečního záření je největší ve viditelné části spektra",
                "solární konstanta",
                "celková intenzita elektromagnetického záření Slunce, dopadajícího na horní hranici atmosféry na jednotkovou plochu kolmou k paprskům při střední vzdálenosti ZeměSlunce: IS = 1367 W.m-2 ± 0,3 % 2.1.4 Dlouhovlnné záření Země",
                "zemský povrch a atmosféra vyzařují méně energie o větších vlnových délkách (v porovnání se Sluncem)",
                "intenzita vyzařování má tři maxima pro L = 5, 10 a 20 µm – vlnové délky mezi tím pohlcovány hladně vodní párou a CO2",
                "Teplota vzduchu • teplota – střední kinetická energie molekul tělesa (míra úrovně zjevného tepla v tělese) • jestliže těleso přijímá tepelnou energii, jeho teplota roste • povrch během dne dostává více krátkovlnného záření, než ztrácí dlouhovlnným vyzařováním",
                "jeho teplota roste; v noci, kdy tok krátkovlnného záření ustává, teplota klesá • teplota tělesa se vedle pohlcování a vyzařování může měnit těmito procesy:",
                "a) vedením – tok tepla mezi dvěma dotýkajícími se tělesy od teplejšího ke chladnějšímu (aktivní povrch – atmosféra)",
                "b) výparem – změna skupenství vody z kapalného na plynné za pohlcování energie – pokles teploty vypařujícího povrchu",
                "c) konvekcí – přenos tepla promícháváním při výstupném pohybu vzduchu"
              ]
            },
            {
              "type": "subheading",
              "text": "3.1 Měření teploty vzduchu",
              "label": "2"
            },
            {
              "type": "list",
              "items": [
                "teplotní stupnice Celsiova (°C) – bod mrazu 0 °C, bod varu 100 °C",
                "teplotní stupnice Fahrenheitova (°F) – bod mrazu 32 °F, bod varu 212 °F",
                "teploměr – přístroj pro měření teploty vzduchu (rtuť nebo líh v kapiláře reaguje na změnu teploty různým roztažením) v bílé žaluziové meteorologické budce ve výšce 2 m nad zemí, která brání přímému dopadu slunečních paprsků a umožňuje cirkulaci vzduchu kolem teploměru",
                "dnes kapalinové skleněné teploměry nahrazeny odporovými teploměry (termistory), které měří automaticky změny elektrického odporu s teplotou",
                "průměrná denní teplota vzduchu: (t07 + t14 + 2t21)/4, v řadě zemí ale průměr tmax a tmin",
                "z denních průměrných teplot se počítají průměrné měsíční teploty a z nich průměrné roční teploty"
              ]
            },
            {
              "type": "subheading",
              "text": "3.2.2 Denní teplota",
              "label": "3"
            },
            {
              "type": "list",
              "items": [
                "minimum teploty asi půl hodiny po východu Slunce – důsledek ochlazování povrchu dlouhovlnným vyzařováním v období negativní radiační bilance",
                "po východu Slunce ( kladná radiační bilance) výrazný vzestup teploty vzduchu do maxima mezi 13.-16."
              ]
            },
            {
              "type": "list",
              "items": [
                "hodinou ( promíchávání vzduchu a odvod tepla nahoru, jinak by při kladné bilanci měla teplota ještě dále vzrůstat) • po maximu opět pokles teploty vzduchu k rannímu minimu (vzestupná část křivky kratší než sestupná) • úroveň teploty a denní amplituda ovlivněny sezónně • denní amplituda = tmax – tmin, největší amplitudy na jaře, nejmenší v zimě"
              ]
            },
            {
              "type": "subheading",
              "text": "3.2.4 Kontrast teploty mezi městem a venkovskou krajinou",
              "label": "3"
            },
            {
              "type": "list",
              "items": [
                "charakter aktivního povrchu je měněn lidskou aktivitou, zvláště ve městech (zástavba, vozovky, chodníky aj.)",
                "venkovská krajina – vegetace – transpirace (výpar z povrchu rostlin) – odnímání tepla, povrch chladnější (výraznější ochlazující vliv v případě lesního porostu)",
                "půdní povrch je vlhčí, při výparu jeho ochlazování",
                "ve městě je srážková voda odváděna mimo město, povrch je sušší, insolací se otepluje povrch (teplota vyšší než v okolní venkovské krajině)",
                "stavební materiály ve městě pohlcují a uchovávají zářivou energii, v noci ji vyzařují (noční teploty vyšší než v okolní venkovské krajině)",
                "pohlcování tepla je posíleno několikerým odrazem záření mezi různými vertikálními povrchy ve městě"
              ]
            },
            {
              "type": "subheading",
              "text": "3.3 Teplotní zvrstvení atmosféry",
              "label": "2"
            },
            {
              "type": "paragraph",
              "text": "teplota vzduchu klesá s výškou – pokles lze popsat vertikálním teplotním gradientem (˚C/100"
            },
            {
              "type": "list",
              "items": [
                "m) • vzduch se otepluje od aktivního povrchu, tedy čím je od povrchu dále, tím je chladnější • průměrný vertikální teplotní gradient 0,65 ˚C/100 m • od určité úrovně ale průměrná teplota roste, což umožnilo rozlišit dvě části spodní atmosféry – troposféru a stratosféru Obr.",
                "Změna teploty s výškou v atmosféře"
              ]
            },
            {
              "type": "subheading",
              "text": "4.1 Voda v globální perspektivě",
              "label": "2"
            },
            {
              "type": "paragraph",
              "text": "voda hraje klíčovou roli na Zemi z následujících příčin:"
            },
            {
              "type": "list",
              "items": [
                "a) pokrývá 2/3 povrchu Země, funguje jako rezervoár tepla a jeho přerozdělování, stejně jako rezervoár různých složek (např.",
                "b) voda vypadávající na pevninách jako déšť nebo sníh vytváří při odtoku na povrchu různé tvary a formy reliéfu a přenáší živiny od jednoho místa k druhému",
                "c) vodou v atmosféře je přenášeno obrovské množství latentního tepla od jednoho místa k druhému",
                "97,2 % tvoří slaná voda, 2,8 % sladká voda • hlavní část sladké vody je vázána v ledovcových štítech a horských ledovcích (2,15 %) a podpovrchové vodě, hlavně podzemní (0,63 %) – zbytek 0,02 %, takže sladká voda na pevnině tvoří jen velmi malou část z celkových zásob vody na Zemi • zbytek 0,02 % se rozděluje na půdní vodu (v dosahu kořenů rostlin), povrchovou vodu (např.",
                "jezera, vodní toky, bažiny) a vodu v atmosféře • hydrologický cyklus – popisuje globální výměnu vody mezi jednotlivými rezervoáry:",
                "a) výpar z oceánů a pevnin (plus transpirace) do atmosféry v podobě vodní páry, z oceánů šestkrát větší",
                "b) kondenzace nebo sublimace vodní páry v atmosféře, vypadávající v podobě srážek (srážky nad oceány asi čtyřikrát větší než nad pevninou)",
                "c) srážky vypadlé na pevninu mohou",
                "se vypařit a vrátit se do atmosféry jako vodní pára",
                "se vsáknout do půdy (podzemní odtok)",
                "odtékat z povrchu spojujíce se do potoků a řek, odtékajících zpět do oceánů nebo bezodtokých jezer",
                "popisuje toky vody mezi oceánem, atmosférou a pevninou • předpokládáme, že objem oceánských vod a objem sladkých povrchových a podpovrchových vod je konstantní rok od roku • oceán: srážky (do) + odtok (do) = výpar (z), tj.",
                "km3 • pevnina: srážky (na) = výpar (z) + odtok (z), tj.",
                "km3 • protože na pevnině výpar = srážky – odtok, lze odtok při bilancování vypustit a lze zapsat: celkový výpar celkové srážky 70 (pevnina) + 420 (oceán) = 110 (pevnina) + 380 (oceán) (vše v tis."
              ]
            },
            {
              "type": "list",
              "label": "Doporučený postup",
              "items": [
                "Projdi výtah a vlastní poznámky z přednášky",
                "Otevři přiložené PDF/PPT v materiálech lekce",
                "Propoj s předchozími a navazujícími okruhy v osnově"
              ]
            }
          ],
          "resources": [
            {
              "kind": "document",
              "title": "FG_3 — okruhy Brázdil",
              "url": "/materials/geografie-kartografie/z0026p/FG_3.doc",
              "source": "Brázdil",
              "note": "Sdílený materiál pro více okruhů hydrologie"
            },
            {
              "kind": "document",
              "title": "FG_2 — okruhy Brázdil",
              "url": "/materials/geografie-kartografie/z0026p/FG_2.doc",
              "source": "Brázdil"
            },
            {
              "kind": "document",
              "title": "Výpisky — vlhkost vzduchu",
              "url": "/materials/geografie-kartografie/z0026p/vypisky-z-fyzicke-geografie-mu-3-tema-od-brazdila-atm-vlhkost.docx",
              "source": "Výpisky MU"
            },
            {
              "kind": "document",
              "title": "Výpisky — teplota a záření",
              "url": "/materials/geografie-kartografie/z0026p/vypisky-z-fyzicke-geografie-mu-2-tema-od-brazdila-teplota.docx",
              "source": "Výpisky MU"
            },
            {
              "kind": "document",
              "title": "FG_1",
              "url": "/materials/geografie-kartografie/z0026p/FG_1.pdf",
              "source": "Brázdil — skriptum"
            },
            {
              "kind": "link",
              "title": "IS MUNI — Fyzická geografie",
              "url": "https://is.muni.cz/predmet/sci/Z0026p",
              "source": "IS MUNI"
            },
            {
              "kind": "document",
              "title": "otazky-na-tema-3-a-4.docx",
              "url": "/materials/geografie-kartografie/z0026p/otazky-na-tema-3-a-4.docx",
              "source": "Okruhy ke zkoušce",
              "note": "Sdílený materiál pro více okruhů"
            },
            {
              "kind": "document",
              "title": "otazky-ze-tretiho-terminu-zkousky.docx",
              "url": "/materials/geografie-kartografie/z0026p/otazky-ze-tretiho-terminu-zkousky.docx",
              "source": "Okruhy ke zkoušce",
              "note": "Sdílený materiál pro více okruhů"
            }
          ],
          "quiz": {
            "title": "Kvíz: Meteorologické prvky",
            "questions": [
              {
                "question": "Kde se standardně měří teplota vzduchu na meteorologické stanici?",
                "options": [
                  {
                    "text": "2 m nad zemí v bílé žaluziové budce",
                    "correct": true
                  },
                  {
                    "text": "Přímo na povrchu trávy",
                    "correct": false
                  },
                  {
                    "text": "10 m nad střechou budovy",
                    "correct": false
                  },
                  {
                    "text": "Ve stínu stromu bez krytu",
                    "correct": false
                  }
                ],
                "explanation": "Budka brání přímému slunečnímu záření a umožňuje cirkulaci vzduchu."
              },
              {
                "question": "Kdy bývá obvykle denní minimum teploty vzduchu?",
                "options": [
                  {
                    "text": "Půl hodiny až krátce po východu Slunce",
                    "correct": true
                  },
                  {
                    "text": "O půlnoci",
                    "correct": false
                  },
                  {
                    "text": "Ve 12. hodin",
                    "correct": false
                  },
                  {
                    "text": "Při západu Slunce",
                    "correct": false
                  }
                ],
                "explanation": "Nejprve pokračuje noční ochlazování, teprve pak sluneční ohřev."
              },
              {
                "question": "Co je tepelný ostrov města?",
                "options": [
                  {
                    "text": "Oblast s vyšší teplotou než okolní krajina, zejména v noci",
                    "correct": true
                  },
                  {
                    "text": "Oblast s nižší teplotou kvůli lesům",
                    "correct": false
                  },
                  {
                    "text": "Pouze zimní jev bez letního efektu",
                    "correct": false
                  },
                  {
                    "text": "Výhradně jev u pobřeží moře",
                    "correct": false
                  }
                ],
                "explanation": "Zástavba akumuluje teplo, odvádí srážkovou vodu a mění povrch."
              },
              {
                "question": "Přibližný průměrný vertikální teplotní gradient v troposféře je…",
                "options": [
                  {
                    "text": "0,65 °C na 100 m",
                    "correct": true
                  },
                  {
                    "text": "0,1 °C na 100 m",
                    "correct": false
                  },
                  {
                    "text": "2 °C na 100 m",
                    "correct": false
                  },
                  {
                    "text": "Teplota s výškou roste",
                    "correct": false
                  }
                ],
                "explanation": "S výškou teplota v troposféře obecně klesá."
              },
              {
                "question": "Kolik procent vody na Zemi je slaných?",
                "options": [
                  {
                    "text": "Přibližně 97,2 %",
                    "correct": true
                  },
                  {
                    "text": "50 %",
                    "correct": false
                  },
                  {
                    "text": "80 %",
                    "correct": false
                  },
                  {
                    "text": "99,9 %",
                    "correct": false
                  }
                ],
                "explanation": "Většina sladké vody je vázána v ledovcích a podzemních zásobách."
              },
              {
                "question": "Které tvrzení patří k okruhu „Základní meteorologické prvky: Sluneční záření.…\"?",
                "options": [
                  {
                    "text": "Fyzickogeografická sféra Země se skládá z jednotlivých geosfér:",
                    "correct": false
                  },
                  {
                    "text": "Z časového a prostorového hlediska popisuje, studuje a prognózuje procesy a jevy, které se v ní odehrávají.",
                    "correct": false
                  },
                  {
                    "text": "ÚVOD DO STUDIA FYZICKÉ GEOGRAFIE",
                    "correct": true
                  },
                  {
                    "text": "Fyzická geografie je vědní disciplína v rámci geografických věd, zabývající se studiem fyzickogeografické sféry Země.",
                    "correct": false
                  }
                ],
                "explanation": "ÚVOD DO STUDIA FYZICKÉ GEOGRAFIE"
              },
              {
                "question": "Které tvrzení odpovídá obsahu lekce?",
                "options": [
                  {
                    "text": "Výklad k tomuto okruhu neobsahuje tuto informaci.",
                    "correct": false
                  },
                  {
                    "text": "2. GLOBÁLNÍ ENERGETICKÁ BILANCE ZEMĚ",
                    "correct": true
                  },
                  {
                    "text": "Toto tvrzení nelze z výkladu lekce ověřit.",
                    "correct": false
                  },
                  {
                    "text": "ÚVOD DO STUDIA FYZICKÉ GEOGRAFIE",
                    "correct": false
                  }
                ],
                "explanation": "Správně: 2. GLOBÁLNÍ ENERGETICKÁ BILANCE ZEMĚ"
              },
              {
                "question": "K tématu „Základní meteorologické prvky: Sluneční z…\" — které tvrzení je správné? (8)",
                "options": [
                  {
                    "text": "ÚVOD DO STUDIA FYZICKÉ GEOGRAFIE",
                    "correct": false
                  },
                  {
                    "text": "Z časového a prostorového hlediska popisuje, studuje a prognózuje procesy a jevy, které se v ní odehrávají.",
                    "correct": false
                  },
                  {
                    "text": "d) kryosféra – část zemské kůry a hydrosféry, jejíž teplota je po více než 2 roky pod bodem mrazu",
                    "correct": true
                  },
                  {
                    "text": "Fyzická geografie je vědní disciplína v rámci geografických věd, zabývající se studiem fyzickogeografické sféry Země.",
                    "correct": false
                  }
                ],
                "explanation": "d) kryosféra – část zemské kůry a hydrosféry, jejíž teplota je po více než 2 roky pod bodem mrazu"
              },
              {
                "question": "K tématu „Základní meteorologické prvky: Sluneční z…\" — které tvrzení je správné? (9)",
                "options": [
                  {
                    "text": "ÚVOD DO STUDIA FYZICKÉ GEOGRAFIE",
                    "correct": false
                  },
                  {
                    "text": "Z časového a prostorového hlediska popisuje, studuje a prognózuje procesy a jevy, které se v ní odehrávají.",
                    "correct": false
                  },
                  {
                    "text": "e) pedosféra – půdní pokryv na povrchu pevnin",
                    "correct": true
                  },
                  {
                    "text": "Fyzická geografie je vědní disciplína v rámci geografických věd, zabývající se studiem fyzickogeografické sféry Země.",
                    "correct": false
                  }
                ],
                "explanation": "e) pedosféra – půdní pokryv na povrchu pevnin"
              },
              {
                "question": "K tématu „Základní meteorologické prvky: Sluneční z…\" — které tvrzení je správné? (10)",
                "options": [
                  {
                    "text": "ÚVOD DO STUDIA FYZICKÉ GEOGRAFIE",
                    "correct": false
                  },
                  {
                    "text": "f) biosféra – geosféra s podmínkami pro život a trvale obydlena živými organismy",
                    "correct": true
                  },
                  {
                    "text": "Fyzická geografie je vědní disciplína v rámci geografických věd, zabývající se studiem fyzickogeografické sféry Země.",
                    "correct": false
                  },
                  {
                    "text": "Z časového a prostorového hlediska popisuje, studuje a prognózuje procesy a jevy, které se v ní odehrávají.",
                    "correct": false
                  }
                ],
                "explanation": "f) biosféra – geosféra s podmínkami pro život a trvale obydlena živými organismy"
              },
              {
                "question": "K tématu „Základní meteorologické prvky: Sluneční z…\" — které tvrzení je správné? (11)",
                "options": [
                  {
                    "text": "ÚVOD DO STUDIA FYZICKÉ GEOGRAFIE",
                    "correct": false
                  },
                  {
                    "text": "fyzickogeografická + socioekonomická sféra = krajinná sféra Země",
                    "correct": true
                  },
                  {
                    "text": "Fyzická geografie je vědní disciplína v rámci geografických věd, zabývající se studiem fyzickogeografické sféry Země.",
                    "correct": false
                  },
                  {
                    "text": "Z časového a prostorového hlediska popisuje, studuje a prognózuje procesy a jevy, které se v ní odehrávají.",
                    "correct": false
                  }
                ],
                "explanation": "fyzickogeografická + socioekonomická sféra = krajinná sféra Země"
              },
              {
                "question": "K tématu „Základní meteorologické prvky: Sluneční z…\" — které tvrzení je správné? (12)",
                "options": [
                  {
                    "text": "ÚVOD DO STUDIA FYZICKÉ GEOGRAFIE",
                    "correct": false
                  },
                  {
                    "text": "Literatura: Netopil, R. a kol. (1984): Fyzická geografie I. SPN, Praha. Kap. 1: s. 9-25. Strahler, A., Strahler, A. (1999): Introducing Physical Geography. Wil…",
                    "correct": true
                  },
                  {
                    "text": "Fyzická geografie je vědní disciplína v rámci geografických věd, zabývající se studiem fyzickogeografické sféry Země.",
                    "correct": false
                  },
                  {
                    "text": "Z časového a prostorového hlediska popisuje, studuje a prognózuje procesy a jevy, které se v ní odehrávají.",
                    "correct": false
                  }
                ],
                "explanation": "Literatura: Netopil, R. a kol. (1984): Fyzická geografie I. SPN, Praha. Kap. 1: s. 9-25. Strahler, A., Strahler, A. (1999): Introducing Physical Geography. Wil…"
              },
              {
                "question": "K tématu „Základní meteorologické prvky: Sluneční z…\" — které tvrzení je správné? (13)",
                "options": [
                  {
                    "text": "ÚVOD DO STUDIA FYZICKÉ GEOGRAFIE",
                    "correct": false
                  },
                  {
                    "text": "2. GLOBÁLNÍ ENERGETICKÁ BILANCE ZEMĚ",
                    "correct": true
                  },
                  {
                    "text": "Fyzická geografie je vědní disciplína v rámci geografických věd, zabývající se studiem fyzickogeografické sféry Země.",
                    "correct": false
                  },
                  {
                    "text": "Z časového a prostorového hlediska popisuje, studuje a prognózuje procesy a jevy, které se v ní odehrávají.",
                    "correct": false
                  }
                ],
                "explanation": "2. GLOBÁLNÍ ENERGETICKÁ BILANCE ZEMĚ"
              },
              {
                "question": "K tématu „Základní meteorologické prvky: Sluneční z…\" — které tvrzení je správné? (14)",
                "options": [
                  {
                    "text": "ÚVOD DO STUDIA FYZICKÉ GEOGRAFIE",
                    "correct": false
                  },
                  {
                    "text": "2.1 Elektromagnetické záření",
                    "correct": true
                  },
                  {
                    "text": "Fyzická geografie je vědní disciplína v rámci geografických věd, zabývající se studiem fyzickogeografické sféry Země.",
                    "correct": false
                  },
                  {
                    "text": "Z časového a prostorového hlediska popisuje, studuje a prognózuje procesy a jevy, které se v ní odehrávají.",
                    "correct": false
                  }
                ],
                "explanation": "2.1 Elektromagnetické záření"
              },
              {
                "question": "K tématu „Základní meteorologické prvky: Sluneční z…\" — které tvrzení je správné? (15)",
                "options": [
                  {
                    "text": "ÚVOD DO STUDIA FYZICKÉ GEOGRAFIE",
                    "correct": false
                  },
                  {
                    "text": "sluneční záření – elektromagnetické x korpuskulární (částicové)",
                    "correct": true
                  },
                  {
                    "text": "Fyzická geografie je vědní disciplína v rámci geografických věd, zabývající se studiem fyzickogeografické sféry Země.",
                    "correct": false
                  },
                  {
                    "text": "Z časového a prostorového hlediska popisuje, studuje a prognózuje procesy a jevy, které se v ní odehrávají.",
                    "correct": false
                  }
                ],
                "explanation": "sluneční záření – elektromagnetické x korpuskulární (částicové)"
              },
              {
                "question": "K tématu „Základní meteorologické prvky: Sluneční z…\" — které tvrzení je správné? (16)",
                "options": [
                  {
                    "text": "ÚVOD DO STUDIA FYZICKÉ GEOGRAFIE",
                    "correct": false
                  },
                  {
                    "text": "elektromagnetické záření – soubor záření různých vlnových délek vycházejícího od povrchu objektu",
                    "correct": true
                  },
                  {
                    "text": "Fyzická geografie je vědní disciplína v rámci geografických věd, zabývající se studiem fyzickogeografické sféry Země.",
                    "correct": false
                  },
                  {
                    "text": "Z časového a prostorového hlediska popisuje, studuje a prognózuje procesy a jevy, které se v ní odehrávají.",
                    "correct": false
                  }
                ],
                "explanation": "elektromagnetické záření – soubor záření různých vlnových délek vycházejícího od povrchu objektu"
              },
              {
                "question": "K tématu „Základní meteorologické prvky: Sluneční z…\" — které tvrzení je správné? (17)",
                "options": [
                  {
                    "text": "ÚVOD DO STUDIA FYZICKÉ GEOGRAFIE",
                    "correct": false
                  },
                  {
                    "text": "vlnová délka L – vzdálenost od jednoho hřbetu vlny k sousednímu hřbetu; jednotka – µm (10-6",
                    "correct": true
                  },
                  {
                    "text": "Fyzická geografie je vědní disciplína v rámci geografických věd, zabývající se studiem fyzickogeografické sféry Země.",
                    "correct": false
                  },
                  {
                    "text": "Z časového a prostorového hlediska popisuje, studuje a prognózuje procesy a jevy, které se v ní odehrávají.",
                    "correct": false
                  }
                ],
                "explanation": "vlnová délka L – vzdálenost od jednoho hřbetu vlny k sousednímu hřbetu; jednotka – µm (10-6"
              },
              {
                "question": "K tématu „Základní meteorologické prvky: Sluneční z…\" — které tvrzení je správné? (18)",
                "options": [
                  {
                    "text": "ÚVOD DO STUDIA FYZICKÉ GEOGRAFIE",
                    "correct": false
                  },
                  {
                    "text": "2.1.1 Záření a teplota",
                    "correct": true
                  },
                  {
                    "text": "Fyzická geografie je vědní disciplína v rámci geografických věd, zabývající se studiem fyzickogeografické sféry Země.",
                    "correct": false
                  },
                  {
                    "text": "Z časového a prostorového hlediska popisuje, studuje a prognózuje procesy a jevy, které se v ní odehrávají.",
                    "correct": false
                  }
                ],
                "explanation": "2.1.1 Záření a teplota"
              },
              {
                "question": "K tématu „Základní meteorologické prvky: Sluneční z…\" — které tvrzení je správné? (19)",
                "options": [
                  {
                    "text": "ÚVOD DO STUDIA FYZICKÉ GEOGRAFIE",
                    "correct": false
                  },
                  {
                    "text": "dva základní principy emise elektromagnetického záření:",
                    "correct": true
                  },
                  {
                    "text": "Fyzická geografie je vědní disciplína v rámci geografických věd, zabývající se studiem fyzickogeografické sféry Země.",
                    "correct": false
                  },
                  {
                    "text": "Z časového a prostorového hlediska popisuje, studuje a prognózuje procesy a jevy, které se v ní odehrávají.",
                    "correct": false
                  }
                ],
                "explanation": "dva základní principy emise elektromagnetického záření:"
              },
              {
                "question": "K tématu „Základní meteorologické prvky: Sluneční z…\" — které tvrzení je správné? (20)",
                "options": [
                  {
                    "text": "ÚVOD DO STUDIA FYZICKÉ GEOGRAFIE",
                    "correct": false
                  },
                  {
                    "text": "a) nepřímý vztah mezi vlnovou délkou záření daného tělesa a jeho teplotou (Slunce – kratší vlnové délky, Země – větší vlnové délky)",
                    "correct": true
                  },
                  {
                    "text": "Fyzická geografie je vědní disciplína v rámci geografických věd, zabývající se studiem fyzickogeografické sféry Země.",
                    "correct": false
                  },
                  {
                    "text": "Z časového a prostorového hlediska popisuje, studuje a prognózuje procesy a jevy, které se v ní odehrávají.",
                    "correct": false
                  }
                ],
                "explanation": "a) nepřímý vztah mezi vlnovou délkou záření daného tělesa a jeho teplotou (Slunce – kratší vlnové délky, Země – větší vlnové délky)"
              }
            ]
          }
        },
        {
          "id": "z0026p-4-vseobecna-cirkulace-atmosfery-vzduchove-hmoty-4",
          "title": "4. Všeobecná cirkulace atmosféry: Vzduchové hmoty. Atmosférické fronty. Cirkulace tropických šířek (TZK, pasáty, antipasáty, monzuny, tropické cyklóny). Cirkulace mimotropických šířek (cyklony, anticyklony, mimotropické monzuny, zonální a meridionální cirkulace).",
          "summary": "4. Všeobecná cirkulace atmosféry: Vzduchové hmoty. Atmosférické fronty. Cirkulace tropických šířek (TZK, pasáty, antipasáty, monzuny, tro…",
          "minutes": 25,
          "sectionTitle": "Témata prof. Brázdila",
          "available": true,
          "blocks": [
            {
              "type": "heading",
              "text": "Témata prof. Brázdila"
            },
            {
              "type": "callout",
              "label": "Okruh",
              "text": "4. Všeobecná cirkulace atmosféry: Vzduchové hmoty. Atmosférické fronty. Cirkulace tropických šířek (TZK, pasáty, antipasáty, monzuny, tropické cyklóny). Cirkulace mimotropických šířek (cyklony, anticyklony, mimotropické monzuny, zonální a meridionální cirkulace)."
            },
            {
              "type": "callout",
              "label": "Jak číst tuto lekci",
              "text": "Text je výtah ze skripta a přednášek — použij ho jako mapu k učení. Detaily a obrázky najdeš v PDF/PPT v materiálech lekce."
            },
            {
              "type": "heading",
              "text": "Výpisky — vlhkost vzduchu"
            },
            {
              "type": "list",
              "label": "Body přednášky",
              "items": [
                "4.) Atmosférická vlhkost a srážky FG_3 Brázdil",
                "[Fig_4]Voda existuje ve třech skupenstvích – Pevné (led), Kapalné (voda), plynné (vodní pára)",
                "Při fázových změnách se spotřebovává nebo uvolňuje latentní teplo",
                "Voda hraje klíčovou roli na Zemi z následujících příčin"
              ]
            },
            {
              "type": "paragraph",
              "text": "a) pokrývá 2/3 povrchu Země, funguje jako rezervoár tepla a jeho přerozdělování, stejně jako rezervoár různých složek (např. soli)"
            },
            {
              "type": "paragraph",
              "text": "b) Voda vypadávající na pevninách jako déšť nebo sníh vytváří při odtoku na povrchu různé tvary a formy reliéfu a přenáší živiny od jednoho místa k druhému"
            },
            {
              "type": "list",
              "label": "Body přednášky",
              "items": [
                "c) vodou (vodní parou) v atmosféře je přenášeno obrovské množství latentního tepla od jednoho místa k druhému"
              ]
            },
            {
              "type": "subheading",
              "text": "97 % tvoří slaná voda, 2,8 % sladká voda (mimo slaná jezera a vnitřní moře)",
              "label": "1"
            },
            {
              "type": "paragraph",
              "text": "Hlavní část sladké vody je vázána v ledovcových štítech a horských ledovcích (2,15 %) a podpovrchové vodě, hlavně podzemní (0, 63 %) – zbytek 0,02 %, takže sladké voda na pevnině tvoří jen velmi malou část z celkových zásob vody na Zemi."
            },
            {
              "type": "paragraph",
              "text": "Zbytek 0,02 % se rozděluje na půdní vodu (v dosahu kořenů rostlin), povrchovou vodu (jezera, vodní toky, bažiny) a vodu v atmosféře."
            },
            {
              "type": "heading",
              "text": "Otázky a okruhy — FG_3"
            },
            {
              "type": "paragraph",
              "text": "4. Atmosférická vlhkost a srážky • voda existuje ve třech skupenstvích – pevném (led), kapalném (voda), plynném (vodní pára) • při fázových změnách se spotřebovává nebo uvolňuje latentní teplo Obr. 4.1/77 – SS"
            },
            {
              "type": "subheading",
              "text": "4.1 Voda v globální perspektivě",
              "label": "2"
            },
            {
              "type": "paragraph",
              "text": "voda hraje klíčovou roli na Zemi z následujících příčin:"
            },
            {
              "type": "list",
              "label": "Klíčové body",
              "items": [
                "a) pokrývá 2/3 povrchu Země, funguje jako rezervoár tepla a jeho přerozdělování, stejně jako rezervoár různých složek (např.",
                "b) voda vypadávající na pevninách jako déšť nebo sníh vytváří při odtoku na povrchu různé tvary a formy reliéfu a přenáší živiny od jednoho místa k druhému",
                "c) vodou v atmosféře je přenášeno obrovské množství latentního tepla od jednoho místa k druhému"
              ]
            },
            {
              "type": "paragraph",
              "text": "4.1.1 Hydrosféra a hydrologický cyklus Obr. 4.2/78 – SS"
            },
            {
              "type": "list",
              "label": "Klíčové body",
              "items": [
                "97,2 % tvoří slaná voda, 2,8 % sladká voda • hlavní část sladké vody je vázána v ledovcových štítech a horských ledovcích (2,15 %) a podpovrchové vodě, hlavně podzemní (0,63 %) – zbytek 0,02 %, takže sladká voda na pevnině tvoří jen velmi malou část z celkových zásob vody na Zemi • zbytek 0,02 % se rozděluje na půdní vodu (v dosahu kořenů rostlin), povrchovou vodu (např.",
                "jezera, vodní toky, bažiny) a vodu v atmosféře • hydrologický cyklus – popisuje globální výměnu vody mezi jednotlivými rezervoáry:",
                "a) výpar z oceánů a pevnin (plus transpirace) do atmosféry v podobě vodní páry, z oceánů šestkrát větší",
                "b) kondenzace nebo sublimace vodní páry v atmosféře, vypadávající v podobě srážek (srážky nad oceány asi čtyřikrát větší než nad pevninou)",
                "c) srážky vypadlé na pevninu mohou",
                "se vypařit a vrátit se do atmosféry jako vodní pára",
                "se vsáknout do půdy (podzemní odtok)",
                "odtékat z povrchu spojujíce se do potoků a řek, odtékajících zpět do oceánů nebo bezodtokých jezer"
              ]
            },
            {
              "type": "paragraph",
              "text": "4.1.2 Globální vodní bilance Obr. 4.3/78 – SS"
            },
            {
              "type": "list",
              "label": "Klíčové body",
              "items": [
                "popisuje toky vody mezi oceánem, atmosférou a pevninou • předpokládáme, že objem oceánských vod a objem sladkých povrchových a podpovrchových vod je konstantní rok od roku • oceán: srážky (do) + odtok (do) = výpar (z), tj.",
                "km3 • pevnina: srážky (na) = výpar (z) + odtok (z), tj.",
                "km3 • protože na pevnině výpar = srážky – odtok, lze odtok při bilancování vypustit a lze zapsat: celkový výpar celkové srážky 70 (pevnina) + 420 (oceán) = 110 (pevnina) + 380 (oceán) (vše v tis."
              ]
            },
            {
              "type": "subheading",
              "text": "4.2 Vlhkost vzduchu",
              "label": "2"
            },
            {
              "type": "list",
              "items": [
                "vlhkost vzduchu – obecně značí množství vodní páry ve vzduchu",
                "množství vodní páry ve vzduchu kolísání s místem a časem (téměř žádné v chladném a suchém arktickém vzduchu až do 4-5 % v teplém vlhkém vzduchu při rovníku)",
                "maximální množství vlhkosti, které se může udržet ve vzduchu, závisí na teplotě vzduchu – teplý vzduch může udržet víc vlhkosti (vodní páry) než studený"
              ]
            },
            {
              "type": "paragraph",
              "text": "4.2.1 Specifická vlhkost vzduchu • specifická vlhkost vzduchu (g.kg-1) – hmotnost vodní páry v gramech obsažená v 1 kg vzduchu • maximální specifická vlhkost v závislosti na teplotě: -10 ºC – 2 g/kg, 30 ºC – 26 g/kg Obr. 4.4/80 – SS"
            },
            {
              "type": "heading",
              "text": "Otázky a okruhy — FG_4"
            },
            {
              "type": "subheading",
              "text": "5.1 Atmosférický tlak",
              "label": "2"
            },
            {
              "type": "list",
              "items": [
                "tlak p – síla F rovnoměrně spojitě rozložená, působící kolmo na rovinnou plochu, dělená velikostí této plochy S, tedy p = F.S-1 [Pa = N.m-2]",
                "atmosférický (barometrický) tlak – tlak atmosféry na všechna tělesa v ovzduší a na zemský povrch bez zřetele na orientaci stěn tělesa, který se rovná hmotnosti vzduchového sloupce nacházejícího se nad nimi [hPa = mbar]",
                "normální barometrický tlak 1013,2 hPa (760 Torrů)"
              ]
            },
            {
              "type": "paragraph",
              "text": "5.1.1 Měření tlaku • rtuťový tlakoměr (barometr) – přístroj pro měření tlaku vzduchu • tlak působí na rtuť v nádobě, která je vytlačena do trubice, v níž je vakuum (původně mm Hg) • malá mezidenní kolísání tlaku – největší změny při putujících tlakových útvarech Obr. 5.2/108 – SS"
            },
            {
              "type": "subheading",
              "text": "5.1.2 Změna tlaku vzduchu s výškou",
              "label": "3"
            },
            {
              "type": "list",
              "items": [
                "pokles tlaku vzduchu s výškou, v nižších výškách velmi prudký, ve vyšších výškách pomalejší, tj. menší změna výšky v troposféře znamená významnou změnu tlaku",
                "vliv poklesu tlaku s výškou na člověka – kyslík se dostává do plicních tkání pomaleji, zkrácení dechu a únava (kolem 3000 m a výše)"
              ]
            },
            {
              "type": "subheading",
              "text": "5.2 Větry a tlakové gradienty",
              "label": "2"
            },
            {
              "type": "list",
              "items": [
                "vítr – horizontální složka proudění vzduchu",
                "charakteristiky větru:"
              ]
            },
            {
              "type": "list",
              "items": [
                "a) směr větru – směr, odkud vítr vane (např. západní vítr – vane od západu k východu); měřen větrnou směrovkou (staví se proti větru) Obr. 5.4/109 – SS"
              ]
            },
            {
              "type": "paragraph",
              "text": "b) rychlost větru (m.s-1, km.h-1) – měřen anemometrem (počet otáček Robinsonova kříže je proporcionální rychlosti větru) • vítr je vyvolán tlakovými rozdíly mezi dvěma místy a směřuje z oblasti vyššího tlaku vzduchu do oblasti nižšího tlaku vzduchu (tj. ve směru síly horizontálního tlakového gradientu) Obr. 5.5/109 – SS"
            },
            {
              "type": "list",
              "label": "Klíčové body",
              "items": [
                "izobary – čáry spojující místa se stejnou hodnotou tlaku vzduchu • charakteristické tlakové útvary:",
                "a) tlaková výše (anticyklona) – uzavřené koncentricky uspořádané izobary s nejvyšším tlakem uprostřed",
                "b) tlaková níže (cyklona) – uzavřené koncentricky uspořádané izobary s nejnižším tlakem uprostřed",
                "c) hřeben vysokého tlaku – pásmo vyššího tlaku vybíhající z tlakové výše nebo oddělujíci dvě tlakové níže, nejvyšší tlak v ose hřebenu",
                "d) brázda nízkého tlaku – pásmo nižšího tlaku vybíhající z tlakové níže nebo oddělujíci dvě tlakové výše, nejnižší tlak v ose brázdy",
                "e) barické sedlo – část barického pole mezi dvěma protilehlými tlakovými výšemi a nížemi, příp.",
                "mezi dvěma hřebeny a brázdami Obr.",
                "2.31/79 – Netopil: Fyzická geografie I"
              ]
            },
            {
              "type": "paragraph",
              "text": "tlakové rozdíly jsou podmíněny nestejným zahříváním povrchu → teplotní diference → teplý vzduch má menší hustotu (nízký tlak) než studený (vysoký tlak)"
            },
            {
              "type": "paragraph",
              "text": "5.2.1 Brízová cirkulace • pobřežní vánky (brízy) vanou mezi mořem a pobřežím v létě jako důsledek nestejnoměrného zahřívání vody a souše, měnícími směr tlakového gradientu • mořský vánek – odpoledne vane chladnější vzduch z moře na pevninu • pevninský vánek – vane v noci z pevniny na moře Obr. 5.6/110 – SS"
            },
            {
              "type": "subheading",
              "text": "4.1 Voda v globální perspektivě",
              "label": "2"
            },
            {
              "type": "paragraph",
              "text": "voda hraje klíčovou roli na Zemi z následujících příčin:"
            },
            {
              "type": "list",
              "label": "Klíčové body",
              "items": [
                "a) pokrývá 2/3 povrchu Země, funguje jako rezervoár tepla a jeho přerozdělování, stejně jako rezervoár různých složek (např.",
                "b) voda vypadávající na pevninách jako déšť nebo sníh vytváří při odtoku na povrchu různé tvary a formy reliéfu a přenáší živiny od jednoho místa k druhému",
                "c) vodou v atmosféře je přenášeno obrovské množství latentního tepla od jednoho místa k druhému",
                "97,2 % tvoří slaná voda, 2,8 % sladká voda • hlavní část sladké vody je vázána v ledovcových štítech a horských ledovcích (2,15 %) a podpovrchové vodě, hlavně podzemní (0,63 %) – zbytek 0,02 %, takže sladká voda na pevnině tvoří jen velmi malou část z celkových zásob vody na Zemi • zbytek 0,02 % se rozděluje na půdní vodu (v dosahu kořenů rostlin), povrchovou vodu (např.",
                "jezera, vodní toky, bažiny) a vodu v atmosféře • hydrologický cyklus – popisuje globální výměnu vody mezi jednotlivými rezervoáry:",
                "a) výpar z oceánů a pevnin (plus transpirace) do atmosféry v podobě vodní páry, z oceánů šestkrát větší",
                "b) kondenzace nebo sublimace vodní páry v atmosféře, vypadávající v podobě srážek (srážky nad oceány asi čtyřikrát větší než nad pevninou)",
                "c) srážky vypadlé na pevninu mohou",
                "se vypařit a vrátit se do atmosféry jako vodní pára",
                "se vsáknout do půdy (podzemní odtok)",
                "odtékat z povrchu spojujíce se do potoků a řek, odtékajících zpět do oceánů nebo bezodtokých jezer",
                "popisuje toky vody mezi oceánem, atmosférou a pevninou • předpokládáme, že objem oceánských vod a objem sladkých povrchových a podpovrchových vod je konstantní rok od roku • oceán: srážky (do) + odtok (do) = výpar (z), tj.",
                "km3 • pevnina: srážky (na) = výpar (z) + odtok (z), tj.",
                "km3 • protože na pevnině výpar = srážky – odtok, lze odtok při bilancování vypustit a lze zapsat: celkový výpar celkové srážky 70 (pevnina) + 420 (oceán) = 110 (pevnina) + 380 (oceán) (vše v tis."
              ]
            },
            {
              "type": "subheading",
              "text": "5.1 Atmosférický tlak",
              "label": "2"
            },
            {
              "type": "list",
              "items": [
                "tlak p – síla F rovnoměrně spojitě rozložená, působící kolmo na rovinnou plochu, dělená velikostí této plochy S, tedy p = F.S-1 [Pa = N.m-2]",
                "atmosférický (barometrický) tlak – tlak atmosféry na všechna tělesa v ovzduší a na zemský povrch bez zřetele na orientaci stěn tělesa, který se rovná hmotnosti vzduchového sloupce nacházejícího se nad nimi [hPa = mbar]",
                "normální barometrický tlak 1013,2 hPa (760 Torrů)"
              ]
            },
            {
              "type": "list",
              "items": [
                "izobary – čáry spojující místa se stejnou hodnotou tlaku vzduchu • charakteristické tlakové útvary:",
                "a) tlaková výše (anticyklona) – uzavřené koncentricky uspořádané izobary s nejvyšším tlakem uprostřed",
                "b) tlaková níže (cyklona) – uzavřené koncentricky uspořádané izobary s nejnižším tlakem uprostřed",
                "c) hřeben vysokého tlaku – pásmo vyššího tlaku vybíhající z tlakové výše nebo oddělujíci dvě tlakové níže, nejvyšší tlak v ose hřebenu",
                "d) brázda nízkého tlaku – pásmo nižšího tlaku vybíhající z tlakové níže nebo oddělujíci dvě tlakové výše, nejnižší tlak v ose brázdy",
                "e) barické sedlo – část barického pole mezi dvěma protilehlými tlakovými výšemi a nížemi, příp.",
                "mezi dvěma hřebeny a brázdami Obr.",
                "2.31/79 – Netopil: Fyzická geografie I"
              ]
            },
            {
              "type": "list",
              "label": "Doporučený postup",
              "items": [
                "Projdi výtah a vlastní poznámky z přednášky",
                "Otevři přiložené PDF/PPT v materiálech lekce",
                "Propoj s předchozími a navazujícími okruhy v osnově"
              ]
            }
          ],
          "resources": [
            {
              "kind": "document",
              "title": "FG_4 — okruhy Brázdil",
              "url": "/materials/geografie-kartografie/z0026p/FG_4.doc",
              "source": "Brázdil"
            },
            {
              "kind": "document",
              "title": "FG_3 — okruhy Brázdil",
              "url": "/materials/geografie-kartografie/z0026p/FG_3.doc",
              "source": "Brázdil",
              "note": "Sdílený materiál pro více okruhů hydrologie"
            },
            {
              "kind": "document",
              "title": "Výpisky — vlhkost vzduchu",
              "url": "/materials/geografie-kartografie/z0026p/vypisky-z-fyzicke-geografie-mu-3-tema-od-brazdila-atm-vlhkost.docx",
              "source": "Výpisky MU"
            },
            {
              "kind": "link",
              "title": "IS MUNI — Fyzická geografie",
              "url": "https://is.muni.cz/predmet/sci/Z0026p",
              "source": "IS MUNI"
            },
            {
              "kind": "document",
              "title": "otazky-na-tema-3-a-4.docx",
              "url": "/materials/geografie-kartografie/z0026p/otazky-na-tema-3-a-4.docx",
              "source": "Okruhy ke zkoušce",
              "note": "Sdílený materiál pro více okruhů"
            },
            {
              "kind": "document",
              "title": "vetry-a-globalni-cirkulace-atmosfery.docx",
              "url": "/materials/geografie-kartografie/z0026p/vetry-a-globalni-cirkulace-atmosfery.docx",
              "source": "Okruhy ke zkoušce",
              "note": "Sdílený materiál pro více okruhů"
            },
            {
              "kind": "document",
              "title": "otazky-ze-tretiho-terminu-zkousky.docx",
              "url": "/materials/geografie-kartografie/z0026p/otazky-ze-tretiho-terminu-zkousky.docx",
              "source": "Okruhy ke zkoušce",
              "note": "Sdílený materiál pro více okruhů"
            }
          ],
          "quiz": {
            "title": "Kvíz: Cirkulace atmosféry",
            "questions": [
              {
                "question": "Jaká je normální hodnota barometrického tlaku na hladině moře?",
                "options": [
                  {
                    "text": "1013,2 hPa",
                    "correct": true
                  },
                  {
                    "text": "7600 hPa",
                    "correct": false
                  },
                  {
                    "text": "500 hPa",
                    "correct": false
                  },
                  {
                    "text": "101,32 hPa",
                    "correct": false
                  }
                ],
                "explanation": "Odpovídá přibližně 760 mmHg (Torrů)."
              },
              {
                "question": "Směr větru udáváme jako…",
                "options": [
                  {
                    "text": "odkud vítr vane",
                    "correct": true
                  },
                  {
                    "text": "kam vítr vane",
                    "correct": false
                  },
                  {
                    "text": "kolmý směr k izobarám",
                    "correct": false
                  },
                  {
                    "text": "směr nejvyššího tlaku",
                    "correct": false
                  }
                ],
                "explanation": "Vítr vanoucí ze severu = severní vítr."
              },
              {
                "question": "Co je anticyklona?",
                "options": [
                  {
                    "text": "Oblast vysokého atmosférického tlaku",
                    "correct": true
                  },
                  {
                    "text": "Oblast nízkého tlaku",
                    "correct": false
                  },
                  {
                    "text": "Fronta studeného vzduchu",
                    "correct": false
                  },
                  {
                    "text": "Pás mezi dvěma frontami",
                    "correct": false
                  }
                ],
                "explanation": "V anticykloně obvykle sestupuje vzduch → jasno a stabilní počasí."
              },
              {
                "question": "Jak se chová mořská bríza?",
                "options": [
                  {
                    "text": "Odpoledne vanoucí od moře na pevninu",
                    "correct": true
                  },
                  {
                    "text": "V noci od moře na pevninu",
                    "correct": false
                  },
                  {
                    "text": "Celý den od pevniny k moři",
                    "correct": false
                  },
                  {
                    "text": "Jen v zimě od pevniny k moři",
                    "correct": false
                  }
                ],
                "explanation": "Pevnina se odpoledne rychleji ohřívá → tlakový gradient a vánek z moře."
              },
              {
                "question": "Výpar z oceánů je přibližně kolikrát větší než z pevnin?",
                "options": [
                  {
                    "text": "6×",
                    "correct": true
                  },
                  {
                    "text": "2×",
                    "correct": false
                  },
                  {
                    "text": "Stejný",
                    "correct": false
                  },
                  {
                    "text": "20×",
                    "correct": false
                  }
                ],
                "explanation": "Oceány jsou dominantním zdrojem vodní páry v hydrologickém cyklu."
              },
              {
                "question": "Které tvrzení patří k okruhu „Všeobecná cirkulace atmosféry: Vzduchové hmoty.…\"?",
                "options": [
                  {
                    "text": "Voda hraje klíčovou roli na Zemi z následujících příčin",
                    "correct": false
                  },
                  {
                    "text": "Při fázových změnách se spotřebovává nebo uvolňuje latentní teplo",
                    "correct": false
                  },
                  {
                    "text": "4.) Atmosférická vlhkost a srážky FG_3 Brázdil",
                    "correct": true
                  },
                  {
                    "text": "[Fig_4]Voda existuje ve třech skupenstvích – Pevné (led), Kapalné (voda), plynné (vodní pára)",
                    "correct": false
                  }
                ],
                "explanation": "4.) Atmosférická vlhkost a srážky FG_3 Brázdil"
              },
              {
                "question": "Které tvrzení odpovídá obsahu lekce?",
                "options": [
                  {
                    "text": "Výklad k tomuto okruhu neobsahuje tuto informaci.",
                    "correct": false
                  },
                  {
                    "text": "a) pokrývá 2/3 povrchu Země, funguje jako rezervoár tepla a jeho přerozdělování, stejně jako rezervoár různých složek (např. soli)",
                    "correct": true
                  },
                  {
                    "text": "Toto tvrzení nelze z výkladu lekce ověřit.",
                    "correct": false
                  },
                  {
                    "text": "4.) Atmosférická vlhkost a srážky FG_3 Brázdil",
                    "correct": false
                  }
                ],
                "explanation": "Správně: a) pokrývá 2/3 povrchu Země, funguje jako rezervoár tepla a jeho přerozdělování, stejně jako rezervoár různých složek (např. soli)"
              },
              {
                "question": "K tématu „Všeobecná cirkulace atmosféry: Vzduchové …\" — které tvrzení je správné? (8)",
                "options": [
                  {
                    "text": "4.) Atmosférická vlhkost a srážky FG_3 Brázdil",
                    "correct": false
                  },
                  {
                    "text": "Při fázových změnách se spotřebovává nebo uvolňuje latentní teplo",
                    "correct": false
                  },
                  {
                    "text": "97 % tvoří slaná voda, 2,8 % sladká voda (mimo slaná jezera a vnitřní moře)",
                    "correct": true
                  },
                  {
                    "text": "[Fig_4]Voda existuje ve třech skupenstvích – Pevné (led), Kapalné (voda), plynné (vodní pára)",
                    "correct": false
                  }
                ],
                "explanation": "97 % tvoří slaná voda, 2,8 % sladká voda (mimo slaná jezera a vnitřní moře)"
              },
              {
                "question": "K tématu „Všeobecná cirkulace atmosféry: Vzduchové …\" — které tvrzení je správné? (9)",
                "options": [
                  {
                    "text": "4.) Atmosférická vlhkost a srážky FG_3 Brázdil",
                    "correct": false
                  },
                  {
                    "text": "Při fázových změnách se spotřebovává nebo uvolňuje latentní teplo",
                    "correct": false
                  },
                  {
                    "text": "Hlavní část sladké vody je vázána v ledovcových štítech a horských ledovcích (2,15 %) a podpovrchové vodě, hlavně podzemní (0, 63 %) – zbytek 0,02 %, takže sla…",
                    "correct": true
                  },
                  {
                    "text": "[Fig_4]Voda existuje ve třech skupenstvích – Pevné (led), Kapalné (voda), plynné (vodní pára)",
                    "correct": false
                  }
                ],
                "explanation": "Hlavní část sladké vody je vázána v ledovcových štítech a horských ledovcích (2,15 %) a podpovrchové vodě, hlavně podzemní (0, 63 %) – zbytek 0,02 %, takže sla…"
              },
              {
                "question": "K tématu „Všeobecná cirkulace atmosféry: Vzduchové …\" — které tvrzení je správné? (10)",
                "options": [
                  {
                    "text": "4.) Atmosférická vlhkost a srážky FG_3 Brázdil",
                    "correct": false
                  },
                  {
                    "text": "Zbytek 0,02 % se rozděluje na půdní vodu (v dosahu kořenů rostlin), povrchovou vodu (jezera, vodní toky, bažiny) a vodu v atmosféře.",
                    "correct": true
                  },
                  {
                    "text": "[Fig_4]Voda existuje ve třech skupenstvích – Pevné (led), Kapalné (voda), plynné (vodní pára)",
                    "correct": false
                  },
                  {
                    "text": "Při fázových změnách se spotřebovává nebo uvolňuje latentní teplo",
                    "correct": false
                  }
                ],
                "explanation": "Zbytek 0,02 % se rozděluje na půdní vodu (v dosahu kořenů rostlin), povrchovou vodu (jezera, vodní toky, bažiny) a vodu v atmosféře."
              },
              {
                "question": "K tématu „Všeobecná cirkulace atmosféry: Vzduchové …\" — které tvrzení je správné? (11)",
                "options": [
                  {
                    "text": "4.) Atmosférická vlhkost a srážky FG_3 Brázdil",
                    "correct": false
                  },
                  {
                    "text": "4. Atmosférická vlhkost a srážky • voda existuje ve třech skupenstvích – pevném (led), kapalném (voda), plynném (vodní pára) • při fázových změnách se spotřebo…",
                    "correct": true
                  },
                  {
                    "text": "[Fig_4]Voda existuje ve třech skupenstvích – Pevné (led), Kapalné (voda), plynné (vodní pára)",
                    "correct": false
                  },
                  {
                    "text": "Při fázových změnách se spotřebovává nebo uvolňuje latentní teplo",
                    "correct": false
                  }
                ],
                "explanation": "4. Atmosférická vlhkost a srážky • voda existuje ve třech skupenstvích – pevném (led), kapalném (voda), plynném (vodní pára) • při fázových změnách se spotřebo…"
              },
              {
                "question": "K tématu „Všeobecná cirkulace atmosféry: Vzduchové …\" — které tvrzení je správné? (12)",
                "options": [
                  {
                    "text": "4.) Atmosférická vlhkost a srážky FG_3 Brázdil",
                    "correct": false
                  },
                  {
                    "text": "4.1 Voda v globální perspektivě",
                    "correct": true
                  },
                  {
                    "text": "[Fig_4]Voda existuje ve třech skupenstvích – Pevné (led), Kapalné (voda), plynné (vodní pára)",
                    "correct": false
                  },
                  {
                    "text": "Při fázových změnách se spotřebovává nebo uvolňuje latentní teplo",
                    "correct": false
                  }
                ],
                "explanation": "4.1 Voda v globální perspektivě"
              },
              {
                "question": "K tématu „Všeobecná cirkulace atmosféry: Vzduchové …\" — které tvrzení je správné? (13)",
                "options": [
                  {
                    "text": "4.) Atmosférická vlhkost a srážky FG_3 Brázdil",
                    "correct": false
                  },
                  {
                    "text": "voda hraje klíčovou roli na Zemi z následujících příčin:",
                    "correct": true
                  },
                  {
                    "text": "[Fig_4]Voda existuje ve třech skupenstvích – Pevné (led), Kapalné (voda), plynné (vodní pára)",
                    "correct": false
                  },
                  {
                    "text": "Při fázových změnách se spotřebovává nebo uvolňuje latentní teplo",
                    "correct": false
                  }
                ],
                "explanation": "voda hraje klíčovou roli na Zemi z následujících příčin:"
              },
              {
                "question": "K tématu „Všeobecná cirkulace atmosféry: Vzduchové …\" — které tvrzení je správné? (14)",
                "options": [
                  {
                    "text": "4.) Atmosférická vlhkost a srážky FG_3 Brázdil",
                    "correct": false
                  },
                  {
                    "text": "a) pokrývá 2/3 povrchu Země, funguje jako rezervoár tepla a jeho přerozdělování, stejně jako rezervoár různých složek (např.",
                    "correct": true
                  },
                  {
                    "text": "[Fig_4]Voda existuje ve třech skupenstvích – Pevné (led), Kapalné (voda), plynné (vodní pára)",
                    "correct": false
                  },
                  {
                    "text": "Při fázových změnách se spotřebovává nebo uvolňuje latentní teplo",
                    "correct": false
                  }
                ],
                "explanation": "a) pokrývá 2/3 povrchu Země, funguje jako rezervoár tepla a jeho přerozdělování, stejně jako rezervoár různých složek (např."
              },
              {
                "question": "K tématu „Všeobecná cirkulace atmosféry: Vzduchové …\" — které tvrzení je správné? (15)",
                "options": [
                  {
                    "text": "4.) Atmosférická vlhkost a srážky FG_3 Brázdil",
                    "correct": false
                  },
                  {
                    "text": "b) voda vypadávající na pevninách jako déšť nebo sníh vytváří při odtoku na povrchu různé tvary a formy reliéfu a přenáší živiny od jednoho místa k druhému",
                    "correct": true
                  },
                  {
                    "text": "[Fig_4]Voda existuje ve třech skupenstvích – Pevné (led), Kapalné (voda), plynné (vodní pára)",
                    "correct": false
                  },
                  {
                    "text": "Při fázových změnách se spotřebovává nebo uvolňuje latentní teplo",
                    "correct": false
                  }
                ],
                "explanation": "b) voda vypadávající na pevninách jako déšť nebo sníh vytváří při odtoku na povrchu různé tvary a formy reliéfu a přenáší živiny od jednoho místa k druhému"
              },
              {
                "question": "K tématu „Všeobecná cirkulace atmosféry: Vzduchové …\" — které tvrzení je správné? (16)",
                "options": [
                  {
                    "text": "4.) Atmosférická vlhkost a srážky FG_3 Brázdil",
                    "correct": false
                  },
                  {
                    "text": "c) vodou v atmosféře je přenášeno obrovské množství latentního tepla od jednoho místa k druhému",
                    "correct": true
                  },
                  {
                    "text": "[Fig_4]Voda existuje ve třech skupenstvích – Pevné (led), Kapalné (voda), plynné (vodní pára)",
                    "correct": false
                  },
                  {
                    "text": "Při fázových změnách se spotřebovává nebo uvolňuje latentní teplo",
                    "correct": false
                  }
                ],
                "explanation": "c) vodou v atmosféře je přenášeno obrovské množství latentního tepla od jednoho místa k druhému"
              },
              {
                "question": "K tématu „Všeobecná cirkulace atmosféry: Vzduchové …\" — které tvrzení je správné? (17)",
                "options": [
                  {
                    "text": "4.) Atmosférická vlhkost a srážky FG_3 Brázdil",
                    "correct": false
                  },
                  {
                    "text": "4.1.1 Hydrosféra a hydrologický cyklus Obr. 4.2/78 – SS",
                    "correct": true
                  },
                  {
                    "text": "[Fig_4]Voda existuje ve třech skupenstvích – Pevné (led), Kapalné (voda), plynné (vodní pára)",
                    "correct": false
                  },
                  {
                    "text": "Při fázových změnách se spotřebovává nebo uvolňuje latentní teplo",
                    "correct": false
                  }
                ],
                "explanation": "4.1.1 Hydrosféra a hydrologický cyklus Obr. 4.2/78 – SS"
              },
              {
                "question": "K tématu „Všeobecná cirkulace atmosféry: Vzduchové …\" — které tvrzení je správné? (18)",
                "options": [
                  {
                    "text": "4.) Atmosférická vlhkost a srážky FG_3 Brázdil",
                    "correct": false
                  },
                  {
                    "text": "jezera, vodní toky, bažiny) a vodu v atmosféře • hydrologický cyklus – popisuje globální výměnu vody mezi jednotlivými rezervoáry:",
                    "correct": true
                  },
                  {
                    "text": "[Fig_4]Voda existuje ve třech skupenstvích – Pevné (led), Kapalné (voda), plynné (vodní pára)",
                    "correct": false
                  },
                  {
                    "text": "Při fázových změnách se spotřebovává nebo uvolňuje latentní teplo",
                    "correct": false
                  }
                ],
                "explanation": "jezera, vodní toky, bažiny) a vodu v atmosféře • hydrologický cyklus – popisuje globální výměnu vody mezi jednotlivými rezervoáry:"
              },
              {
                "question": "K tématu „Všeobecná cirkulace atmosféry: Vzduchové …\" — které tvrzení je správné? (19)",
                "options": [
                  {
                    "text": "4.) Atmosférická vlhkost a srážky FG_3 Brázdil",
                    "correct": false
                  },
                  {
                    "text": "a) výpar z oceánů a pevnin (plus transpirace) do atmosféry v podobě vodní páry, z oceánů šestkrát větší",
                    "correct": true
                  },
                  {
                    "text": "[Fig_4]Voda existuje ve třech skupenstvích – Pevné (led), Kapalné (voda), plynné (vodní pára)",
                    "correct": false
                  },
                  {
                    "text": "Při fázových změnách se spotřebovává nebo uvolňuje latentní teplo",
                    "correct": false
                  }
                ],
                "explanation": "a) výpar z oceánů a pevnin (plus transpirace) do atmosféry v podobě vodní páry, z oceánů šestkrát větší"
              },
              {
                "question": "K tématu „Všeobecná cirkulace atmosféry: Vzduchové …\" — které tvrzení je správné? (20)",
                "options": [
                  {
                    "text": "4.) Atmosférická vlhkost a srážky FG_3 Brázdil",
                    "correct": false
                  },
                  {
                    "text": "b) kondenzace nebo sublimace vodní páry v atmosféře, vypadávající v podobě srážek (srážky nad oceány asi čtyřikrát větší než nad pevninou)",
                    "correct": true
                  },
                  {
                    "text": "[Fig_4]Voda existuje ve třech skupenstvích – Pevné (led), Kapalné (voda), plynné (vodní pára)",
                    "correct": false
                  },
                  {
                    "text": "Při fázových změnách se spotřebovává nebo uvolňuje latentní teplo",
                    "correct": false
                  }
                ],
                "explanation": "b) kondenzace nebo sublimace vodní páry v atmosféře, vypadávající v podobě srážek (srážky nad oceány asi čtyřikrát větší než nad pevninou)"
              }
            ]
          }
        },
        {
          "id": "z0026p-5-zaklady-predpovedi-pocasi-zdroje-dat-pro-predp-5",
          "title": "5. Základy předpovědi počasí: zdroje dat pro předpověď počasí, druhy předpovědi, metody krátkodobé předpovědi, dlouhodobá předpověď. 6. Klimatické klasifikace: metody klasifikace, rozdělení klasifikací. Konvenční klasifikace Köppena. Genetická klasifikace Alisovova.",
          "summary": "5. Základy předpovědi počasí: zdroje dat pro předpověď počasí, druhy předpovědi, metody krátkodobé předpovědi, dlouhodobá předpověď. 6. K…",
          "minutes": 25,
          "sectionTitle": "Témata prof. Brázdila",
          "available": true,
          "blocks": [
            {
              "type": "heading",
              "text": "Témata prof. Brázdila"
            },
            {
              "type": "callout",
              "label": "Okruh",
              "text": "5. Základy předpovědi počasí: zdroje dat pro předpověď počasí, druhy předpovědi, metody krátkodobé předpovědi, dlouhodobá předpověď. 6. Klimatické klasifikace: metody klasifikace, rozdělení klasifikací. Konvenční klasifikace Köppena. Genetická klasifikace Alisovova."
            },
            {
              "type": "callout",
              "label": "Jak číst tuto lekci",
              "text": "Text je výtah ze skripta a přednášek — použij ho jako mapu k učení. Detaily a obrázky najdeš v PDF/PPT v materiálech lekce."
            },
            {
              "type": "heading",
              "text": "Otázky a okruhy — FG_5"
            },
            {
              "type": "subheading",
              "text": "6. SystémY počasí",
              "label": "1"
            },
            {
              "type": "list",
              "items": [
                "počasí – okamžitý stav atmosféry (ve vrstvě od zemského povrchu po tropopauzu), charakterizované souborem meteorologických prvků (např. teplota, tlak a vlhkost vzduchu, oblačnost) a meteorologických jevů (např. rosa, bouřka, mlha) v daném místě – velká časová a prostorová proměnlivost počasí",
                "povětrnost – ráz počasí během několika dnů"
              ]
            },
            {
              "type": "subheading",
              "text": "6.1 Putující cyklony a anticyklony",
              "label": "2"
            },
            {
              "type": "list",
              "items": [
                "putující cyklony a anticyklony jsou zdrojem změn počasí",
                "cyklony: výstup vzduchu – hustá vrstevnatá oblaka – déšť nebo sníh → cyklonální srážky",
                "cyklonální bouře – velký tlakový gradient, silný výstup vzduchu – silný vítr, velký déšť nebo sněžení",
                "putující cyklony lze dělit na:"
              ]
            },
            {
              "type": "list",
              "label": "Klíčové body",
              "items": [
                "a) frontální cyklony mírných a polárních šířek – od slabých po cyklonální bouře",
                "b) tropické cyklony tropického nebo subtropického pásma – od mírných po destruktivní • anticyklony: sestupné pohyby, jasné počasí (někdy kumuly), v centru slabé a proměnlivé větry • putující anticyklony ve středních šířkách"
              ]
            },
            {
              "type": "subheading",
              "text": "6.1.1 Vzduchové hmoty",
              "label": "3"
            },
            {
              "type": "paragraph",
              "text": "vzduchová hmota"
            },
            {
              "type": "list",
              "items": [
                "velký objem vzduchu (horizontálně tisíce km, vertikálně po tropopauzu) s téměř jednotnými charakteristikami teploty a vlhkosti vzduchu • typické vlastnosti získávají při stagnaci nebo pomalém pohybu vzduchu v oblastech svého vzniku • při přemisťování do jiné oblasti (vliv tlakového gradientu) mění vzduchová hmota své vlastnosti – transformace • dělení vzduchových hmot podle zeměpisné šířky (geografické typy vzduchových hmot):"
              ]
            },
            {
              "type": "list",
              "items": [
                "Vzduchová hmota Symbol Oblast vzniku Arktická A Severní ledový oceán a přilehlá pevnina Antarktická AA Antarktida Polární P kontinenty a oceány, 50-60º z.š.",
                "Tropická T kontinenty a oceány, 20-35º z.š.",
                "Ekvatoriální E oceány blízko rovníku"
              ]
            },
            {
              "type": "paragraph",
              "text": "dělení vzduchových hmot podle typu aktivního povrchu, nad nímž vznikají: mořské (m) – nad oceány a kontinentální (c) – nad pevninou"
            },
            {
              "type": "callout",
              "label": "dělení vzduchových hmot podle termodynamického hlediska",
              "text": "a) teplé – při přemisťování do dané oblasti se ochlazují, přinášejí oteplení, stabilní zvrstvení nebo inverze b) studené - při přemisťování do dané oblasti se oteplují, přinášejí ochlazení, labilní zvrstvení c) neutrální – v dané oblasti si po několik dnů zachovávají své základní vlastnosti"
            },
            {
              "type": "subheading",
              "text": "6.1.2 Studená, teplá a oklusní fronta",
              "label": "3"
            },
            {
              "type": "list",
              "items": [
                "fronta – ostře vyjádřená hranice oddělující jednu vzduchovou hmotu od druhé",
                "pohybuje-li se jedna vzduchová hmota do druhé, fronta svírá malý úhel s povrchem Obr."
              ]
            },
            {
              "type": "list",
              "items": [
                "6.3/138 – SS + 2.49/55 + 2.50/56 z Netopil: Fyzická geografie I"
              ]
            },
            {
              "type": "list",
              "items": [
                "studená fronta – klín postupujícího studeného vzduchu, vynucený výstup vzduchu – cumulonimby Cb, bouřky, přeháňky Obr.",
                "6.4/138 – SS + 2.47/98 – Netopil: Fyzická geografie I"
              ]
            },
            {
              "type": "subheading",
              "text": "6.1 Putující cyklony a anticyklony",
              "label": "2"
            },
            {
              "type": "list",
              "items": [
                "putující cyklony a anticyklony jsou zdrojem změn počasí",
                "cyklony: výstup vzduchu – hustá vrstevnatá oblaka – déšť nebo sníh → cyklonální srážky",
                "cyklonální bouře – velký tlakový gradient, silný výstup vzduchu – silný vítr, velký déšť nebo sněžení",
                "putující cyklony lze dělit na:"
              ]
            },
            {
              "type": "list",
              "label": "Klíčové body",
              "items": [
                "a) frontální cyklony mírných a polárních šířek – od slabých po cyklonální bouře",
                "b) tropické cyklony tropického nebo subtropického pásma – od mírných po destruktivní • anticyklony: sestupné pohyby, jasné počasí (někdy kumuly), v centru slabé a proměnlivé větry • putující anticyklony ve středních šířkách"
              ]
            },
            {
              "type": "subheading",
              "text": "6.1.1 Vzduchové hmoty",
              "label": "3"
            },
            {
              "type": "paragraph",
              "text": "vzduchová hmota"
            },
            {
              "type": "list",
              "items": [
                "velký objem vzduchu (horizontálně tisíce km, vertikálně po tropopauzu) s téměř jednotnými charakteristikami teploty a vlhkosti vzduchu • typické vlastnosti získávají při stagnaci nebo pomalém pohybu vzduchu v oblastech svého vzniku • při přemisťování do jiné oblasti (vliv tlakového gradientu) mění vzduchová hmota své vlastnosti – transformace • dělení vzduchových hmot podle zeměpisné šířky (geografické typy vzduchových hmot):"
              ]
            },
            {
              "type": "list",
              "label": "Doporučený postup",
              "items": [
                "Projdi výtah a vlastní poznámky z přednášky",
                "Otevři přiložené PDF/PPT v materiálech lekce",
                "Propoj s předchozími a navazujícími okruhy v osnově"
              ]
            }
          ],
          "resources": [
            {
              "kind": "document",
              "title": "FG_5 — okruhy Brázdil",
              "url": "/materials/geografie-kartografie/z0026p/FG_5.doc",
              "source": "Brázdil"
            },
            {
              "kind": "link",
              "title": "IS MUNI — Fyzická geografie",
              "url": "https://is.muni.cz/predmet/sci/Z0026p",
              "source": "IS MUNI"
            },
            {
              "kind": "document",
              "title": "otazky-ze-tretiho-terminu-zkousky.docx",
              "url": "/materials/geografie-kartografie/z0026p/otazky-ze-tretiho-terminu-zkousky.docx",
              "source": "Okruhy ke zkoušce",
              "note": "Sdílený materiál pro více okruhů"
            }
          ],
          "quiz": {
            "title": "Kvíz: Předpověď počasí a vzduchové hmoty",
            "questions": [
              {
                "question": "Co je vzduchová hmota?",
                "options": [
                  {
                    "text": "Velký objem vzduchu s jednotnými vlastnostmi teploty a vlhkosti",
                    "correct": true
                  },
                  {
                    "text": "Pouze vrstva inverze v údolí",
                    "correct": false
                  },
                  {
                    "text": "Jedna cumulonimbusová bouřka",
                    "correct": false
                  },
                  {
                    "text": "Vzduch v bezprostřední blízkosti fronty",
                    "correct": false
                  }
                ],
                "explanation": "Vzduchové hmoty se klasifikují podle původu a povrchu (např. mT, cP)."
              },
              {
                "question": "Co charakterizuje studenou frontu?",
                "options": [
                  {
                    "text": "Klín studeného vzduchu pod teplý → cumulonimby a přeháňky",
                    "correct": true
                  },
                  {
                    "text": "Pomalé zatažení a dlouhé deště",
                    "correct": false
                  },
                  {
                    "text": "Pouze jasno a vysoký tlak",
                    "correct": false
                  },
                  {
                    "text": "Absence srážek",
                    "correct": false
                  }
                ],
                "explanation": "Studený vzduch podjíždí pod teplý a rychle ho vytlačuje vzhůru."
              },
              {
                "question": "Jaký je rozdíl mezi počasím a povětrností?",
                "options": [
                  {
                    "text": "Počasí = okamžitý stav; povětrnost = charakter počasí během několika dnů",
                    "correct": true
                  },
                  {
                    "text": "Počasí = dlouhodobý průměr; povětrnost = okamžitý stav",
                    "correct": false
                  },
                  {
                    "text": "Synonyma bez rozdílu",
                    "correct": false
                  },
                  {
                    "text": "Povětrnost se měří jen v létě",
                    "correct": false
                  }
                ],
                "explanation": "Klima je ještě delší časová úroveň než povětrnost."
              },
              {
                "question": "Tropická vzduchová hmota se označuje písmenem…",
                "options": [
                  {
                    "text": "T",
                    "correct": true
                  },
                  {
                    "text": "P",
                    "correct": false
                  },
                  {
                    "text": "A",
                    "correct": false
                  },
                  {
                    "text": "c",
                    "correct": false
                  }
                ],
                "explanation": "P = polární, A = arktická, m/c = mořská/kontinentální."
              },
              {
                "question": "Které tvrzení patří k okruhu „Základy předpovědi počasí: zdroje dat pro předp…\"?",
                "options": [
                  {
                    "text": "6.1 Putující cyklony a anticyklony",
                    "correct": false
                  },
                  {
                    "text": "povětrnost – ráz počasí během několika dnů",
                    "correct": false
                  },
                  {
                    "text": "počasí – okamžitý stav atmosféry (ve vrstvě od zemského povrchu po tropopauzu), charakterizované souborem meteorologických prvků (např. teplota, tlak a vlhkost vzduchu, oblačnost)…",
                    "correct": true
                  },
                  {
                    "text": "počasí – okamžitý stav atmosféry (ve vrstvě od zemského povrchu po tropopauzu), charakterizované souborem meteorologických prvků (např. teplota, tlak a vlhkost vzduchu, oblačnost)…",
                    "correct": false
                  }
                ],
                "explanation": "počasí – okamžitý stav atmosféry (ve vrstvě od zemského povrchu po tropopauzu), charakterizované souborem meteorologických prvků (např. teplota, tlak a vlhkost vzduchu, oblačnost)…"
              },
              {
                "question": "Které tvrzení odpovídá obsahu lekce?",
                "options": [
                  {
                    "text": "Výklad k tomuto okruhu neobsahuje tuto informaci.",
                    "correct": false
                  },
                  {
                    "text": "6.1 Putující cyklony a anticyklony",
                    "correct": true
                  },
                  {
                    "text": "Toto tvrzení nelze z výkladu lekce ověřit.",
                    "correct": false
                  },
                  {
                    "text": "počasí – okamžitý stav atmosféry (ve vrstvě od zemského povrchu po tropopauzu), charakterizované souborem meteorologických prvků (např. teplota, tlak a vlhkost…",
                    "correct": false
                  }
                ],
                "explanation": "Správně: 6.1 Putující cyklony a anticyklony"
              },
              {
                "question": "Co je správné tvrzení k pojmu „dělení vzduchových hmot podle termodynamického hlediska\"?",
                "options": [
                  {
                    "text": "6.1 Putující cyklony a anticyklony",
                    "correct": false
                  },
                  {
                    "text": "a) teplé – při přemisťování do dané oblasti se ochlazují, přinášejí oteplení, stabilní zvrstvení nebo inverze b) studené - při přemisťování do dané oblasti se oteplují, přinášejí …",
                    "correct": true
                  },
                  {
                    "text": "povětrnost – ráz počasí během několika dnů",
                    "correct": false
                  },
                  {
                    "text": "počasí – okamžitý stav atmosféry (ve vrstvě od zemského povrchu po tropopauzu), charakterizované souborem meteorologických prvků (např. teplota, tlak a vlhkost vzduchu, oblačnost)…",
                    "correct": false
                  }
                ],
                "explanation": "Výklad: a) teplé – při přemisťování do dané oblasti se ochlazují, přinášejí oteplení, stabilní zvrstvení nebo inverze b) studené - při přemisťování do dané oblasti se oteplují, přinášejí …"
              },
              {
                "question": "K tématu „Základy předpovědi počasí: zdroje dat pro…\" — které tvrzení je správné? (8)",
                "options": [
                  {
                    "text": "počasí – okamžitý stav atmosféry (ve vrstvě od zemského povrchu po tropopauzu), charakterizované souborem meteorologických prvků (např. teplota, tlak a vlhkost…",
                    "correct": false
                  },
                  {
                    "text": "6.1 Putující cyklony a anticyklony",
                    "correct": false
                  },
                  {
                    "text": "a) frontální cyklony mírných a polárních šířek – od slabých po cyklonální bouře",
                    "correct": true
                  },
                  {
                    "text": "povětrnost – ráz počasí během několika dnů",
                    "correct": false
                  }
                ],
                "explanation": "a) frontální cyklony mírných a polárních šířek – od slabých po cyklonální bouře"
              },
              {
                "question": "K tématu „Základy předpovědi počasí: zdroje dat pro…\" — které tvrzení je správné? (9)",
                "options": [
                  {
                    "text": "počasí – okamžitý stav atmosféry (ve vrstvě od zemského povrchu po tropopauzu), charakterizované souborem meteorologických prvků (např. teplota, tlak a vlhkost…",
                    "correct": false
                  },
                  {
                    "text": "6.1 Putující cyklony a anticyklony",
                    "correct": false
                  },
                  {
                    "text": "b) tropické cyklony tropického nebo subtropického pásma – od mírných po destruktivní • anticyklony: sestupné pohyby, jasné počasí (někdy kumuly), v centru slab…",
                    "correct": true
                  },
                  {
                    "text": "povětrnost – ráz počasí během několika dnů",
                    "correct": false
                  }
                ],
                "explanation": "b) tropické cyklony tropického nebo subtropického pásma – od mírných po destruktivní • anticyklony: sestupné pohyby, jasné počasí (někdy kumuly), v centru slab…"
              },
              {
                "question": "K tématu „Základy předpovědi počasí: zdroje dat pro…\" — které tvrzení je správné? (10)",
                "options": [
                  {
                    "text": "počasí – okamžitý stav atmosféry (ve vrstvě od zemského povrchu po tropopauzu), charakterizované souborem meteorologických prvků (např. teplota, tlak a vlhkost…",
                    "correct": false
                  },
                  {
                    "text": "6.1.1 Vzduchové hmoty",
                    "correct": true
                  },
                  {
                    "text": "povětrnost – ráz počasí během několika dnů",
                    "correct": false
                  },
                  {
                    "text": "6.1 Putující cyklony a anticyklony",
                    "correct": false
                  }
                ],
                "explanation": "6.1.1 Vzduchové hmoty"
              },
              {
                "question": "K tématu „Základy předpovědi počasí: zdroje dat pro…\" — které tvrzení je správné? (11)",
                "options": [
                  {
                    "text": "počasí – okamžitý stav atmosféry (ve vrstvě od zemského povrchu po tropopauzu), charakterizované souborem meteorologických prvků (např. teplota, tlak a vlhkost…",
                    "correct": false
                  },
                  {
                    "text": "Vzduchová hmota Symbol Oblast vzniku Arktická A Severní ledový oceán a přilehlá pevnina Antarktická AA Antarktida Polární P kontinenty a oceány, 50-60º z.š.",
                    "correct": true
                  },
                  {
                    "text": "povětrnost – ráz počasí během několika dnů",
                    "correct": false
                  },
                  {
                    "text": "6.1 Putující cyklony a anticyklony",
                    "correct": false
                  }
                ],
                "explanation": "Vzduchová hmota Symbol Oblast vzniku Arktická A Severní ledový oceán a přilehlá pevnina Antarktická AA Antarktida Polární P kontinenty a oceány, 50-60º z.š."
              },
              {
                "question": "K tématu „Základy předpovědi počasí: zdroje dat pro…\" — které tvrzení je správné? (12)",
                "options": [
                  {
                    "text": "počasí – okamžitý stav atmosféry (ve vrstvě od zemského povrchu po tropopauzu), charakterizované souborem meteorologických prvků (např. teplota, tlak a vlhkost…",
                    "correct": false
                  },
                  {
                    "text": "Tropická T kontinenty a oceány, 20-35º z.š.",
                    "correct": true
                  },
                  {
                    "text": "povětrnost – ráz počasí během několika dnů",
                    "correct": false
                  },
                  {
                    "text": "6.1 Putující cyklony a anticyklony",
                    "correct": false
                  }
                ],
                "explanation": "Tropická T kontinenty a oceány, 20-35º z.š."
              },
              {
                "question": "K tématu „Základy předpovědi počasí: zdroje dat pro…\" — které tvrzení je správné? (13)",
                "options": [
                  {
                    "text": "počasí – okamžitý stav atmosféry (ve vrstvě od zemského povrchu po tropopauzu), charakterizované souborem meteorologických prvků (např. teplota, tlak a vlhkost…",
                    "correct": false
                  },
                  {
                    "text": "Ekvatoriální E oceány blízko rovníku",
                    "correct": true
                  },
                  {
                    "text": "povětrnost – ráz počasí během několika dnů",
                    "correct": false
                  },
                  {
                    "text": "6.1 Putující cyklony a anticyklony",
                    "correct": false
                  }
                ],
                "explanation": "Ekvatoriální E oceány blízko rovníku"
              },
              {
                "question": "K tématu „Základy předpovědi počasí: zdroje dat pro…\" — které tvrzení je správné? (14)",
                "options": [
                  {
                    "text": "počasí – okamžitý stav atmosféry (ve vrstvě od zemského povrchu po tropopauzu), charakterizované souborem meteorologických prvků (např. teplota, tlak a vlhkost…",
                    "correct": false
                  },
                  {
                    "text": "dělení vzduchových hmot podle typu aktivního povrchu, nad nímž vznikají: mořské (m) – nad oceány a kontinentální (c) – nad pevninou",
                    "correct": true
                  },
                  {
                    "text": "povětrnost – ráz počasí během několika dnů",
                    "correct": false
                  },
                  {
                    "text": "6.1 Putující cyklony a anticyklony",
                    "correct": false
                  }
                ],
                "explanation": "dělení vzduchových hmot podle typu aktivního povrchu, nad nímž vznikají: mořské (m) – nad oceány a kontinentální (c) – nad pevninou"
              },
              {
                "question": "K tématu „Základy předpovědi počasí: zdroje dat pro…\" — které tvrzení je správné? (15)",
                "options": [
                  {
                    "text": "počasí – okamžitý stav atmosféry (ve vrstvě od zemského povrchu po tropopauzu), charakterizované souborem meteorologických prvků (např. teplota, tlak a vlhkost…",
                    "correct": false
                  },
                  {
                    "text": "a) teplé – při přemisťování do dané oblasti se ochlazují, přinášejí oteplení, stabilní zvrstvení nebo inverze b) studené - při přemisťování do dané oblasti se …",
                    "correct": true
                  },
                  {
                    "text": "povětrnost – ráz počasí během několika dnů",
                    "correct": false
                  },
                  {
                    "text": "6.1 Putující cyklony a anticyklony",
                    "correct": false
                  }
                ],
                "explanation": "a) teplé – při přemisťování do dané oblasti se ochlazují, přinášejí oteplení, stabilní zvrstvení nebo inverze b) studené - při přemisťování do dané oblasti se …"
              },
              {
                "question": "K tématu „Základy předpovědi počasí: zdroje dat pro…\" — které tvrzení je správné? (16)",
                "options": [
                  {
                    "text": "počasí – okamžitý stav atmosféry (ve vrstvě od zemského povrchu po tropopauzu), charakterizované souborem meteorologických prvků (např. teplota, tlak a vlhkost…",
                    "correct": false
                  },
                  {
                    "text": "6.1.2 Studená, teplá a oklusní fronta",
                    "correct": true
                  },
                  {
                    "text": "povětrnost – ráz počasí během několika dnů",
                    "correct": false
                  },
                  {
                    "text": "6.1 Putující cyklony a anticyklony",
                    "correct": false
                  }
                ],
                "explanation": "6.1.2 Studená, teplá a oklusní fronta"
              },
              {
                "question": "K tématu „Základy předpovědi počasí: zdroje dat pro…\" — které tvrzení je správné? (17)",
                "options": [
                  {
                    "text": "počasí – okamžitý stav atmosféry (ve vrstvě od zemského povrchu po tropopauzu), charakterizované souborem meteorologických prvků (např. teplota, tlak a vlhkost…",
                    "correct": false
                  },
                  {
                    "text": "fronta – ostře vyjádřená hranice oddělující jednu vzduchovou hmotu od druhé",
                    "correct": true
                  },
                  {
                    "text": "povětrnost – ráz počasí během několika dnů",
                    "correct": false
                  },
                  {
                    "text": "6.1 Putující cyklony a anticyklony",
                    "correct": false
                  }
                ],
                "explanation": "fronta – ostře vyjádřená hranice oddělující jednu vzduchovou hmotu od druhé"
              },
              {
                "question": "K tématu „Základy předpovědi počasí: zdroje dat pro…\" — které tvrzení je správné? (18)",
                "options": [
                  {
                    "text": "počasí – okamžitý stav atmosféry (ve vrstvě od zemského povrchu po tropopauzu), charakterizované souborem meteorologických prvků (např. teplota, tlak a vlhkost…",
                    "correct": false
                  },
                  {
                    "text": "pohybuje-li se jedna vzduchová hmota do druhé, fronta svírá malý úhel s povrchem Obr.",
                    "correct": true
                  },
                  {
                    "text": "povětrnost – ráz počasí během několika dnů",
                    "correct": false
                  },
                  {
                    "text": "6.1 Putující cyklony a anticyklony",
                    "correct": false
                  }
                ],
                "explanation": "pohybuje-li se jedna vzduchová hmota do druhé, fronta svírá malý úhel s povrchem Obr."
              },
              {
                "question": "K tématu „Základy předpovědi počasí: zdroje dat pro…\" — které tvrzení je správné? (19)",
                "options": [
                  {
                    "text": "počasí – okamžitý stav atmosféry (ve vrstvě od zemského povrchu po tropopauzu), charakterizované souborem meteorologických prvků (např. teplota, tlak a vlhkost…",
                    "correct": false
                  },
                  {
                    "text": "6.3/138 – SS + 2.49/55 + 2.50/56 z Netopil: Fyzická geografie I",
                    "correct": true
                  },
                  {
                    "text": "povětrnost – ráz počasí během několika dnů",
                    "correct": false
                  },
                  {
                    "text": "6.1 Putující cyklony a anticyklony",
                    "correct": false
                  }
                ],
                "explanation": "6.3/138 – SS + 2.49/55 + 2.50/56 z Netopil: Fyzická geografie I"
              },
              {
                "question": "K tématu „Základy předpovědi počasí: zdroje dat pro…\" — které tvrzení je správné? (20)",
                "options": [
                  {
                    "text": "počasí – okamžitý stav atmosféry (ve vrstvě od zemského povrchu po tropopauzu), charakterizované souborem meteorologických prvků (např. teplota, tlak a vlhkost…",
                    "correct": false
                  },
                  {
                    "text": "studená fronta – klín postupujícího studeného vzduchu, vynucený výstup vzduchu – cumulonimby Cb, bouřky, přeháňky Obr.",
                    "correct": true
                  },
                  {
                    "text": "povětrnost – ráz počasí během několika dnů",
                    "correct": false
                  },
                  {
                    "text": "6.1 Putující cyklony a anticyklony",
                    "correct": false
                  }
                ],
                "explanation": "studená fronta – klín postupujícího studeného vzduchu, vynucený výstup vzduchu – cumulonimby Cb, bouřky, přeháňky Obr."
              }
            ]
          }
        },
        {
          "id": "z0026p-7-zmeny-a-kolisani-klimatu-zakladni-klimatotvorn-6",
          "title": "7. Změny a kolísání klimatu: základní klimatotvorné faktory (sluneční faktor, vulkanická činnost, interakce oceán-atmosféra, skleníkový efekt, aerosoly). Minulé a současné změny klimatu. Klimatické scénáře. Možné dopady klimatické změny.",
          "summary": "7. Změny a kolísání klimatu: základní klimatotvorné faktory (sluneční faktor, vulkanická činnost, interakce oceán-atmosféra, skleníkový e…",
          "minutes": 25,
          "sectionTitle": "Témata prof. Brázdila",
          "available": true,
          "blocks": [
            {
              "type": "heading",
              "text": "Témata prof. Brázdila"
            },
            {
              "type": "callout",
              "label": "Okruh",
              "text": "7. Změny a kolísání klimatu: základní klimatotvorné faktory (sluneční faktor, vulkanická činnost, interakce oceán-atmosféra, skleníkový efekt, aerosoly). Minulé a současné změny klimatu. Klimatické scénáře. Možné dopady klimatické změny."
            },
            {
              "type": "callout",
              "label": "Jak číst tuto lekci",
              "text": "Text je výtah ze skripta a přednášek — použij ho jako mapu k učení. Detaily a obrázky najdeš v PDF/PPT v materiálech lekce."
            },
            {
              "type": "heading",
              "text": "Otázky a okruhy — FG_6"
            },
            {
              "type": "list",
              "label": "Klíčové body",
              "items": [
                "Globální klimata • klima – průměrné počasí v dané oblasti, které lze vyjádřit charakteristikami popisujícími stav atmosféry (např.",
                "teplota, tlak, oblaka atd.) • nejdostupnější klimatické charakteristiky se týkají ve světovém měřítku teploty vzduchu a srážek, které ovlivňují přirozenou vegetaci, pěstování zemědělských plodin, vývoj půd, geomorfologické procesy atd.",
                "klimata definovaná na základě teploty a srážek tak umožňují charakterizovat i mnohé rysy přírodního prostředí • klíčové poznatky:",
                "a) roční chod teploty vzduchu závisí na zeměpisné šířce (v návaznosti na insolaci)",
                "b) stanice v oceánském klimatu mají menší roční amplitudu teploty než stanice v kontinentálním klimatu (odlišnost povrchů oceán x atmosféra)",
                "c) teplý vzduch pojme více vlhkosti než studený vzduch (teplejší oblasti mají více srážek)"
              ]
            },
            {
              "type": "paragraph",
              "text": "7.1 Globální srážky Obr. 7.1/156-157 – SS nebo jiná mapa rozložení srážek"
            },
            {
              "type": "list",
              "label": "Klíčové body",
              "items": [
                "izohyeta – čára spojující místa se stejným množstvím srážek • mnoho srážek v pásu podél rovníku (Jižní Amerika, Afrika, jihovýchodní Asie) – konvektivní srážky v TZK; zvláště velké srážky v jihovýchodní Asii – letní monzun • v oblasti pasátů velké orografické srážky v návětří hor • ve středních šířkách větší srážky při západních okrajích kontinentů (cyklonální srážky) • suché oblasti na západě Jižní Ameriky (Chile), při západním pobřeží jižní Afriky a na americkém jihozápadu (oblasti pod vlivem východních částí subtropických anticyklon) • suché oblasti tvoří široký pás táhnoucí se od Sahary přes Střední Východ do střední Asie (sestupné pohyby subtropického pásma vysokého tlaku a velká vzdálenost od oceánu v případě střední Asie) • vysoké šířky – málo srážek"
              ]
            },
            {
              "type": "subheading",
              "text": "7.2 Klimatické klasifikace",
              "label": "2"
            },
            {
              "type": "paragraph",
              "text": "pomocí klimatických typů lze klasifikovat klimata z globálního hlediska:"
            },
            {
              "type": "list",
              "items": [
                "a) konvenční klasifikace – vymezují typy klimatu podle předem konvenčně stanovených mezních hodnot jednoho nebo více meteorologických prvků (např.teplota vzduchu, srážky)",
                "b) genetické klasifikace – opírají se o cirkulační klimatotvorné faktory (např.",
                "vzduchové hmoty, fronty) a klasifikační metoda je i metodou výkladu vzniku určitého klimatické typu"
              ]
            },
            {
              "type": "subheading",
              "text": "7.2.1 Köppenova klasifikace",
              "label": "3"
            },
            {
              "type": "list",
              "items": [
                "klasifikace klimatu od Wladimira Köppena (s různými následnými modifikacemi) je nejznámější konvenční klimatickou klasifikací → základ teplota vzduchu a srážky → klimatické hranice by měly odpovídat přibližně hranicím mezi vegetačními typy",
                "hlavní klimatické pásy: a) A"
              ]
            },
            {
              "type": "list",
              "items": [
                "pás vlhkého tropického klimatu (průměrná teplota každého měsíce nad 18 ºC, bez zimního období, velké srážky převažující výpar)",
                "b) B – pás suchého klimatu (výpar větší než srážky, bez přebytku vody – žádné stálé toky)",
                "c) C – pás mírně teplého klimatu (omezen izotermou 18 ºC nejteplejšího a –3 ºC nejchladnějšího měsíce, vyjádřená sezonalita)",
                "pás mírně studeného (boreálního) klimatu (omezen izotermou 10 ºC nejteplejšího a –3 ºC nejchladnějšího měsíce)",
                "e) E – pás polárního klimatu (teplota nejteplejšího měsíce pod 10 ºC) Obr.",
                "pásy A, C, D a E vymezeny podle teplotního hlediska, pás B podle vztahu výpar – srážky • pásy A, C, D mají dostatek tepla a vláhy pro vzrůst dřevin • k označení klimatických typů jako druhé písmeno Köppen užil:",
                "a) S – semiaridní (stepní)",
                "b) W – aridní (pouštní)",
                "c) f – vlhké, dostatek srážek ve všech měsících",
                "d) w – suché období v zimě",
                "e) s – suché období v létě",
                "f) m – monzunové deště • kombinací obou skupin vymezil 12 různých klimat: 1) Af – klima tropického deštného lesa (s rovnoměrným rozložením srážek během roku) 2) Am – monzunová verze Af 3) Aw – klima tropických savan (s výrazně vyjádřenou suchou periodou v zimě)"
              ]
            },
            {
              "type": "paragraph",
              "text": "4) BS – klima stepí 5) BW – klima pouští Obr. S7.4/162 – SS"
            },
            {
              "type": "list",
              "label": "Klíčové body",
              "items": [
                "6) Cf – mírně teplé klima s rovnoměrným rozložením srážek během roku 7) Cw – mírně teplé klima se suchou zimou 8) Cs – mírně teplé klima se suchým létem 9) Df – mírně studené klima s rovnoměrným rozložením srážek během roku 10) Dw – mírně studené klima se suchou zimou 11) ET – klima tundry 12) EF – klima stálého mrazu • k další detailizaci klimatických typů použita písmena a – s horkým létem, b – s teplým létem, c – s chladnějším, kratším létem, d – s velmi chladnou zimou, h – suché-horké, k – suché-chladné Obr.",
                "Globální klimata • klima – průměrné počasí v dané oblasti, které lze vyjádřit charakteristikami popisujícími stav atmosféry (např.",
                "teplota, tlak, oblaka atd.) • nejdostupnější klimatické charakteristiky se týkají ve světovém měřítku teploty vzduchu a srážek, které ovlivňují přirozenou vegetaci, pěstování zemědělských plodin, vývoj půd, geomorfologické procesy atd.",
                "klimata definovaná na základě teploty a srážek tak umožňují charakterizovat i mnohé rysy přírodního prostředí • klíčové poznatky:",
                "a) roční chod teploty vzduchu závisí na zeměpisné šířce (v návaznosti na insolaci)",
                "b) stanice v oceánském klimatu mají menší roční amplitudu teploty než stanice v kontinentálním klimatu (odlišnost povrchů oceán x atmosféra)",
                "c) teplý vzduch pojme více vlhkosti než studený vzduch (teplejší oblasti mají více srážek)",
                "izohyeta – čára spojující místa se stejným množstvím srážek • mnoho srážek v pásu podél rovníku (Jižní Amerika, Afrika, jihovýchodní Asie) – konvektivní srážky v TZK; zvláště velké srážky v jihovýchodní Asii – letní monzun • v oblasti pasátů velké orografické srážky v návětří hor • ve středních šířkách větší srážky při západních okrajích kontinentů (cyklonální srážky) • suché oblasti na západě Jižní Ameriky (Chile), při západním pobřeží jižní Afriky a na americkém jihozápadu (oblasti pod vlivem východních částí subtropických anticyklon) • suché oblasti tvoří široký pás táhnoucí se od Sahary přes Střední Východ do střední Asie (sestupné pohyby subtropického pásma vysokého tlaku a velká vzdálenost od oceánu v případě střední Asie) • vysoké šířky – málo srážek"
              ]
            },
            {
              "type": "subheading",
              "text": "7.2 Klimatické klasifikace",
              "label": "2"
            },
            {
              "type": "paragraph",
              "text": "pomocí klimatických typů lze klasifikovat klimata z globálního hlediska:"
            },
            {
              "type": "list",
              "items": [
                "a) konvenční klasifikace – vymezují typy klimatu podle předem konvenčně stanovených mezních hodnot jednoho nebo více meteorologických prvků (např.teplota vzduchu, srážky)",
                "b) genetické klasifikace – opírají se o cirkulační klimatotvorné faktory (např.",
                "vzduchové hmoty, fronty) a klasifikační metoda je i metodou výkladu vzniku určitého klimatické typu"
              ]
            },
            {
              "type": "subheading",
              "text": "7.2.1 Köppenova klasifikace",
              "label": "3"
            },
            {
              "type": "list",
              "items": [
                "klasifikace klimatu od Wladimira Köppena (s různými následnými modifikacemi) je nejznámější konvenční klimatickou klasifikací → základ teplota vzduchu a srážky → klimatické hranice by měly odpovídat přibližně hranicím mezi vegetačními typy",
                "hlavní klimatické pásy: a) A"
              ]
            },
            {
              "type": "list",
              "items": [
                "pás vlhkého tropického klimatu (průměrná teplota každého měsíce nad 18 ºC, bez zimního období, velké srážky převažující výpar)",
                "b) B – pás suchého klimatu (výpar větší než srážky, bez přebytku vody – žádné stálé toky)",
                "c) C – pás mírně teplého klimatu (omezen izotermou 18 ºC nejteplejšího a –3 ºC nejchladnějšího měsíce, vyjádřená sezonalita)",
                "pás mírně studeného (boreálního) klimatu (omezen izotermou 10 ºC nejteplejšího a –3 ºC nejchladnějšího měsíce)",
                "e) E – pás polárního klimatu (teplota nejteplejšího měsíce pod 10 ºC) Obr.",
                "pásy A, C, D a E vymezeny podle teplotního hlediska, pás B podle vztahu výpar – srážky • pásy A, C, D mají dostatek tepla a vláhy pro vzrůst dřevin • k označení klimatických typů jako druhé písmeno Köppen užil:",
                "a) S – semiaridní (stepní)",
                "b) W – aridní (pouštní)",
                "c) f – vlhké, dostatek srážek ve všech měsících",
                "d) w – suché období v zimě",
                "e) s – suché období v létě",
                "f) m – monzunové deště • kombinací obou skupin vymezil 12 různých klimat: 1) Af – klima tropického deštného lesa (s rovnoměrným rozložením srážek během roku) 2) Am – monzunová verze Af 3) Aw – klima tropických savan (s výrazně vyjádřenou suchou periodou v zimě)"
              ]
            },
            {
              "type": "list",
              "label": "Doporučený postup",
              "items": [
                "Projdi výtah a vlastní poznámky z přednášky",
                "Otevři přiložené PDF/PPT v materiálech lekce",
                "Propoj s předchozími a navazujícími okruhy v osnově"
              ]
            }
          ],
          "resources": [
            {
              "kind": "document",
              "title": "FG_6 — okruhy Brázdil",
              "url": "/materials/geografie-kartografie/z0026p/FG_6.doc",
              "source": "Brázdil"
            },
            {
              "kind": "link",
              "title": "IS MUNI — Fyzická geografie",
              "url": "https://is.muni.cz/predmet/sci/Z0026p",
              "source": "IS MUNI"
            }
          ],
          "quiz": {
            "title": "Kvíz: Klima a klasifikace",
            "questions": [
              {
                "question": "Köppenova klasifikace vychází primárně z…",
                "options": [
                  {
                    "text": "teploty a srážek",
                    "correct": true
                  },
                  {
                    "text": "jen z nadmořské výšky",
                    "correct": false
                  },
                  {
                    "text": "jen z tlaku",
                    "correct": false
                  },
                  {
                    "text": "jen z vegetace bez měření",
                    "correct": false
                  }
                ],
                "explanation": "Hranice pásů odpovídají typům vegetace a distribuci srážek."
              },
              {
                "question": "Který Köppenův pás je charakteristický suchým klimatem (výpar > srážky)?",
                "options": [
                  {
                    "text": "B",
                    "correct": true
                  },
                  {
                    "text": "A",
                    "correct": false
                  },
                  {
                    "text": "C",
                    "correct": false
                  },
                  {
                    "text": "E",
                    "correct": false
                  }
                ],
                "explanation": "Pás A = tropický, C = mírný, E = polární."
              },
              {
                "question": "Co je izohyeta?",
                "options": [
                  {
                    "text": "Čára stejného ročního množství srážek",
                    "correct": true
                  },
                  {
                    "text": "Čára stejné teploty",
                    "correct": false
                  },
                  {
                    "text": "Čára stejného tlaku",
                    "correct": false
                  },
                  {
                    "text": "Čára stejné nadmořské výšky",
                    "correct": false
                  }
                ],
                "explanation": "Analogicky k izotermě nebo izobarě."
              },
              {
                "question": "Oceánské klima má oproti kontinentálnímu…",
                "options": [
                  {
                    "text": "menší roční amplitudu teplot",
                    "correct": true
                  },
                  {
                    "text": "větší roční amplitudu teplot",
                    "correct": false
                  },
                  {
                    "text": "méně srážek",
                    "correct": false
                  },
                  {
                    "text": "nižší vlhkost vzduchu",
                    "correct": false
                  }
                ],
                "explanation": "Moře moderuje teplotní extrémy pevniny."
              },
              {
                "question": "Klima v geografickém pojetí je…",
                "options": [
                  {
                    "text": "dlouhodobý charakter počasí vyjádřený průměrnými hodnotami prvků",
                    "correct": true
                  },
                  {
                    "text": "okamžitý stav atmosféry",
                    "correct": false
                  },
                  {
                    "text": "pouze teplota v červenci",
                    "correct": false
                  },
                  {
                    "text": "výhradně globální oteplování",
                    "correct": false
                  }
                ],
                "explanation": "Klima vyžaduje dlouhé časové řady pozorování."
              },
              {
                "question": "Které tvrzení patří k okruhu „Změny a kolísání klimatu: základní klimatotvorn…\"?",
                "options": [
                  {
                    "text": "a) roční chod teploty vzduchu závisí na zeměpisné šířce (v návaznosti na insolaci)",
                    "correct": false
                  },
                  {
                    "text": "klimata definovaná na základě teploty a srážek tak umožňují charakterizovat i mnohé rysy přírodního prostředí • klíčové poznatky:",
                    "correct": false
                  },
                  {
                    "text": "Globální klimata • klima – průměrné počasí v dané oblasti, které lze vyjádřit charakteristikami popisujícími stav atmosféry (např.",
                    "correct": true
                  },
                  {
                    "text": "teplota, tlak, oblaka atd.) • nejdostupnější klimatické charakteristiky se týkají ve světovém měřítku teploty vzduchu a srážek, které ovlivňují přirozenou vegetaci, pěstování země…",
                    "correct": false
                  }
                ],
                "explanation": "Globální klimata • klima – průměrné počasí v dané oblasti, které lze vyjádřit charakteristikami popisujícími stav atmosféry (např."
              },
              {
                "question": "Které tvrzení odpovídá obsahu lekce?",
                "options": [
                  {
                    "text": "Výklad k tomuto okruhu neobsahuje tuto informaci.",
                    "correct": false
                  },
                  {
                    "text": "7.1 Globální srážky Obr. 7.1/156-157 – SS nebo jiná mapa rozložení srážek",
                    "correct": true
                  },
                  {
                    "text": "Toto tvrzení nelze z výkladu lekce ověřit.",
                    "correct": false
                  },
                  {
                    "text": "Globální klimata • klima – průměrné počasí v dané oblasti, které lze vyjádřit charakteristikami popisujícími stav atmosféry (např.",
                    "correct": false
                  }
                ],
                "explanation": "Správně: 7.1 Globální srážky Obr. 7.1/156-157 – SS nebo jiná mapa rozložení srážek"
              },
              {
                "question": "K tématu „Změny a kolísání klimatu: základní klimat…\" — které tvrzení je správné? (8)",
                "options": [
                  {
                    "text": "Globální klimata • klima – průměrné počasí v dané oblasti, které lze vyjádřit charakteristikami popisujícími stav atmosféry (např.",
                    "correct": false
                  },
                  {
                    "text": "klimata definovaná na základě teploty a srážek tak umožňují charakterizovat i mnohé rysy přírodního prostředí • klíčové poznatky:",
                    "correct": false
                  },
                  {
                    "text": "7.2 Klimatické klasifikace",
                    "correct": true
                  },
                  {
                    "text": "teplota, tlak, oblaka atd.) • nejdostupnější klimatické charakteristiky se týkají ve světovém měřítku teploty vzduchu a srážek, které ovlivňují přirozenou vege…",
                    "correct": false
                  }
                ],
                "explanation": "7.2 Klimatické klasifikace"
              },
              {
                "question": "K tématu „Změny a kolísání klimatu: základní klimat…\" — které tvrzení je správné? (9)",
                "options": [
                  {
                    "text": "Globální klimata • klima – průměrné počasí v dané oblasti, které lze vyjádřit charakteristikami popisujícími stav atmosféry (např.",
                    "correct": false
                  },
                  {
                    "text": "klimata definovaná na základě teploty a srážek tak umožňují charakterizovat i mnohé rysy přírodního prostředí • klíčové poznatky:",
                    "correct": false
                  },
                  {
                    "text": "pomocí klimatických typů lze klasifikovat klimata z globálního hlediska:",
                    "correct": true
                  },
                  {
                    "text": "teplota, tlak, oblaka atd.) • nejdostupnější klimatické charakteristiky se týkají ve světovém měřítku teploty vzduchu a srážek, které ovlivňují přirozenou vege…",
                    "correct": false
                  }
                ],
                "explanation": "pomocí klimatických typů lze klasifikovat klimata z globálního hlediska:"
              },
              {
                "question": "K tématu „Změny a kolísání klimatu: základní klimat…\" — které tvrzení je správné? (10)",
                "options": [
                  {
                    "text": "Globální klimata • klima – průměrné počasí v dané oblasti, které lze vyjádřit charakteristikami popisujícími stav atmosféry (např.",
                    "correct": false
                  },
                  {
                    "text": "a) konvenční klasifikace – vymezují typy klimatu podle předem konvenčně stanovených mezních hodnot jednoho nebo více meteorologických prvků (např.teplota vzduc…",
                    "correct": true
                  },
                  {
                    "text": "teplota, tlak, oblaka atd.) • nejdostupnější klimatické charakteristiky se týkají ve světovém měřítku teploty vzduchu a srážek, které ovlivňují přirozenou vege…",
                    "correct": false
                  },
                  {
                    "text": "klimata definovaná na základě teploty a srážek tak umožňují charakterizovat i mnohé rysy přírodního prostředí • klíčové poznatky:",
                    "correct": false
                  }
                ],
                "explanation": "a) konvenční klasifikace – vymezují typy klimatu podle předem konvenčně stanovených mezních hodnot jednoho nebo více meteorologických prvků (např.teplota vzduc…"
              },
              {
                "question": "K tématu „Změny a kolísání klimatu: základní klimat…\" — které tvrzení je správné? (11)",
                "options": [
                  {
                    "text": "Globální klimata • klima – průměrné počasí v dané oblasti, které lze vyjádřit charakteristikami popisujícími stav atmosféry (např.",
                    "correct": false
                  },
                  {
                    "text": "b) genetické klasifikace – opírají se o cirkulační klimatotvorné faktory (např.",
                    "correct": true
                  },
                  {
                    "text": "teplota, tlak, oblaka atd.) • nejdostupnější klimatické charakteristiky se týkají ve světovém měřítku teploty vzduchu a srážek, které ovlivňují přirozenou vege…",
                    "correct": false
                  },
                  {
                    "text": "klimata definovaná na základě teploty a srážek tak umožňují charakterizovat i mnohé rysy přírodního prostředí • klíčové poznatky:",
                    "correct": false
                  }
                ],
                "explanation": "b) genetické klasifikace – opírají se o cirkulační klimatotvorné faktory (např."
              },
              {
                "question": "K tématu „Změny a kolísání klimatu: základní klimat…\" — které tvrzení je správné? (12)",
                "options": [
                  {
                    "text": "Globální klimata • klima – průměrné počasí v dané oblasti, které lze vyjádřit charakteristikami popisujícími stav atmosféry (např.",
                    "correct": false
                  },
                  {
                    "text": "vzduchové hmoty, fronty) a klasifikační metoda je i metodou výkladu vzniku určitého klimatické typu",
                    "correct": true
                  },
                  {
                    "text": "teplota, tlak, oblaka atd.) • nejdostupnější klimatické charakteristiky se týkají ve světovém měřítku teploty vzduchu a srážek, které ovlivňují přirozenou vege…",
                    "correct": false
                  },
                  {
                    "text": "klimata definovaná na základě teploty a srážek tak umožňují charakterizovat i mnohé rysy přírodního prostředí • klíčové poznatky:",
                    "correct": false
                  }
                ],
                "explanation": "vzduchové hmoty, fronty) a klasifikační metoda je i metodou výkladu vzniku určitého klimatické typu"
              },
              {
                "question": "K tématu „Změny a kolísání klimatu: základní klimat…\" — které tvrzení je správné? (13)",
                "options": [
                  {
                    "text": "Globální klimata • klima – průměrné počasí v dané oblasti, které lze vyjádřit charakteristikami popisujícími stav atmosféry (např.",
                    "correct": false
                  },
                  {
                    "text": "7.2.1 Köppenova klasifikace",
                    "correct": true
                  },
                  {
                    "text": "teplota, tlak, oblaka atd.) • nejdostupnější klimatické charakteristiky se týkají ve světovém měřítku teploty vzduchu a srážek, které ovlivňují přirozenou vege…",
                    "correct": false
                  },
                  {
                    "text": "klimata definovaná na základě teploty a srážek tak umožňují charakterizovat i mnohé rysy přírodního prostředí • klíčové poznatky:",
                    "correct": false
                  }
                ],
                "explanation": "7.2.1 Köppenova klasifikace"
              },
              {
                "question": "K tématu „Změny a kolísání klimatu: základní klimat…\" — které tvrzení je správné? (14)",
                "options": [
                  {
                    "text": "Globální klimata • klima – průměrné počasí v dané oblasti, které lze vyjádřit charakteristikami popisujícími stav atmosféry (např.",
                    "correct": false
                  },
                  {
                    "text": "klasifikace klimatu od Wladimira Köppena (s různými následnými modifikacemi) je nejznámější konvenční klimatickou klasifikací → základ teplota vzduchu a srážky…",
                    "correct": true
                  },
                  {
                    "text": "teplota, tlak, oblaka atd.) • nejdostupnější klimatické charakteristiky se týkají ve světovém měřítku teploty vzduchu a srážek, které ovlivňují přirozenou vege…",
                    "correct": false
                  },
                  {
                    "text": "klimata definovaná na základě teploty a srážek tak umožňují charakterizovat i mnohé rysy přírodního prostředí • klíčové poznatky:",
                    "correct": false
                  }
                ],
                "explanation": "klasifikace klimatu od Wladimira Köppena (s různými následnými modifikacemi) je nejznámější konvenční klimatickou klasifikací → základ teplota vzduchu a srážky…"
              },
              {
                "question": "K tématu „Změny a kolísání klimatu: základní klimat…\" — které tvrzení je správné? (15)",
                "options": [
                  {
                    "text": "Globální klimata • klima – průměrné počasí v dané oblasti, které lze vyjádřit charakteristikami popisujícími stav atmosféry (např.",
                    "correct": false
                  },
                  {
                    "text": "hlavní klimatické pásy: a) A",
                    "correct": true
                  },
                  {
                    "text": "teplota, tlak, oblaka atd.) • nejdostupnější klimatické charakteristiky se týkají ve světovém měřítku teploty vzduchu a srážek, které ovlivňují přirozenou vege…",
                    "correct": false
                  },
                  {
                    "text": "klimata definovaná na základě teploty a srážek tak umožňují charakterizovat i mnohé rysy přírodního prostředí • klíčové poznatky:",
                    "correct": false
                  }
                ],
                "explanation": "hlavní klimatické pásy: a) A"
              },
              {
                "question": "K tématu „Změny a kolísání klimatu: základní klimat…\" — které tvrzení je správné? (16)",
                "options": [
                  {
                    "text": "Globální klimata • klima – průměrné počasí v dané oblasti, které lze vyjádřit charakteristikami popisujícími stav atmosféry (např.",
                    "correct": false
                  },
                  {
                    "text": "pás vlhkého tropického klimatu (průměrná teplota každého měsíce nad 18 ºC, bez zimního období, velké srážky převažující výpar)",
                    "correct": true
                  },
                  {
                    "text": "teplota, tlak, oblaka atd.) • nejdostupnější klimatické charakteristiky se týkají ve světovém měřítku teploty vzduchu a srážek, které ovlivňují přirozenou vege…",
                    "correct": false
                  },
                  {
                    "text": "klimata definovaná na základě teploty a srážek tak umožňují charakterizovat i mnohé rysy přírodního prostředí • klíčové poznatky:",
                    "correct": false
                  }
                ],
                "explanation": "pás vlhkého tropického klimatu (průměrná teplota každého měsíce nad 18 ºC, bez zimního období, velké srážky převažující výpar)"
              },
              {
                "question": "K tématu „Změny a kolísání klimatu: základní klimat…\" — které tvrzení je správné? (17)",
                "options": [
                  {
                    "text": "Globální klimata • klima – průměrné počasí v dané oblasti, které lze vyjádřit charakteristikami popisujícími stav atmosféry (např.",
                    "correct": false
                  },
                  {
                    "text": "b) B – pás suchého klimatu (výpar větší než srážky, bez přebytku vody – žádné stálé toky)",
                    "correct": true
                  },
                  {
                    "text": "teplota, tlak, oblaka atd.) • nejdostupnější klimatické charakteristiky se týkají ve světovém měřítku teploty vzduchu a srážek, které ovlivňují přirozenou vege…",
                    "correct": false
                  },
                  {
                    "text": "klimata definovaná na základě teploty a srážek tak umožňují charakterizovat i mnohé rysy přírodního prostředí • klíčové poznatky:",
                    "correct": false
                  }
                ],
                "explanation": "b) B – pás suchého klimatu (výpar větší než srážky, bez přebytku vody – žádné stálé toky)"
              },
              {
                "question": "K tématu „Změny a kolísání klimatu: základní klimat…\" — které tvrzení je správné? (18)",
                "options": [
                  {
                    "text": "Globální klimata • klima – průměrné počasí v dané oblasti, které lze vyjádřit charakteristikami popisujícími stav atmosféry (např.",
                    "correct": false
                  },
                  {
                    "text": "c) C – pás mírně teplého klimatu (omezen izotermou 18 ºC nejteplejšího a –3 ºC nejchladnějšího měsíce, vyjádřená sezonalita)",
                    "correct": true
                  },
                  {
                    "text": "teplota, tlak, oblaka atd.) • nejdostupnější klimatické charakteristiky se týkají ve světovém měřítku teploty vzduchu a srážek, které ovlivňují přirozenou vege…",
                    "correct": false
                  },
                  {
                    "text": "klimata definovaná na základě teploty a srážek tak umožňují charakterizovat i mnohé rysy přírodního prostředí • klíčové poznatky:",
                    "correct": false
                  }
                ],
                "explanation": "c) C – pás mírně teplého klimatu (omezen izotermou 18 ºC nejteplejšího a –3 ºC nejchladnějšího měsíce, vyjádřená sezonalita)"
              },
              {
                "question": "K tématu „Změny a kolísání klimatu: základní klimat…\" — které tvrzení je správné? (19)",
                "options": [
                  {
                    "text": "Globální klimata • klima – průměrné počasí v dané oblasti, které lze vyjádřit charakteristikami popisujícími stav atmosféry (např.",
                    "correct": false
                  },
                  {
                    "text": "pás mírně studeného (boreálního) klimatu (omezen izotermou 10 ºC nejteplejšího a –3 ºC nejchladnějšího měsíce)",
                    "correct": true
                  },
                  {
                    "text": "teplota, tlak, oblaka atd.) • nejdostupnější klimatické charakteristiky se týkají ve světovém měřítku teploty vzduchu a srážek, které ovlivňují přirozenou vege…",
                    "correct": false
                  },
                  {
                    "text": "klimata definovaná na základě teploty a srážek tak umožňují charakterizovat i mnohé rysy přírodního prostředí • klíčové poznatky:",
                    "correct": false
                  }
                ],
                "explanation": "pás mírně studeného (boreálního) klimatu (omezen izotermou 10 ºC nejteplejšího a –3 ºC nejchladnějšího měsíce)"
              },
              {
                "question": "K tématu „Změny a kolísání klimatu: základní klimat…\" — které tvrzení je správné? (20)",
                "options": [
                  {
                    "text": "Globální klimata • klima – průměrné počasí v dané oblasti, které lze vyjádřit charakteristikami popisujícími stav atmosféry (např.",
                    "correct": false
                  },
                  {
                    "text": "e) E – pás polárního klimatu (teplota nejteplejšího měsíce pod 10 ºC) Obr.",
                    "correct": true
                  },
                  {
                    "text": "teplota, tlak, oblaka atd.) • nejdostupnější klimatické charakteristiky se týkají ve světovém měřítku teploty vzduchu a srážek, které ovlivňují přirozenou vege…",
                    "correct": false
                  },
                  {
                    "text": "klimata definovaná na základě teploty a srážek tak umožňují charakterizovat i mnohé rysy přírodního prostředí • klíčové poznatky:",
                    "correct": false
                  }
                ],
                "explanation": "e) E – pás polárního klimatu (teplota nejteplejšího měsíce pod 10 ºC) Obr."
              }
            ]
          }
        },
        {
          "id": "z0026p-8-hydrosfera-rozsireni-a-obeh-vody-na-zemi-hydro-7",
          "title": "8. Hydrosféra: Rozšíření a oběh vody na Zemi. Hydrologické procesy a hydrologická bilance.",
          "summary": "Studijní okruh: 8. Hydrosféra: Rozšíření a oběh vody na Zemi. Hydrologické procesy a hydrologická bilance.",
          "minutes": 15,
          "sectionTitle": "Témata prof. Brázdila",
          "available": true,
          "blocks": [
            {
              "type": "heading",
              "text": "Témata prof. Brázdila"
            },
            {
              "type": "callout",
              "label": "Okruh",
              "text": "8. Hydrosféra: Rozšíření a oběh vody na Zemi. Hydrologické procesy a hydrologická bilance."
            },
            {
              "type": "callout",
              "label": "Jak číst tuto lekci",
              "text": "Text je výtah ze skripta a přednášek — použij ho jako mapu k učení. Detaily a obrázky najdeš v PDF/PPT v materiálech lekce."
            },
            {
              "type": "heading",
              "text": "Otázky a okruhy — FG_7"
            },
            {
              "type": "paragraph",
              "text": "14. Sladká voda na kontinentech Obr. 14.1/359 – SS"
            },
            {
              "type": "list",
              "label": "Klíčové body",
              "items": [
                "povrchová a podpovrchová voda tvoří jen malou část zásob vody v hydrosféře • oběh vody: výpar z oceánů a pevniny → srážky → část srážek se vrací do atmosféry výparem z půdy, část odtéká z pevniny povrchovým nebo podzemním odtokem • hydrologie – komplexní studium vody na Zemi, tj.",
                "systému povrchových a podpovrchových vod • srážky vypadávající na povrch se dostávají do půdy infiltrací, tj.",
                "působením gravitace pronikají mezerami mezi půdními částicemi (pukliny, otvory po živočiších, prostory po ledových krystalcích aj.) • voda, která se dostane do půdy, je půdní voda a vytváří zvodnělou vrstvu (soil water belt) – voda z této vrstvy se může dostat na povrch nebo do atmosféry evapotranspirací (výpar + transpirace) Obr."
              ]
            },
            {
              "type": "paragraph",
              "text": "pokud se voda nestačí vsakovat (intenzivní déšť nebo půda je nasycena), vzniká na povrchu plošný odtok – ron → ronové rýhy → erozní rýhy • při odtoku dochází k odnosu částic a rozpustných látek a vytváření toků a řek – modelační činitel v krajině"
            },
            {
              "type": "list",
              "label": "Klíčové body",
              "items": [
                "voda proniká díky gravitaci do hloubky • podzemní voda – část podpovrchové vody, která vyplňuje zónu saturace (pásmo nasycení) • hladina podzemní vody odděluje zónu saturace od svrchní vrstvy, kde póry nejsou plně vyplněny vodou – pásmo provzdušnění (zóna aerace) – voda se zde drží díky kapilárnímu napětí (tenký film vody na povrchu minerálů) – kapilární voda • různé dráhy pronikání vody do hloubky a do toků"
              ]
            },
            {
              "type": "paragraph",
              "text": "14.1.1 Hladina podzemní vody Obr. 14.4/361"
            },
            {
              "type": "paragraph",
              "text": "hladina podzemní vody sahá nejvýše pod vrcholy kopců a rozvodí (souvisí se vsakováním) a klesá směrem k údolím, kde odpovídá úrovni řek, jezer nebo bažin (prosakování) • při srážkách roste hladina vody pod vrcholy kopců a rozvodí, v období sucha zase klesá"
            },
            {
              "type": "paragraph",
              "text": "14.1.2 Zvodnělé vrstvy • sedimentární vrstvy výrazně ovlivňují ukládání a pohyb podzemní vody • zvodnělá vrstva (zvodeň) – podloží písku nebo pískovce, obsahující volně protékající podzemní vodu • nepropustná vrstva – podloží jílů nebo břidlic obsahují málo volné vody • čočkovité břidlice vytváří zavěšené vodní těleso Obr. 14.5/362"
            },
            {
              "type": "paragraph",
              "text": "je-li propustná vrstva mezi dvěma nepropustnými, je voda v propustné vrstvě pod tlakem a při navrtání nadložní vrstvy vystřikuje nad povrch – artéská voda (studna) Obr. 14.6/362"
            },
            {
              "type": "list",
              "label": "Klíčové body",
              "items": [
                "povrchová a podpovrchová voda tvoří jen malou část zásob vody v hydrosféře • oběh vody: výpar z oceánů a pevniny → srážky → část srážek se vrací do atmosféry výparem z půdy, část odtéká z pevniny povrchovým nebo podzemním odtokem • hydrologie – komplexní studium vody na Zemi, tj.",
                "systému povrchových a podpovrchových vod • srážky vypadávající na povrch se dostávají do půdy infiltrací, tj.",
                "působením gravitace pronikají mezerami mezi půdními částicemi (pukliny, otvory po živočiších, prostory po ledových krystalcích aj.) • voda, která se dostane do půdy, je půdní voda a vytváří zvodnělou vrstvu (soil water belt) – voda z této vrstvy se může dostat na povrch nebo do atmosféry evapotranspirací (výpar + transpirace) Obr.",
                "voda proniká díky gravitaci do hloubky • podzemní voda – část podpovrchové vody, která vyplňuje zónu saturace (pásmo nasycení) • hladina podzemní vody odděluje zónu saturace od svrchní vrstvy, kde póry nejsou plně vyplněny vodou – pásmo provzdušnění (zóna aerace) – voda se zde drží díky kapilárnímu napětí (tenký film vody na povrchu minerálů) – kapilární voda • různé dráhy pronikání vody do hloubky a do toků"
              ]
            },
            {
              "type": "list",
              "label": "Doporučený postup",
              "items": [
                "Projdi výtah a vlastní poznámky z přednášky",
                "Otevři přiložené PDF/PPT v materiálech lekce",
                "Propoj s předchozími a navazujícími okruhy v osnově"
              ]
            }
          ],
          "resources": [
            {
              "kind": "document",
              "title": "FG_7 — okruhy Brázdil",
              "url": "/materials/geografie-kartografie/z0026p/FG_7.doc",
              "source": "Brázdil",
              "note": "Sdílený materiál pro více okruhů hydrologie"
            },
            {
              "kind": "link",
              "title": "IS MUNI — Fyzická geografie",
              "url": "https://is.muni.cz/predmet/sci/Z0026p",
              "source": "IS MUNI"
            }
          ],
          "quiz": {
            "title": "Kvíz: Hydrosféra a oběh vody",
            "questions": [
              {
                "question": "Co je infiltrace?",
                "options": [
                  {
                    "text": "Pronikání srážkové vody do půdy a hornin gravitací",
                    "correct": true
                  },
                  {
                    "text": "Výpar z listů rostlin",
                    "correct": false
                  },
                  {
                    "text": "Proudění vody v řece",
                    "correct": false
                  },
                  {
                    "text": "Tání ledovce",
                    "correct": false
                  }
                ],
                "explanation": "Infiltrační kapacita určuje, kolik vody půda pojme."
              },
              {
                "question": "Podzemní voda se nachází především v…",
                "options": [
                  {
                    "text": "zóně saturace",
                    "correct": true
                  },
                  {
                    "text": "pásmu provzdušnění nad hladinou",
                    "correct": false
                  },
                  {
                    "text": "atmosféře",
                    "correct": false
                  },
                  {
                    "text": "kryosféře výhradně",
                    "correct": false
                  }
                ],
                "explanation": "Nad hladinou je pásmo provzdušnění s kapilární vodou."
              },
              {
                "question": "Kdy vzniká plošný (povrchový) odtok?",
                "options": [
                  {
                    "text": "Když intenzita srážky překročí infiltrační kapacitu nebo je půda nasycená",
                    "correct": true
                  },
                  {
                    "text": "Vždy při každém dešti bez výjimky",
                    "correct": false
                  },
                  {
                    "text": "Pouze při tání sněhu v horách",
                    "correct": false
                  },
                  {
                    "text": "Jen v propustných píscích",
                    "correct": false
                  }
                ],
                "explanation": "Přebytečná voda teče po povrchu do rýh a toků."
              },
              {
                "question": "Hydrologie studuje…",
                "options": [
                  {
                    "text": "systém povrchových a podpovrchových vod na Zemi",
                    "correct": true
                  },
                  {
                    "text": "pouze oceány",
                    "correct": false
                  },
                  {
                    "text": "jen chemické složení atmosféry",
                    "correct": false
                  },
                  {
                    "text": "výhradně ledovce",
                    "correct": false
                  }
                ],
                "explanation": "Hydrologický cyklus propojuje výpar, srážky a odtok."
              },
              {
                "question": "Hladina podzemní vody je typicky nejvyšší…",
                "options": [
                  {
                    "text": "pod rozvodími a vrcholy kopců",
                    "correct": true
                  },
                  {
                    "text": "v ústí řeky",
                    "correct": false
                  },
                  {
                    "text": "na dně jezera",
                    "correct": false
                  },
                  {
                    "text": "v pouštní kotlině",
                    "correct": false
                  }
                ],
                "explanation": "V údolích klesá k úrovni toků a jezer (prosakování)."
              },
              {
                "question": "Které tvrzení odpovídá obsahu lekce?",
                "options": [
                  {
                    "text": "Výklad k tomuto okruhu neobsahuje tuto informaci.",
                    "correct": false
                  },
                  {
                    "text": "14. Sladká voda na kontinentech Obr. 14.1/359 – SS",
                    "correct": true
                  },
                  {
                    "text": "Toto tvrzení nelze z výkladu lekce ověřit.",
                    "correct": false
                  },
                  {
                    "text": "povrchová a podpovrchová voda tvoří jen malou část zásob vody v hydrosféře • oběh vody: výpar z oceánů a pevniny → srážky → část srážek se vrací do atmosféry v…",
                    "correct": false
                  }
                ],
                "explanation": "Správně: 14. Sladká voda na kontinentech Obr. 14.1/359 – SS"
              },
              {
                "question": "Které tvrzení patří k okruhu „Hydrosféra: Rozšíření a oběh vody na Zemi. Hydr…\"?",
                "options": [
                  {
                    "text": "systému povrchových a podpovrchových vod • srážky vypadávající na povrch se dostávají do půdy infiltrací, tj.",
                    "correct": false
                  },
                  {
                    "text": "povrchová a podpovrchová voda tvoří jen malou část zásob vody v hydrosféře • oběh vody: výpar z oceánů a pevniny → srážky → část srážek se vrací do atmosféry výparem z půdy, část …",
                    "correct": false
                  },
                  {
                    "text": "povrchová a podpovrchová voda tvoří jen malou část zásob vody v hydrosféře • oběh vody: výpar z oceánů a pevniny → srážky → část srážek se vrací do atmosféry výparem z půdy, část …",
                    "correct": true
                  },
                  {
                    "text": "14. Sladká voda na kontinentech Obr. 14.1/359 – SS",
                    "correct": false
                  }
                ],
                "explanation": "povrchová a podpovrchová voda tvoří jen malou část zásob vody v hydrosféře • oběh vody: výpar z oceánů a pevniny → srážky → část srážek se vrací do atmosféry výparem z půdy, část …"
              },
              {
                "question": "K tématu „Hydrosféra: Rozšíření a oběh vody na Zemi…\" — které tvrzení je správné? (8)",
                "options": [
                  {
                    "text": "14. Sladká voda na kontinentech Obr. 14.1/359 – SS",
                    "correct": false
                  },
                  {
                    "text": "systému povrchových a podpovrchových vod • srážky vypadávající na povrch se dostávají do půdy infiltrací, tj.",
                    "correct": false
                  },
                  {
                    "text": "povrchová a podpovrchová voda tvoří jen malou část zásob vody v hydrosféře • oběh vody: výpar z oceánů a pevniny → srážky → část srážek se vrací do atmosféry v…",
                    "correct": true
                  },
                  {
                    "text": "povrchová a podpovrchová voda tvoří jen malou část zásob vody v hydrosféře • oběh vody: výpar z oceánů a pevniny → srážky → část srážek se vrací do atmosféry v…",
                    "correct": false
                  }
                ],
                "explanation": "povrchová a podpovrchová voda tvoří jen malou část zásob vody v hydrosféře • oběh vody: výpar z oceánů a pevniny → srážky → část srážek se vrací do atmosféry v…"
              },
              {
                "question": "K tématu „Hydrosféra: Rozšíření a oběh vody na Zemi…\" — které tvrzení je správné? (9)",
                "options": [
                  {
                    "text": "14. Sladká voda na kontinentech Obr. 14.1/359 – SS",
                    "correct": false
                  },
                  {
                    "text": "pokud se voda nestačí vsakovat (intenzivní déšť nebo půda je nasycena), vzniká na povrchu plošný odtok – ron → ronové rýhy → erozní rýhy • při odtoku dochází k…",
                    "correct": false
                  },
                  {
                    "text": "systému povrchových a podpovrchových vod • srážky vypadávající na povrch se dostávají do půdy infiltrací, tj.",
                    "correct": true
                  },
                  {
                    "text": "povrchová a podpovrchová voda tvoří jen malou část zásob vody v hydrosféře • oběh vody: výpar z oceánů a pevniny → srážky → část srážek se vrací do atmosféry v…",
                    "correct": false
                  }
                ],
                "explanation": "systému povrchových a podpovrchových vod • srážky vypadávající na povrch se dostávají do půdy infiltrací, tj."
              },
              {
                "question": "K tématu „Hydrosféra: Rozšíření a oběh vody na Zemi…\" — které tvrzení je správné? (10)",
                "options": [
                  {
                    "text": "14. Sladká voda na kontinentech Obr. 14.1/359 – SS",
                    "correct": false
                  },
                  {
                    "text": "Projdi výtah a vlastní poznámky z přednášky",
                    "correct": true
                  },
                  {
                    "text": "povrchová a podpovrchová voda tvoří jen malou část zásob vody v hydrosféře • oběh vody: výpar z oceánů a pevniny → srážky → část srážek se vrací do atmosféry v…",
                    "correct": false
                  },
                  {
                    "text": "systému povrchových a podpovrchových vod • srážky vypadávající na povrch se dostávají do půdy infiltrací, tj.",
                    "correct": false
                  }
                ],
                "explanation": "Projdi výtah a vlastní poznámky z přednášky"
              },
              {
                "question": "K tématu „Hydrosféra: Rozšíření a oběh vody na Zemi…\" — které tvrzení je správné? (11)",
                "options": [
                  {
                    "text": "14. Sladká voda na kontinentech Obr. 14.1/359 – SS",
                    "correct": false
                  },
                  {
                    "text": "Otevři přiložené PDF/PPT v materiálech lekce",
                    "correct": true
                  },
                  {
                    "text": "povrchová a podpovrchová voda tvoří jen malou část zásob vody v hydrosféře • oběh vody: výpar z oceánů a pevniny → srážky → část srážek se vrací do atmosféry v…",
                    "correct": false
                  },
                  {
                    "text": "systému povrchových a podpovrchových vod • srážky vypadávající na povrch se dostávají do půdy infiltrací, tj.",
                    "correct": false
                  }
                ],
                "explanation": "Otevři přiložené PDF/PPT v materiálech lekce"
              },
              {
                "question": "K tématu „Hydrosféra: Rozšíření a oběh vody na Zemi…\" — které tvrzení je správné? (12)",
                "options": [
                  {
                    "text": "14. Sladká voda na kontinentech Obr. 14.1/359 – SS",
                    "correct": false
                  },
                  {
                    "text": "Propoj s předchozími a navazujícími okruhy v osnově",
                    "correct": true
                  },
                  {
                    "text": "povrchová a podpovrchová voda tvoří jen malou část zásob vody v hydrosféře • oběh vody: výpar z oceánů a pevniny → srážky → část srážek se vrací do atmosféry v…",
                    "correct": false
                  },
                  {
                    "text": "systému povrchových a podpovrchových vod • srážky vypadávající na povrch se dostávají do půdy infiltrací, tj.",
                    "correct": false
                  }
                ],
                "explanation": "Propoj s předchozími a navazujícími okruhy v osnově"
              },
              {
                "question": "K tématu „Hydrosféra: Rozšíření a oběh vody na Zemi…\" — které tvrzení je správné? (13)",
                "options": [
                  {
                    "text": "povrchová a podpovrchová voda tvoří jen malou část zásob vody v hydrosféře • oběh vody: výpar z oceánů a pevniny → srážky → část srážek se vrací do atmosféry v…",
                    "correct": false
                  },
                  {
                    "text": "14. Sladká voda na kontinentech Obr. 14.1/359 – SS",
                    "correct": true
                  },
                  {
                    "text": "systému povrchových a podpovrchových vod • srážky vypadávající na povrch se dostávají do půdy infiltrací, tj.",
                    "correct": false
                  },
                  {
                    "text": "pokud se voda nestačí vsakovat (intenzivní déšť nebo půda je nasycena), vzniká na povrchu plošný odtok – ron → ronové rýhy → erozní rýhy • při odtoku dochází k…",
                    "correct": false
                  }
                ],
                "explanation": "14. Sladká voda na kontinentech Obr. 14.1/359 – SS"
              },
              {
                "question": "K tématu „Hydrosféra: Rozšíření a oběh vody na Zemi…\" — které tvrzení je správné? (14)",
                "options": [
                  {
                    "text": "14. Sladká voda na kontinentech Obr. 14.1/359 – SS",
                    "correct": false
                  },
                  {
                    "text": "povrchová a podpovrchová voda tvoří jen malou část zásob vody v hydrosféře • oběh vody: výpar z oceánů a pevniny → srážky → část srážek se vrací do atmosféry v…",
                    "correct": true
                  },
                  {
                    "text": "povrchová a podpovrchová voda tvoří jen malou část zásob vody v hydrosféře • oběh vody: výpar z oceánů a pevniny → srážky → část srážek se vrací do atmosféry v…",
                    "correct": false
                  },
                  {
                    "text": "systému povrchových a podpovrchových vod • srážky vypadávající na povrch se dostávají do půdy infiltrací, tj.",
                    "correct": false
                  }
                ],
                "explanation": "povrchová a podpovrchová voda tvoří jen malou část zásob vody v hydrosféře • oběh vody: výpar z oceánů a pevniny → srážky → část srážek se vrací do atmosféry v…"
              },
              {
                "question": "K tématu „Hydrosféra: Rozšíření a oběh vody na Zemi…\" — které tvrzení je správné? (15)",
                "options": [
                  {
                    "text": "14. Sladká voda na kontinentech Obr. 14.1/359 – SS",
                    "correct": false
                  },
                  {
                    "text": "systému povrchových a podpovrchových vod • srážky vypadávající na povrch se dostávají do půdy infiltrací, tj.",
                    "correct": true
                  },
                  {
                    "text": "povrchová a podpovrchová voda tvoří jen malou část zásob vody v hydrosféře • oběh vody: výpar z oceánů a pevniny → srážky → část srážek se vrací do atmosféry v…",
                    "correct": false
                  },
                  {
                    "text": "pokud se voda nestačí vsakovat (intenzivní déšť nebo půda je nasycena), vzniká na povrchu plošný odtok – ron → ronové rýhy → erozní rýhy • při odtoku dochází k…",
                    "correct": false
                  }
                ],
                "explanation": "systému povrchových a podpovrchových vod • srážky vypadávající na povrch se dostávají do půdy infiltrací, tj."
              },
              {
                "question": "K tématu „Hydrosféra: Rozšíření a oběh vody na Zemi…\" — které tvrzení je správné? (16)",
                "options": [
                  {
                    "text": "14. Sladká voda na kontinentech Obr. 14.1/359 – SS",
                    "correct": false
                  },
                  {
                    "text": "pokud se voda nestačí vsakovat (intenzivní déšť nebo půda je nasycena), vzniká na povrchu plošný odtok – ron → ronové rýhy → erozní rýhy • při odtoku dochází k…",
                    "correct": true
                  },
                  {
                    "text": "povrchová a podpovrchová voda tvoří jen malou část zásob vody v hydrosféře • oběh vody: výpar z oceánů a pevniny → srážky → část srážek se vrací do atmosféry v…",
                    "correct": false
                  },
                  {
                    "text": "systému povrchových a podpovrchových vod • srážky vypadávající na povrch se dostávají do půdy infiltrací, tj.",
                    "correct": false
                  }
                ],
                "explanation": "pokud se voda nestačí vsakovat (intenzivní déšť nebo půda je nasycena), vzniká na povrchu plošný odtok – ron → ronové rýhy → erozní rýhy • při odtoku dochází k…"
              },
              {
                "question": "K tématu „Hydrosféra: Rozšíření a oběh vody na Zemi…\" — které tvrzení je správné? (17)",
                "options": [
                  {
                    "text": "14. Sladká voda na kontinentech Obr. 14.1/359 – SS",
                    "correct": false
                  },
                  {
                    "text": "14.1.1 Hladina podzemní vody Obr. 14.4/361",
                    "correct": true
                  },
                  {
                    "text": "povrchová a podpovrchová voda tvoří jen malou část zásob vody v hydrosféře • oběh vody: výpar z oceánů a pevniny → srážky → část srážek se vrací do atmosféry v…",
                    "correct": false
                  },
                  {
                    "text": "systému povrchových a podpovrchových vod • srážky vypadávající na povrch se dostávají do půdy infiltrací, tj.",
                    "correct": false
                  }
                ],
                "explanation": "14.1.1 Hladina podzemní vody Obr. 14.4/361"
              },
              {
                "question": "K tématu „Hydrosféra: Rozšíření a oběh vody na Zemi…\" — které tvrzení je správné? (18)",
                "options": [
                  {
                    "text": "14. Sladká voda na kontinentech Obr. 14.1/359 – SS",
                    "correct": false
                  },
                  {
                    "text": "hladina podzemní vody sahá nejvýše pod vrcholy kopců a rozvodí (souvisí se vsakováním) a klesá směrem k údolím, kde odpovídá úrovni řek, jezer nebo bažin (pros…",
                    "correct": true
                  },
                  {
                    "text": "povrchová a podpovrchová voda tvoří jen malou část zásob vody v hydrosféře • oběh vody: výpar z oceánů a pevniny → srážky → část srážek se vrací do atmosféry v…",
                    "correct": false
                  },
                  {
                    "text": "systému povrchových a podpovrchových vod • srážky vypadávající na povrch se dostávají do půdy infiltrací, tj.",
                    "correct": false
                  }
                ],
                "explanation": "hladina podzemní vody sahá nejvýše pod vrcholy kopců a rozvodí (souvisí se vsakováním) a klesá směrem k údolím, kde odpovídá úrovni řek, jezer nebo bažin (pros…"
              },
              {
                "question": "K tématu „Hydrosféra: Rozšíření a oběh vody na Zemi…\" — které tvrzení je správné? (19)",
                "options": [
                  {
                    "text": "14. Sladká voda na kontinentech Obr. 14.1/359 – SS",
                    "correct": false
                  },
                  {
                    "text": "je-li propustná vrstva mezi dvěma nepropustnými, je voda v propustné vrstvě pod tlakem a při navrtání nadložní vrstvy vystřikuje nad povrch – artéská voda (stu…",
                    "correct": true
                  },
                  {
                    "text": "povrchová a podpovrchová voda tvoří jen malou část zásob vody v hydrosféře • oběh vody: výpar z oceánů a pevniny → srážky → část srážek se vrací do atmosféry v…",
                    "correct": false
                  },
                  {
                    "text": "systému povrchových a podpovrchových vod • srážky vypadávající na povrch se dostávají do půdy infiltrací, tj.",
                    "correct": false
                  }
                ],
                "explanation": "je-li propustná vrstva mezi dvěma nepropustnými, je voda v propustné vrstvě pod tlakem a při navrtání nadložní vrstvy vystřikuje nad povrch – artéská voda (stu…"
              },
              {
                "question": "K tématu „Hydrosféra: Rozšíření a oběh vody na Zemi…\" — které tvrzení je správné? (20)",
                "options": [
                  {
                    "text": "14. Sladká voda na kontinentech Obr. 14.1/359 – SS",
                    "correct": false
                  },
                  {
                    "text": "povrchová a podpovrchová voda tvoří jen malou část zásob vody v hydrosféře • oběh vody: výpar z oceánů a pevniny → srážky → část srážek se vrací do atmosféry v…",
                    "correct": true
                  },
                  {
                    "text": "povrchová a podpovrchová voda tvoří jen malou část zásob vody v hydrosféře • oběh vody: výpar z oceánů a pevniny → srážky → část srážek se vrací do atmosféry v…",
                    "correct": false
                  },
                  {
                    "text": "systému povrchových a podpovrchových vod • srážky vypadávající na povrch se dostávají do půdy infiltrací, tj.",
                    "correct": false
                  }
                ],
                "explanation": "povrchová a podpovrchová voda tvoří jen malou část zásob vody v hydrosféře • oběh vody: výpar z oceánů a pevniny → srážky → část srážek se vrací do atmosféry v…"
              }
            ]
          }
        },
        {
          "id": "z0026p-9-hydrografie-merne-jednotky-odtoku-hydrografick-8",
          "title": "9. Hydrografie: Měrné jednotky odtoku. Hydrografické charakteristiky povodí, říční sítě a koryta řeky",
          "summary": "Studijní okruh: 9. Hydrografie: Měrné jednotky odtoku. Hydrografické charakteristiky povodí, říční sítě a koryta řeky",
          "minutes": 20,
          "sectionTitle": "Témata prof. Brázdila",
          "available": true,
          "blocks": [
            {
              "type": "heading",
              "text": "Témata prof. Brázdila"
            },
            {
              "type": "callout",
              "label": "Okruh",
              "text": "9. Hydrografie: Měrné jednotky odtoku. Hydrografické charakteristiky povodí, říční sítě a koryta řeky"
            },
            {
              "type": "callout",
              "label": "Jak číst tuto lekci",
              "text": "Text je výtah ze skripta a přednášek — použij ho jako mapu k učení. Detaily a obrázky najdeš v PDF/PPT v materiálech lekce."
            },
            {
              "type": "heading",
              "text": "Otázky a okruhy — FG_7"
            },
            {
              "type": "paragraph",
              "text": "14. Sladká voda na kontinentech Obr. 14.1/359 – SS"
            },
            {
              "type": "list",
              "label": "Klíčové body",
              "items": [
                "povrchová a podpovrchová voda tvoří jen malou část zásob vody v hydrosféře • oběh vody: výpar z oceánů a pevniny → srážky → část srážek se vrací do atmosféry výparem z půdy, část odtéká z pevniny povrchovým nebo podzemním odtokem • hydrologie – komplexní studium vody na Zemi, tj.",
                "systému povrchových a podpovrchových vod • srážky vypadávající na povrch se dostávají do půdy infiltrací, tj.",
                "působením gravitace pronikají mezerami mezi půdními částicemi (pukliny, otvory po živočiších, prostory po ledových krystalcích aj.) • voda, která se dostane do půdy, je půdní voda a vytváří zvodnělou vrstvu (soil water belt) – voda z této vrstvy se může dostat na povrch nebo do atmosféry evapotranspirací (výpar + transpirace) Obr."
              ]
            },
            {
              "type": "paragraph",
              "text": "pokud se voda nestačí vsakovat (intenzivní déšť nebo půda je nasycena), vzniká na povrchu plošný odtok – ron → ronové rýhy → erozní rýhy • při odtoku dochází k odnosu částic a rozpustných látek a vytváření toků a řek – modelační činitel v krajině"
            },
            {
              "type": "list",
              "label": "Klíčové body",
              "items": [
                "voda proniká díky gravitaci do hloubky • podzemní voda – část podpovrchové vody, která vyplňuje zónu saturace (pásmo nasycení) • hladina podzemní vody odděluje zónu saturace od svrchní vrstvy, kde póry nejsou plně vyplněny vodou – pásmo provzdušnění (zóna aerace) – voda se zde drží díky kapilárnímu napětí (tenký film vody na povrchu minerálů) – kapilární voda • různé dráhy pronikání vody do hloubky a do toků"
              ]
            },
            {
              "type": "paragraph",
              "text": "14.1.1 Hladina podzemní vody Obr. 14.4/361"
            },
            {
              "type": "paragraph",
              "text": "hladina podzemní vody sahá nejvýše pod vrcholy kopců a rozvodí (souvisí se vsakováním) a klesá směrem k údolím, kde odpovídá úrovni řek, jezer nebo bažin (prosakování) • při srážkách roste hladina vody pod vrcholy kopců a rozvodí, v období sucha zase klesá"
            },
            {
              "type": "paragraph",
              "text": "14.1.2 Zvodnělé vrstvy • sedimentární vrstvy výrazně ovlivňují ukládání a pohyb podzemní vody • zvodnělá vrstva (zvodeň) – podloží písku nebo pískovce, obsahující volně protékající podzemní vodu • nepropustná vrstva – podloží jílů nebo břidlic obsahují málo volné vody • čočkovité břidlice vytváří zavěšené vodní těleso Obr. 14.5/362"
            },
            {
              "type": "paragraph",
              "text": "je-li propustná vrstva mezi dvěma nepropustnými, je voda v propustné vrstvě pod tlakem a při navrtání nadložní vrstvy vystřikuje nad povrch – artéská voda (studna) Obr. 14.6/362"
            },
            {
              "type": "list",
              "label": "Klíčové body",
              "items": [
                "povrchová a podpovrchová voda tvoří jen malou část zásob vody v hydrosféře • oběh vody: výpar z oceánů a pevniny → srážky → část srážek se vrací do atmosféry výparem z půdy, část odtéká z pevniny povrchovým nebo podzemním odtokem • hydrologie – komplexní studium vody na Zemi, tj.",
                "systému povrchových a podpovrchových vod • srážky vypadávající na povrch se dostávají do půdy infiltrací, tj.",
                "působením gravitace pronikají mezerami mezi půdními částicemi (pukliny, otvory po živočiších, prostory po ledových krystalcích aj.) • voda, která se dostane do půdy, je půdní voda a vytváří zvodnělou vrstvu (soil water belt) – voda z této vrstvy se může dostat na povrch nebo do atmosféry evapotranspirací (výpar + transpirace) Obr.",
                "voda proniká díky gravitaci do hloubky • podzemní voda – část podpovrchové vody, která vyplňuje zónu saturace (pásmo nasycení) • hladina podzemní vody odděluje zónu saturace od svrchní vrstvy, kde póry nejsou plně vyplněny vodou – pásmo provzdušnění (zóna aerace) – voda se zde drží díky kapilárnímu napětí (tenký film vody na povrchu minerálů) – kapilární voda • různé dráhy pronikání vody do hloubky a do toků"
              ]
            },
            {
              "type": "list",
              "label": "Doporučený postup",
              "items": [
                "Projdi výtah a vlastní poznámky z přednášky",
                "Otevři přiložené PDF/PPT v materiálech lekce",
                "Propoj s předchozími a navazujícími okruhy v osnově"
              ]
            }
          ],
          "resources": [
            {
              "kind": "document",
              "title": "FG_7 — okruhy Brázdil",
              "url": "/materials/geografie-kartografie/z0026p/FG_7.doc",
              "source": "Brázdil",
              "note": "Sdílený materiál pro více okruhů hydrologie"
            },
            {
              "kind": "link",
              "title": "IS MUNI — Fyzická geografie",
              "url": "https://is.muni.cz/predmet/sci/Z0026p",
              "source": "IS MUNI"
            }
          ],
          "quiz": {
            "title": "Kvíz: Hydrografie a podzemní voda",
            "questions": [
              {
                "question": "Co je povodí?",
                "options": [
                  {
                    "text": "Území odtékající do jednoho závěrného profilu",
                    "correct": true
                  },
                  {
                    "text": "Pouze údolí hlavní řeky",
                    "correct": false
                  },
                  {
                    "text": "Oblast bez odtoku do moře",
                    "correct": false
                  },
                  {
                    "text": "Plocha jezera",
                    "correct": false
                  }
                ],
                "explanation": "Povodí zahrnuje povrchový i podzemní odtok."
              },
              {
                "question": "Zvodnělá vrstva (zvodeň) je typicky tvořena…",
                "options": [
                  {
                    "text": "propustným pískem nebo pískovcem",
                    "correct": true
                  },
                  {
                    "text": "jíly a břidlicemi",
                    "correct": false
                  },
                  {
                    "text": "granitem bez puklin",
                    "correct": false
                  },
                  {
                    "text": "ledovcovým ledem",
                    "correct": false
                  }
                ],
                "explanation": "V zvodni obsahuje voda volné póry a může volně protékat."
              },
              {
                "question": "Artéská voda vzniká, když…",
                "options": [
                  {
                    "text": "je propustná vrstva mezi nepropustnými vrstvami a voda je pod tlakem",
                    "correct": true
                  },
                  {
                    "text": "voda stojí v propustném písku bez tlaku",
                    "correct": false
                  },
                  {
                    "text": "voda teče pouze v řece",
                    "correct": false
                  },
                  {
                    "text": "je voda zamrzlá v permafrostu",
                    "correct": false
                  }
                ],
                "explanation": "Při vrtu může voda vystřikovat nad úroveň terénu."
              },
              {
                "question": "Kapilární voda se drží v půdě díky…",
                "options": [
                  {
                    "text": "kapilárnímu napětí na povrchu minerálů",
                    "correct": true
                  },
                  {
                    "text": "vysokému tlaku vzduchu",
                    "correct": false
                  },
                  {
                    "text": "proudění řeky",
                    "correct": false
                  },
                  {
                    "text": "radioaktivnímu rozpadu",
                    "correct": false
                  }
                ],
                "explanation": "Nachází se v pásmu provzdušnění nad hladinou podzemní vody."
              },
              {
                "question": "Které tvrzení odpovídá obsahu lekce?",
                "options": [
                  {
                    "text": "Výklad k tomuto okruhu neobsahuje tuto informaci.",
                    "correct": false
                  },
                  {
                    "text": "14. Sladká voda na kontinentech Obr. 14.1/359 – SS",
                    "correct": true
                  },
                  {
                    "text": "Toto tvrzení nelze z výkladu lekce ověřit.",
                    "correct": false
                  },
                  {
                    "text": "povrchová a podpovrchová voda tvoří jen malou část zásob vody v hydrosféře • oběh vody: výpar z oceánů a pevniny → srážky → část srážek se vrací do atmosféry v…",
                    "correct": false
                  }
                ],
                "explanation": "Správně: 14. Sladká voda na kontinentech Obr. 14.1/359 – SS"
              },
              {
                "question": "Které tvrzení patří k okruhu „Hydrografie: Měrné jednotky odtoku. Hydrografic…\"?",
                "options": [
                  {
                    "text": "systému povrchových a podpovrchových vod • srážky vypadávající na povrch se dostávají do půdy infiltrací, tj.",
                    "correct": false
                  },
                  {
                    "text": "povrchová a podpovrchová voda tvoří jen malou část zásob vody v hydrosféře • oběh vody: výpar z oceánů a pevniny → srážky → část srážek se vrací do atmosféry výparem z půdy, část …",
                    "correct": false
                  },
                  {
                    "text": "povrchová a podpovrchová voda tvoří jen malou část zásob vody v hydrosféře • oběh vody: výpar z oceánů a pevniny → srážky → část srážek se vrací do atmosféry výparem z půdy, část …",
                    "correct": true
                  },
                  {
                    "text": "14. Sladká voda na kontinentech Obr. 14.1/359 – SS",
                    "correct": false
                  }
                ],
                "explanation": "povrchová a podpovrchová voda tvoří jen malou část zásob vody v hydrosféře • oběh vody: výpar z oceánů a pevniny → srážky → část srážek se vrací do atmosféry výparem z půdy, část …"
              },
              {
                "question": "K tématu „Hydrografie: Měrné jednotky odtoku. Hydro…\" — které tvrzení je správné? (7)",
                "options": [
                  {
                    "text": "14. Sladká voda na kontinentech Obr. 14.1/359 – SS",
                    "correct": false
                  },
                  {
                    "text": "systému povrchových a podpovrchových vod • srážky vypadávající na povrch se dostávají do půdy infiltrací, tj.",
                    "correct": false
                  },
                  {
                    "text": "je-li propustná vrstva mezi dvěma nepropustnými, je voda v propustné vrstvě pod tlakem a při navrtání nadložní vrstvy vystřikuje nad povrch – artéská voda (stu…",
                    "correct": true
                  },
                  {
                    "text": "povrchová a podpovrchová voda tvoří jen malou část zásob vody v hydrosféře • oběh vody: výpar z oceánů a pevniny → srážky → část srážek se vrací do atmosféry v…",
                    "correct": false
                  }
                ],
                "explanation": "je-li propustná vrstva mezi dvěma nepropustnými, je voda v propustné vrstvě pod tlakem a při navrtání nadložní vrstvy vystřikuje nad povrch – artéská voda (stu…"
              },
              {
                "question": "K tématu „Hydrografie: Měrné jednotky odtoku. Hydro…\" — které tvrzení je správné? (8)",
                "options": [
                  {
                    "text": "14. Sladká voda na kontinentech Obr. 14.1/359 – SS",
                    "correct": false
                  },
                  {
                    "text": "systému povrchových a podpovrchových vod • srážky vypadávající na povrch se dostávají do půdy infiltrací, tj.",
                    "correct": false
                  },
                  {
                    "text": "povrchová a podpovrchová voda tvoří jen malou část zásob vody v hydrosféře • oběh vody: výpar z oceánů a pevniny → srážky → část srážek se vrací do atmosféry v…",
                    "correct": true
                  },
                  {
                    "text": "povrchová a podpovrchová voda tvoří jen malou část zásob vody v hydrosféře • oběh vody: výpar z oceánů a pevniny → srážky → část srážek se vrací do atmosféry v…",
                    "correct": false
                  }
                ],
                "explanation": "povrchová a podpovrchová voda tvoří jen malou část zásob vody v hydrosféře • oběh vody: výpar z oceánů a pevniny → srážky → část srážek se vrací do atmosféry v…"
              },
              {
                "question": "K tématu „Hydrografie: Měrné jednotky odtoku. Hydro…\" — které tvrzení je správné? (9)",
                "options": [
                  {
                    "text": "14. Sladká voda na kontinentech Obr. 14.1/359 – SS",
                    "correct": false
                  },
                  {
                    "text": "pokud se voda nestačí vsakovat (intenzivní déšť nebo půda je nasycena), vzniká na povrchu plošný odtok – ron → ronové rýhy → erozní rýhy • při odtoku dochází k…",
                    "correct": false
                  },
                  {
                    "text": "systému povrchových a podpovrchových vod • srážky vypadávající na povrch se dostávají do půdy infiltrací, tj.",
                    "correct": true
                  },
                  {
                    "text": "povrchová a podpovrchová voda tvoří jen malou část zásob vody v hydrosféře • oběh vody: výpar z oceánů a pevniny → srážky → část srážek se vrací do atmosféry v…",
                    "correct": false
                  }
                ],
                "explanation": "systému povrchových a podpovrchových vod • srážky vypadávající na povrch se dostávají do půdy infiltrací, tj."
              },
              {
                "question": "K tématu „Hydrografie: Měrné jednotky odtoku. Hydro…\" — které tvrzení je správné? (10)",
                "options": [
                  {
                    "text": "14. Sladká voda na kontinentech Obr. 14.1/359 – SS",
                    "correct": false
                  },
                  {
                    "text": "Projdi výtah a vlastní poznámky z přednášky",
                    "correct": true
                  },
                  {
                    "text": "povrchová a podpovrchová voda tvoří jen malou část zásob vody v hydrosféře • oběh vody: výpar z oceánů a pevniny → srážky → část srážek se vrací do atmosféry v…",
                    "correct": false
                  },
                  {
                    "text": "systému povrchových a podpovrchových vod • srážky vypadávající na povrch se dostávají do půdy infiltrací, tj.",
                    "correct": false
                  }
                ],
                "explanation": "Projdi výtah a vlastní poznámky z přednášky"
              },
              {
                "question": "K tématu „Hydrografie: Měrné jednotky odtoku. Hydro…\" — které tvrzení je správné? (11)",
                "options": [
                  {
                    "text": "14. Sladká voda na kontinentech Obr. 14.1/359 – SS",
                    "correct": false
                  },
                  {
                    "text": "Otevři přiložené PDF/PPT v materiálech lekce",
                    "correct": true
                  },
                  {
                    "text": "povrchová a podpovrchová voda tvoří jen malou část zásob vody v hydrosféře • oběh vody: výpar z oceánů a pevniny → srážky → část srážek se vrací do atmosféry v…",
                    "correct": false
                  },
                  {
                    "text": "systému povrchových a podpovrchových vod • srážky vypadávající na povrch se dostávají do půdy infiltrací, tj.",
                    "correct": false
                  }
                ],
                "explanation": "Otevři přiložené PDF/PPT v materiálech lekce"
              },
              {
                "question": "K tématu „Hydrografie: Měrné jednotky odtoku. Hydro…\" — které tvrzení je správné? (12)",
                "options": [
                  {
                    "text": "14. Sladká voda na kontinentech Obr. 14.1/359 – SS",
                    "correct": false
                  },
                  {
                    "text": "Propoj s předchozími a navazujícími okruhy v osnově",
                    "correct": true
                  },
                  {
                    "text": "povrchová a podpovrchová voda tvoří jen malou část zásob vody v hydrosféře • oběh vody: výpar z oceánů a pevniny → srážky → část srážek se vrací do atmosféry v…",
                    "correct": false
                  },
                  {
                    "text": "systému povrchových a podpovrchových vod • srážky vypadávající na povrch se dostávají do půdy infiltrací, tj.",
                    "correct": false
                  }
                ],
                "explanation": "Propoj s předchozími a navazujícími okruhy v osnově"
              },
              {
                "question": "K tématu „Hydrografie: Měrné jednotky odtoku. Hydro…\" — které tvrzení je správné? (13)",
                "options": [
                  {
                    "text": "povrchová a podpovrchová voda tvoří jen malou část zásob vody v hydrosféře • oběh vody: výpar z oceánů a pevniny → srážky → část srážek se vrací do atmosféry v…",
                    "correct": false
                  },
                  {
                    "text": "14. Sladká voda na kontinentech Obr. 14.1/359 – SS",
                    "correct": true
                  },
                  {
                    "text": "systému povrchových a podpovrchových vod • srážky vypadávající na povrch se dostávají do půdy infiltrací, tj.",
                    "correct": false
                  },
                  {
                    "text": "pokud se voda nestačí vsakovat (intenzivní déšť nebo půda je nasycena), vzniká na povrchu plošný odtok – ron → ronové rýhy → erozní rýhy • při odtoku dochází k…",
                    "correct": false
                  }
                ],
                "explanation": "14. Sladká voda na kontinentech Obr. 14.1/359 – SS"
              },
              {
                "question": "K tématu „Hydrografie: Měrné jednotky odtoku. Hydro…\" — které tvrzení je správné? (14)",
                "options": [
                  {
                    "text": "14. Sladká voda na kontinentech Obr. 14.1/359 – SS",
                    "correct": false
                  },
                  {
                    "text": "povrchová a podpovrchová voda tvoří jen malou část zásob vody v hydrosféře • oběh vody: výpar z oceánů a pevniny → srážky → část srážek se vrací do atmosféry v…",
                    "correct": true
                  },
                  {
                    "text": "povrchová a podpovrchová voda tvoří jen malou část zásob vody v hydrosféře • oběh vody: výpar z oceánů a pevniny → srážky → část srážek se vrací do atmosféry v…",
                    "correct": false
                  },
                  {
                    "text": "systému povrchových a podpovrchových vod • srážky vypadávající na povrch se dostávají do půdy infiltrací, tj.",
                    "correct": false
                  }
                ],
                "explanation": "povrchová a podpovrchová voda tvoří jen malou část zásob vody v hydrosféře • oběh vody: výpar z oceánů a pevniny → srážky → část srážek se vrací do atmosféry v…"
              },
              {
                "question": "K tématu „Hydrografie: Měrné jednotky odtoku. Hydro…\" — které tvrzení je správné? (15)",
                "options": [
                  {
                    "text": "14. Sladká voda na kontinentech Obr. 14.1/359 – SS",
                    "correct": false
                  },
                  {
                    "text": "systému povrchových a podpovrchových vod • srážky vypadávající na povrch se dostávají do půdy infiltrací, tj.",
                    "correct": true
                  },
                  {
                    "text": "povrchová a podpovrchová voda tvoří jen malou část zásob vody v hydrosféře • oběh vody: výpar z oceánů a pevniny → srážky → část srážek se vrací do atmosféry v…",
                    "correct": false
                  },
                  {
                    "text": "pokud se voda nestačí vsakovat (intenzivní déšť nebo půda je nasycena), vzniká na povrchu plošný odtok – ron → ronové rýhy → erozní rýhy • při odtoku dochází k…",
                    "correct": false
                  }
                ],
                "explanation": "systému povrchových a podpovrchových vod • srážky vypadávající na povrch se dostávají do půdy infiltrací, tj."
              },
              {
                "question": "K tématu „Hydrografie: Měrné jednotky odtoku. Hydro…\" — které tvrzení je správné? (16)",
                "options": [
                  {
                    "text": "14. Sladká voda na kontinentech Obr. 14.1/359 – SS",
                    "correct": false
                  },
                  {
                    "text": "pokud se voda nestačí vsakovat (intenzivní déšť nebo půda je nasycena), vzniká na povrchu plošný odtok – ron → ronové rýhy → erozní rýhy • při odtoku dochází k…",
                    "correct": true
                  },
                  {
                    "text": "povrchová a podpovrchová voda tvoří jen malou část zásob vody v hydrosféře • oběh vody: výpar z oceánů a pevniny → srážky → část srážek se vrací do atmosféry v…",
                    "correct": false
                  },
                  {
                    "text": "systému povrchových a podpovrchových vod • srážky vypadávající na povrch se dostávají do půdy infiltrací, tj.",
                    "correct": false
                  }
                ],
                "explanation": "pokud se voda nestačí vsakovat (intenzivní déšť nebo půda je nasycena), vzniká na povrchu plošný odtok – ron → ronové rýhy → erozní rýhy • při odtoku dochází k…"
              },
              {
                "question": "K tématu „Hydrografie: Měrné jednotky odtoku. Hydro…\" — které tvrzení je správné? (17)",
                "options": [
                  {
                    "text": "14. Sladká voda na kontinentech Obr. 14.1/359 – SS",
                    "correct": false
                  },
                  {
                    "text": "14.1.1 Hladina podzemní vody Obr. 14.4/361",
                    "correct": true
                  },
                  {
                    "text": "povrchová a podpovrchová voda tvoří jen malou část zásob vody v hydrosféře • oběh vody: výpar z oceánů a pevniny → srážky → část srážek se vrací do atmosféry v…",
                    "correct": false
                  },
                  {
                    "text": "systému povrchových a podpovrchových vod • srážky vypadávající na povrch se dostávají do půdy infiltrací, tj.",
                    "correct": false
                  }
                ],
                "explanation": "14.1.1 Hladina podzemní vody Obr. 14.4/361"
              },
              {
                "question": "K tématu „Hydrografie: Měrné jednotky odtoku. Hydro…\" — které tvrzení je správné? (18)",
                "options": [
                  {
                    "text": "14. Sladká voda na kontinentech Obr. 14.1/359 – SS",
                    "correct": false
                  },
                  {
                    "text": "hladina podzemní vody sahá nejvýše pod vrcholy kopců a rozvodí (souvisí se vsakováním) a klesá směrem k údolím, kde odpovídá úrovni řek, jezer nebo bažin (pros…",
                    "correct": true
                  },
                  {
                    "text": "povrchová a podpovrchová voda tvoří jen malou část zásob vody v hydrosféře • oběh vody: výpar z oceánů a pevniny → srážky → část srážek se vrací do atmosféry v…",
                    "correct": false
                  },
                  {
                    "text": "systému povrchových a podpovrchových vod • srážky vypadávající na povrch se dostávají do půdy infiltrací, tj.",
                    "correct": false
                  }
                ],
                "explanation": "hladina podzemní vody sahá nejvýše pod vrcholy kopců a rozvodí (souvisí se vsakováním) a klesá směrem k údolím, kde odpovídá úrovni řek, jezer nebo bažin (pros…"
              },
              {
                "question": "K tématu „Hydrografie: Měrné jednotky odtoku. Hydro…\" — které tvrzení je správné? (19)",
                "options": [
                  {
                    "text": "14. Sladká voda na kontinentech Obr. 14.1/359 – SS",
                    "correct": false
                  },
                  {
                    "text": "je-li propustná vrstva mezi dvěma nepropustnými, je voda v propustné vrstvě pod tlakem a při navrtání nadložní vrstvy vystřikuje nad povrch – artéská voda (stu…",
                    "correct": true
                  },
                  {
                    "text": "povrchová a podpovrchová voda tvoří jen malou část zásob vody v hydrosféře • oběh vody: výpar z oceánů a pevniny → srážky → část srážek se vrací do atmosféry v…",
                    "correct": false
                  },
                  {
                    "text": "systému povrchových a podpovrchových vod • srážky vypadávající na povrch se dostávají do půdy infiltrací, tj.",
                    "correct": false
                  }
                ],
                "explanation": "je-li propustná vrstva mezi dvěma nepropustnými, je voda v propustné vrstvě pod tlakem a při navrtání nadložní vrstvy vystřikuje nad povrch – artéská voda (stu…"
              },
              {
                "question": "K tématu „Hydrografie: Měrné jednotky odtoku. Hydro…\" — které tvrzení je správné? (20)",
                "options": [
                  {
                    "text": "14. Sladká voda na kontinentech Obr. 14.1/359 – SS",
                    "correct": false
                  },
                  {
                    "text": "povrchová a podpovrchová voda tvoří jen malou část zásob vody v hydrosféře • oběh vody: výpar z oceánů a pevniny → srážky → část srážek se vrací do atmosféry v…",
                    "correct": true
                  },
                  {
                    "text": "povrchová a podpovrchová voda tvoří jen malou část zásob vody v hydrosféře • oběh vody: výpar z oceánů a pevniny → srážky → část srážek se vrací do atmosféry v…",
                    "correct": false
                  },
                  {
                    "text": "systému povrchových a podpovrchových vod • srážky vypadávající na povrch se dostávají do půdy infiltrací, tj.",
                    "correct": false
                  }
                ],
                "explanation": "povrchová a podpovrchová voda tvoří jen malou část zásob vody v hydrosféře • oběh vody: výpar z oceánů a pevniny → srážky → část srážek se vrací do atmosféry v…"
              }
            ]
          }
        },
        {
          "id": "z0026p-10-hydrometrie-mereni-vodnich-stavu-a-prutoku-9",
          "title": "10. Hydrometrie: Měření vodních stavů a průtoků",
          "summary": "Studijní okruh: 10. Hydrometrie: Měření vodních stavů a průtoků",
          "minutes": 12,
          "sectionTitle": "Témata prof. Brázdila",
          "available": true,
          "blocks": [
            {
              "type": "heading",
              "text": "Témata prof. Brázdila"
            },
            {
              "type": "callout",
              "label": "Okruh",
              "text": "10. Hydrometrie: Měření vodních stavů a průtoků"
            },
            {
              "type": "callout",
              "label": "Jak číst tuto lekci",
              "text": "Text je výtah ze skripta a přednášek — použij ho jako mapu k učení. Detaily a obrázky najdeš v PDF/PPT v materiálech lekce."
            },
            {
              "type": "heading",
              "text": "Otázky a okruhy — FG_7"
            },
            {
              "type": "paragraph",
              "text": "14. Sladká voda na kontinentech Obr. 14.1/359 – SS"
            },
            {
              "type": "list",
              "label": "Klíčové body",
              "items": [
                "povrchová a podpovrchová voda tvoří jen malou část zásob vody v hydrosféře • oběh vody: výpar z oceánů a pevniny → srážky → část srážek se vrací do atmosféry výparem z půdy, část odtéká z pevniny povrchovým nebo podzemním odtokem • hydrologie – komplexní studium vody na Zemi, tj.",
                "systému povrchových a podpovrchových vod • srážky vypadávající na povrch se dostávají do půdy infiltrací, tj.",
                "působením gravitace pronikají mezerami mezi půdními částicemi (pukliny, otvory po živočiších, prostory po ledových krystalcích aj.) • voda, která se dostane do půdy, je půdní voda a vytváří zvodnělou vrstvu (soil water belt) – voda z této vrstvy se může dostat na povrch nebo do atmosféry evapotranspirací (výpar + transpirace) Obr."
              ]
            },
            {
              "type": "paragraph",
              "text": "pokud se voda nestačí vsakovat (intenzivní déšť nebo půda je nasycena), vzniká na povrchu plošný odtok – ron → ronové rýhy → erozní rýhy • při odtoku dochází k odnosu částic a rozpustných látek a vytváření toků a řek – modelační činitel v krajině"
            },
            {
              "type": "list",
              "label": "Klíčové body",
              "items": [
                "voda proniká díky gravitaci do hloubky • podzemní voda – část podpovrchové vody, která vyplňuje zónu saturace (pásmo nasycení) • hladina podzemní vody odděluje zónu saturace od svrchní vrstvy, kde póry nejsou plně vyplněny vodou – pásmo provzdušnění (zóna aerace) – voda se zde drží díky kapilárnímu napětí (tenký film vody na povrchu minerálů) – kapilární voda • různé dráhy pronikání vody do hloubky a do toků"
              ]
            },
            {
              "type": "paragraph",
              "text": "14.1.1 Hladina podzemní vody Obr. 14.4/361"
            },
            {
              "type": "paragraph",
              "text": "hladina podzemní vody sahá nejvýše pod vrcholy kopců a rozvodí (souvisí se vsakováním) a klesá směrem k údolím, kde odpovídá úrovni řek, jezer nebo bažin (prosakování) • při srážkách roste hladina vody pod vrcholy kopců a rozvodí, v období sucha zase klesá"
            },
            {
              "type": "paragraph",
              "text": "14.1.2 Zvodnělé vrstvy • sedimentární vrstvy výrazně ovlivňují ukládání a pohyb podzemní vody • zvodnělá vrstva (zvodeň) – podloží písku nebo pískovce, obsahující volně protékající podzemní vodu • nepropustná vrstva – podloží jílů nebo břidlic obsahují málo volné vody • čočkovité břidlice vytváří zavěšené vodní těleso Obr. 14.5/362"
            },
            {
              "type": "paragraph",
              "text": "je-li propustná vrstva mezi dvěma nepropustnými, je voda v propustné vrstvě pod tlakem a při navrtání nadložní vrstvy vystřikuje nad povrch – artéská voda (studna) Obr. 14.6/362"
            },
            {
              "type": "list",
              "label": "Klíčové body",
              "items": [
                "povrchová a podpovrchová voda tvoří jen malou část zásob vody v hydrosféře • oběh vody: výpar z oceánů a pevniny → srážky → část srážek se vrací do atmosféry výparem z půdy, část odtéká z pevniny povrchovým nebo podzemním odtokem • hydrologie – komplexní studium vody na Zemi, tj.",
                "systému povrchových a podpovrchových vod • srážky vypadávající na povrch se dostávají do půdy infiltrací, tj.",
                "působením gravitace pronikají mezerami mezi půdními částicemi (pukliny, otvory po živočiších, prostory po ledových krystalcích aj.) • voda, která se dostane do půdy, je půdní voda a vytváří zvodnělou vrstvu (soil water belt) – voda z této vrstvy se může dostat na povrch nebo do atmosféry evapotranspirací (výpar + transpirace) Obr.",
                "voda proniká díky gravitaci do hloubky • podzemní voda – část podpovrchové vody, která vyplňuje zónu saturace (pásmo nasycení) • hladina podzemní vody odděluje zónu saturace od svrchní vrstvy, kde póry nejsou plně vyplněny vodou – pásmo provzdušnění (zóna aerace) – voda se zde drží díky kapilárnímu napětí (tenký film vody na povrchu minerálů) – kapilární voda • různé dráhy pronikání vody do hloubky a do toků"
              ]
            },
            {
              "type": "list",
              "label": "Doporučený postup",
              "items": [
                "Projdi výtah a vlastní poznámky z přednášky",
                "Otevři přiložené PDF/PPT v materiálech lekce",
                "Propoj s předchozími a navazujícími okruhy v osnově"
              ]
            }
          ],
          "resources": [
            {
              "kind": "document",
              "title": "FG_7 — okruhy Brázdil",
              "url": "/materials/geografie-kartografie/z0026p/FG_7.doc",
              "source": "Brázdil",
              "note": "Sdílený materiál pro více okruhů hydrologie"
            },
            {
              "kind": "link",
              "title": "IS MUNI — Fyzická geografie",
              "url": "https://is.muni.cz/predmet/sci/Z0026p",
              "source": "IS MUNI"
            }
          ],
          "quiz": {
            "title": "Kvíz: Hydrometrie",
            "questions": [
              {
                "question": "Evapotranspirace zahrnuje…",
                "options": [
                  {
                    "text": "výpar z půdy a transpiraci rostlin",
                    "correct": true
                  },
                  {
                    "text": "pouze srážky",
                    "correct": false
                  },
                  {
                    "text": "pouze podzemní odtok",
                    "correct": false
                  },
                  {
                    "text": "jen tání sněhu",
                    "correct": false
                  }
                ],
                "explanation": "Spolu s infiltrací určuje, kolik vody zůstane pro odtok."
              },
              {
                "question": "Zóna saturace je charakteristická tím, že…",
                "options": [
                  {
                    "text": "všechny póry jsou vyplněny vodou",
                    "correct": true
                  },
                  {
                    "text": "póry jsou pouze částečně vlhké",
                    "correct": false
                  },
                  {
                    "text": "neobsahuje žádnou vodu",
                    "correct": false
                  },
                  {
                    "text": "je vždy nad úrovní půdy",
                    "correct": false
                  }
                ],
                "explanation": "Odděluje ji od pásma provzdušnění hladina podzemní vody."
              },
              {
                "question": "Při intenzivním dešti na nasycené půdě…",
                "options": [
                  {
                    "text": "vzniká rychlý povrchový odtok",
                    "correct": true
                  },
                  {
                    "text": "všechna voda se vsákne",
                    "correct": false
                  },
                  {
                    "text": "klesne hladina podzemní vody",
                    "correct": false
                  },
                  {
                    "text": "nefunguje gravitace",
                    "correct": false
                  }
                ],
                "explanation": "Infiltrační kapacita je vyčerpána → plošný odtok."
              },
              {
                "question": "Hydrometrie se zabývá…",
                "options": [
                  {
                    "text": "měřením a vyhodnocováním vodních stavů a průtoků",
                    "correct": true
                  },
                  {
                    "text": "pouze chemickou analýzou vody",
                    "correct": false
                  },
                  {
                    "text": "jen mapováním geologie",
                    "correct": false
                  },
                  {
                    "text": "výhradně předpovědí počasí",
                    "correct": false
                  }
                ],
                "explanation": "Data slouží pro hydrologické bilance a povodňovou ochranu."
              },
              {
                "question": "Které tvrzení odpovídá obsahu lekce?",
                "options": [
                  {
                    "text": "Výklad k tomuto okruhu neobsahuje tuto informaci.",
                    "correct": false
                  },
                  {
                    "text": "14. Sladká voda na kontinentech Obr. 14.1/359 – SS",
                    "correct": true
                  },
                  {
                    "text": "Toto tvrzení nelze z výkladu lekce ověřit.",
                    "correct": false
                  },
                  {
                    "text": "povrchová a podpovrchová voda tvoří jen malou část zásob vody v hydrosféře • oběh vody: výpar z oceánů a pevniny → srážky → část srážek se vrací do atmosféry v…",
                    "correct": false
                  }
                ],
                "explanation": "Správně: 14. Sladká voda na kontinentech Obr. 14.1/359 – SS"
              },
              {
                "question": "Které tvrzení patří k okruhu „Hydrometrie: Měření vodních stavů a průtoků\"?",
                "options": [
                  {
                    "text": "14. Sladká voda na kontinentech Obr. 14.1/359 – SS",
                    "correct": false
                  },
                  {
                    "text": "systému povrchových a podpovrchových vod • srážky vypadávající na povrch se dostávají do půdy infiltrací, tj.",
                    "correct": false
                  },
                  {
                    "text": "povrchová a podpovrchová voda tvoří jen malou část zásob vody v hydrosféře • oběh vody: výpar z oceánů a pevniny → srážky → část srážek se vrací do atmosféry výparem z půdy, část …",
                    "correct": false
                  },
                  {
                    "text": "povrchová a podpovrchová voda tvoří jen malou část zásob vody v hydrosféře • oběh vody: výpar z oceánů a pevniny → srážky → část srážek se vrací do atmosféry výparem z půdy, část …",
                    "correct": true
                  }
                ],
                "explanation": "povrchová a podpovrchová voda tvoří jen malou část zásob vody v hydrosféře • oběh vody: výpar z oceánů a pevniny → srážky → část srážek se vrací do atmosféry výparem z půdy, část …"
              },
              {
                "question": "K tématu „Hydrometrie: Měření vodních stavů a průto…\" — které tvrzení je správné? (7)",
                "options": [
                  {
                    "text": "14. Sladká voda na kontinentech Obr. 14.1/359 – SS",
                    "correct": false
                  },
                  {
                    "text": "systému povrchových a podpovrchových vod • srážky vypadávající na povrch se dostávají do půdy infiltrací, tj.",
                    "correct": false
                  },
                  {
                    "text": "je-li propustná vrstva mezi dvěma nepropustnými, je voda v propustné vrstvě pod tlakem a při navrtání nadložní vrstvy vystřikuje nad povrch – artéská voda (stu…",
                    "correct": true
                  },
                  {
                    "text": "povrchová a podpovrchová voda tvoří jen malou část zásob vody v hydrosféře • oběh vody: výpar z oceánů a pevniny → srážky → část srážek se vrací do atmosféry v…",
                    "correct": false
                  }
                ],
                "explanation": "je-li propustná vrstva mezi dvěma nepropustnými, je voda v propustné vrstvě pod tlakem a při navrtání nadložní vrstvy vystřikuje nad povrch – artéská voda (stu…"
              },
              {
                "question": "K tématu „Hydrometrie: Měření vodních stavů a průto…\" — které tvrzení je správné? (8)",
                "options": [
                  {
                    "text": "14. Sladká voda na kontinentech Obr. 14.1/359 – SS",
                    "correct": false
                  },
                  {
                    "text": "systému povrchových a podpovrchových vod • srážky vypadávající na povrch se dostávají do půdy infiltrací, tj.",
                    "correct": false
                  },
                  {
                    "text": "povrchová a podpovrchová voda tvoří jen malou část zásob vody v hydrosféře • oběh vody: výpar z oceánů a pevniny → srážky → část srážek se vrací do atmosféry v…",
                    "correct": true
                  },
                  {
                    "text": "povrchová a podpovrchová voda tvoří jen malou část zásob vody v hydrosféře • oběh vody: výpar z oceánů a pevniny → srážky → část srážek se vrací do atmosféry v…",
                    "correct": false
                  }
                ],
                "explanation": "povrchová a podpovrchová voda tvoří jen malou část zásob vody v hydrosféře • oběh vody: výpar z oceánů a pevniny → srážky → část srážek se vrací do atmosféry v…"
              },
              {
                "question": "K tématu „Hydrometrie: Měření vodních stavů a průto…\" — které tvrzení je správné? (9)",
                "options": [
                  {
                    "text": "14. Sladká voda na kontinentech Obr. 14.1/359 – SS",
                    "correct": false
                  },
                  {
                    "text": "pokud se voda nestačí vsakovat (intenzivní déšť nebo půda je nasycena), vzniká na povrchu plošný odtok – ron → ronové rýhy → erozní rýhy • při odtoku dochází k…",
                    "correct": false
                  },
                  {
                    "text": "systému povrchových a podpovrchových vod • srážky vypadávající na povrch se dostávají do půdy infiltrací, tj.",
                    "correct": true
                  },
                  {
                    "text": "povrchová a podpovrchová voda tvoří jen malou část zásob vody v hydrosféře • oběh vody: výpar z oceánů a pevniny → srážky → část srážek se vrací do atmosféry v…",
                    "correct": false
                  }
                ],
                "explanation": "systému povrchových a podpovrchových vod • srážky vypadávající na povrch se dostávají do půdy infiltrací, tj."
              },
              {
                "question": "K tématu „Hydrometrie: Měření vodních stavů a průto…\" — které tvrzení je správné? (10)",
                "options": [
                  {
                    "text": "14. Sladká voda na kontinentech Obr. 14.1/359 – SS",
                    "correct": false
                  },
                  {
                    "text": "Projdi výtah a vlastní poznámky z přednášky",
                    "correct": true
                  },
                  {
                    "text": "povrchová a podpovrchová voda tvoří jen malou část zásob vody v hydrosféře • oběh vody: výpar z oceánů a pevniny → srážky → část srážek se vrací do atmosféry v…",
                    "correct": false
                  },
                  {
                    "text": "systému povrchových a podpovrchových vod • srážky vypadávající na povrch se dostávají do půdy infiltrací, tj.",
                    "correct": false
                  }
                ],
                "explanation": "Projdi výtah a vlastní poznámky z přednášky"
              },
              {
                "question": "K tématu „Hydrometrie: Měření vodních stavů a průto…\" — které tvrzení je správné? (11)",
                "options": [
                  {
                    "text": "14. Sladká voda na kontinentech Obr. 14.1/359 – SS",
                    "correct": false
                  },
                  {
                    "text": "Otevři přiložené PDF/PPT v materiálech lekce",
                    "correct": true
                  },
                  {
                    "text": "povrchová a podpovrchová voda tvoří jen malou část zásob vody v hydrosféře • oběh vody: výpar z oceánů a pevniny → srážky → část srážek se vrací do atmosféry v…",
                    "correct": false
                  },
                  {
                    "text": "systému povrchových a podpovrchových vod • srážky vypadávající na povrch se dostávají do půdy infiltrací, tj.",
                    "correct": false
                  }
                ],
                "explanation": "Otevři přiložené PDF/PPT v materiálech lekce"
              },
              {
                "question": "K tématu „Hydrometrie: Měření vodních stavů a průto…\" — které tvrzení je správné? (12)",
                "options": [
                  {
                    "text": "14. Sladká voda na kontinentech Obr. 14.1/359 – SS",
                    "correct": false
                  },
                  {
                    "text": "Propoj s předchozími a navazujícími okruhy v osnově",
                    "correct": true
                  },
                  {
                    "text": "povrchová a podpovrchová voda tvoří jen malou část zásob vody v hydrosféře • oběh vody: výpar z oceánů a pevniny → srážky → část srážek se vrací do atmosféry v…",
                    "correct": false
                  },
                  {
                    "text": "systému povrchových a podpovrchových vod • srážky vypadávající na povrch se dostávají do půdy infiltrací, tj.",
                    "correct": false
                  }
                ],
                "explanation": "Propoj s předchozími a navazujícími okruhy v osnově"
              },
              {
                "question": "K tématu „Hydrometrie: Měření vodních stavů a průto…\" — které tvrzení je správné? (13)",
                "options": [
                  {
                    "text": "povrchová a podpovrchová voda tvoří jen malou část zásob vody v hydrosféře • oběh vody: výpar z oceánů a pevniny → srážky → část srážek se vrací do atmosféry v…",
                    "correct": false
                  },
                  {
                    "text": "14. Sladká voda na kontinentech Obr. 14.1/359 – SS",
                    "correct": true
                  },
                  {
                    "text": "systému povrchových a podpovrchových vod • srážky vypadávající na povrch se dostávají do půdy infiltrací, tj.",
                    "correct": false
                  },
                  {
                    "text": "pokud se voda nestačí vsakovat (intenzivní déšť nebo půda je nasycena), vzniká na povrchu plošný odtok – ron → ronové rýhy → erozní rýhy • při odtoku dochází k…",
                    "correct": false
                  }
                ],
                "explanation": "14. Sladká voda na kontinentech Obr. 14.1/359 – SS"
              },
              {
                "question": "K tématu „Hydrometrie: Měření vodních stavů a průto…\" — které tvrzení je správné? (14)",
                "options": [
                  {
                    "text": "14. Sladká voda na kontinentech Obr. 14.1/359 – SS",
                    "correct": false
                  },
                  {
                    "text": "povrchová a podpovrchová voda tvoří jen malou část zásob vody v hydrosféře • oběh vody: výpar z oceánů a pevniny → srážky → část srážek se vrací do atmosféry v…",
                    "correct": true
                  },
                  {
                    "text": "povrchová a podpovrchová voda tvoří jen malou část zásob vody v hydrosféře • oběh vody: výpar z oceánů a pevniny → srážky → část srážek se vrací do atmosféry v…",
                    "correct": false
                  },
                  {
                    "text": "systému povrchových a podpovrchových vod • srážky vypadávající na povrch se dostávají do půdy infiltrací, tj.",
                    "correct": false
                  }
                ],
                "explanation": "povrchová a podpovrchová voda tvoří jen malou část zásob vody v hydrosféře • oběh vody: výpar z oceánů a pevniny → srážky → část srážek se vrací do atmosféry v…"
              },
              {
                "question": "K tématu „Hydrometrie: Měření vodních stavů a průto…\" — které tvrzení je správné? (15)",
                "options": [
                  {
                    "text": "14. Sladká voda na kontinentech Obr. 14.1/359 – SS",
                    "correct": false
                  },
                  {
                    "text": "systému povrchových a podpovrchových vod • srážky vypadávající na povrch se dostávají do půdy infiltrací, tj.",
                    "correct": true
                  },
                  {
                    "text": "povrchová a podpovrchová voda tvoří jen malou část zásob vody v hydrosféře • oběh vody: výpar z oceánů a pevniny → srážky → část srážek se vrací do atmosféry v…",
                    "correct": false
                  },
                  {
                    "text": "pokud se voda nestačí vsakovat (intenzivní déšť nebo půda je nasycena), vzniká na povrchu plošný odtok – ron → ronové rýhy → erozní rýhy • při odtoku dochází k…",
                    "correct": false
                  }
                ],
                "explanation": "systému povrchových a podpovrchových vod • srážky vypadávající na povrch se dostávají do půdy infiltrací, tj."
              },
              {
                "question": "K tématu „Hydrometrie: Měření vodních stavů a průto…\" — které tvrzení je správné? (16)",
                "options": [
                  {
                    "text": "14. Sladká voda na kontinentech Obr. 14.1/359 – SS",
                    "correct": false
                  },
                  {
                    "text": "pokud se voda nestačí vsakovat (intenzivní déšť nebo půda je nasycena), vzniká na povrchu plošný odtok – ron → ronové rýhy → erozní rýhy • při odtoku dochází k…",
                    "correct": true
                  },
                  {
                    "text": "povrchová a podpovrchová voda tvoří jen malou část zásob vody v hydrosféře • oběh vody: výpar z oceánů a pevniny → srážky → část srážek se vrací do atmosféry v…",
                    "correct": false
                  },
                  {
                    "text": "systému povrchových a podpovrchových vod • srážky vypadávající na povrch se dostávají do půdy infiltrací, tj.",
                    "correct": false
                  }
                ],
                "explanation": "pokud se voda nestačí vsakovat (intenzivní déšť nebo půda je nasycena), vzniká na povrchu plošný odtok – ron → ronové rýhy → erozní rýhy • při odtoku dochází k…"
              },
              {
                "question": "K tématu „Hydrometrie: Měření vodních stavů a průto…\" — které tvrzení je správné? (17)",
                "options": [
                  {
                    "text": "14. Sladká voda na kontinentech Obr. 14.1/359 – SS",
                    "correct": false
                  },
                  {
                    "text": "14.1.1 Hladina podzemní vody Obr. 14.4/361",
                    "correct": true
                  },
                  {
                    "text": "povrchová a podpovrchová voda tvoří jen malou část zásob vody v hydrosféře • oběh vody: výpar z oceánů a pevniny → srážky → část srážek se vrací do atmosféry v…",
                    "correct": false
                  },
                  {
                    "text": "systému povrchových a podpovrchových vod • srážky vypadávající na povrch se dostávají do půdy infiltrací, tj.",
                    "correct": false
                  }
                ],
                "explanation": "14.1.1 Hladina podzemní vody Obr. 14.4/361"
              },
              {
                "question": "K tématu „Hydrometrie: Měření vodních stavů a průto…\" — které tvrzení je správné? (18)",
                "options": [
                  {
                    "text": "14. Sladká voda na kontinentech Obr. 14.1/359 – SS",
                    "correct": false
                  },
                  {
                    "text": "hladina podzemní vody sahá nejvýše pod vrcholy kopců a rozvodí (souvisí se vsakováním) a klesá směrem k údolím, kde odpovídá úrovni řek, jezer nebo bažin (pros…",
                    "correct": true
                  },
                  {
                    "text": "povrchová a podpovrchová voda tvoří jen malou část zásob vody v hydrosféře • oběh vody: výpar z oceánů a pevniny → srážky → část srážek se vrací do atmosféry v…",
                    "correct": false
                  },
                  {
                    "text": "systému povrchových a podpovrchových vod • srážky vypadávající na povrch se dostávají do půdy infiltrací, tj.",
                    "correct": false
                  }
                ],
                "explanation": "hladina podzemní vody sahá nejvýše pod vrcholy kopců a rozvodí (souvisí se vsakováním) a klesá směrem k údolím, kde odpovídá úrovni řek, jezer nebo bažin (pros…"
              },
              {
                "question": "K tématu „Hydrometrie: Měření vodních stavů a průto…\" — které tvrzení je správné? (19)",
                "options": [
                  {
                    "text": "14. Sladká voda na kontinentech Obr. 14.1/359 – SS",
                    "correct": false
                  },
                  {
                    "text": "je-li propustná vrstva mezi dvěma nepropustnými, je voda v propustné vrstvě pod tlakem a při navrtání nadložní vrstvy vystřikuje nad povrch – artéská voda (stu…",
                    "correct": true
                  },
                  {
                    "text": "povrchová a podpovrchová voda tvoří jen malou část zásob vody v hydrosféře • oběh vody: výpar z oceánů a pevniny → srážky → část srážek se vrací do atmosféry v…",
                    "correct": false
                  },
                  {
                    "text": "systému povrchových a podpovrchových vod • srážky vypadávající na povrch se dostávají do půdy infiltrací, tj.",
                    "correct": false
                  }
                ],
                "explanation": "je-li propustná vrstva mezi dvěma nepropustnými, je voda v propustné vrstvě pod tlakem a při navrtání nadložní vrstvy vystřikuje nad povrch – artéská voda (stu…"
              },
              {
                "question": "K tématu „Hydrometrie: Měření vodních stavů a průto…\" — které tvrzení je správné? (20)",
                "options": [
                  {
                    "text": "14. Sladká voda na kontinentech Obr. 14.1/359 – SS",
                    "correct": false
                  },
                  {
                    "text": "povrchová a podpovrchová voda tvoří jen malou část zásob vody v hydrosféře • oběh vody: výpar z oceánů a pevniny → srážky → část srážek se vrací do atmosféry v…",
                    "correct": true
                  },
                  {
                    "text": "povrchová a podpovrchová voda tvoří jen malou část zásob vody v hydrosféře • oběh vody: výpar z oceánů a pevniny → srážky → část srážek se vrací do atmosféry v…",
                    "correct": false
                  },
                  {
                    "text": "systému povrchových a podpovrchových vod • srážky vypadávající na povrch se dostávají do půdy infiltrací, tj.",
                    "correct": false
                  }
                ],
                "explanation": "povrchová a podpovrchová voda tvoří jen malou část zásob vody v hydrosféře • oběh vody: výpar z oceánů a pevniny → srážky → část srážek se vrací do atmosféry v…"
              }
            ]
          }
        },
        {
          "id": "z0026p-11-vodni-rezim-rek-rezim-prutoku-a-typizace-rek-10",
          "title": "11. Vodní režim řek: Režim průtoků a typizace řek podle režimu,",
          "summary": "Studijní okruh: 11. Vodní režim řek: Režim průtoků a typizace řek podle režimu,",
          "minutes": 15,
          "sectionTitle": "Témata prof. Brázdila",
          "available": true,
          "blocks": [
            {
              "type": "heading",
              "text": "Témata prof. Brázdila"
            },
            {
              "type": "callout",
              "label": "Okruh",
              "text": "11. Vodní režim řek: Režim průtoků a typizace řek podle režimu,"
            },
            {
              "type": "callout",
              "label": "Jak číst tuto lekci",
              "text": "Text je výtah ze skripta a přednášek — použij ho jako mapu k učení. Detaily a obrázky najdeš v PDF/PPT v materiálech lekce."
            },
            {
              "type": "heading",
              "text": "Otázky a okruhy — FG_7"
            },
            {
              "type": "paragraph",
              "text": "14. Sladká voda na kontinentech Obr. 14.1/359 – SS"
            },
            {
              "type": "list",
              "label": "Klíčové body",
              "items": [
                "povrchová a podpovrchová voda tvoří jen malou část zásob vody v hydrosféře • oběh vody: výpar z oceánů a pevniny → srážky → část srážek se vrací do atmosféry výparem z půdy, část odtéká z pevniny povrchovým nebo podzemním odtokem • hydrologie – komplexní studium vody na Zemi, tj.",
                "systému povrchových a podpovrchových vod • srážky vypadávající na povrch se dostávají do půdy infiltrací, tj.",
                "působením gravitace pronikají mezerami mezi půdními částicemi (pukliny, otvory po živočiších, prostory po ledových krystalcích aj.) • voda, která se dostane do půdy, je půdní voda a vytváří zvodnělou vrstvu (soil water belt) – voda z této vrstvy se může dostat na povrch nebo do atmosféry evapotranspirací (výpar + transpirace) Obr."
              ]
            },
            {
              "type": "paragraph",
              "text": "pokud se voda nestačí vsakovat (intenzivní déšť nebo půda je nasycena), vzniká na povrchu plošný odtok – ron → ronové rýhy → erozní rýhy • při odtoku dochází k odnosu částic a rozpustných látek a vytváření toků a řek – modelační činitel v krajině"
            },
            {
              "type": "list",
              "label": "Klíčové body",
              "items": [
                "voda proniká díky gravitaci do hloubky • podzemní voda – část podpovrchové vody, která vyplňuje zónu saturace (pásmo nasycení) • hladina podzemní vody odděluje zónu saturace od svrchní vrstvy, kde póry nejsou plně vyplněny vodou – pásmo provzdušnění (zóna aerace) – voda se zde drží díky kapilárnímu napětí (tenký film vody na povrchu minerálů) – kapilární voda • různé dráhy pronikání vody do hloubky a do toků"
              ]
            },
            {
              "type": "paragraph",
              "text": "14.1.1 Hladina podzemní vody Obr. 14.4/361"
            },
            {
              "type": "paragraph",
              "text": "hladina podzemní vody sahá nejvýše pod vrcholy kopců a rozvodí (souvisí se vsakováním) a klesá směrem k údolím, kde odpovídá úrovni řek, jezer nebo bažin (prosakování) • při srážkách roste hladina vody pod vrcholy kopců a rozvodí, v období sucha zase klesá"
            },
            {
              "type": "paragraph",
              "text": "14.1.2 Zvodnělé vrstvy • sedimentární vrstvy výrazně ovlivňují ukládání a pohyb podzemní vody • zvodnělá vrstva (zvodeň) – podloží písku nebo pískovce, obsahující volně protékající podzemní vodu • nepropustná vrstva – podloží jílů nebo břidlic obsahují málo volné vody • čočkovité břidlice vytváří zavěšené vodní těleso Obr. 14.5/362"
            },
            {
              "type": "paragraph",
              "text": "je-li propustná vrstva mezi dvěma nepropustnými, je voda v propustné vrstvě pod tlakem a při navrtání nadložní vrstvy vystřikuje nad povrch – artéská voda (studna) Obr. 14.6/362"
            },
            {
              "type": "list",
              "label": "Klíčové body",
              "items": [
                "povrchová a podpovrchová voda tvoří jen malou část zásob vody v hydrosféře • oběh vody: výpar z oceánů a pevniny → srážky → část srážek se vrací do atmosféry výparem z půdy, část odtéká z pevniny povrchovým nebo podzemním odtokem • hydrologie – komplexní studium vody na Zemi, tj.",
                "systému povrchových a podpovrchových vod • srážky vypadávající na povrch se dostávají do půdy infiltrací, tj.",
                "působením gravitace pronikají mezerami mezi půdními částicemi (pukliny, otvory po živočiších, prostory po ledových krystalcích aj.) • voda, která se dostane do půdy, je půdní voda a vytváří zvodnělou vrstvu (soil water belt) – voda z této vrstvy se může dostat na povrch nebo do atmosféry evapotranspirací (výpar + transpirace) Obr.",
                "voda proniká díky gravitaci do hloubky • podzemní voda – část podpovrchové vody, která vyplňuje zónu saturace (pásmo nasycení) • hladina podzemní vody odděluje zónu saturace od svrchní vrstvy, kde póry nejsou plně vyplněny vodou – pásmo provzdušnění (zóna aerace) – voda se zde drží díky kapilárnímu napětí (tenký film vody na povrchu minerálů) – kapilární voda • různé dráhy pronikání vody do hloubky a do toků"
              ]
            },
            {
              "type": "list",
              "label": "Doporučený postup",
              "items": [
                "Projdi výtah a vlastní poznámky z přednášky",
                "Otevři přiložené PDF/PPT v materiálech lekce",
                "Propoj s předchozími a navazujícími okruhy v osnově"
              ]
            }
          ],
          "resources": [
            {
              "kind": "document",
              "title": "FG_7 — okruhy Brázdil",
              "url": "/materials/geografie-kartografie/z0026p/FG_7.doc",
              "source": "Brázdil",
              "note": "Sdílený materiál pro více okruhů hydrologie"
            },
            {
              "kind": "link",
              "title": "IS MUNI — Fyzická geografie",
              "url": "https://is.muni.cz/predmet/sci/Z0026p",
              "source": "IS MUNI"
            }
          ],
          "quiz": {
            "title": "Kvíz: Vodní režim řek",
            "questions": [
              {
                "question": "Vodní režim řeky popisuje…",
                "options": [
                  {
                    "text": "časové změny průtoku v závislosti na zdrojích vody",
                    "correct": true
                  },
                  {
                    "text": "pouze průměrnou teplotu vody",
                    "correct": false
                  },
                  {
                    "text": "chemické složení řeky",
                    "correct": false
                  },
                  {
                    "text": "šířku říční nivy v mapě",
                    "correct": false
                  }
                ],
                "explanation": "Zahrnuje základní (podzemní) i přímý (dešťový) odtok."
              },
              {
                "question": "V období sucha obvykle…",
                "options": [
                  {
                    "text": "klesá hladina podzemní vody a základní průtok",
                    "correct": true
                  },
                  {
                    "text": "stoupá hladina pod rozvodím",
                    "correct": false
                  },
                  {
                    "text": "průtok výhradně roste",
                    "correct": false
                  },
                  {
                    "text": "zmizí podzemní voda úplně",
                    "correct": false
                  }
                ],
                "explanation": "Řeky jsou zásobovány z podzemních zdrojů i v období bez srážek."
              },
              {
                "question": "Povodňová vlna na řece často souvisí s…",
                "options": [
                  {
                    "text": "plošným odtokem po intenzivních srážkách",
                    "correct": true
                  },
                  {
                    "text": "pouze táním ledovce",
                    "correct": false
                  },
                  {
                    "text": "poklesem teploty",
                    "correct": false
                  },
                  {
                    "text": "absencí srážek",
                    "correct": false
                  }
                ],
                "explanation": "Rychlý nárůst průtoku, když půda nevsákne dešťovou vodu."
              },
              {
                "question": "Řeky jako geomorfologický činitel…",
                "options": [
                  {
                    "text": "odnášejí sedimenty a modelují krajinu",
                    "correct": true
                  },
                  {
                    "text": "nemění reliéf",
                    "correct": false
                  },
                  {
                    "text": "působí jen v pouštích",
                    "correct": false
                  },
                  {
                    "text": "vznikají pouze pod ledovcem",
                    "correct": false
                  }
                ],
                "explanation": "Fluviální eroze a akumulace formují údolí a náplavy."
              },
              {
                "question": "Které tvrzení odpovídá obsahu lekce?",
                "options": [
                  {
                    "text": "Výklad k tomuto okruhu neobsahuje tuto informaci.",
                    "correct": false
                  },
                  {
                    "text": "14. Sladká voda na kontinentech Obr. 14.1/359 – SS",
                    "correct": true
                  },
                  {
                    "text": "Toto tvrzení nelze z výkladu lekce ověřit.",
                    "correct": false
                  },
                  {
                    "text": "povrchová a podpovrchová voda tvoří jen malou část zásob vody v hydrosféře • oběh vody: výpar z oceánů a pevniny → srážky → část srážek se vrací do atmosféry v…",
                    "correct": false
                  }
                ],
                "explanation": "Správně: 14. Sladká voda na kontinentech Obr. 14.1/359 – SS"
              },
              {
                "question": "Které tvrzení patří k okruhu „Vodní režim řek: Režim průtoků a typizace řek p…\"?",
                "options": [
                  {
                    "text": "systému povrchových a podpovrchových vod • srážky vypadávající na povrch se dostávají do půdy infiltrací, tj.",
                    "correct": false
                  },
                  {
                    "text": "povrchová a podpovrchová voda tvoří jen malou část zásob vody v hydrosféře • oběh vody: výpar z oceánů a pevniny → srážky → část srážek se vrací do atmosféry výparem z půdy, část …",
                    "correct": false
                  },
                  {
                    "text": "povrchová a podpovrchová voda tvoří jen malou část zásob vody v hydrosféře • oběh vody: výpar z oceánů a pevniny → srážky → část srážek se vrací do atmosféry výparem z půdy, část …",
                    "correct": true
                  },
                  {
                    "text": "14. Sladká voda na kontinentech Obr. 14.1/359 – SS",
                    "correct": false
                  }
                ],
                "explanation": "povrchová a podpovrchová voda tvoří jen malou část zásob vody v hydrosféře • oběh vody: výpar z oceánů a pevniny → srážky → část srážek se vrací do atmosféry výparem z půdy, část …"
              },
              {
                "question": "K tématu „Vodní režim řek: Režim průtoků a typizace…\" — které tvrzení je správné? (7)",
                "options": [
                  {
                    "text": "14. Sladká voda na kontinentech Obr. 14.1/359 – SS",
                    "correct": false
                  },
                  {
                    "text": "systému povrchových a podpovrchových vod • srážky vypadávající na povrch se dostávají do půdy infiltrací, tj.",
                    "correct": false
                  },
                  {
                    "text": "je-li propustná vrstva mezi dvěma nepropustnými, je voda v propustné vrstvě pod tlakem a při navrtání nadložní vrstvy vystřikuje nad povrch – artéská voda (stu…",
                    "correct": true
                  },
                  {
                    "text": "povrchová a podpovrchová voda tvoří jen malou část zásob vody v hydrosféře • oběh vody: výpar z oceánů a pevniny → srážky → část srážek se vrací do atmosféry v…",
                    "correct": false
                  }
                ],
                "explanation": "je-li propustná vrstva mezi dvěma nepropustnými, je voda v propustné vrstvě pod tlakem a při navrtání nadložní vrstvy vystřikuje nad povrch – artéská voda (stu…"
              },
              {
                "question": "K tématu „Vodní režim řek: Režim průtoků a typizace…\" — které tvrzení je správné? (8)",
                "options": [
                  {
                    "text": "14. Sladká voda na kontinentech Obr. 14.1/359 – SS",
                    "correct": false
                  },
                  {
                    "text": "systému povrchových a podpovrchových vod • srážky vypadávající na povrch se dostávají do půdy infiltrací, tj.",
                    "correct": false
                  },
                  {
                    "text": "povrchová a podpovrchová voda tvoří jen malou část zásob vody v hydrosféře • oběh vody: výpar z oceánů a pevniny → srážky → část srážek se vrací do atmosféry v…",
                    "correct": true
                  },
                  {
                    "text": "povrchová a podpovrchová voda tvoří jen malou část zásob vody v hydrosféře • oběh vody: výpar z oceánů a pevniny → srážky → část srážek se vrací do atmosféry v…",
                    "correct": false
                  }
                ],
                "explanation": "povrchová a podpovrchová voda tvoří jen malou část zásob vody v hydrosféře • oběh vody: výpar z oceánů a pevniny → srážky → část srážek se vrací do atmosféry v…"
              },
              {
                "question": "K tématu „Vodní režim řek: Režim průtoků a typizace…\" — které tvrzení je správné? (9)",
                "options": [
                  {
                    "text": "14. Sladká voda na kontinentech Obr. 14.1/359 – SS",
                    "correct": false
                  },
                  {
                    "text": "pokud se voda nestačí vsakovat (intenzivní déšť nebo půda je nasycena), vzniká na povrchu plošný odtok – ron → ronové rýhy → erozní rýhy • při odtoku dochází k…",
                    "correct": false
                  },
                  {
                    "text": "systému povrchových a podpovrchových vod • srážky vypadávající na povrch se dostávají do půdy infiltrací, tj.",
                    "correct": true
                  },
                  {
                    "text": "povrchová a podpovrchová voda tvoří jen malou část zásob vody v hydrosféře • oběh vody: výpar z oceánů a pevniny → srážky → část srážek se vrací do atmosféry v…",
                    "correct": false
                  }
                ],
                "explanation": "systému povrchových a podpovrchových vod • srážky vypadávající na povrch se dostávají do půdy infiltrací, tj."
              },
              {
                "question": "K tématu „Vodní režim řek: Režim průtoků a typizace…\" — které tvrzení je správné? (10)",
                "options": [
                  {
                    "text": "14. Sladká voda na kontinentech Obr. 14.1/359 – SS",
                    "correct": false
                  },
                  {
                    "text": "Projdi výtah a vlastní poznámky z přednášky",
                    "correct": true
                  },
                  {
                    "text": "povrchová a podpovrchová voda tvoří jen malou část zásob vody v hydrosféře • oběh vody: výpar z oceánů a pevniny → srážky → část srážek se vrací do atmosféry v…",
                    "correct": false
                  },
                  {
                    "text": "systému povrchových a podpovrchových vod • srážky vypadávající na povrch se dostávají do půdy infiltrací, tj.",
                    "correct": false
                  }
                ],
                "explanation": "Projdi výtah a vlastní poznámky z přednášky"
              },
              {
                "question": "K tématu „Vodní režim řek: Režim průtoků a typizace…\" — které tvrzení je správné? (11)",
                "options": [
                  {
                    "text": "14. Sladká voda na kontinentech Obr. 14.1/359 – SS",
                    "correct": false
                  },
                  {
                    "text": "Otevři přiložené PDF/PPT v materiálech lekce",
                    "correct": true
                  },
                  {
                    "text": "povrchová a podpovrchová voda tvoří jen malou část zásob vody v hydrosféře • oběh vody: výpar z oceánů a pevniny → srážky → část srážek se vrací do atmosféry v…",
                    "correct": false
                  },
                  {
                    "text": "systému povrchových a podpovrchových vod • srážky vypadávající na povrch se dostávají do půdy infiltrací, tj.",
                    "correct": false
                  }
                ],
                "explanation": "Otevři přiložené PDF/PPT v materiálech lekce"
              },
              {
                "question": "K tématu „Vodní režim řek: Režim průtoků a typizace…\" — které tvrzení je správné? (12)",
                "options": [
                  {
                    "text": "14. Sladká voda na kontinentech Obr. 14.1/359 – SS",
                    "correct": false
                  },
                  {
                    "text": "Propoj s předchozími a navazujícími okruhy v osnově",
                    "correct": true
                  },
                  {
                    "text": "povrchová a podpovrchová voda tvoří jen malou část zásob vody v hydrosféře • oběh vody: výpar z oceánů a pevniny → srážky → část srážek se vrací do atmosféry v…",
                    "correct": false
                  },
                  {
                    "text": "systému povrchových a podpovrchových vod • srážky vypadávající na povrch se dostávají do půdy infiltrací, tj.",
                    "correct": false
                  }
                ],
                "explanation": "Propoj s předchozími a navazujícími okruhy v osnově"
              },
              {
                "question": "K tématu „Vodní režim řek: Režim průtoků a typizace…\" — které tvrzení je správné? (13)",
                "options": [
                  {
                    "text": "povrchová a podpovrchová voda tvoří jen malou část zásob vody v hydrosféře • oběh vody: výpar z oceánů a pevniny → srážky → část srážek se vrací do atmosféry v…",
                    "correct": false
                  },
                  {
                    "text": "14. Sladká voda na kontinentech Obr. 14.1/359 – SS",
                    "correct": true
                  },
                  {
                    "text": "systému povrchových a podpovrchových vod • srážky vypadávající na povrch se dostávají do půdy infiltrací, tj.",
                    "correct": false
                  },
                  {
                    "text": "pokud se voda nestačí vsakovat (intenzivní déšť nebo půda je nasycena), vzniká na povrchu plošný odtok – ron → ronové rýhy → erozní rýhy • při odtoku dochází k…",
                    "correct": false
                  }
                ],
                "explanation": "14. Sladká voda na kontinentech Obr. 14.1/359 – SS"
              },
              {
                "question": "K tématu „Vodní režim řek: Režim průtoků a typizace…\" — které tvrzení je správné? (14)",
                "options": [
                  {
                    "text": "14. Sladká voda na kontinentech Obr. 14.1/359 – SS",
                    "correct": false
                  },
                  {
                    "text": "povrchová a podpovrchová voda tvoří jen malou část zásob vody v hydrosféře • oběh vody: výpar z oceánů a pevniny → srážky → část srážek se vrací do atmosféry v…",
                    "correct": true
                  },
                  {
                    "text": "povrchová a podpovrchová voda tvoří jen malou část zásob vody v hydrosféře • oběh vody: výpar z oceánů a pevniny → srážky → část srážek se vrací do atmosféry v…",
                    "correct": false
                  },
                  {
                    "text": "systému povrchových a podpovrchových vod • srážky vypadávající na povrch se dostávají do půdy infiltrací, tj.",
                    "correct": false
                  }
                ],
                "explanation": "povrchová a podpovrchová voda tvoří jen malou část zásob vody v hydrosféře • oběh vody: výpar z oceánů a pevniny → srážky → část srážek se vrací do atmosféry v…"
              },
              {
                "question": "K tématu „Vodní režim řek: Režim průtoků a typizace…\" — které tvrzení je správné? (15)",
                "options": [
                  {
                    "text": "14. Sladká voda na kontinentech Obr. 14.1/359 – SS",
                    "correct": false
                  },
                  {
                    "text": "systému povrchových a podpovrchových vod • srážky vypadávající na povrch se dostávají do půdy infiltrací, tj.",
                    "correct": true
                  },
                  {
                    "text": "povrchová a podpovrchová voda tvoří jen malou část zásob vody v hydrosféře • oběh vody: výpar z oceánů a pevniny → srážky → část srážek se vrací do atmosféry v…",
                    "correct": false
                  },
                  {
                    "text": "pokud se voda nestačí vsakovat (intenzivní déšť nebo půda je nasycena), vzniká na povrchu plošný odtok – ron → ronové rýhy → erozní rýhy • při odtoku dochází k…",
                    "correct": false
                  }
                ],
                "explanation": "systému povrchových a podpovrchových vod • srážky vypadávající na povrch se dostávají do půdy infiltrací, tj."
              },
              {
                "question": "K tématu „Vodní režim řek: Režim průtoků a typizace…\" — které tvrzení je správné? (16)",
                "options": [
                  {
                    "text": "14. Sladká voda na kontinentech Obr. 14.1/359 – SS",
                    "correct": false
                  },
                  {
                    "text": "pokud se voda nestačí vsakovat (intenzivní déšť nebo půda je nasycena), vzniká na povrchu plošný odtok – ron → ronové rýhy → erozní rýhy • při odtoku dochází k…",
                    "correct": true
                  },
                  {
                    "text": "povrchová a podpovrchová voda tvoří jen malou část zásob vody v hydrosféře • oběh vody: výpar z oceánů a pevniny → srážky → část srážek se vrací do atmosféry v…",
                    "correct": false
                  },
                  {
                    "text": "systému povrchových a podpovrchových vod • srážky vypadávající na povrch se dostávají do půdy infiltrací, tj.",
                    "correct": false
                  }
                ],
                "explanation": "pokud se voda nestačí vsakovat (intenzivní déšť nebo půda je nasycena), vzniká na povrchu plošný odtok – ron → ronové rýhy → erozní rýhy • při odtoku dochází k…"
              },
              {
                "question": "K tématu „Vodní režim řek: Režim průtoků a typizace…\" — které tvrzení je správné? (17)",
                "options": [
                  {
                    "text": "14. Sladká voda na kontinentech Obr. 14.1/359 – SS",
                    "correct": false
                  },
                  {
                    "text": "14.1.1 Hladina podzemní vody Obr. 14.4/361",
                    "correct": true
                  },
                  {
                    "text": "povrchová a podpovrchová voda tvoří jen malou část zásob vody v hydrosféře • oběh vody: výpar z oceánů a pevniny → srážky → část srážek se vrací do atmosféry v…",
                    "correct": false
                  },
                  {
                    "text": "systému povrchových a podpovrchových vod • srážky vypadávající na povrch se dostávají do půdy infiltrací, tj.",
                    "correct": false
                  }
                ],
                "explanation": "14.1.1 Hladina podzemní vody Obr. 14.4/361"
              },
              {
                "question": "K tématu „Vodní režim řek: Režim průtoků a typizace…\" — které tvrzení je správné? (18)",
                "options": [
                  {
                    "text": "14. Sladká voda na kontinentech Obr. 14.1/359 – SS",
                    "correct": false
                  },
                  {
                    "text": "hladina podzemní vody sahá nejvýše pod vrcholy kopců a rozvodí (souvisí se vsakováním) a klesá směrem k údolím, kde odpovídá úrovni řek, jezer nebo bažin (pros…",
                    "correct": true
                  },
                  {
                    "text": "povrchová a podpovrchová voda tvoří jen malou část zásob vody v hydrosféře • oběh vody: výpar z oceánů a pevniny → srážky → část srážek se vrací do atmosféry v…",
                    "correct": false
                  },
                  {
                    "text": "systému povrchových a podpovrchových vod • srážky vypadávající na povrch se dostávají do půdy infiltrací, tj.",
                    "correct": false
                  }
                ],
                "explanation": "hladina podzemní vody sahá nejvýše pod vrcholy kopců a rozvodí (souvisí se vsakováním) a klesá směrem k údolím, kde odpovídá úrovni řek, jezer nebo bažin (pros…"
              },
              {
                "question": "K tématu „Vodní režim řek: Režim průtoků a typizace…\" — které tvrzení je správné? (19)",
                "options": [
                  {
                    "text": "14. Sladká voda na kontinentech Obr. 14.1/359 – SS",
                    "correct": false
                  },
                  {
                    "text": "je-li propustná vrstva mezi dvěma nepropustnými, je voda v propustné vrstvě pod tlakem a při navrtání nadložní vrstvy vystřikuje nad povrch – artéská voda (stu…",
                    "correct": true
                  },
                  {
                    "text": "povrchová a podpovrchová voda tvoří jen malou část zásob vody v hydrosféře • oběh vody: výpar z oceánů a pevniny → srážky → část srážek se vrací do atmosféry v…",
                    "correct": false
                  },
                  {
                    "text": "systému povrchových a podpovrchových vod • srážky vypadávající na povrch se dostávají do půdy infiltrací, tj.",
                    "correct": false
                  }
                ],
                "explanation": "je-li propustná vrstva mezi dvěma nepropustnými, je voda v propustné vrstvě pod tlakem a při navrtání nadložní vrstvy vystřikuje nad povrch – artéská voda (stu…"
              },
              {
                "question": "K tématu „Vodní režim řek: Režim průtoků a typizace…\" — které tvrzení je správné? (20)",
                "options": [
                  {
                    "text": "14. Sladká voda na kontinentech Obr. 14.1/359 – SS",
                    "correct": false
                  },
                  {
                    "text": "povrchová a podpovrchová voda tvoří jen malou část zásob vody v hydrosféře • oběh vody: výpar z oceánů a pevniny → srážky → část srážek se vrací do atmosféry v…",
                    "correct": true
                  },
                  {
                    "text": "povrchová a podpovrchová voda tvoří jen malou část zásob vody v hydrosféře • oběh vody: výpar z oceánů a pevniny → srážky → část srážek se vrací do atmosféry v…",
                    "correct": false
                  },
                  {
                    "text": "systému povrchových a podpovrchových vod • srážky vypadávající na povrch se dostávají do půdy infiltrací, tj.",
                    "correct": false
                  }
                ],
                "explanation": "povrchová a podpovrchová voda tvoří jen malou část zásob vody v hydrosféře • oběh vody: výpar z oceánů a pevniny → srážky → část srážek se vrací do atmosféry v…"
              }
            ]
          }
        },
        {
          "id": "z0026p-12-hydrologie-podpovrchovych-vod-zdroje-vzniku-p-11",
          "title": "12. Hydrologie podpovrchových vod: Zdroje vzniku podpovrchových vod, druhy vody v horninách, pozorování podzemních vod, zásoby, režimy, využívání.",
          "summary": "12. Hydrologie podpovrchových vod: Zdroje vzniku podpovrchových vod, druhy vody v horninách, pozorování podzemních vod, zásoby, režimy, v…",
          "minutes": 20,
          "sectionTitle": "Témata prof. Brázdila",
          "available": true,
          "blocks": [
            {
              "type": "heading",
              "text": "Témata prof. Brázdila"
            },
            {
              "type": "callout",
              "label": "Okruh",
              "text": "12. Hydrologie podpovrchových vod: Zdroje vzniku podpovrchových vod, druhy vody v horninách, pozorování podzemních vod, zásoby, režimy, využívání."
            },
            {
              "type": "callout",
              "label": "Jak číst tuto lekci",
              "text": "Text je výtah ze skripta a přednášek — použij ho jako mapu k učení. Detaily a obrázky najdeš v PDF/PPT v materiálech lekce."
            },
            {
              "type": "heading",
              "text": "Otázky a okruhy — FG_7"
            },
            {
              "type": "paragraph",
              "text": "14. Sladká voda na kontinentech Obr. 14.1/359 – SS"
            },
            {
              "type": "list",
              "label": "Klíčové body",
              "items": [
                "povrchová a podpovrchová voda tvoří jen malou část zásob vody v hydrosféře • oběh vody: výpar z oceánů a pevniny → srážky → část srážek se vrací do atmosféry výparem z půdy, část odtéká z pevniny povrchovým nebo podzemním odtokem • hydrologie – komplexní studium vody na Zemi, tj.",
                "systému povrchových a podpovrchových vod • srážky vypadávající na povrch se dostávají do půdy infiltrací, tj.",
                "působením gravitace pronikají mezerami mezi půdními částicemi (pukliny, otvory po živočiších, prostory po ledových krystalcích aj.) • voda, která se dostane do půdy, je půdní voda a vytváří zvodnělou vrstvu (soil water belt) – voda z této vrstvy se může dostat na povrch nebo do atmosféry evapotranspirací (výpar + transpirace) Obr."
              ]
            },
            {
              "type": "paragraph",
              "text": "pokud se voda nestačí vsakovat (intenzivní déšť nebo půda je nasycena), vzniká na povrchu plošný odtok – ron → ronové rýhy → erozní rýhy • při odtoku dochází k odnosu částic a rozpustných látek a vytváření toků a řek – modelační činitel v krajině"
            },
            {
              "type": "list",
              "label": "Klíčové body",
              "items": [
                "voda proniká díky gravitaci do hloubky • podzemní voda – část podpovrchové vody, která vyplňuje zónu saturace (pásmo nasycení) • hladina podzemní vody odděluje zónu saturace od svrchní vrstvy, kde póry nejsou plně vyplněny vodou – pásmo provzdušnění (zóna aerace) – voda se zde drží díky kapilárnímu napětí (tenký film vody na povrchu minerálů) – kapilární voda • různé dráhy pronikání vody do hloubky a do toků"
              ]
            },
            {
              "type": "paragraph",
              "text": "14.1.1 Hladina podzemní vody Obr. 14.4/361"
            },
            {
              "type": "paragraph",
              "text": "hladina podzemní vody sahá nejvýše pod vrcholy kopců a rozvodí (souvisí se vsakováním) a klesá směrem k údolím, kde odpovídá úrovni řek, jezer nebo bažin (prosakování) • při srážkách roste hladina vody pod vrcholy kopců a rozvodí, v období sucha zase klesá"
            },
            {
              "type": "paragraph",
              "text": "14.1.2 Zvodnělé vrstvy • sedimentární vrstvy výrazně ovlivňují ukládání a pohyb podzemní vody • zvodnělá vrstva (zvodeň) – podloží písku nebo pískovce, obsahující volně protékající podzemní vodu • nepropustná vrstva – podloží jílů nebo břidlic obsahují málo volné vody • čočkovité břidlice vytváří zavěšené vodní těleso Obr. 14.5/362"
            },
            {
              "type": "paragraph",
              "text": "je-li propustná vrstva mezi dvěma nepropustnými, je voda v propustné vrstvě pod tlakem a při navrtání nadložní vrstvy vystřikuje nad povrch – artéská voda (studna) Obr. 14.6/362"
            },
            {
              "type": "list",
              "label": "Klíčové body",
              "items": [
                "povrchová a podpovrchová voda tvoří jen malou část zásob vody v hydrosféře • oběh vody: výpar z oceánů a pevniny → srážky → část srážek se vrací do atmosféry výparem z půdy, část odtéká z pevniny povrchovým nebo podzemním odtokem • hydrologie – komplexní studium vody na Zemi, tj.",
                "systému povrchových a podpovrchových vod • srážky vypadávající na povrch se dostávají do půdy infiltrací, tj.",
                "působením gravitace pronikají mezerami mezi půdními částicemi (pukliny, otvory po živočiších, prostory po ledových krystalcích aj.) • voda, která se dostane do půdy, je půdní voda a vytváří zvodnělou vrstvu (soil water belt) – voda z této vrstvy se může dostat na povrch nebo do atmosféry evapotranspirací (výpar + transpirace) Obr.",
                "voda proniká díky gravitaci do hloubky • podzemní voda – část podpovrchové vody, která vyplňuje zónu saturace (pásmo nasycení) • hladina podzemní vody odděluje zónu saturace od svrchní vrstvy, kde póry nejsou plně vyplněny vodou – pásmo provzdušnění (zóna aerace) – voda se zde drží díky kapilárnímu napětí (tenký film vody na povrchu minerálů) – kapilární voda • různé dráhy pronikání vody do hloubky a do toků"
              ]
            },
            {
              "type": "list",
              "label": "Doporučený postup",
              "items": [
                "Projdi výtah a vlastní poznámky z přednášky",
                "Otevři přiložené PDF/PPT v materiálech lekce",
                "Propoj s předchozími a navazujícími okruhy v osnově"
              ]
            }
          ],
          "resources": [
            {
              "kind": "document",
              "title": "FG_7 — okruhy Brázdil",
              "url": "/materials/geografie-kartografie/z0026p/FG_7.doc",
              "source": "Brázdil",
              "note": "Sdílený materiál pro více okruhů hydrologie"
            },
            {
              "kind": "link",
              "title": "IS MUNI — Fyzická geografie",
              "url": "https://is.muni.cz/predmet/sci/Z0026p",
              "source": "IS MUNI"
            }
          ],
          "quiz": {
            "title": "Kvíz: Podpovrchové vody",
            "questions": [
              {
                "question": "Půdní voda (soil water belt) je…",
                "options": [
                  {
                    "text": "voda v půdním pokryvu mezi povrchem a zónou saturace",
                    "correct": true
                  },
                  {
                    "text": "voda pouze v řece",
                    "correct": false
                  },
                  {
                    "text": "voda v atmosféře",
                    "correct": false
                  },
                  {
                    "text": "voda v ledovci",
                    "correct": false
                  }
                ],
                "explanation": "Může se vracet výparem nebo prosakovat hlouběji."
              },
              {
                "question": "Nepropustná vrstva typicky obsahuje…",
                "options": [
                  {
                    "text": "jíly nebo břidlice s málo volné vody",
                    "correct": true
                  },
                  {
                    "text": "čistý štěrk",
                    "correct": false
                  },
                  {
                    "text": "propustný písek",
                    "correct": false
                  },
                  {
                    "text": "porézní vápenec bez jílů",
                    "correct": false
                  }
                ],
                "explanation": "Brání sestupu vody a vytváří podmínky pro artéské soustavy."
              },
              {
                "question": "Čočkovité břidlice mohou vytvořit…",
                "options": [
                  {
                    "text": "zavěšené vodní těleso",
                    "correct": true
                  },
                  {
                    "text": "vždy artéský vrt",
                    "correct": false
                  },
                  {
                    "text": "pouze povrchový odtok",
                    "correct": false
                  },
                  {
                    "text": "kritickou zónu",
                    "correct": false
                  }
                ],
                "explanation": "Geologická struktura určuje uložení podzemní vody."
              },
              {
                "question": "Hlavní zdroj podzemní vody na pevnině je…",
                "options": [
                  {
                    "text": "infiltrace srážkové vody",
                    "correct": true
                  },
                  {
                    "text": "výhradně tání ledovců",
                    "correct": false
                  },
                  {
                    "text": "kondenzace v jeskyních",
                    "correct": false
                  },
                  {
                    "text": "proudění z oceánu pod kontinentem",
                    "correct": false
                  }
                ],
                "explanation": "Srážky doplňují zásoby v zóně saturace."
              },
              {
                "question": "Které tvrzení odpovídá obsahu lekce?",
                "options": [
                  {
                    "text": "Výklad k tomuto okruhu neobsahuje tuto informaci.",
                    "correct": false
                  },
                  {
                    "text": "14. Sladká voda na kontinentech Obr. 14.1/359 – SS",
                    "correct": true
                  },
                  {
                    "text": "Toto tvrzení nelze z výkladu lekce ověřit.",
                    "correct": false
                  },
                  {
                    "text": "povrchová a podpovrchová voda tvoří jen malou část zásob vody v hydrosféře • oběh vody: výpar z oceánů a pevniny → srážky → část srážek se vrací do atmosféry v…",
                    "correct": false
                  }
                ],
                "explanation": "Správně: 14. Sladká voda na kontinentech Obr. 14.1/359 – SS"
              },
              {
                "question": "Které tvrzení patří k okruhu „Hydrologie podpovrchových vod: Zdroje vzniku po…\"?",
                "options": [
                  {
                    "text": "systému povrchových a podpovrchových vod • srážky vypadávající na povrch se dostávají do půdy infiltrací, tj.",
                    "correct": false
                  },
                  {
                    "text": "povrchová a podpovrchová voda tvoří jen malou část zásob vody v hydrosféře • oběh vody: výpar z oceánů a pevniny → srážky → část srážek se vrací do atmosféry výparem z půdy, část …",
                    "correct": false
                  },
                  {
                    "text": "povrchová a podpovrchová voda tvoří jen malou část zásob vody v hydrosféře • oběh vody: výpar z oceánů a pevniny → srážky → část srážek se vrací do atmosféry výparem z půdy, část …",
                    "correct": true
                  },
                  {
                    "text": "14. Sladká voda na kontinentech Obr. 14.1/359 – SS",
                    "correct": false
                  }
                ],
                "explanation": "povrchová a podpovrchová voda tvoří jen malou část zásob vody v hydrosféře • oběh vody: výpar z oceánů a pevniny → srážky → část srážek se vrací do atmosféry výparem z půdy, část …"
              },
              {
                "question": "K tématu „Hydrologie podpovrchových vod: Zdroje vzn…\" — které tvrzení je správné? (7)",
                "options": [
                  {
                    "text": "14. Sladká voda na kontinentech Obr. 14.1/359 – SS",
                    "correct": false
                  },
                  {
                    "text": "systému povrchových a podpovrchových vod • srážky vypadávající na povrch se dostávají do půdy infiltrací, tj.",
                    "correct": false
                  },
                  {
                    "text": "je-li propustná vrstva mezi dvěma nepropustnými, je voda v propustné vrstvě pod tlakem a při navrtání nadložní vrstvy vystřikuje nad povrch – artéská voda (stu…",
                    "correct": true
                  },
                  {
                    "text": "povrchová a podpovrchová voda tvoří jen malou část zásob vody v hydrosféře • oběh vody: výpar z oceánů a pevniny → srážky → část srážek se vrací do atmosféry v…",
                    "correct": false
                  }
                ],
                "explanation": "je-li propustná vrstva mezi dvěma nepropustnými, je voda v propustné vrstvě pod tlakem a při navrtání nadložní vrstvy vystřikuje nad povrch – artéská voda (stu…"
              },
              {
                "question": "K tématu „Hydrologie podpovrchových vod: Zdroje vzn…\" — které tvrzení je správné? (8)",
                "options": [
                  {
                    "text": "14. Sladká voda na kontinentech Obr. 14.1/359 – SS",
                    "correct": false
                  },
                  {
                    "text": "systému povrchových a podpovrchových vod • srážky vypadávající na povrch se dostávají do půdy infiltrací, tj.",
                    "correct": false
                  },
                  {
                    "text": "povrchová a podpovrchová voda tvoří jen malou část zásob vody v hydrosféře • oběh vody: výpar z oceánů a pevniny → srážky → část srážek se vrací do atmosféry v…",
                    "correct": true
                  },
                  {
                    "text": "povrchová a podpovrchová voda tvoří jen malou část zásob vody v hydrosféře • oběh vody: výpar z oceánů a pevniny → srážky → část srážek se vrací do atmosféry v…",
                    "correct": false
                  }
                ],
                "explanation": "povrchová a podpovrchová voda tvoří jen malou část zásob vody v hydrosféře • oběh vody: výpar z oceánů a pevniny → srážky → část srážek se vrací do atmosféry v…"
              },
              {
                "question": "K tématu „Hydrologie podpovrchových vod: Zdroje vzn…\" — které tvrzení je správné? (9)",
                "options": [
                  {
                    "text": "14. Sladká voda na kontinentech Obr. 14.1/359 – SS",
                    "correct": false
                  },
                  {
                    "text": "pokud se voda nestačí vsakovat (intenzivní déšť nebo půda je nasycena), vzniká na povrchu plošný odtok – ron → ronové rýhy → erozní rýhy • při odtoku dochází k…",
                    "correct": false
                  },
                  {
                    "text": "systému povrchových a podpovrchových vod • srážky vypadávající na povrch se dostávají do půdy infiltrací, tj.",
                    "correct": true
                  },
                  {
                    "text": "povrchová a podpovrchová voda tvoří jen malou část zásob vody v hydrosféře • oběh vody: výpar z oceánů a pevniny → srážky → část srážek se vrací do atmosféry v…",
                    "correct": false
                  }
                ],
                "explanation": "systému povrchových a podpovrchových vod • srážky vypadávající na povrch se dostávají do půdy infiltrací, tj."
              },
              {
                "question": "K tématu „Hydrologie podpovrchových vod: Zdroje vzn…\" — které tvrzení je správné? (10)",
                "options": [
                  {
                    "text": "14. Sladká voda na kontinentech Obr. 14.1/359 – SS",
                    "correct": false
                  },
                  {
                    "text": "Projdi výtah a vlastní poznámky z přednášky",
                    "correct": true
                  },
                  {
                    "text": "povrchová a podpovrchová voda tvoří jen malou část zásob vody v hydrosféře • oběh vody: výpar z oceánů a pevniny → srážky → část srážek se vrací do atmosféry v…",
                    "correct": false
                  },
                  {
                    "text": "systému povrchových a podpovrchových vod • srážky vypadávající na povrch se dostávají do půdy infiltrací, tj.",
                    "correct": false
                  }
                ],
                "explanation": "Projdi výtah a vlastní poznámky z přednášky"
              },
              {
                "question": "K tématu „Hydrologie podpovrchových vod: Zdroje vzn…\" — které tvrzení je správné? (11)",
                "options": [
                  {
                    "text": "14. Sladká voda na kontinentech Obr. 14.1/359 – SS",
                    "correct": false
                  },
                  {
                    "text": "Otevři přiložené PDF/PPT v materiálech lekce",
                    "correct": true
                  },
                  {
                    "text": "povrchová a podpovrchová voda tvoří jen malou část zásob vody v hydrosféře • oběh vody: výpar z oceánů a pevniny → srážky → část srážek se vrací do atmosféry v…",
                    "correct": false
                  },
                  {
                    "text": "systému povrchových a podpovrchových vod • srážky vypadávající na povrch se dostávají do půdy infiltrací, tj.",
                    "correct": false
                  }
                ],
                "explanation": "Otevři přiložené PDF/PPT v materiálech lekce"
              },
              {
                "question": "K tématu „Hydrologie podpovrchových vod: Zdroje vzn…\" — které tvrzení je správné? (12)",
                "options": [
                  {
                    "text": "14. Sladká voda na kontinentech Obr. 14.1/359 – SS",
                    "correct": false
                  },
                  {
                    "text": "Propoj s předchozími a navazujícími okruhy v osnově",
                    "correct": true
                  },
                  {
                    "text": "povrchová a podpovrchová voda tvoří jen malou část zásob vody v hydrosféře • oběh vody: výpar z oceánů a pevniny → srážky → část srážek se vrací do atmosféry v…",
                    "correct": false
                  },
                  {
                    "text": "systému povrchových a podpovrchových vod • srážky vypadávající na povrch se dostávají do půdy infiltrací, tj.",
                    "correct": false
                  }
                ],
                "explanation": "Propoj s předchozími a navazujícími okruhy v osnově"
              },
              {
                "question": "K tématu „Hydrologie podpovrchových vod: Zdroje vzn…\" — které tvrzení je správné? (13)",
                "options": [
                  {
                    "text": "povrchová a podpovrchová voda tvoří jen malou část zásob vody v hydrosféře • oběh vody: výpar z oceánů a pevniny → srážky → část srážek se vrací do atmosféry v…",
                    "correct": false
                  },
                  {
                    "text": "14. Sladká voda na kontinentech Obr. 14.1/359 – SS",
                    "correct": true
                  },
                  {
                    "text": "systému povrchových a podpovrchových vod • srážky vypadávající na povrch se dostávají do půdy infiltrací, tj.",
                    "correct": false
                  },
                  {
                    "text": "pokud se voda nestačí vsakovat (intenzivní déšť nebo půda je nasycena), vzniká na povrchu plošný odtok – ron → ronové rýhy → erozní rýhy • při odtoku dochází k…",
                    "correct": false
                  }
                ],
                "explanation": "14. Sladká voda na kontinentech Obr. 14.1/359 – SS"
              },
              {
                "question": "K tématu „Hydrologie podpovrchových vod: Zdroje vzn…\" — které tvrzení je správné? (14)",
                "options": [
                  {
                    "text": "14. Sladká voda na kontinentech Obr. 14.1/359 – SS",
                    "correct": false
                  },
                  {
                    "text": "povrchová a podpovrchová voda tvoří jen malou část zásob vody v hydrosféře • oběh vody: výpar z oceánů a pevniny → srážky → část srážek se vrací do atmosféry v…",
                    "correct": true
                  },
                  {
                    "text": "povrchová a podpovrchová voda tvoří jen malou část zásob vody v hydrosféře • oběh vody: výpar z oceánů a pevniny → srážky → část srážek se vrací do atmosféry v…",
                    "correct": false
                  },
                  {
                    "text": "systému povrchových a podpovrchových vod • srážky vypadávající na povrch se dostávají do půdy infiltrací, tj.",
                    "correct": false
                  }
                ],
                "explanation": "povrchová a podpovrchová voda tvoří jen malou část zásob vody v hydrosféře • oběh vody: výpar z oceánů a pevniny → srážky → část srážek se vrací do atmosféry v…"
              },
              {
                "question": "K tématu „Hydrologie podpovrchových vod: Zdroje vzn…\" — které tvrzení je správné? (15)",
                "options": [
                  {
                    "text": "14. Sladká voda na kontinentech Obr. 14.1/359 – SS",
                    "correct": false
                  },
                  {
                    "text": "systému povrchových a podpovrchových vod • srážky vypadávající na povrch se dostávají do půdy infiltrací, tj.",
                    "correct": true
                  },
                  {
                    "text": "povrchová a podpovrchová voda tvoří jen malou část zásob vody v hydrosféře • oběh vody: výpar z oceánů a pevniny → srážky → část srážek se vrací do atmosféry v…",
                    "correct": false
                  },
                  {
                    "text": "pokud se voda nestačí vsakovat (intenzivní déšť nebo půda je nasycena), vzniká na povrchu plošný odtok – ron → ronové rýhy → erozní rýhy • při odtoku dochází k…",
                    "correct": false
                  }
                ],
                "explanation": "systému povrchových a podpovrchových vod • srážky vypadávající na povrch se dostávají do půdy infiltrací, tj."
              },
              {
                "question": "K tématu „Hydrologie podpovrchových vod: Zdroje vzn…\" — které tvrzení je správné? (16)",
                "options": [
                  {
                    "text": "14. Sladká voda na kontinentech Obr. 14.1/359 – SS",
                    "correct": false
                  },
                  {
                    "text": "pokud se voda nestačí vsakovat (intenzivní déšť nebo půda je nasycena), vzniká na povrchu plošný odtok – ron → ronové rýhy → erozní rýhy • při odtoku dochází k…",
                    "correct": true
                  },
                  {
                    "text": "povrchová a podpovrchová voda tvoří jen malou část zásob vody v hydrosféře • oběh vody: výpar z oceánů a pevniny → srážky → část srážek se vrací do atmosféry v…",
                    "correct": false
                  },
                  {
                    "text": "systému povrchových a podpovrchových vod • srážky vypadávající na povrch se dostávají do půdy infiltrací, tj.",
                    "correct": false
                  }
                ],
                "explanation": "pokud se voda nestačí vsakovat (intenzivní déšť nebo půda je nasycena), vzniká na povrchu plošný odtok – ron → ronové rýhy → erozní rýhy • při odtoku dochází k…"
              },
              {
                "question": "K tématu „Hydrologie podpovrchových vod: Zdroje vzn…\" — které tvrzení je správné? (17)",
                "options": [
                  {
                    "text": "14. Sladká voda na kontinentech Obr. 14.1/359 – SS",
                    "correct": false
                  },
                  {
                    "text": "14.1.1 Hladina podzemní vody Obr. 14.4/361",
                    "correct": true
                  },
                  {
                    "text": "povrchová a podpovrchová voda tvoří jen malou část zásob vody v hydrosféře • oběh vody: výpar z oceánů a pevniny → srážky → část srážek se vrací do atmosféry v…",
                    "correct": false
                  },
                  {
                    "text": "systému povrchových a podpovrchových vod • srážky vypadávající na povrch se dostávají do půdy infiltrací, tj.",
                    "correct": false
                  }
                ],
                "explanation": "14.1.1 Hladina podzemní vody Obr. 14.4/361"
              },
              {
                "question": "K tématu „Hydrologie podpovrchových vod: Zdroje vzn…\" — které tvrzení je správné? (18)",
                "options": [
                  {
                    "text": "14. Sladká voda na kontinentech Obr. 14.1/359 – SS",
                    "correct": false
                  },
                  {
                    "text": "hladina podzemní vody sahá nejvýše pod vrcholy kopců a rozvodí (souvisí se vsakováním) a klesá směrem k údolím, kde odpovídá úrovni řek, jezer nebo bažin (pros…",
                    "correct": true
                  },
                  {
                    "text": "povrchová a podpovrchová voda tvoří jen malou část zásob vody v hydrosféře • oběh vody: výpar z oceánů a pevniny → srážky → část srážek se vrací do atmosféry v…",
                    "correct": false
                  },
                  {
                    "text": "systému povrchových a podpovrchových vod • srážky vypadávající na povrch se dostávají do půdy infiltrací, tj.",
                    "correct": false
                  }
                ],
                "explanation": "hladina podzemní vody sahá nejvýše pod vrcholy kopců a rozvodí (souvisí se vsakováním) a klesá směrem k údolím, kde odpovídá úrovni řek, jezer nebo bažin (pros…"
              },
              {
                "question": "K tématu „Hydrologie podpovrchových vod: Zdroje vzn…\" — které tvrzení je správné? (19)",
                "options": [
                  {
                    "text": "14. Sladká voda na kontinentech Obr. 14.1/359 – SS",
                    "correct": false
                  },
                  {
                    "text": "je-li propustná vrstva mezi dvěma nepropustnými, je voda v propustné vrstvě pod tlakem a při navrtání nadložní vrstvy vystřikuje nad povrch – artéská voda (stu…",
                    "correct": true
                  },
                  {
                    "text": "povrchová a podpovrchová voda tvoří jen malou část zásob vody v hydrosféře • oběh vody: výpar z oceánů a pevniny → srážky → část srážek se vrací do atmosféry v…",
                    "correct": false
                  },
                  {
                    "text": "systému povrchových a podpovrchových vod • srážky vypadávající na povrch se dostávají do půdy infiltrací, tj.",
                    "correct": false
                  }
                ],
                "explanation": "je-li propustná vrstva mezi dvěma nepropustnými, je voda v propustné vrstvě pod tlakem a při navrtání nadložní vrstvy vystřikuje nad povrch – artéská voda (stu…"
              },
              {
                "question": "K tématu „Hydrologie podpovrchových vod: Zdroje vzn…\" — které tvrzení je správné? (20)",
                "options": [
                  {
                    "text": "14. Sladká voda na kontinentech Obr. 14.1/359 – SS",
                    "correct": false
                  },
                  {
                    "text": "povrchová a podpovrchová voda tvoří jen malou část zásob vody v hydrosféře • oběh vody: výpar z oceánů a pevniny → srážky → část srážek se vrací do atmosféry v…",
                    "correct": true
                  },
                  {
                    "text": "povrchová a podpovrchová voda tvoří jen malou část zásob vody v hydrosféře • oběh vody: výpar z oceánů a pevniny → srážky → část srážek se vrací do atmosféry v…",
                    "correct": false
                  },
                  {
                    "text": "systému povrchových a podpovrchových vod • srážky vypadávající na povrch se dostávají do půdy infiltrací, tj.",
                    "correct": false
                  }
                ],
                "explanation": "povrchová a podpovrchová voda tvoří jen malou část zásob vody v hydrosféře • oběh vody: výpar z oceánů a pevniny → srážky → část srážek se vrací do atmosféry v…"
              }
            ]
          }
        },
        {
          "id": "z0026p-13-hydrologie-jezer-a-nadrzi-svetove-zasoby-vody-12",
          "title": "13. Hydrologie jezer a nádrží: Světové zásoby vody v jezerech a nádržích, morfometrické prvky jezer, vodní bilance, teplotné poměry.",
          "summary": "Studijní okruh: 13. Hydrologie jezer a nádrží: Světové zásoby vody v jezerech a nádržích, morfometrické prvky jezer, vodní bilance, teplotné poměry.",
          "minutes": 20,
          "sectionTitle": "Témata prof. Brázdila",
          "available": true,
          "blocks": [
            {
              "type": "heading",
              "text": "Témata prof. Brázdila"
            },
            {
              "type": "callout",
              "label": "Okruh",
              "text": "13. Hydrologie jezer a nádrží: Světové zásoby vody v jezerech a nádržích, morfometrické prvky jezer, vodní bilance, teplotné poměry."
            },
            {
              "type": "callout",
              "label": "Jak číst tuto lekci",
              "text": "Text je výtah ze skripta a přednášek — použij ho jako mapu k učení. Detaily a obrázky najdeš v PDF/PPT v materiálech lekce."
            },
            {
              "type": "heading",
              "text": "Otázky a okruhy — FG_7"
            },
            {
              "type": "paragraph",
              "text": "14. Sladká voda na kontinentech Obr. 14.1/359 – SS"
            },
            {
              "type": "list",
              "label": "Klíčové body",
              "items": [
                "povrchová a podpovrchová voda tvoří jen malou část zásob vody v hydrosféře • oběh vody: výpar z oceánů a pevniny → srážky → část srážek se vrací do atmosféry výparem z půdy, část odtéká z pevniny povrchovým nebo podzemním odtokem • hydrologie – komplexní studium vody na Zemi, tj.",
                "systému povrchových a podpovrchových vod • srážky vypadávající na povrch se dostávají do půdy infiltrací, tj.",
                "působením gravitace pronikají mezerami mezi půdními částicemi (pukliny, otvory po živočiších, prostory po ledových krystalcích aj.) • voda, která se dostane do půdy, je půdní voda a vytváří zvodnělou vrstvu (soil water belt) – voda z této vrstvy se může dostat na povrch nebo do atmosféry evapotranspirací (výpar + transpirace) Obr."
              ]
            },
            {
              "type": "paragraph",
              "text": "pokud se voda nestačí vsakovat (intenzivní déšť nebo půda je nasycena), vzniká na povrchu plošný odtok – ron → ronové rýhy → erozní rýhy • při odtoku dochází k odnosu částic a rozpustných látek a vytváření toků a řek – modelační činitel v krajině"
            },
            {
              "type": "list",
              "label": "Klíčové body",
              "items": [
                "voda proniká díky gravitaci do hloubky • podzemní voda – část podpovrchové vody, která vyplňuje zónu saturace (pásmo nasycení) • hladina podzemní vody odděluje zónu saturace od svrchní vrstvy, kde póry nejsou plně vyplněny vodou – pásmo provzdušnění (zóna aerace) – voda se zde drží díky kapilárnímu napětí (tenký film vody na povrchu minerálů) – kapilární voda • různé dráhy pronikání vody do hloubky a do toků"
              ]
            },
            {
              "type": "paragraph",
              "text": "14.1.1 Hladina podzemní vody Obr. 14.4/361"
            },
            {
              "type": "paragraph",
              "text": "hladina podzemní vody sahá nejvýše pod vrcholy kopců a rozvodí (souvisí se vsakováním) a klesá směrem k údolím, kde odpovídá úrovni řek, jezer nebo bažin (prosakování) • při srážkách roste hladina vody pod vrcholy kopců a rozvodí, v období sucha zase klesá"
            },
            {
              "type": "paragraph",
              "text": "14.1.2 Zvodnělé vrstvy • sedimentární vrstvy výrazně ovlivňují ukládání a pohyb podzemní vody • zvodnělá vrstva (zvodeň) – podloží písku nebo pískovce, obsahující volně protékající podzemní vodu • nepropustná vrstva – podloží jílů nebo břidlic obsahují málo volné vody • čočkovité břidlice vytváří zavěšené vodní těleso Obr. 14.5/362"
            },
            {
              "type": "paragraph",
              "text": "je-li propustná vrstva mezi dvěma nepropustnými, je voda v propustné vrstvě pod tlakem a při navrtání nadložní vrstvy vystřikuje nad povrch – artéská voda (studna) Obr. 14.6/362"
            },
            {
              "type": "list",
              "label": "Klíčové body",
              "items": [
                "povrchová a podpovrchová voda tvoří jen malou část zásob vody v hydrosféře • oběh vody: výpar z oceánů a pevniny → srážky → část srážek se vrací do atmosféry výparem z půdy, část odtéká z pevniny povrchovým nebo podzemním odtokem • hydrologie – komplexní studium vody na Zemi, tj.",
                "systému povrchových a podpovrchových vod • srážky vypadávající na povrch se dostávají do půdy infiltrací, tj.",
                "působením gravitace pronikají mezerami mezi půdními částicemi (pukliny, otvory po živočiších, prostory po ledových krystalcích aj.) • voda, která se dostane do půdy, je půdní voda a vytváří zvodnělou vrstvu (soil water belt) – voda z této vrstvy se může dostat na povrch nebo do atmosféry evapotranspirací (výpar + transpirace) Obr.",
                "voda proniká díky gravitaci do hloubky • podzemní voda – část podpovrchové vody, která vyplňuje zónu saturace (pásmo nasycení) • hladina podzemní vody odděluje zónu saturace od svrchní vrstvy, kde póry nejsou plně vyplněny vodou – pásmo provzdušnění (zóna aerace) – voda se zde drží díky kapilárnímu napětí (tenký film vody na povrchu minerálů) – kapilární voda • různé dráhy pronikání vody do hloubky a do toků"
              ]
            },
            {
              "type": "list",
              "label": "Doporučený postup",
              "items": [
                "Projdi výtah a vlastní poznámky z přednášky",
                "Otevři přiložené PDF/PPT v materiálech lekce",
                "Propoj s předchozími a navazujícími okruhy v osnově"
              ]
            }
          ],
          "resources": [
            {
              "kind": "document",
              "title": "FG_7 — okruhy Brázdil",
              "url": "/materials/geografie-kartografie/z0026p/FG_7.doc",
              "source": "Brázdil",
              "note": "Sdílený materiál pro více okruhů hydrologie"
            },
            {
              "kind": "link",
              "title": "IS MUNI — Fyzická geografie",
              "url": "https://is.muni.cz/predmet/sci/Z0026p",
              "source": "IS MUNI"
            }
          ],
          "quiz": {
            "title": "Kvíz: Jezera a zásoby vody",
            "questions": [
              {
                "question": "Povrchová sladká voda (jezera, toky) tvoří přibližně…",
                "options": [
                  {
                    "text": "0,02 % celkových zásob sladké vody",
                    "correct": true
                  },
                  {
                    "text": "50 % sladké vody",
                    "correct": false
                  },
                  {
                    "text": "10 % všech vod na Zemi",
                    "correct": false
                  },
                  {
                    "text": "většinu hydrosféry",
                    "correct": false
                  }
                ],
                "explanation": "Největší zásoby sladké vody jsou v ledovcích a podzemních vodách."
              },
              {
                "question": "Na pevnině v globální bilanci platí: srážky = …",
                "options": [
                  {
                    "text": "výpar + odtok",
                    "correct": true
                  },
                  {
                    "text": "pouze výpar",
                    "correct": false
                  },
                  {
                    "text": "pouze infiltrace",
                    "correct": false
                  },
                  {
                    "text": "odtok + srážky",
                    "correct": false
                  }
                ],
                "explanation": "Část vody se vsakuje, část odtéká, část se vrací do atmosféry."
              },
              {
                "question": "Hladina podzemní vody v údolí často odpovídá…",
                "options": [
                  {
                    "text": "hladině řeky nebo jezera",
                    "correct": true
                  },
                  {
                    "text": "vrcholu hory",
                    "correct": false
                  },
                  {
                    "text": "hladině moře vždy přímo",
                    "correct": false
                  },
                  {
                    "text": "pouze srážkám v daný den",
                    "correct": false
                  }
                ],
                "explanation": "Voda prosakuje z údolí do toků a nádrží."
              },
              {
                "question": "Bezodtoká jezera vznikají v…",
                "options": [
                  {
                    "text": "uzavřených povodích bez odtoku do moře",
                    "correct": true
                  },
                  {
                    "text": "všech říčních ústích",
                    "correct": false
                  },
                  {
                    "text": "pouze v oceánu",
                    "correct": false
                  },
                  {
                    "text": "výhradně pod ledovcem",
                    "correct": false
                  }
                ],
                "explanation": "Voda odtéká jen výparem nebo infiltrací."
              },
              {
                "question": "Které tvrzení odpovídá obsahu lekce?",
                "options": [
                  {
                    "text": "Výklad k tomuto okruhu neobsahuje tuto informaci.",
                    "correct": false
                  },
                  {
                    "text": "14. Sladká voda na kontinentech Obr. 14.1/359 – SS",
                    "correct": true
                  },
                  {
                    "text": "Toto tvrzení nelze z výkladu lekce ověřit.",
                    "correct": false
                  },
                  {
                    "text": "povrchová a podpovrchová voda tvoří jen malou část zásob vody v hydrosféře • oběh vody: výpar z oceánů a pevniny → srážky → část srážek se vrací do atmosféry v…",
                    "correct": false
                  }
                ],
                "explanation": "Správně: 14. Sladká voda na kontinentech Obr. 14.1/359 – SS"
              },
              {
                "question": "Které tvrzení patří k okruhu „Hydrologie jezer a nádrží: Světové zásoby vody …\"?",
                "options": [
                  {
                    "text": "systému povrchových a podpovrchových vod • srážky vypadávající na povrch se dostávají do půdy infiltrací, tj.",
                    "correct": false
                  },
                  {
                    "text": "povrchová a podpovrchová voda tvoří jen malou část zásob vody v hydrosféře • oběh vody: výpar z oceánů a pevniny → srážky → část srážek se vrací do atmosféry výparem z půdy, část …",
                    "correct": false
                  },
                  {
                    "text": "povrchová a podpovrchová voda tvoří jen malou část zásob vody v hydrosféře • oběh vody: výpar z oceánů a pevniny → srážky → část srážek se vrací do atmosféry výparem z půdy, část …",
                    "correct": true
                  },
                  {
                    "text": "14. Sladká voda na kontinentech Obr. 14.1/359 – SS",
                    "correct": false
                  }
                ],
                "explanation": "povrchová a podpovrchová voda tvoří jen malou část zásob vody v hydrosféře • oběh vody: výpar z oceánů a pevniny → srážky → část srážek se vrací do atmosféry výparem z půdy, část …"
              },
              {
                "question": "K tématu „Hydrologie jezer a nádrží: Světové zásoby…\" — které tvrzení je správné? (7)",
                "options": [
                  {
                    "text": "14. Sladká voda na kontinentech Obr. 14.1/359 – SS",
                    "correct": false
                  },
                  {
                    "text": "systému povrchových a podpovrchových vod • srážky vypadávající na povrch se dostávají do půdy infiltrací, tj.",
                    "correct": false
                  },
                  {
                    "text": "je-li propustná vrstva mezi dvěma nepropustnými, je voda v propustné vrstvě pod tlakem a při navrtání nadložní vrstvy vystřikuje nad povrch – artéská voda (stu…",
                    "correct": true
                  },
                  {
                    "text": "povrchová a podpovrchová voda tvoří jen malou část zásob vody v hydrosféře • oběh vody: výpar z oceánů a pevniny → srážky → část srážek se vrací do atmosféry v…",
                    "correct": false
                  }
                ],
                "explanation": "je-li propustná vrstva mezi dvěma nepropustnými, je voda v propustné vrstvě pod tlakem a při navrtání nadložní vrstvy vystřikuje nad povrch – artéská voda (stu…"
              },
              {
                "question": "K tématu „Hydrologie jezer a nádrží: Světové zásoby…\" — které tvrzení je správné? (8)",
                "options": [
                  {
                    "text": "14. Sladká voda na kontinentech Obr. 14.1/359 – SS",
                    "correct": false
                  },
                  {
                    "text": "systému povrchových a podpovrchových vod • srážky vypadávající na povrch se dostávají do půdy infiltrací, tj.",
                    "correct": false
                  },
                  {
                    "text": "povrchová a podpovrchová voda tvoří jen malou část zásob vody v hydrosféře • oběh vody: výpar z oceánů a pevniny → srážky → část srážek se vrací do atmosféry v…",
                    "correct": true
                  },
                  {
                    "text": "povrchová a podpovrchová voda tvoří jen malou část zásob vody v hydrosféře • oběh vody: výpar z oceánů a pevniny → srážky → část srážek se vrací do atmosféry v…",
                    "correct": false
                  }
                ],
                "explanation": "povrchová a podpovrchová voda tvoří jen malou část zásob vody v hydrosféře • oběh vody: výpar z oceánů a pevniny → srážky → část srážek se vrací do atmosféry v…"
              },
              {
                "question": "K tématu „Hydrologie jezer a nádrží: Světové zásoby…\" — které tvrzení je správné? (9)",
                "options": [
                  {
                    "text": "14. Sladká voda na kontinentech Obr. 14.1/359 – SS",
                    "correct": false
                  },
                  {
                    "text": "pokud se voda nestačí vsakovat (intenzivní déšť nebo půda je nasycena), vzniká na povrchu plošný odtok – ron → ronové rýhy → erozní rýhy • při odtoku dochází k…",
                    "correct": false
                  },
                  {
                    "text": "systému povrchových a podpovrchových vod • srážky vypadávající na povrch se dostávají do půdy infiltrací, tj.",
                    "correct": true
                  },
                  {
                    "text": "povrchová a podpovrchová voda tvoří jen malou část zásob vody v hydrosféře • oběh vody: výpar z oceánů a pevniny → srážky → část srážek se vrací do atmosféry v…",
                    "correct": false
                  }
                ],
                "explanation": "systému povrchových a podpovrchových vod • srážky vypadávající na povrch se dostávají do půdy infiltrací, tj."
              },
              {
                "question": "K tématu „Hydrologie jezer a nádrží: Světové zásoby…\" — které tvrzení je správné? (10)",
                "options": [
                  {
                    "text": "14. Sladká voda na kontinentech Obr. 14.1/359 – SS",
                    "correct": false
                  },
                  {
                    "text": "Projdi výtah a vlastní poznámky z přednášky",
                    "correct": true
                  },
                  {
                    "text": "povrchová a podpovrchová voda tvoří jen malou část zásob vody v hydrosféře • oběh vody: výpar z oceánů a pevniny → srážky → část srážek se vrací do atmosféry v…",
                    "correct": false
                  },
                  {
                    "text": "systému povrchových a podpovrchových vod • srážky vypadávající na povrch se dostávají do půdy infiltrací, tj.",
                    "correct": false
                  }
                ],
                "explanation": "Projdi výtah a vlastní poznámky z přednášky"
              },
              {
                "question": "K tématu „Hydrologie jezer a nádrží: Světové zásoby…\" — které tvrzení je správné? (11)",
                "options": [
                  {
                    "text": "14. Sladká voda na kontinentech Obr. 14.1/359 – SS",
                    "correct": false
                  },
                  {
                    "text": "Otevři přiložené PDF/PPT v materiálech lekce",
                    "correct": true
                  },
                  {
                    "text": "povrchová a podpovrchová voda tvoří jen malou část zásob vody v hydrosféře • oběh vody: výpar z oceánů a pevniny → srážky → část srážek se vrací do atmosféry v…",
                    "correct": false
                  },
                  {
                    "text": "systému povrchových a podpovrchových vod • srážky vypadávající na povrch se dostávají do půdy infiltrací, tj.",
                    "correct": false
                  }
                ],
                "explanation": "Otevři přiložené PDF/PPT v materiálech lekce"
              },
              {
                "question": "K tématu „Hydrologie jezer a nádrží: Světové zásoby…\" — které tvrzení je správné? (12)",
                "options": [
                  {
                    "text": "14. Sladká voda na kontinentech Obr. 14.1/359 – SS",
                    "correct": false
                  },
                  {
                    "text": "Propoj s předchozími a navazujícími okruhy v osnově",
                    "correct": true
                  },
                  {
                    "text": "povrchová a podpovrchová voda tvoří jen malou část zásob vody v hydrosféře • oběh vody: výpar z oceánů a pevniny → srážky → část srážek se vrací do atmosféry v…",
                    "correct": false
                  },
                  {
                    "text": "systému povrchových a podpovrchových vod • srážky vypadávající na povrch se dostávají do půdy infiltrací, tj.",
                    "correct": false
                  }
                ],
                "explanation": "Propoj s předchozími a navazujícími okruhy v osnově"
              },
              {
                "question": "K tématu „Hydrologie jezer a nádrží: Světové zásoby…\" — které tvrzení je správné? (13)",
                "options": [
                  {
                    "text": "povrchová a podpovrchová voda tvoří jen malou část zásob vody v hydrosféře • oběh vody: výpar z oceánů a pevniny → srážky → část srážek se vrací do atmosféry v…",
                    "correct": false
                  },
                  {
                    "text": "14. Sladká voda na kontinentech Obr. 14.1/359 – SS",
                    "correct": true
                  },
                  {
                    "text": "systému povrchových a podpovrchových vod • srážky vypadávající na povrch se dostávají do půdy infiltrací, tj.",
                    "correct": false
                  },
                  {
                    "text": "pokud se voda nestačí vsakovat (intenzivní déšť nebo půda je nasycena), vzniká na povrchu plošný odtok – ron → ronové rýhy → erozní rýhy • při odtoku dochází k…",
                    "correct": false
                  }
                ],
                "explanation": "14. Sladká voda na kontinentech Obr. 14.1/359 – SS"
              },
              {
                "question": "K tématu „Hydrologie jezer a nádrží: Světové zásoby…\" — které tvrzení je správné? (14)",
                "options": [
                  {
                    "text": "14. Sladká voda na kontinentech Obr. 14.1/359 – SS",
                    "correct": false
                  },
                  {
                    "text": "povrchová a podpovrchová voda tvoří jen malou část zásob vody v hydrosféře • oběh vody: výpar z oceánů a pevniny → srážky → část srážek se vrací do atmosféry v…",
                    "correct": true
                  },
                  {
                    "text": "povrchová a podpovrchová voda tvoří jen malou část zásob vody v hydrosféře • oběh vody: výpar z oceánů a pevniny → srážky → část srážek se vrací do atmosféry v…",
                    "correct": false
                  },
                  {
                    "text": "systému povrchových a podpovrchových vod • srážky vypadávající na povrch se dostávají do půdy infiltrací, tj.",
                    "correct": false
                  }
                ],
                "explanation": "povrchová a podpovrchová voda tvoří jen malou část zásob vody v hydrosféře • oběh vody: výpar z oceánů a pevniny → srážky → část srážek se vrací do atmosféry v…"
              },
              {
                "question": "K tématu „Hydrologie jezer a nádrží: Světové zásoby…\" — které tvrzení je správné? (15)",
                "options": [
                  {
                    "text": "14. Sladká voda na kontinentech Obr. 14.1/359 – SS",
                    "correct": false
                  },
                  {
                    "text": "systému povrchových a podpovrchových vod • srážky vypadávající na povrch se dostávají do půdy infiltrací, tj.",
                    "correct": true
                  },
                  {
                    "text": "povrchová a podpovrchová voda tvoří jen malou část zásob vody v hydrosféře • oběh vody: výpar z oceánů a pevniny → srážky → část srážek se vrací do atmosféry v…",
                    "correct": false
                  },
                  {
                    "text": "pokud se voda nestačí vsakovat (intenzivní déšť nebo půda je nasycena), vzniká na povrchu plošný odtok – ron → ronové rýhy → erozní rýhy • při odtoku dochází k…",
                    "correct": false
                  }
                ],
                "explanation": "systému povrchových a podpovrchových vod • srážky vypadávající na povrch se dostávají do půdy infiltrací, tj."
              },
              {
                "question": "K tématu „Hydrologie jezer a nádrží: Světové zásoby…\" — které tvrzení je správné? (16)",
                "options": [
                  {
                    "text": "14. Sladká voda na kontinentech Obr. 14.1/359 – SS",
                    "correct": false
                  },
                  {
                    "text": "pokud se voda nestačí vsakovat (intenzivní déšť nebo půda je nasycena), vzniká na povrchu plošný odtok – ron → ronové rýhy → erozní rýhy • při odtoku dochází k…",
                    "correct": true
                  },
                  {
                    "text": "povrchová a podpovrchová voda tvoří jen malou část zásob vody v hydrosféře • oběh vody: výpar z oceánů a pevniny → srážky → část srážek se vrací do atmosféry v…",
                    "correct": false
                  },
                  {
                    "text": "systému povrchových a podpovrchových vod • srážky vypadávající na povrch se dostávají do půdy infiltrací, tj.",
                    "correct": false
                  }
                ],
                "explanation": "pokud se voda nestačí vsakovat (intenzivní déšť nebo půda je nasycena), vzniká na povrchu plošný odtok – ron → ronové rýhy → erozní rýhy • při odtoku dochází k…"
              },
              {
                "question": "K tématu „Hydrologie jezer a nádrží: Světové zásoby…\" — které tvrzení je správné? (17)",
                "options": [
                  {
                    "text": "14. Sladká voda na kontinentech Obr. 14.1/359 – SS",
                    "correct": false
                  },
                  {
                    "text": "14.1.1 Hladina podzemní vody Obr. 14.4/361",
                    "correct": true
                  },
                  {
                    "text": "povrchová a podpovrchová voda tvoří jen malou část zásob vody v hydrosféře • oběh vody: výpar z oceánů a pevniny → srážky → část srážek se vrací do atmosféry v…",
                    "correct": false
                  },
                  {
                    "text": "systému povrchových a podpovrchových vod • srážky vypadávající na povrch se dostávají do půdy infiltrací, tj.",
                    "correct": false
                  }
                ],
                "explanation": "14.1.1 Hladina podzemní vody Obr. 14.4/361"
              },
              {
                "question": "K tématu „Hydrologie jezer a nádrží: Světové zásoby…\" — které tvrzení je správné? (18)",
                "options": [
                  {
                    "text": "14. Sladká voda na kontinentech Obr. 14.1/359 – SS",
                    "correct": false
                  },
                  {
                    "text": "hladina podzemní vody sahá nejvýše pod vrcholy kopců a rozvodí (souvisí se vsakováním) a klesá směrem k údolím, kde odpovídá úrovni řek, jezer nebo bažin (pros…",
                    "correct": true
                  },
                  {
                    "text": "povrchová a podpovrchová voda tvoří jen malou část zásob vody v hydrosféře • oběh vody: výpar z oceánů a pevniny → srážky → část srážek se vrací do atmosféry v…",
                    "correct": false
                  },
                  {
                    "text": "systému povrchových a podpovrchových vod • srážky vypadávající na povrch se dostávají do půdy infiltrací, tj.",
                    "correct": false
                  }
                ],
                "explanation": "hladina podzemní vody sahá nejvýše pod vrcholy kopců a rozvodí (souvisí se vsakováním) a klesá směrem k údolím, kde odpovídá úrovni řek, jezer nebo bažin (pros…"
              },
              {
                "question": "K tématu „Hydrologie jezer a nádrží: Světové zásoby…\" — které tvrzení je správné? (19)",
                "options": [
                  {
                    "text": "14. Sladká voda na kontinentech Obr. 14.1/359 – SS",
                    "correct": false
                  },
                  {
                    "text": "je-li propustná vrstva mezi dvěma nepropustnými, je voda v propustné vrstvě pod tlakem a při navrtání nadložní vrstvy vystřikuje nad povrch – artéská voda (stu…",
                    "correct": true
                  },
                  {
                    "text": "povrchová a podpovrchová voda tvoří jen malou část zásob vody v hydrosféře • oběh vody: výpar z oceánů a pevniny → srážky → část srážek se vrací do atmosféry v…",
                    "correct": false
                  },
                  {
                    "text": "systému povrchových a podpovrchových vod • srážky vypadávající na povrch se dostávají do půdy infiltrací, tj.",
                    "correct": false
                  }
                ],
                "explanation": "je-li propustná vrstva mezi dvěma nepropustnými, je voda v propustné vrstvě pod tlakem a při navrtání nadložní vrstvy vystřikuje nad povrch – artéská voda (stu…"
              },
              {
                "question": "K tématu „Hydrologie jezer a nádrží: Světové zásoby…\" — které tvrzení je správné? (20)",
                "options": [
                  {
                    "text": "14. Sladká voda na kontinentech Obr. 14.1/359 – SS",
                    "correct": false
                  },
                  {
                    "text": "povrchová a podpovrchová voda tvoří jen malou část zásob vody v hydrosféře • oběh vody: výpar z oceánů a pevniny → srážky → část srážek se vrací do atmosféry v…",
                    "correct": true
                  },
                  {
                    "text": "povrchová a podpovrchová voda tvoří jen malou část zásob vody v hydrosféře • oběh vody: výpar z oceánů a pevniny → srážky → část srážek se vrací do atmosféry v…",
                    "correct": false
                  },
                  {
                    "text": "systému povrchových a podpovrchových vod • srážky vypadávající na povrch se dostávají do půdy infiltrací, tj.",
                    "correct": false
                  }
                ],
                "explanation": "povrchová a podpovrchová voda tvoří jen malou část zásob vody v hydrosféře • oběh vody: výpar z oceánů a pevniny → srážky → část srážek se vrací do atmosféry v…"
              }
            ]
          }
        },
        {
          "id": "z0026p-14-svetovy-ocean-struktura-procesy-vlastnosti-vo-13",
          "title": "14. Světový oceán: struktura, procesy, vlastnosti vody.",
          "summary": "Studijní okruh: 14. Světový oceán: struktura, procesy, vlastnosti vody.",
          "minutes": 12,
          "sectionTitle": "Témata prof. Brázdila",
          "available": false
        },
        {
          "id": "z0026p-1-co-je-fyzicka-geografie-14",
          "title": "1. Co je fyzická geografie?",
          "summary": "Studijní okruh: 1. Co je fyzická geografie?",
          "minutes": 22,
          "sectionTitle": "Témata doc. Máčky",
          "available": true,
          "blocks": [
            {
              "type": "heading",
              "text": "Témata doc. Máčky"
            },
            {
              "type": "callout",
              "label": "Okruh",
              "text": "1. Co je fyzická geografie?"
            },
            {
              "type": "callout",
              "label": "Jak číst tuto lekci",
              "text": "Text je výtah ze skripta a přednášek — použij ho jako mapu k učení. Detaily a obrázky najdeš v PDF/PPT v materiálech lekce."
            },
            {
              "type": "heading",
              "text": "Přednáška FG_DN_1 (Máčka/Nývlt)"
            },
            {
              "type": "list",
              "label": "Body přednášky",
              "items": [
                "Vztah mezi počtem ptačích druhů a lesnatostí v oblasti",
                "Lesnatost je dána způsobem využití země člověkem (odlesněním)",
                "Nejvyšší druhová diverzita ptáků je v krajině, kde se střídají otevřené plochy a les",
                "(Evropská agentura pro životní prostředí)"
              ]
            },
            {
              "type": "paragraph",
              "text": "Jako krajina se označuje část zemského povrchu s typickou kombinací přírodních a kulturních prvků a charakteristickou scenerií"
            },
            {
              "type": "list",
              "label": "Body přednášky",
              "items": [
                "krajina vzniklá přetvořením původní přírodní krajiny činností člověka",
                "Propustná přípovrchová vrstva sahající od vrcholků stromů po spodní hranici podzemní vody",
                "V kritické zóně dochází k pronikání živé a neživé přírody",
                "Komplexní vztahy v kritické zóně vytvářejí",
                "rozhraní mezi zemskou kůrou a svrchním pláštěm"
              ]
            },
            {
              "type": "list",
              "label": "Doporučený postup",
              "items": [
                "Projdi výtah a vlastní poznámky z přednášky",
                "Otevři přiložené PDF/PPT v materiálech lekce",
                "Propoj s předchozími a navazujícími okruhy v osnově"
              ]
            }
          ],
          "resources": [
            {
              "kind": "presentation",
              "title": "FG_DN_1 — přednáška",
              "url": "/materials/geografie-kartografie/z0026p/FG_DN_1.pptx",
              "source": "GÚ MUNI / Máčka"
            },
            {
              "kind": "link",
              "title": "IS MUNI — Fyzická geografie",
              "url": "https://is.muni.cz/predmet/sci/Z0026p",
              "source": "IS MUNI"
            }
          ],
          "quiz": {
            "title": "Kvíz: Co je fyzická geografie?",
            "questions": [
              {
                "question": "Jak se obvykle definuje krajina v geografickém smyslu?",
                "options": [
                  {
                    "text": "Část zemského povrchu s typickou kombinací přírodních a kulturních prvků",
                    "correct": true
                  },
                  {
                    "text": "Výhradně přírodní pokryv bez vlivu člověka",
                    "correct": false
                  },
                  {
                    "text": "Pouze lesní porost a orná půda",
                    "correct": false
                  },
                  {
                    "text": "Administrativní jednotka obce nebo katastr",
                    "correct": false
                  }
                ],
                "explanation": "Krajina vzniká přetvářením přírodní krajiny lidskou činností."
              },
              {
                "question": "Co je kritická zóna?",
                "options": [
                  {
                    "text": "Propustná přípovrchová vrstva od korun stromů po spodní hranici podzemní vody",
                    "correct": true
                  },
                  {
                    "text": "Pouze půdní profil do hloubky 1 m",
                    "correct": false
                  },
                  {
                    "text": "Vrstva ozonu v stratosféře",
                    "correct": false
                  },
                  {
                    "text": "Zóna tektonické aktivita pod oceány",
                    "correct": false
                  }
                ],
                "explanation": "V kritické zóně probíhá výměna mezi litosférou, atmosférou, vodou a živými organismy."
              },
              {
                "question": "Co typicky zvyšuje druhovou diverzitu ptáků v krajině?",
                "options": [
                  {
                    "text": "Střídání otevřených ploch a lesů",
                    "correct": true
                  },
                  {
                    "text": "Monokultura smrku",
                    "correct": false
                  },
                  {
                    "text": "Souvislá zástavba",
                    "correct": false
                  },
                  {
                    "text": "Umělá nádrž bez břehů",
                    "correct": false
                  }
                ],
                "explanation": "Mozaikovitá struktura krajiny nabízí více ekologických nik."
              },
              {
                "question": "Lesnatost krajiny je v první řadě ovlivněna…",
                "options": [
                  {
                    "text": "způsobem využití země člověkem",
                    "correct": true
                  },
                  {
                    "text": "výhradně nadmořskou výškou",
                    "correct": false
                  },
                  {
                    "text": "směrem světových stran",
                    "correct": false
                  },
                  {
                    "text": "pouze typem matečné horniny",
                    "correct": false
                  }
                ],
                "explanation": "Odlesňování a zemědělství mění podíl lesa v krajině."
              },
              {
                "question": "Které tvrzení patří k okruhu „Co je fyzická geografie?\"?",
                "options": [
                  {
                    "text": "Nejvyšší druhová diverzita ptáků je v krajině, kde se střídají otevřené plochy a les",
                    "correct": false
                  },
                  {
                    "text": "Vztah mezi počtem ptačích druhů a lesnatostí v oblasti",
                    "correct": true
                  },
                  {
                    "text": "(Evropská agentura pro životní prostředí)",
                    "correct": false
                  },
                  {
                    "text": "Lesnatost je dána způsobem využití země člověkem (odlesněním)",
                    "correct": false
                  }
                ],
                "explanation": "Vztah mezi počtem ptačích druhů a lesnatostí v oblasti"
              },
              {
                "question": "Které tvrzení odpovídá obsahu lekce?",
                "options": [
                  {
                    "text": "Výklad k tomuto okruhu neobsahuje tuto informaci.",
                    "correct": false
                  },
                  {
                    "text": "Jako krajina se označuje část zemského povrchu s typickou kombinací přírodních a kulturních prvků a charakteristickou scenerií",
                    "correct": true
                  },
                  {
                    "text": "Toto tvrzení nelze z výkladu lekce ověřit.",
                    "correct": false
                  },
                  {
                    "text": "Vztah mezi počtem ptačích druhů a lesnatostí v oblasti",
                    "correct": false
                  }
                ],
                "explanation": "Správně: Jako krajina se označuje část zemského povrchu s typickou kombinací přírodních a kulturních prvků a charakteristickou scenerií"
              },
              {
                "question": "K tématu „Co je fyzická geografie?\" — které tvrzení je správné? (7)",
                "options": [
                  {
                    "text": "Vztah mezi počtem ptačích druhů a lesnatostí v oblasti",
                    "correct": false
                  },
                  {
                    "text": "Nejvyšší druhová diverzita ptáků je v krajině, kde se střídají otevřené plochy a les",
                    "correct": false
                  },
                  {
                    "text": "Lesnatost je dána způsobem využití země člověkem (odlesněním)",
                    "correct": false
                  },
                  {
                    "text": "Propustná přípovrchová vrstva sahající od vrcholků stromů po spodní hranici podzemní vody",
                    "correct": true
                  }
                ],
                "explanation": "Propustná přípovrchová vrstva sahající od vrcholků stromů po spodní hranici podzemní vody"
              },
              {
                "question": "K tématu „Co je fyzická geografie?\" — které tvrzení je správné? (8)",
                "options": [
                  {
                    "text": "Vztah mezi počtem ptačích druhů a lesnatostí v oblasti",
                    "correct": false
                  },
                  {
                    "text": "Nejvyšší druhová diverzita ptáků je v krajině, kde se střídají otevřené plochy a les",
                    "correct": false
                  },
                  {
                    "text": "Lesnatost je dána způsobem využití země člověkem (odlesněním)",
                    "correct": false
                  },
                  {
                    "text": "V kritické zóně dochází k pronikání živé a neživé přírody",
                    "correct": true
                  }
                ],
                "explanation": "V kritické zóně dochází k pronikání živé a neživé přírody"
              },
              {
                "question": "K tématu „Co je fyzická geografie?\" — které tvrzení je správné? (9)",
                "options": [
                  {
                    "text": "Vztah mezi počtem ptačích druhů a lesnatostí v oblasti",
                    "correct": false
                  },
                  {
                    "text": "Nejvyšší druhová diverzita ptáků je v krajině, kde se střídají otevřené plochy a les",
                    "correct": false
                  },
                  {
                    "text": "Lesnatost je dána způsobem využití země člověkem (odlesněním)",
                    "correct": false
                  },
                  {
                    "text": "Komplexní vztahy v kritické zóně vytvářejí",
                    "correct": true
                  }
                ],
                "explanation": "Komplexní vztahy v kritické zóně vytvářejí"
              },
              {
                "question": "K tématu „Co je fyzická geografie?\" — které tvrzení je správné? (10)",
                "options": [
                  {
                    "text": "Lesnatost je dána způsobem využití země člověkem (odlesněním)",
                    "correct": false
                  },
                  {
                    "text": "rozhraní mezi zemskou kůrou a svrchním pláštěm",
                    "correct": true
                  },
                  {
                    "text": "Nejvyšší druhová diverzita ptáků je v krajině, kde se střídají otevřené plochy a les",
                    "correct": false
                  },
                  {
                    "text": "Vztah mezi počtem ptačích druhů a lesnatostí v oblasti",
                    "correct": false
                  }
                ],
                "explanation": "rozhraní mezi zemskou kůrou a svrchním pláštěm"
              },
              {
                "question": "K tématu „Co je fyzická geografie?\" — které tvrzení je správné? (11)",
                "options": [
                  {
                    "text": "Lesnatost je dána způsobem využití země člověkem (odlesněním)",
                    "correct": false
                  },
                  {
                    "text": "Projdi výtah a vlastní poznámky z přednášky",
                    "correct": true
                  },
                  {
                    "text": "Nejvyšší druhová diverzita ptáků je v krajině, kde se střídají otevřené plochy a les",
                    "correct": false
                  },
                  {
                    "text": "Vztah mezi počtem ptačích druhů a lesnatostí v oblasti",
                    "correct": false
                  }
                ],
                "explanation": "Projdi výtah a vlastní poznámky z přednášky"
              },
              {
                "question": "K tématu „Co je fyzická geografie?\" — které tvrzení je správné? (12)",
                "options": [
                  {
                    "text": "Lesnatost je dána způsobem využití země člověkem (odlesněním)",
                    "correct": false
                  },
                  {
                    "text": "Otevři přiložené PDF/PPT v materiálech lekce",
                    "correct": true
                  },
                  {
                    "text": "Nejvyšší druhová diverzita ptáků je v krajině, kde se střídají otevřené plochy a les",
                    "correct": false
                  },
                  {
                    "text": "Vztah mezi počtem ptačích druhů a lesnatostí v oblasti",
                    "correct": false
                  }
                ],
                "explanation": "Otevři přiložené PDF/PPT v materiálech lekce"
              },
              {
                "question": "K tématu „Co je fyzická geografie?\" — které tvrzení je správné? (13)",
                "options": [
                  {
                    "text": "Lesnatost je dána způsobem využití země člověkem (odlesněním)",
                    "correct": false
                  },
                  {
                    "text": "Propoj s předchozími a navazujícími okruhy v osnově",
                    "correct": true
                  },
                  {
                    "text": "Nejvyšší druhová diverzita ptáků je v krajině, kde se střídají otevřené plochy a les",
                    "correct": false
                  },
                  {
                    "text": "Vztah mezi počtem ptačích druhů a lesnatostí v oblasti",
                    "correct": false
                  }
                ],
                "explanation": "Propoj s předchozími a navazujícími okruhy v osnově"
              },
              {
                "question": "K tématu „Co je fyzická geografie?\" — které tvrzení je správné? (14)",
                "options": [
                  {
                    "text": "Nejvyšší druhová diverzita ptáků je v krajině, kde se střídají otevřené plochy a les",
                    "correct": false
                  },
                  {
                    "text": "Vztah mezi počtem ptačích druhů a lesnatostí v oblasti",
                    "correct": true
                  },
                  {
                    "text": "(Evropská agentura pro životní prostředí)",
                    "correct": false
                  },
                  {
                    "text": "Lesnatost je dána způsobem využití země člověkem (odlesněním)",
                    "correct": false
                  }
                ],
                "explanation": "Vztah mezi počtem ptačích druhů a lesnatostí v oblasti"
              },
              {
                "question": "K tématu „Co je fyzická geografie?\" — které tvrzení je správné? (15)",
                "options": [
                  {
                    "text": "Nejvyšší druhová diverzita ptáků je v krajině, kde se střídají otevřené plochy a les",
                    "correct": false
                  },
                  {
                    "text": "Lesnatost je dána způsobem využití země člověkem (odlesněním)",
                    "correct": true
                  },
                  {
                    "text": "(Evropská agentura pro životní prostředí)",
                    "correct": false
                  },
                  {
                    "text": "Vztah mezi počtem ptačích druhů a lesnatostí v oblasti",
                    "correct": false
                  }
                ],
                "explanation": "Lesnatost je dána způsobem využití země člověkem (odlesněním)"
              },
              {
                "question": "K tématu „Co je fyzická geografie?\" — které tvrzení je správné? (16)",
                "options": [
                  {
                    "text": "Lesnatost je dána způsobem využití země člověkem (odlesněním)",
                    "correct": false
                  },
                  {
                    "text": "Nejvyšší druhová diverzita ptáků je v krajině, kde se střídají otevřené plochy a les",
                    "correct": true
                  },
                  {
                    "text": "(Evropská agentura pro životní prostředí)",
                    "correct": false
                  },
                  {
                    "text": "Vztah mezi počtem ptačích druhů a lesnatostí v oblasti",
                    "correct": false
                  }
                ],
                "explanation": "Nejvyšší druhová diverzita ptáků je v krajině, kde se střídají otevřené plochy a les"
              },
              {
                "question": "K tématu „Co je fyzická geografie?\" — které tvrzení je správné? (17)",
                "options": [
                  {
                    "text": "Lesnatost je dána způsobem využití země člověkem (odlesněním)",
                    "correct": false
                  },
                  {
                    "text": "(Evropská agentura pro životní prostředí)",
                    "correct": true
                  },
                  {
                    "text": "Nejvyšší druhová diverzita ptáků je v krajině, kde se střídají otevřené plochy a les",
                    "correct": false
                  },
                  {
                    "text": "Vztah mezi počtem ptačích druhů a lesnatostí v oblasti",
                    "correct": false
                  }
                ],
                "explanation": "(Evropská agentura pro životní prostředí)"
              },
              {
                "question": "K tématu „Co je fyzická geografie?\" — které tvrzení je správné? (18)",
                "options": [
                  {
                    "text": "Lesnatost je dána způsobem využití země člověkem (odlesněním)",
                    "correct": false
                  },
                  {
                    "text": "Jako krajina se označuje část zemského povrchu s typickou kombinací přírodních a kulturních prvků a charakteristickou scenerií",
                    "correct": true
                  },
                  {
                    "text": "Nejvyšší druhová diverzita ptáků je v krajině, kde se střídají otevřené plochy a les",
                    "correct": false
                  },
                  {
                    "text": "Vztah mezi počtem ptačích druhů a lesnatostí v oblasti",
                    "correct": false
                  }
                ],
                "explanation": "Jako krajina se označuje část zemského povrchu s typickou kombinací přírodních a kulturních prvků a charakteristickou scenerií"
              },
              {
                "question": "K tématu „Co je fyzická geografie?\" — které tvrzení je správné? (19)",
                "options": [
                  {
                    "text": "Lesnatost je dána způsobem využití země člověkem (odlesněním)",
                    "correct": false
                  },
                  {
                    "text": "krajina vzniklá přetvořením původní přírodní krajiny činností člověka",
                    "correct": true
                  },
                  {
                    "text": "Nejvyšší druhová diverzita ptáků je v krajině, kde se střídají otevřené plochy a les",
                    "correct": false
                  },
                  {
                    "text": "Vztah mezi počtem ptačích druhů a lesnatostí v oblasti",
                    "correct": false
                  }
                ],
                "explanation": "krajina vzniklá přetvořením původní přírodní krajiny činností člověka"
              },
              {
                "question": "K tématu „Co je fyzická geografie?\" — které tvrzení je správné? (20)",
                "options": [
                  {
                    "text": "Lesnatost je dána způsobem využití země člověkem (odlesněním)",
                    "correct": false
                  },
                  {
                    "text": "Propustná přípovrchová vrstva sahající od vrcholků stromů po spodní hranici podzemní vody",
                    "correct": true
                  },
                  {
                    "text": "Nejvyšší druhová diverzita ptáků je v krajině, kde se střídají otevřené plochy a les",
                    "correct": false
                  },
                  {
                    "text": "Vztah mezi počtem ptačích druhů a lesnatostí v oblasti",
                    "correct": false
                  }
                ],
                "explanation": "Propustná přípovrchová vrstva sahající od vrcholků stromů po spodní hranici podzemní vody"
              }
            ]
          }
        },
        {
          "id": "z0026p-2-paradigmata-pro-fyzickou-geografii-15",
          "title": "2. Paradigmata pro fyzickou geografii",
          "summary": "Studijní okruh: 2. Paradigmata pro fyzickou geografii",
          "minutes": 12,
          "sectionTitle": "Témata doc. Máčky",
          "available": false
        },
        {
          "id": "z0026p-3-fyzickogeograficka-sfera-procesy-a-krajiny-16",
          "title": "3. Fyzickogeografická sféra: procesy a krajiny",
          "summary": "Studijní okruh: 3. Fyzickogeografická sféra: procesy a krajiny",
          "minutes": 12,
          "sectionTitle": "Témata doc. Máčky",
          "available": false
        },
        {
          "id": "z0026p-3-1-vyvoj-litosfery-17",
          "title": "3.1 Vývoj litosféry",
          "summary": "Studijní okruh: 3.1 Vývoj litosféry",
          "minutes": 22,
          "sectionTitle": "Témata doc. Máčky",
          "available": true,
          "blocks": [
            {
              "type": "heading",
              "text": "Témata doc. Máčky"
            },
            {
              "type": "callout",
              "label": "Okruh",
              "text": "3.1 Vývoj litosféry"
            },
            {
              "type": "callout",
              "label": "Jak číst tuto lekci",
              "text": "Text je výtah ze skripta a přednášek — použij ho jako mapu k učení. Detaily a obrázky najdeš v PDF/PPT v materiálech lekce."
            },
            {
              "type": "heading",
              "text": "Přednáška FG_DN_2 (Máčka/Nývlt)"
            },
            {
              "type": "list",
              "label": "Body přednášky",
              "items": [
                "Litosféra, její vznik, vývoj a procesy v ní probíhající",
                "Prostorová variabilita mocnosti zemské kůry",
                "Průměr na rovníku o 43 km větší než na pólu",
                "Klidná střední hladina moří, které jsou spojené i pod kontinenty",
                "Obrázek ukazuje skutečný poměr velikosti Země a Měsíce",
                "Protože dosáhla stavu hydrostatické rovnováhy.",
                "Gutenbergova diskontinuita (plášť / jádro)",
                "Minerály: olivín, pyroxen, granát, spinel",
                "intenzivní tektonická a vulkanická aktivita, orogeneze",
                "stacionární ložisko magmatu ve svrchním plášti pod oceánskou nebo kontinentální kůrou"
              ]
            },
            {
              "type": "list",
              "label": "Doporučený postup",
              "items": [
                "Projdi výtah a vlastní poznámky z přednášky",
                "Otevři přiložené PDF/PPT v materiálech lekce",
                "Propoj s předchozími a navazujícími okruhy v osnově"
              ]
            }
          ],
          "resources": [
            {
              "kind": "presentation",
              "title": "FG_DN_2 — přednáška",
              "url": "/materials/geografie-kartografie/z0026p/FG_DN_2.pptx",
              "source": "GÚ MUNI / Máčka"
            },
            {
              "kind": "link",
              "title": "IS MUNI — Fyzická geografie",
              "url": "https://is.muni.cz/predmet/sci/Z0026p",
              "source": "IS MUNI"
            }
          ],
          "quiz": {
            "title": "Kvíz: Vývoj litosféry",
            "questions": [
              {
                "question": "Průměrná mocnost zemské kůry na rovníku je oproti pólu…",
                "options": [
                  {
                    "text": "asi o 43 km větší",
                    "correct": true
                  },
                  {
                    "text": "stejná",
                    "correct": false
                  },
                  {
                    "text": "o 43 km menší",
                    "correct": false
                  },
                  {
                    "text": "o 430 km větší",
                    "correct": false
                  }
                ],
                "explanation": "Souvisí s rotací Země a rozlišením mezi kontinentální a oceánskou kůrou."
              },
              {
                "question": "Gutenbergova diskontinuita odděluje…",
                "options": [
                  {
                    "text": "plášť a jádro",
                    "correct": true
                  },
                  {
                    "text": "kůru a plášť",
                    "correct": false
                  },
                  {
                    "text": "litosféru a atmosféru",
                    "correct": false
                  },
                  {
                    "text": "hydrosféru a biosféru",
                    "correct": false
                  }
                ],
                "explanation": "Jde o významnou seismickou hranici v hloubce ~2900 km."
              },
              {
                "question": "Geoid vzniká, protože Země dosáhla stavu…",
                "options": [
                  {
                    "text": "hydrostatické rovnováhy",
                    "correct": true
                  },
                  {
                    "text": "chemické rovnováhy",
                    "correct": false
                  },
                  {
                    "text": "radioaktivní rovnováhy",
                    "correct": false
                  },
                  {
                    "text": "tektonické rovnováhy",
                    "correct": false
                  }
                ],
                "explanation": "Hladina moří kopíruje ekvipotenciální povrch gravitace."
              },
              {
                "question": "Které minerály jsou typické pro hlubší části pláště?",
                "options": [
                  {
                    "text": "Olivín, pyroxen, granát, spinel",
                    "correct": true
                  },
                  {
                    "text": "Křemen, živec, mika",
                    "correct": false
                  },
                  {
                    "text": "Halit a sádrovec",
                    "correct": false
                  },
                  {
                    "text": "Pouze uhlí a vápenec",
                    "correct": false
                  }
                ],
                "explanation": "Složení se mění s hloubkou a tlakem."
              },
              {
                "question": "Které tvrzení patří k okruhu „Vývoj litosféry\"?",
                "options": [
                  {
                    "text": "Prostorová variabilita mocnosti zemské kůry",
                    "correct": false
                  },
                  {
                    "text": "Klidná střední hladina moří, které jsou spojené i pod kontinenty",
                    "correct": false
                  },
                  {
                    "text": "Průměr na rovníku o 43 km větší než na pólu",
                    "correct": false
                  },
                  {
                    "text": "Litosféra, její vznik, vývoj a procesy v ní probíhající",
                    "correct": true
                  }
                ],
                "explanation": "Litosféra, její vznik, vývoj a procesy v ní probíhající"
              },
              {
                "question": "K tématu „Vývoj litosféry\" — které tvrzení je správné? (6)",
                "options": [
                  {
                    "text": "Litosféra, její vznik, vývoj a procesy v ní probíhající",
                    "correct": false
                  },
                  {
                    "text": "Protože dosáhla stavu hydrostatické rovnováhy.",
                    "correct": true
                  },
                  {
                    "text": "Prostorová variabilita mocnosti zemské kůry",
                    "correct": false
                  },
                  {
                    "text": "Průměr na rovníku o 43 km větší než na pólu",
                    "correct": false
                  }
                ],
                "explanation": "Protože dosáhla stavu hydrostatické rovnováhy."
              },
              {
                "question": "K tématu „Vývoj litosféry\" — které tvrzení je správné? (7)",
                "options": [
                  {
                    "text": "Litosféra, její vznik, vývoj a procesy v ní probíhající",
                    "correct": false
                  },
                  {
                    "text": "Gutenbergova diskontinuita (plášť / jádro)",
                    "correct": true
                  },
                  {
                    "text": "Prostorová variabilita mocnosti zemské kůry",
                    "correct": false
                  },
                  {
                    "text": "Průměr na rovníku o 43 km větší než na pólu",
                    "correct": false
                  }
                ],
                "explanation": "Gutenbergova diskontinuita (plášť / jádro)"
              },
              {
                "question": "K tématu „Vývoj litosféry\" — které tvrzení je správné? (8)",
                "options": [
                  {
                    "text": "Litosféra, její vznik, vývoj a procesy v ní probíhající",
                    "correct": false
                  },
                  {
                    "text": "Minerály: olivín, pyroxen, granát, spinel",
                    "correct": true
                  },
                  {
                    "text": "Prostorová variabilita mocnosti zemské kůry",
                    "correct": false
                  },
                  {
                    "text": "Průměr na rovníku o 43 km větší než na pólu",
                    "correct": false
                  }
                ],
                "explanation": "Minerály: olivín, pyroxen, granát, spinel"
              },
              {
                "question": "K tématu „Vývoj litosféry\" — které tvrzení je správné? (9)",
                "options": [
                  {
                    "text": "Litosféra, její vznik, vývoj a procesy v ní probíhající",
                    "correct": false
                  },
                  {
                    "text": "intenzivní tektonická a vulkanická aktivita, orogeneze",
                    "correct": true
                  },
                  {
                    "text": "Prostorová variabilita mocnosti zemské kůry",
                    "correct": false
                  },
                  {
                    "text": "Průměr na rovníku o 43 km větší než na pólu",
                    "correct": false
                  }
                ],
                "explanation": "intenzivní tektonická a vulkanická aktivita, orogeneze"
              },
              {
                "question": "K tématu „Vývoj litosféry\" — které tvrzení je správné? (10)",
                "options": [
                  {
                    "text": "Litosféra, její vznik, vývoj a procesy v ní probíhající",
                    "correct": false
                  },
                  {
                    "text": "Prostorová variabilita mocnosti zemské kůry",
                    "correct": false
                  },
                  {
                    "text": "Průměr na rovníku o 43 km větší než na pólu",
                    "correct": false
                  },
                  {
                    "text": "stacionární ložisko magmatu ve svrchním plášti pod oceánskou nebo kontinentální kůrou",
                    "correct": true
                  }
                ],
                "explanation": "stacionární ložisko magmatu ve svrchním plášti pod oceánskou nebo kontinentální kůrou"
              },
              {
                "question": "K tématu „Vývoj litosféry\" — které tvrzení je správné? (11)",
                "options": [
                  {
                    "text": "Litosféra, její vznik, vývoj a procesy v ní probíhající",
                    "correct": false
                  },
                  {
                    "text": "Prostorová variabilita mocnosti zemské kůry",
                    "correct": false
                  },
                  {
                    "text": "Průměr na rovníku o 43 km větší než na pólu",
                    "correct": false
                  },
                  {
                    "text": "Projdi výtah a vlastní poznámky z přednášky",
                    "correct": true
                  }
                ],
                "explanation": "Projdi výtah a vlastní poznámky z přednášky"
              },
              {
                "question": "K tématu „Vývoj litosféry\" — které tvrzení je správné? (12)",
                "options": [
                  {
                    "text": "Litosféra, její vznik, vývoj a procesy v ní probíhající",
                    "correct": false
                  },
                  {
                    "text": "Prostorová variabilita mocnosti zemské kůry",
                    "correct": false
                  },
                  {
                    "text": "Průměr na rovníku o 43 km větší než na pólu",
                    "correct": false
                  },
                  {
                    "text": "Otevři přiložené PDF/PPT v materiálech lekce",
                    "correct": true
                  }
                ],
                "explanation": "Otevři přiložené PDF/PPT v materiálech lekce"
              },
              {
                "question": "K tématu „Vývoj litosféry\" — které tvrzení je správné? (13)",
                "options": [
                  {
                    "text": "Litosféra, její vznik, vývoj a procesy v ní probíhající",
                    "correct": false
                  },
                  {
                    "text": "Prostorová variabilita mocnosti zemské kůry",
                    "correct": false
                  },
                  {
                    "text": "Průměr na rovníku o 43 km větší než na pólu",
                    "correct": false
                  },
                  {
                    "text": "Propoj s předchozími a navazujícími okruhy v osnově",
                    "correct": true
                  }
                ],
                "explanation": "Propoj s předchozími a navazujícími okruhy v osnově"
              },
              {
                "question": "K tématu „Vývoj litosféry\" — které tvrzení je správné? (14)",
                "options": [
                  {
                    "text": "Prostorová variabilita mocnosti zemské kůry",
                    "correct": false
                  },
                  {
                    "text": "Průměr na rovníku o 43 km větší než na pólu",
                    "correct": false
                  },
                  {
                    "text": "Klidná střední hladina moří, které jsou spojené i pod kontinenty",
                    "correct": false
                  },
                  {
                    "text": "Litosféra, její vznik, vývoj a procesy v ní probíhající",
                    "correct": true
                  }
                ],
                "explanation": "Litosféra, její vznik, vývoj a procesy v ní probíhající"
              },
              {
                "question": "K tématu „Vývoj litosféry\" — které tvrzení je správné? (15)",
                "options": [
                  {
                    "text": "Litosféra, její vznik, vývoj a procesy v ní probíhající",
                    "correct": false
                  },
                  {
                    "text": "Průměr na rovníku o 43 km větší než na pólu",
                    "correct": false
                  },
                  {
                    "text": "Klidná střední hladina moří, které jsou spojené i pod kontinenty",
                    "correct": false
                  },
                  {
                    "text": "Prostorová variabilita mocnosti zemské kůry",
                    "correct": true
                  }
                ],
                "explanation": "Prostorová variabilita mocnosti zemské kůry"
              },
              {
                "question": "K tématu „Vývoj litosféry\" — které tvrzení je správné? (16)",
                "options": [
                  {
                    "text": "Litosféra, její vznik, vývoj a procesy v ní probíhající",
                    "correct": false
                  },
                  {
                    "text": "Prostorová variabilita mocnosti zemské kůry",
                    "correct": false
                  },
                  {
                    "text": "Klidná střední hladina moří, které jsou spojené i pod kontinenty",
                    "correct": false
                  },
                  {
                    "text": "Průměr na rovníku o 43 km větší než na pólu",
                    "correct": true
                  }
                ],
                "explanation": "Průměr na rovníku o 43 km větší než na pólu"
              },
              {
                "question": "K tématu „Vývoj litosféry\" — které tvrzení je správné? (17)",
                "options": [
                  {
                    "text": "Litosféra, její vznik, vývoj a procesy v ní probíhající",
                    "correct": false
                  },
                  {
                    "text": "Prostorová variabilita mocnosti zemské kůry",
                    "correct": false
                  },
                  {
                    "text": "Průměr na rovníku o 43 km větší než na pólu",
                    "correct": false
                  },
                  {
                    "text": "Klidná střední hladina moří, které jsou spojené i pod kontinenty",
                    "correct": true
                  }
                ],
                "explanation": "Klidná střední hladina moří, které jsou spojené i pod kontinenty"
              },
              {
                "question": "K tématu „Vývoj litosféry\" — které tvrzení je správné? (18)",
                "options": [
                  {
                    "text": "Litosféra, její vznik, vývoj a procesy v ní probíhající",
                    "correct": false
                  },
                  {
                    "text": "Prostorová variabilita mocnosti zemské kůry",
                    "correct": false
                  },
                  {
                    "text": "Průměr na rovníku o 43 km větší než na pólu",
                    "correct": false
                  },
                  {
                    "text": "Obrázek ukazuje skutečný poměr velikosti Země a Měsíce",
                    "correct": true
                  }
                ],
                "explanation": "Obrázek ukazuje skutečný poměr velikosti Země a Měsíce"
              },
              {
                "question": "K tématu „Vývoj litosféry\" — které tvrzení je správné? (19)",
                "options": [
                  {
                    "text": "Litosféra, její vznik, vývoj a procesy v ní probíhající",
                    "correct": false
                  },
                  {
                    "text": "Prostorová variabilita mocnosti zemské kůry",
                    "correct": false
                  },
                  {
                    "text": "Průměr na rovníku o 43 km větší než na pólu",
                    "correct": false
                  },
                  {
                    "text": "Protože dosáhla stavu hydrostatické rovnováhy.",
                    "correct": true
                  }
                ],
                "explanation": "Protože dosáhla stavu hydrostatické rovnováhy."
              },
              {
                "question": "K tématu „Vývoj litosféry\" — které tvrzení je správné? (20)",
                "options": [
                  {
                    "text": "Litosféra, její vznik, vývoj a procesy v ní probíhající",
                    "correct": false
                  },
                  {
                    "text": "Prostorová variabilita mocnosti zemské kůry",
                    "correct": false
                  },
                  {
                    "text": "Průměr na rovníku o 43 km větší než na pólu",
                    "correct": false
                  },
                  {
                    "text": "Gutenbergova diskontinuita (plášť / jádro)",
                    "correct": true
                  }
                ],
                "explanation": "Gutenbergova diskontinuita (plášť / jádro)"
              }
            ]
          }
        },
        {
          "id": "z0026p-3-2-horninovy-cyklus-18",
          "title": "3.2 Horninový cyklus",
          "summary": "Studijní okruh: 3.2 Horninový cyklus",
          "minutes": 22,
          "sectionTitle": "Témata doc. Máčky",
          "available": true,
          "blocks": [
            {
              "type": "heading",
              "text": "Témata doc. Máčky"
            },
            {
              "type": "callout",
              "label": "Okruh",
              "text": "3.2 Horninový cyklus"
            },
            {
              "type": "callout",
              "label": "Jak číst tuto lekci",
              "text": "Text je výtah ze skripta a přednášek — použij ho jako mapu k učení. Detaily a obrázky najdeš v PDF/PPT v materiálech lekce."
            },
            {
              "type": "heading",
              "text": "Přednáška FG_DN_3 (Máčka/Nývlt)"
            },
            {
              "type": "list",
              "label": "Body přednášky",
              "items": [
                "těleso deskovitého tvaru vymezené vrstevními plochami, které se složením liší od podloží a nadloží",
                "Velikost částic ve vrstvě se zmenšuje odspodu nahoru (pozitivní gradace)",
                "Velikost částic ve vrstvě se zvětšuje odspodu nahoru (negativní gradace)",
                "hlavní (podstatné): &gt; 10 objemových %",
                "vedlejší (podružné): &lt; 10 objemových %",
                "akcesorické (přídatné): ≤ 5 objemových %",
                "primární: tvoří se při vzniku samotné horniny",
                "sekundární: vznikají přeměnou z primárních (převážně zvětráváním)",
                "Zemskou kůru tvoří z převážné většiny 8 prvků",
                "Vrstvy jsou ukloněné vůči hlavní vrstevní ploše setu vrstev"
              ]
            },
            {
              "type": "list",
              "label": "Doporučený postup",
              "items": [
                "Projdi výtah a vlastní poznámky z přednášky",
                "Otevři přiložené PDF/PPT v materiálech lekce",
                "Propoj s předchozími a navazujícími okruhy v osnově"
              ]
            }
          ],
          "resources": [
            {
              "kind": "presentation",
              "title": "FG_DN_3 — přednáška",
              "url": "/materials/geografie-kartografie/z0026p/FG_DN_3.pptx",
              "source": "GÚ MUNI / Máčka"
            },
            {
              "kind": "link",
              "title": "IS MUNI — Fyzická geografie",
              "url": "https://is.muni.cz/predmet/sci/Z0026p",
              "source": "IS MUNI"
            }
          ],
          "quiz": {
            "title": "Kvíz: Horninový cyklus",
            "questions": [
              {
                "question": "Pozitivní gradace znamená, že velikost částic…",
                "options": [
                  {
                    "text": "se odspodu nahoru zmenšuje",
                    "correct": true
                  },
                  {
                    "text": "se odspodu nahoru zvětšuje",
                    "correct": false
                  },
                  {
                    "text": "je všude stejná",
                    "correct": false
                  },
                  {
                    "text": "nezávisí na vrstvách",
                    "correct": false
                  }
                ],
                "explanation": "U sedimentů často odráží ustupující energii prostředí při ukládání."
              },
              {
                "question": "Sekundární minerály vznikají převážně…",
                "options": [
                  {
                    "text": "přeměnou primárních minerálů (často zvětráváním)",
                    "correct": true
                  },
                  {
                    "text": "při tání magmatu",
                    "correct": false
                  },
                  {
                    "text": "pouze v kosmu",
                    "correct": false
                  },
                  {
                    "text": "bez jakékoli změny prostředí",
                    "correct": false
                  }
                ],
                "explanation": "Primární minerály jsou stabilní za podmínek vzniku horniny."
              },
              {
                "question": "Akcesorické minerály tvoří objemově…",
                "options": [
                  {
                    "text": "nejvýše asi 5 %",
                    "correct": true
                  },
                  {
                    "text": "vždy více než 50 %",
                    "correct": false
                  },
                  {
                    "text": "přesně 10 %",
                    "correct": false
                  },
                  {
                    "text": "0 %",
                    "correct": false
                  }
                ],
                "explanation": "Hlavní minerály >10 %, vedlejší <10 % objemu."
              },
              {
                "question": "Vrstva v sedimentech je vymezena…",
                "options": [
                  {
                    "text": "vrstevními plochami a odlišným složením od sousedních vrstev",
                    "correct": true
                  },
                  {
                    "text": "pouze barvou bez rozhraní",
                    "correct": false
                  },
                  {
                    "text": "výhradně fosiliemi",
                    "correct": false
                  },
                  {
                    "text": "směrem severu",
                    "correct": false
                  }
                ],
                "explanation": "Vrstvy mohou být ukloněny vůči horizontále."
              },
              {
                "question": "Které tvrzení patří k okruhu „Horninový cyklus\"?",
                "options": [
                  {
                    "text": "Velikost částic ve vrstvě se zvětšuje odspodu nahoru (negativní gradace)",
                    "correct": false
                  },
                  {
                    "text": "těleso deskovitého tvaru vymezené vrstevními plochami, které se složením liší od podloží a nadloží",
                    "correct": true
                  },
                  {
                    "text": "hlavní (podstatné): &gt; 10 objemových %",
                    "correct": false
                  },
                  {
                    "text": "Velikost částic ve vrstvě se zmenšuje odspodu nahoru (pozitivní gradace)",
                    "correct": false
                  }
                ],
                "explanation": "těleso deskovitého tvaru vymezené vrstevními plochami, které se složením liší od podloží a nadloží"
              },
              {
                "question": "K tématu „Horninový cyklus\" — které tvrzení je správné? (6)",
                "options": [
                  {
                    "text": "těleso deskovitého tvaru vymezené vrstevními plochami, které se složením liší od podloží a nadloží",
                    "correct": false
                  },
                  {
                    "text": "Velikost částic ve vrstvě se zmenšuje odspodu nahoru (pozitivní gradace)",
                    "correct": false
                  },
                  {
                    "text": "Velikost částic ve vrstvě se zvětšuje odspodu nahoru (negativní gradace)",
                    "correct": false
                  },
                  {
                    "text": "akcesorické (přídatné): ≤ 5 objemových %",
                    "correct": true
                  }
                ],
                "explanation": "akcesorické (přídatné): ≤ 5 objemových %"
              },
              {
                "question": "K tématu „Horninový cyklus\" — které tvrzení je správné? (7)",
                "options": [
                  {
                    "text": "těleso deskovitého tvaru vymezené vrstevními plochami, které se složením liší od podloží a nadloží",
                    "correct": false
                  },
                  {
                    "text": "Velikost částic ve vrstvě se zmenšuje odspodu nahoru (pozitivní gradace)",
                    "correct": false
                  },
                  {
                    "text": "Velikost částic ve vrstvě se zvětšuje odspodu nahoru (negativní gradace)",
                    "correct": false
                  },
                  {
                    "text": "primární: tvoří se při vzniku samotné horniny",
                    "correct": true
                  }
                ],
                "explanation": "primární: tvoří se při vzniku samotné horniny"
              },
              {
                "question": "K tématu „Horninový cyklus\" — které tvrzení je správné? (8)",
                "options": [
                  {
                    "text": "těleso deskovitého tvaru vymezené vrstevními plochami, které se složením liší od podloží a nadloží",
                    "correct": false
                  },
                  {
                    "text": "Velikost částic ve vrstvě se zmenšuje odspodu nahoru (pozitivní gradace)",
                    "correct": false
                  },
                  {
                    "text": "Velikost částic ve vrstvě se zvětšuje odspodu nahoru (negativní gradace)",
                    "correct": false
                  },
                  {
                    "text": "sekundární: vznikají přeměnou z primárních (převážně zvětráváním)",
                    "correct": true
                  }
                ],
                "explanation": "sekundární: vznikají přeměnou z primárních (převážně zvětráváním)"
              },
              {
                "question": "K tématu „Horninový cyklus\" — které tvrzení je správné? (9)",
                "options": [
                  {
                    "text": "těleso deskovitého tvaru vymezené vrstevními plochami, které se složením liší od podloží a nadloží",
                    "correct": false
                  },
                  {
                    "text": "Velikost částic ve vrstvě se zmenšuje odspodu nahoru (pozitivní gradace)",
                    "correct": false
                  },
                  {
                    "text": "Velikost částic ve vrstvě se zvětšuje odspodu nahoru (negativní gradace)",
                    "correct": false
                  },
                  {
                    "text": "Zemskou kůru tvoří z převážné většiny 8 prvků",
                    "correct": true
                  }
                ],
                "explanation": "Zemskou kůru tvoří z převážné většiny 8 prvků"
              },
              {
                "question": "K tématu „Horninový cyklus\" — které tvrzení je správné? (10)",
                "options": [
                  {
                    "text": "Velikost částic ve vrstvě se zvětšuje odspodu nahoru (negativní gradace)",
                    "correct": false
                  },
                  {
                    "text": "Velikost částic ve vrstvě se zmenšuje odspodu nahoru (pozitivní gradace)",
                    "correct": false
                  },
                  {
                    "text": "Vrstvy jsou ukloněné vůči hlavní vrstevní ploše setu vrstev",
                    "correct": true
                  },
                  {
                    "text": "těleso deskovitého tvaru vymezené vrstevními plochami, které se složením liší od podloží a nadloží",
                    "correct": false
                  }
                ],
                "explanation": "Vrstvy jsou ukloněné vůči hlavní vrstevní ploše setu vrstev"
              },
              {
                "question": "K tématu „Horninový cyklus\" — které tvrzení je správné? (11)",
                "options": [
                  {
                    "text": "Velikost částic ve vrstvě se zvětšuje odspodu nahoru (negativní gradace)",
                    "correct": false
                  },
                  {
                    "text": "Velikost částic ve vrstvě se zmenšuje odspodu nahoru (pozitivní gradace)",
                    "correct": false
                  },
                  {
                    "text": "Projdi výtah a vlastní poznámky z přednášky",
                    "correct": true
                  },
                  {
                    "text": "těleso deskovitého tvaru vymezené vrstevními plochami, které se složením liší od podloží a nadloží",
                    "correct": false
                  }
                ],
                "explanation": "Projdi výtah a vlastní poznámky z přednášky"
              },
              {
                "question": "K tématu „Horninový cyklus\" — které tvrzení je správné? (12)",
                "options": [
                  {
                    "text": "Velikost částic ve vrstvě se zvětšuje odspodu nahoru (negativní gradace)",
                    "correct": false
                  },
                  {
                    "text": "Velikost částic ve vrstvě se zmenšuje odspodu nahoru (pozitivní gradace)",
                    "correct": false
                  },
                  {
                    "text": "Otevři přiložené PDF/PPT v materiálech lekce",
                    "correct": true
                  },
                  {
                    "text": "těleso deskovitého tvaru vymezené vrstevními plochami, které se složením liší od podloží a nadloží",
                    "correct": false
                  }
                ],
                "explanation": "Otevři přiložené PDF/PPT v materiálech lekce"
              },
              {
                "question": "K tématu „Horninový cyklus\" — které tvrzení je správné? (13)",
                "options": [
                  {
                    "text": "Velikost částic ve vrstvě se zvětšuje odspodu nahoru (negativní gradace)",
                    "correct": false
                  },
                  {
                    "text": "Velikost částic ve vrstvě se zmenšuje odspodu nahoru (pozitivní gradace)",
                    "correct": false
                  },
                  {
                    "text": "Propoj s předchozími a navazujícími okruhy v osnově",
                    "correct": true
                  },
                  {
                    "text": "těleso deskovitého tvaru vymezené vrstevními plochami, které se složením liší od podloží a nadloží",
                    "correct": false
                  }
                ],
                "explanation": "Propoj s předchozími a navazujícími okruhy v osnově"
              },
              {
                "question": "K tématu „Horninový cyklus\" — které tvrzení je správné? (14)",
                "options": [
                  {
                    "text": "hlavní (podstatné): &gt; 10 objemových %",
                    "correct": false
                  },
                  {
                    "text": "Velikost částic ve vrstvě se zvětšuje odspodu nahoru (negativní gradace)",
                    "correct": false
                  },
                  {
                    "text": "těleso deskovitého tvaru vymezené vrstevními plochami, které se složením liší od podloží a nadloží",
                    "correct": true
                  },
                  {
                    "text": "Velikost částic ve vrstvě se zmenšuje odspodu nahoru (pozitivní gradace)",
                    "correct": false
                  }
                ],
                "explanation": "těleso deskovitého tvaru vymezené vrstevními plochami, které se složením liší od podloží a nadloží"
              },
              {
                "question": "K tématu „Horninový cyklus\" — které tvrzení je správné? (15)",
                "options": [
                  {
                    "text": "hlavní (podstatné): &gt; 10 objemových %",
                    "correct": false
                  },
                  {
                    "text": "Velikost částic ve vrstvě se zvětšuje odspodu nahoru (negativní gradace)",
                    "correct": false
                  },
                  {
                    "text": "Velikost částic ve vrstvě se zmenšuje odspodu nahoru (pozitivní gradace)",
                    "correct": true
                  },
                  {
                    "text": "těleso deskovitého tvaru vymezené vrstevními plochami, které se složením liší od podloží a nadloží",
                    "correct": false
                  }
                ],
                "explanation": "Velikost částic ve vrstvě se zmenšuje odspodu nahoru (pozitivní gradace)"
              },
              {
                "question": "K tématu „Horninový cyklus\" — které tvrzení je správné? (16)",
                "options": [
                  {
                    "text": "hlavní (podstatné): &gt; 10 objemových %",
                    "correct": false
                  },
                  {
                    "text": "Velikost částic ve vrstvě se zmenšuje odspodu nahoru (pozitivní gradace)",
                    "correct": false
                  },
                  {
                    "text": "Velikost částic ve vrstvě se zvětšuje odspodu nahoru (negativní gradace)",
                    "correct": true
                  },
                  {
                    "text": "těleso deskovitého tvaru vymezené vrstevními plochami, které se složením liší od podloží a nadloží",
                    "correct": false
                  }
                ],
                "explanation": "Velikost částic ve vrstvě se zvětšuje odspodu nahoru (negativní gradace)"
              },
              {
                "question": "K tématu „Horninový cyklus\" — které tvrzení je správné? (17)",
                "options": [
                  {
                    "text": "Velikost částic ve vrstvě se zvětšuje odspodu nahoru (negativní gradace)",
                    "correct": false
                  },
                  {
                    "text": "Velikost částic ve vrstvě se zmenšuje odspodu nahoru (pozitivní gradace)",
                    "correct": false
                  },
                  {
                    "text": "hlavní (podstatné): &gt; 10 objemových %",
                    "correct": true
                  },
                  {
                    "text": "těleso deskovitého tvaru vymezené vrstevními plochami, které se složením liší od podloží a nadloží",
                    "correct": false
                  }
                ],
                "explanation": "hlavní (podstatné): &gt; 10 objemových %"
              },
              {
                "question": "K tématu „Horninový cyklus\" — které tvrzení je správné? (18)",
                "options": [
                  {
                    "text": "Velikost částic ve vrstvě se zvětšuje odspodu nahoru (negativní gradace)",
                    "correct": false
                  },
                  {
                    "text": "Velikost částic ve vrstvě se zmenšuje odspodu nahoru (pozitivní gradace)",
                    "correct": false
                  },
                  {
                    "text": "vedlejší (podružné): &lt; 10 objemových %",
                    "correct": true
                  },
                  {
                    "text": "těleso deskovitého tvaru vymezené vrstevními plochami, které se složením liší od podloží a nadloží",
                    "correct": false
                  }
                ],
                "explanation": "vedlejší (podružné): &lt; 10 objemových %"
              },
              {
                "question": "K tématu „Horninový cyklus\" — které tvrzení je správné? (19)",
                "options": [
                  {
                    "text": "Velikost částic ve vrstvě se zvětšuje odspodu nahoru (negativní gradace)",
                    "correct": false
                  },
                  {
                    "text": "Velikost částic ve vrstvě se zmenšuje odspodu nahoru (pozitivní gradace)",
                    "correct": false
                  },
                  {
                    "text": "akcesorické (přídatné): ≤ 5 objemových %",
                    "correct": true
                  },
                  {
                    "text": "těleso deskovitého tvaru vymezené vrstevními plochami, které se složením liší od podloží a nadloží",
                    "correct": false
                  }
                ],
                "explanation": "akcesorické (přídatné): ≤ 5 objemových %"
              },
              {
                "question": "K tématu „Horninový cyklus\" — které tvrzení je správné? (20)",
                "options": [
                  {
                    "text": "Velikost částic ve vrstvě se zvětšuje odspodu nahoru (negativní gradace)",
                    "correct": false
                  },
                  {
                    "text": "Velikost částic ve vrstvě se zmenšuje odspodu nahoru (pozitivní gradace)",
                    "correct": false
                  },
                  {
                    "text": "primární: tvoří se při vzniku samotné horniny",
                    "correct": true
                  },
                  {
                    "text": "těleso deskovitého tvaru vymezené vrstevními plochami, které se složením liší od podloží a nadloží",
                    "correct": false
                  }
                ],
                "explanation": "primární: tvoří se při vzniku samotné horniny"
              }
            ]
          }
        },
        {
          "id": "z0026p-3-3-tektonicke-procesy-19",
          "title": "3.3 Tektonické procesy",
          "summary": "Studijní okruh: 3.3 Tektonické procesy",
          "minutes": 22,
          "sectionTitle": "Témata doc. Máčky",
          "available": true,
          "blocks": [
            {
              "type": "heading",
              "text": "Témata doc. Máčky"
            },
            {
              "type": "callout",
              "label": "Okruh",
              "text": "3.3 Tektonické procesy"
            },
            {
              "type": "callout",
              "label": "Jak číst tuto lekci",
              "text": "Text je výtah ze skripta a přednášek — použij ho jako mapu k učení. Detaily a obrázky najdeš v PDF/PPT v materiálech lekce."
            },
            {
              "type": "heading",
              "text": "Přednáška FG_DN_4 (Máčka/Nývlt)"
            },
            {
              "type": "paragraph",
              "text": "Horninové těleso (alochton), které bylo přemístěno na jinou horninovou jednotku (autochton) alespoň na vzdálenost 5 km"
            },
            {
              "type": "list",
              "label": "Body přednášky",
              "items": [
                "Stav nesouladu mezi geologickými strukturami a tvary zemského povrchu ve vrásových pohořích",
                "Shoda mezi geologickými strukturami a tvary reliéfu",
                "Nesoulad mezi geologickými strukturami a tvary reliéfu",
                "Puklina v hornině, podél které nastal pozorovatelný pohyb",
                "Příklady působení endogenních a exogenních procesů",
                "Pohyby částí zemské kůry a svrchního pláště, při kterých dochází k deformaci hornin",
                "Studuje endogenní procesy, geologické struktury a tvary reliéfu související s deformací hornin",
                "Typy tektonických procesů podle směrů působících sil",
                "Průsečnice vodorovné roviny s nakloněnou vrstevní plochou"
              ]
            },
            {
              "type": "list",
              "label": "Doporučený postup",
              "items": [
                "Projdi výtah a vlastní poznámky z přednášky",
                "Otevři přiložené PDF/PPT v materiálech lekce",
                "Propoj s předchozími a navazujícími okruhy v osnově"
              ]
            }
          ],
          "resources": [
            {
              "kind": "presentation",
              "title": "FG_DN_4 — přednáška",
              "url": "/materials/geografie-kartografie/z0026p/FG_DN_4.pptx",
              "source": "GÚ MUNI / Máčka"
            },
            {
              "kind": "link",
              "title": "IS MUNI — Fyzická geografie",
              "url": "https://is.muni.cz/predmet/sci/Z0026p",
              "source": "IS MUNI"
            }
          ],
          "quiz": {
            "title": "Kvíz: Tektonické procesy",
            "questions": [
              {
                "question": "Zlom je definován jako…",
                "options": [
                  {
                    "text": "puklina v hornině s pozorovatelným pohybem podél ní",
                    "correct": true
                  },
                  {
                    "text": "pouze vrstevní plocha",
                    "correct": false
                  },
                  {
                    "text": "náraz větru na svah",
                    "correct": false
                  },
                  {
                    "text": "erozní rýha po dešti",
                    "correct": false
                  }
                ],
                "explanation": "Tektonické zlomy vznikají napětím v zemské kůře."
              },
              {
                "question": "Allochton je horninové těleso…",
                "options": [
                  {
                    "text": "přemístěné na autochton vzdáleněji než 5 km",
                    "correct": true
                  },
                  {
                    "text": "na místě vzniku bez pohybu",
                    "correct": false
                  },
                  {
                    "text": "pouze v atmosféře",
                    "correct": false
                  },
                  {
                    "text": "vždy mladší než okolí",
                    "correct": false
                  }
                ],
                "explanation": "Tektonické přesuny mohou přenášet velké masivy hornin."
              },
              {
                "question": "Morfostruktura znamená…",
                "options": [
                  {
                    "text": "shodu geologických struktur s tvary reliéfu",
                    "correct": true
                  },
                  {
                    "text": "vždy nesoulad struktury a reliéfu",
                    "correct": false
                  },
                  {
                    "text": "pouze fluviální erozi",
                    "correct": false
                  },
                  {
                    "text": "absenci tektoniky",
                    "correct": false
                  }
                ],
                "explanation": "Morfologická anomálie = nesoulad struktury a povrchu."
              },
              {
                "question": "Tektonika studuje především…",
                "options": [
                  {
                    "text": "endogenní procesy a deformace zemské kůry",
                    "correct": true
                  },
                  {
                    "text": "pouze zvětrávání na povrchu",
                    "correct": false
                  },
                  {
                    "text": "jen oběh vody",
                    "correct": false
                  },
                  {
                    "text": "výhradně klima",
                    "correct": false
                  }
                ],
                "explanation": "Endogenní síly vytvářejí zlomy, vrásnění a reliéf."
              },
              {
                "question": "Které tvrzení odpovídá obsahu lekce?",
                "options": [
                  {
                    "text": "Výklad k tomuto okruhu neobsahuje tuto informaci.",
                    "correct": false
                  },
                  {
                    "text": "Horninové těleso (alochton), které bylo přemístěno na jinou horninovou jednotku (autochton) alespoň na vzdálenost 5 km",
                    "correct": true
                  },
                  {
                    "text": "Toto tvrzení nelze z výkladu lekce ověřit.",
                    "correct": false
                  },
                  {
                    "text": "Stav nesouladu mezi geologickými strukturami a tvary zemského povrchu ve vrásových pohořích",
                    "correct": false
                  }
                ],
                "explanation": "Správně: Horninové těleso (alochton), které bylo přemístěno na jinou horninovou jednotku (autochton) alespoň na vzdálenost 5 km"
              },
              {
                "question": "Které tvrzení patří k okruhu „Tektonické procesy\"?",
                "options": [
                  {
                    "text": "Horninové těleso (alochton), které bylo přemístěno na jinou horninovou jednotku (autochton) alespoň na vzdálenost 5 km",
                    "correct": false
                  },
                  {
                    "text": "Stav nesouladu mezi geologickými strukturami a tvary zemského povrchu ve vrásových pohořích",
                    "correct": true
                  },
                  {
                    "text": "Shoda mezi geologickými strukturami a tvary reliéfu",
                    "correct": false
                  },
                  {
                    "text": "Nesoulad mezi geologickými strukturami a tvary reliéfu",
                    "correct": false
                  }
                ],
                "explanation": "Stav nesouladu mezi geologickými strukturami a tvary zemského povrchu ve vrásových pohořích"
              },
              {
                "question": "K tématu „Tektonické procesy\" — které tvrzení je správné? (7)",
                "options": [
                  {
                    "text": "Shoda mezi geologickými strukturami a tvary reliéfu",
                    "correct": false
                  },
                  {
                    "text": "Pohyby částí zemské kůry a svrchního pláště, při kterých dochází k deformaci hornin",
                    "correct": true
                  },
                  {
                    "text": "Horninové těleso (alochton), které bylo přemístěno na jinou horninovou jednotku (autochton) alespoň na vzdálenost 5 km",
                    "correct": false
                  },
                  {
                    "text": "Stav nesouladu mezi geologickými strukturami a tvary zemského povrchu ve vrásových pohořích",
                    "correct": false
                  }
                ],
                "explanation": "Pohyby částí zemské kůry a svrchního pláště, při kterých dochází k deformaci hornin"
              },
              {
                "question": "K tématu „Tektonické procesy\" — které tvrzení je správné? (8)",
                "options": [
                  {
                    "text": "Shoda mezi geologickými strukturami a tvary reliéfu",
                    "correct": false
                  },
                  {
                    "text": "Studuje endogenní procesy, geologické struktury a tvary reliéfu související s deformací hornin",
                    "correct": true
                  },
                  {
                    "text": "Horninové těleso (alochton), které bylo přemístěno na jinou horninovou jednotku (autochton) alespoň na vzdálenost 5 km",
                    "correct": false
                  },
                  {
                    "text": "Stav nesouladu mezi geologickými strukturami a tvary zemského povrchu ve vrásových pohořích",
                    "correct": false
                  }
                ],
                "explanation": "Studuje endogenní procesy, geologické struktury a tvary reliéfu související s deformací hornin"
              },
              {
                "question": "K tématu „Tektonické procesy\" — které tvrzení je správné? (9)",
                "options": [
                  {
                    "text": "Shoda mezi geologickými strukturami a tvary reliéfu",
                    "correct": false
                  },
                  {
                    "text": "Typy tektonických procesů podle směrů působících sil",
                    "correct": true
                  },
                  {
                    "text": "Horninové těleso (alochton), které bylo přemístěno na jinou horninovou jednotku (autochton) alespoň na vzdálenost 5 km",
                    "correct": false
                  },
                  {
                    "text": "Stav nesouladu mezi geologickými strukturami a tvary zemského povrchu ve vrásových pohořích",
                    "correct": false
                  }
                ],
                "explanation": "Typy tektonických procesů podle směrů působících sil"
              },
              {
                "question": "K tématu „Tektonické procesy\" — které tvrzení je správné? (10)",
                "options": [
                  {
                    "text": "Stav nesouladu mezi geologickými strukturami a tvary zemského povrchu ve vrásových pohořích",
                    "correct": false
                  },
                  {
                    "text": "Průsečnice vodorovné roviny s nakloněnou vrstevní plochou",
                    "correct": true
                  },
                  {
                    "text": "Horninové těleso (alochton), které bylo přemístěno na jinou horninovou jednotku (autochton) alespoň na vzdálenost 5 km",
                    "correct": false
                  },
                  {
                    "text": "Shoda mezi geologickými strukturami a tvary reliéfu",
                    "correct": false
                  }
                ],
                "explanation": "Průsečnice vodorovné roviny s nakloněnou vrstevní plochou"
              },
              {
                "question": "K tématu „Tektonické procesy\" — které tvrzení je správné? (11)",
                "options": [
                  {
                    "text": "Stav nesouladu mezi geologickými strukturami a tvary zemského povrchu ve vrásových pohořích",
                    "correct": false
                  },
                  {
                    "text": "Projdi výtah a vlastní poznámky z přednášky",
                    "correct": true
                  },
                  {
                    "text": "Horninové těleso (alochton), které bylo přemístěno na jinou horninovou jednotku (autochton) alespoň na vzdálenost 5 km",
                    "correct": false
                  },
                  {
                    "text": "Shoda mezi geologickými strukturami a tvary reliéfu",
                    "correct": false
                  }
                ],
                "explanation": "Projdi výtah a vlastní poznámky z přednášky"
              },
              {
                "question": "K tématu „Tektonické procesy\" — které tvrzení je správné? (12)",
                "options": [
                  {
                    "text": "Stav nesouladu mezi geologickými strukturami a tvary zemského povrchu ve vrásových pohořích",
                    "correct": false
                  },
                  {
                    "text": "Otevři přiložené PDF/PPT v materiálech lekce",
                    "correct": true
                  },
                  {
                    "text": "Horninové těleso (alochton), které bylo přemístěno na jinou horninovou jednotku (autochton) alespoň na vzdálenost 5 km",
                    "correct": false
                  },
                  {
                    "text": "Shoda mezi geologickými strukturami a tvary reliéfu",
                    "correct": false
                  }
                ],
                "explanation": "Otevři přiložené PDF/PPT v materiálech lekce"
              },
              {
                "question": "K tématu „Tektonické procesy\" — které tvrzení je správné? (13)",
                "options": [
                  {
                    "text": "Stav nesouladu mezi geologickými strukturami a tvary zemského povrchu ve vrásových pohořích",
                    "correct": false
                  },
                  {
                    "text": "Propoj s předchozími a navazujícími okruhy v osnově",
                    "correct": true
                  },
                  {
                    "text": "Horninové těleso (alochton), které bylo přemístěno na jinou horninovou jednotku (autochton) alespoň na vzdálenost 5 km",
                    "correct": false
                  },
                  {
                    "text": "Shoda mezi geologickými strukturami a tvary reliéfu",
                    "correct": false
                  }
                ],
                "explanation": "Propoj s předchozími a navazujícími okruhy v osnově"
              },
              {
                "question": "K tématu „Tektonické procesy\" — které tvrzení je správné? (14)",
                "options": [
                  {
                    "text": "Shoda mezi geologickými strukturami a tvary reliéfu",
                    "correct": false
                  },
                  {
                    "text": "Horninové těleso (alochton), které bylo přemístěno na jinou horninovou jednotku (autochton) alespoň na vzdálenost 5 km",
                    "correct": true
                  },
                  {
                    "text": "Stav nesouladu mezi geologickými strukturami a tvary zemského povrchu ve vrásových pohořích",
                    "correct": false
                  },
                  {
                    "text": "Nesoulad mezi geologickými strukturami a tvary reliéfu",
                    "correct": false
                  }
                ],
                "explanation": "Horninové těleso (alochton), které bylo přemístěno na jinou horninovou jednotku (autochton) alespoň na vzdálenost 5 km"
              },
              {
                "question": "K tématu „Tektonické procesy\" — které tvrzení je správné? (15)",
                "options": [
                  {
                    "text": "Shoda mezi geologickými strukturami a tvary reliéfu",
                    "correct": false
                  },
                  {
                    "text": "Stav nesouladu mezi geologickými strukturami a tvary zemského povrchu ve vrásových pohořích",
                    "correct": true
                  },
                  {
                    "text": "Horninové těleso (alochton), které bylo přemístěno na jinou horninovou jednotku (autochton) alespoň na vzdálenost 5 km",
                    "correct": false
                  },
                  {
                    "text": "Nesoulad mezi geologickými strukturami a tvary reliéfu",
                    "correct": false
                  }
                ],
                "explanation": "Stav nesouladu mezi geologickými strukturami a tvary zemského povrchu ve vrásových pohořích"
              },
              {
                "question": "K tématu „Tektonické procesy\" — které tvrzení je správné? (16)",
                "options": [
                  {
                    "text": "Stav nesouladu mezi geologickými strukturami a tvary zemského povrchu ve vrásových pohořích",
                    "correct": false
                  },
                  {
                    "text": "Shoda mezi geologickými strukturami a tvary reliéfu",
                    "correct": true
                  },
                  {
                    "text": "Horninové těleso (alochton), které bylo přemístěno na jinou horninovou jednotku (autochton) alespoň na vzdálenost 5 km",
                    "correct": false
                  },
                  {
                    "text": "Nesoulad mezi geologickými strukturami a tvary reliéfu",
                    "correct": false
                  }
                ],
                "explanation": "Shoda mezi geologickými strukturami a tvary reliéfu"
              },
              {
                "question": "K tématu „Tektonické procesy\" — které tvrzení je správné? (17)",
                "options": [
                  {
                    "text": "Stav nesouladu mezi geologickými strukturami a tvary zemského povrchu ve vrásových pohořích",
                    "correct": false
                  },
                  {
                    "text": "Nesoulad mezi geologickými strukturami a tvary reliéfu",
                    "correct": true
                  },
                  {
                    "text": "Horninové těleso (alochton), které bylo přemístěno na jinou horninovou jednotku (autochton) alespoň na vzdálenost 5 km",
                    "correct": false
                  },
                  {
                    "text": "Shoda mezi geologickými strukturami a tvary reliéfu",
                    "correct": false
                  }
                ],
                "explanation": "Nesoulad mezi geologickými strukturami a tvary reliéfu"
              },
              {
                "question": "K tématu „Tektonické procesy\" — které tvrzení je správné? (18)",
                "options": [
                  {
                    "text": "Stav nesouladu mezi geologickými strukturami a tvary zemského povrchu ve vrásových pohořích",
                    "correct": false
                  },
                  {
                    "text": "Puklina v hornině, podél které nastal pozorovatelný pohyb",
                    "correct": true
                  },
                  {
                    "text": "Horninové těleso (alochton), které bylo přemístěno na jinou horninovou jednotku (autochton) alespoň na vzdálenost 5 km",
                    "correct": false
                  },
                  {
                    "text": "Shoda mezi geologickými strukturami a tvary reliéfu",
                    "correct": false
                  }
                ],
                "explanation": "Puklina v hornině, podél které nastal pozorovatelný pohyb"
              },
              {
                "question": "K tématu „Tektonické procesy\" — které tvrzení je správné? (19)",
                "options": [
                  {
                    "text": "Stav nesouladu mezi geologickými strukturami a tvary zemského povrchu ve vrásových pohořích",
                    "correct": false
                  },
                  {
                    "text": "Příklady působení endogenních a exogenních procesů",
                    "correct": true
                  },
                  {
                    "text": "Horninové těleso (alochton), které bylo přemístěno na jinou horninovou jednotku (autochton) alespoň na vzdálenost 5 km",
                    "correct": false
                  },
                  {
                    "text": "Shoda mezi geologickými strukturami a tvary reliéfu",
                    "correct": false
                  }
                ],
                "explanation": "Příklady působení endogenních a exogenních procesů"
              },
              {
                "question": "K tématu „Tektonické procesy\" — které tvrzení je správné? (20)",
                "options": [
                  {
                    "text": "Stav nesouladu mezi geologickými strukturami a tvary zemského povrchu ve vrásových pohořích",
                    "correct": false
                  },
                  {
                    "text": "Pohyby částí zemské kůry a svrchního pláště, při kterých dochází k deformaci hornin",
                    "correct": true
                  },
                  {
                    "text": "Horninové těleso (alochton), které bylo přemístěno na jinou horninovou jednotku (autochton) alespoň na vzdálenost 5 km",
                    "correct": false
                  },
                  {
                    "text": "Shoda mezi geologickými strukturami a tvary reliéfu",
                    "correct": false
                  }
                ],
                "explanation": "Pohyby částí zemské kůry a svrchního pláště, při kterých dochází k deformaci hornin"
              }
            ]
          }
        },
        {
          "id": "z0026p-3-4-zvetravaci-procesy-20",
          "title": "3.4 Zvětrávací procesy",
          "summary": "Studijní okruh: 3.4 Zvětrávací procesy",
          "minutes": 22,
          "sectionTitle": "Témata doc. Máčky",
          "available": true,
          "blocks": [
            {
              "type": "heading",
              "text": "Témata doc. Máčky"
            },
            {
              "type": "callout",
              "label": "Okruh",
              "text": "3.4 Zvětrávací procesy"
            },
            {
              "type": "callout",
              "label": "Jak číst tuto lekci",
              "text": "Text je výtah ze skripta a přednášek — použij ho jako mapu k učení. Detaily a obrázky najdeš v PDF/PPT v materiálech lekce."
            },
            {
              "type": "heading",
              "text": "Přednáška FG_DN_5 (Máčka/Nývlt)"
            },
            {
              "type": "list",
              "label": "Body přednášky",
              "items": [
                "Snižování zemského povrchu, zmenšování výškových rozdílů",
                "Soubor procesů na svazích vyvolaných působením gravitace",
                "Odnos zvětralin nebo pevných skalních hornin vodou, větrem a ledovci"
              ]
            },
            {
              "type": "paragraph",
              "text": "Soubor procesů vedoucích k fyzickému rozpadu a chemickému rozkladu hornin nacházejících se v blízkosti zemského povrchu"
            },
            {
              "type": "list",
              "label": "Body přednášky",
              "items": [
                "Mechanický rozpad horniny na menší částečky",
                "Mechanické a chemické působení organizmů",
                "Fyzikální zvětrávání je ovlivněno texturou a strukturou hornin",
                "Fyzikální zvětrávání urychluje chemické zvětrávání",
                "→ dochází ke zvětšování aktivního povrchu dostupného pro chemické reakce",
                "Procesy zahrnující objemové změny samotné horniny:"
              ]
            },
            {
              "type": "list",
              "label": "Doporučený postup",
              "items": [
                "Projdi výtah a vlastní poznámky z přednášky",
                "Otevři přiložené PDF/PPT v materiálech lekce",
                "Propoj s předchozími a navazujícími okruhy v osnově"
              ]
            }
          ],
          "resources": [
            {
              "kind": "presentation",
              "title": "FG_DN_5 — přednáška",
              "url": "/materials/geografie-kartografie/z0026p/FG_DN_5.pptx",
              "source": "GÚ MUNI / Máčka"
            },
            {
              "kind": "link",
              "title": "IS MUNI — Fyzická geografie",
              "url": "https://is.muni.cz/predmet/sci/Z0026p",
              "source": "IS MUNI"
            }
          ],
          "quiz": {
            "title": "Kvíz: Zvětrávací procesy",
            "questions": [
              {
                "question": "Zvětrávání zahrnuje…",
                "options": [
                  {
                    "text": "fyzický rozpad a chemický rozklad hornin",
                    "correct": true
                  },
                  {
                    "text": "pouze transport větrem",
                    "correct": false
                  },
                  {
                    "text": "jen transport ledovcem",
                    "correct": false
                  },
                  {
                    "text": "výhradně biologickou produkci",
                    "correct": false
                  }
                ],
                "explanation": "Probíhá v blízkosti povrchu za okolních podmínek."
              },
              {
                "question": "Denudace je…",
                "options": [
                  {
                    "text": "snižování povrchu a vyrovnávání reliéfu",
                    "correct": true
                  },
                  {
                    "text": "pouze ukládání sedimentů",
                    "correct": false
                  },
                  {
                    "text": "výhradně vulkanická činnost",
                    "correct": false
                  },
                  {
                    "text": "nárůst nadmořské výšky",
                    "correct": false
                  }
                ],
                "explanation": "Spolu s erozí a zvětráváním patří mezi exogenní procesy."
              },
              {
                "question": "Fyzikální zvětrávání urychluje chemické tím, že…",
                "options": [
                  {
                    "text": "zvyšuje povrchovou oblast reakcí",
                    "correct": true
                  },
                  {
                    "text": "snižuje teplotu horniny",
                    "correct": false
                  },
                  {
                    "text": "zastavuje reakce s vodou",
                    "correct": false
                  },
                  {
                    "text": "vytváří pevnější minerály",
                    "correct": false
                  }
                ],
                "explanation": "Rozpad na menší částice = více reaktivních ploch."
              },
              {
                "question": "Eroze je…",
                "options": [
                  {
                    "text": "odnos materiálu vodou, větrem nebo ledovci",
                    "correct": true
                  },
                  {
                    "text": "pouze chemický rozklad",
                    "correct": false
                  },
                  {
                    "text": "sedimentace v moři",
                    "correct": false
                  },
                  {
                    "text": "výhradně působení gravitace bez transportu",
                    "correct": false
                  }
                ],
                "explanation": "Gravitace spouští pohyb, ale eroze zahrnuje i transport."
              },
              {
                "question": "Které tvrzení patří k okruhu „Zvětrávací procesy\"?",
                "options": [
                  {
                    "text": "Soubor procesů na svazích vyvolaných působením gravitace",
                    "correct": false
                  },
                  {
                    "text": "Snižování zemského povrchu, zmenšování výškových rozdílů",
                    "correct": true
                  },
                  {
                    "text": "Odnos zvětralin nebo pevných skalních hornin vodou, větrem a ledovci",
                    "correct": false
                  },
                  {
                    "text": "Soubor procesů vedoucích k fyzickému rozpadu a chemickému rozkladu hornin nacházejících se v blízkosti zemského povrchu",
                    "correct": false
                  }
                ],
                "explanation": "Snižování zemského povrchu, zmenšování výškových rozdílů"
              },
              {
                "question": "Které tvrzení odpovídá obsahu lekce?",
                "options": [
                  {
                    "text": "Výklad k tomuto okruhu neobsahuje tuto informaci.",
                    "correct": false
                  },
                  {
                    "text": "Soubor procesů vedoucích k fyzickému rozpadu a chemickému rozkladu hornin nacházejících se v blízkosti zemského povrchu",
                    "correct": true
                  },
                  {
                    "text": "Toto tvrzení nelze z výkladu lekce ověřit.",
                    "correct": false
                  },
                  {
                    "text": "Snižování zemského povrchu, zmenšování výškových rozdílů",
                    "correct": false
                  }
                ],
                "explanation": "Správně: Soubor procesů vedoucích k fyzickému rozpadu a chemickému rozkladu hornin nacházejících se v blízkosti zemského povrchu"
              },
              {
                "question": "K tématu „Zvětrávací procesy\" — které tvrzení je správné? (7)",
                "options": [
                  {
                    "text": "Odnos zvětralin nebo pevných skalních hornin vodou, větrem a ledovci",
                    "correct": false
                  },
                  {
                    "text": "Fyzikální zvětrávání je ovlivněno texturou a strukturou hornin",
                    "correct": true
                  },
                  {
                    "text": "Snižování zemského povrchu, zmenšování výškových rozdílů",
                    "correct": false
                  },
                  {
                    "text": "Soubor procesů na svazích vyvolaných působením gravitace",
                    "correct": false
                  }
                ],
                "explanation": "Fyzikální zvětrávání je ovlivněno texturou a strukturou hornin"
              },
              {
                "question": "K tématu „Zvětrávací procesy\" — které tvrzení je správné? (8)",
                "options": [
                  {
                    "text": "Odnos zvětralin nebo pevných skalních hornin vodou, větrem a ledovci",
                    "correct": false
                  },
                  {
                    "text": "Fyzikální zvětrávání urychluje chemické zvětrávání",
                    "correct": true
                  },
                  {
                    "text": "Snižování zemského povrchu, zmenšování výškových rozdílů",
                    "correct": false
                  },
                  {
                    "text": "Soubor procesů na svazích vyvolaných působením gravitace",
                    "correct": false
                  }
                ],
                "explanation": "Fyzikální zvětrávání urychluje chemické zvětrávání"
              },
              {
                "question": "K tématu „Zvětrávací procesy\" — které tvrzení je správné? (9)",
                "options": [
                  {
                    "text": "Odnos zvětralin nebo pevných skalních hornin vodou, větrem a ledovci",
                    "correct": false
                  },
                  {
                    "text": "→ dochází ke zvětšování aktivního povrchu dostupného pro chemické reakce",
                    "correct": true
                  },
                  {
                    "text": "Snižování zemského povrchu, zmenšování výškových rozdílů",
                    "correct": false
                  },
                  {
                    "text": "Soubor procesů na svazích vyvolaných působením gravitace",
                    "correct": false
                  }
                ],
                "explanation": "→ dochází ke zvětšování aktivního povrchu dostupného pro chemické reakce"
              },
              {
                "question": "K tématu „Zvětrávací procesy\" — které tvrzení je správné? (10)",
                "options": [
                  {
                    "text": "Soubor procesů na svazích vyvolaných působením gravitace",
                    "correct": false
                  },
                  {
                    "text": "Procesy zahrnující objemové změny samotné horniny:",
                    "correct": true
                  },
                  {
                    "text": "Snižování zemského povrchu, zmenšování výškových rozdílů",
                    "correct": false
                  },
                  {
                    "text": "Odnos zvětralin nebo pevných skalních hornin vodou, větrem a ledovci",
                    "correct": false
                  }
                ],
                "explanation": "Procesy zahrnující objemové změny samotné horniny:"
              },
              {
                "question": "K tématu „Zvětrávací procesy\" — které tvrzení je správné? (11)",
                "options": [
                  {
                    "text": "Soubor procesů na svazích vyvolaných působením gravitace",
                    "correct": false
                  },
                  {
                    "text": "Projdi výtah a vlastní poznámky z přednášky",
                    "correct": true
                  },
                  {
                    "text": "Snižování zemského povrchu, zmenšování výškových rozdílů",
                    "correct": false
                  },
                  {
                    "text": "Odnos zvětralin nebo pevných skalních hornin vodou, větrem a ledovci",
                    "correct": false
                  }
                ],
                "explanation": "Projdi výtah a vlastní poznámky z přednášky"
              },
              {
                "question": "K tématu „Zvětrávací procesy\" — které tvrzení je správné? (12)",
                "options": [
                  {
                    "text": "Soubor procesů na svazích vyvolaných působením gravitace",
                    "correct": false
                  },
                  {
                    "text": "Otevři přiložené PDF/PPT v materiálech lekce",
                    "correct": true
                  },
                  {
                    "text": "Snižování zemského povrchu, zmenšování výškových rozdílů",
                    "correct": false
                  },
                  {
                    "text": "Odnos zvětralin nebo pevných skalních hornin vodou, větrem a ledovci",
                    "correct": false
                  }
                ],
                "explanation": "Otevři přiložené PDF/PPT v materiálech lekce"
              },
              {
                "question": "K tématu „Zvětrávací procesy\" — které tvrzení je správné? (13)",
                "options": [
                  {
                    "text": "Soubor procesů na svazích vyvolaných působením gravitace",
                    "correct": false
                  },
                  {
                    "text": "Propoj s předchozími a navazujícími okruhy v osnově",
                    "correct": true
                  },
                  {
                    "text": "Snižování zemského povrchu, zmenšování výškových rozdílů",
                    "correct": false
                  },
                  {
                    "text": "Odnos zvětralin nebo pevných skalních hornin vodou, větrem a ledovci",
                    "correct": false
                  }
                ],
                "explanation": "Propoj s předchozími a navazujícími okruhy v osnově"
              },
              {
                "question": "K tématu „Zvětrávací procesy\" — které tvrzení je správné? (14)",
                "options": [
                  {
                    "text": "Odnos zvětralin nebo pevných skalních hornin vodou, větrem a ledovci",
                    "correct": false
                  },
                  {
                    "text": "Snižování zemského povrchu, zmenšování výškových rozdílů",
                    "correct": true
                  },
                  {
                    "text": "Soubor procesů na svazích vyvolaných působením gravitace",
                    "correct": false
                  },
                  {
                    "text": "Soubor procesů vedoucích k fyzickému rozpadu a chemickému rozkladu hornin nacházejících se v blízkosti zemského povrchu",
                    "correct": false
                  }
                ],
                "explanation": "Snižování zemského povrchu, zmenšování výškových rozdílů"
              },
              {
                "question": "K tématu „Zvětrávací procesy\" — které tvrzení je správné? (15)",
                "options": [
                  {
                    "text": "Odnos zvětralin nebo pevných skalních hornin vodou, větrem a ledovci",
                    "correct": false
                  },
                  {
                    "text": "Soubor procesů na svazích vyvolaných působením gravitace",
                    "correct": true
                  },
                  {
                    "text": "Snižování zemského povrchu, zmenšování výškových rozdílů",
                    "correct": false
                  },
                  {
                    "text": "Soubor procesů vedoucích k fyzickému rozpadu a chemickému rozkladu hornin nacházejících se v blízkosti zemského povrchu",
                    "correct": false
                  }
                ],
                "explanation": "Soubor procesů na svazích vyvolaných působením gravitace"
              },
              {
                "question": "K tématu „Zvětrávací procesy\" — které tvrzení je správné? (16)",
                "options": [
                  {
                    "text": "Soubor procesů na svazích vyvolaných působením gravitace",
                    "correct": false
                  },
                  {
                    "text": "Odnos zvětralin nebo pevných skalních hornin vodou, větrem a ledovci",
                    "correct": true
                  },
                  {
                    "text": "Snižování zemského povrchu, zmenšování výškových rozdílů",
                    "correct": false
                  },
                  {
                    "text": "Soubor procesů vedoucích k fyzickému rozpadu a chemickému rozkladu hornin nacházejících se v blízkosti zemského povrchu",
                    "correct": false
                  }
                ],
                "explanation": "Odnos zvětralin nebo pevných skalních hornin vodou, větrem a ledovci"
              },
              {
                "question": "K tématu „Zvětrávací procesy\" — které tvrzení je správné? (17)",
                "options": [
                  {
                    "text": "Soubor procesů na svazích vyvolaných působením gravitace",
                    "correct": false
                  },
                  {
                    "text": "Soubor procesů vedoucích k fyzickému rozpadu a chemickému rozkladu hornin nacházejících se v blízkosti zemského povrchu",
                    "correct": true
                  },
                  {
                    "text": "Snižování zemského povrchu, zmenšování výškových rozdílů",
                    "correct": false
                  },
                  {
                    "text": "Odnos zvětralin nebo pevných skalních hornin vodou, větrem a ledovci",
                    "correct": false
                  }
                ],
                "explanation": "Soubor procesů vedoucích k fyzickému rozpadu a chemickému rozkladu hornin nacházejících se v blízkosti zemského povrchu"
              },
              {
                "question": "K tématu „Zvětrávací procesy\" — které tvrzení je správné? (18)",
                "options": [
                  {
                    "text": "Soubor procesů na svazích vyvolaných působením gravitace",
                    "correct": false
                  },
                  {
                    "text": "Mechanický rozpad horniny na menší částečky",
                    "correct": true
                  },
                  {
                    "text": "Snižování zemského povrchu, zmenšování výškových rozdílů",
                    "correct": false
                  },
                  {
                    "text": "Odnos zvětralin nebo pevných skalních hornin vodou, větrem a ledovci",
                    "correct": false
                  }
                ],
                "explanation": "Mechanický rozpad horniny na menší částečky"
              },
              {
                "question": "K tématu „Zvětrávací procesy\" — které tvrzení je správné? (19)",
                "options": [
                  {
                    "text": "Soubor procesů na svazích vyvolaných působením gravitace",
                    "correct": false
                  },
                  {
                    "text": "Mechanické a chemické působení organizmů",
                    "correct": true
                  },
                  {
                    "text": "Snižování zemského povrchu, zmenšování výškových rozdílů",
                    "correct": false
                  },
                  {
                    "text": "Odnos zvětralin nebo pevných skalních hornin vodou, větrem a ledovci",
                    "correct": false
                  }
                ],
                "explanation": "Mechanické a chemické působení organizmů"
              },
              {
                "question": "K tématu „Zvětrávací procesy\" — které tvrzení je správné? (20)",
                "options": [
                  {
                    "text": "Soubor procesů na svazích vyvolaných působením gravitace",
                    "correct": false
                  },
                  {
                    "text": "Fyzikální zvětrávání je ovlivněno texturou a strukturou hornin",
                    "correct": true
                  },
                  {
                    "text": "Snižování zemského povrchu, zmenšování výškových rozdílů",
                    "correct": false
                  },
                  {
                    "text": "Odnos zvětralin nebo pevných skalních hornin vodou, větrem a ledovci",
                    "correct": false
                  }
                ],
                "explanation": "Fyzikální zvětrávání je ovlivněno texturou a strukturou hornin"
              }
            ]
          }
        },
        {
          "id": "z0026p-3-5-gravitacni-svahove-procesy-21",
          "title": "3.5 Gravitační svahové procesy",
          "summary": "Studijní okruh: 3.5 Gravitační svahové procesy",
          "minutes": 12,
          "sectionTitle": "Témata doc. Máčky",
          "available": false
        },
        {
          "id": "z0026p-3-6-fluvialni-procesy-22",
          "title": "3.6 Fluviální procesy",
          "summary": "Studijní okruh: 3.6 Fluviální procesy",
          "minutes": 22,
          "sectionTitle": "Témata doc. Máčky",
          "available": true,
          "blocks": [
            {
              "type": "heading",
              "text": "Témata doc. Máčky"
            },
            {
              "type": "callout",
              "label": "Okruh",
              "text": "3.6 Fluviální procesy"
            },
            {
              "type": "callout",
              "label": "Jak číst tuto lekci",
              "text": "Text je výtah ze skripta a přednášek — použij ho jako mapu k učení. Detaily a obrázky najdeš v PDF/PPT v materiálech lekce."
            },
            {
              "type": "heading",
              "text": "Přednáška FG_DN_7 (Máčka/Nývlt)"
            },
            {
              "type": "list",
              "label": "Body přednášky",
              "items": [
                "Povrchový odtok vzniká v důsledku překročení schopnosti krajiny pojmout vodu ze srážek",
                "Intenzita srážky překročí infiltrační kapacitu půdy",
                "Intenzita srážky nepřekročí infiltrační kapacitu půdy",
                "rovníkové oblasti, monzunové oblasti, návětrné strany kontinentů",
                "suché vnitrozemské subtropické oblasti, polární oblasti",
                "Vrstva vody rovnoměrně rozložená po ploše povodí, která odteče za určité období"
              ]
            },
            {
              "type": "paragraph",
              "text": "Území, z něhož odtéká voda z atmosférických srážek nebo akumulovaná v ledovcích, ve stálé sněhové pokrývce, či permafrostu povrchovou i podzemní cestou do jediného závěrného profilu"
            },
            {
              "type": "list",
              "label": "Body přednášky",
              "items": [
                "Komponenty (proměnné) fluviálního systému",
                "Hlavní typy fluviálních sedimentů v povodí",
                "Řádovost (hydrologické pořadí) vodních toků"
              ]
            },
            {
              "type": "list",
              "label": "Doporučený postup",
              "items": [
                "Projdi výtah a vlastní poznámky z přednášky",
                "Otevři přiložené PDF/PPT v materiálech lekce",
                "Propoj s předchozími a navazujícími okruhy v osnově"
              ]
            }
          ],
          "resources": [
            {
              "kind": "presentation",
              "title": "FG_DN_7 — přednáška",
              "url": "/materials/geografie-kartografie/z0026p/FG_DN_7.pptx",
              "source": "GÚ MUNI / Máčka"
            },
            {
              "kind": "link",
              "title": "IS MUNI — Fyzická geografie",
              "url": "https://is.muni.cz/predmet/sci/Z0026p",
              "source": "IS MUNI"
            }
          ],
          "quiz": {
            "title": "Kvíz: Fluviální procesy",
            "questions": [
              {
                "question": "Povodí je území, které…",
                "options": [
                  {
                    "text": "odvádí vodu do jednoho závěrného profilu",
                    "correct": true
                  },
                  {
                    "text": "nemá žádný odtok",
                    "correct": false
                  },
                  {
                    "text": "odtéká do dvou oceánů",
                    "correct": false
                  },
                  {
                    "text": "je vždy menší než 1 km²",
                    "correct": false
                  }
                ],
                "explanation": "Zahrnuje síť toků, podzemní odtok i srážky na povrchu."
              },
              {
                "question": "Plošný odtok vzniká, když…",
                "options": [
                  {
                    "text": "krajina nepojme srážkovou vodu infiltrací",
                    "correct": true
                  },
                  {
                    "text": "je půda vždy suchá",
                    "correct": false
                  },
                  {
                    "text": "nejsou žádné srážky",
                    "correct": false
                  },
                  {
                    "text": "voda proudí jen v podzemí",
                    "correct": false
                  }
                ],
                "explanation": "Voda se rozlévá po povrchu a koncentruje se do rýh."
              },
              {
                "question": "Vysoké srážky jsou typické pro…",
                "options": [
                  {
                    "text": "rovníkové a monzunové oblasti",
                    "correct": true
                  },
                  {
                    "text": "vnitrozemské pouště",
                    "correct": false
                  },
                  {
                    "text": "střední Arktidu",
                    "correct": false
                  },
                  {
                    "text": "všechny polární oblasti bez výjimky",
                    "correct": false
                  }
                ],
                "explanation": "Nízké srážky: suché subtropy a některé polární oblasti."
              },
              {
                "question": "Fluviální systém zahrnuje jako komponenty např…",
                "options": [
                  {
                    "text": "odtok, sedimenty a síť toků",
                    "correct": true
                  },
                  {
                    "text": "pouze teplotu vzduchu",
                    "correct": false
                  },
                  {
                    "text": "jen biosféru",
                    "correct": false
                  },
                  {
                    "text": "výhradně větrnou erosi",
                    "correct": false
                  }
                ],
                "explanation": "Řádovost toků popisuje hierarchii v drenážní síti."
              },
              {
                "question": "Které tvrzení patří k okruhu „Fluviální procesy\"?",
                "options": [
                  {
                    "text": "Intenzita srážky překročí infiltrační kapacitu půdy",
                    "correct": false
                  },
                  {
                    "text": "Povrchový odtok vzniká v důsledku překročení schopnosti krajiny pojmout vodu ze srážek",
                    "correct": true
                  },
                  {
                    "text": "rovníkové oblasti, monzunové oblasti, návětrné strany kontinentů",
                    "correct": false
                  },
                  {
                    "text": "Intenzita srážky nepřekročí infiltrační kapacitu půdy",
                    "correct": false
                  }
                ],
                "explanation": "Povrchový odtok vzniká v důsledku překročení schopnosti krajiny pojmout vodu ze srážek"
              },
              {
                "question": "Které tvrzení odpovídá obsahu lekce?",
                "options": [
                  {
                    "text": "Výklad k tomuto okruhu neobsahuje tuto informaci.",
                    "correct": false
                  },
                  {
                    "text": "Území, z něhož odtéká voda z atmosférických srážek nebo akumulovaná v ledovcích, ve stálé sněhové pokrývce, či permafrostu povrchovou i podzemní cestou do jedi…",
                    "correct": true
                  },
                  {
                    "text": "Toto tvrzení nelze z výkladu lekce ověřit.",
                    "correct": false
                  },
                  {
                    "text": "Povrchový odtok vzniká v důsledku překročení schopnosti krajiny pojmout vodu ze srážek",
                    "correct": false
                  }
                ],
                "explanation": "Správně: Území, z něhož odtéká voda z atmosférických srážek nebo akumulovaná v ledovcích, ve stálé sněhové pokrývce, či permafrostu povrchovou i podzemní cestou do jedi…"
              },
              {
                "question": "K tématu „Fluviální procesy\" — které tvrzení je správné? (7)",
                "options": [
                  {
                    "text": "Intenzita srážky nepřekročí infiltrační kapacitu půdy",
                    "correct": false
                  },
                  {
                    "text": "Intenzita srážky překročí infiltrační kapacitu půdy",
                    "correct": false
                  },
                  {
                    "text": "Území, z něhož odtéká voda z atmosférických srážek nebo akumulovaná v ledovcích, ve stálé sněhové pokrývce, či permafrostu povrchovou i podzemní cestou do jedi…",
                    "correct": true
                  },
                  {
                    "text": "Povrchový odtok vzniká v důsledku překročení schopnosti krajiny pojmout vodu ze srážek",
                    "correct": false
                  }
                ],
                "explanation": "Území, z něhož odtéká voda z atmosférických srážek nebo akumulovaná v ledovcích, ve stálé sněhové pokrývce, či permafrostu povrchovou i podzemní cestou do jedi…"
              },
              {
                "question": "K tématu „Fluviální procesy\" — které tvrzení je správné? (8)",
                "options": [
                  {
                    "text": "Intenzita srážky nepřekročí infiltrační kapacitu půdy",
                    "correct": false
                  },
                  {
                    "text": "Intenzita srážky překročí infiltrační kapacitu půdy",
                    "correct": false
                  },
                  {
                    "text": "Komponenty (proměnné) fluviálního systému",
                    "correct": true
                  },
                  {
                    "text": "Povrchový odtok vzniká v důsledku překročení schopnosti krajiny pojmout vodu ze srážek",
                    "correct": false
                  }
                ],
                "explanation": "Komponenty (proměnné) fluviálního systému"
              },
              {
                "question": "K tématu „Fluviální procesy\" — které tvrzení je správné? (9)",
                "options": [
                  {
                    "text": "Intenzita srážky nepřekročí infiltrační kapacitu půdy",
                    "correct": false
                  },
                  {
                    "text": "Intenzita srážky překročí infiltrační kapacitu půdy",
                    "correct": false
                  },
                  {
                    "text": "Hlavní typy fluviálních sedimentů v povodí",
                    "correct": true
                  },
                  {
                    "text": "Povrchový odtok vzniká v důsledku překročení schopnosti krajiny pojmout vodu ze srážek",
                    "correct": false
                  }
                ],
                "explanation": "Hlavní typy fluviálních sedimentů v povodí"
              },
              {
                "question": "K tématu „Fluviální procesy\" — které tvrzení je správné? (10)",
                "options": [
                  {
                    "text": "Intenzita srážky nepřekročí infiltrační kapacitu půdy",
                    "correct": false
                  },
                  {
                    "text": "Řádovost (hydrologické pořadí) vodních toků",
                    "correct": true
                  },
                  {
                    "text": "Povrchový odtok vzniká v důsledku překročení schopnosti krajiny pojmout vodu ze srážek",
                    "correct": false
                  },
                  {
                    "text": "Intenzita srážky překročí infiltrační kapacitu půdy",
                    "correct": false
                  }
                ],
                "explanation": "Řádovost (hydrologické pořadí) vodních toků"
              },
              {
                "question": "K tématu „Fluviální procesy\" — které tvrzení je správné? (11)",
                "options": [
                  {
                    "text": "Intenzita srážky nepřekročí infiltrační kapacitu půdy",
                    "correct": false
                  },
                  {
                    "text": "Projdi výtah a vlastní poznámky z přednášky",
                    "correct": true
                  },
                  {
                    "text": "Povrchový odtok vzniká v důsledku překročení schopnosti krajiny pojmout vodu ze srážek",
                    "correct": false
                  },
                  {
                    "text": "Intenzita srážky překročí infiltrační kapacitu půdy",
                    "correct": false
                  }
                ],
                "explanation": "Projdi výtah a vlastní poznámky z přednášky"
              },
              {
                "question": "K tématu „Fluviální procesy\" — které tvrzení je správné? (12)",
                "options": [
                  {
                    "text": "Intenzita srážky nepřekročí infiltrační kapacitu půdy",
                    "correct": false
                  },
                  {
                    "text": "Otevři přiložené PDF/PPT v materiálech lekce",
                    "correct": true
                  },
                  {
                    "text": "Povrchový odtok vzniká v důsledku překročení schopnosti krajiny pojmout vodu ze srážek",
                    "correct": false
                  },
                  {
                    "text": "Intenzita srážky překročí infiltrační kapacitu půdy",
                    "correct": false
                  }
                ],
                "explanation": "Otevři přiložené PDF/PPT v materiálech lekce"
              },
              {
                "question": "K tématu „Fluviální procesy\" — které tvrzení je správné? (13)",
                "options": [
                  {
                    "text": "Intenzita srážky nepřekročí infiltrační kapacitu půdy",
                    "correct": false
                  },
                  {
                    "text": "Propoj s předchozími a navazujícími okruhy v osnově",
                    "correct": true
                  },
                  {
                    "text": "Povrchový odtok vzniká v důsledku překročení schopnosti krajiny pojmout vodu ze srážek",
                    "correct": false
                  },
                  {
                    "text": "Intenzita srážky překročí infiltrační kapacitu půdy",
                    "correct": false
                  }
                ],
                "explanation": "Propoj s předchozími a navazujícími okruhy v osnově"
              },
              {
                "question": "K tématu „Fluviální procesy\" — které tvrzení je správné? (14)",
                "options": [
                  {
                    "text": "rovníkové oblasti, monzunové oblasti, návětrné strany kontinentů",
                    "correct": false
                  },
                  {
                    "text": "Povrchový odtok vzniká v důsledku překročení schopnosti krajiny pojmout vodu ze srážek",
                    "correct": true
                  },
                  {
                    "text": "Intenzita srážky překročí infiltrační kapacitu půdy",
                    "correct": false
                  },
                  {
                    "text": "Intenzita srážky nepřekročí infiltrační kapacitu půdy",
                    "correct": false
                  }
                ],
                "explanation": "Povrchový odtok vzniká v důsledku překročení schopnosti krajiny pojmout vodu ze srážek"
              },
              {
                "question": "K tématu „Fluviální procesy\" — které tvrzení je správné? (15)",
                "options": [
                  {
                    "text": "rovníkové oblasti, monzunové oblasti, návětrné strany kontinentů",
                    "correct": false
                  },
                  {
                    "text": "Intenzita srážky překročí infiltrační kapacitu půdy",
                    "correct": true
                  },
                  {
                    "text": "Povrchový odtok vzniká v důsledku překročení schopnosti krajiny pojmout vodu ze srážek",
                    "correct": false
                  },
                  {
                    "text": "Intenzita srážky nepřekročí infiltrační kapacitu půdy",
                    "correct": false
                  }
                ],
                "explanation": "Intenzita srážky překročí infiltrační kapacitu půdy"
              },
              {
                "question": "K tématu „Fluviální procesy\" — které tvrzení je správné? (16)",
                "options": [
                  {
                    "text": "rovníkové oblasti, monzunové oblasti, návětrné strany kontinentů",
                    "correct": false
                  },
                  {
                    "text": "Intenzita srážky nepřekročí infiltrační kapacitu půdy",
                    "correct": true
                  },
                  {
                    "text": "Povrchový odtok vzniká v důsledku překročení schopnosti krajiny pojmout vodu ze srážek",
                    "correct": false
                  },
                  {
                    "text": "Intenzita srážky překročí infiltrační kapacitu půdy",
                    "correct": false
                  }
                ],
                "explanation": "Intenzita srážky nepřekročí infiltrační kapacitu půdy"
              },
              {
                "question": "K tématu „Fluviální procesy\" — které tvrzení je správné? (17)",
                "options": [
                  {
                    "text": "Intenzita srážky nepřekročí infiltrační kapacitu půdy",
                    "correct": false
                  },
                  {
                    "text": "rovníkové oblasti, monzunové oblasti, návětrné strany kontinentů",
                    "correct": true
                  },
                  {
                    "text": "Povrchový odtok vzniká v důsledku překročení schopnosti krajiny pojmout vodu ze srážek",
                    "correct": false
                  },
                  {
                    "text": "Intenzita srážky překročí infiltrační kapacitu půdy",
                    "correct": false
                  }
                ],
                "explanation": "rovníkové oblasti, monzunové oblasti, návětrné strany kontinentů"
              },
              {
                "question": "K tématu „Fluviální procesy\" — které tvrzení je správné? (18)",
                "options": [
                  {
                    "text": "Intenzita srážky nepřekročí infiltrační kapacitu půdy",
                    "correct": false
                  },
                  {
                    "text": "suché vnitrozemské subtropické oblasti, polární oblasti",
                    "correct": true
                  },
                  {
                    "text": "Povrchový odtok vzniká v důsledku překročení schopnosti krajiny pojmout vodu ze srážek",
                    "correct": false
                  },
                  {
                    "text": "Intenzita srážky překročí infiltrační kapacitu půdy",
                    "correct": false
                  }
                ],
                "explanation": "suché vnitrozemské subtropické oblasti, polární oblasti"
              },
              {
                "question": "K tématu „Fluviální procesy\" — které tvrzení je správné? (19)",
                "options": [
                  {
                    "text": "Intenzita srážky nepřekročí infiltrační kapacitu půdy",
                    "correct": false
                  },
                  {
                    "text": "Vrstva vody rovnoměrně rozložená po ploše povodí, která odteče za určité období",
                    "correct": true
                  },
                  {
                    "text": "Povrchový odtok vzniká v důsledku překročení schopnosti krajiny pojmout vodu ze srážek",
                    "correct": false
                  },
                  {
                    "text": "Intenzita srážky překročí infiltrační kapacitu půdy",
                    "correct": false
                  }
                ],
                "explanation": "Vrstva vody rovnoměrně rozložená po ploše povodí, která odteče za určité období"
              },
              {
                "question": "K tématu „Fluviální procesy\" — které tvrzení je správné? (20)",
                "options": [
                  {
                    "text": "Intenzita srážky nepřekročí infiltrační kapacitu půdy",
                    "correct": false
                  },
                  {
                    "text": "Území, z něhož odtéká voda z atmosférických srážek nebo akumulovaná v ledovcích, ve stálé sněhové pokrývce, či permafrostu povrchovou i podzemní cestou do jedi…",
                    "correct": true
                  },
                  {
                    "text": "Povrchový odtok vzniká v důsledku překročení schopnosti krajiny pojmout vodu ze srážek",
                    "correct": false
                  },
                  {
                    "text": "Intenzita srážky překročí infiltrační kapacitu půdy",
                    "correct": false
                  }
                ],
                "explanation": "Území, z něhož odtéká voda z atmosférických srážek nebo akumulovaná v ledovcích, ve stálé sněhové pokrývce, či permafrostu povrchovou i podzemní cestou do jedi…"
              }
            ]
          }
        },
        {
          "id": "z0026p-3-7-glacialni-procesy-23",
          "title": "3.7 Glaciální procesy",
          "summary": "Studijní okruh: 3.7 Glaciální procesy",
          "minutes": 22,
          "sectionTitle": "Témata doc. Máčky",
          "available": true,
          "blocks": [
            {
              "type": "heading",
              "text": "Témata doc. Máčky"
            },
            {
              "type": "callout",
              "label": "Okruh",
              "text": "3.7 Glaciální procesy"
            },
            {
              "type": "callout",
              "label": "Jak číst tuto lekci",
              "text": "Text je výtah ze skripta a přednášek — použij ho jako mapu k učení. Detaily a obrázky najdeš v PDF/PPT v materiálech lekce."
            },
            {
              "type": "heading",
              "text": "Přednáška FG_DN_6 (Máčka/Nývlt)"
            },
            {
              "type": "paragraph",
              "text": "Těleso pomalu tekoucího ledu, který vznikl během let na kontinentech tlakovou a teplotní přeměnou akumulovaného sněhu v oblastech, kde roční úhrny pevných srážek převyšují roční úbytek ledovce táním (ablací)"
            },
            {
              "type": "subheading",
              "text": "96 % tvoří ledovcové štíty Antarktidy a Grónska",
              "label": "1"
            },
            {
              "type": "list",
              "label": "Body přednášky",
              "items": [
                "65,6 m ekvivalentu nárůstu mořské hladiny",
                "Při transformaci sněhu v led dochází ke změně hustoty",
                "Ulehnutí sněhu (drobení vloček, sesedání)",
                "Zmenšování povrchové plochy vloček (zaoblování)",
                "V ledu zůstávají uzavřené bubliny vzduchu",
                "Vhodné podmínky pro ledovce dány vysokou nadmořskou výškou",
                "Vhodné podmínky pro ledovce dány vysokou zeměpisnou šířkou",
                "Čára oddělující akumulační a ablační zónu ledovce"
              ]
            },
            {
              "type": "list",
              "label": "Doporučený postup",
              "items": [
                "Projdi výtah a vlastní poznámky z přednášky",
                "Otevři přiložené PDF/PPT v materiálech lekce",
                "Propoj s předchozími a navazujícími okruhy v osnově"
              ]
            }
          ],
          "resources": [
            {
              "kind": "presentation",
              "title": "FG_DN_6 — přednáška",
              "url": "/materials/geografie-kartografie/z0026p/FG_DN_6.pptx",
              "source": "GÚ MUNI / Máčka"
            },
            {
              "kind": "link",
              "title": "IS MUNI — Fyzická geografie",
              "url": "https://is.muni.cz/predmet/sci/Z0026p",
              "source": "IS MUNI"
            }
          ],
          "quiz": {
            "title": "Kvíz: Glaciální procesy",
            "questions": [
              {
                "question": "Ledovec vzniká tam, kde…",
                "options": [
                  {
                    "text": "akumulace sněhu převyšuje ablaci (tání)",
                    "correct": true
                  },
                  {
                    "text": "nikdy nesněží",
                    "correct": false
                  },
                  {
                    "text": "je pouze větrná eroze",
                    "correct": false
                  },
                  {
                    "text": "teplota je vždy nad 0 °C",
                    "correct": false
                  }
                ],
                "explanation": "Čára sněžnice odděluje akumulační a ablační zónu."
              },
              {
                "question": "Kolik % ledovcového ledu tvoří Antarktida a Grónsko?",
                "options": [
                  {
                    "text": "Přibližně 96 %",
                    "correct": true
                  },
                  {
                    "text": "50 %",
                    "correct": false
                  },
                  {
                    "text": "70 %",
                    "correct": false
                  },
                  {
                    "text": "100 %",
                    "correct": false
                  }
                ],
                "explanation": "Zbývající ledovce jsou horské a polární mimo tyto štíty."
              },
              {
                "question": "Roztátí všech současných ledovců by zvýšilo hladinu moří asi o…",
                "options": [
                  {
                    "text": "65,6 m",
                    "correct": true
                  },
                  {
                    "text": "6,5 m",
                    "correct": false
                  },
                  {
                    "text": "656 m",
                    "correct": false
                  },
                  {
                    "text": "0,6 m",
                    "correct": false
                  }
                ],
                "explanation": "Většina zásob sladké vody je vázána v ledovcích."
              },
              {
                "question": "Glaciální procesy patří mezi…",
                "options": [
                  {
                    "text": "exogenní geomorfologické činitele",
                    "correct": true
                  },
                  {
                    "text": "endogenní tektonické síly",
                    "correct": false
                  },
                  {
                    "text": "pouze biogenní činitele",
                    "correct": false
                  },
                  {
                    "text": "výhradně antropogenní faktory",
                    "correct": false
                  }
                ],
                "explanation": "Led a sníh modelují reliéf v chladných oblastech."
              },
              {
                "question": "Které tvrzení odpovídá obsahu lekce?",
                "options": [
                  {
                    "text": "Výklad k tomuto okruhu neobsahuje tuto informaci.",
                    "correct": false
                  },
                  {
                    "text": "Těleso pomalu tekoucího ledu, který vznikl během let na kontinentech tlakovou a teplotní přeměnou akumulovaného sněhu v oblastech, kde roční úhrny pevných sráž…",
                    "correct": true
                  },
                  {
                    "text": "Toto tvrzení nelze z výkladu lekce ověřit.",
                    "correct": false
                  },
                  {
                    "text": "Těleso pomalu tekoucího ledu, který vznikl během let na kontinentech tlakovou a teplotní přeměnou akumulovaného sněhu v oblastech, kde roční úhrny pevných sráž…",
                    "correct": false
                  }
                ],
                "explanation": "Správně: Těleso pomalu tekoucího ledu, který vznikl během let na kontinentech tlakovou a teplotní přeměnou akumulovaného sněhu v oblastech, kde roční úhrny pevných sráž…"
              },
              {
                "question": "Které tvrzení patří k okruhu „Glaciální procesy\"?",
                "options": [
                  {
                    "text": "Těleso pomalu tekoucího ledu, který vznikl během let na kontinentech tlakovou a teplotní přeměnou akumulovaného sněhu v oblastech, kde roční úhrny pevných srážek převyšují roční ú…",
                    "correct": false
                  },
                  {
                    "text": "65,6 m ekvivalentu nárůstu mořské hladiny",
                    "correct": true
                  },
                  {
                    "text": "Při transformaci sněhu v led dochází ke změně hustoty",
                    "correct": false
                  },
                  {
                    "text": "96 % tvoří ledovcové štíty Antarktidy a Grónska",
                    "correct": false
                  }
                ],
                "explanation": "65,6 m ekvivalentu nárůstu mořské hladiny"
              },
              {
                "question": "K tématu „Glaciální procesy\" — které tvrzení je správné? (7)",
                "options": [
                  {
                    "text": "65,6 m ekvivalentu nárůstu mořské hladiny",
                    "correct": false
                  },
                  {
                    "text": "96 % tvoří ledovcové štíty Antarktidy a Grónska",
                    "correct": false
                  },
                  {
                    "text": "V ledu zůstávají uzavřené bubliny vzduchu",
                    "correct": true
                  },
                  {
                    "text": "Těleso pomalu tekoucího ledu, který vznikl během let na kontinentech tlakovou a teplotní přeměnou akumulovaného sněhu v oblastech, kde roční úhrny pevných sráž…",
                    "correct": false
                  }
                ],
                "explanation": "V ledu zůstávají uzavřené bubliny vzduchu"
              },
              {
                "question": "K tématu „Glaciální procesy\" — které tvrzení je správné? (8)",
                "options": [
                  {
                    "text": "65,6 m ekvivalentu nárůstu mořské hladiny",
                    "correct": false
                  },
                  {
                    "text": "96 % tvoří ledovcové štíty Antarktidy a Grónska",
                    "correct": false
                  },
                  {
                    "text": "Vhodné podmínky pro ledovce dány vysokou nadmořskou výškou",
                    "correct": true
                  },
                  {
                    "text": "Těleso pomalu tekoucího ledu, který vznikl během let na kontinentech tlakovou a teplotní přeměnou akumulovaného sněhu v oblastech, kde roční úhrny pevných sráž…",
                    "correct": false
                  }
                ],
                "explanation": "Vhodné podmínky pro ledovce dány vysokou nadmořskou výškou"
              },
              {
                "question": "K tématu „Glaciální procesy\" — které tvrzení je správné? (9)",
                "options": [
                  {
                    "text": "65,6 m ekvivalentu nárůstu mořské hladiny",
                    "correct": false
                  },
                  {
                    "text": "96 % tvoří ledovcové štíty Antarktidy a Grónska",
                    "correct": false
                  },
                  {
                    "text": "Vhodné podmínky pro ledovce dány vysokou zeměpisnou šířkou",
                    "correct": true
                  },
                  {
                    "text": "Těleso pomalu tekoucího ledu, který vznikl během let na kontinentech tlakovou a teplotní přeměnou akumulovaného sněhu v oblastech, kde roční úhrny pevných sráž…",
                    "correct": false
                  }
                ],
                "explanation": "Vhodné podmínky pro ledovce dány vysokou zeměpisnou šířkou"
              },
              {
                "question": "K tématu „Glaciální procesy\" — které tvrzení je správné? (10)",
                "options": [
                  {
                    "text": "65,6 m ekvivalentu nárůstu mořské hladiny",
                    "correct": false
                  },
                  {
                    "text": "Čára oddělující akumulační a ablační zónu ledovce",
                    "correct": true
                  },
                  {
                    "text": "Těleso pomalu tekoucího ledu, který vznikl během let na kontinentech tlakovou a teplotní přeměnou akumulovaného sněhu v oblastech, kde roční úhrny pevných sráž…",
                    "correct": false
                  },
                  {
                    "text": "96 % tvoří ledovcové štíty Antarktidy a Grónska",
                    "correct": false
                  }
                ],
                "explanation": "Čára oddělující akumulační a ablační zónu ledovce"
              },
              {
                "question": "K tématu „Glaciální procesy\" — které tvrzení je správné? (11)",
                "options": [
                  {
                    "text": "65,6 m ekvivalentu nárůstu mořské hladiny",
                    "correct": false
                  },
                  {
                    "text": "Projdi výtah a vlastní poznámky z přednášky",
                    "correct": true
                  },
                  {
                    "text": "Těleso pomalu tekoucího ledu, který vznikl během let na kontinentech tlakovou a teplotní přeměnou akumulovaného sněhu v oblastech, kde roční úhrny pevných sráž…",
                    "correct": false
                  },
                  {
                    "text": "96 % tvoří ledovcové štíty Antarktidy a Grónska",
                    "correct": false
                  }
                ],
                "explanation": "Projdi výtah a vlastní poznámky z přednášky"
              },
              {
                "question": "K tématu „Glaciální procesy\" — které tvrzení je správné? (12)",
                "options": [
                  {
                    "text": "65,6 m ekvivalentu nárůstu mořské hladiny",
                    "correct": false
                  },
                  {
                    "text": "Otevři přiložené PDF/PPT v materiálech lekce",
                    "correct": true
                  },
                  {
                    "text": "Těleso pomalu tekoucího ledu, který vznikl během let na kontinentech tlakovou a teplotní přeměnou akumulovaného sněhu v oblastech, kde roční úhrny pevných sráž…",
                    "correct": false
                  },
                  {
                    "text": "96 % tvoří ledovcové štíty Antarktidy a Grónska",
                    "correct": false
                  }
                ],
                "explanation": "Otevři přiložené PDF/PPT v materiálech lekce"
              },
              {
                "question": "K tématu „Glaciální procesy\" — které tvrzení je správné? (13)",
                "options": [
                  {
                    "text": "65,6 m ekvivalentu nárůstu mořské hladiny",
                    "correct": false
                  },
                  {
                    "text": "Propoj s předchozími a navazujícími okruhy v osnově",
                    "correct": true
                  },
                  {
                    "text": "Těleso pomalu tekoucího ledu, který vznikl během let na kontinentech tlakovou a teplotní přeměnou akumulovaného sněhu v oblastech, kde roční úhrny pevných sráž…",
                    "correct": false
                  },
                  {
                    "text": "96 % tvoří ledovcové štíty Antarktidy a Grónska",
                    "correct": false
                  }
                ],
                "explanation": "Propoj s předchozími a navazujícími okruhy v osnově"
              },
              {
                "question": "K tématu „Glaciální procesy\" — které tvrzení je správné? (14)",
                "options": [
                  {
                    "text": "65,6 m ekvivalentu nárůstu mořské hladiny",
                    "correct": false
                  },
                  {
                    "text": "Těleso pomalu tekoucího ledu, který vznikl během let na kontinentech tlakovou a teplotní přeměnou akumulovaného sněhu v oblastech, kde roční úhrny pevných sráž…",
                    "correct": true
                  },
                  {
                    "text": "Těleso pomalu tekoucího ledu, který vznikl během let na kontinentech tlakovou a teplotní přeměnou akumulovaného sněhu v oblastech, kde roční úhrny pevných sráž…",
                    "correct": false
                  },
                  {
                    "text": "96 % tvoří ledovcové štíty Antarktidy a Grónska",
                    "correct": false
                  }
                ],
                "explanation": "Těleso pomalu tekoucího ledu, který vznikl během let na kontinentech tlakovou a teplotní přeměnou akumulovaného sněhu v oblastech, kde roční úhrny pevných sráž…"
              },
              {
                "question": "K tématu „Glaciální procesy\" — které tvrzení je správné? (15)",
                "options": [
                  {
                    "text": "Při transformaci sněhu v led dochází ke změně hustoty",
                    "correct": false
                  },
                  {
                    "text": "96 % tvoří ledovcové štíty Antarktidy a Grónska",
                    "correct": true
                  },
                  {
                    "text": "Těleso pomalu tekoucího ledu, který vznikl během let na kontinentech tlakovou a teplotní přeměnou akumulovaného sněhu v oblastech, kde roční úhrny pevných sráž…",
                    "correct": false
                  },
                  {
                    "text": "65,6 m ekvivalentu nárůstu mořské hladiny",
                    "correct": false
                  }
                ],
                "explanation": "96 % tvoří ledovcové štíty Antarktidy a Grónska"
              },
              {
                "question": "K tématu „Glaciální procesy\" — které tvrzení je správné? (16)",
                "options": [
                  {
                    "text": "Při transformaci sněhu v led dochází ke změně hustoty",
                    "correct": false
                  },
                  {
                    "text": "65,6 m ekvivalentu nárůstu mořské hladiny",
                    "correct": true
                  },
                  {
                    "text": "Těleso pomalu tekoucího ledu, který vznikl během let na kontinentech tlakovou a teplotní přeměnou akumulovaného sněhu v oblastech, kde roční úhrny pevných sráž…",
                    "correct": false
                  },
                  {
                    "text": "96 % tvoří ledovcové štíty Antarktidy a Grónska",
                    "correct": false
                  }
                ],
                "explanation": "65,6 m ekvivalentu nárůstu mořské hladiny"
              },
              {
                "question": "K tématu „Glaciální procesy\" — které tvrzení je správné? (17)",
                "options": [
                  {
                    "text": "65,6 m ekvivalentu nárůstu mořské hladiny",
                    "correct": false
                  },
                  {
                    "text": "Při transformaci sněhu v led dochází ke změně hustoty",
                    "correct": true
                  },
                  {
                    "text": "Těleso pomalu tekoucího ledu, který vznikl během let na kontinentech tlakovou a teplotní přeměnou akumulovaného sněhu v oblastech, kde roční úhrny pevných sráž…",
                    "correct": false
                  },
                  {
                    "text": "96 % tvoří ledovcové štíty Antarktidy a Grónska",
                    "correct": false
                  }
                ],
                "explanation": "Při transformaci sněhu v led dochází ke změně hustoty"
              },
              {
                "question": "K tématu „Glaciální procesy\" — které tvrzení je správné? (18)",
                "options": [
                  {
                    "text": "65,6 m ekvivalentu nárůstu mořské hladiny",
                    "correct": false
                  },
                  {
                    "text": "Ulehnutí sněhu (drobení vloček, sesedání)",
                    "correct": true
                  },
                  {
                    "text": "Těleso pomalu tekoucího ledu, který vznikl během let na kontinentech tlakovou a teplotní přeměnou akumulovaného sněhu v oblastech, kde roční úhrny pevných sráž…",
                    "correct": false
                  },
                  {
                    "text": "96 % tvoří ledovcové štíty Antarktidy a Grónska",
                    "correct": false
                  }
                ],
                "explanation": "Ulehnutí sněhu (drobení vloček, sesedání)"
              },
              {
                "question": "K tématu „Glaciální procesy\" — které tvrzení je správné? (19)",
                "options": [
                  {
                    "text": "65,6 m ekvivalentu nárůstu mořské hladiny",
                    "correct": false
                  },
                  {
                    "text": "Zmenšování povrchové plochy vloček (zaoblování)",
                    "correct": true
                  },
                  {
                    "text": "Těleso pomalu tekoucího ledu, který vznikl během let na kontinentech tlakovou a teplotní přeměnou akumulovaného sněhu v oblastech, kde roční úhrny pevných sráž…",
                    "correct": false
                  },
                  {
                    "text": "96 % tvoří ledovcové štíty Antarktidy a Grónska",
                    "correct": false
                  }
                ],
                "explanation": "Zmenšování povrchové plochy vloček (zaoblování)"
              },
              {
                "question": "K tématu „Glaciální procesy\" — které tvrzení je správné? (20)",
                "options": [
                  {
                    "text": "65,6 m ekvivalentu nárůstu mořské hladiny",
                    "correct": false
                  },
                  {
                    "text": "V ledu zůstávají uzavřené bubliny vzduchu",
                    "correct": true
                  },
                  {
                    "text": "Těleso pomalu tekoucího ledu, který vznikl během let na kontinentech tlakovou a teplotní přeměnou akumulovaného sněhu v oblastech, kde roční úhrny pevných sráž…",
                    "correct": false
                  },
                  {
                    "text": "96 % tvoří ledovcové štíty Antarktidy a Grónska",
                    "correct": false
                  }
                ],
                "explanation": "V ledu zůstávají uzavřené bubliny vzduchu"
              }
            ]
          }
        },
        {
          "id": "z0026p-3-8-eolicke-procesy-24",
          "title": "3.8 Eolické procesy",
          "summary": "Studijní okruh: 3.8 Eolické procesy",
          "minutes": 22,
          "sectionTitle": "Témata doc. Máčky",
          "available": true,
          "blocks": [
            {
              "type": "heading",
              "text": "Témata doc. Máčky"
            },
            {
              "type": "callout",
              "label": "Okruh",
              "text": "3.8 Eolické procesy"
            },
            {
              "type": "callout",
              "label": "Jak číst tuto lekci",
              "text": "Text je výtah ze skripta a přednášek — použij ho jako mapu k učení. Detaily a obrázky najdeš v PDF/PPT v materiálech lekce."
            },
            {
              "type": "heading",
              "text": "Přednáška FG_DN_8 (Máčka/Nývlt)"
            },
            {
              "type": "list",
              "label": "Body přednášky",
              "items": [
                "Tvary reliéfu, které vznikly působením větru",
                "Podmínky za nichž se může uplatnit působení větru",
                "Dostupný nezpevněný materiál vhodné frakce (prach, písek)",
                "Teplé i chladné suché (aridní a semiaridní) oblasti",
                "Větrná eroze a transport probíhá podobně jako ve fluviálním prostředí, ovšem…",
                "Menší hustota vzduchu ve srovnání s vodou snižuje transportní kapacitu",
                "Obvykle jsou transportována zrna do velikosti písku"
              ]
            },
            {
              "type": "subheading",
              "text": "3 druhy eolického transportu – rolování/posouvání,",
              "label": "1"
            },
            {
              "type": "list",
              "items": [
                "Prostorově neomezené ukládání materiálu, ale často kolem překážek",
                "Probíhá vytřídění a ukládání do vrstev"
              ]
            },
            {
              "type": "list",
              "label": "Doporučený postup",
              "items": [
                "Projdi výtah a vlastní poznámky z přednášky",
                "Otevři přiložené PDF/PPT v materiálech lekce",
                "Propoj s předchozími a navazujícími okruhy v osnově"
              ]
            }
          ],
          "resources": [
            {
              "kind": "presentation",
              "title": "FG_DN_8 — přednáška",
              "url": "/materials/geografie-kartografie/z0026p/FG_DN_8.pptx",
              "source": "GÚ MUNI / Máčka"
            },
            {
              "kind": "link",
              "title": "IS MUNI — Fyzická geografie",
              "url": "https://is.muni.cz/predmet/sci/Z0026p",
              "source": "IS MUNI"
            }
          ],
          "quiz": {
            "title": "Kvíz: Eolické procesy",
            "questions": [
              {
                "question": "Eolické tvary reliéfu vznikají primárně v…",
                "options": [
                  {
                    "text": "aridních a semiaridních oblastech s volným sedimentem",
                    "correct": true
                  },
                  {
                    "text": "tropickém deštném lese",
                    "correct": false
                  },
                  {
                    "text": "pod ledovcem",
                    "correct": false
                  },
                  {
                    "text": "výhradně na dně oceánu",
                    "correct": false
                  }
                ],
                "explanation": "Potřebný je dostupný prach nebo písek a účinný vítr."
              },
              {
                "question": "Který typ eolického transportu zahrnuje „poskakování“ zrn větrem?",
                "options": [
                  {
                    "text": "Saltace",
                    "correct": true
                  },
                  {
                    "text": "Suspenze",
                    "correct": false
                  },
                  {
                    "text": "Rolování bez odskoku",
                    "correct": false
                  },
                  {
                    "text": "Pouze fluviální transport",
                    "correct": false
                  }
                ],
                "explanation": "Saltace = zrna se zvedají a dopadají; suspenze = jemný prach ve vzduchu."
              },
              {
                "question": "Větrem se obvykle efektivně transportují zrna do velikosti…",
                "options": [
                  {
                    "text": "písku",
                    "correct": true
                  },
                  {
                    "text": "balvanů",
                    "correct": false
                  },
                  {
                    "text": "pouze jílu ve vodě",
                    "correct": false
                  },
                  {
                    "text": "celých kamenů",
                    "correct": false
                  }
                ],
                "explanation": "Nižší hustota vzduchu omezuje transportní kapacitu větru."
              },
              {
                "question": "Eolická akumulace často probíhá…",
                "options": [
                  {
                    "text": "kolem překážek s vytříděním materiálu",
                    "correct": true
                  },
                  {
                    "text": "pouze v řečištích",
                    "correct": false
                  },
                  {
                    "text": "výhradně pod vodou",
                    "correct": false
                  },
                  {
                    "text": "bez pohybu částic",
                    "correct": false
                  }
                ],
                "explanation": "Vítr ukládá písek do dun a návějů."
              },
              {
                "question": "Které tvrzení patří k okruhu „Eolické procesy\"?",
                "options": [
                  {
                    "text": "Podmínky za nichž se může uplatnit působení větru",
                    "correct": false
                  },
                  {
                    "text": "Teplé i chladné suché (aridní a semiaridní) oblasti",
                    "correct": false
                  },
                  {
                    "text": "Dostupný nezpevněný materiál vhodné frakce (prach, písek)",
                    "correct": false
                  },
                  {
                    "text": "Tvary reliéfu, které vznikly působením větru",
                    "correct": true
                  }
                ],
                "explanation": "Tvary reliéfu, které vznikly působením větru"
              },
              {
                "question": "Které tvrzení odpovídá obsahu lekce?",
                "options": [
                  {
                    "text": "Výklad k tomuto okruhu neobsahuje tuto informaci.",
                    "correct": false
                  },
                  {
                    "text": "3 druhy eolického transportu – rolování/posouvání,",
                    "correct": true
                  },
                  {
                    "text": "Toto tvrzení nelze z výkladu lekce ověřit.",
                    "correct": false
                  },
                  {
                    "text": "Tvary reliéfu, které vznikly působením větru",
                    "correct": false
                  }
                ],
                "explanation": "Správně: 3 druhy eolického transportu – rolování/posouvání,"
              },
              {
                "question": "K tématu „Eolické procesy\" — které tvrzení je správné? (7)",
                "options": [
                  {
                    "text": "Tvary reliéfu, které vznikly působením větru",
                    "correct": false
                  },
                  {
                    "text": "Obvykle jsou transportována zrna do velikosti písku",
                    "correct": true
                  },
                  {
                    "text": "Podmínky za nichž se může uplatnit působení větru",
                    "correct": false
                  },
                  {
                    "text": "Dostupný nezpevněný materiál vhodné frakce (prach, písek)",
                    "correct": false
                  }
                ],
                "explanation": "Obvykle jsou transportována zrna do velikosti písku"
              },
              {
                "question": "K tématu „Eolické procesy\" — které tvrzení je správné? (8)",
                "options": [
                  {
                    "text": "Tvary reliéfu, které vznikly působením větru",
                    "correct": false
                  },
                  {
                    "text": "3 druhy eolického transportu – rolování/posouvání,",
                    "correct": true
                  },
                  {
                    "text": "Podmínky za nichž se může uplatnit působení větru",
                    "correct": false
                  },
                  {
                    "text": "Dostupný nezpevněný materiál vhodné frakce (prach, písek)",
                    "correct": false
                  }
                ],
                "explanation": "3 druhy eolického transportu – rolování/posouvání,"
              },
              {
                "question": "K tématu „Eolické procesy\" — které tvrzení je správné? (9)",
                "options": [
                  {
                    "text": "Tvary reliéfu, které vznikly působením větru",
                    "correct": false
                  },
                  {
                    "text": "Prostorově neomezené ukládání materiálu, ale často kolem překážek",
                    "correct": true
                  },
                  {
                    "text": "Podmínky za nichž se může uplatnit působení větru",
                    "correct": false
                  },
                  {
                    "text": "Dostupný nezpevněný materiál vhodné frakce (prach, písek)",
                    "correct": false
                  }
                ],
                "explanation": "Prostorově neomezené ukládání materiálu, ale často kolem překážek"
              },
              {
                "question": "K tématu „Eolické procesy\" — které tvrzení je správné? (10)",
                "options": [
                  {
                    "text": "Tvary reliéfu, které vznikly působením větru",
                    "correct": false
                  },
                  {
                    "text": "Podmínky za nichž se může uplatnit působení větru",
                    "correct": false
                  },
                  {
                    "text": "Dostupný nezpevněný materiál vhodné frakce (prach, písek)",
                    "correct": false
                  },
                  {
                    "text": "Probíhá vytřídění a ukládání do vrstev",
                    "correct": true
                  }
                ],
                "explanation": "Probíhá vytřídění a ukládání do vrstev"
              },
              {
                "question": "K tématu „Eolické procesy\" — které tvrzení je správné? (11)",
                "options": [
                  {
                    "text": "Tvary reliéfu, které vznikly působením větru",
                    "correct": false
                  },
                  {
                    "text": "Podmínky za nichž se může uplatnit působení větru",
                    "correct": false
                  },
                  {
                    "text": "Dostupný nezpevněný materiál vhodné frakce (prach, písek)",
                    "correct": false
                  },
                  {
                    "text": "Projdi výtah a vlastní poznámky z přednášky",
                    "correct": true
                  }
                ],
                "explanation": "Projdi výtah a vlastní poznámky z přednášky"
              },
              {
                "question": "K tématu „Eolické procesy\" — které tvrzení je správné? (12)",
                "options": [
                  {
                    "text": "Tvary reliéfu, které vznikly působením větru",
                    "correct": false
                  },
                  {
                    "text": "Podmínky za nichž se může uplatnit působení větru",
                    "correct": false
                  },
                  {
                    "text": "Dostupný nezpevněný materiál vhodné frakce (prach, písek)",
                    "correct": false
                  },
                  {
                    "text": "Otevři přiložené PDF/PPT v materiálech lekce",
                    "correct": true
                  }
                ],
                "explanation": "Otevři přiložené PDF/PPT v materiálech lekce"
              },
              {
                "question": "K tématu „Eolické procesy\" — které tvrzení je správné? (13)",
                "options": [
                  {
                    "text": "Tvary reliéfu, které vznikly působením větru",
                    "correct": false
                  },
                  {
                    "text": "Podmínky za nichž se může uplatnit působení větru",
                    "correct": false
                  },
                  {
                    "text": "Dostupný nezpevněný materiál vhodné frakce (prach, písek)",
                    "correct": false
                  },
                  {
                    "text": "Propoj s předchozími a navazujícími okruhy v osnově",
                    "correct": true
                  }
                ],
                "explanation": "Propoj s předchozími a navazujícími okruhy v osnově"
              },
              {
                "question": "K tématu „Eolické procesy\" — které tvrzení je správné? (14)",
                "options": [
                  {
                    "text": "Podmínky za nichž se může uplatnit působení větru",
                    "correct": false
                  },
                  {
                    "text": "Dostupný nezpevněný materiál vhodné frakce (prach, písek)",
                    "correct": false
                  },
                  {
                    "text": "Teplé i chladné suché (aridní a semiaridní) oblasti",
                    "correct": false
                  },
                  {
                    "text": "Tvary reliéfu, které vznikly působením větru",
                    "correct": true
                  }
                ],
                "explanation": "Tvary reliéfu, které vznikly působením větru"
              },
              {
                "question": "K tématu „Eolické procesy\" — které tvrzení je správné? (15)",
                "options": [
                  {
                    "text": "Tvary reliéfu, které vznikly působením větru",
                    "correct": false
                  },
                  {
                    "text": "Dostupný nezpevněný materiál vhodné frakce (prach, písek)",
                    "correct": false
                  },
                  {
                    "text": "Teplé i chladné suché (aridní a semiaridní) oblasti",
                    "correct": false
                  },
                  {
                    "text": "Podmínky za nichž se může uplatnit působení větru",
                    "correct": true
                  }
                ],
                "explanation": "Podmínky za nichž se může uplatnit působení větru"
              },
              {
                "question": "K tématu „Eolické procesy\" — které tvrzení je správné? (16)",
                "options": [
                  {
                    "text": "Tvary reliéfu, které vznikly působením větru",
                    "correct": false
                  },
                  {
                    "text": "Podmínky za nichž se může uplatnit působení větru",
                    "correct": false
                  },
                  {
                    "text": "Teplé i chladné suché (aridní a semiaridní) oblasti",
                    "correct": false
                  },
                  {
                    "text": "Dostupný nezpevněný materiál vhodné frakce (prach, písek)",
                    "correct": true
                  }
                ],
                "explanation": "Dostupný nezpevněný materiál vhodné frakce (prach, písek)"
              },
              {
                "question": "K tématu „Eolické procesy\" — které tvrzení je správné? (17)",
                "options": [
                  {
                    "text": "Tvary reliéfu, které vznikly působením větru",
                    "correct": false
                  },
                  {
                    "text": "Podmínky za nichž se může uplatnit působení větru",
                    "correct": false
                  },
                  {
                    "text": "Dostupný nezpevněný materiál vhodné frakce (prach, písek)",
                    "correct": false
                  },
                  {
                    "text": "Teplé i chladné suché (aridní a semiaridní) oblasti",
                    "correct": true
                  }
                ],
                "explanation": "Teplé i chladné suché (aridní a semiaridní) oblasti"
              },
              {
                "question": "K tématu „Eolické procesy\" — které tvrzení je správné? (18)",
                "options": [
                  {
                    "text": "Tvary reliéfu, které vznikly působením větru",
                    "correct": false
                  },
                  {
                    "text": "Podmínky za nichž se může uplatnit působení větru",
                    "correct": false
                  },
                  {
                    "text": "Dostupný nezpevněný materiál vhodné frakce (prach, písek)",
                    "correct": false
                  },
                  {
                    "text": "Větrná eroze a transport probíhá podobně jako ve fluviálním prostředí, ovšem…",
                    "correct": true
                  }
                ],
                "explanation": "Větrná eroze a transport probíhá podobně jako ve fluviálním prostředí, ovšem…"
              },
              {
                "question": "K tématu „Eolické procesy\" — které tvrzení je správné? (19)",
                "options": [
                  {
                    "text": "Tvary reliéfu, které vznikly působením větru",
                    "correct": false
                  },
                  {
                    "text": "Podmínky za nichž se může uplatnit působení větru",
                    "correct": false
                  },
                  {
                    "text": "Dostupný nezpevněný materiál vhodné frakce (prach, písek)",
                    "correct": false
                  },
                  {
                    "text": "Menší hustota vzduchu ve srovnání s vodou snižuje transportní kapacitu",
                    "correct": true
                  }
                ],
                "explanation": "Menší hustota vzduchu ve srovnání s vodou snižuje transportní kapacitu"
              },
              {
                "question": "K tématu „Eolické procesy\" — které tvrzení je správné? (20)",
                "options": [
                  {
                    "text": "Tvary reliéfu, které vznikly působením větru",
                    "correct": false
                  },
                  {
                    "text": "Podmínky za nichž se může uplatnit působení větru",
                    "correct": false
                  },
                  {
                    "text": "Dostupný nezpevněný materiál vhodné frakce (prach, písek)",
                    "correct": false
                  },
                  {
                    "text": "Obvykle jsou transportována zrna do velikosti písku",
                    "correct": true
                  }
                ],
                "explanation": "Obvykle jsou transportována zrna do velikosti písku"
              }
            ]
          }
        },
        {
          "id": "z0026p-3-9-marinni-procesy-25",
          "title": "3.9 Marinní procesy",
          "summary": "Studijní okruh: 3.9 Marinní procesy",
          "minutes": 12,
          "sectionTitle": "Témata doc. Máčky",
          "available": false
        },
        {
          "id": "z0026p-3-10-pedogeneze-26",
          "title": "3.10 Pedogeneze",
          "summary": "Studijní okruh: 3.10 Pedogeneze",
          "minutes": 12,
          "sectionTitle": "Témata doc. Máčky",
          "available": true,
          "blocks": [
            {
              "type": "heading",
              "text": "Témata doc. Máčky"
            },
            {
              "type": "callout",
              "label": "Okruh",
              "text": "3.10 Pedogeneze"
            },
            {
              "type": "callout",
              "label": "Jak číst tuto lekci",
              "text": "Text je výtah ze skripta a přednášek — použij ho jako mapu k učení. Detaily a obrázky najdeš v PDF/PPT v materiálech lekce."
            },
            {
              "type": "heading",
              "text": "Otázky a okruhy — FG_8"
            },
            {
              "type": "list",
              "items": [
                "Literatura Strahler, A. – Strahler, A. (1999): Introducing Physical Geography. Wiley, New York, 575 s. Kapitola: Global Soils, s. 236"
              ]
            },
            {
              "type": "subheading",
              "text": "263. Tomášek, M. (2000): Půdy České republiky. ČGÚ, Praha, 67 s.",
              "label": "1"
            },
            {
              "type": "list",
              "label": "Klíčové body",
              "items": [
                "Úvod • půda = je nejsvrchnější vrstva zemského povrchu, která poskytuje rostlinám živiny, vodu a prostředí pro růst kořenů půda je vodou, vzduchem a organismy prostoupená svrchní vrstva zemské kůry, která se vyvíjí pod vlivem vnějších faktorů a času a je produktem přeměn mineralogických a organických substancí, morfologicky organizovaná a poskytující přírodní prostředí rostlinám, živočichům a člověku • pedologie = je věda, která si klade za cíl, objasnit genezi (vznik) půd, charakterizovat jejich vlastnosti, stanovit klasifikační systém, zpracovat rozšíření půdních jednotek na zemském povrchu a určit možnosti hospodářského využití půd • předmětem pedologie je půda, resp.",
                "pedosféra • pedosféra = soubor všech půd Země, který se vyvinul na styku litosféry, atmosféry, hydrosféry a biosféry (půda je hraniční fenomén).",
                "půda vzniká působením půdotvorných faktorů, které podmiňují půdotvorné procesy • půdotvorné faktory: • matečná hornina • klima • organizmy • reliéf • čas",
                "matečná hornina: skalní horniny + jejich zvětraliny (regolit) sypké sedimenty (např.",
                "říční nebo mořské písky) starší půdy pasivní půdotvorný faktor",
                "na daném místě se v průběhu času nemění a bez působení ostatních (aktivních) faktorů se z ní nemůže vyvinout půda klima: přímé působení: a.",
                "teplota nepřímé působení: prostřednictvím vegetace Srážky – intenzita promývání půdy → obsah živin Teplota – rychlost rozkladu rostlinného opadu a odumřelých kořenů organizmy: intenzita biologické aktivity závisí na: a.",
                "úživnost matečné horniny b.",
                "klima důležitý faktor",
                "bez činnosti organizmů by půdy nemohli vůbec vzniknout reliéf: pro vývoj půd má největší význam: a.",
                "terénní deprese reliéf ovlivňuje provlhčení půdy a její teplotu čas: různé fyzikální, chemické a biologické procesy vyžadují ke svému uplatnění určité časové rozpětí",
                "Složení a vlastnosti půdy • půda je disperzní systém pevné + kapalné + plynné fáze procentuální zastoupení jednotlivých fází: pevná 50%, kapalná 20 – 30%, plynná 25 – 30% pevná fáze obsahuje dvě složky: a.",
                "organický podíl – minerální podíl silně převažuje nad organickým (45% - 5%) organický podíl obsahuje dvě složky: a.",
                "živá organická hmota (edafon), b.",
                "odumřelá organická hmota (humus) • humus: odumřelá, částečně rozložená organická hmota rostlinného i živočišného původu; převážně rostlinný původ; tmavá barva • půdní roztok • půdní vzduch – vyšší obsah CO2 a nižší obsah O2 než v atmosféře zdroje CO2: dýcháním kořenů a rozkladné procesy, úbytek O2: dýchání kořenů a chemické a biochemické reakce • optimální poměr vody a vzduchu v půdě 1:1 = dostatek vody, kořeny rostlin se nedusí • zvětrávání → zvětráváním vzniká minerální podíl půdy 1.",
                "fyzikální (mechanické) 2."
              ]
            },
            {
              "type": "subheading",
              "text": "2.1 Barva a zrnitost půdy",
              "label": "2"
            },
            {
              "type": "paragraph",
              "text": "barva vzniká: a."
            },
            {
              "type": "list",
              "items": [
                "zděděním od matečné horniny, b.",
                "jako výsledek půdotvorných procesů Organické látky: šedá, hnědočerná nebo černá barva Sloučeniny Fe a Mn: oxidované – červená, červenohnědá nebo hnědá; redukované – zelená, modrá, žlutá světlé barevné tóny vznikají vyplavením barevným minerálů a humusu vodou • zrnitost (textura) zrnitostních frakce jíl, prach a písek = jemnozem; hrubší částice = skelet Strahler&Strahler obr 9.2 s."
              ]
            },
            {
              "type": "callout",
              "label": "hranice zrnitostních frakcí",
              "text": "jíl <0,002 mm prach 0,002 – 0,02 mm písek 0,02 – 2,0 mm • půdní druh – určuje se podle zastoupení zrnitostních frakcí Označení půdy Obsah jílu (%) Skupinové Jednotlivé"
            },
            {
              "type": "list",
              "label": "Body přednášky",
              "items": [
                "Hlinitopísčitá 10 – 20 Střední Písčitohlinitá 20 – 30",
                "Hlinitá 30 – 45 Těžká Jílovitohlinitá 45 – 60"
              ]
            },
            {
              "type": "list",
              "label": "Klíčové body",
              "items": [
                "Úvod • půda = je nejsvrchnější vrstva zemského povrchu, která poskytuje rostlinám živiny, vodu a prostředí pro růst kořenů půda je vodou, vzduchem a organismy prostoupená svrchní vrstva zemské kůry, která se vyvíjí pod vlivem vnějších faktorů a času a je produktem přeměn mineralogických a organických substancí, morfologicky organizovaná a poskytující přírodní prostředí rostlinám, živočichům a člověku • pedologie = je věda, která si klade za cíl, objasnit genezi (vznik) půd, charakterizovat jejich vlastnosti, stanovit klasifikační systém, zpracovat rozšíření půdních jednotek na zemském povrchu a určit možnosti hospodářského využití půd • předmětem pedologie je půda, resp.",
                "pedosféra • pedosféra = soubor všech půd Země, který se vyvinul na styku litosféry, atmosféry, hydrosféry a biosféry (půda je hraniční fenomén).",
                "půda vzniká působením půdotvorných faktorů, které podmiňují půdotvorné procesy • půdotvorné faktory: • matečná hornina • klima • organizmy • reliéf • čas",
                "matečná hornina: skalní horniny + jejich zvětraliny (regolit) sypké sedimenty (např.",
                "říční nebo mořské písky) starší půdy pasivní půdotvorný faktor",
                "na daném místě se v průběhu času nemění a bez působení ostatních (aktivních) faktorů se z ní nemůže vyvinout půda klima: přímé působení: a.",
                "teplota nepřímé působení: prostřednictvím vegetace Srážky – intenzita promývání půdy → obsah živin Teplota – rychlost rozkladu rostlinného opadu a odumřelých kořenů organizmy: intenzita biologické aktivity závisí na: a.",
                "úživnost matečné horniny b.",
                "klima důležitý faktor",
                "bez činnosti organizmů by půdy nemohli vůbec vzniknout reliéf: pro vývoj půd má největší význam: a.",
                "terénní deprese reliéf ovlivňuje provlhčení půdy a její teplotu čas: různé fyzikální, chemické a biologické procesy vyžadují ke svému uplatnění určité časové rozpětí",
                "Složení a vlastnosti půdy • půda je disperzní systém pevné + kapalné + plynné fáze procentuální zastoupení jednotlivých fází: pevná 50%, kapalná 20 – 30%, plynná 25 – 30% pevná fáze obsahuje dvě složky: a.",
                "organický podíl – minerální podíl silně převažuje nad organickým (45% - 5%) organický podíl obsahuje dvě složky: a.",
                "živá organická hmota (edafon), b.",
                "odumřelá organická hmota (humus) • humus: odumřelá, částečně rozložená organická hmota rostlinného i živočišného původu; převážně rostlinný původ; tmavá barva • půdní roztok • půdní vzduch – vyšší obsah CO2 a nižší obsah O2 než v atmosféře zdroje CO2: dýcháním kořenů a rozkladné procesy, úbytek O2: dýchání kořenů a chemické a biochemické reakce • optimální poměr vody a vzduchu v půdě 1:1 = dostatek vody, kořeny rostlin se nedusí • zvětrávání → zvětráváním vzniká minerální podíl půdy 1.",
                "fyzikální (mechanické) 2."
              ]
            },
            {
              "type": "subheading",
              "text": "2.1 Barva a zrnitost půdy",
              "label": "2"
            },
            {
              "type": "paragraph",
              "text": "barva vzniká: a."
            },
            {
              "type": "list",
              "items": [
                "zděděním od matečné horniny, b.",
                "jako výsledek půdotvorných procesů Organické látky: šedá, hnědočerná nebo černá barva Sloučeniny Fe a Mn: oxidované – červená, červenohnědá nebo hnědá; redukované – zelená, modrá, žlutá světlé barevné tóny vznikají vyplavením barevným minerálů a humusu vodou • zrnitost (textura) zrnitostních frakce jíl, prach a písek = jemnozem; hrubší částice = skelet Strahler&Strahler obr 9.2 s."
              ]
            },
            {
              "type": "list",
              "label": "Doporučený postup",
              "items": [
                "Projdi výtah a vlastní poznámky z přednášky",
                "Otevři přiložené PDF/PPT v materiálech lekce",
                "Propoj s předchozími a navazujícími okruhy v osnově"
              ]
            }
          ],
          "resources": [
            {
              "kind": "document",
              "title": "FG_8 — okruhy Brázdil",
              "url": "/materials/geografie-kartografie/z0026p/FG_8.doc",
              "source": "Brázdil"
            },
            {
              "kind": "link",
              "title": "IS MUNI — Fyzická geografie",
              "url": "https://is.muni.cz/predmet/sci/Z0026p",
              "source": "IS MUNI"
            }
          ],
          "quiz": {
            "title": "Kvíz: Pedogeneze",
            "questions": [
              {
                "question": "Půdotvorné faktory (klimaxová rovnice) jsou…",
                "options": [
                  {
                    "text": "matečná hornina, klima, organismy, reliéf, čas",
                    "correct": true
                  },
                  {
                    "text": "pouze teplota a srážky",
                    "correct": false
                  },
                  {
                    "text": "jen nadmořská výška",
                    "correct": false
                  },
                  {
                    "text": "výhradně lidská činnost",
                    "correct": false
                  }
                ],
                "explanation": "Jen s aktivními faktory vzniká z horniny půda."
              },
              {
                "question": "Humus je…",
                "options": [
                  {
                    "text": "částečně rozložená organická hmota v půdě",
                    "correct": true
                  },
                  {
                    "text": "čistý jíl bez organiky",
                    "correct": false
                  },
                  {
                    "text": "pouze živý kořen",
                    "correct": false
                  },
                  {
                    "text": "výhradně minerální část půdy",
                    "correct": false
                  }
                ],
                "explanation": "Vzniká rozkladem rostlinných a živočišných zbytků."
              },
              {
                "question": "Jílová frakce má zrnitost…",
                "options": [
                  {
                    "text": "menší než 0,002 mm",
                    "correct": true
                  },
                  {
                    "text": "0,02–2 mm",
                    "correct": false
                  },
                  {
                    "text": "2–20 mm",
                    "correct": false
                  },
                  {
                    "text": "větší než 2 mm",
                    "correct": false
                  }
                ],
                "explanation": "Prach: 0,002–0,02 mm; písek: 0,02–2 mm."
              },
              {
                "question": "Bez činnosti organismů by půdy…",
                "options": [
                  {
                    "text": "nemohly vzniknout",
                    "correct": true
                  },
                  {
                    "text": "byly identické s matečnou horninou",
                    "correct": false
                  },
                  {
                    "text": "existovaly jen v pouštích",
                    "correct": false
                  },
                  {
                    "text": "neměly žádnou vodu",
                    "correct": false
                  }
                ],
                "explanation": "Biogenní činitelé mění horninu a tvoří profil půdy."
              },
              {
                "question": "Které tvrzení patří k okruhu „Pedogeneze\"?",
                "options": [
                  {
                    "text": "pedosféra • pedosféra = soubor všech půd Země, který se vyvinul na styku litosféry, atmosféry, hydrosféry a biosféry (půda je hraniční fenomén).",
                    "correct": false
                  },
                  {
                    "text": "Literatura Strahler, A. – Strahler, A. (1999): Introducing Physical Geography. Wiley, New York, 575 s. Kapitola: Global Soils, s. 236",
                    "correct": true
                  },
                  {
                    "text": "263. Tomášek, M. (2000): Půdy České republiky. ČGÚ, Praha, 67 s.",
                    "correct": false
                  },
                  {
                    "text": "půda vzniká působením půdotvorných faktorů, které podmiňují půdotvorné procesy • půdotvorné faktory: • matečná hornina • klima • organizmy • reliéf • čas",
                    "correct": false
                  }
                ],
                "explanation": "Literatura Strahler, A. – Strahler, A. (1999): Introducing Physical Geography. Wiley, New York, 575 s. Kapitola: Global Soils, s. 236"
              },
              {
                "question": "Které tvrzení odpovídá obsahu lekce?",
                "options": [
                  {
                    "text": "Výklad k tomuto okruhu neobsahuje tuto informaci.",
                    "correct": false
                  },
                  {
                    "text": "263. Tomášek, M. (2000): Půdy České republiky. ČGÚ, Praha, 67 s.",
                    "correct": true
                  },
                  {
                    "text": "Toto tvrzení nelze z výkladu lekce ověřit.",
                    "correct": false
                  },
                  {
                    "text": "Literatura Strahler, A. – Strahler, A. (1999): Introducing Physical Geography. Wiley, New York, 575 s. Kapitola: Global Soils, s. 236",
                    "correct": false
                  }
                ],
                "explanation": "Správně: 263. Tomášek, M. (2000): Půdy České republiky. ČGÚ, Praha, 67 s."
              },
              {
                "question": "Co je správné tvrzení k pojmu „hranice zrnitostních frakcí\"?",
                "options": [
                  {
                    "text": "pedosféra • pedosféra = soubor všech půd Země, který se vyvinul na styku litosféry, atmosféry, hydrosféry a biosféry (půda je hraniční fenomén).",
                    "correct": false
                  },
                  {
                    "text": "263. Tomášek, M. (2000): Půdy České republiky. ČGÚ, Praha, 67 s.",
                    "correct": false
                  },
                  {
                    "text": "jíl <0,002 mm prach 0,002 – 0,02 mm písek 0,02 – 2,0 mm • půdní druh – určuje se podle zastoupení zrnitostních frakcí Označení půdy Obsah jílu (%) Skupinové Jednotlivé",
                    "correct": true
                  },
                  {
                    "text": "Literatura Strahler, A. – Strahler, A. (1999): Introducing Physical Geography. Wiley, New York, 575 s. Kapitola: Global Soils, s. 236",
                    "correct": false
                  }
                ],
                "explanation": "Výklad: jíl <0,002 mm prach 0,002 – 0,02 mm písek 0,02 – 2,0 mm • půdní druh – určuje se podle zastoupení zrnitostních frakcí Označení půdy Obsah jílu (%) Skupinové Jednotlivé"
              },
              {
                "question": "K tématu „Pedogeneze\" — které tvrzení je správné? (8)",
                "options": [
                  {
                    "text": "Literatura Strahler, A. – Strahler, A. (1999): Introducing Physical Geography. Wiley, New York, 575 s. Kapitola: Global Soils, s. 236",
                    "correct": false
                  },
                  {
                    "text": "pedosféra • pedosféra = soubor všech půd Země, který se vyvinul na styku litosféry, atmosféry, hydrosféry a biosféry (půda je hraniční fenomén).",
                    "correct": false
                  },
                  {
                    "text": "teplota nepřímé působení: prostřednictvím vegetace Srážky – intenzita promývání půdy → obsah živin Teplota – rychlost rozkladu rostlinného opadu a odumřelých k…",
                    "correct": true
                  },
                  {
                    "text": "263. Tomášek, M. (2000): Půdy České republiky. ČGÚ, Praha, 67 s.",
                    "correct": false
                  }
                ],
                "explanation": "teplota nepřímé působení: prostřednictvím vegetace Srážky – intenzita promývání půdy → obsah živin Teplota – rychlost rozkladu rostlinného opadu a odumřelých k…"
              },
              {
                "question": "K tématu „Pedogeneze\" — které tvrzení je správné? (9)",
                "options": [
                  {
                    "text": "Literatura Strahler, A. – Strahler, A. (1999): Introducing Physical Geography. Wiley, New York, 575 s. Kapitola: Global Soils, s. 236",
                    "correct": false
                  },
                  {
                    "text": "pedosféra • pedosféra = soubor všech půd Země, který se vyvinul na styku litosféry, atmosféry, hydrosféry a biosféry (půda je hraniční fenomén).",
                    "correct": false
                  },
                  {
                    "text": "bez činnosti organizmů by půdy nemohli vůbec vzniknout reliéf: pro vývoj půd má největší význam: a.",
                    "correct": true
                  },
                  {
                    "text": "263. Tomášek, M. (2000): Půdy České republiky. ČGÚ, Praha, 67 s.",
                    "correct": false
                  }
                ],
                "explanation": "bez činnosti organizmů by půdy nemohli vůbec vzniknout reliéf: pro vývoj půd má největší význam: a."
              },
              {
                "question": "K tématu „Pedogeneze\" — které tvrzení je správné? (10)",
                "options": [
                  {
                    "text": "Literatura Strahler, A. – Strahler, A. (1999): Introducing Physical Geography. Wiley, New York, 575 s. Kapitola: Global Soils, s. 236",
                    "correct": false
                  },
                  {
                    "text": "263. Tomášek, M. (2000): Půdy České republiky. ČGÚ, Praha, 67 s.",
                    "correct": false
                  },
                  {
                    "text": "terénní deprese reliéf ovlivňuje provlhčení půdy a její teplotu čas: různé fyzikální, chemické a biologické procesy vyžadují ke svému uplatnění určité časové r…",
                    "correct": true
                  },
                  {
                    "text": "pedosféra • pedosféra = soubor všech půd Země, který se vyvinul na styku litosféry, atmosféry, hydrosféry a biosféry (půda je hraniční fenomén).",
                    "correct": false
                  }
                ],
                "explanation": "terénní deprese reliéf ovlivňuje provlhčení půdy a její teplotu čas: různé fyzikální, chemické a biologické procesy vyžadují ke svému uplatnění určité časové r…"
              },
              {
                "question": "K tématu „Pedogeneze\" — které tvrzení je správné? (11)",
                "options": [
                  {
                    "text": "Literatura Strahler, A. – Strahler, A. (1999): Introducing Physical Geography. Wiley, New York, 575 s. Kapitola: Global Soils, s. 236",
                    "correct": false
                  },
                  {
                    "text": "263. Tomášek, M. (2000): Půdy České republiky. ČGÚ, Praha, 67 s.",
                    "correct": false
                  },
                  {
                    "text": "Složení a vlastnosti půdy • půda je disperzní systém pevné + kapalné + plynné fáze procentuální zastoupení jednotlivých fází: pevná 50%, kapalná 20 – 30%, plyn…",
                    "correct": true
                  },
                  {
                    "text": "pedosféra • pedosféra = soubor všech půd Země, který se vyvinul na styku litosféry, atmosféry, hydrosféry a biosféry (půda je hraniční fenomén).",
                    "correct": false
                  }
                ],
                "explanation": "Složení a vlastnosti půdy • půda je disperzní systém pevné + kapalné + plynné fáze procentuální zastoupení jednotlivých fází: pevná 50%, kapalná 20 – 30%, plyn…"
              },
              {
                "question": "K tématu „Pedogeneze\" — které tvrzení je správné? (12)",
                "options": [
                  {
                    "text": "Literatura Strahler, A. – Strahler, A. (1999): Introducing Physical Geography. Wiley, New York, 575 s. Kapitola: Global Soils, s. 236",
                    "correct": false
                  },
                  {
                    "text": "263. Tomášek, M. (2000): Půdy České republiky. ČGÚ, Praha, 67 s.",
                    "correct": false
                  },
                  {
                    "text": "organický podíl – minerální podíl silně převažuje nad organickým (45% - 5%) organický podíl obsahuje dvě složky: a.",
                    "correct": true
                  },
                  {
                    "text": "pedosféra • pedosféra = soubor všech půd Země, který se vyvinul na styku litosféry, atmosféry, hydrosféry a biosféry (půda je hraniční fenomén).",
                    "correct": false
                  }
                ],
                "explanation": "organický podíl – minerální podíl silně převažuje nad organickým (45% - 5%) organický podíl obsahuje dvě složky: a."
              },
              {
                "question": "K tématu „Pedogeneze\" — které tvrzení je správné? (13)",
                "options": [
                  {
                    "text": "Literatura Strahler, A. – Strahler, A. (1999): Introducing Physical Geography. Wiley, New York, 575 s. Kapitola: Global Soils, s. 236",
                    "correct": false
                  },
                  {
                    "text": "263. Tomášek, M. (2000): Půdy České republiky. ČGÚ, Praha, 67 s.",
                    "correct": false
                  },
                  {
                    "text": "živá organická hmota (edafon), b.",
                    "correct": true
                  },
                  {
                    "text": "pedosféra • pedosféra = soubor všech půd Země, který se vyvinul na styku litosféry, atmosféry, hydrosféry a biosféry (půda je hraniční fenomén).",
                    "correct": false
                  }
                ],
                "explanation": "živá organická hmota (edafon), b."
              },
              {
                "question": "K tématu „Pedogeneze\" — které tvrzení je správné? (14)",
                "options": [
                  {
                    "text": "Literatura Strahler, A. – Strahler, A. (1999): Introducing Physical Geography. Wiley, New York, 575 s. Kapitola: Global Soils, s. 236",
                    "correct": false
                  },
                  {
                    "text": "263. Tomášek, M. (2000): Půdy České republiky. ČGÚ, Praha, 67 s.",
                    "correct": false
                  },
                  {
                    "text": "2.1 Barva a zrnitost půdy",
                    "correct": true
                  },
                  {
                    "text": "pedosféra • pedosféra = soubor všech půd Země, který se vyvinul na styku litosféry, atmosféry, hydrosféry a biosféry (půda je hraniční fenomén).",
                    "correct": false
                  }
                ],
                "explanation": "2.1 Barva a zrnitost půdy"
              },
              {
                "question": "K tématu „Pedogeneze\" — které tvrzení je správné? (15)",
                "options": [
                  {
                    "text": "Literatura Strahler, A. – Strahler, A. (1999): Introducing Physical Geography. Wiley, New York, 575 s. Kapitola: Global Soils, s. 236",
                    "correct": false
                  },
                  {
                    "text": "263. Tomášek, M. (2000): Půdy České republiky. ČGÚ, Praha, 67 s.",
                    "correct": false
                  },
                  {
                    "text": "zděděním od matečné horniny, b.",
                    "correct": true
                  },
                  {
                    "text": "pedosféra • pedosféra = soubor všech půd Země, který se vyvinul na styku litosféry, atmosféry, hydrosféry a biosféry (půda je hraniční fenomén).",
                    "correct": false
                  }
                ],
                "explanation": "zděděním od matečné horniny, b."
              },
              {
                "question": "K tématu „Pedogeneze\" — které tvrzení je správné? (16)",
                "options": [
                  {
                    "text": "Literatura Strahler, A. – Strahler, A. (1999): Introducing Physical Geography. Wiley, New York, 575 s. Kapitola: Global Soils, s. 236",
                    "correct": false
                  },
                  {
                    "text": "263. Tomášek, M. (2000): Půdy České republiky. ČGÚ, Praha, 67 s.",
                    "correct": false
                  },
                  {
                    "text": "jíl <0,002 mm prach 0,002 – 0,02 mm písek 0,02 – 2,0 mm • půdní druh – určuje se podle zastoupení zrnitostních frakcí Označení půdy Obsah jílu (%) Skupinové Je…",
                    "correct": true
                  },
                  {
                    "text": "pedosféra • pedosféra = soubor všech půd Země, který se vyvinul na styku litosféry, atmosféry, hydrosféry a biosféry (půda je hraniční fenomén).",
                    "correct": false
                  }
                ],
                "explanation": "jíl <0,002 mm prach 0,002 – 0,02 mm písek 0,02 – 2,0 mm • půdní druh – určuje se podle zastoupení zrnitostních frakcí Označení půdy Obsah jílu (%) Skupinové Je…"
              },
              {
                "question": "K tématu „Pedogeneze\" — které tvrzení je správné? (17)",
                "options": [
                  {
                    "text": "Literatura Strahler, A. – Strahler, A. (1999): Introducing Physical Geography. Wiley, New York, 575 s. Kapitola: Global Soils, s. 236",
                    "correct": false
                  },
                  {
                    "text": "263. Tomášek, M. (2000): Půdy České republiky. ČGÚ, Praha, 67 s.",
                    "correct": false
                  },
                  {
                    "text": "Hlinitopísčitá 10 – 20 Střední Písčitohlinitá 20 – 30",
                    "correct": true
                  },
                  {
                    "text": "pedosféra • pedosféra = soubor všech půd Země, který se vyvinul na styku litosféry, atmosféry, hydrosféry a biosféry (půda je hraniční fenomén).",
                    "correct": false
                  }
                ],
                "explanation": "Hlinitopísčitá 10 – 20 Střední Písčitohlinitá 20 – 30"
              },
              {
                "question": "K tématu „Pedogeneze\" — které tvrzení je správné? (18)",
                "options": [
                  {
                    "text": "Literatura Strahler, A. – Strahler, A. (1999): Introducing Physical Geography. Wiley, New York, 575 s. Kapitola: Global Soils, s. 236",
                    "correct": false
                  },
                  {
                    "text": "263. Tomášek, M. (2000): Půdy České republiky. ČGÚ, Praha, 67 s.",
                    "correct": false
                  },
                  {
                    "text": "Hlinitá 30 – 45 Těžká Jílovitohlinitá 45 – 60",
                    "correct": true
                  },
                  {
                    "text": "pedosféra • pedosféra = soubor všech půd Země, který se vyvinul na styku litosféry, atmosféry, hydrosféry a biosféry (půda je hraniční fenomén).",
                    "correct": false
                  }
                ],
                "explanation": "Hlinitá 30 – 45 Těžká Jílovitohlinitá 45 – 60"
              },
              {
                "question": "K tématu „Pedogeneze\" — které tvrzení je správné? (19)",
                "options": [
                  {
                    "text": "Literatura Strahler, A. – Strahler, A. (1999): Introducing Physical Geography. Wiley, New York, 575 s. Kapitola: Global Soils, s. 236",
                    "correct": false
                  },
                  {
                    "text": "263. Tomášek, M. (2000): Půdy České republiky. ČGÚ, Praha, 67 s.",
                    "correct": false
                  },
                  {
                    "text": "pedosféra • pedosféra = soubor všech půd Země, který se vyvinul na styku litosféry, atmosféry, hydrosféry a biosféry (půda je hraniční fenomén).",
                    "correct": true
                  },
                  {
                    "text": "půda vzniká působením půdotvorných faktorů, které podmiňují půdotvorné procesy • půdotvorné faktory: • matečná hornina • klima • organizmy • reliéf • čas",
                    "correct": false
                  }
                ],
                "explanation": "pedosféra • pedosféra = soubor všech půd Země, který se vyvinul na styku litosféry, atmosféry, hydrosféry a biosféry (půda je hraniční fenomén)."
              },
              {
                "question": "K tématu „Pedogeneze\" — které tvrzení je správné? (20)",
                "options": [
                  {
                    "text": "Literatura Strahler, A. – Strahler, A. (1999): Introducing Physical Geography. Wiley, New York, 575 s. Kapitola: Global Soils, s. 236",
                    "correct": false
                  },
                  {
                    "text": "263. Tomášek, M. (2000): Půdy České republiky. ČGÚ, Praha, 67 s.",
                    "correct": false
                  },
                  {
                    "text": "půda vzniká působením půdotvorných faktorů, které podmiňují půdotvorné procesy • půdotvorné faktory: • matečná hornina • klima • organizmy • reliéf • čas",
                    "correct": true
                  },
                  {
                    "text": "pedosféra • pedosféra = soubor všech půd Země, který se vyvinul na styku litosféry, atmosféry, hydrosféry a biosféry (půda je hraniční fenomén).",
                    "correct": false
                  }
                ],
                "explanation": "půda vzniká působením půdotvorných faktorů, které podmiňují půdotvorné procesy • půdotvorné faktory: • matečná hornina • klima • organizmy • reliéf • čas"
              }
            ]
          }
        },
        {
          "id": "z0026p-3-11-ekosystemove-procesy-27",
          "title": "3.11 Ekosystémové procesy",
          "summary": "Studijní okruh: 3.11 Ekosystémové procesy",
          "minutes": 12,
          "sectionTitle": "Témata doc. Máčky",
          "available": false
        },
        {
          "id": "z0026p-4-prostorovost-28",
          "title": "4. Prostorovost",
          "summary": "Studijní okruh: 4. Prostorovost",
          "minutes": 12,
          "sectionTitle": "Témata doc. Máčky",
          "available": false
        },
        {
          "id": "z0026p-5-environmentalni-zmeny-29",
          "title": "5. Environmentální změny",
          "summary": "Studijní okruh: 5. Environmentální změny",
          "minutes": 22,
          "sectionTitle": "Témata doc. Máčky",
          "available": true,
          "blocks": [
            {
              "type": "heading",
              "text": "Témata doc. Máčky"
            },
            {
              "type": "callout",
              "label": "Okruh",
              "text": "5. Environmentální změny"
            },
            {
              "type": "callout",
              "label": "Jak číst tuto lekci",
              "text": "Text je výtah ze skripta a přednášek — použij ho jako mapu k učení. Detaily a obrázky najdeš v PDF/PPT v materiálech lekce."
            },
            {
              "type": "heading",
              "text": "Přednáška FG_DN_9 (Máčka/Nývlt)"
            },
            {
              "type": "list",
              "label": "Body přednášky",
              "items": [
                "Lokalita: Jack Hills, W Austrálie (stáří 4,404 Ga)",
                "Způsob určení stáří: radiometrické (U-Pb)",
                "Lokalita: NW Territory, Kanada (pojmenování podle řeky Acasta)",
                "Stáří: období metamorfózy 3,7–4,0 Ga, vznik z granitoidů starých 4,313 Ga (Sm-Nd)",
                "Horniny Měsíce převážně pozemského původu",
                "Červená barva – pozemský materiál (magma)",
                "Zemský povrch vzniká pomalým, ale neustávajícím působením přírodních procesů; přepokládá stálost:",
                "Rychlosti vývoje (pomalé, postupné změny)",
                "Řada rysů zemského povrchu vznikla při rychlých událostech (kataklyzmatech), spíše než pozvolnou změnou",
                "Tvářnost zemského povrchu a rychlost jeho změn se v minulosti lišila"
              ]
            },
            {
              "type": "list",
              "label": "Doporučený postup",
              "items": [
                "Projdi výtah a vlastní poznámky z přednášky",
                "Otevři přiložené PDF/PPT v materiálech lekce",
                "Propoj s předchozími a navazujícími okruhy v osnově"
              ]
            }
          ],
          "resources": [
            {
              "kind": "presentation",
              "title": "FG_DN_9 — přednáška",
              "url": "/materials/geografie-kartografie/z0026p/FG_DN_9.pptx",
              "source": "GÚ MUNI / Máčka"
            },
            {
              "kind": "link",
              "title": "IS MUNI — Fyzická geografie",
              "url": "https://is.muni.cz/predmet/sci/Z0026p",
              "source": "IS MUNI"
            }
          ],
          "quiz": {
            "title": "Kvíz: Environmentální změny",
            "questions": [
              {
                "question": "Uniformitarianismus předpokládá, že geologické procesy…",
                "options": [
                  {
                    "text": "probíhají stejnými zákony jako dnes, včetně pomalých změn",
                    "correct": true
                  },
                  {
                    "text": "v minulosti neexistovaly",
                    "correct": false
                  },
                  {
                    "text": "byly vždy katastrofické",
                    "correct": false
                  },
                  {
                    "text": "se týkají jen Měsíce",
                    "correct": false
                  }
                ],
                "explanation": "„The present is the key to the past.“"
              },
              {
                "question": "Katastrofismus zdůrazňuje…",
                "options": [
                  {
                    "text": "rychlé události formující reliéf",
                    "correct": true
                  },
                  {
                    "text": "pouze pomalé změny",
                    "correct": false
                  },
                  {
                    "text": "absenci vulkanismu",
                    "correct": false
                  },
                  {
                    "text": "výhradně lidskou činnost",
                    "correct": false
                  }
                ],
                "explanation": "Historická debata s uniformitarianismem o tempu změn."
              },
              {
                "question": "Radiometrické datování (např. U-Pb) slouží k…",
                "options": [
                  {
                    "text": "určení stáří hornin",
                    "correct": true
                  },
                  {
                    "text": "měření průtoku řeky",
                    "correct": false
                  },
                  {
                    "text": "předpovědi počasí",
                    "correct": false
                  },
                  {
                    "text": "mapování půdních typů",
                    "correct": false
                  }
                ],
                "explanation": "Radioaktivní rozpad poskytuje časovou osu geologie."
              },
              {
                "question": "Nejstarší známé minerály na Zemi (Jack Hills) mají stáří přes…",
                "options": [
                  {
                    "text": "4,4 miliardy let",
                    "correct": true
                  },
                  {
                    "text": "4,4 milionu let",
                    "correct": false
                  },
                  {
                    "text": "440 milionů let",
                    "correct": false
                  },
                  {
                    "text": "44 000 let",
                    "correct": false
                  }
                ],
                "explanation": "U-Pb datování zirkonů z australských hornin."
              },
              {
                "question": "Které tvrzení patří k okruhu „Environmentální změny\"?",
                "options": [
                  {
                    "text": "Způsob určení stáří: radiometrické (U-Pb)",
                    "correct": false
                  },
                  {
                    "text": "Stáří: období metamorfózy 3,7–4,0 Ga, vznik z granitoidů starých 4,313 Ga (Sm-Nd)",
                    "correct": false
                  },
                  {
                    "text": "Lokalita: Jack Hills, W Austrálie (stáří 4,404 Ga)",
                    "correct": true
                  },
                  {
                    "text": "Lokalita: NW Territory, Kanada (pojmenování podle řeky Acasta)",
                    "correct": false
                  }
                ],
                "explanation": "Lokalita: Jack Hills, W Austrálie (stáří 4,404 Ga)"
              },
              {
                "question": "K tématu „Environmentální změny\" — které tvrzení je správné? (6)",
                "options": [
                  {
                    "text": "Lokalita: NW Territory, Kanada (pojmenování podle řeky Acasta)",
                    "correct": false
                  },
                  {
                    "text": "Červená barva – pozemský materiál (magma)",
                    "correct": true
                  },
                  {
                    "text": "Způsob určení stáří: radiometrické (U-Pb)",
                    "correct": false
                  },
                  {
                    "text": "Lokalita: Jack Hills, W Austrálie (stáří 4,404 Ga)",
                    "correct": false
                  }
                ],
                "explanation": "Červená barva – pozemský materiál (magma)"
              },
              {
                "question": "K tématu „Environmentální změny\" — které tvrzení je správné? (7)",
                "options": [
                  {
                    "text": "Lokalita: NW Territory, Kanada (pojmenování podle řeky Acasta)",
                    "correct": false
                  },
                  {
                    "text": "Zemský povrch vzniká pomalým, ale neustávajícím působením přírodních procesů; přepokládá stálost:",
                    "correct": true
                  },
                  {
                    "text": "Způsob určení stáří: radiometrické (U-Pb)",
                    "correct": false
                  },
                  {
                    "text": "Lokalita: Jack Hills, W Austrálie (stáří 4,404 Ga)",
                    "correct": false
                  }
                ],
                "explanation": "Zemský povrch vzniká pomalým, ale neustávajícím působením přírodních procesů; přepokládá stálost:"
              },
              {
                "question": "K tématu „Environmentální změny\" — které tvrzení je správné? (8)",
                "options": [
                  {
                    "text": "Lokalita: NW Territory, Kanada (pojmenování podle řeky Acasta)",
                    "correct": false
                  },
                  {
                    "text": "Rychlosti vývoje (pomalé, postupné změny)",
                    "correct": true
                  },
                  {
                    "text": "Způsob určení stáří: radiometrické (U-Pb)",
                    "correct": false
                  },
                  {
                    "text": "Lokalita: Jack Hills, W Austrálie (stáří 4,404 Ga)",
                    "correct": false
                  }
                ],
                "explanation": "Rychlosti vývoje (pomalé, postupné změny)"
              },
              {
                "question": "K tématu „Environmentální změny\" — které tvrzení je správné? (9)",
                "options": [
                  {
                    "text": "Lokalita: NW Territory, Kanada (pojmenování podle řeky Acasta)",
                    "correct": false
                  },
                  {
                    "text": "Řada rysů zemského povrchu vznikla při rychlých událostech (kataklyzmatech), spíše než pozvolnou změnou",
                    "correct": true
                  },
                  {
                    "text": "Způsob určení stáří: radiometrické (U-Pb)",
                    "correct": false
                  },
                  {
                    "text": "Lokalita: Jack Hills, W Austrálie (stáří 4,404 Ga)",
                    "correct": false
                  }
                ],
                "explanation": "Řada rysů zemského povrchu vznikla při rychlých událostech (kataklyzmatech), spíše než pozvolnou změnou"
              },
              {
                "question": "K tématu „Environmentální změny\" — které tvrzení je správné? (10)",
                "options": [
                  {
                    "text": "Lokalita: NW Territory, Kanada (pojmenování podle řeky Acasta)",
                    "correct": false
                  },
                  {
                    "text": "Tvářnost zemského povrchu a rychlost jeho změn se v minulosti lišila",
                    "correct": true
                  },
                  {
                    "text": "Lokalita: Jack Hills, W Austrálie (stáří 4,404 Ga)",
                    "correct": false
                  },
                  {
                    "text": "Způsob určení stáří: radiometrické (U-Pb)",
                    "correct": false
                  }
                ],
                "explanation": "Tvářnost zemského povrchu a rychlost jeho změn se v minulosti lišila"
              },
              {
                "question": "K tématu „Environmentální změny\" — které tvrzení je správné? (11)",
                "options": [
                  {
                    "text": "Lokalita: NW Territory, Kanada (pojmenování podle řeky Acasta)",
                    "correct": false
                  },
                  {
                    "text": "Projdi výtah a vlastní poznámky z přednášky",
                    "correct": true
                  },
                  {
                    "text": "Lokalita: Jack Hills, W Austrálie (stáří 4,404 Ga)",
                    "correct": false
                  },
                  {
                    "text": "Způsob určení stáří: radiometrické (U-Pb)",
                    "correct": false
                  }
                ],
                "explanation": "Projdi výtah a vlastní poznámky z přednášky"
              },
              {
                "question": "K tématu „Environmentální změny\" — které tvrzení je správné? (12)",
                "options": [
                  {
                    "text": "Lokalita: NW Territory, Kanada (pojmenování podle řeky Acasta)",
                    "correct": false
                  },
                  {
                    "text": "Otevři přiložené PDF/PPT v materiálech lekce",
                    "correct": true
                  },
                  {
                    "text": "Lokalita: Jack Hills, W Austrálie (stáří 4,404 Ga)",
                    "correct": false
                  },
                  {
                    "text": "Způsob určení stáří: radiometrické (U-Pb)",
                    "correct": false
                  }
                ],
                "explanation": "Otevři přiložené PDF/PPT v materiálech lekce"
              },
              {
                "question": "K tématu „Environmentální změny\" — které tvrzení je správné? (13)",
                "options": [
                  {
                    "text": "Lokalita: NW Territory, Kanada (pojmenování podle řeky Acasta)",
                    "correct": false
                  },
                  {
                    "text": "Propoj s předchozími a navazujícími okruhy v osnově",
                    "correct": true
                  },
                  {
                    "text": "Lokalita: Jack Hills, W Austrálie (stáří 4,404 Ga)",
                    "correct": false
                  },
                  {
                    "text": "Způsob určení stáří: radiometrické (U-Pb)",
                    "correct": false
                  }
                ],
                "explanation": "Propoj s předchozími a navazujícími okruhy v osnově"
              },
              {
                "question": "K tématu „Environmentální změny\" — které tvrzení je správné? (14)",
                "options": [
                  {
                    "text": "Stáří: období metamorfózy 3,7–4,0 Ga, vznik z granitoidů starých 4,313 Ga (Sm-Nd)",
                    "correct": false
                  },
                  {
                    "text": "Lokalita: Jack Hills, W Austrálie (stáří 4,404 Ga)",
                    "correct": true
                  },
                  {
                    "text": "Způsob určení stáří: radiometrické (U-Pb)",
                    "correct": false
                  },
                  {
                    "text": "Lokalita: NW Territory, Kanada (pojmenování podle řeky Acasta)",
                    "correct": false
                  }
                ],
                "explanation": "Lokalita: Jack Hills, W Austrálie (stáří 4,404 Ga)"
              },
              {
                "question": "K tématu „Environmentální změny\" — které tvrzení je správné? (15)",
                "options": [
                  {
                    "text": "Stáří: období metamorfózy 3,7–4,0 Ga, vznik z granitoidů starých 4,313 Ga (Sm-Nd)",
                    "correct": false
                  },
                  {
                    "text": "Způsob určení stáří: radiometrické (U-Pb)",
                    "correct": true
                  },
                  {
                    "text": "Lokalita: Jack Hills, W Austrálie (stáří 4,404 Ga)",
                    "correct": false
                  },
                  {
                    "text": "Lokalita: NW Territory, Kanada (pojmenování podle řeky Acasta)",
                    "correct": false
                  }
                ],
                "explanation": "Způsob určení stáří: radiometrické (U-Pb)"
              },
              {
                "question": "K tématu „Environmentální změny\" — které tvrzení je správné? (16)",
                "options": [
                  {
                    "text": "Stáří: období metamorfózy 3,7–4,0 Ga, vznik z granitoidů starých 4,313 Ga (Sm-Nd)",
                    "correct": false
                  },
                  {
                    "text": "Lokalita: NW Territory, Kanada (pojmenování podle řeky Acasta)",
                    "correct": true
                  },
                  {
                    "text": "Lokalita: Jack Hills, W Austrálie (stáří 4,404 Ga)",
                    "correct": false
                  },
                  {
                    "text": "Způsob určení stáří: radiometrické (U-Pb)",
                    "correct": false
                  }
                ],
                "explanation": "Lokalita: NW Territory, Kanada (pojmenování podle řeky Acasta)"
              },
              {
                "question": "K tématu „Environmentální změny\" — které tvrzení je správné? (17)",
                "options": [
                  {
                    "text": "Lokalita: NW Territory, Kanada (pojmenování podle řeky Acasta)",
                    "correct": false
                  },
                  {
                    "text": "Stáří: období metamorfózy 3,7–4,0 Ga, vznik z granitoidů starých 4,313 Ga (Sm-Nd)",
                    "correct": true
                  },
                  {
                    "text": "Lokalita: Jack Hills, W Austrálie (stáří 4,404 Ga)",
                    "correct": false
                  },
                  {
                    "text": "Způsob určení stáří: radiometrické (U-Pb)",
                    "correct": false
                  }
                ],
                "explanation": "Stáří: období metamorfózy 3,7–4,0 Ga, vznik z granitoidů starých 4,313 Ga (Sm-Nd)"
              },
              {
                "question": "K tématu „Environmentální změny\" — které tvrzení je správné? (18)",
                "options": [
                  {
                    "text": "Lokalita: NW Territory, Kanada (pojmenování podle řeky Acasta)",
                    "correct": false
                  },
                  {
                    "text": "Horniny Měsíce převážně pozemského původu",
                    "correct": true
                  },
                  {
                    "text": "Lokalita: Jack Hills, W Austrálie (stáří 4,404 Ga)",
                    "correct": false
                  },
                  {
                    "text": "Způsob určení stáří: radiometrické (U-Pb)",
                    "correct": false
                  }
                ],
                "explanation": "Horniny Měsíce převážně pozemského původu"
              },
              {
                "question": "K tématu „Environmentální změny\" — které tvrzení je správné? (19)",
                "options": [
                  {
                    "text": "Lokalita: NW Territory, Kanada (pojmenování podle řeky Acasta)",
                    "correct": false
                  },
                  {
                    "text": "Červená barva – pozemský materiál (magma)",
                    "correct": true
                  },
                  {
                    "text": "Lokalita: Jack Hills, W Austrálie (stáří 4,404 Ga)",
                    "correct": false
                  },
                  {
                    "text": "Způsob určení stáří: radiometrické (U-Pb)",
                    "correct": false
                  }
                ],
                "explanation": "Červená barva – pozemský materiál (magma)"
              },
              {
                "question": "K tématu „Environmentální změny\" — které tvrzení je správné? (20)",
                "options": [
                  {
                    "text": "Lokalita: NW Territory, Kanada (pojmenování podle řeky Acasta)",
                    "correct": false
                  },
                  {
                    "text": "Zemský povrch vzniká pomalým, ale neustávajícím působením přírodních procesů; přepokládá stálost:",
                    "correct": true
                  },
                  {
                    "text": "Lokalita: Jack Hills, W Austrálie (stáří 4,404 Ga)",
                    "correct": false
                  },
                  {
                    "text": "Způsob určení stáří: radiometrické (U-Pb)",
                    "correct": false
                  }
                ],
                "explanation": "Zemský povrch vzniká pomalým, ale neustávajícím působením přírodních procesů; přepokládá stálost:"
              }
            ]
          }
        },
        {
          "id": "z0026p-6-clovek-pretvari-prirodu-30",
          "title": "6. Člověk přetváří přírodu",
          "summary": "Studijní okruh: 6. Člověk přetváří přírodu",
          "minutes": 12,
          "sectionTitle": "Témata doc. Máčky",
          "available": false
        },
        {
          "id": "z0026p-7-priroda-ohrozuje-cloveka-31",
          "title": "7. Příroda ohrožuje člověka",
          "summary": "Studijní okruh: 7. Příroda ohrožuje člověka",
          "minutes": 12,
          "sectionTitle": "Témata doc. Máčky",
          "available": false
        }
      ],
      resources: [
        {
          "kind": "link",
          "title": "IS MUNI — detail předmětu",
          "url": "https://is.muni.cz/predmet/sci/Z0026p",
          "source": "IS MUNI"
        },
        {
          "kind": "link",
          "title": "Studijní plán v IS MUNI",
          "url": "https://is.muni.cz/plan/23634/fyzicka-geografie",
          "source": "IS MUNI"
        },
        {
          "kind": "link",
          "title": "IS MUNI — detail předmětu",
          "url": "https://is.muni.cz/predmet/sci/Z0026p",
          "source": "IS MUNI"
        },
        {
          "kind": "link",
          "title": "Studijní plán v IS MUNI",
          "url": "https://is.muni.cz/plan/23634/fyzicka-geografie",
          "source": "IS MUNI"
        },
        {
          "kind": "document",
          "title": "FG_uvod — skriptum",
          "url": "/materials/geografie-kartografie/z0026p/FG_uvod.pdf",
          "source": "Brázdil"
        },
        {
          "kind": "document",
          "title": "FG_1 — skriptum",
          "url": "/materials/geografie-kartografie/z0026p/FG_1.pdf",
          "source": "Brázdil"
        },
        {
          "kind": "presentation",
          "title": "Úvodní prezentace FG (archiv)",
          "url": "/materials/geografie-kartografie/z0026p/FG_prezentace_uvod.pdf",
          "source": "Brázdil",
          "note": "Obsahově překrývá FG_uvod.pdf — doplňková prezentace."
        },
        {
          "kind": "document",
          "title": "Úvod do studia FG",
          "url": "/materials/geografie-kartografie/z0026p/uvod-do-studia-fyz-geografie.doc",
          "source": "Archiv studijních podkladů"
        },
        {
          "kind": "presentation",
          "title": "FG_DN_1 — přednáška",
          "url": "/materials/geografie-kartografie/z0026p/FG_DN_1.pptx",
          "source": "GÚ MUNI / Máčka"
        },
        {
          "kind": "presentation",
          "title": "FG_DN_2 — přednáška",
          "url": "/materials/geografie-kartografie/z0026p/FG_DN_2.pptx",
          "source": "GÚ MUNI / Máčka"
        },
        {
          "kind": "presentation",
          "title": "FG_DN_3 — přednáška",
          "url": "/materials/geografie-kartografie/z0026p/FG_DN_3.pptx",
          "source": "GÚ MUNI / Máčka"
        },
        {
          "kind": "presentation",
          "title": "FG_DN_4 — přednáška",
          "url": "/materials/geografie-kartografie/z0026p/FG_DN_4.pptx",
          "source": "GÚ MUNI / Máčka"
        },
        {
          "kind": "presentation",
          "title": "FG_DN_5 — přednáška",
          "url": "/materials/geografie-kartografie/z0026p/FG_DN_5.pptx",
          "source": "GÚ MUNI / Máčka"
        },
        {
          "kind": "presentation",
          "title": "FG_DN_6 — přednáška",
          "url": "/materials/geografie-kartografie/z0026p/FG_DN_6.pptx",
          "source": "GÚ MUNI / Máčka"
        },
        {
          "kind": "presentation",
          "title": "FG_DN_7 — přednáška",
          "url": "/materials/geografie-kartografie/z0026p/FG_DN_7.pptx",
          "source": "GÚ MUNI / Máčka"
        },
        {
          "kind": "presentation",
          "title": "FG_DN_8 — přednáška",
          "url": "/materials/geografie-kartografie/z0026p/FG_DN_8.pptx",
          "source": "GÚ MUNI / Máčka"
        },
        {
          "kind": "presentation",
          "title": "FG_DN_9 — přednáška",
          "url": "/materials/geografie-kartografie/z0026p/FG_DN_9.pptx",
          "source": "GÚ MUNI / Máčka"
        }
      ],
    },
    {
      id: "z0026c",
      code: "PřF:Z0026c",
      title: "Fyzická geografie-cvičení",
      garant: "doc. Mgr. Daniel Nývlt, Ph.D.",
      credits: 2,
      semester: "1.",
      completion: "z",
      tags: ["Povinné předměty (oborové)"],
      description: "Předmět podává základní představu o subsystému fyzickogeografické sféry Země se zaměřením na jednotlivé procesy a jevy, které se v ní odehrávají. Zároveň jde o prezentaci vzájemného propojení a souvislostí odehrávajících se procesů, objasnění příčin a mechanismů jejich fungování s uplatněním složkového a celostního pohledu.",
      syllabus: [
        "1. Úvod do studia fyzické geografie: FG jako vědní disciplína, předmět studia, geosféry, fyzickogeografická sféra, členění FG, pomocné disciplíny, postavení FG v rámci systému geografických věd, celostní a složkový pohled na FG sféru. 2. Základní poznatky o atmosféře: Atmosféra, vzduch, chemické složení vzduchu, fyzikální vlastnosti. Vertikální struktura atmosféry. Ozon a jeho změny v atmosféře. Antropogenní změny vlastností atmosféry. Počasí, povětrnost, podnebí. 3. Základní meteorologické prvky: Sluneční záření. Dlouhovlnné záření. Radiační a energetická bilance. Teplota půdy. Teplota vzduchu. Voda v atmosféře (výpar, vlhkost vzduchu, oblaka a oblačnost, mlhy). Srážky. Tlak vzduchu. Proudění vzduchu. Místní větry a místní cirkulační systémy. 4. Všeobecná cirkulace atmosféry: Vzduchové hmoty. Atmosférické fronty. Cirkulace tropických šířek (TZK, pasáty, antipasáty, monzuny, tropické cyklóny). Cirkulace mimotropických šířek (cyklony, anticyklony, mimotropické monzuny, zonální a meridionální cirkulace). 5. Základy předpovědi počasí: zdroje dat pro předpověď počasí, druhy předpovědi, metody krátkodobé předpovědi, dlouhodobá předpověď. 6. Klimatické klasifikace: metody klasifikace, rozdělení klasifikací. Konvenční klasifikace Köppena. Genetická klasifikace Alisovova. 7. Změny a kolísání klimatu: základní klimatotvorné faktory (sluneční faktor, vulkanická činnost, interakce oceán-atmosféra, skleníkový efekt, aerosoly). Minulé a současné změny klimatu. Klimatické scénáře. Možné dopady klimatické změny. 8. Hydrosféra: Rozšíření a oběh vody na Zemi. Hydrologické procesy a hydrologická bilance. 9. Hydrografie: Měrné jednotky odtoku. Hydrografické charakteristiky povodí, říční sítě a koryta řeky 10. Hydrometrie: Měření vodních stavů a průtoků 11. Vodní režim řek: Režim průtoků a typizace řek podle režimu, 12. Hydrologie podpovrchových vod: Zdroje vzniku podpovrchových vod, druhy vody v horninách, pozorování podzemních vod, zásoby, režimy, využívání.. 13. Hydrologie jezer a nádrží: Světové zásoby vody v jezerech a nádržích, morfometrické prvky jezer, vodní bilance, teplotní poměry. 14. Světový oceán: struktura, procesy, vlastnosti vody. 15. Vnitřní stavba Země, litosféra, desková tektonika: vnitřní stavba zemského tělesa, stavba a vlastnosti litosféry a astenosféry, stavba a vlastnosti zemské kůry, makrotvary povrchu Země, geotektonické procesy, pohyb a interakce litosférických desek. 16. Minerály a horniny: horninový cyklus, horninotvorné minerály, vyvřelé horniny, sedimentární horniny, metamorfované horniny, geologická chronologická škála. 17. Tektonické a vulkanické tvary: vrásnění, zlomy, tektonický georeliéf, zemětřesení, stratovulkány, štítové vulkány, vulkanický georeliéf, geografické rozšíření zemětřesné a sopečné aktivity. 18. Zvětrávání a svahové procesy: fyzikální a chemické zvětrávání, šířková zonalita zvětrávacích procesů, tvary zvětrávání a odnosu, gravitační svahové pochody. 19. Říční tvary: ronová a stržová eroze, eroze, transport a akumulace v řekách, georeliéf modelovaný říční činností, fluviální erozní a akumulační tvary. 20. Strukturní georeliéf: vztahy mezi litologií, strukturou a georeliéfem, geomorfologická hodnota hornin, tvary na horizontálně uložených horninách, tvary na ukloněných horninách, tvary na zvrásněných horninách, tvary na rozlámaných horninách, struktura a tvar říční sítě. 21. Pobřežní a eolické tvary: účinky vlnění na pobřeží, erozní a akumulační pobřežní tvary, typy pobřeží, erozní a akumulační eolické tvary, typy písečných dun, spraš. 22. Ledovcové tvary: typy ledovců, geomorfologické účinky horských ledovců, ledovcové štíty, geomorfologické účinky kontinentálních ledovců, mořský led, ledové doby v geologické minulosti. 23. Půdní pokryv Země: stavební složky půdy, půdní vlastnosti, půdotvorné faktory a procesy, mezinárodní půdní klasifikace WRB. 24. Biosféra: látkové a energetické toky v ekosystémech, biotop, ekologické faktory a podmínky, sukcese, biomy.",
        "Harmonogram cvičení v návaznosti na odpřednášená témata: 1. Procvičování témat 1-2. 2. Procvičování témat 3-4. 3. Procvičování témat 5-6. 4. Procvičování témat 7-8. 5. Procvičování témat 9-10. 6. Procvičování témat 11-12. 7. Procvičování témat 13-14. 8. Procvičování témat 15-16. 9. Procvičování témat 17-18. 10. Procvičování témat 19-20. 11. Procvičování témat 21-22. 12. Procvičování témat 23-24.",
        "K tématům 15 až 24 se budou ve cvičeních psát krátké kontrolní písemky (2 až 3 otázky), jejichž cílem je otestovat pochopení látky z přednášek. K písemkám proběhne následující týden diskuze s vyučujícím v rámci přednášky. Výsledek těchto písemek nemá vliv na zakončení předmětu, písemky mají podpořit zpětnou vazbu mezi studenty a vyučujícím."
      ],
      lessons: [
        {
          "id": "z0026c-1-uvod-do-studia-fyzicke-geografie-fg-jako-vedni-1",
          "title": "1. Úvod do studia fyzické geografie: FG jako vědní disciplína, předmět studia, geosféry, fyzickogeografická sféra, členění FG, pomocné disciplíny, postavení FG v rámci systému geografických věd, celostní a složkový pohled na FG sféru. 2. Základní poznatky o atmosféře: Atmosféra, vzduch, chemické složení vzduchu, fyzikální vlastnosti. Vertikální struktura atmosféry. Ozon a jeho změny v atmosféře. Antropogenní změny vlastností atmosféry. Počasí, povětrnost, podnebí. 3. Základní meteorologické prvky: Sluneční záření. Dlouhovlnné záření. Radiační a energetická bilance. Teplota půdy. Teplota vzduchu. Voda v atmosféře (výpar, vlhkost vzduchu, oblaka a oblačnost, mlhy). Srážky. Tlak vzduchu. Proudění vzduchu. Místní větry a místní cirkulační systémy. 4. Všeobecná cirkulace atmosféry: Vzduchové hmoty. Atmosférické fronty. Cirkulace tropických šířek (TZK, pasáty, antipasáty, monzuny, tropické cyklóny). Cirkulace mimotropických šířek (cyklony, anticyklony, mimotropické monzuny, zonální a meridionální cirkulace). 5. Základy předpovědi počasí: zdroje dat pro předpověď počasí, druhy předpovědi, metody krátkodobé předpovědi, dlouhodobá předpověď. 6. Klimatické klasifikace: metody klasifikace, rozdělení klasifikací. Konvenční klasifikace Köppena. Genetická klasifikace Alisovova. 7. Změny a kolísání klimatu: základní klimatotvorné faktory (sluneční faktor, vulkanická činnost, interakce oceán-atmosféra, skleníkový efekt, aerosoly). Minulé a současné změny klimatu. Klimatické scénáře. Možné dopady klimatické změny. 8. Hydrosféra: Rozšíření a oběh vody na Zemi. Hydrologické procesy a hydrologická bilance. 9. Hydrografie: Měrné jednotky odtoku. Hydrografické charakteristiky povodí, říční sítě a koryta řeky 10. Hydrometrie: Měření vodních stavů a průtoků 11. Vodní režim řek: Režim průtoků a typizace řek podle režimu, 12. Hydrologie podpovrchových vod: Zdroje vzniku podpovrchových vod, druhy vody v horninách, pozorování podzemních vod, zásoby, režimy, využívání.. 13. Hydrologie jezer a nádrží: Světové zásoby vody v jezerech a nádržích, morfometrické prvky jezer, vodní bilance, teplotní poměry. 14. Světový oceán: struktura, procesy, vlastnosti vody. 15. Vnitřní stavba Země, litosféra, desková tektonika: vnitřní stavba zemského tělesa, stavba a vlastnosti litosféry a astenosféry, stavba a vlastnosti zemské kůry, makrotvary povrchu Země, geotektonické procesy, pohyb a interakce litosférických desek. 16. Minerály a horniny: horninový cyklus, horninotvorné minerály, vyvřelé horniny, sedimentární horniny, metamorfované horniny, geologická chronologická škála. 17. Tektonické a vulkanické tvary: vrásnění, zlomy, tektonický georeliéf, zemětřesení, stratovulkány, štítové vulkány, vulkanický georeliéf, geografické rozšíření zemětřesné a sopečné aktivity. 18. Zvětrávání a svahové procesy: fyzikální a chemické zvětrávání, šířková zonalita zvětrávacích procesů, tvary zvětrávání a odnosu, gravitační svahové pochody. 19. Říční tvary: ronová a stržová eroze, eroze, transport a akumulace v řekách, georeliéf modelovaný říční činností, fluviální erozní a akumulační tvary. 20. Strukturní georeliéf: vztahy mezi litologií, strukturou a georeliéfem, geomorfologická hodnota hornin, tvary na horizontálně uložených horninách, tvary na ukloněných horninách, tvary na zvrásněných horninách, tvary na rozlámaných horninách, struktura a tvar říční sítě. 21. Pobřežní a eolické tvary: účinky vlnění na pobřeží, erozní a akumulační pobřežní tvary, typy pobřeží, erozní a akumulační eolické tvary, typy písečných dun, spraš. 22. Ledovcové tvary: typy ledovců, geomorfologické účinky horských ledovců, ledovcové štíty, geomorfologické účinky kontinentálních ledovců, mořský led, ledové doby v geologické minulosti. 23. Půdní pokryv Země: stavební složky půdy, půdní vlastnosti, půdotvorné faktory a procesy, mezinárodní půdní klasifikace WRB. 24. Biosféra: látkové a energetické toky v ekosystémech, biotop, ekologické faktory a podmínky, sukcese, biomy.",
          "summary": "1. Úvod do studia fyzické geografie: FG jako vědní disciplína, předmět studia, geosféry, fyzickogeografická sféra, členění FG, pomocné di…",
          "minutes": 25,
          "available": false
        },
        {
          "id": "z0026c-harmonogram-cviceni-v-navaznosti-na-odprednasena-2",
          "title": "Harmonogram cvičení v návaznosti na odpřednášená témata: 1. Procvičování témat 1-2. 2. Procvičování témat 3-4. 3. Procvičování témat 5-6. 4. Procvičování témat 7-8. 5. Procvičování témat 9-10. 6. Procvičování témat 11-12. 7. Procvičování témat 13-14. 8. Procvičování témat 15-16. 9. Procvičování témat 17-18. 10. Procvičování témat 19-20. 11. Procvičování témat 21-22. 12. Procvičování témat 23-24.",
          "summary": "Harmonogram cvičení v návaznosti na odpřednášená témata: 1. Procvičování témat 1-2. 2. Procvičování témat 3-4. 3. Procvičování témat 5-6.…",
          "minutes": 25,
          "available": false
        },
        {
          "id": "z0026c-k-tematum-15-az-24-se-budou-ve-cvicenich-psat-kr-3",
          "title": "K tématům 15 až 24 se budou ve cvičeních psát krátké kontrolní písemky (2 až 3 otázky), jejichž cílem je otestovat pochopení látky z přednášek. K písemkám proběhne následující týden diskuze s vyučujícím v rámci přednášky. Výsledek těchto písemek nemá vliv na zakončení předmětu, písemky mají podpořit zpětnou vazbu mezi studenty a vyučujícím.",
          "summary": "K tématům 15 až 24 se budou ve cvičeních psát krátké kontrolní písemky (2 až 3 otázky), jejichž cílem je otestovat pochopení látky z před…",
          "minutes": 25,
          "available": false
        }
      ],
      resources: [
        {
          "kind": "link",
          "title": "IS MUNI — detail předmětu",
          "url": "https://is.muni.cz/predmet/sci/Z0026c",
          "source": "IS MUNI"
        },
        {
          "kind": "link",
          "title": "Studijní plán v IS MUNI",
          "url": "https://is.muni.cz/plan/23634/fyzicka-geografie",
          "source": "IS MUNI"
        },
        {
          "kind": "link",
          "title": "IS MUNI — detail předmětu",
          "url": "https://is.muni.cz/predmet/sci/Z0026c",
          "source": "IS MUNI"
        },
        {
          "kind": "link",
          "title": "Studijní plán v IS MUNI",
          "url": "https://is.muni.cz/plan/23634/fyzicka-geografie",
          "source": "IS MUNI"
        }
      ],
    },
    {
      id: "z3090p",
      code: "PřF:Z3090p",
      title: "Humánní geografie",
      garant: "doc. Mgr. Ondřej Mulíček, Ph.D.",
      credits: 7,
      semester: "1.",
      completion: "zk",
      tags: ["Povinné předměty (oborové)"],
      description: "Hlavní cíle kurzu jsou: zprostředkovat první ucelený kontakt s problematikou humánní geografie; exponovat problémově jednotlivé subdisciplíny; motivovat studenty k pozdější specializaci v průběhu bakalářského (nebo magisterského) studia.",
      syllabus: [
        "1. Role místa a prostoru ve společenském vývoji a společenských vědách.",
        "2. Povaha geografických jevů. Místo geografie v systému věd.",
        "3. Metody a techniky používané v geografii. Zdroje dat. Příklady aplikací a řešení otázek.",
        "4. Koncept demografického přechodu. Demografický vývoj v současnosti. Projekce vývoje počtu obyvatel.",
        "5. Typy zemědělství ve světě a jejich vztah ke světovému trhu potravin. Hlad, podvýživa a produkce potravin.",
        "6. Zdroje energie. Geografie produkce a geografie spotřeby energie. Struktura energetických zdrojů. Vztah poptávky a nabídky, ceny energií (ropy). Ropná krize. Alternativní energetické zdroje.",
        "7. Změny v rozmístění výroby v posledních desetiletích. Fordismus a flexibilní akumulace. Globalizace kapitálu. Přímé zahraniční investice.",
        "8. Doprava a prostorové interakce: geografická charakteristika základních druhů dopravy, dopady dopravy.",
        "9. Prostorová mobilita: formy prostorové mobility, mezistátní a vnitřní migrace, bariéry migrace, migrační \"zákony\".",
        "10. Urbanizace: systém osídlení, hierarchie středisek, teorie centrálních míst, geografie města, města v zemích třetího světa, světová města.",
        "11. Politická geografie a geopolitika. Stát oddělující globální sféru od sféry lokálních zkušeností. Teorie státu. Geopolitické nodely.",
        "12. Města a městské struktury, urbánní modely.",
        "13. Regionalizace: koncepce regionu, regionální procesy, postup ve vymezování nodálních regionů, regionalizace České republiky a regionalizace světa."
      ],
      lessons: [
        {
          "id": "z3090p-1-role-mista-a-prostoru-ve-spolecenskem-vyvoji-a-1",
          "title": "1. Role místa a prostoru ve společenském vývoji a společenských vědách.",
          "summary": "Studijní okruh: 1. Role místa a prostoru ve společenském vývoji a společenských vědách.",
          "minutes": 15,
          "available": false
        },
        {
          "id": "z3090p-2-povaha-geografickych-jevu-misto-geografie-v-sy-2",
          "title": "2. Povaha geografických jevů. Místo geografie v systému věd.",
          "summary": "Studijní okruh: 2. Povaha geografických jevů. Místo geografie v systému věd.",
          "minutes": 12,
          "available": false
        },
        {
          "id": "z3090p-3-metody-a-techniky-pouzivane-v-geografii-zdroje-3",
          "title": "3. Metody a techniky používané v geografii. Zdroje dat. Příklady aplikací a řešení otázek.",
          "summary": "Studijní okruh: 3. Metody a techniky používané v geografii. Zdroje dat. Příklady aplikací a řešení otázek.",
          "minutes": 15,
          "available": false
        },
        {
          "id": "z3090p-4-koncept-demografickeho-prechodu-demograficky-v-4",
          "title": "4. Koncept demografického přechodu. Demografický vývoj v současnosti. Projekce vývoje počtu obyvatel.",
          "summary": "Studijní okruh: 4. Koncept demografického přechodu. Demografický vývoj v současnosti. Projekce vývoje počtu obyvatel.",
          "minutes": 20,
          "available": false
        },
        {
          "id": "z3090p-5-typy-zemedelstvi-ve-svete-a-jejich-vztah-ke-sv-5",
          "title": "5. Typy zemědělství ve světě a jejich vztah ke světovému trhu potravin. Hlad, podvýživa a produkce potravin.",
          "summary": "Studijní okruh: 5. Typy zemědělství ve světě a jejich vztah ke světovému trhu potravin. Hlad, podvýživa a produkce potravin.",
          "minutes": 20,
          "available": false
        },
        {
          "id": "z3090p-6-zdroje-energie-geografie-produkce-a-geografie-6",
          "title": "6. Zdroje energie. Geografie produkce a geografie spotřeby energie. Struktura energetických zdrojů. Vztah poptávky a nabídky, ceny energií (ropy). Ropná krize. Alternativní energetické zdroje.",
          "summary": "6. Zdroje energie. Geografie produkce a geografie spotřeby energie. Struktura energetických zdrojů. Vztah poptávky a nabídky, ceny energi…",
          "minutes": 25,
          "available": false
        },
        {
          "id": "z3090p-7-zmeny-v-rozmisteni-vyroby-v-poslednich-desetil-7",
          "title": "7. Změny v rozmístění výroby v posledních desetiletích. Fordismus a flexibilní akumulace. Globalizace kapitálu. Přímé zahraniční investice.",
          "summary": "Studijní okruh: 7. Změny v rozmístění výroby v posledních desetiletích. Fordismus a flexibilní akumulace. Globalizace kapitálu. Přímé zahraniční investice.",
          "minutes": 20,
          "available": false
        },
        {
          "id": "z3090p-8-doprava-a-prostorove-interakce-geograficka-cha-8",
          "title": "8. Doprava a prostorové interakce: geografická charakteristika základních druhů dopravy, dopady dopravy.",
          "summary": "Studijní okruh: 8. Doprava a prostorové interakce: geografická charakteristika základních druhů dopravy, dopady dopravy.",
          "minutes": 20,
          "available": false
        },
        {
          "id": "z3090p-9-prostorova-mobilita-formy-prostorove-mobility-9",
          "title": "9. Prostorová mobilita: formy prostorové mobility, mezistátní a vnitřní migrace, bariéry migrace, migrační \"zákony\".",
          "summary": "Studijní okruh: 9. Prostorová mobilita: formy prostorové mobility, mezistátní a vnitřní migrace, bariéry migrace, migrační \"zákony\".",
          "minutes": 20,
          "available": false
        },
        {
          "id": "z3090p-10-urbanizace-system-osidleni-hierarchie-stredis-10",
          "title": "10. Urbanizace: systém osídlení, hierarchie středisek, teorie centrálních míst, geografie města, města v zemích třetího světa, světová města.",
          "summary": "10. Urbanizace: systém osídlení, hierarchie středisek, teorie centrálních míst, geografie města, města v zemích třetího světa, světová mě…",
          "minutes": 20,
          "available": false
        },
        {
          "id": "z3090p-11-politicka-geografie-a-geopolitika-stat-oddelu-11",
          "title": "11. Politická geografie a geopolitika. Stát oddělující globální sféru od sféry lokálních zkušeností. Teorie státu. Geopolitické nodely.",
          "summary": "Studijní okruh: 11. Politická geografie a geopolitika. Stát oddělující globální sféru od sféry lokálních zkušeností. Teorie státu. Geopolitické nodely.",
          "minutes": 20,
          "available": false
        },
        {
          "id": "z3090p-12-mesta-a-mestske-struktury-urbanni-modely-12",
          "title": "12. Města a městské struktury, urbánní modely.",
          "summary": "Studijní okruh: 12. Města a městské struktury, urbánní modely.",
          "minutes": 12,
          "available": false
        },
        {
          "id": "z3090p-13-regionalizace-koncepce-regionu-regionalni-pro-13",
          "title": "13. Regionalizace: koncepce regionu, regionální procesy, postup ve vymezování nodálních regionů, regionalizace České republiky a regionalizace světa.",
          "summary": "13. Regionalizace: koncepce regionu, regionální procesy, postup ve vymezování nodálních regionů, regionalizace České republiky a regional…",
          "minutes": 20,
          "available": false
        }
      ],
      resources: [
        {
          "kind": "link",
          "title": "IS MUNI — detail předmětu",
          "url": "https://is.muni.cz/predmet/sci/Z3090p",
          "source": "IS MUNI"
        },
        {
          "kind": "link",
          "title": "Studijní plán v IS MUNI",
          "url": "https://is.muni.cz/plan/23634/fyzicka-geografie",
          "source": "IS MUNI"
        },
        {
          "kind": "link",
          "title": "IS MUNI — detail předmětu",
          "url": "https://is.muni.cz/predmet/sci/Z3090p",
          "source": "IS MUNI"
        },
        {
          "kind": "link",
          "title": "Studijní plán v IS MUNI",
          "url": "https://is.muni.cz/plan/23634/fyzicka-geografie",
          "source": "IS MUNI"
        }
      ],
    },
    {
      id: "z3090c",
      code: "PřF:Z3090c",
      title: "Humánní geografie - cvičení",
      garant: "doc. Mgr. Ondřej Mulíček, Ph.D.",
      credits: 2,
      semester: "1.",
      completion: "z",
      tags: ["Povinné předměty (oborové)"],
      description: "Hlavní cíle kurzu jsou: zprostředkovat první ucelený kontakt s problematikou humánní geografie; exponovat problémově jednotlivé subdisciplíny; motivovat studenty k pozdější specializaci v průběhu bakalářského (nebo magisterského) studia.",
      syllabus: [
        "Seznam témat cvičení (vyučující Mulíček):",
        "1. Konceptualizace geografického problému, tvorba modelu;",
        "2. Srovnání absolutně a relativně chápaného prostoru;",
        "3. Tvorba syntetického ukazatele socio-ekonomického rozvoje;",
        "4. Mapování prostorové struktury vybrané nadnárodní společnosti;",
        "5. Rank-size křivka pro vybrané sídelní systémy;",
        "6. Hodnocení míry urbanizace;",
        "7. Zpracování mentální mapy Brna.",
        "Seznam témat cvičení (vyučující Šerý):",
        "1. Analýza demografického vývoje (Witthaerův diagram);",
        "2. Druhý demografický přechod (diskuse);",
        "3. Migrace (práce s literaturou);",
        "4. Letecká doprava (gravitační modelování);",
        "5. Energetické zdroje, ropné krize (diskuse a esej);",
        "6. Práce s literaturou;"
      ],
      lessons: [
        {
          "id": "z3090c-1-konceptualizace-geografickeho-problemu-tvorba-1",
          "title": "1. Konceptualizace geografického problému, tvorba modelu;",
          "summary": "Studijní okruh: 1. Konceptualizace geografického problému, tvorba modelu;",
          "minutes": 12,
          "sectionTitle": "Seznam témat cvičení (vyučující Mulíček)",
          "available": false
        },
        {
          "id": "z3090c-2-srovnani-absolutne-a-relativne-chapaneho-prost-2",
          "title": "2. Srovnání absolutně a relativně chápaného prostoru;",
          "summary": "Studijní okruh: 2. Srovnání absolutně a relativně chápaného prostoru;",
          "minutes": 12,
          "sectionTitle": "Seznam témat cvičení (vyučující Mulíček)",
          "available": false
        },
        {
          "id": "z3090c-3-tvorba-syntetickeho-ukazatele-socio-ekonomicke-3",
          "title": "3. Tvorba syntetického ukazatele socio-ekonomického rozvoje;",
          "summary": "Studijní okruh: 3. Tvorba syntetického ukazatele socio-ekonomického rozvoje;",
          "minutes": 12,
          "sectionTitle": "Seznam témat cvičení (vyučující Mulíček)",
          "available": false
        },
        {
          "id": "z3090c-4-mapovani-prostorove-struktury-vybrane-nadnarod-4",
          "title": "4. Mapování prostorové struktury vybrané nadnárodní společnosti;",
          "summary": "Studijní okruh: 4. Mapování prostorové struktury vybrané nadnárodní společnosti;",
          "minutes": 15,
          "sectionTitle": "Seznam témat cvičení (vyučující Mulíček)",
          "available": false
        },
        {
          "id": "z3090c-5-rank-size-krivka-pro-vybrane-sidelni-systemy-5",
          "title": "5. Rank-size křivka pro vybrané sídelní systémy;",
          "summary": "Studijní okruh: 5. Rank-size křivka pro vybrané sídelní systémy;",
          "minutes": 12,
          "sectionTitle": "Seznam témat cvičení (vyučující Mulíček)",
          "available": false
        },
        {
          "id": "z3090c-6-hodnoceni-miry-urbanizace-6",
          "title": "6. Hodnocení míry urbanizace;",
          "summary": "Studijní okruh: 6. Hodnocení míry urbanizace;",
          "minutes": 12,
          "sectionTitle": "Seznam témat cvičení (vyučující Mulíček)",
          "available": false
        },
        {
          "id": "z3090c-7-zpracovani-mentalni-mapy-brna-7",
          "title": "7. Zpracování mentální mapy Brna.",
          "summary": "Studijní okruh: 7. Zpracování mentální mapy Brna.",
          "minutes": 12,
          "sectionTitle": "Seznam témat cvičení (vyučující Mulíček)",
          "available": false
        },
        {
          "id": "z3090c-1-analyza-demografickeho-vyvoje-witthaeruv-diagr-8",
          "title": "1. Analýza demografického vývoje (Witthaerův diagram);",
          "summary": "Studijní okruh: 1. Analýza demografického vývoje (Witthaerův diagram);",
          "minutes": 12,
          "sectionTitle": "Seznam témat cvičení (vyučující Šerý)",
          "available": false
        },
        {
          "id": "z3090c-2-druhy-demograficky-prechod-diskuse-9",
          "title": "2. Druhý demografický přechod (diskuse);",
          "summary": "Studijní okruh: 2. Druhý demografický přechod (diskuse);",
          "minutes": 12,
          "sectionTitle": "Seznam témat cvičení (vyučující Šerý)",
          "available": false
        },
        {
          "id": "z3090c-3-migrace-prace-s-literaturou-10",
          "title": "3. Migrace (práce s literaturou);",
          "summary": "Studijní okruh: 3. Migrace (práce s literaturou);",
          "minutes": 12,
          "sectionTitle": "Seznam témat cvičení (vyučující Šerý)",
          "available": false
        },
        {
          "id": "z3090c-4-letecka-doprava-gravitacni-modelovani-11",
          "title": "4. Letecká doprava (gravitační modelování);",
          "summary": "Studijní okruh: 4. Letecká doprava (gravitační modelování);",
          "minutes": 12,
          "sectionTitle": "Seznam témat cvičení (vyučující Šerý)",
          "available": false
        },
        {
          "id": "z3090c-5-energeticke-zdroje-ropne-krize-diskuse-a-esej-12",
          "title": "5. Energetické zdroje, ropné krize (diskuse a esej);",
          "summary": "Studijní okruh: 5. Energetické zdroje, ropné krize (diskuse a esej);",
          "minutes": 12,
          "sectionTitle": "Seznam témat cvičení (vyučující Šerý)",
          "available": false
        },
        {
          "id": "z3090c-6-prace-s-literaturou-13",
          "title": "6. Práce s literaturou;",
          "summary": "Studijní okruh: 6. Práce s literaturou;",
          "minutes": 12,
          "sectionTitle": "Seznam témat cvičení (vyučující Šerý)",
          "available": false
        }
      ],
      resources: [
        {
          "kind": "link",
          "title": "IS MUNI — detail předmětu",
          "url": "https://is.muni.cz/predmet/sci/Z3090c",
          "source": "IS MUNI"
        },
        {
          "kind": "link",
          "title": "Studijní plán v IS MUNI",
          "url": "https://is.muni.cz/plan/23634/fyzicka-geografie",
          "source": "IS MUNI"
        },
        {
          "kind": "link",
          "title": "IS MUNI — detail předmětu",
          "url": "https://is.muni.cz/predmet/sci/Z3090c",
          "source": "IS MUNI"
        },
        {
          "kind": "link",
          "title": "Studijní plán v IS MUNI",
          "url": "https://is.muni.cz/plan/23634/fyzicka-geografie",
          "source": "IS MUNI"
        }
      ],
    },
    {
      id: "z0135p",
      code: "PřF:Z0135p",
      title: "Úvod do studia planety Země",
      garant: "Mgr. Jarmila Burianová, Ph.D.",
      credits: 4,
      semester: "1.",
      completion: "zk",
      tags: ["Povinné předměty (oborové)"],
      description: "Předmět poskytuje studentovi základní informace, které jsou nezbytné pro orientaci ve studiu geografie na fakultě a o geografii jako vědní disciplíně. Větší část je pak věnována prezentaci vybraných astronomických, geodetických a geofyzikálních poznatků, které mají bezprostřední vliv na mnohé geografické procesy a jevy odehrávající se v krajinné sféře Země.",
      syllabus: [
        "1. Úvod do studia planety Země",
        "2. Vesmír a sluneční soustava",
        "3. Základy orientace na Zemi a ve vesmíru",
        "4. Pohyby Slunce, Měsíce a vesmírných těles",
        "5. Čas a kalendář",
        "6. Tvar, rozměry a hmotnost Země",
        "7. Pohyby Země",
        "8. Slapové jevy",
        "9. Základy geofyziky",
        "10. Vývoj Země a jejích geosfér",
        "11. Geografický prostor. Geografické zákonitosti"
      ],
      lessons: [
        {
          "id": "z0135p-1-uvod-do-studia-planety-zeme-1",
          "title": "1. Úvod do studia planety Země",
          "summary": "Studijní okruh: 1. Úvod do studia planety Země",
          "minutes": 12,
          "available": false
        },
        {
          "id": "z0135p-2-vesmir-a-slunecni-soustava-2",
          "title": "2. Vesmír a sluneční soustava",
          "summary": "Studijní okruh: 2. Vesmír a sluneční soustava",
          "minutes": 12,
          "available": false
        },
        {
          "id": "z0135p-3-zaklady-orientace-na-zemi-a-ve-vesmiru-3",
          "title": "3. Základy orientace na Zemi a ve vesmíru",
          "summary": "Studijní okruh: 3. Základy orientace na Zemi a ve vesmíru",
          "minutes": 12,
          "available": false
        },
        {
          "id": "z0135p-4-pohyby-slunce-mesice-a-vesmirnych-teles-4",
          "title": "4. Pohyby Slunce, Měsíce a vesmírných těles",
          "summary": "Studijní okruh: 4. Pohyby Slunce, Měsíce a vesmírných těles",
          "minutes": 12,
          "available": false
        },
        {
          "id": "z0135p-5-cas-a-kalendar-5",
          "title": "5. Čas a kalendář",
          "summary": "Studijní okruh: 5. Čas a kalendář",
          "minutes": 12,
          "available": false
        },
        {
          "id": "z0135p-6-tvar-rozmery-a-hmotnost-zeme-6",
          "title": "6. Tvar, rozměry a hmotnost Země",
          "summary": "Studijní okruh: 6. Tvar, rozměry a hmotnost Země",
          "minutes": 12,
          "available": false
        },
        {
          "id": "z0135p-7-pohyby-zeme-7",
          "title": "7. Pohyby Země",
          "summary": "Studijní okruh: 7. Pohyby Země",
          "minutes": 12,
          "available": false
        },
        {
          "id": "z0135p-8-slapove-jevy-8",
          "title": "8. Slapové jevy",
          "summary": "Studijní okruh: 8. Slapové jevy",
          "minutes": 12,
          "available": false
        },
        {
          "id": "z0135p-9-zaklady-geofyziky-9",
          "title": "9. Základy geofyziky",
          "summary": "Studijní okruh: 9. Základy geofyziky",
          "minutes": 12,
          "available": false
        },
        {
          "id": "z0135p-10-vyvoj-zeme-a-jejich-geosfer-10",
          "title": "10. Vývoj Země a jejích geosfér",
          "summary": "Studijní okruh: 10. Vývoj Země a jejích geosfér",
          "minutes": 12,
          "available": false
        },
        {
          "id": "z0135p-11-geograficky-prostor-geograficke-zakonitosti-11",
          "title": "11. Geografický prostor. Geografické zákonitosti",
          "summary": "Studijní okruh: 11. Geografický prostor. Geografické zákonitosti",
          "minutes": 12,
          "available": false
        }
      ],
      resources: [
        {
          "kind": "link",
          "title": "IS MUNI — detail předmětu",
          "url": "https://is.muni.cz/predmet/sci/Z0135p",
          "source": "IS MUNI"
        },
        {
          "kind": "link",
          "title": "Studijní plán v IS MUNI",
          "url": "https://is.muni.cz/plan/23634/fyzicka-geografie",
          "source": "IS MUNI"
        },
        {
          "kind": "link",
          "title": "IS MUNI — detail předmětu",
          "url": "https://is.muni.cz/predmet/sci/Z0135p",
          "source": "IS MUNI"
        },
        {
          "kind": "link",
          "title": "Studijní plán v IS MUNI",
          "url": "https://is.muni.cz/plan/23634/fyzicka-geografie",
          "source": "IS MUNI"
        }
      ],
    },
    {
      id: "z0135c",
      code: "PřF:Z0135c",
      title: "Úvod-planeta Země-cvičení",
      garant: "Mgr. Jarmila Burianová, Ph.D.",
      credits: 1,
      semester: "1.",
      completion: "z",
      tags: ["Povinné předměty (oborové)"],
      description: "Cílem přemětu je poskytnout studentovi přehled o vybraných astronomických, geodetických a geofyzikálních tématech, která mají bezprostřední vliv na mnohé geografické procesy a jevy odehrávající se v krajinné sféře Země. Část cvičení je zaměřena zejména na praktické výpočty.",
      syllabus: [
        "1. Úvod, práce s astronomickou ročenkou",
        "2. Měření vzdáleností na Zemi",
        "3. Polední výška Slunce",
        "4. Místní a pásmový čas",
        "5. Časová rovnice",
        "6. Délka dnů a nocí na Zemi",
        "7. Soumrakové jevy",
        "8. Extraterestrální insolace"
      ],
      lessons: [
        {
          "id": "z0135c-1-uvod-prace-s-astronomickou-rocenkou-1",
          "title": "1. Úvod, práce s astronomickou ročenkou",
          "summary": "Studijní okruh: 1. Úvod, práce s astronomickou ročenkou",
          "minutes": 12,
          "available": false
        },
        {
          "id": "z0135c-2-mereni-vzdalenosti-na-zemi-2",
          "title": "2. Měření vzdáleností na Zemi",
          "summary": "Studijní okruh: 2. Měření vzdáleností na Zemi",
          "minutes": 12,
          "available": false
        },
        {
          "id": "z0135c-3-poledni-vyska-slunce-3",
          "title": "3. Polední výška Slunce",
          "summary": "Studijní okruh: 3. Polední výška Slunce",
          "minutes": 12,
          "available": false
        },
        {
          "id": "z0135c-4-mistni-a-pasmovy-cas-4",
          "title": "4. Místní a pásmový čas",
          "summary": "Studijní okruh: 4. Místní a pásmový čas",
          "minutes": 12,
          "available": false
        },
        {
          "id": "z0135c-5-casova-rovnice-5",
          "title": "5. Časová rovnice",
          "summary": "Studijní okruh: 5. Časová rovnice",
          "minutes": 12,
          "available": false
        },
        {
          "id": "z0135c-6-delka-dnu-a-noci-na-zemi-6",
          "title": "6. Délka dnů a nocí na Zemi",
          "summary": "Studijní okruh: 6. Délka dnů a nocí na Zemi",
          "minutes": 12,
          "available": false
        },
        {
          "id": "z0135c-7-soumrakove-jevy-7",
          "title": "7. Soumrakové jevy",
          "summary": "Studijní okruh: 7. Soumrakové jevy",
          "minutes": 12,
          "available": false
        },
        {
          "id": "z0135c-8-extraterestralni-insolace-8",
          "title": "8. Extraterestrální insolace",
          "summary": "Studijní okruh: 8. Extraterestrální insolace",
          "minutes": 12,
          "available": false
        }
      ],
      resources: [
        {
          "kind": "link",
          "title": "IS MUNI — detail předmětu",
          "url": "https://is.muni.cz/predmet/sci/Z0135c",
          "source": "IS MUNI"
        },
        {
          "kind": "link",
          "title": "Studijní plán v IS MUNI",
          "url": "https://is.muni.cz/plan/23634/fyzicka-geografie",
          "source": "IS MUNI"
        },
        {
          "kind": "link",
          "title": "IS MUNI — detail předmětu",
          "url": "https://is.muni.cz/predmet/sci/Z0135c",
          "source": "IS MUNI"
        },
        {
          "kind": "link",
          "title": "Studijní plán v IS MUNI",
          "url": "https://is.muni.cz/plan/23634/fyzicka-geografie",
          "source": "IS MUNI"
        }
      ],
    },
    {
      id: "z2062p",
      code: "PřF:Z2062p",
      title: "Geografická kartografie",
      garant: "prof. RNDr. Petr Kubíček, CSc.",
      credits: 4,
      semester: "1.",
      completion: "zk",
      tags: ["Povinné předměty (oborové)"],
      description: "Cílem předmětu je seznámit studenty se základy analogové a digitální kartografie a geoinformatiky. Přednášky prezentují základní principy percepce a kognice, dále představí geometrické základy map a podávájí přehled základních kartografických metod pro vyjádření obsahových prvků topografických, tematických a obecně geografických map a atlasů. Jsou charakterizovány základní činitelé a metody provádění kartografické generalizace. Součástí předmětu jsou i základní informace o využití moderních technologií v kartografii a geografii, s důrazem na geografické informační systémy (GIS). Předmět se věnuje i úvodu do geoinformatiky, prostorové vědy a kartografické vizualizace. Je podán stručný přehled globálních prostorově orientovaných projektů. Přednáška charakterizuje úlohu prostorové informace v globální informační společnosti a metody určení její tržní hodnoty.",
      syllabus: [
        "1. Vymezení a definice prostorových dat, informací a znalostí. Vztah k neprostorovým datům a informacím. Terminologické vymezení Kartografie a geoinformatiky. 2. Postavení kartografie v systému věd, vztahy k jiným vědním disciplínám. Definice a předmět výzkumu kartografie. Analogová a digitální kartografie. Vývoj kartografie jako vědy. 3. Konstrukční základy map. Základy matematické kartografie, členění a vlastnosti kartografických zobrazení s důrazem na území České republiky. 4. Kartografické vyjadřovací prostředky. Metody znázorňování obsahu topografických, geografických a tematických map. Anamorfní mapy. Kartografický jazyk. Kartografická interpretace 5. Definice, základní činitelé a metody generalizace. Postupy a řešení v klasické a počítačové kartografii. Generalizace prvků obsahu map: topografických, tematických, geografických. 6. Dějiny kartografie, základní přehled vývojových fází ve světě a středoevropském prostoru. 7. Moderní technologie a kartografie: GIS, GNSS, DPZ: základní trendy a poznatky. 8. Úvod do geoinformatiky 9. Teorie prostorové vědy 10. Kartografická vizualizace. 11. Organizace kartografů a uživatelů geografických dat v ČR, Evropě a ve světě (ICA, ISPRS, FIG, EUROGI, AGILE, GISIG, aj.), Globální projekty a úloha kartografie a GIS při jejich řešení. 12. Úloha geografické informace v globální informační společnosti.Kartografie a nová ekonomika. Tržní hodnota kartografických a geografických informací."
      ],
      lessons: [
        {
          "id": "z2062p-1-vymezeni-a-definice-prostorovych-dat-informaci-1",
          "title": "1. Vymezení a definice prostorových dat, informací a znalostí. Vztah k neprostorovým datům a informacím. Terminologické vymezení Kartografie a geoinformatiky. 2. Postavení kartografie v systému věd, vztahy k jiným vědním disciplínám. Definice a předmět výzkumu kartografie. Analogová a digitální kartografie. Vývoj kartografie jako vědy. 3. Konstrukční základy map. Základy matematické kartografie, členění a vlastnosti kartografických zobrazení s důrazem na území České republiky. 4. Kartografické vyjadřovací prostředky. Metody znázorňování obsahu topografických, geografických a tematických map. Anamorfní mapy. Kartografický jazyk. Kartografická interpretace 5. Definice, základní činitelé a metody generalizace. Postupy a řešení v klasické a počítačové kartografii. Generalizace prvků obsahu map: topografických, tematických, geografických. 6. Dějiny kartografie, základní přehled vývojových fází ve světě a středoevropském prostoru. 7. Moderní technologie a kartografie: GIS, GNSS, DPZ: základní trendy a poznatky. 8. Úvod do geoinformatiky 9. Teorie prostorové vědy 10. Kartografická vizualizace. 11. Organizace kartografů a uživatelů geografických dat v ČR, Evropě a ve světě (ICA, ISPRS, FIG, EUROGI, AGILE, GISIG, aj.), Globální projekty a úloha kartografie a GIS při jejich řešení. 12. Úloha geografické informace v globální informační společnosti.Kartografie a nová ekonomika. Tržní hodnota kartografických a geografických informací.",
          "summary": "1. Vymezení a definice prostorových dat, informací a znalostí. Vztah k neprostorovým datům a informacím. Terminologické vymezení Kartogra…",
          "minutes": 25,
          "available": false
        }
      ],
      resources: [
        {
          "kind": "link",
          "title": "IS MUNI — detail předmětu",
          "url": "https://is.muni.cz/predmet/sci/Z2062p",
          "source": "IS MUNI"
        },
        {
          "kind": "link",
          "title": "Studijní plán v IS MUNI",
          "url": "https://is.muni.cz/plan/23634/fyzicka-geografie",
          "source": "IS MUNI"
        },
        {
          "kind": "link",
          "title": "IS MUNI — detail předmětu",
          "url": "https://is.muni.cz/predmet/sci/Z2062p",
          "source": "IS MUNI"
        },
        {
          "kind": "link",
          "title": "Studijní plán v IS MUNI",
          "url": "https://is.muni.cz/plan/23634/fyzicka-geografie",
          "source": "IS MUNI"
        }
      ],
    },
    {
      id: "z2062c",
      code: "PřF:Z2062c",
      title: "Geografická kartografie-cvič",
      garant: "prof. RNDr. Petr Kubíček, CSc.",
      credits: 1,
      semester: "1.",
      completion: "z",
      tags: ["Povinné předměty (oborové)"],
      description: "Cílem předmětu je seznámit studenty praktickými aspekty analogové a digitální kartografie a geoinformatiky.",
      syllabus: [
        "Cvičení probíhají v návaznosti na realizované přednášky: 1. Základní terminologie v oblasti kartografie a geoinformatiky. 2. Úvod do ovládání GIS. 3. Datové modely v geoinformatice a základy editace. 4. Prostorová data a mapové služby. 5. Definice a metody generalizace v GIS. 6. Kompoziční řešení mapových výstupů. 7. Státní mapová díla, systémy kladu listů."
      ],
      lessons: [
        {
          "id": "z2062c-cviceni-probihaji-v-navaznosti-na-realizovane-pr-1",
          "title": "Cvičení probíhají v návaznosti na realizované přednášky: 1. Základní terminologie v oblasti kartografie a geoinformatiky. 2. Úvod do ovládání GIS. 3. Datové modely v geoinformatice a základy editace. 4. Prostorová data a mapové služby. 5. Definice a metody generalizace v GIS. 6. Kompoziční řešení mapových výstupů. 7. Státní mapová díla, systémy kladu listů.",
          "summary": "Cvičení probíhají v návaznosti na realizované přednášky: 1. Základní terminologie v oblasti kartografie a geoinformatiky. 2. Úvod do ovlá…",
          "minutes": 25,
          "available": false
        }
      ],
      resources: [
        {
          "kind": "link",
          "title": "IS MUNI — detail předmětu",
          "url": "https://is.muni.cz/predmet/sci/Z2062c",
          "source": "IS MUNI"
        },
        {
          "kind": "link",
          "title": "Studijní plán v IS MUNI",
          "url": "https://is.muni.cz/plan/23634/fyzicka-geografie",
          "source": "IS MUNI"
        },
        {
          "kind": "link",
          "title": "IS MUNI — detail předmětu",
          "url": "https://is.muni.cz/predmet/sci/Z2062c",
          "source": "IS MUNI"
        },
        {
          "kind": "link",
          "title": "Studijní plán v IS MUNI",
          "url": "https://is.muni.cz/plan/23634/fyzicka-geografie",
          "source": "IS MUNI"
        }
      ],
    },
    {
      id: "z0147",
      code: "PřF:Z0147",
      title: "Základy regionální geografie",
      garant: "Mgr. et Mgr. Marek Lichter, Ph.D.",
      credits: 3,
      semester: "4.",
      completion: "k",
      tags: ["Povinné předměty (oborové)"],
      description: "Hlavní cíle kurzu jsou: rozvíjení navazujících znalostí v teorii regionů a regionalizace; vytvoření základu pro celou skupinu regionálně geografických přednášek k jednotlivým státům a kontinentům; podat náhled na regionální teorii a koncepty regionu; podat přehled praktických aplikací regionálního přístupu.",
      syllabus: [
        "1. úvod do problematiky 2. historický vývoj regionální geografie, její současné postavení v systému (geografických) věd 3. koncept regionu - historie, definice, klasifikace regionů 4. regionální hierarchie 5. regionální taxonomie 6. metody regionální taxonomie"
      ],
      lessons: [
        {
          "id": "z0147-1-uvod-do-problematiky-2-historicky-vyvoj-region-1",
          "title": "1. úvod do problematiky 2. historický vývoj regionální geografie, její současné postavení v systému (geografických) věd 3. koncept regionu - historie, definice, klasifikace regionů 4. regionální hierarchie 5. regionální taxonomie 6. metody regionální taxonomie",
          "summary": "1. úvod do problematiky 2. historický vývoj regionální geografie, její současné postavení v systému (geografických) věd 3. koncept region…",
          "minutes": 25,
          "available": false
        }
      ],
      resources: [
        {
          "kind": "link",
          "title": "IS MUNI — detail předmětu",
          "url": "https://is.muni.cz/predmet/sci/Z0147",
          "source": "IS MUNI"
        },
        {
          "kind": "link",
          "title": "Studijní plán v IS MUNI",
          "url": "https://is.muni.cz/plan/23634/fyzicka-geografie",
          "source": "IS MUNI"
        },
        {
          "kind": "link",
          "title": "IS MUNI — detail předmětu",
          "url": "https://is.muni.cz/predmet/sci/Z0147",
          "source": "IS MUNI"
        },
        {
          "kind": "link",
          "title": "Studijní plán v IS MUNI",
          "url": "https://is.muni.cz/plan/23634/fyzicka-geografie",
          "source": "IS MUNI"
        }
      ],
    },
    {
      id: "z0262",
      code: "PřF:Z0262",
      title: "Geoinformatika",
      garant: "prof. RNDr. Petr Kubíček, CSc.",
      credits: 3,
      semester: "2.",
      completion: "zk",
      tags: ["Povinné předměty (oborové)"],
      description: "Předmět seznamuje studenty s historií vzniku, základními principy a možnostmi využití geografických informačních systémů (GIS). Důraz je kladen na využití GIS v průběhu celého životního cyklu dat od jejich pořizování, přes analýzu, prezentaci až po údržbu. Součástí výuky je praktické zvládnutí SW nástroje pro zpracování a analýzu dat (ArcGIS) a zpracování cvičení s tematikou fyzické i sociální geografie.",
      syllabus: [
        "1. Geoinformatika a geoinformační vědy 2. Historie GIS 3. GIS jako zpracování geodat 4. Složky geometrie - tvar/poloha/topologie 5. Sběr dat 6. Transformace dat - poloha/datový model/formát 7. Geodatabáze 8. GIS dotazování a exploratorní analýza 9. GIS modelování 10. Prezentace dat - kartografická/nekartografická 11. Základní přehled software pro tvorbu GIS"
      ],
      lessons: [
        {
          "id": "z0262-1-geoinformatika-a-geoinformacni-vedy-2-historie-1",
          "title": "1. Geoinformatika a geoinformační vědy 2. Historie GIS 3. GIS jako zpracování geodat 4. Složky geometrie - tvar/poloha/topologie 5. Sběr dat 6. Transformace dat - poloha/datový model/formát 7. Geodatabáze 8. GIS dotazování a exploratorní analýza 9. GIS modelování 10. Prezentace dat - kartografická/nekartografická 11. Základní přehled software pro tvorbu GIS",
          "summary": "1. Geoinformatika a geoinformační vědy 2. Historie GIS 3. GIS jako zpracování geodat 4. Složky geometrie - tvar/poloha/topologie 5. Sběr …",
          "minutes": 25,
          "available": false
        }
      ],
      resources: [
        {
          "kind": "link",
          "title": "IS MUNI — detail předmětu",
          "url": "https://is.muni.cz/predmet/sci/Z0262",
          "source": "IS MUNI"
        },
        {
          "kind": "link",
          "title": "Studijní plán v IS MUNI",
          "url": "https://is.muni.cz/plan/23634/fyzicka-geografie",
          "source": "IS MUNI"
        },
        {
          "kind": "link",
          "title": "IS MUNI — detail předmětu",
          "url": "https://is.muni.cz/predmet/sci/Z0262",
          "source": "IS MUNI"
        },
        {
          "kind": "link",
          "title": "Studijní plán v IS MUNI",
          "url": "https://is.muni.cz/plan/23634/fyzicka-geografie",
          "source": "IS MUNI"
        }
      ],
    },
    {
      id: "z2166",
      code: "PřF:Z2166",
      title: "Ekologie a ochrana přírody",
      garant: "RNDr. Martin Culek, Ph.D.",
      credits: 5,
      semester: "2.",
      completion: "zk",
      tags: ["Povinné předměty (oborové)"],
      description: "Absolvováním předmětu student získá základní informace: O fungování živé složky krajiny ve vztahu k abiotickým činitelům; Nezbytnou součástí studia je schopnost identifikace základních entit krajiny včetně biologických objektů - v rámci tohoto předmětu se studenti naučí poznávat základní dřeviny ČR. Rozšíří si své znalosti o ochraně přírody v ČR a evropské politice.",
      syllabus: [
        "1. Základy Ekologie pro geografy I. - Členění ekologie, ekologická valence, fyziologické a ekologické optimum.",
        "2. Základy ekologie pro geografy II. - ekologické podmínky a faktory: teplota, vláha, světlo, oheň, sůl, pH, atd.",
        "3. Ekosystémy, sukcese.",
        "4. Základy Ekologie krajiny.",
        "5. Vývoj ekosystémů naší krajiny v holocénu.",
        "6. Vegetační stupně střední Evropy.",
        "7. Příklady krajin a jejich krajinoekologických vlastností a problémů.",
        "8. Zákonná ohrana přírody a krajiny, typy chráněných území.",
        "9. Historie ochrany přírody a krajiny v ČR.",
        "Obsah cvičení: Identifikace krajin na základě jejich obrazů.",
        "Pět cvičení je věnováno na půldenní exkurzi do okolí Brna s ukázkami typů krajin, ekosystémů a způsobů jejich obhospodařování. Na exkurzi studenti sami prezentují zadaná témata.",
        "Několik cvičení bude věnováno další preferované problematice a kontrole znalostí, mj. zákona o ochraně přírody a krajiny (114/92 Sb.) atd.",
        "Samostudium: poznávání základních dřevin ČR (ca 54 druhů). Doplňující výklad ke dřevinám během cvičení, průběžné ověřování znalostí dřevin během semestru. Předmětem samostudia bude i část tématiky ochrany přírody a krajiny."
      ],
      lessons: [
        {
          "id": "z2166-1-zaklady-ekologie-pro-geografy-i-cleneni-ekolog-1",
          "title": "1. Základy Ekologie pro geografy I. - Členění ekologie, ekologická valence, fyziologické a ekologické optimum.",
          "summary": "Studijní okruh: 1. Základy Ekologie pro geografy I. - Členění ekologie, ekologická valence, fyziologické a ekologické optimum.",
          "minutes": 20,
          "available": false
        },
        {
          "id": "z2166-2-zaklady-ekologie-pro-geografy-ii-ekologicke-po-2",
          "title": "2. Základy ekologie pro geografy II. - ekologické podmínky a faktory: teplota, vláha, světlo, oheň, sůl, pH, atd.",
          "summary": "Studijní okruh: 2. Základy ekologie pro geografy II. - ekologické podmínky a faktory: teplota, vláha, světlo, oheň, sůl, pH, atd.",
          "minutes": 20,
          "available": false
        },
        {
          "id": "z2166-3-ekosystemy-sukcese-3",
          "title": "3. Ekosystémy, sukcese.",
          "summary": "Studijní okruh: 3. Ekosystémy, sukcese.",
          "minutes": 12,
          "available": false
        },
        {
          "id": "z2166-4-zaklady-ekologie-krajiny-4",
          "title": "4. Základy Ekologie krajiny.",
          "summary": "Studijní okruh: 4. Základy Ekologie krajiny.",
          "minutes": 12,
          "available": false
        },
        {
          "id": "z2166-5-vyvoj-ekosystemu-nasi-krajiny-v-holocenu-5",
          "title": "5. Vývoj ekosystémů naší krajiny v holocénu.",
          "summary": "Studijní okruh: 5. Vývoj ekosystémů naší krajiny v holocénu.",
          "minutes": 12,
          "available": false
        },
        {
          "id": "z2166-6-vegetacni-stupne-stredni-evropy-6",
          "title": "6. Vegetační stupně střední Evropy.",
          "summary": "Studijní okruh: 6. Vegetační stupně střední Evropy.",
          "minutes": 12,
          "available": false
        },
        {
          "id": "z2166-7-priklady-krajin-a-jejich-krajinoekologickych-v-7",
          "title": "7. Příklady krajin a jejich krajinoekologických vlastností a problémů.",
          "summary": "Studijní okruh: 7. Příklady krajin a jejich krajinoekologických vlastností a problémů.",
          "minutes": 15,
          "available": false
        },
        {
          "id": "z2166-8-zakonna-ohrana-prirody-a-krajiny-typy-chraneny-8",
          "title": "8. Zákonná ohrana přírody a krajiny, typy chráněných území.",
          "summary": "Studijní okruh: 8. Zákonná ohrana přírody a krajiny, typy chráněných území.",
          "minutes": 12,
          "available": false
        },
        {
          "id": "z2166-9-historie-ochrany-prirody-a-krajiny-v-cr-9",
          "title": "9. Historie ochrany přírody a krajiny v ČR.",
          "summary": "Studijní okruh: 9. Historie ochrany přírody a krajiny v ČR.",
          "minutes": 12,
          "available": false
        },
        {
          "id": "z2166-obsah-cviceni-identifikace-krajin-na-zaklade-jej-10",
          "title": "Obsah cvičení: Identifikace krajin na základě jejich obrazů.",
          "summary": "Studijní okruh: Obsah cvičení: Identifikace krajin na základě jejich obrazů.",
          "minutes": 12,
          "available": false
        },
        {
          "id": "z2166-pet-cviceni-je-venovano-na-puldenni-exkurzi-do-o-11",
          "title": "Pět cvičení je věnováno na půldenní exkurzi do okolí Brna s ukázkami typů krajin, ekosystémů a způsobů jejich obhospodařování. Na exkurzi studenti sami prezentují zadaná témata.",
          "summary": "Pět cvičení je věnováno na půldenní exkurzi do okolí Brna s ukázkami typů krajin, ekosystémů a způsobů jejich obhospodařování. Na exkurzi…",
          "minutes": 20,
          "available": false
        },
        {
          "id": "z2166-nekolik-cviceni-bude-venovano-dalsi-preferovane-12",
          "title": "Několik cvičení bude věnováno další preferované problematice a kontrole znalostí, mj. zákona o ochraně přírody a krajiny (114/92 Sb.) atd.",
          "summary": "Studijní okruh: Několik cvičení bude věnováno další preferované problematice a kontrole znalostí, mj. zákona o ochraně přírody a krajiny (114/92 Sb.) atd.",
          "minutes": 20,
          "available": false
        },
        {
          "id": "z2166-samostudium-poznavani-zakladnich-drevin-cr-ca-54-13",
          "title": "Samostudium: poznávání základních dřevin ČR (ca 54 druhů). Doplňující výklad ke dřevinám během cvičení, průběžné ověřování znalostí dřevin během semestru. Předmětem samostudia bude i část tématiky ochrany přírody a krajiny.",
          "summary": "Samostudium: poznávání základních dřevin ČR (ca 54 druhů). Doplňující výklad ke dřevinám během cvičení, průběžné ověřování znalostí dřevi…",
          "minutes": 25,
          "available": false
        }
      ],
      resources: [
        {
          "kind": "link",
          "title": "IS MUNI — detail předmětu",
          "url": "https://is.muni.cz/predmet/sci/Z2166",
          "source": "IS MUNI"
        },
        {
          "kind": "link",
          "title": "Studijní plán v IS MUNI",
          "url": "https://is.muni.cz/plan/23634/fyzicka-geografie",
          "source": "IS MUNI"
        },
        {
          "kind": "link",
          "title": "IS MUNI — detail předmětu",
          "url": "https://is.muni.cz/predmet/sci/Z2166",
          "source": "IS MUNI"
        },
        {
          "kind": "link",
          "title": "Studijní plán v IS MUNI",
          "url": "https://is.muni.cz/plan/23634/fyzicka-geografie",
          "source": "IS MUNI"
        }
      ],
    },
    {
      id: "z2111",
      code: "PřF:Z2111",
      title: "Metody fg. geogr. výzkumu",
      garant: "Mgr. Monika Šulc Michalková, Ph.D. et Ph.D.",
      credits: 3,
      semester: "2.",
      completion: "k",
      tags: ["Povinné předměty (oborové)"],
      description: "Hlavní cíle kurzu jsou:\nseznámit studenty se základními metodami a technikami fyzickogeografického výzkumu;\npodat přehled zdrojů fyzickogeografických dat;\nseznámit studenty s formálními náležitosmi vědecké práce v geografii.",
      syllabus: [
        "1. Hlavní cíle výzkumu a rozdělení metod. FG komplexy a dimenze jako základní jednotky pro FG mapování;",
        "2. Průzkum a výzkum. Prostorové a časové měřítko zkoumaného objektu či jevu. Stacionární, polostacionární a jednorázový výzkum;",
        "3. Geomorfologické mapování. Terénní průzkum a výzkum ve FG;",
        "4. Komplexní FG mapování;",
        "5. Kartografické postupy v geogr. výzkumu;",
        "6. Metody GIS ve fyzické geografii;",
        "7. Přístrojové měření ve FG;",
        "8. Metody zpracování naměřených dat;",
        "9. Laboratorní a kabinetní výzkum;",
        "10. Modely ve fyzické geografii;",
        "11. FG pracoviště v ČR a jejich nejnovější publikované výsledky a metodiky. Jak připravit vlastní data k publikaci a prezentovat výsledky?",
        "12. Případové studie, ukázky různých aktuálně aplikovaných metod v rámci Geografického ústavu."
      ],
      lessons: [
        {
          "id": "z2111-1-hlavni-cile-vyzkumu-a-rozdeleni-metod-fg-kompl-1",
          "title": "1. Hlavní cíle výzkumu a rozdělení metod. FG komplexy a dimenze jako základní jednotky pro FG mapování;",
          "summary": "Studijní okruh: 1. Hlavní cíle výzkumu a rozdělení metod. FG komplexy a dimenze jako základní jednotky pro FG mapování;",
          "minutes": 20,
          "available": false
        },
        {
          "id": "z2111-2-pruzkum-a-vyzkum-prostorove-a-casove-meritko-z-2",
          "title": "2. Průzkum a výzkum. Prostorové a časové měřítko zkoumaného objektu či jevu. Stacionární, polostacionární a jednorázový výzkum;",
          "summary": "Studijní okruh: 2. Průzkum a výzkum. Prostorové a časové měřítko zkoumaného objektu či jevu. Stacionární, polostacionární a jednorázový výzkum;",
          "minutes": 20,
          "available": false
        },
        {
          "id": "z2111-3-geomorfologicke-mapovani-terenni-pruzkum-a-vyz-3",
          "title": "3. Geomorfologické mapování. Terénní průzkum a výzkum ve FG;",
          "summary": "Studijní okruh: 3. Geomorfologické mapování. Terénní průzkum a výzkum ve FG;",
          "minutes": 12,
          "available": false
        },
        {
          "id": "z2111-4-komplexni-fg-mapovani-4",
          "title": "4. Komplexní FG mapování;",
          "summary": "Studijní okruh: 4. Komplexní FG mapování;",
          "minutes": 12,
          "available": false
        },
        {
          "id": "z2111-5-kartograficke-postupy-v-geogr-vyzkumu-5",
          "title": "5. Kartografické postupy v geogr. výzkumu;",
          "summary": "Studijní okruh: 5. Kartografické postupy v geogr. výzkumu;",
          "minutes": 12,
          "available": false
        },
        {
          "id": "z2111-6-metody-gis-ve-fyzicke-geografii-6",
          "title": "6. Metody GIS ve fyzické geografii;",
          "summary": "Studijní okruh: 6. Metody GIS ve fyzické geografii;",
          "minutes": 12,
          "available": false
        },
        {
          "id": "z2111-7-pristrojove-mereni-ve-fg-7",
          "title": "7. Přístrojové měření ve FG;",
          "summary": "Studijní okruh: 7. Přístrojové měření ve FG;",
          "minutes": 12,
          "available": false
        },
        {
          "id": "z2111-8-metody-zpracovani-namerenych-dat-8",
          "title": "8. Metody zpracování naměřených dat;",
          "summary": "Studijní okruh: 8. Metody zpracování naměřených dat;",
          "minutes": 12,
          "available": false
        },
        {
          "id": "z2111-9-laboratorni-a-kabinetni-vyzkum-9",
          "title": "9. Laboratorní a kabinetní výzkum;",
          "summary": "Studijní okruh: 9. Laboratorní a kabinetní výzkum;",
          "minutes": 12,
          "available": false
        },
        {
          "id": "z2111-10-modely-ve-fyzicke-geografii-10",
          "title": "10. Modely ve fyzické geografii;",
          "summary": "Studijní okruh: 10. Modely ve fyzické geografii;",
          "minutes": 12,
          "available": false
        },
        {
          "id": "z2111-11-fg-pracoviste-v-cr-a-jejich-nejnovejsi-publik-11",
          "title": "11. FG pracoviště v ČR a jejich nejnovější publikované výsledky a metodiky. Jak připravit vlastní data k publikaci a prezentovat výsledky?",
          "summary": "Studijní okruh: 11. FG pracoviště v ČR a jejich nejnovější publikované výsledky a metodiky. Jak připravit vlastní data k publikaci a prezentovat výsledky?",
          "minutes": 20,
          "available": false
        },
        {
          "id": "z2111-12-pripadove-studie-ukazky-ruznych-aktualne-apli-12",
          "title": "12. Případové studie, ukázky různých aktuálně aplikovaných metod v rámci Geografického ústavu.",
          "summary": "Studijní okruh: 12. Případové studie, ukázky různých aktuálně aplikovaných metod v rámci Geografického ústavu.",
          "minutes": 15,
          "available": false
        }
      ],
      resources: [
        {
          "kind": "link",
          "title": "IS MUNI — detail předmětu",
          "url": "https://is.muni.cz/predmet/sci/Z2111",
          "source": "IS MUNI"
        },
        {
          "kind": "link",
          "title": "Studijní plán v IS MUNI",
          "url": "https://is.muni.cz/plan/23634/fyzicka-geografie",
          "source": "IS MUNI"
        },
        {
          "kind": "link",
          "title": "IS MUNI — detail předmětu",
          "url": "https://is.muni.cz/predmet/sci/Z2111",
          "source": "IS MUNI"
        },
        {
          "kind": "link",
          "title": "Studijní plán v IS MUNI",
          "url": "https://is.muni.cz/plan/23634/fyzicka-geografie",
          "source": "IS MUNI"
        }
      ],
    },
    {
      id: "z2211",
      code: "PřF:Z2211",
      title: "Metody SG výzkumu",
      garant: "doc. Mgr. Ondřej Mulíček, Ph.D.",
      credits: 3,
      semester: "2.",
      completion: "k",
      tags: ["Povinné předměty (oborové)"],
      description: "Hlavní cíle kurzu jsou:\n- seznámit studenty se základními metodami a technikami sociálně -geografického výzkumu;\n- rozlišit kvantitativní a kvalitativní metodologii\n- podat přehled zdrojů geografických dat;\n- seznámit studenty s formálními náležitostmi vědecké práce v geografii.",
      syllabus: [
        "1. Obecná metodologie vědy v sociální geografii, role epistemologie v geografickém výzkumu",
        "2. Základní pojmy, typologie výzkumu, způsoby vědecké práce, indukce, dedukce, abdukce",
        "3. Rozdíly mezi kvantitativní a kvalitativní metodologií",
        "4. Konstrukce dat a vzorku (sampling), reliabilita a validita",
        "5. Data v kvantitativním výzkumu, zdroje sekundárních dat a jejich prostorové přiřazení",
        "6. Dotazníkové šetření",
        "7. Analýza a interpretace kvantitativních dat",
        "8. Volba vhodného designu výzkumu",
        "9. Výzkumná otázka, její role a funkce ve výzkumu",
        "10. Data v kvalitativním výzkumu, zdroje primárních dat",
        "11. Práce s texty v sociální geografii",
        "12. Etika výzkumu"
      ],
      lessons: [
        {
          "id": "z2211-1-obecna-metodologie-vedy-v-socialni-geografii-r-1",
          "title": "1. Obecná metodologie vědy v sociální geografii, role epistemologie v geografickém výzkumu",
          "summary": "Studijní okruh: 1. Obecná metodologie vědy v sociální geografii, role epistemologie v geografickém výzkumu",
          "minutes": 15,
          "available": false
        },
        {
          "id": "z2211-2-zakladni-pojmy-typologie-vyzkumu-zpusoby-vedec-2",
          "title": "2. Základní pojmy, typologie výzkumu, způsoby vědecké práce, indukce, dedukce, abdukce",
          "summary": "Studijní okruh: 2. Základní pojmy, typologie výzkumu, způsoby vědecké práce, indukce, dedukce, abdukce",
          "minutes": 15,
          "available": false
        },
        {
          "id": "z2211-3-rozdily-mezi-kvantitativni-a-kvalitativni-meto-3",
          "title": "3. Rozdíly mezi kvantitativní a kvalitativní metodologií",
          "summary": "Studijní okruh: 3. Rozdíly mezi kvantitativní a kvalitativní metodologií",
          "minutes": 12,
          "available": false
        },
        {
          "id": "z2211-4-konstrukce-dat-a-vzorku-sampling-reliabilita-a-4",
          "title": "4. Konstrukce dat a vzorku (sampling), reliabilita a validita",
          "summary": "Studijní okruh: 4. Konstrukce dat a vzorku (sampling), reliabilita a validita",
          "minutes": 15,
          "available": false
        },
        {
          "id": "z2211-5-data-v-kvantitativnim-vyzkumu-zdroje-sekundarn-5",
          "title": "5. Data v kvantitativním výzkumu, zdroje sekundárních dat a jejich prostorové přiřazení",
          "summary": "Studijní okruh: 5. Data v kvantitativním výzkumu, zdroje sekundárních dat a jejich prostorové přiřazení",
          "minutes": 15,
          "available": false
        },
        {
          "id": "z2211-6-dotaznikove-setreni-6",
          "title": "6. Dotazníkové šetření",
          "summary": "Studijní okruh: 6. Dotazníkové šetření",
          "minutes": 12,
          "available": false
        },
        {
          "id": "z2211-7-analyza-a-interpretace-kvantitativnich-dat-7",
          "title": "7. Analýza a interpretace kvantitativních dat",
          "summary": "Studijní okruh: 7. Analýza a interpretace kvantitativních dat",
          "minutes": 12,
          "available": false
        },
        {
          "id": "z2211-8-volba-vhodneho-designu-vyzkumu-8",
          "title": "8. Volba vhodného designu výzkumu",
          "summary": "Studijní okruh: 8. Volba vhodného designu výzkumu",
          "minutes": 12,
          "available": false
        },
        {
          "id": "z2211-9-vyzkumna-otazka-jeji-role-a-funkce-ve-vyzkumu-9",
          "title": "9. Výzkumná otázka, její role a funkce ve výzkumu",
          "summary": "Studijní okruh: 9. Výzkumná otázka, její role a funkce ve výzkumu",
          "minutes": 12,
          "available": false
        },
        {
          "id": "z2211-10-data-v-kvalitativnim-vyzkumu-zdroje-primarnic-10",
          "title": "10. Data v kvalitativním výzkumu, zdroje primárních dat",
          "summary": "Studijní okruh: 10. Data v kvalitativním výzkumu, zdroje primárních dat",
          "minutes": 12,
          "available": false
        },
        {
          "id": "z2211-11-prace-s-texty-v-socialni-geografii-11",
          "title": "11. Práce s texty v sociální geografii",
          "summary": "Studijní okruh: 11. Práce s texty v sociální geografii",
          "minutes": 12,
          "available": false
        },
        {
          "id": "z2211-12-etika-vyzkumu-12",
          "title": "12. Etika výzkumu",
          "summary": "Studijní okruh: 12. Etika výzkumu",
          "minutes": 12,
          "available": false
        }
      ],
      resources: [
        {
          "kind": "link",
          "title": "IS MUNI — detail předmětu",
          "url": "https://is.muni.cz/predmet/sci/Z2211",
          "source": "IS MUNI"
        },
        {
          "kind": "link",
          "title": "Studijní plán v IS MUNI",
          "url": "https://is.muni.cz/plan/23634/fyzicka-geografie",
          "source": "IS MUNI"
        },
        {
          "kind": "link",
          "title": "IS MUNI — detail předmětu",
          "url": "https://is.muni.cz/predmet/sci/Z2211",
          "source": "IS MUNI"
        },
        {
          "kind": "link",
          "title": "Studijní plán v IS MUNI",
          "url": "https://is.muni.cz/plan/23634/fyzicka-geografie",
          "source": "IS MUNI"
        }
      ],
    },
    {
      id: "z2069",
      code: "PřF:Z2069",
      title: "Stat. metody a zprac dat 2",
      garant: "Mgr. Ladislava Řezníčková, Ph.D.",
      credits: 3,
      semester: "2.",
      completion: "z",
      tags: ["Povinné předměty (oborové)"],
      description: "Hlavním cílem předmětu je dát studentům především základní informace a praktické dovednosti použití základních metod popisné statistiky v geografii. Na konci tohoto kurzu bude student schopen porozumět a vysvětlit podstatu základních statistických metod vysvětlených v jednotlivých lekcích. Bude schopen vysvětlit, kdy použít jednotlivé metody a předkládat racionální odůvodnění o podmínkách využití statistických metod. Měl by být schopen kvalifikovaných rozhodnutí týkajících se přípravy dat, aplikací metod a především na základě nabytých znalostí interpretovat výsledky.",
      syllabus: [
        "Analýza rozptylu I. – základní pojmy, ANOVA při jednoduchém třídění",
        "Analýza rozptylu II. – ANOVA při dvojném třídění, mnohonásobná porovnávání",
        "Neparametrická statistika – testy dobré shody, neparametrická ANOVA",
        "Analýza časových řad I. – identifikace jednotlivých složek, autokorelace",
        "Analýza časových řad II. – analýza trendu, sezónní rozklad",
        "Analýza časových řad III. – úvod do spektrální analýzy",
        "Úvod do vícerozměrných metod, analýza hlavních komponent",
        "Shluková analýza, klasifikační algoritmy",
        "Principy statistické analýzy prostorově lokalizovaných dat"
      ],
      lessons: [
        {
          "id": "z2069-analyza-rozptylu-i-zakladni-pojmy-anova-pri-jedn-1",
          "title": "Analýza rozptylu I. – základní pojmy, ANOVA při jednoduchém třídění",
          "summary": "Studijní okruh: Analýza rozptylu I. – základní pojmy, ANOVA při jednoduchém třídění",
          "minutes": 15,
          "available": false
        },
        {
          "id": "z2069-analyza-rozptylu-ii-anova-pri-dvojnem-trideni-mn-2",
          "title": "Analýza rozptylu II. – ANOVA při dvojném třídění, mnohonásobná porovnávání",
          "summary": "Studijní okruh: Analýza rozptylu II. – ANOVA při dvojném třídění, mnohonásobná porovnávání",
          "minutes": 15,
          "available": false
        },
        {
          "id": "z2069-neparametricka-statistika-testy-dobre-shody-nepa-3",
          "title": "Neparametrická statistika – testy dobré shody, neparametrická ANOVA",
          "summary": "Studijní okruh: Neparametrická statistika – testy dobré shody, neparametrická ANOVA",
          "minutes": 15,
          "available": false
        },
        {
          "id": "z2069-analyza-casovych-rad-i-identifikace-jednotlivych-4",
          "title": "Analýza časových řad I. – identifikace jednotlivých složek, autokorelace",
          "summary": "Studijní okruh: Analýza časových řad I. – identifikace jednotlivých složek, autokorelace",
          "minutes": 15,
          "available": false
        },
        {
          "id": "z2069-analyza-casovych-rad-ii-analyza-trendu-sezonni-r-5",
          "title": "Analýza časových řad II. – analýza trendu, sezónní rozklad",
          "summary": "Studijní okruh: Analýza časových řad II. – analýza trendu, sezónní rozklad",
          "minutes": 12,
          "available": false
        },
        {
          "id": "z2069-analyza-casovych-rad-iii-uvod-do-spektralni-anal-6",
          "title": "Analýza časových řad III. – úvod do spektrální analýzy",
          "summary": "Studijní okruh: Analýza časových řad III. – úvod do spektrální analýzy",
          "minutes": 12,
          "available": false
        },
        {
          "id": "z2069-uvod-do-vicerozmernych-metod-analyza-hlavnich-ko-7",
          "title": "Úvod do vícerozměrných metod, analýza hlavních komponent",
          "summary": "Studijní okruh: Úvod do vícerozměrných metod, analýza hlavních komponent",
          "minutes": 12,
          "available": false
        },
        {
          "id": "z2069-shlukova-analyza-klasifikacni-algoritmy-8",
          "title": "Shluková analýza, klasifikační algoritmy",
          "summary": "Studijní okruh: Shluková analýza, klasifikační algoritmy",
          "minutes": 12,
          "available": false
        },
        {
          "id": "z2069-principy-statisticke-analyzy-prostorove-lokalizo-9",
          "title": "Principy statistické analýzy prostorově lokalizovaných dat",
          "summary": "Studijní okruh: Principy statistické analýzy prostorově lokalizovaných dat",
          "minutes": 12,
          "available": false
        }
      ],
      resources: [
        {
          "kind": "link",
          "title": "IS MUNI — detail předmětu",
          "url": "https://is.muni.cz/predmet/sci/Z2069",
          "source": "IS MUNI"
        },
        {
          "kind": "link",
          "title": "Studijní plán v IS MUNI",
          "url": "https://is.muni.cz/plan/23634/fyzicka-geografie",
          "source": "IS MUNI"
        },
        {
          "kind": "link",
          "title": "IS MUNI — detail předmětu",
          "url": "https://is.muni.cz/predmet/sci/Z2069",
          "source": "IS MUNI"
        },
        {
          "kind": "link",
          "title": "Studijní plán v IS MUNI",
          "url": "https://is.muni.cz/plan/23634/fyzicka-geografie",
          "source": "IS MUNI"
        }
      ],
    },
    {
      id: "z2012",
      code: "PřF:Z2012",
      title: "Geografie ČR",
      garant: "RNDr. Ondřej Šerý, Ph.D.",
      credits: 8,
      semester: "2.",
      completion: "zk",
      tags: ["Povinné předměty (oborové)"],
      description: "Cílem předmětu je představit Českou republiku jako geografický region. Vedle fyzickogeografického pohledu bude představen i sociální a ekonomický profil České republiky a jejich regionů.",
      syllabus: [
        "část I - Fyzická geografie",
        "1. Úvod. Geografická poloha ČR a její vliv na přírodní poměry. Základní kartometrické údaje.",
        "2. Reliéf ČR. Geologický vývoj a stavba našeho území. Geomorfologický vývoj České vysočiny a Západních Karpat. Geomorfologická regionalizace a charakteristika jednotlivých geomorfologických celků.",
        "3. Podnebí ČR. Vliv geografických faktorů na klima. Chod klimatických prvků: teplota vzduchu, atmosférické srážky, vlhkost vzduchu, výpar, oblačnost, sluneční svit, vítr. Průběh počasí za typických povětrnostních situací. Kolísání klimatu. Klimatické klasifikace a klimatogeografická členění ČR.",
        "4. Vodstvo ČR. Povrchové vody tekoucí - rozdíly v utváření odtoku v hlavních povodích ČR, hydrografické charakteristiky povodí a řek, jejich režim, řeky České republiky. Povrchové vody stojaté - jezera, rybníky, údolní nádrže. Podpovrchové vody - prosté podzemní vody, minerální vody, jejich význam a rozšíření. Hydrogeografické a hydrologické regionalizace ČR.",
        "5. Půdní pokryv ČR. Půdotvorní činitelé, charakteristika a přehled půd a půdního pokryvu ČR. Půdní fond - současný stav, využívání, ochrana. Eroze půdy. Pedogeografické regiony ČR.",
        "6. Biota ČR. Vývoj bioty. Prostorové rozšíření vegetačních stupňů a jejich specifické vlastnosti. Lesy a jejich funkce v krajině ČR. Biogeografická regionalizace a bioregiony.",
        "7. Krajina ČR. Přírodní krajiny ČR a jejich charakteristika. Typy kulturních krajin. Ochrana přírody a krajiny.",
        "část II - Humánní geografie",
        "1. Obyvatelstvo České republiky. Vývoj hlavních populačních trendů, mobilita obyvatelstva. Struktura populace (věková struktura, národnostní složení, ekonomická aktivita, sociální struktura).",
        "2. Systém osídleni ČR. Vývoj osídlení a jeho typologie. Města a jejich vývoj, charakter urbanizačních procesů. Venkovské osídlení, základní charakteristiky a jeho vývoj.",
        "3. Hospodářství České republiky, zvláštnosti historického vývoje, zvláště po roce 1945. Základní charakteristiky územní struktury národní ekonomiky. Přírodní zdroje a nerostné suroviny.",
        "4. Průmysl ČR. Podmínky lokalizace průmyslové výroby, historické zvláštnosti jednotlivých odvětví. Geografická regionalizace průmyslu ČR.",
        "5. Zemědělství České republiky, přírodní podmínky a předpoklady. Ekonomické podmínky zemědělství ČR a historický vývoj. Rostlinná výroba, živočišná výroba. Regionální specializace a diferenciace zemědělství. Lesní hospodářství a vodní zdroje.",
        "6. Doprava v ČR a její regionální diference.",
        "7. Cestovní ruch a rekreace, služby, zahraniční obchod, regionální diference.",
        "8. Sociálně-geografické regiony ČR"
      ],
      lessons: [
        {
          "id": "z2012-cast-i-fyzicka-geografie-1",
          "title": "část I - Fyzická geografie",
          "summary": "Studijní okruh: část I - Fyzická geografie",
          "minutes": 12,
          "available": false
        },
        {
          "id": "z2012-1-uvod-geograficka-poloha-cr-a-jeji-vliv-na-prir-2",
          "title": "1. Úvod. Geografická poloha ČR a její vliv na přírodní poměry. Základní kartometrické údaje.",
          "summary": "Studijní okruh: 1. Úvod. Geografická poloha ČR a její vliv na přírodní poměry. Základní kartometrické údaje.",
          "minutes": 15,
          "available": false
        },
        {
          "id": "z2012-2-relief-cr-geologicky-vyvoj-a-stavba-naseho-uze-3",
          "title": "2. Reliéf ČR. Geologický vývoj a stavba našeho území. Geomorfologický vývoj České vysočiny a Západních Karpat. Geomorfologická regionalizace a charakteristika jednotlivých geomorfologických celků.",
          "summary": "2. Reliéf ČR. Geologický vývoj a stavba našeho území. Geomorfologický vývoj České vysočiny a Západních Karpat. Geomorfologická regionaliz…",
          "minutes": 25,
          "available": false
        },
        {
          "id": "z2012-3-podnebi-cr-vliv-geografickych-faktoru-na-klima-4",
          "title": "3. Podnebí ČR. Vliv geografických faktorů na klima. Chod klimatických prvků: teplota vzduchu, atmosférické srážky, vlhkost vzduchu, výpar, oblačnost, sluneční svit, vítr. Průběh počasí za typických povětrnostních situací. Kolísání klimatu. Klimatické klasifikace a klimatogeografická členění ČR.",
          "summary": "3. Podnebí ČR. Vliv geografických faktorů na klima. Chod klimatických prvků: teplota vzduchu, atmosférické srážky, vlhkost vzduchu, výpar…",
          "minutes": 25,
          "available": false
        },
        {
          "id": "z2012-4-vodstvo-cr-povrchove-vody-tekouci-rozdily-v-ut-5",
          "title": "4. Vodstvo ČR. Povrchové vody tekoucí - rozdíly v utváření odtoku v hlavních povodích ČR, hydrografické charakteristiky povodí a řek, jejich režim, řeky České republiky. Povrchové vody stojaté - jezera, rybníky, údolní nádrže. Podpovrchové vody - prosté podzemní vody, minerální vody, jejich význam a rozšíření. Hydrogeografické a hydrologické regionalizace ČR.",
          "summary": "4. Vodstvo ČR. Povrchové vody tekoucí - rozdíly v utváření odtoku v hlavních povodích ČR, hydrografické charakteristiky povodí a řek, jej…",
          "minutes": 25,
          "available": false
        },
        {
          "id": "z2012-5-pudni-pokryv-cr-pudotvorni-cinitele-charakteri-6",
          "title": "5. Půdní pokryv ČR. Půdotvorní činitelé, charakteristika a přehled půd a půdního pokryvu ČR. Půdní fond - současný stav, využívání, ochrana. Eroze půdy. Pedogeografické regiony ČR.",
          "summary": "5. Půdní pokryv ČR. Půdotvorní činitelé, charakteristika a přehled půd a půdního pokryvu ČR. Půdní fond - současný stav, využívání, ochra…",
          "minutes": 20,
          "available": false
        },
        {
          "id": "z2012-6-biota-cr-vyvoj-bioty-prostorove-rozsireni-vege-7",
          "title": "6. Biota ČR. Vývoj bioty. Prostorové rozšíření vegetačních stupňů a jejich specifické vlastnosti. Lesy a jejich funkce v krajině ČR. Biogeografická regionalizace a bioregiony.",
          "summary": "6. Biota ČR. Vývoj bioty. Prostorové rozšíření vegetačních stupňů a jejich specifické vlastnosti. Lesy a jejich funkce v krajině ČR. Biog…",
          "minutes": 20,
          "available": false
        },
        {
          "id": "z2012-7-krajina-cr-prirodni-krajiny-cr-a-jejich-charak-8",
          "title": "7. Krajina ČR. Přírodní krajiny ČR a jejich charakteristika. Typy kulturních krajin. Ochrana přírody a krajiny.",
          "summary": "Studijní okruh: 7. Krajina ČR. Přírodní krajiny ČR a jejich charakteristika. Typy kulturních krajin. Ochrana přírody a krajiny.",
          "minutes": 20,
          "available": false
        },
        {
          "id": "z2012-cast-ii-humanni-geografie-9",
          "title": "část II - Humánní geografie",
          "summary": "Studijní okruh: část II - Humánní geografie",
          "minutes": 12,
          "available": false
        },
        {
          "id": "z2012-1-obyvatelstvo-ceske-republiky-vyvoj-hlavnich-po-10",
          "title": "1. Obyvatelstvo České republiky. Vývoj hlavních populačních trendů, mobilita obyvatelstva. Struktura populace (věková struktura, národnostní složení, ekonomická aktivita, sociální struktura).",
          "summary": "1. Obyvatelstvo České republiky. Vývoj hlavních populačních trendů, mobilita obyvatelstva. Struktura populace (věková struktura, národnos…",
          "minutes": 25,
          "available": false
        },
        {
          "id": "z2012-2-system-osidleni-cr-vyvoj-osidleni-a-jeho-typol-11",
          "title": "2. Systém osídleni ČR. Vývoj osídlení a jeho typologie. Města a jejich vývoj, charakter urbanizačních procesů. Venkovské osídlení, základní charakteristiky a jeho vývoj.",
          "summary": "2. Systém osídleni ČR. Vývoj osídlení a jeho typologie. Města a jejich vývoj, charakter urbanizačních procesů. Venkovské osídlení, základ…",
          "minutes": 20,
          "available": false
        },
        {
          "id": "z2012-3-hospodarstvi-ceske-republiky-zvlastnosti-histo-12",
          "title": "3. Hospodářství České republiky, zvláštnosti historického vývoje, zvláště po roce 1945. Základní charakteristiky územní struktury národní ekonomiky. Přírodní zdroje a nerostné suroviny.",
          "summary": "3. Hospodářství České republiky, zvláštnosti historického vývoje, zvláště po roce 1945. Základní charakteristiky územní struktury národní…",
          "minutes": 25,
          "available": false
        },
        {
          "id": "z2012-4-prumysl-cr-podminky-lokalizace-prumyslove-vyro-13",
          "title": "4. Průmysl ČR. Podmínky lokalizace průmyslové výroby, historické zvláštnosti jednotlivých odvětví. Geografická regionalizace průmyslu ČR.",
          "summary": "Studijní okruh: 4. Průmysl ČR. Podmínky lokalizace průmyslové výroby, historické zvláštnosti jednotlivých odvětví. Geografická regionalizace průmyslu ČR.",
          "minutes": 20,
          "available": false
        },
        {
          "id": "z2012-5-zemedelstvi-ceske-republiky-prirodni-podminky-14",
          "title": "5. Zemědělství České republiky, přírodní podmínky a předpoklady. Ekonomické podmínky zemědělství ČR a historický vývoj. Rostlinná výroba, živočišná výroba. Regionální specializace a diferenciace zemědělství. Lesní hospodářství a vodní zdroje.",
          "summary": "5. Zemědělství České republiky, přírodní podmínky a předpoklady. Ekonomické podmínky zemědělství ČR a historický vývoj. Rostlinná výroba,…",
          "minutes": 25,
          "available": false
        },
        {
          "id": "z2012-6-doprava-v-cr-a-jeji-regionalni-diference-15",
          "title": "6. Doprava v ČR a její regionální diference.",
          "summary": "Studijní okruh: 6. Doprava v ČR a její regionální diference.",
          "minutes": 12,
          "available": false
        },
        {
          "id": "z2012-7-cestovni-ruch-a-rekreace-sluzby-zahranicni-obc-16",
          "title": "7. Cestovní ruch a rekreace, služby, zahraniční obchod, regionální diference.",
          "summary": "Studijní okruh: 7. Cestovní ruch a rekreace, služby, zahraniční obchod, regionální diference.",
          "minutes": 15,
          "available": false
        },
        {
          "id": "z2012-8-socialne-geograficke-regiony-cr-17",
          "title": "8. Sociálně-geografické regiony ČR",
          "summary": "Studijní okruh: 8. Sociálně-geografické regiony ČR",
          "minutes": 12,
          "available": false
        }
      ],
      resources: [
        {
          "kind": "link",
          "title": "IS MUNI — detail předmětu",
          "url": "https://is.muni.cz/predmet/sci/Z2012",
          "source": "IS MUNI"
        },
        {
          "kind": "link",
          "title": "Studijní plán v IS MUNI",
          "url": "https://is.muni.cz/plan/23634/fyzicka-geografie",
          "source": "IS MUNI"
        },
        {
          "kind": "link",
          "title": "IS MUNI — detail předmětu",
          "url": "https://is.muni.cz/predmet/sci/Z2012",
          "source": "IS MUNI"
        },
        {
          "kind": "link",
          "title": "Studijní plán v IS MUNI",
          "url": "https://is.muni.cz/plan/23634/fyzicka-geografie",
          "source": "IS MUNI"
        }
      ],
    },
    {
      id: "z3104",
      code: "PřF:Z3104",
      title: "Geodatabáze",
      garant: "Mgr. Karel Staněk, Ph.D.",
      credits: 3,
      semester: "3.",
      completion: "z",
      tags: ["Povinné předměty (oborové)"],
      description: "Hlavní cíle kursu jsou: seznámit se se základy databází jako jádra geoinformačních systémů. osvojit si dotazovací a definiční jazyk SQL u relačních a postrelačních databází získat přehled způsobů manipulace s prostorovými daty ve výše zmíněných databázích. získat přehled o dokumentově orientovaných databázích",
      syllabus: [
        "1. Základni databázové modely 2. Principy relačních a post-relačních databází 3. Návrh relační databáze (Chenův diagram, datové typy, klíče, normální formy) 4. Definiční část dotazovacího jazyka SQL 5. Dotazovací část SQL - úvod 6. Dotazovací část SQL - funkce a agregace 7. Dotazovací část SQL - theta spojení 8. Dokumentově orientované databáze 9. Dotazovací jazyky pro dokumentově orientované databáze 10. Manipulace s prostorovými daty v databázích 11. Počítačová gramotnost - Sitě a internet 12. Počítačová gramotnost - Počítačová bezpečnost 13. Počítačová gramotnost - Právní aspekty Osnova cvičení 1. Vytvoření databáze, její obsluha 2. Tvorba databáze 3. Příkaz INSERT 4. UPDATE, Constrains a ALTER TABLE 5. Základy dotazování v jazyce SQL 6. Příkazy GROUP BY a Agregační funkce 7. Výběry z více tabulek I. 8. Výběry z více tabulek II. 9. Vnořené dotazy 10. Návrh databáze"
      ],
      lessons: [
        {
          "id": "z3104-1-zakladni-databazove-modely-2-principy-relacnic-1",
          "title": "1. Základni databázové modely 2. Principy relačních a post-relačních databází 3. Návrh relační databáze (Chenův diagram, datové typy, klíče, normální formy) 4. Definiční část dotazovacího jazyka SQL 5. Dotazovací část SQL - úvod 6. Dotazovací část SQL - funkce a agregace 7. Dotazovací část SQL - theta spojení 8. Dokumentově orientované databáze 9. Dotazovací jazyky pro dokumentově orientované databáze 10. Manipulace s prostorovými daty v databázích 11. Počítačová gramotnost - Sitě a internet 12. Počítačová gramotnost - Počítačová bezpečnost 13. Počítačová gramotnost - Právní aspekty Osnova cvičení 1. Vytvoření databáze, její obsluha 2. Tvorba databáze 3. Příkaz INSERT 4. UPDATE, Constrains a ALTER TABLE 5. Základy dotazování v jazyce SQL 6. Příkazy GROUP BY a Agregační funkce 7. Výběry z více tabulek I. 8. Výběry z více tabulek II. 9. Vnořené dotazy 10. Návrh databáze",
          "summary": "1. Základni databázové modely 2. Principy relačních a post-relačních databází 3. Návrh relační databáze (Chenův diagram, datové typy, klí…",
          "minutes": 25,
          "available": false
        }
      ],
      resources: [
        {
          "kind": "link",
          "title": "IS MUNI — detail předmětu",
          "url": "https://is.muni.cz/predmet/sci/Z3104",
          "source": "IS MUNI"
        },
        {
          "kind": "link",
          "title": "Studijní plán v IS MUNI",
          "url": "https://is.muni.cz/plan/23634/fyzicka-geografie",
          "source": "IS MUNI"
        },
        {
          "kind": "link",
          "title": "IS MUNI — detail předmětu",
          "url": "https://is.muni.cz/predmet/sci/Z3104",
          "source": "IS MUNI"
        },
        {
          "kind": "link",
          "title": "Studijní plán v IS MUNI",
          "url": "https://is.muni.cz/plan/23634/fyzicka-geografie",
          "source": "IS MUNI"
        }
      ],
    },
    {
      id: "z8108",
      code: "PřF:Z8108",
      title: "Dálkový průzkum Země",
      garant: "Ing. Kateřina Tajovská, Ph.D.",
      credits: 5,
      semester: "4.",
      completion: "zk",
      tags: ["Povinné předměty (oborové)"],
      description: "Na konci tohoto kurzu bude student schopen porozumět a vysvětlit podstatu, přednosti a nedostatky dat dálkového průzkumu Země, které jsou vysvětleny v jednotlivých lekcích. Bude schopen vysvětlit, kdy použít jednotlivá data a metody s ohledem na jejich časové, prostorové, spektrální a radiometrické rozlišení, předkládat racionální odůvodnění o podmínkách využití dat DPZ. Měl by být schopen kvalifikovaných rozhodnutí týkajících se přípravy dat, aplikací základních metod zpracování obrazu a na základě nabytých znalostí interpretovat a verifikovat výsledky analýz.",
      syllabus: [
        "1. Definice dálkového průzkumu Země a jeho význam, rozdělení metod DPZ. 2. Fyzikální podstata dálkového průzkumu Země. Základní zákony záření 3. Spektrální chování objektů. Spektrální křivky odrazivosti základních druhů povrchů. 4. Letecké snímkování, projekt snímkového letu, charakteristika letecké fotografie. 5. Nekonvenční způsoby zobrazování zemského povrchu. Družicové systémy. 6. Základní charakteristika digitálního obrazového záznamu. 7. Dálkový průzkum Země v teplotní části spektra a vzhled termálních obrazových záznamů. 8. Dálkový průzkum Země v mikrovlnné části spektra a vzhled radarových obrazových záznamů. Radarové systémy. 9. Přehled vybraných družicových systémů, meteorologické družice a jejich produkty. 10. Přehled vybraných družicových systémů, družice pro výzkum přírodních zdrojů Země. 11. Zjišťování změn pomocí materiálů DPZ. 12. Základní oblasti využití dat DPZ, aplikace v různých oblastech lidské činnosti. 13. Mapování s využitím dat DPZ, domácí a mezinárodní projekty, zdroje dat."
      ],
      lessons: [
        {
          "id": "z8108-1-definice-dalkoveho-pruzkumu-zeme-a-jeho-vyznam-1",
          "title": "1. Definice dálkového průzkumu Země a jeho význam, rozdělení metod DPZ. 2. Fyzikální podstata dálkového průzkumu Země. Základní zákony záření 3. Spektrální chování objektů. Spektrální křivky odrazivosti základních druhů povrchů. 4. Letecké snímkování, projekt snímkového letu, charakteristika letecké fotografie. 5. Nekonvenční způsoby zobrazování zemského povrchu. Družicové systémy. 6. Základní charakteristika digitálního obrazového záznamu. 7. Dálkový průzkum Země v teplotní části spektra a vzhled termálních obrazových záznamů. 8. Dálkový průzkum Země v mikrovlnné části spektra a vzhled radarových obrazových záznamů. Radarové systémy. 9. Přehled vybraných družicových systémů, meteorologické družice a jejich produkty. 10. Přehled vybraných družicových systémů, družice pro výzkum přírodních zdrojů Země. 11. Zjišťování změn pomocí materiálů DPZ. 12. Základní oblasti využití dat DPZ, aplikace v různých oblastech lidské činnosti. 13. Mapování s využitím dat DPZ, domácí a mezinárodní projekty, zdroje dat.",
          "summary": "1. Definice dálkového průzkumu Země a jeho význam, rozdělení metod DPZ. 2. Fyzikální podstata dálkového průzkumu Země. Základní zákony zá…",
          "minutes": 25,
          "available": false
        }
      ],
      resources: [
        {
          "kind": "link",
          "title": "IS MUNI — detail předmětu",
          "url": "https://is.muni.cz/predmet/sci/Z8108",
          "source": "IS MUNI"
        },
        {
          "kind": "link",
          "title": "Studijní plán v IS MUNI",
          "url": "https://is.muni.cz/plan/23634/fyzicka-geografie",
          "source": "IS MUNI"
        },
        {
          "kind": "link",
          "title": "IS MUNI — detail předmětu",
          "url": "https://is.muni.cz/predmet/sci/Z8108",
          "source": "IS MUNI"
        },
        {
          "kind": "link",
          "title": "Studijní plán v IS MUNI",
          "url": "https://is.muni.cz/plan/23634/fyzicka-geografie",
          "source": "IS MUNI"
        }
      ],
    },
    {
      id: "z0120",
      code: "PřF:Z0120",
      title: "Geografické myšlení",
      garant: "RNDr. Petr Daněk, Ph.D.",
      credits: 3,
      semester: "2.",
      completion: "k",
      tags: ["Povinné předměty (oborové)"],
      description: "Hlavními cíli kurzu je:\n- představení různých přístupů k chápání a dělání (tj. ontologie a metodologie) geografie;\n- uvedení historických souvislostí mezi jednotlivými přístupy;\n- seznámení s filosofickým ukotvením jednotlivých přístupů;\n- uvedení do diskuse o charakteru základních konceptů geografie (jako je prostor, místo, čas, měřítko, prostředí aj.);\n- představení klíčových osobností, které formovaly vývoj geografického myšlení.\nNa konci kurzu by měl být student schopen orientovat se ve směrech geografického myšlení.",
      syllabus: [
        "1. Geografické školy, přístupy, paradigma. Sociální konstrukce reality.",
        "2. Počátky moderní geografie. Environmentální a regionální přístup.",
        "3. Poválečná diskuse a kvantitativní revoluce.",
        "4. Kritika prostorové vědy a postpozitivistické přístupy.",
        "5. Radikální geografie.",
        "6. Humanistická geografie.",
        "7. Feministická kritika.",
        "8. Teorie strukturace a time geography.",
        "9. Geografický realismus.",
        "10. Kulturní obrat a postmodernismus.",
        "11. Poststrukturalismus, postkolonialismus.",
        "12. Klíčové koncepty geografie: prostor, místo, měřítko.",
        "13. Klíčové koncepty geografie: prostředí, krajina."
      ],
      lessons: [
        {
          "id": "z0120-1-geograficke-skoly-pristupy-paradigma-socialni-1",
          "title": "1. Geografické školy, přístupy, paradigma. Sociální konstrukce reality.",
          "summary": "Studijní okruh: 1. Geografické školy, přístupy, paradigma. Sociální konstrukce reality.",
          "minutes": 15,
          "available": false
        },
        {
          "id": "z0120-2-pocatky-moderni-geografie-environmentalni-a-re-2",
          "title": "2. Počátky moderní geografie. Environmentální a regionální přístup.",
          "summary": "Studijní okruh: 2. Počátky moderní geografie. Environmentální a regionální přístup.",
          "minutes": 15,
          "available": false
        },
        {
          "id": "z0120-3-povalecna-diskuse-a-kvantitativni-revoluce-3",
          "title": "3. Poválečná diskuse a kvantitativní revoluce.",
          "summary": "Studijní okruh: 3. Poválečná diskuse a kvantitativní revoluce.",
          "minutes": 12,
          "available": false
        },
        {
          "id": "z0120-4-kritika-prostorove-vedy-a-postpozitivisticke-p-4",
          "title": "4. Kritika prostorové vědy a postpozitivistické přístupy.",
          "summary": "Studijní okruh: 4. Kritika prostorové vědy a postpozitivistické přístupy.",
          "minutes": 12,
          "available": false
        },
        {
          "id": "z0120-5-radikalni-geografie-5",
          "title": "5. Radikální geografie.",
          "summary": "Studijní okruh: 5. Radikální geografie.",
          "minutes": 12,
          "available": false
        },
        {
          "id": "z0120-6-humanisticka-geografie-6",
          "title": "6. Humanistická geografie.",
          "summary": "Studijní okruh: 6. Humanistická geografie.",
          "minutes": 12,
          "available": false
        },
        {
          "id": "z0120-7-feministicka-kritika-7",
          "title": "7. Feministická kritika.",
          "summary": "Studijní okruh: 7. Feministická kritika.",
          "minutes": 12,
          "available": false
        },
        {
          "id": "z0120-8-teorie-strukturace-a-time-geography-8",
          "title": "8. Teorie strukturace a time geography.",
          "summary": "Studijní okruh: 8. Teorie strukturace a time geography.",
          "minutes": 12,
          "available": false
        },
        {
          "id": "z0120-9-geograficky-realismus-9",
          "title": "9. Geografický realismus.",
          "summary": "Studijní okruh: 9. Geografický realismus.",
          "minutes": 12,
          "available": false
        },
        {
          "id": "z0120-10-kulturni-obrat-a-postmodernismus-10",
          "title": "10. Kulturní obrat a postmodernismus.",
          "summary": "Studijní okruh: 10. Kulturní obrat a postmodernismus.",
          "minutes": 12,
          "available": false
        },
        {
          "id": "z0120-11-poststrukturalismus-postkolonialismus-11",
          "title": "11. Poststrukturalismus, postkolonialismus.",
          "summary": "Studijní okruh: 11. Poststrukturalismus, postkolonialismus.",
          "minutes": 12,
          "available": false
        },
        {
          "id": "z0120-12-klicove-koncepty-geografie-prostor-misto-meri-12",
          "title": "12. Klíčové koncepty geografie: prostor, místo, měřítko.",
          "summary": "Studijní okruh: 12. Klíčové koncepty geografie: prostor, místo, měřítko.",
          "minutes": 12,
          "available": false
        },
        {
          "id": "z0120-13-klicove-koncepty-geografie-prostredi-krajina-13",
          "title": "13. Klíčové koncepty geografie: prostředí, krajina.",
          "summary": "Studijní okruh: 13. Klíčové koncepty geografie: prostředí, krajina.",
          "minutes": 12,
          "available": false
        }
      ],
      resources: [
        {
          "kind": "link",
          "title": "IS MUNI — detail předmětu",
          "url": "https://is.muni.cz/predmet/sci/Z0120",
          "source": "IS MUNI"
        },
        {
          "kind": "link",
          "title": "Studijní plán v IS MUNI",
          "url": "https://is.muni.cz/plan/23634/fyzicka-geografie",
          "source": "IS MUNI"
        },
        {
          "kind": "link",
          "title": "IS MUNI — detail předmětu",
          "url": "https://is.muni.cz/predmet/sci/Z0120",
          "source": "IS MUNI"
        },
        {
          "kind": "link",
          "title": "Studijní plán v IS MUNI",
          "url": "https://is.muni.cz/plan/23634/fyzicka-geografie",
          "source": "IS MUNI"
        }
      ],
    },
    {
      id: "z5004",
      code: "PřF:Z5004",
      title: "Akademické dovednosti 1",
      garant: "Mgr. Jarmila Burianová, Ph.D.",
      credits: 1,
      semester: "5.",
      completion: "z",
      tags: ["Povinné předměty (oborové)"],
      description: "Cílem předmětu je provést studenta jednotlivými etapami tvorby a prezentace bakalářské práce.",
      syllabus: [
        "úvod - co, jak a proč připravit, zpracovat, napsat a obhájit",
        "timemanagement - tipy a triky, jak si jednotlivé činnosti zorganizovat, jak se vyhnout prokrastinaci",
        "rešerše literatury",
        "citace literatury",
        "základy prezentování",
        "shrnutí"
      ],
      lessons: [
        {
          "id": "z5004-uvod-co-jak-a-proc-pripravit-zpracovat-napsat-a-1",
          "title": "úvod - co, jak a proč připravit, zpracovat, napsat a obhájit",
          "summary": "Studijní okruh: úvod - co, jak a proč připravit, zpracovat, napsat a obhájit",
          "minutes": 12,
          "available": false
        },
        {
          "id": "z5004-timemanagement-tipy-a-triky-jak-si-jednotlive-ci-2",
          "title": "timemanagement - tipy a triky, jak si jednotlivé činnosti zorganizovat, jak se vyhnout prokrastinaci",
          "summary": "Studijní okruh: timemanagement - tipy a triky, jak si jednotlivé činnosti zorganizovat, jak se vyhnout prokrastinaci",
          "minutes": 15,
          "available": false
        },
        {
          "id": "z5004-reserse-literatury-3",
          "title": "rešerše literatury",
          "summary": "Studijní okruh: rešerše literatury",
          "minutes": 12,
          "available": false
        },
        {
          "id": "z5004-citace-literatury-4",
          "title": "citace literatury",
          "summary": "Studijní okruh: citace literatury",
          "minutes": 12,
          "available": false
        },
        {
          "id": "z5004-zaklady-prezentovani-5",
          "title": "základy prezentování",
          "summary": "Studijní okruh: základy prezentování",
          "minutes": 12,
          "available": false
        },
        {
          "id": "z5004-shrnuti-6",
          "title": "shrnutí",
          "summary": "Studijní okruh: shrnutí",
          "minutes": 12,
          "available": false
        }
      ],
      resources: [
        {
          "kind": "link",
          "title": "IS MUNI — detail předmětu",
          "url": "https://is.muni.cz/predmet/sci/Z5004",
          "source": "IS MUNI"
        },
        {
          "kind": "link",
          "title": "Studijní plán v IS MUNI",
          "url": "https://is.muni.cz/plan/23634/fyzicka-geografie",
          "source": "IS MUNI"
        },
        {
          "kind": "link",
          "title": "IS MUNI — detail předmětu",
          "url": "https://is.muni.cz/predmet/sci/Z5004",
          "source": "IS MUNI"
        },
        {
          "kind": "link",
          "title": "Studijní plán v IS MUNI",
          "url": "https://is.muni.cz/plan/23634/fyzicka-geografie",
          "source": "IS MUNI"
        }
      ],
    },
    {
      id: "z8118",
      code: "PřF:Z8118",
      title: "Tvorba tematických map",
      garant: "doc. Mgr. Bc. Zdeněk Stachoň, Ph.D.",
      credits: 6,
      semester: "5.",
      completion: "zk",
      tags: ["Povinné předměty (oborové)"],
      description: "Předmět si klade za cíl demonstrovat teoretické báze tvorby tematických map a kompoziční prvky tematických map. Dále vazby a vztahy mezi informací, obsahem a náplní na tematických mapách, obsah mapy, principy tvorby legendy, druhy a způsoby řešení hodnotových měřítek. Představí také tematické mapy a atlasy české, s výběrem světové, produkce jako zdroj k získávání poznatků a jejich kritické hodnocení.",
      syllabus: [
        "Přednášky: 1.Vymezení a definování pojmů tematická mapa (resp. tematický kartografický produkt), způsoby členění tématických map. 2. Základní a nadstavbové kompoziční prvky tematických map. 3. Obsah a náplň tematických map. 4. Měřítka mapy, hodnotová měřítka, tvorba velikostních stupnic, jejich vnitřní forma a dělení. 5. Grafické způsoby pro znázornění kvalitativních údajů do mapy. 6. Grafické způsoby pro znázornění kvantitativních údajů. 7. Znázornění kvantitativních údajů do mapy. 8. Koncepce mapy - řešení účelu, názvu a návrhu obsahu mapy. 9. Konstrukce mapy pracovní, podkladové, sestavitelského originálu, řešení zrcadla mapy a kladu mapových listů. 10. Legenda mapy, zásady a proces její tvorby. 11. Kartografická anamorfóza 12. Vybraná produkce tematických map a atlasů 13. Hodnocení tematických map Cvičení: 1. Mentální tematická mapa 2. Trénink v ArcMapu (souřadné systémy, výběr prvků apod.) 3. Nástroje geoprocessingu 4. Kompozice jednoduché tematické mapy 5. Open source GIS (Quantum GIS) - základní seznámení 6. Kartogramy a kartodiagramy 7. Velikostní stupnice 8. Editace a georeferencování 9. Symbolika v tematických mapách 10. Tematická mapa (semestrální práce)"
      ],
      lessons: [
        {
          "id": "z8118-prednasky-1-vymezeni-a-definovani-pojmu-tematick-1",
          "title": "Přednášky: 1.Vymezení a definování pojmů tematická mapa (resp. tematický kartografický produkt), způsoby členění tématických map. 2. Základní a nadstavbové kompoziční prvky tematických map. 3. Obsah a náplň tematických map. 4. Měřítka mapy, hodnotová měřítka, tvorba velikostních stupnic, jejich vnitřní forma a dělení. 5. Grafické způsoby pro znázornění kvalitativních údajů do mapy. 6. Grafické způsoby pro znázornění kvantitativních údajů. 7. Znázornění kvantitativních údajů do mapy. 8. Koncepce mapy - řešení účelu, názvu a návrhu obsahu mapy. 9. Konstrukce mapy pracovní, podkladové, sestavitelského originálu, řešení zrcadla mapy a kladu mapových listů. 10. Legenda mapy, zásady a proces její tvorby. 11. Kartografická anamorfóza 12. Vybraná produkce tematických map a atlasů 13. Hodnocení tematických map Cvičení: 1. Mentální tematická mapa 2. Trénink v ArcMapu (souřadné systémy, výběr prvků apod.) 3. Nástroje geoprocessingu 4. Kompozice jednoduché tematické mapy 5. Open source GIS (Quantum GIS) - základní seznámení 6. Kartogramy a kartodiagramy 7. Velikostní stupnice 8. Editace a georeferencování 9. Symbolika v tematických mapách 10. Tematická mapa (semestrální práce)",
          "summary": "Přednášky: 1.Vymezení a definování pojmů tematická mapa (resp. tematický kartografický produkt), způsoby členění tématických map. 2. Zákl…",
          "minutes": 25,
          "available": false
        }
      ],
      resources: [
        {
          "kind": "link",
          "title": "IS MUNI — detail předmětu",
          "url": "https://is.muni.cz/predmet/sci/Z8118",
          "source": "IS MUNI"
        },
        {
          "kind": "link",
          "title": "Studijní plán v IS MUNI",
          "url": "https://is.muni.cz/plan/23634/fyzicka-geografie",
          "source": "IS MUNI"
        },
        {
          "kind": "link",
          "title": "IS MUNI — detail předmětu",
          "url": "https://is.muni.cz/predmet/sci/Z8118",
          "source": "IS MUNI"
        },
        {
          "kind": "link",
          "title": "Studijní plán v IS MUNI",
          "url": "https://is.muni.cz/plan/23634/fyzicka-geografie",
          "source": "IS MUNI"
        }
      ],
    },
    {
      id: "z6004",
      code: "PřF:Z6004",
      title: "Akademické dovednosti 2",
      garant: "Mgr. Jarmila Burianová, Ph.D.",
      credits: 1,
      semester: "6.",
      completion: "z",
      tags: ["Povinné předměty (oborové)"],
      description: "Cílem předmětu je provést studenta jednotlivými etapami tvorby a prezentace bakalářské práce.",
      syllabus: [
        "1. úvod - co, jak a proč připravit, zpracovat, napsat a obhájit",
        "2. práce s literaturou - citace, bibliografie",
        "3. struktura bakalářské práce - kapitoly, přílohy, povinné stránky",
        "4. úprava textu bakalářské práce - strukturální a věcné úpravy, jazykové, formální (styl)",
        "5. grafické a tabelární přílohy bakalářské práce",
        "6. abstrakt - zásady, použití",
        "7. obhajoba práce - příprava prezentace (powerpoint, prezi), průběh obhajoby",
        "8. obhajoba na nečisto"
      ],
      lessons: [
        {
          "id": "z6004-1-uvod-co-jak-a-proc-pripravit-zpracovat-napsat-1",
          "title": "1. úvod - co, jak a proč připravit, zpracovat, napsat a obhájit",
          "summary": "Studijní okruh: 1. úvod - co, jak a proč připravit, zpracovat, napsat a obhájit",
          "minutes": 15,
          "available": false
        },
        {
          "id": "z6004-2-prace-s-literaturou-citace-bibliografie-2",
          "title": "2. práce s literaturou - citace, bibliografie",
          "summary": "Studijní okruh: 2. práce s literaturou - citace, bibliografie",
          "minutes": 12,
          "available": false
        },
        {
          "id": "z6004-3-struktura-bakalarske-prace-kapitoly-prilohy-po-3",
          "title": "3. struktura bakalářské práce - kapitoly, přílohy, povinné stránky",
          "summary": "Studijní okruh: 3. struktura bakalářské práce - kapitoly, přílohy, povinné stránky",
          "minutes": 15,
          "available": false
        },
        {
          "id": "z6004-4-uprava-textu-bakalarske-prace-strukturalni-a-v-4",
          "title": "4. úprava textu bakalářské práce - strukturální a věcné úpravy, jazykové, formální (styl)",
          "summary": "Studijní okruh: 4. úprava textu bakalářské práce - strukturální a věcné úpravy, jazykové, formální (styl)",
          "minutes": 15,
          "available": false
        },
        {
          "id": "z6004-5-graficke-a-tabelarni-prilohy-bakalarske-prace-5",
          "title": "5. grafické a tabelární přílohy bakalářské práce",
          "summary": "Studijní okruh: 5. grafické a tabelární přílohy bakalářské práce",
          "minutes": 12,
          "available": false
        },
        {
          "id": "z6004-6-abstrakt-zasady-pouziti-6",
          "title": "6. abstrakt - zásady, použití",
          "summary": "Studijní okruh: 6. abstrakt - zásady, použití",
          "minutes": 12,
          "available": false
        },
        {
          "id": "z6004-7-obhajoba-prace-priprava-prezentace-powerpoint-7",
          "title": "7. obhajoba práce - příprava prezentace (powerpoint, prezi), průběh obhajoby",
          "summary": "Studijní okruh: 7. obhajoba práce - příprava prezentace (powerpoint, prezi), průběh obhajoby",
          "minutes": 15,
          "available": false
        },
        {
          "id": "z6004-8-obhajoba-na-necisto-8",
          "title": "8. obhajoba na nečisto",
          "summary": "Studijní okruh: 8. obhajoba na nečisto",
          "minutes": 12,
          "available": false
        }
      ],
      resources: [
        {
          "kind": "link",
          "title": "IS MUNI — detail předmětu",
          "url": "https://is.muni.cz/predmet/sci/Z6004",
          "source": "IS MUNI"
        },
        {
          "kind": "link",
          "title": "Studijní plán v IS MUNI",
          "url": "https://is.muni.cz/plan/23634/fyzicka-geografie",
          "source": "IS MUNI"
        },
        {
          "kind": "link",
          "title": "IS MUNI — detail předmětu",
          "url": "https://is.muni.cz/predmet/sci/Z6004",
          "source": "IS MUNI"
        },
        {
          "kind": "link",
          "title": "Studijní plán v IS MUNI",
          "url": "https://is.muni.cz/plan/23634/fyzicka-geografie",
          "source": "IS MUNI"
        }
      ],
    },
    {
      id: "z0059",
      code: "PřF:Z0059",
      title: "Hydrologie",
      garant: "Mgr. Monika Šulc Michalková, Ph.D. et Ph.D.",
      credits: 6,
      semester: "3.",
      completion: "zk",
      tags: ["Povinné předměty"],
      description: "Předmět je zaměřen tak, aby posluchači získali znalosti o měření a pozorování hydrologických jevů a zaměřili se na základní metody zpracování dat v hydrologii.",
      syllabus: [
        "1) Úvod. Význam vody v krajině. Hydrologie jako vědní disciplína, historický vývoj, organizace hydrologické služby.",
        "2) Vodní zásoby a cirkulace vody na Zemi - základní bilanční rovnice.",
        "3) Hydrografie řek - hydrografické charakteristiky povodí, říční sítě a říčního koryta. Morfometrické a morfologické charakteristiky.",
        "4) Měření hodnot hydrologických prvků - vodní stav, rychlost proudění, průtok.",
        "5) Metody zpracování a hodnocení hydrologických dat",
        "6) Hydrologie řek - režim řek a jeho antropogenní ovlivnění, hydrometrie a hydrologické předpovědi.",
        "7) Podpovrchová voda - její vznik, druhy a doplňování, režim a pozorování podzemní vody, prameny.",
        "8) Fyzikální a chemické vlastnosti povrchové a podpovrchové vody.",
        "9) Limnologie - morfometrické charakteristiky jezer a nádrží, vodní bilance jezer, termická stratifikace.",
        "10) Umělé vodní nádrže.",
        "11) Oceánografie - vlastnosti mořské vody, problematika jejího znečištění; pohyby mořské vody, mořské proudy.",
        "12) Aktuální případová studie; protipovodňová ochrana."
      ],
      lessons: [
        {
          "id": "z0059-1-uvod-vyznam-vody-v-krajine-hydrologie-jako-ved-1",
          "title": "1) Úvod. Význam vody v krajině. Hydrologie jako vědní disciplína, historický vývoj, organizace hydrologické služby.",
          "summary": "Studijní okruh: 1) Úvod. Význam vody v krajině. Hydrologie jako vědní disciplína, historický vývoj, organizace hydrologické služby.",
          "minutes": 25,
          "available": true,
          "blocks": [
            {
              "type": "callout",
              "label": "Okruh",
              "text": "1) Úvod. Význam vody v krajině. Hydrologie jako vědní disciplína, historický vývoj, organizace hydrologické služby."
            },
            {
              "type": "callout",
              "label": "Jak číst tuto lekci",
              "text": "Text je výtah ze skripta a přednášek — použij ho jako mapu k učení. Detaily a obrázky najdeš v PDF/PPT v materiálech lekce."
            },
            {
              "type": "heading",
              "text": "Výtah ze studijní opory"
            },
            {
              "type": "list",
              "label": "Body přednášky",
              "items": [
                "Univerzita Palackého v Olomouci Katedra geografie",
                "FYZICKÁ GEOGRAFIE 1 – HYDROLOGIE Distanční studijní opora"
              ]
            },
            {
              "type": "list",
              "label": "Klíčové body",
              "items": [
                "Obsah Obsah..............................................................................................................................................................3 Úvod ................................................................................................................................................................7 Vysvětlivky k ikonám .......................................................................................................................................8"
              ]
            },
            {
              "type": "list",
              "label": "Doporučený postup",
              "items": [
                "Projdi výtah a vlastní poznámky z přednášky",
                "Otevři přiložené PDF/PPT v materiálech lekce",
                "Propoj s předchozími a navazujícími okruhy v osnově"
              ]
            }
          ],
          "resources": [
            {
              "kind": "document",
              "title": "Distanční studijní opora — Hydrologie (UP Olomouc)",
              "url": "/materials/geografie-kartografie/z0059/D_FG1_Hydrologie.pdf",
              "source": "Pavelková, Frajer",
              "note": "Obecný studijní text k hydrologii — využij napříč lekcemi předmětu."
            },
            {
              "kind": "link",
              "title": "IS MUNI — Hydrologie",
              "url": "https://is.muni.cz/predmet/sci/Z0059",
              "source": "IS MUNI"
            }
          ]
        },
        {
          "id": "z0059-2-vodni-zasoby-a-cirkulace-vody-na-zemi-zakladni-2",
          "title": "2) Vodní zásoby a cirkulace vody na Zemi - základní bilanční rovnice.",
          "summary": "Studijní okruh: 2) Vodní zásoby a cirkulace vody na Zemi - základní bilanční rovnice.",
          "minutes": 25,
          "available": true,
          "blocks": [
            {
              "type": "callout",
              "label": "Okruh",
              "text": "2) Vodní zásoby a cirkulace vody na Zemi - základní bilanční rovnice."
            },
            {
              "type": "callout",
              "label": "Jak číst tuto lekci",
              "text": "Text je výtah ze skripta a přednášek — použij ho jako mapu k učení. Detaily a obrázky najdeš v PDF/PPT v materiálech lekce."
            },
            {
              "type": "heading",
              "text": "Výtah ze studijní opory"
            },
            {
              "type": "paragraph",
              "text": "Úvod do hydrologie .....................................................................................................................................9 1.1"
            },
            {
              "type": "paragraph",
              "text": "Hydrologie...........................................................................................................................................9"
            },
            {
              "type": "paragraph",
              "text": "Dělení hydrologie ..............................................................................................................................10"
            },
            {
              "type": "paragraph",
              "text": "Dějiny hydrologické vědy ..................................................................................................................12"
            },
            {
              "type": "list",
              "label": "Doporučený postup",
              "items": [
                "Projdi výtah a vlastní poznámky z přednášky",
                "Otevři přiložené PDF/PPT v materiálech lekce",
                "Propoj s předchozími a navazujícími okruhy v osnově"
              ]
            }
          ],
          "resources": [
            {
              "kind": "document",
              "title": "Distanční studijní opora — Hydrologie (UP Olomouc)",
              "url": "/materials/geografie-kartografie/z0059/D_FG1_Hydrologie.pdf",
              "source": "Pavelková, Frajer",
              "note": "Obecný studijní text k hydrologii — využij napříč lekcemi předmětu."
            },
            {
              "kind": "link",
              "title": "IS MUNI — Hydrologie",
              "url": "https://is.muni.cz/predmet/sci/Z0059",
              "source": "IS MUNI"
            }
          ]
        },
        {
          "id": "z0059-3-hydrografie-rek-hydrograficke-charakteristiky-3",
          "title": "3) Hydrografie řek - hydrografické charakteristiky povodí, říční sítě a říčního koryta. Morfometrické a morfologické charakteristiky.",
          "summary": "Studijní okruh: 3) Hydrografie řek - hydrografické charakteristiky povodí, říční sítě a říčního koryta. Morfometrické a morfologické charakteristiky.",
          "minutes": 25,
          "available": true,
          "blocks": [
            {
              "type": "callout",
              "label": "Okruh",
              "text": "3) Hydrografie řek - hydrografické charakteristiky povodí, říční sítě a říčního koryta. Morfometrické a morfologické charakteristiky."
            },
            {
              "type": "callout",
              "label": "Jak číst tuto lekci",
              "text": "Text je výtah ze skripta a přednášek — použij ho jako mapu k učení. Detaily a obrázky najdeš v PDF/PPT v materiálech lekce."
            },
            {
              "type": "heading",
              "text": "Výtah ze studijní opory"
            },
            {
              "type": "paragraph",
              "text": "Voda na Zemi ............................................................................................................................................15 2.1"
            },
            {
              "type": "paragraph",
              "text": "Původ vody na Zemi .........................................................................................................................15"
            },
            {
              "type": "paragraph",
              "text": "Zásoby vody na Zemi .......................................................................................................................16"
            },
            {
              "type": "paragraph",
              "text": "Fyzikální a chemické vlastnosti vody ...............................................................................................17"
            },
            {
              "type": "paragraph",
              "text": "Funkce vody .....................................................................................................................................19"
            },
            {
              "type": "paragraph",
              "text": "Hydrografie ................................................................................................................................................24 3.1"
            },
            {
              "type": "list",
              "label": "Doporučený postup",
              "items": [
                "Projdi výtah a vlastní poznámky z přednášky",
                "Otevři přiložené PDF/PPT v materiálech lekce",
                "Propoj s předchozími a navazujícími okruhy v osnově"
              ]
            }
          ],
          "resources": [
            {
              "kind": "document",
              "title": "Distanční studijní opora — Hydrologie (UP Olomouc)",
              "url": "/materials/geografie-kartografie/z0059/D_FG1_Hydrologie.pdf",
              "source": "Pavelková, Frajer",
              "note": "Obecný studijní text k hydrologii — využij napříč lekcemi předmětu."
            },
            {
              "kind": "link",
              "title": "IS MUNI — Hydrologie",
              "url": "https://is.muni.cz/predmet/sci/Z0059",
              "source": "IS MUNI"
            }
          ]
        },
        {
          "id": "z0059-4-mereni-hodnot-hydrologickych-prvku-vodni-stav-4",
          "title": "4) Měření hodnot hydrologických prvků - vodní stav, rychlost proudění, průtok.",
          "summary": "Studijní okruh: 4) Měření hodnot hydrologických prvků - vodní stav, rychlost proudění, průtok.",
          "minutes": 25,
          "available": true,
          "blocks": [
            {
              "type": "callout",
              "label": "Okruh",
              "text": "4) Měření hodnot hydrologických prvků - vodní stav, rychlost proudění, průtok."
            },
            {
              "type": "callout",
              "label": "Jak číst tuto lekci",
              "text": "Text je výtah ze skripta a přednášek — použij ho jako mapu k učení. Detaily a obrázky najdeš v PDF/PPT v materiálech lekce."
            },
            {
              "type": "heading",
              "text": "Výtah ze studijní opory"
            },
            {
              "type": "paragraph",
              "text": "Vývoj a organizace hydrologie v českých zemích ........................................................................13"
            },
            {
              "type": "paragraph",
              "text": "Geometrické a fyzikálně-geografické vlastnosti povodí ...................................................................31"
            },
            {
              "type": "paragraph",
              "text": "Plocha povodí ...............................................................................................................................31"
            },
            {
              "type": "paragraph",
              "text": "Střední šířka povodí .....................................................................................................................33"
            },
            {
              "type": "paragraph",
              "text": "Délka rozvodnice a délka povodí..................................................................................................33"
            },
            {
              "type": "paragraph",
              "text": "Tvar povodí ...................................................................................................................................33"
            },
            {
              "type": "list",
              "label": "Doporučený postup",
              "items": [
                "Projdi výtah a vlastní poznámky z přednášky",
                "Otevři přiložené PDF/PPT v materiálech lekce",
                "Propoj s předchozími a navazujícími okruhy v osnově"
              ]
            }
          ],
          "resources": [
            {
              "kind": "document",
              "title": "Distanční studijní opora — Hydrologie (UP Olomouc)",
              "url": "/materials/geografie-kartografie/z0059/D_FG1_Hydrologie.pdf",
              "source": "Pavelková, Frajer",
              "note": "Obecný studijní text k hydrologii — využij napříč lekcemi předmětu."
            },
            {
              "kind": "link",
              "title": "IS MUNI — Hydrologie",
              "url": "https://is.muni.cz/predmet/sci/Z0059",
              "source": "IS MUNI"
            }
          ]
        },
        {
          "id": "z0059-5-metody-zpracovani-a-hodnoceni-hydrologickych-d-5",
          "title": "5) Metody zpracování a hodnocení hydrologických dat",
          "summary": "Studijní okruh: 5) Metody zpracování a hodnocení hydrologických dat",
          "minutes": 12,
          "available": false
        },
        {
          "id": "z0059-6-hydrologie-rek-rezim-rek-a-jeho-antropogenni-o-6",
          "title": "6) Hydrologie řek - režim řek a jeho antropogenní ovlivnění, hydrometrie a hydrologické předpovědi.",
          "summary": "Studijní okruh: 6) Hydrologie řek - režim řek a jeho antropogenní ovlivnění, hydrometrie a hydrologické předpovědi.",
          "minutes": 15,
          "available": false
        },
        {
          "id": "z0059-7-podpovrchova-voda-jeji-vznik-druhy-a-doplnovan-7",
          "title": "7) Podpovrchová voda - její vznik, druhy a doplňování, režim a pozorování podzemní vody, prameny.",
          "summary": "Studijní okruh: 7) Podpovrchová voda - její vznik, druhy a doplňování, režim a pozorování podzemní vody, prameny.",
          "minutes": 15,
          "available": false
        },
        {
          "id": "z0059-8-fyzikalni-a-chemicke-vlastnosti-povrchove-a-po-8",
          "title": "8) Fyzikální a chemické vlastnosti povrchové a podpovrchové vody.",
          "summary": "Studijní okruh: 8) Fyzikální a chemické vlastnosti povrchové a podpovrchové vody.",
          "minutes": 15,
          "available": false
        },
        {
          "id": "z0059-9-limnologie-morfometricke-charakteristiky-jezer-9",
          "title": "9) Limnologie - morfometrické charakteristiky jezer a nádrží, vodní bilance jezer, termická stratifikace.",
          "summary": "Studijní okruh: 9) Limnologie - morfometrické charakteristiky jezer a nádrží, vodní bilance jezer, termická stratifikace.",
          "minutes": 20,
          "available": false
        },
        {
          "id": "z0059-10-umele-vodni-nadrze-10",
          "title": "10) Umělé vodní nádrže.",
          "summary": "Studijní okruh: 10) Umělé vodní nádrže.",
          "minutes": 12,
          "available": false
        },
        {
          "id": "z0059-11-oceanografie-vlastnosti-morske-vody-problemat-11",
          "title": "11) Oceánografie - vlastnosti mořské vody, problematika jejího znečištění; pohyby mořské vody, mořské proudy.",
          "summary": "Studijní okruh: 11) Oceánografie - vlastnosti mořské vody, problematika jejího znečištění; pohyby mořské vody, mořské proudy.",
          "minutes": 20,
          "available": false
        },
        {
          "id": "z0059-12-aktualni-pripadova-studie-protipovodnova-ochr-12",
          "title": "12) Aktuální případová studie; protipovodňová ochrana.",
          "summary": "Studijní okruh: 12) Aktuální případová studie; protipovodňová ochrana.",
          "minutes": 12,
          "available": false
        }
      ],
      resources: [
        {
          "kind": "link",
          "title": "IS MUNI — detail předmětu",
          "url": "https://is.muni.cz/predmet/sci/Z0059",
          "source": "IS MUNI"
        },
        {
          "kind": "link",
          "title": "Studijní plán v IS MUNI",
          "url": "https://is.muni.cz/plan/23634/fyzicka-geografie",
          "source": "IS MUNI"
        },
        {
          "kind": "link",
          "title": "IS MUNI — detail předmětu",
          "url": "https://is.muni.cz/predmet/sci/Z0059",
          "source": "IS MUNI"
        },
        {
          "kind": "link",
          "title": "Studijní plán v IS MUNI",
          "url": "https://is.muni.cz/plan/23634/fyzicka-geografie",
          "source": "IS MUNI"
        },
        {
          "kind": "document",
          "title": "Distanční studijní opora — Hydrologie (UP Olomouc)",
          "url": "/materials/geografie-kartografie/z0059/D_FG1_Hydrologie.pdf",
          "source": "Pavelková, Frajer",
          "note": "Obecný studijní text k hydrologii — využij napříč lekcemi předmětu."
        }
      ],
    },
    {
      id: "z0076",
      code: "PřF:Z0076",
      title: "Meteorologie a klimatologie",
      garant: "Mgr. Jan Řehoř, Ph.D.",
      credits: 6,
      semester: "3.",
      completion: "zk",
      tags: ["Povinné předměty"],
      description: "Cílem předmětu je prezentace základních poznatků z meteorologie a jejich využití v klimatologii s prezentací komplexní představy o těchto dvou studijních oborech a se zvláštním zřetelem na vlastnosti atmosféry, základní meteorologické prvky a jejich klimatologické charakteristiky, meteorologické přístroje a pozorování, všeobecnou cirkulaci atmosféry, předpověď počasí, klimatotvorné faktory a procesy, klimatické klasifikace, a to vše zasazené do kontextu současné klimatické změny včetně tématu klimatického modelování, scénářů možného budoucího vývoje klimatu a poznatků z posledních zpráv IPCC.",
      syllabus: [
        "Přednáška: 1. Úvod a stručná historie meteorologie a klimatologie",
        "2. Atmosféra a její vlastnosti",
        "3. Radiační a energetická bilance",
        "4. Teplota půdy a vzduchu",
        "5. Voda v atmosféře: vznik oblačnosti a srážek",
        "6. Atmosférický tlak a proudění vzduchu",
        "7. Všeobecná cirkulace atmosféry",
        "8. Základní klimatotvorné faktory, klimatické oscilace a klimatické klasifikace",
        "9. Numerické modelování atmosféry a atmosférické reanalýzy",
        "10. Základy předpovědi počasí",
        "11. Zdroje meteorologických a klimatických dat",
        "12. Studium změn a kolísání klimatu a současná klimatická změna",
        "13. Klimatické modely a projekce budoucího klimatu. Cvičení: 1. Exkurze na ČHMÚ Brno",
        "2. Základní zpracování klimatických dat",
        "3-4. Zpracování satelitních dat oblačnost a chemického složení atmosféry",
        "5. Práce s reanalyzovanými daty",
        "6.-11. Meteorologická měření a pozorování",
        "12.-13. Materály IPCC a nové odborné studie."
      ],
      lessons: [
        {
          "id": "z0076-2-atmosfera-a-jeji-vlastnosti-1",
          "title": "2. Atmosféra a její vlastnosti",
          "summary": "Studijní okruh: 2. Atmosféra a její vlastnosti",
          "minutes": 12,
          "sectionTitle": "Přednáška: 1. Úvod a stručná historie meteorologie a klimatologie",
          "available": false
        },
        {
          "id": "z0076-3-radiacni-a-energeticka-bilance-2",
          "title": "3. Radiační a energetická bilance",
          "summary": "Studijní okruh: 3. Radiační a energetická bilance",
          "minutes": 12,
          "sectionTitle": "Přednáška: 1. Úvod a stručná historie meteorologie a klimatologie",
          "available": false
        },
        {
          "id": "z0076-4-teplota-pudy-a-vzduchu-3",
          "title": "4. Teplota půdy a vzduchu",
          "summary": "Studijní okruh: 4. Teplota půdy a vzduchu",
          "minutes": 12,
          "sectionTitle": "Přednáška: 1. Úvod a stručná historie meteorologie a klimatologie",
          "available": false
        },
        {
          "id": "z0076-5-voda-v-atmosfere-vznik-oblacnosti-a-srazek-4",
          "title": "5. Voda v atmosféře: vznik oblačnosti a srážek",
          "summary": "Studijní okruh: 5. Voda v atmosféře: vznik oblačnosti a srážek",
          "minutes": 12,
          "sectionTitle": "Přednáška: 1. Úvod a stručná historie meteorologie a klimatologie",
          "available": false
        },
        {
          "id": "z0076-6-atmosfericky-tlak-a-proudeni-vzduchu-5",
          "title": "6. Atmosférický tlak a proudění vzduchu",
          "summary": "Studijní okruh: 6. Atmosférický tlak a proudění vzduchu",
          "minutes": 12,
          "sectionTitle": "Přednáška: 1. Úvod a stručná historie meteorologie a klimatologie",
          "available": false
        },
        {
          "id": "z0076-7-vseobecna-cirkulace-atmosfery-6",
          "title": "7. Všeobecná cirkulace atmosféry",
          "summary": "Studijní okruh: 7. Všeobecná cirkulace atmosféry",
          "minutes": 12,
          "sectionTitle": "Přednáška: 1. Úvod a stručná historie meteorologie a klimatologie",
          "available": false
        },
        {
          "id": "z0076-8-zakladni-klimatotvorne-faktory-klimaticke-osci-7",
          "title": "8. Základní klimatotvorné faktory, klimatické oscilace a klimatické klasifikace",
          "summary": "Studijní okruh: 8. Základní klimatotvorné faktory, klimatické oscilace a klimatické klasifikace",
          "minutes": 15,
          "sectionTitle": "Přednáška: 1. Úvod a stručná historie meteorologie a klimatologie",
          "available": false
        },
        {
          "id": "z0076-9-numericke-modelovani-atmosfery-a-atmosfericke-8",
          "title": "9. Numerické modelování atmosféry a atmosférické reanalýzy",
          "summary": "Studijní okruh: 9. Numerické modelování atmosféry a atmosférické reanalýzy",
          "minutes": 12,
          "sectionTitle": "Přednáška: 1. Úvod a stručná historie meteorologie a klimatologie",
          "available": false
        },
        {
          "id": "z0076-10-zaklady-predpovedi-pocasi-9",
          "title": "10. Základy předpovědi počasí",
          "summary": "Studijní okruh: 10. Základy předpovědi počasí",
          "minutes": 12,
          "sectionTitle": "Přednáška: 1. Úvod a stručná historie meteorologie a klimatologie",
          "available": false
        },
        {
          "id": "z0076-11-zdroje-meteorologickych-a-klimatickych-dat-10",
          "title": "11. Zdroje meteorologických a klimatických dat",
          "summary": "Studijní okruh: 11. Zdroje meteorologických a klimatických dat",
          "minutes": 12,
          "sectionTitle": "Přednáška: 1. Úvod a stručná historie meteorologie a klimatologie",
          "available": false
        },
        {
          "id": "z0076-12-studium-zmen-a-kolisani-klimatu-a-soucasna-kl-11",
          "title": "12. Studium změn a kolísání klimatu a současná klimatická změna",
          "summary": "Studijní okruh: 12. Studium změn a kolísání klimatu a současná klimatická změna",
          "minutes": 15,
          "sectionTitle": "Přednáška: 1. Úvod a stručná historie meteorologie a klimatologie",
          "available": false
        },
        {
          "id": "z0076-13-klimaticke-modely-a-projekce-budouciho-klimat-12",
          "title": "13. Klimatické modely a projekce budoucího klimatu. Cvičení: 1. Exkurze na ČHMÚ Brno",
          "summary": "Studijní okruh: 13. Klimatické modely a projekce budoucího klimatu. Cvičení: 1. Exkurze na ČHMÚ Brno",
          "minutes": 15,
          "sectionTitle": "Přednáška: 1. Úvod a stručná historie meteorologie a klimatologie",
          "available": false
        },
        {
          "id": "z0076-2-zakladni-zpracovani-klimatickych-dat-13",
          "title": "2. Základní zpracování klimatických dat",
          "summary": "Studijní okruh: 2. Základní zpracování klimatických dat",
          "minutes": 12,
          "sectionTitle": "Přednáška: 1. Úvod a stručná historie meteorologie a klimatologie",
          "available": false
        },
        {
          "id": "z0076-3-4-zpracovani-satelitnich-dat-oblacnost-a-chemi-14",
          "title": "3-4. Zpracování satelitních dat oblačnost a chemického složení atmosféry",
          "summary": "Studijní okruh: 3-4. Zpracování satelitních dat oblačnost a chemického složení atmosféry",
          "minutes": 15,
          "sectionTitle": "Přednáška: 1. Úvod a stručná historie meteorologie a klimatologie",
          "available": false
        },
        {
          "id": "z0076-5-prace-s-reanalyzovanymi-daty-15",
          "title": "5. Práce s reanalyzovanými daty",
          "summary": "Studijní okruh: 5. Práce s reanalyzovanými daty",
          "minutes": 12,
          "sectionTitle": "Přednáška: 1. Úvod a stručná historie meteorologie a klimatologie",
          "available": false
        },
        {
          "id": "z0076-6-11-meteorologicka-mereni-a-pozorovani-16",
          "title": "6.-11. Meteorologická měření a pozorování",
          "summary": "Studijní okruh: 6.-11. Meteorologická měření a pozorování",
          "minutes": 12,
          "sectionTitle": "Přednáška: 1. Úvod a stručná historie meteorologie a klimatologie",
          "available": false
        },
        {
          "id": "z0076-12-13-materaly-ipcc-a-nove-odborne-studie-17",
          "title": "12.-13. Materály IPCC a nové odborné studie.",
          "summary": "Studijní okruh: 12.-13. Materály IPCC a nové odborné studie.",
          "minutes": 12,
          "sectionTitle": "Přednáška: 1. Úvod a stručná historie meteorologie a klimatologie",
          "available": false
        }
      ],
      resources: [
        {
          "kind": "link",
          "title": "IS MUNI — detail předmětu",
          "url": "https://is.muni.cz/predmet/sci/Z0076",
          "source": "IS MUNI"
        },
        {
          "kind": "link",
          "title": "Studijní plán v IS MUNI",
          "url": "https://is.muni.cz/plan/23634/fyzicka-geografie",
          "source": "IS MUNI"
        },
        {
          "kind": "link",
          "title": "IS MUNI — detail předmětu",
          "url": "https://is.muni.cz/predmet/sci/Z0076",
          "source": "IS MUNI"
        },
        {
          "kind": "link",
          "title": "Studijní plán v IS MUNI",
          "url": "https://is.muni.cz/plan/23634/fyzicka-geografie",
          "source": "IS MUNI"
        }
      ],
    },
    {
      id: "z0086",
      code: "PřF:Z0086",
      title: "Pedogeografie",
      garant: "Mgr. Jarmila Burianová, Ph.D.",
      credits: 6,
      semester: "4.",
      completion: "zk",
      tags: ["Povinné předměty"],
      description: "Cílem předmětu je postupně objasnit pojmy půda a pedosféra a začlenit pedogeografii do systému přírodních věd. Probírány jsou jednotlivé stavební složky půdní hmoty a jejich ekologicky významné vlastnosti. Důraz je kladen na vysvětlení půdotvorných procesů a charakteristiku jejich produktů - genetických horizontů, půdního profilu a půdních typů. Předmět dále seznamuje s nedůležitějšími půdními klasifikacemi domácími i světovými, teritoriální diferenciací pedosféry a otázkami souvisejícími s postavením půdy v ekosystému krajiny.",
      syllabus: [
        "1. Předmět, úkoly a dějiny pedologie a pedogeografie: předmět pedologie a pedogeografie, postavení pedologie a pedogeografie v systému věd, dějiny pedologie, pedologické školy, definice půdy.",
        "2. Zvětrávání: složení hornin zemského povrchu, chemické zvětrávání, mechanické zvětrávání.",
        "3. Složení půdy: půda jako disperzní systém, anorganický podíl půd, organický podíl půd, půdní voda a půdní vzduch.",
        "4. Vlastnosti půd: textura, struktura, tepelný režim, barva, sorpční vlastnosti, půdní reakce reakce, tlumivost.",
        "5. Vznik a tvorba půd (pedogeneze): půdotvorné faktory a podmínky, půdotvorné procesy, půdní profil, diagnostické horizonty.",
        "6. Systém třídění půd (půdní klasifikace): klasifikace půd světa dle FAO, klasifikace půd v taxonomickém klasifikačním systému půd ČR.",
        "7. Prostorová diferenciace pedosféry: geografická zonálnost půd, šířková pásmovitost půd, výšková stupňovitost půd, struktura půdního pokryvu.",
        "8. Půdy a životní prostředí: půda jako prostředí růstu rostlin, okyselování půd, těžké kovy a radionuklidy v půdách, vliv klimatických změn na půdy, dusíkaté látky v půdě, pesticidy, sucho.",
        "9. Degradace půd a jejich ochrana: příčiny degradace půd, eroze půd, půdní podmínky a pěstování rostlin, zachování půdní úrodnosti, biozemědělství."
      ],
      lessons: [
        {
          "id": "z0086-1-predmet-ukoly-a-dejiny-pedologie-a-pedogeograf-1",
          "title": "1. Předmět, úkoly a dějiny pedologie a pedogeografie: předmět pedologie a pedogeografie, postavení pedologie a pedogeografie v systému věd, dějiny pedologie, pedologické školy, definice půdy.",
          "summary": "1. Předmět, úkoly a dějiny pedologie a pedogeografie: předmět pedologie a pedogeografie, postavení pedologie a pedogeografie v systému vě…",
          "minutes": 25,
          "available": false
        },
        {
          "id": "z0086-2-zvetravani-slozeni-hornin-zemskeho-povrchu-che-2",
          "title": "2. Zvětrávání: složení hornin zemského povrchu, chemické zvětrávání, mechanické zvětrávání.",
          "summary": "Studijní okruh: 2. Zvětrávání: složení hornin zemského povrchu, chemické zvětrávání, mechanické zvětrávání.",
          "minutes": 15,
          "available": false
        },
        {
          "id": "z0086-3-slozeni-pudy-puda-jako-disperzni-system-anorga-3",
          "title": "3. Složení půdy: půda jako disperzní systém, anorganický podíl půd, organický podíl půd, půdní voda a půdní vzduch.",
          "summary": "Studijní okruh: 3. Složení půdy: půda jako disperzní systém, anorganický podíl půd, organický podíl půd, půdní voda a půdní vzduch.",
          "minutes": 20,
          "available": false
        },
        {
          "id": "z0086-4-vlastnosti-pud-textura-struktura-tepelny-rezim-4",
          "title": "4. Vlastnosti půd: textura, struktura, tepelný režim, barva, sorpční vlastnosti, půdní reakce reakce, tlumivost.",
          "summary": "Studijní okruh: 4. Vlastnosti půd: textura, struktura, tepelný režim, barva, sorpční vlastnosti, půdní reakce reakce, tlumivost.",
          "minutes": 20,
          "available": false
        },
        {
          "id": "z0086-5-vznik-a-tvorba-pud-pedogeneze-pudotvorne-fakto-5",
          "title": "5. Vznik a tvorba půd (pedogeneze): půdotvorné faktory a podmínky, půdotvorné procesy, půdní profil, diagnostické horizonty.",
          "summary": "Studijní okruh: 5. Vznik a tvorba půd (pedogeneze): půdotvorné faktory a podmínky, půdotvorné procesy, půdní profil, diagnostické horizonty.",
          "minutes": 20,
          "available": false
        },
        {
          "id": "z0086-6-system-trideni-pud-pudni-klasifikace-klasifika-6",
          "title": "6. Systém třídění půd (půdní klasifikace): klasifikace půd světa dle FAO, klasifikace půd v taxonomickém klasifikačním systému půd ČR.",
          "summary": "Studijní okruh: 6. Systém třídění půd (půdní klasifikace): klasifikace půd světa dle FAO, klasifikace půd v taxonomickém klasifikačním systému půd ČR.",
          "minutes": 20,
          "available": false
        },
        {
          "id": "z0086-7-prostorova-diferenciace-pedosfery-geograficka-7",
          "title": "7. Prostorová diferenciace pedosféry: geografická zonálnost půd, šířková pásmovitost půd, výšková stupňovitost půd, struktura půdního pokryvu.",
          "summary": "7. Prostorová diferenciace pedosféry: geografická zonálnost půd, šířková pásmovitost půd, výšková stupňovitost půd, struktura půdního pok…",
          "minutes": 20,
          "available": false
        },
        {
          "id": "z0086-8-pudy-a-zivotni-prostredi-puda-jako-prostredi-r-8",
          "title": "8. Půdy a životní prostředí: půda jako prostředí růstu rostlin, okyselování půd, těžké kovy a radionuklidy v půdách, vliv klimatických změn na půdy, dusíkaté látky v půdě, pesticidy, sucho.",
          "summary": "8. Půdy a životní prostředí: půda jako prostředí růstu rostlin, okyselování půd, těžké kovy a radionuklidy v půdách, vliv klimatických zm…",
          "minutes": 25,
          "available": false
        },
        {
          "id": "z0086-9-degradace-pud-a-jejich-ochrana-priciny-degrada-9",
          "title": "9. Degradace půd a jejich ochrana: příčiny degradace půd, eroze půd, půdní podmínky a pěstování rostlin, zachování půdní úrodnosti, biozemědělství.",
          "summary": "9. Degradace půd a jejich ochrana: příčiny degradace půd, eroze půd, půdní podmínky a pěstování rostlin, zachování půdní úrodnosti, bioze…",
          "minutes": 20,
          "available": false
        }
      ],
      resources: [
        {
          "kind": "link",
          "title": "IS MUNI — detail předmětu",
          "url": "https://is.muni.cz/predmet/sci/Z0086",
          "source": "IS MUNI"
        },
        {
          "kind": "link",
          "title": "Studijní plán v IS MUNI",
          "url": "https://is.muni.cz/plan/23634/fyzicka-geografie",
          "source": "IS MUNI"
        },
        {
          "kind": "link",
          "title": "IS MUNI — detail předmětu",
          "url": "https://is.muni.cz/predmet/sci/Z0086",
          "source": "IS MUNI"
        },
        {
          "kind": "link",
          "title": "Studijní plán v IS MUNI",
          "url": "https://is.muni.cz/plan/23634/fyzicka-geografie",
          "source": "IS MUNI"
        }
      ],
    },
    {
      id: "z0005",
      code: "PřF:Z0005",
      title: "Biogeografie",
      garant: "RNDr. Jan Divíšek, Ph.D.",
      credits: 6,
      semester: "3.",
      completion: "zk",
      tags: ["Povinné předměty"],
      description: "Cílem předmětu je poskytnout studentům všeobecný přehled v oblasti biogeografie a příbuzných disciplín.",
      syllabus: [
        "1. Úvod do biogeografie , návaznost na ostatní disciplíny (ekologie, evoluční biologie, fylogeografie, makroekologie, paleoekologie), základní pojmy, historie biogeografie.",
        "2. Environmentální podmínky a jejich vliv a rozšíření druhů, teorie niky, mezidruhové interakce, biogeografická pravidla.",
        "3. Evoluční biogeografie – mikro- a makroevoluce, mechanismy speciace (přírodní výběr, adaptace, geografická variabilita atp.), typy speciace (alopatrická, sympatrická, peripatrická, parapatrická), počty druhů na Zemi a globální vymírání.",
        "4. Šíření organismů – mechanismy a typy šíření, bariéry, migrace, irupce, biotické výměny.",
        "5. Rozšíření druhů – mapování rozšíření druhů (typy map), areografie, typy rozšíření (zonální, disjunktní, endemické, kosmopolitní, relikty, endemity), Rapoportovo pravidlo.",
        "6. Geografie společenstev – definice a vymezení společenstev, Clemensův a Gleasonův přístup, globální společenstva (biomy), lokální společenstva (vegetační typy, biotopy ČR).",
        "7. Biodiverzita – Alfa, Beta a Gama diverzita a jejich měření, vztah počtu druhů a velikosti plochy, Latitudinální gradient druhové diverzity, lokální druhová diverzita a faktory, které ji ovlivňují.",
        "8. Ostrovní biogeografie – vztah mezi velkostí ostrova, izolací a počtem druhů, Rovnovážná teorie ostrovní biogeografie, obměna druhů na ostrovech, zvláštnosti ostrovní bioty.",
        "9. Invazní ekologie – základní teorie a koncepty, příklady nejznámějších invazí, teorie invasibility, druhová bohatost vs. invazibilita.",
        "10. Biogeografické regionalizace – vymezování biogeografických regionů, biogeografické oblasti světa a jejich charakteristiky, biogeografické regiony Evropy a ČR.",
        "11. Historická biogeografie – rekonstrukce postglaciálního šíření druhů, vývoj krajiny střední Evropy, fylogeografie."
      ],
      lessons: [
        {
          "id": "z0005-1-uvod-do-biogeografie-navaznost-na-ostatni-disc-1",
          "title": "1. Úvod do biogeografie , návaznost na ostatní disciplíny (ekologie, evoluční biologie, fylogeografie, makroekologie, paleoekologie), základní pojmy, historie biogeografie.",
          "summary": "1. Úvod do biogeografie , návaznost na ostatní disciplíny (ekologie, evoluční biologie, fylogeografie, makroekologie, paleoekologie), zák…",
          "minutes": 20,
          "available": false
        },
        {
          "id": "z0005-2-environmentalni-podminky-a-jejich-vliv-a-rozsi-2",
          "title": "2. Environmentální podmínky a jejich vliv a rozšíření druhů, teorie niky, mezidruhové interakce, biogeografická pravidla.",
          "summary": "Studijní okruh: 2. Environmentální podmínky a jejich vliv a rozšíření druhů, teorie niky, mezidruhové interakce, biogeografická pravidla.",
          "minutes": 20,
          "available": false
        },
        {
          "id": "z0005-3-evolucni-biogeografie-mikro-a-makroevoluce-mec-3",
          "title": "3. Evoluční biogeografie – mikro- a makroevoluce, mechanismy speciace (přírodní výběr, adaptace, geografická variabilita atp.), typy speciace (alopatrická, sympatrická, peripatrická, parapatrická), počty druhů na Zemi a globální vymírání.",
          "summary": "3. Evoluční biogeografie – mikro- a makroevoluce, mechanismy speciace (přírodní výběr, adaptace, geografická variabilita atp.), typy spec…",
          "minutes": 25,
          "available": false
        },
        {
          "id": "z0005-4-sireni-organismu-mechanismy-a-typy-sireni-bari-4",
          "title": "4. Šíření organismů – mechanismy a typy šíření, bariéry, migrace, irupce, biotické výměny.",
          "summary": "Studijní okruh: 4. Šíření organismů – mechanismy a typy šíření, bariéry, migrace, irupce, biotické výměny.",
          "minutes": 15,
          "available": false
        },
        {
          "id": "z0005-5-rozsireni-druhu-mapovani-rozsireni-druhu-typy-5",
          "title": "5. Rozšíření druhů – mapování rozšíření druhů (typy map), areografie, typy rozšíření (zonální, disjunktní, endemické, kosmopolitní, relikty, endemity), Rapoportovo pravidlo.",
          "summary": "5. Rozšíření druhů – mapování rozšíření druhů (typy map), areografie, typy rozšíření (zonální, disjunktní, endemické, kosmopolitní, relik…",
          "minutes": 20,
          "available": false
        },
        {
          "id": "z0005-6-geografie-spolecenstev-definice-a-vymezeni-spo-6",
          "title": "6. Geografie společenstev – definice a vymezení společenstev, Clemensův a Gleasonův přístup, globální společenstva (biomy), lokální společenstva (vegetační typy, biotopy ČR).",
          "summary": "6. Geografie společenstev – definice a vymezení společenstev, Clemensův a Gleasonův přístup, globální společenstva (biomy), lokální spole…",
          "minutes": 20,
          "available": false
        },
        {
          "id": "z0005-7-biodiverzita-alfa-beta-a-gama-diverzita-a-jeji-7",
          "title": "7. Biodiverzita – Alfa, Beta a Gama diverzita a jejich měření, vztah počtu druhů a velikosti plochy, Latitudinální gradient druhové diverzity, lokální druhová diverzita a faktory, které ji ovlivňují.",
          "summary": "7. Biodiverzita – Alfa, Beta a Gama diverzita a jejich měření, vztah počtu druhů a velikosti plochy, Latitudinální gradient druhové diver…",
          "minutes": 25,
          "available": false
        },
        {
          "id": "z0005-8-ostrovni-biogeografie-vztah-mezi-velkosti-ostr-8",
          "title": "8. Ostrovní biogeografie – vztah mezi velkostí ostrova, izolací a počtem druhů, Rovnovážná teorie ostrovní biogeografie, obměna druhů na ostrovech, zvláštnosti ostrovní bioty.",
          "summary": "8. Ostrovní biogeografie – vztah mezi velkostí ostrova, izolací a počtem druhů, Rovnovážná teorie ostrovní biogeografie, obměna druhů na …",
          "minutes": 20,
          "available": false
        },
        {
          "id": "z0005-9-invazni-ekologie-zakladni-teorie-a-koncepty-pr-9",
          "title": "9. Invazní ekologie – základní teorie a koncepty, příklady nejznámějších invazí, teorie invasibility, druhová bohatost vs. invazibilita.",
          "summary": "Studijní okruh: 9. Invazní ekologie – základní teorie a koncepty, příklady nejznámějších invazí, teorie invasibility, druhová bohatost vs. invazibilita.",
          "minutes": 20,
          "available": false
        },
        {
          "id": "z0005-10-biogeograficke-regionalizace-vymezovani-bioge-10",
          "title": "10. Biogeografické regionalizace – vymezování biogeografických regionů, biogeografické oblasti světa a jejich charakteristiky, biogeografické regiony Evropy a ČR.",
          "summary": "10. Biogeografické regionalizace – vymezování biogeografických regionů, biogeografické oblasti světa a jejich charakteristiky, biogeograf…",
          "minutes": 20,
          "available": false
        },
        {
          "id": "z0005-11-historicka-biogeografie-rekonstrukce-postglac-11",
          "title": "11. Historická biogeografie – rekonstrukce postglaciálního šíření druhů, vývoj krajiny střední Evropy, fylogeografie.",
          "summary": "Studijní okruh: 11. Historická biogeografie – rekonstrukce postglaciálního šíření druhů, vývoj krajiny střední Evropy, fylogeografie.",
          "minutes": 20,
          "available": false
        }
      ],
      resources: [
        {
          "kind": "link",
          "title": "IS MUNI — detail předmětu",
          "url": "https://is.muni.cz/predmet/sci/Z0005",
          "source": "IS MUNI"
        },
        {
          "kind": "link",
          "title": "Studijní plán v IS MUNI",
          "url": "https://is.muni.cz/plan/23634/fyzicka-geografie",
          "source": "IS MUNI"
        },
        {
          "kind": "link",
          "title": "IS MUNI — detail předmětu",
          "url": "https://is.muni.cz/predmet/sci/Z0005",
          "source": "IS MUNI"
        },
        {
          "kind": "link",
          "title": "Studijní plán v IS MUNI",
          "url": "https://is.muni.cz/plan/23634/fyzicka-geografie",
          "source": "IS MUNI"
        }
      ],
    },
    {
      id: "z0051",
      code: "PřF:Z0051",
      title: "Geomorfologie",
      garant: "doc. RNDr. Zdeněk Máčka, Ph.D.",
      credits: 6,
      semester: "4.",
      completion: "zk",
      tags: ["Povinné předměty"],
      description: "Cílem předmětu je: a) nastínit základní pojmy, koncepce a paradigmata geomorfologie;\nb) vysvětlit fungování reliéfotvorných procesů (exogenních, endogenních);\nc) podat přehled tvarů zemského povrchu, jejich podoby a geneze;\nd) seznámit se základními metodami geomorfologického výzkumu.\nPředmět je zaměřen na problematiku obecné geomorfologie povrchu kontinentů.",
      syllabus: [
        "1. Úvod do geomorfologie",
        "2. Velké tektonické tvary",
        "3. Malé tektonické tvary",
        "4. Tvary vzniklé zvětráváním",
        "5. Svahy",
        "6. Fluviální tvary",
        "7. Periglaciální tvary",
        "8. Ledovcové tvary",
        "9. Datování tvarů reliéfu",
        "10. Interakce endogenních a exogenních procesů",
        "11. Dlouhodobý vývoj reliéfu",
        "12. Kvartérní vývoj reliéfu"
      ],
      lessons: [
        {
          "id": "z0051-1-uvod-do-geomorfologie-1",
          "title": "1. Úvod do geomorfologie",
          "summary": "Studijní okruh: 1. Úvod do geomorfologie",
          "minutes": 12,
          "available": false
        },
        {
          "id": "z0051-2-velke-tektonicke-tvary-2",
          "title": "2. Velké tektonické tvary",
          "summary": "Studijní okruh: 2. Velké tektonické tvary",
          "minutes": 12,
          "available": false
        },
        {
          "id": "z0051-3-male-tektonicke-tvary-3",
          "title": "3. Malé tektonické tvary",
          "summary": "Studijní okruh: 3. Malé tektonické tvary",
          "minutes": 12,
          "available": false
        },
        {
          "id": "z0051-4-tvary-vznikle-zvetravanim-4",
          "title": "4. Tvary vzniklé zvětráváním",
          "summary": "Studijní okruh: 4. Tvary vzniklé zvětráváním",
          "minutes": 12,
          "available": false
        },
        {
          "id": "z0051-5-svahy-5",
          "title": "5. Svahy",
          "summary": "Studijní okruh: 5. Svahy",
          "minutes": 12,
          "available": false
        },
        {
          "id": "z0051-6-fluvialni-tvary-6",
          "title": "6. Fluviální tvary",
          "summary": "Studijní okruh: 6. Fluviální tvary",
          "minutes": 12,
          "available": false
        },
        {
          "id": "z0051-7-periglacialni-tvary-7",
          "title": "7. Periglaciální tvary",
          "summary": "Studijní okruh: 7. Periglaciální tvary",
          "minutes": 12,
          "available": false
        },
        {
          "id": "z0051-8-ledovcove-tvary-8",
          "title": "8. Ledovcové tvary",
          "summary": "Studijní okruh: 8. Ledovcové tvary",
          "minutes": 12,
          "available": false
        },
        {
          "id": "z0051-9-datovani-tvaru-reliefu-9",
          "title": "9. Datování tvarů reliéfu",
          "summary": "Studijní okruh: 9. Datování tvarů reliéfu",
          "minutes": 12,
          "available": false
        },
        {
          "id": "z0051-10-interakce-endogennich-a-exogennich-procesu-10",
          "title": "10. Interakce endogenních a exogenních procesů",
          "summary": "Studijní okruh: 10. Interakce endogenních a exogenních procesů",
          "minutes": 12,
          "available": false
        },
        {
          "id": "z0051-11-dlouhodoby-vyvoj-reliefu-11",
          "title": "11. Dlouhodobý vývoj reliéfu",
          "summary": "Studijní okruh: 11. Dlouhodobý vývoj reliéfu",
          "minutes": 12,
          "available": false
        },
        {
          "id": "z0051-12-kvarterni-vyvoj-reliefu-12",
          "title": "12. Kvartérní vývoj reliéfu",
          "summary": "Studijní okruh: 12. Kvartérní vývoj reliéfu",
          "minutes": 12,
          "available": false
        }
      ],
      resources: [
        {
          "kind": "link",
          "title": "IS MUNI — detail předmětu",
          "url": "https://is.muni.cz/predmet/sci/Z0051",
          "source": "IS MUNI"
        },
        {
          "kind": "link",
          "title": "Studijní plán v IS MUNI",
          "url": "https://is.muni.cz/plan/23634/fyzicka-geografie",
          "source": "IS MUNI"
        },
        {
          "kind": "link",
          "title": "IS MUNI — detail předmětu",
          "url": "https://is.muni.cz/predmet/sci/Z0051",
          "source": "IS MUNI"
        },
        {
          "kind": "link",
          "title": "Studijní plán v IS MUNI",
          "url": "https://is.muni.cz/plan/23634/fyzicka-geografie",
          "source": "IS MUNI"
        }
      ],
    },
    {
      id: "z4066",
      code: "PřF:Z4066",
      title: "Krajinná ekologie",
      garant: "RNDr. Martin Culek, Ph.D.",
      credits: 5,
      semester: "4.",
      completion: "zk",
      tags: ["Povinné předměty"],
      description: "Přístup předmětu je ekosystémový s terénními identifikacemi, analýzou, interpretací, hodnocením a návrhy úprav.\nCíle:\nRozšířit studentům geografické znalosti potřebné pro studium krajiny;\nNaučit studenty rozeznávat a hodnotit různé typy struktury krajiny.\nProbrat a charakterizovat fungování krajinných fenoménů.\nProcvičit se studenty mapování ekosystémů - výběr biologicky nejcennějších území\nSeznámit studenty se základy navrhování územních systémů ekologické stability krajiny.",
      syllabus: [
        "1. Krajinná sféra Země, globální prostorová strukturace.",
        "2. Přírodní krajiny Země - zonobiomy, orobiomy, geobiomy.",
        "3. Fenomény v krajině (říční, údolní, vrcholový, pískovcový...)",
        "4. Anemoorografické systémy v horách, hilltoping.",
        "5. Primární, sekundární a terciální struktura krajiny.",
        "6. Teorie systémů a geosystémů.",
        "7. Krajino-ekologické metriky pro studium krajiny.",
        "8. Kostra ekologické stability krajiny a územní systém ekologické stability krajiny.",
        "9. Typologie krajiny - stručně na evropské úrovni (dle Lőw, Míchal 2003), podrobněji ČR (Lőw et all 2006).",
        "10. Polodenní exkurse do okolí Brna s ukázkami některých krajinných fenoménů.",
        "Samostudium: Terénní mapování zvoleného území s určením typů landuse a vymezováním ekologicky hodnotných území.",
        "Obsah cvičení:",
        "Část je věnována konzultacím vlastního mapování studentů.",
        "Identifikace krajinných fenoménů.",
        "Procvičení základních krajino-ekologických metrik.",
        "Pět cvičení je věnováno na půldenní exkurzi do okolí Brna s ukázkami některých krajinných fenoménů - za aktivní účasti studentů."
      ],
      lessons: [
        {
          "id": "z4066-1-krajinna-sfera-zeme-globalni-prostorova-strukt-1",
          "title": "1. Krajinná sféra Země, globální prostorová strukturace.",
          "summary": "Studijní okruh: 1. Krajinná sféra Země, globální prostorová strukturace.",
          "minutes": 12,
          "available": false
        },
        {
          "id": "z4066-2-prirodni-krajiny-zeme-zonobiomy-orobiomy-geobi-2",
          "title": "2. Přírodní krajiny Země - zonobiomy, orobiomy, geobiomy.",
          "summary": "Studijní okruh: 2. Přírodní krajiny Země - zonobiomy, orobiomy, geobiomy.",
          "minutes": 12,
          "available": false
        },
        {
          "id": "z4066-3-fenomeny-v-krajine-ricni-udolni-vrcholovy-pisk-3",
          "title": "3. Fenomény v krajině (říční, údolní, vrcholový, pískovcový...)",
          "summary": "Studijní okruh: 3. Fenomény v krajině (říční, údolní, vrcholový, pískovcový...)",
          "minutes": 15,
          "available": false
        },
        {
          "id": "z4066-4-anemoorograficke-systemy-v-horach-hilltoping-4",
          "title": "4. Anemoorografické systémy v horách, hilltoping.",
          "summary": "Studijní okruh: 4. Anemoorografické systémy v horách, hilltoping.",
          "minutes": 12,
          "available": false
        },
        {
          "id": "z4066-5-primarni-sekundarni-a-tercialni-struktura-kraj-5",
          "title": "5. Primární, sekundární a terciální struktura krajiny.",
          "summary": "Studijní okruh: 5. Primární, sekundární a terciální struktura krajiny.",
          "minutes": 12,
          "available": false
        },
        {
          "id": "z4066-6-teorie-systemu-a-geosystemu-6",
          "title": "6. Teorie systémů a geosystémů.",
          "summary": "Studijní okruh: 6. Teorie systémů a geosystémů.",
          "minutes": 12,
          "available": false
        },
        {
          "id": "z4066-7-krajino-ekologicke-metriky-pro-studium-krajiny-7",
          "title": "7. Krajino-ekologické metriky pro studium krajiny.",
          "summary": "Studijní okruh: 7. Krajino-ekologické metriky pro studium krajiny.",
          "minutes": 12,
          "available": false
        },
        {
          "id": "z4066-8-kostra-ekologicke-stability-krajiny-a-uzemni-s-8",
          "title": "8. Kostra ekologické stability krajiny a územní systém ekologické stability krajiny.",
          "summary": "Studijní okruh: 8. Kostra ekologické stability krajiny a územní systém ekologické stability krajiny.",
          "minutes": 15,
          "available": false
        },
        {
          "id": "z4066-9-typologie-krajiny-strucne-na-evropske-urovni-d-9",
          "title": "9. Typologie krajiny - stručně na evropské úrovni (dle Lőw, Míchal 2003), podrobněji ČR (Lőw et all 2006).",
          "summary": "Studijní okruh: 9. Typologie krajiny - stručně na evropské úrovni (dle Lőw, Míchal 2003), podrobněji ČR (Lőw et all 2006).",
          "minutes": 20,
          "available": false
        },
        {
          "id": "z4066-10-polodenni-exkurse-do-okoli-brna-s-ukazkami-ne-10",
          "title": "10. Polodenní exkurse do okolí Brna s ukázkami některých krajinných fenoménů.",
          "summary": "Studijní okruh: 10. Polodenní exkurse do okolí Brna s ukázkami některých krajinných fenoménů.",
          "minutes": 15,
          "available": false
        },
        {
          "id": "z4066-samostudium-terenni-mapovani-zvoleneho-uzemi-s-u-11",
          "title": "Samostudium: Terénní mapování zvoleného území s určením typů landuse a vymezováním ekologicky hodnotných území.",
          "summary": "Studijní okruh: Samostudium: Terénní mapování zvoleného území s určením typů landuse a vymezováním ekologicky hodnotných území.",
          "minutes": 20,
          "available": false
        },
        {
          "id": "z4066-cast-je-venovana-konzultacim-vlastniho-mapovani-12",
          "title": "Část je věnována konzultacím vlastního mapování studentů.",
          "summary": "Studijní okruh: Část je věnována konzultacím vlastního mapování studentů.",
          "minutes": 12,
          "sectionTitle": "Obsah cvičení",
          "available": false
        },
        {
          "id": "z4066-identifikace-krajinnych-fenomenu-13",
          "title": "Identifikace krajinných fenoménů.",
          "summary": "Studijní okruh: Identifikace krajinných fenoménů.",
          "minutes": 12,
          "sectionTitle": "Obsah cvičení",
          "available": false
        },
        {
          "id": "z4066-procviceni-zakladnich-krajino-ekologickych-metri-14",
          "title": "Procvičení základních krajino-ekologických metrik.",
          "summary": "Studijní okruh: Procvičení základních krajino-ekologických metrik.",
          "minutes": 12,
          "sectionTitle": "Obsah cvičení",
          "available": false
        },
        {
          "id": "z4066-pet-cviceni-je-venovano-na-puldenni-exkurzi-do-o-15",
          "title": "Pět cvičení je věnováno na půldenní exkurzi do okolí Brna s ukázkami některých krajinných fenoménů - za aktivní účasti studentů.",
          "summary": "Studijní okruh: Pět cvičení je věnováno na půldenní exkurzi do okolí Brna s ukázkami některých krajinných fenoménů - za aktivní účasti studentů.",
          "minutes": 20,
          "sectionTitle": "Obsah cvičení",
          "available": false
        }
      ],
      resources: [
        {
          "kind": "link",
          "title": "IS MUNI — detail předmětu",
          "url": "https://is.muni.cz/predmet/sci/Z4066",
          "source": "IS MUNI"
        },
        {
          "kind": "link",
          "title": "Studijní plán v IS MUNI",
          "url": "https://is.muni.cz/plan/23634/fyzicka-geografie",
          "source": "IS MUNI"
        },
        {
          "kind": "link",
          "title": "IS MUNI — detail předmětu",
          "url": "https://is.muni.cz/predmet/sci/Z4066",
          "source": "IS MUNI"
        },
        {
          "kind": "link",
          "title": "Studijní plán v IS MUNI",
          "url": "https://is.muni.cz/plan/23634/fyzicka-geografie",
          "source": "IS MUNI"
        }
      ],
    },
    {
      id: "z0064",
      code: "PřF:Z0064",
      title: "Regionální případové studie",
      garant: "RNDr. Vladimír Herber, CSc.",
      credits: 3,
      semester: "4.",
      completion: "z",
      tags: ["Povinné předměty"],
      description: "Cílem výuky je prakticky ověřit získané poznatky a dovednosti v terénu, připravit studenty pro řešení praktických úloh, podporovat týmovou i individuální činnost, prezentovat zjištěné poznatky na minikonferenci, vypracovat závěrečnou situační zprávu.",
      syllabus: [
        "Aplikace a prohlubování geografických poznatků a dovedností z regionální geografie ČR a krajinné ekologie.",
        "1. část - přípravná fáze",
        "Studenti jsou rozděleni do pracovních skupin, kdy každá skupina zpracovává podklady pro zadané úkoly a téma. Akčním prostorem je vždy vybrané modelové území v ČR.",
        "2. část - vlastní terénní část",
        "Během pobytu v modelovém území pokračuje činnost jednotlivých pracovních skupin, všechny skupiny a jednotlivci pracují na shromažďování podkladů a dokumentace z terénu pro závěrečnou zprávu, každý účastník exkurze si vede své vlastní terénní zápisky, které předloží k závěrečnému hodnocení.",
        "3. minikonference",
        "Každá skupina v cca 5 minutách prezentuje jedno z řešených témat – PC a dataprojektor k dispozici.",
        "4. část - vypracování situační zprávy: Modelové území - Případové studie",
        "Na základě rešeršní části a podkladů z jednotlivých exkurzních dnů vypracují pracovní skupiny, kterou odevzdají jak v tištěné podobě, tak vloží v elektronické podobě (text ve WORDu) vloží do ISu."
      ],
      lessons: [
        {
          "id": "z0064-aplikace-a-prohlubovani-geografickych-poznatku-a-1",
          "title": "Aplikace a prohlubování geografických poznatků a dovedností z regionální geografie ČR a krajinné ekologie.",
          "summary": "Studijní okruh: Aplikace a prohlubování geografických poznatků a dovedností z regionální geografie ČR a krajinné ekologie.",
          "minutes": 20,
          "available": false
        },
        {
          "id": "z0064-1-cast-pripravna-faze-2",
          "title": "1. část - přípravná fáze",
          "summary": "Studijní okruh: 1. část - přípravná fáze",
          "minutes": 12,
          "available": false
        },
        {
          "id": "z0064-studenti-jsou-rozdeleni-do-pracovnich-skupin-kdy-3",
          "title": "Studenti jsou rozděleni do pracovních skupin, kdy každá skupina zpracovává podklady pro zadané úkoly a téma. Akčním prostorem je vždy vybrané modelové území v ČR.",
          "summary": "Studenti jsou rozděleni do pracovních skupin, kdy každá skupina zpracovává podklady pro zadané úkoly a téma. Akčním prostorem je vždy vyb…",
          "minutes": 20,
          "available": false
        },
        {
          "id": "z0064-2-cast-vlastni-terenni-cast-4",
          "title": "2. část - vlastní terénní část",
          "summary": "Studijní okruh: 2. část - vlastní terénní část",
          "minutes": 12,
          "available": false
        },
        {
          "id": "z0064-behem-pobytu-v-modelovem-uzemi-pokracuje-cinnost-5",
          "title": "Během pobytu v modelovém území pokračuje činnost jednotlivých pracovních skupin, všechny skupiny a jednotlivci pracují na shromažďování podkladů a dokumentace z terénu pro závěrečnou zprávu, každý účastník exkurze si vede své vlastní terénní zápisky, které předloží k závěrečnému hodnocení.",
          "summary": "Během pobytu v modelovém území pokračuje činnost jednotlivých pracovních skupin, všechny skupiny a jednotlivci pracují na shromažďování p…",
          "minutes": 25,
          "available": false
        },
        {
          "id": "z0064-3-minikonference-6",
          "title": "3. minikonference",
          "summary": "Studijní okruh: 3. minikonference",
          "minutes": 12,
          "available": false
        },
        {
          "id": "z0064-kazda-skupina-v-cca-5-minutach-prezentuje-jedno-7",
          "title": "Každá skupina v cca 5 minutách prezentuje jedno z řešených témat – PC a dataprojektor k dispozici.",
          "summary": "Studijní okruh: Každá skupina v cca 5 minutách prezentuje jedno z řešených témat – PC a dataprojektor k dispozici.",
          "minutes": 15,
          "available": false
        },
        {
          "id": "z0064-4-cast-vypracovani-situacni-zpravy-modelove-uzem-8",
          "title": "4. část - vypracování situační zprávy: Modelové území - Případové studie",
          "summary": "Studijní okruh: 4. část - vypracování situační zprávy: Modelové území - Případové studie",
          "minutes": 15,
          "available": false
        },
        {
          "id": "z0064-na-zaklade-resersni-casti-a-podkladu-z-jednotliv-9",
          "title": "Na základě rešeršní části a podkladů z jednotlivých exkurzních dnů vypracují pracovní skupiny, kterou odevzdají jak v tištěné podobě, tak vloží v elektronické podobě (text ve WORDu) vloží do ISu.",
          "summary": "Na základě rešeršní části a podkladů z jednotlivých exkurzních dnů vypracují pracovní skupiny, kterou odevzdají jak v tištěné podobě, tak…",
          "minutes": 25,
          "available": false
        }
      ],
      resources: [
        {
          "kind": "link",
          "title": "IS MUNI — detail předmětu",
          "url": "https://is.muni.cz/predmet/sci/Z0064",
          "source": "IS MUNI"
        },
        {
          "kind": "link",
          "title": "Studijní plán v IS MUNI",
          "url": "https://is.muni.cz/plan/23634/fyzicka-geografie",
          "source": "IS MUNI"
        },
        {
          "kind": "link",
          "title": "IS MUNI — detail předmětu",
          "url": "https://is.muni.cz/predmet/sci/Z0064",
          "source": "IS MUNI"
        },
        {
          "kind": "link",
          "title": "Studijní plán v IS MUNI",
          "url": "https://is.muni.cz/plan/23634/fyzicka-geografie",
          "source": "IS MUNI"
        }
      ],
    },
    {
      id: "z0073",
      code: "PřF:Z0073",
      title: "Terénní cvičení z FG 2",
      garant: "RNDr. Jan Divíšek, Ph.D.",
      credits: 2,
      semester: "4.",
      completion: "z",
      tags: ["Povinné předměty"],
      description: "Terénní cvičení je primárně zaměřeno na praktickou aplikaci a osvojení poznatků z předmětů Geomorfologie, Pedogeografie a Biogeografie, které jsou vyučovány během daného školního roku a terénní cvičení na ně navazuje.\nHlavní cíle: - naučit studenty, jak dělat průzkum krajiny z pohledu zmíněných disciplin;\n- naučit mapovací techniky v geomorfologii a pedologii;\n- naučit zpracovaní fytocenologického snímku a vegetační mapování (mapování biotopů).",
      syllabus: [
        "Obsah předmětu Mapovací kurs spočívá v následujících krocích:",
        "1. Analýza topografických map a leteckých snímků mapovaného území. Seznámení s topografií území. Sestavení předběžného inventárního seznamu tvarů reliéfu nacházejících se v území.",
        "2. Vizuální vymezení elementárních forem georeliéfu ve vrstevnicové topografické mapě, zpracování předběžné mapy elementárních geoforem.",
        "3. Ověřování elementárních geoforem v terénu, geomorfologické mapování.",
        "4. Mapování půdního pokryvu (půdních typů) v navštíveném území, výkop půdní sondy a popis půdního profilu.",
        "5. Zpracování jednoduchého fytocenologického snímku a vegetačního profilu svahem.",
        "6. Zpracování mapy vegetace (tzv. biotopů) a/nebo mapy rozšíření vybraných rostlin určeného území.",
        "7. Dopracování finální verze geomorfologické mapy a zpracování čistopisu map a profilů.",
        "Přesná náplň kursu je odvislá od místa konání a počasí."
      ],
      lessons: [
        {
          "id": "z0073-1-analyza-topografickych-map-a-leteckych-snimku-1",
          "title": "1. Analýza topografických map a leteckých snímků mapovaného území. Seznámení s topografií území. Sestavení předběžného inventárního seznamu tvarů reliéfu nacházejících se v území.",
          "summary": "1. Analýza topografických map a leteckých snímků mapovaného území. Seznámení s topografií území. Sestavení předběžného inventárního sezna…",
          "minutes": 20,
          "sectionTitle": "Obsah předmětu Mapovací kurs spočívá v následujících krocích",
          "available": false
        },
        {
          "id": "z0073-2-vizualni-vymezeni-elementarnich-forem-georelie-2",
          "title": "2. Vizuální vymezení elementárních forem georeliéfu ve vrstevnicové topografické mapě, zpracování předběžné mapy elementárních geoforem.",
          "summary": "Studijní okruh: 2. Vizuální vymezení elementárních forem georeliéfu ve vrstevnicové topografické mapě, zpracování předběžné mapy elementárních geoforem.",
          "minutes": 20,
          "sectionTitle": "Obsah předmětu Mapovací kurs spočívá v následujících krocích",
          "available": false
        },
        {
          "id": "z0073-3-overovani-elementarnich-geoforem-v-terenu-geom-3",
          "title": "3. Ověřování elementárních geoforem v terénu, geomorfologické mapování.",
          "summary": "Studijní okruh: 3. Ověřování elementárních geoforem v terénu, geomorfologické mapování.",
          "minutes": 15,
          "sectionTitle": "Obsah předmětu Mapovací kurs spočívá v následujících krocích",
          "available": false
        },
        {
          "id": "z0073-4-mapovani-pudniho-pokryvu-pudnich-typu-v-navsti-4",
          "title": "4. Mapování půdního pokryvu (půdních typů) v navštíveném území, výkop půdní sondy a popis půdního profilu.",
          "summary": "Studijní okruh: 4. Mapování půdního pokryvu (půdních typů) v navštíveném území, výkop půdní sondy a popis půdního profilu.",
          "minutes": 20,
          "sectionTitle": "Obsah předmětu Mapovací kurs spočívá v následujících krocích",
          "available": false
        },
        {
          "id": "z0073-5-zpracovani-jednoducheho-fytocenologickeho-snim-5",
          "title": "5. Zpracování jednoduchého fytocenologického snímku a vegetačního profilu svahem.",
          "summary": "Studijní okruh: 5. Zpracování jednoduchého fytocenologického snímku a vegetačního profilu svahem.",
          "minutes": 15,
          "sectionTitle": "Obsah předmětu Mapovací kurs spočívá v následujících krocích",
          "available": false
        },
        {
          "id": "z0073-6-zpracovani-mapy-vegetace-tzv-biotopu-a-nebo-ma-6",
          "title": "6. Zpracování mapy vegetace (tzv. biotopů) a/nebo mapy rozšíření vybraných rostlin určeného území.",
          "summary": "Studijní okruh: 6. Zpracování mapy vegetace (tzv. biotopů) a/nebo mapy rozšíření vybraných rostlin určeného území.",
          "minutes": 15,
          "sectionTitle": "Obsah předmětu Mapovací kurs spočívá v následujících krocích",
          "available": false
        },
        {
          "id": "z0073-7-dopracovani-finalni-verze-geomorfologicke-mapy-7",
          "title": "7. Dopracování finální verze geomorfologické mapy a zpracování čistopisu map a profilů.",
          "summary": "Studijní okruh: 7. Dopracování finální verze geomorfologické mapy a zpracování čistopisu map a profilů.",
          "minutes": 15,
          "sectionTitle": "Obsah předmětu Mapovací kurs spočívá v následujících krocích",
          "available": false
        },
        {
          "id": "z0073-presna-napln-kursu-je-odvisla-od-mista-konani-a-8",
          "title": "Přesná náplň kursu je odvislá od místa konání a počasí.",
          "summary": "Studijní okruh: Přesná náplň kursu je odvislá od místa konání a počasí.",
          "minutes": 12,
          "sectionTitle": "Obsah předmětu Mapovací kurs spočívá v následujících krocích",
          "available": false
        }
      ],
      resources: [
        {
          "kind": "link",
          "title": "IS MUNI — detail předmětu",
          "url": "https://is.muni.cz/predmet/sci/Z0073",
          "source": "IS MUNI"
        },
        {
          "kind": "link",
          "title": "Studijní plán v IS MUNI",
          "url": "https://is.muni.cz/plan/23634/fyzicka-geografie",
          "source": "IS MUNI"
        },
        {
          "kind": "link",
          "title": "IS MUNI — detail předmětu",
          "url": "https://is.muni.cz/predmet/sci/Z0073",
          "source": "IS MUNI"
        },
        {
          "kind": "link",
          "title": "Studijní plán v IS MUNI",
          "url": "https://is.muni.cz/plan/23634/fyzicka-geografie",
          "source": "IS MUNI"
        }
      ],
    },
    {
      id: "z0124",
      code: "PřF:Z0124",
      title: "Ter. cvičení z FG 1",
      garant: "doc. Mgr. Kamil Láska, Ph.D.",
      credits: 2,
      semester: "4.",
      completion: "z",
      tags: ["Povinné předměty"],
      description: "Úkolem cvičení je aplikace a prohloubení poznatků a dovedností z fyzické geografie, tj. zejména z meteorologie, klimatologie a hydrologie v konkrétních terénních lokalitách.",
      syllabus: [
        "Terénní cvičení probíhá polytematicky ve zvolené lokalitě v následujících fázích:",
        "- rekognoskace terénu a vysvětlení fyzickogeografických jevů;",
        "- samostatná práce studentů;",
        "- vyhodnocení terénních měření a pozorování a zpracování textových, tabelárních a grafických výstupů."
      ],
      lessons: [
        {
          "id": "z0124-rekognoskace-terenu-a-vysvetleni-fyzickogeografi-1",
          "title": "- rekognoskace terénu a vysvětlení fyzickogeografických jevů;",
          "summary": "Studijní okruh: - rekognoskace terénu a vysvětlení fyzickogeografických jevů;",
          "minutes": 15,
          "sectionTitle": "Terénní cvičení probíhá polytematicky ve zvolené lokalitě v následujících fázích",
          "available": false
        },
        {
          "id": "z0124-samostatna-prace-studentu-2",
          "title": "- samostatná práce studentů;",
          "summary": "Studijní okruh: - samostatná práce studentů;",
          "minutes": 12,
          "sectionTitle": "Terénní cvičení probíhá polytematicky ve zvolené lokalitě v následujících fázích",
          "available": false
        },
        {
          "id": "z0124-vyhodnoceni-terennich-mereni-a-pozorovani-a-zpra-3",
          "title": "- vyhodnocení terénních měření a pozorování a zpracování textových, tabelárních a grafických výstupů.",
          "summary": "Studijní okruh: - vyhodnocení terénních měření a pozorování a zpracování textových, tabelárních a grafických výstupů.",
          "minutes": 20,
          "sectionTitle": "Terénní cvičení probíhá polytematicky ve zvolené lokalitě v následujících fázích",
          "available": false
        }
      ],
      resources: [
        {
          "kind": "link",
          "title": "IS MUNI — detail předmětu",
          "url": "https://is.muni.cz/predmet/sci/Z0124",
          "source": "IS MUNI"
        },
        {
          "kind": "link",
          "title": "Studijní plán v IS MUNI",
          "url": "https://is.muni.cz/plan/23634/fyzicka-geografie",
          "source": "IS MUNI"
        },
        {
          "kind": "link",
          "title": "IS MUNI — detail předmětu",
          "url": "https://is.muni.cz/predmet/sci/Z0124",
          "source": "IS MUNI"
        },
        {
          "kind": "link",
          "title": "Studijní plán v IS MUNI",
          "url": "https://is.muni.cz/plan/23634/fyzicka-geografie",
          "source": "IS MUNI"
        }
      ],
    },
    {
      id: "z5151",
      code: "PřF:Z5151",
      title: "Biodiverzita a rizika",
      garant: "Mgr. Karel Brabec, Ph.D.",
      credits: 4,
      semester: "5.",
      completion: "zk",
      tags: ["Povinné předměty"],
      description: "Cílem předmětu je poskytnout základní přehled o principech působení faktorů prostředí na biologickou diverzitu. V kontextu ekologických vztahů budou popsány mechanismy působení přírodních i antropogenně ovlivněných podmínek. Na příkladech terestrických a sladkovodních ekosystémů budou představeny analýzy rizik spojených se změnami stanovišť, klimatu, využití krajiny, invazemi nepůvodních druhů a chemickým znečištěním.",
      syllabus: [
        "1) Úvod (struktura ekosystémů, biologická diverzita, ekologické procesy)",
        "2) Biodiverzita – teorie, charakteristiky, řídící faktory",
        "3) Biodiverzita – časo-prostorové aspekty",
        "4) Environmentální rizika (typologie); schéma DPSIR (Řídící faktory, Tlaky, Stavy, Dopady, Odezvy)",
        "5) Ekologie působení stresoru",
        "6) Biodiverzita a ekosystémové procesy",
        "7) Vztahy biodiverzity ke klimatu",
        "8) Scénáře změn využití krajiny",
        "9) Změny biotopů (Natura 2000, Ochrana stanovišť)",
        "10) Vliv chemického znečištění na biodiverzitu",
        "11) Biologické invaze",
        "12) Ekosystémové služby",
        "13) Analýza rizik pro biodiverzitu"
      ],
      lessons: [
        {
          "id": "z5151-1-uvod-struktura-ekosystemu-biologicka-diverzita-1",
          "title": "1) Úvod (struktura ekosystémů, biologická diverzita, ekologické procesy)",
          "summary": "Studijní okruh: 1) Úvod (struktura ekosystémů, biologická diverzita, ekologické procesy)",
          "minutes": 15,
          "available": false
        },
        {
          "id": "z5151-2-biodiverzita-teorie-charakteristiky-ridici-fak-2",
          "title": "2) Biodiverzita – teorie, charakteristiky, řídící faktory",
          "summary": "Studijní okruh: 2) Biodiverzita – teorie, charakteristiky, řídící faktory",
          "minutes": 12,
          "available": false
        },
        {
          "id": "z5151-3-biodiverzita-caso-prostorove-aspekty-3",
          "title": "3) Biodiverzita – časo-prostorové aspekty",
          "summary": "Studijní okruh: 3) Biodiverzita – časo-prostorové aspekty",
          "minutes": 12,
          "available": false
        },
        {
          "id": "z5151-4-environmentalni-rizika-typologie-schema-dpsir-4",
          "title": "4) Environmentální rizika (typologie); schéma DPSIR (Řídící faktory, Tlaky, Stavy, Dopady, Odezvy)",
          "summary": "Studijní okruh: 4) Environmentální rizika (typologie); schéma DPSIR (Řídící faktory, Tlaky, Stavy, Dopady, Odezvy)",
          "minutes": 15,
          "available": false
        },
        {
          "id": "z5151-5-ekologie-pusobeni-stresoru-5",
          "title": "5) Ekologie působení stresoru",
          "summary": "Studijní okruh: 5) Ekologie působení stresoru",
          "minutes": 12,
          "available": false
        },
        {
          "id": "z5151-6-biodiverzita-a-ekosystemove-procesy-6",
          "title": "6) Biodiverzita a ekosystémové procesy",
          "summary": "Studijní okruh: 6) Biodiverzita a ekosystémové procesy",
          "minutes": 12,
          "available": false
        },
        {
          "id": "z5151-7-vztahy-biodiverzity-ke-klimatu-7",
          "title": "7) Vztahy biodiverzity ke klimatu",
          "summary": "Studijní okruh: 7) Vztahy biodiverzity ke klimatu",
          "minutes": 12,
          "available": false
        },
        {
          "id": "z5151-8-scenare-zmen-vyuziti-krajiny-8",
          "title": "8) Scénáře změn využití krajiny",
          "summary": "Studijní okruh: 8) Scénáře změn využití krajiny",
          "minutes": 12,
          "available": false
        },
        {
          "id": "z5151-9-zmeny-biotopu-natura-2000-ochrana-stanovist-9",
          "title": "9) Změny biotopů (Natura 2000, Ochrana stanovišť)",
          "summary": "Studijní okruh: 9) Změny biotopů (Natura 2000, Ochrana stanovišť)",
          "minutes": 12,
          "available": false
        },
        {
          "id": "z5151-10-vliv-chemickeho-znecisteni-na-biodiverzitu-10",
          "title": "10) Vliv chemického znečištění na biodiverzitu",
          "summary": "Studijní okruh: 10) Vliv chemického znečištění na biodiverzitu",
          "minutes": 12,
          "available": false
        },
        {
          "id": "z5151-11-biologicke-invaze-11",
          "title": "11) Biologické invaze",
          "summary": "Studijní okruh: 11) Biologické invaze",
          "minutes": 12,
          "available": false
        },
        {
          "id": "z5151-12-ekosystemove-sluzby-12",
          "title": "12) Ekosystémové služby",
          "summary": "Studijní okruh: 12) Ekosystémové služby",
          "minutes": 12,
          "available": false
        },
        {
          "id": "z5151-13-analyza-rizik-pro-biodiverzitu-13",
          "title": "13) Analýza rizik pro biodiverzitu",
          "summary": "Studijní okruh: 13) Analýza rizik pro biodiverzitu",
          "minutes": 12,
          "available": false
        }
      ],
      resources: [
        {
          "kind": "link",
          "title": "IS MUNI — detail předmětu",
          "url": "https://is.muni.cz/predmet/sci/Z5151",
          "source": "IS MUNI"
        },
        {
          "kind": "link",
          "title": "Studijní plán v IS MUNI",
          "url": "https://is.muni.cz/plan/23634/fyzicka-geografie",
          "source": "IS MUNI"
        },
        {
          "kind": "link",
          "title": "IS MUNI — detail předmětu",
          "url": "https://is.muni.cz/predmet/sci/Z5151",
          "source": "IS MUNI"
        },
        {
          "kind": "link",
          "title": "Studijní plán v IS MUNI",
          "url": "https://is.muni.cz/plan/23634/fyzicka-geografie",
          "source": "IS MUNI"
        }
      ],
    },
    {
      id: "z0025",
      code: "PřF:Z0025",
      title: "Ekologie a životní prostředí",
      garant: "RNDr. Martin Culek, Ph.D.",
      credits: 5,
      semester: "3.",
      completion: "zk",
      tags: ["Povinně-volitelné předměty"],
      description: "Studenti se v předmětu mají naučit:\nAplikovat své dosavadní poznatky z geografie;\nSamostatně hodnotit ekologické problémy a problémy ŽP;\nAnalyzovat vliv člověka a lidské společnosti na přírodu a krajinu a na následky jeho někdy neuvážených rozhodnutí;\nHodnotit význam vybraných organismů a jejich společenstev jako součásti kvality životního prostředí;\nPorozumět problematice lesnictví a jeho ekologických dopadů.",
      syllabus: [
        "1. Vymezení předmětu a cíle studia, návaznost ekologie na další vědní disciplíny, environmentalistika.",
        "2. Jedinec, populace, společenstvo, geobiocenóza, ekosystém.",
        "3. Stabilita ekosystému, homeostáze, homeorhéza.",
        "4. Introdukce, aklimatizace a domestikace organismů.",
        "5. Historie výskytu vybraných velkých druhů živočichů v ČR.",
        "6. Stupně přirozenosti společenstev, stupně ekologické stability, koeficient ekologické stability.",
        "7. Typizace ekosystémů používané v ochraně přírody a prostředí.",
        "8. Historie hospodaření člověka v lesích, současná organizace lesů, hospodaření v nich a dopady do ŽP.",
        "9. Zákon o lesích, Lesní hospodářské plány, Oblastní plány rozvoje lesů"
      ],
      lessons: [
        {
          "id": "z0025-1-vymezeni-predmetu-a-cile-studia-navaznost-ekol-1",
          "title": "1. Vymezení předmětu a cíle studia, návaznost ekologie na další vědní disciplíny, environmentalistika.",
          "summary": "Studijní okruh: 1. Vymezení předmětu a cíle studia, návaznost ekologie na další vědní disciplíny, environmentalistika.",
          "minutes": 20,
          "available": false
        },
        {
          "id": "z0025-2-jedinec-populace-spolecenstvo-geobiocenoza-eko-2",
          "title": "2. Jedinec, populace, společenstvo, geobiocenóza, ekosystém.",
          "summary": "Studijní okruh: 2. Jedinec, populace, společenstvo, geobiocenóza, ekosystém.",
          "minutes": 12,
          "available": false
        },
        {
          "id": "z0025-3-stabilita-ekosystemu-homeostaze-homeorheza-3",
          "title": "3. Stabilita ekosystému, homeostáze, homeorhéza.",
          "summary": "Studijní okruh: 3. Stabilita ekosystému, homeostáze, homeorhéza.",
          "minutes": 12,
          "available": false
        },
        {
          "id": "z0025-4-introdukce-aklimatizace-a-domestikace-organism-4",
          "title": "4. Introdukce, aklimatizace a domestikace organismů.",
          "summary": "Studijní okruh: 4. Introdukce, aklimatizace a domestikace organismů.",
          "minutes": 12,
          "available": false
        },
        {
          "id": "z0025-5-historie-vyskytu-vybranych-velkych-druhu-zivoc-5",
          "title": "5. Historie výskytu vybraných velkých druhů živočichů v ČR.",
          "summary": "Studijní okruh: 5. Historie výskytu vybraných velkých druhů živočichů v ČR.",
          "minutes": 12,
          "available": false
        },
        {
          "id": "z0025-6-stupne-prirozenosti-spolecenstev-stupne-ekolog-6",
          "title": "6. Stupně přirozenosti společenstev, stupně ekologické stability, koeficient ekologické stability.",
          "summary": "Studijní okruh: 6. Stupně přirozenosti společenstev, stupně ekologické stability, koeficient ekologické stability.",
          "minutes": 15,
          "available": false
        },
        {
          "id": "z0025-7-typizace-ekosystemu-pouzivane-v-ochrane-prirod-7",
          "title": "7. Typizace ekosystémů používané v ochraně přírody a prostředí.",
          "summary": "Studijní okruh: 7. Typizace ekosystémů používané v ochraně přírody a prostředí.",
          "minutes": 15,
          "available": false
        },
        {
          "id": "z0025-8-historie-hospodareni-cloveka-v-lesich-soucasna-8",
          "title": "8. Historie hospodaření člověka v lesích, současná organizace lesů, hospodaření v nich a dopady do ŽP.",
          "summary": "Studijní okruh: 8. Historie hospodaření člověka v lesích, současná organizace lesů, hospodaření v nich a dopady do ŽP.",
          "minutes": 20,
          "available": false
        },
        {
          "id": "z0025-9-zakon-o-lesich-lesni-hospodarske-plany-oblastn-9",
          "title": "9. Zákon o lesích, Lesní hospodářské plány, Oblastní plány rozvoje lesů",
          "summary": "Studijní okruh: 9. Zákon o lesích, Lesní hospodářské plány, Oblastní plány rozvoje lesů",
          "minutes": 15,
          "available": false
        }
      ],
      resources: [
        {
          "kind": "link",
          "title": "IS MUNI — detail předmětu",
          "url": "https://is.muni.cz/predmet/sci/Z0025",
          "source": "IS MUNI"
        },
        {
          "kind": "link",
          "title": "Studijní plán v IS MUNI",
          "url": "https://is.muni.cz/plan/23634/fyzicka-geografie",
          "source": "IS MUNI"
        },
        {
          "kind": "link",
          "title": "IS MUNI — detail předmětu",
          "url": "https://is.muni.cz/predmet/sci/Z0025",
          "source": "IS MUNI"
        },
        {
          "kind": "link",
          "title": "Studijní plán v IS MUNI",
          "url": "https://is.muni.cz/plan/23634/fyzicka-geografie",
          "source": "IS MUNI"
        }
      ],
    },
    {
      id: "z0082",
      code: "PřF:Z0082",
      title: "Mikroklima a mezoklima",
      garant: "doc. Mgr. Kamil Láska, Ph.D.",
      credits: 5,
      semester: "4.",
      completion: "zk",
      tags: ["Povinně-volitelné předměty"],
      description: "Cílem předmětu je získat informace o výměně energie mezi zemským povrchem a atmosférou a o důsledcích těchto procesů na teplotní, vlhkostní a kinetické vlastnosti přízemní vrstvy atmosféry. Součástí předmětu je hodnocení důsledků specifických typů aktivního povrchu a jeho charakteristik na přízemní vrstvu a půdní mikroklima.",
      syllabus: [
        "Úvod - přízemní atmosféra jako vrstva kontaktu ovzduší se zemským povrchem a jako část krajinné sféry, klimatické kategorie a fyzikální podstata jejich definování. Radiační a energetická bilance aktivního povrchu, jejich složky a režim. Důsledky jejich časoprostorových změn pro podloží aktivního povrchu. Teplotní poměry přízemní atmosféry jako důsledek energetické bilance, dílčí vrstvy přízemní atmosféry vyčleněné podle různých kritérií. Výpar jako zdrojový proces pro atmosférickou vlhkost - metody určení. Vlhkostní poměry přízemní atmosféry - molekulární a turbulentní přenos vodní páry a jeho důsledky pro režim a vertikální profil vlhkostních charakteristik. Vertikální profil proudění vzduchu v přízemní atmosféře. Vliv různých aktivních povrchů na atmosféru (voda, sníh, morfologie reliéfu). Planetární mezní vrstva atmosféry jako složka environmentu člověka a jako prostředí difuze znečištěnin ovzduší."
      ],
      lessons: [
        {
          "id": "z0082-uvod-prizemni-atmosfera-jako-vrstva-kontaktu-ovz-1",
          "title": "Úvod - přízemní atmosféra jako vrstva kontaktu ovzduší se zemským povrchem a jako část krajinné sféry, klimatické kategorie a fyzikální podstata jejich definování. Radiační a energetická bilance aktivního povrchu, jejich složky a režim. Důsledky jejich časoprostorových změn pro podloží aktivního povrchu. Teplotní poměry přízemní atmosféry jako důsledek energetické bilance, dílčí vrstvy přízemní atmosféry vyčleněné podle různých kritérií. Výpar jako zdrojový proces pro atmosférickou vlhkost - metody určení. Vlhkostní poměry přízemní atmosféry - molekulární a turbulentní přenos vodní páry a jeho důsledky pro režim a vertikální profil vlhkostních charakteristik. Vertikální profil proudění vzduchu v přízemní atmosféře. Vliv různých aktivních povrchů na atmosféru (voda, sníh, morfologie reliéfu). Planetární mezní vrstva atmosféry jako složka environmentu člověka a jako prostředí difuze znečištěnin ovzduší.",
          "summary": "Úvod - přízemní atmosféra jako vrstva kontaktu ovzduší se zemským povrchem a jako část krajinné sféry, klimatické kategorie a fyzikální p…",
          "minutes": 25,
          "available": false
        }
      ],
      resources: [
        {
          "kind": "link",
          "title": "IS MUNI — detail předmětu",
          "url": "https://is.muni.cz/predmet/sci/Z0082",
          "source": "IS MUNI"
        },
        {
          "kind": "link",
          "title": "Studijní plán v IS MUNI",
          "url": "https://is.muni.cz/plan/23634/fyzicka-geografie",
          "source": "IS MUNI"
        },
        {
          "kind": "link",
          "title": "IS MUNI — detail předmětu",
          "url": "https://is.muni.cz/predmet/sci/Z0082",
          "source": "IS MUNI"
        },
        {
          "kind": "link",
          "title": "Studijní plán v IS MUNI",
          "url": "https://is.muni.cz/plan/23634/fyzicka-geografie",
          "source": "IS MUNI"
        }
      ],
    },
    {
      id: "z0109",
      code: "PřF:Z0109",
      title: "Seminář z fyzické geografie",
      garant: "RNDr. Vladimír Herber, CSc.",
      credits: 3,
      semester: "3.",
      completion: "k",
      tags: ["Povinně-volitelné předměty"],
      description: "Cílem předmětu je:\na) rozšíření dosavadních znalostí, poznatků a dovedností o nová témata fyzické geografie\nb) vést studenty k systematickému studiu literatury\nc) vypracovat, prezentovat a obhájit seminární práci",
      syllabus: [
        "Tematicky zaměřené seminární bloky:",
        "Část I",
        "1. Fyzická geografie",
        "2. Globální systémy",
        "3. Přírodní zdroje",
        "4. Voda na Zemi - oceány, řeky a jezera, ledovce.",
        "5. Horské systémy světa.",
        "6. Sopky a sopečná činnost.",
        "7. Pouště - rozšíření, charakteristika, environmentální problémy.",
        "8. Změny životního prostředí, procesy a krajiny",
        "Část II",
        "Zpracování a prezentace seminární práce."
      ],
      lessons: [
        {
          "id": "z0109-cast-i-1",
          "title": "Část I",
          "summary": "Studijní okruh: Část I",
          "minutes": 12,
          "sectionTitle": "Tematicky zaměřené seminární bloky",
          "available": false
        },
        {
          "id": "z0109-1-fyzicka-geografie-2",
          "title": "1. Fyzická geografie",
          "summary": "Studijní okruh: 1. Fyzická geografie",
          "minutes": 12,
          "sectionTitle": "Tematicky zaměřené seminární bloky",
          "available": false
        },
        {
          "id": "z0109-2-globalni-systemy-3",
          "title": "2. Globální systémy",
          "summary": "Studijní okruh: 2. Globální systémy",
          "minutes": 12,
          "sectionTitle": "Tematicky zaměřené seminární bloky",
          "available": false
        },
        {
          "id": "z0109-3-prirodni-zdroje-4",
          "title": "3. Přírodní zdroje",
          "summary": "Studijní okruh: 3. Přírodní zdroje",
          "minutes": 12,
          "sectionTitle": "Tematicky zaměřené seminární bloky",
          "available": false
        },
        {
          "id": "z0109-4-voda-na-zemi-oceany-reky-a-jezera-ledovce-5",
          "title": "4. Voda na Zemi - oceány, řeky a jezera, ledovce.",
          "summary": "Studijní okruh: 4. Voda na Zemi - oceány, řeky a jezera, ledovce.",
          "minutes": 12,
          "sectionTitle": "Tematicky zaměřené seminární bloky",
          "available": false
        },
        {
          "id": "z0109-5-horske-systemy-sveta-6",
          "title": "5. Horské systémy světa.",
          "summary": "Studijní okruh: 5. Horské systémy světa.",
          "minutes": 12,
          "sectionTitle": "Tematicky zaměřené seminární bloky",
          "available": false
        },
        {
          "id": "z0109-6-sopky-a-sopecna-cinnost-7",
          "title": "6. Sopky a sopečná činnost.",
          "summary": "Studijní okruh: 6. Sopky a sopečná činnost.",
          "minutes": 12,
          "sectionTitle": "Tematicky zaměřené seminární bloky",
          "available": false
        },
        {
          "id": "z0109-7-pouste-rozsireni-charakteristika-environmental-8",
          "title": "7. Pouště - rozšíření, charakteristika, environmentální problémy.",
          "summary": "Studijní okruh: 7. Pouště - rozšíření, charakteristika, environmentální problémy.",
          "minutes": 15,
          "sectionTitle": "Tematicky zaměřené seminární bloky",
          "available": false
        },
        {
          "id": "z0109-8-zmeny-zivotniho-prostredi-procesy-a-krajiny-9",
          "title": "8. Změny životního prostředí, procesy a krajiny",
          "summary": "Studijní okruh: 8. Změny životního prostředí, procesy a krajiny",
          "minutes": 12,
          "sectionTitle": "Tematicky zaměřené seminární bloky",
          "available": false
        },
        {
          "id": "z0109-cast-ii-10",
          "title": "Část II",
          "summary": "Studijní okruh: Část II",
          "minutes": 12,
          "sectionTitle": "Tematicky zaměřené seminární bloky",
          "available": false
        },
        {
          "id": "z0109-zpracovani-a-prezentace-seminarni-prace-11",
          "title": "Zpracování a prezentace seminární práce.",
          "summary": "Studijní okruh: Zpracování a prezentace seminární práce.",
          "minutes": 12,
          "sectionTitle": "Tematicky zaměřené seminární bloky",
          "available": false
        }
      ],
      resources: [
        {
          "kind": "link",
          "title": "IS MUNI — detail předmětu",
          "url": "https://is.muni.cz/predmet/sci/Z0109",
          "source": "IS MUNI"
        },
        {
          "kind": "link",
          "title": "Studijní plán v IS MUNI",
          "url": "https://is.muni.cz/plan/23634/fyzicka-geografie",
          "source": "IS MUNI"
        },
        {
          "kind": "link",
          "title": "IS MUNI — detail předmětu",
          "url": "https://is.muni.cz/predmet/sci/Z0109",
          "source": "IS MUNI"
        },
        {
          "kind": "link",
          "title": "Studijní plán v IS MUNI",
          "url": "https://is.muni.cz/plan/23634/fyzicka-geografie",
          "source": "IS MUNI"
        }
      ],
    },
    {
      id: "z1313",
      code: "PřF:Z1313",
      title: "Hrozby v krajině - online",
      garant: "RNDr. Vladimír Herber, CSc.",
      credits: 2,
      semester: "3.",
      completion: "z",
      tags: ["Povinně-volitelné předměty"],
      description: "Přírodní hrozby patří mezi přírodní procesy, které překročily určitou prahovou hodnotu a negativně se projevují v životě a činnostech lidské společnosti. Stejně jako mezi přírodními procesy, tak i mezi katastrofami existuje vzájemná souvislost. Jedna ovlivňuje druhou, někdy dokonce první katastrofa spustí další. Ke všem katastrofám, jako by jich ještě nebylo dost, přistupují i druhotné účinky související s lidskou činností - požáry, výbuchy plynu, protržení nebo přelití přehradních hrází, vyhubení dobytka, otrávení pastvin a studní, hladomor, epidemie. Cílem předmětu je pochopení příčin vzniku jednotlivých ničivých přírodních procesů, popis jejich průběh, studium vzájemné souvislosti a provázanosti, možnosti a metody předpovědi a předcházení či snížení negativních dopadů.",
      syllabus: [
        "1. úvod do problematiky - přírodní hrozby, hazardy a rizika - základní pojmy, členění",
        "2. zemětřesení",
        "3. vulkanismus/sopečné výbuchy",
        "4. sesuvy půdy",
        "5. vlny horka/sucha, studené vpády",
        "6. tornáda, hurikány/ tajfuny, vichřice/bouře",
        "7. říční povodně a záplavy",
        "8. mořské záplavy/povodně, tsunami",
        "9. glaciální hazardy, sněhové bouře/laviny",
        "10. přírodní požáry",
        "11. chemické hazardy, ionizující záření",
        "12. přenosné choroby, biotické/biologické hazardy",
        "13. hodnocení a řízení rizik",
        "14. využití metod DPZ"
      ],
      lessons: [
        {
          "id": "z1313-1-uvod-do-problematiky-prirodni-hrozby-hazardy-a-1",
          "title": "1. úvod do problematiky - přírodní hrozby, hazardy a rizika - základní pojmy, členění",
          "summary": "Studijní okruh: 1. úvod do problematiky - přírodní hrozby, hazardy a rizika - základní pojmy, členění",
          "minutes": 15,
          "available": false
        },
        {
          "id": "z1313-2-zemetreseni-2",
          "title": "2. zemětřesení",
          "summary": "Studijní okruh: 2. zemětřesení",
          "minutes": 12,
          "available": false
        },
        {
          "id": "z1313-3-vulkanismus-sopecne-vybuchy-3",
          "title": "3. vulkanismus/sopečné výbuchy",
          "summary": "Studijní okruh: 3. vulkanismus/sopečné výbuchy",
          "minutes": 12,
          "available": false
        },
        {
          "id": "z1313-4-sesuvy-pudy-4",
          "title": "4. sesuvy půdy",
          "summary": "Studijní okruh: 4. sesuvy půdy",
          "minutes": 12,
          "available": false
        },
        {
          "id": "z1313-5-vlny-horka-sucha-studene-vpady-5",
          "title": "5. vlny horka/sucha, studené vpády",
          "summary": "Studijní okruh: 5. vlny horka/sucha, studené vpády",
          "minutes": 12,
          "available": false
        },
        {
          "id": "z1313-6-tornada-hurikany-tajfuny-vichrice-boure-6",
          "title": "6. tornáda, hurikány/ tajfuny, vichřice/bouře",
          "summary": "Studijní okruh: 6. tornáda, hurikány/ tajfuny, vichřice/bouře",
          "minutes": 12,
          "available": false
        },
        {
          "id": "z1313-7-ricni-povodne-a-zaplavy-7",
          "title": "7. říční povodně a záplavy",
          "summary": "Studijní okruh: 7. říční povodně a záplavy",
          "minutes": 12,
          "available": false
        },
        {
          "id": "z1313-8-morske-zaplavy-povodne-tsunami-8",
          "title": "8. mořské záplavy/povodně, tsunami",
          "summary": "Studijní okruh: 8. mořské záplavy/povodně, tsunami",
          "minutes": 12,
          "available": false
        },
        {
          "id": "z1313-9-glacialni-hazardy-snehove-boure-laviny-9",
          "title": "9. glaciální hazardy, sněhové bouře/laviny",
          "summary": "Studijní okruh: 9. glaciální hazardy, sněhové bouře/laviny",
          "minutes": 12,
          "available": false
        },
        {
          "id": "z1313-10-prirodni-pozary-10",
          "title": "10. přírodní požáry",
          "summary": "Studijní okruh: 10. přírodní požáry",
          "minutes": 12,
          "available": false
        },
        {
          "id": "z1313-11-chemicke-hazardy-ionizujici-zareni-11",
          "title": "11. chemické hazardy, ionizující záření",
          "summary": "Studijní okruh: 11. chemické hazardy, ionizující záření",
          "minutes": 12,
          "available": false
        },
        {
          "id": "z1313-12-prenosne-choroby-bioticke-biologicke-hazardy-12",
          "title": "12. přenosné choroby, biotické/biologické hazardy",
          "summary": "Studijní okruh: 12. přenosné choroby, biotické/biologické hazardy",
          "minutes": 12,
          "available": false
        },
        {
          "id": "z1313-13-hodnoceni-a-rizeni-rizik-13",
          "title": "13. hodnocení a řízení rizik",
          "summary": "Studijní okruh: 13. hodnocení a řízení rizik",
          "minutes": 12,
          "available": false
        },
        {
          "id": "z1313-14-vyuziti-metod-dpz-14",
          "title": "14. využití metod DPZ",
          "summary": "Studijní okruh: 14. využití metod DPZ",
          "minutes": 12,
          "available": false
        }
      ],
      resources: [
        {
          "kind": "link",
          "title": "IS MUNI — detail předmětu",
          "url": "https://is.muni.cz/predmet/sci/Z1313",
          "source": "IS MUNI"
        },
        {
          "kind": "link",
          "title": "Studijní plán v IS MUNI",
          "url": "https://is.muni.cz/plan/23634/fyzicka-geografie",
          "source": "IS MUNI"
        },
        {
          "kind": "link",
          "title": "IS MUNI — detail předmětu",
          "url": "https://is.muni.cz/predmet/sci/Z1313",
          "source": "IS MUNI"
        },
        {
          "kind": "link",
          "title": "Studijní plán v IS MUNI",
          "url": "https://is.muni.cz/plan/23634/fyzicka-geografie",
          "source": "IS MUNI"
        }
      ],
    },
    {
      id: "z5790",
      code: "PřF:Z5790",
      title: "Krajiny jižní Moravy",
      garant: "RNDr. Martin Culek, Ph.D.",
      credits: 5,
      semester: "6.",
      completion: "zk",
      tags: ["Povinně-volitelné předměty"],
      description: "Vést studenty k hlubšímu poznání krajin v širokém okolí naší univerzity, poskytnout jim informace v koncentrované formě a neobvyklém pohledu.\nInformovat o specifikách a zajímavých místech jižní Moravy.\nPředmět poskytuje i možnost prožitku pocitu badatele v neznámé krajině.",
      syllabus: [
        "1.-4. Geologický, geomorfologický, klimatologický, pedologický a biogeografický přehled jižní Moravy a porovnání s okolním územím.",
        "5. Prehistorie a historie jižní Moravy, osídlení, vývoj krajiny jižní Moravy - samostudium",
        "3.-6.",
        "6.-12. Krajiny jednotlivých (bio-)regionů jižní Moravy, jejich geologie, geomorfologie, zvláštnosti - významné skalní útvary, vrcholy, údolí, hlavní a zajímavé vodní toky, výskyt peřejí a vodopádů, rašelinišť, slatin a slanisek, písků, (pseudo-)krasových tvarů, minerálních pramenů, zvláštností obhospodařování krajiny, vzhledu sídel, významné stavby (historické i moderní, vč. přehradních nádrží), nejdůležitější chráněná území a významné environmentální kauzy v daném regionu. Celkem bude studováno 16 regionů.",
        "13. Etnografie jižní Moravy - samostudium"
      ],
      lessons: [
        {
          "id": "z5790-1-4-geologicky-geomorfologicky-klimatologicky-pe-1",
          "title": "1.-4. Geologický, geomorfologický, klimatologický, pedologický a biogeografický přehled jižní Moravy a porovnání s okolním územím.",
          "summary": "Studijní okruh: 1.-4. Geologický, geomorfologický, klimatologický, pedologický a biogeografický přehled jižní Moravy a porovnání s okolním územím.",
          "minutes": 20,
          "available": false
        },
        {
          "id": "z5790-5-prehistorie-a-historie-jizni-moravy-osidleni-v-2",
          "title": "5. Prehistorie a historie jižní Moravy, osídlení, vývoj krajiny jižní Moravy - samostudium",
          "summary": "Studijní okruh: 5. Prehistorie a historie jižní Moravy, osídlení, vývoj krajiny jižní Moravy - samostudium",
          "minutes": 15,
          "available": false
        },
        {
          "id": "z5790-3-6-3",
          "title": "3.-6.",
          "summary": "Studijní okruh: 3.-6.",
          "minutes": 12,
          "available": false
        },
        {
          "id": "z5790-6-12-krajiny-jednotlivych-bio-regionu-jizni-mora-4",
          "title": "6.-12. Krajiny jednotlivých (bio-)regionů jižní Moravy, jejich geologie, geomorfologie, zvláštnosti - významné skalní útvary, vrcholy, údolí, hlavní a zajímavé vodní toky, výskyt peřejí a vodopádů, rašelinišť, slatin a slanisek, písků, (pseudo-)krasových tvarů, minerálních pramenů, zvláštností obhospodařování krajiny, vzhledu sídel, významné stavby (historické i moderní, vč. přehradních nádrží), nejdůležitější chráněná území a významné environmentální kauzy v daném regionu. Celkem bude studováno 16 regionů.",
          "summary": "6.-12. Krajiny jednotlivých (bio-)regionů jižní Moravy, jejich geologie, geomorfologie, zvláštnosti - významné skalní útvary, vrcholy, úd…",
          "minutes": 25,
          "available": false
        },
        {
          "id": "z5790-13-etnografie-jizni-moravy-samostudium-5",
          "title": "13. Etnografie jižní Moravy - samostudium",
          "summary": "Studijní okruh: 13. Etnografie jižní Moravy - samostudium",
          "minutes": 12,
          "available": false
        }
      ],
      resources: [
        {
          "kind": "link",
          "title": "IS MUNI — detail předmětu",
          "url": "https://is.muni.cz/predmet/sci/Z5790",
          "source": "IS MUNI"
        },
        {
          "kind": "link",
          "title": "Studijní plán v IS MUNI",
          "url": "https://is.muni.cz/plan/23634/fyzicka-geografie",
          "source": "IS MUNI"
        },
        {
          "kind": "link",
          "title": "IS MUNI — detail předmětu",
          "url": "https://is.muni.cz/predmet/sci/Z5790",
          "source": "IS MUNI"
        },
        {
          "kind": "link",
          "title": "Studijní plán v IS MUNI",
          "url": "https://is.muni.cz/plan/23634/fyzicka-geografie",
          "source": "IS MUNI"
        }
      ],
    },
    {
      id: "z6010",
      code: "PřF:Z6010",
      title: "Geografie Světového oceánu",
      garant: "RNDr. Vladimír Herber, CSc.",
      credits: 3,
      semester: "4.",
      completion: "k",
      tags: ["Povinně-volitelné předměty"],
      description: "Moře a oceány jsou nedílnou součástí života na naší planetě. Třebaže je Česká republika vnitrozemským státem, hrají moře a oceány v našem životě významnou roli, např. tím, že ovlivňují počasí. Cílem předmětu je přispět k poznání přírody Světového oceánu, jeho využívání i nezbytné ochraně životního prostředí oceánů.",
      syllabus: [
        "1. Definice a členění oceánografie.",
        "2. Stručné dějiny oceánografie",
        "3. Rozdělení vodstva na Zemi. Členění světového oceánu. Pojmenování oceánů a moří.",
        "4. Morfometrická a geomorfologická charakteristika mořského dna.",
        "5. Fyzikální a chemické vlastnosti mořské vody.",
        "6. Pohyby mořské vody.",
        "7. Oceánské a mořské proudy.",
        "8. Biologické poměry světového oceánu.",
        "9. Regionální geografie oceánů a moří.",
        "10. Využití bohatství světového oceánu.",
        "11. Znečištění moří a pobřeží."
      ],
      lessons: [
        {
          "id": "z6010-1-definice-a-cleneni-oceanografie-1",
          "title": "1. Definice a členění oceánografie.",
          "summary": "Studijní okruh: 1. Definice a členění oceánografie.",
          "minutes": 12,
          "available": false
        },
        {
          "id": "z6010-2-strucne-dejiny-oceanografie-2",
          "title": "2. Stručné dějiny oceánografie",
          "summary": "Studijní okruh: 2. Stručné dějiny oceánografie",
          "minutes": 12,
          "available": false
        },
        {
          "id": "z6010-3-rozdeleni-vodstva-na-zemi-cleneni-svetoveho-oc-3",
          "title": "3. Rozdělení vodstva na Zemi. Členění světového oceánu. Pojmenování oceánů a moří.",
          "summary": "Studijní okruh: 3. Rozdělení vodstva na Zemi. Členění světového oceánu. Pojmenování oceánů a moří.",
          "minutes": 15,
          "available": false
        },
        {
          "id": "z6010-4-morfometricka-a-geomorfologicka-charakteristik-4",
          "title": "4. Morfometrická a geomorfologická charakteristika mořského dna.",
          "summary": "Studijní okruh: 4. Morfometrická a geomorfologická charakteristika mořského dna.",
          "minutes": 15,
          "available": false
        },
        {
          "id": "z6010-5-fyzikalni-a-chemicke-vlastnosti-morske-vody-5",
          "title": "5. Fyzikální a chemické vlastnosti mořské vody.",
          "summary": "Studijní okruh: 5. Fyzikální a chemické vlastnosti mořské vody.",
          "minutes": 12,
          "available": false
        },
        {
          "id": "z6010-6-pohyby-morske-vody-6",
          "title": "6. Pohyby mořské vody.",
          "summary": "Studijní okruh: 6. Pohyby mořské vody.",
          "minutes": 12,
          "available": false
        },
        {
          "id": "z6010-7-oceanske-a-morske-proudy-7",
          "title": "7. Oceánské a mořské proudy.",
          "summary": "Studijní okruh: 7. Oceánské a mořské proudy.",
          "minutes": 12,
          "available": false
        },
        {
          "id": "z6010-8-biologicke-pomery-svetoveho-oceanu-8",
          "title": "8. Biologické poměry světového oceánu.",
          "summary": "Studijní okruh: 8. Biologické poměry světového oceánu.",
          "minutes": 12,
          "available": false
        },
        {
          "id": "z6010-9-regionalni-geografie-oceanu-a-mori-9",
          "title": "9. Regionální geografie oceánů a moří.",
          "summary": "Studijní okruh: 9. Regionální geografie oceánů a moří.",
          "minutes": 12,
          "available": false
        },
        {
          "id": "z6010-10-vyuziti-bohatstvi-svetoveho-oceanu-10",
          "title": "10. Využití bohatství světového oceánu.",
          "summary": "Studijní okruh: 10. Využití bohatství světového oceánu.",
          "minutes": 12,
          "available": false
        },
        {
          "id": "z6010-11-znecisteni-mori-a-pobrezi-11",
          "title": "11. Znečištění moří a pobřeží.",
          "summary": "Studijní okruh: 11. Znečištění moří a pobřeží.",
          "minutes": 12,
          "available": false
        }
      ],
      resources: [
        {
          "kind": "link",
          "title": "IS MUNI — detail předmětu",
          "url": "https://is.muni.cz/predmet/sci/Z6010",
          "source": "IS MUNI"
        },
        {
          "kind": "link",
          "title": "Studijní plán v IS MUNI",
          "url": "https://is.muni.cz/plan/23634/fyzicka-geografie",
          "source": "IS MUNI"
        },
        {
          "kind": "link",
          "title": "IS MUNI — detail předmětu",
          "url": "https://is.muni.cz/predmet/sci/Z6010",
          "source": "IS MUNI"
        },
        {
          "kind": "link",
          "title": "Studijní plán v IS MUNI",
          "url": "https://is.muni.cz/plan/23634/fyzicka-geografie",
          "source": "IS MUNI"
        }
      ],
    },
    {
      id: "z6666",
      code: "PřF:Z6666",
      title: "Životní prostředí ČR",
      garant: "Mgr. Jarmila Burianová, Ph.D.",
      credits: 4,
      semester: "5.",
      completion: "zk",
      tags: ["Povinně-volitelné předměty"],
      description: "Cílem předmětu je studenty seznámit se stavem a vývojem složek životního prostředí v České republice a pracovat s informacemi, které jsou o životním prostředí dostupné pro vybranou obec v České republice.",
      syllabus: [
        "1. Úvod",
        "2. Úvod do historie zájmu o životní prostředí, informační zdroje",
        "3. Faktory ovlivňující životní prostředí",
        "4. Složky životního prostředí",
        "5. Prezentace první části seminární práce",
        "6. Životní prostředí a zdraví, státní politika životního prostředí, strategie trvale udržitelného rozvoje",
        "7. Nástroje ochrany životního prostředí",
        "8. Územní plánování, ÚSES",
        "9. Environmentální výchova",
        "10. Prezentace druhé části seminární práce"
      ],
      lessons: [
        {
          "id": "z6666-1-uvod-1",
          "title": "1. Úvod",
          "summary": "Studijní okruh: 1. Úvod",
          "minutes": 12,
          "available": false
        },
        {
          "id": "z6666-2-uvod-do-historie-zajmu-o-zivotni-prostredi-inf-2",
          "title": "2. Úvod do historie zájmu o životní prostředí, informační zdroje",
          "summary": "Studijní okruh: 2. Úvod do historie zájmu o životní prostředí, informační zdroje",
          "minutes": 15,
          "available": false
        },
        {
          "id": "z6666-3-faktory-ovlivnujici-zivotni-prostredi-3",
          "title": "3. Faktory ovlivňující životní prostředí",
          "summary": "Studijní okruh: 3. Faktory ovlivňující životní prostředí",
          "minutes": 12,
          "available": false
        },
        {
          "id": "z6666-4-slozky-zivotniho-prostredi-4",
          "title": "4. Složky životního prostředí",
          "summary": "Studijní okruh: 4. Složky životního prostředí",
          "minutes": 12,
          "available": false
        },
        {
          "id": "z6666-5-prezentace-prvni-casti-seminarni-prace-5",
          "title": "5. Prezentace první části seminární práce",
          "summary": "Studijní okruh: 5. Prezentace první části seminární práce",
          "minutes": 12,
          "available": false
        },
        {
          "id": "z6666-6-zivotni-prostredi-a-zdravi-statni-politika-ziv-6",
          "title": "6. Životní prostředí a zdraví, státní politika životního prostředí, strategie trvale udržitelného rozvoje",
          "summary": "Studijní okruh: 6. Životní prostředí a zdraví, státní politika životního prostředí, strategie trvale udržitelného rozvoje",
          "minutes": 20,
          "available": false
        },
        {
          "id": "z6666-7-nastroje-ochrany-zivotniho-prostredi-7",
          "title": "7. Nástroje ochrany životního prostředí",
          "summary": "Studijní okruh: 7. Nástroje ochrany životního prostředí",
          "minutes": 12,
          "available": false
        },
        {
          "id": "z6666-8-uzemni-planovani-uses-8",
          "title": "8. Územní plánování, ÚSES",
          "summary": "Studijní okruh: 8. Územní plánování, ÚSES",
          "minutes": 12,
          "available": false
        },
        {
          "id": "z6666-9-environmentalni-vychova-9",
          "title": "9. Environmentální výchova",
          "summary": "Studijní okruh: 9. Environmentální výchova",
          "minutes": 12,
          "available": false
        },
        {
          "id": "z6666-10-prezentace-druhe-casti-seminarni-prace-10",
          "title": "10. Prezentace druhé části seminární práce",
          "summary": "Studijní okruh: 10. Prezentace druhé části seminární práce",
          "minutes": 12,
          "available": false
        }
      ],
      resources: [
        {
          "kind": "link",
          "title": "IS MUNI — detail předmětu",
          "url": "https://is.muni.cz/predmet/sci/Z6666",
          "source": "IS MUNI"
        },
        {
          "kind": "link",
          "title": "Studijní plán v IS MUNI",
          "url": "https://is.muni.cz/plan/23634/fyzicka-geografie",
          "source": "IS MUNI"
        },
        {
          "kind": "link",
          "title": "IS MUNI — detail předmětu",
          "url": "https://is.muni.cz/predmet/sci/Z6666",
          "source": "IS MUNI"
        },
        {
          "kind": "link",
          "title": "Studijní plán v IS MUNI",
          "url": "https://is.muni.cz/plan/23634/fyzicka-geografie",
          "source": "IS MUNI"
        }
      ],
    },
    {
      id: "z7051",
      code: "PřF:Z7051",
      title: "Environmentální geografie",
      garant: "doc. RNDr. Zdeněk Máčka, Ph.D.",
      credits: 5,
      semester: "5.",
      completion: "zk",
      tags: ["Povinně-volitelné předměty"],
      description: "Lidský vliv na přírodní prostředí a řešení environmentálních problémů.",
      syllabus: [
        "Environmentální problémy"
      ],
      lessons: [
        {
          "id": "z7051-environmentalni-problemy-1",
          "title": "Environmentální problémy",
          "summary": "Studijní okruh: Environmentální problémy",
          "minutes": 12,
          "available": false
        }
      ],
      resources: [
        {
          "kind": "link",
          "title": "IS MUNI — detail předmětu",
          "url": "https://is.muni.cz/predmet/sci/Z7051",
          "source": "IS MUNI"
        },
        {
          "kind": "link",
          "title": "Studijní plán v IS MUNI",
          "url": "https://is.muni.cz/plan/23634/fyzicka-geografie",
          "source": "IS MUNI"
        },
        {
          "kind": "link",
          "title": "IS MUNI — detail předmětu",
          "url": "https://is.muni.cz/predmet/sci/Z7051",
          "source": "IS MUNI"
        },
        {
          "kind": "link",
          "title": "Studijní plán v IS MUNI",
          "url": "https://is.muni.cz/plan/23634/fyzicka-geografie",
          "source": "IS MUNI"
        }
      ],
    },
    {
      id: "z8105",
      code: "PřF:Z8105",
      title: "Mapové zdroje",
      garant: "prof. RNDr. Milan Konečný, CSc.",
      credits: 5,
      semester: "3.",
      completion: "zk",
      tags: ["Povinně-volitelné předměty"],
      description: "Cílem předmětu je podat přehled o stávajících analogových a digitálních zdrojích, jež jsou využívány v kartografii a geoinformatice, včetně zdrojů statistických. Tento přehled je podán ve třech horizontech, a sice ČR, Evropa (země EU a ostatní země) a Svět. Geoinfostrategie ČR. Rozvoj a využití Big Data. Pozornost je věnována i integraci dat v rámci prostorových datových a informačních infrastruktur a možnostem využití dat, informací a znalostí ze stávajících prostorově orientovaných globálně orientovaných projektů.",
      syllabus: [
        "Přehled a struktura zdrojů pro kartografii a geoinformatiku, český (EGON, Základní registry, Geoinfostrategie ČR) a světový (U.N. GGIM, DBAR) kontext",
        "Analogové zdroje v kartografii: mapové sbírky, analogová mapová a atlasová díla",
        "Státní mapová díla, významná produkce map a atlasů v soukromém sektoru (autoatlasy, turistické mapy, aj.)",
        "Digitální zdroje dat: data, informace a znalosti na Internetu. Elektronické atlasy. Otevřená data a volně dostupné zdroje dat",
        "ČR a budování digitálních datových zdrojů: civilní a vojenský sektor (ZABAGED, DMR, aj.)",
        "Jednotné digitální mapové dílo ČR: teoretické předpoklady, koncepce, praktické požadavky; implementace. Digitální katastr.",
        "Digitální fotogrammetrie a mapová díla v ČR.",
        "Evropa: digitální mapové zdroje v rámci Evropské unie (Eurogeographics, INSPIRE, COPERNICUS)",
        "Tvorba, koncepce a implementace Evropské geografické informační infrastruktury",
        "Statistické zdroje v ČR, EU (Eurostat aj.) a ve světě (OSN, FAO, aj.)",
        "Svět: Globální mapování a Globální prostorová datová infrastruktura. GEO, GEOSS, Future World",
        "Svět: Digitální planeta Země a její rozvoj. Nová koncepce Digitální strategické architektury Země (2025) Geografická datová báze OSN. U.N. GGIM, DBAR spatial data. Prostorová data a mapy pro redukci rizik a katastrof",
        "Data a informace v „Spatially Enabled Society“.",
        "BIG DATA – Velká Data: koncepce, analýza, vizualizace",
        "Cvičení je realizováno formou prezentací studentů na omezený počet okruhů vztažených k mapovým zdrojům. Hodnotí se nejen úroveň obsahu prezentace, ale také samotný způsob vědecké prezentace. Po skončení prezentace jsou cvičícím kladeny doplňující otázky a na závěr jím vyjádřena konstruktivní kritika pro další rozvoj prezentace daného studenta."
      ],
      lessons: [
        {
          "id": "z8105-prehled-a-struktura-zdroju-pro-kartografii-a-geo-1",
          "title": "Přehled a struktura zdrojů pro kartografii a geoinformatiku, český (EGON, Základní registry, Geoinfostrategie ČR) a světový (U.N. GGIM, DBAR) kontext",
          "summary": "Přehled a struktura zdrojů pro kartografii a geoinformatiku, český (EGON, Základní registry, Geoinfostrategie ČR) a světový (U.N. GGIM, D…",
          "minutes": 20,
          "available": false
        },
        {
          "id": "z8105-analogove-zdroje-v-kartografii-mapove-sbirky-ana-2",
          "title": "Analogové zdroje v kartografii: mapové sbírky, analogová mapová a atlasová díla",
          "summary": "Studijní okruh: Analogové zdroje v kartografii: mapové sbírky, analogová mapová a atlasová díla",
          "minutes": 15,
          "available": false
        },
        {
          "id": "z8105-statni-mapova-dila-vyznamna-produkce-map-a-atlas-3",
          "title": "Státní mapová díla, významná produkce map a atlasů v soukromém sektoru (autoatlasy, turistické mapy, aj.)",
          "summary": "Studijní okruh: Státní mapová díla, významná produkce map a atlasů v soukromém sektoru (autoatlasy, turistické mapy, aj.)",
          "minutes": 20,
          "available": false
        },
        {
          "id": "z8105-digitalni-zdroje-dat-data-informace-a-znalosti-n-4",
          "title": "Digitální zdroje dat: data, informace a znalosti na Internetu. Elektronické atlasy. Otevřená data a volně dostupné zdroje dat",
          "summary": "Studijní okruh: Digitální zdroje dat: data, informace a znalosti na Internetu. Elektronické atlasy. Otevřená data a volně dostupné zdroje dat",
          "minutes": 20,
          "available": false
        },
        {
          "id": "z8105-cr-a-budovani-digitalnich-datovych-zdroju-civiln-5",
          "title": "ČR a budování digitálních datových zdrojů: civilní a vojenský sektor (ZABAGED, DMR, aj.)",
          "summary": "Studijní okruh: ČR a budování digitálních datových zdrojů: civilní a vojenský sektor (ZABAGED, DMR, aj.)",
          "minutes": 15,
          "available": false
        },
        {
          "id": "z8105-jednotne-digitalni-mapove-dilo-cr-teoreticke-pre-6",
          "title": "Jednotné digitální mapové dílo ČR: teoretické předpoklady, koncepce, praktické požadavky; implementace. Digitální katastr.",
          "summary": "Studijní okruh: Jednotné digitální mapové dílo ČR: teoretické předpoklady, koncepce, praktické požadavky; implementace. Digitální katastr.",
          "minutes": 20,
          "available": false
        },
        {
          "id": "z8105-digitalni-fotogrammetrie-a-mapova-dila-v-cr-7",
          "title": "Digitální fotogrammetrie a mapová díla v ČR.",
          "summary": "Studijní okruh: Digitální fotogrammetrie a mapová díla v ČR.",
          "minutes": 12,
          "available": false
        },
        {
          "id": "z8105-evropa-digitalni-mapove-zdroje-v-ramci-evropske-8",
          "title": "Evropa: digitální mapové zdroje v rámci Evropské unie (Eurogeographics, INSPIRE, COPERNICUS)",
          "summary": "Studijní okruh: Evropa: digitální mapové zdroje v rámci Evropské unie (Eurogeographics, INSPIRE, COPERNICUS)",
          "minutes": 15,
          "available": false
        },
        {
          "id": "z8105-tvorba-koncepce-a-implementace-evropske-geografi-9",
          "title": "Tvorba, koncepce a implementace Evropské geografické informační infrastruktury",
          "summary": "Studijní okruh: Tvorba, koncepce a implementace Evropské geografické informační infrastruktury",
          "minutes": 15,
          "available": false
        },
        {
          "id": "z8105-statisticke-zdroje-v-cr-eu-eurostat-aj-a-ve-svet-10",
          "title": "Statistické zdroje v ČR, EU (Eurostat aj.) a ve světě (OSN, FAO, aj.)",
          "summary": "Studijní okruh: Statistické zdroje v ČR, EU (Eurostat aj.) a ve světě (OSN, FAO, aj.)",
          "minutes": 15,
          "available": false
        },
        {
          "id": "z8105-svet-globalni-mapovani-a-globalni-prostorova-dat-11",
          "title": "Svět: Globální mapování a Globální prostorová datová infrastruktura. GEO, GEOSS, Future World",
          "summary": "Studijní okruh: Svět: Globální mapování a Globální prostorová datová infrastruktura. GEO, GEOSS, Future World",
          "minutes": 15,
          "available": false
        },
        {
          "id": "z8105-svet-digitalni-planeta-zeme-a-jeji-rozvoj-nova-k-12",
          "title": "Svět: Digitální planeta Země a její rozvoj. Nová koncepce Digitální strategické architektury Země (2025) Geografická datová báze OSN. U.N. GGIM, DBAR spatial data. Prostorová data a mapy pro redukci rizik a katastrof",
          "summary": "Svět: Digitální planeta Země a její rozvoj. Nová koncepce Digitální strategické architektury Země (2025) Geografická datová báze OSN. U.N…",
          "minutes": 25,
          "available": false
        },
        {
          "id": "z8105-data-a-informace-v-spatially-enabled-society-13",
          "title": "Data a informace v „Spatially Enabled Society“.",
          "summary": "Studijní okruh: Data a informace v „Spatially Enabled Society“.",
          "minutes": 12,
          "available": false
        },
        {
          "id": "z8105-big-data-velka-data-koncepce-analyza-vizualizace-14",
          "title": "BIG DATA – Velká Data: koncepce, analýza, vizualizace",
          "summary": "Studijní okruh: BIG DATA – Velká Data: koncepce, analýza, vizualizace",
          "minutes": 12,
          "available": false
        },
        {
          "id": "z8105-cviceni-je-realizovano-formou-prezentaci-student-15",
          "title": "Cvičení je realizováno formou prezentací studentů na omezený počet okruhů vztažených k mapovým zdrojům. Hodnotí se nejen úroveň obsahu prezentace, ale také samotný způsob vědecké prezentace. Po skončení prezentace jsou cvičícím kladeny doplňující otázky a na závěr jím vyjádřena konstruktivní kritika pro další rozvoj prezentace daného studenta.",
          "summary": "Cvičení je realizováno formou prezentací studentů na omezený počet okruhů vztažených k mapovým zdrojům. Hodnotí se nejen úroveň obsahu pr…",
          "minutes": 25,
          "available": false
        }
      ],
      resources: [
        {
          "kind": "link",
          "title": "IS MUNI — detail předmětu",
          "url": "https://is.muni.cz/predmet/sci/Z8105",
          "source": "IS MUNI"
        },
        {
          "kind": "link",
          "title": "Studijní plán v IS MUNI",
          "url": "https://is.muni.cz/plan/23634/fyzicka-geografie",
          "source": "IS MUNI"
        },
        {
          "kind": "link",
          "title": "IS MUNI — detail předmětu",
          "url": "https://is.muni.cz/predmet/sci/Z8105",
          "source": "IS MUNI"
        },
        {
          "kind": "link",
          "title": "Studijní plán v IS MUNI",
          "url": "https://is.muni.cz/plan/23634/fyzicka-geografie",
          "source": "IS MUNI"
        }
      ],
    },
    {
      id: "z8109",
      code: "PřF:Z8109",
      title: "Základy geodézie a GPS",
      garant: "Ing. Kateřina Tajovská, Ph.D.",
      credits: 5,
      semester: "4.",
      completion: "zk",
      tags: ["Povinně-volitelné předměty"],
      description: "Cílem předmětu je seznámit studenty se základními principy a metodami geodetického měření. Zvláštní pozornost je věnována použití prostředků GNSS, spolu s přednesením teoretických základů této metody.",
      syllabus: [
        "1.Vývoj geodetických základů na našem území, polohová a výšková bodová pole, souřadnicové systémy, kartografická zobrazení, současné platné předpisy. 2.Měření úhlů, směrů, přístrojové vybavení (teodolit, měřické pomůcky apod.) 3.Měření výšek - metody, přístroje 4.Měření délek - metody, pomůcky 5.Podrobné měření polohopisu (tachymetrie, polární, ortogonální metoda), elektronické dálkoměry 6.Základy mapování (měřické náčrty, značky, mapová díla), nové metody v geodézii 7.Katastr nemovitostí 8.GNSS - systém, teoretické základy 9.Základní složky systému GNSS, vysílané a přijímané signály, časový systém 10.Metody měření (absolutní, relativní, DGPS) 11. Přístrojové, softwarové vybavení 12.Využití a implementace GNSS systému v různých oborech (turistika, navigace, geodézie, vojenství, letectví, GIS ...) 13. Další systémy - Glonass, Galileo (budoucnost druž. navig. systémů)"
      ],
      lessons: [
        {
          "id": "z8109-1-vyvoj-geodetickych-zakladu-na-nasem-uzemi-polo-1",
          "title": "1.Vývoj geodetických základů na našem území, polohová a výšková bodová pole, souřadnicové systémy, kartografická zobrazení, současné platné předpisy. 2.Měření úhlů, směrů, přístrojové vybavení (teodolit, měřické pomůcky apod.) 3.Měření výšek - metody, přístroje 4.Měření délek - metody, pomůcky 5.Podrobné měření polohopisu (tachymetrie, polární, ortogonální metoda), elektronické dálkoměry 6.Základy mapování (měřické náčrty, značky, mapová díla), nové metody v geodézii 7.Katastr nemovitostí 8.GNSS - systém, teoretické základy 9.Základní složky systému GNSS, vysílané a přijímané signály, časový systém 10.Metody měření (absolutní, relativní, DGPS) 11. Přístrojové, softwarové vybavení 12.Využití a implementace GNSS systému v různých oborech (turistika, navigace, geodézie, vojenství, letectví, GIS ...) 13. Další systémy - Glonass, Galileo (budoucnost druž. navig. systémů)",
          "summary": "1.Vývoj geodetických základů na našem území, polohová a výšková bodová pole, souřadnicové systémy, kartografická zobrazení, současné plat…",
          "minutes": 25,
          "available": false
        }
      ],
      resources: [
        {
          "kind": "link",
          "title": "IS MUNI — detail předmětu",
          "url": "https://is.muni.cz/predmet/sci/Z8109",
          "source": "IS MUNI"
        },
        {
          "kind": "link",
          "title": "Studijní plán v IS MUNI",
          "url": "https://is.muni.cz/plan/23634/fyzicka-geografie",
          "source": "IS MUNI"
        },
        {
          "kind": "link",
          "title": "IS MUNI — detail předmětu",
          "url": "https://is.muni.cz/predmet/sci/Z8109",
          "source": "IS MUNI"
        },
        {
          "kind": "link",
          "title": "Studijní plán v IS MUNI",
          "url": "https://is.muni.cz/plan/23634/fyzicka-geografie",
          "source": "IS MUNI"
        }
      ],
    },
    {
      id: "z8114",
      code: "PřF:Z8114",
      title: "Digitální zprac. materiálů DPZ",
      garant: "Ing. Kateřina Tajovská, Ph.D.",
      credits: 6,
      semester: "5.",
      completion: "zk",
      tags: ["Povinně-volitelné předměty"],
      description: "Cílem předmětu je předat studentům základní přehled o metodách digitálního zpracování obrazových materiálů získávaných metodou distančního snímání. Ve cvičeních získají studenti praktické dovednosti z oblasti zpracování obrazu s akcentem na postupy automatické klasifikace. Hlavní probíraná témata:\nAnalogová a digitální forma obrazu.\nInterpretace obrazu v analogové formě\nInterpretační znaky, rozpoznávání objektu, interpretační klíče\nPřednosti a nedostatky analogového zpracování\nCharakter digitálních obrazových dat. Rastr a jeho vlastnosti Specifika dat DPZ\nZákladní druhy rozlišení dat DPZ\nSystém uložení digitálních obrazových dat. Obecné a speciální obrazové formáty Obrazová komprese.Podpůrná data\nZákladní etapy digitálního zpracování obrazových dat Předzpracování obrazových dat, radiometrické a atmosférické korekce Geometrická transformace obrazu\nZákladní způsoby zvýrazňování, práce s histogramem\nPrincipy automatické klasifikace obrazu. Řízená a neřízená klasifikace.\nZjišťování časových změn. Netradiční přístupy ke klasifikaci. Specifika zpracování radarových a hyperspektrálních dat.\nZákladní používaný SW: ENVI, SNAP,ArcGIS Pro, QGIS (plugin SCP, ENMAP)",
      syllabus: [
        "1. Základní vlastnosti digitálního obrazu - opakování A-D převod, DN hodnoty a jejich význam, histogram obrazového záznamu, multispektrální a hyperspektrální snímky, způsoby vizualizace, barevné systémy, RGB barevný systém",
        "2. Metody předzpracování digitálního obrazu Radiometrické atmosférické korekce - podstata chyb a principy základních algoritmu, geometrická transformace obrazu - přehled běžných metod (polynomická transformace, splinové funkce, transformace po částech, ortorektifikace, mozaikování",
        "3. Metody zvýrazňování digitálního obrazu I. Radiometrická (bodová) zvýraznění, práce s histogramem snímku, úpravy kontrastu, základní druhy zvýraznění, LUT, principy prahování a hustotních řezů",
        "4. Metody zvýrazňování digitálního obrazu II. Prostorová zvýraznění - filtrace obrazu, princip a základní algoritmy vysoko a nízkofrekvenčních filtrů, Fourierovy transformace, texturální analýza a filtrace radarových snímku",
        "5. Metody zvýrazňování multispektrálního digitálního obrazu III. Vícepásmové transformace obrazu, principy tvorby barevných syntéz, transformace barevného systému, IHS x RGB, analýza hlavních komponent, obrazové podíly a spektrální (vegetační) indexy, transformace TASSELED CAP,",
        "6. Řízená klasifikace multispektrálního obrazu I. Princip spektrálních příznaků, obecný postup řízené automatické klasifikace obrazu, trénovací etapa,",
        "7. Řízená klasifikace multispektrálního obrazu II. Per-pixel klasifikátory - k. pravoúhelníku, k. minimální vzdálenosti, k. maximální pravdepodobnosti, generování spektrálních signatur, jejich statistický popis a hodnocení. Postklasifikacní úpravy a hodnocení výsledku klasifikace - chybová matice, testovací množiny.",
        "8. Neřízená klasifikace multispektrálního obrazu Spektrální a informační třídy , princip metody shlukové analýzy multispektrálního obrazu, algoritmy ISODATA a K-MEANS, agregace výsledku neřízené klasifikace, postklasifikacní úpravy",
        "9. Nové přístupy ke klasifikaci digitálního obrazu Fuzzy klasifikátory, princip klasifikace neuronovými sítěmi, texturální klasifikace, kontextuální klasifikace, SAM algoritmus",
        "10. Principy zpracování radarových obrazových dat. Specifika radarového obrazového záznamu, základní algoritmy, filtrace a texturální analýza, příklady použití radarových snímku",
        "11. Principy zpracování hypersektrálních obrazových dat. Hyperspektrální kostka, smíšené a \"čisté\" pixely, spektrální knihovny, elementární povrchy (endmembers), klasifikace hyperspektrálních dat - unmixing",
        "12. Algoritmy multitemporální analýzy Obrazové podíly a rozdíly, porovnání výsledku klasifikace, Change vector analysis, PCA"
      ],
      lessons: [
        {
          "id": "z8114-1-zakladni-vlastnosti-digitalniho-obrazu-opakova-1",
          "title": "1. Základní vlastnosti digitálního obrazu - opakování A-D převod, DN hodnoty a jejich význam, histogram obrazového záznamu, multispektrální a hyperspektrální snímky, způsoby vizualizace, barevné systémy, RGB barevný systém",
          "summary": "1. Základní vlastnosti digitálního obrazu - opakování A-D převod, DN hodnoty a jejich význam, histogram obrazového záznamu, multispektrál…",
          "minutes": 25,
          "available": false
        },
        {
          "id": "z8114-2-metody-predzpracovani-digitalniho-obrazu-radio-2",
          "title": "2. Metody předzpracování digitálního obrazu Radiometrické atmosférické korekce - podstata chyb a principy základních algoritmu, geometrická transformace obrazu - přehled běžných metod (polynomická transformace, splinové funkce, transformace po částech, ortorektifikace, mozaikování",
          "summary": "2. Metody předzpracování digitálního obrazu Radiometrické atmosférické korekce - podstata chyb a principy základních algoritmu, geometric…",
          "minutes": 25,
          "available": false
        },
        {
          "id": "z8114-3-metody-zvyraznovani-digitalniho-obrazu-i-radio-3",
          "title": "3. Metody zvýrazňování digitálního obrazu I. Radiometrická (bodová) zvýraznění, práce s histogramem snímku, úpravy kontrastu, základní druhy zvýraznění, LUT, principy prahování a hustotních řezů",
          "summary": "3. Metody zvýrazňování digitálního obrazu I. Radiometrická (bodová) zvýraznění, práce s histogramem snímku, úpravy kontrastu, základní dr…",
          "minutes": 25,
          "available": false
        },
        {
          "id": "z8114-4-metody-zvyraznovani-digitalniho-obrazu-ii-pros-4",
          "title": "4. Metody zvýrazňování digitálního obrazu II. Prostorová zvýraznění - filtrace obrazu, princip a základní algoritmy vysoko a nízkofrekvenčních filtrů, Fourierovy transformace, texturální analýza a filtrace radarových snímku",
          "summary": "4. Metody zvýrazňování digitálního obrazu II. Prostorová zvýraznění - filtrace obrazu, princip a základní algoritmy vysoko a nízkofrekven…",
          "minutes": 25,
          "available": false
        },
        {
          "id": "z8114-5-metody-zvyraznovani-multispektralniho-digitaln-5",
          "title": "5. Metody zvýrazňování multispektrálního digitálního obrazu III. Vícepásmové transformace obrazu, principy tvorby barevných syntéz, transformace barevného systému, IHS x RGB, analýza hlavních komponent, obrazové podíly a spektrální (vegetační) indexy, transformace TASSELED CAP,",
          "summary": "5. Metody zvýrazňování multispektrálního digitálního obrazu III. Vícepásmové transformace obrazu, principy tvorby barevných syntéz, trans…",
          "minutes": 25,
          "available": false
        },
        {
          "id": "z8114-6-rizena-klasifikace-multispektralniho-obrazu-i-6",
          "title": "6. Řízená klasifikace multispektrálního obrazu I. Princip spektrálních příznaků, obecný postup řízené automatické klasifikace obrazu, trénovací etapa,",
          "summary": "6. Řízená klasifikace multispektrálního obrazu I. Princip spektrálních příznaků, obecný postup řízené automatické klasifikace obrazu, tré…",
          "minutes": 20,
          "available": false
        },
        {
          "id": "z8114-7-rizena-klasifikace-multispektralniho-obrazu-ii-7",
          "title": "7. Řízená klasifikace multispektrálního obrazu II. Per-pixel klasifikátory - k. pravoúhelníku, k. minimální vzdálenosti, k. maximální pravdepodobnosti, generování spektrálních signatur, jejich statistický popis a hodnocení. Postklasifikacní úpravy a hodnocení výsledku klasifikace - chybová matice, testovací množiny.",
          "summary": "7. Řízená klasifikace multispektrálního obrazu II. Per-pixel klasifikátory - k. pravoúhelníku, k. minimální vzdálenosti, k. maximální pra…",
          "minutes": 25,
          "available": false
        },
        {
          "id": "z8114-8-nerizena-klasifikace-multispektralniho-obrazu-8",
          "title": "8. Neřízená klasifikace multispektrálního obrazu Spektrální a informační třídy , princip metody shlukové analýzy multispektrálního obrazu, algoritmy ISODATA a K-MEANS, agregace výsledku neřízené klasifikace, postklasifikacní úpravy",
          "summary": "8. Neřízená klasifikace multispektrálního obrazu Spektrální a informační třídy , princip metody shlukové analýzy multispektrálního obrazu…",
          "minutes": 25,
          "available": false
        },
        {
          "id": "z8114-9-nove-pristupy-ke-klasifikaci-digitalniho-obraz-9",
          "title": "9. Nové přístupy ke klasifikaci digitálního obrazu Fuzzy klasifikátory, princip klasifikace neuronovými sítěmi, texturální klasifikace, kontextuální klasifikace, SAM algoritmus",
          "summary": "9. Nové přístupy ke klasifikaci digitálního obrazu Fuzzy klasifikátory, princip klasifikace neuronovými sítěmi, texturální klasifikace, k…",
          "minutes": 20,
          "available": false
        },
        {
          "id": "z8114-10-principy-zpracovani-radarovych-obrazovych-dat-10",
          "title": "10. Principy zpracování radarových obrazových dat. Specifika radarového obrazového záznamu, základní algoritmy, filtrace a texturální analýza, příklady použití radarových snímku",
          "summary": "10. Principy zpracování radarových obrazových dat. Specifika radarového obrazového záznamu, základní algoritmy, filtrace a texturální ana…",
          "minutes": 20,
          "available": false
        },
        {
          "id": "z8114-11-principy-zpracovani-hypersektralnich-obrazovy-11",
          "title": "11. Principy zpracování hypersektrálních obrazových dat. Hyperspektrální kostka, smíšené a \"čisté\" pixely, spektrální knihovny, elementární povrchy (endmembers), klasifikace hyperspektrálních dat - unmixing",
          "summary": "11. Principy zpracování hypersektrálních obrazových dat. Hyperspektrální kostka, smíšené a \"čisté\" pixely, spektrální knihovny, elementár…",
          "minutes": 25,
          "available": false
        },
        {
          "id": "z8114-12-algoritmy-multitemporalni-analyzy-obrazove-po-12",
          "title": "12. Algoritmy multitemporální analýzy Obrazové podíly a rozdíly, porovnání výsledku klasifikace, Change vector analysis, PCA",
          "summary": "Studijní okruh: 12. Algoritmy multitemporální analýzy Obrazové podíly a rozdíly, porovnání výsledku klasifikace, Change vector analysis, PCA",
          "minutes": 20,
          "available": false
        }
      ],
      resources: [
        {
          "kind": "link",
          "title": "IS MUNI — detail předmětu",
          "url": "https://is.muni.cz/predmet/sci/Z8114",
          "source": "IS MUNI"
        },
        {
          "kind": "link",
          "title": "Studijní plán v IS MUNI",
          "url": "https://is.muni.cz/plan/23634/fyzicka-geografie",
          "source": "IS MUNI"
        },
        {
          "kind": "link",
          "title": "IS MUNI — detail předmětu",
          "url": "https://is.muni.cz/predmet/sci/Z8114",
          "source": "IS MUNI"
        },
        {
          "kind": "link",
          "title": "Studijní plán v IS MUNI",
          "url": "https://is.muni.cz/plan/23634/fyzicka-geografie",
          "source": "IS MUNI"
        }
      ],
    },
    {
      id: "zx511",
      code: "PřF:ZX511",
      title: "Základy geologie pro geografy",
      garant: "doc. Mgr. Daniel Nývlt, Ph.D.",
      credits: 5,
      semester: "2.",
      completion: "zk",
      tags: ["Povinně-volitelné předměty"],
      description: "Student bude po absolvování kurzu schopen:\n- určit nejběžnější minerály a horniny včetně jejich základních fyzikálních a chemických vlastností,\n- poznat základní skupiny zkamenělin a časově je zařadit,\n- pochopit principy deskové tektoniky a popsat paleogeografický vývoj kontinentů a oceánů,\n- popsat vývoj života na Zemi a spojit jej s hlavnimi chronostratigrafickými jednotkami,\n- orientovat se v geologických mapách a aktivně je využívat pro vlastní práci,\n- základně se orientovat v regionálně-geologických jednotkách Česka,\n- znát základní datovací metody a možnosti jejich aplikací.",
      syllabus: [
        "Kurz bude zahrnovat jednotlivé bloky týkající se: 1. Základy deskové tektoniky a vývoj pevnin a oceánů,",
        "2. Dělení geologické minulosti, základy historické geologie,",
        "3. Základní skupiny zkamenělin a jejich proměny v geologické historii Země, poznávání zkamenělin,",
        "4. Vznik minerálů a hornin, jejich klasifikace a vlastnosti včetně jejich poznávání,",
        "5. Základy regionální geologie, hlavní regionálně-geologické jednotky Česka,",
        "6. Geologické mapy a jejich použití,",
        "7. Digitální geologická data pro území Česka a jejich použití,",
        "8. Datování geologické minulosti,",
        "9. Základní geologická praktika v laboratoři,",
        "10. Využití geologických znalostí v geografii."
      ],
      lessons: [
        {
          "id": "zx511-kurz-bude-zahrnovat-jednotlive-bloky-tykajici-se-1",
          "title": "Kurz bude zahrnovat jednotlivé bloky týkající se: 1. Základy deskové tektoniky a vývoj pevnin a oceánů,",
          "summary": "Studijní okruh: Kurz bude zahrnovat jednotlivé bloky týkající se: 1. Základy deskové tektoniky a vývoj pevnin a oceánů,",
          "minutes": 20,
          "available": false
        },
        {
          "id": "zx511-2-deleni-geologicke-minulosti-zaklady-historicke-2",
          "title": "2. Dělení geologické minulosti, základy historické geologie,",
          "summary": "Studijní okruh: 2. Dělení geologické minulosti, základy historické geologie,",
          "minutes": 12,
          "available": false
        },
        {
          "id": "zx511-3-zakladni-skupiny-zkamenelin-a-jejich-promeny-v-3",
          "title": "3. Základní skupiny zkamenělin a jejich proměny v geologické historii Země, poznávání zkamenělin,",
          "summary": "Studijní okruh: 3. Základní skupiny zkamenělin a jejich proměny v geologické historii Země, poznávání zkamenělin,",
          "minutes": 15,
          "available": false
        },
        {
          "id": "zx511-4-vznik-mineralu-a-hornin-jejich-klasifikace-a-v-4",
          "title": "4. Vznik minerálů a hornin, jejich klasifikace a vlastnosti včetně jejich poznávání,",
          "summary": "Studijní okruh: 4. Vznik minerálů a hornin, jejich klasifikace a vlastnosti včetně jejich poznávání,",
          "minutes": 15,
          "available": false
        },
        {
          "id": "zx511-5-zaklady-regionalni-geologie-hlavni-regionalne-5",
          "title": "5. Základy regionální geologie, hlavní regionálně-geologické jednotky Česka,",
          "summary": "Studijní okruh: 5. Základy regionální geologie, hlavní regionálně-geologické jednotky Česka,",
          "minutes": 15,
          "available": false
        },
        {
          "id": "zx511-6-geologicke-mapy-a-jejich-pouziti-6",
          "title": "6. Geologické mapy a jejich použití,",
          "summary": "Studijní okruh: 6. Geologické mapy a jejich použití,",
          "minutes": 12,
          "available": false
        },
        {
          "id": "zx511-7-digitalni-geologicka-data-pro-uzemi-ceska-a-je-7",
          "title": "7. Digitální geologická data pro území Česka a jejich použití,",
          "summary": "Studijní okruh: 7. Digitální geologická data pro území Česka a jejich použití,",
          "minutes": 15,
          "available": false
        },
        {
          "id": "zx511-8-datovani-geologicke-minulosti-8",
          "title": "8. Datování geologické minulosti,",
          "summary": "Studijní okruh: 8. Datování geologické minulosti,",
          "minutes": 12,
          "available": false
        },
        {
          "id": "zx511-9-zakladni-geologicka-praktika-v-laboratori-9",
          "title": "9. Základní geologická praktika v laboratoři,",
          "summary": "Studijní okruh: 9. Základní geologická praktika v laboratoři,",
          "minutes": 12,
          "available": false
        },
        {
          "id": "zx511-10-vyuziti-geologickych-znalosti-v-geografii-10",
          "title": "10. Využití geologických znalostí v geografii.",
          "summary": "Studijní okruh: 10. Využití geologických znalostí v geografii.",
          "minutes": 12,
          "available": false
        }
      ],
      resources: [
        {
          "kind": "link",
          "title": "IS MUNI — detail předmětu",
          "url": "https://is.muni.cz/predmet/sci/ZX511",
          "source": "IS MUNI"
        },
        {
          "kind": "link",
          "title": "Studijní plán v IS MUNI",
          "url": "https://is.muni.cz/plan/23634/fyzicka-geografie",
          "source": "IS MUNI"
        },
        {
          "kind": "link",
          "title": "IS MUNI — detail předmětu",
          "url": "https://is.muni.cz/predmet/sci/ZX511",
          "source": "IS MUNI"
        },
        {
          "kind": "link",
          "title": "Studijní plán v IS MUNI",
          "url": "https://is.muni.cz/plan/23634/fyzicka-geografie",
          "source": "IS MUNI"
        }
      ],
    }
  ],
};
