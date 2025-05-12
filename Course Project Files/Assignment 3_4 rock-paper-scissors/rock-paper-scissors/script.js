// Raquel Serratos
// CSC 455
// Assignment 3 & 4

let userScore = 0;
let computerScore = 0;
let rounds = 0;

const userChoice_p = document.getElementById("user");
const computerChoice_p = document.getElementById("computer");
const outcome_p = document.getElementById("outcome");
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const roundstotal_span = document.getElementById("rounds-total");
const scoreBoard_div = document.querySelector(".scoreboard");
const result_div = document.querySelector(".result");
const rock_button = document.getElementById("rock");
const paper_button = document.getElementById("paper");
const scissors_button = document.getElementById("scissors");
const startOver = document.getElementById("clearButton");

let darkMode = localStorage.getItem("darkMode");
const toggleButton = document.getElementById("toggle");
const enableDarkmode = () => {
  document.body.classList.add("darkMode");
  localStorage.setItem("darkMode", "active");
};
const disableDarkmode = () => {
  document.body.classList.remove("darkMode");
  localStorage.setItem("darkMode", null);
};

const choices = ["r", "p", "s"];
const emojis = ["🪨", "💸", "✂️"];

function game(userChoice) {
  const computerChoice = choices[Math.floor(Math.random() * 3)];
  rounds++;
  roundstotal_span.innerHTML = rounds;
  userChoice_p.innerHTML = emojis[choices.indexOf(userChoice)];
  computerChoice_p.innerHTML = emojis[choices.indexOf(computerChoice)];

  switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
      win();
      break;
    case "rp":
    case "ps":
    case "sr":
      lost();
      break;
    case "rr":
    case "pp":
    case "ss":
      draw();
      break;
    default:
      break;
  }
}

function win() {
  userScore++;
  userScore_span.innerHTML = userScore;
  output;
  outcome_p.innerHTML = "You Win!";
}

function lost() {
  computerScore++;
  computerScore_span.innerHTML = computerScore;
  outcome_p.innerHTML = "You Loose!";
}

function draw() {
  outcome_p.innerHTML = "It's a Tie";
}

function output() {
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  roundstotal_span.innerHTML = rounds;
  outcome_p.innerHTML = "-";
  userChoice_p.innerHTML = "";
  computerChoice_p.innerHTML = "";
}

function restartGame() {
  userScore = 0;
  computerScore = 0;
  rounds = 0;
  output();
}

function main() {
  if (darkMode === "active") enableDarkmode();

  toggleButton.addEventListener("click", () => {
    darkMode = localStorage.getItem("darkMode");
    darkMode !== "active" ? enableDarkmode() : disableDarkmode();
  });

  rock_button.addEventListener("click", function () {
    game("r");
  });
  paper_button.addEventListener("click", function () {
    game("p");
  });
  scissors_button.addEventListener("click", function () {
    game("s");
  });
  startOver.addEventListener("click", function () {
    restartGame();
  });
}

main();
