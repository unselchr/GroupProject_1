//hello chris

//this code is ment to use functions from default.js to get data from the api's and format it 

function buildDeck(data){
    var deck=$("<div class='card-group'></div>");
    for(var i=0;i<data.length;i++){
        deck.append(buildCard(data[i]));
    }
    return(deck);
}

function buildCard(data){
    var card=$("<div class='card'></div>");
    var body=$("<div class='card-body'></div>");
    var title=$("<h5 class='card-title'></h5>");
    var article=$("<p class='card-text'></p>");
    var linkTo=$("<a class='card-link'>View Source</a>")
    if(data===news){
        title.text();
        article.text();
        linkTo.attr("href",);
    }
    else{
        title.text();
        article.text();
        linkTo.attr("href",);
    }
    body.append(title);
    body.append(article);
    body.append(linkTo);
    card.append(body);
    return(card);
}