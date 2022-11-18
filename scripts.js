const X_CLASS = 'x';
const CIRCLE_CLASS = 'circle';
const RESTART = document.getElementById('restart-btn')
const SQUARE = document.querySelectorAll('.board-unit');
const BOARD = document.getElementById('game-container');
const WIN_TEXT = document.querySelector('.win')
const DRAW_TEXT = document.querySelector('.draw')
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
let circleTurn;

startGame();

function startGame() {
    circleTurn = false;
    SQUARE.forEach(unit => {
        unit.classList.remove(X_CLASS);
        unit.classList.remove(CIRCLE_CLASS);
        unit.removeEventListener('click', gamePlay)
        unit.addEventListener('click', gamePlay, { once: true })
    })
    boardHover();
    WIN_TEXT.classList.remove('active');
    DRAW_TEXT.classList.remove('active');
}

RESTART.addEventListener('click', startGame)

function gamePlay(e) {
    const unit = e.target;
    const unitTurn = circleTurn ? CIRCLE_CLASS : X_CLASS;
    unitMark(unit, unitTurn);
    if (checkWin(unitTurn)) {
        endGame(false)
    } else if (isDraw()) {
        endGame(true)
    } else {
        switchTurns();
        boardHover();
    };

}

function endGame(draw) {
    if (draw) {
        DRAW_TEXT.classList.add('active')
    } else {
       WIN_TEXT.innerText = `${circleTurn ? "O's" : "X's"} Wins!`
       WIN_TEXT.classList.add('active')
    }  
}

function isDraw() {
    return [...SQUARE].every(unit => {
        return unit.classList.contains(X_CLASS) || 
        unit.classList.contains(CIRCLE_CLASS);
    })
}

function unitMark(unit, unitTurn) {
    unit.classList.add(unitTurn);
 }

 function switchTurns() {
    circleTurn = !circleTurn;
 }

 function boardHover() {
    if (!circleTurn) {
        BOARD.classList.add(X_CLASS)
        BOARD.classList.remove(CIRCLE_CLASS)
    } else {
        BOARD.classList.add(CIRCLE_CLASS)
        BOARD.classList.remove(X_CLASS)
    }
 }

 function checkWin(unitTurn) {
    return WIN.some(combo => {
        return combo.every(i => {
            return SQUARE[i].classList.contains(unitTurn)
        })
    })
 }
