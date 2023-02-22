1- Declare a variable `myString` with the value "Hello, TypeScript!" and log it to the console.

```ts
let myString: string = "Hello, TypeScript!";
console.log(myString);
```

2- Declare a function `multiplyNumbers` that takes two numbers as arguments and returns their product.

```ts
function multiplyNumbers(num1: number, num2: number): number {
	return num1 * num2;
}
```

3- Declare a variable `myArray` with the values 1, 2, and 3 as an array of numbers.

```ts
let myArray: number[] = [1, 2, 3];
```

4- Declare a function `reverseString` that takes a string as an argument and returns the reverse of the string.

```ts
function reverseString(string1: string): string {
	let resultString: string = "";
	for (let i = string1.length - 1; i >= 0; i--) {
		resultString += string1.charAt(i);
	}
	return resultString;
}
```

5- Declare a variable `myObject` with the properties name, age, and email of type string.

```ts
type typeObject = {
	name: string;
	age: string;
	email: string;
};
let myObject: typeObject = {
	name: "John",
	age: "20",
	email: "abc@com",
};
```

6- Declare a function `isEven` that takes a number as an argument and returns true if the number is even, and false otherwise.

```ts
function isEven(num: number): boolean {
	if (num % 2 == 0) {
		return true;
	} else {
		return false;
	}
}
```

7- Declare a function `removeDuplicates` that takes an array of numbers as an argument and returns an array with the duplicates removed.

```ts
function removeDuplicates(numArray: number[]): number[] {
	let resultArray: number[] = [];
	numArray.forEach((elem) => {
		if (!resultArray.includes(elem)) {
			resultArray.push(elem);
		}
	});
	return resultArray;
}
```

8- Declare a variable `myBoolean` with the value true or false, depending on whether 5 is greater than 2.

```ts
let myBoolean: boolean = 5 > 2;
```

9- Declare a function `capitalizeString` that takes a string as an argument and returns the string with the first letter capitalized.

```ts
function capitalizeString(str: string): string {
	return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}
```
