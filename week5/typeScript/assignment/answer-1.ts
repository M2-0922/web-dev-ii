// 1- Declare a variable `myString` with the value "Hello, TypeScript!" and log it to the console.
console.log("Q1.----------------------");

let myString: string = "Hello, TypeScript!";
console.log(myString);


// 2- Declare a function `multiplyNumbers` that takes two numbers as arguments and returns their product.
console.log("\nQ2.----------------------");

function multiplyNumbers(num1: number, num2: number) {
    return num1 * num2;
}
console.log(multiplyNumbers(2, 4));



// 3- Declare a variable `myArray` with the values 1, 2, and 3 as an array of numbers.
console.log("\nQ3.----------------------");

let myArray: number[] = [1, 2, 3];
console.log(myArray);


// 4- Declare a function `reverseString` that takes a string as an argument and returns the reverse of the string.
console.log("\nQ4.----------------------");

function reverseString(str: string) {
    let splitStr = str.split("");
    let reverseStr = splitStr.reverse();
    let joinStr = reverseStr.join("");
    return joinStr;
}
console.log(reverseString("Hello"));


// 5- Declare a variable `myObject` with the properties name, age, and email of type string.
console.log("\nQ5.----------------------");

type myObjectType = {
	name: string;
	age: string;
	email: string;
}

let myObject: myObjectType = {
	name: "Richter Belmont",
	age: "19",
	email: "richter@gmail.com",
}
console.log(myObject);


// 6- Declare a function `isEven` that takes a number as an argument and returns true if the number is even, and false otherwise.
console.log("\nQ6.----------------------");

function isEven(num: number): boolean {
    if(num % 2 === 0){
        return true;
    }else{
        return false;
    }
}
console.log(isEven(28));
console.log(isEven(1));


// 7- Declare a function `removeDuplicates` that takes an array of numbers as an argument and returns an array with the duplicates removed.
console.log("\nQ7.----------------------");

function removeDuplicates(arr: number[]): number[] {
    let resultArr: number[] = [];
    arr.forEach((arrItem) => {
        if (!resultArr.includes(arrItem)) {
            resultArr.push(arrItem);
        }
    })
    return resultArr;
}
console.log(removeDuplicates([1,1,1,1,2,2,2,3,3,4,4,5,5,5,5]));
console.log(removeDuplicates([13,13,14]));
console.log(removeDuplicates([1]));


// 8- Declare a variable `myBoolean` with the value true or false, depending on whether 5 is greater than 2.
console.log("\nQ8.----------------------");

let myBoolean: boolean = 5 > 2;
console.log(myBoolean);


// 9- Declare a function `capitalizeString` that takes a string as an argument and returns the string with the first letter capitalized.
console.log("\nQ9.----------------------");

function capitalizeString(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
}
console.log(capitalizeString("vancouver"));


export{}
