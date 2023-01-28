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

//Use the `find` function to locate the first element in an array that satisfies a certain condition.
const firstEvenNum = numberArr.find((n) => n % 2 === 0);
console.log(firstEvenNum); //52

//Use the `some` function to determine if any elements in an array satisfy a certain condition.
const hasOddNum = numberArr.some((n) => n % 2 === 1);
console.log(hasOddNum); //true

//Use the `every` function to check if all elements in an array satisfy a certain condition.
const isAllOver10 = numberArr.every((n) => n > 10);
console.log(isAllOver10); //false

//Use the `reduce` function to sum all elements in an array.
const sumOfNumberArr = numberArr.reduce((acc, cur) => acc + cur);
console.log(sumOfNumberArr); //115

//Use the `find` function to locate the first object in an array that has a specific property value.
const firstPersonAgeOver30 = objectArr.find((obj) => obj.age > 30);
console.log(firstPersonAgeOver30); //{ name: 'Jack', age: 35 }

//Use the `some` function to check if any objects in an array have a specific property value.
const isAge35 = objectArr.some((obj) => obj.age === 35);
console.log(isAge35); //true

//Use the `every` function to check if all objects in an array have a specific property value.
const hasSameInitial = objectArr.every((obj) => obj.name[0] === "J");
console.log(hasSameInitial); //true

//Use the `reduce` function to concatenate all elements in an array into a single string.
const concatStr = stringArr.reduce((acc, cur) => acc + cur);
console.log(concatStr); //helloworldthisisastring

//Use the `find` function to locate the first element in an array that is greater than a certain value.
const firstNumOver20 = numberArr.find((n) => n > 20);
console.log(firstNumOver20); //52

//Use the `some` function to check if any elements in an array are even numbers.
const hasEvenNum = numberArr.some((n) => n % 2 === 0);
console.log(hasEvenNum); //true

//Use the `every` function to check if all elements in an array are unique.
const allUnique = stringArr.every(
  (curStr, i, arr) => arr.indexOf(curStr) === i
);
console.log(allUnique); //true

//Use the `reduce` function to find the product of all elements in an array.
const product = numberArr.reduce((acc, cur) => {
  return acc * cur;
}, 1);
console.log(product); //1315600

//Use the `find` function to locate the first object in an array that has a specific property set to true.
const firstStr = mixedArr.find((val) => typeof val === "string");
console.log(firstStr); //hello

//Use the `some` function to check if any objects in an array have a property set to null.
const hasNullValue = objectArr.some((obj) => obj.age === null);
console.log(hasNullValue); //false

//Use the `every` function to check if all elements in an array are of the same type.
const allSameType = mixedArr.every((val) => typeof val === "number");
console.log(allSameType); //false

//Use the `reduce` function to find the largest number in an array.
const largestNum = numberArr.reduce((acc, cur) => (acc > cur ? acc : cur));
console.log(largestNum); //52

//Use the `find` function to locate the first element in an array that is a string that includes a specific word.
const hasRay = mixedArr.find(
  (val) => typeof val == "string" && val.includes("ray")
);
console.log(hasRay); //array

//Use the `some` function to check if any elements in an array are objects.
const hasObject = mixedArr.some((val) => typeof val === "object");
console.log(hasObject); //true

//Use the `every` function to check if all elements in an array are integers.
const isIntegers = numberArr.every((n) => Number.isInteger(n));
console.log(isIntegers); //true

//Use the `reduce` function to count the total number of characters in all strings in an array.
const numOfCharacters = stringArr.reduce((acc, curStr) => {
  return acc + curStr.length;
}, 0);
console.log(numOfCharacters); //23
