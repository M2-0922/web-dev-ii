let people = [];
let instructorDiv = document.getElementById("instructors");

async function getPeople() {
  people = [];
  let result = await axios.get("https://jsonplaceholder.typicode.com/users");

  for (let i = 0; i < 4; i++) {
    instructorDiv.innerHTML += `
    <div class="col">
        <div class="card h-100">
            <img src="${
              "https://robohash.org/" + result.data[i].name
            }" class="card-img-top img-fluid" alt="${
      result.data[i].name + " of a avatar"
    }" />
            <div class="card-body">
                <h5 class="card-title">${result.data[i].name}</h5>
                <p class="card-text">Email: ${result.data[i].email}</p>
                <p class="card-text">Website: ${result.data[i].website}</p>
            </div>
        </div>
    </div>
    `;
    console.log(result.data[i]);
  }
}

getPeople();
