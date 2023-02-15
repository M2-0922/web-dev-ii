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
    <span class="badge bg-white text-dark position-absolute" style="right:-3px; top:-3px;">${
      fav.videos ? "video" : "image"
    }</span>
        ${
          fav.videos
            ? `<video src="${fav.videos.tiny.url}" class="placeholder-glow card-img img-fluid h-100 object-fit-cover" autoplay loop></video>`
            : `<img src="${fav.webformatURL}" class="card-img img-fluid h-100 object-fit-cover" alt="${fav.tags}">`
        }
            <div class="m-2 position-absolute" style="top:0; bottom:0; left:0; right:0; padding:24px; background: rgba(0,0,0, 0.2);">
                <h5 class="card-title text-white">${fav.user}</h5>
                <p class="card-text text-white">${fav.tags}</p>
                <p class="card-text text-white"><small>${
                  fav.likes
                } times liked</small></p>
                <button class="btn btn-dark" onclick="removeFav(${
                  fav.id
                })">Remove</button>
            </div>
        </div>`;
});

function removeFav(id) {
  favs = favs.filter((fav) => fav.id !== id);
  localStorage.setItem("favs", JSON.stringify(favs));
  location.reload();
}
