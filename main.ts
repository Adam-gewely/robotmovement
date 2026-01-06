function TurnLeft (Degrees: number) {
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 255)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 255)
    basic.pause(1000 * (Degrees / MotorTurnPerSecond))
    maqueen.motorStop(maqueen.Motors.M1)
    maqueen.motorStop(maqueen.Motors.M2)
}
function MoveCM (CM: number) {
    MoveSecs(CM / MotorCmPerSecond)
}
input.onButtonPressed(Button.A, function () {
    while (true) {
        if (maqueen.Ultrasonic() < 5) {
            TurnRight(90)
        } else {
            MoveCM(3)
            TurnLeft(5)
        }
    }
})
input.onButtonPressed(Button.B, function () {
    while (true) {
        if (maqueen.Ultrasonic() < 5) {
            TurnRight(90)
        } else {
            MoveCM(1)
            TurnLeft(5)
        }
    }
})
function MoveSecs (Seconds: number) {
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
    basic.pause(Seconds * 1000)
    maqueen.motorStop(maqueen.Motors.All)
}
function TurnRight (Degrees: number) {
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 255)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 255)
    basic.pause(1000 * (Degrees / MotorTurnPerSecond))
    maqueen.motorStop(maqueen.Motors.M1)
    maqueen.motorStop(maqueen.Motors.M2)
}
let MotorTurnPerSecond = 0
let MotorCmPerSecond = 0
MotorCmPerSecond = 25
MotorTurnPerSecond = 355
let MotorTurnConstant = 360 / MotorTurnPerSecond
IR.IR_init()
