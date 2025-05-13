const BACKGROUNDS = ["ice1.jpeg", "ice2.jpeg", "ice3.jpeg"];

export default function landingPage() {
  const choice = BACKGROUNDS[Math.floor(Math.random() * BACKGROUNDS.length)];
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="/css/landing.css" />
    <title>MyProjects</title>
  </head>
  
  <body
  style="
      margin:0;
      background: url('/images/${choice}') center/cover no-repeat;
    ">
    <img src="/images/penguin.png" class="penguin" alt="Penguin" />

    <main>
      <div class="container">
        Hello, this is Assignment 5! 😊
      </div>
    </main>
  </body>
</html>`;
}
