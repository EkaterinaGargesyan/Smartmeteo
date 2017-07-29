autocomplete.addListener("place_changed", function (event) {
var placeResult = autocomplete.getPlace().formatted_address;

    find(placeResult, function(coords){
        query(coords).addEventListener("load", function () {

            setTimeout(function () {
                document.location.href = "./WeatherForecastPage.html";
            }, 2000);



            /*renderIconStateOfWeather(dataWeather.current.condition.code, ".stateIcon img");

            fillInTableWeather(dataWeather, ".table-weather-header");
            fillInTableWeather(dataWeather, ".table-weather");*/

            console.log(dataWeather.current.condition.text);






        });
    });
});