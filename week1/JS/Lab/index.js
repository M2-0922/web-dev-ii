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

//Q1
console.log(numberArr.find((num) => num % 2 === 0));

//Q2
console.log(numberArr.some((num) => num % 2 === 1));

//Q3
console.log(numberArr.every((num) => num > 0));

//Q4
console.log(numberArr.reduce((acc, cur) => acc + cur));

//Q5
console.log(stringArr.find((val) => val === "world"));

//Q6
console.log(stringArr.some((val) => val === "world"));

//Q7
console.log(stringArr.every((val) => val === "world"));

//Q8
console.log(stringArr.reduce((acc, cur) => acc + " " + cur));

//Q9
console.log(numberArr.find((num) => num > 44));

//Q10
console.log(numberArr.some((num) => num % 2 === 0));

//Q11
let areAllUnique = numberArr.every((val, index, arr) => {
	return arr.indexOf(val) === index;
});
console.log(areAllUnique);

//Q12
console.log(numberArr.reduce((acc, cur) => acc * cur));

//Q13
console.log(objectArr.find((obj) => obj.age === 30));

//Q14
console.log(objectArr.some((obj) => obj.age === null));

//Q15
console.log(mixedArr.every((val, arr) => typeof val === typeof arr[0]));

//Q16
let largestNumber = numberArr.reduce((largest, current) => {
	return current > largest ? current : largest;
}, numberArr[0]);
console.log(largestNumber);

//Q17
let word = "world";
let foundElement = mixedArr.find((element) => {
	return typeof element === "string" && element.includes(word);
});
console.log(foundElement);

//Q18
let hasObject = mixedArr.some((element) => typeof element === "object");
console.log(hasObject);

//Q19
console.log(numberArr.every((element) => Number.isInteger(element)));

//Q20
console.log(stringArr.reduce((acc, curr) => acc + curr.length, 0));
