An `async` function is a special type of function in JavaScript that returns a Promise and can be `await`ed. `async` functions make it easy to write asynchronous code that is more readable and easier to understand compared to traditional callback-based approaches.

Here's an example of an `async` function:

```js
async function getData() {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    // The await keyword is used to wait for a Promise. It can only be used inside an async function.
    return data;
    // its return a Promise
  } catch (error) {
    console.error(error);
  }
}

getData()
  .then((data) => {
    console.log(data);
  });
```

In this example, the `async` function getData returns a Promise that resolves with the data from the API. The `await` operator is used to wait for the Promise returned by fetch to resolve, and then the Promise returned by `response.json()` is awaited to get the JSON data from the response. If an error occurs, it is caught and logged.

<!-- Do i need to use Promise if i use async function?

You don't have to use `Promises` when you use `async` functions, but they are closely related. `async` functions themselves return Promises, and you can use `await` inside an async function to wait for a Promise to resolve.

In other words, async functions are built on top of Promises and provide a more convenient syntax for writing `asynchronous` code. When you use async functions, you can `await` the result of an `asynchronous` operation, making your code look and behave more like synchronous code.

So, if you're using `async` functions, you don't have to worry about using Promises directly. However, it's good to have a basic understanding of Promises, since they form the foundation of `async` functions. -->

```js
async function myDisplay() {  
    // The Promise object represents the eventual completion (or failure) of an asynchronous operation, and its resulting value.
  let myPromise = new Promise((resolve, reject) => {
    // The resolve() function is used when you want your promise to succeed, and reject() when you want it to fail.
    resolve("I love You !!");  
  });  
    // The await operator is used to wait for a Promise. It can only be used inside an async function.   
  let displayMessage = await myPromise;
    // The getElementById() method returns the element that has the ID attribute with the specified value.
  let display = document.getElementById("display");
  if (display) {
    // The innerText property sets or returns the text content of the specified node, and all its descendants.
    display.innerText = displayMessage;
  } else {
    console.error("No element with the id 'display' found in the document");
  }
}
// Function call
myDisplay();
```