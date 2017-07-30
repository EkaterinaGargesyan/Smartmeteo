 "use strict"

 document.addEventListener("DOMContentLoaded", function () {
       
       fillInData(); 
 });

    function fillInData() {
        dataWeather = JSON.parse(localStorage.getItem("dataWeather"));

        renderIconStateOfWeather(dataWeather.current.condition.code, ".stateIcon img");
        fillInTableWeather(dataWeather, ".table-weather-header");
        fillInTableWeather(dataWeather, ".table-weather");
    }






