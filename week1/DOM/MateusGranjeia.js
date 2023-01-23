//Easy questions

document.querySelector("#my-element");


document.getElementById("my-button");
button.addEventListener("click", function() {
  button.innerHTML = "Button clicked!";
});



let newItemNumber = 3;
button.addEventListener("click", function() {
  let newItem = document.createElement("li");
  newItem.innerHTML = "Item " + newItemNumber;
  list.appendChild(newItem);
  newItemNumber++;
});


form.addEventListener("submit", function(event) {
    event.preventDefault();
    output.innerHTML = inputText.value;
  });


  //Medium


  document.getElementsByClassName();
  for (let i = 0; i < elements.length; i++) {
    elements[i].innerHTML = "New text";
  }


  //Hard

  let newElement = document.createElement("div");
  newElement.innerHTML = "Hello World";
  document.body.appendChild(newElement);
  
  setTimeout(() => {
    newElement.remove();
  },3000);