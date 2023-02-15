let numbers = [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5];
let positiveNumbers = numbers.filter(number => number >= 0);
let squares = positiveNumbers.map(number => number * number);
console.log(squares);

let people = [{ name: "Alice", age: 30, city: "New York" }, { name: "Bob", age: 40, city: "Los Angeles" }, { name: "Charlie", age: 25, city: "New York" }];
let newYorkers = people.filter(person => person.city === "New York");
let names = newYorkers.map(person => person.name);
console.log(names);

let timeoutId = setTimeout(() => {
    console.log("Hello, World!");
}, 3000);
  
// later in the code
clearTimeout(timeoutId);
  