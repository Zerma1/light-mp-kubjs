console.info('Chargement des fluides - Fluids')

StartupEvents.registry('fluid', event => {

/* #region exemple KubJS */

  // Basic "thick" (looks like lava) fluid with red tint
  event.create('thick_fluid')
    .textureThick(0xFF0000)  // ← Changé ici
    .bucketColor(0xFF0000)
    .displayName('Thick Fluid')

  // Basic "thin" (looks like water) fluid with cyan tint
  event.create('thin_fluid')
    .textureThin(0xFF0000)  // ← Changé ici
    .bucketColor(0x00FFFF)
    .displayName('Thin Fluid')
    .noBucket()
    .noBlock()

  // Fluid with custom textures (celui-ci est correct)
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

    event.create('esi:fluid_ultimate_lava')
        .displayName('Ultimate Lava')
        .textureThick(0x8C0082)
        .bucketColor(0x8C0082)  // (format hexadécimal)
        .flowingTexture('minecraft:block/lava_flow')
        .stillTexture('esi:fluid/still_ultimate_lava')
        .luminosity(15)  // Émet de la lumière (0-15)
        .density(1500)   // Plus dense que l'eau (1000)
        .temperature(5000)  // Température élevée
        .viscosity(6000)  // Visqueux

/* #endregion Ultimate Lava */

})