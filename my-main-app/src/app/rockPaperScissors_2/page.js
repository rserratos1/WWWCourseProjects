"use client";

import useRPS from "../../lib/useRPS2";
import "./styles.css";

export default function RPS2() {
  useRPS();
  return (
    <div className="gameContainer">
      <section className="gameHeader">
        <h1>Sandbox</h1>
      </section>

      <section className="game-section">
        <div className="game-section-top">
          <button className="startover" id="clearButton">
            Start Over
          </button>
          <div className="roundTotal">
            <p>
              Round:&nbsp;
              <span id="totalRounds">0</span>
            </p>
          </div>
        </div>

        <div className="game-section-headers">
          <h2>Player</h2>
          <h2>Computer</h2>
        </div>

        <div className="results">
          <div className="userResult">
            <div id="userHighlight" className="userHighlight">
              <span id="userEmoji">❔</span>
            </div>
          </div>
          <div className="computerResult">
            <div id="compHighlight" className="compHighlight">
              <span id="computerEmoji">❔</span>
            </div>
          </div>
        </div>

        <div className="gameOutcomeContainer">
          <div>
            <span id="gameOutcome">Win or Loose?</span>
          </div>
          <p className="playAgainDirections">
            Select Another Button to Try Again
          </p>
          <div className="gameButtons">
            <button id="rock" className="gameButton">
              Rock
            </button>
            <button id="paper" className="gameButton">
              Paper
            </button>
            <button id="scissors" className="gameButton">
              Scissors
            </button>
          </div>
        </div>
      </section>

      <section className="under-section">
        <div className="scoreboard">
          <span id="playerScore">0</span>
          <p>Score</p>
          <span id="CompScore">0</span>
        </div>
      </section>
    </div>
  );
}
