### Javascript Test

Just a quick test to test your javascript understanding.

###### 1- What is ES6?

ES6 stands for ECMAScript 6. ECMAScript was created to standardize JavaScript, and ES6 is the 6th version of ECMAScript, it was published in 2015, and is also known as ECMAScript 2015.

###### 2- Name 3 examples of ES6 features.


Promises
Classes
Modules

###### 3- What is the difference between let and const?

const is a signal that the identifier won't be reassigned. let is a signal that the variable may be reassigned .

###### 4- How do you access object values? Give 3 examples

Dot property accessor: object. property.
Square brackets property accessor: object['property']
Object destructuring: const { property } = object.

###### 5- What does setInterval and setTimeout do?

The setTimeout() method is used to call a function after a certain period of time. The setInterval() Javascript method is used to call a function repeatedly at a specified interval of time.

###### 6- What are promises?

A Promise is a proxy for a value not necessarily known when the promise is created. It allows you to associate handlers with an asynchronous action's eventual success value or failure reason.

###### 7- Convert this async function to async/await

```js
getQuote().then((quote) => {
  console.log(quote);
}).catch(function(err) {
  console.log(err);
});
// after this line,

async function printQuote() {
  const quote = await getQuote();
  console.log(quote);
} 

```
  
###### 8- Convert this code to arrow function.

```js
function greeting(firstname, lastname) {
  return `Hello ${firstname} ${lastname}`;
}
// after this line,

const greeting = (firstname, lastname) => { 
  return `Hello ${firstname} ${lastname}`;
}

```

###### 9- Explain what a callback function is.

A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.

###### 10- What does the functions pop and push do to an array?

The pop() method in JavaScript removes an item from the end of an array, whereas the push() method adds an item to the end of an array.

###### 11- What is the expected answer to this code?

```js
let string = "";
let object = { a: 1, b: 2, c: 3 };

for (let key in object) {
  string += object[key];
}

console.log(string);

"123"

```

###### 12- What data type would Array.map() and Array.filter() return?

Array

###### 13- What data type would Array.includes() and Array.some() return?

The argument can be of any primitive data type (excluding Symbol) and functions.

###### 14- Write down the 4 main methods of rest api

GET, POST, PUT, PATCH, DELETE.

###### 15- What is the difference between JSON and a JavaScript object?

JSON cannot contain functions. JavaScript objects can contain functions. JSON can be created and used by other programming languages. JavaScript objects can only be used in JavaScript.
