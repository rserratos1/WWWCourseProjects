// src/app/components/Header.js
import "./header.css";

export default function Header() {
  return (
    <header className="navigationBar">
      <nav className="header-nav">
        <h1 className="header-title">
          <a href="/">Work of Raquel Serratos</a>
        </h1>
        <button className="menuButton">
          <img className="menu-icon" src="\images\menu.png" alt="Menu Icon" />
        </button>
        <ul>
          <li>
            <a className="gameButton" href="/rockPaperScissors_2">
              Rock Paper Scissors
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
