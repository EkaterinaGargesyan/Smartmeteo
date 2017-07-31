[bgMorning, bgAfternoon, bgEvening, bgNight]
    .forEach(function (bg, i) {
        src = [
            "./img/weatherForecastPage/img-morning.svg",
            "./img/weatherForecastPage/img-afternoon.svg",
            "./img/weatherForecastPage/img-evening.svg",
            "./img/weatherForecastPage/img-night.svg",
        ];

        bg = new  Image();
        bg.src = src[i];

        document.querySelector(".container-bg").setAttribute("src", bg.src);
    });

