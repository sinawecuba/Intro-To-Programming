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

