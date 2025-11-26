console.info('Chargement des fluides - Fluids')



/* #region exemple KubJS */
/*
StartupEvents.registry('fluid', event => {
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
})
*/
/* #endregion exemple KubJS */

StartupEvents.registry('fluid', event => {
/* #region Ultimate Lava */
//*
    event.create('esi:fluid_ultimate_lava', 'thick')  //in this line u can replace "thin" for "thick" and those arguments works like ".thinTexture" and ".thickTexture" respectively.
        .displayName('Ultimate Lava')
        .thint(0x6400FF) //this line is for color and it also handle ".bucketColor" argument in one
        // .stillTexture('esi:fluid/ultimate_lava_still')
        // .flowingTexture('esi:fluid/ultimate_lava_flow')
        // .noBucket() // Le seau sera créé manuellement plus bas
//        .lightLevel(15)
//        .density(1500)
//        .temperature(5000)
//        .viscosity(6000)
//        .rarity('rare')

        // Personnalisation du seau (à faire APRÈS la création du fluide)
//        ultimateLava.bucketItem
//           .displayName('Ultimate Lava Bucket')
//           .tooltip('§6Un seau de lave ultime§r') // §6 = or
//           .tooltip('§cContient une lave d\'une chaleur extrême')  // §c = rouge
//           .maxStackSize(1)
//           .rarity('epic')



//*/
/* #endregion Ultimate Lava */

})
