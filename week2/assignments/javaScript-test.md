### Javascript Test

Just a quick test to test your javascript understanding.

###### 1- What is ES6?
A:6th version of ECMAScript that give us a lot of great new features.

###### 2- Name 3 examples of ES6 features.
*Block-scoped variables (and constants) without hoisting.
Example:
    for (let i = 0; i < a.length; i++) {
    let x = a[i]
    …
    }
    for (let i = 0; i < b.length; i++) {
    let y = b[i]
    …
    }

    let callbacks = []
    for (let i = 0; i <= 2; i++) {
    callbacks[i] = function () { return i * 2 }
    }

    callbacks[0]() === 0
    callbacks[1]() === 2
    callbacks[2]() === 4

*Arrow Functions (more expressive closure syntax.)
Example:
    odds  = evens.map(v => v + 1)
    pairs = evens.map(v => ({ even: v, odd: v + 1 }))
    nums  = evens.map((v, i) => v + i)
    
*Class Inheritance (more intuitive, OOP-style and boilerplate-free inheritance.)

    class Rectangle extends Shape {
    constructor (id, x, y, width, height) {
        super(id, x, y)
        this.width  = width
        this.height = height
        }
    }
    class Circle extends Shape {
    constructor (id, x, y, radius) {
        super(id, x, y)
        this.radius = radius
        }
    }


###### 3- What is the difference between let and const?
We can re-declared a *let* variable while a *const* once we assigned a value for it cannot be changed

###### 4- How do you access object values? Give 3 examples
1. Dot property accessor:
  nameObject.keyName

2. Square brackets property accessor
  nameObject['keyName']

3. Object destructuring  
const { keyName } = nameObject;
###### 5- What does setInterval and setTimeout do?
Time intervals(time events)
*setInterval*: function used to call another functioon after specific period of time but executes the functiono only once.
*setTimeout*: function calls the required code after the specific time interval provided, again and again

###### 6- What are promises?
An object that represents the eventual completion or failure of a asynchronous operation.
When we create a Promise we pass in a function. This function will always accept two parameters, 'resolve' , and 'reject'.

###### 7- Convert this async function to async/await

```js
getQuote().then((quote) => {
  console.log(quote);
}).catch(function(err) {
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

function greeting(firstname,lastname =>'Hello ${firstname} ${lastname}');

```

###### 9- Explain what a callback function is.
Function that is called by another function which takes the first function as a parameter.This is called by a "event".

###### 10- What does the functions pop and push do to an array?
*Pop*function removes the last element from an array and returns it.
*Push* function adds an element to the end of an array.

###### 11- What is the expected answer to this code?

```js
let string = "";
let object = { a: 1, b: 2, c: 3 };

for (let key in object) {
  string += object[key];
}

console.log(string);
```
---Output: 6----

###### 12- What data type would Array.map() and Array.filter() return?
Simpler and shorter code instead of a loop
*Array.map()* returns us a update array of the original array. 
*Array.filter()* filter the array according with the condition applied and returns us the update array in a new one

###### 13- What data type would Array.includes() and Array.some() return?
 It returns a truthy value (boolean). 
 Check if any of the elements match the given condition

###### 14- Write down the 4 main methods of rest api
*GET*
*POST*
*PULL*
*DELETE*
###### 15- What is the difference between JSON and a JavaScript object?
In JSON all keys must be quoted.
Also the data type are restricted to the following values:
string
number
object
array
  A literal as:
true
false
null
