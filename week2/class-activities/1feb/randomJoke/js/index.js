const apiUrl = "https://official-joke-api.appspot.com/random_joke";
const btn = document.getElementById("fetch-joke");

/*
* get data from api
*/
const fetchJoke = async () => {
    const res = await fetch(apiUrl);
    const joke = await res.json();
    return joke;
};

/*
* set data and click button action
*/
btn.onclick = async () => {
    const disJoke = await fetchJoke();
    const answer1 = document.querySelector("#answer1");
    const answer2 = document.querySelector("#answer2");

    answer1.innerHTML = `Q: ${disJoke.setup}`;
    answer2.innerHTML = `A: ${disJoke.punchline}`;
}
    