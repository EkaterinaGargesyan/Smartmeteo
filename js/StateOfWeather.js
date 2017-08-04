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
    ],
    animatedIcons: [
        ["sunnyIcon", "clearNightIcon"],
        ["partlyCloudyIcon", "partlyCloudyNightIcon"],
        ["mostlyCloudyIcon", "partlyCloudyNightIcon"],
        ["mostlyCloudyIcon", "partlyCloudyNightIcon"],
        ["sunnyShowersIcon", "showersIcon"],
        ["showersIcon"],
        ["rainyIcon"],
        ["thundershowersIcon"],
        ["lightningIcon"],
        ["mostlyCloudyIcon", "partlyCloudyNightIcon"],
        ["snowyIcon"],
        ["windySunnyIcon", "windyIcon"],
        ["windyIcon"]
    ]
};