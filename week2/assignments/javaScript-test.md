### Javascript Test

Just a quick test to test your javascript understanding.

###### 1- What is ES6?

-   ES6 is 6th version of ECMAScript which is published in 2015.

###### 2- Name 3 examples of ES6 features.

-   Allow function
-   Module
-   Ternary operator

###### 3- What is the difference between let and const?

-   Basically when you define something with let you can change value, but you can't do it with const

###### 4- How do you access object values? Give 3 examples

-   Dot property accessor
-   Square brackets property
-   Object destructuring

###### 5- What does setInterval and setTimeout do?

-   setTimeout: it allows us to run a function once after interval of time
-   setInterval: it allows us to run a function repeatedly, starting after the interval of time, then repeating continuously at that interval.

###### 6- What are promises?

Promise is used for asynchronous processing and is a temporary value until the value is returned.

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
try {
	const quote = await getQuote();
	console.log(quote);
} catch (err) {
	console.log(err);
}
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

-   There are two function. one function is passed as an argument to another function and is executed after some kind of event.

###### 10- What does the functions pop and push do to an array?

-   You can remove last element from an array and returns that element.

###### 11- What is the expected answer to this code?

```js
let string = "";
let object = { a: 1, b: 2, c: 3 };
for (let key in object) {
	string += object[key];
}
console.log(string);

6;
```

###### 12- What data type would Array.map() and Array.filter() return?

-   Both of Array type

###### 13- What data type would Array.includes() and Array.some() return?

-   Both of booleans

###### 14- Write down the 4 main methods of rest api

-   GET
-   POST
-   PUT
-   DELETE

###### 15- What is the difference between JSON and a JavaScript object?

-   JSON is text-based. JavaScript object is an actual object. when you use some data by JSON file you need to parse into a JavaScript object.
