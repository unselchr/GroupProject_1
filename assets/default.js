//hello chris

//this code is ment to use functions from default.js to get data from the api's and format it 

function buildDeck(data) {
    var deck = $("<div class='card-deck'></div>");
    for (var i = 0; i < data.length; i++) {
        deck.append(buildCard(data[i]));
    }
    return (deck);
}

function buildCard(data) {
    var card = $("<div class='card'></div>");
    var body = $("<div class='card-body'></div>");
    var title = $("<h5 class='card-title'></h5>");
    var article = $("<p class='card-text'></p>");
    var linkTo = $("<a class='card-link'>View Source</a>")
    if (data === news) {
        title.text();
        article.text();
        linkTo.attr("href", );
        linkTo.attr("tartet", "_blank");
    }
    else {
        title.text();
        article.text();
        linkTo.attr("href", );
        linkTo.attr("tartet", "_blank");
    }
    body.append(title);
    body.append(article);
    body.append(linkTo);
    card.append(body);
    return (card);
}

//In progress

//Create variable for the user input 


var userResults = "";

function buildQueryURL() {

    userResults.q = $("#userInput").val(); trim();

    console.log("success");
}
//Click Handler

$("#TESTAJAX").on("click", function (event) {
    //console.log("got here");
    event.preventDefault();
    var data = [];
    getResultsFromComicVine("superman");
    getResultsFromNews("superman");
    //console.log("Success");
});


//Calling AJAX function for Comic Vine API
function getResultsFromComicVine(userResults) {
    //console.log("got here");
    const url = "https://comicvine.gamespot.com/api/issues/?api_key=6b43a9a648dfcf60ff15f2f286abfb65049a1286&format=jsonp";
    $.ajax({
        url: url,
        type: "GET",
        //dataType: "jsonp",
        //jsonp: "json_callback",
        //success: function (data) {
        //    console.log(data);
        //}
    }).then(function (response) {
        console.log(response);
        $("#testComic").text(JSON.stringify(response));
    });
};

//Calling AJAX function for News API
function getResultsFromNews(userResults) {
    const url = "https://newsapi.org/v2/everything?q=" + userResults + "&apiKey=5740346b2b8a403f9d7e1be866e8b27c"
    console.log(url);
    $.ajax({
        url: url,
        type: "GET",
        //dataType: "jsonp",
        //jsonp: "json_callback",
        //success: function (data) {
        //    console.log(data);
        //}
    }).then(function (response) {
        console.log(response);
        $("#testNews").text(JSON.stringify(response));
    });
};
