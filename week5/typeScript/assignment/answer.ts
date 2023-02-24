/*
1- Declare a variable `myString` with the value "Hello, TypeScript!" and log it to the console.
*/
const myString: string = "Hello, TypeScript!";
console.log(myString);

/*
2- Declare a function `multiplyNumbers` that takes two numbers as arguments and returns their product.
*/
const multiplyNumbers = function (a: number, b: number) {
  return a * b;
};
console.log(multiplyNumbers(3, 4));

/*
3- Declare a variable `myArray` with the values 1, 2, and 3 as an array of numbers.
*/
const myArray: number[] = [1, 2, 3];
console.log(myArray);

/*
4- Declare a function `reverseString` that takes a string as an argument and returns the reverse of the string.
*/
const reverseString = function (str: string) {
  return str.split("").reverse().join("");
};
console.log(reverseString("hello"));

/*
5- Declare a variable `myObject` with the properties name, age, and email of type string.
*/
type myObject = {
  name: string;
  age: string;
  email: string;
};
let user: myObject = { name: "Batty", age: "26", email: "batt.gmail.com" };
console.log(user);

/*
6- Declare a function `isEven` that takes a number as an argument and returns true if the number is even, and false otherwise.
*/
const isEven = (num: number) => (num % 2 === 0 ? true : false);
console.log(isEven(4));

/*
7- Declare a function `removeDuplicates` that takes an array of numbers as an argument and returns an array with the duplicates removed.
*/
const removeDuplicates = function (numArr: number[]) {
  let uniqueNums: number[] = [];

  for (let i = 0; i < numArr.length; i++) {
    let isDuplicate = false;

    for (let y = 0; y < uniqueNums.length; y++) {
      if (numArr[i] === uniqueNums[y]) {
        isDuplicate = true;
        break;
      }
    }
    if (!isDuplicate) uniqueNums.push(numArr[i]);
  }
  return uniqueNums;
};
console.log(removeDuplicates([1, 1, 2, 3, 3]));

/*
8- Declare a variable `myBoolean` with the value true or false, depending on whether 5 is greater than 2.
*/
const myBoolean: boolean = 5 > 2;
console.log(myBoolean);

/*
9- Declare a function `capitalizeString` that takes a string as an argument and returns the string with the first letter capitalized.
*/
const capitalizeString = function (str: string) {
  const strs: string[] = str.split(" ");
  const upper: string[] = [];

  for (const s of strs) {
    upper.push(s[0].toUpperCase() + s.slice(1).toLowerCase());
  }

  return upper.join(" ");
};
console.log(capitalizeString("heLLo worlD"));

export {};
