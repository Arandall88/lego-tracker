$(document).ready(function () {
  $("#lego-search-button").on("click", function (event) {
    event.preventDefault();
    console.log("search button");
    const searchTerm = $("#lego-search-bar").val();
    console.log(searchTerm);
    window.location.replace(`/search/${searchTerm}`);
  });
});

$(document).ready(function () {
  $("#lego-search-button").on("click", function (a) {
    a.preventDefault(), console.log("search button");
    const b = $("#lego-search-bar").val();
    console.log(b), window.location.replace(`/search/${b}`);
  });
});
