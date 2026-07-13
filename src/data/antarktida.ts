import type { Field } from "../types";

/** Sestaveno z content/fields/antarktida/. */
export const antarktida: Field = {
  id: "antarktida",
  title: "Antarktida",
  subtitle: "Geografie · klima · biosféra · CARP · historie",
  level: "Speciální modul",
  accent: "#8fbfe0",
  icon: "snow",
  description: "Vědní disciplíny o Antarktidě (geologie, kryosféra, klima, oceán, hydrologie, biosféra, paleoklima), český výzkum CARP, historie průzkumu, mezinárodní smluvní systém a současné expedice.",
  sourceUrl: "https://carp.sci.muni.cz/",
  courses: [
    {
      id: "mod-geografie",
      title: "Geografie a geologie",
      completion: "výukový modul",
      moduleSection: "veda",
      tags: ["Antarktida","geologie","geomorfologie"],
      description: "Poloha kontinentu, tektonika, geomorfologie a geovědní výzkum CARP na ostrově Jamese Rosse.",
      syllabus: [
        "Poloha, vymezení a základní charakteristika",
        "Geologický vývoj a tektonická stavba",
        "Geovědy v antarktické oáze",
        "Permafrost a aktivní vrstva",
        "Paleolimnologie a antarktická jezera",
        "Sedimentární kaskády a geomorfologie",
        "Geovědní databáze CARP"
      ],
      lessons: [
        {
          "id": "poloha-vymezeni",
          "title": "Poloha, vymezení a základní charakteristika",
          "summary": "Nejjižnější, nejchladnější a největší poušť planety — základní údaje a členění kontinentu.",
          "minutes": 18,
          "blocks": [
            {
              "type": "paragraph",
              "text": "Antarktida je pevninský kontinent obklopující jižní geografický pól, převážně jižně od jižního polárního kruhu (66,5° j. š.). Od ostatních kontinentů je oddělena Jižním oceánem; nejblíže je Jižní Amerika (Drakeův průliv)."
            },
            {
              "type": "list",
              "label": "Klíčové údaje",
              "items": [
                "Rozloha ≈ 14,2 mil. km² (5. největší kontinent)",
                "≈ 98 % povrchu pokrývá led; průměrná mocnost ledu ≈ 1,9–2,1 km",
                "Drží ≈ 60–70 % světové sladké vody a ≈ 90 % veškerého ledu",
                "Nejnižší naměřená přízemní teplota: −89,2 °C (stanice Vostok, 1983)"
              ]
            },
            {
              "type": "callout",
              "label": "Zapamatuj si",
              "text": "Antarktida je největší poušť na Zemi — vnitrozemí dostává často méně než 50 mm srážek ročně. Led se hromadí tisíce let, protože téměř netaje."
            },
            {
              "type": "list",
              "label": "Členění kontinentu",
              "items": [
                "Východní Antarktida — starý kraton, Východoantarktický ledovcový štít (EAIS)",
                "Západní Antarktida — souostroví a pánve pod hladinou moře, Západoantarktický štít (WAIS)",
                "Transantarktické pohoří — horský val oddělující obě části",
                "Antarktický poloostrov — nejsevernější a nejrychleji se oteplující oblast"
              ]
            }
          ],
          "resources": [
            {
              "kind": "map",
              "title": "Antarctic Digital Database",
              "url": "https://www.add.scar.org/",
              "source": "SCAR"
            },
            {
              "kind": "link",
              "title": "Antarctica — BAS overview",
              "url": "https://www.bas.ac.uk/about/antarctica/",
              "source": "BAS"
            }
          ]
        },
        {
          "id": "geologie-tektonika",
          "title": "Geologický vývoj a tektonická stavba",
          "summary": "Od Gondwany po skrytý subglaciální reliéf a rozdíl mezi mořsky ukotveným a pevninským ledem.",
          "minutes": 20,
          "blocks": [
            {
              "type": "paragraph",
              "text": "Východní Antarktida tvoří starý prekambrický kraton, kdysi jádro superkontinentu Gondwany. Rozpad Gondwany a otevření Drakeova průlivu (≈ 34–30 Ma) umožnily vznik Antarktického cirkumpolárního proudu a trvalé zalednění."
            },
            {
              "type": "list",
              "label": "Hlavní stavební prvky",
              "items": [
                "Východoantarktický kraton — stabilní staré jádro",
                "Transantarktické pohoří — vyzdvižení podél zlomů",
                "Západoantarktický riftový systém — ztenčená kůra",
                "Aktivní vulkanismus — např. Mount Erebus"
              ]
            },
            {
              "type": "callout",
              "label": "Skrytý reliéf",
              "text": "Radar odhalil pohoří Gamburcevových hor (velikosti Alp) i Bentleyho subglaciální příkop (> 2 500 m pod hladinou moře). Rozlišení podloží nad/pod mořem určuje stabilitu ledu."
            }
          ],
          "resources": [
            {
              "kind": "dataset",
              "title": "BedMachine Antarctica",
              "url": "https://nsidc.org/data/nsidc-0756",
              "source": "NSIDC / NASA"
            },
            {
              "kind": "link",
              "title": "SCAR Geoscience",
              "url": "https://scar.org/science/geosciences/",
              "source": "SCAR"
            }
          ]
        },
        {
          "id": "geo-uvod",
          "title": "Geovědy v antarktické oáze",
          "summary": "James Ross Archipelago jako přírodní laboratoř a sentinel site globálních změn.",
          "minutes": 14,
          "blocks": [
            {
              "type": "paragraph",
              "text": "Geovědní skupina CARP studuje interakce zemského povrchu a litosféry s atmosférou, kryosférou, hydrosférou a biosférou v jedné z největších deglaciovaných oáz Antarktidy."
            },
            {
              "type": "list",
              "label": "Metody",
              "items": [
                "Vysoké rozlišení dálkového průzkumu (UAV/drony)",
                "Celoroční mikroklimatické senzory",
                "Laboratorní analýzy geologických vzorků a jezerních sedimentů"
              ]
            },
            {
              "type": "paragraph",
              "text": "Terénní práce na James Ross Archipelago; mezinárodní spolupráce (IAA, INACH, BAS) rozšiřuje záběr na celý poloostrov."
            }
          ],
          "resources": [
            {
              "kind": "link",
              "title": "CARP — Geovědní obory",
              "url": "https://carp.sci.muni.cz/vyzkum/#geo",
              "source": "CARP"
            }
          ]
        },
        {
          "id": "geo-permafrost",
          "title": "Permafrost a aktivní vrstva",
          "summary": "Dlouhodobý monitoring termálního stavu a modelování aktivní vrstvy.",
          "minutes": 16,
          "blocks": [
            {
              "type": "paragraph",
              "text": "Klíčová aktivita skupiny je dlouhodobý monitoring permafrostu a aktivní vrstvy a studium dopadů atmosférického oteplování na periglaciální prostředí."
            },
            {
              "type": "list",
              "items": [
                "Numerické modelování časoprostorových změn aktivní vrstvy",
                "Paraglaciální a periglaciální procesy formující reliéf",
                "Fyzikální a biogeochemické vlastnosti půd v deglaciovaném terénu",
                "Příspěvky do GTN-P, SoilTemp, Global Cryosphere Watch"
              ]
            },
            {
              "type": "callout",
              "label": "Výzkum",
              "text": "Hrubeš et al. (2025, CATENA): permafrost jako zdroj bakterií mineralizujících horniny při ztlušťování aktivní vrstvy na James Ross Island."
            }
          ],
          "resources": [
            {
              "kind": "dataset",
              "title": "GTN-P — Global Terrestrial Network for Permafrost",
              "url": "https://gtnp.arcticportal.org/",
              "source": "GTN-P"
            },
            {
              "kind": "dataset",
              "title": "SoilTemp",
              "url": "https://soiltemp.project.earth/",
              "source": "SoilTemp"
            }
          ]
        },
        {
          "id": "geo-paleolimnologie",
          "title": "Paleolimnologie a antarktická jezera",
          "summary": "Sedimenty jezer jako archiv klimatu a vývoje ekosystémů.",
          "minutes": 15,
          "blocks": [
            {
              "type": "list",
              "label": "Kvartérní paleoprostředí",
              "items": [
                "Chronologie odledňování z forem reliéfu a sedimentů",
                "Jezerní záznamy klimatu a prostředí; diatomové, archeální a bakteriální společenstva",
                "Fyzikální limnologie — hydrologický vývoj a hydrochemie jezer",
                "Porovnání s ledovcovými jádry z čapky ostrova Jamese Rosse"
              ]
            }
          ],
          "resources": [
            {
              "kind": "link",
              "title": "CARP — Geo-Sciences (EN)",
              "url": "https://carp.sci.muni.cz/research/#geo",
              "source": "CARP"
            }
          ]
        },
        {
          "id": "geo-sedimenty",
          "title": "Sedimentární kaskády a geomorfologie",
          "summary": "Transport materiálu ledovcovými, fluviálními, gravitačními a eolickými procesy.",
          "minutes": 14,
          "blocks": [
            {
              "type": "paragraph",
              "text": "Skupina kvantifikuje sedimentární bilanci a dynamiku krajiny v systémech sedimentární kaskády — od ledovců přes potoky po větrnou erozi."
            },
            {
              "type": "paragraph",
              "text": "Geomorfologicky heterogenní prostředí oázy slouží jako sentinel site pro včasné varování globálních klimatických bodů zlomu (tipping points)."
            },
            {
              "type": "callout",
              "label": "Publikace",
              "text": "Uslular et al. (2025, Journal of Maps): geomorfologie Stansbury Peninsula na Nelson Island v rámci CARP spolupráce."
            }
          ],
          "resources": [
            {
              "kind": "map",
              "title": "SCAR Antarctic Digital Database",
              "url": "https://www.add.scar.org/",
              "source": "SCAR"
            }
          ]
        },
        {
          "id": "geo-databaze",
          "title": "Geovědní databáze CARP",
          "summary": "Mezinárodní úložiště dat z permafrostu, aktivní vrstvy a kryosféry.",
          "minutes": 10,
          "blocks": [
            {
              "type": "list",
              "items": [
                "Global Terrestrial Network — Permafrost (GTN-P)",
                "Circumpolar Active Layer Monitoring (CALM)",
                "Permafrost databáze",
                "SCAR Antarctic Digital Database (ADD)"
              ]
            },
            {
              "type": "paragraph",
              "text": "Data jsou sdílena s mezinárodní komunitou; kontakt na vedoucí sekcí nebo šéfa programu CARP."
            }
          ],
          "resources": [
            {
              "kind": "link",
              "title": "CARP — Databáze (geovědy)",
              "url": "https://carp.sci.muni.cz/vyzkum/#databases",
              "source": "CARP"
            },
            {
              "kind": "dataset",
              "title": "CALM",
              "url": "https://www2.geo.su.se/calm/",
              "source": "CALM"
            }
          ]
        }
      ],
      resources: [
        {
          "kind": "link",
          "title": "Antarctic Digital Database",
          "url": "https://www.add.scar.org/",
          "source": "SCAR"
        },
        {
          "kind": "link",
          "title": "CARP — Geologie",
          "url": "https://carp.sci.muni.cz/vyzkum/",
          "source": "CARP"
        }
      ],
    },
    {
      id: "mod-kryosfera",
      title: "Kryosféra a led",
      completion: "výukový modul",
      moduleSection: "veda",
      tags: ["Antarktida","kryosféra","glaciologie"],
      description: "Ledovcové štíty, šelfové ledovce, mořský led a glaciologický výzkum v oblasti Antarktického poloostrova.",
      syllabus: [
        "Ledovcový štít a kryosféra",
        "Šelfové ledovce a mořský led",
        "Glaciologie a hydrologie"
      ],
      lessons: [
        {
          "id": "ledovcovy-stit",
          "title": "Ledovcový štít a kryosféra",
          "summary": "Největší zásobárna ledu — akumulace, tok, ablace a vztah k hladině oceánu.",
          "minutes": 22,
          "blocks": [
            {
              "type": "paragraph",
              "text": "Antarktický ledovcový štít vzniká akumulací sněhu přeměněného na led, který odtéká od center k pobřeží. Rozlišujeme Východoantarktický (EAIS) a Západoantarktický (WAIS) štít."
            },
            {
              "type": "list",
              "label": "Porovnání štítů",
              "items": [
                "EAIS: větší objem, podloží převážně nad hladinou moře, stabilnější",
                "WAIS: část pod hladinou moře, citlivější na oteplování, potenciál ≈ 3–5 m hladiny",
                "Celý antarktický led: potenciální vzestup hladiny ≈ 58 m"
              ]
            },
            {
              "type": "list",
              "label": "Bilance hmoty",
              "items": [
                "Akumulace — sněžení ve vnitrozemí",
                "Ablace — převážně odlamování ledovců a tání spodní strany šelfů",
                "Ledové proudy (Thwaites, Pine Island) vykazují zrychlené ztenčování"
              ]
            }
          ],
          "resources": [
            {
              "kind": "link",
              "title": "NASA — Vital Signs of the Planet: Ice Sheets",
              "url": "https://climate.nasa.gov/vital-signs/ice-sheets/",
              "source": "NASA"
            },
            {
              "kind": "dataset",
              "title": "World Glacier Monitoring Service",
              "url": "https://wgms.ch/",
              "source": "WGMS"
            }
          ]
        },
        {
          "id": "selfove-ledovce-morsky-led",
          "title": "Šelfové ledovce a mořský led",
          "summary": "Pevninský led, šelfy a mořský led — rozdíly a klimatický význam.",
          "minutes": 18,
          "blocks": [
            {
              "type": "list",
              "label": "Tři formy ledu",
              "items": [
                "Pevninský led — ze sněhu na souši; tání zvyšuje hladinu moře",
                "Šelfový ledovec — plovoucí okraj štítu; brzdí tok ledu (Rossův, Filchnerův-Ronneho)",
                "Mořský led — zmrzlá mořská voda; sezónní rozloha 3–20 mil. km², vysoké albedo"
              ]
            },
            {
              "type": "callout",
              "label": "Zádržný efekt",
              "text": "Rozpad šelfu (např. Larsen B, 2002) nezvedne hladinu přímo, ale zrychlí odtok pevninského ledu za ním."
            },
            {
              "type": "paragraph",
              "text": "Při zamrzání mořské vody vzniká hustá Antarktická přídonní voda (AABW), klíčová pro globální termohalinní cirkulaci."
            }
          ],
          "resources": [
            {
              "kind": "link",
              "title": "NSIDC — Sea Ice",
              "url": "https://nsidc.org/learn/parts-cryosphere/sea-ice",
              "source": "NSIDC"
            }
          ]
        },
        {
          "id": "atmo-glaciologie",
          "title": "Glaciologie a hydrologie",
          "summary": "Hmotnostní bilance pevninských ledovců a glacio-hydrologické procesy.",
          "minutes": 16,
          "blocks": [
            {
              "type": "paragraph",
              "text": "Intenzivní monitoring pevninských končících ledovců zahrnuje hmotnostní bilanci, georadar a hodnocení citlivosti na nedávné oteplování."
            },
            {
              "type": "list",
              "items": [
                "Dynamika sněhové pokrývky a povrchové tání",
                "Modelování glacio-hydrologických procesí v proglaciálních údolích",
                "Příspěvek k pochopení vzestupu hladiny moře z regionu poloostrova"
              ]
            },
            {
              "type": "callout",
              "label": "Výzkumná publikace",
              "text": "Nedělčev et al. (2025, The Cryosphere): role tání sněhu, ledovců a dešťů v dynamice toků na James Ross Island."
            }
          ],
          "resources": [
            {
              "kind": "link",
              "title": "CARP — Publikace",
              "url": "https://carp.sci.muni.cz/publikace/",
              "source": "CARP"
            }
          ]
        }
      ],
      resources: [
        {
          "kind": "link",
          "title": "NSIDC — Antarctic ice",
          "url": "https://nsidc.org/cryosphere/antarctica",
          "source": "NSIDC"
        }
      ],
    },
    {
      id: "mod-klima",
      title: "Klimatologie a atmosféra",
      completion: "výukový modul",
      moduleSection: "veda",
      tags: ["Antarktida","klimatologie","atmosféra"],
      description: "Radiační bilance, cirkulace, ozonová vrstva, klimatická změna a atmosférický monitoring CARP.",
      syllabus: [
        "Klima: teplota a radiační bilance",
        "Atmosférická cirkulace a katabatické větry",
        "Ozonová díra nad Antarktidou",
        "Antarktida a současná změna klimatu",
        "Atmosférické vědy v CARP",
        "Dlouhodobý monitoring klimatu",
        "Modelování atmosféry a extrémní jevy",
        "UV záření a ozonová vrstva"
      ],
      lessons: [
        {
          "id": "klima-teplota-radiace",
          "title": "Klima: teplota a radiační bilance",
          "summary": "Proč je Antarktida extrémně studená — výška, albedo, polární noc a inverze.",
          "minutes": 22,
          "blocks": [
            {
              "type": "paragraph",
              "text": "Antarktida kombinuje vysokou nadmořskou výšku (průměr > 2 000 m), albedo sněhu a ledu (80–90 %), dlouhou polární noc a suchý vzduch s malým skleníkovým efektem."
            },
            {
              "type": "callout",
              "label": "Rekordy",
              "text": "Přízemní minimum −89,2 °C (Vostok, 1983). Družicová měření až −93 až −98 °C. Maximum na kontinentu 18,3 °C (Esperanza, 2020)."
            },
            {
              "type": "list",
              "label": "Energetická bilance",
              "items": [
                "Silný sezónní chod slunečního záření",
                "Vysoké albedo — většina záření se odráží",
                "Trvalé vyzařování tepla → roční bilance záporná",
                "Přízemní teplotní inverze pohání katabatické větry"
              ]
            }
          ],
          "resources": [
            {
              "kind": "link",
              "title": "BAS — Antarctic climate",
              "url": "https://www.bas.ac.uk/about/antarctica/geography-and-climate/",
              "source": "BAS"
            }
          ]
        },
        {
          "id": "cirkulace-katabaticke-vetry",
          "title": "Atmosférická cirkulace a katabatické větry",
          "summary": "Polární vír, západní větry a nejsilnější přízemní větry planety.",
          "minutes": 20,
          "blocks": [
            {
              "type": "paragraph",
              "text": "Polární vír izoluje kontinent v zimě. Nad oceánem dominují silné západní větry (roaring forties, furious fifties, screaming sixties)."
            },
            {
              "type": "paragraph",
              "text": "Katabatické větry: studený hustý vzduch stéká z ledové plošiny k pobřeží. V zúžených údolích dosahují extrémní síly."
            },
            {
              "type": "callout",
              "label": "Největrnější místo",
              "text": "Commonwealth Bay (Cape Denison) — průměr ≈ 80 km/h, nárazy > 300 km/h (Mawson)."
            },
            {
              "type": "paragraph",
              "text": "Index SAM (Southern Annular Mode) popisuje kolísání pásu západních větrů; pozitivní fáze v posledních desetiletích souvisí s ozonovou dírou a skleníkovými plyny."
            }
          ],
          "resources": [
            {
              "kind": "link",
              "title": "NASA Earth Observatory — Antarctic winds",
              "url": "https://earthobservatory.nasa.gov/",
              "source": "NASA"
            }
          ]
        },
        {
          "id": "ozonova-dira",
          "title": "Ozonová díra nad Antarktidou",
          "summary": "Sezónní ztenčení ozonu na jaře, chemie PSC a Montrealský protokol.",
          "minutes": 20,
          "blocks": [
            {
              "type": "paragraph",
              "text": "Ozonová díra — sezónní ztenčení stratosférického ozonu nad Antarktidou každé jižní jaro (září–říjen). Objev: Farman et al., stanice Halley, 1985."
            },
            {
              "type": "list",
              "label": "Mechanismus",
              "items": [
                "Polární noc → stabilní polární vír izoluje vzduch",
                "Polární stratosférická oblaka (PSC) uvolňují chlor z freonů (CFC)",
                "Jarní sluneční záření aktivuje katalytický rozklad O₃",
                "Po rozpadu víru se díra zaplní ozonem z nižších šířek"
              ]
            },
            {
              "type": "callout",
              "label": "Montrealský protokol (1987)",
              "text": "Postupný zákaz CFC; ozonová vrstva se pomalu zotavuje — očekává se návrat k hodnotám z poloviny 20. století."
            }
          ],
          "resources": [
            {
              "kind": "link",
              "title": "NASA Ozone Watch",
              "url": "https://ozonewatch.gsfc.nasa.gov/",
              "source": "NASA"
            },
            {
              "kind": "link",
              "title": "BAS — Ozone hole",
              "url": "https://www.bas.ac.uk/data/our-data/publication/ozone-hole/",
              "source": "BAS"
            }
          ]
        },
        {
          "id": "zmena-klimatu",
          "title": "Antarktida a současná změna klimatu",
          "summary": "Nerovnoměrné oteplování, ústup ledovců a nejistota projekcí hladiny.",
          "minutes": 20,
          "blocks": [
            {
              "type": "paragraph",
              "text": "Poloostrov a Západní Antarktida se oteplují rychle; vnitrozemí Východní Antarktidy zůstává relativně stabilní."
            },
            {
              "type": "list",
              "label": "Pozorované změny",
              "items": [
                "Ztenčování Thwaites a Pine Island",
                "Rozpady šelfů Larsen A/B",
                "Rekordně nízké rozlohy mořského ledu",
                "Epizody povrchového tání (vých. Antarktida, březen 2022)"
              ]
            },
            {
              "type": "callout",
              "label": "Thwaites",
              "text": "„Ledovec soudného dne“ — potenciál ≈ 0,65 m; zátka pro část WAIS a riziko marine ice sheet instability."
            }
          ],
          "resources": [
            {
              "kind": "link",
              "title": "NASA — Climate Change",
              "url": "https://climate.nasa.gov/",
              "source": "NASA"
            }
          ]
        },
        {
          "id": "atmo-skupina",
          "title": "Atmosférické vědy v CARP",
          "summary": "Climate–Glacier Working Group — od přízemí po stratosféru a vazba na kryosféru.",
          "minutes": 14,
          "blocks": [
            {
              "type": "paragraph",
              "text": "Pracovní skupina Climate – Glacier Working Group (Klima – pracovní skupina pro ledovce) zkoumá polární meteorologii, klimatologii, hydrologii a glaciologii v oblasti Antarktického poloostrova a ostrova Jamese Rosse."
            },
            {
              "type": "list",
              "label": "Záběr výzkumu",
              "items": [
                "Atmosféra od povrchu po stratosféru",
                "Změny hydrosféry a kryosféry",
                "Dopady klimatických změn na toky, jezera a ledovce",
                "Hmotnostní bilance ledovců a role ve vzestupu hladiny moře"
              ]
            },
            {
              "type": "paragraph",
              "text": "Skupina zajišťuje pozemní meteorologii, monitoring ledovců (glaciologie, georadar), energetický a sedimentární bilanc a monitoring UV záření."
            }
          ],
          "resources": [
            {
              "kind": "link",
              "title": "CARP — Atmosférické vědy",
              "url": "https://carp.sci.muni.cz/vyzkum/#atmospheric",
              "source": "CARP"
            }
          ]
        },
        {
          "id": "atmo-monitoring",
          "title": "Dlouhodobý monitoring klimatu",
          "summary": "Síť měření na James Ross Island a příspěvek do globálních databází.",
          "minutes": 16,
          "blocks": [
            {
              "type": "paragraph",
              "text": "CARP řídí dlouhodobé sledování atmosférických parametrů a klimatických podmínek na ostrově Jamese Rosse a dalších lokalitách Antarktického poloostrova."
            },
            {
              "type": "list",
              "label": "Hlavní témata monitoringu",
              "items": [
                "Dlouhodobé klimatické podmínky a atmosférické procesy",
                "Proměnlivost klimatu a dopady na suchozemské ekosystémy",
                "Povrchová výměna energie, mikroklima, půda a vegetace",
                "Toky povrchové vody v proglaciálních oblastech"
              ]
            },
            {
              "type": "list",
              "label": "Globální databáze",
              "items": [
                "Globální databáze mikroklimatu",
                "PANGAEA (World Data Center)",
                "World Glacier Monitoring Service",
                "Global Terrestrial Network for Glaciers"
              ]
            }
          ],
          "resources": [
            {
              "kind": "dataset",
              "title": "PANGAEA",
              "url": "https://www.pangaea.de/",
              "source": "AWI"
            },
            {
              "kind": "dataset",
              "title": "Global Terrestrial Network for Glaciers",
              "url": "https://wgms.ch/products_ref_glaciers/",
              "source": "WGMS"
            },
            {
              "kind": "link",
              "title": "BAS READER database",
              "url": "https://www.bas.ac.uk/data/our-data/",
              "source": "BAS"
            }
          ]
        },
        {
          "id": "atmo-modelovani",
          "title": "Modelování atmosféry a extrémní jevy",
          "summary": "Mezní vrstva, foehn a numerické simulace počasí.",
          "minutes": 15,
          "blocks": [
            {
              "type": "paragraph",
              "text": "Skupina numericky modeluje atmosférickou cirkulaci a procesy v mezní vrstvě, včetně extrémních povětrnostních jevů na poloostrově."
            },
            {
              "type": "callout",
              "label": "Foehn",
              "text": "Větry typu foehn způsobují anomálně vysoké přízemní teploty a rychlé tání sněhu a ledu — klíčový mechanismus oteplování v závětří hřebenů."
            },
            {
              "type": "paragraph",
              "text": "Spolupráce s University of Bergen, SLF Davos, Karlovou univerzitou a dalšími centry polárního klimatu."
            }
          ],
          "resources": [
            {
              "kind": "link",
              "title": "CARP — Atmospheric Sciences (EN)",
              "url": "https://carp.sci.muni.cz/research/#atmospheric",
              "source": "CARP"
            }
          ]
        },
        {
          "id": "atmo-uv-ozon",
          "title": "UV záření a ozonová vrstva",
          "summary": "Rekonstrukce slunečního UV a studium stratosférické ozonové vrstvy.",
          "minutes": 14,
          "blocks": [
            {
              "type": "paragraph",
              "text": "CARP provádí numerické modelování a rekonstrukci slunečního UV záření a sleduje stav stratosférické ozonové vrstvy v polárních podmínkách."
            },
            {
              "type": "list",
              "items": [
                "Monitoring erythemálního UV a celkového sloupce ozonu",
                "Vazba mezi oblačností, albedem a aerosolem",
                "Výzkum proměnlivosti slunečního záření na severním poloostrově (Szymszová et al.)"
              ]
            }
          ],
          "resources": [
            {
              "kind": "link",
              "title": "NASA Ozone Watch",
              "url": "https://ozonewatch.gsfc.nasa.gov/",
              "source": "NASA"
            }
          ]
        }
      ],
      resources: [
        {
          "kind": "link",
          "title": "BAS — Weather and climate",
          "url": "https://www.bas.ac.uk/polar-operations/science/climate-weather/",
          "source": "BAS"
        },
        {
          "kind": "link",
          "title": "NASA — Climate Change",
          "url": "https://climate.nasa.gov/",
          "source": "NASA"
        }
      ],
    },
    {
      id: "mod-ocean",
      title: "Oceánografie",
      completion: "výukový modul",
      moduleSection: "veda",
      tags: ["Antarktida","oceánografie"],
      description: "Jižní oceán, Antarktický cirkumpolární proud a role oceánu v globální cirkulaci.",
      syllabus: [
        "Jižní oceán a ACC"
      ],
      lessons: [
        {
          "id": "jizni-ocean-acc",
          "title": "Jižní oceán a ACC",
          "summary": "Antarktický cirkumpolární proud a tepelná izolace kontinentu.",
          "minutes": 20,
          "blocks": [
            {
              "type": "paragraph",
              "text": "Antarktický cirkumpolární proud (ACC) je objemově největší mořský proud (≈ 130–150 Sv), poháněný západními větry kolem celé Země."
            },
            {
              "type": "callout",
              "label": "Tektonika a klima",
              "text": "Otevření Drakeova průlivu umožnilo ACC a ochlazení Antarktidy — učebnicový vliv uspořádání kontinentů na klima."
            },
            {
              "type": "list",
              "items": [
                "Antarktická konvergence — studená voda klesá pod teplejší subantarktickou",
                "Upwelling bohatý na živiny a uhlík",
                "AABW uzavírá spodní větev termohalinní cirkulace"
              ]
            }
          ],
          "resources": [
            {
              "kind": "link",
              "title": "SCAR — Southern Ocean",
              "url": "https://scar.org/science/southern-ocean/",
              "source": "SCAR"
            }
          ]
        }
      ],
      resources: [
        {
          "kind": "link",
          "title": "SOCCOM — Southern Ocean",
          "url": "https://soccom.princeton.edu/",
          "source": "SOCCOM"
        }
      ],
    },
    {
      id: "mod-hydrologie",
      title: "Hydrologie",
      completion: "výukový modul",
      moduleSection: "veda",
      tags: ["Antarktida","hydrologie"],
      description: "Subglaciální jezera, odtoky a vodní bilance antarktického ledového štítu.",
      syllabus: [
        "Hydrologie a subglaciální jezera"
      ],
      lessons: [
        {
          "id": "hydrologie-subglacialni-jezera",
          "title": "Hydrologie a subglaciální jezera",
          "summary": "Kapalná voda pod ledem, jezero Vostok a suchá údolí.",
          "minutes": 16,
          "blocks": [
            {
              "type": "paragraph",
              "text": "Geotermální teplo a tlak ledu udržují na bázi štítu kapalnou vodu — sítě subglaciálních jezer a toků."
            },
            {
              "type": "callout",
              "label": "Jezero Vostok",
              "text": "Největší známé subglaciální jezero pod ≈ 4 km ledu; voda izolována statisíce až miliony let."
            },
            {
              "type": "list",
              "items": [
                "McMurdo Dry Valleys — extrémně suché, ledem nepokryté oblasti",
                "Bazální voda maže podloží a může zrychlit ledové proudy"
              ]
            }
          ],
          "resources": [
            {
              "kind": "dataset",
              "title": "Antarctic Subglacial Lakes",
              "url": "https://www.scar.org/science/subglacial/",
              "source": "SCAR"
            }
          ]
        }
      ],
    },
    {
      id: "mod-biosfera",
      title: "Biosféra a ekologie",
      completion: "výukový modul",
      moduleSection: "veda",
      tags: ["Antarktida","ekologie","biologie"],
      description: "Polární ekosystémy, mikrobiologie, extremofily a biologický výzkum CARP.",
      syllabus: [
        "Biosféra a polární ekosystémy",
        "Rostliny a fyziologie autotrofů",
        "LTRP a komory Open Top Chamber",
        "Mikrobiologie a CAMB",
        "LTEM — dlouhodobý monitoring prostředí",
        "Extrémní organismy a biodiverzita",
        "Biodata a univerzitní kurzy"
      ],
      lessons: [
        {
          "id": "biosfera-ekosystemy",
          "title": "Biosféra a polární ekosystémy",
          "summary": "Suchozemský život, mořská produktivita a krill.",
          "minutes": 18,
          "blocks": [
            {
              "type": "paragraph",
              "text": "Suchozemský život je chudý a soustředěný do nezamrzlých oblastí (poloostrov, oázy). Jižní oceán patří k nejproduktivnějším mořím."
            },
            {
              "type": "list",
              "label": "Suchozemsko",
              "items": [
                "Lišejníky, mechy, řasy, mikroorganismy",
                "Dvě kvetoucí rostliny: Deschampsia antarctica a Colobanthus quitensis",
                "Belgica antarctica — největší suchozemský bezobratlý"
              ]
            },
            {
              "type": "callout",
              "label": "Krill",
              "text": "Euphausia superba je základem potravní sítě; vázán na mořský led a fytoplankton."
            }
          ],
          "resources": [
            {
              "kind": "link",
              "title": "SCAR — Life Sciences",
              "url": "https://scar.org/science/life-sciences/",
              "source": "SCAR"
            }
          ]
        },
        {
          "id": "bio-rostliny-uvod",
          "title": "Rostliny a fyziologie autotrofů",
          "summary": "Stresová fyziologie lišejníků, mechů, řas a sinic na James Ross Island.",
          "minutes": 16,
          "blocks": [
            {
              "type": "paragraph",
              "text": "Výzkum struktury a funkcí vegetace na ostrově Jamese Rosse se zaměřuje na schopnost antarktických autotrofů přežívat v extrémním prostředí — chlad, UV-B, vysychání a fotoinhibice."
            },
            {
              "type": "list",
              "label": "Hlavní směry",
              "items": [
                "Primární fotosyntetické procesy a fluorescence chlorofylu",
                "Taxonomie a ekologie autotrofů; sbírka kultur a fotobioreaktory",
                "Mapování vegetace drony a spektrální indexy",
                "Biologické půdní krusty"
              ]
            }
          ],
          "resources": [
            {
              "kind": "link",
              "title": "CARP — Rostliny a fyziologie",
              "url": "https://carp.sci.muni.cz/vyzkum/#plants",
              "source": "CARP"
            }
          ]
        },
        {
          "id": "bio-ltrp-otc",
          "title": "LTRP a komory Open Top Chamber",
          "summary": "Dlouhodobé výzkumné plochy a simulace oteplování od roku 2007.",
          "minutes": 15,
          "blocks": [
            {
              "type": "paragraph",
              "text": "Od roku 2007 fungují na severním James Ross Island komory OTC (Open Top Chamber) pro studium reakce mechů a lišejníků na globální oteplování. Tři lokality LTRP se monitorují více než deset let."
            },
            {
              "type": "list",
              "items": [
                "Dominantní druhy: Bryum pseudotriquetrum, Xanthoria elegans, Umbilicaria decussata",
                "Umělé oteplení závisí na charakteru stanoviště (oáza, skalní plošina, předpolí ledovce)",
                "Zimní epizody s teplotou povrchu > 0 °C aktivují mechy a lišejníky z klidu"
              ]
            },
            {
              "type": "paragraph",
              "text": "Celoroční měření kyslíku v malých jezírkách dokumentují fotosyntézu mikrořas v létě a mikrobiální spotřebu v předzimním období."
            }
          ],
          "resources": [
            {
              "kind": "link",
              "title": "CARP — Plants (EN)",
              "url": "https://carp.sci.muni.cz/research/#plants",
              "source": "CARP"
            }
          ]
        },
        {
          "id": "bio-mikrobiologie",
          "title": "Mikrobiologie a CAMB",
          "summary": "Psychrofilní bakterie, kryokonity, houby na horninách a antimikrobiální látky.",
          "minutes": 16,
          "blocks": [
            {
              "type": "paragraph",
              "text": "Mikrobiologický výzkum zahrnuje monitoring, taxonomii a experimenty s bakteriemi a mikroskopickými houbami z abiotických zdrojů i z ústní sliznice a trusu antarktických živočichů."
            },
            {
              "type": "list",
              "label": "Témata",
              "items": [
                "Heterotrofní mikrobiomy ve vodních tocích, jezerech a kryokonitech",
                "Permafrost, stíněné skály a jezerní sedimenty — metagenomika",
                "Antimikrobiální sloučeniny z antarktických izolátů",
                "„Bezpečnost Antarktidy“ — prevence zavlečení nepůvodních druhů"
              ]
            },
            {
              "type": "callout",
              "label": "CCM / CAMB",
              "text": "Česká sbírka mikroorganismů spravuje ≈ 10 000 kmenů z Antarktidy; vybrané izoláty jsou v České antarktické mikrobiální biobance (CAMB)."
            }
          ],
          "resources": [
            {
              "kind": "link",
              "title": "CARP — Mikrobiologie",
              "url": "https://carp.sci.muni.cz/vyzkum/#microbiology",
              "source": "CARP"
            },
            {
              "kind": "link",
              "title": "Czech Collection of Microorganisms",
              "url": "https://www.sci.muni.cz/ccm",
              "source": "MUNI"
            }
          ]
        },
        {
          "id": "bio-ltem",
          "title": "LTEM — dlouhodobý monitoring prostředí",
          "summary": "Sledování mikrobiálních společenstev na poloostrově Ulu ve spolupráci s UK a MCMLTER.",
          "minutes": 14,
          "blocks": [
            {
              "type": "paragraph",
              "text": "Long-Term Environmental Monitoring (LTEM) sleduje změny abundance, struktury a diverzity mikrobiálních společenstev z reprezentativních stanovišť poloostrova Ulu a propojuje je s abiotickými parametry."
            },
            {
              "type": "list",
              "items": [
                "Spolupráce CARP (MUNI) a Přírodovědecké fakulty UK",
                "Vazby na MCMLTER, Instituto Antártico Argentino a další",
                "Podskupiny: Diversity in Cryospheric Ecosystems, Extreme Aquatic Ecology",
                "Data v otevřených repozitářích; fyzické vzorky archivovány"
              ]
            },
            {
              "type": "paragraph",
              "text": "Cílem je identifikovat environmentální prahy a předpovídat budoucnost antarktické mikrobiální diverzity v oteplujícím se světě."
            }
          ],
          "resources": [
            {
              "kind": "link",
              "title": "CARP — LTEM",
              "url": "https://carp.sci.muni.cz/research/#LTEM",
              "source": "CARP"
            },
            {
              "kind": "link",
              "title": "McMurdo LTER",
              "url": "https://mcm.lternet.edu/",
              "source": "NSF LTER"
            }
          ]
        },
        {
          "id": "bio-extremofily",
          "title": "Extrémní organismy a biodiverzita",
          "summary": "Macrochloris, Solorina spongiosa a odolnost vůči stresu.",
          "minutes": 13,
          "blocks": [
            {
              "type": "list",
              "items": [
                "První popis Macrochloris rubrioleum pro James Ross Island",
                "Monitorování vzácného lišejníku Solorina spongiosa",
                "Studované taxony: Nostoc commune, Sanionia uncinata, Usnea antarctica aj.",
                "Kryorezistence, desikace a radiační biologie v laboratoři EEL"
              ]
            }
          ],
          "resources": [
            {
              "kind": "link",
              "title": "CARP — EEL laboratoř",
              "url": "https://carp.sci.muni.cz/infrastructure/#eel",
              "source": "CARP"
            }
          ]
        },
        {
          "id": "bio-data",
          "title": "Biodata a univerzitní kurzy",
          "summary": "Otevřená data z LTRP a připravované kurzy MUNI.",
          "minutes": 10,
          "blocks": [
            {
              "type": "paragraph",
              "text": "CARP zpřístupňuje data z dlouhodobých měření aktivní vrstvy a mezilehlých jezer (soubory AL-2016-2019, IL-2016-2019). Sekce univerzitních kurzů je ve výstavbě."
            },
            {
              "type": "list",
              "label": "Mikrobiologické databáze",
              "items": [
                "Czech Antarctic Microbial Biobank (CAMB)",
                "NCBI GenBank",
                "MycoBank",
                "BacDive"
              ]
            }
          ],
          "resources": [
            {
              "kind": "link",
              "title": "CARP — Databáze",
              "url": "https://carp.sci.muni.cz/vyzkum/#databases",
              "source": "CARP"
            },
            {
              "kind": "link",
              "title": "CARP — University Courses",
              "url": "https://carp.sci.muni.cz/research/#courses",
              "source": "CARP"
            }
          ]
        }
      ],
      resources: [
        {
          "kind": "link",
          "title": "CARP — Biosféra",
          "url": "https://carp.sci.muni.cz/vyzkum/",
          "source": "CARP"
        }
      ],
    },
    {
      id: "mod-paleoklima",
      title: "Paleoklimatologie",
      completion: "výukový modul",
      moduleSection: "veda",
      tags: ["Antarktida","paleoklimatologie"],
      description: "Ledovcová jádra, proxy záznamy a rekonstrukce klimatu z antarktického ledu.",
      syllabus: [
        "Paleoklimatologie a ledovcová jádra"
      ],
      lessons: [
        {
          "id": "paleoklimatologie-jadra",
          "title": "Paleoklimatologie a ledovcová jádra",
          "summary": "Led jako archiv klimatu — izotopy, bublinky a Milankovičovy cykly.",
          "minutes": 20,
          "blocks": [
            {
              "type": "list",
              "label": "Co led uchovává",
              "items": [
                "Vzduchové bublinky — dávná atmosféra včetně CO₂",
                "Izotopy δ¹⁸O, δD — teplotní proxy",
                "Prachové a sopečné vrstvy — datace a suchost"
              ]
            },
            {
              "type": "callout",
              "label": "Vostok a EPICA",
              "text": "Vostok ≈ 420 000 let; EPICA Dome C ≈ 800 000 let. Dnešní CO₂ převyšuje maxima celého záznamu."
            }
          ],
          "resources": [
            {
              "kind": "link",
              "title": "BAS — Ice cores",
              "url": "https://www.bas.ac.uk/project/ice-cores/",
              "source": "BAS"
            }
          ]
        }
      ],
      resources: [
        {
          "kind": "link",
          "title": "EPICA — Ice cores",
          "url": "https://www.bas.ac.uk/project/epica/",
          "source": "BAS"
        }
      ],
    },
    {
      id: "mod-carp",
      title: "CARP",
      completion: "výukový modul",
      moduleSection: "ostatni",
      tags: ["Antarktida","CARP","MUNI"],
      description: "Český antarktický výzkumný program Masarykovy univerzity — stanice Mendel a Nelson, brněnské laboratoře a multidisciplinární výzkumný program.",
      syllabus: [
        "Český antarktický výzkumný program (CARP)",
        "Multidisciplinární výzkumný program",
        "Stanice Johanna Gregora Mendela",
        "CZ*ECO Nelson",
        "Polar-Geo-Lab, Polar-Bio-Lab a EEL"
      ],
      lessons: [
        {
          "id": "carp-uvod",
          "title": "Český antarktický výzkumný program (CARP)",
          "summary": "Národní program MUNI — konzultativní členství ČR v Antarktické smlouvě a multidisciplinární výzkum.",
          "minutes": 15,
          "blocks": [
            {
              "type": "paragraph",
              "text": "Český antarktický výzkumný program (CARP, Czech Antarctic Research Programme) realizuje Masarykova univerzita. MUNI je jedinou univerzitou na světě a jedinou veřejnoprávní institucí v ČR, která vlastní a provozuje vědeckou stanici v Antarktidě."
            },
            {
              "type": "paragraph",
              "text": "Program zajišťuje České republice konzultativní členství v rámci Antarktické smlouvy a umožňuje spolurozhodování o využití kontinentu. V zahraničí je chápán jako vládou financovaná iniciativa pro prohloubení poznání antarktické oblasti a celosvětového geo-ekosystému."
            },
            {
              "type": "list",
              "label": "Výzkumná infrastruktura CARP",
              "items": [
                "Stanice J. G. Mendela na ostrově Jamese Rosse",
                "Technicko-logistické útočiště CZ*ECO Nelson (Jižní Shetlandy)",
                "Polar-Geo-Lab a Polar-Bio-Lab v Brně"
              ]
            }
          ],
          "resources": [
            {
              "kind": "link",
              "title": "CARP — O nás",
              "url": "https://carp.sci.muni.cz/o-nas/",
              "source": "CARP"
            },
            {
              "kind": "link",
              "title": "Polar portál MUNI",
              "url": "https://carp.sci.muni.cz/",
              "source": "Masarykova univerzita"
            }
          ]
        },
        {
          "id": "carp-vyzkumny-program",
          "title": "Multidisciplinární výzkumný program",
          "summary": "Monitoring a komplexní studium jedné z největších deglaciovaných oblastí Antarktidy.",
          "minutes": 16,
          "blocks": [
            {
              "type": "paragraph",
              "text": "Výzkumný program stanice je zaměřen na dlouhodobý monitoring životního prostředí a multidisciplinární výzkum pobřežní antarktické oázy — jedné z největších deglaciovaných oblastí na kontinentě."
            },
            {
              "type": "list",
              "label": "Zahrnuté obory",
              "items": [
                "Vědy o Zemi: geologie, geomorfologie, paleontologie, geochemie, klimatologie, hydrologie",
                "Biologie: botanika, ekologie, ekofyziologie, mikrobiologie, parazitologie, půdní biologie",
                "Technické vědy: polymery, odolnost vůči UV záření"
              ]
            },
            {
              "type": "paragraph",
              "text": "Studovány jsou abiotické i biotické složky, jejich vztahy a fungování celého systému včetně predikcí dalšího vývoje."
            }
          ],
          "resources": [
            {
              "kind": "link",
              "title": "CARP — Výzkumný program",
              "url": "https://carp.sci.muni.cz/vyzkum/",
              "source": "CARP"
            },
            {
              "kind": "link",
              "title": "CARP — Research programme",
              "url": "https://carp.sci.muni.cz/research/#programme",
              "source": "CARP"
            }
          ]
        },
        {
          "id": "carp-mendel",
          "title": "Stanice Johanna Gregora Mendela",
          "summary": "Hlavní česká antarktická stanice na poloostrově Ulu — technické vybavení a provoz.",
          "minutes": 18,
          "blocks": [
            {
              "type": "paragraph",
              "text": "Česká vědecká stanice J. G. Mendela leží v severní části ostrova Jamese Rosse (poloostrov Ulu) u Antarktického poloostrova. Provozuje ji CARP od výstavby v letech 2004–2006."
            },
            {
              "type": "list",
              "label": "Provoz a koncepce",
              "items": [
                "Sezónní provoz: typicky leden – polovina března (australské léto)",
                "Obnovitelné zdroje: vítr a sluneční záření",
                "Kapacita posádky až 16 osob; suché a mokré laboratoře",
                "Zodiac čluny, terénní vozidla, technické dílny"
              ]
            },
            {
              "type": "paragraph",
              "text": "Stanice je zaměřena na výzkum nezamrzajících suchozemských ekosystémů a geosystémů — unikátní přírodní laboratoř v měnícím se polárním prostředí."
            }
          ],
          "resources": [
            {
              "kind": "link",
              "title": "CARP — Infrastruktura Mendel",
              "url": "https://carp.sci.muni.cz/infrastructure/#mendel",
              "source": "CARP"
            },
            {
              "kind": "video",
              "title": "Virtuální prohlídka stanice Mendel",
              "url": "https://www.youtube.com/watch?v=9HVsoko9Y0M",
              "source": "CARP"
            }
          ]
        },
        {
          "id": "carp-nelson",
          "title": "CZ*ECO Nelson",
          "summary": "Technicko-logistické útočiště na Nelsonově ostrově — historie Eco-Nelson a současný výzkum.",
          "minutes": 14,
          "blocks": [
            {
              "type": "paragraph",
              "text": "Terénní tábor CZ*ECO Nelson na Jižních Shetlandách založil Jaroslav Pavlíček v sezóně 1988–89 jako „Eco-Nelson“ — jediná soukromá výzkumná stanice v Antarktidě."
            },
            {
              "type": "list",
              "items": [
                "2017: odkoupení Českou antarktickou nadací, pronájem CARP na 99 let",
                "Rekonstrukce od sezóny 2018–19",
                "Nezamrzlá oáza ≈ 4 km²; teplejší oceánské klima než James Ross",
                "Výzkum: klimatologie, ornitologie, fyziologie rostlin"
              ]
            }
          ],
          "resources": [
            {
              "kind": "link",
              "title": "CARP — CZ*ECO Nelson",
              "url": "https://carp.sci.muni.cz/infrastructure/#nelson",
              "source": "CARP"
            },
            {
              "kind": "link",
              "title": "Česká antarktická nadace",
              "url": "https://www.antarcticfoundation.cz/",
              "source": "CAF"
            }
          ]
        },
        {
          "id": "carp-laboratore",
          "title": "Polar-Geo-Lab, Polar-Bio-Lab a EEL",
          "summary": "Brněnské laboratoře podporující terénní výzkum v Arktidě i Antarktidě.",
          "minutes": 16,
          "blocks": [
            {
              "type": "heading",
              "text": "Polar-Geo-Lab"
            },
            {
              "type": "paragraph",
              "text": "Sledování abiotických prostředí (ledovce, permafrost, atmosféra, hydrosféra) v měnícím se klimatu. Dvě skupiny: klimaticko-ledovcová (meteorologie, glaciologie) a geovědní (geomorfologie, permafrost, paleolimnologie)."
            },
            {
              "type": "heading",
              "text": "Polar-Bio-Lab"
            },
            {
              "type": "list",
              "items": [
                "EEL — Laboratoř života v extrémních prostředích: stresová fyziologie autotrofů, kultivace, reakce na oteplování a ozonovou díru",
                "CCM — Česká sbírka mikroorganismů: ≈ 10 000 kmenů antarktických izolátů, CAMB biobanka"
              ]
            }
          ],
          "resources": [
            {
              "kind": "link",
              "title": "CARP — Polar-Geo-Lab",
              "url": "https://carp.sci.muni.cz/infrastructure/#polar-geo-lab",
              "source": "CARP"
            },
            {
              "kind": "link",
              "title": "CARP — Polar-Bio-Lab / EEL",
              "url": "https://carp.sci.muni.cz/infrastructure/#polar-bio-lab",
              "source": "CARP"
            },
            {
              "kind": "link",
              "title": "Česká sbírka mikroorganismů",
              "url": "https://www.sci.muni.cz/ccm",
              "source": "MUNI"
            }
          ]
        }
      ],
      resources: [
        {
          "kind": "link",
          "title": "CARP oficiální web",
          "url": "https://carp.sci.muni.cz/",
          "source": "CARP"
        }
      ],
    },
    {
      id: "mod-historie",
      title: "Historie",
      completion: "výukový modul",
      moduleSection: "ostatni",
      tags: ["Antarktida"],
      description: "Od Heroic Age a závodů k pólu po Mezinárodní geofyzikální rok a vznik české stanice Johanna Gregora Mendela.",
      syllabus: [
        "První průzkumy a Heroic Age",
        "Závody k jižnímu pólu",
        "Od IGY po Antarktickou smlouvu",
        "Historie českého výzkumu v Antarktidě"
      ],
      lessons: [
        {
          "id": "historie-prvni-pruzkumy",
          "title": "První průzkumy a Heroic Age",
          "summary": "Od objevení kontinentu po éru hrdinských expedic — Cook, Bellingshausen, Ross a Shackleton.",
          "minutes": 18,
          "blocks": [
            {
              "type": "paragraph",
              "text": "Antarktida byla poprvé spatřena v lednu 1820 — nezávisle ji zahlédli expediční lodě Fabiana Gottlieba von Bellingshausena (Rusko), Edwarda Bransfielda (Británie) a Nathanaiela Palmera (USA). Kontinent byl dlouho teoretizován jako Terra Australis."
            },
            {
              "type": "list",
              "label": "Klíčové milníky 19. století",
              "items": [
                "1840: James Clark Ross — pojmenování Rossova moře a Rossova ledového šelfu",
                "1895: první zdokumentovaný přistání na pevnině (Borchgrevink)",
                "1901–1904: Discovery Expedition (Scott, Shackleton)"
              ]
            },
            {
              "type": "callout",
              "label": "Heroic Age",
              "text": "Období ≈ 1897–1922 — desítky expedic, často s velkými oběťmi. Cílem bylo zeměpisné prvenství, mapování pobřeží a vědecká měření v extrémních podmínkách."
            }
          ],
          "resources": [
            {
              "kind": "link",
              "title": "SCAR — History of Antarctic exploration",
              "url": "https://scar.org/about/antarctica/history/",
              "source": "SCAR"
            },
            {
              "kind": "link",
              "title": "BAS — Antarctic history",
              "url": "https://www.bas.ac.uk/about/antarctica/",
              "source": "BAS"
            }
          ]
        },
        {
          "id": "historie-zavody-k-polu",
          "title": "Závody k jižnímu pólu",
          "summary": "Amundsen (1911) a Scott (1912) — první dosažení pólu a tragický návrat Terra Nova.",
          "minutes": 16,
          "blocks": [
            {
              "type": "paragraph",
              "text": "Roald Amundsen dosáhl jižního pólu 14. prosince 1911 s týmem používajícím psí spřežení a lyže. Robert Falcon Scott přišel o 34 dní později (17. ledna 1912); všichni členové jeho poslední skupiny zemřeli na návratu."
            },
            {
              "type": "list",
              "label": "Proč Amundsen uspěl dříve",
              "items": [
                "Zkušenosti z Arktidy a efektivní logistika se psy",
                "Jednodušší trasa přes Rossův ledový šelf k pólu",
                "Scott spoléhal více na pony a motorové sáně — omezená spolehlivost"
              ]
            },
            {
              "type": "paragraph",
              "text": "Obě expedice přinesly cenná vědecká data (geologie, meteorologie, magnetismus). Scottovy deníky a Amundsenův přístup formují dodnes etiku polárního výzkumu."
            }
          ],
          "resources": [
            {
              "kind": "link",
              "title": "Scott Polar Research Institute",
              "url": "https://www.spri.cam.ac.uk/",
              "source": "SPRI"
            }
          ]
        },
        {
          "id": "historie-igy-smlouva",
          "title": "Od IGY po Antarktickou smlouvu",
          "summary": "Mezinárodní geofyzikální rok 1957–58, stálé stanice a diplomatický kompromis roku 1959.",
          "minutes": 15,
          "blocks": [
            {
              "type": "paragraph",
              "text": "Mezinárodní geofyzikální rok (IGY) 1957–58 zmobilizoval desítky zemí k intenzivnímu antarktickému výzkumu. Vzniklo mnoho stálých stanic; věda se stala společným jazykem i v době studené války."
            },
            {
              "type": "list",
              "items": [
                "1959: podpis Antarktické smlouvy ve Washingtonu (12 původních smluvních stran)",
                "1961: smlouva vstoupila v platnost",
                "Zmrazení územních nároků, mírové využití, svoboda vědeckého výzkumu",
                "1991: Madridský protokol — posílení ochrany životního prostředí"
              ]
            },
            {
              "type": "callout",
              "label": "Československo / ČR",
              "text": "Československo se účastnilo IGY; samostatná ČR získala konzultativní status díky antarktickému výzkumu (CARP) v 21. století."
            }
          ],
          "resources": [
            {
              "kind": "link",
              "title": "Antarctic Treaty Secretariat",
              "url": "https://www.ats.aq/",
              "source": "ATS"
            }
          ]
        },
        {
          "id": "carp-historie",
          "title": "Historie českého výzkumu v Antarktidě",
          "summary": "Od plánů v 90. letech po otevření stanice Mendel v roce 2007.",
          "minutes": 14,
          "blocks": [
            {
              "type": "paragraph",
              "text": "Česká republika patří k zemím s dlouhodobě významným antarktickým výzkumem. Plány na českou základnu sahají do 90. let 20. století, kdy probíhaly právní, logistické a stavební přípravy."
            },
            {
              "type": "list",
              "items": [
                "2004–2006: výstavba stanice na severní části ostrova Jamese Rosse",
                "Únor 2006: dokončení stavby",
                "22. února 2007: oficiální otevření stanice Johanna Gregora Mendela",
                "Od té doby každé jižní léto (australské léto) vědecké expedice"
              ]
            },
            {
              "type": "callout",
              "label": "J. G. Mendel",
              "text": "Stanice nese jméno Johanna Gregora Mendela (1822–1884), zakladatele moderní genetiky a průkopníka meteorologie, který působil v Brně."
            }
          ],
          "resources": [
            {
              "kind": "link",
              "title": "CARP — Historie (EN)",
              "url": "https://carp.sci.muni.cz/about-us/#history",
              "source": "CARP"
            }
          ]
        }
      ],
    },
    {
      id: "mod-mezinarodni",
      title: "Mezinárodní vztahy",
      completion: "výukový modul",
      moduleSection: "ostatni",
      tags: ["Antarktida"],
      description: "Antarktická smlouva, územní nároky, SCAR, COMNAP, CCAMLR a role České republiky v globální polární politice.",
      syllabus: [
        "Výzkum, stanice a smluvní systém",
        "Územní nároky a status kontinentu",
        "SCAR, COMNAP a CCAMLR",
        "Mezinárodní spolupráce a publikace"
      ],
      lessons: [
        {
          "id": "vyzkum-smluvni-system",
          "title": "Výzkum, stanice a smluvní systém",
          "summary": "Antarktická smlouva, Madridský protokol a mezinárodní stanice.",
          "minutes": 16,
          "blocks": [
            {
              "type": "paragraph",
              "text": "Antarktická smlouva (1959, platnost 1961) vyhrazuje kontinent míru a vědě; zmrazuje územní nároky."
            },
            {
              "type": "list",
              "items": [
                "Zákaz vojenských aktivit a jaderných zkoušek",
                "Svoboda vědeckého výzkumu a sdílení dat",
                "Madridský protokol (1991) — ochrana životního prostředí, zákaz těžby",
                "CCAMLR — ochrana mořských živých zdrojů"
              ]
            },
            {
              "type": "callout",
              "label": "Česká stanice",
              "text": "Masarykova univerzita provozuje stanici Johanna Gregora Mendela na ostrově Jamese Rosse (viz modul CARP)."
            }
          ],
          "resources": [
            {
              "kind": "link",
              "title": "Antarctic Treaty Secretariat",
              "url": "https://www.ats.aq/",
              "source": "ATS"
            },
            {
              "kind": "link",
              "title": "CARP — Český antarktický výzkum",
              "url": "https://carp.sci.muni.cz/",
              "source": "Masarykova univerzita"
            }
          ]
        },
        {
          "id": "mezinarodni-naroky",
          "title": "Územní nároky a status kontinentu",
          "summary": "Sedm států s formálními nároky, dělení sektorů a princip „neosídlení“.",
          "minutes": 14,
          "blocks": [
            {
              "type": "paragraph",
              "text": "Antarktická smlouva neřeší nároky definitivně — pouze je zmrazuje. Sedm států (Argentina, Austrálie, Chile, Francie, Nový Zéland, Norsko, Velká Británie) uplatňuje částečně překrývající se sektorová tvrzení."
            },
            {
              "type": "list",
              "label": "Zásady smlouvy",
              "items": [
                "Kontinent není pod suverenitou žádného státu",
                "Zákaz vojenských aktivit a jaderných zkoušek",
                "Svoboda vědeckého výzkumu a inspekce",
                "Konzultativní členství pro státy provádějící podstatný výzkum"
              ]
            },
            {
              "type": "paragraph",
              "text": "Česká republika je konzultativním členem díky programu CARP — účastní se rozhodování o budoucnosti kontinentu."
            }
          ],
          "resources": [
            {
              "kind": "link",
              "title": "ATS — Parties",
              "url": "https://www.ats.aq/devAS/Info/Parties",
              "source": "ATS"
            },
            {
              "kind": "link",
              "title": "CARP — O nás",
              "url": "https://carp.sci.muni.cz/o-nas/",
              "source": "CARP"
            }
          ]
        },
        {
          "id": "mezinarodni-organizace",
          "title": "SCAR, COMNAP a CCAMLR",
          "summary": "Vědecká koordinace, logistika stanic a ochrana mořských ekosystémů.",
          "minutes": 13,
          "blocks": [
            {
              "type": "list",
              "label": "Hlavní organizace",
              "items": [
                "SCAR (Scientific Committee on Antarctic Research) — koordinace vědy, expertní skupiny",
                "COMNAP — koordinace národních programů a logistiky stanic",
                "CCAMLR — komise pro živé mořské zdroje, rybolov a MPA (mořské chráněné oblasti)",
                "Council of Managers of National Antarctic Programs (COMNAP) — bezpečnost a sdílení kapacit"
              ]
            },
            {
              "type": "paragraph",
              "text": "CARP spolupracuje v rámci SCAR a COMNAP s programy BAS, INACH, IAA a dalšími. Výsledky publikuje v časopise Czech Polar Reports."
            }
          ],
          "resources": [
            {
              "kind": "link",
              "title": "SCAR",
              "url": "https://scar.org/",
              "source": "SCAR"
            },
            {
              "kind": "link",
              "title": "COMNAP",
              "url": "https://www.comnap.aq/",
              "source": "COMNAP"
            },
            {
              "kind": "link",
              "title": "CCAMLR",
              "url": "https://www.ccamlr.org/",
              "source": "CCAMLR"
            }
          ]
        },
        {
          "id": "carp-spoluprace",
          "title": "Mezinárodní spolupráce a publikace",
          "summary": "COMNAP, SCAR, Czech Polar Reports a etický kodex expedice.",
          "minutes": 12,
          "blocks": [
            {
              "type": "paragraph",
              "text": "CARP spolupracuje v rámci COMNAP a SCAR s mezinárodními programy (IAA, INACH, BAS, MCMLTER aj.). Výsledky publikuje v časopise Czech Polar Reports (2× ročně, WoS od 2022, Scopus od 2014)."
            },
            {
              "type": "callout",
              "label": "Code of Conduct",
              "text": "CARP uplatňuje kodex chování pro bezpečné a respektující prostředí na expedici — zákaz diskriminace, obtěžování a nevhodného chování."
            }
          ],
          "resources": [
            {
              "kind": "link",
              "title": "Czech Polar Reports",
              "url": "https://journals.muni.cz/CPR/",
              "source": "MUNI Press"
            },
            {
              "kind": "link",
              "title": "CARP — Code of Conduct",
              "url": "https://carp.sci.muni.cz/about-us/code-of-conduct/",
              "source": "CARP"
            },
            {
              "kind": "link",
              "title": "SCAR",
              "url": "https://scar.org/",
              "source": "SCAR"
            }
          ]
        }
      ],
      resources: [
        {
          "kind": "link",
          "title": "Antarctic Treaty Secretariat",
          "url": "https://www.ats.aq/",
          "source": "ATS"
        }
      ],
    },
    {
      id: "mod-soucasnost",
      title: "Současnost a expedice",
      completion: "výukový modul",
      moduleSection: "ostatni",
      tags: ["Antarktida"],
      description: "Jak dnes probíhají expedice, etika výzkumu, turismus a ochrana kontinentu v éře klimatické změny.",
      syllabus: [
        "Moderní expedice a sezónní provoz",
        "Turismus, ochrana a budoucnost kontinentu"
      ],
      lessons: [
        {
          "id": "soucasny-vyzkum-expedice",
          "title": "Moderní expedice a sezónní provoz",
          "summary": "Australské léto, logistika, bezpečnost a etika v terénu.",
          "minutes": 14,
          "blocks": [
            {
              "type": "paragraph",
              "text": "Většina terénního výzkumu probíhá během australského léta (listopad–březen), kdy je dostupné sluneční světlo a teploty umožňují práci v terénu. Stálé stanice fungují celoročně s rotujícími posádkami."
            },
            {
              "type": "list",
              "label": "Typická expedice (např. CARP)",
              "items": [
                "Příprava v Brně — kalibrace přístrojů, školení bezpečnosti",
                "Přesun lodí nebo letadly přes Jižní Ameriku nebo Nový Zéland",
                "Sezónní provoz stanice Mendel (≈ leden–polovina března)",
                "Terénní měření, vzorkování, monitoring sítí"
              ]
            },
            {
              "type": "callout",
              "label": "Code of Conduct",
              "text": "Národní programy uplatňují kodex chování — bezpečnost, rovnost a ochrana citlivých ekosystémů mají přednost před individuálními cíli."
            }
          ],
          "resources": [
            {
              "kind": "link",
              "title": "CARP — Code of Conduct",
              "url": "https://carp.sci.muni.cz/about-us/code-of-conduct/",
              "source": "CARP"
            }
          ]
        },
        {
          "id": "soucasnost-turismus-ochrana",
          "title": "Turismus, ochrana a budoucnost kontinentu",
          "summary": "Madridský protokol, návštěvnost a tlak klimatické změny.",
          "minutes": 15,
          "blocks": [
            {
              "type": "paragraph",
              "text": "Antarktický turismus roste — většina návštěvníků míří na poloostrov lodními výpravami. IAATO koordinuje bezpečnost a minimalizaci dopadů; přistání jsou regulována podle smluvního systému."
            },
            {
              "type": "list",
              "items": [
                "Madridský protokol (1991) — ochrana životního prostředí, moratorium na těžbu",
                "Citlivé oblasti: ASMA/ASPAs — zvláštní režim ochrany",
                "Klimatická změna — oteplování poloostrova, nestabilita WAIS",
                "Mezinárodní spolupráce jako podmínka udržitelnosti výzkumu"
              ]
            }
          ],
          "resources": [
            {
              "kind": "link",
              "title": "IAATO",
              "url": "https://iaato.org/",
              "source": "IAATO"
            },
            {
              "kind": "link",
              "title": "NASA — Antarctica and climate",
              "url": "https://climate.nasa.gov/",
              "source": "NASA"
            }
          ]
        }
      ],
    }
  ],
};
