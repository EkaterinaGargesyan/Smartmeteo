"use strict";

// Get icon state of weather from array of icon for table
function getIconStateOfWeather(img, index, time) {
    var icon = document.querySelector(img);

    if(stateOfWeather.icons[index].length > 1) {
        var lightDay = time >= 5  && time < 21;

        lightDay
        ? icon.src = stateOfWeather.icons[index][0]
        : icon.src = stateOfWeather.icons[index][1];

    } else {
        icon.src = stateOfWeather.icons[index][0];
    }
}

// Set icon state of weather in depends of code
function setIconStateOfWeather(data, container, time) {
    stateOfWeather.codes.forEach(function (category, index) {
        if(category.length > 1){
            category.forEach(function (code) {
                if(data === code) {
                    getIconStateOfWeather(container, index, time);
                }
            })
        } else {

            if(data === category[0]) {
                getIconStateOfWeather(container, index, time);
            }
        }
    });
}

