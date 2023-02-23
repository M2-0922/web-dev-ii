// 1- Declare a variable `myString` with the value "Hello, TypeScript!" and log it to the console.
let myString: string = "Hello, TypeScript!";
console.log(myString);

//2- Declare a function `multiplyNumbers` that takes two numbers as arguments and returns their product.
function multiplyNumbers(x: number, y: number): number {
	return x * y;
}
console.log(multiplyNumbers(3, 5));

//3- Declare a variable `myArray` with the values 1, 2, and 3 as an array of numbers.
const myArray: number[] = [1, 2, 3];
console.log(myArray);

//4- Declare a function `reverseString` that takes a string as an argument and returns the reverse of the string.
function reverseString(value: string): string {
	return value.split("").reverse().join("");
}
console.log(reverseString("apple"));

//5- Declare a variable `myObject` with the properties name, age, and email of type string.
let myObject: {
	name: string;
	age: string;
	email: string;
};
myObject = {
	name: "yuya",
	age: "26",
	email: "test@test.com",
};
console.log(myObject);

//6- Declare a function `isEven` that takes a number as an argument and returns true if the number is even, and false otherwise.
function isEven(num: number): boolean {
	return num % 2 === 0;
}
console.log(isEven(7));

//7- Declare a function `removeDuplicates` that takes an array of numbers as an argument and returns an array with the duplicates removed.
function removeDuplicates(numbers: number[]): number[] {
	return Array.from(new Set(numbers));
}
console.log(removeDuplicates([1, 1, 2, 2, 3, 3, 4, 5]));

//8- Declare a variable `myBoolean` with the value true or false, depending on whether 5 is greater than 2.
let myBoolean: boolean;
5 > 2 ? (myBoolean = true) : (myBoolean = false);
console.log(myBoolean);

//9- Declare a function `capitalizeString` that takes a string as an argument and returns the string with the first letter capitalized.
function capitalizeString(words: string): string {
	if (words.length === 0) {
		return words;
	}
	const capitalChar = words.charAt(0).toUpperCase();
	const restOfword = words.slice(1);
	return capitalChar + restOfword;
}
console.log(capitalizeString("yuya"));
