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
    event.create('esi:fluid_ultimate_lava')
        .displayName('Ultimate Lava')
        .stillTexture('esi:fluid/ultimate_lava_still')
        .flowingTexture('esi:fluid/ultimate_lava_flow')
        .bucketColor(0x8C0082)
        .luminosity(15)
        .density(1500)
        .temperature(5000)
        .viscosity(6000)
        .rarity('rare')

    // Personnalisation du seau (à faire APRÈS la création du fluide)
    event.create('esi:fluid_ultimate_lava').bucketItem.texture('esi:item/ultimate_lava_bucket')
//*/
/* #endregion Ultimate Lava */

})