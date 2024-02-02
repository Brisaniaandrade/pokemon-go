namespace SpriteKind {
    export const Ash = SpriteKind.create()
}
function Fightvspok (mySprite: Sprite) {
    question = game.askForString("Derivative is the ____ of a tangent line at a given point.")
    if (question == "slope") {
        statusbar.value += 1
    } else {
        while (false) {
            statusbar.value += -1
            ashp.startEffect(effects.spray, 500)
        }
    }
    question = game.askForString("What is the formula for dx? (_ - _)")
    if (question == "b a") {
        statusbar.value += 1
    } else {
        while (false) {
            statusbar.value += -1
            ashp.startEffect(effects.spray, 500)
        }
    }
    question = game.askForString("6 x 3")
    if (question == "18") {
        statusbar.value += 1
    } else {
        while (false) {
            statusbar.value += -1
            ashp.startEffect(effects.spray, 500)
        }
    }
    question = game.askForString(" 1+1")
    if (question == "2") {
        statusbar.value += 1
    } else {
        while (false) {
            statusbar.value += -1
            ashp.startEffect(effects.spray, 500)
        }
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
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile25`, function (sprite, location) {
    tiles.replaceAllTiles(assets.tile`myTile25`, assets.tile`myTile10`)
    tiles.loadMap(tiles.createMap(tilemap`level33`))
})
statusbars.onStatusReached(StatusBarKind.Health, statusbars.StatusComparison.EQ, statusbars.ComparisonType.Percentage, 0, function (status) {
    game.gameOver(false)
})
function ashdb () {
    let ashd: Sprite = null
    statusbar5 = statusbars.create(20, 4, StatusBarKind.Health)
    statusbar5.setLabel("Life")
    statusbar5.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
    statusbar5.attachToSprite(ashd, 10, 1)
    statusbar5.setColor(3, 15, 0)
    statusbar5.value = 100
}
function doSomething (num: number, mySprite: Sprite) {
	
}
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
    tiles.replaceAllTiles(assets.tile`myTile5`, assets.tile`myTile10`)
    tiles.loadMap(tiles.createMap(tilemap`level33`))
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
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile14`, function (sprite, location) {
	
})
let statusbar5: StatusBarSprite = null
let statusbar: StatusBarSprite = null
let question = ""
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
let Ash2 = sprites.create(img`
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
