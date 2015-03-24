function printOutcome(response) {
  var responseJSON = JSON.parse(response);
  var out1 = $("<p>"), out2 = $("<p>"), out3 = $("<p>"), out4 = $("<p>");
  out1.text("You "+responseJSON.outcome +"!");
  $("#outcome").empty().append(out1);
  out2.text("Total wins: " +responseJSON.wins);
  $("#outcome").append(out2);
  out3.text("Total losses: " +responseJSON.losses);
  $("#outcome").append(out3);
  out4.text("Total ties: " +responseJSON.ties);
  $("#outcome").append(out4);
}

var main = function () {
  "use strict";

  $("#rock button").on("click", function (event) {
    $.post("/play/rock", {"chose":0}, function (response) {
      printOutcome(response);
    });
  });

  $("#paper button").on("click", function (event) {
    $.post("/play/paper", {"chose":1}, function (response) {
      printOutcome(response);
    });
  });

  $("#scissors button").on("click", function (event) {
    $.post("/play/scissors", {"chose":2}, function (response) {
      printOutcome(response);
    });
  });

  $("#spock button").on("click", function (event) {
    $.post("/play/spock", {"chose":3}, function (response) {
      printOutcome(response);
    });
  });

  $("#lizard button").on("click", function (event) {
    $.post("/play/lizard", {"chose":4}, function (response) {
      printOutcome(response);
    });
  });


};

$(document).ready(main);
