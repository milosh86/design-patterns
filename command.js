const actionFigure = document.createElement("div")
actionFigure.style.width = "20px"
actionFigure.style.height = "20px"
actionFigure.style.background = "coral"
actionFigure.style.color = "white"
actionFigure.style.position = "absolute"
actionFigure.style.top = 0
actionFigure.style.left = 0
actionFigure.innerHTML = "o"
document.body.appendChild(actionFigure)
// window.actionFigure = actionFigure

// 1. event handler immediately calls approprate functions ()
window.addEventListener('keypress', ev => {
    switch (ev.key) {
        case "a":
            moveLeft()
            break
        case "d":
            moveRight()
            break
        case "w":
            moveUp()
            break
        case "s":
            moveDown()
            break
    }
})

function moveLeft() {
    const leftPosition = parseInt(actionFigure.style.left, 10)
    if (leftPosition > 0) actionFigure.style.left = `${leftPosition - 1}px`
}

function moveRight() {
    const leftPosition = parseInt(actionFigure.style.left, 10)
    if (leftPosition < 500) actionFigure.style.left = `${leftPosition + 1}px`
}

function moveUp() {
    const topPosition = parseInt(actionFigure.style.top, 10)
    if (topPosition > 0) actionFigure.style.top = `${topPosition - 1}px`
}

function moveDown() {
    const topPosition = parseInt(actionFigure.style.top, 10)
    if (topPosition < 500) actionFigure.style.top = `${topPosition + 1}px`
}

// 2. Command is a function/method call encapsulated in object, so it could be called later
// In Javascript, function IS an object, so in some cases it could be just a callback function
const buttonA = makeMoveFigureCommand(-1, 0)
const buttonD = makeMoveFigureCommand(1, 0)
const buttonW = makeMoveFigureCommand(0, -1)
const buttonS = makeMoveFigureCommand(0, 1)

window.addEventListener('keypress', ev => {
    switch (ev.key) {
        case "a":
            Invoker.run(makeMoveFigureCommand(-1, 0))
            break
        case "d":
            Invoker.run(makeMoveFigureCommand(1, 0))
            break
        case "w":
            Invoker.run(makeMoveFigureCommand(0, -1))
            break
        case "s":
            Invoker.run(makeMoveFigureCommand(0, 1))
            break
        case "u":
            Invoker.undo()
            break
    }
})

function makeMoveFigureCommand(x, y) {
    let prevLeftPosition, prevTopPosition
    return {
        execute() {
            prevLeftPosition = parseInt(actionFigure.style.left, 10)
            prevTopPosition = parseInt(actionFigure.style.top, 10)
            if (x) {
                let newLeftPosition = prevLeftPosition + x
                if (newLeftPosition < 0) newLeftPosition = 0
                if (newLeftPosition > 100) newLeftPosition = 100

                actionFigure.style.left = `${newLeftPosition}px`
                prevLeftPosition = newLeftPosition
            }
            if (y) {
                let newTopPosition = prevTopPosition + y
                if (newTopPosition < 0) newTopPosition = 0
                if (newTopPosition > 100) newTopPosition = 100

                actionFigure.style.top = `${newTopPosition}px`
                prevTopPosition = newTopPosition
            }
        },
        undo() {
            if (prevLeftPosition) actionFigure.style.left = prevLeftPosition + 'px';
            if (prevTopPosition) actionFigure.style.top = prevTopPosition + 'px';

        }
    }
}

const Invoker = {
    _commandsHistory: [],

    run(command) {
        this._commandsHistory.push(command)
        command.execute()
    },

    undo() {
        const command = this._commandsHistory.pop()
        if (command) command.undo()
    }
}
