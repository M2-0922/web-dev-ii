// Q: How do you select an element with the id "my-element" using JavaScript?
    // A: document.getElementById("my-element");

// Q: Create a button in HTML and use JavaScript to change its text when it is clicked.
/*     A: <button id="myButton">Click me</button>
    const button = document.getElementById("myButton");
    button.addEventListener('click', function() {
        button.innerHTML = "changed text"
    }) */

/* Q: Create a list of items in HTML and use JavaScript to add a new item to the list when a button is clicked */
/*     A: <ul id="myList">
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
        </ul>
        <button id="addButton">Add item</button>
    const list = document.getElementById("myList");
    const button = document.getElementById("addButton");
    const newItem = document.createElement("li");
    button.addEventListener('click', function() {
        document.list.appendChild(newItem);
        newItem.innerHTML = "Item 4"
    }) */ 

/* Q: Create a form in HTML with a text input and a submit button. Use JavaScript to display the value of the text input when the form is submitted. */
/*     A: <form id="myForm">
            <input type="text" id="myInput">
            <input type="submit" value="Submit">
        </form>
        const submit = document.getElementById("myForm");
        const value = document.getElementById("myInput");
        submit.addEventListener("click", function() {
            console.log(value);
        }) */

/* Q: How do you change the text of an element with the class "my-class" using JavaScript? */
/*         A: let x = document.querySelector(".my-class");
        x.innerHTML = "Changed Text"; */

/* Q: How do you add a new element to the DOM and then remove it after 3 seconds using JavaScript? */
/*         A: document.createElement("p");
        const element = document.querySelector("p");
        function removeElement() {
            element.remove();
        }
        setTimeout(removeElement, 3000); */

