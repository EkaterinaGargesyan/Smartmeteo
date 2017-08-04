"use strict";

// Get animated icon state of weather from array of icon
function getAnimatedIconStateOfWeather(container, index, time) {
    document.querySelector(container).textContent = "";

    var icon = document.createElement("div");
    icon.classList.add("weathericon");

    if(stateOfWeather.animatedIcons[index].length > 1) {
        var lightDay = time >= 5  && time < 21;

        lightDay
            ? icon.classList.add(stateOfWeather.animatedIcons[index][0])
            : icon.classList.add(stateOfWeather.animatedIcons[index][1]);

    } else {
        icon.classList.add(stateOfWeather.animatedIcons[index][0]);
    }

    document.querySelector(container).appendChild(icon);
}

// Set animated icon state of weather in depends of code
function setAnimatedIconStateOfWeather(data, container, time) {
    stateOfWeather.codes.forEach(function (category, index) {
        if(category.length > 1){
            category.forEach(function (code) {
                if(data === code) {
                    getAnimatedIconStateOfWeather(container, index, time);
                }
            })
        } else {

            if(data === category[0]) {
                getAnimatedIconStateOfWeather(container, index, time);
            }
        }
    });
}