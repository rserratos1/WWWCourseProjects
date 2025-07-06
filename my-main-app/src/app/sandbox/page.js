"use client";

import useRPS from "../../lib/useTemp";
import "./temp.css";

export default function SandboxPage() {
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
              Round:
              <span id="rounds-total">0</span>
            </p>
          </div>
        </div>

        <div className="game-section-headers">
          <h2>Player</h2>
          <h2>Computer</h2>
        </div>

        <div className="results">
          <div className="userResult">
            🌻
            <span id="userEmoji" />
          </div>
          <div className="computerResult">
            🌻
            <span id="computerEmoji" />
          </div>
        </div>

        <div className="outcomeContainer">
          <div>
            <span id="outcome">Win or Loose?</span>
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
          <p className="playerScore">#</p>
          <p>Score</p>
          <p className="CompScore">#</p>
        </div>
      </section>
    </div>
  );
}
