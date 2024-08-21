let numberToBeGuessed = Math.floor(Math.random() * 100);
let userGuess = document.getElementById("userGuess");
let result = document.getElementById("result");

function checkGuess() {
    let guess = parseInt(userGuess.value);
    let difference = Math.abs(guess - numberToBeGuessed);

    if (guess === numberToBeGuessed) {
        result.innerHTML = "Yippee! You guessed it right! 🎉";
        result.style.color = "#27ae60";
    } else if (difference <= 10) {
        result.innerHTML = "You're close! Try again.";
        result.style.color = "#f39c12";
    } else if (guess > numberToBeGuessed) {
        result.innerHTML = "Too high! Try again.";
        result.style.color = "#e74c3c";
    } else {
        result.innerHTML = "Too low! Try again.";
        result.style.color = "#e74c3c";
    }
}

function resetGame() {
    numberToBeGuessed = Math.floor(Math.random() * 100);
    userGuess.value = "";
    result.innerHTML = "";
}
