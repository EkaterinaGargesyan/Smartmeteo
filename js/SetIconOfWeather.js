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
    icons: [
        ["./img/iconsStateOfWeather/sunnyIcon.svg", "./img/iconsStateOfWeather/clearNightIcon.svg"],
        ["./img/iconsStateOfWeather/partlyCloudyIcon.svg", "./img/iconsStateOfWeather/partlyCloudyNightIcon.svg"],
        ["./img/iconsStateOfWeather/mostlyCloudyIcon.svg", "./img/iconsStateOfWeather/partlyCloudyNightIcon.svg"],
        ["./img/iconsStateOfWeather/mostlyCloudyIcon.svg", "./img/iconsStateOfWeather/partlyCloudyNightIcon.svg"],
        ["./img/iconsStateOfWeather/sunnyShowersIcon.svg", "./img/iconsStateOfWeather/showersIcon.svg"],
        ["./img/iconsStateOfWeather/showersIcon.svg"],
        ["./img/iconsStateOfWeather/rainyIcon.svg"],
        ["./img/iconsStateOfWeather/thundershowersIcon.svg"],
        ["./img/iconsStateOfWeather/lightningIcon.svg"],
        ["./img/iconsStateOfWeather/mostlyCloudyIcon.svg", "./img/iconsStateOfWeather/partlyCloudyNightIcon.svg"],
        ["./img/iconsStateOfWeather/snowyIcon.svg"],
        ["./img/iconsStateOfWeather/windySunnyIcon.svg", "./img/iconsStateOfWeather/windyIcon.svg"],
        ["./img/iconsStateOfWeather/windyIcon.svg"]
    ]
};

// Get icon state of weather from array of icon
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

