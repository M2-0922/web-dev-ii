###### Easy:

Q: How do you select an element with the id "my-element" using JavaScript?
```js
let element = document.querySelector("#my-element");
```

Q: Create a button in HTML and use JavaScript to change its text when it is clicked.

```js
//Answer1
<button id="myButton" onclick="changeText()">Click me</button>
//Answer2
<button id="myButton">Click me</button>

//Answer1
function changeText() {
    var arr = [ "Snoopy", "Woodstock", "Charlie Brown", "Lucy", "Linus" ];
    var elem = arr[ Math.floor( Math.random() * arr.length ) ];
    //change button text randomly
    document.querySelector("#myButton").textContent = elem;
};

//Answer2
let myBtn = document.getElementById('myButton');
myBtn.addEventListener('click', ()=> {
  var arr = [ "Snoopy", "Woodstock", "Charlie Brown", "Lucy", "Linus" ];
  var elem = arr[ Math.floor( Math.random() * arr.length ) ];
  myBtn.textContent = elem;
})
```
Q: Create a list of items in HTML and use JavaScript to add a new item to the list when a button is clicked.

```js
<ul id="myList">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
//Answer1
<button id="addButton">Add item</button>
//Answer2
<button id="addButton" onclick="addElement()">Add item</button>

//Answer1
let list = document.getElementById('myList');
const addBtn = document.getElementById('addButton');

addBtn.addEventListener("click", () => {
    let num = document.querySelectorAll('li').length + 1;
    let newElement = document.createElement("li");
    list.style.listStyle = "none";
    newElement.textContent = 'Item ' + num;
    list.appendChild(newElement);
});
//Answer2
function addElement(){
    let num = document.querySelectorAll('li').length + 1;
    let newElement = document.createElement("li");
    list.style.listStyle = "none";
    newElement.textContent = 'Item ' + num;
    list.appendChild(newElement);
};
```
Q: Create a form in HTML with a text input and a submit button. Use JavaScript to display the value of the text input when the form is submitted.

```js
<form id="myForm">
  <input type="text" id="myInput">
  //Answer1
  <input type="submit" id="button" value="Submit">
  //Answer2
  <input type="submit" id="button" onclick="submit()">
</form>

//Answer1
document.getElementById("button").addEventListener("click", () => {
  let myInput = document.getElementById('myInput').value;
  let text = document.createElement("p");
  text.textContent = myInput;
  document.body.appendChild(text);
})

//Answer2
function submit() {
    let myInput = document.getElementById('myInput').value;
    let text = document.createElement("p");
    text.textContent = myInput;
    document.body.appendChild(text);
};
```

###### Medium:

Q: How do you change the text of an element with the class "my-class" using JavaScript?
```js
document.querySelector('.my-class').textContent = 'change words';
```
###### Hard:

Q: How do you add a new element to the DOM and then remove it after 3 seconds using JavaScript?
```js
let elem = document.createElement("p");
  elem.innerHTML = 'new element';
  document.body.appendChild(elem);

addEventListener("load", () => {
    setTimeout(() => {
      newElement.remove(); 
  }, 3000);
```js
