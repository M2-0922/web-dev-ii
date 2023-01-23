// Easy:
// Q: How do you select an element with the id "my-element" using JavaScript?

document.getElementById("my-element");

// Q: Create a button in HTML and use JavaScript to change its text when it is clicked.
// <button id="myButton">Click me</button>

const MyButton = document.querySelector("#myButton");

const changeTextOnClick = () => {
  MyButton.innerHTML = "You cliked me!";
};

MyButton.addEventListener("click", changeTextOnClick);

// Q: Create a list of items in HTML and use JavaScript to add a new item to the list when a button is clicked.
// <ul id="myList">
//   <li>Item 1</li>
//   <li>Item 2</li>
//   <li>Item 3</li>
// </ul>
// <button id="addButton">Add item</button>

const MyList = document.querySelector("#myList");
const AddButton = document.querySelector("#addButton");

const addItem = () => {
  const Element = document.createElement("li");
  Element.innerHTML = "New Item";
  MyList.appendChild(Element);
};

AddButton.addEventListener("click", addItem);

// Q: Create a form in HTML with a text input and a submit button. Use JavaScript to display the value of the text input when the form is submitted.
// <form id="myForm">
//   <input type="text" id="myInput">
//   <input type="submit" value="Submit">
// </form>

const handleSubmit = () => {
  const Value = document.getElementById("myInput").value;
  const SubmitText = document.createElement("p");
  SubmitText.innerHTML = Value;
  document.getElementById("myForm").appendChild(SubmitText);
};

document.getElementById("myForm").addEventListener("submit", handleSubmit);

// Medium:
// Q: How do you change the text of an element with the class "my-class" using JavaScript?

const Text = document.getElementById("text");

if (Text.className === "my-class") {
  Text.innerHTML = "my-class";
} else {
  Text.innerHTML = "no-class";
}

// Hard:
// Q: How do you add a new element to the DOM and then remove it after 3 seconds using JavaScript?

const Element = document.createElement("p");
Element.innerHTML = "I am going home in 3 seconds";
document.body.appendChild(Element);

const removeElement = () => {
  document.body.removeChild(Element);
};

setTimeout(removeElement, 3000);
