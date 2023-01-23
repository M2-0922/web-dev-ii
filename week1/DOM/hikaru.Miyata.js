###### Easy:

Q: How do you select an element with the id "my-element" using JavaScript?
  document.getElementById("my-element");
Q: Create a button in HTML and use JavaScript to change its text when it is clicked.

```js
<button id="myButton" onclick="changeText">Click me</button>

function changeText(){
   document.getElementById("myButton").innerHTML = "changed"
}

```
Q: Create a list of items in HTML and use JavaScript to add a new item to the list when a button is clicked.

```js
<ul id="myList">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
<button id="addButton">Add item</button>

let list = document.getElementById("myList");
let btn = document.getElementById("addButton");

function addList("click",()) {
  let li = document.createElement(li);
  li.textContent = "item 4";
  list.appendChild(li);
}
```
Q: Create a form in HTML with a text input and a submit button. Use JavaScript to display the value of the text input when the form is submitted.

```js
<form id="myForm">
  <input type="text" id="myInput">
  <input type="submit" value="Submit">
</form>
```

###### Medium:

Q: How do you change the text of an element with the class "my-class" using JavaScript?

###### Hard:

Q: How do you add a new element to the DOM and then remove it after 3 seconds using JavaScript?

