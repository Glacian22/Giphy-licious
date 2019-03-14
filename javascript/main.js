$(document).ready(function () {

    var topics = ["animals", "heros", "villains", "magical", "mecha", "swords", "spells", "costumes", "monsters"];

    function renderButtons() {
        var button;

        //empty the buttons div before rendering to prevent duplicates from stacking up
        $("#buttons").empty();

        //loop through topics array and create a button for each topic, then append to the .buttons div
        for (var i = 0; i < topics.length; i++) {
            button = $("<button>");
            button.text(topics[i]);
            button.attr("class", "btn topic-btn mx-1 mb-2 font-weight-bold");
            $("#buttons").append(button);
        }
    }

    //render buttons on page load
    renderButtons();

    // Capture button clicks to make AJAX call to giphy, retrieve 10 gifs, render them to gifs div
    $(document).on("click", ".topic-btn", function () {

        var queryURL;
        var topic;

        topic = $(this).text();

        queryURL = "https://api.giphy.com/v1/gifs/search?q=anime+" + topic + "&api_key=8OXUepefOQ3WyLnv1pUG47MmVIJsZE4t&limit=10";
        // hit giphy API
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response);

            //render gifs to page
            $(".gifs").empty();

            for (var i = 0; i < response.data.length; i++) {
                var div = $("<div>");
                div.attr("class", "giphy mx-md-1 my-md-1")

                div.append("rating: " + response.data[i].rating)
                div.append("<br>");

                //set the gif's image from the response
                var image = $("<img>");
                image.attr("src", response.data[i].images.fixed_height_still.url)
                image.attr("data-alt", response.data[i].images.fixed_height.url)

                div.append(image);

                $(".gifs").append(div);
            }
        });
    })
    $(document).on("click", "img", function () {
        var temp;
        var alt = $(this).attr("data-alt");
        temp = $(this).attr("src");
        $(this).attr("src", alt)
        $(this).attr("data-alt", temp)
    })

    $(".search").on("click", function(event){
        event.preventDefault();
        var term = $(".search-field").val();
        topics.push(terms);
        renderButtons();
    })



})