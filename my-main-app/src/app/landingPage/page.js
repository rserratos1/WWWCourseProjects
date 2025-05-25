// src/app/landingPage/page.js
import React from "react";
import "./landingPage.css";

export default function LandingPage() {
  return (
    <main>
      <h1>WWW Course Assignments</h1>
      <section className="flex flex-row gap-4">
        <div className="flex-1 text-color-white">
          <h2>Rock Paper Scissors</h2>
          <p>
            A simple game of Rock Paper Scissors built with React and Next.js.
          </p>
          <a href="/rockPaperScissors">Play Now</a>
        </div>

        <div className="flex-1">
          <h2>Todo List</h2>
          <p>A basic Todo List application to manage your tasks.</p>
          <a href="/">Coming Soon</a>
        </div>
      </section>
    </main>
  );
}
