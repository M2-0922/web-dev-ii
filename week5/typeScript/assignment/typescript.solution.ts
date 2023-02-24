
// 1- Declare a variable `myString` with the value "Hello, TypeScript!" and log it to the console.

let myString : string = "Hello, TypeScript!";
console.log(myString);

// 2- Declare a function `multiplyNumbers` that takes two numbers as arguments and returns their product.
function multiplyNumbers (a:number,b:number){
    return a*b
}
multiplyNumbers(2,3);

// 3- Declare a variable `myArray` with the values 1, 2, and 3 as an array of numbers.
const myArray: number[] =[1,2,3] ;

console.log(myArray);
// 4- Declare a function `reverseString` that takes a string as an argument and returns the reverse of the string.
 function reverseString(str:string){
// let splitString = str.split("");
// let reverseArray = splitString.reverse();
// let joinArray = reverseArray.join("");
// return joinArray
  return str.split("").reverse().join("");
 }
console.log(reverseString("みやたひかる"));
// 5- Declare a variable `myObject` with the properties name, age, and email of type string.
const myObject:{} ={//タイプ指定する必要ある？
    name:"",
    age:"",
    email:""
}
console.log(myObject);
// 6- Declare a function `isEven` that takes a number as an argument and returns true if the number is even, and false otherwise.
function isEven (num):boolean {
return num%2=== 0;
}
console.log(isEven(3));
// 7- Declare a function `removeDuplicates` that takes an array of numbers as an argument and returns an array with the duplicates removed.
let arr:number[] = [1,2,3,3,4,5]
function removeDuplicates(arr:number){
    
}
// function removeDuplicates(arr):number {
//     return Array.from(new Set(arr));
//   }
// 8- Declare a variable `myBoolean` with the value true or false, depending on whether 5 is greater than 2.



// 9- Declare a function `capitalizeString` that takes a string as an argument and returns the string with the first letter capitalized.