namespace SpriteKind {
    export const Ash = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile19`, function (sprite, location) {
    tiles.loadMap(tiles.createMap(tilemap`level22`))
})
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
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile15`, function (sprite, location) {
	
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile22`, function (sprite, location) {
    tiles.loadMap(tiles.createMap(tilemap`level22`))
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile13`, function (sprite, location) {
	
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile12`, function (sprite, location) {
	
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
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile21`, function (sprite, location) {
    tiles.loadMap(tiles.createMap(tilemap`level22`))
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile20`, function (sprite, location) {
    tiles.loadMap(tiles.createMap(tilemap`level22`))
})
function ashpb () {
    statusbar = statusbars.create(20, 4, StatusBarKind.Health)
    statusbar.setLabel("Life")
    statusbar.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
    statusbar.attachToSprite(ashp, 10, 1)
    statusbar.setColor(3, 15, 0)
    statusbar.value = 100
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile5`, function (sprite, location) {
    let Ash2: Sprite = null
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
    tiles.loadMap(tiles.createMap(tilemap`level5`))
    tiles.placeOnRandomTile(Ash2, assets.tile`myTile1`)
    tiles.placeOnRandomTile(ashp, assets.tile`myTile1`)
    tiles.placeOnRandomTile(ashd, assets.tile`myTile6`)
    ashpb()
    ashdb()
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
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile14`, function (sprite, location) {
	
})
let list: Image[] = []
let ashd: Sprite = null
let statusbar5: StatusBarSprite = null
let ashp: Sprite = null
let statusbar: StatusBarSprite = null
let question = ""
let player2: number[] = []
let statusbar8 = null
let statusbar3 = null
let statusbar4 = null
let statusbar6 = null
let statusbar7 = null
let statusbar2 = null
