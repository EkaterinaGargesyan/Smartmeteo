function getDataForHeaderTableWeather(data, cell, i, indexDay) {
    var dataWeatherInDay = data.forecast.forecastday[indexDay].day;

    switch (i){
        case 0:
            cell.firstElementChild.appendChild(document.createTextNode(getDate(data, indexDay)));
            break;
        case 1:
            renderIconStateOfWeather(dataWeatherInDay.condition.code, `.js-icon-header-table-${indexDay +1}`);
            break;
        case 2:
            cell.insertBefore(
                document.createTextNode(dataWeatherInDay.avgtemp_c),
                cell.firstChild
            );
            break;
        case 3:
            cell.insertBefore(
                document.createTextNode(dataWeatherInDay.mintemp_c),
                cell.firstChild
            );
            break;
    }
}
function getDataForTableWeather(data, cell, i, indexDay, indexRow) {
    var hours = [5, 11, 17, 23];
    var dataWeatherInHour = data.forecast.forecastday[indexDay].hour[hours[indexRow]];

    switch (i){
        case 0:
            break;
        case 1:
            renderIconStateOfWeather(dataWeatherInHour.condition.code, `.js-icon-table-${indexDay +1}-${indexRow +1}`);
            break;
        case 2:
            cell.insertBefore(
                document.createTextNode(dataWeatherInHour.temp_c),
                cell.firstChild
            );
            break;
        case 3:
            cell.insertBefore(
                document.createTextNode(dataWeatherInHour.feelslike_c),
                cell.firstChild
            );
            break;
    }
}

function fillInTableWeather(data, tableArray) {
    document
        .querySelectorAll(tableArray)
        .forEach(function (table, indexDay) {

            if(table.firstElementChild.children.length === 1){
                var cellArray = table.firstElementChild.firstElementChild.children;

                [].forEach.call(cellArray, function (cell, i) {
                    getDataForHeaderTableWeather(data, cell, i, indexDay);
                }, indexDay);

            } else {
                [].forEach.call(table.firstElementChild.children, function (row, indexRow) {
                    [].forEach.call(row.children, function (cell, i) {
                        getDataForTableWeather(data, cell, i, indexDay, indexRow);
                    }, indexDay, indexRow);
                });
            }
        });
}
