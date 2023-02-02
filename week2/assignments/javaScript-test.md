### Javascript Test

Just a quick test to test your javascript understanding.

###### 1- What is ES6?
It is the newest version of Javascript, it makes writting in JS easier, as it add some features like
arrow functions,template literals, destructuring, and modules.

###### 2- Name 3 examples of ES6 features.
Template literals, destructuring, and modules

###### 3- What is the difference between let and const?
The variable "let" can be changed during the code, also it has a scope range, meaning it can be changed
inside the "{}" to write a function. On the other hand, "const" cannot be change.


###### 4- How do you access object values? Give 3 examples
You can access by the "do not notation": console.log(object.name);
 "Bracket notation": console.log(object["name"]);
 "Object destructuring": const object = {name: 'John', age: 30};
const {name} = object;
console.log(name);

###### 5- What does setInterval and setTimeout do?
setInterval: it executes a function in repeatedly time intervals
setTimeout: runs a function after a specified amount of time

###### 6- What are promises?
Conditions of an asynchronous operation that must be filled before running the code

###### 7- Convert this async function to async/await

```js
getQuote().then((quote) => {
  console.log(quote);
}).catch(function(err) {
  console.log(err);
});
// after this line,

try {
    const quote = await getQuote();
    console.log(quote);
  } catch (err) {
    console.log(err);
  }
```
  
###### 8- Convert this code to arrow function.

```js
function greeting(firstname, lastname) {
  return `Hello ${firstname} ${lastname}`;
}
// after this line,

function greeting(firstname,lastname =>'Hello ${firstname} ${lastname}');

```

###### 9- Explain what a callback function is.
It is a function that is called after a certain task is done.

###### 10- What does the functions pop and push do to an array?
 "pop" function removes the last element from an array and returns it.
 "push" function adds an element to the end of an array.

###### 11- What is the expected answer to this code?

```js
let string = "";
let object = { a: 1, b: 2, c: 3 };

for (let key in object) {
  string += object[key];
}

console.log(string);
```
expected output: 6

###### 12- What data type would Array.map() and Array.filter() return?
Array.map() returns a new array containing the results of calling the provided function on every element in the original array.
Array.filter() returns a new array containing only the elements from the original array that pass the test implemented by the provided function.


###### 13- What data type would Array.includes() and Array.some() return?
Array.includes() method returns a boolean value, indicating whether the specified element can be found in the array or not.

Array.some() method also returns a boolean value, indicating whether at least one element in the array passes the test implemented by the provided function.

###### 14- Write down the 4 main methods of rest api
"get", "post", "put", "delete".

###### 15- What is the difference between JSON and a JavaScript object?
JSON is used to represent easy or complex structures that can be understood easily by humans and machines.

A JavaScript object is an unordered collection of key-value pairs, similar to a dictionary in other programming languages. It can hold any valid JavaScript data type, including other objects and arrays.