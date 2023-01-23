###### Easy:

Q: How do you select an element with the id "my-element" using JavaScript?


A: document.getElementById()


Q: Create a button in HTML and use JavaScript to change its text when it is clicked.

```js
<button id="myButton">Click me</button>
```

A:

function change()
{
    document.getElementById("myButton").innerHTML="Asghari";
}


Q: Create a list of items in HTML and use JavaScript to add a new item to the list when a button is clicked.

```js
<ul id="myList">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
<button id="addButton">Add item</button>
```

A:
const button = document.getElementById("addButton")
button.onclick = function addButton() {
const list = document.getElementById("myList")
const element = document.createElement('li');
element.innerHTML = "Item 4";

list.appendChild(element)
}

Q: Create a form in HTML with a text input and a submit button. Use JavaScript to display the value of the text input when the form is submitted.

```js
<form id="myForm">
  <input type="text" id="myInput">
  <input type="submit" value="Submit">
</form>
```

A:
const submit = document.getElementById("myForm")
submit.onsubmit = function myInput(e) {
e.preventDefault()
const element = document.createElement('div');
const input = document.getElementById("myInput")
element.innerHTML = input.value;
document.body.append(element)
}

###### Medium:

Q: How do you change the text of an element with the class "my-class" using JavaScript?

A:
```js
document.getElementsByClassName("my-class")[0].innerHTML = "new";
```
###### Hard:

Q: How do you add a new element to the DOM and then remove it after 3 seconds using JavaScript?

A:
```js
const element = document.createElement('p');
document.body.append(element)
element.innerHTML = "mustafa";
 setTimeout(() => {
     element.remove();
  }, 3000);
```