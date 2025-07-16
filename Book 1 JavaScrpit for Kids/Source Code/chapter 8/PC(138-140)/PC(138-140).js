//#1: Doing Arithmetic with functions
console.log("-----Question 1-----");

function add(a, b) {               // Function that returns the sum of a and b
    return a + b;
}

function multiply(a, b) {          // Function that returns the product of a and b
    return a * b;
}

// First multiplies 36325 and 9824, then adds 777 to the result
console.log(add(multiply(36325, 9824), 777)); 


//#2: Are These Arrays the Same?
console.log("-----Question 2-----");

function areArraysSame(a, b) {
  if (a.length !== b.length) return false; // If lengths are different, arrays can't be the same

  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return false;       // If any corresponding elements are different, return false
  }

  return true; // If all elements are the same, return true
}

// Test cases
console.log(areArraysSame([10, 20, 30], [10, 20, 30])); // true — arrays match
console.log(areArraysSame([10, 20, 30], [40, 50, 60])); // false — arrays do not match
console.log(areArraysSame([10, 20, 30], [10, 20, 30, 40, 50])); // false — arrays are diffrent lengths
