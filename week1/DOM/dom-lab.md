###### Easy:

Q: How do you select an element with the id "my-element" using JavaScript?

<<<<<<< HEAD
=======
Answer: 
```js
document.getElementById("my-element");

document.querySelector("#my-element");
```

>>>>>>> c48aee23348e82c3fc3e21833c1e5bc62aa91aa9
Q: Create a button in HTML and use JavaScript to change its text when it is clicked.

```js
<button id="myButton">Click me</button>
```
Answer:

```js

// first way (event listener way)
let button = document.getElementById("myButton");

button.addEventListener("click", function(){
  button.innerHTML = "Clicked!"
});

// second way, function way

function clickAndChange(){
  let button = document.getElementById("myButton");
  button.innerHTML = "Clicked!"
}

// html
<button onClick="clickAndChange()" id="myButton">Click me</button>
```

Q: Create a list of items in HTML and use JavaScript to add a new item to the list when a button is clicked.

```js
<ul id="myList">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>

<button id="addButton">Add item</button>
```
Answer:

```js
let list = document.getElementById("myList");
let button = document.getElementById("addButton");
let counter = 4;

button.addEventListener("click", () => {
  let newListItem = document.createElement("li");
  newListItem.innerHTML = "Item " + counter;
  list.appendChild(newListItem);
  counter++;
})
```

Q: Create a form in HTML with a text input and a submit button. Use JavaScript to display the value of the text input when the form is submitted.

```js
<form id="myForm">
  <input type="text" id="myInput">
  <input type="submit" value="Submit">
</form>
```

Answer: 
```js
let form = document.getElementById("myForm");
let textInput = document.getElementById("myInput");

let container = document.createElement("div");
document.body.appendChild(container)

form.addEventListener("submit", (event) => {
    event.preventDefault();

    let p = document.createElement("p");
    
    p.innerHTML = textInput.value;
    container.appendChild(p);
    
    textInput.value = "";
})
```

###### Medium:

Q: How do you change the text of an element with the class "my-class" using JavaScript?

```js
document.getElementByClassName("my-class")[0].innerHTML = "asdada";

document.querySelector(".my-class").innerHTML = "asdajdjas";

document.querySelector(".my-class").innerText = "asdajdjas";
```

###### Hard:

Q: How do you add a new element to the DOM and then remove it after 3 seconds using JavaScript?

```js
let newElement = document.createElement("p"); // <p></p>
newElement.innerHTML = "item"; //<p>item</p>
document.body.appendChild(newElement); // body > p

setTimeout(function () {
  document.body.removeChild(newElement); // delete p element from body after 3 seconds.
}, 3000);
```
