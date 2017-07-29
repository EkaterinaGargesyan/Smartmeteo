var dataWeather = {};

function query(place) {
    var query = new XMLHttpRequest();

    query.addEventListener("load", function (event) {
        dataWeather = JSON.parse(event.currentTarget.responseText);
    });

    query.open("GET", `https://api.apixu.com/v1/forecast.json?key=c13f00aa4d97425298872829170307&q=${place}&days=5`);
    query.send();

    return query;
}
