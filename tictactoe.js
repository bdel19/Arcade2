const state = {
    board: [
        [null, null, null],
        [null, null, null],
        [null, null, null]
    ],
    player: ["X", "O"]
}

const board = document.querySelector('#board');
const player1 = document.querySelector('#player1');
const player2 = document.querySelector('#player2');

board.addEventListener('click', function(ev){
    cell.innerText = state.player;
})