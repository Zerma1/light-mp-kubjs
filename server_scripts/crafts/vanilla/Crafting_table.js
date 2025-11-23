// Crafts avec la table de craft classique
console.info('Chargement des crafts - Crafting Table')

ServerEvents.recipes(event => {

    /* #region CRAFTS SHAPED (avec forme précise) */

    // Blaze Head
    //TODO: Creer l'item avant d'activer ce craft
//        event.shaped('esi:blaze_head', [
//            'BBB',
//            'BSB',
//            'BBB'
//        ], {
//            B: 'minecraft:blaze_powder',
//            S: 'minecraft:wither_skeleton_skull'
//        })

        // Flux Dust - 9x
        event.shaped('9x fluxnetworks:flux_dust', [
            'RRR',
            'ROR',
            'RRR'
        ], {
            R: 'minecraft:redstone',
            O: 'create:powdered_obsidian'
        })

    /* #endregion CRAFTS SHAPED (avec forme précise) */

    /* #region CRAFTS SHAPELESS (sans forme) */

        // uncraft Amethyst Block to 4 Amethyst Shards
        event.shapeless('4x minecraft:amethyst_shard', ['minecraft:amethyst_block'])

        // uncraft Quartz Block to 4 Quartz Crystals
        event.shapeless('4x minecraft:quartz', ['minecraft:quartz_block'])

        // uncraft Rose Quartz Block to 4 Rose Quartz Crystals
        event.shapeless('4x biomesoplenty:rose_quartz_chunk', ['biomesoplenty:rose_quartz_block'])

    /* #endregion CRAFTS SHAPELESS (sans forme) */

})