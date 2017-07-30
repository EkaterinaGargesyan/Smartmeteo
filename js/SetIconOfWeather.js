"use strict";

// Path to icon in depends of code, that is located in json
var stateOfWeather = {
    codes: [
        [1000],
        [1003],
        [1006],
        [1009],
        [1240, 1186, 1180, 1063],
        [1168, 1243, 1198, 1189, 1183, 1153, 1150],
        [1171, 1246, 1201, 1195, 1072, 1192],
        [1273, 1276],
        [1087],
        [1147, 1135],
        [1066, 1069, 1204, 1207, 1210, 1213, 1216, 1219, 1222, 1225, 1237, 1249, 1252, 1255, 1258, 1261, 1264, 1279, 1282],
        [1030],
        [1114, 1117]
    ],
    icon: [
        [
            "./img/iconsStateOfWeather/sunny.svg",
            "./img/iconsStateOfWeather/moon.svg"
        ],
        [
            "./img/iconsStateOfWeather/semi-cloudy.svg",
            "./img/iconsStateOfWeather/moon-cloudy.svg"
        ],
        [
            "./img/iconsStateOfWeather/cloudy.svg",
            "./img/iconsStateOfWeather/moon-cloudy.svg"
        ],
        [   "./img/iconsStateOfWeather/overcast.svg" ],
        [
            "./img/iconsStateOfWeather/semi-sunny-with-rain.svg",
            "./img/iconsStateOfWeather/light-rain.svg"
        ],
        [   "./img/iconsStateOfWeather/light-rain.svg" ],
        [
            "./img/iconsStateOfWeather/rain.svg"
        ],
        [   "./img/iconsStateOfWeather/rain-thunder.svg" ],
        [   "./img/iconsStateOfWeather/thunder.svg" ],
        [
            "./img/iconsStateOfWeather/fog.svg",
            "./img/iconsStateOfWeather/moon-cloudy.svg"
        ],
        [   "./img/iconsStateOfWeather/snow.svg" ],
        [
            "./img/iconsStateOfWeather/mist.svg",
            "./img/iconsStateOfWeather/wind.svg"
        ],
        [   "./img/iconsStateOfWeather/wind.svg" ]
    ]
};

// Get icon state of weather from array of icon
function getIconStateOfWeather(img, index, time) {
    var icon = document.querySelector(img);

    if(stateOfWeather.icon[index].length > 1) {
        var lightDay = time >= 5  && time < 21;

        lightDay
            ? icon.src = stateOfWeather.icon[index][0]
            : icon.src = stateOfWeather.icon[index][1];

    } else {
        icon.src = stateOfWeather.icon[index][0];
    }
}

// Set icon state of weather in depends of code
function setIconStateOfWeather(data, img, time) {
    stateOfWeather.codes.forEach(function (category, index) {
        if(category.length > 1){
            category.forEach(function (code) {
                if(data === code) {
                    getIconStateOfWeather(img, index, time);
                }
            })
        } else {

            if(data === category[0]) {
                getIconStateOfWeather(img, index, time);
            }
        }
    });
}
