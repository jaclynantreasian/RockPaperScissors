
function game(){
    let n = 5
    for (let i = 0; i <= n; i++);

function computerPlay(arr){
    const randomItem = Math.floor(Math.random() * game.length);
    const item = arr[randomItem];
    return item;  
}

const g = ["rock", "paper", "scissors"];
const computerSelection = computerPlay(g);

let playerSelection = prompt("Rock, Paper or Scissors?");
const playS = playerSelection.toLowerCase();


function playRound(playerSelection, computerSelection){
    const playerWin = (playS == "rock" && computerSelection == "scissors") || (playS == "paper" && computerSelection == "rock") || (playS == "scissors" && computerSelection == "paper")
    const playerLose = (computerSelection == "scissors" && playS == "paper") || (computerSelection == "paper" && playS == "rock") || (computerSelection == "rock" && playerSelection.toLowerCase() == "scissors");
    if(playS == computerSelection){
        return "you tied! Try again!"
    }

   else  if (playerWin){
         return `You Win! ${computerSelection} beats ${playerSelection}`;
     }

    else if (playerLose){
        return `You Lose! ${playerSelection} beats ${computerSelection}`;
     }    

   else {
       return "Please type rock, paper or scissors";
   }
}
console.log(playerWin, playerLose)
    playRound();
}

console.log(playRound(playS, computerSelection));


// create new function called game and loop over function playRound 5 times