// Visit the wiki for more info - https://kubejs.com/
console.info('Hello, World! (Loaded startup example script)')
//
///* #region loot table */
//
//EntityEvents.drops('minecraft:blaze', event => {
//
//    event.addDrop('esi:blaze_head')
//         .randomChance(0.05)    // 5% de chance
//         .killedByPlayer()      // Seulement si tué par un joueur
//         .affectedByLooting()   // Augmente avec Looting
//         .count([0,1])          // quantiter entre 0 et 1
//})
//
///* #endregion loot table */
//
///* #region item */
//
//StartupEvents.registry('item', envent =>{
//
//    /* #region blaze head */
//
//    event.create('esi:blaze_head')
//        .displayName('§6Blaze Head§r')
//        .tooltip('§7Une tête de Blaze enflammée')
//        .tooltip('§cTrès chaude au toucher!')
//        .maxStackSize(16)
//        .rarity('rare')  // Options: common, uncommon, rare, epic
//        .glow(true)  // Fait briller l'item (effet enchanté)
//        .texture('minecraft:entity/blaze')
//
//    /* #endregion blaze head */
//
//    /* #region Dragon Blood Neutral */
//
//    event.create('esi:iceandfire_dragon_neutral_blood')
//        .displayName('Neutral Dragon Blood')
//        .tooltip('Sang de dragon neutralisé')
//        .tooltip('§7Peut être transformé en sang élémentaire')  // §7 = gris
//        .maxStackSize(16)
//        .rarity('uncommon')
//
//    /* #endregion Dragon Blood Neutral */
//
//})
//
///* #endregion item */
//
///* #region fluid */
//
//    StartupEvents.registry('fluid', event => {
//
//        /* #region Ultimate Lava */
//
//        event.create('esi:fluid_ultimate_lava')
//                    .displayName('Ultimate Lava')
//                    .bucketColor(0x8C0082)  // (format hexadécimal)
//                    .flowingTexture('minecraft:block/lava_flow')
//                    .stillTexture('minecraft:block/lava_still')
//                    .luminosity(15)  // Émet de la lumière (0-15)
//                    .density(1500)   // Plus dense que l'eau (1000)
//                    .temperature(5000)  // Température élevée
//                    .viscosity(6000)  // Visqueux
//
//        /* #endregion Ultimate Lava */
//
//    })
//
///* #endregion fluid */
//
///* #region block */
//
//    /* #region blaze head */
//
//    event.create('esi:blaze_head')
//            .displayName('§6Blaze Head§r')
//            .textureAll('minecraft:entity/blaze')
//            .material('decoration')           // Type de matériau
//            .hardness(1.0)                    // Résistance à la destruction
//            .resistance(1.0)                  // Résistance aux explosions
//            .soundType('wood')                // Son quand on marche/casse
//            .requiresTool(false)              // Pas besoin d'outil spécial
//            .noCollision()                    // Pas de collision (comme les têtes)
//            .notSolid()                       // Pas solide
//            .lightLevel(10)                   // Émet de la lumière (0-15)
//            .box(4, 0, 4, 12, 8, 12)         // Hitbox personnalisée [x1,y1,z1,x2,y2,z1] (en 16èmes)
//                                            // La box fait la tête plus petite qu'un bloc normal
//            .item(item => {
//                item.tooltip('§7Une tête de Blaze enflammée')
//                item.tooltip('§cTrès chaude au toucher!')
//                item.maxStackSize(16)
//                item.rarity('rare')
//                item.glow(true)
//            })
//
//    /* #endregion blaze head */
//
///* #endregion block */