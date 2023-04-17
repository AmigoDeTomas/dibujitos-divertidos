input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        # # # # #
        # . # . #
        . # # # .
        . . # . .
        . . # . .
        `)
    basic.pause(500)
    basic.showLeds(`
        # . . . #
        . # # # .
        . . # . .
        . # # # .
        . . # . .
        `)
    for (let index = 0; index < 4; index++) {
        basic.pause(500)
        basic.showLeds(`
            . . . . .
            # . # . .
            # . . # #
            # # # # .
            # . . # .
            `)
        basic.showLeds(`
            . . . . .
            # . # . .
            # . . # #
            # # # # .
            . # . . #
            `)
        basic.showLeds(`
            . . . . .
            # . # . .
            # . . # #
            # # # # .
            # . . # .
            `)
        basic.showLeds(`
            . . . . .
            # . # . .
            # . . # #
            # # # # .
            . # . . #
            `)
        basic.showLeds(`
            . . . . .
            # . # . .
            # . . # #
            # # # # .
            # . . # .
            `)
        basic.showLeds(`
            # . # . .
            # . . # #
            # # # # .
            # . . # .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            # . # . .
            # . . # #
            # # # # .
            # . . # .
            `)
        basic.showLeds(`
            # . # . .
            # . . # #
            # # # # .
            # . . # .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            # . # . .
            # . . # #
            # # # # .
            # . . # .
            `)
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        # # # # #
        # . # . #
        . # # # .
        . . # . .
        . . # . .
        `)
    basic.pause(500)
    basic.showLeds(`
        # . . . #
        . # # # .
        . . # . .
        . # # # .
        . . # . .
        `)
    basic.pause(500)
    basic.showLeds(`
        . . . . .
        . . . # #
        . . . # .
        . # # # .
        # # . . .
        `)
    basic.showLeds(`
        . . # # #
        . . # . #
        . . # . .
        # # # . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        # # # . .
        # . # . .
        . . # . .
        . . # # #
        `)
    basic.showLeds(`
        # # . . .
        . # . . .
        . # # # #
        . . . . #
        . . . . #
        `)
    basic.showLeds(`
        . . . . .
        . . . # #
        . . . # .
        . # # # .
        # # . . .
        `)
    basic.showLeds(`
        . . # # #
        . . # . #
        . . # . .
        # # # . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        # # # . .
        # . # . .
        . . # . .
        . . # # #
        `)
    basic.showLeds(`
        # # . . .
        . # . . .
        . # # # #
        . . . . #
        . . . . #
        `)
})
basic.forever(function () {
	
})
