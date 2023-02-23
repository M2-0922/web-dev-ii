const newsContainer = document.querySelector(".news-container");

const en = document.querySelector("#en");
const es = document.querySelector("#es");
const categories = document.querySelector("#category");

let country = "en";
getNews("us", "general");

categories.addEventListener("change", (event) => {
    getNews(country, event.target.value);
});

en.addEventListener("click", () => {
    country = "us";
    getNews("us", "general");
});

es.addEventListener("click", () => {
    country = "es";
    getNews("es", "general");
});



function getNews(country, category) {
    axios.get(`https://newsapi.org/v2/top-headlines/sources?category=${category}&country=${country}&apiKey=9ff9625e03ed440d861aff93a467e5fe`)
    .then(function (response) {
        let news = response.data.sources;
        let newsCards = "";
        news.forEach(function (newsItem) {
        newsCards += `
            <div class="news-card">
            <h3 class="news-title">${newsItem.name}</h3>
            <p class="news-description">${newsItem.description}</p>
            <p class="news-author">${newsItem.category}</p>
            <a class="news-link" href="${newsItem.url}" target="_blank">Read more</a>
            </div>
        `;
        });
        newsContainer.innerHTML = newsCards;
    })
    .catch(function (error) {
        console.error(error);
        newsContainer.innerHTML = `<p>Sorry, there was an error loading the news. Please try again later.</p>`;
    });
}
