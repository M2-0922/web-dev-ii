### Javascript Test

Just a quick test to test your javascript understanding.

###### 1- What is ES6?

ES6 stands for ECMAScript 6.

ECMAScript (European Computer Manufacturers Association Script) is a scripting language based on JavaScript,it was created to standardize JavaScript, and ES6 is the 6th version of ECMAScript.

###### 2- Name 3 examples of ES6 features.

1. One of the features is called Arrow Functions. It provides a more concise syntax for writing function expressions by removing the "function" and "return" keywords.

Arrow functions are defined using the fat arrow => notation. When there is only one parameter, the parenthesis is skipped in this case. However, if there are multiple expressions in the function body, t we need to wrap it with curly braces "{}". We also need to use the "return" statement to return the required value.

2. Another feature in ES6 is Promises. Promises are used for asynchronous execution. A Promise acts as a container for future values and it avoid all the problems associated with the callback. We can use promise with the arrow function as demonstrated below.

const promise = new Promise((resolve,reject) => {....});

3. Classes are introduced in ES6 which make it simpler to create objects, implement inheritance by using the "extends" keyword and also reuse the code efficiently.

In ES6, we can declare a class using the new "class" keyword followed by the name of the class.

class UserProfile {  
 constructor(firstName, lastName) {
this.firstName = firstName;
this.lastName = lastName;  
 }

getName() {  
 console.log(`The Full-Name is ${this.firstName} ${this.lastName}`);  
 }
}
let obj = new UserProfile('John', 'Smith');
obj.getName();

###### 3- What is the difference between let and const?

Variables declared with the let keyword can be reassigned in the future.
Variables declared with the const keyword cannot be reassigned in the future.

###### 4- How do you access object values? Give 3 examples

1.Dot property accessor: object.property
2.Square brackets property accessor: object['property']
3.Object destructuring: const { property } = object

###### 5- What does setInterval and setTimeout do?

setInterval() invokes one continuously at a designated time while SetTimeout() calls a passed-in function once after a specified delay.

###### 6- What are promises?

Promises are one of the ways we can deal with asynchronous operations in JavaScript. When we define a promise in JavaScript, it will be resolved when the time comes, or it will get rejected.For example, when we request data from the server by using a Promise, it will be in pending mode until we receive our data.If we achieve to get the information from the server, the Promise will be resolved successfully. But if we don’t get the information, then the Promise will be in the rejected state.

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

async function getAndPrintQuote() {
try {
const quote = await getQuote();
console.log(quote);
} catch (err) {
console.log(err);
}
}

###### 8- Convert this code to arrow function.

```js
function greeting(firstname, lastname) {
  return `Hello ${firstname} ${lastname}`;
}
// after this line,
```

const greeting = (firstname, lastname) => `Hello ${firstname} ${lastname}`;

###### 9- Explain what a callback function is.

A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.

###### 10- What does the functions pop and push do to an array?

The pop() method removes an item from the end of an array, whereas the push() method adds an item to the end of an array.

###### 11- What is the expected answer to this code?

```js
let string = "";
let object = { a: 1, b: 2, c: 3 };

for (let key in object) {
  string += object[key];
}

console.log(string);
```

Ans is 6.

###### 12- What data type would Array.map() and Array.filter() return?

array

###### 13- What data type would Array.includes() and Array.some() return?

array

###### 14- Write down the 4 main methods of rest api

The4 main methods are GET, POST, PUT, and DELETE.

###### 15- What is the difference between JSON and a JavaScript object?

JSON cannot contain functions. JavaScript objects can contain functions. JSON can be created and used by other programming languages. JavaScript objects can only be used in JavaScript.
