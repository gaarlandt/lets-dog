const hondenDatabase = [
    {
        naam: "Labrador Retriever",
        ruimte: 2,
        energie: 3,
        ervaring: 1,
        hypo: 0,
        kind: 3,
        desc: "Sociaal, stabiel, vriendelijk",
        letop: "Gevoelig voor overgewicht"
    },
    {
        naam: "Golden Retriever",
        ruimte: 2,
        energie: 3,
        ervaring: 1,
        hypo: 0,
        kind: 3,
        desc: "Zacht, intelligent, mensgericht",
        letop: "Gevoelig voor stress in drukke omgevingen"
    },
    {
        naam: "Havanezer",
        ruimte: 1,
        energie: 2,
        ervaring: 1,
        hypo: 1,
        kind: 3,
        desc: "Zacht, sociaal, aanhankelijk",
        letop: "Kan niet goed langdurig alleen zijn"
    },
    {
        naam: "Cocker Spaniel",
        ruimte: 2,
        energie: 2,
        ervaring: 2,
        hypo: 0,
        kind: 2,
        desc: "Vrolijk, gevoelig, sociaal",
        letop: "Gevoelig voor prikkels en harde correcties"
    },
    {
        naam: "Poedel (medium)",
        ruimte: 1,
        energie: 3,
        ervaring: 2,
        hypo: 1,
        kind: 3,
        desc: "Intelligent, energiek, elegant",
        letop: "Vraagt mentale uitdaging en vachtverzorging"
    },
    {
        naam: "Border Collie",
        ruimte: 3,
        energie: 4,
        ervaring: 3,
        hypo: 0,
        kind: 1,
        desc: "Zeer intelligent, gefocust, energiek",
        letop: "Niet geschikt voor beginners, drijfinstinct"
    },
    {
        naam: "Australian Shepherd",
        ruimte: 2,
        energie: 3,
        ervaring: 2,
        hypo: 0,
        kind: 2,
        desc: "Alert, werklustig, sociaal",
        letop: "Gevoelig voor verveling en onderprikkeling"
    },
    {
        naam: "Vizsla",
        ruimte: 2,
        energie: 3,
        ervaring: 2,
        hypo: 0,
        kind: 2,
        desc: "Aanhankelijk, energiek, gevoelig",
        letop: "Kan slecht tegen harde benadering/alleen zijn"
    },
    {
        naam: "Weimaraner",
        ruimte: 3,
        energie: 3,
        ervaring: 3,
        hypo: 0,
        kind: 2,
        desc: "Sterk, energiek, loyaal",
        letop: "Niet geschikt voor lange periodes alleen"
    },
    {
        naam: "Siberische Husky",
        ruimte: 3,
        energie: 4,
        ervaring: 3,
        hypo: 0,
        kind: 2,
        desc: "Onafhankelijk, energiek, sociaal",
        letop: "Sterk jachtinstinct; vaak niet los te lopen"
    },
    {
        naam: "Chihuahua",
        ruimte: 1,
        energie: 1,
        ervaring: 1,
        hypo: 0,
        kind: 1,
        desc: "Alert, klein, loyaal",
        letop: "Kwetsbaar voor ruw spel en jonge kinderen"
    },
    {
        naam: "Franse Bulldog",
        ruimte: 1,
        energie: 1,
        ervaring: 1,
        hypo: 0,
        kind: 3,
        desc: "Rustig, mensgericht, compact",
        letop: "Gevoelig voor hitte en ademhalingsproblemen"
    },
    {
        naam: "Mopshond",
        ruimte: 1,
        energie: 1,
        ervaring: 1,
        hypo: 0,
        kind: 3,
        desc: "Vrolijk, vriendelijk, aanhankelijk",
        letop: "Gevoelig voor overgewicht en ademhaling"
    },
    {
        naam: "Maltezer",
        ruimte: 1,
        energie: 2,
        ervaring: 1,
        hypo: 1,
        kind: 2,
        desc: "Zacht, aanhankelijk",
        letop: "Veel vachtverzorging en nabijheid nodig"
    },
    {
        naam: "Shih Tzu",
        ruimte: 1,
        energie: 2,
        ervaring: 1,
        hypo: 0,
        kind: 2,
        desc: "Zacht, rustig, vriendelijk",
        letop: "Oog- en vachtverzorging essentieel"
    },
    {
        naam: "Duitse Herder",
        ruimte: 2,
        energie: 3,
        ervaring: 3,
        hypo: 0,
        kind: 2,
        desc: "Loyaal, alert, werkgericht",
        letop: "Vraagt duidelijke structuur en begeleiding"
    },
    {
        naam: "Rottweiler",
        ruimte: 2,
        energie: 3,
        ervaring: 3,
        hypo: 0,
        kind: 2,
        desc: "Zelfverzekerd, loyaal",
        letop: "Consistente, consequente omgang noodzakelijk"
    },
    {
        naam: "Akita",
        ruimte: 2,
        energie: 2,
        ervaring: 3,
        hypo: 0,
        kind: 1,
        desc: "Waardig, onafhankelijk",
        letop: "Niet geschikt voor drukke/chaotische omgevingen"
    },
    {
        naam: "Dobermann",
        ruimte: 2,
        energie: 3,
        ervaring: 3,
        hypo: 0,
        kind: 2,
        desc: "Alert, atletisch",
        letop: "Heeft mentale uitdaging en begeleiding nodig"
    },
    {
        naam: "Bullmastiff",
        ruimte: 3,
        energie: 2,
        ervaring: 2,
        hypo: 0,
        kind: 2,
        desc: "Krachtig, rustig, beschermend",
        letop: "Gevoelig voor hitte en gewrichtsbelasting"
    },
    {
        naam: "Jack Russell Terrier",
        ruimte: 1,
        energie: 4,
        ervaring: 2,
        hypo: 0,
        kind: 1,
        desc: "Energiek, vasthoudend",
        letop: "Kan snel overprikkeld raken, heeft sturing nodig"
    },
    {
        naam: "Yorkshire Terrier",
        ruimte: 1,
        energie: 2,
        ervaring: 2,
        hypo: 0,
        kind: 2,
        desc: "Alert, slim, klein",
        letop: "Vraagt consequente opvoeding en vachtverzorging"
    },
    {
        naam: "Cairn Terrier",
        ruimte: 1,
        energie: 3,
        ervaring: 2,
        hypo: 0,
        kind: 2,
        desc: "Moedig, actief, onafhankelijk",
        letop: "Sterk jachtinstinct, vraagt duidelijke grenzen"
    },
    {
        naam: "Staffordshire Bull Terrier",
        ruimte: 2,
        energie: 3,
        ervaring: 2,
        hypo: 0,
        kind: 2,
        desc: "Mensgericht, energiek, gevoelig",
        letop: "Vraagt rustige, stabiele aansturing"
    },
    {
        naam: "West Highland White Terrier",
        ruimte: 1,
        energie: 2,
        ervaring: 1,
        hypo: 0,
        kind: 3,
        desc: "Vrolijk, alert, moedig",
        letop: "Regelmatige vachtverzorging nodig"
    },
    {
        naam: "Poedel",
        ruimte: 2,
        energie: 3,
        ervaring: 2,
        hypo: 1,
        kind: 3,
        desc: "Intelligent, elegant",
        letop: "Vacht vraagt professionele verzorging"
    },
    {
        naam: "Bichon Frisé",
        ruimte: 1,
        energie: 2,
        ervaring: 1,
        hypo: 1,
        kind: 3,
        desc: "Zacht, vrolijk, sociaal",
        letop: "Vachtverzorging is cruciaal"
    },
    {
        naam: "Labradoodle",
        ruimte: 2,
        energie: 3,
        ervaring: 1,
        hypo: 1,
        kind: 3,
        desc: "Aanhankelijk, slim, vriendelijk",
        letop: "Vacht en energielevel variëren per lijn"
    },
    {
        naam: "Portugese Waterhond",
        ruimte: 2,
        energie: 4,
        ervaring: 2,
        hypo: 1,
        kind: 2,
        desc: "Sportief, intelligent, trouw",
        letop: "Vraagt dagelijkse beweging en mentale uitdaging"
    },
    {
        naam: "Whippet",
        ruimte: 1,
        energie: 2,
        ervaring: 1,
        hypo: 0,
        kind: 2,
        desc: "Zacht, gevoelig, elegant",
        letop: "Gevoelig voor kou en harde benadering"
    },
    {
        naam: "Berner Sennenhond",
        ruimte: 2,
        energie: 2,
        ervaring: 1,
        hypo: 0,
        kind: 3,
        desc: "Zacht, rustig, loyaal",
        letop: "Gevoelig voor warmte en gewrichtsproblemen"
    },
    {
        naam: "Leonberger",
        ruimte: 3,
        energie: 2,
        ervaring: 2,
        hypo: 0,
        kind: 3,
        desc: "Zeer zacht, groot, rustig",
        letop: "Intensieve verzorging en voldoende ruimte vereist"
    },
    {
        naam: "Cavalier King Charles",
        ruimte: 1,
        energie: 2,
        ervaring: 1,
        hypo: 0,
        kind: 3,
        desc: "Zacht, vriendelijk, sociaal",
        letop: "Gevoelig voor hart- en oogproblemen"
    },
    {
        naam: "Newfoundlander",
        ruimte: 3,
        energie: 2,
        ervaring: 2,
        hypo: 0,
        kind: 3,
        desc: "Kalm, krachtig, zacht",
        letop: "Gevoelig voor hitte en gewrichten"
    },
    {
        naam: "Mastiff",
        ruimte: 3,
        energie: 2,
        ervaring: 2,
        hypo: 0,
        kind: 2,
        desc: "Krachtig, waardig, beschermend",
        letop: "Gevoelig voor gewrichtsproblemen en overgewicht"
    },
    {
        naam: "Australian Cattle Dog",
        ruimte: 3,
        energie: 4,
        ervaring: 3,
        hypo: 0,
        kind: 1,
        desc: "Werklustig, slim, energiek",
        letop: "Vraagt intensieve training en taakgerichte activiteit"
    },
    {
        naam: "Pointer",
        ruimte: 2,
        energie: 3,
        ervaring: 2,
        hypo: 0,
        kind: 2,
        desc: "Sportief, gericht, energiek",
        letop: "Sterk jachtinstinct, vraagt veel beweging"
    },
    {
        naam: "Setter",
        ruimte: 2,
        energie: 3,
        ervaring: 2,
        hypo: 0,
        kind: 2,
        desc: "Zacht, actief, elegant",
        letop: "Veel beweging en vachtverzorging nodig"
    }
];