let humanScore = 0;
let computerScore = 0;
const container = document.querySelector("#container");
const divHasil = document.querySelector("#hasil-akhir");
const divSkor = document.querySelector("#skor-sementara");

function getComputerChoice() {
    let x = Math.random();
    if (x < 0.33) {
        return "rock";
    } else if (x <= 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playRound(humanChoice, computerChoice) {
    if (humanScore === 5 || computerScore === 5) {
        return;
    }
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice === computerChoice) {
        divHasil.textContent = "It's a tie! Both chose " + humanChoice;
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        divHasil.textContent = "You win! " + humanChoice + " beats " + computerChoice;
        humanScore++;
    } else {
        divHasil.textContent = "You lose! " + computerChoice + " beats " + humanChoice;
        computerScore++;
    }
    divSkor.textContent = "Skor Pemain: " + humanScore + " Skor Komputer: " + computerScore;
    if (humanScore === 5) {
        divHasil.textContent = "Game Over! You Win!";
    }
    else if (computerScore === 5) {
        divHasil.textContent = "Game Over! Computer Win!";
    }
}


container.addEventListener("click", function (e) {
    if (e.target.id === "rock") {
        playRound("rock", getComputerChoice());
    } else if (e.target.id === "paper") {
        playRound("paper", getComputerChoice());
    } else if (e.target.id === "scissors") {
        playRound("scissors", getComputerChoice());
    }
});