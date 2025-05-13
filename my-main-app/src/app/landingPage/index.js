export default function landingPage() {
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link href="/styles.css" rel="stylesheet" />
    <title>Landing</title>
  </head>
  
  <body>
    <main class="flex justify-center items-center h-screen">
      <div 
        style="background-color: #f0f0f0" 
        class="flex flex-col items-center justify-center w-full md:w-140 xl:w-200 bg-indigo-300 inset-shadow inset-shadow-indigo-950"
      >
        Hello, this is Assignment 5! 😊
      </div>
    </main>
  </body>
</html>`;
}
