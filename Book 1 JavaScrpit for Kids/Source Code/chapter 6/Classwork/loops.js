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
                              
