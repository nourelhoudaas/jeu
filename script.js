       
let playerScore = 0;
let computerScore = 0;

// Fonction pour obtenir le choix aléatoire de l'ordinateur
function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

// Fonction pour jouer un tour de pierre-papier-ciseaux
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase(); // Convertir en minuscules pour être insensible à la casse

    if (playerSelection === computerSelection) {
        return "It's a tie! " + playerSelection + " equals " + computerSelection;
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        playerScore++;
        return "You Win! " + playerSelection + " beats " + computerSelection;
    } else {
        computerScore++;
        return "You Lose! " + computerSelection + " beats " + playerSelection;
    }
}

// Fonction pour mettre à jour l'affichage du score
function updateScore() {
    document.getElementById('score').textContent = "Score: Player " + playerScore + " - Computer " + computerScore;
}

// Écouteurs d'événements pour les boutons de choix du joueur
document.getElementById('rock').addEventListener('click', () => {
    const computerChoice = getComputerChoice();
    const result = playRound("rock", computerChoice);
    document.getElementById('result').textContent = result;
    updateScore();
    checkWinner();
});

document.getElementById('paper').addEventListener('click', () => {
    const computerChoice = getComputerChoice();
    const result = playRound("paper", computerChoice);
    document.getElementById('result').textContent = result;
    updateScore();
    checkWinner();
});

document.getElementById('scissors').addEventListener('click', () => {
    const computerChoice = getComputerChoice();
    const result = playRound("scissors", computerChoice);
    document.getElementById('result').textContent = result;
    updateScore();
    checkWinner();
});

// Fonction pour vérifier le gagnant du jeu
function checkWinner() {
    if (playerScore === 5) {
        document.getElementById('result').textContent = "Player wins the game!";
        disableButtons();
    } else if (computerScore === 5) {
        document.getElementById('result').textContent = "Computer wins the game!";
        disableButtons();
    }
}

// Fonction pour désactiver les boutons une fois le jeu terminé
function disableButtons() {
    document.getElementById('rock').disabled = true;
    document.getElementById('paper').disabled = true;
    document.getElementById('scissors').disabled = true;
}