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
let allUnder100 = numberArr.every(element => element < 100);
console.log(allUnder100); //true

let allUnder50 = numberArr.every(element => element < 50);
console.log(allUnder50); //false


// Use the `reduce` function to sum all elements in an array.
let sumElement1 = numberArr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sumElement1); //115

let sumElement2 = objectArr.reduce((accumulator, currentValue) => accumulator + currentValue.age, 0);
console.log(sumElement2); //175

function sumElement3(array) {
    let newArr = array.filter(obj => Number.isFinite(obj));
    return newArr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}
console.log(sumElement3(mixedArr)); //17


// Use the `find` function to locate the first object in an array that has a specific property value.
let firstNameHasL = objectArr.find(object => object.name.includes("l"));
console.log(firstNameHasL); //{ name: 'Jill', age: 40 }


// Use the `some` function to check if any objects in an array have a specific property value.
let anyNameHasB = objectArr.some(object => object.name.includes("b"));
console.log(anyNameHasB); //false

let anyNameHasC = objectArr.some(object => object.name.includes("c"));
console.log(anyNameHasC); //true


// Use the `every` function to check if all objects in an array have a specific property value.
let allObjectHasName = objectArr.every(object => object.hasOwnProperty("name"));
console.log(allObjectHasName); //true


// Use the `reduce` function to concatenate all elements in an array into a single string.
let concatenateAllElement = stringArr.reduce((accumulator, currentValue) => accumulator + currentValue, "");
console.log(concatenateAllElement); //helloworldthisisastring


// Use the `find` function to locate the first element in an array that is greater than a certain value.
let firstGreaterThan10 = numberArr.find(element => element > 10);
console.log(firstGreaterThan10); //11


// Use the `some` function to check if any elements in an array are even numbers.
let anyEvenNumber = numberArr.some(element => element % 2 == 0);
console.log(anyEvenNumber); //true


// Use the `every` function to check if all elements in an array are unique.
let allUnipueNumber = numberArr.every((value, index, array) => array.indexOf(value) === index);
console.log(allUnipueNumber); //true
// -------------------------example-------------------------
const numbers1 = [1, 2, 3, 4, 5];
let check1 = numbers1.every((value, index, array) => array.indexOf(value) === index);
// numbers.indexOf(1) -> 0 === 0 true
// numbers.indexOf(2) -> 1 === 1 true
// numbers.indexOf(3) -> 2 === 2 true
// numbers.indexOf(4) -> 3 === 3 true
// numbers.indexOf(5) -> 4 === 4 true
console.log(check1); //true

const numbers2 = [5, 4, 3, 2, 3];
let check2 = numbers2.every((value, index, array) => array.indexOf(value) === index);
// numbers.indexOf(5) -> 0 === 0 true
// numbers.indexOf(4) -> 1 === 1 true
// numbers.indexOf(3) -> 2 === 2 true
// numbers.indexOf(2) -> 3 === 3 true
// numbers.indexOf(3) -> 2 === 4 false
console.log(check2); //false
// ---------------------------------------------------------


// Use the `reduce` function to find the product of all elements in an array.
let productAllElement = numberArr.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
console.log(productAllElement); //1315600


// Use the `find` function to locate the first object in an array that has a specific property set to true.
let firstPersonSatisfies = objectArr.find(obj => obj.name.length > 3 && obj.age > 30);
console.log(firstPersonSatisfies); //{ name: 'Jack', age: 35 }


// Use the `some` function to check if any objects in an array have a property set to null.
let anyNullproperty = objectArr.some(obj => obj.name == "" || objectArr.age == "");
console.log(anyNullproperty); //false


// Use the `every` function to check if all elements in an array are of the same type.
let allElementSameType1 = objectArr.every(obj => typeof(obj) === typeof(objectArr[0]));
console.log(allElementSameType1); //true

let allElementSameType2 = mixedArr.every(obj => typeof(obj) === typeof(mixedArr[0]));
console.log(allElementSameType2); //false


// Use the `reduce` function to find the largest number in an array.
let findLargestNumber = numberArr.reduce((accumulator, currentValue) => accumulator > currentValue ? accumulator : currentValue, "");
console.log(findLargestNumber); //52

let findS = numberArr.reduce((accumulator, currentValue) => accumulator < currentValue ? accumulator : currentValue);
console.log(findS); //4


// Use the `find` function to locate the first element in an array that is a string that includes a specific word.
let firstElementHasIs = stringArr.find(word => word.includes("is"));
console.log(firstElementHasIs); //this


// Use the `some` function to check if any elements in an array are objects.
let anyObjInArray = mixedArr.some(element => typeof element == "object");
console.log(anyObjInArray); //true
// or
console.log(Array.isArray(mixedArr));


// Use the `every` function to check if all elements in an array are integers.
let allElementInt = numberArr.every(element =>  Number.isInteger(element));
console.log(allElementInt); //true


// Use the `reduce` function to count the total number of characters in all strings in an array.
let countCharactersNumber1 = stringArr.reduce((accumulator,currentValue) => Number(accumulator) + currentValue.length, "");
console.log(countCharactersNumber1);
// or
function countCharactersNumber2(array) {
    let concatenateAllElement = array.reduce((accumulator, currentValue) => accumulator + currentValue, "");
    return concatenateAllElement.length;
};
console.log(countCharactersNumber2(stringArr)); //23


