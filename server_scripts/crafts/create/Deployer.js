D// Crafts avec Create - Deployer
 console.info('Chargement des crafts - Create Deployer')

 ServerEvents.recipes(event => {

     /* ========================================
        DEPLOYER RECIPES (Sandpaper polish)
        ======================================== */

     // Polished Rose Quartz by Sandpaper + Rose Quartz Cluster
      event.recipes.create.deploying('create:polished_rose_quartz',
          [
              'biomesoplenty:rose_quartz_cluster',  // ← Item sur le CONVOYEUR
              'create:sand_paper'                   // ← Item dans la MAIN du DEPLOYER
          ])

     // Ajoutez d'autres crafts ici...

 })