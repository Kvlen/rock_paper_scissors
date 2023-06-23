const rock = 'rock';
const paper = 'paper';
const scissors = 'scissors';
let playerScore = 0;
let computerScore = 0;
let drawScore = 0;

// make a function that randomly returns Rock, paper, or scissors
// const computerPick = ['rock', 'paper', 'scissors'];
function computerPlay() {
    const computerPick = ['rock', 'paper', 'scissors'];
    // get random index value
    const randomPick = Math.floor(Math.random() * computerPick.length);

    // get random computer pick from game
    return computerPick[randomPick];
}

// console.log(computerSelection())



// create a function that ruturns the players input 
function playerPlay() {
    let playerPick = prompt('what\'s your pick? Rock? Paper? Scissors?', '')
    if (playerPick.toLowerCase() === 'rock') {
        playerPick = 'rock';
    } else if (playerPick.toLowerCase() === 'paper') {
        playerPick = 'paper';
    } else if (playerPick.toLowerCase() === 'scissors') {
        playerPick = 'scissors';
    } else {
        alert('put in a valid response');
    }
    return playerPick;
}

// console.log(playerPlay())


// console.log(playerSelection)
// console.log(computerSelection)

// let playerSelection = playerPlay();
// let computerSelection = computerPlay();
let playerWinRound = "Great job, you win this round!";
let compWinRound = "Aww Man, computer won this round";
let draw = 'Draw!';
let playerWinGame = "Congrats you won the game!";
let compWinGame = "Dang it you got it next time, computer won the game";



function playRound(playerSelection, computerSelection) {
    // write if statement for the logic of the players choice 
    if (playerSelection === 'rock' && computerSelection === 'paper') {
        return compWinRound;
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return playerWinRound;
    } else if (playerSelection === 'rock' && computerSelection === 'rock') {
        return draw;
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        return compWinRound;
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return playerWinRound;
    } else if (playerSelection === 'paper' && computerSelection === 'paper') {
        return draw;
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return playerWinRound;
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return compWinRound;
    } else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
        return draw;
    } else {
        return 'put in a valid response';
    }
}

// console.log(playRound(playerSelection, computerSelection))

   

// const computerSelection = computerResult;
// console.log(playRound(playerSelection, computerSelection));

// function game() {
//     //Play game 5 times
//     for (let i = 0; i < 5; i++) {
//       // Call playRound function, passing in newly returned values
//       // from the playerPlay and computerPlay functions

//         console.log(playRound(playerPlay(), computerPlay()));
//         console.log("Your score is: " + playerScore);
//         console.log("The computer's score is: " + computerScore);
//         let roundResults = playRound(playerPlay(), computerPlay())
//         gameScore(roundResults)
//     }
// }
// let playGame = game();

// console.log(game())

// my attempt to figure out an algorithm for the game but sent 3 days figuring it out just couldnt get down a logic for it

// function gameScore(r, w) {
//     if (results === playerWinRound) {
//         playerScore++;
//     } else if (results === compWinRound) {
//         computerScore++;
//     } else {
//         drawScore;
//     }
// }

// function winner() {
//     if (playerScore === 5) {
//         console.log(playerWinGame);
//         return playerWinGame;
//     } else if (computerScore === 5) {
//         console.log(compWinGame);
//         return compWinGame;
//     } else {
//         return drawScore;
//     }
// }
// let getWinner = winner();

// function game() {
//     //Play game 5 times
//     for (let i = 0; i < 5; i++) {
//       // Call playRound function, passing in newly returned values
//       // from the playerPlay and computerPlay functions

//         console.log(playRound(playerPlay(), computerPlay()));
//         console.log("Your score is: " + playerScore);
//         console.log("The computer's score is: " + computerScore);
//         let roundResults = playRound(playerPlay(), computerPlay())
//         gameScore(roundResults)
//     }
// }
// let playGame = game();

// console.log(gameScore(playGame, getWinner))

