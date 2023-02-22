"use strict";
exports.__esModule = true;
// 1- Declare a variable `myString` with the value "Hello, TypeScript!" and log it to the console.
var myString = "Hello, TypeScript!";
console.log(myString);
// Hello, TypeScript!
// 2- Declare a function `multiplyNumbers` that takes two numbers as arguments and returns their product.
function multiplyNumbers(a, b) {
    return a * b;
}
;
console.log(multiplyNumbers(2, 3));
// 6
// 3- Declare a variable `myArray` with the values 1, 2, and 3 as an array of numbers.
var myArray = [1, 2, 3];
console.log(myArray);
// [1, 2, 3]
// 4- Declare a function `reverseString` that takes a string as an argument and returns the reverse of the string.
function reverseString(value) {
    return value.split("").reverse().join("");
}
console.log(reverseString("typeScript"));
function checkMyObject(obj) {
    console.log("Hi " + obj.name + ", today is your " + obj.age + "'th birthday! I sent message to " + obj.email + " :D");
}
var newObject = {
    name: "Hanako",
    age: "20",
    email: "hanako.gmail.com"
};
checkMyObject(newObject);
// Hi Hanako, today is your 20'th birthday! I sent message to hanako.gmail.com :D
// 6- Declare a function `isEven` that takes a number as an argument and returns true if the number is even, and false otherwise.
function isEven(num) {
    return num % 2 == 0 ? true : false;
}
console.log(isEven(4)); // true
console.log(isEven(5)); // false
// 7- Declare a function `removeDuplicates` that takes an array of numbers as an argument and returns an array with the duplicates removed.
function removeDuplicates(array) {
    var newArray = array.filter(function (num, index) {
        return array.indexOf(num) === index;
    });
    console.log(newArray);
}
;
var array7 = [1, 2, 3, 4, 2, 5, 7, 3, 5, 1];
removeDuplicates(array7);
// [ 1, 2, 3, 4, 5, 7 ]
// 8- Declare a variable `myBoolean` with the value true or false, depending on whether 5 is greater than 2.
var myBoolean;
function checkMyBoolean(num) {
    if (num > 2) {
        myBoolean = true;
    }
    else {
        myBoolean = false;
    }
    console.log(myBoolean);
}
checkMyBoolean(5); //true
checkMyBoolean(2); //false
// 9- Declare a function `capitalizeString` that takes a string as an argument and returns the string with the first letter capitalized.
function capitalizeString(value) {
    return value.charAt(0).toUpperCase() + value.slice(1);
}
;
console.log(capitalizeString("i like coffee."));
