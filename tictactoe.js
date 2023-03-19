const state = {
    board: [
        [null, null, null],
        [null, null, null],
        [null, null, null]
    ],

    player1Name: '',
    player2Name: '',
    player: "X",
    playerTurn: ""
}

const board = document.querySelector('#board');
board.style.display = "none";

const player1 = document.querySelector('#player1');
const player2 = document.querySelector('#player2');

const cell = document.querySelector('.cell');

const subBtn = document.getElementById('submit');

const currentPlayer = document.querySelector('.currentPlayer');
currentPlayer.style.display="none";

const playerAssign = document.querySelector('#playerAssign');

const victor = document.querySelector('#victor');
victor.style.display = "none";

const cell1 = document.querySelector('#cell1');
const cell2 = document.querySelector('#cell2');
const cell3 = document.querySelector('#cell3');
const cell4 = document.querySelector('#cell4');
const cell5 = document.querySelector('#cell5');
const cell6 = document.querySelector('#cell6');
const cell7 = document.querySelector('#cell7');
const cell8 = document.querySelector('#cell8');
const cell9 = document.querySelector('#cell9');


//Sets player names
subBtn.addEventListener('click', function(ev){
    ev.preventDefault();
    state.player1Name = player1.value
    state.player2Name = player2.value
    board.style.display = "flex";
    playerAssign.style.display = "none";
    console.log(state.player)
    playerTurn = state.player1Name;
    currentPlayer.style.display = "flex"
    currentPlayer.innerText = `It is ${playerTurn}'s turn!`
    console.log(currentPlayer)
})



//checks if cell has been played, inserts marker into cell, changes player
board.addEventListener('click', function (ev){
    if(ev.target.innerText === ""){
        ev.target.innerText = state.player;
        if(state.player === "X"){
            state.player = "O"
            playerTurn = state.player2Name
            
        }else if(state.player === "O"){
            state.player = "X";
            playerTurn = state.player1Name;
        }
    }
    currentPlayer.innerText = `It is ${playerTurn}'s turn!`
    topLeftToBottomRight();
    console.log(board[i][i])
    console.log(state.player);
})

// cell.addEventListener('mouseenter', function(ev){
//     ev.target.innerText = state.player;
//     console.log("Hover event")
// })

// function topLeftToBottomRight() {
    //     for (let i = 0; i < board.length; i++) {
    //       console.log(board[i][i])
    //     }
    //   }