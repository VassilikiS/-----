let Βαθμός_1 = 0
let Βαθμός_2 = 0
input.onGesture(Gesture.Shake, function () {
    Βαθμός_1 = randint(1, 20)
    basic.showNumber(Βαθμός_1)
    basic.pause(1000)
    Βαθμός_2 = randint(1, 20)
    basic.showNumber(Βαθμός_2)
    basic.pause(2000)
    basic.clearScreen()
    if (Βαθμός_1 >= 15 || Βαθμός_2 >= 15) {
        basic.showIcon(IconNames.Happy)
        basic.pause(2000)
        music.play(music.stringPlayable("C D E F G A B C5 ", 120), music.PlaybackMode.UntilDone)
    } else {
        basic.showIcon(IconNames.No)
        basic.pause(2000)
        music.play(music.builtinPlayableSoundEffect(soundExpression.giggle), music.PlaybackMode.UntilDone)
    }
})
