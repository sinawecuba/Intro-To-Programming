console.log("-----1. Awesome Animals-----")

var animals = ["Cat", "Fish", "Lemur", "Komodo Dragon"]; // Create an array of animal names

for (var w = 0; w < animals.length; w++) {               // Loop through each index of the animals array
  animals[w] = "Awesome " + animals[w];                  // Add "Awesome " in front of each animal name
}
console.log(animals);                                    // Print the updated array to the console


console.log("-----2.Random String Generator-----")

var alphabet = "abcdefghijklmnopqrstuvwxyz";        // A string containing all letters of the alphabet
var randomString = " ";                             // Start with a space (can be "" if you prefer no leading space)

while (randomString.length < 16) {                  // Keep looping until the string is at least 16 characters long
    var randomIndex = Math.floor(Math.random() * alphabet.length); // Pick a random index (0 to 25)
    var randomLetter = alphabet[randomIndex];       // Get the letter at that index
    randomString += randomLetter;                   // Add the random letter to the string
}

console.log(randomString);                          // Print the final random string

console.log("-----3. h4ck3r sp34k-----")

var input = "javascript is awesome";                // Original string to transform
var output = "";                                     // Empty string to build the transformed result

for (var i = 0; i < input.length; i++) {             // Loop through each character in the input string
  var letter = input[i];                             // Get the current letter

  if (letter === "a") {                              // If the letter is "a"
    output += "4";                                   // Replace it with "4"
  } else if (letter === "e") {                       // If the letter is "e"
    output += "3";                                   // Replace it with "3"
  } else if (letter === "i") {                       // If the letter is "i"
    output += "1";                                   // Replace it with "1"
  } else if (letter === "o") {                       // If the letter is "o"
    output += "0";                                   // Replace it with "0"
  } else {                                           // For any other letter
    output += letter;                                // Just add it as it is
  }
}

console.log(output);                                 // Print the final "leetified" output
