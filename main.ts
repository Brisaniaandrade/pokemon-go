namespace SpriteKind {
    export const Ash = SpriteKind.create()
    export const Misty = SpriteKind.create()
    export const Brock = SpriteKind.create()
    export const YN = SpriteKind.create()
}
function Fightvspok (mySprite: Sprite) {
    question = game.askForString("Derivative is the ____ of a tangent line at a given point.")
    if (question == "slope") {
        statusbar.value += 1
    } else {
        while (false) {
            statusbar.value += -1
            ashp.startEffect(effects.spray, 500)
            mistyp.startEffect(effects.spray, 500)
            ynp.startEffect(effects.spray, 500)
            brockp.startEffect(effects.spray, 500)
        }
    }
    question = game.askForString("What is the formula for dx? (_ - _)")
    if (question == "b a") {
        statusbar.value += 1
    } else {
        while (false) {
            statusbar.value += -1
            ashp.startEffect(effects.spray, 500)
            mistyp.startEffect(effects.spray, 500)
            ynp.startEffect(effects.spray, 500)
            brockp.startEffect(effects.spray, 500)
        }
    }
    question = game.askForString("6 x 3")
    if (question == "18") {
        statusbar.value += 1
    } else {
        while (false) {
            statusbar.value += -1
            ashp.startEffect(effects.spray, 500)
            mistyp.startEffect(effects.spray, 500)
            ynp.startEffect(effects.spray, 500)
            brockp.startEffect(effects.spray, 500)
        }
    }
    question = game.askForString(" 1+1")
    if (question == "2") {
        statusbar.value += 1
    } else {
        while (false) {
            statusbar.value += -1
            ashp.startEffect(effects.spray, 500)
            mistyp.startEffect(effects.spray, 500)
            ynp.startEffect(effects.spray, 500)
            brockp.startEffect(effects.spray, 500)
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
            mistyp.startEffect(effects.spray, 500)
            ynp.startEffect(effects.spray, 500)
            brockp.startEffect(effects.spray, 500)
        }
    }
    question = game.askForString("Formula for rectangle area?")
    if (question == "lw") {
        statusbar.value += 1
    } else {
        while (false) {
            statusbar.value += -1
            ashp.startEffect(effects.spray, 500)
            mistyp.startEffect(effects.spray, 500)
            ynp.startEffect(effects.spray, 500)
            brockp.startEffect(effects.spray, 500)
        }
    }
    question = game.askForString("How do you find vertical tangent? (y'=?)  ")
    if (question == "undefine") {
        statusbar.value += 1
    } else {
        while (false) {
            statusbar.value += -1
            ashp.startEffect(effects.spray, 500)
            mistyp.startEffect(effects.spray, 500)
            ynp.startEffect(effects.spray, 500)
            brockp.startEffect(effects.spray, 500)
        }
    }
    question = game.askForString(" 36-8")
    if (question == "28") {
        statusbar.value += 1
    } else {
        while (false) {
            statusbar.value += -1
            ashp.startEffect(effects.spray, 500)
            mistyp.startEffect(effects.spray, 500)
            ynp.startEffect(effects.spray, 500)
            brockp.startEffect(effects.spray, 500)
        }
    }
}
function yndb () {
    statusbar8 = statusbars.create(20, 4, StatusBarKind.Health)
    statusbar8.setLabel("Life")
    statusbar8.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
    statusbar8.attachToSprite(ynd, 10, 1)
    statusbar8.setColor(3, 15, 0)
    statusbar8.value = 100
}
function mistyq (mySprite: Sprite) {
    q1 = game.askForNumber("Choose a number from one to four")
    if (q1 == 1) {
        Fightvspok3(Ash2)
    } else if (q1 == 2) {
        Fightvspok3(Brock2)
    } else if (q1 == 3) {
        Fightvspok3(Misty2)
    } else if (q1 == 4) {
        Fightvspok3(YN2)
    } else {
        game.reset()
    }
}
scene.onOverlapTile(SpriteKind.Player, img`myTile18`, function (sprite, location) {
    tiles.loadMap(tiles.createMap(tilemap`level7`))
    tiles.placeOnRandomTile(Ash2, img`myTile1`)
    tiles.placeOnRandomTile(Brock2, img`myTile2`)
    tiles.placeOnRandomTile(Misty2, img`myTile3`)
    tiles.placeOnRandomTile(YN2, img`myTile4`)
})
function ashq (mySprite: Sprite) {
    q1 = game.askForNumber("Choose a number from one to four")
    if (q1 == 1) {
        Fightvspok(Ash2)
    } else if (q1 == 2) {
        Fightvspok(Brock2)
    } else if (q1 == 3) {
        Fightvspok(Misty2)
    } else if (q1 == 4) {
        Fightvspok(YN2)
    } else {
        game.reset()
    }
}
function ynq (mySprite: Sprite) {
    q1 = game.askForNumber("Choose a number from one to four")
    if (q1 == 1) {
        Fightvspok4(Ash2)
    } else if (q1 == 2) {
        Fightvspok4(Brock2)
    } else if (q1 == 3) {
        Fightvspok4(Misty2)
    } else if (q1 == 4) {
        Fightvspok4(YN2)
    } else {
        game.reset()
    }
}
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
function brockq (mySprite: Sprite) {
    q1 = game.askForNumber("Choose a number from one to four")
    if (q1 == 1) {
        Fightvspok2(Ash2)
    } else if (q1 == 2) {
        Fightvspok2(Brock2)
    } else if (q1 == 3) {
        Fightvspok2(Misty2)
    } else if (q1 == 4) {
        Fightvspok2(YN2)
    } else {
        game.reset()
    }
}
scene.onOverlapTile(SpriteKind.Player, img`myTile23`, function (sprite, location) {
    if (tiles.locationOfSprite(Ash2) == location) {
        ashq(Ash2)
    } else if (tiles.locationOfSprite(Brock2) == location) {
        brockq(Brock2)
    } else if (tiles.locationOfSprite(Misty2) == location) {
        mistyq(Misty2)
    } else {
        ynq(YN2)
    }
})
function ashpb () {
    statusbar = statusbars.create(20, 4, StatusBarKind.Health)
    statusbar.setLabel("Life")
    statusbar.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
    statusbar.attachToSprite(ashp, 10, 1)
    statusbar.setColor(3, 15, 0)
    statusbar.value = 100
}
function mistypb () {
    statusbar3 = statusbars.create(20, 4, StatusBarKind.Health)
    statusbar3.setLabel("Life")
    statusbar3.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
    statusbar3.attachToSprite(mistyp, 10, 1)
    statusbar3.setColor(3, 15, 0)
    statusbar3.value = 100
}
function ynpb () {
    statusbar4 = statusbars.create(20, 4, StatusBarKind.Health)
    statusbar4.setLabel("Life")
    statusbar4.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
    statusbar4.attachToSprite(ynp, 10, 1)
    statusbar4.setColor(3, 15, 0)
    statusbar4.value = 100
}
function Fightvspok4 (mySprite: Sprite) {
    question = game.askForString("3x3")
    if (question == "9") {
        statusbar.value += 1
    } else {
        while (false) {
            statusbar.value += -1
            ashp.startEffect(effects.spray, 500)
            mistyp.startEffect(effects.spray, 500)
            ynp.startEffect(effects.spray, 500)
            brockp.startEffect(effects.spray, 500)
        }
    }
    question = game.askForString("Best character from shameless? ")
    if (question == "Carl") {
        statusbar.value += 1
    } else {
        while (false) {
            statusbar.value += -1
            ashp.startEffect(effects.spray, 500)
            mistyp.startEffect(effects.spray, 500)
            ynp.startEffect(effects.spray, 500)
            brockp.startEffect(effects.spray, 500)
        }
    }
    question = game.askForString("WHo is the younger brother from Supernatural?")
    if (question == "Sam") {
        statusbar.value += 1
    } else {
        while (false) {
            statusbar.value += -1
            ashp.startEffect(effects.spray, 500)
            mistyp.startEffect(effects.spray, 500)
            ynp.startEffect(effects.spray, 500)
            brockp.startEffect(effects.spray, 500)
        }
    }
    question = game.askForString(" Who is the oldest brother from Supernatural?")
    if (question == "Dean") {
        statusbar.value += 1
    } else {
        while (false) {
            statusbar.value += -1
            ashp.startEffect(effects.spray, 500)
            mistyp.startEffect(effects.spray, 500)
            ynp.startEffect(effects.spray, 500)
            brockp.startEffect(effects.spray, 500)
        }
    }
}
scene.onOverlapTile(SpriteKind.Player, img`myTile14`, function (sprite, location) {
	
})
function mistydb () {
    statusbar6 = statusbars.create(20, 4, StatusBarKind.Health)
    statusbar6.setLabel("Life")
    statusbar6.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
    statusbar6.attachToSprite(mistyd, 10, 1)
    statusbar6.setColor(3, 15, 0)
    statusbar6.value = 100
}
scene.onOverlapTile(SpriteKind.Player, img`myTile5`, function (sprite, location) {
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
    tiles.loadMap(tiles.createMap(tilemap`level5`))
    tiles.placeOnRandomTile(Ash2, img`myTile1`)
    tiles.placeOnRandomTile(ashp, img`myTile1`)
    tiles.placeOnRandomTile(Brock2, img`myTile2`)
    tiles.placeOnRandomTile(brockp, img`myTile2`)
    tiles.placeOnRandomTile(Misty2, img`myTile3`)
    tiles.placeOnRandomTile(mistyp, img`myTile3`)
    tiles.placeOnRandomTile(YN2, img`myTile4`)
    tiles.placeOnRandomTile(ynp, img`myTile4`)
    tiles.placeOnRandomTile(ashd, img`myTile6`)
    tiles.placeOnRandomTile(brockd, img`myTile7`)
    tiles.placeOnRandomTile(mistyd, img`myTile8`)
    tiles.placeOnRandomTile(ynd, img`myTile9`)
    ashpb()
    mistydb()
    brockdb()
    yndb()
    ynpb()
    mistypb()
    ashdb()
    brockpd()
})
function brockdb () {
    statusbar7 = statusbars.create(20, 4, StatusBarKind.Health)
    statusbar7.setLabel("Life")
    statusbar7.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
    statusbar7.attachToSprite(brockd, 10, 1)
    statusbar7.setColor(3, 15, 0)
    statusbar7.value = 100
}
function Fightvspok2 (mySprite: Sprite) {
    question = game.askForString("Who is the Finest looking men? ")
    if (question == "Bang Chan") {
        statusbar.value += 1
    } else {
        while (false) {
            statusbar.value += -1
            ashp.startEffect(effects.spray, 500)
            mistyp.startEffect(effects.spray, 500)
            ynp.startEffect(effects.spray, 500)
            brockp.startEffect(effects.spray, 500)
        }
    }
    question = game.askForString("First rule for second Derivative test? (y=?)")
    if (question == "0") {
        statusbar.value += 1
    } else {
        while (false) {
            statusbar.value += -1
            ashp.startEffect(effects.spray, 500)
            mistyp.startEffect(effects.spray, 500)
            ynp.startEffect(effects.spray, 500)
            brockp.startEffect(effects.spray, 500)
        }
    }
    question = game.askForString("What color is the sky?")
    if (question == "Blue") {
        statusbar.value += 1
    } else {
        while (false) {
            statusbar.value += -1
            ashp.startEffect(effects.spray, 500)
            mistyp.startEffect(effects.spray, 500)
            ynp.startEffect(effects.spray, 500)
            brockp.startEffect(effects.spray, 500)
        }
    }
    question = game.askForString(" Who was the best player in Exatlon?")
    if (question == "Nate") {
        statusbar.value += 1
    } else {
        while (false) {
            statusbar.value += -1
            ashp.startEffect(effects.spray, 500)
            mistyp.startEffect(effects.spray, 500)
            ynp.startEffect(effects.spray, 500)
            brockp.startEffect(effects.spray, 500)
        }
    }
}
function brockpd () {
    statusbar2 = statusbars.create(20, 4, StatusBarKind.Health)
    statusbar2.setLabel("Life")
    statusbar2.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
    statusbar2.attachToSprite(brockp, 10, 1)
    statusbar2.setColor(3, 15, 0)
}
let statusbar2: StatusBarSprite = null
let statusbar7: StatusBarSprite = null
let brockd: Sprite = null
let list: Image[] = []
let mistyd: Sprite = null
let statusbar6: StatusBarSprite = null
let statusbar4: StatusBarSprite = null
let statusbar3: StatusBarSprite = null
let ashd: Sprite = null
let statusbar5: StatusBarSprite = null
let q1 = 0
let ynd: Sprite = null
let statusbar8: StatusBarSprite = null
let statusbar: StatusBarSprite = null
let question = ""
let ynp: Sprite = null
let mistyp: Sprite = null
let brockp: Sprite = null
let ashp: Sprite = null
let YN2: Sprite = null
let Brock2: Sprite = null
let Misty2: Sprite = null
let Ash2: Sprite = null
story.setPagePauseLength(100, 200)
story.printCharacterText("PLEASE SELECT A STARTER PRESENTED IN FRONT OF YOU (walk to it)")
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
Misty2 = sprites.create(img`
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
Brock2 = sprites.create(img`
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
YN2 = sprites.create(img`
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
ashp = sprites.create(img`
    . . . . . . . . . . b 5 b . . . 
    . . . . . . . . . b 5 b . . . . 
    . . . . . . b b b b b b . . . . 
    . . . . . b b 5 5 5 5 5 b . . . 
    . . . . b b 5 d 1 f 5 d 4 c . . 
    . . . . b 5 5 1 f f d d 4 4 4 b 
    . . . . b 5 5 d f b 4 4 4 4 b . 
    . . . b d 5 5 5 5 4 4 4 4 b . . 
    . b b d d d 5 5 5 5 5 5 5 b . . 
    b d d d b b b 5 5 5 5 5 5 5 b . 
    c d d b 5 5 d c 5 5 5 5 5 5 b . 
    c b b d 5 d c d 5 5 5 5 5 5 b . 
    c b 5 5 b c d d 5 5 5 5 5 5 b . 
    b b c c c d d d 5 5 5 5 5 d b . 
    . . . . c c d d d 5 5 5 b b . . 
    . . . . . . c c c c c b b . . . 
    `, SpriteKind.Projectile)
brockp = sprites.create(img`
    . . . . . . . . . . b 5 b . . . 
    . . . . . . . . . b 5 b . . . . 
    . . . . . . b b b b b b . . . . 
    . . . . . b b 5 5 5 5 5 b . . . 
    . . . . b b 5 d 1 f 5 d 4 c . . 
    . . . . b 5 5 1 f f d d 4 4 4 b 
    . . . . b 5 5 d f b 4 4 4 4 b . 
    . . . b d 5 5 5 5 4 4 4 4 b . . 
    . b b d d d 5 5 5 5 5 5 5 b . . 
    b d d d b b b 5 5 5 5 5 5 5 b . 
    c d d b 5 5 d c 5 5 5 5 5 5 b . 
    c b b d 5 d c d 5 5 5 5 5 5 b . 
    c b 5 5 b c d d 5 5 5 5 5 5 b . 
    b b c c c d d d 5 5 5 5 5 d b . 
    . . . . c c d d d 5 5 5 b b . . 
    . . . . . . c c c c c b b . . . 
    `, SpriteKind.Projectile)
mistyp = sprites.create(img`
    . . . . . . . . . . b 5 b . . . 
    . . . . . . . . . b 5 b . . . . 
    . . . . . . b b b b b b . . . . 
    . . . . . b b 5 5 5 5 5 b . . . 
    . . . . b b 5 d 1 f 5 d 4 c . . 
    . . . . b 5 5 1 f f d d 4 4 4 b 
    . . . . b 5 5 d f b 4 4 4 4 b . 
    . . . b d 5 5 5 5 4 4 4 4 b . . 
    . b b d d d 5 5 5 5 5 5 5 b . . 
    b d d d b b b 5 5 5 5 5 5 5 b . 
    c d d b 5 5 d c 5 5 5 5 5 5 b . 
    c b b d 5 d c d 5 5 5 5 5 5 b . 
    c b 5 5 b c d d 5 5 5 5 5 5 b . 
    b b c c c d d d 5 5 5 5 5 d b . 
    . . . . c c d d d 5 5 5 b b . . 
    . . . . . . c c c c c b b . . . 
    `, SpriteKind.Projectile)
ynp = sprites.create(img`
    . . . . . . . . . . b 5 b . . . 
    . . . . . . . . . b 5 b . . . . 
    . . . . . . b b b b b b . . . . 
    . . . . . b b 5 5 5 5 5 b . . . 
    . . . . b b 5 d 1 f 5 d 4 c . . 
    . . . . b 5 5 1 f f d d 4 4 4 b 
    . . . . b 5 5 d f b 4 4 4 4 b . 
    . . . b d 5 5 5 5 4 4 4 4 b . . 
    . b b d d d 5 5 5 5 5 5 5 b . . 
    b d d d b b b 5 5 5 5 5 5 5 b . 
    c d d b 5 5 d c 5 5 5 5 5 5 b . 
    c b b d 5 d c d 5 5 5 5 5 5 b . 
    c b 5 5 b c d d 5 5 5 5 5 5 b . 
    b b c c c d d d 5 5 5 5 5 d b . 
    . . . . c c d d d 5 5 5 b b . . 
    . . . . . . c c c c c b b . . . 
    `, SpriteKind.Projectile)
ynp.follow(YN2, 45)
mistyp.follow(Misty2, 45)
brockp.follow(Brock2, 45)
ashp.follow(Ash2, 45)
controller.player1.moveSprite(Ash2, 100, 100)
controller.player2.moveSprite(Brock2, 100, 100)
controller.player3.moveSprite(Misty2, 100, 100)
controller.player4.moveSprite(YN2, 100, 100)
tiles.placeOnRandomTile(Ash2, img`myTile1`)
tiles.placeOnRandomTile(Brock2, img`myTile2`)
tiles.placeOnRandomTile(Misty2, img`myTile3`)
tiles.placeOnRandomTile(YN2, img`myTile4`)
splitScreen.cameraFollowSprite(splitScreen.Camera.Camera1, Ash2)
splitScreen.cameraFollowSprite(splitScreen.Camera.Camera2, Brock2)
splitScreen.cameraFollowSprite(splitScreen.Camera.Camera3, Misty2)
splitScreen.cameraFollowSprite(splitScreen.Camera.Camera4, YN2)
