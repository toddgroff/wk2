//Setting global variables

var word;
    displayWord;
    finalDisplay;
    turnsRem = 8;
    userGuesses = [];
    displayGuesses = 0;
    theText = [];

document.querySelector('.guess-input').focus();
document.querySelector('.guess-input').select();

//Create an array for words that are long enough
function wordCheck(word) {
    return word.length > 2;
}

var longEnough = hangmanWords.filter(wordCheck);

//Randomly choose an index from the resulting array
    wordIndex = Math.floor(Math.random() * longEnough.length);


//Find word corresponding with randomly chosen index of longEnough
var word = longEnough[wordIndex];


//Make the random chosen word into an array
var displayWord = word.split('');


//Change the items of the array to dashes
var dashedWord = displayWord.map(function(char) {
    return '_';
});


//turn the array of dashes back to a string
var finalDisplay = dashedWord.join(' ');


//display the line of dashes for the user in source
document.querySelector('.game-word').textContent = finalDisplay;

//set user guess and lower the case
//check user guess against the letters of displayWord
function setGuess(guessInput) {
    userGuess = guessInput.toLowerCase();
}

function checkGuess() {
    var turnCount = true;
    for (var i = 0; i < dashedWord.length; ++i) {
        if (userGuess === word[i]) {
            dashedWord[i] = userGuess; //changes correct letter guess in word from dash to letter
            turnCount = false //marks the turn count decrementer off
        }
    }
    if (turnCount === true) {
        reduceTurnCount();
        userGuesses.push(userGuess);
        var displayGuesses = userGuesses.join(' ');
        document.querySelector('.letters').textContent = displayGuesses;
        // document.querySelector('.ice-(displayGuesses.length)').className = "show-border";
    }
    updateDisplay();
    document.querySelector('.guess-input').value = '';
    document.querySelector('.guess-input').focus();
    document.querySelector('.guess-input').select();
    // if no turns left, game over
    if (turnsRem < 1) {
        document.querySelector('.game-word').textContent = word;
        document.querySelector('.thin-ice').textContent = "Brrrrr!";
        document.querySelector('.thin-ice-message').textContent = "Looks like you took the polar plunge.";
        document.querySelector('.guess-btn').textContent = "Go again";
        document.querySelector('.ice-2').className += "ice-break";
        // document.querySelector('.game-word').className += "word-fall";
        var button = document.querySelector('.guess-btn');
        button.addEventListener("click", function() {
            resetGame();
        });
    }
    if (dashedWord.indexOf("_") === -1) {
        document.querySelector('.thin-ice').textContent = "Phew!";
        document.querySelector('.thin-ice-message').textContent = "You're staying warm and dry this time.";
        document.querySelector('.guess-btn').textContent = "Go again";
        // adds event listener for click after round is won
        var button = document.querySelector('.guess-btn');
        button.addEventListener("click", function() {
            resetGame();
        });
        // document.querySelector('.guess-btn').href = "Users/toddgroff/src/wk2/hangman.html";
    }
}




//if user guess is not a match, reduce turn count by 1
function reduceTurnCount() {
    turnsRem = --turnsRem;
    document.querySelector('.turn-count').innerHTML = turnsRem;
}

//if user guess is a match, update display with the letter
function updateDisplay() {
    var theText = dashedWord.join(' ');

    var element = document.querySelector('.game-word');

    element.textContent = theText;
}

function resetGame() {
    window.top.location=window.top.location;
}
