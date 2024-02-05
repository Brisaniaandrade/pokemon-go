enum ActionKind {
    Walking,
    Idle,
    Jumping
}
namespace SpriteKind {
    export const pokemon = SpriteKind.create()
    export const Minimap = SpriteKind.create()
    export const Cursor = SpriteKind.create()
    export const FIGHT = SpriteKind.create()
    export const CATCH = SpriteKind.create()
    export const SWITCH = SpriteKind.create()
    export const RUN = SpriteKind.create()
    export const Options_Box = SpriteKind.create()
    export const Enter_Room = SpriteKind.create()
    export const Pokemon_Player = SpriteKind.create()
    export const NPC = SpriteKind.create()
    export const Event = SpriteKind.create()
    export const Pokeball = SpriteKind.create()
    export const Pokemon_Preview = SpriteKind.create()
    export const Emotional_Event = SpriteKind.create()
    export const Map = SpriteKind.create()
    export const Nurse = SpriteKind.create()
}
controller.combos.attachCombo("", function () {
	
})
controller.combos.attachCombo("up up down down left right left right", function () {
    ARK = 1
    if (ASH) {
        controller.moveSprite(ASH, 1000, 1000)
        ASH.setFlag(SpriteFlag.GhostThroughTiles, false)
        ASH.setFlag(SpriteFlag.GhostThroughWalls, true)
    }
    if (HealthBar) {
        HealthBar.value += 10000
    }
})
statusbars.onStatusReached(StatusBarKind.EnemyHealth, statusbars.StatusComparison.LT, statusbars.ComparisonType.Percentage, 60, function (status) {
    ENB.setColor(4, 15)
})
function Exit_Choosing_Pokemon_Screen () {
    tiles.setCurrentTilemap(tilemap`level45`)
    scene.setBackgroundImage(img`
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        `)
    scene.setBackgroundColor(7)
    ASH = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    Players__Pokemon = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Pokemon_Player)
    ASH.setPosition(Player_Position_X, Player_Position_Y)
    Players__Pokemon.setPosition(Player_Position_X - 10, Player_Position_Y - 10)
    controller.moveSprite(ASH)
    scene.cameraFollowSprite(ASH)
    Players__Pokemon.follow(ASH, 80)
    Able_to_switch_pokemon = 1
    Players__Pokemon.setStayInScreen(true)
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Able_to_switch_pokemon == 1) {
        Able_to_switch_pokemon = -1
        Player_Position_X = ASH.x
        Player_Position_Y = ASH.y
        tiles.setCurrentTilemap(tilemap`level46`)
        scene.setBackgroundImage(img`
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22222222222222222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22222222222222222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222222222222222222222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222222222222222222222222222222222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22222222222222222222222222222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222222222222222222222222222222222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22222222222222222222222222222222222222222ffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2222222222222222222222222222222222222222222fffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22222222222222222222222222222222222222222222222fffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2222222222222222222222222222222222222222222222222ffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222222222222222222222222222222222222222222222222222fffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222222222222222222222222222222222222222222222222222fffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff22222222222222222222222222222222222222222222222222222ffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2222222222222222222222222222222222222222222222222222222fffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffff222222222222222222222222222222222222222222222222222222222ffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffff222222222222222222222222222222222222222222222222222222222ffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffff22222222222222222222222222222222222222222222222222222222222fffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffff2222222222222222222222222222222222222222222222222222222222222ffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffff2222222222222222222222222222222222222222222222222222222222222ffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffff2222222222222222222222222222222222222222222222222222222222222ffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffff222222222222222222222222222222222222222222222222222222222222222fffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffff222222222222222222222222222222222222222222222222222222222222222fffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffff22222222222222222222222222222222222222222222222222222222222222222ffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffff22222222222222222222222222222222222222222222222222222222222222222ffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffff22222222222222222222222222222222222222222222222222222222222222222ffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffff2222222222222222222222222222222222222222222222222222222222222222222fffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffff2222222222222222222222222222fffffffffff2222222222222222222222222222fffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffff2222222222222222222222222222fffffffffff2222222222222222222222222222fffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffff22222222222222222222222222fffffffffffffff22222222222222222222222222fffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffff22222222222222222222222fffffffffffffffffffff22222222222222222222222fffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffff22222222222222222222222fffffffffffffffffffff22222222222222222222222fffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffff22222222222222222222222fffffffffffffffffffff22222222222222222222222fffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffff22222222222222222222222ffffffff11111ffffffff22222222222222222222222fffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111fffff11111111111fffff111111111111111111dddddfffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111fffffff1111111fffffff111111111111111111dddddfffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111ffffffff11111ffffffff11111111111111111ddddddfffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111fffffffffffffffffffff11111111111111111ddddddfffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111fffffffffffffffffffff1111111111111111dddddddfffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111111fffffffffffffffff111111111111111111ddddddffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111ffffffffffff111111111111111111111ddddddffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111ffffffffffff11111111111111111111ddddddfffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111111111111111111111111111111111111111ddddddfffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111ddddddffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111111111111111111111111111111111111dddddddffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111111111111111111111111111ddddddddffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111dddddddfffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111dddddddddfffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111ddddddddffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111111111111111111111111111111dddddddfffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111111111111111111111111111ddddddddffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111111111111111111ddddddddffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111111111111111111dddddddfffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111dddddddfffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111111111111111111111ddddddddfffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111ddddddfffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111111111111111111ddddddfffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111111dddddddddfffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111111111ddddddddddfffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111111ddddddddddfffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111dddddddddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111ddddddfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111ddddfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            `)
        scene.setBackgroundColor(15)
        Players__Pokemon.destroy()
        ASH.destroy()
        story.printDialog("Choose Your Pokemon to fight", 80, 90, 50, 150)
        pause(200)
        Switch_Pokemon()
    } else if (Able_to_switch_pokemon == 0) {
        story.printDialog("Cant switch Rn", 80, 90, 50, 150)
        pause(200)
    } else if (Able_to_switch_pokemon == -1) {
    	
    }
})
statusbars.onStatusReached(StatusBarKind.Health, statusbars.StatusComparison.GTE, statusbars.ComparisonType.Percentage, 60, function (status) {
    HealthBar.setColor(2, 15)
})
function Switch_Pokemon () {
    if (3 < Reds_Pokemon_List.length) {
        story.showPlayerChoices(Reds_Pokemon_List[0], Reds_Pokemon_List[1], Reds_Pokemon_List[2], "Or")
        if (story.checkLastAnswer(Reds_Pokemon_List[0])) {
            Reds_Pokemon_List.unshift(Reds_Pokemon_List[0])
            Reds_Pokemon_List.removeAt(1)
            Exit_Choosing_Pokemon_Screen()
            Change_Players_Pokemon = Reds_Pokemon_List[0]
        } else if (story.checkLastAnswer(Reds_Pokemon_List[1])) {
            Reds_Pokemon_List.unshift(Reds_Pokemon_List[1])
            Reds_Pokemon_List.removeAt(2)
            Exit_Choosing_Pokemon_Screen()
            Change_Players_Pokemon = Reds_Pokemon_List[0]
        } else if (story.checkLastAnswer(Reds_Pokemon_List[2])) {
            Reds_Pokemon_List.unshift(Reds_Pokemon_List[2])
            Reds_Pokemon_List.removeAt(3)
            Exit_Choosing_Pokemon_Screen()
            Change_Players_Pokemon = Reds_Pokemon_List[0]
        } else if (story.checkLastAnswer("Or")) {
            story.showPlayerChoices(Reds_Pokemon_List[3], Reds_Pokemon_List[4], Reds_Pokemon_List[5], "Go Back")
            if (story.checkLastAnswer(Reds_Pokemon_List[3])) {
                Reds_Pokemon_List.unshift(Reds_Pokemon_List[3])
                Reds_Pokemon_List.removeAt(4)
                Exit_Choosing_Pokemon_Screen()
                Change_Players_Pokemon = Reds_Pokemon_List[0]
            } else if (story.checkLastAnswer(Reds_Pokemon_List[4])) {
                Reds_Pokemon_List.unshift(Reds_Pokemon_List[4])
                Reds_Pokemon_List.removeAt(5)
                Exit_Choosing_Pokemon_Screen()
                Change_Players_Pokemon = Reds_Pokemon_List[0]
            } else if (story.checkLastAnswer(Reds_Pokemon_List[5])) {
                Reds_Pokemon_List.unshift(Reds_Pokemon_List[5])
                Reds_Pokemon_List.removeAt(6)
                Exit_Choosing_Pokemon_Screen()
                Change_Players_Pokemon = Reds_Pokemon_List[0]
            } else if (story.checkLastAnswer("Go Back")) {
                Switch_Pokemon()
            }
        }
    } else if (3 > list.length) {
        story.showPlayerChoices(Reds_Pokemon_List[0], Reds_Pokemon_List[1], Reds_Pokemon_List[2])
        if (story.checkLastAnswer(Reds_Pokemon_List[0])) {
            Reds_Pokemon_List.unshift(Reds_Pokemon_List[0])
            Reds_Pokemon_List.removeAt(1)
            Exit_Choosing_Pokemon_Screen()
            Change_Players_Pokemon = Reds_Pokemon_List[0]
        } else if (story.checkLastAnswer(Reds_Pokemon_List[1])) {
            Reds_Pokemon_List.unshift(Reds_Pokemon_List[1])
            Reds_Pokemon_List.removeAt(2)
            Exit_Choosing_Pokemon_Screen()
            Change_Players_Pokemon = Reds_Pokemon_List[0]
        } else if (story.checkLastAnswer(Reds_Pokemon_List[2])) {
            Reds_Pokemon_List.unshift(Reds_Pokemon_List[2])
            Reds_Pokemon_List.removeAt(3)
            Exit_Choosing_Pokemon_Screen()
            Change_Players_Pokemon = Reds_Pokemon_List[0]
        }
    }
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile24`, function (sprite, location) {
    game.splash("What was the first Pokemon Ash ever Caught?")
    if (game.askForString("") == "Caterpie") {
        game.splash("What is Misty's main Pokemon?")
        if (game.askForString("") == "Staryu") {
            game.splash("What color is Pollywag")
            if (game.askForString("") == "Blue") {
                game.setGameOverEffect(true, effects.confetti)
            } else {
                game.gameOver(false)
            }
        } else {
            game.gameOver(false)
        }
    } else {
        game.gameOver(false)
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (FIGHT_OPTION) {
        if (DART) {
            if (DART.overlapsWith(FIGHT_OPTION)) {
                if (ANOTHEROP == 1) {
                    Run_Off = 1
                    ANOTHEROP = 0
                    EPA = 0
                    SWIS = 1
                    animation.runMovementAnimation(
                    Players__Pokemon,
                    animation.animationPresets(animation.easeRight),
                    1000,
                    false
                    )
                    pause(1000)
                    story.printDialog("" + Change_Players_Pokemon + " Whacked " + NP, 80, 80, 50, 150)
                    animation.runMovementAnimation(
                    Players__Pokemon,
                    animation.animationPresets(animation.easeLeft),
                    750,
                    false
                    )
                    if (true) {
                        let BIG_THI = 0
                        if (BIG_THI == 0) {
                            ENB.value += randint(-28, -65)
                            pause(2000)
                        } else if (ARK == 1) {
                            ENB.value += -100
                        }
                    } else if ((0 as any) == (1 as any)) {
                        if (ARK == 0) {
                        	
                        } else if (ARK == 1) {
                            ENB.value += -100
                        }
                    }
                    SWIS = 0
                    if (EPA == 0) {
                        if (Attack_Animation == 0) {
                            animation.runMovementAnimation(
                            Pokemon,
                            animation.animationPresets(animation.easeLeft),
                            1000,
                            false
                            )
                            pause(1000)
                            story.printDialog("" + NP + " SMACKEDU ", 80, 80, 50, 150)
                            animation.runMovementAnimation(
                            Pokemon,
                            animation.animationPresets(animation.easeRight),
                            750,
                            false
                            )
                            HealthBar.value += randint(-18, -38)
                            pause(1000)
                            ANOTHEROP = 1
                            SWIS = 0
                            Run_Off = 0
                        } else if (Attack_Animation == 1) {
                            PAA()
                        }
                    }
                }
            }
        }
    }
    if (CATCH_OPTION) {
        if (DART) {
            if (DART.overlapsWith(CATCH_OPTION)) {
                if (ANOTHEROP == 1) {
                    if (Math.percentChance(75)) {
                        ANOTHEROP = 0
                        Reds_Pokemon_List.push(NP)
                        VALue = HealthBar.value
                        Pokemon_Battle_Red.destroy()
                        Pokemon.destroy()
                        RUN_OPTION.destroy()
                        FIGHT_OPTION.destroy()
                        CATCH_OPTION.destroy()
                        HEAL_OPTION.destroy()
                        HealthBar.destroy()
                        ENB.destroy()
                        DART.destroy()
                        Option_Box.destroy()
                        ASH.setFlag(SpriteFlag.Invisible, false)
                        Players__Pokemon.follow(ASH, 80)
                        New_HP_Bar = 1
                        ANOTHEROP = 0
                        Run_Off = 0
                        EPA = 1
                        Encounter_Post_Battle = 1
                        Players_Pokemon_Change_Image = 0
                        Able_to_switch_pokemon = 1
                        scene.cameraFollowSprite(ASH)
                        tiles.setCurrentTilemap(tilemap`level51`)
                        pause(200)
                    } else {
                        ANOTHEROP = 0
                        story.printDialog("IT ESCAPED", 80, 90, 50, 150)
                        pause(200)
                        PAA()
                        ANOTHEROP = 1
                    }
                }
            }
        }
    }
    if (HEAL_OPTION) {
        if (DART) {
            if (DART.overlapsWith(HEAL_OPTION)) {
                if (ANOTHEROP == 1) {
                    ANOTHEROP = 0
                    Amount_Healed = randint(15, 40)
                    HealthBar.value += Amount_Healed
                    story.printDialog("HEALTH INCREASED" + Amount_Healed + "%", 80, 80, 50, 150)
                    pause(200)
                    PAA()
                    ANOTHEROP = 1
                }
            }
        }
    }
})
sprites.onOverlap(SpriteKind.Cursor, SpriteKind.SWITCH, function (sprite, otherSprite) {
    if (controller.A.isPressed()) {
    	
    }
})
sprites.onOverlap(SpriteKind.Cursor, SpriteKind.RUN, function (sprite, otherSprite) {
    if (ANOTHEROP == 1) {
        if (controller.A.isPressed()) {
            let Fighting_Dr_Phil = 0
            if (Fighting_Dr_Phil == 0) {
                if (Math.percentChance(75)) {
                    ANOTHEROP = 0
                    VALue = HealthBar.value
                    Pokemon_Battle_Red.destroy()
                    Pokemon.destroy()
                    RUN_OPTION.destroy()
                    FIGHT_OPTION.destroy()
                    CATCH_OPTION.destroy()
                    HEAL_OPTION.destroy()
                    HealthBar.destroy()
                    ENB.destroy()
                    DART.destroy()
                    Option_Box.destroy()
                    ASH.setFlag(SpriteFlag.Invisible, false)
                    Players__Pokemon.follow(ASH, 80)
                    New_HP_Bar = 1
                    Run_Off = 0
                    EPA = 1
                    Encounter_Post_Battle = 1
                    Able_to_switch_pokemon = 1
                    Players_Pokemon_Change_Image = 0
                    scene.cameraFollowSprite(ASH)
                    tiles.setCurrentTilemap(tilemap`level50`)
                    pause(2500)
                    Encounter_Post_Battle = 0
                    ANOTHEROP = 1
                } else {
                    ANOTHEROP = 0
                    story.printDialog("Gurl What you Trynna escape for u nub", 80, 90, 50, 150)
                    PAA()
                    ANOTHEROP = 1
                }
            }
        }
    }
})
statusbars.onStatusReached(StatusBarKind.Health, statusbars.StatusComparison.LT, statusbars.ComparisonType.Percentage, 60, function (status) {
    HealthBar.setColor(4, 15)
})
statusbars.onZero(StatusBarKind.EnemyHealth, function (status) {
    VALue = HealthBar.value
    Pokemon_Battle_Red.destroy()
    Pokemon.destroy()
    RUN_OPTION.destroy()
    FIGHT_OPTION.destroy()
    CATCH_OPTION.destroy()
    HEAL_OPTION.destroy()
    HealthBar.destroy()
    ENB.destroy()
    DART.destroy()
    Option_Box.destroy()
    ASH.setFlag(SpriteFlag.Invisible, false)
    Players__Pokemon.follow(ASH, 80)
    Run_Off = 0
    New_HP_Bar = 1
    EPA = 1
    Encounter_Post_Battle = 1
    Players_Pokemon_Change_Image = 0
    scene.cameraFollowSprite(ASH)
    tiles.setCurrentTilemap(tilemap`level49`)
    pause(500)
    game.splash("YIPPE")
    pause(2500)
    Able_to_switch_pokemon = 1
    Encounter_Post_Battle = 0
    ANOTHEROP = 1
})
statusbars.onZero(StatusBarKind.Health, function (status) {
    pause(3000)
    game.splash("U lowkey suck")
    game.over(false)
    effects.clouds.endScreenEffect()
})
statusbars.onStatusReached(StatusBarKind.EnemyHealth, statusbars.StatusComparison.LTE, statusbars.ComparisonType.Percentage, 20, function (status) {
    ENB.setColor(5, 15)
})
function PAA () {
    if (NP == "Derpidash") {
        ANOTHEROP = 0
        Pokemon.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
        HealthBar.value += randint(-18, -38)
        story.printDialog("" + NP + " ATTACKED", 80, 80, 50, 150)
        ANOTHEROP = 1
        Run_Off = 0
    } else if (NP == "Derpeon") {
        ANOTHEROP = 0
        story.spriteMoveToLocation(Pokemon, 30, 35, 80)
        story.spriteMoveToLocation(Pokemon, 120, 35, 80)
        animation.stopAnimation(animation.AnimationTypes.All, Pokemon)
        Pokemon.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
        HealthBar.value += randint(-18, -38)
        story.printDialog("" + NP + " ATTACKED", 80, 80, 50, 150)
        ANOTHEROP = 1
        Run_Off = 0
    } else if (NP == "Derpmander") {
        ANOTHEROP = 0
        story.spriteMoveToLocation(Pokemon, 30, 35, 90)
        story.spriteMoveToLocation(Pokemon, 120, 35, 80)
        HealthBar.value += randint(-18, -38)
        story.printDialog("" + NP + " ATTACKED", 80, 80, 50, 150)
        ANOTHEROP = 1
        Run_Off = 0
    } else if (NP == "Derptle") {
        ANOTHEROP = 0
        story.spriteMoveToLocation(Pokemon, 30, 35, 80)
        story.spriteMoveToLocation(Pokemon, 120, 35, 80)
        animation.stopAnimation(animation.AnimationTypes.All, Pokemon)
        Pokemon.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
        HealthBar.value += randint(-28, -58)
        story.printDialog("" + NP + " SPRAYED U", 80, 80, 50, 150)
        ANOTHEROP = 1
        Run_Off = 0
    } else if (NP == "Derpario") {
        ANOTHEROP = 0
        story.spriteMoveToLocation(Pokemon, 30, 35, 80)
        story.spriteMoveToLocation(Pokemon, 120, 35, 80)
        Pokemon.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
        story.printDialog("" + NP + " ATTACKED ", 80, 80, 50, 150)
        ANOTHEROP = 1
        Run_Off = 0
        HealthBar.value += randint(-38, -68)
    } else if (NP == "Ditto") {
        ENB.max = 75
        story.spriteMoveToLocation(Pokemon, 100, 35, 80)
        Pokemon.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . f f f f . . . . . 
            . . . . . f f b b b f . . . . . 
            . . . . f f b b b b b f . . . . 
            . . . f f b b b b b b f f . . . 
            . . . f b b f b b b f b f . . . 
            . . f f b b b b b b b b f . . . 
            . f f b b b b f f f b b f f f . 
            f f b b b b b b b b b b b b b f 
            f f f b b b b b b b b b b b b f 
            . . . f f f f f f b b b b b f f 
            . . . . . . . . . f f f f f f . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
        for (let index = 0; index < randint(4, 8); index++) {
            ATTACK = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . 4 4 4 4 . . . . . . . 
                . . . . 4 5 5 5 5 4 . . . . . . 
                . . . . 4 5 5 5 5 4 . . . . . . 
                . . . . 2 5 5 5 5 2 . . . . . . 
                . . . . 2 5 5 5 5 2 . . . . . . 
                . . . . . 2 2 2 2 . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, Pokemon, 0, 0)
            ATTACK.y = randint(10, 55)
            pause(500)
            ATTACK.setVelocity(-50, 0)
            ATTACK.follow(Players__Pokemon)
            pause(650)
            HealthBar.value += randint(-7, -12)
            ATTACK.destroy()
        }
        pause(1000)
        story.printDialog("" + NP + "Attacked", 80, 80, 50, 150)
    }
    story.spriteMoveToLocation(Pokemon, 120, 35, 80)
    Pokemon.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    ANOTHEROP = 1
    Run_Off = 0
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile5`, function (sprite, location) {
    let ashp: Sprite = null
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
function StartBattle () {
    WPL = [
    "Derpidash",
    "Derpmander",
    "Derpeon",
    "Derptle",
    "Derpasaur",
    "Derpario"
    ]
    NP = WPL._pickRandom()
    scene.setBackgroundColor(1)
    Able_to_switch_pokemon = 0
    Players_Pokemon_Change_Image = 1
    tiles.setCurrentTilemap(tilemap`level47`)
    Pokemon = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    if (NP == "Derpidash") {
        Pokemon.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
        Attack_Animation = 1
    } else if (NP == "Derpmander") {
        Pokemon.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
        Attack_Animation = 0
    } else if (NP == "Derpeon") {
        Pokemon.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
        Attack_Animation = 1
    } else if (NP == "Derptle") {
        Pokemon.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
        Attack_Animation = 1
    } else if (NP == "Derpasaur") {
        Pokemon.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
        Attack_Animation = 1
    } else if (NP == "Derpario") {
        Pokemon.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
        Attack_Animation = 1
    }
    Pokemon.setPosition(119, 35)
    Pokemon_Battle_Red = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    Pokemon_Battle_Red.setPosition(11, 15)
    ASH.setFlag(SpriteFlag.Invisible, true)
    Players__Pokemon.setPosition(11, 15)
    Players__Pokemon.setFlag(SpriteFlag.Invisible, true)
    scene.cameraFollowSprite(Pokemon_Battle_Red)
    Players__Pokemon.follow(null)
    story.printDialog("" + NP + " APPEARED", 90, 80, 50, 170)
    story.printDialog("GO " + Change_Players_Pokemon, 80, 80, 50, 150)
    Players__Pokemon.setFlag(SpriteFlag.Invisible, false)
    if (Players__Pokemon) {
        if (true) {
        	
        } else if (Change_Players_Pokemon == "Derpasaur") {
            Players__Pokemon.setImage(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `)
        } else if (Change_Players_Pokemon == "Derpmander") {
            Players__Pokemon.setImage(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `)
        } else if (Change_Players_Pokemon == "Derptle") {
            Players__Pokemon.setImage(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `)
        } else if (Change_Players_Pokemon == "Derpidash") {
            Players__Pokemon.setImage(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `)
        } else if (Change_Players_Pokemon == "Derpario") {
            Players__Pokemon.setImage(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `)
        } else if (Change_Players_Pokemon == "Derpeon") {
            Players__Pokemon.setImage(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `)
        }
    }
    story.spriteMoveToLocation(Players__Pokemon, 20, 40, 100)
    Option_Box = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Options_Box)
    Option_Box.setPosition(117, 95)
    RUN_OPTION = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.RUN)
    RUN_OPTION.setPosition(145, 102)
    FIGHT_OPTION = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.FIGHT)
    FIGHT_OPTION.setPosition(93, 87)
    HEAL_OPTION = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.SWITCH)
    HEAL_OPTION.setPosition(144, 88)
    CATCH_OPTION = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.CATCH)
    CATCH_OPTION.setPosition(93, 102)
    DART = sprites.create(img`
        . . . . . . . . . . . 
        . . b b b . b b b . . 
        . b b 3 b b b 3 b b . 
        b b 3 3 3 b 3 3 3 b b 
        b 3 3 3 3 3 3 3 3 3 b 
        b b 3 3 3 3 3 3 3 b b 
        . b b 3 3 3 3 3 b b . 
        . . b b 3 3 3 b b . . 
        . . . . b 3 b . . . . 
        . . . . . b . . . . . 
        . . . . . . . . . . . 
        `, SpriteKind.Cursor)
    DART.setPosition(117, 95)
    controller.moveSprite(DART)
    if (New_HP_Bar == 0) {
        HealthBar = statusbars.create(26, 5, StatusBarKind.Health)
        HealthBar.attachToSprite(Players__Pokemon)
        HealthBar.setColor(2, 15)
        HealthBar.setLabel("HP")
        HealthBar.value = 100
    } else if (New_HP_Bar == 1) {
        HealthBar = statusbars.create(26, 5, StatusBarKind.Health)
        HealthBar.attachToSprite(Players__Pokemon)
        HealthBar.setColor(2, 15)
        HealthBar.setLabel("HP")
        HealthBar.value = VALue
    }
    ENB = statusbars.create(26, 5, StatusBarKind.EnemyHealth)
    ENB.attachToSprite(Pokemon)
    ENB.setColor(2, 15)
    ENB.setLabel("HP")
    ENB.value = 100
    HealthBar.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
    ENB.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
}
controller.player1.onButtonEvent(ControllerButton.Right, ControllerButtonEvent.Pressed, function () {
    if (Players__Pokemon) {
        if (Players_Pokemon_Change_Image == 0) {
            if (Change_Players_Pokemon == "Ditto") {
                Players__Pokemon.setImage(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . f f f f . . . . . 
                    . . . . . f f b b b f . . . . . 
                    . . . . f f b b b b b f . . . . 
                    . . . f f b b b b b b f f . . . 
                    . . . f b b f b b b f b f . . . 
                    . . f f b b b b b b b b f . . . 
                    . f f b b b b f f f b b f f f . 
                    f f b b b b b b b b b b b b b f 
                    f f f b b b b b b b b b b b b f 
                    . . . f f f f f f b b b b b f f 
                    . . . . . . . . . f f f f f f . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `)
            } else if (Change_Players_Pokemon == "Derpasaur") {
                Players__Pokemon.setImage(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `)
            } else if (Change_Players_Pokemon == "Derpmander") {
                Players__Pokemon.setImage(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `)
            } else if (Change_Players_Pokemon == "Derptle") {
                Players__Pokemon.setImage(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `)
            } else if (Change_Players_Pokemon == "Derpidash") {
                Players__Pokemon.setImage(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `)
            } else if (Change_Players_Pokemon == "Derpario") {
                Players__Pokemon.setImage(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `)
            } else if (Change_Players_Pokemon == "Derpeon") {
                Players__Pokemon.setImage(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `)
            }
        }
    }
})
statusbars.onStatusReached(StatusBarKind.Health, statusbars.StatusComparison.LTE, statusbars.ComparisonType.Percentage, 20, function (status) {
    HealthBar.setColor(5, 15)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Nurse, function (sprite, otherSprite) {
    if (ASH) {
        if (VALue) {
            VALue = 100
            story.printDialog("UR DERPMON AE HEALED", 80, 90, 50, 150)
        } else {
            story.printDialog("YOUR DERPMON ARE ALREADY HEALED", 80, 90, 50, 150)
        }
    }
})
sprites.onOverlap(SpriteKind.Cursor, SpriteKind.CATCH, function (sprite, otherSprite) {
	
})
statusbars.onStatusReached(StatusBarKind.EnemyHealth, statusbars.StatusComparison.GTE, statusbars.ComparisonType.Percentage, 60, function (status) {
    ENB.setColor(2, 15)
})
controller.player1.onButtonEvent(ControllerButton.Left, ControllerButtonEvent.Pressed, function () {
    if (Players__Pokemon) {
        if (Players_Pokemon_Change_Image == 0) {
            if (Change_Players_Pokemon == "Ditto") {
                Players__Pokemon.setImage(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . f f f f . . . . . 
                    . . . . . f f b b b f . . . . . 
                    . . . . f f b b b b b f . . . . 
                    . . . f f b b b b b b f f . . . 
                    . . . f b b f b b b f b f . . . 
                    . . f f b b b b b b b b f . . . 
                    . f f b b b b f f f b b f f f . 
                    f f b b b b b b b b b b b b b f 
                    f f f b b b b b b b b b b b b f 
                    . . . f f f f f f b b b b b f f 
                    . . . . . . . . . f f f f f f . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `)
            } else if (Change_Players_Pokemon == "Derpasaur") {
                Players__Pokemon.setImage(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `)
            } else if (Change_Players_Pokemon == "Derpmander") {
                Players__Pokemon.setImage(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `)
            } else if (Change_Players_Pokemon == "Derptle") {
                Players__Pokemon.setImage(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `)
            } else if (Change_Players_Pokemon == "Derpidash") {
                Players__Pokemon.setImage(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `)
            } else if (Change_Players_Pokemon == "Derpario") {
                Players__Pokemon.setImage(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `)
            } else if (Change_Players_Pokemon == "Derpeon") {
                Players__Pokemon.setImage(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `)
            }
        }
    }
})
let Moving = false
let WPL: string[] = []
let ashd: Sprite = null
let ATTACK: Sprite = null
let Amount_Healed = 0
let Players_Pokemon_Change_Image = 0
let Encounter_Post_Battle = 0
let Option_Box: Sprite = null
let HEAL_OPTION: Sprite = null
let RUN_OPTION: Sprite = null
let Pokemon_Battle_Red: Sprite = null
let VALue = 0
let CATCH_OPTION: Sprite = null
let Attack_Animation = 0
let NP = ""
let SWIS = 0
let EPA = 0
let Run_Off = 0
let DART: Sprite = null
let FIGHT_OPTION: Sprite = null
let Change_Players_Pokemon = ""
let list: Image[] = []
let Reds_Pokemon_List: string[] = []
let Player_Position_Y = 0
let Player_Position_X = 0
let ENB: StatusBarSprite = null
let HealthBar: StatusBarSprite = null
let Able_to_switch_pokemon = 0
let ARK = 0
let ANOTHEROP = 0
let New_HP_Bar = 0
let Players__Pokemon: Sprite = null
let ASHLIST: number[] = []
let ASH: Sprite = null
let Pokemon: Sprite = null
let PARTY = -1
let ASHPOK = ["Ditto"]
Pokemon = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.pokemon)
ASH = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
tiles.placeOnRandomTile(ASH, assets.tile`myTile1`)
let POKSW = ASHLIST[0]
ASH.setFlag(SpriteFlag.Invisible, true)
scene.setBackgroundColor(11)
tiles.setCurrentTilemap(tilemap`level48`)
scene.setBackgroundColor(7)
Players__Pokemon = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . f f f f . . . . . 
    . . . . . f f b b b f . . . . . 
    . . . . f f b b b b b f . . . . 
    . . . f f b b b b b b f f . . . 
    . . . f b b f b b b f b f . . . 
    . . f f b b b b b b b b f . . . 
    . f f b b b b f f f b b f f f . 
    f f b b b b b b b b b b b b b f 
    f f f b b b b b b b b b b b b f 
    . . . f f f f f f b b b b b f f 
    . . . . . . . . . f f f f f f . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Pokemon_Player)
