let favs = JSON.parse(localStorage.getItem("favs")) || [];
let list = document.getElementById("photo-grid-id");
let count = document.getElementById("fav-count");
count.innerHTML = favs.length;

if (favs.length == 0) {
  list.innerHTML =
    "<p class='text-md-start text-center'>Sorry, There is no favorite yet!</p>";
}

favs.forEach((element) => {
  list.innerHTML += `
    <div class="col-md-4 col-sm-6 col-xs-12 p-2 position-relative">
      <button
        onclick="removeFavorite(${element.id})"
        class="btn btn-dark position-absolute"
        style="top: 15px; right: 15px; z-index: 2"
      >
        Remove
      </button>
      <span class="badge bg-dark mx-1 position-absolute" style="bottom:0; right:0" id="fav-count">${
        element.type
      }</span>
      ${
        element.videos
          ? `<video
        src="${element.videos.tiny.url}"
        class="placeholder-glow card-img img-fluid h-100 object-fit-cover"
        autoplay
        muted
      ></video
      >`
          : `<img
        src="${element.largeImageURL}"
        class="card-img img-fluid h-100 object-fit-cover"
        alt="${element.largeImageURL}"
      />`
      }
      <div
        class="m-2 position-absolute"
        style="
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 24px;
          background: rgba(0, 0, 0, 0.2);
        "
      >
        <h5 class="card-title text-white">${element.user}</h5>
        <p class="card-text text-white">${element.tags}</p>
        <p class="card-text text-white">
          <small>${element.likes} times liked</small>
        </p>
      </div>
    </div>
    `;
});

function removeFavorite(id) {
  favs = favs.filter((item) => item.id !== id);
  localStorage.setItem("favs", JSON.stringify(favs));
  location.reload();
}
