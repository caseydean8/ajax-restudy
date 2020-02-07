console.log("hello");

const apiKey = "BkLkeT4lQuDfhKNLm9yIbUKXgjkL5auf";
// let search = '';

// /articlesearch.json?q={query}&fq={filter}
// const queryUrl = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${search}&api-key=${apiKey}`;
let startDate;
let endDate;

const apiGet = (search) => {
  const queryUrl = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${search}&facet_fields=source&facet=true&begin_date=20160101&end_date=20160131&api-key=${apiKey}`;
  console.log(queryUrl);

  $.ajax({
    url: queryUrl,
    method: "GET"
  }).then(function(response) {
    console.log(response);
  })
};

$("button").on("click", function(event) {
  event.preventDefault();
  let search = $("#search-term").val();
  apiGet(search);
});