New_HP_Bar = 0
ANOTHEROP = 1
ARK = 0
ASH.setFlag(SpriteFlag.ShowPhysics, true)
Players__Pokemon.setPosition(220, 770)
Players__Pokemon.follow(ASH, 75)
ASH.setFlag(SpriteFlag.Invisible, false)
scene.cameraFollowSprite(ASH)
ASH.setPosition(12, 678)
Players__Pokemon.setStayInScreen(true)
controller.moveSprite(ASH, 100, 100)
Able_to_switch_pokemon = 1
let HEAL1 = sprites.create(img`
    ................
    ................
    ................
    ................
    ................
    .....f....f.....
    .11111111111111.
    .11111122111111.
    .11112222221111.
    .11112222221111.
    .11111122111111.
    .11111122111111.
    .11111111111111.
    .fffff....fffff.
    .fffff....fffff.
    .fffff....fffff.
    .fff.........ff.
    .............ff.
    ................
    ................
    ................
    `, SpriteKind.Nurse)
HEAL1.setPosition(121, 760)
let HEAL2 = sprites.create(img`
    ................
    ................
    ................
    ................
    ................
    .....f....f.....
    .11111111111111.
    .11111122111111.
    .11112222221111.
    .11112222221111.
    .11111122111111.
    .11111122111111.
    .11111111111111.
    .fffff....fffff.
    .fffff....fffff.
    .fffff....fffff.
    .fff.........ff.
    .............ff.
    ................
    ................
    ................
    `, SpriteKind.Nurse)
