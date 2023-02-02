### Javascript Test

Just a quick test to test your javascript understanding.

###### 1- What is ES6?

- A new version of JavaScript, which has new features for its syntax and methods.

###### 2- Name 3 examples of ES6 features.

1. Spread Operator ...
2. Let and Const keywords
3. Arrow functions

###### 3- What is the difference between let and const?

- A variable declared by let can be reassigned to a new value, but one declared by const cannot.

###### 4- How do you access object values? Give 3 examples

1. Use a dot .
2. Use square brackets []
3. Use object destructing

###### 5- What does setInterval and setTimeout do?

- setInterval keeps executing a callback function passed for its argument at a specified interval.
- setTimeout executes a callback function passed for its argument once.

###### 6- What are promises?

- A special object that promises you to give the desired data or error later

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

const Res = await getQuote();
console.log(Res);
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

- A function that is passed to another function and called later.

###### 10- What does the functions pop and push do to an array?

- pop removes the last element of an array
- push append an element to the end of an array

###### 11- What is the expected answer to this code?

```js
let string = "";
let object = { a: 1, b: 2, c: 3 };

for (let key in object) {
  string += object[key];
}

console.log(string);
```

- Output : 123

###### 12- What data type would Array.map() and Array.filter() return?

- Array

###### 13- What data type would Array.includes() and Array.some() return?

- Boolean

###### 14- Write down the 4 main methods of rest api

1. Create
2. Read
3. Update
4. Delete

###### 15- What is the difference between JSON and a JavaScript object?

- JavaScript objects are used in JavaScript, but JSON is used to pass data between servers or cliants and servers
