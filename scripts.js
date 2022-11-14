

const SQUARE = document.querySelectorAll('.board-unit');

SQUARE.forEach(unit => {
    unit.addEventListener('click', () => {
        console.log(unit)
    } )
})

