// Scores is the object with the names as keys and the score starting at 0

var scores = {                    // Create an object to store scores for each person
    Sinawe: 0,                    // Set Sinawe's initial score to 0
    James: 0,                     // Set James's initial score to 0
    Lethabo: 0,                   // Set Lethabo's initial score to 0
    Jamo: 0                       // Set Jamo's initial score to 0
};

console.log("-----Score Board-----");               // Print a heading for the score output

scores.Sinawe = 2;                                       // Update Sinawe's score to 2
console.log("Sinawe's Score:", scores.Sinawe);         // Print Sinawe's updated score

scores.James = 4;                                          // Update James's score to 4
console.log("James's Score:", scores.James);              // Print James's updated score

scores.Lethabo = 6;                                     // Update Lethabo's score to 6
console.log("Lethabo's Score:", scores.Lethabo);        // Print Lethabo's updated score

scores.Jamo = 8;                                         // Update Jamo's score to 8
console.log("Jamo's Score:", scores.Jamo);              // Print Jamo's updated score


