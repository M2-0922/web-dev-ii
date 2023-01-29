let numberArr = [11, 52, 23, 4, 25];
let stringArr = ["hello", "world", "this", "is", "a", "string"];
let objectArr = [
  { name: "John", age: 25 },
  { name: "Jane", age: 30 },
  { name: "Jack", age: 35 },
  { name: "Jill", age: 40 },
  { name: "Joe", age: 45 }
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
    "array"
];

// Use the `find` function to locate the first element in an array that satisfies a certain condition.
let firstEvenNumber = numberArr.find(element => element % 2 == 0);
console.log(firstEvenNumber); //52

// Use the `some` function to determine if any elements in an array satisfy a certain condition.
let anyTwentyPlace = numberArr.some(element => element < 30 && element > 19);
console.log(anyTwentyPlace); //true
let anyThirtyPlace = numberArr.some(element => element < 40 && element > 29);
console.log(anyThirtyPlace); //false

// Use the `every` function to check if all elements in an array satisfy a certain condition.

// Use the `reduce` function to sum all elements in an array.

// Use the `find` function to locate the first object in an array that has a specific property value.
let firstNameHasL = objectArr.find(object => object.name.includes("l"));
console.log(firstNameHasL); //{ name: 'Jill', age: 40 }

// Use the `some` function to check if any objects in an array have a specific property value.
let anyNameHasB = objectArr.some(object => object.name.includes("b"));
console.log(anyNameHasB); //false
let anyNameHasC = objectArr.some(object => object.name.includes("c"));
console.log(anyNameHasC); //true

// Use the `every` function to check if all objects in an array have a specific property value.

// Use the `reduce` function to concatenate all elements in an array into a single string.

// Use the `find` function to locate the first element in an array that is greater than a certain value.
let firstGreaterThan10 = numberArr.find(element => element > 10);
console.log(firstGreaterThan10); //11

// Use the `some` function to check if any elements in an array are even numbers.
let anyEvenNumber = numberArr.some(element => element % 2 == 0);
console.log(anyEvenNumber); //true

// Use the `every` function to check if all elements in an array are unique.

// Use the `reduce` function to find the product of all elements in an array.

// Use the `find` function to locate the first object in an array that has a specific property set to true.
let firstPersonSatisfies = objectArr.find(obj => obj.name.length > 3 && obj.age > 30);
console.log(firstPersonSatisfies); //{ name: 'Jack', age: 35 }

// Use the `some` function to check if any objects in an array have a property set to null.
let anyNullproperty = objectArr.some(obj => obj.name == "" || objectArr.age == "");
console.log(anyNullproperty); false

// Use the `every` function to check if all elements in an array are of the same type.

// Use the `reduce` function to find the largest number in an array.

// Use the `find` function to locate the first element in an array that is a string that includes a specific word.
let firstElementHasIs = stringArr.find(word => word.includes("is"));
console.log(firstElementHasIs); //this

// Use the `some` function to check if any elements in an array are objects.
let anyObjInArray = mixedArr.some(element => typeof element == "object");
console.log(anyObjInArray); //true
// console.log(Array.isArray(mixedArr)); //true

// Use the `every` function to check if all elements in an array are integers.

// Use the `reduce` function to count the total number of characters in all strings in an array.
