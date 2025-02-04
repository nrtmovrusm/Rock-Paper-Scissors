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

const para = document.createElement("p");
document.body.appendChild(para);

const gameResults = document.createElement("div");
document.body.appendChild(gameResults);

const score = document.createElement("div");
document.body.appendChild(score);
const space = document.createElement("p");

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        let humanChoice = button.id;
        let computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    });
})

function playRound(humanChoice, computerChoice) {
    const roundResults = document.createElement("div");

    if ((humanChoice === "rock" && computerChoice === "scissors") || (humanChoice === "paper" && computerChoice === "rock") || (humanChoice === "scissors" && computerChoice === "paper")) {
        humanScore++;
        roundResults.textContent = `You win! ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1,)} beats ${computerChoice}.`;
    } else if ((humanChoice === "rock" && computerChoice === "paper") || (humanChoice === "paper" && computerChoice === "scissors") || (humanChoice === "scissors" && computerChoice === "rock")) {
        computerScore++;
        roundResults.textContent = `You lose! ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1,)} beats ${humanChoice}.`;
    } else if (humanChoice === computerChoice) {
        roundResults.textContent = `Tie!`;
    }

    score.textContent = `SCORE: Human: ${humanScore}, Computer: ${computerScore}`;

    gameResults.appendChild(roundResults);
    gameResults.appendChild(space);
    gameResults.appendChild(score);

    if (humanScore >= 5 || computerScore >= 5) {
        endGame();
    }
}

function endGame() {
    const paragraphBreak = document.createElement("p");
    const endResults = document.createElement("div");

    if (humanScore > computerScore) {
        endResults.textContent = `Congratulations! You have won!`;
    } else if (computerScore > humanScore) {
        endResults.textContent = `Uh oh! You have lost!`;
    } else if (computerScore == humanScore) {
        endResults.textContent = `Tie game!`;
    }

    gameResults.appendChild(paragraphBreak);
    gameResults.appendChild(endResults);

    buttons.forEach((button) => {
        button.disabled = true;
    })
}