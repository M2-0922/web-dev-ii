### Javascript Test

Just a quick test to test your javascript understanding.

###### 1- What is ES6?
ES6 is the newer version and the second major revision of Javascript which was introduced in 2015. It is also known as ECMAScript 2015 or ECMAScript 6.

###### 2- Name 3 examples of ES6 features.
1. let and const keywords
'var' was used to declare variables in ES5, but 'let' and 'const' is newly used in ES6.

2. arrow functions
arrow functions make it easier to declare function by declaring function with fat arrow(=>) notation instead of 'function' and 'return' keywords.

3. multi-line strings
developers can define multi-line string by using back-ticks(`), it is not required to define it by each line.

###### 3- What is the difference between let and const?
Both of them cannot be re-declared and must be declared before use, have block scope. Differences between them are whether they are reassigned or not.
'let': can be reassigned.
'const': cannot be reassigned.

###### 4- How do you access object values? Give 3 examples
we can access object values by writing key name (property name) after object name and period (1) or writing key name inside a square bracket after object name (2), or declaring 'const' and identifier name inside bracket equal object name (3).

Example:
```js
const object = {
  name: 'John',
  age: 20
}
```
1. Dot property accessor
```js
object.name;
```
2. Square brackets property accessor
```js
object[name];
```
3. Object destructing
```js
const { name } = object;
```

###### 5- What does setInterval and setTimeout do?
1.setInterval
This is used to repeat function in each interval time.
```js
setInterval(function, repeatingMilliseconds);
```

2.setTimeout
This is used to execute callback function once after waiting time defined.
```js
setTimeout(function, waitingMilliseconds);
```

###### 6- What are promises?
The promise object used in an asynchronous operation. It continuously check an asynchronous function and support 2 properties (state, result). A result of the promise object change depends on its state, if it is 'pending' the result is 'undefined', if it's 'fulfilled' the result is 'value', if it's 'rejected' the result is 'error'. 
In addition, we can define a function for 4 cases that a function is successfully produced and failed, and a function is successfully consumed and failed.

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
A callback function is called from other functions. It is passed as an argument to another function. This allow us to use same function repeatedly and decrease the number of code.

###### 10- What does the functions pop and push do to an array?
pop: remove the last item in an array.
push: add new item to the end of an array.

###### 11- What is the expected answer to this code?

```js
let string = "";
let object = { a: 1, b: 2, c: 3 };

for (let key in object) {
  string += object[key];
}

console.log(string);
```
'123'

###### 12- What data type would Array.map() and Array.filter() return?
array

###### 13- What data type would Array.includes() and Array.some() return?
boolean

###### 14- Write down the 4 main methods of rest api
1. XML HttpRequest
Built-in api in Javascript. This can update a web page without reloading a page.
```js
const xhr = new XMLHttpRequest();
xhr.open('GET', 'URL');
xhr.send();
```

2. Fetch
Simple native Javascript REST API and one of the most popular JavaScript ways to send HTTP requests. This can reduce a complexity of code.
```js
fetch('URL')
  .then(response => {
    function(response);
  })
  .catch(error => {
    function(error);
  })
```
3. Axios
One of the most popular third-party packaged for sending HTTP request in Javascript. It is a promise-based HTTP client and significantly reduces the developer's work by automatically parses the received JSON data.
```js
axios.get('URL')
  .then(response => {
    function(response);
  })
  .catch(error => {
    function(error);
  })
```
4. SuperAgent
A third-party package for making high-level client HTTP requests. It is a mature and well-supported module with a broad set of features useful in handling several request tasks.
```js
superagent.get('URL')
  .then(response => {
    function(response);
  })
  .catch(error => {
    function(error);
  })
```

###### 15- What is the difference between JSON and a JavaScript object?
JSON is a lightweight data interchange format for storing and transporting data based on JavaScript. 
Features of JSON compared to Javascript are written below:
1. Property names must be double-quoted string and trailing commas are forbidden in objects and arrays
2. Leading zeros are prohibited, 'NaN' and 'Infinity' are unsupported in Numbers
3. Only double-quoted strings are allowed, 'undefined' and 'comments' are unsupported