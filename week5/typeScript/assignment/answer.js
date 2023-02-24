"use strict";
// 1- Declare a variable `myString` with the value "Hello, TypeScript!" and log it to the console.
exports.__esModule = true;
var myString = "Hello, TypeScript!";
console.log(myString);
// 2- Declare a function `multiplyNumbers` that takes two numbers as arguments and returns their product.
function multiplyNumbers(num1, num2) {
    return num1 * num2;
}
console.log(multiplyNumbers(4, 5));
// 3- Declare a variable `myArray` with the values 1, 2, and 3 as an array of numbers.
var arr = [1, 2, 3];
console.log(arr);
// 4- Declare a function `reverseString` that takes a string as an argument and returns the reverse of the string.
function reverseString(str) {
    return str.split("").reverse().join("");
}
console.log(reverseString("Hello world!"));
var user = {
    name: "Harry Potter",
    age: 16,
    email: "Harrypotter@hogwartsz.com"
};
console.log(user);
// 6- Declare a function `isEven` that takes a number as an argument and returns true if the number is even, and false otherwise.
function isEven(num) {
    return num % 2 === 0 ? true : false;
}
console.log(isEven(3));
console.log(isEven(0));
console.log(isEven(4));
console.log(isEven(15));
// 7- Declare a function `removeDuplicates` that takes an array of numbers as an argument and returns an array with the duplicates removed.
function removeDuplicates(arr) {
    var arr2 = Array.from(new Set(arr));
    return arr2;
}
console.log(removeDuplicates([1, 1, 2, 2, 3, 4, 4, 5, 6, 6, 7, 7]));
// 8- Declare a variable `myBoolean` with the value true or false, depending on whether 5 is greater than 2.
var myBoolean = 5 > 2;
console.log(myBoolean);
// 9- Declare a function `capitalizeString` that takes a string as an argument and returns the string with the first letter capitalized.
function capitalizeString(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}
console.log(capitalizeString("harrypotter"));
