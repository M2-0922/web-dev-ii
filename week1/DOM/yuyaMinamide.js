/**
 * Q1: How do you select an element with the id "my-element" using JavaScript?
 */
let element = document.querySelector("#my-element");

/**
 * Q2: Create a button in HTML and use JavaScript to change its text when it is clicked.
 */
let button = document.getElementById("testChangeButton");
button.addEventListener("click", function () {
	button.innerHTML = "Hello!";
});

/**
 * Q3: Create a list of items in HTML and use JavaScript to add a new item to the list when a button is clicked.
 */
let addButton = document.getElementById("addButton");
let myList = document.getElementById("myList");

addButton.addEventListener("click", function () {
	let newItem = document.createElement("li");
	newItem.innerHTML = "Item ";
	myList.appendChild(newItem);
});

/**
 * Q4: Create a form in HTML with a text input and a submit button. Use JavaScript to display the value of the text input when the form is submitted.
 */
let textForm = document.getElementById("textForm");
let output = document.getElementById("output");

textForm.addEventListener("submit", function (event) {
	event.preventDefault(); // prevent the form from submitting
	let inputText = document.getElementById("inputText").value;
	output.innerHTML = "You put: " + inputText;
});

/**
 * Q5: How do you change the text of an element with the class "my-class" using JavaScript?
 */
document.getElementsByClassName("my-class").innerHTML = "Hello World!";

/**
 * Q6 : How do you add a new element to the DOM and then remove it after 3 seconds using JavaScript?
 */
let createdDiv = document.createElement("div");
createdDiv.innerHTML = "Im gonna hide after 3sec ....";
document.body.appendChild(createdDiv);

setTimeout(function () {
	createdDiv.parentNode.removeChild(createdDiv);
}, 3000);
