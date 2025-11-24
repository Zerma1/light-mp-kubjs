// Crafts avec Create - Spout
console.info('Chargement des crafts - Create Spout')

ServerEvents.recipes(event => {

/* #region EXPLICATION */
/*
    SPOUT RECIPES

    Syntaxe de base :
    event.recipes.create.filling(
        'Résultat (output)',
        [
            'Item à remplir (input)',
            Fluid.of('fluide', quantité_en_mB)
        ]
    )

    Exemple :
    event.recipes.create.filling(
        'minecraft:wet_sponge',
        [
            'minecraft:sponge',
            Fluid.of('minecraft:water', 1000)
        ]
    )
*/
/* #endregion EXPLICATION */

    /* #region Creative Blaze Cake */

    // Creative Blaze Cake - nécessite 1000mB d'Ultimate Lava
    event.recipes.create.filling(
        'create:creative_blaze_cake',
        [
            'create:blaze_cake_base',
            Fluid.of('esi:fluid/ultimate_lava', 1000)
        ]
    )

    /* #endregion Creative Blaze Cake */

})