console.log("------------IF STATEMENT------------")
var name = "Alfred";                               // Declare a variable 'name' and assign it the string "Alfred"
console.log("Hello " + name);                       // Print "Hello Alfred" by combining the string and the variable

if (name.length > 5) {                                    // Check if the name has more than 5 characters
  console.log("Wow, you have a REALLY long name!");     // If true, print a special message
}

console.log("---------ELSE STATEMENT-----------")
var name = "Bob";                                // Declare a variable 'name' and assign it the string "Bob"
console.log("Hello " + name);                      // Print "Hello Bob" to the console

if (name.length > 8) {                             // Check if the name has more than 7 characters
  console.log("Wow, you have a REALLY long name!"); // If true, print this message
} else {                                           // Otherwise...
  console.log("Your name isn't very long.");        // Print this message instead
}

console.log("--------ELSE IF STATEMENT-------")
var lemonChicken = false;                        // Set lemonChicken to true or false
var beefWithBlackBean = true;                    // Set beefWithBlackBean to true or false
var sweetAndSourPork = false;                     // Set sweetAndSourPork to true or false

if (lemonChicken) {                              // If lemonChicken is true...
  console.log("Great! I'm having lemon chicken!"); // ...print this
} else if (beefWithBlackBean) {                  // Else if beefWithBlackBean is true...
  console.log("I'm having the beef.");            // ...print this
} else if (sweetAndSourPork) {                   // Else if sweetAndSourPork is true...
  console.log("OK, I'll have the pork.");         // ...print this
} else {                                          // If none of the above are true...
  console.log("I guess I'll have rice then.");    // ...print this default message
}

