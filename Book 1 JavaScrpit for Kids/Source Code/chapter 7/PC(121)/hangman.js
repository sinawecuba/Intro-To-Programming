console.log("-----Hangman-----");                      // Log game start header to console

var words = [                                         // Array of possible secret words
    "banana",
    "giraffe",
    "computer",
    "wizard"
];

var word = words[Math.floor(Math.random() * words.length)]; // Randomly select a word from array
var answerArray = [];                                 // Array to hold underscores and correct guesses

for (var i = 0; i < word.length; i++) {              // Fill answerArray with underscores
    answerArray[i] = "_";                             // One underscore for each letter in the word
}

var remainingLetters = word.length;                   // Count of letters left to guess
var maxGuesses = 10;                                  // Maximum number of guesses allowed
var guessesUsed = 0;                                  // Counter for guesses made

while (remainingLetters > 0 && guessesUsed < maxGuesses) {  // Loop while letters remain and guesses left
    console.log(answerArray.join(" "));               // Show current word progress in console

    var guess = prompt(                                // Prompt player for a guess
        "Guess a letter, or click Cancel to stop playing.\n" +
        "Word: " + answerArray.join(" ") + "\n" +
        "Guesses left: " + (maxGuesses - guessesUsed)
    );

    if (guess === null) {                              // Player clicked Cancel
        break;                                        // Exit game loop
    } else if (guess.length !== 1) {                   // Validate single letter input
        alert("Please enter a single letter.");       // Warn if not valid input
    } else {
        guess = guess.toLowerCase();                   // Convert guess to lowercase for matching
        var correctGuess = false;                       // Flag to track if guess was correct

        for (var j = 0; j < word.length; j++) {        // Loop through each letter in secret word
            if (word[j] === guess && answerArray[j] === "_") { // If letter matches and not guessed yet
                answerArray[j] = guess;                 // Reveal the letter in answerArray
                remainingLetters--;                      // Decrement remaining letters count
                correctGuess = true;                     // Mark guess as correct
            }
        }

        guessesUsed++;                                  // Increment guesses count (right or wrong)
    }
}

console.log(answerArray.join(" "));                   // Log final word state to console

if (remainingLetters === 0) {                          // If all letters guessed
    alert(answerArray.join(" "));                      // Show completed word
    alert("Good job! The answer was " + word);         // Congratulate player
} else {
    alert("Out of guesses! The word was " + word);     // Notify player they lost and reveal word
}




