const form = document.querySelector("#tweet-form");
const tweetInput = document.querySelector("#tweet-input");
const tweetContainer = document.querySelector("#tweet-container");

tweetInput.addEventListener("keyup", (e) => {
  if(e.code == "Enter") {
    form.dispatchEvent(new Event("submit"));
  }
})

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const tweetValue = tweetInput.value;
  if (!tweetValue) {
    return;
  }

  const tweetDate = new Date().toLocaleString();
  const avatarUrl = `https://robohash.org/${tweetValue}.png`;

  const tweet = `
    <div class="tweet">
      <div class="tweet-header">
        <img class="avatar" src="${avatarUrl}" alt="avatar">
        <div class="username-date">
          <p class="username">User</p>
          <p class="date">${tweetDate}</p>
        </div>
      </div>
      <div class="tweet-body">
        <p>${tweetValue}</p>
      </div>
    </div>
  `;

  tweetContainer.insertAdjacentHTML("afterbegin", tweet);
  tweetInput.value = "";
});
