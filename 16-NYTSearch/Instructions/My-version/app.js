// let resultNum = 0;
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
  let search = $("#search-term").val();
  let startDate = $("#start")
    .val()
    .replace(/-/g, "");
  let endDate = $("#end")
    .val()
    .replace(/-/g, "");
  resultNum = $("#records").val();
  console.log(resultNum);
  apiGet(search, resultNum, startDate, endDate);
});

const articleDisplay = (results, resultNum) => {
  $(".div2").empty();
  if (resultNum)  results.length = resultNum;
  results.forEach(result => {
    const p = $("<p>");
    $(p).text(result.web_url);
    $(".div2").append(p);
  });
};
