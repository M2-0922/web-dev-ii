// Q: How do you select an element with the id "my-element" using JavaScript?
document.getElementById("my-element");

// Q: Create a button in HTML and use JavaScript to change its text when it is clicked.
const myButton = document.getElementById("myButton");

myButton.onclick = function () {
  this.innerText = "clicked!!";
};

const myList = document.getElementById("myList");
const addButton = document.getElementById("addButton");

addButton.onclick = function () {
  const listLen = myList.children.length;
  const newLi = document.createElement("li");
  newLi.innerText = "Item " + (listLen + 1);
  myList.appendChild(newLi);
};

// Q: Create a form in HTML with a text input and a submit button. Use JavaScript to display the value of the text input when the form is submitted.
const myForm = document.getElementById("myForm");

myForm.onsubmit = function (e) {
  e.preventDefault();
  const myInput = document.getElementById("myInput");
  const myResult = document.getElementById("myResult");
  myResult.innerText = myInput.value;
};

// How do you change the text of an element with the class "my-class" using JavaScript?
const myClass = document.getElementsByClassName("my-class");
myClass[0].innerHTML = "myClass";

// Q: How do you add a new element to the DOM and then remove it after 3 seconds using JavaScript?
const newEl = document.createElement("p");
newEl.innerText = "This element will be removed after 3 sec";
const interval = document.getElementById("interval");
interval.appendChild(newEl);
setTimeout(() => {
  interval.removeChild(newEl);
}, 3000);
