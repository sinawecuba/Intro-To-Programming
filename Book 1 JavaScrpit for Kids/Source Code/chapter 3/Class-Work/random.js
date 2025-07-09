//generating a random number between 0 and 1
console.log("Random number", Math.random());

//multiplying by 16
console.log("Random number by 16", Math.random() * 16);

//Math.floor rounds down to the nearest whole number
console.log("Whole number", Math.floor(12.14159))

//math.random and math.floor
 console.log("Math.floor and Math.random", Math.floor(Math.random() * 4));

 console.log("--------Random Array--------")

 //Random array
  var randomWords = ["Explosion", "Cave", "Princess", "Pen"];
 var randomIndex = Math.floor(Math.random() * 4);
 console.log("Random word", randomWords[randomIndex]);
 
 console.log("----------------------------------")

console.log("--------Random Insult Generator---------")

var randomBodyParts = ["Face", "Nose", "Hair"];
var randomAdjectives = ["Smelly", "Boring", "Stupid"];
var randomWords = ["Fly", "Pig", "Stick", "Monkey", "Rat"];

// Pick a random body part from the randomBodyParts array:
var randomBodyPart = randomBodyParts[Math.floor(Math.random() * 3)];

// Pick a random adjective from the randomAdjectives array:
var randomAdjective = randomAdjectives[Math.floor(Math.random() * 3)];

// Pick a random word from the randomWords array:
var randomWord = randomWords[Math.floor(Math.random() * 6)];

// Join all the random strings into a sentence:
var randomInsult = "Your " + randomBodyPart + " is like a " + randomAdjective + " " + randomWord + "!!!";
console.log(randomInsult);
