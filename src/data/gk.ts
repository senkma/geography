import type { Field } from "../types";

/** Data z IS MUNI — studijní plán 23634 (FG specializace v rámci B-GEK). */
export const gk: Field = {
  id: "geografie-kartografie",
  title: "Geografie a kartografie",
  subtitle: "Bakalářský program (PřF MUNI) — specializace Fyzická geografie",
  level: "Bakalářské",
  accent: "#86c7a8",
  icon: "compass",
  description:
    "Bakalářský program Geografie a kartografie (B-GEK). Předměty a osnovy jsou převzaty z oficiálního studijního plánu specializace Fyzická geografie (plán 23634) v IS MUNI — společná oborová část a specializační předměty FG. Zdroj osnov: zkouškové okruhy nebo klíčová témata z katalogu předmětů.",
  sourceUrl:
    "https://is.muni.cz/plan/23634/fyzicka-geografie",
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
      lessons: [],
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
          "kind": "document",
          "title": "Osnova: Klíčová témata",
          "note": "Oficiální témata z katalogu předmětů IS MUNI."
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
      lessons: [],
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
          "kind": "document",
          "title": "Osnova: Klíčová témata",
          "note": "Oficiální témata z katalogu předmětů IS MUNI."
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
      lessons: [],
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
          "kind": "document",
          "title": "Osnova: Klíčová témata",
          "note": "Oficiální témata z katalogu předmětů IS MUNI."
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
      lessons: [],
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
          "kind": "document",
          "title": "Osnova: Klíčová témata",
          "note": "Oficiální témata z katalogu předmětů IS MUNI."
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
      lessons: [],
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
          "kind": "document",
          "title": "Osnova: Klíčová témata",
          "note": "Oficiální témata z katalogu předmětů IS MUNI."
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
      lessons: [],
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
          "kind": "document",
          "title": "Osnova: Klíčová témata",
          "note": "Oficiální témata z katalogu předmětů IS MUNI."
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
      lessons: [],
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
          "kind": "document",
          "title": "Osnova: Klíčová témata",
          "note": "Oficiální témata z katalogu předmětů IS MUNI."
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
      lessons: [],
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
          "kind": "document",
          "title": "Osnova: Klíčová témata",
          "note": "Oficiální témata z katalogu předmětů IS MUNI."
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
      lessons: [],
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
          "kind": "document",
          "title": "Osnova: Klíčová témata",
          "note": "Oficiální témata z katalogu předmětů IS MUNI."
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
      lessons: [],
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
          "kind": "document",
          "title": "Osnova: Klíčová témata",
          "note": "Oficiální témata z katalogu předmětů IS MUNI."
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
      lessons: [],
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
          "kind": "document",
          "title": "Osnova: Klíčová témata",
          "note": "Oficiální témata z katalogu předmětů IS MUNI."
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
      lessons: [],
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
          "kind": "document",
          "title": "Osnova: Klíčová témata",
          "note": "Oficiální témata z katalogu předmětů IS MUNI."
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
      lessons: [],
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
          "kind": "document",
          "title": "Osnova: Klíčová témata",
          "note": "Oficiální témata z katalogu předmětů IS MUNI."
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
      lessons: [],
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
          "kind": "document",
          "title": "Osnova: Klíčová témata",
          "note": "Oficiální témata z katalogu předmětů IS MUNI."
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
      lessons: [],
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
          "kind": "document",
          "title": "Osnova: Klíčová témata",
          "note": "Oficiální témata z katalogu předmětů IS MUNI."
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
      lessons: [],
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
          "kind": "document",
          "title": "Osnova: Klíčová témata",
          "note": "Oficiální témata z katalogu předmětů IS MUNI."
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
      lessons: [],
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
          "kind": "document",
          "title": "Osnova: Klíčová témata",
          "note": "Oficiální témata z katalogu předmětů IS MUNI."
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
      lessons: [],
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
          "kind": "document",
          "title": "Osnova: Klíčová témata",
          "note": "Oficiální témata z katalogu předmětů IS MUNI."
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
      lessons: [],
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
          "kind": "document",
          "title": "Osnova: Klíčová témata",
          "note": "Oficiální témata z katalogu předmětů IS MUNI."
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
      lessons: [],
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
          "kind": "document",
          "title": "Osnova: Klíčová témata",
          "note": "Oficiální témata z katalogu předmětů IS MUNI."
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
      lessons: [],
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
          "kind": "document",
          "title": "Osnova: Klíčová témata",
          "note": "Oficiální témata z katalogu předmětů IS MUNI."
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
      lessons: [],
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
          "kind": "document",
          "title": "Osnova: Klíčová témata",
          "note": "Oficiální témata z katalogu předmětů IS MUNI."
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
      lessons: [],
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
          "kind": "document",
          "title": "Osnova: Klíčová témata",
          "note": "Oficiální témata z katalogu předmětů IS MUNI."
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
      lessons: [],
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
          "kind": "document",
          "title": "Osnova: Klíčová témata",
          "note": "Oficiální témata z katalogu předmětů IS MUNI."
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
      lessons: [],
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
          "kind": "document",
          "title": "Osnova: Klíčová témata",
          "note": "Oficiální témata z katalogu předmětů IS MUNI."
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
      lessons: [],
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
          "kind": "document",
          "title": "Osnova: Klíčová témata",
          "note": "Oficiální témata z katalogu předmětů IS MUNI."
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
      lessons: [],
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
          "kind": "document",
          "title": "Osnova: Klíčová témata",
          "note": "Oficiální témata z katalogu předmětů IS MUNI."
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
      lessons: [],
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
          "kind": "document",
          "title": "Osnova: Klíčová témata",
          "note": "Oficiální témata z katalogu předmětů IS MUNI."
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
      lessons: [],
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
          "kind": "document",
          "title": "Osnova: Klíčová témata",
          "note": "Oficiální témata z katalogu předmětů IS MUNI."
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
      lessons: [],
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
          "kind": "document",
          "title": "Osnova: Klíčová témata",
          "note": "Oficiální témata z katalogu předmětů IS MUNI."
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
      lessons: [],
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
          "kind": "document",
          "title": "Osnova: Klíčová témata",
          "note": "Oficiální témata z katalogu předmětů IS MUNI."
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
      lessons: [],
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
          "kind": "document",
          "title": "Osnova: Klíčová témata",
          "note": "Oficiální témata z katalogu předmětů IS MUNI."
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
      lessons: [],
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
          "kind": "document",
          "title": "Osnova: Klíčová témata",
          "note": "Oficiální témata z katalogu předmětů IS MUNI."
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
      lessons: [],
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
          "kind": "document",
          "title": "Osnova: Klíčová témata",
          "note": "Oficiální témata z katalogu předmětů IS MUNI."
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
      lessons: [],
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
          "kind": "document",
          "title": "Osnova: Klíčová témata",
          "note": "Oficiální témata z katalogu předmětů IS MUNI."
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
      lessons: [],
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
          "kind": "document",
          "title": "Osnova: Klíčová témata",
          "note": "Oficiální témata z katalogu předmětů IS MUNI."
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
      lessons: [],
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
          "kind": "document",
          "title": "Osnova: Klíčová témata",
          "note": "Oficiální témata z katalogu předmětů IS MUNI."
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
      lessons: [],
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
          "kind": "document",
          "title": "Osnova: Klíčová témata",
          "note": "Oficiální témata z katalogu předmětů IS MUNI."
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
      lessons: [],
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
          "kind": "document",
          "title": "Osnova: Klíčová témata",
          "note": "Oficiální témata z katalogu předmětů IS MUNI."
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
      lessons: [],
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
          "kind": "document",
          "title": "Osnova: Klíčová témata",
          "note": "Oficiální témata z katalogu předmětů IS MUNI."
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
      lessons: [],
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
          "kind": "document",
          "title": "Osnova: Klíčová témata",
          "note": "Oficiální témata z katalogu předmětů IS MUNI."
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
      lessons: [],
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
          "kind": "document",
          "title": "Osnova: Klíčová témata",
          "note": "Oficiální témata z katalogu předmětů IS MUNI."
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
      lessons: [],
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
          "kind": "document",
          "title": "Osnova: Klíčová témata",
          "note": "Oficiální témata z katalogu předmětů IS MUNI."
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
      lessons: [],
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
          "kind": "document",
          "title": "Osnova: Klíčová témata",
          "note": "Oficiální témata z katalogu předmětů IS MUNI."
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
      lessons: [],
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
          "kind": "document",
          "title": "Osnova: Klíčová témata",
          "note": "Oficiální témata z katalogu předmětů IS MUNI."
        }
      ],
    }
  ],
};
