// Get the computer's choice
function getComputerChoice() {
    let randomNumber = Math.random(); // Generates a random number between 0 and 1

    // Return a random choice based on the random number
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}

// Get the human's choice
function getHumanChoice() {
    let userChoice = prompt("Enter your choice (rock, paper, or scissors):").toLowerCase();
    
    // Ensure the input is valid
    while (!["rock", "paper", "scissors"].includes(userChoice)) {
        alert("Invalid choice. Please enter rock, paper, or scissors.");
        userChoice = prompt("Enter your choice (rock, paper, or scissors):").toLowerCase();
    }
    
    return userChoice;
}

// Declare score variables
let humanScore = 0;
let computerScore = 0;

// Play a single round
function playRound(humanChoice) {

    const computerChoice = getComputerChoice();

    const result = document.querySelector("#result");

    result.textContent = `You chose: ${humanChoice}. Computer chose: ${computerChoice}.`;

    // Determine the winner of the round
    if (humanChoice === computerChoice) {
        result.textContent += ` It's a tie!`;

    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        result.textContent += ` You win! ${humanChoice} beats ${computerChoice}`;
        humanScore++;

    } else {
        result.textContent += ` You lose! ${computerChoice} beats ${humanChoice}`;
        computerScore++;
    }

    // Log current scores
    const scoreboard = document.querySelector("#scoreboard");
    scoreboard.textContent = `Current score - You: ${humanScore} | Computer: ${computerScore}`;

    playGame();
}

// Add functionality to buttons
const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");

rockButton.addEventListener("click", function() {
    playRound("rock");
});

paperButton.addEventListener("click", function() {
    playRound("paper");
});

scissorsButton.addEventListener("click", function() {
    playRound("scissors");
});

// First player to 5 wins 
function playGame() {

    if ((humanScore == 5)) {
        alert("You win the game!");
    } else if (computerScore == 5) {
        alert("Computer wins the game!");
    }
}
