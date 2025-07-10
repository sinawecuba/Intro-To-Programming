//Array of friends:
// Define the Friend Objects
var anna = {
    name: "Anna",
    age: 11,
    luckyNumbers: [2, 4, 8, 16]
};

var dave = {
    name: "Dave",
    age: 5,
    luckyNumbers: [3, 9, 40]
};

var kate = {
    name: "Kate",
    age: 9,
    luckyNumbers: [1, 2, 3]
};

var sinawe = {
    name: "Sinawe",
    age: 25,
    luckyNumbers: [16, 66, 88]
};

//Create an Array of Friends:
//The friends array now holds three elements, each of which is an object representing a friend.
var friends = [anna, dave, kate, sinawe];

// Accessing Objects in the Array:
console.log("Friend Object: ", friends[1]);

// Accessing Properties within an Object:
console.log("Friend Name: ", friends[2].name);

// Accessing Nested Arrays within Objects:
console.log("Lucky Number: ", friends[3].luckyNumbers[2]);