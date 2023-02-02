//- Use the `find` function to locate the first element in an array that satisfies a certain condition.
let numberArr = [11, 52, 23, 4, 25];
const firstElemnt = numberArr.find(function (number) {
    return number < 11;
})
console.log(firstElemnt);

//- Use the `some` function to determine if any elements in an array satisfy a certain condition.
let stringArr = ["hello", "world", "this", "is", "a", "string"];
const certain = stringArr.some(function (inspect) {
    return inspect.indexOf("is") == -1;
})
console.log(certain);

//- Use the `every` function to check if all elements in an array satisfy a certain condition.
let objectArr = [
    { name: "John", age: 25 },
    { name: "Jane", age: 30 },
    { name: "Jack", age: 35 },
    { name: "Jill", age: 40 },
    { name: "Joe", age: 45 }
];

const senior = objectArr.every(function (number) {
    return number.age > 60;
})
console.log(senior);