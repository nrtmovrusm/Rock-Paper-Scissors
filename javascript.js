// Step 1: Get the computer's choice
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

// Step 2: Get the human's choice
function getHumanChoice() {
    let userChoice = prompt("Enter your choice (rock, paper, or scissors):").toLowerCase();
    
    // Ensure the input is valid
    while (!["rock", "paper", "scissors"].includes(userChoice)) {
        alert("Invalid choice. Please enter rock, paper, or scissors.");
        userChoice = prompt("Enter your choice (rock, paper, or scissors):").toLowerCase();
    }
    
    return userChoice;
}

// Step 3: Declare score variables
let humanScore = 0;
let computerScore = 0;

// Step 4: Play a single round
function playRound(humanChoice, computerChoice) {
    // Log the choices made by human and computer
    console.log(`Human chose: ${humanChoice}`);
    console.log(`Computer chose: ${computerChoice}`);

    // Determine the winner of the round
    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        humanScore++;
    } else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
    }

    // Log current scores
    console.log(`Current score - You: ${humanScore} | Computer: ${computerScore}`);
}

// Step 5: Play the entire game (5 rounds)
function playGame() {
    // Play 5 rounds
    for (let round = 1; round <= 5; round++) {
        console.log(`Round ${round}:`);

        // Get the human and computer choices for each round
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();

        // Play the round
        playRound(humanChoice, computerChoice);
    }

    // Final score and announcement
    if (humanScore > computerScore) {
        console.log(`You win the game! Final score: You - ${humanScore}, Computer - ${computerScore}`);
    } else if (humanScore < computerScore) {
        console.log(`You lose the game! Final score: You - ${humanScore}, Computer - ${computerScore}`);
    } else {
        console.log(`It's a tie game! Final score: You - ${humanScore}, Computer - ${computerScore}`);
    }
}

// Call the function to play the game
playGame();
