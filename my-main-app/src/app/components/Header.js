// src/app/components/Header.js
import "./header.css";

export default function Header() {
  return (
    <header>
      <nav className="header-nav">
        <h1 className="header-title">
          <a href="/">The Work of Raquel Serratos</a>
        </h1>
        <ul>
          {/* todo: hide the hoome when on the home page */}
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/rockPaperScissors_2">Rock Paper Scissors</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
