"use strict";

// Set all weather data on weather forecast page
function fillInData() {
    var dataWeather = JSON.parse(localStorage.getItem("dataWeather"));

    switchBgOnLoad(dataWeather);
    fillInCurrentWeather(dataWeather);
    fillInTableWeather(dataWeather, ".table-weather-header");
    fillInTableWeather(dataWeather, ".table-weather");
    fillInDataByTimeOfDay(dataWeather);
}

document.addEventListener("DOMContentLoaded", function () {
    fillInData();
    document.querySelector(".select-region").value = localStorage.getItem("searchPhrase");
});






