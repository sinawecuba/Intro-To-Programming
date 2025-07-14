// Creating variables and Assigning Values
var book = 5;                                             // Declares a variable 'book' with value 5
console.log("Book Value", book);                                        // Prints the value of 'book' to the console

var myFirstName = "Steven";                                // Declares a variable 'myFirstName' with a string
console.log("My Name:", myFirstName);                                 // Prints 'Cursh' to the console

console.log("----------String properties and methods-------");

console.log("Length of the string:", "I am a string.".length);      // Gets and prints the length of the string (13)

console.log("Index of the string:", "my first javascript string.".indexOf("first")); // Finds position of "first" (3)

console.log("--------Boolean expressions-----------");

console.log("Is this condition true or false:", 1 < 10);             // true (1 is less than 10)
console.log("Is this condition true or false:", false === false);   // true (strict equality)
console.log("Is this condition true or false:", 40 >= 40);          // true (40 is equal to 40)


// Alert with string, number, and math
alert("Good job!");                                     // Shows an alert with text
alert(300);                                             // Shows an alert with number
alert(37 * 37);                                         // Shows an alert with result of 37 x 37 (1369)


// Alert using a variable
var myNameIs = "Lee";                                   // Declares a variable with name "Lee"
alert(myNameIs);                                        // Shows an alert with the value "Lee"


// Alert combining text and variables
var firstName = "Cee";                                  // Declares first name
var yourScore = 30;                                     // Declares score
alert("Hi, " + firstName + ". Your current score is: " + yourScore);  // Shows alert with combined message


// Using document.write()
document.write("------Using document.write Part 1 --------<br>");  // Writes section header
document.write("Hi, Mom!<br>");                                     // Writes greeting
document.write("How are you?<br>");                                 // Writes question
document.write("I'm great! Thanks!<br>");                           // Writes response
document.write("------End of Part 1 --------<br><br>");             // Writes section end


// Custom letter example combining input and output
var toName = "Lee";                                          // Declares recipient name
var fromName = "The Grammy Awards";                          // Declares sender name
var letterBody = 'The committee said, "We can\'t believe how good your song is!"';
// Declares body with escaped apostrophe

document.write("------Using document.write Part 2 --------<br>");      // Writes section header
document.write("Dear " + toName + ",<br><br>");                        // Writes salutation
document.write(letterBody + "<br><br>");                               // Writes letter body
document.write("Sincerely,<br>");                                      // Writes closing
document.write(fromName, "<br>");                                      // Writes sender name
document.write("------End of Part 2 --------");                        // Writes section end
