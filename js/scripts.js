$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    // console.log("test");

    var food = $("#food").val();
    var color = $("#color").val();
    var animal = $("#animal").val();

    var favorites = [food , color , animal ];
    var subFavs = favorites[1] + favorites[2];
    var thirdFavs = [];
        thirdFavs.push(subFavs);

    $("#favoritesLists").text(favorites);
    $("#favoritesLists2").text(subFavs);
    $("#favoritesLists3").text(thirdFavs);
    // $("#favoritesLists").text(favorites[1]);
    // $("#favoritesLists").text(favorites[0]);

    // $("#favoritesLists").text(favorites);
    // alert(favorites);
    // $("#results").show();
  });
  });
