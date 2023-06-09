const state = {
    board: [
        [null, null, null],
        [null, null, null],
        [null, null, null]
    ],

    player1Name: '',
    player2Name: '',
    player: "X",
    playerTurn: "",
};

let clickAmount = 0;

const board = document.querySelector('#board');
const cell = document.querySelectorAll('.cell');
const cell1 = document.querySelector('#cell1');
const cell2 = document.querySelector('#cell2');
const cell3 = document.querySelector('#cell3');
const cell4 = document.querySelector('#cell4');
const cell5 = document.querySelector('#cell5');
const cell6 = document.querySelector('#cell6');
const cell7 = document.querySelector('#cell7');
const cell8 = document.querySelector('#cell8');
const cell9 = document.querySelector('#cell9');
const playerAssign = document.querySelector('#playerAssign');
const player1 = document.querySelector('#player1');
const player2 = document.querySelector('#player2');
const currentPlayer = document.querySelector('.currentPlayer');
const subBtn = document.getElementById('submit');
const victor = document.querySelector('#victor');
const restartBtn = document.querySelector("#restart");

board.style.display = "none";
currentPlayer.style.display="none";
victor.style.display = "none";
restartBtn.style.display="none";

subBtn.addEventListener('click', function(ev){
    ev.preventDefault();
    state.player1Name = player1.value
    state.player2Name = player2.value
    board.style.display = "flex";
    playerAssign.style.display = "none";
    playerTurn = state.player1Name;
    currentPlayer.style.display = "flex"
    currentPlayer.innerText = `It is ${playerTurn}'s turn!`
})

board.addEventListener('click', function (ev){
    clickAmount += 1;
    if(ev.target.innerText === ""){
        ev.target.innerText = state.player;
        checkWinner();
        if(state.player === "X"){
            state.player = "O"
            playerTurn = state.player2Name
            
        }else if(state.player === "O"){
            state.player = "X";
            playerTurn = state.player1Name;
        }
    }
    currentPlayer.innerText = `It is ${playerTurn}'s turn!`
})

function checkWinner(){
    if(
        (cell1.innerText === "X" && cell2.innerText === "X" && cell3.innerText === "X")
        ||
        (cell4.innerText === "X" && cell5.innerText === "X" && cell6.innerText === "X")
        ||
        (cell7.innerText === "X" && cell8.innerText === "X" && cell9.innerText === "X")
        ||
        (cell1.innerText === "X" && cell4.innerText === "X" && cell7.innerText === "X")
        ||
        (cell2.innerText === "X" && cell5.innerText === "X" && cell8.innerText === "X")
        ||
        (cell3.innerText === "X" && cell6.innerText === "X" && cell9.innerText === "X")
        ||
        (cell1.innerText === "X" && cell5.innerText === "X" && cell9.innerText === "X")
        ||
        (cell3.innerText === "X" && cell5.innerText === "X" && cell7.innerText === "X")
        ||
        (cell1.innerText === "O" && cell2.innerText === "O" && cell3.innerText === "O")
        ||
        (cell4.innerText === "O" && cell5.innerText === "O" && cell6.innerText === "O")
        ||
        (cell7.innerText === "O" && cell8.innerText === "O" && cell9.innerText === "O")
        ||
        (cell1.innerText === "O" && cell4.innerText === "O" && cell7.innerText === "O")
        ||
        (cell2.innerText === "O" && cell5.innerText === "O" && cell8.innerText === "O")
        ||
        (cell3.innerText === "O" && cell6.innerText === "O" && cell9.innerText === "O")
        ||
        (cell1.innerText === "O" && cell5.innerText === "O" && cell9.innerText === "O")
        ||
        (cell3.innerText === "O" && cell5.innerText === "O" && cell7.innerText === "O")){
            board.style.display = "none";
            currentPlayer.style.display="none";
            victor.style.display="flex";
            victor.innerText = `${playerTurn} has won!`
            restartBtn.style.display="flex";
    }else if(clickAmount === 9){
        board.style.display = "none";
            currentPlayer.style.display="none";
            victor.style.display="flex";
            victor.innerText = "Draw!"
            restartBtn.style.display="flex";

    }
}

restartBtn.addEventListener('click', function(ev){   
    board.style.display = "flex";
    currentPlayer.style.display="flex";
    victor.style.display="none";
    restartBtn.style.display="none";
    cell1.innerText="";
    cell2.innerText="";
    cell3.innerText="";
    cell4.innerText="";
    cell5.innerText="";
    cell6.innerText="";
    cell7.innerText="";
    cell8.innerText="";
    cell9.innerText="";
    state.player = "X"
    playerTurn = state.player1Name
    currentPlayer.innerText = `It is ${playerTurn}'s turn!`;
    clickAmount=0 }
)