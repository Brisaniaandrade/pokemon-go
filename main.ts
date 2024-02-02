namespace SpriteKind {
    export const Ash = SpriteKind.create()
}
function Fightvspok (mySprite: Sprite) {
    question = game.askForString("Derivative is the ____ of a tangent line at a given point.")
    if (question == "slope") {
        statusbar5.value += -1
    } else {
        statusbar.value += -1
    }
    question = game.askForString("What is the formula for dx? (_ - _)")
    if (question == "b a") {
        statusbar5.value += -1
    } else {
        statusbar.value += -1
    }
    question = game.askForString("6 x 3")
    if (question == "18") {
        statusbar5.value += -1
    } else {
        statusbar.value += -1
    }
    question = game.askForString(" 1+1")
    if (question == "2") {
        statusbar5.value += -1
    } else {
        statusbar.value += -1
    }
}
function Fightvspok3 (mySprite: Sprite) {
    question = game.askForString("(3.14)r^2")
    if (question == "circle area") {
        statusbar.value += 1
    } else {
        while (false) {
            statusbar.value += -1
            ashp.startEffect(effects.spray, 500)
        }
    }
    question = game.askForString("Formula for rectangle area?")
    if (question == "lw") {
        statusbar.value += 1
    } else {
        while (false) {
            statusbar.value += -1
            ashp.startEffect(effects.spray, 500)
        }
    }
    question = game.askForString("How do you find vertical tangent? (y'=?)  ")
    if (question == "undefine") {
        statusbar.value += 1
    } else {
        while (false) {
            statusbar.value += -1
            ashp.startEffect(effects.spray, 500)
        }
    }
    question = game.askForString(" 36-8")
    if (question == "28") {
        statusbar.value += 1
    } else {
        while (false) {
            statusbar.value += -1
            ashp.startEffect(effects.spray, 500)
        }
    }
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile24`, function (sprite, location) {
    tiles.replaceAllTiles(assets.tile`myTile24`, assets.tile`myTile10`)
    tiles.loadMap(tiles.createMap(tilemap`level33`))
    tiles.placeOnRandomTile(Ash2, assets.tile`myTile17`)
    tiles.placeOnRandomTile(ashd, assets.tile`myTile17`)
    tiles.placeOnRandomTile(ashp, assets.tile`myTile17`)
    ashp.follow(Ash2)
    ashd.follow(Ash2)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile25`, function (sprite, location) {
    tiles.replaceAllTiles(assets.tile`myTile25`, assets.tile`myTile10`)
    tiles.loadMap(tiles.createMap(tilemap`level33`))
    tiles.placeOnRandomTile(Ash2, assets.tile`myTile17`)
    tiles.placeOnRandomTile(ashd, assets.tile`myTile17`)
    tiles.placeOnRandomTile(ashp, assets.tile`myTile17`)
    ashp.follow(Ash2)
    ashd.follow(Ash2)
})
statusbars.onStatusReached(StatusBarKind.Health, statusbars.StatusComparison.EQ, statusbars.ComparisonType.Percentage, 0, function (status) {
    game.gameOver(false)
})
function ashdb () {
    statusbar5 = statusbars.create(20, 4, StatusBarKind.Health)
    statusbar5.setLabel("Life")
    statusbar5.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
    statusbar5.attachToSprite(ashd, 10, 1)
    statusbar5.setColor(3, 15, 0)
    statusbar5.value = 100
}
function doSomething (num: number, mySprite: Sprite) {
	
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile8`, function (sprite, location) {
    game.splash("Press B or A ")
    if (controller.B.isPressed()) {
        doSomething2(randint(1, 10), mySprite)
    } else {
        num = game.askForNumber("Pick a number from 1 - 4")
        if (num == 1) {
            Fightvspok(Ash2)
        } else if (num == 2) {
            Fightvspok2(Ash2)
        } else if (num == 3) {
            Fightvspok3(Ash2)
        } else if (num == 4) {
            Fightvspok4(Ash2)
        } else {
            game.gameOver(false)
        }
    }
    tiles.replaceAllTiles(assets.tile`myTile8`, assets.tile`myTile17`)
    tiles.loadMap(tiles.createMap(tilemap`level1`))
})
function ashpb () {
    statusbar = statusbars.create(20, 4, StatusBarKind.Health)
    statusbar.setLabel("Life")
    statusbar.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
    statusbar.attachToSprite(ashp, 10, 1)
    statusbar.setColor(3, 15, 0)
    statusbar.value = 100
}
statusbars.onStatusReached(StatusBarKind.EnemyHealth, statusbars.StatusComparison.EQ, statusbars.ComparisonType.Percentage, 0, function (status) {
    game.gameOver(true)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile5`, function (sprite, location) {
    tiles.loadMap(tiles.createMap(tilemap`level33`))
    tiles.placeOnRandomTile(Ash2, assets.tile`myTile17`)
    tiles.placeOnRandomTile(ashd, assets.tile`myTile17`)
    tiles.placeOnRandomTile(ashp, assets.tile`myTile17`)
    ashd.follow(Ash2, 45)
    ashp.follow(Ash2, 45)
})
function Fightvspok4 (mySprite: Sprite) {
    question = game.askForString("3x3")
    if (question == "9") {
        statusbar.value += 1
    } else {
        while (false) {
            statusbar.value += -1
            ashp.startEffect(effects.spray, 500)
        }
    }
    question = game.askForString("Best character from shameless? ")
    if (question == "Carl") {
        statusbar.value += 1
    } else {
        while (false) {
            statusbar.value += -1
            ashp.startEffect(effects.spray, 500)
        }
    }
    question = game.askForString("WHo is the younger brother from Supernatural?")
    if (question == "Sam") {
        statusbar.value += 1
    } else {
        while (false) {
            statusbar.value += -1
            ashp.startEffect(effects.spray, 500)
        }
    }
    question = game.askForString(" Who is the oldest brother from Supernatural?")
    if (question == "Dean") {
        statusbar.value += 1
    } else {
        while (false) {
            statusbar.value += -1
            ashp.startEffect(effects.spray, 500)
        }
    }
}
function doSomething2 (num: number, mySprite: Sprite) {
    mySprite = sprites.create(list._pickRandom(), SpriteKind.Player)
    tiles.loadMap(tiles.createMap(tilemap`level44`))
    while (tiles.tileIs(tiles.getTileLocation(num, num), assets.tile`myTile7`)) {
        if (mySprite.x == num && mySprite.y == num) {
            statusbar.value += -1
            ashd.startEffect(effects.fire)
        } else {
            statusbar5.value += randint(-1, -20)
            ashp.startEffect(effects.fire)
        }
    }
}
function Fightvspok2 (mySprite: Sprite) {
    question = game.askForString("Who is the best looking men? ")
    if (question == "v") {
        statusbar.value += 1
    } else {
        while (false) {
            statusbar.value += -1
            ashp.startEffect(effects.spray, 500)
        }
    }
    question = game.askForString("First rule for second Derivative test? (y=?)")
    if (question == "0") {
        statusbar.value += 1
    } else {
        while (false) {
            statusbar.value += -1
            ashp.startEffect(effects.spray, 500)
        }
    }
    question = game.askForString("What color is the sky?")
    if (question == "White") {
        statusbar.value += 1
    } else {
        while (false) {
            statusbar.value += -1
            ashp.startEffect(effects.spray, 500)
        }
    }
    question = game.askForString(" Who was the best player in Exatlon?")
    if (question == "Nate") {
        statusbar.value += 1
    } else {
        while (false) {
            statusbar.value += -1
            ashp.startEffect(effects.spray, 500)
        }
    }
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile23`, function (sprite, location) {
    tiles.replaceAllTiles(assets.tile`myTile23`, assets.tile`myTile10`)
    tiles.loadMap(tiles.createMap(tilemap`level33`))
    tiles.placeOnRandomTile(Ash2, assets.tile`myTile17`)
    tiles.placeOnRandomTile(ashd, assets.tile`myTile17`)
    tiles.placeOnRandomTile(ashp, assets.tile`myTile17`)
    ashp.follow(Ash2)
    ashd.follow(Ash2)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile14`, function (sprite, location) {
    tiles.replaceAllTiles(assets.tile`myTile23`, assets.tile`myTile10`)
    tiles.loadMap(tiles.createMap(tilemap`level33`))
    tiles.placeOnRandomTile(Ash2, assets.tile`myTile17`)
    tiles.placeOnRandomTile(ashd, assets.tile`myTile17`)
    tiles.placeOnRandomTile(ashp, assets.tile`myTile17`)
    ashp.follow(Ash2)
    ashd.follow(Ash2)
})
let num = 0
let mySprite: Sprite = null
let statusbar: StatusBarSprite = null
let statusbar5: StatusBarSprite = null
let question = ""
let ashd: Sprite = null
let list: Image[] = []
let Ash2: Sprite = null
let ashp: Sprite = null
story.setPagePauseLength(100, 200)
story.printCharacterText("PLEASE SELECT A STARTER")
story.showPlayerChoices("Doggo", "Batty", "Meow")
if (story.checkLastAnswer("Doggo")) {
    ashp = sprites.create(img`
        . . 4 4 4 . . . . 4 4 4 . . . . 
        . 4 5 5 5 e . . e 5 5 5 4 . . . 
        4 5 5 5 5 5 e e 5 5 5 5 5 4 . . 
        4 5 5 4 4 5 5 5 5 4 4 5 5 4 . . 
        e 5 4 4 5 5 5 5 5 5 4 4 5 e . . 
        . e e 5 5 5 5 5 5 5 5 e e . . . 
        . . e 5 f 5 5 5 5 f 5 e . . . . 
        . . f 5 5 5 4 4 5 5 5 f . . f f 
        . . f 4 5 5 f f 5 5 6 f . f 5 f 
        . . . f 6 6 6 6 6 6 4 4 f 5 5 f 
        . . . f 4 5 5 5 5 5 5 4 4 5 f . 
        . . . f 5 5 5 5 5 4 5 5 f f . . 
        . . . f 5 f f f 5 f f 5 f . . . 
        . . . f f . . f f . . f f . . . 
        `, SpriteKind.Projectile)
} else if (story.checkLastAnswer("Batty")) {
    ashp = sprites.create(img`
        . . f f f . . . . . . . . f f f 
        . f f c c . . . . . . f c b b c 
        f f c c . . . . . . f c b b c . 
        f c f c . . . . . . f b c c c . 
        f f f c c . c c . f c b b c c . 
        f f c 3 c c 3 c c f b c b b c . 
        f f b 3 b c 3 b c f b c c b c . 
        . c b b b b b b c b b c c c . . 
        . c 1 b b b 1 b b c c c c . . . 
        c b b b b b b b b b c c . . . . 
        c b c b b b c b b b b f . . . . 
        f b 1 f f f 1 b b b b f c . . . 
        f b b b b b b b b b b f c c . . 
        . f b b b b b b b b c f . . . . 
        . . f b b b b b b c f . . . . . 
        . . . f f f f f f f . . . . . . 
        `, SpriteKind.Projectile)
} else if (story.checkLastAnswer("Meow")) {
    ashp = sprites.create(img`
        . . . . . . . . . . . . . . 
        e e e . . . . e e e . . . . 
        c d d c . . c d d c . . . . 
        c b d d f f d d b c . . . . 
        c 3 b d d b d b 3 c . . . . 
        f b 3 d d d d 3 b f . . . . 
        e d d d d d d d d e . . . . 
        e d f d d d d f d e . b f b 
        f d d f d d f d d f . f d f 
        f b d d b b d d 2 b f f d f 
        . f 2 2 2 2 2 2 d b b d b f 
        . f d d d d d d d f f f f . 
        . . f d b d f d f . . . . . 
        . . . f f f f f f . . . . . 
        `, SpriteKind.Projectile)
}
tiles.loadMap(tiles.createMap(tilemap`level1`))
Ash2 = sprites.create(img`
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
scene.cameraFollowSprite(Ash2)
tiles.placeOnRandomTile(Ash2, assets.tile`myTile1`)
ashp.follow(Ash2, 100)
controller.moveSprite(Ash2, 100, 100)
list = [
img`
    . . . . . . . . c c c c c . . . 
    . . . . . . c c 5 5 5 5 5 c . . 
    . . . . . c 5 5 5 5 5 5 5 5 c . 
    . . . . c b b b b b b 5 5 5 c . 
    . . . . c 1 1 b b 1 b b c c . . 
    . . . c 1 1 1 b b 1 1 1 c . . . 
    . . . c 1 1 1 1 b 1 1 1 c . c c 
    . . . c d 1 1 1 b 1 1 1 b b 5 c 
    . . c c d 1 c 1 b 1 b 1 5 5 5 c 
    . c c d d 1 1 1 1 1 b 1 b b 5 c 
    f d d d 1 1 1 1 1 b b 1 f . c c 
    f f f 1 1 1 1 1 1 b b b f . . . 
    . . . f f 1 1 1 b b b 5 5 f . . 
    . . . . . f f f 5 5 5 5 5 f . . 
    . . . . . . . . f f f f f f . . 
    . . . . . . . . . . . . . . . . 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . c c c c . . . . 
    . . . . . . c c d d d d c . . . 
    . . . . . c c c c c c d c . . . 
    . . . . c c 4 4 4 4 d c c . . . 
    . . . c 4 d 4 4 4 4 4 1 c . c c 
    . . c 4 4 4 1 4 4 4 4 d 1 c 4 c 
    . c 4 4 4 4 1 4 4 4 4 4 1 c 4 c 
    f 4 4 4 4 4 1 4 4 4 4 4 1 4 4 f 
    f 4 4 4 f 4 1 c c 4 4 4 1 f 4 f 
    f 4 4 4 4 4 1 4 4 f 4 4 d f 4 f 
    . f 4 4 4 4 1 c 4 f 4 d f f f f 
    . . f f 4 d 4 4 f f 4 c f c . . 
    . . . . f f 4 4 4 4 c d b c . . 
    . . . . . . f f f f d d d c . . 
    . . . . . . . . . . c c c . . . 
    `,
img`
    . . . . 2 2 2 2 2 e . . . . . . 
    . . . 2 2 2 2 d 2 2 e . . . . . 
    . . e 2 2 2 2 2 2 2 e . . . . . 
    . . e 2 2 2 2 2 2 2 e . . . . . 
    . . e 2 2 2 2 2 e f f c c . . . 
    . . e e 2 2 e f f f f b c . . . 
    . e e e f e 2 b f f f d c . . . 
    e e 2 2 d f 2 1 1 1 1 b c . . . 
    e e 2 2 d f e e c c c . . . . . 
    b 1 1 d e 2 2 e e c . . . . . . 
    . f f e 2 2 2 2 e . . . . . . . 
    . . f f d d 2 2 f f d d . . . . 
    . . f f d d e e f f d d . . . . 
    . . . f f f f . . . . . . . . . 
    . . e e e f f f . . . . . . . . 
    . . e e e e f f f . . . . . . . 
    `,
img`
    . . . . f f f f f . . . . . . . 
    . . . f e e e e e f . . . . . . 
    . . f d d d d e e e f . . . . . 
    . c d f d d f d e e f f . . . . 
    . c d f d d f d e e d d f . . . 
    c d e e d d d d e e b d c . . . 
    c d d d d c d d e e b d c . f f 
    c c c c c d d d e e f c . f e f 
    . f d d d d d e e f f . . f e f 
    . . f f f f f e e e e f . f e f 
    . . . . f e e e e e e e f f e f 
    . . . f e f f e f e e e e f f . 
    . . . f e f f e f e e e e f . . 
    . . . f d b f d b f f e f . . . 
    . . . f d d c d d b b d f . . . 
    . . . . f f f f f f f f f . . . 
    `,
img`
    . . . . c c c c c c . . . . . . 
    . . . c 6 7 7 7 7 6 c . . . . . 
    . . c 7 7 7 7 7 7 7 7 c . . . . 
    . c 6 7 7 7 7 7 7 7 7 6 c . . . 
    . c 7 c 6 6 6 6 c 7 7 7 c . . . 
    . f 7 6 f 6 6 f 6 7 7 7 f . . . 
    . f 7 7 7 7 7 7 7 7 7 7 f . . . 
    . . f 7 7 7 7 6 c 7 7 6 f c . . 
    . . . f c c c c 7 7 6 f 7 7 c . 
    . . c 7 2 7 7 7 6 c f 7 7 7 7 c 
    . c 7 7 2 7 7 c f c 6 7 7 6 c c 
    c 1 1 1 1 7 6 f c c 6 6 6 c . . 
    f 1 1 1 1 1 6 6 c 6 6 6 6 f . . 
    f 6 1 1 1 1 1 6 6 6 6 6 c f . . 
    . f 6 1 1 1 1 1 1 6 6 6 f . . . 
    . . c c c c c c c c c f . . . . 
    `,
img`
    ...................cc...
    ...............cccc63c..
    ..............c633336c..
    ..........cc.c6cc33333c.
    .........b55c6c55c33333c
    .........ff5c6c5ff33333c
    .........ff5c6c5ff6333cc
    .........b553c355c6666cc
    ..........b55355c333333c
    .........cc55555bcc3333c
    ........c5545554b55c33c.
    ........b54b4444bb5cbb..
    ........c455b4b5554c45b.
    ........c555c4c555c4c5c.
    ........c5555c5555c4c5c.
    .........ccccccccc..ccc.
    `
]
ashd = sprites.create(list._pickRandom(), SpriteKind.Player)
