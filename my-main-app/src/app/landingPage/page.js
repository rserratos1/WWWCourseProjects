// src/app/landingPage/page.js
import React from "react";
import "./landingPage.css";

export default function LandingPage() {
  return (
    <main>
      <section className="landingPage-header">
        <h1>Raquel O. Serratos</h1>
      </section>

      <section className="about-section">
        <div className="container">
          <h2>About Me</h2>
          <p>
            As a beginner software developer with a background in educational
            technology. I’ve spent the past few years learning how to configure
            and support software systems for colleges, helping faculty and staff
            solve real-world problems through thoughtful tech solutions.
            <br />
            <br />
            I’m currently exploring the intersection of technology and
            creativity. Whether it’s building tools, designing user-friendly
            systems, or experimenting with new ideas, I’m excited to keep
            learning and growing in this field. I’m open to roles that blend
            logic and imagination. I’m always curious about what’s next.
          </p>
        </div>
      </section>

      <section className="games-section">
        <div className="RPS">
          <h2>Rock Paper Scissors</h2>
          <p>
            A simple game of Rock Paper Scissors built with React and Next.js.
          </p>
          <a href="/rockPaperScissors_2">Play Now</a>
        </div>

        <div className="todo-list">
          <h2>Todo List</h2>
          <p>A basic Todo List application to manage your tasks.</p>
          <a href="/">Coming Soon</a>
        </div>
      </section>

      <section className="resume-section">
        <h2>Resume</h2>
        <p>
          You can view my resume{" "}
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            here
          </a>
          .
        </p>
      </section>
    </main>
  );
}
