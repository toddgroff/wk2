// TODO: Write a number guessing game.
//
// Rules: The game will generate a number between 1 and 10,
// inclusive. So, it might generate a 1. Or it might generate
// a 10, or any whole number in between.
//
// The user should enter a number into the text box and then
// click "guess".
//
// You should then tell the user (via alert or another way)
// if her guess was too big, too small, or just right!
//
//
// Look at the HTML, and note that you'll need to
// write two functions:
//
// setGuess(guessValueAsString)
// guess()
//
// Feel free to rename the guessValueAsString parameter


var guessNum = 0,
    mysteryNum = Math.floor(Math.random() * 10) + 1,
    correctMessage = [
        "CORRECT- You must be psychic!",
        "THAT'S RIGHT- Are you cheating?!",
        "SPOT ON- what are the chances?!",
    ];
    randomMessage = Math.floor(Math.random() * correctMessage.length);
    guessCount = 0;

function setGuessNum(guessNumString) {
    guessNum = Number(guessNumString);
}

function guess() {
    guessCount = ++guessCount;
    if (guessNum === mysteryNum) {
        document.querySelector('.guess-result').textContent = correctMessage[randomMessage] + " It took you " + guessCount + " attempt(s)"
    }
    else if (guessNum < mysteryNum) {
        document.querySelector('.guess-result').textContent = "TOO SMALL- give it another go"
        document.querySelector('.guess-input').value = '';
    }
    else {
        document.querySelector('.guess-result').textContent = "TOO HIGH- try again"
        document.querySelector('.guess-input').value = '';
    }
}

function refreshPage() {
    window.top.location=window.top.location;
}

// function resetGuessCount() {
//     guessCount = 0;
// }

// function setGuessCount() {
//     guessCount = guess().detail;
// }
