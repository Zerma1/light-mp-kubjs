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

    /* #region Ultimate Lava Bucket */

    event.create('esi:ultimate_lava_bucket')
        .displayName('Ultimate Lava Bucket')
        .tooltip('§6Un seau de lave ultime§r') // §6 = or
        .tooltip('§cContient une lave d\'une chaleur extrême')  // §c = rouge
        .maxStackSize(1)
        .rarity('epic')

    /* #endregion Ultimate Lava Bucket */

})