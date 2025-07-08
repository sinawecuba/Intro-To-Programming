// Define a function called drawCats that takes one argument: howManyTimes
var drawCats = function (howManyTimes) {
  // Start a for loop: initialize i to 0; loop while i is less than howManyTimes; increment i by 1 after each loop (post-incrementation)
  for (var i = 0; i < howManyTimes; i++) {
    // Print the current value of i followed by a cat face
    console.log(i + " =^.^=");
  }
};

// Call the drawCats function with 10 as the argument, so it prints 10 lines
drawCats(10);


// Define another drawCats function that counts down instead
var drawCats = function (howManyTimes) {
  // Start a for loop: initialize i to 33; loop while i is greater than howManyTimes; decrement i by 1 after each loop (post-decrementation)
  for (var i = 33; i > howManyTimes; i--) {
    // Print the current value of i followed by a cat face
    console.log(i + " =^.^=");
  }
};

// Call the second drawCats function with 16 as the argument, so it prints from 33 down to 17
drawCats(16);
