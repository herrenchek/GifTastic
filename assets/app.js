$(document).ready(function () {

    //Array of animals
    var topics = ['dog', 'cat', 'rabbit', 'hamster', 'pig', 'cow', 'horse'];

    var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=GrhtSLiXUm1xgGnoDvs5AdIBFS6TJQLC&tag=cats";

    //Generate buttons using items from topics array and append to buttons div

    function generate() {
        for (var i = 0; i < topics.length; i++) {
            var button = $("<button>");
            button.attr("id", topics[i]);
            button.text(topics[i]);
            $("#buttons").append(button);
        }
    };

    generate();

});