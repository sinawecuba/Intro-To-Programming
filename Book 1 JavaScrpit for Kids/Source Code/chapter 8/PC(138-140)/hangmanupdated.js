//#3: Hangman, using functions
console.log("-----#3: Hangman, using functions----");

var word = pickWord();                        // Choose a random word for the game
var answerArray = setupAnswerArray(word);     // Create an array with "_" for each letter in the word
var remainingLetters = word.length;           // Track how many letters are left to guess

while (remainingLetters > 0) {                // Loop until all letters are guessed
    showPlayerProgress(answerArray);          // Show the current state of the word to the player

    var guess = getGuess();                   // Ask the player to guess a letter

    if (guess === null) {                     // If the player clicks "Cancel", exit the loop
        break;
    } else if (guess.length !== 1) {          // If input is not a single letter
        alert("Please enter a single letter."); // Show warning
    } else {
        var correctGuesses = updateGameState(guess, word, answerArray); // Update game state with the guess
        remainingLetters -= correctGuesses;   // Subtract correct guesses from remainingLetters
    }
}

showAnswerAndCongratulatePlayer(answerArray); // Game finished — show final word and congratulate the player


// ---- Function Definitions Below ----

var pickWord = function () {
    // Return a random word
};

var setupAnswerArray = function (word) {
    // Return an array of "_" matching the number of letters in the word
};

var showPlayerProgress = function (answerArray) {
    // Use alert to show the player their current guessed letters
};

var getGuess = function () {
    // Use prompt to get a letter guess from the player
};

var updateGameState = function (guess, word, answerArray) {
    // Loop through word, check if guess matches
    // Update answerArray and return the number of correct matches
};

var showAnswerAndCongratulatePlayer = function (answerArray) {
    // Show the completed word and a congratulations message
};
