// src/app/components/Header.js
export default function Header() {
  return (
    <header>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <a href="/" className="text-blue-500 hover:none">
              Home
            </a>
          </li>
          <li>
            <a href="/rockPaperScissors" className="text-blue-500 hover:none">
              Rock Paper Scissors
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
