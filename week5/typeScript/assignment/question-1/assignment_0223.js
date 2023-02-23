"use strict";
// 1- Declare a variable myString with the value "Hello, TypeScript!" and log it to the console.
let myString = "Hello, TypeScript!";
console.log(myString);
// 2- Declare a function multiplyNumbers that takes two numbers as arguments and returns their product.
function a(x) {
    return x * x;
}
console.log(a(3));
// 3- Declare a variable myArray with the values 1, 2, and 3 as an array of numbers.
var b = [1, 2, 3];
// 4- Declare a function reverseString that takes a string as an argument and returns the reverse of the string.
function reverseString(str) {
    var splitString = str.split("");
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join("");
    return joinArray;
}
console.log(reverseString("hello"));
// 6- Declare a function isEven that takes a number as an argument and returns true if the number is even, and false otherwise.
function isEven(c) {
    return c % 2 == 0;
}
console.log(isEven(2));
// 7- Declare a function removeDuplicates that takes an array of numbers as an argument and returns an array with the duplicates removed.
function removeDuplicates(numberArray) {
    let newArr = numberArray.filter(function (val, i, array) {
        return !(array.indexOf(val) === i);
    });
    console.log(newArr);
}
removeDuplicates([1, 2, 3, 4, 4, 5, 5, 1]);
// 8- Declare a variable myBoolean with the value true or false, depending on whether 5 is greater than 2.
// function myBoolean(d: number = 5){
//   console.log(d > 2);
// }
// myBoolean();
// 9- Declare a function capitalizeString that takes a string as an argument and returns the string with the first letter capitalized.
function capitalizeString(e) {
    return e.charAt(0).toUpperCase() + e.slice(1).toLowerCase();
}
console.log(capitalizeString("ferrari"));
