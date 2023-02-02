### Javascript Test

Just a quick test to test your javascript understanding.

###### 1- What is ES6?

ES6, In short of ECMAScript 6, is a latest version of Javascript standard, which is latest version as of 2023.

###### 2- Name 3 examples of ES6 features.

 - New types of Variables : let, const
 - Arrow Function
 - classes


###### 3- What is the difference between let and const?

let can be re-asigned, but only in the block scope situation.
const is the variable that cannot be re-asigned.

###### 4- How do you access object values? Give 3 examples

1. Using dot (e.g. object.value)
2. Using square bracket (e.g. object['value'])
3. Using Object destructuring (e.g.
  const hero = {
    object: 'value'
  };
  const { object } = value;
 )

###### 5- What does setInterval and setTimeout do?

These are the JS methods that allow users to set the interval and timeout, from the triggered time by users.

###### 6- What are promises?

Promise would returns the result or action, just after asynchronous action has done.

###### 7- Convert this async function to async/await

```js
getQuote().then((quote) => {
  console.log(quote);
}).catch(function(err) {
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

greeting = (firstname, lastname) => {
  return `Hello ${firstname} ${lastname}`;
}

```

###### 9- Explain what a callback function is.

Callback function is a type of functions that passes to another function as argment.

###### 10- What does the functions pop and push do to an array?

Push : Used to add an element to the end of an array.
Pop : Used to delete the last element/item of the array

###### 11- What is the expected answer to this code?

```js
let string = "";
let object = { a: 1, b: 2, c: 3 };

for (let key in object) {
  string += object[key];
}

console.log(string);
```
"123"

###### 12- What data type would Array.map() and Array.filter() return?

boolean

###### 13- What data type would Array.includes() and Array.some() return?

boolean

###### 14- Write down the 4 main methods of rest api

GET
PUT
POST
DELETE

###### 15- What is the difference between JSON and a JavaScript object?

JSON cannot use function (Javascript can use). JSON is mainly used to store and transmit data to other language etc, but Javascript is not used like that.