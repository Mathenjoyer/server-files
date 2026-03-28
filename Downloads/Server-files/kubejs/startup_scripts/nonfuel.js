ItemEvents.modification(event => {

    // Функция-помощник, чтобы не писать одно и то же 100 раз
    let disableFuel = (item) => {
        event.modify(item, i => {
            i.burnTime = 0
        })
    }

    // Список предметов, которые мы лишаем горючести
    const itemsToDisable = [
        // Бревна (базовые)
        'minecraft:oak_log', 'minecraft:spruce_log', 'minecraft:birch_log',
        'minecraft:jungle_log', 'minecraft:acacia_log', 'minecraft:dark_oak_log',
        'minecraft:mangrove_log', 'minecraft:cherry_log',
        // Обтесанные бревна
        'minecraft:stripped_oak_log', 'minecraft:stripped_spruce_log', 'minecraft:stripped_birch_log',
        'minecraft:stripped_jungle_log', 'minecraft:stripped_acacia_log', 'minecraft:stripped_dark_oak_log',
        'minecraft:stripped_mangrove_log', 'minecraft:stripped_cherry_log',
        // Доски
        'minecraft:oak_planks', 'minecraft:spruce_planks', 'minecraft:birch_planks',
        'minecraft:jungle_planks', 'minecraft:acacia_planks', 'minecraft:dark_oak_planks',
        'minecraft:mangrove_planks', 'minecraft:cherry_planks',
        // Другое
        'minecraft:stick',
        'minecraft:bamboo'
    ]

    // Проходимся по списку и отключаем горение
    itemsToDisable.forEach(id => {
        disableFuel(id)
    })

    // Уголь (делаем ценнее, если хочешь)
    event.modify('minecraft:coal', i => {
        i.burnTime = 2400 // Будет гореть дольше (стандарт 1600)
    })
})