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
            button.attr("class", "btn mx-1 mb-2 font-weight-bold");
            $("#buttons").append(button);
        }
    }

    //render buttons on page load
    renderButtons();

    // Capture button clicks to make AJAX call to giphy, retrieve 10 gifs, render them to gifs div
    $(".btn").on("click", function () {

        var queryURL;
        var topic;

        topic = $(this).text();
        console.log(topic);

        queryURL = "";
        // hit giphy API
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response);
        });

    })







})