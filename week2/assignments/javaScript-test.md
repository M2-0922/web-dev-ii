### Javascript Test

Just a quick test to test your javascript understanding.

###### 1- What is ES6?
```
JavaScript ES6 is the latest vresion of JavaScript and has got the new syntax and useful features.
```

###### 2- Name 3 examples of ES6 features.
```
1) "let" and "const" keywords to define variables and constants.
2) arrow functions by using the arrow notation, "=>".
3) promises to execute asynchronous executions.
```

###### 3- What is the difference between let and const?
```
The "let" keyword defines a variable that can be changeable for the later use, while the "const" keyword only defines a constant that we do not want to change the value later on.
```

###### 4- How do you access object values? Give 3 examples
```
1) object + dot "." + property
```
```js
const object = {
  one: 'value',
  two: 'second value'
};

console.log(object.one); // value
console.log(object.two); // second value
```
```
2) object + property surrounded by square brackets "[property]"
```
```js
const object = {
  one: 'value',
  two: 'second value'
};

console.log(object['one']); // value
console.log(object['two']); // second value
```
```
3) object destructuring
```
```js
const object = {
  one: 'value',
  two: 'second value'
};

const {one} = object;
const {two} = object;

console.log(one);
console.log(two);
```

###### 5- What does setInterval and setTimeout do?
```
setInterval: repeats executing a specific function set as a first parameter at regular intervals which is set as a second parameter
```
```js
setInterval(function, time);
```
```
setTimeout: executes a specific function that is set as a first parameter, "only once" after a certain period of time which you set as a second parameter
```
```js
setTimeout(function, time);
```

###### 6- What are promises?
```
Promises are used for not executing codes before the specific code completes the execution.
```

###### 7- Convert this async function to async/await

```js
getQuote().then((quote) => {
  console.log(quote);
}).catch(function(err) {
  console.log(err);
});
// after this line,

async getQuote(quote) => {
  console.log(quote);
  let error = await (err) => {
    console.log(err);
  }
}
```
  
###### 8- Convert this code to arrow function.

```js
function greeting(firstname, lastname) {
  return `Hello ${firstname} ${lastname}`;
}
// after this line,

let greeting = (firstname, lastname) => `Hello ${firstname} ${lastname}`;
```

###### 9- Explain what a callback function is.
```
A callback function is a function that is set as an argument to another function.
```

###### 10- What does the functions pop and push do to an array?
```
The pop method is used to remove the very last element from an array and returns the value.

The push method adds a new item/items to the end of an array and returns the new array's length.
```

###### 11- What is the expected answer to this code?

```js
let string = "";
let object = { a: 1, b: 2, c: 3 };

for (let key in object) {
  string += object[key];
}

console.log(string);
```
```
The expected answer is: 123
```

###### 12- What data type would Array.map() and Array.filter() return?
```
They return new arrays.
```

###### 13- What data type would Array.includes() and Array.some() return?
```
They return boolean values.
```

###### 14- Write down the 4 main methods of rest api
```
1) POST
2) PUT
3) GET
4) DELETE
```

###### 15- What is the difference between JSON and a JavaScript object?
```
The difference between JSON and a JavaScript object is that JSON cannot contain functions while a JavaScript object can.
```
