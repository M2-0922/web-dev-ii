// console.log("Hello TS!");

let firstName: string = "John";
let lastName: string = "Doe";

let age: number = 27;

let isWorking: any = true;

console.log(firstName);
console.log(lastName);
console.log(age);
console.log(isWorking);

isWorking = "Hello World";

console.log(isWorking);

let numArr: number[] = [1,2,3,4,5,6];

let stringArr: string[] = ["Hello", "world", "whats", "upp"];

let booleanArr: boolean[] = [true, true, false, false];

let mixArr: any[] = [123, "asd", true, false, {}];

let car: object = {
    make: "Ford", modal: "Mustang", year: 2020, seats: [[1,1], [1,1]],
};

function greeting(name: string, age: number) : string {
    return `Hello ${name}, you are ${age} years old! Bye!`;
}

console.log(greeting(firstName, age));
