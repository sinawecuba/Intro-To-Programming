// Set the person's age to 12
var age = 12;

// Set accompanied to true, meaning the person is with an adult
var accompanied = true;

// Check if the person is 13 or older OR is accompanied by an adult
if (age >= 13 || accompanied === true) {
  // If either condition is true, this line runs
  console.log("Allowed to see the movie");
} else {
  // If both conditions are false, this line runs
  console.log("Not Allowed to see the movie");
}

// Output: "Allowed to see the movie"
// Because the person is not 13 or older, but is accompanied → allowed



// Set the person's age to 8
var age = 8;

// Set accompanied to false, meaning the person is alone
var accompanied = false;

// Check if the person is 13 or older OR is accompanied by an adult
if (age >= 13 || accompanied === true) {
  // If either condition is true, this line runs
  console.log("Allowed to see the movie");
} else {
  // If both conditions are false, this line runs
  console.log("Not Allowed to see the movie");
}

// Output: "Not Allowed to see the movie"
// Because the person is under 13 AND not accompanied → not allowed
