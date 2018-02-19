$(document).ready(function() {

  $("#bitCoinSubmit").click(function(e) {
    e.preventDefault();

    // var value = $("#foodInput").val();
    debugger
    var myurl= "https://api.coindesk.com/v1/bpi/currentprice.json";
    $.ajax({
        url : myurl,
        dataType : "json",
        success : function(json) {
          debugger
          var results = "";
		      results += '<h3>Current prices as of ' + json.time.updated + "</h3>";
          results += '<h4>' + json.bpi.EUR.description + '</h4>';
          results += '<p>code: ' + json.bpi.EUR.code + '</p>';
          results += '<p>price: ' + json.bpi.EUR.symbol + ' ' + json.bpi.EUR.rate + '</p>';

          results += '<h4>' + json.bpi.GBP.description + '</h4>';
          results += '<p>code: ' + json.bpi.GBP.code + '</p>';
          results += '<p>price: ' + json.bpi.GBP.symbol + ' ' + json.bpi.GBP.rate + '</p>';

          results += '<h4>' + json.bpi.USD.description + '</h4>';
          results += '<p>code: ' + json.bpi.USD.code + '</p>';
          results += '<p>price: ' + json.bpi.USD.symbol + ' ' + json.bpi.USD.rate + '</p>';
		      $("#bitCoinResults").html(results);
      console.log(json);
        }
    });
  });

});