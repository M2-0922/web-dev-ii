## Answer-1

1- Declare a variable `myString` with the value "Hello, TypeScript!" and log it to the console.

```ts
let myString: string = "Hello, TypeScript!";
console.log(myString);
```

2- Declare a function `multiplyNumbers` that takes two numbers as arguments and returns their product.

```ts
function multiplyNumbers(a: number, b: number): number {
    return a * b;
}
```

3- Declare a variable `myArray` with the values 1, 2, and 3 as an array of numbers.

```ts
let myArray: number[] = [1, 2, 3];
```

4- Declare a function `reverseString` that takes a string as an argument and returns the reverse of the string.

```ts
function reverseString(str: string): string {
    return str.split("").reverse().join("");
}
```

5- Declare a variable `myObject` with the properties name, age, and email of type string.

```ts
let myObject = {
    name: string,
    age: string,
    email: string
};
```

6- Declare a function `isEven` that takes a number as an argument and returns true if the number is even, and false otherwise.

```ts
function isEven(num: number): boolean {
    if (num % 2 === 0) {
        return true;
    } else {
        return false;
    }
}
```

7- Declare a function `removeDuplicates` that takes an array of numbers as an argument and returns an array with the duplicates removed.

```ts
function removeDuplicates(arr: number[]): number[] {
    let newArr: number[] = [];
    arr.forEach((x) => {
        if (!newArr.includes(x)) {
            newArr.push(x);
        }
    })
    return newArr;
}
```

8- Declare a variable `myBoolean` with the value true or false, depending on whether 5 is greater than 2.

```ts
let myBoolean: boolean;
if (5 > 2) {
    myBoolean = true;
} else {
    myBoolean = false;
}
```

9- Declare a function `capitalizeString` that takes a string as an argument and returns the string with the first letter capitalized.

```ts
function capitalizeString(str: string): string {
    let firstLetter: string = str.charAt(0);
    let remainingLetters: string = str.substring(1);
    return firstLetter.toUpperCase() + remainingLetters;
}
```