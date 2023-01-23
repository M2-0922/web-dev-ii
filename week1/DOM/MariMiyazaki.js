// Q: How do you select an element with the id "my-element" using JavaScript?

document.getElementById("my-element");

// Q: Create a button in HTML and use JavaScript to change its text when it is clicked.

let myButton = document.getElementById("myButton");
myButton.addEventListener("click", myFunction);

function myFunction() {
    myButton.innerHTML = "YOU CLICKED ME!";
}

// Q: Create a list of items in HTML and use JavaScript to add a new item to the list when a button is clicked.

let myList = document.getElementById("myList");
let addButton = document.getElementById("addButton");
addButton.addEventListener("click", addFunction);

function addFunction() {
    const node = document.createElement("li");
    const textnode = document.createTextNode("New Item");
    node.appendChild(textnode);
    myList.appendChild(node);
}

// Q: Create a form in HTML with a text input and a submit button. Use JavaScript to display the value of the text input when the form is submitted.

let myInput = document.getElementById("myInput");
let submitButton = document.getElementById("submitButton");
submitButton.addEventListener("click", displayFunction);

function displayFunction() {
    console.log(myInput.value);
    alert("Your input was " + myInput.value);
}

// ###### Medium:
// Q: How do you change the text of an element with the class "my-class" using JavaScript?
document.getElementsByClassName("my-class").innerHTML = "A new paragraph";

// ###### Hard:
// Q: How do you add a new element to the DOM and then remove it after 3 seconds using JavaScript?
let autoDeletePara = document.createElement("p");
autoDeletePara.innerHTML = "Dissappearing in 3 seconds :(";
document.body.appendChild(autoDeletePara);

setTimeout(function() {
    autoDeletePara.parentNode.removeChild(autoDeletePara);
}, 3000);