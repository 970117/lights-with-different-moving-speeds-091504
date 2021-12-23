function LED (Y: number, Speed: number) {
    while (true) {
        for (let index = 0; index <= 4; index++) {
            if (list[Y][index] == 1) {
                led.plot(index, Y)
            } else {
                led.unplot(index, Y)
            }
        }
        list[Y].unshift(list[Y].pop())
        basic.pause(Speed)
    }
}
let list: number[][] = []
list = [
[
1,
0,
0,
0,
0
],
[
1,
0,
0,
0,
0
],
[
1,
0,
0,
0,
0
],
[
1,
0,
0,
0,
0
],
[
1,
0,
0,
0,
0
],
[
0,
0,
0,
0,
0
]
]
control.inBackground(function () {
    // 呼叫LED(排數)(暫停毫秒數)
    LED(0, 1000)
})
control.inBackground(function () {
    LED(3, 925)
})
control.inBackground(function () {
    LED(1, 975)
})
control.inBackground(function () {
    LED(4, 900)
})
control.inBackground(function () {
    LED(2, 950)
})
