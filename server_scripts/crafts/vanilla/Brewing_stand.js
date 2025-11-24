console.info('Chargement des crafts - Brewing Stand (MoreJS)')

/* #region exemple */

/* ========================================
    BREWING STAND RECIPES avec MoreJS

    Syntaxe pour addCustomBrewing :
    event.addCustomBrewing(
       'ingredient_du_haut',    // L'ingrédient en haut du brewing stand
       'ingredient_du_bas',      // L'item dans les slots du bas
       'resultat'                // Le résultat
    )
======================================== */

/* #endregion exemple */

ServerEvents.recipes(event => {

    /* #region dragon blood neutral */

        event.brewing(
            'minecraft:blaze_powder',                    // Ingrédient du haut
            'minecraft:potion',                          // Water bottle (potion d'eau)
            'esi:iceandfire_dragon_neutral_blood'        // Résultat
        )

    /* #endregion dragon blood neutral */

    /* #region Fire dragon blood */

//    event.addCustomBrewing(
//        'iceandfire:fire_dragon_blood',
//        'esi:iceandfire_dragon_neutral_blood',
//        'iceandfire:fire_dragon_blood'
//    )

    /* #endregion Fire dragon blood */

    /* #region Ice dragon blood */

//    event.addCustomBrewing(
//        'iceandfire:ice_dragon_blood',
//        'esi:iceandfire_dragon_neutral_blood',
//        'iceandfire:ice_dragon_blood'
//    )

    /* #endregion Ice dragon blood */

    /* #region Lightning dragon blood */

//    event.addCustomBrewing(
//        'iceandfire:lightning_dragon_blood',
//        'esi:iceandfire_dragon_neutral_blood',
//        'iceandfire:lightning_dragon_blood'
//    )

    /* #endregion Lightning dragon blood */
});