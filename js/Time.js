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