HEAL2.setPosition(281, 225)
let HEAL3 = sprites.create(img`
    ................
    ................
    ................
    ................
    ................
    .....f....f.....
    .11111111111111.
    .11111122111111.
    .11112222221111.
    .11112222221111.
    .11111122111111.
    .11111122111111.
    .11111111111111.
    .fffff....fffff.
    .fffff....fffff.
    .fffff....fffff.
    .fff.........ff.
    .............ff.
    ................
    ................
    ................
    `, SpriteKind.Nurse)
HEAL3.setPosition(621, 589)
forever(function () {
    Moving = controller.player1.isPressed(ControllerButton.Up) || (controller.player1.isPressed(ControllerButton.Right) || (controller.player1.isPressed(ControllerButton.Down) || controller.player1.isPressed(ControllerButton.Left)))
    if (!(Moving)) {
        animation.stopAnimation(animation.AnimationTypes.All, ASH)
        if (SWIS == 0) {
            animation.stopAnimation(animation.AnimationTypes.All, Players__Pokemon)
        }
    }
    if (Encounter_Post_Battle == 0) {
        if (Moving) {
            if (ASH) {
                if (ASH.tileKindAt(TileDirection.Center, sprites.swamp.swampTile1)) {
                    if (Math.percentChance(89)) {
                        StartBattle()
                    }
                }
            }
        }
    }
})
