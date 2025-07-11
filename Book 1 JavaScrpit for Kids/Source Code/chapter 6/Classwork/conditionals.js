console.log("------------IF STATEMENT------------")
var name = "Nicholas";                               // Declare a variable 'name' and assign it the string "Nicholas"
console.log("Hello " + name);                       // Print "Hello Nicholas" by combining the string and the variable

if (name.length > 7) {                                    // Check if the name has more than 7 characters
  console.log("Wow, you have a REALLY long name!");     // If true, print a special message
}

console.log("---------ELSE STATEMENT-----------")
var name = "Nicholas";                            // Declare a variable 'name' and assign it the value "Nicholas"
console.log("Hello " + name);                     // Print "Hello Nicholas" to the console

if (name.length > 7) {                            // Check if the name has more than 7 characters
  console.log("Wow, you have a REALLY long name!"); // If true, print this message
} else {                                          // If the name is 7 characters or fewer...
  console.log("Your name isn't very long.");       // ...print this message instead
}
