console.info('Chargement des items - Items')

/* #region item */

StartupEvents.registry('item', event =>{ // ← Correction ici

    /* #region blaze head */

    event.create('esi:blaze_head')
        .displayName('§6Blaze Head§r')
        .tooltip('§7Une tête de Blaze enflammée')
        .tooltip('§cTrès chaude au toucher!')
        .maxStackSize(16)
        .rarity('rare')                         // Options: common, uncommon, rare, epic
        .glow(true)                             // Fait briller l'item (effet enchanté)
        .texture('esi:item/blaze_head')         // Spécifie la texture personnalisée

    /* #endregion blaze head */

    /* #region Dragon Blood Neutral */

    event.create('esi:iceandfire_dragon_neutral_blood')
        .displayName('Neutral Dragon Blood')
        .tooltip('Sang de dragon neutralisé')
        .tooltip('§7Peut être transformé en sang élémentaire')  // §7 = gris
        .maxStackSize(16)
        .rarity('uncommon')

    /* #endregion Dragon Blood Neutral */

})

/* #endregion item */

/* #region fluid */

StartupEvents.registry('fluid', event => {

/* #region exemple KubJS */

// Basic "thick" (looks like lava) fluid with red tint
  event.create('thick_fluid')
    .thickTexture(0xFF0000)
    .bucketColor(0xFF0000)
    .displayName('Thick Fluid')

  // Basic "thin" (looks like water) fluid with cyan tint, has no bucket and is not placeable
  event.create('thin_fluid')
    .thinTexture(0xFF0000)
    .bucketColor(0x00FFFF)
    .displayName('Thin Fluid')
    .noBucket() // both these methods are 1.18.2+ only
    .noBlock()

  // Fluid with custom textures
  event.create('strawberry_cream')
    .displayName('Strawberry Cream')
    .stillTexture('kubejs:block/strawberry_still')
    .flowingTexture('kubejs:block/strawberry_flow')
    .bucketColor(0xFF33FF)

  // Fluid with a modified bucket item
  const tacoSauce = event
    .create('taco_sauce')
    .thickTexture(0xff0000)
    .bucketColor(0xff0000)

  tacoSauce.bucketItem.group('food')

/* #endregion exemple KubJS */

        /* #region Ultimate Lava */

//        event.create('esi:fluid_ultimate_lava')
//                    .displayName('Ultimate Lava')
//                    .thickTexture(0x8C0082)
//                    .bucketColor(0x8C0082)  // (format hexadécimal)
//                    .flowingTexture('minecraft:block/lava_flow')
//                    .stillTexture('esi:fluid/still_ultimate_lava')
//                    .luminosity(15)  // Émet de la lumière (0-15)
//                    .density(1500)   // Plus dense que l'eau (1000)
//                    .temperature(5000)  // Température élevée
//                    .viscosity(6000)  // Visqueux

        /* #endregion Ultimate Lava */

})
/* #endregion fluid */

/* #region block */

StartupEvents.registry('block', event => {

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

})
/* #endregion block */