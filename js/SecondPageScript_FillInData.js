 "use strict";
 var dataWeather = {};

 function fillInData() {
     dataWeather = JSON.parse(localStorage.getItem("dataWeather"));

     renderIconStateOfWeather(dataWeather.current.condition.code, ".stateIcon img");
     fillInCurrentWeather(dataWeather);
     fillInTableWeather(dataWeather, ".table-weather-header");
     fillInTableWeather(dataWeather, ".table-weather");
 }

 document.addEventListener("DOMContentLoaded", function () {

     fillInData();
 });






