// ```js
let numberArr = [11, 52, 23, 4, 25];
let stringArr = ["hello", "world", "this", "is", "a", "string"];
let objectArr = [
  { name: "John", age: 25 },
  { name: "Jane", age: 30 },
  { name: "Jack", age: 35 },
  { name: "Jill", age: 40 },
  { name: "Joe", age: 45 }
];
let mixedArr = [1, "hello", false, "world", 3, "this", true, "is", { name: "Adam", age: 21 }, "a", 6, "mixed", 7, "array"];

// ```

// - Use the `find` function to locate the first element in an array that satisfies a certain condition.
console.log("【1】find");

let firstOddNum = numberArr.find((num) => num % 2 === 1);
console.log(firstOddNum);


// - Use the `some` function to determine if any elements in an array satisfy a certain condition.
console.log("\n【2】some");

let hasMultipleOf5 = numberArr.some((num) => num % 5 === 0);
console.log(hasMultipleOf5);


// - Use the `every` function to check if all elements in an array satisfy a certain condition.
console.log("\n【3】every");

let doAllIncludeNum = mixedArr.every((item) => typeof item === "number");
console.log(doAllIncludeNum);


// - Use the `reduce` function to sum all elements in an array.
console.log("\n【4】reduce");

let sumAllNum = numberArr.reduce((num, nextNum) => num + nextNum);
console.log(sumAllNum);


// - Use the `find` function to locate the first object in an array that has a specific property value.
console.log("\n【5】find");

let first40s = objectArr.find((object) => object.age >= 40);
console.log(first40s);


// - Use the `some` function to check if any objects in an array have a specific property value.
console.log("\n【6】some");

let hasUnder30 = objectArr.some((object) => object.age < 30);
console.log(hasUnder30);


// - Use the `every` function to check if all objects in an array have a specific property value.
console.log("\n【7】every");

let doAllStartJ = objectArr.every((object) => object.name.charAt(0) === "J");
console.log(doAllStartJ);


// - Use the `reduce` function to concatenate all elements in an array into a single string.
console.log("\n【8】reduce");

let combineStr = stringArr.reduce((str, nextStr) => str + " " + nextStr);
console.log(combineStr);


// - Use the `find` function to locate the first element in an array that is greater than a certain value.
console.log("\n【9】find");

let firstOver20 = numberArr.find((num)=> num >= 20);
console.log(firstOver20);


// - Use the `some` function to check if any elements in an array are even numbers.
console.log("\n【10】some");

let hasEvenNum = numberArr.some((num) => num % 2 === 0);
console.log(hasEvenNum);


// - Use the `every` function to check if all elements in an array are unique.
console.log("\n【11】every");

let areUnique = numberArr.every((num, idx) => numberArr.indexOf(num, idx + 1) === -1);
console.log(areUnique);


// - Use the `reduce` function to find the product of all elements in an array.
console.log("\n【12】every");

let productOfAllNum = numberArr.reduce((acc, curr) => acc * curr);
console.log(productOfAllNum);


// - Use the `find` function to locate the first object in an array that has a specific property set to true.
console.log("\n【13】find");

let first40sStartWithJ = objectArr.find((object) => object.name.charAt(0) === "J" && object.age >= 40);
console.log(first40sStartWithJ);


// - Use the `some` function to check if any objects in an array have a property set to null.
console.log("\n【14】some");

let hasNull = objectArr.some((object) => object.age === null);
console.log(hasNull);


// - Use the `every` function to check if all elements in an array are of the same type.
console.log("\n【15】every");

let typeOfSample = typeof mixedArr[0];
let areAllsameType = mixedArr.every((element) => typeof element === typeOfSample);
console.log(areAllsameType);


// - Use the `reduce` function to find the largest number in an array.
console.log("\n【16】reduce");

let LargestNum = numberArr.reduce((max, curr) => Math.max(max, curr));
console.log(LargestNum);


// - Use the `find` function to locate the first element in an array that is a string that includes a specific word.
console.log("\n【17】find");

let firstStrIncludesIs = stringArr.find((str) => str.includes("is"));
console.log(firstStrIncludesIs);


// - Use the `some` function to check if any elements in an array are objects.
console.log("\n【18】some");

let hasObject = mixedArr.some((item) => typeof item === "object");
console.log(hasObject);


// - Use the `every` function to check if all elements in an array are integers.
console.log("\n【19】every");

let areAllInteger = numberArr.every((num) => Number.isInteger(num));
console.log(areAllInteger);


// - Use the `reduce` function to count the total number of characters in all strings in an array.
console.log("\n【20】reduce");

let accumLetterNum  = stringArr.reduce((acc, currStr) => acc + currStr.length, 0);
console.log(accumLetterNum);