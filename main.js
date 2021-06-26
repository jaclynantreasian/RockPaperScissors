

    const g = ["rock", "paper", "scissors"];
    function computerPlay(arr){
        const randomItem = Math.floor(Math.random() * g.length);
        const item = arr[randomItem];
        return item;  
    }
   
    function playRound(PS, CS){
        const playerWin = (PS == "rock" && CS == "scissors") || (PS == "paper" && CS == "rock") || (PS == "scissors" && CS == "paper")
        const playerLose = (CS == "scissors" && PS == "paper") || (CS == "paper" && PS == "rock") || (CS == "rock" && PS == "scissors");
        if(PS == CS){
            return {
                message: "you tied! Try again!",
                response: "tie"
            };           
        }   

         else  if (playerWin){
            return {
                message: `You Win! ${PS} beats ${CS}`,
                response: "win"
            };
        }

        else if (playerLose){
            return {
                message:`You Lose! ${CS} beats ${PS}`,
                response:  "lose"
            };
        }    

        else {
             return {
                 message: "Please type rock, paper or scissors",
                 response: "error"
             };
        }
    }
    
    function game(){
        const n = 5;
        let i = 0;
        let gameResult = [];
        while (i < n){
            const computerSelection = computerPlay(g);
            let playerSelection = prompt("Rock, Paper or Scissors?");
            const playS = playerSelection.toLowerCase();
            let result = playRound(playS, computerSelection);
            console.log(result.message);
            if (result.response == "error" || result.response == "tie"){
                continue
            }
            else {
                i++;
                gameResult.push(result.response);
            }
        }
        
        const wins = gameResult.filter((f)=> f == "win").length;
        const lose = gameResult.filter((f)=> f == "lose").length;
        if(wins > lose){
            console.log(`You win! Score: Win: ${wins}  Lose: ${lose}`)
        }
        
        else if (lose > wins){
            console.log(`You lose! Score: Win: ${wins}  Lose: ${lose}`)
        }

        else {
            console.log(`You tied! Score: Win: ${wins}  Lose: ${lose}`)
        }
    }
    game();
