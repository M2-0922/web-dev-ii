// A: document.getElementById("my-element")

let button = document.getElementById("myButton");
button.addEventListener("click", function() {
  button.innerHTML = "I was clicked!";
});

let list = document.getElementById("myList");

let button2 = document.getElementById("addButton");

let newItemCount = 4;

button2.addEventListener("click", function() {
  let newItem = document.createElement("li");
  newItem.innerHTML = "Item " + newItemCount;
  list.appendChild(newItem);
  newItemCount++;
});

// A: document.getElementsByClassName("my-class")[0].innerHTML = "New text"

var newElement = document.createElement("p");
newElement.innerHTML = "Hello, World!";
document.body.appendChild(newElement);

setTimeout(function() {
  document.body.removeChild(newElement);
}, 3000);

// Please note that these are just examples, and there are many ways to solve these problems and other similar ones.

// Also, I should mention that for the last example, you can use remove() method instead of removeChild() method. It's more modern and compatible with most of the browsers.

setTimeout(function() {
  newElement.remove();
}, 3000);

