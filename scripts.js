const X_CLASS = 'x';
const CIRCLE_CLASS = 'circle';
let circleTurn;

const SQUARE = document.querySelectorAll('.board-unit');
const BOARD = document.getElementById('game-container');
const WIN = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

SQUARE.forEach(unit => {
    unit.addEventListener('click', gamePlay, { once: true })
})

function gamePlay(e) {
    const unit = e.target;
    const unitTurn = circleTurn ? CIRCLE_CLASS : X_CLASS;
    unitMark(unit, unitTurn);
    switchTurns()
    boardHover()
    if (checkWin(unitTurn)) {
        endGame(false)
    } else if (isDraw()) {
        endGame(true)
    } else {
        switchTurns();
        boardHover();
    }
}

function isDraw() {

}

function endGame(draw) {
    const WIN_TEXT = document.querySelector('.win')
    const LOSE_TEXT = document.querySelector('.lose')
    const DRAW_TEXT = document.querySelector('.draw')
    if (draw) {
        
    } else {
        WIN_TEXT.classList.add('active');
    }
}

function unitMark(unit, unitTurn) {
    unit.classList.add(unitTurn);
 }

 function switchTurns() {
    circleTurn = !circleTurn;
 }

 function boardHover() {
    if (BOARD.classList.contains(X_CLASS)) {
        BOARD.classList.remove(X_CLASS)
        BOARD.classList.add(CIRCLE_CLASS)
    }
    else if (BOARD.classList.contains(CIRCLE_CLASS)) {
        BOARD.classList.remove(CIRCLE_CLASS)
        BOARD.classList.add(X_CLASS)
    }
 }

 function checkWin(unitTurn) {
    return WIN.some(combo => {
        return combo.every(i => {
            return SQUARE[i].classList.contains(unitTurn)
        })
    })
 }
