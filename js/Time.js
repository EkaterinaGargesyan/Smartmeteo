function getCurrentTime() {
    var time = dataWeather.location.localtime;
    time = time.split(" ");

    var hour = time[1].split(":");
    var currentHour = +hour[0];

    return currentHour;
}