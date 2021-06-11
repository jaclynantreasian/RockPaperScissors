function computerPlay(arr){
    const randomItem = Math.floor(Math.random() * game.length);
    const item = arr[randomItem];
    return item;  
}

const game = ["rock", "paper", "scissors"];
const computerSelection = computerPlay(game);

let playerSelection = prompt("Rock, Paper or Scissors?");

function playRound(playerSelection, computerSelection){
    const playerWin = (playerSelection.toLowerCase() == "rock" && computerSelection == "scissors") || (playerSelection.toLowerCase() == "paper" && computerSelection == "rock") || (playerSelection.toLowerCase() == "scissors" && computerSelection == "paper")
    const playerLose = (computerSelection == "scissors" && playerSelection.toLowerCase() == "paper") || (computerSelection == "paper" && playerSelection.toLowerCase() == "rock") || (computerSelection == "rock" && playerSelection.toLowerCase() == "scissors");
    console.log(playerSelection, computerSelection);
    console.log(playerWin, playerLose);
    if(playerSelection.tolowerCase == computerSelection){
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

console.log(playRound(playerSelection, computerSelection));
console.log(playerSelection, computerSelection);



