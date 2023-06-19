// make a function that randomly returns Rock, paper, or scissors
// const computerPick = ['Rock', 'Paper', 'Scissors'];
function getComputerChoice(arr) {
    let computerPick = ['Rock', 'Paper', 'Scissors'];
    // get random index value
    const randomPick = Math.floor(Math.random() * arr.length);

    // get random computer pick from game
    const pick = arr[randomPick];

    // return computer pick
    return pick;
}

const computerResult = getComputerChoice(computerPick);
// console.log(result);


function playRound(playerSelection, computerSelection) {
    // write if statement for the logic of the game
    if (playerSelection === 'rock' && computerSelection === 'paper') {
        return 'You Lose!, Paper beats Rock';
    }
  }
   
  const playerSelection = "rock";
  const computerSelection = computerResult;
  console.log(playRound(playerSelection, computerSelection));