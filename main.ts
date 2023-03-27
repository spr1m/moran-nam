input.onPinPressed(TouchPin.P2, function () {
    for (let index = 0; index < 2; index++) {
        SuperBit.Servo(SuperBit.enServo.S1, 180)
        basic.pause(2000)
        SuperBit.Servo(SuperBit.enServo.S1, 0)
        basic.pause(1000)
    }
})
input.onPinPressed(TouchPin.P1, function () {
    for (let index = 0; index < 2; index++) {
        SuperBit.Servo(SuperBit.enServo.S1, 100)
        basic.pause(2000)
        SuperBit.Servo(SuperBit.enServo.S1, 0)
        basic.pause(1000)
    }
})
