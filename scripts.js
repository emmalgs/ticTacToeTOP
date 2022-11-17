const SQUARE = document.querySelectorAll('.board-unit');
const BOARD = document.getElementById('game-container');

BOARD.addEventListener('click', () => {
    if (BOARD.classList.contains('x')) {
        BOARD.classList.remove('x')
        BOARD.classList.add('circle')
    }
    else if (BOARD.classList.contains('circle')) {
        BOARD.classList.remove('circle')
        BOARD.classList.add('x')
    }
})

SQUARE.forEach(unit => {
    unit.addEventListener('click', () => {
        if (BOARD.classList.contains('x')) {
                unit.classList.add('x')
                } else if (BOARD.classList.contains('circle')) {
                    unit.classList.add('circle')
                }
            });
            })

