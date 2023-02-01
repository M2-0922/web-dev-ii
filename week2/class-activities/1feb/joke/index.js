window.addEventListener("load", () => {});

async function fetchJoke() {
  try {
    return await axios.get(`https://official-joke-api.appspot.com/random_joke`);
  } catch (error) {
    console.log(error);
  }
}

const button = document.getElementById("gene-button");
const jokePunchline = document.getElementById("joke-punchline");
const jokeSetup = document.getElementById("joke-setup");

button.onclick = async (e) => {
  e.preventDefault();
  const res = await fetchJoke();
  console.log(res);
  if (!res?.data) return;
  const { punchline, setup } = res.data;
  jokeSetup.innerText = setup;
  jokePunchline.innerText = punchline;
};
