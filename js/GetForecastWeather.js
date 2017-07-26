// get forecast weather in place which user type-in search-form
autocomplete.addListener("place_changed", function () {
    var placeResult = autocomplete.getPlace().formatted_address;

    find(placeResult, function(coords){
        query(coords).addEventListener("load", function () {
            console.log(dataWeather.current.condition.text);






        });
    });
});