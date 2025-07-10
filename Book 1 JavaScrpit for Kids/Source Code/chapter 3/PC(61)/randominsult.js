//
var randomFamilyMember = ["Mom", "Dad", "Brother", "Grandma"];
var randomAdjectives = ["older", "fatter", "dumber", "Uglier"];
var randomAnimal = ["Rat's", "Snake's", "Donakey's", "Cockroach's", "Frog's"];
var randomBodyPart = ["Feet", "Armpits", "Toenail", "Belly Button", "Butt"]

// Pick a random Family member from the randomFamilyMember array:
var randomFamilyMember = randomFamilyMember[Math.floor(Math.random() * 4)];

// Pick a random adjective from the randomAdjectives array:
var randomAdjective = randomAdjectives[Math.floor(Math.random() * 4)];

// Pick a random animal from the randomAnimal array:
var randomAnimal = randomAnimal[Math.floor(Math.random() * 
 randomAnimal.length)];

 //Pick a random animal body part from randomBodyPart
var randomBodyPart = randomBodyPart[Math.floor(Math.random() * 
 randomBodyPart.length)]

// Join all the random strings into a sentence:
var randomInsult = "Your " + randomFamilyMember + " is " + randomAdjective + " than a " +  randomAnimal + " " + randomBodyPart + " !!! ";

console.log(randomInsult);


//Creating Insult Using an using .join
var insultSentnce = [ "Your" , randomFamilyMember , "is", randomAdjective, "than a", randomAnimal, randomBodyPart, "!!!" ];
var arrayInsult = insultSentnce.join(" ")
console.log("Insult using array:", arrayInsult);
// Using the .join method is simpler than using the "+" method. 


// turn the array [3, 2, 1] into the string
var numberCountDown = ['3', '2', '1']
var fullSentence = numberCountDown.join( " is bigger than ");
console.log("Completed Sentence:", fullSentence);