// 1- Declare a variable `myString` with the value "Hello, TypeScript!" and log it to the console.

let myString: string = "Hello, TypeScript!";
console.log(myString);

// 2- Declare a function `multiplyNumbers` that takes two numbers as arguments and returns their product.

function multiplyNumbers(val1: number, val2: number) {
  return val1 * val2;
}

// 3- Declare a variable `myArray` with the values 1, 2, and 3 as an array of numbers.

let myArray: number[] = [1, 2, 3];

// 4- Declare a function `reverseString` that takes a string as an argument and returns the reverse of the string.

function reverseString(str: string): string {
  const Reversed = [...str].reverse().join("");

  return Reversed;
}

// 5- Declare a variable `myObject` with the properties name, age, and email of type string.

let myObject: { name: string; age: string; email: string } = {
  name: "John",
  age: "26",
  email: "johndoe@gmail.com",
};

// 6- Declare a function `isEven` that takes a number as an argument and returns true if the number is even, and false otherwise.

function isEven(val: number): boolean {
  return val % 2 === 0;
}

// 7- Declare a function `removeDuplicates` that takes an array of numbers as an argument and returns an array with the duplicates removed.

function removeDuplicates(arr: number[]): number[] {
  return [...new Set(arr)];
}

// 8- Declare a variable `myBoolean` with the value true or false, depending on whether 5 is greater than 2.

let myBoolean: boolean = 5 > 2;

// 9- Declare a function `capitalizeString` that takes a string as an argument and returns the string with the first letter capitalized.

function capitalizeString(str: string): string {
  return str.charAt(0).toUpperCase() + str.substring(1);
}
