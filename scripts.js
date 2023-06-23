// this is the one where i actually have the solution to the game and some of it is code i didnt come
// up with BUT i can confidently say i know whats going on in the logic and algorithm built to make the game work
// the good thing ive taken out of this lesson is even though i really couldnt figure it out completely
// i learned alot about javascript, algorithms and data structures how they work so im pumped im starting 
// to really understand this stuff 

let playerScore = 0;
let computerScore = 0;

function computerPlay() {
    const computerPick = ['rock', 'paper', 'scissors'];
    // get random index value
    const randomPick = Math.floor(Math.random() * computerPick.length);

    // get random computer pick from game
    return computerPick[randomPick];
}

function playRound(playerSelection) {
    let playGame = prompt('Whats your pick? Rock? Paper? Scissors?');
    let computerSelection = computerPlay();
    let results = ""

    if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
        (playerSelection == 'scissors' && computerSelection == 'paper') ||
        (playerSelection == 'paper' && computerSelection == 'rock')) {
          
        playerScore += 1
        results = (`You win! ${playerSelection} beats ${computerSelection} 
        \n\nPlayer Score: ${playerScore} \nComputer Score: ${computerScore}`)
        console.log(results)

        if(playerScore == 5) {
            results += '\n\nYou won the game! press the reset button to reset game'
            console.log(results)
        }
    }
    else if (playerSelection == computerSelection) {
    results = (`It's a tie. You both chose ${playerSelection} 
    \n\nPlayer Score: ${playerScore} \nComputer Score: ${computerScore}`)
    } else {
        computerScore +=1
        results = (`You lose! ${computerSelection} beats ${playerSelection} 
        \n\nPlayer Score: ${playerScore} \nComputer Score: ${computerScore}`)
        console.log(results)

        if (computerScore == 5) {
            results += `\n\nYou won the game! press the reset button to reset game`
            console.log(results)
        }
    }
    return playGame;
}

let startGame

console.log(playRound(playerSelection))