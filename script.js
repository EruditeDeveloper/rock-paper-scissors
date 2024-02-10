// who is jek soull? heard of this before ?
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
		return [
			null,
			"Invalid choice. Please select either rock, paper, or scissors.",
		];
	}

	if (playerSelection === computerSelection) {
		return [
			null,
			`Draw! Player chose: ${playerSelection} Computer chose: ${computerSelection}`,
		];
	}

	if (
		(playerSelection === "rock" && computerSelection === "paper") ||
		(playerSelection === "paper" && computerSelection === "scissors") ||
		(playerSelection === "scissors" && computerSelection === "rock")
	) {
		return [
			false,
			`Computer wins! Player chose: ${playerSelection} Computer chose: ${computerSelection}`,
		];
	} else {
		return [
			true,
			`Player wins! Player chose: ${playerSelection} Computer chose: ${computerSelection}`,
		];
	}
}

function playGame(playerChoice, computerChoice) {
	let playerScore = 0;
	let computerScore = 0;

	for (let i = 0; i < 5; i++) {
		playerChoice = prompt("enter either rock paper or scissors");
		computerChoice = getComputerChoice();
		
		let roundResults = playRound(playerChoice, computerChoice);
		console.log(roundResults);
		if (roundResults[0] === true) {
			playerScore++;
		} else {
			computerScore++;
		}

		
	}

	return `Player score: ${playerScore}, Computer score: ${computerScore}`;
}

let playerSelection = "";
let computerSelection = getComputerChoice();

console.log(playGame());
