
// math.random? .toLowercase


// write a function compuerPlay(); that will randomly return 'Rock' 'Paper' or 'Scissors'.  Log in console  
function computerPlay(arr){
  for(let i = 0; i < 2; i++){
    randomItem = Math.floor(Math.random() * game.length);
    const item = arr[randomItem]
    return item;
   }
}

const game = ["Rock", "Paper", "Scissors"];
const result = computerPlay(game);
console.log(result);


