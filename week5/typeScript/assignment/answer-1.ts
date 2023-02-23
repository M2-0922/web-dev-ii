// 1- Declare a variable `myString` with the value "Hello, TypeScript!" and log it to the console.
let myString: string = "Hello, TypeScript!";
console.log(myString);

// 2- Declare a function `multiplyNumbers` that takes two numbers as arguments and returns their product.
function multiplyNumbers(num1: number, num2: number): number {
    return num1 * num2;
}
console.log(multiplyNumbers(5, 7));

// 3- Declare a variable `myArray` with the values 1, 2, and 3 as an array of numbers.
let myArray: number[] = [1, 2, 3];
console.log(myArray);

// 4- Declare a function `reverseString` that takes a string as an argument and returns the reverse of the string.
function reverseString(str: string): string {
    let result: string = "";
    for (let i = str.length - 1; i >= 0; i--) {
        result += str.charAt(i);
    }
    return result;
}
console.log(reverseString("Template String"));

// 5- Declare a variable `myObject` with the properties name, age, and email of type string.
// const myObject : string[] = [name: string, age, email];
type typeObj = {
    name: string,
    age: string,
    email: string
};

const myObject: typeObj = {
    name: "Kate",
    age :"27",
    email: "kate@sample.com"
};
console.log(myObject);

// 6- Declare a function `isEven` that takes a number as an argument and returns true if the number is even, and false otherwise.
function isEven(num: number): boolean {
    if(num % 2 == 0)
        return true;
    else
        return false;
}
console.log(isEven(3));

// 7- Declare a function `removeDuplicates` that takes an array of numbers as an argument and returns an array with the duplicates removed.
function removeDuplicates(numArr: number[]): number[] {
    let newArr: number[] = numArr.filter((element, index) => numArr.indexOf(element) === index);
    return newArr;
}
console.log(removeDuplicates([1, 2, 3, 2, 4, 5, 6, 7, 6]));

// 8- Declare a variable `myBoolean` with the value true or false, depending on whether 5 is greater than 2.
let myBoolean: boolean =  5 > 2;
console.log(myBoolean);

// 9- Declare a function `capitalizeString` that takes a string as an argument and returns the string with the first letter capitalized.
function capitalizeString(str: string): string{
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}
console.log(capitalizeString("jackSon PollocK"));
