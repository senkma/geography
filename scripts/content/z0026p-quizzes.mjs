/** Kvízy k předmětu Fyzická geografie (Z0026p) — ručně sestavené podle výtahů lekcí. */

function mc(question, correct, distractors, explanation) {
  return {
    question,
    options: [
      { text: correct, correct: true },
      ...distractors.map((text) => ({ text, correct: false })),
    ],
    explanation,
  };
}

export const Z0026P_QUIZZES = {
  "z0026p-1-uvod-do-studia-fyzicke-geografie-fg-jako-vedni-1": {
    title: "Kvíz: Úvod do fyzické geografie",
    questions: [
      mc(
        "Co je hlavním objektem studia fyzické geografie?",
        "Fyzickogeografická sféra Země",
        [
          "Socioekonomická sféra Země",
          "Pouze litosféra a georeliéf",
          "Krajinná sféra včetně lidské kultury",
        ],
        "FG studuje přírodní geosféry a procesy v nich; krajinná sféra vzniká až spojením s lidskou činností.",
      ),
      mc(
        "Která geosféra je definována teplotou pod bodem mrazu po více než 2 roky?",
        "Kryosféra",
        ["Pedosféra", "Hydrosféra", "Biosféra"],
        "Kryosféra zahrnuje část kůry a hydrosféry trvale zamrzlé nebo s dlouhodobě zápornou teplotou.",
      ),
      mc(
        "Podle Stefan-Boltzmannova zákona platí, že teplejší tělesa…",
        "vyzařují výrazně více energie než chladnější",
        [
          "vyzařují jen kratší vlnové délky",
          "mají vždy nižší albedo",
          "pohlcují méně slunečního záření",
        ],
        "Intenzita vyzařování roste s čtvrtou mocninou absolutní teploty tělesa.",
      ),
      mc(
        "Jaká je přibližná hodnota solární konstanty?",
        "1367 W·m⁻²",
        ["100 W·m⁻²", "367 W·m⁻²", "2367 W·m⁻²"],
        "Solární konstanta je intenzita záření na horní hranici atmosféry při střední vzdálenosti Země od Slunce.",
      ),
      mc(
        "Která trojice odpovídá klíčovým geografickým otázkám?",
        "Kde? — Proč tam? — Co s tím?",
        [
          "Kdy? — Kolik? — Kdo?",
          "Jak hluboko? — Jak rychle? — Kam odtéká?",
          "Co je to? — Jak staré? — Z čeho se skládá?",
        ],
        "Geografie kombinuje prostorovou distribuci, vysvětlení a aplikaci poznatků.",
      ),
    ],
  },

  "z0026p-1-co-je-fyzicka-geografie-14": {
    title: "Kvíz: Co je fyzická geografie?",
    questions: [
      mc(
        "Jak se obvykle definuje krajina v geografickém smyslu?",
        "Část zemského povrchu s typickou kombinací přírodních a kulturních prvků",
        [
          "Výhradně přírodní pokryv bez vlivu člověka",
          "Pouze lesní porost a orná půda",
          "Administrativní jednotka obce nebo katastr",
        ],
        "Krajina vzniká přetvářením přírodní krajiny lidskou činností.",
      ),
      mc(
        "Co je kritická zóna?",
        "Propustná přípovrchová vrstva od korun stromů po spodní hranici podzemní vody",
        [
          "Pouze půdní profil do hloubky 1 m",
          "Vrstva ozonu v stratosféře",
          "Zóna tektonické aktivita pod oceány",
        ],
        "V kritické zóně probíhá výměna mezi litosférou, atmosférou, vodou a živými organismy.",
      ),
      mc(
        "Co typicky zvyšuje druhovou diverzitu ptáků v krajině?",
        "Střídání otevřených ploch a lesů",
        ["Monokultura smrku", "Souvislá zástavba", "Umělá nádrž bez břehů"],
        "Mozaikovitá struktura krajiny nabízí více ekologických nik.",
      ),
      mc(
        "Lesnatost krajiny je v první řadě ovlivněna…",
        "způsobem využití země člověkem",
        [
          "výhradně nadmořskou výškou",
          "směrem světových stran",
          "pouze typem matečné horniny",
        ],
        "Odlesňování a zemědělství mění podíl lesa v krajině.",
      ),
    ],
  },

  "z0026p-2-zakladni-poznatky-o-atmosfere-atmosfera-vzduch-2": {
    title: "Kvíz: Atmosféra a sluneční záření",
    questions: [
      mc(
        "Které záření je téměř úplně pohlceno plyny v atmosféře a je škodlivé pro organismy?",
        "Ultrafialové (0,2–0,4 µm)",
        ["Viditelné (0,4–0,7 µm)", "Tepelné infračervené > 3 µm", "Rádiové vlny"],
        "UV záření je filtrováno především v horních vrstvách atmosféry.",
      ),
      mc(
        "Přibližně jak dlouho trvá cesta slunečního světla k Zemi?",
        "8⅓ minuty",
        ["1 sekunda", "1 hodina", "24 hodin"],
        "Elektromagnetické záření cestuje rychlostí ~300 000 km·s⁻¹.",
      ),
      mc(
        "Jaký podíl intenzity slunečního záření připadá na viditelné světlo?",
        "Přibližně 41 %",
        ["9 %", "70 %", "95 %"],
        "Maximální intenzita je ve viditelné části spektra; UV tvoří ~9 %.",
      ),
      mc(
        "Dlouhovlnné záření Země má maxima při vlnových délkách přibližně…",
        "5, 10 a 20 µm",
        ["0,4, 0,5 a 0,6 µm", "1, 2 a 3 µm", "100, 200 a 300 µm"],
        "Mezilehlé vlnové délky jsou silně pohlcovány vodní parou a CO₂.",
      ),
      mc(
        "Atmosféra v geografickém pojetí zahrnuje plynný obal Země…",
        "po ozonovou vrstvu",
        ["až po Měsíc", "pouze do 1 km výšky", "výhradně troposféru"],
        "Meteorologie a klimatologie studují dění v atmosféře.",
      ),
    ],
  },

  "z0026p-3-zakladni-meteorologicke-prvky-slunecni-zareni-3": {
    title: "Kvíz: Meteorologické prvky",
    questions: [
      mc(
        "Kde se standardně měří teplota vzduchu na meteorologické stanici?",
        "2 m nad zemí v bílé žaluziové budce",
        [
          "Přímo na povrchu trávy",
          "10 m nad střechou budovy",
          "Ve stínu stromu bez krytu",
        ],
        "Budka brání přímému slunečnímu záření a umožňuje cirkulaci vzduchu.",
      ),
      mc(
        "Kdy bývá obvykle denní minimum teploty vzduchu?",
        "Půl hodiny až krátce po východu Slunce",
        ["O půlnoci", "Ve 12. hodin", "Při západu Slunce"],
        "Nejprve pokračuje noční ochlazování, teprve pak sluneční ohřev.",
      ),
      mc(
        "Co je tepelný ostrov města?",
        "Oblast s vyšší teplotou než okolní krajina, zejména v noci",
        [
          "Oblast s nižší teplotou kvůli lesům",
          "Pouze zimní jev bez letního efektu",
          "Výhradně jev u pobřeží moře",
        ],
        "Zástavba akumuluje teplo, odvádí srážkovou vodu a mění povrch.",
      ),
      mc(
        "Přibližný průměrný vertikální teplotní gradient v troposféře je…",
        "0,65 °C na 100 m",
        ["0,1 °C na 100 m", "2 °C na 100 m", "Teplota s výškou roste"],
        "S výškou teplota v troposféře obecně klesá.",
      ),
      mc(
        "Kolik procent vody na Zemi je slaných?",
        "Přibližně 97,2 %",
        ["50 %", "80 %", "99,9 %"],
        "Většina sladké vody je vázána v ledovcích a podzemních zásobách.",
      ),
    ],
  },

  "z0026p-4-vseobecna-cirkulace-atmosfery-vzduchove-hmoty-4": {
    title: "Kvíz: Cirkulace atmosféry",
    questions: [
      mc(
        "Jaká je normální hodnota barometrického tlaku na hladině moře?",
        "1013,2 hPa",
        ["7600 hPa", "500 hPa", "101,32 hPa"],
        "Odpovídá přibližně 760 mmHg (Torrů).",
      ),
      mc(
        "Směr větru udáváme jako…",
        "odkud vítr vane",
        ["kam vítr vane", "kolmý směr k izobarám", "směr nejvyššího tlaku"],
        "Vítr vanoucí ze severu = severní vítr.",
      ),
      mc(
        "Co je anticyklona?",
        "Oblast vysokého atmosférického tlaku",
        [
          "Oblast nízkého tlaku",
          "Fronta studeného vzduchu",
          "Pás mezi dvěma frontami",
        ],
        "V anticykloně obvykle sestupuje vzduch → jasno a stabilní počasí.",
      ),
      mc(
        "Jak se chová mořská bríza?",
        "Odpoledne vanoucí od moře na pevninu",
        [
          "V noci od moře na pevninu",
          "Celý den od pevniny k moři",
          "Jen v zimě od pevniny k moři",
        ],
        "Pevnina se odpoledne rychleji ohřívá → tlakový gradient a vánek z moře.",
      ),
      mc(
        "Výpar z oceánů je přibližně kolikrát větší než z pevnin?",
        "6×",
        ["2×", "Stejný", "20×"],
        "Oceány jsou dominantním zdrojem vodní páry v hydrologickém cyklu.",
      ),
    ],
  },

  "z0026p-5-zaklady-predpovedi-pocasi-zdroje-dat-pro-predp-5": {
    title: "Kvíz: Předpověď počasí a vzduchové hmoty",
    questions: [
      mc(
        "Co je vzduchová hmota?",
        "Velký objem vzduchu s jednotnými vlastnostmi teploty a vlhkosti",
        [
          "Pouze vrstva inverze v údolí",
          "Jedna cumulonimbusová bouřka",
          "Vzduch v bezprostřední blízkosti fronty",
        ],
        "Vzduchové hmoty se klasifikují podle původu a povrchu (např. mT, cP).",
      ),
      mc(
        "Co charakterizuje studenou frontu?",
        "Klín studeného vzduchu pod teplý → cumulonimby a přeháňky",
        [
          "Pomalé zatažení a dlouhé deště",
          "Pouze jasno a vysoký tlak",
          "Absence srážek",
        ],
        "Studený vzduch podjíždí pod teplý a rychle ho vytlačuje vzhůru.",
      ),
      mc(
        "Jaký je rozdíl mezi počasím a povětrností?",
        "Počasí = okamžitý stav; povětrnost = charakter počasí během několika dnů",
        [
          "Počasí = dlouhodobý průměr; povětrnost = okamžitý stav",
          "Synonyma bez rozdílu",
          "Povětrnost se měří jen v létě",
        ],
        "Klima je ještě delší časová úroveň než povětrnost.",
      ),
      mc(
        "Tropická vzduchová hmota se označuje písmenem…",
        "T",
        ["P", "A", "c"],
        "P = polární, A = arktická, m/c = mořská/kontinentální.",
      ),
    ],
  },

  "z0026p-7-zmeny-a-kolisani-klimatu-zakladni-klimatotvorn-6": {
    title: "Kvíz: Klima a klasifikace",
    questions: [
      mc(
        "Köppenova klasifikace vychází primárně z…",
        "teploty a srážek",
        ["jen z nadmořské výšky", "jen z tlaku", "jen z vegetace bez měření"],
        "Hranice pásů odpovídají typům vegetace a distribuci srážek.",
      ),
      mc(
        "Který Köppenův pás je charakteristický suchým klimatem (výpar > srážky)?",
        "B",
        ["A", "C", "E"],
        "Pás A = tropický, C = mírný, E = polární.",
      ),
      mc(
        "Co je izohyeta?",
        "Čára stejného ročního množství srážek",
        [
          "Čára stejné teploty",
          "Čára stejného tlaku",
          "Čára stejné nadmořské výšky",
        ],
        "Analogicky k izotermě nebo izobarě.",
      ),
      mc(
        "Oceánské klima má oproti kontinentálnímu…",
        "menší roční amplitudu teplot",
        [
          "větší roční amplitudu teplot",
          "méně srážek",
          "nižší vlhkost vzduchu",
        ],
        "Moře moderuje teplotní extrémy pevniny.",
      ),
      mc(
        "Klima v geografickém pojetí je…",
        "dlouhodobý charakter počasí vyjádřený průměrnými hodnotami prvků",
        [
          "okamžitý stav atmosféry",
          "pouze teplota v červenci",
          "výhradně globální oteplování",
        ],
        "Klima vyžaduje dlouhé časové řady pozorování.",
      ),
    ],
  },

  "z0026p-8-hydrosfera-rozsireni-a-obeh-vody-na-zemi-hydro-7": {
    title: "Kvíz: Hydrosféra a oběh vody",
    questions: [
      mc(
        "Co je infiltrace?",
        "Pronikání srážkové vody do půdy a hornin gravitací",
        [
          "Výpar z listů rostlin",
          "Proudění vody v řece",
          "Tání ledovce",
        ],
        "Infiltrační kapacita určuje, kolik vody půda pojme.",
      ),
      mc(
        "Podzemní voda se nachází především v…",
        "zóně saturace",
        [
          "pásmu provzdušnění nad hladinou",
          "atmosféře",
          "kryosféře výhradně",
        ],
        "Nad hladinou je pásmo provzdušnění s kapilární vodou.",
      ),
      mc(
        "Kdy vzniká plošný (povrchový) odtok?",
        "Když intenzita srážky překročí infiltrační kapacitu nebo je půda nasycená",
        [
          "Vždy při každém dešti bez výjimky",
          "Pouze při tání sněhu v horách",
          "Jen v propustných píscích",
        ],
        "Přebytečná voda teče po povrchu do rýh a toků.",
      ),
      mc(
        "Hydrologie studuje…",
        "systém povrchových a podpovrchových vod na Zemi",
        [
          "pouze oceány",
          "jen chemické složení atmosféry",
          "výhradně ledovce",
        ],
        "Hydrologický cyklus propojuje výpar, srážky a odtok.",
      ),
      mc(
        "Hladina podzemní vody je typicky nejvyšší…",
        "pod rozvodími a vrcholy kopců",
        [
          "v ústí řeky",
          "na dně jezera",
          "v pouštní kotlině",
        ],
        "V údolích klesá k úrovni toků a jezer (prosakování).",
      ),
    ],
  },

  "z0026p-9-hydrografie-merne-jednotky-odtoku-hydrografick-8": {
    title: "Kvíz: Hydrografie a podzemní voda",
    questions: [
      mc(
        "Co je povodí?",
        "Území odtékající do jednoho závěrného profilu",
        [
          "Pouze údolí hlavní řeky",
          "Oblast bez odtoku do moře",
          "Plocha jezera",
        ],
        "Povodí zahrnuje povrchový i podzemní odtok.",
      ),
      mc(
        "Zvodnělá vrstva (zvodeň) je typicky tvořena…",
        "propustným pískem nebo pískovcem",
        [
          "jíly a břidlicemi",
          "granitem bez puklin",
          "ledovcovým ledem",
        ],
        "V zvodni obsahuje voda volné póry a může volně protékat.",
      ),
      mc(
        "Artéská voda vzniká, když…",
        "je propustná vrstva mezi nepropustnými vrstvami a voda je pod tlakem",
        [
          "voda stojí v propustném písku bez tlaku",
          "voda teče pouze v řece",
          "je voda zamrzlá v permafrostu",
        ],
        "Při vrtu může voda vystřikovat nad úroveň terénu.",
      ),
      mc(
        "Kapilární voda se drží v půdě díky…",
        "kapilárnímu napětí na povrchu minerálů",
        [
          "vysokému tlaku vzduchu",
          "proudění řeky",
          "radioaktivnímu rozpadu",
        ],
        "Nachází se v pásmu provzdušnění nad hladinou podzemní vody.",
      ),
    ],
  },

  "z0026p-10-hydrometrie-mereni-vodnich-stavu-a-prutoku-9": {
    title: "Kvíz: Hydrometrie",
    questions: [
      mc(
        "Evapotranspirace zahrnuje…",
        "výpar z půdy a transpiraci rostlin",
        [
          "pouze srážky",
          "pouze podzemní odtok",
          "jen tání sněhu",
        ],
        "Spolu s infiltrací určuje, kolik vody zůstane pro odtok.",
      ),
      mc(
        "Zóna saturace je charakteristická tím, že…",
        "všechny póry jsou vyplněny vodou",
        [
          "póry jsou pouze částečně vlhké",
          "neobsahuje žádnou vodu",
          "je vždy nad úrovní půdy",
        ],
        "Odděluje ji od pásma provzdušnění hladina podzemní vody.",
      ),
      mc(
        "Při intenzivním dešti na nasycené půdě…",
        "vzniká rychlý povrchový odtok",
        [
          "všechna voda se vsákne",
          "klesne hladina podzemní vody",
          "nefunguje gravitace",
        ],
        "Infiltrační kapacita je vyčerpána → plošný odtok.",
      ),
      mc(
        "Hydrometrie se zabývá…",
        "měřením a vyhodnocováním vodních stavů a průtoků",
        [
          "pouze chemickou analýzou vody",
          "jen mapováním geologie",
          "výhradně předpovědí počasí",
        ],
        "Data slouží pro hydrologické bilance a povodňovou ochranu.",
      ),
    ],
  },

  "z0026p-11-vodni-rezim-rek-rezim-prutoku-a-typizace-rek-10": {
    title: "Kvíz: Vodní režim řek",
    questions: [
      mc(
        "Vodní režim řeky popisuje…",
        "časové změny průtoku v závislosti na zdrojích vody",
        [
          "pouze průměrnou teplotu vody",
          "chemické složení řeky",
          "šířku říční nivy v mapě",
        ],
        "Zahrnuje základní (podzemní) i přímý (dešťový) odtok.",
      ),
      mc(
        "V období sucha obvykle…",
        "klesá hladina podzemní vody a základní průtok",
        [
          "stoupá hladina pod rozvodím",
          "průtok výhradně roste",
          "zmizí podzemní voda úplně",
        ],
        "Řeky jsou zásobovány z podzemních zdrojů i v období bez srážek.",
      ),
      mc(
        "Povodňová vlna na řece často souvisí s…",
        "plošným odtokem po intenzivních srážkách",
        [
          "pouze táním ledovce",
          "poklesem teploty",
          "absencí srážek",
        ],
        "Rychlý nárůst průtoku, když půda nevsákne dešťovou vodu.",
      ),
      mc(
        "Řeky jako geomorfologický činitel…",
        "odnášejí sedimenty a modelují krajinu",
        [
          "nemění reliéf",
          "působí jen v pouštích",
          "vznikají pouze pod ledovcem",
        ],
        "Fluviální eroze a akumulace formují údolí a náplavy.",
      ),
    ],
  },

  "z0026p-12-hydrologie-podpovrchovych-vod-zdroje-vzniku-p-11": {
    title: "Kvíz: Podpovrchové vody",
    questions: [
      mc(
        "Půdní voda (soil water belt) je…",
        "voda v půdním pokryvu mezi povrchem a zónou saturace",
        [
          "voda pouze v řece",
          "voda v atmosféře",
          "voda v ledovci",
        ],
        "Může se vracet výparem nebo prosakovat hlouběji.",
      ),
      mc(
        "Nepropustná vrstva typicky obsahuje…",
        "jíly nebo břidlice s málo volné vody",
        [
          "čistý štěrk",
          "propustný písek",
          "porézní vápenec bez jílů",
        ],
        "Brání sestupu vody a vytváří podmínky pro artéské soustavy.",
      ),
      mc(
        "Čočkovité břidlice mohou vytvořit…",
        "zavěšené vodní těleso",
        [
          "vždy artéský vrt",
          "pouze povrchový odtok",
          "kritickou zónu",
        ],
        "Geologická struktura určuje uložení podzemní vody.",
      ),
      mc(
        "Hlavní zdroj podzemní vody na pevnině je…",
        "infiltrace srážkové vody",
        [
          "výhradně tání ledovců",
          "kondenzace v jeskyních",
          "proudění z oceánu pod kontinentem",
        ],
        "Srážky doplňují zásoby v zóně saturace.",
      ),
    ],
  },

  "z0026p-13-hydrologie-jezer-a-nadrzi-svetove-zasoby-vody-12": {
    title: "Kvíz: Jezera a zásoby vody",
    questions: [
      mc(
        "Povrchová sladká voda (jezera, toky) tvoří přibližně…",
        "0,02 % celkových zásob sladké vody",
        [
          "50 % sladké vody",
          "10 % všech vod na Zemi",
          "většinu hydrosféry",
        ],
        "Největší zásoby sladké vody jsou v ledovcích a podzemních vodách.",
      ),
      mc(
        "Na pevnině v globální bilanci platí: srážky = …",
        "výpar + odtok",
        [
          "pouze výpar",
          "pouze infiltrace",
          "odtok + srážky",
        ],
        "Část vody se vsakuje, část odtéká, část se vrací do atmosféry.",
      ),
      mc(
        "Hladina podzemní vody v údolí často odpovídá…",
        "hladině řeky nebo jezera",
        [
          "vrcholu hory",
          "hladině moře vždy přímo",
          "pouze srážkám v daný den",
        ],
        "Voda prosakuje z údolí do toků a nádrží.",
      ),
      mc(
        "Bezodtoká jezera vznikají v…",
        "uzavřených povodích bez odtoku do moře",
        [
          "všech říčních ústích",
          "pouze v oceánu",
          "výhradně pod ledovcem",
        ],
        "Voda odtéká jen výparem nebo infiltrací.",
      ),
    ],
  },

  "z0026p-3-1-vyvoj-litosfery-17": {
    title: "Kvíz: Vývoj litosféry",
    questions: [
      mc(
        "Průměrná mocnost zemské kůry na rovníku je oproti pólu…",
        "asi o 43 km větší",
        ["stejná", "o 43 km menší", "o 430 km větší"],
        "Souvisí s rotací Země a rozlišením mezi kontinentální a oceánskou kůrou.",
      ),
      mc(
        "Gutenbergova diskontinuita odděluje…",
        "plášť a jádro",
        [
          "kůru a plášť",
          "litosféru a atmosféru",
          "hydrosféru a biosféru",
        ],
        "Jde o významnou seismickou hranici v hloubce ~2900 km.",
      ),
      mc(
        "Geoid vzniká, protože Země dosáhla stavu…",
        "hydrostatické rovnováhy",
        [
          "chemické rovnováhy",
          "radioaktivní rovnováhy",
          "tektonické rovnováhy",
        ],
        "Hladina moří kopíruje ekvipotenciální povrch gravitace.",
      ),
      mc(
        "Které minerály jsou typické pro hlubší části pláště?",
        "Olivín, pyroxen, granát, spinel",
        [
          "Křemen, živec, mika",
          "Halit a sádrovec",
          "Pouze uhlí a vápenec",
        ],
        "Složení se mění s hloubkou a tlakem.",
      ),
    ],
  },

  "z0026p-3-2-horninovy-cyklus-18": {
    title: "Kvíz: Horninový cyklus",
    questions: [
      mc(
        "Pozitivní gradace znamená, že velikost částic…",
        "se odspodu nahoru zmenšuje",
        [
          "se odspodu nahoru zvětšuje",
          "je všude stejná",
          "nezávisí na vrstvách",
        ],
        "U sedimentů často odráží ustupující energii prostředí při ukládání.",
      ),
      mc(
        "Sekundární minerály vznikají převážně…",
        "přeměnou primárních minerálů (často zvětráváním)",
        [
          "při tání magmatu",
          "pouze v kosmu",
          "bez jakékoli změny prostředí",
        ],
        "Primární minerály jsou stabilní za podmínek vzniku horniny.",
      ),
      mc(
        "Akcesorické minerály tvoří objemově…",
        "nejvýše asi 5 %",
        ["vždy více než 50 %", "přesně 10 %", "0 %"],
        "Hlavní minerály >10 %, vedlejší <10 % objemu.",
      ),
      mc(
        "Vrstva v sedimentech je vymezena…",
        "vrstevními plochami a odlišným složením od sousedních vrstev",
        [
          "pouze barvou bez rozhraní",
          "výhradně fosiliemi",
          "směrem severu",
        ],
        "Vrstvy mohou být ukloněny vůči horizontále.",
      ),
    ],
  },

  "z0026p-3-3-tektonicke-procesy-19": {
    title: "Kvíz: Tektonické procesy",
    questions: [
      mc(
        "Zlom je definován jako…",
        "puklina v hornině s pozorovatelným pohybem podél ní",
        [
          "pouze vrstevní plocha",
          "náraz větru na svah",
          "erozní rýha po dešti",
        ],
        "Tektonické zlomy vznikají napětím v zemské kůře.",
      ),
      mc(
        "Allochton je horninové těleso…",
        "přemístěné na autochton vzdáleněji než 5 km",
        [
          "na místě vzniku bez pohybu",
          "pouze v atmosféře",
          "vždy mladší než okolí",
        ],
        "Tektonické přesuny mohou přenášet velké masivy hornin.",
      ),
      mc(
        "Morfostruktura znamená…",
        "shodu geologických struktur s tvary reliéfu",
        [
          "vždy nesoulad struktury a reliéfu",
          "pouze fluviální erozi",
          "absenci tektoniky",
        ],
        "Morfologická anomálie = nesoulad struktury a povrchu.",
      ),
      mc(
        "Tektonika studuje především…",
        "endogenní procesy a deformace zemské kůry",
        [
          "pouze zvětrávání na povrchu",
          "jen oběh vody",
          "výhradně klima",
        ],
        "Endogenní síly vytvářejí zlomy, vrásnění a reliéf.",
      ),
    ],
  },

  "z0026p-3-4-zvetravaci-procesy-20": {
    title: "Kvíz: Zvětrávací procesy",
    questions: [
      mc(
        "Zvětrávání zahrnuje…",
        "fyzický rozpad a chemický rozklad hornin",
        [
          "pouze transport větrem",
          "jen transport ledovcem",
          "výhradně biologickou produkci",
        ],
        "Probíhá v blízkosti povrchu za okolních podmínek.",
      ),
      mc(
        "Denudace je…",
        "snižování povrchu a vyrovnávání reliéfu",
        [
          "pouze ukládání sedimentů",
          "výhradně vulkanická činnost",
          "nárůst nadmořské výšky",
        ],
        "Spolu s erozí a zvětráváním patří mezi exogenní procesy.",
      ),
      mc(
        "Fyzikální zvětrávání urychluje chemické tím, že…",
        "zvyšuje povrchovou oblast reakcí",
        [
          "snižuje teplotu horniny",
          "zastavuje reakce s vodou",
          "vytváří pevnější minerály",
        ],
        "Rozpad na menší částice = více reaktivních ploch.",
      ),
      mc(
        "Eroze je…",
        "odnos materiálu vodou, větrem nebo ledovci",
        [
          "pouze chemický rozklad",
          "sedimentace v moři",
          "výhradně působení gravitace bez transportu",
        ],
        "Gravitace spouští pohyb, ale eroze zahrnuje i transport.",
      ),
    ],
  },

  "z0026p-3-6-fluvialni-procesy-22": {
    title: "Kvíz: Fluviální procesy",
    questions: [
      mc(
        "Povodí je území, které…",
        "odvádí vodu do jednoho závěrného profilu",
        [
          "nemá žádný odtok",
          "odtéká do dvou oceánů",
          "je vždy menší než 1 km²",
        ],
        "Zahrnuje síť toků, podzemní odtok i srážky na povrchu.",
      ),
      mc(
        "Plošný odtok vzniká, když…",
        "krajina nepojme srážkovou vodu infiltrací",
        [
          "je půda vždy suchá",
          "nejsou žádné srážky",
          "voda proudí jen v podzemí",
        ],
        "Voda se rozlévá po povrchu a koncentruje se do rýh.",
      ),
      mc(
        "Vysoké srážky jsou typické pro…",
        "rovníkové a monzunové oblasti",
        [
          "vnitrozemské pouště",
          "střední Arktidu",
          "všechny polární oblasti bez výjimky",
        ],
        "Nízké srážky: suché subtropy a některé polární oblasti.",
      ),
      mc(
        "Fluviální systém zahrnuje jako komponenty např…",
        "odtok, sedimenty a síť toků",
        [
          "pouze teplotu vzduchu",
          "jen biosféru",
          "výhradně větrnou erosi",
        ],
        "Řádovost toků popisuje hierarchii v drenážní síti.",
      ),
    ],
  },

  "z0026p-3-7-glacialni-procesy-23": {
    title: "Kvíz: Glaciální procesy",
    questions: [
      mc(
        "Ledovec vzniká tam, kde…",
        "akumulace sněhu převyšuje ablaci (tání)",
        [
          "nikdy nesněží",
          "je pouze větrná eroze",
          "teplota je vždy nad 0 °C",
        ],
        "Čára sněžnice odděluje akumulační a ablační zónu.",
      ),
      mc(
        "Kolik % ledovcového ledu tvoří Antarktida a Grónsko?",
        "Přibližně 96 %",
        ["50 %", "70 %", "100 %"],
        "Zbývající ledovce jsou horské a polární mimo tyto štíty.",
      ),
      mc(
        "Roztátí všech současných ledovců by zvýšilo hladinu moří asi o…",
        "65,6 m",
        ["6,5 m", "656 m", "0,6 m"],
        "Většina zásob sladké vody je vázána v ledovcích.",
      ),
      mc(
        "Glaciální procesy patří mezi…",
        "exogenní geomorfologické činitele",
        [
          "endogenní tektonické síly",
          "pouze biogenní činitele",
          "výhradně antropogenní faktory",
        ],
        "Led a sníh modelují reliéf v chladných oblastech.",
      ),
    ],
  },

  "z0026p-3-8-eolicke-procesy-24": {
    title: "Kvíz: Eolické procesy",
    questions: [
      mc(
        "Eolické tvary reliéfu vznikají primárně v…",
        "aridních a semiaridních oblastech s volným sedimentem",
        [
          "tropickém deštném lese",
          "pod ledovcem",
          "výhradně na dně oceánu",
        ],
        "Potřebný je dostupný prach nebo písek a účinný vítr.",
      ),
      mc(
        "Který typ eolického transportu zahrnuje „poskakování“ zrn větrem?",
        "Saltace",
        ["Suspenze", "Rolování bez odskoku", "Pouze fluviální transport"],
        "Saltace = zrna se zvedají a dopadají; suspenze = jemný prach ve vzduchu.",
      ),
      mc(
        "Větrem se obvykle efektivně transportují zrna do velikosti…",
        "písku",
        ["balvanů", "pouze jílu ve vodě", "celých kamenů"],
        "Nižší hustota vzduchu omezuje transportní kapacitu větru.",
      ),
      mc(
        "Eolická akumulace často probíhá…",
        "kolem překážek s vytříděním materiálu",
        [
          "pouze v řečištích",
          "výhradně pod vodou",
          "bez pohybu částic",
        ],
        "Vítr ukládá písek do dun a návějů.",
      ),
    ],
  },

  "z0026p-3-10-pedogeneze-26": {
    title: "Kvíz: Pedogeneze",
    questions: [
      mc(
        "Půdotvorné faktory (klimaxová rovnice) jsou…",
        "matečná hornina, klima, organismy, reliéf, čas",
        [
          "pouze teplota a srážky",
          "jen nadmořská výška",
          "výhradně lidská činnost",
        ],
        "Jen s aktivními faktory vzniká z horniny půda.",
      ),
      mc(
        "Humus je…",
        "částečně rozložená organická hmota v půdě",
        [
          "čistý jíl bez organiky",
          "pouze živý kořen",
          "výhradně minerální část půdy",
        ],
        "Vzniká rozkladem rostlinných a živočišných zbytků.",
      ),
      mc(
        "Jílová frakce má zrnitost…",
        "menší než 0,002 mm",
        ["0,02–2 mm", "2–20 mm", "větší než 2 mm"],
        "Prach: 0,002–0,02 mm; písek: 0,02–2 mm.",
      ),
      mc(
        "Bez činnosti organismů by půdy…",
        "nemohly vzniknout",
        [
          "byly identické s matečnou horninou",
          "existovaly jen v pouštích",
          "neměly žádnou vodu",
        ],
        "Biogenní činitelé mění horninu a tvoří profil půdy.",
      ),
    ],
  },

  "z0026p-5-environmentalni-zmeny-29": {
    title: "Kvíz: Environmentální změny",
    questions: [
      mc(
        "Uniformitarianismus předpokládá, že geologické procesy…",
        "probíhají stejnými zákony jako dnes, včetně pomalých změn",
        [
          "v minulosti neexistovaly",
          "byly vždy katastrofické",
          "se týkají jen Měsíce",
        ],
        "„The present is the key to the past.“",
      ),
      mc(
        "Katastrofismus zdůrazňuje…",
        "rychlé události formující reliéf",
        [
          "pouze pomalé změny",
          "absenci vulkanismu",
          "výhradně lidskou činnost",
        ],
        "Historická debata s uniformitarianismem o tempu změn.",
      ),
      mc(
        "Radiometrické datování (např. U-Pb) slouží k…",
        "určení stáří hornin",
        [
          "měření průtoku řeky",
          "předpovědi počasí",
          "mapování půdních typů",
        ],
        "Radioaktivní rozpad poskytuje časovou osu geologie.",
      ),
      mc(
        "Nejstarší známé minerály na Zemi (Jack Hills) mají stáří přes…",
        "4,4 miliardy let",
        [
          "4,4 milionu let",
          "440 milionů let",
          "44 000 let",
        ],
        "U-Pb datování zirkonů z australských hornin.",
      ),
    ],
  },
};
