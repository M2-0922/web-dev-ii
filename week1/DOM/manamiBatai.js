// Q: How do you select an element with the id "my-element" using JavaScript?
// document.getElementById("my-element");

// Q: Create a button in HTML and use JavaScript to change its text when it is clicked.
const btn = document.getElementById("myButton");
btn.addEventListener("click", function () {
  console.log("clicked");
  btn.textContent = "Clicked!";
});

// Q: Create a list of items in HTML and use JavaScript to add a new item to the list when a button is clicked.
const list = document.querySelector(".list");
btn.addEventListener("click", function () {
  let newList = document.createElement("li");
  newList.className = "newList";
  newList.innerHTML = "D";
  document.body.appendChild(newList);
});

// Q: Create a form in HTML with a text input and a submit button. Use JavaScript to display the value of the text input when the form is submitted.
const myForm = document.getElementById("myForm");
myForm.addEventListener("click", function () {
  // console.log("clicked");
  let myInput = document.getElementById("myInput").value;
  let inputValue = document.createElement("p");
  inputValue.className = "inputValue";
  inputValue.innerHTML = myInput;
  document.body.appendChild(inputValue);
});

// Q: How do you change the text of an element with the class "my-class" using JavaScript?
// document.querySelector(".my-class").textContent = "change";

// Q: How do you add a new element to the DOM and then remove it after 3 seconds using JavaScript?
let newElement = document.createElement("p");
// newElement.className = "newElement";
newElement.innerHTML = "New Element Created!";
document.body.appendChild(newElement);
console.log(newElement);

window.addEventListener("load", function () {
  setTimeout(() => {
    newElement.remove();
  }, 3000);
});
