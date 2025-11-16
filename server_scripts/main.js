// Visit the wiki for more info - https://kubejs.com/
console.info('Hello, World! (Loaded server example script)')

/* #region table de craft */

ServerEvents.recipes(event => {
    event.shapeless('4x minecraft:amethyst_shard', 'minecraft:amethyst_block')
})

/* #endregion table de craft */

