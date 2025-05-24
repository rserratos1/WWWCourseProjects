"use client";

import useRPS from "../../lib/useRPS";
import "./rps.css";

// export const metadata = {
//   title: "Rock Paper Scissors",
// };

export default function RockPaperScissorsPage() {
  useRPS();
  return (
    <section>
      <header>
        <h1>Rock Paper Scissors</h1>
      </header>

      <div className="toggleContainer">
        <div>
          <button className="clear" id="clearButton">
            Play Again
          </button>
        </div>
        <div>
          <h2>light/dark</h2>
          <label className="switch">
            <input type="checkbox" id="toggle" />
            <span className="slider round" />
          </label>
        </div>
      </div>

      <div className="buttons">
        <button id="rock" className="button">
          Rock
        </button>
        <button id="paper" className="button">
          Paper
        </button>
        <button id="scissors" className="button">
          Scissors
        </button>
      </div>

      <div className="result">
        <div className="currentResults">
          <div className="userContainer">
            <h2 className="resultHeader">User</h2>
            <div className="userResult">
              <span id="user" />
            </div>
          </div>

          <p>VS</p>

          <div className="computerContainer">
            <h2 className="resultHeader">Computer</h2>
            <div className="computerResult">
              <span id="computer" />
            </div>
          </div>
        </div>

        <div className="outcomeContainer">
          <p className="outcome">
            <span id="outcome">-</span>
          </p>
          <p id="rounds">
            Round: <span id="rounds-total">0</span>
          </p>
        </div>
      </div>

      <div className="scoreboard">
        <p id="user-label">
          User Score: <span id="user-score">0</span>
        </p>
        <p id="computer-label">
          Computer Score: <span id="computer-score">0</span>
        </p>
      </div>
    </section>
  );
}
