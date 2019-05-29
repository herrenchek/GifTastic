$(document).ready(function () {

    //Array of animals
    var topics = ['dog', 'cat', 'rabbit', 'hamster', 'pig', 'cow', 'horse'];

    //Generate buttons using items from topics array and append to buttons div
    function generate() {
        $("#buttons").empty();
        for (var i = 0; i < topics.length; i++) {
            var button = $("<button>");
            button.attr("data-name", topics[i]);
            button.addClass("btn btn-primary");
            button.text(topics[i]);
            $("#buttons").append(button);
        }
    };

    generate();

    //Click handler for dynamically generated topics buttons
    $(document.body).on("click", ".btn-primary", function () {
        var animal = $(this).attr("data-name");
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=GrhtSLiXUm1xgGnoDvs5AdIBFS6TJQLC&limit=10";
        
        //Make AJAX request
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response) {
            console.log(response);
            //Retrieve gif URL and stores it in imageURL variable
            var imageUrl = response.data.image_original_url;
            
        });
    });

});