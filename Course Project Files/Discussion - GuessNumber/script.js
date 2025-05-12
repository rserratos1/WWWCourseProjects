function startGame() {
    let secretNumber = Math.floor(Math.random() * 10) + 1;

    let maxAttempts = 3;

    for (let attempt = 1; attempt <= maxAttempts; attempt++){
        let userGuess = prompt("Attempt " + attempt + ": Guess");
        userGuess = Number(userGuess);

        if (userGuess === secretNumber) {
            alert("Congratulations! You guessed the correct number: " + secretNumber);
            return;
        }
        else if (userGuess > secretNumber) {
            alert("Too high! Try again.");
        }
        else if (userGuess < secretNumber) {
            alert("Too low! Try again.");
        }
    }
    alert("Game over! The correct number was " + secretNumber);
}