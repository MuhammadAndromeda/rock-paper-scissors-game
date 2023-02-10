let Hand = 0
input.onGesture(Gesture.Shake, function () {
    Hand = randint(0, 3)
    if (Hand == 1) {
        basic.showIcon(IconNames.Scissors)
    } else if (Hand == 2) {
        basic.showIcon(IconNames.SmallSquare)
    } else {
        basic.showIcon(IconNames.Square)
    }
})
