// Get date for fill in table of weather data
function getDate(data, i) {
    var date = data.forecast.forecastday[i].date;
    date = date.split("-").reverse();

    return date.join(".");
}

// Get time for definition of part of the day
function getTime(data) {
    var time = data.location.localtime;
    time = time.split(" ");

    var hour = time[1].split(":");
    var currentHour = +hour[0];

    return currentHour;
}