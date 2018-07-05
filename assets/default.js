
//This code is ment to use functions from default.js to get data from the api's and format it 

function buildDeck(data) {
    var deck = $("<div class='card-columns'></div>");
    data.forEach(function (cardData) {
        deck.append(buildCard(cardData));
    })
    return (deck);
}

function buildCard(data) {
    var card = $("<div class='card articleCard'></div>");
    var body = $("<div class='card-body articleBody'></div>");
    var title = $("<h5 class='card-title articleTitle'></h5>");
    var article = $("<p class='card-text articleDescription'></p>");
    var linkTo = $("<a class='card-link articleLink'>View Source</a>");
    var previewPic=$("<img class='card-img-top' alt='preview picture'>");
    if(data.title==""||data.title==null){
        data.title="No Title";
    }
    title.text(data.title);
    if(data.article==""||data.article==null){
        data.article="No description availible";
    }
    article.text(data.article);
    linkTo.attr("href", data.link);
    linkTo.attr("target", "_blank");
    previewPic.attr("src",data.pic);
    body.attr("data-title",data.title);
    body.attr("data-description",data.article);
    body.attr("data-link",data.link);
    body.attr("data-pic",data.pic);
    body.append(previewPic);
    body.append(title);
    body.append(article);
    body.append(linkTo);
    body.append($("<button class='saveArticle showLoggedIn'>Save</button>"));
    card.append(body);
    //console.log(card);
    return (card);
}






// CORS Anyhwere Heroku App in order to prevent CORS Error 
$(document).ready(function () {

    //Testing Document Ready Function
    //console.log("ready!");

    jQuery.ajaxPrefilter(function (options) {
        if (options.crossDomain && jQuery.support.cors) {
            options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
        }
    });

    $("#userInput").on("click", function (event1) {
        $("#articleDisplay").empty();
        event1.preventDefault();
        var searchParameters = $("#searchInput").val();

        getResultsFromNews(searchParameters);
        
        getResultsFromComicVine(searchParameters);
        //setTimeout(function(){delayedSearch(newsResults,cvResults)},3000);
        
    })
    function delayedSearch(newsResults,cvResults){
        // cvResults.forEach(function(article){
        //  var temp={title: article.title,article: article.description, link: article.url};
        //  articleData.push(temp);
        // });
        //console.log(newsResults);
        newsResults.forEach(function(article){
            var temp={title: article.title,article: article.description, link: article.url};
            articleData.push(temp);
        });
        $("#articleDisplay").append(buildDeck(articleData));
    }

    //Calling AJAX function for Comic Vine API
    function getResultsFromComicVine(userResults) {
        const url = "https://comicvine.gamespot.com/api/search/?query="+userResults+"&api_key=6b43a9a648dfcf60ff15f2f286abfb65049a1286&format=json";
        $.ajax({

            url: url,
            type: "GET",
            // dataType: "jsonp",
            // jsonp: "json_callback",
            // success: function (data) {
            // }
        }).then(function (response) {
            console.log(response);
            var articleData=[];
            response.results.forEach(function(article){
                var temp={title: article.aliases,article: article.deck,link: article.site_detail_url, pic: article.image.screen_url};
                articleData.push(temp);
                //console.log(article.image);
            })
            $("#articleDisplay").append(buildDeck(articleData));
        });
    };


    //Calling AJAX function for News API
    function getResultsFromNews(userResults) {
        // $("#userInput").on("click", function(){
        // var userResults = $("searchInput").val();
        const url = "https://newsapi.org/v2/everything?q=" + userResults + "&pageSize=10&apiKey=5740346b2b8a403f9d7e1be866e8b27c"
        //console.log(url);
        $.ajax({
            url: url,
            type: "GET",
            // success: function (data) {
            //     console.log(data);
            // }
        }).then(function (response) {
            //console.log(response);
            var articleData=[];
            response.articles.forEach(function(article){
                var temp={title: article.title,article: article.description, link: article.url, pic: article.urlToImage};
                articleData.push(temp);
            });
            $("#articleDisplay").append(buildDeck(articleData));
        });


    };

});