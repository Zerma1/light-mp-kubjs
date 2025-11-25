// Crafts avec Create - Crushing Wheels
console.info('Chargement des crafts - Create Crushing Wheels')

ServerEvents.recipes(event => {

/* #region explication */
/*
    CRUSHING WHEELS RECIPES

           Syntaxe de base :
           event.recipes.create.crushing(
               'Résultat (output)',
               'Item à écraser (input)'
           )

           Avec chances multiples :
           event.recipes.create.crushing(
               [
                   'output_garanti',
                   CreateItem.of('output2', 0.25)  // 25%
                   CreateItem.of('2x output3', 0.10)  // 10% de chance d'obtenir 2 fois l'item
               ],
               'input'
           ).processingTime(250) // Temps de traitement optionnel (en ticks, 20 ticks = 1 seconde) 250 par defaut
*/
/* #endregion explication */

       /* #region test */
//
//       event.recipes.create.crushing(
//               'minecraft:diamond',
//               'minecraft:coal_block'
//           )
//
//           event.recipes.create.crushing(
//               'minecraft:clay_ball',
//               'minecraft:cut_sandstone'
//           ).processingTime(500)
//
//           event.recipes.create.crushing(
//               [
//                   'minecraft:diamond',
//                   CreateItem.of('minecraft:diamond', 0.5)
//               ], 'minecraft:sand'
//           )

       /* #endregion test */

         // Amethyst Block -> 4x Amethyst Shard + 25% chance 1x Bud + 10% chance 8x Dust + 5% chance 1x Cluster
       event.recipes.create.crushing(
                 [
                     '4x biomesoplenty:rose_quartz_chunk',
                     CreateItem.of('biomesoplenty:rose_quartz_chunk', 0.25),  // 25%
                     CreateItem.of('8x minecraft:redstone', 0.10),  // 10%
                     CreateItem.of('minecraft:quartz', 0.05)  // 5%
                 ],
                 'biomesoplenty:rose_quartz_block'
             )






})