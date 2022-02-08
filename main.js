let playerScore = document.querySelector(".score--0");
let compScore = document.querySelector(".score--1");
const rock = document.querySelector("#rock");
const scissors = document.querySelector("#scissors");
const paper = document.querySelector("#paper");
const btnNew = document.querySelector(".btn--new");
const winner = document.querySelector(".winner");
const results = document.querySelector(".results");

let playing, playerPlus, compPlus;

const init = function () {
  scores = [0, 0];
  compScore.textContent = 0;
  playerScore.textContent = 0;
  document.querySelector(".winner").classList.add("hidden");
  playing = true;
  results.textContent = "Start Playing...";
};
init();

const g = ["rock", "paper", "scissors"];
function computerPlay(arr) {
  const randomItem = Math.floor(Math.random() * g.length);
  const item = arr[randomItem];
  return item;
}

// const p = ["rock", "paper", "scissors"];
// function playerSelection(arr) {
//   const randomItem = Math.floor(Math.random() * g.length);
//   const item = arr[randomItem];
//   return item;
// }

if (playing) {
  let playerPlus = function () {
    scores[0] += 1;
    playerScore.textContent = scores[0];
  };

  let compPlus = function () {
    scores[1] += 1;
    compScore.textContent = scores[1];
  };

  function playRound(PS, CS) {
    const playerWin =
      (PS == "rock" && CS == "scissors") ||
      (PS == "paper" && CS == "rock") ||
      (PS == "scissors" && CS == "paper");
    const playerLose =
      (CS == "scissors" && PS == "paper") ||
      (CS == "paper" && PS == "rock") ||
      (CS == "rock" && PS == "scissors");
    if (PS == CS) {
      results.textContent = "you tied! Try again!";

      return {
        message: "you tied! Try again!",
        response: "tie",
      };
    } else if (playerWin) {
      //increase player score by 1
      playerPlus();
      results.textContent = `You Win! ${PS} beats ${CS}`;

      return {
        message: `You Win! ${PS} beats ${CS}`,
        response: "win",
      };
    } else if (playerLose) {
      compPlus();
      results.textContent = `You Lose! ${CS} beats ${PS}`;
      return {
        message: `You Lose! ${CS} beats ${PS}`,
        response: "lose",
      };
    } else {
      return {
        message: "Please type rock, paper or scissors",
        response: "error",
      };
    }
  }
}
let btns = document.querySelectorAll(".btn");
for (let i = 0; i < btns.length; i++) {
  //picks the current one
  btns[i].addEventListener("click", function (e) {
    if (!playing) {
      return;
    }
    const computerSelection = computerPlay(g);
    console.log(e.target);
    let playerSelection = e.target.getAttribute("id");

    console.log(playerSelection);

    let v = playRound(playerSelection, computerSelection);
    console.log(v);

    if (scores[0] === 5) {
      playing = false;
      winner.classList.remove("hidden");
      winner.textContent = "You Win!!!";
    } else if (scores[1] == 5) {
      playing = false;
      winner.classList.remove("hidden");
      winner.textContent = "You Lose!!!";
    }
  });
}

// function game() {
//   const n = 5;
//   let i = 0;
//   let gameResult = [];
//   while (i < n) {
//     const computerSelection = computerPlay(g);
//     let result = playRound(playerSelection, computerSelection);
//     console.log(result.message);
//     if (result.response == "error" || result.response == "tie") {
//       continue;
//     } else {
//       i++;
//       gameResult.push(result.response);
//     }
//   }

//   const wins = gameResult.filter((f) => f == "win").length;
//   const lose = gameResult.filter((f) => f == "lose").length;
//   if (wins > lose) {
//     console.log(`You win! Score: Win: ${wins}  Lose: ${lose}`);
//   } else if (lose > wins) {
//     console.log(`You lose! Score: Win: ${wins}  Lose: ${lose}`);
//   } else {
//     console.log(`You tied! Score: Win: ${wins}  Lose: ${lose}`);
//   }
// }
// game();

btnNew.addEventListener("click", init);

//playing is false
// numbers don't increase
