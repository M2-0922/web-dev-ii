let favs = JSON.parse(localStorage.getItem("favs")) || [];
let favCount = document.getElementById("fav-count");

favCount.innerHTML = favs.length;

document.getElementById("photo-grid-id").innerHTML = "";

if (favs.length == 0) {
  document.getElementById("photo-grid-id").innerHTML =
    "<h1 class='text-center'>No favorites yet</h1>";
}

favs.forEach((fav) => {
  document.getElementById("photo-grid-id").innerHTML += `
  <div class="col-md-4 col-sm-6 col-xs-12 p-2 position-relative" style="height: 220px">
  <img src="${
    fav.largeImageURL
  }" class="card-img img-fluid h-100 object-fit-cover" alt="${
    fav.largeImageURL
  }">
            <div class="m-2 position-absolute" style="top:0; bottom:0; left:0; right:0; padding:24px; background: rgba(0,0,0, 0.2);">
                <h5 class="card-title text-white">${fav.user}</h5>
                <p class="card-text text-white">${fav.tags}</p>
                <p class="card-text text-white"><small>${
                  fav.likes
                } times liked</small></p>
                <i class="bi bi-heart${
                  fav.isFavorite ? "-fill" : ""
                }" style="color: white" id="fav" onclick="setFav(${
    fav.id
  })"></i>
            </div>
        </div>`;
});
