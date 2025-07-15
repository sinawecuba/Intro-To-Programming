var sixthLetter = function (name) {            // Define a function that takes a name as input
    if (name.length < 6) {                     // Check if the name has fewer than 6 letters
        return;                                // If yes, exit the function without returning anything
    }
    return "The sixth letter of your name is " + name[5] + "."; // Return a message showing the 6th letter (index 5)
};

console.log(sixthLetter("Alexander"));         // Call the function with "Alexander" and print the result to the console

