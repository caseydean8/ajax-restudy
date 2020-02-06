console.log("hello")

const apiKey = "BkLkeT4lQuDfhKNLm9yIbUKXgjkL5auf";

// /articlesearch.json?q={query}&fq={filter}
const queryUrl = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=${apiKey}`

$.ajax({
  url: queryUrl,
  method: "GET"
}).then(function(response) {
  console.log(response);
})