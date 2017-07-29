var dataWeather = "";

document.addEventListener("DOMContentLoaded", function () {
    dataWeather = JSON.parse(localStorage.getItem("dataWeather"));

    renderIconStateOfWeather(dataWeather.current.condition.code, ".stateIcon img");

    fillInTableWeather(dataWeather, ".table-weather-header");
    fillInTableWeather(dataWeather, ".table-weather");
});






