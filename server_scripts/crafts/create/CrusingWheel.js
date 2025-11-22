// Crafts avec Create - Crushing Wheels
console.info('Chargement des crafts - Create Crushing Wheels')

ServerEvents.recipes(event => {

    /* ========================================
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
               Item.of('output2').withChance(0.5),  // 50%
               Item.of('output3').withChance(0.25)  // 25%
           ],
           'input'
       )
       ======================================== */

       event.recipes.create.crushing(
              [
                '4x biomesoplenty:rose_quartz_chunk',
                Item.of('biomesoplenty:crushed_rose_quartz').withChance(0.25)  // 25%
                Item.of('minecraft:redstone').withChance(0.10)  // 10%
                Item.of('minecraft:quartz').withChance(0.05)  // 5%
              ],
              'biomesoplenty:rose_quartz_block'
       )



}