console.info('Chargement des crafts - Create Deployer')

ServerEvents.recipes(event => {

// exemple de deployer
//  event.recipes.create.deploying(
//            'Résultat sur le CONVOYEUR',
//      [
//          ' Item sur le CONVOYEUR',
//          'Item dans la MAIN du DEPLOYER'// ne support pas les tags
//      ])

  // Alternative avec sandpaper_polishing (plus simple)
   event.recipes.create.sandpaper_polishing(
       'create:polished_rose_quartz',
       'biomesoplenty:rose_quartz_chunk'
   )

})