// const generateButton = document.getElementById("generate-button");
// const setup = document.getElementById("setup");
// const punchline = document.getElementById("punchline");

// generateButton.addEventListener("click", async () => {
//   const response = await fetch("https://official-joke-api.appspot.com/random_joke");
//   const joke = await response.json();
//   setup.textContent = joke.setup;
//   punchline.textContent = joke.punchline;
// });

// let joke = document.getElementById("joke");
window.addEventListener("load", () => {
  let jokebutton = document.getElementById("tellMeAJoke");

jokebutton.addEventListener("click", getJoke)

async function getJoke() {
    let response = await fetch("https://official-joke-api.appspot.com/random_joke");
    let jokeResponse = await response.json();
    let setup = jokeResponse.setup;
    let punchline = jokeResponse.punchline;
    
    document.getElementById("setup").innerHTML = setup;
    document.getElementById("punchline").innerHTML = punchline;
  }



})


