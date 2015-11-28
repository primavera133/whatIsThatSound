'use strict';
var exports = module.exports = {};

exports.getSpecies = function () {
    return [{"sc": "Anser fabalis", "en": "Taiga Bean Goose", "sv": "tajgasädgås"}, 
        {"sc": "Anser brachyrhynchus", "en": "Pink-footed Goose", "sv": "Spetsbergsgås"}, 
        {"sc": "Anser anser", "en": "Greylag Goose", "sv": "Grågås"}, {
        "sc": "Anser albifrons",
        "en": "Greater White-fronted Goose",
        "sv": "Bläsgås"
    }, {"sc": "Anser erythropus", "en": "Lesser White-fronted Goose", "sv": "Fjällgås"}, {
        "sc": "Branta canadensis",
        "en": "Canada Goose",
        "sv": "Kanadagås"
    }, {"sc": "Branta bernicla", "en": "Brant Goose", "sv": "Prutgås"}, {
        "sc": "Branta leucopsis",
        "en": "Barnacle Goose",
        "sv": "Vitkindad gås"
    }, {"sc": "Branta ruficollis", "en": "Red-breasted Goose", "sv": "Rödhalsad gås"}, {
        "sc": "Cygnus olor",
        "en": "Mute Swan",
        "sv": "Knölsvan"
    }, {"sc": "Cygnus columbianus", "en": "Tundra Swan", "sv": "mindre sångsvan"}, {
        "sc": "Cygnus cygnus",
        "en": "Whooper Swan",
        "sv": "Sångsvan"
    }, {"sc": "Tadorna tadorna", "en": "Common Shelduck", "sv": "Gravand"}, {
        "sc": "Tadorna ferruginea",
        "en": "Ruddy Shelduck",
        "sv": "Rostand"
    }, {"sc": "Anas strepera", "en": "Gadwall", "sv": "Snatterand"}, {
        "sc": "Anas penelope",
        "en": "Eurasian Wigeon",
        "sv": "Bläsand"
    }, {"sc": "Anas platyrhynchos", "en": "Mallard", "sv": "Gräsand"}, {
        "sc": "Anas clypeata",
        "en": "Northern Shoveler",
        "sv": "Skedand"
    }, {"sc": "Anas acuta", "en": "Northern Pintail", "sv": "Stjärtand"}, {
        "sc": "Anas querquedula",
        "en": "Garganey",
        "sv": "Årta"
    }, {"sc": "Anas crecca", "en": "Eurasian Teal", "sv": "Kricka"}, {
        "sc": "Anas carolinensis",
        "en": "Green-winged Teal",
        "sv": "Amerikansk kricka"
    }, {"sc": "Netta rufina", "en": "Red-crested Pochard", "sv": "Rödhuvad dykand"}, {
        "sc": "Aythya ferina",
        "en": "Common Pochard",
        "sv": "Brunand"
    }, {"sc": "Aythya fuligula", "en": "Tufted Duck", "sv": "Vigg"}, {
        "sc": "Aythya marila",
        "en": "Greater Scaup",
        "sv": "Bergand"
    }, {"sc": "Polysticta stelleri", "en": "Steller's Eider", "sv": "Alförrädare"}, {
        "sc": "Somateria spectabilis",
        "en": "King Eider",
        "sv": "Praktejder"
    }, {"sc": "Somateria mollissima", "en": "Common Eider", "sv": "Ejder"}, {
        "sc": "Melanitta fusca",
        "en": "Velvet Scoter",
        "sv": "Svärta"
    }, {"sc": "Melanitta nigra", "en": "Common Scoter", "sv": "Sjöorre"}, {
        "sc": "Clangula hyemalis",
        "en": "Long-tailed Duck",
        "sv": "Alfågel"
    }, {"sc": "Bucephala clangula", "en": "Common Goldeneye", "sv": "Knipa"}, {
        "sc": "Mergellus albellus",
        "en": "Smew",
        "sv": "Salskrake"
    }, {"sc": "Mergus merganser", "en": "Common Merganser", "sv": "Storskrake"}, {
        "sc": "Mergus serrator",
        "en": "Red-breasted Merganser",
        "sv": "Småskrake"
    }, {"sc": "Oxyura jamaicensis", "en": "Ruddy Duck", "sv": "Amerikansk kopparand"}, {
        "sc": "Tetrao urogallus",
        "en": "Western Capercaillie",
        "sv": "Tjäder"
    }, {"sc": "Lagopus muta", "en": "Rock Ptarmigan", "sv": "Fjällripa"}, {
        "sc": "Lagopus lagopus",
        "en": "Willow Ptarmigan",
        "sv": "Dalripa"
    }, {"sc": "Perdix perdix", "en": "Grey Partridge", "sv": "Rapphöna"}, {
        "sc": "Coturnix coturnix",
        "en": "Common Quail",
        "sv": "Vaktel"
    }, {"sc": "Phasianus colchicus", "en": "Common Pheasant", "sv": "Fasan"}, {
        "sc": "Gavia stellata",
        "en": "Red-throated Loon",
        "sv": "Smålom"
    }, {"sc": "Gavia arctica", "en": "Black-throated Loon", "sv": "Storlom"}, {
        "sc": "Gavia immer",
        "en": "Great Northern Loon",
        "sv": "Svartnäbbad islom"
    }, {"sc": "Gavia adamsii", "en": "Yellow-billed Loon", "sv": "Vitnäbbad islom"}, {
        "sc": "Hydrobates pelagicus",
        "en": "European Storm Petrel",
        "sv": "Stormsvala"
    }, {
        "sc": "Oceanodroma leucorhoa",
        "en": "Leach's Storm Petrel",
        "sv": "Klykstjärtad stormsvala"
    }, {"sc": "Fulmarus glacialis", "en": "Northern Fulmar", "sv": "Stormfågel"}, {
        "sc": "Puffinus griseus",
        "en": "Sooty Shearwater",
        "sv": "grålira"
    }, {"sc": "Puffinus puffinus", "en": "Manx Shearwater", "sv": "Mindre lira"}, {
        "sc": "Tachybaptus ruficollis",
        "en": "Little Grebe",
        "sv": "Smådopping"
    }, {"sc": "Podiceps grisegena", "en": "Red-necked Grebe", "sv": "Gråhakedopping"}, {
        "sc": "Podiceps cristatus",
        "en": "Great Crested Grebe",
        "sv": "Skäggdopping"
    }, {"sc": "Podiceps auritus", "en": "Horned Grebe", "sv": "Svarthakedopping"}, {
        "sc": "Podiceps nigricollis",
        "en": "Black-necked Grebe",
        "sv": "Svarthalsad dopping"
    }, {"sc": "Ciconia nigra", "en": "Black Stork", "sv": "Svart stork"}, {
        "sc": "Ciconia ciconia",
        "en": "White Stork",
        "sv": "Vit stork"
    }, {"sc": "Botaurus stellaris", "en": "Eurasian Bittern", "sv": "Rördrom"}, {
        "sc": "Ardea cinerea",
        "en": "Grey Heron",
        "sv": "Gråhäger"
    }, {"sc": "Morus bassanus", "en": "Northern Gannet", "sv": "Havssula"}, {
        "sc": "Phalacrocorax aristotelis",
        "en": "European Shag",
        "sv": "Toppskarv"
    }, {"sc": "Phalacrocorax carbo", "en": "Great Cormorant", "sv": "storskarv"}, {
        "sc": "Pandion haliaetus",
        "en": "Western Osprey",
        "sv": "Fiskgjuse"
    }, {"sc": "Pernis apivorus", "en": "European Honey Buzzard", "sv": "Bivråk"}, {
        "sc": "Aquila chrysaetos",
        "en": "Golden Eagle",
        "sv": "Kungsörn"
    }, {"sc": "Accipiter nisus", "en": "Eurasian Sparrowhawk", "sv": "Sparvhök"}, {
        "sc": "Accipiter gentilis",
        "en": "Northern Goshawk",
        "sv": "Duvhök"
    }, {"sc": "Circus aeruginosus", "en": "Western Marsh Harrier", "sv": "Brun kärrhök"}, {
        "sc": "Circus cyaneus",
        "en": "Hen Harrier",
        "sv": "Blå kärrhök"
    }, {"sc": "Circus macrourus", "en": "Pallid Harrier", "sv": "Stäpphök"}, {
        "sc": "Circus pygargus",
        "en": "Montagu's Harrier",
        "sv": "Ängshök"
    }, {"sc": "Milvus milvus", "en": "Red Kite", "sv": "Röd glada"}, {
        "sc": "Milvus migrans",
        "en": "Black Kite",
        "sv": "brun glada"
    }, {"sc": "Haliaeetus albicilla", "en": "White-tailed Eagle", "sv": "Havsörn"}, {
        "sc": "Buteo lagopus",
        "en": "Rough-legged Buzzard",
        "sv": "Fjällvråk"
    }, {"sc": "Buteo buteo", "en": "Common Buzzard", "sv": "Ormvråk"}, {
        "sc": "Rallus aquaticus",
        "en": "Water Rail",
        "sv": "Vattenrall"
    }, {"sc": "Crex crex", "en": "Corn Crake", "sv": "Kornknarr"}, {
        "sc": "Porzana parva",
        "en": "Little Crake",
        "sv": "Mindre sumphöna"
    }, {"sc": "Porzana porzana", "en": "Spotted Crake", "sv": "Småfläckig sumphöna"}, {
        "sc": "Gallinula chloropus",
        "en": "Common Moorhen",
        "sv": "Rörhöna"
    }, {"sc": "Fulica atra", "en": "Eurasian Coot", "sv": "Sothöna"}, {
        "sc": "Grus grus",
        "en": "Common Crane",
        "sv": "Trana"
    }, {
        "sc": "Haematopus ostralegus",
        "en": "Eurasian Oystercatcher",
        "sv": "Strandskata"
    }, {"sc": "Recurvirostra avosetta", "en": "Pied Avocet", "sv": "Skärfläcka"}, {
        "sc": "Vanellus vanellus",
        "en": "Northern Lapwing",
        "sv": "Tofsvipa"
    }, {
        "sc": "Pluvialis apricaria",
        "en": "European Golden Plover",
        "sv": "Ljungpipare"
    }, {"sc": "Pluvialis squatarola", "en": "Grey Plover", "sv": "Kustpipare"}, {
        "sc": "Charadrius hiaticula",
        "en": "Common Ringed Plover",
        "sv": "Större strandpipare"
    }, {
        "sc": "Charadrius dubius",
        "en": "Little Ringed Plover",
        "sv": "Mindre strandpipare"
    }, {
        "sc": "Charadrius alexandrinus",
        "en": "Kentish Plover",
        "sv": "Svartbent strandpipare"
    }, {"sc": "Charadrius morinellus", "en": "Eurasian Dotterel", "sv": "Fjällpipare"}, {
        "sc": "Scolopax rusticola",
        "en": "Eurasian Woodcock",
        "sv": "Morkulla"
    }, {"sc": "Lymnocryptes minimus", "en": "Jack Snipe", "sv": "Dvärgbeckasin"}, {
        "sc": "Gallinago media",
        "en": "Great Snipe",
        "sv": "Dubbelbeckasin"
    }, {"sc": "Gallinago gallinago", "en": "Common Snipe", "sv": "Enkelbeckasin"}, {
        "sc": "Limosa limosa",
        "en": "Black-tailed Godwit",
        "sv": "Rödspov"
    }, {"sc": "Limosa lapponica", "en": "Bar-tailed Godwit", "sv": "Myrspov"}, {
        "sc": "Numenius phaeopus",
        "en": "Whimbrel",
        "sv": "Småspov"
    }, {"sc": "Numenius arquata", "en": "Eurasian Curlew", "sv": "Storspov"}, {
        "sc": "Tringa erythropus",
        "en": "Spotted Redshank",
        "sv": "Svartsnäppa"
    }, {"sc": "Tringa totanus", "en": "Common Redshank", "sv": "Rödbena"}, {
        "sc": "Tringa stagnatilis",
        "en": "Marsh Sandpiper",
        "sv": "Dammsnäppa"
    }, {"sc": "Tringa nebularia", "en": "Common Greenshank", "sv": "Gluttsnäppa"}, {
        "sc": "Tringa ochropus",
        "en": "Green Sandpiper",
        "sv": "Skogssnäppa"
    }, {"sc": "Tringa glareola", "en": "Wood Sandpiper", "sv": "Grönbena"}, {
        "sc": "Xenus cinereus",
        "en": "Terek Sandpiper",
        "sv": "Tereksnäppa"
    }, {"sc": "Actitis hypoleucos", "en": "Common Sandpiper", "sv": "Drillsnäppa"}, {
        "sc": "Arenaria interpres",
        "en": "Ruddy Turnstone",
        "sv": "Roskarl"
    }, {"sc": "Calidris canutus", "en": "Red Knot", "sv": "Kustsnäppa"}, {
        "sc": "Calidris alba",
        "en": "Sanderling",
        "sv": "Sandlöpare"
    }, {"sc": "Calidris minuta", "en": "Little Stint", "sv": "Småsnäppa"}, {
        "sc": "Calidris temminckii",
        "en": "Temminck's Stint",
        "sv": "Mosnäppa"
    }, {"sc": "Calidris melanotos", "en": "Pectoral Sandpiper", "sv": "Tuvsnäppa"}, {
        "sc": "Calidris ferruginea",
        "en": "Curlew Sandpiper",
        "sv": "Spovsnäppa"
    }, {"sc": "Calidris maritima", "en": "Purple Sandpiper", "sv": "Skärsnäppa"}, {
        "sc": "Calidris alpina",
        "en": "Dunlin",
        "sv": "Kärrsnäppa"
    }, {"sc": "Limicola falcinellus", "en": "Broad-billed Sandpiper", "sv": "Myrsnäppa"}, {
        "sc": "Philomachus pugnax",
        "en": "Ruff",
        "sv": "Brushane"
    }, {
        "sc": "Phalaropus lobatus",
        "en": "Red-necked Phalarope",
        "sv": "Smalnäbbad simsnäppa"
    }, {"sc": "Phalaropus fulicarius", "en": "Red Phalarope", "sv": "Brednäbbad simsnäppa"}, {
        "sc": "Rissa tridactyla",
        "en": "Black-legged Kittiwake",
        "sv": "Tretåig mås"
    }, {"sc": "Larus canus", "en": "Mew Gull", "sv": "Fiskmås"}, {
        "sc": "Larus marinus",
        "en": "Great Black-backed Gull",
        "sv": "Havstrut"
    }, {"sc": "Larus hyperboreus", "en": "Glaucous Gull", "sv": "Vittrut"}, {
        "sc": "Larus glaucoides",
        "en": "Iceland Gull",
        "sv": "Vitvingad trut"
    }, {"sc": "Larus argentatus", "en": "European Herring Gull", "sv": "Gråtrut"}, {
        "sc": "Larus cachinnans",
        "en": "Caspian Gull",
        "sv": "Kaspisk trut"
    }, {"sc": "Larus michahellis", "en": "Yellow-legged Gull", "sv": "Medelhavstrut"}, {
        "sc": "Larus fuscus",
        "en": "Lesser Black-backed Gull",
        "sv": "silltrut"
    }, {"sc": "Sterna hirundo", "en": "Common Tern", "sv": "Fisktärna"}, {
        "sc": "Sterna paradisaea",
        "en": "Arctic Tern",
        "sv": "Silvertärna"
    }, {"sc": "Chlidonias leucopterus", "en": "White-winged Tern", "sv": "Vitvingad tärna"}, {
        "sc": "Chlidonias niger",
        "en": "Black Tern",
        "sv": "Svarttärna"
    }, {
        "sc": "Stercorarius pomarinus",
        "en": "Pomarine Skua",
        "sv": "Bredstjärtad labb"
    }, {
        "sc": "Stercorarius parasiticus",
        "en": "Parasitic Jaeger",
        "sv": "Kustlabb"
    }, {"sc": "Stercorarius longicaudus", "en": "Long-tailed Jaeger", "sv": "Fjällabb"}, {
        "sc": "Alle alle",
        "en": "Little Auk",
        "sv": "Alkekung"
    }, {"sc": "Uria aalge", "en": "Common Murre", "sv": "Sillgrissla"}, {
        "sc": "Alca torda",
        "en": "Razorbill",
        "sv": "Tordmule"
    }, {"sc": "Cepphus grylle", "en": "Black Guillemot", "sv": "Tobisgrissla"}, {
        "sc": "Fratercula arctica",
        "en": "Atlantic Puffin",
        "sv": "Lunnefågel"
    }, {"sc": "Columba livia", "en": "Rock Dove", "sv": "Klippduva"}, {
        "sc": "Columba oenas",
        "en": "Stock Dove",
        "sv": "Skogsduva"
    }, {"sc": "Columba palumbus", "en": "Common Wood Pigeon", "sv": "Ringduva"}, {
        "sc": "Streptopelia turtur",
        "en": "European Turtle Dove",
        "sv": "Turturduva"
    }, {"sc": "Streptopelia decaocto", "en": "Eurasian Collared Dove", "sv": "Turkduva"}, {
        "sc": "Cuculus canorus",
        "en": "Common Cuckoo",
        "sv": "Gök"
    }, {"sc": "Tyto alba", "en": "Western Barn Owl", "sv": "tornuggla"}, {
        "sc": "Bubo scandiacus",
        "en": "Snowy Owl",
        "sv": "Fjälluggla"
    }, {"sc": "Bubo bubo", "en": "Eurasian Eagle-Owl", "sv": "Berguv"}, {
        "sc": "Strix aluco",
        "en": "Tawny Owl",
        "sv": "Kattuggla"
    }, {"sc": "Strix uralensis", "en": "Ural Owl", "sv": "Slaguggla"}, {
        "sc": "Strix nebulosa",
        "en": "Great Grey Owl",
        "sv": "Lappuggla"
    }, {"sc": "Surnia ulula", "en": "Northern Hawk-Owl", "sv": "Hökuggla"}, {
        "sc": "Glaucidium passerinum",
        "en": "Eurasian Pygmy Owl",
        "sv": "Sparvuggla"
    }, {"sc": "Aegolius funereus", "en": "Boreal Owl", "sv": "Pärluggla"}, {
        "sc": "Asio otus",
        "en": "Long-eared Owl",
        "sv": "Hornuggla"
    }, {"sc": "Asio flammeus", "en": "Short-eared Owl", "sv": "Jorduggla"}, {
        "sc": "Caprimulgus europaeus",
        "en": "European Nightjar",
        "sv": "Nattskärra"
    }, {"sc": "Apus apus", "en": "Common Swift", "sv": "Tornseglare"}, {
        "sc": "Alcedo atthis",
        "en": "Common Kingfisher",
        "sv": "Kungsfiskare"
    }, {"sc": "Merops apiaster", "en": "European Bee-eater", "sv": "Biätare"}, {
        "sc": "Upupa epops",
        "en": "Eurasian Hoopoe",
        "sv": "Härfågel"
    }, {"sc": "Jynx torquilla", "en": "Eurasian Wryneck", "sv": "Göktyta"}, {
        "sc": "Dendrocopos minor",
        "en": "Lesser Spotted Woodpecker",
        "sv": "Mindre hackspett"
    }, {
        "sc": "Dendrocopos medius",
        "en": "Middle Spotted Woodpecker",
        "sv": "Mellanspett"
    }, {
        "sc": "Dendrocopos leucotos",
        "en": "White-backed Woodpecker",
        "sv": "vitryggig hackspett"
    }, {
        "sc": "Dendrocopos major",
        "en": "Great Spotted Woodpecker",
        "sv": "Större hackspett"
    }, {
        "sc": "Picoides tridactylus",
        "en": "Eurasian Three-toed Woodpecker",
        "sv": "Tretåig hackspett"
    }, {"sc": "Dryocopus martius", "en": "Black Woodpecker", "sv": "Spillkråka"}, {
        "sc": "Picus viridis",
        "en": "European Green Woodpecker",
        "sv": "Gröngöling"
    }, {"sc": "Picus canus", "en": "Grey-headed Woodpecker", "sv": "Gråspett"}, {
        "sc": "Falco tinnunculus",
        "en": "Common Kestrel",
        "sv": "tornfalk"
    }, {"sc": "Falco vespertinus", "en": "Red-footed Falcon", "sv": "Aftonfalk"}, {
        "sc": "Falco columbarius",
        "en": "Merlin",
        "sv": "Stenfalk"
    }, {"sc": "Falco subbuteo", "en": "Eurasian Hobby", "sv": "Lärkfalk"}, {
        "sc": "Falco rusticolus",
        "en": "Gyrfalcon",
        "sv": "Jaktfalk"
    }, {"sc": "Falco peregrinus", "en": "Peregrine Falcon", "sv": "Pilgrimsfalk"}, {
        "sc": "Lanius collurio",
        "en": "Red-backed Shrike",
        "sv": "Törnskata"
    }, {"sc": "Lanius minor", "en": "Lesser Grey Shrike", "sv": "Svartpannad törnskata"}, {
        "sc": "Lanius excubitor",
        "en": "Great Grey Shrike",
        "sv": "Varfågel"
    }, {"sc": "Oriolus oriolus", "en": "Eurasian Golden Oriole", "sv": "Sommargylling"}, {
        "sc": "Perisoreus infaustus",
        "en": "Siberian Jay",
        "sv": "Lavskrika"
    }, {"sc": "Garrulus glandarius", "en": "Eurasian Jay", "sv": "Nötskrika"}, {
        "sc": "Pica pica",
        "en": "Eurasian Magpie",
        "sv": "skata"
    }, {"sc": "Nucifraga caryocatactes", "en": "Spotted Nutcracker", "sv": "Nötkråka"}, {
        "sc": "Corvus frugilegus",
        "en": "Rook",
        "sv": "Råka"
    }, {"sc": "Corvus corone", "en": "Carrion Crow", "sv": "Svartkråka"}, {
        "sc": "Corvus corax",
        "en": "Northern Raven",
        "sv": "Korp"
    }, {"sc": "Bombycilla garrulus", "en": "Bohemian Waxwing", "sv": "Sidensvans"}, {
        "sc": "Parus major",
        "en": "Great Tit",
        "sv": "talgoxe"
    }, {"sc": "Remiz pendulinus", "en": "Eurasian Penduline Tit", "sv": "Pungmes"}, {
        "sc": "Panurus biarmicus",
        "en": "Bearded Reedling",
        "sv": "Skäggmes"
    }, {"sc": "Lullula arborea", "en": "Woodlark", "sv": "Trädlärka"}, {
        "sc": "Alauda arvensis",
        "en": "Eurasian Skylark",
        "sv": "Sånglärka"
    }, {"sc": "Galerida cristata", "en": "Crested Lark", "sv": "Tofslärka"}, {
        "sc": "Eremophila alpestris",
        "en": "Horned Lark",
        "sv": "Berglärka"
    }, {
        "sc": "Calandrella brachydactyla",
        "en": "Greater Short-toed Lark",
        "sv": "Korttålärka"
    }, {"sc": "Riparia riparia", "en": "Sand Martin", "sv": "Backsvala"}, {
        "sc": "Hirundo rustica",
        "en": "Barn Swallow",
        "sv": "Ladusvala"
    }, {"sc": "Delichon urbicum", "en": "Common House Martin", "sv": "Hussvala"}, {
        "sc": "Aegithalos caudatus",
        "en": "Long-tailed Tit",
        "sv": "Stjärtmes"
    }, {"sc": "Phylloscopus trochilus", "en": "Willow Warbler", "sv": "Lövsångare"}, {
        "sc": "Phylloscopus collybita",
        "en": "Common Chiffchaff",
        "sv": "Gransångare"
    }, {"sc": "Phylloscopus sibilatrix", "en": "Wood Warbler", "sv": "Grönsångare"}, {
        "sc": "Phylloscopus proregulus",
        "en": "Pallas's Leaf Warbler",
        "sv": "Kungsfågelsångare"
    }, {
        "sc": "Phylloscopus inornatus",
        "en": "Yellow-browed Warbler",
        "sv": "tajgasångare"
    }, {"sc": "Phylloscopus borealis", "en": "Arctic Warbler", "sv": "Nordsångare"}, {
        "sc": "Phylloscopus trochiloides",
        "en": "Greenish Warbler",
        "sv": "Lundsångare"
    }, {
        "sc": "Acrocephalus arundinaceus",
        "en": "Great Reed Warbler",
        "sv": "Trastsångare"
    }, {"sc": "Acrocephalus schoenobaenus", "en": "Sedge Warbler", "sv": "Sävsångare"}, {
        "sc": "Acrocephalus dumetorum",
        "en": "Blyth's Reed Warbler",
        "sv": "Busksångare"
    }, {
        "sc": "Acrocephalus scirpaceus",
        "en": "Eurasian Reed Warbler",
        "sv": "Rörsångare"
    }, {"sc": "Acrocephalus palustris", "en": "Marsh Warbler", "sv": "Kärrsångare"}, {
        "sc": "Hippolais icterina",
        "en": "Icterine Warbler",
        "sv": "Härmsångare"
    }, {
        "sc": "Locustella naevia",
        "en": "Common Grasshopper Warbler",
        "sv": "gräshoppsångare"
    }, {"sc": "Locustella fluviatilis", "en": "River Warbler", "sv": "Flodsångare"}, {
        "sc": "Locustella luscinioides",
        "en": "Savi's Warbler",
        "sv": "Vassångare"
    }, {"sc": "Sylvia atricapilla", "en": "Eurasian Blackcap", "sv": "Svarthätta"}, {
        "sc": "Sylvia borin",
        "en": "Garden Warbler",
        "sv": "Trädgårdssångare"
    }, {"sc": "Sylvia nisoria", "en": "Barred Warbler", "sv": "Höksångare"}, {
        "sc": "Sylvia curruca",
        "en": "Lesser Whitethroat",
        "sv": "ärtsångare"
    }, {"sc": "Sylvia communis", "en": "Common Whitethroat", "sv": "Törnsångare"}, {
        "sc": "Regulus regulus",
        "en": "Goldcrest",
        "sv": "Kungsfågel"
    }, {"sc": "Troglodytes troglodytes", "en": "Eurasian Wren", "sv": "Gärdsmyg"}, {
        "sc": "Sitta europaea",
        "en": "Eurasian Nuthatch",
        "sv": "Nötväcka"
    }, {"sc": "Certhia familiaris", "en": "Eurasian Treecreeper", "sv": "Trädkrypare"}, {
        "sc": "Sturnus vulgaris",
        "en": "Common Starling",
        "sv": "Stare"
    }, {"sc": "Turdus torquatus", "en": "Ring Ouzel", "sv": "Ringtrast"}, {
        "sc": "Turdus merula",
        "en": "Common Blackbird",
        "sv": ""
    }, {"sc": "Turdus pilaris", "en": "Fieldfare", "sv": "Björktrast"}, {
        "sc": "Turdus iliacus",
        "en": "Redwing",
        "sv": "Rödvingetrast"
    }, {"sc": "Turdus philomelos", "en": "Song Thrush", "sv": "Taltrast"}, {
        "sc": "Turdus viscivorus",
        "en": "Mistle Thrush",
        "sv": "Dubbeltrast"
    }, {"sc": "Muscicapa striata", "en": "Spotted Flycatcher", "sv": "Grå flugsnappare"}, {
        "sc": "Erithacus rubecula",
        "en": "European Robin",
        "sv": "Rödhake"
    }, {"sc": "Luscinia svecica", "en": "Bluethroat", "sv": "Blåhake"}, {
        "sc": "Luscinia luscinia",
        "en": "Thrush Nightingale",
        "sv": "Näktergal"
    }, {
        "sc": "Ficedula hypoleuca",
        "en": "European Pied Flycatcher",
        "sv": "Svartvit flugsnappare"
    }, {
        "sc": "Ficedula albicollis",
        "en": "Collared Flycatcher",
        "sv": "Halsbandsflugsnappare"
    }, {
        "sc": "Ficedula parva",
        "en": "Red-breasted Flycatcher",
        "sv": "Mindre flugsnappare"
    }, {
        "sc": "Phoenicurus ochruros",
        "en": "Black Redstart",
        "sv": "Svart rödstjärt"
    }, {"sc": "Phoenicurus phoenicurus", "en": "Common Redstart", "sv": "Rödstjärt"}, {
        "sc": "Saxicola rubetra",
        "en": "Whinchat",
        "sv": "Buskskvätta"
    }, {
        "sc": "Saxicola torquatus",
        "en": "African Stonechat",
        "sv": "afrikansk buskskvätta"
    }, {"sc": "Oenanthe oenanthe", "en": "Northern Wheatear", "sv": "Stenskvätta"}, {
        "sc": "Cinclus cinclus",
        "en": "White-throated Dipper",
        "sv": "Strömstare"
    }, {"sc": "Passer domesticus", "en": "House Sparrow", "sv": "Gråsparv"}, {
        "sc": "Passer montanus",
        "en": "Eurasian Tree Sparrow",
        "sv": "Pilfink"
    }, {"sc": "Prunella modularis", "en": "Dunnock", "sv": "Järnsparv"}, {
        "sc": "Motacilla flava",
        "en": "Western Yellow Wagtail",
        "sv": "gulärla"
    }, {"sc": "Motacilla citreola", "en": "Citrine Wagtail", "sv": "Citronärla"}, {
        "sc": "Motacilla cinerea",
        "en": "Grey Wagtail",
        "sv": "Forsärla"
    }, {"sc": "Motacilla alba", "en": "White Wagtail", "sv": "sädesärla"}, {
        "sc": "Anthus richardi",
        "en": "Richard's Pipit",
        "sv": "Större piplärka"
    }, {"sc": "Anthus campestris", "en": "Tawny Pipit", "sv": "Fältpiplärka"}, {
        "sc": "Anthus pratensis",
        "en": "Meadow Pipit",
        "sv": "Ängspiplärka"
    }, {"sc": "Anthus trivialis", "en": "Tree Pipit", "sv": "Trädpiplärka"}, {
        "sc": "Anthus cervinus",
        "en": "Red-throated Pipit",
        "sv": "Rödstrupig piplärka"
    }, {"sc": "Anthus spinoletta", "en": "Water Pipit", "sv": "Vattenpiplärka"}, {
        "sc": "Anthus petrosus",
        "en": "Eurasian Rock Pipit",
        "sv": "Skärpiplärka"
    }, {"sc": "Fringilla coelebs", "en": "Common Chaffinch", "sv": "Bofink"}, {
        "sc": "Fringilla montifringilla",
        "en": "Brambling",
        "sv": "Bergfink"
    }, {"sc": "Coccothraustes coccothraustes", "en": "Hawfinch", "sv": "Stenknäck"}, {
        "sc": "Pinicola enucleator",
        "en": "Pine Grosbeak",
        "sv": "Tallbit"
    }, {"sc": "Pyrrhula pyrrhula", "en": "Eurasian Bullfinch", "sv": "Domherre"}, {
        "sc": "Carpodacus erythrinus",
        "en": "Common Rosefinch",
        "sv": "Rosenfink"
    }, {"sc": "Loxia pytyopsittacus", "en": "Parrot Crossbill", "sv": "Större korsnäbb"}, {
        "sc": "Loxia curvirostra",
        "en": "Red Crossbill",
        "sv": "Mindre korsnäbb"
    }, {"sc": "Loxia leucoptera", "en": "Two-barred Crossbill", "sv": "Bändelkorsnäbb"}, {
        "sc": "Carduelis carduelis",
        "en": "European Goldfinch",
        "sv": "Steglits"
    }, {"sc": "Serinus serinus", "en": "European Serin", "sv": "Gulhämpling"}, {
        "sc": "Emberiza calandra",
        "en": "Corn Bunting",
        "sv": "Kornsparv"
    }, {"sc": "Emberiza citrinella", "en": "Yellowhammer", "sv": "Gulsparv"}, {
        "sc": "Emberiza hortulana",
        "en": "Ortolan Bunting",
        "sv": "Ortolansparv"
    }, {"sc": "Emberiza pusilla", "en": "Little Bunting", "sv": "Dvärgsparv"}, {
        "sc": "Emberiza rustica",
        "en": "Rustic Bunting",
        "sv": "Videsparv"
    }, {"sc": "Emberiza schoeniclus", "en": "Common Reed Bunting", "sv": "Sävsparv"}, {
        "sc": "Calcarius lapponicus",
        "en": "Lapland Longspur",
        "sv": "Lappsparv"
    }, {"sc": "Plectrophenax nivalis", "en": "Snow Bunting", "sv": "Snösparv"}];
};