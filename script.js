function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    let choix;

    if (randomNumber === 0) {
        choix = "rock";
    } else if (randomNumber === 1) {
        choix = "paper";
    } else {
        choix = "scissors";
    }

    return choix;
}

function playRound(playerSelection) {
    const computerSelection = getComputerChoice();
    playerSelection = playerSelection.toLowerCase();


    // Vérifier si l'entrée de l'utilisateur est valide
    if (playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissors") {
        return "It's an invalid selection. Please choose Rock, Paper, or Scissors.";
    }

    if (computerSelection === "rock" && playerSelection === "scissors") {
        return "You Lose! Rock beats Scissors";
    } else if (computerSelection === "paper" && playerSelection === "scissors") {
        return "You Win! Scissors beats Paper";
    } else if (computerSelection === "rock" && playerSelection === "paper") {
        return "You Win! Paper beats Rock";
    } else if (computerSelection === playerSelection) {
        return "It's a tie!";
    } else {
        return "It's an invalid selection. Please choose Rock, Paper, or Scissors.";
    }
}
function game() {
    let playerScore = 0;
    let computerScore = 0;
  
    for (let i = 0; i < 5; i++) {
      const playerSelection = prompt("Rock, paper, or scissors?");
      const computerSelection = getComputerChoice();
      console.log(playRound(playerSelection, computerSelection));
      if (playRound(playerSelection, computerSelection) === "You Win!") {
        playerScore++;
      } else if (playRound(playerSelection, computerSelection) === "You Lose!") {
        computerScore++;
      }
    }
  
    if (playerScore > computerScore) {
      console.log("You win the game!");
    } else if (playerScore < computerScore) {
      console.log("You lose the game!");
    } else {
      console.log("The game is a tie!");
    }
  }
  
  game();

/*const playerSelection = prompt("Choisissez : Rock, Paper ou Scissors").trim();

const result = playRound(playerSelection);
console.log("Le résultat : " + result);

// L'appel à getComputerChoice pour obtenir le choix de l'ordinateur
const computerSelection = getComputerChoice();
console.log("Choix de l'ordinateur : " + computerSelection);
*/