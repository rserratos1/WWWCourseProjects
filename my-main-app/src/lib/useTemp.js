"use client";
import { useEffect } from "react";

export default function useTemp() {
  useEffect(() => {
    let userScore = 0;
    let computerScore = 0;
    let rounds = 0;
    let redHighlight = "0 0 0.5rem #f41d68";
    let greenHighlight = "0 0 0.5rem #1df473";

    // user and computer choices
    const userEmoji = document.getElementById("userEmoji");
    const computerEmoji = document.getElementById("computerEmoji");
    const userHighlight = document.querySelector(".userHighlight");
    const computerHighlight = document.querySelector(".compHighlight");

    //buttons
    const rockButton = document.getElementById("rock");
    const paperButton = document.getElementById("paper");
    const scissorsButton = document.getElementById("scissors");
    const startOver = document.getElementById("clearButton");

    const gameOutcome = document.getElementById("gameOutcome");

    //game stats
    const totalRounds = document.getElementById("totalRounds");
    const playerScore = document.getElementById("playerScore");
    const compScore = document.getElementById("CompScore");

    //game elements
    const choices = ["r", "p", "s"];
    const emojis = ["🪨", "💸", "✂️"];

    function game(userChoice) {
      // randomly select a computer choice
      const computerChoice = choices[Math.floor(Math.random() * 3)];

      // increment the rounds
      rounds++;
      totalRounds.innerHTML = rounds;

      // printout the emojis
      userEmoji.innerHTML = emojis[choices.indexOf(userChoice)];
      computerEmoji.innerHTML = emojis[choices.indexOf(computerChoice)];

      // obtain the game result
      gameResult(userChoice + computerChoice);
    }

    function gameResult(s) {
      if (s === "rs" || s === "pr" || s === "sp") {
        win();
      } else if (s === "rp" || s === "ps" || s === "sr") {
        lost();
      } else if (s === "rr" || s === "pp" || s === "ss") {
        draw();
      }
    }

    function win() {
      // increment the playerscore
      userScore++;
      playerScore.innerHTML = userScore;
      compScore.innerHTML = computerScore;

      // update the user highlight
      userHighlight.style.boxShadow = greenHighlight;
      computerHighlight.style.boxShadow = "none";

      // update the outcome readout
      gameOutcome.innerHTML = "You Win!";
    }

    function lost() {
      // increment the computerscore
      computerScore++;
      playerScore.innerHTML = userScore;
      compScore.innerHTML = computerScore;

      // update the computer highlight
      computerHighlight.style.boxShadow = greenHighlight;
      userHighlight.style.boxShadow = "none";

      // update the outccome readout
      gameOutcome.innerHTML = "You Lost!";
    }

    function draw() {
      computerHighlight.style.boxShadow = redHighlight;
      userHighlight.style.boxShadow = redHighlight;

      playerScore.innerHTML = userScore;
      compScore.innerHTML = computerScore;
      gameOutcome.innerHTML = "It's a Draw!";
    }

    function restartGame() {
      userScore = 0;
      computerScore = 0;
      rounds = 0;
      clearOutput();
    }

    function clearOutput() {
      playerScore.innerHTML = 0;
      compScore.innerHTML = 0;
      totalRounds.innerHTML = 0;
      gameOutcome.innerHTML = "Start a New Game!";
      userEmoji.innerHTML = "❔";
      computerEmoji.innerHTML = "❔";

      //highlight reset
      userHighlight.style.boxShadow = "none";
      computerHighlight.style.boxShadow = "none";
    }

    function main() {
      userHighlight.style.boxShadow = "none";
      computerHighlight.style.boxShadow = "none";

      rockButton.addEventListener("click", () => {
        game("r");
      });
      paperButton.addEventListener("click", () => {
        game("p");
      });
      scissorsButton.addEventListener("click", () => {
        game("s");
      });
      startOver.addEventListener("click", function () {
        restartGame();
      });
    }

    main();
  }, []);
}
