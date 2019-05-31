$(document).ready(function () {

    //Default array of Pokemon
    var topics = ['pikachu', 'togepi', 'jigglypuff', 'entei', 'charizard', 'sylveon', 'clefairy', 'victini', 'meowth', 'ho-oh', 'lugia', 'celebi', 'mewtwo', 'darkrai'];

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

    //Click handler for adding new buttons to page
    $("#submit").on("click", function (event) {
        event.preventDefault();
        //Grab the input from the textbox
        var another = $("#input").val().trim();
        //Add new Pokemon to topics array
        topics.push(another);
        //Calling the function that handles the processing of the topics array
        generate();
    });

    //Click handler for clearing gifs div
    $("#clear").on("click", function (event) {
        event.preventDefault();
        $("#gifs").empty();
    });

    //Click handler for dynamically generated topics buttons
    $(document.body).on("click", ".btn-primary", function () {
        var pokemon = $(this).attr("data-name");
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + pokemon + "&api_key=GrhtSLiXUm1xgGnoDvs5AdIBFS6TJQLC&limit=10";

        //Make AJAX request
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            //Array of 10 gifs
            var giphys = response.data;

            for (var i = 0; i < giphys.length; i++) {
            //Create an image
            var image = $("<img>");
            //Set src and alt attributes on the image
            image.attr("src", giphys[i].images.fixed_height.url);
            image.attr("alt", pokemon + " image.");
            
            //Still image
            //image.attr(giphys[i].images.fixed_height_still.url);

            //Create an element to have the rating displayed
            var p = $("<p>").text("Rating: " + (giphys[i].rating).toUpperCase());

            //Add gif and rating to the page
            var newGif = $('<div class="block">');
            newGif.append(image);
            newGif.append(p);
            $("#gifs").prepend(newGif);
            }  
        });
    });



});