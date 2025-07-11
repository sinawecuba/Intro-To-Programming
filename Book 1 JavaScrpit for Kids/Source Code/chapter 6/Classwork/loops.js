console.log("---------WHILE LOOP-------")
var sheepCounted = 0;                               // Start with 0 sheep counted

while (sheepCounted < 10) {                         // Loop while sheepCounted is less than 10
  console.log("I have counted " + sheepCounted + " sheep!"); // Print the current count
  sheepCounted++;                                   // Increase the count by 1
}

console.log("Zzzzzzzzzzz");                         // Print a message when done counting


console.log("-------FOR LOOP-------")
for (var carsSold = 22; carsSold > 0; carsSold -= 3) {       // Start at 22, loop while more than 0, subtract 3 each time
  console.log("Toyota has " + carsSold + " Left on the lot"); // Print how many cars are left on the lot
}

console.log("CHA-CHING!!!");                                 // Print this after the loop ends
                              
console.log("------FOR LOOP WITH ARRAY-------")
var fruit = ["Mangos", "Apples", "Cherries", "Bananas", "Strawberries", "Limes"]; // Create an array of fruit names
for (var w = 2; w < fruit.length; w++) {                                           // Start at index 2, loop until the end of the array
  console.log("This markert has the sweetest " + fruit[w] + "!!!");               // Print message for each fruit starting from index 2
}

console.log("--------------DO WHILE LOOP-------")
let number = 5;  // Start with number 5

do {
    console.log(number); // Print the current number
    number--;            // Minus 1 to the number
} while (number >= 0);   // Keep going while number is 0 or more


