console.info('Chargement des items - Items')

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