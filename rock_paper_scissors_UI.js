let playerScore = 0;
let computerScore = 0;

let yourScoreHeading = document.querySelector("#yourScore");
let compScoreHeading = document.querySelector("#compScore");
const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");

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
    } else if (playerSelection == "Scissors" && computerSelection == "Paper") {
        playerScore ++;
    } else if (playerSelection == "Paper" && computerSelection == "Rock") {
        playerScore ++;
    } else if (playerSelection == computerSelection) {
        console.log("tie");
    } else {
        computerScore ++;
    }
}

rockButton.addEventListener('click', () => {
    playerSelection = "Rock";
    playRound(playerSelection, computerPlay());
    yourScoreHeading.textContent = `Your score: ${playerScore}`;
    compScoreHeading.textContent = `Computer score: ${computerScore}`;

});

paperButton.addEventListener('click', () => {
    playerSelection = "Paper";
    playRound(playerSelection, computerPlay());
    yourScoreHeading.textContent = `Your score: ${playerScore}`;
    compScoreHeading.textContent = `Computer score: ${computerScore}`;
    
});

scissorsButton.addEventListener('click', () => {
    console.log("test")
    playerSelection = "Scissors";
    playRound(playerSelection, computerPlay());
    yourScoreHeading.textContent = `Your score: ${playerScore}`;
    compScoreHeading.textContent = `Computer score: ${computerScore}`;
    
});


if (playerScore == 5) {
    playerScore = 0;
    computerScore = 0;
    return "You win!"
    //Add code to remove the scores and just say you win
} else {
    playerScore = 0;
    computerScore = 0;
    return "You Lose!"
}
