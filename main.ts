let add1 = 0
let add2 = 0
input.onButtonPressed(Button.A, function () {
    add1 = randint(0, 50)
    add2 = randint(0, 50)
    basic.showNumber(add1)
    basic.showString("+")
    basic.showNumber(add2)
    basic.showString("=")
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(add1 + add2)
})
