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

function getCurrentTime() {
    var time = dataWeather.location.localtime.split(" ");
    var hour = time[1].split(":");
    var currentHour = +hour[0];

    return currentHour;
}

function renderIconStateOfWeather(index) {
    var icon = document.createElement("img");
    icon.setAttribute("class", "iconStateOfWeather");

    if(stateOfWeather.icon[index].length > 1) {
        var lightDay = getCurrentTime() >= 6  && getCurrentTime() < 22;

        lightDay
        ? icon.setAttribute("src", stateOfWeather.icon[index][0])
        : icon.setAttribute("src", stateOfWeather.icon[index][1]);

    } else {
        icon.setAttribute("src", stateOfWeather.icon[index][0])
    }

    document.querySelector("div.state").appendChild(icon);
}

stateOfWeather.codes.forEach(function (category, index) {
    if(category.length > 1){
        category.forEach(function (code) {
            if(dataWeather.current.condition.code === code) {
                renderIconStateOfWeather(index);
            }
        })
    } else {

        if(dataWeather.current.condition.code === category[0]) {
            renderIconStateOfWeather(index);
        }
    }
});


