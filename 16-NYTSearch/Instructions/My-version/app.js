
const apiGet = (search, resultNum, startDate, endDate) => {
  startDate ? (startDate = `&begin_date=${startDate}`) : (startDate = "");
  endDate ? (endDate = `&end_date=${endDate}`) : (endDate = "");
  const apiKey = "BkLkeT4lQuDfhKNLm9yIbUKXgjkL5auf";
  const queryUrl = `https://api.nytimes.com/svc/search/v2/articlesearch.json?&q=${search}&facet_fields=source&facet=true${startDate}${endDate}&fl=web_url&api-key=${apiKey}`;

  $.ajax({
    url: queryUrl,
    method: "GET"
  }).then(function(res) {
    const result = res.response.docs;
    articleDisplay(result, resultNum);
  });
};

$("button").on("click", function(event) {
  event.preventDefault();
  $("#div3").empty();
  let search = $("#search-term").val();
  let startDate = $("#start")
    .val()
    .replace(/-/g, "");
  let endDate = $("#end")
    .val()
    .replace(/-/g, "");
  let resultNum = $("#records").val();
  apiGet(search, resultNum, startDate, endDate);
});

const articleDisplay = (results, resultNum) => {
  results.forEach(result => {
    const p = $("<p>");
    $(p).text(result.web_url);
    $(".div3").append(p);
  });
};
