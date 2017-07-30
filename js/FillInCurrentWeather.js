function setDataWeatherForCurrentDay(data, pathToIcon) {
    document
        .querySelectorAll(".state-of-weather__indicators")
        .forEach(function (container, i) {
            container.insertBefore(
                document.createTextNode(data[i]),
                container.firstChild
            );
        });
    setIconStateOfWeather(pathToIcon, ".stateIcon img");
}

// Fill in block with weather for the current day
function fillInCurrentWeather(data) {
    var currentWeather  = [
        data.current.wind_mph,
        data.current.temp_c,
        data.current.humidity,
        data.current.pressure_mb
    ];

    //Fill in data at loading
    setDataWeatherForCurrentDay(currentWeather, data.current.condition.code);


    //Fill in by click a button (time-of-day switching)
    document
        .querySelector(".slider")
        .addEventListener("click", function (event) {
            var btn = event.target;
            var hour = btn.getAttribute("data-hour");

            var weatherByHour = [
                data.forecast.forecastday["0"].hour[hour].wind_mph,
                data.forecast.forecastday["0"].hour[hour].temp_c,
                data.forecast.forecastday["0"].hour[hour].humidity,
                data.forecast.forecastday["0"].hour[hour].pressure_mb
            ];

            setDataWeatherForCurrentDay(weatherByHour, data.forecast.forecastday[0].hour[hour].condition.code);
        });
}






