// Q: How do you select an element with the id "my-element" using JavaScript?
let element = document.querySelector('#my-element');


// Q: Create a button in HTML and use JavaScript to change its text when it is clicked.
// ```js
<button id="myButton">Click me</button>
```
const myButton = document.getElementById('myButton');
myButton.addEventListener('click', ()=> {
  myButton.textContent = 'You Clicked me!';
})


// Q: Create a list of items in HTML and use JavaScript to add a new item to the list when a button is clicked.
// 
// <ul id="myList">
//   <li>Item 1</li>
//   <li>Item 2</li>
//   <li>Item 3</li>
// </ul>
// <button id="addButton">Add item</button>
// ```
let myList = document.getElementById('myList');
let addButton = document.getElementById('addButton');

addButton.addEventListener("click", () => {
  let text = document.createElement("li");
  text.textContent = 'Item new';
  myList.appendChild(text);
})


// Q: Create a form in HTML with a text input and a submit button. Use JavaScript to display the value of the text input when the form is submitted.
// ```js
// <form id="myForm">
//   <input type="text" id="myInput">
//   <input type="submit" id="button" value="Submit">
// </form>
// ```

button.addEventListener("click", () => {
  let myInput = document.getElementById('myInput').value;
  let text = document.createElement("p");
  console.log(text);
  text.textContent = myInput;
  document.body.appendChild(text);
})


// Q: How do you change the text of an element with the class "my-class" using JavaScript?
document.querySelector('.my-class').textContent = 'any words';

// Q: How do you add a new element to the DOM and then remove it after 3 seconds using JavaScript?
  let newElement = document.createElement("p");
  newElement.innerHTML = 'Item new';
  document.body.appendChild(newElement);
  console.log(newElement);
  
  addEventListener("load", () => {
    setTimeout(() => {
    newElement.remove(); 
  }, 3000)
});