const rawJson = `{
  "Solids": [
    {
      "id": "Algae",
      "name": "Algae (Solid)"
    },
    {
      "id": "Aluminum",
      "name": "Aluminum (Solid)"
    },
    {
      "id": "AluminumOre",
      "name": "Aluminum Ore (Solid)"
    },
    {
      "id": "Bitumen",
      "name": "Bitumen (Solid)"
    },
    {
      "id": "BleachStone",
      "name": "Bleach Stone (Solid)"
    },
    {
      "id": "BrineIce",
      "name": "Brine Ice (Solid)"
    },
    {
      "id": "Carbon",
      "name": "Coal (Solid)"
    },
    {
      "id": "Ceramic",
      "name": "Ceramic (Solid)"
    },
    {
      "id": "Clay",
      "name": "Clay (Solid)"
    },
    {
      "id": "Cobalt",
      "name": "Cobalt (Solid)"
    },
    {
      "id": "Cobaltite",
      "name": "Cobalt Ore (Solid)"
    },
    {
      "id": "Copper",
      "name": "Copper (Solid)"
    },
    {
      "id": "Corium",
      "name": "Corium (Solid)"
    },
    {
      "id": "Creature",
      "name": "Genetic Ooze (Solid)"
    },
    {
      "id": "CrushedIce",
      "name": "Crushed Ice (Solid)"
    },
    {
      "id": "CrushedRock",
      "name": "Crushed Rock (Solid)"
    },
    {
      "id": "Cuprite",
      "name": "Copper Ore (Solid)"
    },
    {
      "id": "DepletedUranium",
      "name": "Depleted Uranium (Solid)"
    },
    {
      "id": "Diamond",
      "name": "Diamond (Solid)"
    },
    {
      "id": "Dirt",
      "name": "Dirt (Solid)"
    },
    {
      "id": "DirtyIce",
      "name": "Polluted Ice (Solid)"
    },
    {
      "id": "EnrichedUranium",
      "name": "Enriched Uranium (Solid)"
    },
    {
      "id": "Fertilizer",
      "name": "Fertilizer (Solid)"
    },
    {
      "id": "FoolsGold",
      "name": "Pyrite (Solid)"
    },
    {
      "id": "Fossil",
      "name": "Fossil (Solid)"
    },
    {
      "id": "Fullerene",
      "name": "Fullerene (Solid)"
    },
    {
      "id": "Glass",
      "name": "Glass (Solid)"
    },
    {
      "id": "Gold",
      "name": "Gold (Solid)"
    },
    {
      "id": "GoldAmalgam",
      "name": "Gold Amalgam (Solid)"
    },
    {
      "id": "Granite",
      "name": "Granite (Solid)"
    },
    {
      "id": "Graphite",
      "name": "Graphite (Solid)"
    },
    {
      "id": "HardPolypropylene",
      "name": "Plastium (Solid)"
    },
    {
      "id": "Ice",
      "name": "Ice (Solid)"
    },
    {
      "id": "IgneousRock",
      "name": "Igneous Rock (Solid)"
    },
    {
      "id": "Iron",
      "name": "Iron (Solid)"
    },
    {
      "id": "IronOre",
      "name": "Iron Ore (Solid)"
    },
    {
      "id": "Isoresin",
      "name": "Isoresin (Solid)"
    },
    {
      "id": "Katairite",
      "name": "Abyssalite (Solid)"
    },
    {
      "id": "Lead",
      "name": "Lead (Solid)"
    },
    {
      "id": "Lime",
      "name": "Lime (Solid)"
    },
    {
      "id": "MaficRock",
      "name": "Mafic Rock (Solid)"
    },
    {
      "id": "MilkFat",
      "name": "Brackwax (Solid)"
    },
    {
      "id": "MilkIce",
      "name": "Frozen Brackene (Solid)"
    },
    {
      "id": "Mud",
      "name": "Mud (Solid)"
    },
    {
      "id": "Niobium",
      "name": "Niobium (Solid)"
    },
    {
      "id": "Obsidian",
      "name": "Obsidian (Solid)"
    },
    {
      "id": "OxyRock",
      "name": "Oxylite (Solid)"
    },
    {
      "id": "Phosphorite",
      "name": "Phosphorite (Solid)"
    },
    {
      "id": "Phosphorus",
      "name": "Refined Phosphorus (Solid)"
    },
    {
      "id": "Polypropylene",
      "name": "Plastic (Solid)"
    },
    {
      "id": "Radium",
      "name": "Radium (Solid)"
    },
    {
      "id": "RefinedCarbon",
      "name": "Refined Carbon (Solid)"
    },
    {
      "id": "Regolith",
      "name": "Regolith (Solid)"
    },
    {
      "id": "Rust",
      "name": "Rust (Solid)"
    },
    {
      "id": "Salt",
      "name": "Salt (Solid)"
    },
    {
      "id": "Sand",
      "name": "Sand (Solid)"
    },
    {
      "id": "SandStone",
      "name": "Sandstone (Solid)"
    },
    {
      "id": "SedimentaryRock",
      "name": "Sedimentary Rock (Solid)"
    },
    {
      "id": "SlimeMold",
      "name": "Slime (Solid)"
    },
    {
      "id": "Snow",
      "name": "Snow (Solid)"
    },
    {
      "id": "SolidCarbonDioxide",
      "name": "Solid Carbon Dioxide (Solid)"
    },
    {
      "id": "SolidChlorine",
      "name": "Solid Chlorine (Solid)"
    },
    {
      "id": "SolidCrudeOil",
      "name": "Solid Crude Oil (Solid)"
    },
    {
      "id": "SolidEthanol",
      "name": "Solid Ethanol (Solid)"
    },
    {
      "id": "SolidHydrogen",
      "name": "Solid Hydrogen (Solid)"
    },
    {
      "id": "SolidMethane",
      "name": "Solid Methane (Solid)"
    },
    {
      "id": "SolidNaphtha",
      "name": "Solid Naphtha (Solid)"
    },
    {
      "id": "SolidNuclearWaste",
      "name": "Solid Nuclear Waste (Solid)"
    },
    {
      "id": "SolidOxygen",
      "name": "Solid Oxygen (Solid)"
    },
    {
      "id": "SolidPetroleum",
      "name": "Solid Petroleum (Solid)"
    },
    {
      "id": "SolidPropane",
      "name": "Solid Propane (Solid)"
    },
    {
      "id": "SolidResin",
      "name": "Solid Resin (Solid)"
    },
    {
      "id": "SolidSuperCoolant",
      "name": "Solid Super Coolant (Solid)"
    },
    {
      "id": "SolidViscoGel",
      "name": "Solid Visco-Gel (Solid)"
    },
    {
      "id": "SpaceStationForceField",
      "name": "Station Force Field (Solid)"
    },
    {
      "id": "Steel",
      "name": "Steel (Solid)"
    },
    {
      "id": "Sucrose",
      "name": "Sucrose (Solid)"
    },
    {
      "id": "Sulfur",
      "name": "Sulfur (Solid)"
    },
    {
      "id": "SuperInsulator",
      "name": "Insulite (Solid)"
    },
    {
      "id": "TempConductorSolid",
      "name": "Thermium (Solid)"
    },
    {
      "id": "ToxicMud",
      "name": "Polluted Mud (Solid)"
    },
    {
      "id": "ToxicSand",
      "name": "Polluted Dirt (Solid)"
    },
    {
      "id": "Tungsten",
      "name": "Tungsten (Solid)"
    },
    {
      "id": "Unobtanium",
      "name": "Neutronium (Solid)"
    },
    {
      "id": "UnobtaniumAlloy",
      "name": "Neutronium Alloy (Solid)"
    },
    {
      "id": "UnobtaniumDust",
      "name": "Neutronium Dust (Solid)"
    },
    {
      "id": "UraniumOre",
      "name": "Uranium Ore (Solid)"
    },
    {
      "id": "Wolframite",
      "name": "Wolframite (Solid)"
    }
  ],
  "Liquids": [
    {
      "id": "Brine",
      "name": "Brine (Liquid)"
    },
    {
      "id": "Chlorine",
      "name": "Liquid Chlorine (Liquid)"
    },
    {
      "id": "CrudeOil",
      "name": "Crude Oil (Liquid)"
    },
    {
      "id": "DirtyWater",
      "name": "Polluted Water (Liquid)"
    },
    {
      "id": "Ethanol",
      "name": "Ethanol (Liquid)"
    },
    {
      "id": "LiquidCarbonDioxide",
      "name": "Liquid Carbon Dioxide (Liquid)"
    },
    {
      "id": "LiquidHydrogen",
      "name": "Liquid Hydrogen (Liquid)"
    },
    {
      "id": "LiquidMethane",
      "name": "Liquid Methane (Liquid)"
    },
    {
      "id": "LiquidOxygen",
      "name": "Liquid Oxygen (Liquid)"
    },
    {
      "id": "LiquidPhosphorus",
      "name": "Liquid Phosphorus (Liquid)"
    },
    {
      "id": "LiquidPropane",
      "name": "Liquid Propane (Liquid)"
    },
    {
      "id": "LiquidSulfur",
      "name": "Liquid Sulfur (Liquid)"
    },
    {
      "id": "Magma",
      "name": "Magma (Liquid)"
    },
    {
      "id": "Milk",
      "name": "Brackene (Liquid)"
    },
    {
      "id": "MoltenAluminum",
      "name": "Molten Aluminum (Liquid)"
    },
    {
      "id": "MoltenCarbon",
      "name": "Liquid Carbon (Liquid)"
    },
    {
      "id": "MoltenCobalt",
      "name": "Molten Cobalt (Liquid)"
    },
    {
      "id": "MoltenCopper",
      "name": "Molten Copper (Liquid)"
    },
    {
      "id": "MoltenGlass",
      "name": "Molten Glass (Liquid)"
    },
    {
      "id": "MoltenGold",
      "name": "Molten Gold (Liquid)"
    },
    {
      "id": "MoltenIron",
      "name": "Molten Iron (Liquid)"
    },
    {
      "id": "MoltenLead",
      "name": "Molten Lead (Liquid)"
    },
    {
      "id": "MoltenNiobium",
      "name": "Molten Niobium (Liquid)"
    },
    {
      "id": "MoltenSalt",
      "name": "Molten Salt (Liquid)"
    },
    {
      "id": "MoltenSteel",
      "name": "Molten Steel (Liquid)"
    },
    {
      "id": "MoltenSucrose",
      "name": "Liquid Sucrose (Liquid)"
    },
    {
      "id": "MoltenTungsten",
      "name": "Molten Tungsten (Liquid)"
    },
    {
      "id": "MoltenUranium",
      "name": "Liquid Uranium (Liquid)"
    },
    {
      "id": "Naphtha",
      "name": "Liquid Naphtha (Liquid)"
    },
    {
      "id": "NuclearWaste",
      "name": "Liquid Nuclear Waste (Liquid)"
    },
    {
      "id": "Petroleum",
      "name": "Petroleum (Liquid)"
    },
    {
      "id": "Resin",
      "name": "Liquid Resin (Liquid)"
    },
    {
      "id": "SaltWater",
      "name": "Salt Water (Liquid)"
    },
    {
      "id": "SuperCoolant",
      "name": "Super Coolant (Liquid)"
    },
    {
      "id": "ViscoGel",
      "name": "Visco-Gel Fluid (Liquid)"
    },
    {
      "id": "Water",
      "name": "Water (Liquid)"
    }
  ],
  "Gases": [
    {
      "id": "AluminumGas",
      "name": "Aluminum Gas (Gas)"
    },
    {
      "id": "CarbonDioxide",
      "name": "Carbon Dioxide (Gas)"
    },
    {
      "id": "CarbonGas",
      "name": "Carbon Gas (Gas)"
    },
    {
      "id": "ChlorineGas",
      "name": "Chlorine Gas (Gas)"
    },
    {
      "id": "CobaltGas",
      "name": "Cobalt Gas (Gas)"
    },
    {
      "id": "ContaminatedOxygen",
      "name": "Polluted Oxygen (Gas)"
    },
    {
      "id": "CopperGas",
      "name": "Copper Gas (Gas)"
    },
    {
      "id": "EthanolGas",
      "name": "Ethanol Gas (Gas)"
    },
    {
      "id": "Fallout",
      "name": "Nuclear Fallout (Gas)"
    },
    {
      "id": "GoldGas",
      "name": "Gold Gas (Gas)"
    },
    {
      "id": "Hydrogen",
      "name": "Hydrogen Gas (Gas)"
    },
    {
      "id": "IronGas",
      "name": "Iron Gas (Gas)"
    },
    {
      "id": "LeadGas",
      "name": "Lead Gas (Gas)"
    },
    {
      "id": "Methane",
      "name": "Natural Gas (Gas)"
    },
    {
      "id": "NiobiumGas",
      "name": "Niobium Gas (Gas)"
    },
    {
      "id": "Oxygen",
      "name": "Oxygen (Gas)"
    },
    {
      "id": "PhosphorusGas",
      "name": "Phosphorus Gas (Gas)"
    },
    {
      "id": "RockGas",
      "name": "Rock Gas (Gas)"
    },
    {
      "id": "SaltGas",
      "name": "Salt Gas (Gas)"
    },
    {
      "id": "SourGas",
      "name": "Sour Gas (Gas)"
    },
    {
      "id": "Steam",
      "name": "Steam (Gas)"
    },
    {
      "id": "SteelGas",
      "name": "Steel Gas (Gas)"
    },
    {
      "id": "SulfurGas",
      "name": "Sulfur Gas (Gas)"
    },
    {
      "id": "SuperCoolantGas",
      "name": "Super Coolant Gas (Gas)"
    },
    {
      "id": "TungstenGas",
      "name": "Tungsten Gas (Gas)"
    }
  ],
  "Foods": [
    {
      "id": "WormSuperFruit",
      "name": "Grubfruit"
    },
    {
      "id": "WormSuperFood",
      "name": "Grubfruit Preserve"
    },
    {
      "id": "WormBasicFruit",
      "name": "Spindly Grubfruit"
    },
    {
      "id": "WormBasicFood",
      "name": "Roast Grubfruit Nut"
    },
    {
      "id": "Tofu",
      "name": "Tofu"
    },
    {
      "id": "SwampFruit",
      "name": "Bog Jelly"
    },
    {
      "id": "DehydratedSurfAndTurf",
      "name": "Dried Surf'n'Turf"
    },
    {
      "id": "SurfAndTurf",
      "name": "Surf'n'Turf"
    },
    {
      "id": "DehydratedSpicyTofu",
      "name": "Dried Spicy Tofu"
    },
    {
      "id": "SpicyTofu",
      "name": "Spicy Tofu"
    },
    {
      "id": "SpiceNut",
      "name": "Pincha Peppernut"
    },
    {
      "id": "DehydratedSpiceBread",
      "name": "Dried Pepper Bread"
    },
    {
      "id": "SpiceBread",
      "name": "Pepper Bread"
    },
    {
      "id": "SwampDelights",
      "name": "Swampy Delights"
    },
    {
      "id": "ShellfishMeat",
      "name": "Raw Shellfish"
    },
    {
      "id": "DehydratedSalsa",
      "name": "Dried Stuffed Berry"
    },
    {
      "id": "Salsa",
      "name": "Stuffed Berry"
    },
    {
      "id": "BasicForagePlant",
      "name": "Muckroot"
    },
    {
      "id": "BeanPlantSeed",
      "name": "Nosh Bean"
    },
    {
      "id": "ColdWheatSeed",
      "name": "Sleet Wheat Grain"
    },
    {
      "id": "ForestForagePlant",
      "name": "Hexalent Fruit"
    },
    {
      "id": "Burger",
      "name": "Frost Burger"
    },
    {
      "id": "DehydratedFoodPackage",
      "name": "Dried Frost Burger"
    },
    {
      "id": "ColdWheatBread",
      "name": "Frost Bun"
    },
    {
      "id": "PlantMeat",
      "name": "Plant Meat"
    },
    {
      "id": "CookedEgg",
      "name": "Omelette"
    },
    {
      "id": "CookedFish",
      "name": "Cooked Seafood"
    },
    {
      "id": "Curry",
      "name": "Curried Beans"
    },
    {
      "id": "DehydratedCurry",
      "name": "Dried Curried Beans"
    },
    {
      "id": "FieldRation",
      "name": "Nutrient Bar"
    },
    {
      "id": "FishMeat",
      "name": "Pacu Fillet"
    },
    {
      "id": "FriedMushBar",
      "name": "Mush Fry"
    },
    {
      "id": "FriedMushroom",
      "name": "Fried Mushroom"
    },
    {
      "id": "FruitCake",
      "name": "Berry Sludge"
    },
    {
      "id": "GammaMush",
      "name": "Gamma Mush"
    },
    {
      "id": "GrilledPrickleFruit",
      "name": "Gristle Berry"
    },
    {
      "id": "PickledMeal",
      "name": "Pickled Meal"
    },
    {
      "id": "Lettuce",
      "name": "Lettuce"
    },
    {
      "id": "Meat",
      "name": "Meat"
    },
    {
      "id": "Pancakes",
      "name": "Soufflé Pancakes"
    },
    {
      "id": "MushBar",
      "name": "Mush Bar"
    },
    {
      "id": "Mushroom",
      "name": "Mushroom"
    },
    {
      "id": "MushroomWrap",
      "name": "Mushroom Wrap"
    },
    {
      "id": "DehydratedMushroomWrap",
      "name": "Dried Mushroom Wrap"
    },
    {
      "id": "PrickleFruit",
      "name": "Bristle Berry"
    },
    {
      "id": "DehydratedBerryPie",
      "name": "Dried Berry Pie"
    },
    {
      "id": "CookedMeat",
      "name": "Barbeque"
    },
    {
      "id": "BerryPie",
      "name": "Mixed Berry Pie"
    },
    {
      "id": "Quiche",
      "name": "Mushroom Quiche"
    },
    {
      "id": "SwampForagePlant",
      "name": "Swamp Chard Heart"
    },
    {
      "id": "DehydratedQuiche",
      "name": "Dried Mushroom Quiche"
    },
    {
      "id": "BasicPlantFood",
      "name": "Meal Lice"
    },
    {
      "id": "BasicPlantBar",
      "name": "Liceloaf"
    },
    {
      "id": "RawEgg",
      "name": "Raw Egg"
    }
  ],
  "Pips": [
    {
      "id": "SquirrelHug",
      "name": "Cuddle Pip"
    },
    {
      "id": "Squirrel",
      "name": "Pip"
    },
    {
      "id": "SquirrelHugBaby",
      "name": "Cuddle Pipsqueak"
    },
    {
      "id": "SquirrelBaby",
      "name": "Pipsqueak"
    }
  ],
  "Plug Slugs": [
    {
      "id": "Staterpillar",
      "name": "Plug Slug"
    },
    {
      "id": "StaterpillarGas",
      "name": "Smog Slug"
    },
    {
      "id": "StaterpillarLiquid",
      "name": "Sponge Slug"
    },
    {
      "id": "StaterpillarLiquidBaby",
      "name": "Sponge Sluglet"
    },
    {
      "id": "StaterpillarBaby",
      "name": "Plug Sluglet"
    },
    {
      "id": "StaterpillarGasBaby",
      "name": "Smog Sluglet"
    }
  ],
  "Pufts": [
    {
      "id": "PuftOxylite",
      "name": "Dense Puft"
    },
    {
      "id": "PuftAlpha",
      "name": "Puft Prince"
    },
    {
      "id": "PuftBleachstone",
      "name": "Squeaky Puft"
    },
    {
      "id": "Puft",
      "name": "Puft"
    },
    {
      "id": "PuftOxyliteBaby",
      "name": "Dense Puftlet"
    },
    {
      "id": "PuftBaby",
      "name": "Puftlet"
    },
    {
      "id": "PuftBleachstoneBaby",
      "name": "Squeaky Puftlet"
    },
    {
      "id": "PuftAlphaBaby",
      "name": "Puftlet Prince"
    }
  ],
  "Beetas": [
    {
      "id": "BeeHive",
      "name": "Beeta Hive"
    },
    {
      "id": "Bee",
      "name": "Beeta"
    },
    {
      "id": "BeeBaby",
      "name": "Beetiny"
    }
  ],
  "Dreckos": [
    {
      "id": "Drecko",
      "name": "Drecko"
    },
    {
      "id": "DreckoPlastic",
      "name": "Glossy Drecko"
    },
    {
      "id": "DreckoBaby",
      "name": "Drecklet"
    },
    {
      "id": "DreckoPlasticBaby",
      "name": "Glossy Drecklet"
    }
  ],
  "Morbs": [
    {
      "id": "Glom",
      "name": "Morb"
    }
  ],
  "Shine Bugs": [
    {
      "id": "LightBugBlack",
      "name": "Abyss Bug"
    },
    {
      "id": "LightBugBlue",
      "name": "Azure Bug"
    },
    {
      "id": "LightBug",
      "name": "Shine Bug"
    },
    {
      "id": "LightBugCrystal",
      "name": "Radiant Bug"
    },
    {
      "id": "LightBugOrange",
      "name": "Sun Bug"
    },
    {
      "id": "LightBugPink",
      "name": "Coral Bug"
    },
    {
      "id": "LightBugPurple",
      "name": "Royal Bug"
    },
    {
      "id": "LightBugPurpleBaby",
      "name": "Royal Nymph"
    },
    {
      "id": "LightBugPinkBaby",
      "name": "Coral Nymph"
    },
    {
      "id": "LightBugOrangeBaby",
      "name": "Sun Nymph"
    },
    {
      "id": "LightBugCrystalBaby",
      "name": "Radiant Nymph"
    },
    {
      "id": "LightBugBaby",
      "name": "Shine Nymph"
    },
    {
      "id": "LightBugBlueBaby",
      "name": "Azure Nymph"
    },
    {
      "id": "LightBugBlackBaby",
      "name": "Abyss Nymph"
    }
  ],
  "Shove Voles": [
    {
      "id": "Mole",
      "name": "Shove Vole"
    },
    {
      "id": "MoleDelicacy",
      "name": "Delecta Vole"
    },
    {
      "id": "MoleDelicacyBaby",
      "name": "Delecta Vole Pup"
    },
    {
      "id": "MoleBaby",
      "name": "Vole Pup"
    }
  ],
  "Moos": [
    {
      "id": "Moo",
      "name": "Gassy Moo"
    }
  ],
  "Slicksters": [
    {
      "id": "Oilfloater",
      "name": "Slickster"
    },
    {
      "id": "OilfloaterDecor",
      "name": "Longhair Slickster"
    },
    {
      "id": "OilfloaterHighTemp",
      "name": "Molten Slickster"
    },
    {
      "id": "OilfloaterBaby",
      "name": "Slickster Larva"
    },
    {
      "id": "OilfloaterHighTempBaby",
      "name": "Molten Larva"
    },
    {
      "id": "OilfloaterDecorBaby",
      "name": "Longhair Larva"
    }
  ],
  "Divergents": [
    {
      "id": "DivergentBeetle",
      "name": "Sweetle"
    },
    {
      "id": "DivergentWorm",
      "name": "Grubgrub"
    },
    {
      "id": "DivergentWormBaby",
      "name": "Grubgrub Wormling"
    },
    {
      "id": "DivergentBeetleBaby",
      "name": "Sweetle Larva"
    }
  ],
  "Hatches": [
    {
      "id": "HatchVeggie",
      "name": "Sage Hatch"
    },
    {
      "id": "Hatch",
      "name": "Hatch"
    },
    {
      "id": "HatchHard",
      "name": "Stone Hatch"
    },
    {
      "id": "HatchMetal",
      "name": "Smooth Hatch"
    },
    {
      "id": "HatchBaby",
      "name": "Hatchling"
    },
    {
      "id": "HatchMetalBaby",
      "name": "Smooth Hatchling"
    },
    {
      "id": "HatchVeggieBaby",
      "name": "Sage Hatchling"
    },
    {
      "id": "HatchHardBaby",
      "name": "Stone Hatchling"
    }
  ],
  "Pokeshells": [
    {
      "id": "Crab",
      "name": "Pokeshell"
    },
    {
      "id": "CrabFreshWater",
      "name": "Sanishell"
    },
    {
      "id": "CrabWood",
      "name": "Oakshell"
    },
    {
      "id": "CrabWoodBaby",
      "name": "Oakshell Spawn"
    },
    {
      "id": "CrabFreshWaterBaby",
      "name": "Sanishell Spawn"
    },
    {
      "id": "CrabBaby",
      "name": "Pokeshell Spawn"
    }
  ],
  "Pacus": [
    {
      "id": "PacuTropical",
      "name": "Tropical Pacu"
    },
    {
      "id": "Pacu",
      "name": "Pacu"
    },
    {
      "id": "PacuCleaner",
      "name": "Gulp Fish"
    },
    {
      "id": "PacuTropicalBaby",
      "name": "Tropical Fry"
    },
    {
      "id": "PacuBaby",
      "name": "Pacu Fry"
    },
    {
      "id": "PacuCleanerBaby",
      "name": "Gulp Fry"
    }
  ],
  "Eggs": [
    {
      "id": "SquirrelHugEgg",
      "name": "Cuddle Pip Egg"
    },
    {
      "id": "StaterpillarEgg",
      "name": "Slug Egg"
    },
    {
      "id": "StaterpillarGasEgg",
      "name": "Smog Slug Egg"
    },
    {
      "id": "StaterpillarLiquidEgg",
      "name": "Sponge Slug Egg"
    },
    {
      "id": "SquirrelEgg",
      "name": "Pip Egg"
    },
    {
      "id": "PuftOxyliteEgg",
      "name": "Dense Puftlet Egg"
    },
    {
      "id": "DreckoEgg",
      "name": "Drecklet Egg"
    },
    {
      "id": "DreckoPlasticEgg",
      "name": "Glossy Drecklet Egg"
    },
    {
      "id": "LightBugBlackEgg",
      "name": "Abyss Nymph Egg"
    },
    {
      "id": "LightBugBlueEgg",
      "name": "Azure Nymph Egg"
    },
    {
      "id": "LightBugEgg",
      "name": "Shine Nymph Egg"
    },
    {
      "id": "LightBugCrystalEgg",
      "name": "Radiant Nymph Egg"
    },
    {
      "id": "LightBugOrangeEgg",
      "name": "Sun Nymph Egg"
    },
    {
      "id": "LightBugPinkEgg",
      "name": "Coral Nymph Egg"
    },
    {
      "id": "LightBugPurpleEgg",
      "name": "Royal Nymph Egg"
    },
    {
      "id": "MoleEgg",
      "name": "Shove Vole Egg"
    },
    {
      "id": "MoleDelicacyEgg",
      "name": "Delecta Vole Egg"
    },
    {
      "id": "OilfloaterEgg",
      "name": "Larva Egg"
    },
    {
      "id": "OilfloaterDecorEgg",
      "name": "Longhair Larva Egg"
    },
    {
      "id": "OilfloaterHighTempEgg",
      "name": "Molten Larva Egg"
    },
    {
      "id": "PuftAlphaEgg",
      "name": "Puftlet Prince Egg"
    },
    {
      "id": "PuftBleachstoneEgg",
      "name": "Squeaky Puftlet Egg"
    },
    {
      "id": "PuftEgg",
      "name": "Puftlet Egg"
    },
    {
      "id": "DivergentBeetleEgg",
      "name": "Sweetle Egg"
    },
    {
      "id": "HatchVeggieEgg",
      "name": "Sage Hatchling Egg"
    },
    {
      "id": "HatchEgg",
      "name": "Hatchling Egg"
    },
    {
      "id": "HatchHardEgg",
      "name": "Stone Hatchling Egg"
    },
    {
      "id": "CrabEgg",
      "name": "Pinch Roe"
    },
    {
      "id": "DivergentWormEgg",
      "name": "Grubgrub Egg"
    },
    {
      "id": "CrabFreshWaterEgg",
      "name": "Sani Pinch Roe"
    },
    {
      "id": "PacuTropicalEgg",
      "name": "Tropical Fry Egg"
    },
    {
      "id": "PacuEgg",
      "name": "Fry Egg"
    },
    {
      "id": "CrabWoodEgg",
      "name": "Oak Pinch Roe"
    },
    {
      "id": "PacuCleanerEgg",
      "name": "Gulp Fry Egg"
    },
    {
      "id": "HatchMetalEgg",
      "name": "Smooth Hatchling Egg"
    }
  ],
  "Equipment": [
    {
      "id": "Atmo_Suit",
      "name": "Atmo Suit"
    },
    {
      "id": "Cool_Vest",
      "name": "Cool Vest"
    },
    {
      "id": "CustomClothing",
      "name": "Primo Garb"
    },
    {
      "id": "EquippableBalloon",
      "name": "Balloon Friend"
    },
    {
      "id": "Funky_Vest",
      "name": "Snazzy Suit"
    },
    {
      "id": "Jet_Suit",
      "name": "Jet Suit"
    },
    {
      "id": "Lead_Suit",
      "name": "Lead Suit"
    },
    {
      "id": "Oxygen_Mask",
      "name": "Oxygen Mask"
    },
    {
      "id": "SleepClinicPajamas",
      "name": "Pajamas"
    },
    {
      "id": "Warm_Vest",
      "name": "Warm Sweater"
    }
  ],
  "Seeds": [
    {
      "id": "BasicFabricMaterialPlantSeed",
      "name": "Thimble Reed Seed"
    },
    {
      "id": "BasicSingleHarvestPlantSeed",
      "name": "Mealwood Seed"
    },
    {
      "id": "BeanPlantSeed",
      "name": "Nosh Bean"
    },
    {
      "id": "CactusPlantSeed",
      "name": "Joya Seed"
    },
    {
      "id": "ColdBreatherSeed",
      "name": "Wort Seed"
    },
    {
      "id": "ColdWheatSeed",
      "name": "Sleet Wheat Grain"
    },
    {
      "id": "CritterTrapPlantSeed",
      "name": "Saturn Critter Trap Seed"
    },
    {
      "id": "CylindricaSeed",
      "name": "Bliss Burst Seed"
    },
    {
      "id": "EvilFlowerSeed",
      "name": "Sporechid Seed"
    },
    {
      "id": "FilterPlantSeed",
      "name": "Hydrocactus Seed"
    },
    {
      "id": "BulbPlantSeed",
      "name": "Buddy Bud Seed"
    },
    {
      "id": "ForestTreeSeed",
      "name": "Arbor Acorn"
    },
    {
      "id": "GasGrassSeed",
      "name": "Gas Grass Seed"
    },
    {
      "id": "SpiceVineSeed",
      "name": "Pincha Pepper Seed"
    },
    {
      "id": "SeaLettuceSeed",
      "name": "Waterweed Seed"
    },
    {
      "id": "SaltPlantSeed",
      "name": "Dasha Saltvine Seed"
    },
    {
      "id": "SwampHarvestPlantSeed",
      "name": "Bog Bucket Seed"
    },
    {
      "id": "PrickleGrassSeed",
      "name": "Briar Seed"
    },
    {
      "id": "OxyfernSeed",
      "name": "Oxyfern Seed"
    },
    {
      "id": "MushroomSeed",
      "name": "Fungal Spore"
    },
    {
      "id": "LeafyPlantSeed",
      "name": "Mirth Leaf Seed"
    },
    {
      "id": "PrickleFlowerSeed",
      "name": "Blossom Seed"
    },
    {
      "id": "SwampLilySeed",
      "name": "Balm Lily Seed"
    },
    {
      "id": "WormPlantSeed",
      "name": "Grubfruit Seed"
    },
    {
      "id": "WineCupsSeed",
      "name": "Mallow Seed"
    },
    {
      "id": "ToePlantSeed",
      "name": "Tranquil Toe Seed"
    }
  ],
  "Industrial": [
    {
      "id": "IntermediateRadPill",
      "name": "Intermediate Rad Pill"
    },
    {
      "id": "IntermediateCure",
      "name": "Medical Pack"
    },
    {
      "id": "IntermediateBooster",
      "name": "Immuno Booster"
    },
    {
      "id": "BasicRadPill",
      "name": "Basic Rad Pill"
    },
    {
      "id": "BasicCure",
      "name": "Curative Tablet"
    },
    {
      "id": "BasicBooster",
      "name": "Vitamin Chews"
    },
    {
      "id": "Antihistamine",
      "name": "Allergy Medication"
    },
    {
      "id": "SwampLilyFlower",
      "name": "Balm Lily Flower"
    },
    {
      "id": "AdvancedCure",
      "name": "Serum Vial"
    },
    {
      "id": "WoodLog",
      "name": "Lumber"
    },
    {
      "id": "ResearchDatabank",
      "name": "Data Bank"
    },
    {
      "id": "OrbitalResearchDatabank",
      "name": "Data Bank"
    },
    {
      "id": "CrabWoodShell",
      "name": "Oakshell Molt"
    },
    {
      "id": "CrabShell",
      "name": "Pokeshell Molt"
    },
    {
      "id": "BabyCrabWoodShell",
      "name": "Small Oakshell Molt"
    },
    {
      "id": "BabyCrabShell",
      "name": "Small Pokeshell Molt"
    },
    {
      "id": "GeneShufflerRecharge",
      "name": "Vacillator Recharge"
    },
    {
      "id": "HeatCube",
      "name": "Heat Cube"
    },
    {
      "id": "MissileBasic",
      "name": "Blastshot"
    },
    {
      "id": "BasicFabric",
      "name": "Reed Fiber"
    },
    {
      "id": "GingerConfig",
      "name": "Tonic Root"
    }
  ]
}`

const objectJson = JSON.parse(rawJson)

export const ItemDataEn = objectJson;