// src/app/components/Header.js
import "./header.css";

export default function Header() {
  return (
    <header>
      <nav className="header-nav">
        <h1 className="header-title">
          <a href="/">The Work of Raquel Serratos</a>
        </h1>
        <div>
          <img className="menu-icon" src="\images\menu.png" alt="Menu Icon" />
        </div>
        <ul>
          <li>
            <a href="/rockPaperScissors_2">Rock Paper Scissors</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
