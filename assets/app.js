$(document).ready(function () {

    //Array of Pokemon
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

    $("#submit").on("click", function (event) {
        event.preventDefault();
        //Grab the input from the textbox
        var another = $("#input").val().trim();
        //Add new Pokemon to topics array
        topics.push(another);
        //Calling the function that handles the processing of the topics array
        generate();
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
            console.log(response);
            //Retrieve gif URL and stores it in imageURL variable
            var imageURL = response.data[0].images.fixed_height.url;

            // var rating = response.data[0].rating;
            // // Creates an element to have the rating displayed
            // var p = $("<p>").text("Rating: " + rating);
            // $("#gifs").prepend(p);

            //Creating an image
            var image = $("<img>");

            //Setting src and alt attributes on the image
            image.attr("src", imageURL);
            image.attr("alt", pokemon + " image.");
            //Add it to the page
            $("#gifs").prepend(image);
        });
    });

});