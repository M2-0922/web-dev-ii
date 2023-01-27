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

let sumAll = numberArr.reduce((acc, cur) => {
  return acc + cur;
}, 0);
console.log(sumAll);
