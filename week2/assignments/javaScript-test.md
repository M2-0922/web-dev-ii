### Javascript Test

Just a quick test to test your javascript understanding.

###### 1- What is ES6?

New version of JavaScript came out a few year ago.
It allows you to use new helpful functions.

###### 2- Name 3 examples of ES6 features.

let and const
arrow function
Multi-line Strings

###### 3- What is the difference between let and const?

while you can reassign the variable for let, you can't do that got const.

###### 4- How do you access object values? Give 3 examples

Dot property accessor: object.property
Square brackets property accessor: object['property']
Object destructuring: const { property } = object

###### 5- What does setInterval and setTimeout do?

setTimeout allows us to run a function once after the interval of time. setInterval allows us to run a function repeatedly, starting after the interval of time, then repeating continuously at that interval

###### 6- What are promises?

A Promise is a proxy for a value not necessarily known when the promise is created. It allows you to associate handlers with an asynchronous action's eventual success value or failure reason

###### 7- Convert this async function to async/await

```js
getQuote()
  .then((quote) => {
    console.log(quote);
  })
  .catch(function (err) {
    console.log(err);
  });
// after this line,
```

###### 8- Convert this code to arrow function.

```js
function greeting(firstname, lastname) {
  return `Hello ${firstname} ${lastname}`;
}
// after this line,

const greeting = (firstname, lastname) => `Hello ${firstname} ${lastname}`;
```

###### 9- Explain what a callback function is.

A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.

###### 10- What does the functions pop and push do to an array?

The pop() method in JavaScript removes an item from the end of an array, whereas the push() method adds an item to the end of an array. The returning value of the pop() method is the item that is removed from the array.

###### 11- What is the expected answer to this code?

```js
let string = "";
let object = { a: 1, b: 2, c: 3 };

for (let key in object) {
  string += object[key];
}

console.log(string);

123;
```

###### 12- What data type would Array.map() and Array.filter() return?

String

###### 13- What data type would Array.includes() and Array.some() return?

boolean

###### 14- Write down the 4 main methods of rest api

get/put/delete/post

###### 15- What is the difference between JSON and a JavaScript object?

JSON cannot contain functions. JavaScript objects can contain functions. JSON can be created and used by other programming languages. JavaScript objects can only be used in JavaScript.
