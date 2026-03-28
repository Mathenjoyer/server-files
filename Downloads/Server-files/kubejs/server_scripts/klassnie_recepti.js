ServerEvents.recipes(event => {

    // --- 1. УДАЛЕНИЕ ---
    // Удаляем ВСЕ рецепты, результатом которых является древесный уголь (печки, костры, моды)
    event.remove({ output: 'minecraft:charcoal' })

    // Если хочешь удалить только конкретный рецепт Create (обдув веером):
    event.remove({ id: 'create:fan_blasting/charcoal' })

    event.remove({ output: '#minecraft:banners' })

    event.remove({ type: 'minecraft:banner_duplicate' })

    event.remove({type: 'create:fan_blasting'})

    event.remove({ output: 'rocket_launcher_mod:x_grenade_shell' })

    event.remove({ output: 'immersive_aircraft:engine' })

    event.remove({ output: 'immersive_aircraft:gyrodyne' })

    


    // --- 2. ДОБАВЛЕНИЕ ---


        event.custom({
            type: "create:filling",
            ingredients: [
                { item: "create:cinder_flour" }, // Что поливаем
                {
                    fluid: "create:potion",
                    nbt: { Potion: "minecraft:fire_resistance" },
                    amount: 2100
                } // Чем поливаем (25 mB зелья)
            ],
            results: [
                { item: "minecraft:charcoal" } // Что получаем
            ]
        })

        event.custom({
                type: "create:haunting", // Тип: Одержимость (синий огонь)
                ingredients: [
                    { item: "minecraft:cobblestone" } // Тратим 1 булыжник
                ],
                results: [
                    {
                        item: "minecraft:netherrack",
                        count: 2 // Получаем 2 штуки на выходе
                    }
                ]
        })


        event.custom({
                type: "create:haunting",
                ingredients: [
                    { item: "minecraft:glow_berries" }
                ],
                results: [
                    { item: "minecraft:blaze_powder" }
                ]
        })

        event.custom({
                type: "create:compacting",
                ingredients: [
                    { item: "minecraft:charcoal", count: 9 } // Нужно 9 штук древесного угля
                ],
                results: [
                    { item: "minecraft:coal_block" }
                ]
        })

        event.custom({
                type: "create:compacting",
                heatRequirement: "superheated", // ТРЕБУЕТ СИНЕЕ ПЛАМЯ (Blaze Cake)
                ingredients: [
                    { item: "minecraft:coal_block", count: 4 } // Нужно 4 блока угля
                ],
                results: [
                    { item: "minecraft:diamond" }
                ]
        })

        event.recipes.create.mechanical_crafting('automobility:auto_mechanic_table', [
        'AAAAA',
        'BBDBB',
        'BDCDB',
        'BBDBB',
        'AAAAA'
    ], {
        A: 'minecraft:copper_block',      
        B: 'minecraft:oxidized_copper',
        C: 'minecraft:nether_star',
        D: 'create:precision_mechanism',
    })

    event.shaped('minecraft:white_banner', [
    ' W ',
    'RCR',
    ' I '
], {
    W: 'minecraft:white_wool',
    R: 'create:electron_tube',
    C: 'minecraft:copper_ingot',
    I: 'minecraft:iron_bars'
})

    event.recipes.create.mechanical_crafting('minecraft:black_banner', [
    'FFF',
    'LML',
    'IBI'
], {
    F: 'create:electron_tube',
    L: 'create:brass_ingot',
    M: 'create:precision_mechanism',
    I: 'minecraft:iron_block',
    B: 'create:brass_casing'
})
    
    event.shaped('rocket_launcher_mod:x_grenade_shell', [
        'TTT',
        'TIT', // Используем I
        ' F '
    ], {
        T: 'minecraft:tnt',
        I: 'minecraft:iron_block', // Теперь тут тоже I
        F: 'minecraft:firework_rocket'
    })


    event.recipes.create.mechanical_crafting('immersive_aircraft:engine', [
        'AAAAA',
        'ABDBA',
        'ADCDA',
        'ABDBA',
        'AAAAA'
    ], {
        A: 'create:sturdy_sheet',      
        B: 'create:cogwheel',
        C: 'create:precision_mechanism',
        D: 'minecraft:piston',
    })

})
