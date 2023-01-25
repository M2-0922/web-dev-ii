// Q1
document.getElementById("my-element")

// Q2

const btn = document.getElementById('myButton');
btn.addEventListener('click', () => {
    btn.textContent = 'Clicked!';
})


// Q3
  const list = document.getElementById('myList');
  const addButton = document.getElementById('addButton');

  addButton.addEventListener('click', () => {

  const li = document.createElement('li');
  li.textContent = 'new Item';
  list.appendChild(li);

  })

// Q4
  let form = document.getElementById("myForm");
  let textInput = document.getElementById("myInput");

  let container = document.createElement("div");
  document.body.appendChild(container)

  form.addEventListener("submit", (event) => {
      event.preventDefault();

      let p = document.createElement("p");
      
      p.innerHTML = textInput.value;
      container.appendChild(p);
      
      textInput.value = "";
  })

// Q5
document.querySelector(".my-class").innerText = "changed";
