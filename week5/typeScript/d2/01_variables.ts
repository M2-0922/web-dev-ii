// string
let greeting = "Hello World";
greeting = "Joel Doe";
greeting.toLowerCase();

let greeting1: string = "Hello";
greeting1 = "World";
// greeting1 = true; cannot do this bof type.
greeting1.toLowerCase();

// number
let age: number;

age = 20;
age = 50;
age.toFixed();

// boolean
let isPaid: boolean = false;

// isPaid = "false";
isPaid = true;

// any - bad practise to use to much
let hello: any;

hello = 20;
hello = "String";
hello = true;


export {}