window.addEventListener("load", () => {
    let avatar = document.getElementById("avatar");
    let name = document.getElementById("name")
    let search = document.getElementById("search");
    let location = document.getElementById("location");

    fetchProfile("kubilaycakmak").then((response) => {
        displayProfile(response)
    }).then(() => {
        fetchFollowers("kubilaycakmak").then((response) => {
            displayFollowers(response)
        })
    })
    
    search.addEventListener("keyup", (ev) =>  {
        if(ev.code == "Enter"){
            fetchProfile(search.value).then((response) => {
                displayProfile(response)
            }).then(() => {
                fetchFollowers(search.value).then((response) => {
                    displayFollowers(response)
                })
            })
        }
    })

    function displayProfile(profile) {
        avatar.src = profile.data.avatar_url;
        name.innerText = profile.data.name;
        location.innerText = profile.data.location;
    }

    function displayFollowers(followers) {
        document.getElementById("followers").innerHTML = "";
        followers.data.forEach((follower) => {
            
            let followerCard = document.createElement("div");
            followerCard.classList.add("followers-card");
            followerCard.classList.add("card");
            followerCard.classList.add("col-3");
            followerCard.classList.add("m-2");

            followerCard.innerHTML =
            `
            <div class="card" style="width: 18rem;">
                <img class="card-img-top" src="${follower.avatar_url}" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">${follower.login}</h5>
                    <p class="card-text">${follower.type}</p>
                </div>
            </div>
            `
            document.getElementById("followers").appendChild(followerCard);
        })
    }

    async function fetchProfile(username){
        try {
            return await axios.get(`https://api.github.com/users/${username}`);
        } catch (error) {
            console.log(error);
        }
    }

    async function fetchFollowers(username) {
        try {
            return await axios.get(`https://api.github.com/users/${username}/followers`);
        } catch (error) {
            console.log(error);
        }
    }
})

