import type { Field, Course } from "../types";

const antarktidaCourse: Course = {
  id: "antarktida-fg",
  title: "Antarktida — fyzická geografie a klimatologie",
  garant: "Vzdělávací modul",
  credits: 0,
  semester: "modul",
  completion: "kompletní výukový materiál",
  tags: ["Antarktida", "kryosféra", "klimatologie", "fyzická geografie"],
  description:
    "Kompletní výukový materiál o nejjižnějším kontinentu Země zpracovaný z pohledu fyzické geografie a klimatologie. Provede vás od polohy a geologické stavby přes ledovcový štít, klima a atmosférickou cirkulaci až po Jižní oceán, paleoklima z ledovcových jader a současnou změnu klimatu.",
  syllabus: [
    "Poloha, vymezení a základní charakteristika",
    "Geologický vývoj a tektonická stavba",
    "Ledovcový štít a kryosféra",
    "Šelfové ledovce a mořský led",
    "Klima Antarktidy: teplota a radiační bilance",
    "Atmosférická cirkulace a katabatické větry",
    "Ozonová díra nad Antarktidou",
    "Jižní oceán a Antarktický cirkumpolární proud",
    "Hydrologie a subglaciální jezera",
    "Biosféra a polární ekosystémy",
    "Paleoklimatologie a ledovcová jádra",
    "Antarktida a současná změna klimatu",
    "Výzkum, stanice a Antarktický smluvní systém",
  ],
  resources: [
    {
      kind: "link",
      title: "British Antarctic Survey",
      url: "https://www.bas.ac.uk/",
      source: "BAS",
      note: "Přední instituce polárního výzkumu.",
    },
    {
      kind: "link",
      title: "SCAR — Scientific Committee on Antarctic Research",
      url: "https://scar.org/",
      source: "SCAR",
    },
    {
      kind: "dataset",
      title: "Quantarctica (GIS data)",
      url: "https://www.npolar.no/quantarctica/",
      source: "Norwegian Polar Institute",
      note: "Kompletní GIS balík dat o Antarktidě pro QGIS.",
    },
  ],
  lessons: [
    {
      id: "poloha-vymezeni",
      title: "1. Poloha, vymezení a základní charakteristika",
      summary:
        "Nejjižnější, nejchladnější, nejsušší a největrnější kontinent — a zároveň největší poušť planety.",
      minutes: 18,
      blocks: [
        {
          type: "paragraph",
          text: "Antarktida je pevninský kontinent obklopující jižní geografický pól. Rozkládá se převážně za jižním polárním kruhem (66,5° j. š.) a je téměř souměrně situovaná kolem pólu. Od ostatních kontinentů je oddělena Jižním oceánem, přičemž nejblíže leží Jižní Amerika, od níž je oddělena Drakeovým průlivem.",
        },
        {
          type: "table",
          label: "Klíčové údaje",
          head: ["Charakteristika", "Hodnota"],
          rows: [
            ["Rozloha", "≈ 14,2 milionu km² (5. největší kontinent)"],
            ["Podíl ledového pokryvu", "≈ 98 % povrchu"],
            ["Průměrná mocnost ledu", "≈ 1,9–2,1 km"],
            ["Maximální mocnost ledu", "≈ 4,7–4,9 km"],
            ["Podíl světové sladké vody", "≈ 60–70 % (a ≈ 90 % veškerého ledu)"],
            ["Nejnižší naměřená teplota", "−89,2 °C (Vostok, 1983)"],
          ],
        },
        {
          type: "callout",
          label: "Zapamatuj si",
          text: "Antarktida je největší poušť na Zemi. Přestože je pokrytá ledem, roční úhrn srážek ve vnitrozemí je nižší než v mnoha horkých pouštích (často < 50 mm vodního ekvivalentu). Led se zde hromadí po tisíce let, protože téměř netaje.",
        },
        {
          type: "heading",
          text: "Členění kontinentu",
        },
        {
          type: "list",
          items: [
            "Východní Antarktida — rozsáhlá, stará a vysoko položená pevninská kra, nese Východoantarktický ledovcový štít (EAIS).",
            "Západní Antarktida — menší, tvořená souostrovím a pánvemi pod hladinou moře, nese Západoantarktický ledovcový štít (WAIS).",
            "Transantarktické pohoří — horský val (délka ≈ 3 500 km) oddělující obě části.",
            "Antarktický poloostrov — nejsevernější výběžek směřující k Jižní Americe, klimaticky nejmírnější a nejrychleji se oteplující oblast.",
          ],
        },
      ],
      quiz: {
        title: "Kvíz — základní charakteristika",
        questions: [
          {
            question: "Proč je Antarktida považována za největší poušť na Zemi?",
            options: [
              { text: "Protože má velmi nízké roční úhrny srážek", correct: true },
              { text: "Protože je celá pokrytá pískem pod ledem", correct: false },
              { text: "Protože zde nikdy neprší ani nesněží", correct: false },
            ],
            explanation:
              "Poušť je definována úhrnem srážek, ne teplotou. Vnitrozemí Antarktidy dostává méně než 50 mm srážek ročně.",
          },
          {
            question: "Které pohoří odděluje Východní a Západní Antarktidu?",
            options: [
              { text: "Transantarktické pohoří", correct: true },
              { text: "Andy", correct: false },
              { text: "Ellsworthovo pohoří", correct: false },
            ],
          },
          {
            question: "Přibližně jaký podíl povrchu Antarktidy pokrývá led?",
            options: [
              { text: "≈ 98 %", correct: true },
              { text: "≈ 50 %", correct: false },
              { text: "≈ 75 %", correct: false },
            ],
          },
        ],
      },
      resources: [
        {
          kind: "map",
          title: "Přehledová mapa Antarktidy",
          url: "https://www.add.scar.org/",
          source: "SCAR Antarctic Digital Database",
        },
      ],
    },
    {
      id: "geologie-tektonika",
      title: "2. Geologický vývoj a tektonická stavba",
      summary:
        "Od jádra superkontinentu Gondwana po skrytý subglaciální reliéf s pohořími i hlubokými pánvemi.",
      minutes: 20,
      blocks: [
        {
          type: "paragraph",
          text: "Východní Antarktida je tvořena starým prekambrickým krystalinickým štítem (kratonem), který byl kdysi centrální částí superkontinentu Gondwana. Postupný rozpad Gondwany v druhohorách a třetihorách oddělil Antarktidu od Jižní Ameriky, Afriky, Indie a Austrálie. Definitivní tektonické osamostatnění — otevření Drakeova průlivu — mělo zásadní klimatické důsledky (viz kapitola o Jižním oceánu).",
        },
        {
          type: "list",
          label: "Hlavní stavební prvky",
          items: [
            "Východoantarktický kraton — stabilní staré jádro pevniny.",
            "Transantarktické pohoří — vyzdvižené podél zlomového pásma.",
            "Západoantarktický riftový systém — oblast tektonického roztahování s ztenčenou kůrou.",
            "Aktivní vulkanismus — např. Mount Erebus, nejjižnější činná sopka s trvalým lávovým jezerem.",
          ],
        },
        {
          type: "callout",
          label: "Skrytý reliéf",
          text: "Pod ledem se skrývá dramatický reliéf. Radarová měření odhalila pohoří Gamburcevových hor (velikosti Alp) i hluboké prohlubně, jako je Bentleyho subglaciální příkop, jehož dno leží více než 2 500 m pod hladinou moře — nejníže položené místo pevninské kůry, které není zaplaveno oceánem.",
        },
        {
          type: "paragraph",
          text: "Rozlišení, zda je podloží nad, nebo pod hladinou moře, je klíčové pro stabilitu ledu. Východoantarktický štít stojí převážně na pevnině nad hladinou moře, kdežto značná část Západoantarktického štítu je „mořsky ukotvená“ (marine-based) — spočívá na skalním podloží pod hladinou moře, což ji činí citlivější k odtávání a nestabilitě.",
        },
      ],
      resources: [
        { kind: "document", title: "Studijní text — geologie Antarktidy", note: "Materiál doplníme." },
        {
          kind: "dataset",
          title: "BedMachine Antarctica (subglaciální topografie)",
          url: "https://nsidc.org/data/nsidc-0756",
          source: "NSIDC",
        },
      ],
    },
    {
      id: "ledovcovy-stit",
      title: "3. Ledovcový štít a kryosféra",
      summary:
        "Největší zásobárna ledu na Zemi — jak vzniká, jak teče a co znamená pro hladinu oceánu.",
      minutes: 22,
      blocks: [
        {
          type: "paragraph",
          text: "Antarktický ledovcový štít je největší souvislou masou ledu na Zemi. Vzniká akumulací sněhu, který se pod vlastní vahou stlačuje přes firn na led. Led se pak vlastní tíhou pomalu rozlévá od center (ledových kleneb) k okrajům kontinentu, kde odtéká výtokovými ledovci a ledovcovými proudy (ice streams) do moře.",
        },
        {
          type: "table",
          label: "Dva ledovcové štíty",
          head: ["Vlastnost", "Východní (EAIS)", "Západní (WAIS)"],
          rows: [
            ["Velikost", "větší, ~ 2/3 objemu", "menší"],
            ["Podloží", "převážně nad hl. moře", "z velké části pod hl. moře"],
            ["Stabilita", "stabilnější", "citlivější, náchylný k nestabilitě"],
            ["Potenciální vzestup hladiny", "desítky metrů", "≈ 3–5 m"],
          ],
        },
        {
          type: "callout",
          label: "Souvislost s hladinou moře",
          text: "Kdyby roztál veškerý antarktický led, hladina světového oceánu by stoupla přibližně o 58 metrů. Samotný Západoantarktický štít, který je považován za nestabilní, představuje potenciál asi 3–5 metrů.",
        },
        {
          type: "heading",
          text: "Bilance hmoty",
        },
        {
          type: "list",
          items: [
            "Akumulace — přírůstek hmoty sněžením (převažuje ve vnitrozemí).",
            "Ablace — úbytek hmoty; v Antarktidě dominuje odlamování ledovců (calving) a tání spodní strany šelfových ledovců, nikoli povrchové tání.",
            "Rovnovážná linie (ELA) — hranice mezi akumulační a ablační zónou.",
            "Tok ledu — rychlost od několika m/rok ve vnitrozemí po stovky m až km/rok v ledovcových proudech.",
          ],
        },
        {
          type: "paragraph",
          text: "Ledovcové proudy jako Thwaitesův ledovec či ledovec Pine Island v Západní Antarktidě odvádějí největší objemy ledu a jsou v centru pozornosti, protože vykazují zrychlené ztenčování a ústup — mohou výrazně přispět k budoucímu vzestupu hladiny.",
        },
      ],
      quiz: {
        title: "Kvíz — ledovcový štít",
        questions: [
          {
            question: "O kolik by přibližně stoupla hladina oceánu při roztátí veškerého antarktického ledu?",
            options: [
              { text: "≈ 58 m", correct: true },
              { text: "≈ 7 m", correct: false },
              { text: "≈ 200 m", correct: false },
            ],
            explanation: "Antarktida drží zdaleka největší zásobu ledu — potenciál je přibližně 58 metrů.",
          },
          {
            question: "Který štít je považován za méně stabilní a proč?",
            options: [
              { text: "Západoantarktický, protože leží z velké části na podloží pod hladinou moře", correct: true },
              { text: "Východoantarktický, protože je nejstarší", correct: false },
              { text: "Oba jsou stejně stabilní", correct: false },
            ],
          },
          {
            question: "Jaký způsob úbytku ledu (ablace) v Antarktidě převažuje?",
            options: [
              { text: "Odlamování ledovců a tání spodní strany šelfů", correct: true },
              { text: "Povrchové tání během léta", correct: false },
              { text: "Sublimace ve vnitrozemí", correct: false },
            ],
          },
        ],
      },
    },
    {
      id: "selfove-ledovce-morsky-led",
      title: "4. Šelfové ledovce a mořský led",
      summary:
        "Rozdíl mezi plovoucím šelfovým ledovcem, mořským ledem a pevninským ledem — a proč na tom záleží.",
      minutes: 18,
      blocks: [
        {
          type: "list",
          label: "Tři různé formy ledu",
          items: [
            "Pevninský led (ledovcový štít) — vznikl ze sněhu na souši; jeho tání zvyšuje hladinu moře.",
            "Šelfový ledovec (ice shelf) — plovoucí okraj pevninského ledu; drží (\"brzdí\") tok ledu z pevniny. Největší jsou Rossův a Filchnerův-Ronneho.",
            "Mořský led (sea ice) — zmrzlá mořská voda; jeho tání hladinu prakticky nezvyšuje, ale silně ovlivňuje albedo a cirkulaci.",
          ],
        },
        {
          type: "callout",
          label: "Zádržný efekt",
          text: "Šelfové ledovce fungují jako zátka. Když se rozpadnou (např. Larsen B v roce 2002), ledovce za nimi zrychlí svůj tok do moře. Samotný rozpad plovoucího šelfu hladinu nezvýší (led už plave), ale zrychlení pevninského ledu za ním ano.",
        },
        {
          type: "paragraph",
          text: "Mořský led kolem Antarktidy je silně sezónní: jeho rozloha kolísá zhruba od 3 milionů km² na konci léta až po 18–20 milionů km² na konci zimy. Tím se plocha „bílého“ povrchu s vysokým albedem dramaticky mění a mořský led se stává významnou složkou klimatického systému (izolace oceánu, tvorba husté studené vody).",
        },
        {
          type: "heading",
          text: "Antarktická přídonní voda",
        },
        {
          type: "paragraph",
          text: "Při zamrzání mořské vody se vylučuje sůl (brine rejection), okolní voda se stává hustší a klesá ke dnu. Tak vzniká Antarktická přídonní voda (AABW) — jedna z nejhustších vodních mas oceánu, která pohání globální termohalinní cirkulaci.",
        },
      ],
      quiz: {
        title: "Kvíz — formy ledu",
        questions: [
          {
            question: "Které tání přímo NEzvyšuje hladinu světového oceánu?",
            options: [
              { text: "Tání mořského ledu (plovoucího)", correct: true },
              { text: "Tání pevninského ledovcového štítu", correct: false },
              { text: "Odtok výtokových ledovců do moře", correct: false },
            ],
            explanation: "Plovoucí led už vytlačuje svůj objem vody, proto jeho tání hladinu prakticky nemění (Archimédův zákon).",
          },
          {
            question: "Jakou roli hrají šelfové ledovce vůči pevninskému ledu?",
            options: [
              { text: "Brzdí (zadržují) jeho tok do moře", correct: true },
              { text: "Urychlují jeho tání zevnitř", correct: false },
              { text: "Nemají na něj žádný vliv", correct: false },
            ],
          },
        ],
      },
    },
    {
      id: "klima-teplota-radiace",
      title: "5. Klima Antarktidy: teplota a radiační bilance",
      summary:
        "Proč je Antarktida tak extrémně studená — nadmořská výška, albedo a záporná radiační bilance.",
      minutes: 22,
      blocks: [
        {
          type: "paragraph",
          text: "Antarktida je nejchladnějším místem na Zemi. Kombinuje hned několik příčin extrémního chladu: vysokou nadmořskou výšku (průměr přes 2 000 m, nejvyšší kontinent), obrovské albedo sněhu a ledu (odráží 80–90 % dopadajícího záření), dlouhou polární noc a suchý, čistý vzduch s malým skleníkovým efektem.",
        },
        {
          type: "callout",
          label: "Rekordy",
          text: "Nejnižší přímo naměřená přízemní teplota na Zemi je −89,2 °C (stanice Vostok, 21. 7. 1983). Družicová měření na východoantarktické plošině zaznamenala povrch až kolem −93 až −98 °C. Naopak nejvyšší teplota na kontinentu byla 18,3 °C na stanici Esperanza (Antarktický poloostrov, únor 2020).",
        },
        {
          type: "heading",
          text: "Radiační a energetická bilance",
        },
        {
          type: "list",
          items: [
            "Krátkovlnné (sluneční) záření: silný sezónní chod — v zimě polární noc (nula), v létě naopak nepřetržité osvětlení, ale s nízkým úhlem Slunce.",
            "Vysoké albedo: většina dopadajícího slunečního záření se odráží zpět, jen malá část se pohltí.",
            "Dlouhovlnné (tepelné) vyzařování: povrch trvale intenzivně vyzařuje teplo, zejména za jasných nocí.",
            "Výsledek: roční radiační bilance povrchu je záporná — Antarktida trvale ztrácí více energie, než přijme; deficit dorovnává přenos tepla z nižších šířek atmosférou a oceánem.",
          ],
        },
        {
          type: "heading",
          text: "Teplotní inverze",
        },
        {
          type: "paragraph",
          text: "Kvůli silnému radiačnímu ochlazování povrchu vzniká nad ledovcovým štítem výrazná přízemní teplotní inverze — vzduch u povrchu je chladnější než vzduch výše. Tato hustá studená vrstva u země je motorem katabatických větrů (viz další kapitola).",
        },
      ],
      quiz: {
        title: "Kvíz — teplota a radiace",
        questions: [
          {
            question: "Který faktor NEpatří mezi hlavní příčiny extrémního chladu Antarktidy?",
            options: [
              { text: "Blízkost teplého mořského proudu", correct: true },
              { text: "Vysoké albedo sněhu a ledu", correct: false },
              { text: "Velká nadmořská výška", correct: false },
              { text: "Polární noc", correct: false },
            ],
            explanation: "Antarktidu naopak izoluje studený cirkumpolární proud; teplé proudy k ní nepronikají.",
          },
          {
            question: "Kde a kdy byla naměřena nejnižší přízemní teplota na Zemi?",
            options: [
              { text: "Vostok, −89,2 °C (1983)", correct: true },
              { text: "Jižní pól, −70 °C (1957)", correct: false },
              { text: "Grónsko, −85 °C (1991)", correct: false },
            ],
          },
          {
            question: "Roční radiační bilance povrchu Antarktidy je:",
            options: [
              { text: "záporná (ztrácí více energie, než přijme)", correct: true },
              { text: "kladná (přijímá více, než vyzáří)", correct: false },
              { text: "přesně vyrovnaná", correct: false },
            ],
          },
        ],
      },
    },
    {
      id: "cirkulace-katabaticke-vetry",
      title: "6. Atmosférická cirkulace a katabatické větry",
      summary:
        "Polární vír, cirkumpolární západní větry a nejsilnější trvalé přízemní větry na planetě.",
      minutes: 20,
      blocks: [
        {
          type: "paragraph",
          text: "Nad Antarktidou se ve výškách utváří stabilní polární vír — rozsáhlá cyklonální cirkulace studeného vzduchu, která v zimě izoluje kontinent od teplejšího vzduchu z nižších šířek. V přízemní vrstvě nad okolním oceánem převládají silné západní větry (\"vichřice čtyřicátých, padesátých a šedesátých rovnoběžek\" — roaring forties, furious fifties, screaming sixties).",
        },
        {
          type: "heading",
          text: "Katabatické větry",
        },
        {
          type: "paragraph",
          text: "Nejtypičtějším větrným jevem Antarktidy jsou katabatické (spádové) větry. Studený, hustý vzduch se ochladí nad vysokou ledovcovou plošinou a vlastní tíhou stéká po svazích dolů k pobřeží. V zúžených údolích se urychluje a dosahuje mimořádné síly.",
        },
        {
          type: "callout",
          label: "Největrnější místo světa",
          text: "Commonwealth Bay (Cape Denison) v Adéliině zemi je díky katabatickým větrům považováno za největrnější přízemní místo na Zemi — průměrné roční rychlosti kolem 80 km/h a nárazy přesahující 300 km/h. Popsal je již polárník Douglas Mawson.",
        },
        {
          type: "list",
          label: "Vlastnosti katabatických větrů",
          items: [
            "Gravitační původ — pohání je hustota studeného vzduchu, ne tlakové systémy.",
            "Směřují radiálně od centra kontinentu k pobřeží.",
            "Nejsilnější jsou v zimě a za jasných nocí (silné radiační ochlazování).",
            "Ovlivňují tvorbu polyní (nezamrzlých ploch moře) a tím i tvorbu husté vody.",
          ],
        },
        {
          type: "heading",
          text: "Southern Annular Mode (SAM)",
        },
        {
          type: "paragraph",
          text: "Kolísání intenzity a polohy západních větrů popisuje index SAM (Jižní anulární mód). Jeho posun k pozitivní fázi v posledních desetiletích (částečně vlivem ozonové díry a růstu skleníkových plynů) utahuje pás západních větrů blíže k Antarktidě a ovlivňuje počasí i oceánskou cirkulaci na jižní polokouli.",
        },
      ],
      quiz: {
        title: "Kvíz — cirkulace a vítr",
        questions: [
          {
            question: "Co je hlavní příčinou katabatických větrů?",
            options: [
              { text: "Gravitační stékání hustého studeného vzduchu po svazích", correct: true },
              { text: "Rozdíl tlaku mezi oceánem a pevninou daný Coriolisovou silou", correct: false },
              { text: "Výstup teplého vzduchu nad ledovcem", correct: false },
            ],
            explanation: "Katabatický vítr je gravitačního (spádového) původu — studený hustý vzduch teče dolů z plošiny.",
          },
          {
            question: "Které místo je díky katabatickým větrům považováno za největrnější na Zemi?",
            options: [
              { text: "Commonwealth Bay (Cape Denison)", correct: true },
              { text: "Jižní pól", correct: false },
              { text: "Ostrov Jižní Georgie", correct: false },
            ],
          },
          {
            question: "Co popisuje index SAM?",
            options: [
              { text: "Kolísání pásu západních větrů kolem Antarktidy", correct: true },
              { text: "Množství mořského ledu v Rossově moři", correct: false },
              { text: "Tloušťku ozonové vrstvy", correct: false },
            ],
          },
        ],
      },
    },
    {
      id: "ozonova-dira",
      title: "7. Ozonová díra nad Antarktidou",
      summary:
        "Proč vzniká právě nad Antarktidou na jaře, jaká je chemie procesu a jak zabral Montrealský protokol.",
      minutes: 20,
      blocks: [
        {
          type: "paragraph",
          text: "Ozonová díra je sezónní ztenčení stratosférické ozonové vrstvy nad Antarktidou, ke kterému dochází každé jižní jaro (září–říjen). Objevili ji britští vědci (Farman a kol.) v roce 1985 na základě dlouhých měření ze stanice Halley.",
        },
        {
          type: "heading",
          text: "Proč právě Antarktida a proč na jaře?",
        },
        {
          type: "list",
          items: [
            "Během polární noci se v extrémně chladné stratosféře uzavře stabilní polární vír, který izoluje vzduch nad kontinentem.",
            "Vznikají polární stratosférická oblaka (PSC), na jejichž ledových částicích probíhají reakce uvolňující reaktivní formy chloru z freonů (CFC).",
            "S návratem slunečního záření na jaře sluneční světlo aktivuje chlor, který v katalytických cyklech rozkládá ozon (jeden atom Cl zničí tisíce molekul O₃).",
            "Po rozpadu víru v pozdním jaře se díra opět zaplní vzduchem bohatým na ozon z nižších šířek.",
          ],
        },
        {
          type: "callout",
          label: "Montrealský protokol",
          text: "Montrealský protokol (1987) postupně zakázal freony (CFC) a další látky poškozující ozonovou vrstvu. Je považován za nejúspěšnější mezinárodní environmentální dohodu — ozonová vrstva se pomalu zotavuje a očekává se, že se během tohoto století vrátí k hodnotám z poloviny 20. století.",
        },
        {
          type: "paragraph",
          text: "Ozonová díra má i klimatické důsledky: ochlazení stratosféry a změny cirkulace přispěly k posunu SAM do pozitivní fáze a zesílení západních větrů kolem Antarktidy.",
        },
      ],
      quiz: {
        title: "Kvíz — ozonová díra",
        questions: [
          {
            question: "V kterém období roku je ozonová díra nad Antarktidou největší?",
            options: [
              { text: "Jižní jaro (září–říjen)", correct: true },
              { text: "Jižní léto (prosinec–leden)", correct: false },
              { text: "Uprostřed polární noci (červen)", correct: false },
            ],
            explanation: "Rozklad ozonu nastartuje návrat slunečního záření na jaře po chladné a temné zimě.",
          },
          {
            question: "Které látky jsou hlavní příčinou úbytku ozonu?",
            options: [
              { text: "Freony (CFC) uvolňující chlor", correct: true },
              { text: "Oxid uhličitý", correct: false },
              { text: "Metan z ledovců", correct: false },
            ],
          },
          {
            question: "Která dohoda výrazně omezila látky poškozující ozon?",
            options: [
              { text: "Montrealský protokol (1987)", correct: true },
              { text: "Kjótský protokol (1997)", correct: false },
              { text: "Pařížská dohoda (2015)", correct: false },
            ],
          },
        ],
      },
    },
    {
      id: "jizni-ocean-acc",
      title: "8. Jižní oceán a Antarktický cirkumpolární proud",
      summary:
        "Největší mořský proud planety, který tepelně izoloval Antarktidu a umožnil vznik ledovcového štítu.",
      minutes: 20,
      blocks: [
        {
          type: "paragraph",
          text: "Jižní oceán obklopuje celou Antarktidu a jako jediný oceán proudí nepřetržitě kolem celé zeměkoule, aniž by ho zastavila pevnina. Dominuje mu Antarktický cirkumpolární proud (ACC) — objemově největší mořský proud na Zemi (transport řádově 130–150 Sv), poháněný silnými západními větry.",
        },
        {
          type: "callout",
          label: "Klíčová souvislost",
          text: "Otevření Drakeova průlivu (mezi Antarktidou a Jižní Amerikou) zhruba před 34–30 miliony let umožnilo vznik ACC. Ten tepelně „odřízl“ Antarktidu od teplých vod z nižších šířek, což vedlo k jejímu prudkému ochlazení a růstu trvalého ledovcového štítu. Je to učebnicový příklad vlivu tektoniky (uspořádání kontinentů) na klima.",
        },
        {
          type: "heading",
          text: "Fronty Jižního oceánu",
        },
        {
          type: "list",
          items: [
            "Antarktická (polární) konvergence / polární fronta — pásmo, kde studená antarktická voda klesá pod teplejší subantarktickou; přirozená severní hranice antarktické mořské oblasti.",
            "Prudké gradienty teploty a salinity ve frontách podporují vysokou biologickou produktivitu.",
          ],
        },
        {
          type: "heading",
          text: "Upwelling a globální cirkulace",
        },
        {
          type: "paragraph",
          text: "V Jižním oceánu vystupuje k hladině hlubinná voda (upwelling) bohatá na živiny a rozpuštěný uhlík — proto je tento oceán klíčový pro globální koloběh uhlíku a pro tzv. oceánský dopravníkový pás (termohalinní cirkulaci). Tvorba Antarktické přídonní vody pak uzavírá spodní větev tohoto globálního oběhu.",
        },
      ],
      quiz: {
        title: "Kvíz — Jižní oceán",
        questions: [
          {
            question: "Jaký klimatický důsledek mělo otevření Drakeova průlivu?",
            options: [
              { text: "Umožnilo vznik ACC a tepelnou izolaci a zalednění Antarktidy", correct: true },
              { text: "Oteplilo Antarktidu a roztavilo led", correct: false },
              { text: "Nemělo žádný klimatický vliv", correct: false },
            ],
            explanation: "Vznik cirkumpolárního proudu zabránil přísunu tepla z nižších šířek a nastartoval trvalé zalednění.",
          },
          {
            question: "Čím je poháněn Antarktický cirkumpolární proud?",
            options: [
              { text: "Silnými západními větry", correct: true },
              { text: "Přílivem a odlivem", correct: false },
              { text: "Táním ledovců", correct: false },
            ],
          },
          {
            question: "Co je Antarktická konvergence?",
            options: [
              { text: "Pásmo, kde studená antarktická voda klesá pod teplejší subantarktickou", correct: true },
              { text: "Místo, kde se stýkají tři oceány u pobřeží", correct: false },
              { text: "Zóna největšího výskytu ledovců", correct: false },
            ],
          },
        ],
      },
    },
    {
      id: "hydrologie-subglacialni-jezera",
      title: "9. Hydrologie a subglaciální jezera",
      summary:
        "Kapalná voda pod kilometry ledu — subglaciální jezera, řeky a suchá údolí.",
      minutes: 16,
      blocks: [
        {
          type: "paragraph",
          text: "Přestože je Antarktida zmrzlá, kapalná voda zde existuje — hlavně pod ledovcovým štítem. Geotermální teplo zespodu a tlak nadložního ledu udržují na bázi štítu vodu v kapalném stavu. Vznikají tak subglaciální jezera propojená sítí subglaciálních vodních toků.",
        },
        {
          type: "callout",
          label: "Jezero Vostok",
          text: "Největším známým subglaciálním jezerem je jezero Vostok, ukryté pod téměř 4 km ledu. Voda v něm byla izolována od atmosféry po statisíce až miliony let, což z něj činí unikátní prostředí pro studium extrémního života i minulých podmínek.",
        },
        {
          type: "list",
          label: "Formy vody v Antarktidě",
          items: [
            "Subglaciální jezera a toky (bazální voda pod ledem).",
            "Sezónní tavné jezírka a potůčky na povrchu šelfových ledovců v létě.",
            "Suchá údolí (McMurdo Dry Valleys) — ledem nepokryté oblasti s extrémně málo srážkami, jedno z nejsušších míst na Zemi; obsahují i trvale zaledněná jezera (např. jezero Vida).",
          ],
        },
        {
          type: "paragraph",
          text: "Bazální voda je důležitá i dynamicky: maže podloží a umožňuje rychlejší klouzání ledovcových proudů. Náhlé přelivy subglaciálních jezer mohou dočasně zrychlit tok ledu.",
        },
      ],
      resources: [
        { kind: "presentation", title: "Přednáška — subglaciální hydrologie", note: "Materiál doplníme." },
      ],
    },
    {
      id: "biosfera-ekosystemy",
      title: "10. Biosféra a polární ekosystémy",
      summary:
        "Jak život přežívá v nejnehostinnějším prostředí — od lišejníků po tučňáky a potravní síť krillu.",
      minutes: 18,
      blocks: [
        {
          type: "paragraph",
          text: "Suchozemský život na Antarktidě je chudý a soustředěný do mála oblastí bez ledu, zejména na Antarktickém poloostrově a v pobřežních oázách. Naopak okolní Jižní oceán patří k nejproduktivnějším mořím světa.",
        },
        {
          type: "list",
          label: "Suchozemská biota",
          items: [
            "Dominují lišejníky, mechy, řasy a mikroorganismy.",
            "Jen dvě kvetoucí rostliny: metlička antarktická (Deschampsia antarctica) a lipnicovitý kolobant (Colobanthus quitensis) — obě na Antarktickém poloostrově.",
            "Bezobratlí: hlavně roztoči, chvostoskoci a pakomár Belgica antarctica (největší suchozemský živočich Antarktidy).",
          ],
        },
        {
          type: "callout",
          label: "Krill jako základ potravní sítě",
          text: "Krunýřovka krillová (Euphausia superba) je klíčovým druhem — živí se jí ryby, tučňáci, tuleni i velryby. Krill se pase na fytoplanktonu vázaném na mořský led, takže úbytek mořského ledu ohrožuje celou potravní síť.",
        },
        {
          type: "list",
          label: "Mořští obratlovci",
          items: [
            "Tučňáci (císařský, oslí, uzdičkový, Adélie) — hnízdí na pevnině či ledu.",
            "Tuleni (Weddellův, krabožravý, leopardí) a lachtani.",
            "Velryby (plejtvák obrovský a další) migrující za potravou.",
          ],
        },
        {
          type: "paragraph",
          text: "Organismy se adaptovaly na chlad např. tvorbou nemrznoucích glykoproteinů v krvi ryb (ledová ryba), sníženým metabolismem a hnízdními strategiemi (císařští tučňáci vysedávají vejce v nejtvrdší zimě).",
        },
      ],
      quiz: {
        title: "Kvíz — život v Antarktidě",
        questions: [
          {
            question: "Kolik druhů kvetoucích rostlin roste v Antarktidě?",
            options: [
              { text: "Dva", correct: true },
              { text: "Žádný", correct: false },
              { text: "Několik desítek", correct: false },
            ],
            explanation: "Jsou to metlička antarktická a kolobant, oba na Antarktickém poloostrově.",
          },
          {
            question: "Který druh tvoří základ mořské potravní sítě?",
            options: [
              { text: "Krill (Euphausia superba)", correct: true },
              { text: "Tuleň leopardí", correct: false },
              { text: "Císařský tučňák", correct: false },
            ],
          },
        ],
      },
    },
    {
      id: "paleoklimatologie-jadra",
      title: "11. Paleoklimatologie a ledovcová jádra",
      summary:
        "Antarktický led jako archiv 800 000 let klimatu — izotopy, prach a bublinky pravěkého vzduchu.",
      minutes: 20,
      blocks: [
        {
          type: "paragraph",
          text: "Antarktický ledovcový štít je jedinečný klimatický archiv. Každoroční vrstvy sněhu se ukládají na sebe a uzavírají v sobě informace o minulém klimatu. Vrty ledovcových jader umožňují číst tuto historii stovky tisíc let zpět.",
        },
        {
          type: "list",
          label: "Co led prozradí",
          items: [
            "Vzduchové bublinky — přímý vzorek dávné atmosféry, včetně koncentrace CO₂ a metanu.",
            "Poměr izotopů kyslíku a vodíku (δ¹⁸O, δD) — teploměr indikující teplotu v době napadání sněhu.",
            "Prachové a sopečné vrstvy — indikátory suchosti, větrnosti a datovací značky.",
          ],
        },
        {
          type: "callout",
          label: "Jádra Vostok a EPICA",
          text: "Jádro ze stanice Vostok pokrylo přibližně posledních 420 000 let. Projekt EPICA (Dome C) prodloužil záznam na zhruba 800 000 let. Ukázaly těsnou vazbu mezi teplotou a koncentrací CO₂ napříč ledovými a meziledovými dobami.",
        },
        {
          type: "paragraph",
          text: "Záznam potvrzuje střídání ledových a meziledových dob řízené Milankovičovými (orbitálními) cykly s periodou zhruba 100 tisíc let. Zásadní je, že dnešní koncentrace CO₂ výrazně převyšují maxima kterékoli meziledové doby za celých 800 000 let.",
        },
      ],
      quiz: {
        title: "Kvíz — ledovcová jádra",
        questions: [
          {
            question: "Co uchovávají vzduchové bublinky v ledu?",
            options: [
              { text: "Vzorek dávné atmosféry včetně CO₂", correct: true },
              { text: "Zbytky mořské soli", correct: false },
              { text: "Pyl rostlin", correct: false },
            ],
          },
          {
            question: "Jak daleko do minulosti sahá záznam z jádra EPICA (Dome C)?",
            options: [
              { text: "≈ 800 000 let", correct: true },
              { text: "≈ 10 000 let", correct: false },
              { text: "≈ 5 milionů let", correct: false },
            ],
          },
          {
            question: "Jaká je hlavní příčina střídání ledových a meziledových dob?",
            options: [
              { text: "Milankovičovy orbitální cykly", correct: true },
              { text: "Sopečné erupce", correct: false },
              { text: "Změny magnetického pole Země", correct: false },
            ],
          },
        ],
      },
    },
    {
      id: "zmena-klimatu",
      title: "12. Antarktida a současná změna klimatu",
      summary:
        "Nerovnoměrné oteplování, úbytek ledovcových proudů a role Antarktidy v budoucím vzestupu hladiny.",
      minutes: 20,
      blocks: [
        {
          type: "paragraph",
          text: "Antarktida reaguje na globální oteplování nerovnoměrně. Zatímco Antarktický poloostrov a Západní Antarktida patří mezi nejrychleji se oteplující oblasti planety, rozsáhlé vnitrozemí Východní Antarktidy zůstává zatím relativně stabilní.",
        },
        {
          type: "list",
          label: "Pozorované změny",
          items: [
            "Zrychlené ztenčování a ústup ledovců Thwaites a Pine Island v Západní Antarktidě.",
            "Rozpady šelfových ledovců (Larsen A 1995, Larsen B 2002) a následné zrychlení ledovců za nimi.",
            "Rekordně nízké rozlohy mořského ledu v posledních letech (po dřívějším období stagnace až mírného růstu).",
            "Epizody rozsáhlého povrchového tání a mimořádné vlny veder (např. východní Antarktida, březen 2022).",
          ],
        },
        {
          type: "callout",
          label: "Ledovec soudného dne",
          text: "Thwaitesův ledovec bývá přezdíván „Doomsday Glacier“. Sám drží potenciál asi 0,65 m vzestupu hladiny, ale funguje jako zátka pro velkou část Západoantarktického štítu. Jeho případný kolaps by mohl spustit nestabilitu mořsky ukotveného ledu (marine ice sheet instability).",
        },
        {
          type: "paragraph",
          text: "Antarktida je největší nejistotou v projekcích vzestupu mořské hladiny do konce století. Klíčovými procesy jsou tání šelfů zespodu teplejší oceánskou vodou, ústup uzemňovací linie (grounding line) a možná nestabilita ledových útesů. Právě proto je monitorování Antarktidy jednou z priorit klimatologie.",
        },
      ],
      quiz: {
        title: "Kvíz — změna klimatu",
        questions: [
          {
            question: "Která oblast Antarktidy se otepluje nejrychleji?",
            options: [
              { text: "Antarktický poloostrov a Západní Antarktida", correct: true },
              { text: "Vnitrozemí Východní Antarktidy", correct: false },
              { text: "Jižní pól", correct: false },
            ],
          },
          {
            question: "Proč je Thwaitesův ledovec tak sledovaný?",
            options: [
              { text: "Funguje jako zátka pro velkou část WAIS a jeho kolaps by zvýšil hladinu moře", correct: true },
              { text: "Je nejstarším ledovcem světa", correct: false },
              { text: "Roste a ohrožuje lodní dopravu", correct: false },
            ],
          },
          {
            question: "Jaký proces nejvíce ohrožuje šelfové ledovce zespodu?",
            options: [
              { text: "Tání teplejší oceánskou vodou", correct: true },
              { text: "Sublimace v suchém vzduchu", correct: false },
              { text: "Dopad slunečního záření na dně", correct: false },
            ],
          },
        ],
      },
    },
    {
      id: "vyzkum-smluvni-system",
      title: "13. Výzkum, stanice a Antarktický smluvní systém",
      summary:
        "Jak se Antarktida zkoumá a spravuje — kontinent zasvěcený míru a vědě.",
      minutes: 16,
      blocks: [
        {
          type: "paragraph",
          text: "Antarktida nemá stálé obyvatelstvo ani žádný stát; spravuje ji mezinárodní režim. Základem je Antarktická smlouva, podepsaná roku 1959 (vstup v platnost 1961) původně 12 státy. Vyhrazuje kontinent výhradně pro mírové účely a vědecký výzkum a zmrazuje územní nároky.",
        },
        {
          type: "list",
          label: "Pilíře smluvního systému",
          items: [
            "Zákaz vojenských aktivit a jaderných zkoušek.",
            "Svoboda vědeckého výzkumu a sdílení dat.",
            "Madridský protokol (1991) — ochrana životního prostředí, zákaz těžby nerostných surovin.",
            "CCAMLR — úmluva o zachování mořských živých zdrojů (regulace rybolovu, ochrana krillu).",
          ],
        },
        {
          type: "paragraph",
          text: "Vědecké stanice provozují desítky zemí. Mezi nejznámější patří americká Amundsen–Scott na jižním pólu, ruský Vostok, italsko-francouzská Concordia (Dome C) či britská Halley. Česká republika provozuje na ostrově Jamese Rosse stanici Johanna Gregora Mendela (Masarykova univerzita).",
        },
        {
          type: "callout",
          label: "Metody výzkumu",
          text: "Kombinují se terénní měření (meteorologie, glaciologie, vrty jader), dálkový průzkum Země (družice sledují výšku ledu, rychlost toku a rozsah mořského ledu), radarové sondování podloží a numerické klimatické i ledovcové modely.",
        },
      ],
      resources: [
        {
          kind: "link",
          title: "Secretariat of the Antarctic Treaty",
          url: "https://www.ats.aq/",
          source: "ATS",
        },
        {
          kind: "link",
          title: "Český antarktický výzkum (MUNI)",
          url: "https://www.polar.sci.muni.cz/",
          source: "Masarykova univerzita",
        },
      ],
      quiz: {
        title: "Kvíz — správa a výzkum",
        questions: [
          {
            question: "Co garantuje Antarktická smlouva z roku 1959?",
            options: [
              { text: "Využití Antarktidy pouze pro mírové účely a vědu", correct: true },
              { text: "Rozdělení kontinentu mezi 12 států", correct: false },
              { text: "Volnou těžbu nerostných surovin", correct: false },
            ],
          },
          {
            question: "Kterou stanici provozuje v Antarktidě Masarykova univerzita?",
            options: [
              { text: "Stanici Johanna Gregora Mendela", correct: true },
              { text: "Stanici Vostok", correct: false },
              { text: "Stanici Halley", correct: false },
            ],
          },
          {
            question: "Co zakázal Madridský protokol z roku 1991?",
            options: [
              { text: "Těžbu nerostných surovin v Antarktidě", correct: true },
              { text: "Vědecký výzkum", correct: false },
              { text: "Turistiku", correct: false },
            ],
          },
        ],
      },
    },
  ],
};

export const antarktida: Field = {
  id: "antarktida",
  title: "Antarktida",
  subtitle: "Kompletní výukový modul — fyzická geografie & klimatologie",
  level: "Speciální modul",
  accent: "#8fbfe0",
  icon: "snow",
  description:
    "Samostatný vzdělávací modul věnovaný nejjižnějšímu kontinentu. Zpracován primárně z pohledu fyzické geografie a klimatologie — kryosféra, klima, atmosférická cirkulace, Jižní oceán, paleoklima a současná změna klimatu. Obsahuje 13 kapitol s výkladem a kontrolními kvízy.",
  courses: [antarktidaCourse],
};
