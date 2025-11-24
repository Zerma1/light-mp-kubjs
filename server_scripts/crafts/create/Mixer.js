console.info('Chargement des crafts - Create Mechanical Mixer')

ServerEvents.recipes(event => {

    /* #region exemple */

    /* ========================================
        MECHANICAL MIXER RECIPES

        Syntaxe de base (Mixing) :
        event.recipes.create.mixing(
            'résultat',
            ['ingrédient1', 'ingrédient2', ...]
        ).heated() // ou .superheated() si besoin de chaleur

        Avec fluide en input :
        event.recipes.create.mixing(
            'résultat',
            [
                'ingrédient_solide',
                Fluid.of('minecraft:lava', 250)  // 250mB de lave
            ]
        )

        Avec fluide en output :
        event.recipes.create.mixing(
            Fluid.of('mon_fluide:custom', 1000),  // 1000mB (1 bucket)
            ['ingrédient1', 'ingrédient2']
        )
    ======================================== */

    /* #endregion exemple */

    /* #region Ultimate Lava */

    // TODO: Activer quand le fluide sera créé
    event.recipes.create.mixing(
        Fluid.of('esi:fluid_ultimate_lava', 50),     // 50mB d'Ultimate Lava
        [
            Fluid.of('minecraft:lava', 250),          // 250mB de lave
            '4x minecraft:nether_star'                 // 4 étoiles du Nether
        ]
    ).superheated()  // Nécessite une source de chaleur super chauffée (blaze burner)

    /* #endregion Ultimate Lava */

    /* #region Dragon Blood Neutral */

//    TODO: Activer quand l'item sera créé
    event.recipes.create.mixing(
        '3x esi:iceandfire_dragon_neutral_blood',
        [
            '3x minecraft:potion',
            'minecraft:blaze_powder'
        ]
    ).heated()  // Nécessite une source de chaleur (blaze burner)

    /* #endregion Dragon Blood Neutral */

    /* #region Fire Dragon Blood */

    event.recipes.create.mixing(
        '3x iceandfire:fire_dragon_blood',
        [
            '3x esi:iceandfire_dragon_neutral_blood',
            'iceandfire:fire_dragon_blood'
        ]
    ).heated()

    /* #endregion Fire Dragon Blood */

    /* #region Ice Dragon Blood */

    event.recipes.create.mixing(
        '3x iceandfire:ice_dragon_blood',
        [
            '3x esi:iceandfire_dragon_neutral_blood',
            'iceandfire:ice_dragon_blood'
        ]
    )  // Pas de chaleur nécessaire pour le sang de glace

    /* #endregion Ice Dragon Blood */

    /* #region Lightning Dragon Blood */

    event.recipes.create.mixing(
        '3x iceandfire:lightning_dragon_blood',
        [
            '3x esi:iceandfire_dragon_neutral_blood',
            'iceandfire:lightning_dragon_blood'       // Écaille de dragon de foudre
        ]
    ).superheated()

    /* #endregion Lightning Dragon Blood */

})