function fillInHeaderTableWeather(data) {
    document
        .querySelectorAll(".table-weather-header")
        .forEach(function (table, indexDay) {

            var cellArray = table.firstElementChild.firstElementChild.children;

            [].forEach.call(cellArray, function (cell, i) {
                var dataWeatherInDay = data.forecast.forecastday[indexDay].day;

                switch (i){
                    case 0:
                        var textnode = document.createTextNode(getDate(data, indexDay));
                        cell.firstElementChild.appendChild(textnode);
                        break;
                    case 1:
                        renderIconStateOfWeather(dataWeatherInDay.condition.code, `.js-icon-header-table-${indexDay}`);
                        break;
                    case 2:
                        textnode = document.createTextNode(dataWeatherInDay.avgtemp_c);
                        cell.insertBefore(textnode, cell.firstChild);
                        break;
                    case 3:
                        textnode = document.createTextNode(dataWeatherInDay.mintemp_c);
                        cell.insertBefore(textnode, cell.firstChild);
                        break;
                }
            }, indexDay);
        });
}

function fillInTableWeather(data) {
    document
        .querySelectorAll(".table-weather")
        .forEach(function (table, indexDay) {
            [].forEach.call(table.firstElementChild.children, function (row, indexRow) {

                [].forEach.call(row.children, function (cell, i) {

                    var hours = [5, 11, 17, 23];
                    var dataWeatherInHour = data.forecast.forecastday[indexDay].hour[hours[indexRow]];

                    switch (i){
                        case 0:
                            break;
                        case 1:
                            renderIconStateOfWeather(dataWeatherInHour.condition.code, `.js-icon-table-${indexDay}-${indexRow}`);
                            break;
                        case 2:
                            var textnode = document.createTextNode(dataWeatherInHour.temp_c);
                            cell.insertBefore(textnode, cell.firstChild);
                            break;
                        case 3:
                            textnode = document.createTextNode(dataWeatherInHour.feelslike_c);
                            cell.insertBefore(textnode, cell.firstChild);
                            break;
                    }
                }, indexDay, indexRow);
            });
        });
}

fillInHeaderTableWeather(dataWeather);
fillInTableWeather(dataWeather);