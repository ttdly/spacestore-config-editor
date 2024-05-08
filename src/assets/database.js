const rawJson = `{
  "固体": [
    {
      "id": "Algae",
      "name": "藻类 (固体)"
    },
    {
      "id": "Aluminum",
      "name": "铝 (固体)"
    },
    {
      "id": "AluminumOre",
      "name": "铝矿 (固体)"
    },
    {
      "id": "Bitumen",
      "name": "沥青 (固体)"
    },
    {
      "id": "BleachStone",
      "name": "漂白石 (固体)"
    },
    {
      "id": "BrineIce",
      "name": "浓盐冰 (固体)"
    },
    {
      "id": "Carbon",
      "name": "煤炭 (固体)"
    },
    {
      "id": "Ceramic",
      "name": "陶瓷 (固体)"
    },
    {
      "id": "Clay",
      "name": "粘土 (固体)"
    },
    {
      "id": "Copper",
      "name": "铜 (固体)"
    },
    {
      "id": "Creature",
      "name": "遗传生物软泥 (固体)"
    },
    {
      "id": "CrushedIce",
      "name": "碎冰 (固体)"
    },
    {
      "id": "CrushedRock",
      "name": "碎岩 (固体)"
    },
    {
      "id": "Cuprite",
      "name": "铜矿 (固体)"
    },
    {
      "id": "Diamond",
      "name": "钻石 (固体)"
    },
    {
      "id": "Dirt",
      "name": "泥土 (固体)"
    },
    {
      "id": "DirtyIce",
      "name": "污染冰 (固体)"
    },
    {
      "id": "Fertilizer",
      "name": "肥料 (固体)"
    },
    {
      "id": "FoolsGold",
      "name": "黄铁矿 (固体)"
    },
    {
      "id": "Fossil",
      "name": "化石 (固体)"
    },
    {
      "id": "Fullerene",
      "name": "富勒烯 (固体)"
    },
    {
      "id": "Glass",
      "name": "玻璃 (固体)"
    },
    {
      "id": "Gold",
      "name": "金 (固体)"
    },
    {
      "id": "GoldAmalgam",
      "name": "金汞齐 (固体)"
    },
    {
      "id": "Granite",
      "name": "花岗岩 (固体)"
    },
    {
      "id": "HardPolypropylene",
      "name": "塑料质 (固体)"
    },
    {
      "id": "Ice",
      "name": "冰 (固体)"
    },
    {
      "id": "IgneousRock",
      "name": "火成岩 (固体)"
    },
    {
      "id": "Iron",
      "name": "铁 (固体)"
    },
    {
      "id": "IronOre",
      "name": "铁矿 (固体)"
    },
    {
      "id": "Isoresin",
      "name": "异构树脂 (固体)"
    },
    {
      "id": "Katairite",
      "name": "深渊晶石 (固体)"
    },
    {
      "id": "Lead",
      "name": "铅 (固体)"
    },
    {
      "id": "Lime",
      "name": "石灰 (固体)"
    },
    {
      "id": "MaficRock",
      "name": "镁铁质岩 (固体)"
    },
    {
      "id": "MilkFat",
      "name": "咸乳蜡 (固体)"
    },
    {
      "id": "MilkIce",
      "name": "凝冻咸乳 (固体)"
    },
    {
      "id": "Niobium",
      "name": "铌 (固体)"
    },
    {
      "id": "Obsidian",
      "name": "黑曜石 (固体)"
    },
    {
      "id": "OxyRock",
      "name": "氧石 (固体)"
    },
    {
      "id": "Phosphorite",
      "name": "磷矿 (固体)"
    },
    {
      "id": "Phosphorus",
      "name": "精炼磷 (固体)"
    },
    {
      "id": "Polypropylene",
      "name": "塑料 (固体)"
    },
    {
      "id": "RefinedCarbon",
      "name": "精炼碳 (固体)"
    },
    {
      "id": "Regolith",
      "name": "浮土 (固体)"
    },
    {
      "id": "Rust",
      "name": "铁锈 (固体)"
    },
    {
      "id": "Salt",
      "name": "盐 (固体)"
    },
    {
      "id": "Sand",
      "name": "沙子 (固体)"
    },
    {
      "id": "SandStone",
      "name": "砂岩 (固体)"
    },
    {
      "id": "SedimentaryRock",
      "name": "沉积岩 (固体)"
    },
    {
      "id": "SlimeMold",
      "name": "菌泥 (固体)"
    },
    {
      "id": "Snow",
      "name": "雪 (固体)"
    },
    {
      "id": "SolidCarbonDioxide",
      "name": "固态二氧化碳 (固体)"
    },
    {
      "id": "SolidChlorine",
      "name": "固态氯 (固体)"
    },
    {
      "id": "SolidCrudeOil",
      "name": "固态原油 (固体)"
    },
    {
      "id": "SolidEthanol",
      "name": "固态乙醇 (固体)"
    },
    {
      "id": "SolidHydrogen",
      "name": "固态氢 (固体)"
    },
    {
      "id": "SolidMethane",
      "name": "固态甲烷 (固体)"
    },
    {
      "id": "SolidNaphtha",
      "name": "固态石脑油 (固体)"
    },
    {
      "id": "SolidOxygen",
      "name": "固态氧 (固体)"
    },
    {
      "id": "SolidPetroleum",
      "name": "固态石油 (固体)"
    },
    {
      "id": "SolidPropane",
      "name": "固态丙烷 (固体)"
    },
    {
      "id": "SolidSuperCoolant",
      "name": "固态超级冷却剂 (固体)"
    },
    {
      "id": "SolidViscoGel",
      "name": "固态粘性凝胶 (固体)"
    },
    {
      "id": "Steel",
      "name": "钢 (固体)"
    },
    {
      "id": "Sulfur",
      "name": "硫 (固体)"
    },
    {
      "id": "SuperInsulator",
      "name": "隔热质 (固体)"
    },
    {
      "id": "TempConductorSolid",
      "name": "导热质 (固体)"
    },
    {
      "id": "ToxicSand",
      "name": "污染土 (固体)"
    },
    {
      "id": "Tungsten",
      "name": "钨 (固体)"
    },
    {
      "id": "Unobtanium",
      "name": "中子质 (固体)"
    },
    {
      "id": "Wolframite",
      "name": "黑钨矿 (固体)"
    }
  ],
  "液体": [
    {
      "id": "Brine",
      "name": "浓盐水 (液体)"
    },
    {
      "id": "Chlorine",
      "name": "液态氯 (液体)"
    },
    {
      "id": "CrudeOil",
      "name": "原油 (液体)"
    },
    {
      "id": "DirtyWater",
      "name": "污染水 (液体)"
    },
    {
      "id": "Ethanol",
      "name": "乙醇 (液体)"
    },
    {
      "id": "LiquidCarbonDioxide",
      "name": "液态二氧化碳 (液体)"
    },
    {
      "id": "LiquidHydrogen",
      "name": "液态氢 (液体)"
    },
    {
      "id": "LiquidMethane",
      "name": "液态甲烷 (液体)"
    },
    {
      "id": "LiquidOxygen",
      "name": "液态氧 (液体)"
    },
    {
      "id": "LiquidPhosphorus",
      "name": "液态磷 (液体)"
    },
    {
      "id": "LiquidPropane",
      "name": "液态丙烷 (液体)"
    },
    {
      "id": "LiquidSulfur",
      "name": "液态硫 (液体)"
    },
    {
      "id": "Magma",
      "name": "岩浆 (液体)"
    },
    {
      "id": "Milk",
      "name": "咸乳 (液体)"
    },
    {
      "id": "MoltenAluminum",
      "name": "熔融铝 (液体)"
    },
    {
      "id": "MoltenCarbon",
      "name": "熔融碳 (液体)"
    },
    {
      "id": "MoltenCopper",
      "name": "熔融铜 (液体)"
    },
    {
      "id": "MoltenGlass",
      "name": "熔融玻璃 (液体)"
    },
    {
      "id": "MoltenGold",
      "name": "熔融金 (液体)"
    },
    {
      "id": "MoltenIron",
      "name": "熔融铁 (液体)"
    },
    {
      "id": "MoltenLead",
      "name": "熔融铅 (液体)"
    },
    {
      "id": "MoltenNiobium",
      "name": "熔融铌 (液体)"
    },
    {
      "id": "MoltenSalt",
      "name": "熔融盐 (液体)"
    },
    {
      "id": "MoltenSteel",
      "name": "熔融钢 (液体)"
    },
    {
      "id": "MoltenTungsten",
      "name": "熔融钨 (液体)"
    },
    {
      "id": "Naphtha",
      "name": "液态石脑油 (液体)"
    },
    {
      "id": "Petroleum",
      "name": "石油 (液体)"
    },
    {
      "id": "SaltWater",
      "name": "盐水 (液体)"
    },
    {
      "id": "SuperCoolant",
      "name": "超级冷却剂 (液体)"
    },
    {
      "id": "ViscoGel",
      "name": "粘性凝胶流体 (液体)"
    },
    {
      "id": "Water",
      "name": "水 (液体)"
    }
  ],
  "气体": [
    {
      "id": "AluminumGas",
      "name": "气态铝 (气体)"
    },
    {
      "id": "CarbonDioxide",
      "name": "二氧化碳 (气体)"
    },
    {
      "id": "CarbonGas",
      "name": "气态碳 (气体)"
    },
    {
      "id": "ChlorineGas",
      "name": "氯气 (气体)"
    },
    {
      "id": "ContaminatedOxygen",
      "name": "污染氧 (气体)"
    },
    {
      "id": "CopperGas",
      "name": "气态铜 (气体)"
    },
    {
      "id": "EthanolGas",
      "name": "气态乙醇 (气体)"
    },
    {
      "id": "GoldGas",
      "name": "气态金 (气体)"
    },
    {
      "id": "Hydrogen",
      "name": "氢气 (气体)"
    },
    {
      "id": "IronGas",
      "name": "气态铁 (气体)"
    },
    {
      "id": "LeadGas",
      "name": "气态铅 (气体)"
    },
    {
      "id": "Methane",
      "name": "天然气 (气体)"
    },
    {
      "id": "NiobiumGas",
      "name": "气态铌 (气体)"
    },
    {
      "id": "Oxygen",
      "name": "氧气 (气体)"
    },
    {
      "id": "PhosphorusGas",
      "name": "气态磷 (气体)"
    },
    {
      "id": "RockGas",
      "name": "气态岩 (气体)"
    },
    {
      "id": "SaltGas",
      "name": "气态盐 (气体)"
    },
    {
      "id": "SourGas",
      "name": "高硫天然气 (气体)"
    },
    {
      "id": "Steam",
      "name": "蒸汽 (气体)"
    },
    {
      "id": "SteelGas",
      "name": "气态钢 (气体)"
    },
    {
      "id": "SulfurGas",
      "name": "硫蒸气 (气体)"
    },
    {
      "id": "SuperCoolantGas",
      "name": "气态超级冷却剂 (气体)"
    },
    {
      "id": "TungstenGas",
      "name": "气态钨 (气体)"
    }
  ],
  "食物": [
    {
      "id": "Tofu",
      "name": "豆腐"
    },
    {
      "id": "DehydratedSurfAndTurf",
      "name": "干燥的海陆双拼"
    },
    {
      "id": "DehydratedSpicyTofu",
      "name": "干燥的麻婆豆腐"
    },
    {
      "id": "SpicyTofu",
      "name": "麻婆豆腐"
    },
    {
      "id": "SpiceNut",
      "name": "火椒粒"
    },
    {
      "id": "DehydratedSpiceBread",
      "name": "干燥的火椒面包"
    },
    {
      "id": "SpiceBread",
      "name": "火椒面包"
    },
    {
      "id": "ShellfishMeat",
      "name": "生蟹肉"
    },
    {
      "id": "DehydratedSalsa",
      "name": "干燥的浆果酿"
    },
    {
      "id": "SurfAndTurf",
      "name": "海陆双拼"
    },
    {
      "id": "Salsa",
      "name": "浆果酿"
    },
    {
      "id": "RawEgg",
      "name": "生蛋"
    },
    {
      "id": "DehydratedQuiche",
      "name": "干燥的蘑菇乳蛋饼"
    },
    {
      "id": "BasicForagePlant",
      "name": "淤泥根"
    },
    {
      "id": "BeanPlantSeed",
      "name": "小吃豆"
    },
    {
      "id": "ColdWheatSeed",
      "name": "冰霜麦粒"
    },
    {
      "id": "ForestForagePlant",
      "name": "六角根果实"
    },
    {
      "id": "DehydratedFoodPackage",
      "name": "干燥的冰霜汉堡"
    },
    {
      "id": "ColdWheatBread",
      "name": "冰霜面包"
    },
    {
      "id": "CookedEgg",
      "name": "煎蛋卷"
    },
    {
      "id": "CookedFish",
      "name": "烤海鲜"
    },
    {
      "id": "CookedMeat",
      "name": "烤肉串"
    },
    {
      "id": "Curry",
      "name": "咖喱豆"
    },
    {
      "id": "FieldRation",
      "name": "营养棒"
    },
    {
      "id": "FishMeat",
      "name": "帕库鱼片"
    },
    {
      "id": "FriedMushBar",
      "name": "炸泥膏"
    },
    {
      "id": "FriedMushroom",
      "name": "煎蘑菇"
    },
    {
      "id": "FruitCake",
      "name": "浆果糕"
    },
    {
      "id": "Burger",
      "name": "冰霜汉堡"
    },
    {
      "id": "GammaMush",
      "name": "伽马泥膏"
    },
    {
      "id": "Lettuce",
      "name": "海生菜"
    },
    {
      "id": "Meat",
      "name": "肉"
    },
    {
      "id": "MushBar",
      "name": "软泥膏"
    },
    {
      "id": "Mushroom",
      "name": "蘑菇"
    },
    {
      "id": "MushroomWrap",
      "name": "蘑菇卷"
    },
    {
      "id": "DehydratedMushroomWrap",
      "name": "干燥的蘑菇卷"
    },
    {
      "id": "Pancakes",
      "name": "蛋奶酥煎饼"
    },
    {
      "id": "PickledMeal",
      "name": "腌制米虱"
    },
    {
      "id": "PrickleFruit",
      "name": "毛刺浆果"
    },
    {
      "id": "Quiche",
      "name": "蘑菇乳蛋饼"
    },
    {
      "id": "GrilledPrickleFruit",
      "name": "炙烤刺果"
    },
    {
      "id": "DehydratedCurry",
      "name": "干燥的咖喱豆"
    },
    {
      "id": "BasicPlantFood",
      "name": "米虱"
    },
    {
      "id": "BasicPlantBar",
      "name": "米虱糕"
    }
  ],
  "树鼠": [
    {
      "id": "Squirrel",
      "name": "树鼠"
    },
    {
      "id": "SquirrelHug",
      "name": "毛绒树鼠"
    },
    {
      "id": "SquirrelHugBaby",
      "name": "毛绒树鼠幼崽"
    },
    {
      "id": "SquirrelBaby",
      "name": "树鼠幼崽"
    }
  ],
  "喷浮飞鱼": [
    {
      "id": "Puft",
      "name": "喷浮飞鱼"
    },
    {
      "id": "PuftOxylite",
      "name": "厚壳飞鱼"
    },
    {
      "id": "PuftAlpha",
      "name": "贵族飞鱼"
    },
    {
      "id": "PuftBleachstone",
      "name": "洁净飞鱼"
    },
    {
      "id": "PuftOxyliteBaby",
      "name": "厚壳飞鱼幼体"
    },
    {
      "id": "PuftBaby",
      "name": "喷浮飞鱼幼体"
    },
    {
      "id": "PuftBleachstoneBaby",
      "name": "洁净飞鱼幼体"
    },
    {
      "id": "PuftAlphaBaby",
      "name": "贵族飞鱼幼体"
    }
  ],
  "毛鳞壁虎": [
    {
      "id": "Drecko",
      "name": "毛鳞壁虎"
    },
    {
      "id": "DreckoPlastic",
      "name": "滑鳞壁虎"
    },
    {
      "id": "DreckoPlasticBaby",
      "name": "滑鳞壁虎幼崽"
    },
    {
      "id": "DreckoBaby",
      "name": "毛鳞壁虎幼崽"
    }
  ],
  "疫病章鱼": [
    {
      "id": "Glom",
      "name": "疫病章鱼"
    }
  ],
  "发光虫": [
    {
      "id": "LightBugBlack",
      "name": "深渊虫"
    },
    {
      "id": "LightBugBlue",
      "name": "天蓝虫"
    },
    {
      "id": "LightBug",
      "name": "发光虫"
    },
    {
      "id": "LightBugCrystal",
      "name": "光耀虫"
    },
    {
      "id": "LightBugPink",
      "name": "珊瑚虫"
    },
    {
      "id": "LightBugPurple",
      "name": "皇家虫"
    },
    {
      "id": "LightBugOrange",
      "name": "阳光虫"
    },
    {
      "id": "LightBugBaby",
      "name": "发光虫幼虫"
    },
    {
      "id": "LightBugPurpleBaby",
      "name": "皇家虫幼虫"
    },
    {
      "id": "LightBugPinkBaby",
      "name": "珊瑚虫幼虫"
    },
    {
      "id": "LightBugOrangeBaby",
      "name": "阳光虫幼虫"
    },
    {
      "id": "LightBugCrystalBaby",
      "name": "光耀虫幼虫"
    },
    {
      "id": "LightBugBlueBaby",
      "name": "天蓝虫幼虫"
    },
    {
      "id": "LightBugBlackBaby",
      "name": "深渊虫幼虫"
    }
  ],
  "锹环田鼠": [
    {
      "id": "Mole",
      "name": "锹环田鼠"
    },
    {
      "id": "MoleDelicacy",
      "name": "珍馐田鼠"
    },
    {
      "id": "MoleDelicacyBaby",
      "name": "珍馐田鼠幼崽"
    },
    {
      "id": "MoleBaby",
      "name": "锹环田鼠幼崽"
    }
  ],
  "释气海牛": [
    {
      "id": "Moo",
      "name": "释气海牛"
    }
  ],
  "浮油生物": [
    {
      "id": "Oilfloater",
      "name": "浮油生物"
    },
    {
      "id": "OilfloaterDecor",
      "name": "长毛浮油生物"
    },
    {
      "id": "OilfloaterHighTemp",
      "name": "熔岩浮油生物"
    },
    {
      "id": "OilfloaterHighTempBaby",
      "name": "熔岩浮油生物幼体"
    },
    {
      "id": "OilfloaterDecorBaby",
      "name": "长毛浮油生物幼体"
    },
    {
      "id": "OilfloaterBaby",
      "name": "浮油生物幼体"
    }
  ],
  "好吃哈奇": [
    {
      "id": "HatchVeggie",
      "name": "草质哈奇"
    },
    {
      "id": "Hatch",
      "name": "好吃哈奇"
    },
    {
      "id": "HatchHard",
      "name": "石壳哈奇"
    },
    {
      "id": "HatchMetal",
      "name": "光滑哈奇"
    },
    {
      "id": "HatchBaby",
      "name": "好吃哈奇幼崽"
    },
    {
      "id": "HatchMetalBaby",
      "name": "光滑哈奇幼崽"
    },
    {
      "id": "HatchVeggieBaby",
      "name": "草质哈奇幼崽"
    },
    {
      "id": "HatchHardBaby",
      "name": "石壳哈奇幼崽"
    }
  ],
  "抛壳蟹": [
    {
      "id": "Crab",
      "name": "抛壳蟹"
    },
    {
      "id": "CrabWood",
      "name": "木壳蟹"
    },
    {
      "id": "CrabFreshWater",
      "name": "沙泥蟹"
    },
    {
      "id": "CrabFreshWaterBaby",
      "name": "沙泥蟹幼体"
    },
    {
      "id": "CrabWoodBaby",
      "name": "木壳蟹幼体"
    },
    {
      "id": "CrabBaby",
      "name": "抛壳蟹幼体"
    }
  ],
  "帕库鱼": [
    {
      "id": "PacuCleaner",
      "name": "大嘴鱼"
    },
    {
      "id": "PacuTropical",
      "name": "热带帕库鱼"
    },
    {
      "id": "Pacu",
      "name": "帕库鱼"
    },
    {
      "id": "PacuTropicalBaby",
      "name": "热带帕库鱼苗"
    },
    {
      "id": "PacuBaby",
      "name": "帕库鱼苗"
    },
    {
      "id": "PacuCleanerBaby",
      "name": "大嘴鱼苗"
    }
  ],
  "蛋": [
    {
      "id": "SquirrelEgg",
      "name": "树鼠蛋"
    },
    {
      "id": "SquirrelHugEgg",
      "name": "毛绒树鼠蛋"
    },
    {
      "id": "PuftEgg",
      "name": "喷浮飞鱼蛋"
    },
    {
      "id": "DreckoEgg",
      "name": "毛鳞壁虎蛋"
    },
    {
      "id": "DreckoPlasticEgg",
      "name": "滑鳞壁虎蛋"
    },
    {
      "id": "LightBugBlackEgg",
      "name": "深渊虫卵"
    },
    {
      "id": "LightBugBlueEgg",
      "name": "天蓝虫卵"
    },
    {
      "id": "LightBugEgg",
      "name": "发光虫卵"
    },
    {
      "id": "PuftOxyliteEgg",
      "name": "厚壳飞鱼蛋"
    },
    {
      "id": "LightBugCrystalEgg",
      "name": "光耀虫卵"
    },
    {
      "id": "LightBugPinkEgg",
      "name": "珊瑚虫卵"
    },
    {
      "id": "LightBugPurpleEgg",
      "name": "皇家虫卵"
    },
    {
      "id": "MoleEgg",
      "name": "锹环田鼠蛋"
    },
    {
      "id": "MoleDelicacyEgg",
      "name": "珍馐田鼠蛋"
    },
    {
      "id": "OilfloaterEgg",
      "name": "浮油生物蛋"
    },
    {
      "id": "OilfloaterDecorEgg",
      "name": "长毛浮油生物蛋"
    },
    {
      "id": "OilfloaterHighTempEgg",
      "name": "熔岩浮油生物蛋"
    },
    {
      "id": "PuftAlphaEgg",
      "name": "贵族飞鱼蛋"
    },
    {
      "id": "PuftBleachstoneEgg",
      "name": "洁净飞鱼蛋"
    },
    {
      "id": "LightBugOrangeEgg",
      "name": "阳光虫卵"
    },
    {
      "id": "HatchVeggieEgg",
      "name": "草质哈奇蛋"
    },
    {
      "id": "HatchEgg",
      "name": "好吃哈奇蛋"
    },
    {
      "id": "CrabEgg",
      "name": "抛壳蟹卵"
    },
    {
      "id": "CrabWoodEgg",
      "name": "木壳蟹卵"
    },
    {
      "id": "CrabFreshWaterEgg",
      "name": "沙泥蟹卵"
    },
    {
      "id": "PacuCleanerEgg",
      "name": "大嘴鱼卵"
    },
    {
      "id": "HatchHardEgg",
      "name": "石壳哈奇蛋"
    },
    {
      "id": "PacuTropicalEgg",
      "name": "热带帕库鱼卵"
    },
    {
      "id": "HatchMetalEgg",
      "name": "光滑哈奇蛋"
    },
    {
      "id": "PacuEgg",
      "name": "帕库鱼卵"
    }
  ],
  "装备": [
    {
      "id": "Atmo_Suit",
      "name": "气压服"
    },
    {
      "id": "Cool_Vest",
      "name": "凉爽背心"
    },
    {
      "id": "CustomClothing",
      "name": "精致装束"
    },
    {
      "id": "EquippableBalloon",
      "name": "气球伙伴"
    },
    {
      "id": "Funky_Vest",
      "name": "新潮时装"
    },
    {
      "id": "Jet_Suit",
      "name": "喷气服"
    },
    {
      "id": "Oxygen_Mask",
      "name": "氧气面罩"
    },
    {
      "id": "SleepClinicPajamas",
      "name": "睡衣"
    },
    {
      "id": "Warm_Vest",
      "name": "保暖毛衣"
    }
  ],
  "种子": [
    {
      "id": "BasicFabricMaterialPlantSeed",
      "name": "顶针芦苇种子"
    },
    {
      "id": "BasicSingleHarvestPlantSeed",
      "name": "米虱木种子"
    },
    {
      "id": "BeanPlantSeed",
      "name": "小吃豆"
    },
    {
      "id": "CactusPlantSeed",
      "name": "雀跃掌种子"
    },
    {
      "id": "ColdBreatherSeed",
      "name": "冰息萝卜种子"
    },
    {
      "id": "ColdWheatSeed",
      "name": "冰霜麦粒"
    },
    {
      "id": "EvilFlowerSeed",
      "name": "孢子兰种子"
    },
    {
      "id": "BulbPlantSeed",
      "name": "同伴芽种子"
    },
    {
      "id": "ForestTreeSeed",
      "name": "乔木橡实"
    },
    {
      "id": "GasGrassSeed",
      "name": "释气草种子"
    },
    {
      "id": "PrickleGrassSeed",
      "name": "诱人荆棘种子"
    },
    {
      "id": "SaltPlantSeed",
      "name": "沙盐藤种子"
    },
    {
      "id": "PrickleFlowerSeed",
      "name": "毛刺花种子"
    },
    {
      "id": "SeaLettuceSeed",
      "name": "水草种子"
    },
    {
      "id": "SpiceVineSeed",
      "name": "火椒种子"
    },
    {
      "id": "OxyfernSeed",
      "name": "氧齿蕨种子"
    },
    {
      "id": "SwampLilySeed",
      "name": "芳香百合种子"
    },
    {
      "id": "LeafyPlantSeed",
      "name": "欢乐叶种子"
    },
    {
      "id": "MushroomSeed",
      "name": "真菌孢子"
    }
  ],
  "工业": [
    {
      "id": "IntermediateCure",
      "name": "医疗包"
    },
    {
      "id": "IntermediateBooster",
      "name": "免疫增补剂"
    },
    {
      "id": "BasicCure",
      "name": "治疗药片"
    },
    {
      "id": "BasicBooster",
      "name": "维生素咀嚼胶囊"
    },
    {
      "id": "Antihistamine",
      "name": "抗敏药"
    },
    {
      "id": "AdvancedCure",
      "name": "血清瓶"
    },
    {
      "id": "WoodLog",
      "name": "木料"
    },
    {
      "id": "SwampLilyFlower",
      "name": "芳香百合花"
    },
    {
      "id": "ResearchDatabank",
      "name": "数据磁盘"
    },
    {
      "id": "CrabWoodShell",
      "name": "木蟹壳"
    },
    {
      "id": "BabyCrabWoodShell",
      "name": "小木蟹壳"
    },
    {
      "id": "BabyCrabShell",
      "name": "小蟹壳"
    },
    {
      "id": "CrabShell",
      "name": "蟹壳"
    },
    {
      "id": "MissileBasic",
      "name": "爆破弹"
    },
    {
      "id": "GeneShufflerRecharge",
      "name": "振荡仪充能器"
    },
    {
      "id": "BasicFabric",
      "name": "芦苇纤维"
    },
    {
      "id": "GingerConfig",
      "name": "滋补根"
    }
  ]
}`

const objectJson = JSON.parse(rawJson)

export const ItemDataZh = objectJson;