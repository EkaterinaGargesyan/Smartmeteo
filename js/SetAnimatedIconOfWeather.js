"use strict";

function toggleActiveHiddenClass(index, partOfDay) {
    document.querySelector(`.${stateOfWeather.animatedIcons[index][partOfDay]}`).classList.remove("hidden");
    document.querySelector(`.${stateOfWeather.animatedIcons[index][partOfDay]}`).classList.add("active");
}

// Get animated icon state of weather from array of icon
function getAnimatedIconStateOfWeather(container, index, time) {
    document
        .querySelectorAll(container)
        .forEach(function (img) {
            if(img.classList.contains("active")) {
                img.classList.remove("active");
                img.classList.add("hidden");
            }
        });

    if(stateOfWeather.animatedIcons[index].length > 1) {
        var lightDay = time >= 5  && time < 21;

        lightDay
        ? toggleActiveHiddenClass(index, 0)
        : toggleActiveHiddenClass(index, 1);

    } else {
        toggleActiveHiddenClass(index, 0);
    }
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