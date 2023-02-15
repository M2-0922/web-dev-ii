const key = "api-key-here";
const model = new Model();
let type = "image";
let page = 1;
let childsOfRadio = document.querySelectorAll("input[type='radio']");

// console.log(childsOfRadio);
// childsOfRadio.forEach((item) => {
//   if (item.checked === true) {
//     type = item.value;
//   }
// });

// console.log(type);

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
  document.getElementById("photo-grid-id").innerHTML = "";
  getPhotos(query, 1, type);
});

document.getElementById("search-input").addEventListener("keyup", (ev) => {
  if (ev.code == "Enter") {
    let query = document.getElementById("search-input").value;
    document.getElementById("photo-grid-id").innerHTML = "";
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
      displayPhotos(model.getData().hits, type);
      // display/render methods.
    });
}

function displayPhotos(arr, type) {
  if (type === "videos") {
    arr.forEach((video) => {
      document.getElementById("photo-grid-id").innerHTML += `
                <div class="col-md-4 col-sm-6 col-xs-12 p-2 position-relative">
                <video src="${video.videos.tiny.url}" class="placeholder-glow card-img img-fluid h-100 object-fit-cover" autoplay muted></video>
                    <div class="m-2 position-absolute" style="top:0; bottom:0; left:0; right:0; padding:24px; background: rgba(0,0,0, 0.2);">
                        <h5 class="card-title text-white">${video.user}</h5>
                        <p class="card-text text-white">${video.tags}</p>
                        <p class="card-text text-white"><small>${video.likes} times liked</small></p>
                    </div>
                </div>
                `;
    });
  } else {
    arr.forEach((photo) => {
      document.getElementById("photo-grid-id").innerHTML += `
                <div class="col-md-4 col-sm-6 col-xs-12 p-2 position-relative">
                    <img src="${photo.largeImageURL}" class="card-img img-fluid h-100 object-fit-cover" alt="${photo.largeImageURL}">
                    <div class="m-2 position-absolute" style="top:0; bottom:0; left:0; right:0; padding:24px; background: rgba(0,0,0, 0.2);">
                        <h5 class="card-title text-white">${photo.user}</h5>
                        <p class="card-text text-white">${photo.tags}</p>
                        <p class="card-text text-white"><small>${photo.likes} times liked</small></p>
                    </div>
                </div>
                `;
    });
  }
  document.getElementById("show-more-btn").style.visibility = "visible";
}
