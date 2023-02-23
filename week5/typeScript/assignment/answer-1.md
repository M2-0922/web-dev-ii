1- Declare a variable `myString` with the value "Hello, TypeScript!" and log it to the console.
```js
let myString: string = "Hello, TypeScript!";
```

2- Declare a function `multiplyNumbers` that takes two numbers as arguments and returns their product.
```js
function multiplyNumbers(num1: number, num2: number): number {
    return num1 * num2;
}
```

3- Declare a variable `myArray` with the values 1, 2, and 3 as an array of numbers.
```js
let myArray: number[] = [1, 2, 3];
```

4- Declare a function `reverseString` that takes a string as an argument and returns the reverse of the string.
```js
function reverseString(str: string): string {
    let result: string = "";
    for (let i = str.length - 1; i >= 0; i--) {
        result += str.charAt(i);
    }
    return result;
}
```

5- Declare a variable `myObject` with the properties name, age, and email of type string.
```js
type typeObj = {
    name: string,
    age: string,
    email: string
};

const myObject: typeObj = {
    name: "Kate",
    age :"27",
    email: "kate@sample.com"
};
```

6- Declare a function `isEven` that takes a number as an argument and returns true if the number is even, and false otherwise.
```js
function isEven(num: number): boolean {
    if(num % 2 == 0)
        return true;
    else
        return false;
}
```

7- Declare a function `removeDuplicates` that takes an array of numbers as an argument and returns an array with the duplicates removed.
```js
function removeDuplicates(numArr: number[]): number[] {
    let newArr: number[] = numArr.filter((element, index) => numArr.indexOf(element) === index);
    return newArr;
}
```

8- Declare a variable `myBoolean` with the value true or false, depending on whether 5 is greater than 2.
```js
let myBoolean: boolean =  5 > 2;
```

9- Declare a function `capitalizeString` that takes a string as an argument and returns the string with the first letter capitalized.
```js
function capitalizeString(str: string): string{
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}
```