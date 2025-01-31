let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let random = Math.floor(Math.random()*100)
    if (random >= 0 && random < 33) {
        return "rock";
    } else if (random >= 33 && random < 67) {
        return "paper"; 
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    let humanChoice = (prompt("Rock, paper, or scissors?")).toLowerCase();
    if (humanChoice === "rock") {
        return "rock";
    } else if (humanChoice === "paper") {
        return "paper";
    } else if (humanChoice === "scissors") {
        return "scissors";
    } else {
        humanChoice = getHumanChoice();
        return humanChoice;
    }
}

function playRound(humanChoice, computerChoice) {
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();
    if ((humanChoice === "rock" && computerChoice === "scissors") || (humanChoice === "paper" && computerChoice === "rock") || (humanChoice === "scissors" && computerChoice === "paper")) {
        humanScore++;
        console.log(`You win! ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1,)} beats ${computerChoice}.`);
        return `You win! ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1,)} beats ${computerChoice}.`;
    } else if ((humanChoice === "rock" && computerChoice === "paper") || (humanChoice === "paper" && computerChoice === "scissors") || (humanChoice === "scissors" && computerChoice === "rock")) {
        computerScore++;
        console.log(`You lose! ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1,)} beats ${humanChoice}.`);
        return `You lose! ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1,)} beats ${humanChoice}.`;
    } else if (humanChoice === computerChoice) {
        console.log(`Tie!`);
        return `Tie!`;
    }
}

function playGame() {
    for (let i = 1; i <= 5; i++) {
        playRound();
    }

    if (humanScore > computerScore) {
        return `Congratulations! You have won! Human score: ${humanScore}. Computer score ${computerScore}.`;
    } else if (computerScore > humanScore) {
        return `Uh oh! You have lost! Human score: ${humanScore}. Computer score ${computerScore}.`;
    } else if (computerScore = humanScore) {
        return `Tie game! Human score: ${humanScore}. Computer score ${computerScore}.`
    }
}
