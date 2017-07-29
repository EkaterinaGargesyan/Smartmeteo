autocomplete.addListener("place_changed", function (event) {

    /*if(document.location.href !== "./WeatherForecastPage.html"){
        document.location.href = "./WeatherForecastPage.html";
    }*/

    var placeResult = autocomplete.getPlace().formatted_address;

    find(placeResult, function(coords){
        query(coords).addEventListener("load", function () {


            /*renderIconStateOfWeather(dataWeather.current.condition.code, ".stateIcon img");

            fillInTableWeather(dataWeather, ".table-weather-header");
            fillInTableWeather(dataWeather, ".table-weather");*/

            console.log(dataWeather.current.condition.text);






        });
    });
});