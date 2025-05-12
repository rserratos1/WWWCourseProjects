// Get references to the body and message div
const body = document.body;
const messageDiv = document.getElementById("message");
const buttons = document.querySelectorAll("button"); // Get all buttons
const emojis = ["😸", "😿", "😾", "🙀"];
const emotions = ["Happy", "Sad", "Angry", "Surprised"];

// Function to set mood
function setMood(moodName, moodClass, callback) {
  clearMoods();

  body.classList.add(moodClass);

  callback(moodName);
}

function showMessage(string) {
  messageDiv.textContent = `${string}`;
}

function clearMoods() {
  body.classList.remove("happy", "sad", "angry", "surprised");
}

function setButton(index, callback) {
  clearButton();
  buttons[index].textContent = `${emojis[index]}`;
  buttons[index].style.fontSize = "6rem";
}

function clearButton() {
  for (let i = 0; i < 4; i++) {
    buttons[i].textContent = `${emotions[i]}`;
    buttons[i].style.fontSize = "2.5rem";
  }
}

document
  .getElementById("happy")
  .addEventListener("click", () =>
    setMood(
      "happy",
      "happy",
      showMessage("Today is a good day for a good mood 🌞"),
      setButton(0)
    )
  );
document
  .getElementById("sad")
  .addEventListener("click", () =>
    setMood(
      "sad",
      "sad",
      showMessage("Even the clouds have their silver linings. 🌧️"),
      setButton(1)
    )
  );
document
  .getElementById("angry")
  .addEventListener("click", () =>
    setMood(
      "angry",
      "angry",
      showMessage("Take a moment. Let the steam escape. You got this! 🧘‍♀️"),
      setButton(2)
    )
  );
document
  .getElementById("surprised")
  .addEventListener("click", () =>
    setMood(
      "surprised",
      "surprised",
      showMessage("Whoa! Didn't see that coming! 😱"),
      setButton(3)
    )
  );
