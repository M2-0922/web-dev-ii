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

// 1
let first = numberArr.find((number) => number > 24);

//2
let isEven = numberArr.some(num => num % 2 === 0);

//3
let value = numberArr.every(number => num % 2 ===0);

//4
let sumWithInitial = numberArr.reduce((accumulator, currentValue) => accumulator + currentValue);

//5
let finding = stringArr.find((word) => word === String);

//6
let hasAge = objectArr.some(obj => obj.age === 35);

//7
let allHaveAge = objectArr.every(obj => obj.hasOwnProperty('age'));

//8
let result = stringArr.reduce((name, age) => name + ' ' + age);

//9
let firstGreaterThanFive = numberArr.find(num => num > 5);

//10
const hasEven = numberArr.some(num => num % 2 === 0);

//11
const isEveryUnique = numberArr.every((item, index, self) => self.indexOf(item) === index);

//12
const product = numberArr.reduce((acc, curr) => acc * curr, 1);

//13
const resultAct = numberArr.find(obj => obj.active === true);

//14
const hasNull = numberArr.some(obj => obj.prop === null);

//15
const checkType = stringArr.every((element) => typeof String === typeof String[0]);

//16
const largestNumber = numberArr.reduce((max, current) => {
  return Math.max(max, current);
});

//17
const stringFinder = stringArr.find(str => str.includes("hello"));

//18
const checked = numberArr.every(num => number.isInteger(num));

//19
const hasObjects = numberArr.some(item => typeof item === "object" && item !== null);

//20
const totalCharCount = numberArr.reduce((acc, str) => {
  return acc + str.length;
}, 0)














