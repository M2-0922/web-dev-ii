// arrays
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



// - Use the `find` function to locate the first element in an array that satisfies a certain condition.
let firstNumberOver20 = numberArr.find(n => n > 20);
console.log(firstNumberOver20);


// - Use the `some` function to determine if any elements in an array satisfy a certain condition.
let hasHello = stringArr.some(str => str === "hello");
console.log(hasHello);


// - Use the `every` function to check if all elements in an array satisfy a certain condition.
let allAdults = objectArr.every(object => object.age >= 19);
console.log(allAdults);


// - Use the `reduce` function to sum all elements in an array.
let sumOfNumbers = numberArr.reduce((acc, curr) => acc + curr);
console.log(sumOfNumbers);


// - Use the `find` function to locate the first object in an array that has a specific property value.
let firstOddNumber = numberArr.find(n => n % 2 === 1);
console.log(firstOddNumber);


// - Use the `some` function to check if any objects in an array have a specific property value.
let hasJane = objectArr.some(object => object.name === "Jane");
console.log(hasJane);


// - Use the `every` function to check if all objects in an array have a specific property value.
let allOverThreeLetters = stringArr.every(str => str.length >= 3);
console.log(allOverThreeLetters);


// - Use the `reduce` function to concatenate all elements in an array into a single string.
let sumOfAge = objectArr.reduce((sum, object) => sum + object.age, 0);
console.log(sumOfAge);


// - Use the `find` function to locate the first element in an array that is greater than a certain value.
let firstPersonOver40 = objectArr.find(object => object.age >= 40);
console.log(firstPersonOver40.name);


// - Use the `some` function to check if any elements in an array are even numbers.
let anyEven = numberArr.some(n => n % 2 === 0);
console.log(anyEven);


// - Use the `every` function to check if all elements in an array are unique.
let theLetterJ = "J";
let allHasJ = objectArr.every(obj => obj.name.includes(theLetterJ));
console.log(allHasJ);


// - Use the `reduce` function to find the product of all elements in an array.





// - Use the `find` function to locate the first object in an array that has a specific property set to true.
let firstEvenNumberLessThan50 = numberArr.find(n => n % 2 === 0 && n < 50);
console.log(firstEvenNumberLessThan50);


// - Use the `some` function to check if any objects in an array have a property set to null.
let anyOdd = numberArr.some(n => n % 2 === 1);
console.log(anyOdd);


// - Use the `every` function to check if all elements in an array are of the same type.
let theLetterA = "a";
let allHasA = objectArr.every(obj => obj.name.includes(theLetterA));
console.log(allHasA);


// - Use the `reduce` function to find the largest number in an array.





// - Use the `find` function to locate the first element in an array that is a string that includes a specific word.
let firstOddNumberMoreThan24 = numberArr.find(n => n % 2 === 1 && n > 24);
console.log(firstOddNumberMoreThan24);


// - Use the `some` function to check if any elements in an array are objects.
let anyNumberMoreThan60 = numberArr.some(n => n > 60);
console.log(anyNumberMoreThan60);


// - Use the `every` function to check if all elements in an array are integers.
let noSeniors = objectArr.every(object => object.age <= 65);
console.log(noSeniors);


// - Use the `reduce` function to count the total number of characters in all strings in an array.




