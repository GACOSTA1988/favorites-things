$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    console.log("test");

    var food = $("#food").val();
    var color = $("#color").val();
    var animal = $("#animal").val();

    var favorites = [food , color , animal ];

    $("#favoritesLists").text(favorites);
    // alert(favorites);
    // $("#results").show();
  });
  });
