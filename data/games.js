const gamesData = [
  {
    "name": "Earn To Die 100%",
    "releasedate": "2014",
    "type": "Mobile",
    "genre": "Driver",
    "rating": "7.2"
  },
  {
    "name": "Evoland",
    "releasedate": "2013",
    "type": "Mobile",
    "genre": "Adventure",
    "rating": "8.5"
  },
  {
    "name": "KIDS",
    "releasedate": "2019",
    "type": "Indie",
    "genre": "Adventure",
    "rating": "7.0"
  },
  {
    "name": "Plug & Play",
    "releasedate": "2015",
    "type": "Indie",
    "genre": "Adventure",
    "rating": "7.0"
  },
  {
    "name": "Call of Duty: Modern Warfare 2",
    "releasedate": "2009",
    "type": "AAA",
    "genre": "FPS",
    "rating": "9.3"
  },
  {
    "name": "The Room",
    "releasedate": "2012",
    "type": "Indie",
    "genre": "Puzzle",
    "rating": "7.8"
  },
  {
    "name": "The Room Two",
    "releasedate": "2013",
    "type": "Indie",
    "genre": "Puzzle",
    "rating": "7.5"
  },
  {
    "name": "The Room Three",
    "releasedate": "2015",
    "type": "Indie",
    "genre": "Puzzle",
    "rating": "7.5"
  },
  {
    "name": "Rayman Legends 100%",
    "releasedate": "2013",
    "type": "AA",
    "genre": "Platformer",
    "rating": "9.5"
  },
  {
    "name": "Cluster Truck",
    "releasedate": "2016",
    "type": "Indie",
    "genre": "Parkour",
    "rating": "8.5"
  },
  {
    "name": "Internet Cafe Simulator",
    "releasedate": "2019",
    "type": "Indie",
    "genre": "Simulation",
    "rating": "7.4"
  },
  {
    "name": "Grand Theft Auto: Vice City 100%",
    "releasedate": "2002",
    "type": "AAA",
    "genre": "Open World",
    "rating": "9.7"
  },
  {
    "name": "House Flipper",
    "releasedate": "2018",
    "type": "Indie",
    "genre": "Simulation",
    "rating": "9.0"
  },
  {
    "name": "Sword With Sauce",
    "releasedate": "2018",
    "type": "Indie",
    "genre": "Action",
    "rating": "7.0"
  },
  {
    "name": "GRIS",
    "releasedate": "2018",
    "type": "Indie",
    "genre": "Platformer",
    "rating": "8.8"
  },
  {
    "name": "Paint The Town Red",
    "releasedate": "2015",
    "type": "Indie",
    "genre": "Action",
    "rating": "7.6"
  },
  {
    "name": "Outlast w/dlc",
    "releasedate": "2013",
    "type": "Indie",
    "genre": "Horror",
    "rating": "7.4"
  },
  {
    "name": "Hotline Miami",
    "releasedate": "2012",
    "type": "Indie",
    "genre": "Action",
    "rating": "8.9"
  },
  {
    "name": "Journey",
    "releasedate": "2012",
    "type": "Indie",
    "genre": "Walking Sim",
    "rating": "8.0"
  },
  {
    "name": "Slime Rancher",
    "releasedate": "2016",
    "type": "Indie",
    "genre": "Sandbox",
    "rating": "8.7"
  },
  {
    "name": "CHANGE: A Homeless Survival Experience",
    "releasedate": "2018",
    "type": "Indie",
    "genre": "Survival",
    "rating": "8.2"
  },
  {
    "name": "Thief Simulator",
    "releasedate": "2018",
    "type": "Indie",
    "genre": "Simulation",
    "rating": "8.5"
  },
  {
    "name": "Viscera Cleanup Detail w/dlcs",
    "releasedate": "2015",
    "type": "Indie",
    "genre": "Simulation",
    "rating": "8.6"
  },
  {
    "name": "Ship Graveyard Simulator 2",
    "releasedate": "2023",
    "type": "Indie",
    "genre": "Simulation",
    "rating": "7.1"
  },
  {
    "name": "Dealer's Life",
    "releasedate": "2018",
    "type": "Indie",
    "genre": "Tycoon",
    "rating": "7.8"
  },
  {
    "name": "Forager",
    "releasedate": "2019",
    "type": "Indie",
    "genre": "Survival",
    "rating": "8.5"
  },
  {
    "name": "The Exit 8",
    "releasedate": "2023",
    "type": "Indie",
    "genre": "Horror",
    "rating": "7.3"
  },
  {
    "name": "Shinkansen 0",
    "releasedate": "2024",
    "type": "Indie",
    "genre": "Horror",
    "rating": "7.0"
  },
  {
    "name": "False Dream",
    "releasedate": "2024",
    "type": "Indie",
    "genre": "Horror",
    "rating": "7.2"
  },
  {
    "name": "Let's Find Larry!",
    "releasedate": "2023",
    "type": "Indie",
    "genre": "Horror",
    "rating": "7.6"
  },
  {
    "name": "Minecraft Dungeons",
    "releasedate": "2020",
    "type": "AA",
    "genre": "Action-Adventure",
    "rating": "7.8"
  },
  {
    "name": "Satisfactory",
    "releasedate": "2019",
    "type": "Indie",
    "genre": "Sandbox",
    "rating": "9.3"
  },
  {
    "name": "Palworld",
    "releasedate": "2024",
    "type": "Indie",
    "genre": "Open World",
    "rating": "8.4"
  },
  {
    "name": "Poly Bridge",
    "releasedate": "2016",
    "type": "Indie",
    "genre": "Builder",
    "rating": "7.6"
  },
  {
    "name": "Core Keeper",
    "releasedate": "2021",
    "type": "Indie",
    "genre": "Survival",
    "rating": "7.8"
  },
  {
    "name": "The Legend of Zelda: Breath of The Wild",
    "releasedate": "2017",
    "type": "AAA",
    "genre": "Open World",
    "rating": "9.8"
  },
  {
    "name": "Raft",
    "releasedate": "2018",
    "type": "Indie",
    "genre": "Survival",
    "rating": "8.2"
  },
  {
    "name": "Plants Vs. Zombies 100%",
    "releasedate": "2009",
    "type": "Indie",
    "genre": "Tower Defense",
    "rating": "8.5"
  },
  {
    "name": "Plants Vs. Zombies Fusion",
    "releasedate": "2024",
    "type": "Mod",
    "genre": "Tower Defense",
    "rating": "8.5"
  },
  {
    "name": "Elden Ring",
    "releasedate": "2022",
    "type": "AAA",
    "genre": "Souls-Like",
    "rating": "9.7"
  },
  {
    "name": "Powerwash Simulator",
    "releasedate": "2021",
    "type": "Indie",
    "genre": "Simulation",
    "rating": "8.2"
  },
  {
    "name": "Marvel's Spider-Man w/dlcs 100%",
    "releasedate": "2018",
    "type": "AAA",
    "genre": "Open World",
    "rating": "9.7"
  },
  {
    "name": "Marvel's Spider-Man 2 100%",
    "releasedate": "2023",
    "type": "AAA",
    "genre": "Open World",
    "rating": "9.5"
  },
  {
    "name": "Marvel's Spider-Man: Miles Morales 100%",
    "releasedate": "2020",
    "type": "AAA",
    "genre": "Open World",
    "rating": "9.5"
  },
  {
    "name": "Rogue Legacy 100%",
    "releasedate": "2013",
    "type": "Indie",
    "genre": "Rogue-Like",
    "rating": "8.0"
  },
  {
    "name": "Minecraft: GalacticCraft",
    "releasedate": "2013",
    "type": "Mod",
    "genre": "Survival",
    "rating": "9.5"
  },
  {
    "name": "Minecraft: Tekxit 3",
    "releasedate": "2018",
    "type": "Mod",
    "genre": "Survival",
    "rating": "9.2"
  },
  {
    "name": "The Walking Dead Season 1",
    "releasedate": "2012",
    "type": "AA",
    "genre": "Point & Click",
    "rating": "8.6"
  },
  {
    "name": "The Walking Dead Season 2",
    "releasedate": "2013",
    "type": "AA",
    "genre": "Point & Click",
    "rating": "8.2"
  },
  {
    "name": "The Walking Dead Season 3",
    "releasedate": "2016",
    "type": "AA",
    "genre": "Point & Click",
    "rating": "8.4"
  },
  {
    "name": "The Walking Dead 400 Days",
    "releasedate": "2013",
    "type": "AA",
    "genre": "Point & Click",
    "rating": "7.8"
  },
  {
    "name": "God of War",
    "releasedate": "2018",
    "type": "AAA",
    "genre": "Action-Adventure",
    "rating": "8.4"
  },
  {
    "name": "Superliminal",
    "releasedate": "2019",
    "type": "Indie",
    "genre": "Puzzle",
    "rating": "8.4"
  },
  {
    "name": "Viewfinder",
    "releasedate": "2023",
    "type": "Indie",
    "genre": "Puzzle",
    "rating": "8.6"
  },
  {
    "name": "What The Golf?",
    "releasedate": "2019",
    "type": "Indie",
    "genre": "Simulation",
    "rating": "8.5"
  },
  {
    "name": "Stray",
    "releasedate": "2022",
    "type": "Indie",
    "genre": "Adventure",
    "rating": "8.0"
  },
  {
    "name": "Biped",
    "releasedate": "2020",
    "type": "Co-Op",
    "genre": "Puzzle",
    "rating": "8.4"
  },
  {
    "name": "A Plague Tale: Innocence",
    "releasedate": "2019",
    "type": "AA",
    "genre": "Adventure",
    "rating": "7.8"
  },
  {
    "name": "My Friend Pedro",
    "releasedate": "2019",
    "type": "Indie",
    "genre": "Action",
    "rating": "8.5"
  },
  {
    "name": "Stardew Valley",
    "releasedate": "2016",
    "type": "Multiplayer",
    "genre": "Survival",
    "rating": "8.8"
  },
  {
    "name": "Ranch Simulator",
    "releasedate": "2021",
    "type": "Multiplayer",
    "genre": "Farming",
    "rating": "8.4"
  },
  {
    "name": "Papa's Burgeria",
    "releasedate": "2010",
    "type": "Indie",
    "genre": "Cooking",
    "rating": "7.4"
  },
  {
    "name": "Tetramon Card Shop Simulator",
    "releasedate": "2024",
    "type": "Indie",
    "genre": "Simulation",
    "rating": "8.0"
  },
  {
    "name": "Crypto Miner Tycoon Simulator",
    "releasedate": "2022",
    "type": "Indie",
    "genre": "Tycoon",
    "rating": "7.0"
  },
  {
    "name": "Mount & Blade: Warband",
    "releasedate": "2010",
    "type": "AA",
    "genre": "Open World",
    "rating": "8.2"
  },
  {
    "name": "Mount & Blade II: Bannerlord",
    "releasedate": "2022",
    "type": "AA",
    "genre": "Open World",
    "rating": "8.8"
  },
  {
    "name": "Max Payne",
    "releasedate": "2001",
    "type": "AA",
    "genre": "Action",
    "rating": "9.8"
  },
  {
    "name": "Max Payne 2",
    "releasedate": "2003",
    "type": "AA",
    "genre": "Action",
    "rating": "9.4"
  },
  {
    "name": "Max Payne 3",
    "releasedate": "2012",
    "type": "AA",
    "genre": "Action",
    "rating": "7.4"
  },
  {
    "name": "Graveyard Keeper",
    "releasedate": "2018",
    "type": "Indie",
    "genre": "Adventure",
    "rating": "8.0"
  },
  {
    "name": "Half-Life",
    "releasedate": "1998",
    "type": "AAA",
    "genre": "Action",
    "rating": "9.9"
  },
  {
    "name": "Lost But Found",
    "releasedate": "2024",
    "type": "Indie",
    "genre": "Simulation",
    "rating": "7.6"
  },
  {
    "name": "Storyteller",
    "releasedate": "2023",
    "type": "Indie",
    "genre": "Puzzle",
    "rating": "7.2"
  },
  {
    "name": "Bread & Fred",
    "releasedate": "2023",
    "type": "Co-Op",
    "genre": "Foddy-Like",
    "rating": "7.8"
  },
  {
    "name": "Mob Factory",
    "releasedate": "2023",
    "type": "Indie",
    "genre": "Tower Defense",
    "rating": "8.5"
  },
  {
    "name": "A Game About Digging A Hole",
    "releasedate": "2025",
    "type": "Indie",
    "genre": "Sandbox",
    "rating": "7.0"
  },
  {
    "name": "Doom 2 My House",
    "releasedate": "2023",
    "type": "Mod",
    "genre": "Action",
    "rating": "7.4"
  },
  {
    "name": "Super Mario Odyssey",
    "releasedate": "2017",
    "type": "AAA",
    "genre": "Platformer",
    "rating": "9.1"
  },
  {
    "name": "Super Mario Bros. Wonder",
    "releasedate": "2023",
    "type": "AAA",
    "genre": "Platformer",
    "rating": "9.3"
  },
  {
    "name": "Pokemon Fire Red",
    "releasedate": "1996",
    "type": "AAA",
    "genre": "JRPG",
    "rating": "9.0"
  },
  {
    "name": "Exotica Petshop Simulator",
    "releasedate": "2024",
    "type": "Indie",
    "genre": "Simulation",
    "rating": "7.0"
  },
  {
    "name": "Star of Providence",
    "releasedate": "2017",
    "type": "Indie",
    "genre": "Rogue-Like",
    "rating": "8.5"
  },
  {
    "name": "Pokemon Yellow",
    "releasedate": "1998",
    "type": "AAA",
    "genre": "JRPG",
    "rating": "9.1"
  },
  {
    "name": "Death Stranding",
    "releasedate": "2019",
    "type": "AAA",
    "genre": "Stranding-Like",
    "rating": "7.8"
  },
  {
    "name": "Cities: Skylines",
    "releasedate": "2015",
    "type": "AA",
    "genre": "Builder",
    "rating": "8.6"
  },
  {
    "name": "Cities: Skylines 2",
    "releasedate": "2023",
    "type": "AA",
    "genre": "Builder",
    "rating": "8.4"
  },
  {
    "name": "Stimulation Clicker",
    "releasedate": "2025",
    "type": "Indie",
    "genre": "Neal-Like",
    "rating": "7.5"
  },
  {
    "name": "Dysmantle w/dlcs",
    "releasedate": "2020",
    "type": "Indie",
    "genre": "Open World",
    "rating": "7.8"
  },
  {
    "name": "Slime Rancher 2",
    "releasedate": "2025",
    "type": "Indie",
    "genre": "Sandbox",
    "rating": "8.0"
  },
  {
    "name": "Surgeon Simulator",
    "releasedate": "2013",
    "type": "Indie",
    "genre": "Simulation",
    "rating": "7.6"
  },
  {
    "name": "Stranded Deep",
    "releasedate": "2015",
    "type": "Indie",
    "genre": "Survival",
    "rating": "8.2"
  },
  {
    "name": "Stacklands",
    "releasedate": "2022",
    "type": "Indie",
    "genre": "Card Game",
    "rating": "8.6"
  },
  {
    "name": "Pokemon HeartGold",
    "releasedate": "2009",
    "type": "AAA",
    "genre": "JRPG",
    "rating": "7.8"
  },
  {
    "name": "Get To Work",
    "releasedate": "2024",
    "type": "Indie",
    "genre": "Foddy-Like",
    "rating": "7.3"
  },
  {
    "name": "Furious Fish",
    "releasedate": "2024",
    "type": "Indie",
    "genre": "Foddy-Like",
    "rating": "6.5"
  },
  {
    "name": "Pokemon Violet",
    "releasedate": "2022",
    "type": "AAA",
    "genre": "JRPG",
    "rating": "7.2"
  },
  {
    "name": "Unpacking",
    "releasedate": "2021",
    "type": "Indie",
    "genre": "Puzzle",
    "rating": "7.4"
  },
  {
    "name": "Don't Starve",
    "releasedate": "2013",
    "type": "Indie",
    "genre": "Survival",
    "rating": "8.8"
  },
  {
    "name": "Sekiro: Shadows Die Twice",
    "releasedate": "2019",
    "type": "AAA",
    "genre": "Souls-Like",
    "rating": "8.5"
  },
  {
    "name": "I Am Fish",
    "releasedate": "2021",
    "type": "Indie",
    "genre": "Adventure",
    "rating": "7.5"
  },
  {
    "name": "Kirby And The Forgotten Land",
    "releasedate": "2022",
    "type": "AAA",
    "genre": "Platformer",
    "rating": "8.5"
  },
  {
    "name": "Plate Up",
    "releasedate": "2022",
    "type": "Co-Op",
    "genre": "Cooking",
    "rating": "8.8"
  },
  {
    "name": "Storage Hunter Simulator",
    "releasedate": "2025",
    "type": "Indie",
    "genre": "Simulator",
    "rating": "7.0"
  },
  {
    "name": "TMNT",
    "releasedate": "2003",
    "type": "Co-Op",
    "genre": "Beat 'em Up",
    "rating": "8.9"
  },
  {
    "name": "A Way Out",
    "releasedate": "2018",
    "type": "Co-Op",
    "genre": "Action-Adventure",
    "rating": "7.5"
  },
  {
    "name": "Moving Out",
    "releasedate": "2020",
    "type": "Co-Op",
    "genre": "Puzzle",
    "rating": "7.0"
  },
  {
    "name": "Overcooked",
    "releasedate": "2016",
    "type": "Co-Op",
    "genre": "Cooking",
    "rating": "8.2"
  },
  {
    "name": "Don't Starve Shipwrecked",
    "releasedate": "2015",
    "type": "Indie",
    "genre": "Survival",
    "rating": "8.3"
  },
  {
    "name": "UFO50",
    "releasedate": "2024",
    "type": "Co-Op",
    "genre": "Collection",
    "rating": "7.5"
  },
  {
    "name": "Prison Architect",
    "releasedate": "2015",
    "type": "Indie",
    "genre": "Builder",
    "rating": "8.0"
  },
  {
    "name": "Cat Quest 3",
    "releasedate": "2024",
    "type": "Indie",
    "genre": "Action-Adventure",
    "rating": "7.6"
  },
  {
    "name": "Hollow Knight",
    "releasedate": "2017",
    "type": "Indie",
    "genre": "Metroidvania",
    "rating": "8.4"
  },
  {
    "name": "Halo: Combat Evolved",
    "releasedate": "2001",
    "type": "AAA",
    "genre": "Open World",
    "rating": "8.2"
  },
  {
    "name": "Halo 2",
    "releasedate": "2004",
    "type": "AAA",
    "genre": "Open World",
    "rating": "8.3"
  },
  {
    "name": "Halo 3",
    "releasedate": "2007",
    "type": "AAA",
    "genre": "Open World",
    "rating": "8.0"
  },
  {
    "name": "Halo 4",
    "releasedate": "2012",
    "type": "AAA",
    "genre": "Open World",
    "rating": "7.8"
  },
  {
    "name": "Halo: Reach",
    "releasedate": "2010",
    "type": "AAA",
    "genre": "Open World",
    "rating": "7.7"
  },
  {
    "name": "Halo: ODST",
    "releasedate": "2009",
    "type": "AAA",
    "genre": "Open World",
    "rating": "7.6"
  },
  {
    "name": "Fallout",
    "releasedate": "1997",
    "type": "AAA",
    "genre": "Open World",
    "rating": "8.9"
  },
  {
    "name": "The Long Dark",
    "releasedate": "2017",
    "type": "AA",
    "genre": "Survival",
    "rating": "8.4"
  },
  {
    "name": "Disco Elysium",
    "releasedate": "2019",
    "type": "AA",
    "genre": "RPG",
    "rating": "8.9"
  },
  {
    "name": "Dragon Quest Builders 2",
    "releasedate": "2019",
    "type": "AAA",
    "genre": "RPG",
    "rating": "8.4"
  },
  {
    "name": "ARK: Survival Evolved",
    "releasedate": "2017",
    "type": "AA",
    "genre": "Survival",
    "rating": "8.2"
  },
  {
    "name": "Gas Station Simulator",
    "releasedate": "2021",
    "type": "Indie",
    "genre": "Simulation",
    "rating": "8.0"
  },
  {
    "name": "Hydroneer",
    "releasedate": "2020",
    "type": "Indie",
    "genre": "Sandbox",
    "rating": "7.6"
  },
  {
    "name": "Prison Escape Simulator",
    "releasedate": "2025",
    "type": "Indie",
    "genre": "Simulation",
    "rating": "7.0"
  },
  {
    "name": "Fallout 2",
    "releasedate": "1998",
    "type": "AAA",
    "genre": "Open World",
    "rating": "8.6"
  },
  {
    "name": "Fallout 3",
    "releasedate": "2008",
    "type": "AAA",
    "genre": "Open World",
    "rating": "8.7"
  },
  {
    "name": "Fallout 4",
    "releasedate": "2015",
    "type": "AAA",
    "genre": "Open World",
    "rating": "8.3"
  },
  {
    "name": "Fallout: New Vegas",
    "releasedate": "2010",
    "type": "AAA",
    "genre": "Open World",
    "rating": "9.4"
  },
  {
    "name": "The Stanley Parable Ultra Deluxe",
    "releasedate": "2022",
    "type": "Indie",
    "genre": "Walking Sim",
    "rating": "8.8"
  },
  {
    "name": "The Stanley Parable",
    "releasedate": "2013",
    "type": "Indie",
    "genre": "Walking Sim",
    "rating": "8.4"
  },
  {
    "name": "The Turing Test",
    "releasedate": "2016",
    "type": "Indie",
    "genre": "Puzzle",
    "rating": "8.7"
  },
  {
    "name": "Firewatch",
    "releasedate": "2016",
    "type": "Indie",
    "genre": "Adventure",
    "rating": "7.8"
  },
  {
    "name": "SOMA",
    "releasedate": "2015",
    "type": "Indie",
    "genre": "Horror",
    "rating": "9.0"
  },
  {
    "name": "KONA",
    "releasedate": "2017",
    "type": "Indie",
    "genre": "Adventure",
    "rating": "7.4"
  },
  {
    "name": "What Remains of Edith Finch",
    "releasedate": "2017",
    "type": "Indie",
    "genre": "Walking Sim",
    "rating": "8.5"
  },
  {
    "name": "The Last of Us: Part I",
    "releasedate": "2013",
    "type": "AAA",
    "genre": "Action-Adventure",
    "rating": "9.2"
  },
  {
    "name": "The Last of Us: Part II",
    "releasedate": "2020",
    "type": "AAA",
    "genre": "Action-Adventure",
    "rating": "8.4"
  },
  {
    "name": "The Last of Us: Left Behind",
    "releasedate": "2014",
    "type": "AAA",
    "genre": "Action-Adventure",
    "rating": "8.8"
  },
  {
    "name": "Outpath",
    "releasedate": "2023",
    "type": "Indie",
    "genre": "Sandbox",
    "rating": "7.4"
  },
  {
    "name": "The Bunker",
    "releasedate": "2016",
    "type": "Indie",
    "genre": "FMV",
    "rating": "7.2"
  },
  {
    "name": "Metro: 2033 Redux",
    "releasedate": "2014",
    "type": "AA",
    "genre": "FPS",
    "rating": "8.6"
  },
  {
    "name": "Late Shift",
    "releasedate": "2017",
    "type": "Indie",
    "genre": "FMV",
    "rating": "7.8"
  },
  {
    "name": "Please, Don't Touch Anything 3D",
    "releasedate": "2016",
    "type": "Indie",
    "genre": "Puzzle",
    "rating": "7.7"
  },
  {
    "name": "Abz\u00fb",
    "releasedate": "2016",
    "type": "Indie",
    "genre": "Walking Sim",
    "rating": "7.4"
  },
  {
    "name": "Out of Space",
    "releasedate": "2020",
    "type": "Co-Op",
    "genre": "Strategy",
    "rating": "7.6"
  },
  {
    "name": "Metro: Last Light Redux",
    "releasedate": "2014",
    "type": "AA",
    "genre": "FPS",
    "rating": "8.6"
  },
  {
    "name": "Portal",
    "releasedate": "2007",
    "type": "AAA",
    "genre": "Puzzle",
    "rating": "9.6"
  },
  {
    "name": "Portal 2",
    "releasedate": "2011",
    "type": "AAA",
    "genre": "Puzzle",
    "rating": "9.4"
  },
  {
    "name": "Dying Light",
    "releasedate": "2015",
    "type": "AAA",
    "genre": "Parkour",
    "rating": "9.0"
  },
  {
    "name": "Dying Light: The Following",
    "releasedate": "2016",
    "type": "AAA",
    "genre": "Parkour",
    "rating": "8.7"
  },
  {
    "name": "Portal With RTX",
    "releasedate": "2022",
    "type": "AAA",
    "genre": "Puzzle",
    "rating": "9.7"
  },
  {
    "name": "Control",
    "releasedate": "2020",
    "type": "AA",
    "genre": "Action",
    "rating": "7.7"
  },
  {
    "name": "Dying Light 2",
    "releasedate": "2022",
    "type": "AAA",
    "genre": "Parkour",
    "rating": "8.4"
  },
  {
    "name": "South Park: The Stick of Truth",
    "releasedate": "2014",
    "type": "AA",
    "genre": "RPG",
    "rating": "8.0"
  },
  {
    "name": "Alien: Isolation w/dlcs",
    "releasedate": "2014",
    "type": "Indie",
    "genre": "Horror",
    "rating": "9.3"
  },
  {
    "name": "The Greatest Penguin Heist of All Time",
    "releasedate": "2026",
    "type": "Indie",
    "genre": "Action",
    "rating": "8.2"
  },
  {
    "name": "Cyberpunk 2077 100%",
    "releasedate": "2020",
    "type": "AAA",
    "genre": "Action-Adventure",
    "rating": "8.7"
  },
  {
    "name": "The Pedestrian",
    "releasedate": "2020",
    "type": "Indie",
    "genre": "Puzzle",
    "rating": "7.6"
  },
  {
    "name": "Mushroom Wars 2",
    "releasedate": "2017",
    "type": "Indie",
    "genre": "Tower Defense",
    "rating": "7.2"
  },
  {
    "name": "Doom",
    "releasedate": "2016",
    "type": "AAA",
    "genre": "Action",
    "rating": "8.7"
  },
  {
    "name": "Berry Bury Berry",
    "releasedate": "2026",
    "type": "Indie",
    "genre": "Horror",
    "rating": "8.1"
  },
  {
    "name": "Leaf It Alone",
    "releasedate": "2025",
    "type": "Indie",
    "genre": "Simulation",
    "rating": "7.5"
  },
  {
    "name": "Tavern Master",
    "releasedate": "2021",
    "type": "Indie",
    "genre": "Builder",
    "rating": "7.3"
  },
  {
    "name": "Gamblers Table 100%",
    "releasedate": "2026",
    "type": "Indie",
    "genre": "Casino",
    "rating": "7.7"
  },
  {
    "name": "Cloverpit",
    "releasedate": "2025",
    "type": "Indie",
    "genre": "Casino",
    "rating": "7.6"
  },
  {
    "name": "Mario Forever",
    "releasedate": "2003",
    "type": "Mod",
    "genre": "Platformer",
    "rating": "8.1"
  },
  {
    "name": "A Short Hike",
    "releasedate": "2019",
    "type": "Indie",
    "genre": "Adventure",
    "rating": "8.6"
  },
  {
    "name": "That Dragon, Cancer",
    "releasedate": "2016",
    "type": "Indie",
    "genre": "Walking Sim",
    "rating": "8.8"
  },
  {
    "name": "Ball x Pit",
    "releasedate": "2025",
    "type": "Indie",
    "genre": "Rogue-Like",
    "rating": "7.4"
  },
  {
    "name": "My Wife Threw Out My Card Collection",
    "releasedate": "2025",
    "type": "Indie",
    "genre": "Simulation",
    "rating": "7.2"
  },
  {
    "name": "Circle Empires",
    "releasedate": "2018",
    "type": "Indie",
    "genre": "Strategy",
    "rating": "7.6"
  },
  {
    "name": "Florence",
    "releasedate": "2020",
    "type": "Indie",
    "genre": "Adventure",
    "rating": "8.2"
  },
  {
    "name": "Teamfight Manager",
    "releasedate": "2021",
    "type": "Indie",
    "genre": "Simulation",
    "rating": "7.4"
  },
  {
    "name": "Grow Home",
    "releasedate": "2015",
    "type": "Indie",
    "genre": "Open World",
    "rating": "7.4"
  },
  {
    "name": "Another Brick In The Mall",
    "releasedate": "2020",
    "type": "Indie",
    "genre": "Builder",
    "rating": "7.3"
  },
  {
    "name": "RACCOIN",
    "releasedate": "2026",
    "type": "Indie",
    "genre": "Rogue-Like",
    "rating": "7.0"
  },
  {
    "name": "Do Not Feed The Monkeys",
    "releasedate": "2018",
    "type": "Indie",
    "genre": "Point & Click",
    "rating": "8.0"
  },
  {
    "name": "Meltopia",
    "releasedate": "2026",
    "type": "Indie",
    "genre": "Simulation",
    "rating": "7.2"
  },
  {
    "name": "I Am Your Beast",
    "releasedate": "2024",
    "type": "Indie",
    "genre": "Action",
    "rating": "8.6"
  },
  {
    "name": "Zombie Lane",
    "releasedate": "2011",
    "type": "AA",
    "genre": "Base Building",
    "rating": "7.5"
  },
  {
    "name": "Forza Horizon 6",
    "releasedate": "2026",
    "type": "AAA",
    "genre": "Racing",
    "rating": "8.5"
  },
  {
    "name": "Camping Simulator: The Squad",
    "releasedate": "2025",
    "type": "Indie",
    "genre": "Simulation",
    "rating": "7.5"
  },
  {
    "name": "Resident Evil 2: Remake | Claire",
    "releasedate": "2019",
    "type": "AAA",
    "genre": "Horror",
    "rating": "8.4"
  },
  {
    "name": "Resident Evil 2: Remake | Leon",
    "releasedate": "2019",
    "type": "AAA",
    "genre": "Horror",
    "rating": "8.1"
  },
  {
    "name": "Grand Theft Auto III",
    "releasedate": "2001",
    "type": "AAA",
    "genre": "Open World",
    "rating": "7.8"
  },
  {
    "name": "Deadpool",
    "releasedate": "2013",
    "type": "AA",
    "genre": "Action-Comedy",
    "rating": "8.7"
  },
  {
    "name": "Days Gone",
    "releasedate": "2019",
    "type": "AAA",
    "genre": "Open World",
    "rating": "9.0"
  },
  {
    "name": "Batman: Arkham Asylum",
    "releasedate": "2009",
    "type": "AA",
    "genre": "Open World",
    "rating": "8.8"
  },
  {
    "name": "Batman: Arkham City",
    "releasedate": "2011",
    "type": "AA",
    "genre": "Open World",
    "rating": "8.5"
  },
  {
    "name": "Grand Theft Auto: San Andreas",
    "releasedate": "2004",
    "type": "AAA",
    "genre": "Open World",
    "rating": "8.9"
  },
  {
    "name": "Not For Broadcast w/dlcs",
    "releasedate": "2002",
    "type": "Indie",
    "genre": "FMV",
    "rating": "7.5"
  },
  {
    "name": "Grand Theft Auto IV",
    "releasedate": "2008",
    "type": "AAA",
    "genre": "Open World",
    "rating": "8.6"
  },
  {
    "name": "Grand Theft Auto V",
    "releasedate": "2013",
    "type": "AAA",
    "genre": "Open World",
    "rating": "8.2"
  },
  {
    "name": "Webbed",
    "releasedate": "2001",
    "type": "Indie",
    "genre": "Platformer",
    "rating": "7.8"
  },
  {
    "name": "Grand Theft Auto: Advance",
    "releasedate": "2004",
    "type": "AAA",
    "genre": "Open World",
    "rating": "7.0"
  },
  {
    "name": "Assassin's Creed",
    "releasedate": "2007",
    "type": "AAA",
    "genre": "Action-Adventure",
    "rating": "8.5"
  },
  {
    "name": "Assassin's Creed II",
    "releasedate": "2009",
    "type": "AAA",
    "genre": "Action-Adventure",
    "rating": "8.5"
  },
  {
    "name": "Gamble With Your Friends",
    "releasedate": "2026",
    "type": "Co-Op",
    "genre": "Casino",
    "rating": "7.5"
  },
  {
    "name": "Air Strike 3D",
    "releasedate": "2002",
    "type": "Indie",
    "genre": "Action",
    "rating": "7.0"
  },
  {
    "name": "Red Dead Revolver",
    "releasedate": "2004",
    "type": "AAA",
    "genre": "Action-Adventure",
    "rating": "8.5"
  },
  {
    "name": "Call of Duty",
    "releasedate": "2003",
    "type": "AAA",
    "genre": "Action",
    "rating": "8.0"
  },
  {
    "name": "COLDLINE",
    "releasedate": "2024",
    "type": "Indie",
    "genre": "Puzzle",
    "rating": "7.5"
  },
  {
    "name": "Iron Lung",
    "releasedate": "2022",
    "type": "Indie",
    "genre": "Horror",
    "rating": "7.8"
  },
  {
    "name": "Fallout Shelter",
    "releasedate": "2017",
    "type": "AAA",
    "genre": "Builder",
    "rating": "7.2"
  },
  {
    "name": "Fallout 76",
    "releasedate": "2018",
    "type": "AAA",
    "genre": "Open World",
    "rating": "7.6"
  },
  {
    "name": "Age of Empires II",
    "releasedate": "2013",
    "type": "AA",
    "genre": "Strategy",
    "rating": "8.4"
  },
  {
    "name": "PUBG Battleground",
    "releasedate": "2017",
    "type": "Multiplayer",
    "genre": "Battle Royale",
    "rating": "7.2"
  },
  {
    "name": "League of Legends",
    "releasedate": "2009",
    "type": "Multiplayer",
    "genre": "MOBA",
    "rating": "7.7"
  },
  {
    "name": "Stumble Guys",
    "releasedate": "2021",
    "type": "Multiplayer",
    "genre": "Battle Royale",
    "rating": "7.2"
  },
  {
    "name": "Team Fortress 2",
    "releasedate": "2007",
    "type": "Multiplayer",
    "genre": "FPS",
    "rating": "7.4"
  },
  {
    "name": "Keep Talking and Nobody Explodes",
    "releasedate": "2015",
    "type": "Co-Op",
    "genre": "Puzzle",
    "rating": "8.6"
  },
  {
    "name": "Speedrunners",
    "releasedate": "2016",
    "type": "Multiplayer",
    "genre": "Parkour",
    "rating": "8.2"
  },
  {
    "name": "Golf With Your Friends",
    "releasedate": "2020",
    "type": "Multiplayer",
    "genre": "Sports",
    "rating": "7.5"
  },
  {
    "name": "Golf It!",
    "releasedate": "2023",
    "type": "Multiplayer",
    "genre": "Sports",
    "rating": "7.2"
  },
  {
    "name": "Tower Unite",
    "releasedate": "2025",
    "type": "Multiplayer",
    "genre": "Sports",
    "rating": "7.8"
  },
  {
    "name": "Left 4 Dead 2",
    "releasedate": "2009",
    "type": "Co-Op",
    "genre": "FPS",
    "rating": "8.0"
  },
  {
    "name": "War Thunder",
    "releasedate": "2013",
    "type": "Multiplayer",
    "genre": "Action",
    "rating": "7.7"
  },
  {
    "name": "Fall Guys",
    "releasedate": "2020",
    "type": "Multiplayer",
    "genre": "Battle Royale",
    "rating": "7.5"
  },
  {
    "name": "DarkOrbit",
    "releasedate": "2006",
    "type": "Multiplayer",
    "genre": "MMO",
    "rating": "7.7"
  },
  {
    "name": "Among Us",
    "releasedate": "2018",
    "type": "Multiplayer",
    "genre": "Strategy",
    "rating": "7.2"
  },
  {
    "name": "Town of Salem",
    "releasedate": "2014",
    "type": "Multiplayer",
    "genre": "Strategy",
    "rating": "8.4"
  },
  {
    "name": "Ball 3D",
    "releasedate": "2012",
    "type": "Multiplayer",
    "genre": "Sports",
    "rating": "7.5"
  },
  {
    "name": "Endoparasitic",
    "releasedate": "2022",
    "type": "Indie",
    "genre": "Horror",
    "rating": "8.7"
  },
  {
    "name": "Feign",
    "releasedate": "2025",
    "type": "Multiplayer",
    "genre": "Strategy",
    "rating": "7.0"
  },
  {
    "name": "Fly Corp",
    "releasedate": "2023",
    "type": "Indie",
    "genre": "Strategy",
    "rating": "7.5"
  },
  {
    "name": "Potion Craft: Alchemist Simulator",
    "releasedate": "2022",
    "type": "Indie",
    "genre": "Simulation",
    "rating": "7.7"
  },
  {
    "name": "Geometry Dash",
    "releasedate": "2014",
    "type": "Indie",
    "genre": "Rythm",
    "rating": "7.8"
  },
  {
    "name": "Getting Over It",
    "releasedate": "2017",
    "type": "Indie",
    "genre": "Foddy-Like",
    "rating": "8.0"
  },
  {
    "name": "Goat Simulator",
    "releasedate": "2014",
    "type": "Indie",
    "genre": "Simulator",
    "rating": "7.7"
  },
  {
    "name": "Shotgun King The Final Checkmate",
    "releasedate": "2022",
    "type": "Indie",
    "genre": "Strategy",
    "rating": "8.5"
  },
  {
    "name": "Super Hexagon",
    "releasedate": "2012",
    "type": "Indie",
    "genre": "Rythm",
    "rating": "7.6"
  },
  {
    "name": "Lethal Company",
    "releasedate": "2023",
    "type": "Indie",
    "genre": "Horror",
    "rating": "8.1"
  },
  {
    "name": "Little Inferno",
    "releasedate": "2012",
    "type": "Indie",
    "genre": "Puzzle",
    "rating": "7.5"
  },
  {
    "name": "Mini Motorways",
    "releasedate": "2021",
    "type": "Indie",
    "genre": "Strategy",
    "rating": "7.6"
  },
  {
    "name": "New Star Soccer",
    "releasedate": "2012",
    "type": "Mobile",
    "genre": "Sports",
    "rating": "7.8"
  },
  {
    "name": "Soul Knight",
    "releasedate": "2017",
    "type": "Mobile",
    "genre": "Rogue-Like",
    "rating": "8.4"
  },
  {
    "name": "Lapse: A Forgotten Future",
    "releasedate": "2017",
    "type": "Mobile",
    "genre": "Strategy",
    "rating": "7.5"
  },
  {
    "name": "Pico Park",
    "releasedate": "2021",
    "type": "Co-Op",
    "genre": "Platformer",
    "rating": "7.5"
  },
  {
    "name": "Plague Inc: Evolved",
    "releasedate": "2016",
    "type": "Indie",
    "genre": "Strategy",
    "rating": "7.8"
  },
  {
    "name": "Roll",
    "releasedate": "2021",
    "type": "Indie",
    "genre": "Strategy",
    "rating": "7.2"
  },
  {
    "name": "MECCHA CHAMELEON",
    "releasedate": "2026",
    "type": "Multiplayer",
    "genre": "Party Game",
    "rating": "7.7"
  },
  {
    "name": "Sniper 3D Assassin",
    "releasedate": "2014",
    "type": "Indie",
    "genre": "Action",
    "rating": "7.5"
  },
  {
    "name": "The Sims 4",
    "releasedate": "2014",
    "type": "AAA",
    "genre": "Life Sim",
    "rating": "8.0"
  },
  {
    "name": "Stick Fight",
    "releasedate": "2017",
    "type": "Co-Op",
    "genre": "Platformer",
    "rating": "7.8"
  },
  {
    "name": "SUPERHOT",
    "releasedate": "2016",
    "type": "Indie",
    "genre": "FPS",
    "rating": "8.6"
  },
  {
    "name": "Tools Up!",
    "releasedate": "2019",
    "type": "Co-Op",
    "genre": "Simulation",
    "rating": "7.2"
  },
  {
    "name": "Tricky Towers",
    "releasedate": "2016",
    "type": "Co-Op",
    "genre": "Puzzle",
    "rating": "7.6"
  },
  {
    "name": "Turmoil",
    "releasedate": "2016",
    "type": "Indie",
    "genre": "Strategy",
    "rating": "7.4"
  },
  {
    "name": "Undertale",
    "releasedate": "2015",
    "type": "Indie",
    "genre": "Adventure",
    "rating": "8.5"
  },
  {
    "name": "Doki Doki Literature Club",
    "releasedate": "2017",
    "type": "Indie",
    "genre": "Horror",
    "rating": "7.8"
  },
  {
    "name": "Untitled Goose Game",
    "releasedate": "2020",
    "type": "Co-Op",
    "genre": "Adventure",
    "rating": "8.4"
  },
  {
    "name": "Unturned",
    "releasedate": "2017",
    "type": "Multiplayer",
    "genre": "Open World",
    "rating": "7.4"
  },
  {
    "name": "Vampire Survivor",
    "releasedate": "2022",
    "type": "Indie",
    "genre": "Rogue-Like",
    "rating": "7.8"
  },
  {
    "name": "Cat Goes Fishing",
    "releasedate": "2015",
    "type": "Indie",
    "genre": "Fishing",
    "rating": "7.5"
  },
  {
    "name": "This War of Mine",
    "releasedate": "2014",
    "type": "Indie",
    "genre": "Survival",
    "rating": "7.8"
  },
  {
    "name": "Orcs Must Die!",
    "releasedate": "2011",
    "type": "Indie",
    "genre": "Tower Defense",
    "rating": "7.5"
  },
  {
    "name": "FTL: Faster Than Light",
    "releasedate": "2011",
    "type": "Indie",
    "genre": "Rogue-Like",
    "rating": "7.8"
  }
];
