let playerScore = 0;
let computerScore = 0;

function randInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let options = ['Rock','Paper','Scissors'];

function computerPlay() {
    let choice = options[randInt(0,2)];
    return choice
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == "Rock" && computerSelection == "Scissors") {
        playerScore ++;
        console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
    } else if (playerSelection == "Scissors" && computerSelection == "Paper") {
        playerScore ++;
        console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
    } else if (playerSelection == "Paper" && computerSelection == "Rock") {
        playerScore ++;
        console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
    } else if (playerSelection == computerSelection) {
        console.log("You tied!");
    } else {
        computerScore ++;
        console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
    }
}

function game() {
    while (playerScore < 5 && computerScore < 5) {
        let playerSelection = window.prompt("Choose Rock, Paper, or Scissors", "Rock");
        playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
        playRound(playerSelection, computerPlay());
        console.log(`Your score: ${playerScore} \nComputer score: ${computerScore}`)
    }
    if (playerScore == 5) {
        playerScore = 0;
        computerScore = 0;
        return "You win!"
    } else {
        playerScore = 0;
        computerScore = 0;
        return "You Lose!"
    }

}