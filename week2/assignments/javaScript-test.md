### Javascript Test

Just a quick test to test your javascript understanding.

###### 1- What is ES6?

ES6 is a newer version of JavaScript.

###### 2- Name 3 examples of ES6 features.

1. let and const keywords
2. Arrow functions
3. Template Literals

###### 3- What is the difference between let and const?

let can be reassigned, but const cannot.

###### 4- How do you access object values? Give 3 examples

1. object.property
2. object['property']
3. {property} = object

###### 5- What does setInterval and setTimeout do?

setInterval: call a function at specified intervals.
setTimeout: execute a function after a delay.

###### 6- What are promises?

Promises are way to handle asynchronous operations.

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
const getQuote = async function () {
  try {
    const quote = await getQuote();
    console.log(quote);
  } catch (err) {
    console.log(err);
  }
};
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

It is a function passed as an argument to another function.

###### 10- What does the functions pop and push do to an array?

pop: remove an item from the end of an array.
push: add an item to the end of an array.

###### 11- What is the expected answer to this code?

```js
let string = "";
let object = { a: 1, b: 2, c: 3 };

for (let key in object) {
  string += object[key];
}

console.log(string);
```

Answer:123

###### 12- What data type would Array.map() and Array.filter() return?

Array

###### 13- What data type would Array.includes() and Array.some() return?

Boolean

###### 14- Write down the 4 main methods of rest api

1. GET
2. POST
3. PUT
4. DELETE

###### 15- What is the difference between JSON and a JavaScript object?

JavaScript objects can contain functions, but JSON cannot.
