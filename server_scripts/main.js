// Visit the wiki for more info - https://kubejs.com/
console.info('Hello, World! (Loaded server example script)')

/* #region table de craft */

// 1. Amethyst Shard - 4 shards depuis 1 bloc
ServerEvents.recipes(event => {
    event.shapeless('4x minecraft:amethyst_shard', 'minecraft:amethyst_block')

// 2. Blaze Head - esi:blaze_head (craft alternatif si pas de drop)
//    event.shaped('esi:blaze_head', [
//        'BBB',
//        'BSB',
//        'BBB'
//    ], {
//        B: 'minecraft:blaze_powder',
//        S: 'minecraft:wither_skeleton_skull'
//    })

// 3. Flux Dust - 9x fluxnetworks:flux_dust
    event.shaped('9x fluxnetworks:flux_dust', [
        'RRR',
        'ROR',
        'RRR'
    ], {
        R: 'minecraft:redstone',
        O: 'create:powdered_obsidian'
    })
})
/* #endregion table de craft */

