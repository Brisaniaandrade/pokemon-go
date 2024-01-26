function sb () {
    statusbar = statusbars.create(20, 4, StatusBarKind.Health)
    statusbar.setLabel("HP")
    statusbar.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
    statusbar.attachToSprite(ashp, 10, 1)
    statusbar.setColor(3, 15, 0)
    statusbar.value = 100
    statusbar = statusbars.create(20, 4, StatusBarKind.EnemyHealth)
    statusbar.setLabel("HP")
    statusbar.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
    statusbar.attachToSprite(ashd, 10, 1)
    statusbar.setColor(2, 15, 0)
    statusbar.value = 100
}
function sd () {
    statusbar4 = statusbars.create(20, 4, StatusBarKind.Health)
    statusbar4.setLabel("HP")
    statusbar4.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
    statusbar4.attachToSprite(ashp, 10, 1)
    statusbar4.setColor(3, 15, 0)
    statusbar4.value = 100
    statusbar4 = statusbars.create(20, 4, StatusBarKind.EnemyHealth)
    statusbar4.setLabel("HP")
    statusbar4.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
    statusbar4.attachToSprite(ashd, 10, 1)
    statusbar4.setColor(2, 15, 0)
    statusbar4.value = 100
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile5`, function (sprite, location) {
    list = [
    img`
        . . . . c c c b b b b b . . . . 
        . . c c b 4 4 4 4 4 4 b b b . . 
        . c c 4 4 4 4 4 5 4 4 4 4 b c . 
        . e 4 4 4 4 4 4 4 4 4 5 4 4 e . 
        e b 4 5 4 4 5 4 4 4 4 4 4 4 b c 
        e b 4 4 4 4 4 4 4 4 4 4 5 4 4 e 
        e b b 4 4 4 4 4 4 4 4 4 4 4 b e 
        . e b 4 4 4 4 4 5 4 4 4 4 b e . 
        8 7 e e b 4 4 4 4 4 4 b e e 6 8 
        8 7 2 e e e e e e e e e e 2 7 8 
        e 6 6 2 2 2 2 2 2 2 2 2 2 6 c e 
        e c 6 7 6 6 7 7 7 6 6 7 6 c c e 
        e b e 8 8 c c 8 8 c c c 8 e b e 
        e e b e c c e e e e e c e b e e 
        . e e b b 4 4 4 4 4 4 4 4 e e . 
        . . . c c c c c e e e e e . . . 
        `,
    img`
        . . . . . . . e c 7 . . . . . . 
        . . . . e e e c 7 7 e e . . . . 
        . . c e e e e c 7 e 2 2 e e . . 
        . c e e e e e c 6 e e 2 2 2 e . 
        . c e e e 2 e c c 2 4 5 4 2 e . 
        c e e e 2 2 2 2 2 2 4 5 5 2 2 e 
        c e e 2 2 2 2 2 2 2 2 4 4 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 4 2 e 
        . e e e 2 2 2 2 2 2 2 2 2 4 e . 
        . 2 e e 2 2 2 2 2 2 2 2 4 2 e . 
        . . 2 e e 2 2 2 2 2 4 4 2 e . . 
        . . . 2 2 e e 4 4 4 2 e e . . . 
        . . . . . 2 2 e e e e . . . . . 
        `,
    img`
        4 4 4 . . 4 4 4 4 4 . . . . . . 
        4 5 5 4 4 5 5 5 5 5 4 4 . . . . 
        b 4 5 5 1 5 1 1 1 5 5 5 4 . . . 
        . b 5 5 5 5 1 1 5 5 1 1 5 4 . . 
        . b d 5 5 5 5 5 5 5 5 1 1 5 4 . 
        b 4 5 5 5 5 5 5 5 5 5 5 1 5 4 . 
        c d 5 5 5 5 5 5 5 5 5 5 5 5 5 4 
        c d 4 5 5 5 5 5 5 5 5 5 5 1 5 4 
        c 4 5 5 5 d 5 5 5 5 5 5 5 5 5 4 
        c 4 d 5 4 5 d 5 5 5 5 5 5 5 5 4 
        . c 4 5 5 5 5 d d d 5 5 5 5 5 b 
        . c 4 d 5 4 5 d 4 4 d 5 5 5 4 c 
        . . c 4 4 d 4 4 4 4 4 d d 5 d c 
        . . . c 4 4 4 4 4 4 4 4 5 5 5 4 
        . . . . c c b 4 4 4 b b 4 5 4 4 
        . . . . . . c c c c c c b b 4 . 
        `,
    img`
        . . 2 2 b b b b b . . . . . . . 
        . 2 b 4 4 4 4 4 4 b . . . . . . 
        2 2 4 4 4 4 d d 4 4 b . . . . . 
        2 b 4 4 4 4 4 4 d 4 b . . . . . 
        2 b 4 4 4 4 4 4 4 d 4 b . . . . 
        2 b 4 4 4 4 4 4 4 4 4 b . . . . 
        2 b 4 4 4 4 4 4 4 4 4 e . . . . 
        2 2 b 4 4 4 4 4 4 4 b e . . . . 
        . 2 b b b 4 4 4 b b b e . . . . 
        . . e b b b b b b b e e . . . . 
        . . . e e b 4 4 b e e e b . . . 
        . . . . . e e e e e e b d b b . 
        . . . . . . . . . . . b 1 1 1 b 
        . . . . . . . . . . . c 1 d d b 
        . . . . . . . . . . . c 1 b c . 
        . . . . . . . . . . . . c c . . 
        `,
    img`
        . . . . . . 2 2 2 2 . . . . . . 
        . . . . 2 2 3 3 3 3 2 e . . . . 
        . . . 2 3 d 1 1 d d 3 2 e . . . 
        . . 2 3 1 d 3 3 3 d d 3 e . . . 
        . 2 3 1 3 3 3 3 3 d 1 3 b e . . 
        . 2 1 d 3 3 3 3 d 3 3 1 3 b b . 
        2 3 1 d 3 3 1 1 3 3 3 1 3 4 b b 
        2 d 3 3 d 1 3 1 3 3 3 1 3 4 4 b 
        2 d 3 3 3 1 3 1 3 3 3 1 b 4 4 e 
        2 d 3 3 3 1 1 3 3 3 3 1 b 4 4 e 
        e d 3 3 3 3 d 3 3 3 d d b 4 4 e 
        e d d 3 3 3 d 3 3 3 1 3 b 4 b e 
        e 3 d 3 3 1 d d 3 d 1 b b e e . 
        . e 3 1 1 d d 1 1 1 b b e e e . 
        . . e 3 3 3 3 3 3 b e e e e . . 
        . . . e e e e e e e e e e . . . 
        `,
    img`
        . . . . . . b b b b . . . . . . 
        . . . . . . b 4 4 4 b . . . . . 
        . . . . . . b b 4 4 4 b . . . . 
        . . . . . b 4 b b b 4 4 b . . . 
        . . . . b d 5 5 5 4 b 4 4 b . . 
        . . . . b 3 2 3 5 5 4 e 4 4 b . 
        . . . b d 2 2 2 5 7 5 4 e 4 4 e 
        . . . b 5 3 2 3 5 5 5 5 e e e e 
        . . b d 7 5 5 5 3 2 3 5 5 e e e 
        . . b 5 5 5 5 5 2 2 2 5 5 d e e 
        . b 3 2 3 5 7 5 3 2 3 5 d d e 4 
        . b 2 2 2 5 5 5 5 5 5 d d e 4 . 
        b d 3 2 d 5 5 5 d d d 4 4 . . . 
        b 5 5 5 5 d d 4 4 4 4 . . . . . 
        4 d d d 4 4 4 . . . . . . . . . 
        4 4 4 4 . . . . . . . . . . . . 
        `,
    img`
        . . . . . . b b b b a a . . . . 
        . . . . b b d d d 3 3 3 a a . . 
        . . . b d d d 3 3 3 3 3 3 a a . 
        . . b d d 3 3 3 3 3 3 3 3 3 a . 
        . b 3 d 3 3 3 3 3 b 3 3 3 3 a b 
        . b 3 3 3 3 3 a a 3 3 3 3 3 a b 
        b 3 3 3 3 3 a a 3 3 3 3 d a 4 b 
        b 3 3 3 3 b a 3 3 3 3 3 d a 4 b 
        b 3 3 3 3 3 3 3 3 3 3 d a 4 4 e 
        a 3 3 3 3 3 3 3 3 3 d a 4 4 4 e 
        a 3 3 3 3 3 3 3 d d a 4 4 4 e . 
        a a 3 3 3 d d d a a 4 4 4 e e . 
        . e a a a a a a 4 4 4 4 e e . . 
        . . e e b b 4 4 4 4 b e e . . . 
        . . . e e e e e e e e . . . . . 
        . . . . . . . . . . . . . . . . 
        `,
    img`
        . . . . . . . . . . b b b . . . 
        . . . . . . . . b e e 3 3 b . . 
        . . . . . . b b e 3 2 e 3 a . . 
        . . . . b b 3 3 e 2 2 e 3 3 a . 
        . . b b 3 3 3 3 3 e e 3 3 3 a . 
        b b 3 3 3 3 3 3 3 3 3 3 3 3 3 a 
        b 3 3 3 d d d d 3 3 3 3 3 d d a 
        b b b b b b b 3 d d d d d d 3 a 
        b d 5 5 5 5 d b b b a a a a a a 
        b 3 d d 5 5 5 5 5 5 5 d d d d a 
        b 3 3 3 3 3 3 d 5 5 5 d d d d a 
        b 3 d 5 5 5 3 3 3 3 3 3 b b b a 
        b b b 3 d 5 5 5 5 5 5 5 d d b a 
        . . . b b b 3 d 5 5 5 5 d d 3 a 
        . . . . . . b b b b 3 d d d b a 
        . . . . . . . . . . b b b a a . 
        `,
    img`
        . . . . . 3 3 b 3 3 d d 3 3 . . 
        . . . . 3 1 1 d 3 d 1 1 1 1 3 . 
        . . . 3 d 1 1 1 d 1 1 1 d 3 1 3 
        . . 3 d d 1 1 1 d d 1 1 1 3 3 3 
        . 3 1 1 d 1 1 1 1 d d 1 1 b . . 
        . 3 1 1 1 d 1 1 1 1 1 d 1 1 3 . 
        . b d 1 1 1 d 1 1 1 1 1 1 1 3 . 
        . 4 b 1 1 1 1 d d 1 1 1 1 d 3 . 
        . 4 4 d 1 1 1 1 1 1 d d d b b . 
        . 4 d b d 1 1 1 1 1 1 1 1 3 . . 
        4 d d 5 b d 1 1 1 1 1 1 1 3 . . 
        4 5 d 5 5 b b d 1 1 1 1 d 3 . . 
        4 5 5 d 5 5 d b b b d d 3 . . . 
        4 5 5 5 d d d d 4 4 b 3 . . . . 
        . 4 5 5 5 4 4 4 . . . . . . . . 
        . . 4 4 4 . . . . . . . . . . . 
        `,
    img`
        . . . . . . . 6 . . . . . . . . 
        . . . . . . 8 6 6 . . . 6 8 . . 
        . . . e e e 8 8 6 6 . 6 7 8 . . 
        . . e 2 2 2 2 e 8 6 6 7 6 . . . 
        . e 2 2 4 4 2 7 7 7 7 7 8 6 . . 
        . e 2 4 4 2 6 7 7 7 6 7 6 8 8 . 
        e 2 4 5 2 2 6 7 7 6 2 7 7 6 . . 
        e 2 4 4 2 2 6 7 6 2 2 6 7 7 6 . 
        e 2 4 2 2 2 6 6 2 2 2 e 7 7 6 . 
        e 2 4 2 2 4 2 2 2 4 2 2 e 7 6 . 
        e 2 4 2 2 2 2 2 2 2 2 2 e c 6 . 
        e 2 2 2 2 2 2 2 4 e 2 e e c . . 
        e e 2 e 2 2 4 2 2 e e e c . . . 
        e e e e 2 e 2 2 e e e c . . . . 
        e e e 2 e e c e c c c . . . . . 
        . c c c c c c c . . . . . . . . 
        `
    ]
    ashd = sprites.create(list._pickRandom(), SpriteKind.Enemy)
    brockd = sprites.create(list._pickRandom(), SpriteKind.Enemy)
    mistyd = sprites.create(list._pickRandom(), SpriteKind.Enemy)
    ynd = sprites.create(list._pickRandom(), SpriteKind.Enemy)
    tiles.loadMap(tiles.createMap(tilemap`level16`))
    tiles.placeOnRandomTile(Ash, assets.tile`myTile1`)
    tiles.placeOnRandomTile(Brock, assets.tile`myTile2`)
    tiles.placeOnRandomTile(Misty, assets.tile`myTile3`)
    tiles.placeOnRandomTile(YN, assets.tile`myTile4`)
    tiles.placeOnRandomTile(ashd, assets.tile`myTile6`)
    tiles.placeOnRandomTile(brockd, assets.tile`myTile7`)
    tiles.placeOnRandomTile(mistyd, assets.tile`myTile8`)
    tiles.placeOnRandomTile(ynd, assets.tile`myTile9`)
    statusbar.attachToSprite(ashp, 3, 1)
    statusbar2.attachToSprite(brockp, 3, 1)
    statusbar3.attachToSprite(mistyp, 3, 1)
    statusbar4.attachToSprite(ynp, 3, 1)
})
function pt () {
    statusbar3 = statusbars.create(20, 4, StatusBarKind.Health)
    statusbar3.setLabel("HP")
    statusbar3.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
    statusbar3.attachToSprite(ashp, 10, 1)
    statusbar3.setColor(3, 15, 0)
    statusbar3.value = 100
    statusbar3 = statusbars.create(20, 4, StatusBarKind.EnemyHealth)
    statusbar3.setLabel("HP")
    statusbar3.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
    statusbar3.attachToSprite(ashd, 10, 1)
    statusbar3.setColor(2, 15, 0)
    statusbar3.value = 100
}
function pa () {
    statusbar2 = statusbars.create(20, 4, StatusBarKind.Health)
    statusbar2.setLabel("HP")
    statusbar2.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
    statusbar2.attachToSprite(ashp, 10, 1)
    statusbar2.setColor(3, 15, 0)
    statusbar2.value = 100
    statusbar2 = statusbars.create(20, 4, StatusBarKind.EnemyHealth)
    statusbar2.setLabel("HP")
    statusbar2.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
    statusbar2.attachToSprite(ashd, 10, 1)
    statusbar2.setColor(2, 15, 0)
    statusbar2.value = 100
}
let statusbar3: StatusBarSprite = null
let statusbar2: StatusBarSprite = null
let ynd: Sprite = null
let mistyd: Sprite = null
let brockd: Sprite = null
let statusbar4: StatusBarSprite = null
let ashd: Sprite = null
let statusbar: StatusBarSprite = null
let YN: Sprite = null
let Brock: Sprite = null
let Misty: Sprite = null
let Ash: Sprite = null
let ynp: Sprite = null
let mistyp: Sprite = null
let brockp: Sprite = null
let ashp: Sprite = null
let list: Image[] = []
story.setPagePauseLength(100, 200)
story.printCharacterText("PLEASE SELECT A STARTER")
story.showPlayerChoices("BULBASAUR", "CHARMANDER", "SQUIRTLE")
if (story.checkLastAnswer("BULBASAUR")) {
	
} else if (story.checkLastAnswer("CHARMANDER")) {
	
} else if (story.checkLastAnswer("SQUIRTLE")) {
	
}
list = [
img`
    . . . . . . . . . . . . . . e e 
    . . . . . . . . . . . . e e 4 5 
    . . . . . . . . . . e e 4 5 5 5 
    . . . . . . . . . e 4 6 7 7 6 6 
    . . . . . . . . e 4 6 7 4 5 5 5 
    . . . . . . . 4 4 4 8 7 4 4 4 4 
    . . . . . . 4 5 2 2 e 7 7 7 7 7 
    . . . . . 4 5 2 3 2 2 7 7 6 6 7 
    . . . . 4 5 5 2 3 2 e 7 6 6 7 2 
    . . . 4 4 5 6 7 7 7 7 5 5 4 6 2 
    . . . e 6 6 7 7 4 5 5 4 4 7 7 e 
    . . e 4 6 7 7 7 4 4 4 6 7 7 e 5 
    . . e 5 6 6 8 6 7 7 6 6 6 e 5 d 
    . e 4 5 5 4 4 e 8 7 7 6 e 5 d 5 
    . e 5 5 4 e e e e 6 6 e 5 d 5 5 
    . e 5 5 e e 4 4 f e e 5 d 5 d 5 
    `,
img`
    . . . . . . . . . . . . . . b b 
    . . . . . . . . . . . b b 6 6 6 
    . . . . . . . . . b b 3 3 6 7 7 
    . . . . . . . . b 3 3 3 3 3 8 8 
    . . . . . . . b 3 3 3 3 3 3 3 3 
    . . . . . . b 3 4 4 4 3 3 3 3 3 
    . . . . . b 3 4 5 5 4 3 3 3 3 3 
    . . . . b 3 3 3 2 2 3 3 3 d d d 
    . . . b 3 d 3 3 3 3 3 3 d d 3 b 
    . . b 3 d 3 3 3 3 3 3 d 3 b b 3 
    . . b d 3 3 3 3 3 3 3 3 b 3 3 a 
    . b 3 d 3 6 6 3 3 3 3 b 3 3 a a 
    . b d 3 b 9 8 3 3 3 3 a 3 a a 3 
    . b d 6 9 8 3 3 3 3 b a a a 3 3 
    b 3 d 6 8 3 3 3 3 3 b b a 3 3 3 
    b d d 3 3 3 3 3 3 3 b b 3 3 3 3 
    `,
img`
    . . . . . . . . . . . 6 6 6 6 6 
    . . . . . . . . . 6 6 7 7 7 7 8 
    . . . . . . 8 8 8 7 7 8 8 6 8 8 
    . . e e e e c 6 6 8 8 . 8 7 8 . 
    . e 2 5 4 2 e c 8 . . . 6 7 8 . 
    e 2 4 2 2 2 2 2 c . . . 6 7 8 . 
    e 2 2 2 2 2 2 2 c . . . 8 6 8 . 
    e 2 e e 2 2 2 2 e e e e c 6 8 . 
    c 2 e e 2 2 2 2 e 2 5 4 2 c 8 . 
    . c 2 e e e 2 e 2 4 2 2 2 2 c . 
    . . c 2 2 2 e e 2 2 2 2 2 2 2 e 
    . . . e c c e c 2 2 2 2 2 2 2 e 
    . . . . . . . c 2 e e 2 2 e 2 c 
    . . . . . . . c e e e e e e 2 c 
    . . . . . . . . c e 2 2 2 2 c . 
    . . . . . . . . . c c c c c . . 
    `,
img`
    . . . . . . . . . . . . . . . b 
    . . . . . . . . . . . b b b b d 
    . . . . . . . . b b b d 1 1 1 1 
    . . . . . . b b d 1 1 1 1 1 1 1 
    . . . . b b d 1 1 1 1 1 1 1 d d 
    . . . b d 1 1 1 1 1 1 d d d 1 1 
    . . b d 1 1 1 1 1 d d d 1 1 1 d 
    . b d 1 1 1 1 1 d d 1 1 1 d d d 
    . b 1 1 1 1 1 d 1 1 1 d d d 1 1 
    b d 1 1 1 1 1 d 1 d d d 1 1 1 1 
    b 1 1 1 1 1 d 1 d d d 1 1 1 1 1 
    b 1 1 1 1 1 d d d d d 1 1 1 1 1 
    b 1 1 1 1 1 d d d d d 1 1 1 1 1 
    b 1 1 1 1 1 1 d d d d 1 1 1 1 1 
    b d 1 1 1 1 1 1 d d d d 1 1 1 1 
    . b 1 1 1 1 1 1 1 d d d d 1 1 1 
    `
]
ashp = sprites.create(list._pickRandom(), SpriteKind.Projectile)
brockp = sprites.create(list._pickRandom(), SpriteKind.Projectile)
mistyp = sprites.create(list._pickRandom(), SpriteKind.Projectile)
ynp = sprites.create(list._pickRandom(), SpriteKind.Projectile)
Ash = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
Misty = sprites.create(img`
    . . . . . . 5 . 5 . . . . . . . 
    . . . . . f 5 5 5 f f . . . . . 
    . . . . f 1 5 2 5 1 6 f . . . . 
    . . . f 1 6 6 6 6 6 1 6 f . . . 
    . . . f 6 6 f f f f 6 1 f . . . 
    . . . f 6 f f d d f f 6 f . . . 
    . . f 6 f d f d d f d f 6 f . . 
    . . f 6 f d 3 d d 3 d f 6 f . . 
    . . f 6 6 f d d d d f 6 6 f . . 
    . f 6 6 f 3 f f f f 3 f 6 6 f . 
    . . f f d 3 5 3 3 5 3 d f f . . 
    . . f d d f 3 5 5 3 f d d f . . 
    . . . f f 3 3 3 3 3 3 f f . . . 
    . . . f 3 3 5 3 3 5 3 3 f . . . 
    . . . f f f f f f f f f f . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
Brock = sprites.create(img`
    . . . . . . . f f . . . . . . . 
    . . . . . f f 4 4 f f . . . . . 
    . . . . f 5 4 5 5 4 5 f . . . . 
    . . . f e 4 5 5 5 5 4 e f . . . 
    . . f b 3 e 4 4 4 4 e 3 b f . . 
    . f e 3 3 3 3 3 3 3 3 3 3 e f . 
    . f 3 3 e b 3 e e 3 b e 3 3 f . 
    . f b 3 f f e e e e f f 3 b f . 
    f f b b f b f e e f b f b b f f 
    f b b b e 1 f 4 4 f 1 e b b b f 
    . f b b f 4 4 4 4 4 e e b b f . 
    . . f e f b d d d e 4 4 4 f . . 
    . . e 4 c d d d d e 4 4 e f . . 
    . . e f b b d b d d e e f . . . 
    . . . f f 1 1 d 1 d 1 f f . . . 
    . . . . . f b b f f f . . . . . 
    `, SpriteKind.Player)
YN = sprites.create(img`
    . f f f . f f f f . f f f . 
    f f f f f c c c c f f f f f 
    f f f f b c c c c b f f f f 
    f f f c 3 c c c c 3 c f f f 
    . f 3 3 c c c c c c 3 3 f . 
    . f c c c c 4 4 c c c c f . 
    . f f c c 4 4 4 4 c c f f . 
    . f f f b f 4 4 f b f f f . 
    . f f 4 1 f d d f 1 4 f f . 
    . . f f d d d d d d f f . . 
    . . e f e 4 4 4 4 e f e . . 
    . e 4 f b 3 3 3 3 b f 4 e . 
    . 4 d f 3 3 3 3 3 3 c d 4 . 
    . 4 4 f 6 6 6 6 6 6 f 4 4 . 
    . . . . f f f f f f . . . . 
    . . . . f f . . f f . . . . 
    `, SpriteKind.Player)
ashp.follow(Ash, 45)
brockp.follow(Brock, 45)
mistyp.follow(Misty, 45)
ynp.follow(YN, 45)
controller.player1.moveSprite(Ash, 100, 100)
controller.player2.moveSprite(Brock, 100, 100)
controller.player3.moveSprite(Misty, 100, 100)
controller.player4.moveSprite(YN, 100, 100)
tiles.loadMap(tiles.createMap(tilemap`level1`))
tiles.placeOnRandomTile(Ash, assets.tile`myTile1`)
tiles.placeOnRandomTile(Brock, assets.tile`myTile2`)
tiles.placeOnRandomTile(Misty, assets.tile`myTile3`)
tiles.placeOnRandomTile(YN, assets.tile`myTile4`)
splitScreen.cameraFollowSprite(splitScreen.Camera.Camera1, Ash)
splitScreen.cameraFollowSprite(splitScreen.Camera.Camera2, Brock)
splitScreen.cameraFollowSprite(splitScreen.Camera.Camera3, Misty)
splitScreen.cameraFollowSprite(splitScreen.Camera.Camera4, YN)
let MERCHANT = sprites.create(img`
    ........................
    ........................
    ........................
    ........................
    ..........ffff..........
    ........ff1111ff........
    .......fb111111bf.......
    .......f11111111f.......
    ......fd11111111df......
    ......fd11111111df......
    ......fddd1111dddf......
    ......fbdbfddfbdbf......
    ......fcdcf11fcdcf......
    .......fb111111bf.......
    ......fffcdb1bdffff.....
    ....fc111cbfbfc111cf....
    ....f1b1b1ffff1b1b1f....
    ....fbfbffffffbfbfbf....
    .........ffffff.........
    ...........fff..........
    ........................
    ........................
    ........................
    ........................
    `, SpriteKind.Player)
