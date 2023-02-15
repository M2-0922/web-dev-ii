const key = "14951209-61b2f6019e4d1a85e007275aa";
const model = new Model();
let type = "image";
let page = 1;
const childsOfRadio = document.querySelectorAll("input[type='radio']");
const list = document.getElementById("photo-grid-id");
let favs = JSON.parse(localStorage.getItem("favs")) || [];
const favCount = document.getElementById("fav-count");
favCount.innerHTML = favs.length;

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
    })
    .finally(() => {
      if (favs.length > 0) {
        favs.forEach((fav) => {
          model.setSingleFavorite(fav.id);
        });
      }

      displayPhotos(model.getData().hits, type);
      // display/render methods.
    });
}

function displayPhotos(arr, type) {
  arr.forEach((item) => {
    list.innerHTML += `
        <div class="col-md-4 col-sm-6 col-xs-12 p-2 position-relative" style="height: 220px">
      ${
        type === "videos"
          ? `<video src="${item.videos.tiny.url}" class="placeholder-glow card-img img-fluid h-100 object-fit-cover" autoplay muted></video>`
          : `<img src="${item.largeImageURL}" class="card-img img-fluid h-100 object-fit-cover" alt="${item.largeImageURL}">`
      }
            <div class="m-2 position-absolute" style="top:0; bottom:0; left:0; right:0; padding:24px; background: rgba(0,0,0, 0.2);">
                <h5 class="card-title text-white">${item.user}</h5>
                <p class="card-text text-white">${item.tags}</p>
                <p class="card-text text-white"><small>${
                  item.likes
                } times liked</small></p>
                <i class="bi bi-heart${
                  item.isFavorite ? "-fill" : ""
                }" style="color: white" id="fav" onclick="setFav(${
      item.id
    })"></i>
            </div>
        </div>
    `;
  });

  document.getElementById("show-more-btn").style.visibility = "visible";
}

function setFav(id, ev) {
  let existingFav = favs.find((fav) => fav.id === id);
  if (existingFav) {
    favs = favs.filter((fav) => fav.id !== id);
    favCount.innerHTML--;
  } else {
    existingFav = model.getSingleData(id);
    favs.push(existingFav);
    favCount.innerHTML++;
  }

  // Update local storage and UI
  model.setSingleFavorite(id);
  localStorage.setItem("favs", JSON.stringify(favs));
  list.innerHTML = "";
  displayPhotos(model.getData().hits, type);
}

function checkFavs(id) {
  let favs = JSON.parse(localStorage.getItem("favs")) || [];

  favs.forEach((fav) => {
    console.log(fav);
    if (fav.id == id) {
      return "-fill";
    }
  });

  return "";
}
