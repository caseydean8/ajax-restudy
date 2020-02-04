function searchBandsInTown(artist) {
  // Add code to query the bands in town api searching for the artist received as an argument to this function

  // "https://rest.bandsintown.com/artists/" + artist + "?app_id=codingbootcamp"
  // let artist = "Beck";
  const queryUrl =
    "https://rest.bandsintown.com/artists/" + artist + "?app_id=codingbootcamp";
  $.ajax({
    url: queryUrl,
    method: "GET"
  }).then(function(response) {
    console.log(response);
    // Using jQuery, append the following to the #artist-div :
    // The artist's name
    let p = "<p>";
    let name = $(p).text(response.name);
    // The artists thumbnail image
    let thumbnail = $("<img>").attr("src", response.image_url);
    // The number of fans tracking this artist
    let fans = $(p).text(`fans tracking: ${response.tracker_count}`);
    // The number of upcoming events for this artist
    let upcoming = $(p).text(`upcoming events: ${response.upcoming_event_count}`);
    // A link to the bandsintown url for this artist
    let bandUrl = $(p).text(`bandsintown URL: ${response.url}`);
    // Note: Append actual HTML elements, not just text
    $("#artist-div").append(name, thumbnail, fans, upcoming, bandUrl);
    // $("#artist-div").append(name);
  });
}

// Event handler for user clicking the select-artist button
$("#select-artist").on("click", function(event) {
  // Preventing the button from trying to submit the form
  event.preventDefault();
  // Storing the artist name
  var artist = $("#artist-input")
    .val()
    .trim();

  // Running the searchBandsInTown function(passing in the artist as an argument)
  searchBandsInTown(artist);
  $("#artist-input").val("");
});

// searchBandsInTown("beck");
