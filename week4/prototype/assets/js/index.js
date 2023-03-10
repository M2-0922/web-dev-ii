const key = "api-key-here";
const model = new Model();
let type = "image";
let page = 1;
let childsOfRadio = document.querySelectorAll("input[type='radio']");
let favs = JSON.parse(localStorage.getItem("favs")) || [];
let list = document.getElementById("photo-grid-id");
let count = document.getElementById("fav-count");
count.innerHTML = favs.length;

document.getElementById("btnradio1").addEventListener("click", () => {
  type = document.getElementById("btnradio1").value;
  console.log(type);
});

document.getElementById("btnradio3").addEventListener("click", () => {
  type = document.getElementById("btnradio3").value;
  console.log(type);
});

if (model.getData() == undefined) {
  document.getElementById("show-more-btn").style.visibility = "hidden";
}

document.getElementById("search-btn").addEventListener("click", () => {
  let query = document.getElementById("search-input").value;
  list.innerHTML = "";
  getPhotos(query, 1, type);
});

document.getElementById("search-input").addEventListener("keyup", (ev) => {
  if (ev.code == "Enter") {
    let query = document.getElementById("search-input").value;
    list.innerHTML = "";
    getPhotos(query, 1, type);
  }
});

document.getElementById("show-more-btn").addEventListener("click", () => {
  let query = document.getElementById("search-input").value;
  page += 1;
  getPhotos(query, page, type);
});

function getPhotos(query, page, type) {
  let api = new API(
    `https://pixabay.com/api/${
      type == "videos" ? type + "/" : ""
    }?key=${key}&per_page=5`
  );
  api
    .callAPI("&q=" + query + "&page=" + page)
    .then((data) => {
      model.setData(data);
      console.log(model.getData());
    })
    .finally(() => {
      if (favs.length > 0) {
        favs.forEach((item) => {
          model.setSingleFavorite(item.id);
        });
      }
      displayPhotos(model.getData().hits, type);
    });
}

function displayPhotos(arr, type) {
  arr.forEach((item) => {
    list.innerHTML += `
    <div class="col-md-4 col-sm-6 col-xs-12 p-2 position-relative">
      <button
        onclick="setFavorite(${item.id})"
        class="btn btn-dark position-absolute"
        style="top: 15px; right: 15px; z-index: 2"
      >
        <i class="bi bi-heart${item.isFavorite ? "-fill" : ""}"></i>
      </button>
      ${
        type == "videos"
          ? `<video
        src="${item.videos.tiny.url}"
        class="placeholder-glow card-img img-fluid h-100 object-fit-cover"
        autoplay
        muted
      ></video
      >`
          : `<img
        src="${item.largeImageURL}"
        class="card-img img-fluid h-100 object-fit-cover"
        alt="${item.largeImageURL}"
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
        <h5 class="card-title text-white">${item.user}</h5>
        <p class="card-text text-white">${item.tags}</p>
        <p class="card-text text-white">
          <small>${item.likes} times liked</small>
        </p>
      </div>
    </div>
    `;
  });
  document.getElementById("show-more-btn").style.visibility = "visible";
}

function setFavorite(id) {
  let existingFavs = favs.find((fav) => fav.id == id);

  if (existingFavs) {
    favs = favs.filter((fav) => fav.id !== id);
    count.innerHTML--;
  } else {
    item = model.getSingleData(id);
    favs.push(item);
    count.innerHTML++;
  }
  model.setSingleFavorite(id);
  localStorage.setItem("favs", JSON.stringify(favs));
  list.innerHTML = "";
  displayPhotos(model.getData().hits, type);
}
