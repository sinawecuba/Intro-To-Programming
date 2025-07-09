//1. Creating array
var fruits = ['apple', 'banana', 'cherry', 'mango'];

//2. Indexing:
//Each item in an array is assigned a position number (index)
//starting from 0.
console.log("Fruit index:", fruits[2]);

//3. Changing Elements:
//Update an array item by specifying its index and setting a new value.
fruits[1] = 'lime';
console.log("New value in the array:", fruits);

//4. Mixing Data Types and getting value 2
var mixedDataType = [42, 'Sinawe', true, {name: 'John'}, [1, 2, 3], false, [1, 2, 3, 4]];
console.log("Data Type Value:", mixedDataType[4][2]);

//5. Finding Length:
console.log("Fruits Length:", fruits.length);

//6. Adding Elements: Append new items to the end of the array
fruits.push('date', 'pineapple');
console.log("After appending:", fruits);

//7. Removing Elements:
//Remove items from the end or a specific position in the array
console.log('Removed item:', fruits.pop());
console.log("Array After pop:", fruits);

//8. Joining Arrays:
var allFruits = fruits.concat(mixedDataType);
console.log("Concat allFruits:", allFruits);

//9. Finding Index:
console.log("Index Of the value:", allFruits.indexOf('mango'));

//10. Turning into a String:
//Convert the array into a single string with elements separated by commas
var mixedString = mixedDataType.join(", ");
console.log("Converted:", mixedString);

//11. Building with push: Add new items to the end of the array
var numbers = [];
numbers.push(1, 2, 3, 4, 5, 6);
console.log("Numbers Array:", numbers);

//12. Adding to the beginning of the array:
numbers.unshift(8, 9, 10);
console.log("Added:", numbers);