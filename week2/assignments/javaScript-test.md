### Javascript Test

Just a quick test to test your javascript understanding.

###### 1- What is ES6?
```
JavaScript ES6 (also known as ECMAScript 2015 or ECMAScript 6) is the newer version of JavaScript that was introduced in 2015. ECMAScript is the standard that JavaScript programming language uses.
```

###### 2- Name 3 examples of ES6 features.
```
-let and const keywords
-Arrow Functions
-Multi-line Strings
```

###### 3- What is the difference between let and const?
```
let allows to be reassigned, const doesn't allow to be reassigned.
```

###### 4- How do you access object values? Give 3 examples
```
object.prop
object['prop']
const { prop } = object
```

###### 5- What does setInterval and setTimeout do?
```
etTimeout allows us to run a function once after the interval of time. 
setInterval allows us to run a function repeatedly, starting after the interval of time, then repeating continuously at that interval.
```

###### 6- What are promises?
```
A Promise is a special JavaScript object that produces a value after an asynchronous (aka, async) operation completes successfully, or an error if it does not complete successfully due to time out, network error, and so on.
```

###### 7- Convert this async function to async/await

```js
getQuote().then((quote) => {
  console.log(quote);
}).catch(function(err) {
  console.log(err);
});
// after this line,
async function() {
  getQuote();
};
let result = await function(); 
console.log(result);
```
  
###### 8- Convert this code to arrow function.

```js
function greeting(firstname, lastname) {
  return `Hello ${firstname} ${lastname}`;
}
// after this line,

const greeting = (firstname, lastname) => {
  `Hello ${firstname} ${lastname}`;
}
```

###### 9- Explain what a callback function is.
```
A callback function is a function passed into another function as an argument
```

###### 10- What does the functions pop and push do to an array?
```
pop removes an item from the end of an array, push adds an item to the end of an array. 
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
123
```

###### 12- What data type would Array.map() and Array.filter() return?
```
a new array
```


###### 13- What data type would Array.includes() and Array.some() return?
```
a boolian value
```

###### 14- Write down the 4 main methods of rest api
```
 GET, POST, PUT, DELETE
```

###### 15- What is the difference between JSON and a JavaScript object?
```
JSON cannot contain functions. JavaScript objects can contain functions. 
JSON can be created and used by other programming languages. JavaScript objects can only be used in JavaScript.
```