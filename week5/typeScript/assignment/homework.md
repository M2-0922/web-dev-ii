1- Declare a variable `myString` with the value "Hello, TypeScript!" and log it to the console.

const myString = "Hello, TypeScript!"
console.log(myString)

2- Declare a function `multiplyNumbers` that takes two numbers as arguments and returns their product.

function multiplyNumbers(x: number, y: number): number {
  return x + y;
}

3- Declare a variable `myArray` with the values 1, 2, and 3 as an array of numbers.

const myArray: number[] = [1, 2, 3]

4- Declare a function `reverseString` that takes a string as an argument and returns the reverse of the string.

function reverseString (str: string){
    return str.split("").reverse().join("")
}

5- Declare a variable `myObject` with the properties name, age, and email of type string.

let myObject: {
  name: string
  age: string
  email: string
}


6- Declare a function `isEven` that takes a number as an argument and returns true if the number is even, and false otherwise.

function isEven (nmb: number){
		if(nmb === true){
			return true    
    } else{
    return false
    }
}

7- Declare a function `removeDuplicates` that takes an array of numbers as an argument and returns an array with the duplicates removed.



8- Declare a variable `myBoolean` with the value true or false, depending on whether 5 is greater than 2.

const myBoolean : boolean = 5 > 2

9- Declare a function `capitalizeString` that takes a string as an argument and returns the string with the first letter capitalized.

function capitalizeString (str: string){
	return str.charAt(0).toUpperCase() + str.slice(1)
}
