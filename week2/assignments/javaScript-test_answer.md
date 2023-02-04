### Javascript Test

Just a quick test to test your javascript understanding.

###### 1- What is ES6?
```js
It is the newer version of JavaScript
```

###### 2- Name 3 examples of ES6 features.
```js
1. let and const keywords
2. arrow Functions
3. default Parameters
```

###### 3- What is the difference between let and const?
```js
`let` is a signal that the variable may be reassigned.
`const` is a signal that the identifier won’t be reassigned.
```

###### 4- How do you access object values? Give 3 examples
```js
1. object.property
2. object['property']
3. const { property } = object
```

###### 5- What does setInterval and setTimeout do?
```js
setTimeout allows us to run a function once after the interval of time.
setInterval allows us to run a function repeatedly, starting after the interval of time, then repeating continuously at that interval.
```

###### 6- What are promises?
```js
It is a proxy for a value not necessarily known when the promise is created.
```

###### 7- Convert this async function to async/await

```js
getQuote().then((quote) => {
  console.log(quote);
}).catch(function(err) {
  console.log(err);
});
// after this line,

async function getQuote(){
	console.log(quote);
	let result = await(err) => {
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
const greeting = (firstname, lastname) => {
	`Hello ${firstname} ${lastname}`;
}

```

###### 9- Explain what a callback function is.
```js
It is  a function passed into another function as an argument, 
which is then invoked inside the outer function to complete some kind of routine or action.
```

###### 10- What does the functions pop and push do to an array?
```js
pop : removes an item from the end of an array
push : adds an item to the end of an array
```

###### 11- What is the expected answer to this code?

```js
let string = "";
let object = { a: 1, b: 2, c: 3 };

for (let key in object) {
  string += object[key];
}

console.log(string);

Answer : '123'
```

###### 12- What data type would Array.map() and Array.filter() return?
```js
array 
```

###### 13- What data type would Array.includes() and Array.some() return?
```js
boolean
```

###### 14- Write down the 4 main methods of rest api

```js
1. GET
2. POST
3. PUT
4. DELETE
```

###### 15- What is the difference between JSON and a JavaScript object?
```js
JSON cannot contain functions. 
JavaScript objects can contain functions. 
```

