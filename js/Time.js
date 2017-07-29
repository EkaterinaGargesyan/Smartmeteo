function getDate(data, i) {
    var date = data.forecast.forecastday[i].date;
    date = date.split("-").reverse();

    return date.join(".");
}

function getTime(data) {
    var time = data.location.localtime;
    time = time.split(" ");

    var hour = time[1].split(":");
    var currentHour = +hour[0];

    return currentHour;
}

var partsOfDay = {
    morning: getTime() >= 6 && getTime() < 12,
    afternoon: getTime() >= 12 && getTime() < 18,
    evening: getTime() >= 18 && getTime() < 24,
    night: getTime() >= 24 && getTime() < 6
}