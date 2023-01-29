let numberArr = [11, 52, 23, 4, 25];
let stringArr = ["hello", "world", "this", "is", "a", "string"];
let objectArr = [
  { name: "John", age: 25 },
  { name: "Jane", age: 30 },
  { name: "Jack", age: 35 },
  { name: "Jill", age: 40 },
  { name: "Joe", age: 45 },
];
let mixedArr = [
  1,
  "hello",
  false,
  "world",
  3,
  "this",
  true,
  "is",
  { name: "Adam", age: 21 },
  "a",
  6,
  "mixed",
  7,
  "array",
];

// - Use the `find` function to locate the first element in an array that satisfies a certain condition.

numberArr.find((num) => num % 5 === 0);

// - Use the `some` function to determine if any elements in an array satisfy a certain condition.

function isLengthFive(str) {
  return str.length === 5;
}
stringArr.some(isLengthFive);

// - Use the `every` function to check if all elements in an array satisfy a certain condition.

function canDrink(obj) {
  return obj.age >= 19;
}
objectArr.every(canDrink);

// - Use the `reduce` function to sum all elements in an array.

numberArr.reduce((sum, curr) => sum + curr);

// - Use the `find` function to locate the first object in an array that has a specific property value.

objectArr.find((obj) => obj.age === 35);

// - Use the `some` function to check if any objects in an array have a specific property value.

objectArr.some((obj) => obj.age >= 45);

// - Use the `every` function to check if all objects in an array have a specific property value.

objectArr.every((obj) => obj.age % 5 === 0);

// - Use the `reduce` function to concatenate all elements in an array into a single string.

stringArr.reduce((accum, currStr) => accum + currStr);

// - Use the `find` function to locate the first element in an array that is greater than a certain value.

numberArr.find((num) => num > 20);

// - Use the `some` function to check if any elements in an array are even numbers.

numberArr.some((num) => {
  num % 2 === 0;
});

// - Use the `every` function to check if all elements in an array are unique.

stringArr.every((element, idx) => {
  return stringArr.indexOf(element, idx + 1) === -1;
});

// - Use the `reduce` function to find the product of all elements in an array.

numberArr.reduce((accum, curr) => accum * curr);

// - Use the `find` function to locate the first object in an array that has a specific property set to true.

mixedArr.find((element) => element === true);

// - Use the `some` function to check if any objects in an array have a property set to null.

objectArr.some((obj) => obj.name === null);

// - Use the `every` function to check if all elements in an array are of the same type.

numberArr.every((num) => typeof num === typeof numberArr[0]);
mixedArr.every((element) => typeof element === typeof mixedArr[0]);

// - Use the `reduce` function to find the largest number in an array.

const LargestNum = numberArr.reduce((max, curr) => Math.max(max, curr));

// - Use the `find` function to locate the first element in an array that is a string that includes a specific word.

mixedArr.find(
  (element) => typeof element === "string" && element.includes("rl")
);

// - Use the `some` function to check if any elements in an array are objects.

function isObject(input) {
  return typeof input === "object";
}
mixedArr.some(isObject);

// - Use the `every` function to check if all elements in an array are integers.

function isNumber(input) {
  return typeof input === "number";
}
numberArr.every(isNumber);
mixedArr.every(isNumber);

// - Use the `reduce` function to count the total number of characters in all strings in an array.

stringArr.reduce((sum, curr) => sum + curr.length, 0);
