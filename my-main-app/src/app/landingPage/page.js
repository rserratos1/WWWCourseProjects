// src/app/landingPage/page.js
import React from "react";
import "./landingPage.css";

export default function LandingPage() {
  return (
    <div className="landingPage">
      <section className="landingPage-header">
        <h1>Raquel O. Serratos</h1>
      </section>

      <section className="about-section">
        <h2>About Me</h2>
        <p>
          As a beginner software developer with a background in educational
          technology. I’ve spent the past few years learning how to configure
          and support software systems for colleges, helping faculty and staff
          solve real-world problems through thoughtful tech solutions.
          <br />
          <br />
          I’m currently exploring the intersection of technology and creativity.
          Whether it’s building tools, designing user-friendly systems, or
          experimenting with new ideas, I’m excited to keep learning and growing
          in this field. I’m open to roles that blend logic and imagination. I’m
          always curious about what’s next.
        </p>
      </section>

      <section className="resume-section">
        <h2>Resume</h2>
        <p>
          <a
            href="https://drive.google.com/open?id=1jE0qOClBzD2ukse53RkKoletbR9AsBqP&usp=drive_fs"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Resume
          </a>
        </p>
      </section>

      <section className="games-section">
        <h2>Personal Project</h2>
        <div className="game-list">
          <div className="RPS">
            <h3>Rock Paper Scissors</h3>
            <p>
              A simple game of Rock Paper Scissors built with React and Next.js.
            </p>
            <a href="/rockPaperScissors_2">
              <button className="PlayNow" id="playNowButton">
                Play Now
              </button>
            </a>
          </div>

          <div className="todo-list">
            <h3>Todo List</h3>
            <p>A basic Todo List application to manage your tasks.</p>
            <p>Coming Soon</p>
          </div>
        </div>
      </section>
    </div>
  );
}
