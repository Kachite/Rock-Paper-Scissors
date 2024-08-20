// console.log("Hello World!");
function getComputerChoice() {
  let options = ["rock", "paper", "scissors"];
  let computerChoice = options[Math.floor(Math.random() * options.length)];
  return computerChoice;
}

function getHumanChoice() {
  let humanChoice = prompt("Rock, Paper, Scissors").toLowerCase();
  humanChoice = humanChoice.toLowerCase();
  return humanChoice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log("It's a draw!");
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "rock")
  ) {
    console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
    humanScore++;
  } else {
    console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
    computerScore++;
  }

  console.log(`Human Score: ${humanScore} | Computer Score: ${computerScore}.`);
}

console.log(computerSelction);
console.log(humanSelection);
const computerSelction = getComputerChoice();
const humanSelection = getHumanChoice();

playRound(humanSelection, computerSelction);
