function getIconStateOfWeather(img, index) {
    var icon = document.querySelector(img);

    if(stateOfWeather.icon[index].length > 1) {
        var lightDay = getTime(dataWeather) >= 6  && getTime(dataWeather) < 22;

        lightDay
            ? icon.src = stateOfWeather.icon[index][0]
            : icon.src = stateOfWeather.icon[index][1];

    } else {
        icon.src = stateOfWeather.icon[index][0];
    }
}

function renderIconStateOfWeather(data, img) {
    stateOfWeather.codes.forEach(function (category, index) {
        if(category.length > 1){
            category.forEach(function (code) {
                if(data === code) {
                    getIconStateOfWeather(img, index);
                }
            })
        } else {

            if(data === category[0]) {
                getIconStateOfWeather(img, index);
            }
        }
    });
}

function fillInCurrentWeather(data) {
    var currentWeather = [
        data.current.wind_mph,
        data.current.temp_c,
        data.current.humidity,
        data.current.pressure_mb
    ];

    document
        .querySelectorAll(".state-of-weather__indicators")
        .forEach(function (container, i) {
            container.insertBefore(
                document.createTextNode(currentWeather[i]),
                container.firstChild
            );
        })
}
