function query(place) {
    var query = new XMLHttpRequest();

    // query.addEventListener("load", function (event) {
    //     localStorage.setItem("dataWeather", event.currentTarget.responseText);
    // });

    query.open("GET", `https://api.apixu.com/v1/forecast.json?key=c13f00aa4d97425298872829170307&q=${place}&days=5`);
    query.send();

    return query;
}

var dataWeather = {};

//post a query
function postQuery(coords) {

    //handling action on loading query response
     query(coords).addEventListener("load", function (event) {
         localStorage.setItem("dataWeather", event.currentTarget.responseText);
         
         var path = document.location.pathname.split("/");

         if(path[path.length-1] === "StartPage.html"){
             document.location.href = "./WeatherForecastPage.html";
         };

        
    });
}
    
   


