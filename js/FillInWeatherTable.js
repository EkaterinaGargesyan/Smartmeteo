"use strict";

function addTextNode(text, cell) {
    if(cell.firstChild.nodeType !== 3){
        cell.insertBefore(document.createTextNode(text), cell.firstChild);
    } else {
        cell.replaceChild(document.createTextNode(text), cell.firstChild)
    }
}

// Get weather data in header table for 5 days
function getDataForHeaderTableWeather(data, cell, i, indexDay) {
    var dataWeatherInDay = data.forecast.forecastday[indexDay].day;

    switch(i){
        case 0:
            if(!cell.firstElementChild.innerText){
                cell.firstElementChild.appendChild(document.createTextNode(getDate(data, indexDay)));
            }
            break;
        case 1:
            setIconStateOfWeather(
                dataWeatherInDay.condition.code,
                `.js-icon-header-table-${indexDay +1}`,
                12
            );
            break;
        case 2:
            addTextNode(dataWeatherInDay.maxtemp_c, cell);
            break;
        case 3:
            addTextNode(dataWeatherInDay.mintemp_c, cell);
            break;
    }
}

// Get weather data in table for 5 days
function getDataForTableWeather(data, cell, i, indexDay, indexRow) {
    var hours = [5, 11, 17, 23];
    var dataWeatherInHour = data.forecast.forecastday[indexDay].hour[hours[indexRow]];

    switch(i){
        case 0:
            break;
        case 1:
            setIconStateOfWeather(
                dataWeatherInHour.condition.code,
                `.js-icon-table-${indexDay +1}-${indexRow +1}`,
                hours[indexRow]
            );
            break;
        case 2:
            addTextNode(dataWeatherInHour.temp_c, cell);
            break;
        case 3:
            addTextNode(dataWeatherInHour.feelslike_c, cell);
            break;
    }
}

// Set weather data in table for 5 days
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
