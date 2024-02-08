function getRandomInt() {
    return Math.floor(Math.random() * 3);
}

function getComputerChoice() {
    // will randomly return rock paper or scissors
    const compChoiceList = ["rock", "paper", "scissors"];

    let compChoice = compChoiceList[getRandomInt()];
    return compChoice;
}

function playRound(playerSelection, computerSelection) {
    // play 1 round
    if (
        playerSelection !== "rock" &&
        playerSelection !== "paper" &&
        playerSelection !== "scissors"
    ) {
        return [null, "Invalid choice. Please select either rock, paper, or scissors."];
    }

    if (playerSelection === computerSelection) {
        return [null, `Draw! Player chose: ${playerSelection} Computer chose: ${computerSelection}`];
    }

    if (
        (playerSelection === "rock" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "rock")
    ) {
        return [false, `Computer wins! Player chose: ${playerSelection} Computer chose: ${computerSelection}`];
    } else {
        return [true, `Player wins! Player chose: ${playerSelection} Computer chose: ${computerSelection}`];
    }
}

let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice, computerChoice) {

    let roundResults = playRound(playerChoice, computerChoice);

    if (roundResults[0] === true) {
        console.log(roundResults);
        playerScore ++;
    } else {
        console.log(roundResults);
        computerScore ++;
    }

    return (`Player score: ${playerScore}, Computer score: ${computerScore}`)
}


const playerSelection = "rock";
const computerSelection = getComputerChoice()

console.log(playGame(playerSelection, computerSelection));
