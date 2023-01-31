// var xhr = new XMLHttpRequest();
// xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
// xhr.onreadystatechange = function() {
//   if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
//     console.log(JSON.parse(this.responseText));
//   }
// };
// xhr.send();

// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.error(error));

window.addEventListener("load", () => {
    // let list = document.getElementById("post-title-list");
    // let fetchButton = document.getElementById("fetch-button");
    let avatar = document.getElementById("avatar");
    let name = document.getElementById("name")
    let search = document.getElementById("search");
    let location = document.getElementById("location");

    search.addEventListener("keyup", (ev) => {
        if(ev.code == "Enter"){
            fetchProfile(search.value);
        }
    })

//     <div class="card" style="width: 18rem;">
    //   <img class="card-img-top" src="..." alt="Card image cap">
    //   <div class="card-body">
    //     <h5 class="card-title">Card title</h5>
    //     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    //     <a href="#" class="btn btn-primary">Go somewhere</a>
    //   </div>
    // </div>

    function fetchProfile(username){
        axios.get(`https://api.github.com/users/${username}`)
            .then((res) => {
                avatar.src = res.data.avatar_url;
                name.innerHTML = res.data.name;
                location.innerHTML = res.data.location;

                if(!res.data.bio) bio.innerHTML = "no bio added"
                else bio.innerHTML = res.data.bio;
            })
            .catch((err) => {
                console.log(err);
        })
    }
})

