console.log("hello");

const apiKey = "BkLkeT4lQuDfhKNLm9yIbUKXgjkL5auf";
// let search = '';

// /articlesearch.json?q={query}&fq={filter}
// const queryUrl = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${search}&api-key=${apiKey}`;
// let startDate;
// let endDate;

const apiGet = (search, startDate, endDate) => {
  (startDate) ? startDate = `&begin_date=${startDate}` : startDate = '';
  (endDate) ? endDate = `&end_date=${endDate}` : endDate = '';
  const queryUrl = `https://api.nytimes.com/svc/search/v2/articlesearch.json?&q=${search}&facet_fields=source&facet=true${startDate}${endDate}&fl=web_url&api-key=${apiKey}`;
  console.log(queryUrl);

  $.ajax({
    url: queryUrl,
    method: "GET"
  }).then(function(res) {
    console.log(res);
    console.log(res.response.docs);
    const result = [];
    // let docu = res.reponse.docs[0].web_url;
  })
};

$("button").on("click", function(event) {
  event.preventDefault();
  let search = $("#search-term").val();
  let startDate = $("#start").val().replace(/-/g, "");
  let endDate = $("#end").val().replace(/-/g, "")
  console.log(startDate, endDate);
  apiGet(search, startDate, endDate);
});

const articleDisplay = () => {
  artArr = [];
  for (let doc of docs) {

  }
}